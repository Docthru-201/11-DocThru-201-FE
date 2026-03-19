import { List, ListRow } from '@/shared/components';

export default {
  title: 'Components/List',
  component: ListRow,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    profileType: {
      control: 'radio',
      options: ['admin', 'member'],
      description:
        '전문가(admin)=profile_admin, 일반 멤버(member)=profile_member',
    },
  },
};

export const Default = () => (
  <div style={{ width: '686px' }}>
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
    </List>
  </div>
);

/** role="전문가" → 자동으로 profile_admin 표시 */
export const ExpertRow = () => (
  <div style={{ width: '686px' }}>
    <List>
      <ListRow
        badgeLabel="01"
        name="개발life"
        role="전문가"
        likeCount={1934}
        onWorkClick={() => {}}
        onLikeClick={() => {}}
      />
    </List>
  </div>
);

/** profileType="member" → profile_member 표시 */
export const MemberRow = () => (
  <div style={{ width: '686px' }}>
    <List>
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

export const MixedRows = () => (
  <div style={{ width: '686px' }}>
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
