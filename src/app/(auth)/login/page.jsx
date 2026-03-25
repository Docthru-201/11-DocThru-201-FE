'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// 회원가입 페이지와 동일한 경로 패턴의 스키마와 훅 불러오기
import { loginSchema } from '@/features/auth/schema/auth.schema';
import { useLogin } from '@/features/auth/hooks/useLogin'; // 로그인 훅이 있다고 가정

import Link from 'next/link'; // Next.js의 Link 컴포넌트
import { Icon } from '@/shared/components/Icon';
import { BASE_URL } from '@/apis/common';

import * as s from './login.css'; // 스타일 재사용

export default function LoginPage() {
  const router = useRouter();
  const { login, isPending, isSuccess } = useLogin(); // useSignup과 동일한 구조
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
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
    window.location.href = `${BASE_URL}/auth/google/login`;
  };

  return (
    <main className={s.container}>
      {/* 로고 */}
      <Link href="/" className={s.logoBlock}>
        <span className={s.logo}>
          {/* 주신 수치 반영 (약 47x54 px) */}
          <Icon
            name="docthruLogo"
            width={46.8} // 2.925 * 16
            height={54} // 3.375 * 16
            aria-hidden="true"
          />
          Docthru
        </span>
      </Link>

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
          <div className={s.passwordField}>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="비밀번호를 입력해주세요"
              className={`${s.input} ${s.inputWithToggle}`}
              autoComplete="current-password"
              {...register('password')}
            />
            <button
              type="button"
              className={s.passwordToggle}
              onClick={() => setShowPassword((v) => !v)}
              aria-label={showPassword ? '비밀번호 숨기기' : '비밀번호 보기'}
            >
              <Icon
                name={
                  showPassword
                    ? 'passwordVisibilityOn'
                    : 'passwordVisibilityOff'
                }
                width={22}
                height={22}
                aria-hidden
              />
            </button>
          </div>
          {errors.password && (
            <p className={s.errorMessage}>{errors.password.message}</p>
          )}
        </div>

        {/* 로그인 버튼 */}
        <button
          type="submit"
          className={s.submitButton}
          disabled={!isValid || isPending || isSubmitting || isSuccess}
        >
          {isPending || isSubmitting || isSuccess
            ? '로그인 중...'
            : '로그인하기'}
        </button>

        {/* 구글 로그인 버튼 */}
        <button
          type="button"
          className={s.googleButton}
          onClick={handleGoogleLogin}
        >
          <Image
            src="/icons/login-google.svg"
            alt="google"
            width={28}
            height={28}
          />
          Google로 시작하기
        </button>
      </form>

      {/* 하단 회원가입 이동 */}
      <footer className={s.footer}>
        <span>회원이 아니신가요?</span>
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
