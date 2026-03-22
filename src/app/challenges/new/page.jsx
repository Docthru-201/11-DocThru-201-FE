'use client';

//신규 챌린지 신청

import { useState } from 'react';
import Link from 'next/link';
import { GNB, Button, Input, Dropdown, TextBox } from '@/shared/components';
import * as styles from './page.css'; // 스타일 파일은 어디에, 어떻게 만들것인가? 왜 ts?

//이게 뭐람

export default function NewChallengePage() {
  //각 입력창을 저장할 상태들 (상태안좋음)
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [category, setCategory] = useState(null);
  const [docType, setDocType] = useState(null);
  const [deadline, setDeadline] = useState('');
  const [maxParticipants, setMaxParticipants] = useState('');
  const [content, setContent] = useState('');

  //드롭다운 옵션 데이터 추가(이유를 모름)
  const categoryOptions = [
    { value: 'DOCUMENT', label: '공식문서' },
    { value: 'BLOG', label: '블로그' },
  ];

  const docTypeOptions = [
    { value: 'NEXT_JS', label: 'Next.js' },
    { value: 'API', label: 'API' },
    { value: 'CAREER', label: 'Career' },
    { value: 'MODERN_JS', label: 'Modern JS' },
    { value: 'WEB', label: 'Web' },
  ];

  //왜 죄다 빨갛누

  return (
    <div className={styles.page}>
      <GNB status="member" />

      <main className={styles.main}>
        <h1 className={styles.title}>신규 챌린지 신청</h1>

        <form className={styles.form}>
          {/* 제목 (인풋) */}

          <Input
            label="제목"
            placeholder="제목을 입력해주세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          {/* 원문 링크(인풋)*/}
          <Input
            label="원문 링크"
            placeholder="원문 링크를 입력해주세요"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />

          <div className={styles.row} />
          {/*분야 (드롭다운)*/}
          <Dropdown
            label="분야"
            placeholder="카테고리"
            options={categoryOptions}
            value={category}
            onChange={setCategory}
            showLabel
          />
          {/* 문서 타입 (드롭다운) */}
          <Dropdown
            label="문서 타입"
            placeholder="카테고리"
            options={docTypeOptions}
            value={docType}
            onChange={setDocType}
            showLabel
          />
          {/* 마감일 (Date Input) */}
          <Input
            label="마감일"
            type="date"
            placeholder="YY/MM/DD"
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />

          {/* 최대인원 (인풋) */}
          <Input
            label="최대 인원"
            type="number" // 숫자만 입력 가능
            placeholder="인원을 입력해주세요"
            value={maxParticipants}
            onChange={(e) => setMaxParticipants(e.target.value)}
          />

          {/* 내용 (텍스트박스) */}
          <TextBox
            label="내용"
            placeholder="내용을 입력해주세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={10} // 높이 조절
          />

          {/* 신청하기 (버튼) */}
          <div className={styles.buttonWrap}>
            <Button
              type="submit"
              variant="solid"
              size="large"
              width="full" // 너비 꽉 차게
            >
              신청하기
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
}
