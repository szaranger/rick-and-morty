'use client';

import { Provider } from "@/components/ui/provider";
import { useEffect, useState } from 'react';
import { getUserPreferences } from '@/services/user-preferences';
import { UserInfoModal } from '@/components/user-info-modal';

import "@/app/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    const prefs = getUserPreferences();
    if (prefs) setShowModal(false);
  }, []);

  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <Provider>
          {showModal && <UserInfoModal onComplete={() => setShowModal(false)} />}
          {!showModal && children}
        </Provider>
      </body>
    </html>
  );
}
