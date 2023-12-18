'use client';
import runOneSignal from '@/app/_components/general/OneSignal';
import { useEffect } from 'react';



export default function Home() {
  useEffect(() => {
    runOneSignal();
  });
  return (
      <div>
      </div>
  )
}
