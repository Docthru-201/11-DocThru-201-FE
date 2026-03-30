'use client';

import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input, Dropdown, TextBox } from '@/shared/components';
import {
  createChallengeFormSchema,
  toCreateChallengeRequestBody,
} from '@/features/challenges/schema/challenges.schema';
import { useCreateChallenge } from '@/features/challenges/hooks/useCreateChallenge';
import * as styles from './page.css.js';

const categoryOptions = [
  { value: 'DOCUMENT', label: '공식문서' },
  { value: 'BLOG', label: '블로그' },
];

const docTypeOptions = [
  { value: 'NEXT_JS', label: 'Next.js' },
  { value: 'API', label: 'API' },
  { value: 'CAREER', label: 'Career' },
  { value: 'MODERN_JS', label: 'Modern JS' },
  { value: 'WEB', label: 'Web' },
];

export default function NewChallengePage() {
  const { createChallenge, isPending } = useCreateChallenge();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(createChallengeFormSchema),
    mode: 'onChange',
    defaultValues: {
      title: '',
      originalUrl: '',
      category: undefined,
      type: undefined,
      deadline: '',
      maxParticipants: '',
      description: '',
    },
  });

  const onSubmit = (data) => {
    createChallenge(toCreateChallengeRequestBody(data));
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>신규 챌린지 신청</h1>

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="제목"
            placeholder="제목을 입력해주세요"
            error={!!errors.title}
            helperText={errors.title?.message}
            {...register('title')}
          />

          <Input
            label="원문 링크"
            placeholder="http://"
            error={!!errors.originalUrl}
            helperText={errors.originalUrl?.message}
            {...register('originalUrl')}
          />

          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <Dropdown
                label="분야"
                placeholder="카테고리"
                options={categoryOptions}
                value={field.value}
                onChange={field.onChange}
                showLabel
              />
            )}
          />
          {errors.category && (
            <p className={styles.errorMessage}>{errors.category.message}</p>
          )}

          <Controller
            name="type"
            control={control}
            render={({ field }) => (
              <Dropdown
                label="문서 타입"
                placeholder="카테고리"
                options={docTypeOptions}
                value={field.value}
                onChange={field.onChange}
                showLabel
              />
            )}
          />
          {errors.type && (
            <p className={styles.errorMessage}>{errors.type.message}</p>
          )}

          <Controller
            name="deadline"
            control={control}
            render={({ field }) => (
              <Input
                label="마감일"
                type="date"
                placeholder="YY/MM/DD"
                value={field.value}
                onChange={field.onChange}
                error={!!errors.deadline}
                helperText={errors.deadline?.message}
              />
            )}
          />

          <Input
            label="최대 인원"
            type="number"
            min={1}
            placeholder="인원을 입력해주세요"
            error={!!errors.maxParticipants}
            helperText={errors.maxParticipants?.message}
            {...register('maxParticipants')}
          />

          <div>
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <TextBox
                  label="내용"
                  placeholder="내용을 입력해주세요"
                  value={field.value ?? ''}
                  onChange={(value) =>
                    field.onChange({
                      target: { value, name: field.name },
                    })
                  }
                  rows={10}
                />
              )}
            />
            {errors.description && (
              <p className={styles.errorMessage}>
                {errors.description.message}
              </p>
            )}
          </div>

          <div className={styles.buttonWrap}>
            <Button
              type="submit"
              variant="solid"
              fullWidth
              disabled={isPending || isSubmitting}
            >
              {isPending || isSubmitting ? '신청 중…' : '신청하기'}
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
}
