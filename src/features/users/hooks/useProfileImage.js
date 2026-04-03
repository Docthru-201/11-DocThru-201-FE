import { supabase } from '@/shared/lib/supabase';

export const uploadProfileImage = async (file, userId) => {
  const ext = file.name.split('.').pop();
  const path = `${userId}.${ext}`;

  const { error } = await supabase.storage
    .from('avatars')
    .upload(path, file, { upsert: true });

  if (error) throw new Error(error.message);

  const { data } = supabase.storage.from('avatars').getPublicUrl(path);
  return data.publicUrl;
};
