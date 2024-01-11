'use client';

import Link from 'next/link';
import { useState } from 'react';

export const UserMenu = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  if (isLoggedIn) {
    return (
      <>
        <button className="btn" onClick={handleLogout}>
          로그아웃
        </button>
      </>
    );
  }

  return (
    <>
      <Link href="/login" className="btn">
        로그인
      </Link>
    </>
  );
};
