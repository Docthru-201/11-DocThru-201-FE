import { chipType, chipCategory, chipStatus } from './Chip.css.js';

const TYPE_LABEL = {
  next: 'Next.js',
  api: 'API',
  career: 'Career',
  modernJs: 'Modern JS',
  web: 'Web',
};

const CATEGORY_LABEL = {
  docs: '공식문서',
  blog: '블로그',
};

const STATUS_LABEL = {
  wait: '승인 대기',
  rejected: '신청 거절',
  approved: '신청 승인',
  deleted: '챌린지 삭제',
};

export const Chip = (props) => {
  if (props.type) {
    return (
      <span className={chipType[props.type]}>{TYPE_LABEL[props.type]}</span>
    );
  }

  if (props.category) {
    return (
      <span className={chipCategory.default}>
        {CATEGORY_LABEL[props.category]}
      </span>
    );
  }

  if (props.status) {
    return (
      <span className={chipStatus[props.status]}>
        {STATUS_LABEL[props.status]}
      </span>
    );
  }

  return null;
};
