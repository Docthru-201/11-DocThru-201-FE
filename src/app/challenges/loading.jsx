// src/app/challenges/loading.jsx

export default function Loading() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        fontSize: '1.2rem',
        color: '#666',
      }}
    >
      <p>데이터를 불러오는 중입니다...</p>
    </div>
  );
}
