"use client";

import { useEffect, useState } from "react";

/**
 * @param {string} query - e.g. "(max-width: 767px)"
 * @param {boolean} [defaultState=false]
 */
export function useMediaQuery(query, defaultState = false) {
  const [matches, setMatches] = useState(defaultState);

  useEffect(() => {
    const mq = window.matchMedia(query);
    const update = () => setMatches(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [query]);

  return matches;
}
