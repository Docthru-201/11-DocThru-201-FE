import { z } from 'zod';
import { AUTH_LIMITS, REGEX } from '@/shared/constants/auth.js';
// 1. 이메일 스키마
const emailSchema = z
  .string()
  .trim()
  .toLowerCase()
  .min(1, { message: '이메일을 입력해주세요.' })
  .email({ message: '올바른 이메일 형식이 아닙니다.' });

// 2. 닉네임 스키마
const nicknameSchema = z
  .string()
  .trim()
  .min(AUTH_LIMITS.NICKNAME.MIN_LENGTH, {
    message: `닉네임은 최소 ${AUTH_LIMITS.NICKNAME.MIN_LENGTH}자 이상이어야 합니다.`,
  })
  .max(AUTH_LIMITS.NICKNAME.MAX_LENGTH, {
    message: `닉네임은 최대 ${AUTH_LIMITS.NICKNAME.MAX_LENGTH}자 이하입니다.`,
  })
  .regex(REGEX.NICKNAME, {
    message: '닉네임은 한글, 영문, 숫자만 사용할 수 있습니다.',
  });

// 3. 비밀번호 스키마
const passwordSchema = z
  .string()
  .min(1, { message: '비밀번호를 입력해주세요.' })
  .min(AUTH_LIMITS.PASSWORD.MIN_LENGTH, {
    message: `비밀번호는 최소 ${AUTH_LIMITS.PASSWORD.MIN_LENGTH}자 이상이어야 합니다.`,
  })
  .max(AUTH_LIMITS.PASSWORD.MAX_LENGTH, {
    message: `비밀번호는 최대 ${AUTH_LIMITS.PASSWORD.MAX_LENGTH}자 이하입니다.`,
  })
  .regex(REGEX.PASSWORD_LETTER, {
    message: '비밀번호에 영문자를 포함해주세요.',
  })
  .regex(REGEX.PASSWORD_NUMBER, { message: '비밀번호에 숫자를 포함해주세요.' })
  .regex(REGEX.PASSWORD_SPECIAL, {
    message: '비밀번호에 특수문자를 포함해주세요.',
  });

/**
 * [Feature Schemas]
 * 실제 Form 컴포넌트에서 React Hook Form과 연결할 최종 스키마들입니다.
 */

// 회원가입용
export const signupSchema = z
  .object({
    email: emailSchema,
    nickname: nicknameSchema,
    password: passwordSchema,
    confirmPassword: z
      .string()
      .trim()
      .min(1, { message: '비밀번호 확인을 입력해주세요.' }),
  })
  .strict()
  .refine((data) => data.password === data.confirmPassword, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['confirmPassword'],
  });

// 로그인용
export const loginSchema = z
  .object({
    email: emailSchema,
    password: z.string().min(1, { message: '비밀번호를 입력해주세요.' }),
  })
  .strict();

// 수정 후 (추천)
export const oauthProviderSchema = z.object({
  provider: z.enum(['google', 'kakao', 'naver'], {
    message: '지원하지 않는 로그인 방식입니다.',
  }),
});
