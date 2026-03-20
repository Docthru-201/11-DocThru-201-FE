'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// 회원가입 페이지와 동일한 경로 패턴의 스키마와 훅 불러오기
import { loginSchema } from '@/features/auth/schema/auth.schema';
import { useLogin } from '@/features/auth/hooks/useLogin'; // 로그인 훅이 있다고 가정

import * as s from './login.css'; // 스타일 재사용

export default function LoginPage() {
  const router = useRouter();
  const { login, isPending } = useLogin(); // useSignup과 동일한 구조

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(loginSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data) => {
    login(data); // 로그인 실행
  };

  const handleGoogleLogin = () => {
    const CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
    const REDIRECT_URI = `${window.location.origin}/auth/google/callback`; // 우리가 만들 콜백 주소

    // 구글 인증 페이지 주소 (인가 코드를 받기 위함)
    const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=email profile`;

    window.location.href = GOOGLE_AUTH_URL;
  };
  return (
    <main className={s.container}>
      {/* 로고 */}
      <div className={s.logoWrapper}>
        <Image
          src="/images/img_logo.png"
          alt="Docthru 로고"
          width={320}
          height={72}
          priority
          style={{ objectFit: 'contain' }}
        />
      </div>

      {/* 로그인 폼 */}
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        {/* 이메일 */}
        <div className={s.inputGroup}>
          <label className={s.label}>이메일</label>
          <input
            type="email"
            placeholder="이메일을 입력해주세요"
            className={s.input}
            {...register('email')}
          />
          {errors.email && (
            <p className={s.errorMessage}>{errors.email.message}</p>
          )}
        </div>

        {/* 비밀번호 */}
        <div className={s.inputGroup}>
          <label className={s.label}>비밀번호</label>
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            className={s.input}
            {...register('password')}
          />
          {errors.password && (
            <p className={s.errorMessage}>{errors.password.message}</p>
          )}
        </div>

        {/* 로그인 버튼 */}
        <button
          type="submit"
          className={s.submitButton}
          disabled={!isValid || isPending}
        >
          {isPending ? '로그인 중...' : '로그인하기'}
        </button>

        {/* 구글 로그인 버튼 */}
        <button
          type="button"
          className={s.googleButton}
          onClick={handleGoogleLogin}
        >
          <Image
            src="/images/google_icon.png"
            alt="google"
            width={20}
            height={20}
          />
          구글로 시작하기
        </button>
      </form>

      {/* 하단 회원가입 이동 */}
      <footer className={s.footer}>
        <span>계정이 없으신가요?</span>
        <button
          type="button"
          className={s.signupLink}
          onClick={() => router.push('/signup')}
        >
          회원가입하기
        </button>
      </footer>
    </main>
  );
}
