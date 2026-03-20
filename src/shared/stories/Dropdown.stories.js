import { useState } from 'react';
import { Dropdown } from '@/shared/components';

const CATEGORY_OPTIONS = [
  { value: 'DOCUMENT', label: '공식문서' },
  { value: 'BLOG', label: '블로그' },
];

const TYPE_OPTIONS = [
  { value: 'NEXT_JS', label: 'Next.js' },
  { value: 'API', label: 'API' },
  { value: 'CAREER', label: 'Career' },
  { value: 'MODERN_JS', label: 'Modern JS' },
  { value: 'WEB', label: 'Web' },
];

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;

const categoryOptions = [
  { value: 'nextjs', label: 'Next.js' },
  { value: 'api', label: 'API' },
  { value: 'career', label: 'Career' },
  { value: 'modernJs', label: 'Modern JS' },
  { value: 'web', label: 'Web' },
];

export const Default = () => {
  const [value, setValue] = useState(null);

  return (
    <div style={{ width: '320px' }}>
      <Dropdown
        label="카테고리"
        placeholder="카테고리"
        options={categoryOptions}
        value={value}
        onChange={setValue}
      />
    </div>
  );
};

export const WithPreselected = () => {
  const [value, setValue] = useState('nextjs');

  return (
    <div style={{ width: '320px' }}>
      <Dropdown
        label="카테고리"
        placeholder="카테고리"
        options={categoryOptions}
        value={value}
        onChange={setValue}
      />
    </div>
  );
};

export const NewChallengeCategory = () => {
  const [value, setValue] = useState(null);

  return (
    <div style={{ width: '590px', maxWidth: '100%' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          width: '100%',
        }}
      >
        <span
          style={{
            fontSize: '14px',
            fontWeight: 500,
            lineHeight: 1.5,
            color: '#171717',
          }}
        >
          분야
        </span>
        <Dropdown
          label="분야"
          placeholder="카테고리"
          options={CATEGORY_OPTIONS}
          value={value}
          onChange={setValue}
        />
      </div>
    </div>
  );
};

export const NewChallengeDocumentType = () => {
  const [value, setValue] = useState(null);

  return (
    <div style={{ width: '590px', maxWidth: '100%' }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          width: '100%',
        }}
      >
        <span
          style={{
            fontSize: '14px',
            fontWeight: 500,
            lineHeight: 1.5,
            color: '#171717',
          }}
        >
          문서 타입
        </span>
        <Dropdown
          label="문서 타입"
          placeholder="카테고리"
          options={TYPE_OPTIONS}
          value={value}
          onChange={setValue}
        />
      </div>
    </div>
  );
};

export const NewChallengeFormDropdowns = () => {
  const [category, setCategory] = useState(null);
  const [docType, setDocType] = useState(null);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        width: '100%',
        maxWidth: '590px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          width: '100%',
        }}
      >
        <span
          style={{
            fontSize: '14px',
            fontWeight: 500,
            lineHeight: 1.5,
            color: '#171717',
          }}
        >
          분야
        </span>
        <Dropdown
          label="분야"
          placeholder="카테고리"
          options={CATEGORY_OPTIONS}
          value={category}
          onChange={setCategory}
        />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          width: '100%',
        }}
      >
        <span
          style={{
            fontSize: '14px',
            fontWeight: 500,
            lineHeight: 1.5,
            color: '#171717',
          }}
        >
          문서 타입
        </span>
        <Dropdown
          label="문서 타입"
          placeholder="카테고리"
          options={TYPE_OPTIONS}
          value={docType}
          onChange={setDocType}
        />
      </div>
    </div>
  );
};
