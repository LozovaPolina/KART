'use client';

import { User } from 'lucide-react';
import { useRouter } from 'next/router';
import AuthGuard from '../../shared/auth/AuthGuard';

function ProfileIcon() {
  // const router = useRouter();
  return (
    <AuthGuard onAuthorized={() => console.log('Liked!')}>

      <User color='#262626' />
    </AuthGuard>
  );
}

export default ProfileIcon;


