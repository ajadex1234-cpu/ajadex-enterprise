"use client";

import { useCallback, useEffect, useState } from "react";

type EmbedState = "loading" | "embedded" | "blocked";

const EMBED_TIMEOUT_MS = 4500;

/** Tracks iframe load success vs likely X-Frame-Options blocks. */
export function useIframeEmbed(url: string | null, enabled = true) {
  const [state, setState] = useState<EmbedState>("loading");

  useEffect(() => {
    if (!enabled || !url) {
      const blockedTimer = window.setTimeout(() => {
        setState("blocked");
      }, 0);

      return () => window.clearTimeout(blockedTimer);
    }

    const loadingTimer = window.setTimeout(() => {
      setState("loading");
    }, 0);

    const timer = window.setTimeout(() => {
      setState((current) => (current === "loading" ? "blocked" : current));
    }, EMBED_TIMEOUT_MS);

    return () => {
      window.clearTimeout(loadingTimer);
      window.clearTimeout(timer);
    };
  }, [enabled, url]);

  const onLoad = useCallback(() => {
    setState("embedded");
  }, []);

  const markBlocked = useCallback(() => {
    setState("blocked");
  }, []);

  return {
    state,
    isLoading: state === "loading",
    isEmbedded: state === "embedded",
    isBlocked: state === "blocked",
    onLoad,
    markBlocked,
  };
}
