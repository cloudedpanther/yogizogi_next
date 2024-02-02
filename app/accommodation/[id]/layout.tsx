import { Metadata } from 'next';

export const metadata: Metadata = {
  // TODO: move to page.tsx and use getMetadata to use accommodation name in title
  title: 'Accommodation',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
