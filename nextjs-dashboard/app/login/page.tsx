import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { auth } from '@/auth';
import LoginForm from '@/app/ui/login-form';

export const metadata: Metadata = {
  title: 'Login',
};

export default async function Page() {
  const session = await auth();

  if (session?.user) {
    redirect('/dashboard');
  }

  return <LoginForm />;
}
