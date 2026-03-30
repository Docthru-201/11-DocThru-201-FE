export const useImageUpload = () => {
  // 저장소 미정이라 Base64로 임시 처리
  // 나중에 S3/서버 업로드로 교체하면 여기만 수정하면 됨
  const uploadImage = (file) => {
    return new Promise((resolve, reject) => {
      if (!file.type.startsWith('image/')) {
        reject(new Error('이미지 파일만 업로드 가능합니다.'));
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target.result); // base64
      reader.onerror = () => reject(new Error('이미지 읽기 실패'));
      reader.readAsDataURL(file);
    });
  };

  return { uploadImage };
};

//나중에 Supabase로 교체
// const uploadImage = async (file) => {
//   const { data } = await supabase.storage
//     .from('images')
//     .upload(file.name, file);
//   return data.publicUrl;  // URL만 반환하면 됨
// };
