"use client";

import { useCallback, useEffect, useState } from "react";

type UseRotatingIndexOptions = {
  intervalMs?: number;
  autoplay?: boolean;
};

export function useRotatingIndex(
  length: number,
  options: UseRotatingIndexOptions = {},
) {
  const { intervalMs = 6000, autoplay = true } = options;
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback(
    (nextIndex: number) => {
      if (length <= 0) {
        return;
      }

      const normalized = ((nextIndex % length) + length) % length;
      setIndex(normalized);
    },
    [length],
  );

  const goNext = useCallback(() => {
    goTo(index + 1);
  }, [goTo, index]);

  const goPrevious = useCallback(() => {
    goTo(index - 1);
  }, [goTo, index]);

  const pause = useCallback(() => setIsPaused(true), []);
  const resume = useCallback(() => setIsPaused(false), []);

  useEffect(() => {
    if (!autoplay || isPaused || length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % length);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [autoplay, intervalMs, isPaused, length]);

  return {
    index: length > 0 ? index : 0,
    goTo,
    goNext,
    goPrevious,
    setIndex: goTo,
    isPaused,
    pause,
    resume,
  };
}
