import Link from 'next/link';
import { UserMenu } from './UserMenu';

export const Header = () => {
  return (
    <nav className="w-full fixed flex justify-between items-center pt-2 pb-3 px-16 shadow">
      <Link href="/">
        <h1 className="font-bold text-xl text-gray-700">YogiZogi</h1>
      </Link>
      <UserMenu />
    </nav>
  );
};
