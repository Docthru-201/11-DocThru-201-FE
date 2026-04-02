'use client';

import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input, Dropdown, TextBox } from '@/shared/components';
import { createChallengeFormSchema } from '@/features/challenges/schema/challenges.schema';
import * as styles from './ChallengeForm.css';

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

export default function ChallengeForm({
  initialData,
  onSubmit,
  isPending,
  title,
}) {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting, isDirty },
  } = useForm({
    resolver: zodResolver(createChallengeFormSchema),
    mode: 'onChange',
    defaultValues: initialData || {
      title: '',
      originalUrl: '',
      category: undefined,
      type: undefined,
      deadline: '',
      maxParticipants: '',
      description: '',
    },
  });

  useEffect(() => {
    if (initialData && !isDirty) {
      reset(initialData);
    }
  }, [initialData, reset, isDirty]);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>{title}</h1>

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="title"
            control={control}
            render={({ field }) => (
              <Input
                label="제목"
                placeholder="제목을 입력해주세요"
                value={field.value}
                onChange={field.onChange}
                error={!!errors.title}
                helperText={errors.title?.message}
              />
            )}
          />

          <Controller
            name="originalUrl"
            control={control}
            render={({ field }) => (
              <Input
                label="원문 링크"
                placeholder="http://"
                value={field.value}
                onChange={field.onChange}
                error={!!errors.originalUrl}
                helperText={errors.originalUrl?.message}
              />
            )}
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

          <Controller
            name="maxParticipants"
            control={control}
            render={({ field }) => (
              <Input
                label="최대 인원"
                type="number"
                min={1}
                placeholder="인원을 입력해주세요"
                value={field.value}
                onChange={field.onChange}
                error={!!errors.maxParticipants}
                helperText={errors.maxParticipants?.message}
              />
            )}
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
              {isPending || isSubmitting
                ? '처리 중…'
                : initialData
                  ? '수정하기'
                  : '신청하기'}
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
}
