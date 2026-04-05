const intentKey = (challengeId, workId) =>
  `work-editor-forward:${challengeId}:${workId}`;

/** 앱에서 mark 후 라우팅·Strict Mode 이중 마운트까지 커버 */
const INTENT_TTL_MS = 30_000;

/**
 * 챌린지 상세 → (작업 상세) → 에디터 흐름에서, 에디터는 앱에서 `router.push` 직전에
 * `markWorkEditorForwardIntent`를 호출한 경우에만 열립니다.
 * 주소 직접 입력·뒤로가기 등으로 들어오면 챌린지 상세로 보냅니다.
 */
export function markWorkEditorForwardIntent(challengeId, workId) {
  if (typeof window === 'undefined' || !challengeId || !workId) return;
  try {
    sessionStorage.setItem(intentKey(challengeId, workId), String(Date.now()));
  } catch {
    /* ignore quota / private mode */
  }
}

export function peekWorkEditorForwardIntent(challengeId, workId) {
  if (typeof window === 'undefined' || !challengeId || !workId) return false;
  try {
    const raw = sessionStorage.getItem(intentKey(challengeId, workId));
    if (raw == null) return false;
    if (raw === '1') return true;
    const ts = parseInt(raw, 10);
    if (!Number.isFinite(ts)) return false;
    const age = Date.now() - ts;
    return age >= 0 && age <= INTENT_TTL_MS;
  } catch {
    return false;
  }
}

export function consumeWorkEditorForwardIntent(challengeId, workId) {
  if (typeof window === 'undefined' || !challengeId || !workId) return false;
  try {
    const k = intentKey(challengeId, workId);
    if (sessionStorage.getItem(k) != null) {
      sessionStorage.removeItem(k);
      return true;
    }
  } catch {
    /* ignore */
  }
  return false;
}
