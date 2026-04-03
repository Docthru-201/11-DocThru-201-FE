import { redirect } from 'next/navigation';

export default function MyAppliedRedirectPage() {
  redirect('/my?tab=applied');
}
