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

// ------------------------------
// 1. 플레이그라운드 (테스트용)
// ------------------------------

/** Controls에서 variant, disabled, loading, fullWidth, children 등을 바꿔가며 테스트해보세요. */
export const Playground = (args) => <Button {...args}>{args.children}</Button>;

// ------------------------------
// 2. Variant별 기본 예시
// ------------------------------

/** 주요 액션(승인, 제출 등). 기본 권장 variant */
export const Solid = () => <Button variant="solid">승인하기</Button>;

/** 비활성/보조 액션용 회색 스타일 (disabled와는 다름, 시각만 비활성 느낌) */
export const SolidInactive = () => (
  <Button variant="solidInactive">승인하기</Button>
);

/** 보조 액션(임시저장, 취소 등). 테두리 강조 */
export const Outline = () => <Button variant="outline">임시저장</Button>;

/** 위험/거절 액션. 연한 빨간 톤 */
export const FilledTonal = () => (
  <Button variant="filledTonal">거절하기</Button>
);

/** 텍스트/링크 느낌. 가벼운 배경 */
export const Transparent = () => (
  <Button variant="transparent">링크 열기</Button>
);

/** 강조 보조 액션. 브랜드 옐로우 + 테두리 */
export const Filled = () => <Button variant="filled">원문 보기</Button>;

/** 둥근 테두리 + 작은 높이. 아이콘과 함께 자주 사용 */
export const OutlineIcon = () => (
  <Button variant="outlineIcon">도전 계속하기</Button>
);

/** 연한 테두리. 예: 소셜 로그인, 보조 CTA */
export const Secondary = () => (
  <Button
    variant="secondary"
    icon={<Icon name="loginGoogle" width={16} height={16} aria-hidden />}
    iconPosition="left"
  >
    Google로 시작하기
  </Button>
);

// ------------------------------
// 3. 아이콘 + 텍스트
// ------------------------------

/** 좌측 아이콘. 예: 신청, 추가하기 */
export const IconLeft = () => (
  <Button
    variant="solidIcon"
    icon={<Icon name="plus" width={16} height={16} aria-hidden />}
    iconPosition="left"
  >
    신규 챌린지 신청
  </Button>
);

/** 우측 아이콘. 예: 링크 열기, 다음 */
export const IconRight = () => (
  <Button
    variant="transparent"
    icon={<Icon name="arrowClick" width={24} height={24} aria-hidden />}
    iconPosition="right"
  >
    링크 열기
  </Button>
);

/** outlineIcon + 우측 화살표 (자주 쓰는 조합) */
export const OutlineIconWithArrow = () => (
  <Button
    variant="outlineIcon"
    icon={<Icon name="arrowRight" width={20} height={20} aria-hidden />}
    iconPosition="right"
  >
    도전 계속하기
  </Button>
);

/** outlineIcon + 문서 아이콘 */
export const OutlineIconWithDocument = () => (
  <Button
    variant="outlineIcon"
    icon={<Icon name="documentMyWork" width={20} height={20} aria-hidden />}
    iconPosition="right"
  >
    내 작업물 보기
  </Button>
);

// ------------------------------
// 4. 상태 (Loading / Disabled)
// ------------------------------

/** 로딩 중: 스피너 표시, 클릭 불가 */
export const Loading = () => (
  <Button variant="solid" loading>
    처리 중
  </Button>
);

/** fullWidth + loading (폼 제출 등) */
export const LoadingFullWidth = () => (
  <div style={{ width: 320 }}>
    <Button variant="solid" loading fullWidth>
      승인하기
    </Button>
  </div>
);

/** disabled: 시각·동작 모두 비활성 */
export const Disabled = () => (
  <Button variant="solid" disabled>
    승인하기
  </Button>
);

/** variant별 disabled 한눈에 */
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
    <Button variant="transparent" disabled>
      링크 열기
    </Button>
  </div>
);

// ------------------------------
// 5. 레이아웃
// ------------------------------

/** fullWidth: 카드/모달 내 단일 CTA에 유용 */
export const FullWidth = () => (
  <div style={{ width: 320 }}>
    <Button variant="solid" fullWidth>
      확인
    </Button>
  </div>
);

// ------------------------------
// 6. 한눈에 보기 (갤러리)
// ------------------------------

/** 모든 variant를 한 화면에서 비교합니다. */
export const AllVariants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
    <section>
      <h3 style={{ margin: '0 0 12px', fontSize: 14, color: '#666' }}>
        기본 variant
      </h3>
      <div
        style={{
          display: 'flex',
          gap: 12,
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        <Button variant="solid">승인하기</Button>
        <Button variant="solid" disabled>
          승인하기
        </Button>
        <Button variant="solidInactive">승인하기</Button>
        <Button variant="solid" loading>
          승인하기
        </Button>

        <Button variant="outline">임시저장</Button>
        <Button variant="filledTonal">거절하기</Button>
        <Button variant="transparent">링크 열기</Button>
        <Button variant="filled">원문 보기</Button>
        <Button variant="secondary">Google로 시작하기</Button>
      </div>
    </section>
    <section>
      <h3 style={{ margin: '0 0 12px', fontSize: 14, color: '#666' }}>
        아이콘 + 텍스트
      </h3>
      <div
        style={{
          display: 'flex',
          gap: 12,
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        <Button
          variant="solidIcon"
          icon={<Icon name="plus" width={16} height={16} aria-hidden />}
          iconPosition="left"
        >
          신규 챌린지 신청
        </Button>
        <Button
          variant="transparent"
          icon={<Icon name="arrowClick" width={24} height={24} aria-hidden />}
          iconPosition="right"
        >
          링크 열기
        </Button>
        <Button
          variant="outlineIcon"
          icon={<Icon name="arrowRight" width={20} height={20} aria-hidden />}
          iconPosition="right"
        >
          도전 계속하기
        </Button>
        <Button
          variant="outlineIcon"
          icon={
            <Icon name="documentMyWork" width={20} height={20} aria-hidden />
          }
          iconPosition="right"
        >
          내 작업물 보기
        </Button>
      </div>
    </section>
    <section>
      <h3 style={{ margin: '0 0 12px', fontSize: 14, color: '#666' }}>상태</h3>
      <div
        style={{
          display: 'flex',
          gap: 12,
          flexWrap: 'wrap',
          alignItems: 'center',
        }}
      >
        <Button variant="solid" loading>
          처리 중
        </Button>
        <Button variant="solid" disabled>
          승인하기
        </Button>
      </div>
    </section>
  </div>
);
