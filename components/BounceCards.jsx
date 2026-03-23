"use client";

import {
  Children,
  cloneElement,
  isValidElement,
  useRef,
  useState,
} from "react";
import { motion, useInView } from "framer-motion";

const SPRING_FAN = { type: "spring", stiffness: 420, damping: 34, mass: 0.9 };
const SPRING_ENTRY = {
  type: "spring",
  stiffness: 420,
  damping: 17,
  mass: 0.82,
};

/**
 * Abanico de tarjetas. Con `enableHover`, al pasar el mouse las demás se corren en X
 * y la activa escala y sube en z-index para leerla mejor.
 */
export default function BounceCards({
  className = "",
  children,
  images,
  containerWidth = 500,
  containerHeight = 250,
  animationDelay = 0,
  animationStagger = 0.08,
  easeType: _easeType,
  transformStyles = [],
  enableHover = false,
  hoverSpreadPx = 32,
}) {
  const rootRef = useRef(null);
  const [hovered, setHovered] = useState(null);
  const inView = useInView(rootRef, {
    once: true,
    amount: 0.1,
    margin: "0px 0px -32px 0px",
  });

  const kids = images?.length
    ? images.map((src, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={`${src}-${i}`}
          src={src}
          alt=""
          className="h-full max-h-[220px] w-auto max-w-[200px] rounded-xl object-cover shadow-lg"
          draggable={false}
        />
      ))
    : Children.toArray(children);

  const w =
    typeof containerWidth === "number" ? `${containerWidth}px` : containerWidth;
  const h =
    typeof containerHeight === "number"
      ? `${containerHeight}px`
      : containerHeight;

  const spreadFor = (i) => {
    if (!enableHover || hovered === null || hovered === i) return 0;
    return (i - hovered) * hoverSpreadPx;
  };

  const zFor = (i) => {
    if (!enableHover || hovered === null) return 10 + i;
    return hovered === i ? 60 : 5 + i;
  };

  return (
    <div
      ref={rootRef}
      className={className}
      style={{
        position: "relative",
        width: w,
        maxWidth: "100%",
        height: h,
        marginLeft: "auto",
        marginRight: "auto",
      }}
      onPointerLeave={() => enableHover && setHovered(null)}
    >
      {kids.map((child, i) => {
        const withHover =
          enableHover && isValidElement(child)
            ? cloneElement(child, {
                onPointerEnter: (e) => {
                  child.props.onPointerEnter?.(e);
                  setHovered(i);
                },
              })
            : child;

        return (
          <motion.div
            key={i}
            className="pointer-events-auto absolute left-1/2 top-1/2"
            initial={false}
            animate={{
              transform: `translate(-50%, -50%) ${transformStyles[i] ?? ""} translateX(${spreadFor(i)}px)`,
              zIndex: zFor(i),
            }}
            transition={SPRING_FAN}
            style={{ transformOrigin: "center center" }}
          >
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: inView ? 1 : 0,
                opacity: inView ? 1 : 0,
              }}
              transition={{
                ...SPRING_ENTRY,
                delay: animationDelay + i * animationStagger,
              }}
              className="origin-center will-change-transform"
            >
              {withHover}
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}
