import { z } from 'zod';

const CONTENT_MAX = 5000; // WORK_LIMITS.CONTENT_MAX_LENGTH

export const createWorkSchema = z.object({
  challengeId: z.string().ulid({ message: '유효한 챌린지 ID가 아닙니다.' }),
  content: z
    .string()
    .min(1, { message: '작업물 내용을 입력해주세요.' })
    .max(CONTENT_MAX, { message: `${CONTENT_MAX}자 이하로 작성해주세요.` })
    .refine(
      (v) => {
        try {
          JSON.parse(v);
          return true;
        } catch {
          return false;
        }
      },
      { message: '유효한 JSON 형식이 아닙니다.' },
    ),
});

export const updateWorkSchema = createWorkSchema
  .partial()
  .refine((obj) => Object.values(obj).some((v) => v !== undefined), {
    message: '수정할 필드가 하나 이상 필요합니다.',
  });
