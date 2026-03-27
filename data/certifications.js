/** Certificados en /public/certificates/ (.png). Orden: cronológico (más antiguo → más reciente). */

export const certifications = [
  {
    id: "sql-mysql",
    title:         "SQL / MySQL",
    titleEn:       "SQL / MySQL",
    issuer:        "CODERHOUSE",
    year:          "2022",
    description:   "Consultas, análisis de datos y estructuras para proyectos de desarrollo y reporting con precisión.",
    descriptionEn: "Queries, data analysis, and structures for development projects and precision reporting.",
    certificateUrl: "/certificates/sql-mysql.png",
  },
  {
    id: "html-css-js-react",
    title:         "HTML, CSS, JS & React",
    titleEn:       "HTML, CSS, JS & React",
    issuer:        "CODEAROCK",
    year:          "2023-2024",
    description:   "Trabajé con etiquetas y semántica, estilos y estructuras, maquetación, landings y proyectos web con fundamentos y React.",
    descriptionEn: "Worked with semantic markup, styles and structure, layouts, landing pages, and web projects using fundamentals and React.",
    certificateUrl: "/certificates/html-css-js-react.png",
  },
  {
    id: "photoshop-illustrator",
    title:         "Photoshop e Illustrator",
    titleEn:       "Photoshop & Illustrator",
    issuer:        "CODERHOUSE",
    year:          "2024",
    description:   "Piezas visuales, retoque, ilustración y entregas con calidad profesional en cada proyecto.",
    descriptionEn: "Visual pieces, retouching, illustration, and professional-quality deliverables for every project.",
    certificateUrl: "/certificates/photoshop-illustrator.png",
  },
  {
    id: "ux-ui",
    title:         "Diseño UX/UI",
    titleEn:       "UX/UI Design",
    issuer:        "CODERHOUSE",
    year:          "2024",
    description:   "Recorrí todo el proceso de diseño, desde la investigación hasta prototipos funcionales que convierten ideas en productos digitales.",
    descriptionEn: "Covered the full design process, from research to functional prototypes that turn ideas into digital products.",
    certificateUrl: "/certificates/ux-ui.png",
  },
  {
    id: "ux-ui-avanzado",
    title:         "Diseño UX/UI Avanzado",
    titleEn:       "Advanced UX/UI Design",
    issuer:        "CODERHOUSE",
    year:          "2024",
    description:   "Profundicé en UX/UI con una propuesta web completa: investigación, prototipado y proyecto final aplicable a entornos tech reales.",
    descriptionEn: "Deepened UX/UI skills with a complete web proposal: research, prototyping, and a final project applicable to real tech environments.",
    certificateUrl: "/certificates/ux-ui-avanzado.png",
  },
  {
    id: "desarrollo-web",
    title:         "Desarrollo web",
    titleEn:       "Web Development",
    issuer:        "CODERHOUSE",
    year:          "2025",
    description:   "HTML, CSS y bases de JavaScript para sitios responsive, buenas prácticas front y una experiencia de usuario fluida.",
    descriptionEn: "HTML, CSS, and JavaScript fundamentals for responsive sites, front-end best practices, and a smooth user experience.",
    certificateUrl: "/certificates/desarrollo-web.png",
  },
];

/** Centros más separados (~180px entre índices) para leer títulos; índice 0 = más antiguo (izquierda) */
export const certTransformStylesDesktop = [
  "rotate(5deg) translateX(-455px)",
  "rotate(4deg) translateX(-273px)",
  "rotate(-1deg) translateX(-91px)",
  "rotate(1deg) translateX(91px)",
  "rotate(-4deg) translateX(273px)",
  "rotate(5deg) translateX(455px)",
];

export const certTransformStylesTablet = [
  "rotate(4deg) translateX(-310px)",
  "rotate(3deg) translateX(-186px)",
  "rotate(-1deg) translateX(-62px)",
  "rotate(1deg) translateX(62px)",
  "rotate(-3deg) translateX(186px)",
  "rotate(4deg) translateX(310px)",
];
