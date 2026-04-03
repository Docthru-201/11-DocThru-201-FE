'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { signupSchema } from '@/features/auth/schema/auth.schema';
import { useSignup } from '@/features/auth/hooks/useSignup';

import Link from 'next/link'; // Next.js의 Link 컴포넌트
import { Icon } from '@/shared/components/Icon';
import { BASE_URL } from '@/apis/common';
import * as s from './signup.css';

export default function SignupPage() {
  const router = useRouter();
  const { signupAsync, isPending, isSuccess } = useSignup();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    resolver: zodResolver(signupSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      nickname: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data) => {
    const { confirmPassword: _confirmPassword, ...payload } = data;
    await signupAsync(payload);
  };

  const handleGoogleLogin = () => {
    window.location.href = `${BASE_URL}/auth/google/login`;
  };

  return (
    <main className={s.container}>
      {/* 로고 영역 */}
      <Link href="/challenges" className={s.logoBlock}>
        <span className={s.logo} aria-hidden="true">
          {/* 주신 수치 반영 (약 47x54 px) */}
          <Icon
            name="docthruLogo"
            width={46.8} // 2.925 * 16
            height={54} // 3.375 * 16
          />
          Docthru
        </span>
      </Link>

      {/* 회원가입 폼 */}
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

        {/* 닉네임 */}
        <div className={s.inputGroup}>
          <label className={s.label}>닉네임</label>
          <input
            type="text"
            placeholder="닉네임을 입력해주세요"
            className={s.input}
            {...register('nickname')}
          />
          {errors.nickname && (
            <p className={s.errorMessage}>{errors.nickname.message}</p>
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
              autoComplete="new-password"
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

        {/* 비밀번호 확인 */}
        <div className={s.inputGroup}>
          <label className={s.label}>비밀번호 확인</label>
          <div className={s.passwordField}>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="비밀번호를 한번 더 입력해주세요"
              className={`${s.input} ${s.inputWithToggle}`}
              autoComplete="new-password"
              {...register('confirmPassword')}
            />
            <button
              type="button"
              className={s.passwordToggle}
              onClick={() => setShowConfirmPassword((v) => !v)}
              aria-label={
                showConfirmPassword ? '비밀번호 숨기기' : '비밀번호 보기'
              }
            >
              <Icon
                name={
                  showConfirmPassword
                    ? 'passwordVisibilityOn'
                    : 'passwordVisibilityOff'
                }
                width={22}
                height={22}
                aria-hidden
              />
            </button>
          </div>
          {errors.confirmPassword && (
            <p className={s.errorMessage}>{errors.confirmPassword.message}</p>
          )}
        </div>

        {/* 가입하기 버튼 - disable 추가함 */}
        <button
          type="submit"
          className={s.submitButton}
          disabled={!isValid || isSubmitting || isPending || isSuccess}
        >
          {isPending || isSubmitting || isSuccess ? '처리 중...' : '가입하기'}
        </button>

        <button
          type="button"
          className={s.googleButton}
          onClick={handleGoogleLogin}
        >
          <Image src="/icons/login-google.svg" alt="" width={28} height={28} />
          Google로 시작하기
        </button>
      </form>

      {/* 하단 로그인 */}
      <footer className={s.footer}>
        <span>회원이신가요?</span>
        <button
          type="button"
          className={s.loginLink}
          onClick={() => router.push('/login')}
        >
          로그인하기
        </button>
      </footer>
    </main>
  );
}
