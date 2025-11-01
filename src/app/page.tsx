import { redirect } from 'next/navigation';

export default function Home() {
  // توجيه تلقائي للغة العربية كافتراضي
  redirect('/ar');
}
