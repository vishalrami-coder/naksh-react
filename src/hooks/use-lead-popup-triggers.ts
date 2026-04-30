import { useEffect, useRef, useCallback } from "react";

export function useLeadPopupTriggers(onTrigger: () => void, isAlreadyOpen: boolean) {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearTimers = useCallback(() => {
    if (intervalRef.current) { clearInterval(intervalRef.current); intervalRef.current = null; }
    if (timeoutRef.current) { clearTimeout(timeoutRef.current); timeoutRef.current = null; }
  }, []);

  const startAutoOpen = useCallback((delayMs: number, repeatMs: number) => {
    clearTimers();
    // First open after delayMs, then repeat every repeatMs
    timeoutRef.current = setTimeout(() => {
      onTrigger();
      intervalRef.current = setInterval(() => {
        onTrigger();
      }, repeatMs);
    }, delayMs);
  }, [onTrigger, clearTimers]);

  useEffect(() => {
    const dismissedAt = sessionStorage.getItem("leadPopupDismissedAt");
    if (dismissedAt) {
      const elapsed = Date.now() - parseInt(dismissedAt, 10);
      const remaining = Math.max(0, 60000 - elapsed);
      startAutoOpen(remaining, 60000);
    } else {
      startAutoOpen(10000, 10000);
    }

    return () => { clearTimers(); };
  }, [startAutoOpen, clearTimers]);

  return {
    onDismiss: () => {
      sessionStorage.setItem("leadPopupDismissedAt", Date.now().toString());
      startAutoOpen(60000, 60000);
    }
  };
}
