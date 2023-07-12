'use client'

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/product');
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <p>Redirecting to the Product page...</p>
    </div>
  );
}
