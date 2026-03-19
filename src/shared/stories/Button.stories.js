import { Button } from '@/shared/components';
import { Icon } from '@/shared/components/Icon';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          '공통 버튼 컴포넌트입니다. `variant`, `icon`, `iconPosition`, `loading`, `disabled`, `fullWidth` 등을 조합해 사용합니다. 폼 제출 시에는 `type="submit"`을 넘기세요.',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'solid',
        'solidInactive',
        'outline',
        'filledTonal',
        'transparent',
        'filled',
        'outlineIcon',
        'secondary',
      ],
      description: '버튼 스타일 변형',
      table: {
        type: {
          summary:
            'solid | outline | filledTonal | transparent | filled | outlineIcon | secondary',
        },
      },
    },
    iconPosition: {
      control: 'radio',
      options: ['left', 'right'],
      description: '아이콘 위치 (icon이 있을 때)',
    },
    loading: {
      control: 'boolean',
      description: '로딩 중일 때 스피너 표시, 클릭 비활성화',
    },
    disabled: {
      control: 'boolean',
      description: '비활성화 여부',
    },
    fullWidth: {
      control: 'boolean',
      description: '가로 100% 여부',
    },
    children: {
      control: 'text',
      description: '버튼 안에 보일 텍스트(또는 노드)',
    },
  },
  args: {
    variant: 'solid',
    disabled: false,
    loading: false,
    fullWidth: false,
    iconPosition: 'right',
    children: '버튼',
  },
};

export default meta;

export const Playground = (args) => <Button {...args}>{args.children}</Button>;

export const Solid = () => <Button variant="solid">승인하기</Button>;

export const Outline = () => <Button variant="outline">임시저장</Button>;

export const FilledTonal = () => (
  <Button variant="filledTonal">거절하기</Button>
);

export const Filled = () => <Button variant="filled">원문 보기</Button>;

export const Secondary = () => (
  <Button
    variant="secondary"
    icon={<Icon name="loginGoogle" width={16} height={16} aria-hidden />}
    iconPosition="left"
  >
    Google로 시작하기
  </Button>
);

export const IconLeft = () => (
  <Button
    variant="solidIcon"
    icon={<Icon name="plus" width={16} height={16} aria-hidden />}
    iconPosition="right"
  >
    신규 챌린지 신청
  </Button>
);

export const IconRight = () => (
  <Button
    variant="transparent"
    icon={<Icon name="arrowClick" width={24} height={24} aria-hidden />}
    iconPosition="right"
  >
    링크 열기
  </Button>
);

export const OutlineIconWithArrow = () => (
  <Button
    variant="outlineIcon"
    icon={<Icon name="arrowRight" width={20} height={20} aria-hidden />}
    iconPosition="right"
  >
    도전 계속하기
  </Button>
);

export const OutlineIconWithDocument = () => (
  <Button
    variant="outlineIcon"
    icon={<Icon name="documentMyWork" width={20} height={20} aria-hidden />}
    iconPosition="right"
  >
    내 작업물 보기
  </Button>
);

export const Disabled = () => (
  <Button variant="solid" disabled>
    승인하기
  </Button>
);

export const DisabledByVariant = () => (
  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
    <Button variant="solid" disabled>
      승인하기
    </Button>
    <Button variant="outline" disabled>
      임시저장
    </Button>
    <Button variant="filledTonal" disabled>
      거절하기
    </Button>
  </div>
);

export const Loading = () => (
  <Button variant="solid" loading>
    처리 중
  </Button>
);

export const LoadingFullWidth = () => (
  <div style={{ width: 320 }}>
    <Button variant="solid" loading fullWidth>
      승인하기
    </Button>
  </div>
);

export const FullWidth = () => (
  <div style={{ width: 320 }}>
    <Button variant="solid" fullWidth>
      확인
    </Button>
  </div>
);
