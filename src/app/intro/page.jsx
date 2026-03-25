'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const LAST_INTRO_KEY = 'lastIntro';
const INTRO_REPLAY_INTERVAL_MS = 24 * 60 * 60 * 1000;

function shouldPlayIntro() {
  if (typeof window === 'undefined') return false;
  const raw = localStorage.getItem(LAST_INTRO_KEY);
  const lastIntroAt = Number(raw);

  if (!raw || Number.isNaN(lastIntroAt)) return true;
  return Date.now() - lastIntroAt >= INTRO_REPLAY_INTERVAL_MS;
}

export default function IntroPage() {
  const router = useRouter();
  const [videoError, setVideoError] = useState(false);
  const needIntro = shouldPlayIntro();

  const handleIntroDone = () => {
    localStorage.setItem(LAST_INTRO_KEY, String(Date.now()));
    router.replace('/');
  };

  useEffect(() => {
    if (!needIntro) {
      router.replace('/');
    }
  }, [needIntro, router]);

  if (!needIntro) return null;

  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: '#171717',
        position: 'relative',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      {videoError ? (
        <div
          style={{
            width: '100vw',
            height: '100vh',
            background: '#0A0A0A',
            color: '#F1F2F5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 16,
          }}
        >
          인트로 영상을 불러오지 못했습니다.
        </div>
      ) : (
        <video
          src="/videos/docthru-intro.mp4"
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={handleIntroDone}
          onError={() => setVideoError(true)}
          style={{
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
            display: 'block',
            background: '#000',
          }}
        />
      )}
    </main>
  );
}
