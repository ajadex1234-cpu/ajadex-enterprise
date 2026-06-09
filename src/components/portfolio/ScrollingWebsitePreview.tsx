"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/utils/cn";

type ScrollingWebsitePreviewProps = {
  src: string;
  alt: string;
  active?: boolean;
  priority?: boolean;
  className?: string;
  sizes?: string;
  durationMultiplier?: number;
};

export function ScrollingWebsitePreview({
  src,
  alt,
  active = false,
  priority = false,
  className,
  sizes = "(max-width: 768px) 100vw, 33vw",
  durationMultiplier = 0.006,
}: ScrollingWebsitePreviewProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [naturalSize, setNaturalSize] = useState({ width: 1600, height: 3600 });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const node = containerRef.current;
    if (!node) {
      return;
    }

    const updateSize = () => {
      setContainerSize({
        width: node.clientWidth,
        height: node.clientHeight,
      });
    };

    updateSize();
    const observer = new ResizeObserver(updateSize);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const onImageLoad = useCallback((image: HTMLImageElement) => {
    setNaturalSize({
      width: image.naturalWidth || 1600,
      height: image.naturalHeight || 3600,
    });
  }, []);

  const { translateY, duration } = useMemo(() => {
    const renderedHeight =
      containerSize.width > 0
        ? (containerSize.width * naturalSize.height) / naturalSize.width
        : 0;
    const distance = Math.max(0, renderedHeight - containerSize.height);

    return {
      translateY: -distance,
      duration: Math.min(28, Math.max(7, distance * durationMultiplier)),
    };
  }, [containerSize, durationMultiplier, naturalSize]);

  return (
    <div ref={containerRef} className={cn("relative h-full w-full", className)}>
      <motion.div
        animate={{
          y: active && !shouldReduceMotion ? translateY : 0,
        }}
        transition={{
          duration: active ? duration : 1.2,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="absolute left-0 top-0 w-full will-change-transform"
      >
        <Image
          src={src}
          alt={alt}
          width={1600}
          height={4200}
          sizes={sizes}
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTYnIGhlaWdodD0nMTYnIHZpZXdCb3g9JzAgMCAxNiAxNicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cmVjdCB3aWR0aD0nMTYnIGhlaWdodD0nMTYnIGZpbGw9JyMwNzA3MDcnLz48Y2lyY2xlIGN4PSc4JyBjeT0nNCcgcj0nOCcgZmlsbD0nIzA2NDQzMicgZmlsbC1vcGFjaXR5PScuNTUnLz48Y2lyY2xlIGN4PScxMicgY3k9JzEyJyByPSc3JyBmaWxsPScjNzg0MzA1JyBmaWxsLW9wYWNpdHk9Jy40NScvPjwvc3ZnPg=="
          onLoadingComplete={onImageLoad}
          className="h-auto w-full select-none object-top"
        />
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/35 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/55 to-transparent" />
    </div>
  );
}
