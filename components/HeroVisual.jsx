"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { useRef } from "react";
import * as THREE from "three";
import { useMediaQuery } from "@/hooks/useMediaQuery";

function OrbitalRings() {
  const groupRef = useRef(null);

  useFrame((_, delta) => {
    const g = groupRef.current;
    if (!g) return;
    g.rotation.z += delta * 0.05;
    g.rotation.x = Math.sin(g.rotation.z * 0.4) * 0.12;
  });

  const radii = [1.45, 1.78, 2.08];
  return (
    <group ref={groupRef}>
      {radii.map((r, i) => (
        <mesh
          key={r}
          rotation={[Math.PI / 2.2 + i * 0.25, i * 0.55, i * 0.2]}
        >
          <torusGeometry args={[r, 0.022, 16, 96]} />
          <meshStandardMaterial
            color="#71717a"
            emissive="#f4f4f5"
            emissiveIntensity={0.22 + i * 0.06}
            metalness={0.95}
            roughness={0.28}
          />
        </mesh>
      ))}
    </group>
  );
}

function AuraCore() {
  const meshRef = useRef(null);

  useFrame((state, delta) => {
    const m = meshRef.current;
    if (!m) return;
    m.rotation.y += delta * 0.09;
    m.rotation.x = Math.sin(state.clock.elapsedTime * 0.35) * 0.08;
  });

  return (
    <Float speed={1.8} rotationIntensity={0.25} floatIntensity={0.45}>
      <mesh ref={meshRef} scale={1.12}>
        <icosahedronGeometry args={[1, 2]} />
        <MeshDistortMaterial
          color="#e4e4e7"
          emissive="#a1a1aa"
          emissiveIntensity={0.45}
          metalness={0.9}
          roughness={0.16}
          distort={0.32}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

function Scene({ isMobile }) {
  const sparkles = isMobile ? 22 : 70;

  return (
    <>
      <color attach="background" args={["#000000"]} />
      <fogExp2 attach="fog" args={["#020202", isMobile ? 0.045 : 0.038]} />

      <ambientLight intensity={isMobile ? 0.42 : 0.35} />
      <pointLight position={[4, 2, 5]} intensity={1.1} color="#fafafa" />
      <pointLight position={[-4, -1, 4]} intensity={0.55} color="#d4d4d8" />
      <pointLight position={[0, 4, -3]} intensity={0.35} color="#a1a1aa" />

      <OrbitalRings />
      <AuraCore />

      <Sparkles
        count={sparkles}
        scale={[8, 8, 8]}
        size={isMobile ? 2.2 : 2.8}
        speed={0.25}
        opacity={0.4}
        color="#ffffff"
      />

      {!isMobile ? (
        <EffectComposer enableNormalPass={false}>
          <Bloom
            luminanceThreshold={0.35}
            luminanceSmoothing={0.85}
            intensity={0.85}
            mipmapBlur
            radius={0.55}
          />
        </EffectComposer>
      ) : null}
    </>
  );
}

export default function HeroVisual() {
  const isMobile = useMediaQuery("(max-width: 640px)", false);

  return (
    <div className="relative h-full min-h-[260px] w-full sm:min-h-[340px] md:min-h-[min(72vh,720px)]">
      <Canvas
        className="touch-none"
        camera={{ position: [0, 0.15, 6.4], fov: isMobile ? 38 : 36 }}
        dpr={isMobile ? [1, 1.25] : [1, 2]}
        gl={{
          alpha: false,
          antialias: true,
          powerPreference: "high-performance",
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: isMobile ? 1 : 1.05,
        }}
        onCreated={({ gl, scene }) => {
          gl.setClearColor("#000000", 1);
          scene.background = new THREE.Color("#000000");
        }}
      >
        <Scene isMobile={isMobile} />
      </Canvas>
    </div>
  );
}
