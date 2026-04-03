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
    onLogout: () => {},
  },
};

export default meta;

export const Guest = (args) => <GNB {...args} status="guest" />;
export const Member = (args) => <GNB {...args} status="member" />;
export const Admin = (args) => <GNB {...args} status="admin" />;

export const AllStatuses = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
    <GNB status="guest" onLogout={() => {}} />
    <div style={{ padding: 16, background: '#f5f5f5' }} />
    <GNB status="member" onLogout={() => {}} />
    <div style={{ padding: 16, background: '#f5f5f5' }} />
    <GNB
      status="admin"
      onLogout={() => {}}
      tabs={[
        { label: '챌린지 관리', active: true },
        { label: '챌린지 목록', active: false },
      ]}
    />
  </div>
);
