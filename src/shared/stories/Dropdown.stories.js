import { useState } from 'react';
import { Dropdown } from '@/shared/components';
import * as challengeNewStyles from '@/app/challenges/new/page.css.js';

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

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

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
      <div className={challengeNewStyles.fieldGroup}>
        <span className={challengeNewStyles.fieldLabel}>분야</span>
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
      <div className={challengeNewStyles.fieldGroup}>
        <span className={challengeNewStyles.fieldLabel}>문서 타입</span>
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
