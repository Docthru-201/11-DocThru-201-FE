import { Icon } from '@/shared/components/Icon';
import { chipCard, chipCardLabel } from './ChipCard.css.js';

const CHIP_STATUS = {
  recruitEnd: {
    label: '모집이 완료된 상태에요',
    iconName: 'personWhiteSmall',
    alt: '모집 종료',
  },
  dateEnd: {
    label: '챌린지가 마감되었어요',
    iconName: 'deadlineWhiteSmall',
    alt: '챌린지 마감',
  },
};

export const ChipCard = ({ status }) => {
  const meta = CHIP_STATUS[status];

  return (
    <div className={chipCard[status]}>
      <Icon
        name={meta.iconName}
        width={16}
        height={16}
        alt={meta.alt}
        aria-hidden
      />
      <span className={chipCardLabel}>{meta.label}</span>
    </div>
  );
};
