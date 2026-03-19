'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form'; // (1)
import { zodResolver } from '@hookform/resolvers/zod'; // (2)
import { signupSchema } from '@/features/auth/schema/auth.schema'; // 미리 만든 Zod
import { useSignup } from '@/features/auth/hooks/useSignup'; // 미리 만든 Hook

// Vanilla Extract 스타일 import (준비되었다고 가정)
import * as s from './signup.css.ts';

export default function SignupPage() {
  const router = useRouter();

  // 비밀번호 보이기/숨기기 상태 관리
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // TanStack Query 기반의 커스텀 훅 사용
  const { signup, isPending } = useSignup();

  // (3) React Hook Form 초기화 (Zod 스키마 연결)
  const {
    register,
    handleSubmit,
    formState: { errors, isValid }, // isValid: 모든 필드가 올바른지 여부
  } = useForm({
    resolver: zodResolver(signupSchema),
    mode: 'onChange', // 실시간 검증 활성화
    defaultValues: {
      email: '',
      nickname: '',
      password: '',
      confirmPassword: '',
    },
  });

  // (4) 폼 제출 시 실행될 함수
  const onSubmit = async (data) => {
    const { confirmPassword, ...payload } = data;

    try {
      await signup(payload);
      router.push('/login'); // 회원가입 성공 후 로그인 페이지 이동
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className={s.container}>
      {/* 로고 영역 */}
      <div className={s.logoWrapper}>
        <Image src="/logo.svg" alt="Docthru 로고" width={180} height={40} />
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        {/* 이메일 */}
        <div className={s.inputGroup}>
          <label htmlFor="email" className={s.label}>
            이메일
          </label>
          <input
            id="email"
            {...register('email')} // (5) RHF에 필드 등록
            placeholder="이메일을 입력해주세요"
            className={`${s.input} ${errors.email ? s.inputError : ''}`}
          />
          {errors.email && (
            <p className={s.errorMessage}>{errors.email.message}</p>
          )}
        </div>

        {/* 닉네임 */}
        <div className={s.inputGroup}>
          <label htmlFor="nickname" className={s.label}>
            닉네임
          </label>
          <input
            id="nickname"
            {...register('nickname')}
            placeholder="닉네임을 입력해주세요"
            className={`${s.input} ${errors.nickname ? s.inputError : ''}`}
          />
          {errors.nickname && (
            <p className={s.errorMessage}>{errors.nickname.message}</p>
          )}
        </div>

        {/* 비밀번호 */}
        <div className={s.inputGroup}>
          <label htmlFor="password" className={s.label}>
            비밀번호
          </label>
          <div className={s.passwordInputWrapper}>
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              {...register('password')}
              placeholder="비밀번호를 입력해주세요"
              className={`${s.input} ${errors.password ? s.inputError : ''}`}
            />
            {/* 눈 아이콘 버튼 (비밀번호 보이기/숨기기) */}
            <button
              type="button"
              className={s.eyeIcon}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? '🐵' : '🙈'}{' '}
              {/* 실제 프로젝트에서는 아이콘 SVG 사용 추천 */}
            </button>
          </div>
          {errors.password && (
            <p className={s.errorMessage}>{errors.password.message}</p>
          )}
        </div>

        {/* 비밀번호 확인 */}
        <div className={s.inputGroup}>
          <label htmlFor="confirmPassword" className={s.label}>
            비밀번호 확인
          </label>
          <div className={s.passwordInputWrapper}>
            <input
              id="confirmPassword"
              type={showConfirmPassword ? 'text' : 'password'}
              {...register('confirmPassword')}
              placeholder="비밀번호를 한번 더 입력해주세요"
              className={`${s.input} ${errors.confirmPassword ? s.inputError : ''}`}
            />
            <button
              type="button"
              className={s.eyeIcon}
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? '🐵' : '🙈'}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className={s.errorMessage}>{errors.confirmPassword.message}</p>
          )}
        </div>

        {/* 가입하기 버튼 */}
        <button
          type="submit"
          className={s.submitButton}
          disabled={!isValid || isPending} // 유효하지 않거나 로딩 중이면 비활성화
        >
          {isPending ? '처리 중...' : '가입하기'}
        </button>
      </form>

      {/* 로그인 링크 */}
      <footer className={s.footer}>
        <p>
          회원이신가요?
          <button
            type="button"
            onClick={() => router.push('/auth/login')}
            className={s.loginLink}
          >
            로그인하기
          </button>
        </p>
      </footer>
    </main>
  );
}
