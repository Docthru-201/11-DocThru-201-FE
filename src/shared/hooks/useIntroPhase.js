'use client';

import { useSyncExternalStore } from 'react';

export const LAST_INTRO_KEY = 'lastIntro';
const INTRO_REPLAY_INTERVAL_MS = 24 * 60 * 60 * 1000;

function readShouldPlayIntro() {
  const raw = localStorage.getItem(LAST_INTRO_KEY);
  const lastIntroAt = Number(raw);
  if (!raw || Number.isNaN(lastIntroAt)) return true;
  return Date.now() - lastIntroAt >= INTRO_REPLAY_INTERVAL_MS;
}

export function useLandingIntroPhase() {
  return useSyncExternalStore(
    () => () => {},
    () => (readShouldPlayIntro() ? 'intro' : 'land'),
    () => 'unknown',
  );
}

export function useIntroPagePhase() {
  return useSyncExternalStore(
    () => () => {},
    () => (readShouldPlayIntro() ? 'play' : 'skip'),
    () => 'unknown',
  );
}
