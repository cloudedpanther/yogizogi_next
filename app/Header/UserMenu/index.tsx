'use client';

import { useState } from 'react';

export const UserMenu = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <button className="btn">로그인</button>
    </>
  );
};
