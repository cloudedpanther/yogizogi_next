import { Metadata } from 'next';
import SearchBar from './SearchBar';

export const metadata: Metadata = {
  title: 'Home',
};

export default function Home() {
  return (
    <div className="w-full h-[calc(100vh-68px)] flex justify-center items-center">
      <SearchBar />
    </div>
  );
}
