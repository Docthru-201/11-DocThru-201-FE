import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
} from 'remotion';

const BRAND_BG = 'var(--color-gray-800, #262626)';
const BRAND_POINT = 'var(--color-brand-point, #FFC117)';
const BRAND_TEXT = 'var(--color-brand-text, #F1F2F5)';
const BRAND_SUBTEXT = 'var(--color-gray-300, #CFCFCF)';

const FONT_PRETENDARD =
  'var(--font-pretendard), Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif';
const FONT_QUANTICO =
  'var(--font-quantico), Quantico, -apple-system, BlinkMacSystemFont, system-ui, sans-serif';

export const DocthruIntro = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoScale = spring({
    fps,
    frame,
    config: {
      damping: 200,
      stiffness: 180,
      mass: 0.9,
    },
  });

  const logoOpacity = interpolate(frame, [0, 12], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const wordOpacity = interpolate(frame, [18, 44], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const subtitleOpacity = interpolate(frame, [34, 56], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const chipOpacity = interpolate(frame, [46, 70], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const outroOpacity = interpolate(frame, [96, 118], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const logoTranslateY = interpolate(frame, [0, 16], [24, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const titleTranslateY = interpolate(frame, [16, 36], [20, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const subtitleTranslateY = interpolate(frame, [32, 54], [16, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const chipTranslateY = interpolate(frame, [46, 68], [14, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const bgGlowOpacity = interpolate(
    frame,
    [0, 24, 95, 120],
    [0.15, 0.32, 0.32, 0],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    },
  );
  const logoGlowOpacity = interpolate(
    frame,
    [0, 22, 72, 120],
    [0, 0.3, 0.22, 0],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    },
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: BRAND_BG,
        opacity: outroOpacity,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <AbsoluteFill
        style={{
          background:
            'radial-gradient(circle at center, rgba(255, 193, 23, 0.15) 0%, rgba(255, 193, 23, 0.03) 35%, rgba(38, 38, 38, 0) 72%)',
          opacity: bgGlowOpacity,
        }}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 14,
          transform: `scale(${0.85 + logoScale * 0.15}) translateY(${logoTranslateY}px)`,
          opacity: logoOpacity,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 18,
            transform: `translateY(${titleTranslateY}px)`,
            opacity: wordOpacity,
          }}
        >
          <div
            style={{
              position: 'relative',
              width: 82,
              height: 96,
            }}
          >
            <Img
              src={staticFile('icons/docthru-logo.svg')}
              alt="Docthru Logo"
              style={{
                width: 82,
                height: 96,
                borderRadius: 8,
                filter: 'drop-shadow(0px 3px 10px rgba(0, 0, 0, 0.22))',
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: 8,
                background:
                  'radial-gradient(circle at 45% 35%, rgba(255, 193, 23, 0.42) 0%, rgba(255, 193, 23, 0.16) 40%, rgba(255, 193, 23, 0) 78%)',
                mixBlendMode: 'screen',
                opacity: logoGlowOpacity,
                pointerEvents: 'none',
              }}
            />
          </div>
          <div
            style={{
              fontFamily: `${FONT_QUANTICO}, ${FONT_PRETENDARD}`,
              fontSize: 84,
              fontWeight: 700,
              color: BRAND_TEXT,
              letterSpacing: 0.8,
            }}
          >
            Docthru
          </div>
        </div>

        <div
          style={{
            fontFamily: FONT_PRETENDARD,
            fontSize: 24,
            fontWeight: 400,
            color: BRAND_SUBTEXT,
            opacity: subtitleOpacity,
            marginTop: -5,
            marginBottom: 16,
            transform: `translateY(${subtitleTranslateY}px)`,
            textAlign: 'center',
            lineHeight: 1.45,
            letterSpacing: -0.2,
          }}
        >
          개발 문서를 번역하며 성장하는 영어 습관
        </div>

        <div
          style={{
            marginTop: 14,
            padding: '13px 28px',
            borderRadius: 999,
            border: 'none',
            backgroundColor: BRAND_POINT,
            color: '#1F1F1F',
            fontFamily: FONT_PRETENDARD,
            fontSize: 22,
            fontWeight: 600,
            letterSpacing: -0.1,
            opacity: chipOpacity,
            transform: `translateY(${chipTranslateY}px)`,
            boxShadow: '0 6px 16px rgba(255, 193, 23, 0.28)',
          }}
        >
          번역 시작하기
        </div>
      </div>
    </AbsoluteFill>
  );
};
