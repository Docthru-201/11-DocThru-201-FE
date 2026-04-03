import { List, ListRow } from '@/shared/components';

export default {
  title: 'Components/List',
  component: ListRow,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    name: { control: 'text', description: '회원/전문가 이름' },
    role: {
      control: 'select',
      options: ['전문가', '참가자'],
      description: '역할 텍스트',
    },
    profileType: {
      control: 'select',
      options: ['auto', 'admin', 'member'],
      description: 'auto면 role="전문가" 기준으로 admin/member 결정',
    },
    badgeLabel: {
      control: 'text',
      description: '왼쪽 크라운 배지 라벨 (빈 값이면 숨김)',
    },
    showBadge: { control: 'boolean', description: '배지 노출 여부' },
    likeCount: {
      control: { type: 'number', min: 0 },
      description: '좋아요 수',
    },
    withDivider: {
      control: 'boolean',
      description: 'List 하단 구분선(hr) 노출',
    },
  },
};

const ROW_WIDTH = '686px';

export const Playground = (args) => {
  const profileType =
    args.profileType === 'auto' ? undefined : args.profileType;
  const badgeLabel =
    args.showBadge && args.badgeLabel.trim() !== ''
      ? args.badgeLabel
      : undefined;

  return (
    <div style={{ width: ROW_WIDTH }}>
      <List withDivider={args.withDivider}>
        <ListRow
          badgeLabel={badgeLabel}
          name={args.name}
          role={args.role}
          profileType={profileType}
          likeCount={args.likeCount}
          onWorkClick={() => {}}
          onLikeClick={() => {}}
          showBadge={args.showBadge}
        />
      </List>
    </div>
  );
};

Playground.args = {
  name: '개발life',
  role: '전문가',
  profileType: 'admin',
  badgeLabel: '01',
  showBadge: true,
  likeCount: 1934,
  withDivider: true,
};

export const WithoutBadge = () => (
  <div style={{ width: ROW_WIDTH }}>
    <List>
      <ListRow
        name="개발life"
        role="전문가"
        profileType="admin"
        likeCount={1934}
        showBadge={false}
        onWorkClick={() => {}}
        onLikeClick={() => {}}
      />
    </List>
  </div>
);

export const MixedRows = () => (
  <div style={{ width: ROW_WIDTH }}>
    <List withDivider>
      <ListRow
        badgeLabel="01"
        name="개발life"
        role="전문가"
        profileType="admin"
        likeCount={1934}
        onWorkClick={() => {}}
        onLikeClick={() => {}}
      />
      <ListRow
        name="일반회원"
        role="참가자"
        profileType="member"
        likeCount={12}
        onWorkClick={() => {}}
        onLikeClick={() => {}}
      />
    </List>
  </div>
);
