import { z } from 'zod';
import { CHALLENGE_LIMITS } from '@/shared/constants/challenges.js';

const { TITLE_MAX_LENGTH, DESCRIPTION_MIN_LENGTH, DESCRIPTION_MAX_LENGTH } =
  CHALLENGE_LIMITS;

/** Prisma `Category` */
const categoryEnum = z.enum(['DOCUMENT', 'BLOG'], {
  required_error: '카테고리를 선택해 주세요.',
});

/** Prisma `Type` */
const typeEnum = z.enum(['NEXT_JS', 'API', 'CAREER', 'MODERN_JS', 'WEB'], {
  required_error: '분야(문서 타입)를 선택해 주세요.',
});

/**
 * `/challenges/new` 폼 — 백엔드 `createChallengeSchema`와 동일 규칙.
 * `deadline`은 폼에서는 `YYYY-MM-DD`, 제출 시 ISO datetime으로 변환합니다.
 */
export const createChallengeFormSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, '제목을 입력해 주세요.')
    .max(TITLE_MAX_LENGTH, `제목은 ${TITLE_MAX_LENGTH}자를 넘을 수 없습니다.`),
  originalUrl: z
    .string()
    .trim()
    .min(1, '원문 링크를 입력해 주세요.')
    .transform((s) =>
      /^https?:\/\//i.test(s) ? s : `https://${s.replace(/^\/+/, '')}`,
    )
    .pipe(z.url('올바른 URL 형식으로 입력해 주세요.')),
  category: categoryEnum,
  type: typeEnum,
  deadline: z.string().min(1, '마감일을 선택해 주세요.'),
  maxParticipants: z
    .string()
    .trim()
    .min(1, '최대 인원을 입력해 주세요.')
    .refine((s) => /^\d+$/.test(s), {
      message: '최대 인원은 숫자만 입력해 주세요.',
    })
    .transform((s) => Number.parseInt(s, 10))
    .refine((n) => n >= 1, {
      message: '참가자는 1명 이상이어야 합니다.',
    }),
  description: z
    .string()
    .min(
      DESCRIPTION_MIN_LENGTH,
      `설명은 최소 ${DESCRIPTION_MIN_LENGTH}자 이상이어야 합니다.`,
    )
    .max(
      DESCRIPTION_MAX_LENGTH,
      `설명은 ${DESCRIPTION_MAX_LENGTH}자 이하여야 합니다.`,
    ),
});

/**
 * API 요청 본문 — `deadline`을 `z.iso.datetime()`이 받을 수 있는 ISO 문자열로 변환
 */
export function toCreateChallengeRequestBody(values) {
  const deadlineIso = `${values.deadline}T00:00:00.000Z`;
  const max =
    typeof values.maxParticipants === 'number'
      ? values.maxParticipants
      : Number.parseInt(String(values.maxParticipants), 10);
  return {
    title: values.title.trim(),
    originalUrl: values.originalUrl,
    category: values.category,
    type: values.type,
    description: values.description,
    deadline: deadlineIso,
    maxParticipants: max,
  };
}
