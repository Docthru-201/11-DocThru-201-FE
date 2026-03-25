'use client';

import { useEffect, useState } from 'react';
import { useLandingIntroPhase } from '@/shared/hooks/useIntroPhase';
import Image from 'next/image';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { GNBContainer } from '@/shared/components/GNB/GNBContainer';
import { Button, Icon } from '@/shared/components';
import { useAuthStore } from '@/shared/store/useAuthStore';
import * as styles from './page.css';

const heroBackground = '/images/hero-background.png';
const landingImg1 = '/images/landing-challenge.png';
const landingImg2 = '/images/landing-translation.png';
const landingImg3 = '/images/landing-feedback.png';

const HERO_HEADLINE = `함께 번역하며 성장하는\n개발자의 새로운 영어 습관`;

const SECTIONS = [
  {
    id: 'challenge',
    icon: 'landingTrophy',
    title: '혼자서는 막막했던 번역,\n챌린지로 함께 완성하기',
    description:
      '중요한 건 꺾이지 않는 마음! 동료들과 함께\n기술 문서를 번역해 보세요.',
    image: landingImg1,
    imageWidth: 800,
    imageHeight: 600,
    alt: '참여중인 챌린지 리스트 이미지',
  },
  {
    id: 'participate',
    icon: 'landingHeart',
    title: '내가 좋아하는 기술 번역,\n내가 필요한 기술 번역',
    description:
      '이미 진행 중인 번역 챌린지에 참여하거나,\n새로운 번역 챌린지를 시작해 보세요.',
    image: landingImg2,
    imageWidth: 800,
    imageHeight: 600,
    alt: '챌린지 참석 현황 및 작업 도전하기 이미지',
  },
  {
    id: 'feedback',
    icon: 'landingFeedback',
    title: '피드백으로 함께 성장하기',
    description:
      '번역 작업물에 대해 피드백을 주고 받으며\n영어 실력은 물론, 개발 실력까지 키워 보세요',
    image: landingImg3,
    imageWidth: 800,
    imageHeight: 600,
    alt: '작업물에 대한 피드백 이미지',
  },
];

export default function LandingPage() {
  const router = useRouter();
  const user = useAuthStore((s) => s.user);
  const introPhase = useLandingIntroPhase();
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleClick = () => {
    if (user) {
      router.push('/challenges');
      return;
    }
    toast.error('로그인 후 이용해주세요.');
    router.push('/login');
  };

  useEffect(() => {
    if (introPhase === 'intro') {
      router.replace('/intro');
    }
  }, [introPhase, router]);

  useEffect(() => {
    if (introPhase !== 'land') return;
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 1);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [introPhase]);

  if (introPhase === 'unknown' || introPhase === 'intro') return null;

  return (
    <>
      <div className={styles.page}>
        <GNBContainer />

        <section className={styles.hero}>
          <Image
            src={heroBackground}
            alt="히어로 배경 이미지"
            fill
            priority
            className={styles.heroImage}
            sizes="100vw"
          />
          <div className={styles.heroContent}>
            <span className={styles.heroLogo} aria-hidden>
              <Icon name="docthruLogo" width={28} height={28} aria-hidden />
              Docthru
            </span>
            <h1 className={styles.heroHeadline}>{HERO_HEADLINE}</h1>
            <Button
              variant="outline"
              className={styles.heroCtaWrap}
              onClick={handleClick}
            >
              번역 시작하기
            </Button>
          </div>
        </section>

        <main className={styles.main}>
          {SECTIONS.map((section) => (
            <div key={section.id}>
              <article className={styles.section}>
                <div className={styles.sectionContent}>
                  <span className={styles.sectionIcon} aria-hidden>
                    <Icon
                      name={section.icon}
                      width={24}
                      height={24}
                      aria-hidden
                    />
                  </span>
                  <h2 className={styles.sectionTitle}>{section.title}</h2>
                  <p className={styles.sectionDescription}>
                    {section.description}
                  </p>
                </div>

                <Image
                  src={section.image}
                  alt={section.alt}
                  className={styles.sectionImage}
                  width={section.imageWidth ?? 800}
                  height={section.imageHeight ?? 600}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </article>

              {section.id !== 'feedback' && <hr className={styles.divider} />}
            </div>
          ))}

          <div className={styles.ctaBlock}>
            <h2 className={styles.ctaTitle}>함께 번역하고 성장하세요!</h2>
            <Button variant="solid" onClick={handleClick}>
              번역 시작하기
            </Button>
          </div>
        </main>

        <footer className={styles.footer}>
          <div className={styles.footerInner}>
            <div className={styles.footerTop}>
              <div className={styles.footerBrand}>
                <span className={styles.footerLogo}>
                  <Icon name="docthruLogo" width={24} height={24} aria-hidden />
                  Docthru
                </span>
                <p className={styles.footerText}>
                  개발자를 위한 번역 챌린지 플랫폼
                  <br />
                  함께 번역하고, 함께 성장하세요.
                </p>
              </div>
            </div>

            <hr className={styles.footerDivider} />

            <div className={styles.footerBottom}>
              <p className={styles.footerCopyright}>
                © 2026 Docthru. All rights reserved.
              </p>
              <p className={styles.footerCopyright}>
                Made for developers, by developers.
              </p>
            </div>
          </div>
        </footer>
      </div>

      <button
        type="button"
        className={
          showScrollTop
            ? `${styles.scrollToTopButton} ${styles.scrollToTopButtonVisible}`
            : styles.scrollToTopButton
        }
        aria-label="맨 위로 이동"
        onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}
      >
        <span className={styles.scrollToTopIcon} aria-hidden>
          <Icon name="arrowCircleRight" width={24} height={24} aria-hidden />
        </span>
      </button>
    </>
  );
}
