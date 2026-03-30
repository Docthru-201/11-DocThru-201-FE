import { z } from 'zod';

const CONTENT_MAX = 1000; // COMMENT_LIMITS.CONTENT_MAX_LENGTH

export const createCommentSchema = z.object({
  content: z
    .string()
    .min(1, { message: '댓글 내용을 작성해주세요.' })
    .max(CONTENT_MAX, { message: `${CONTENT_MAX}자 이하로 작성해주세요.` }),
  parentId: z.string().ulid().optional().nullable(), // 대댓글용
});

export const updateCommentSchema = z.object({
  content: z
    .string()
    .min(1, { message: '댓글 내용을 작성해주세요.' })
    .max(CONTENT_MAX, { message: `${CONTENT_MAX}자 이하로 작성해주세요.` }),
});
