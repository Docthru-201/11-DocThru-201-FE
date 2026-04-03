import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
);

export const uploadProfileImage = async (file, userId) => {
  const ext = file.name.split('.').pop();
  const path = `${userId}_${Date.now()}.${ext}`; // 타임스탬프 추가

  const { error } = await supabase.storage
    .from('DocThru')
    .upload(path, file, { upsert: true });

  if (error) throw new Error(error.message);

  const { data } = supabase.storage.from('DocThru').getPublicUrl(path);
  return data.publicUrl;
};
