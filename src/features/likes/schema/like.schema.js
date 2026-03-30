import { z } from 'zod';

export const likeCountSchema = z.object({
  workId: z.string().ulid(),
});

export const likeStatusSchema = z.object({
  isLiked: z.boolean(),
});

export const likeActionSchema = z.object({
  success: z.boolean(),
  message: z.string().optional(),
});
