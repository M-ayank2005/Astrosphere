'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

function Page() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('jwtToken'); 
    if (token) {
      router.push('/home'); 
    } else {
      router.push('/landing'); 
    }
  }, [router]);

  return null; 
}

export default Page;
