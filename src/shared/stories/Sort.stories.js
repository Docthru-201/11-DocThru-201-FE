import { useEffect, useMemo, useRef, useState } from 'react';
import { Sort } from '@/shared/components';
import { SORT_OPTIONS } from '@/shared/constants/file';

export default {
  title: 'Components/Sort',
  component: Sort,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const Active = () => <Sort label="승인 대기" active />;

export const Inactive = () => <Sort label="필터" active={false} />;

export const FilterActive = () => <Sort variant="filter" label="필터" active />;

/** `SORT_OPTIONS`로 드롭다운 선택 → 라벨·선택값 확인용 */
export const WithSortOptions = () => {
  const [open, setOpen] = useState(false);
  const [sortValue, setSortValue] = useState('pending');
  const wrapRef = useRef(null);

  const sortLabel = useMemo(
    () => SORT_OPTIONS.find((o) => o.value === sortValue)?.label ?? '정렬',
    [sortValue],
  );

  useEffect(() => {
    if (!open) return undefined;
    function handlePointerDown(event) {
      const el = wrapRef.current;
      const target = event.target;
      if (el && target instanceof Node && !el.contains(target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handlePointerDown);
    return () => document.removeEventListener('mousedown', handlePointerDown);
  }, [open]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 16,
      }}
    >
      <div ref={wrapRef} style={{ position: 'relative' }}>
        <Sort
          label={sortLabel}
          active={open}
          onClick={() => setOpen((prev) => !prev)}
        />
        {open && (
          <ul
            role="listbox"
            aria-label="정렬 옵션"
            style={{
              position: 'absolute',
              top: 'calc(100% + 8px)',
              left: 0,
              zIndex: 10,
              width: 170,
              margin: 0,
              padding: 8,
              listStyle: 'none',
              background: '#fff',
              border: '1px solid #D4D4D4',
              borderRadius: 12,
              boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
            }}
          >
            {SORT_OPTIONS.map((opt) => (
              <li key={opt.value}>
                <button
                  type="button"
                  role="option"
                  aria-selected={sortValue === opt.value}
                  onClick={() => {
                    setSortValue(opt.value);
                    setOpen(false);
                  }}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '8px 10px',
                    border: 0,
                    borderRadius: 8,
                    background:
                      sortValue === opt.value ? '#FAFAFA' : 'transparent',
                    cursor: 'pointer',
                    fontSize: 14,
                  }}
                >
                  {opt.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <p style={{ margin: 0, fontSize: 13, color: '#525252' }}>
        선택값: <code>{sortValue}</code>
      </p>
    </div>
  );
};
