import { GNB } from '@/shared/components';

const meta = {
  title: 'Components/GNB',
  component: GNB,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    status: {
      control: 'radio',
      options: ['guest', 'member', 'admin'],
      description:
        'guest=로그인 버튼, member=알림+멤버 프로필, admin=탭+관리자 프로필',
    },
  },
  args: {
    status: 'guest',
  },
};

export default meta;

/** 비로그인: 로고 + 로그인 버튼 */
export const Member = (args) => <GNB {...args} status="guest" />;

/** 로그인된 멤버: 로고 + 알림 + 멤버 프로필 아이콘 */
export const MemberLogin = (args) => <GNB {...args} status="member" />;

/** 관리자: 로고 + 챌린지 관리/챌린지 목록 탭 + 관리자 프로필 */
export const Admin = (args) => <GNB {...args} status="admin" />;

/** 좁은 뷰포트에서 small 스타일 적용 (미디어 쿼리) */
export const SmallViewport = (args) => (
  <div style={{ maxWidth: 375, margin: '0 auto' }}>
    <GNB {...args} status="guest" />
  </div>
);

/** 모든 상태 한눈에 */
export const AllStatuses = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
    <GNB status="guest" />
    <div style={{ padding: 16, background: '#f5f5f5' }} />
    <GNB status="member" />
    <div style={{ padding: 16, background: '#f5f5f5' }} />
    <GNB
      status="admin"
      tabs={[
        { label: '챌린지 관리', active: true },
        { label: '챌린지 목록', active: false },
      ]}
    />
  </div>
);
