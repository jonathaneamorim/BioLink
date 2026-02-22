import { ArrowLeft } from 'lucide-react';
import data from '@/data/user.json';
import Link from 'next/link';

type ReturnButtonProps = {
  url?: string;
};

export function ReturnButton({ url = "/" }: ReturnButtonProps) {
  const { theme } = data;

  return (
    <Link
      href={url}
      className="fixed top-6 left-6 p-4 rounded-full shadow-2xl active:scale-90 transition-all flex items-center z-50 font-bold hover:bg-opacity-80"
      style={{ backgroundColor: theme.buttonBackground, color: theme.buttonText }}
    >
      <ArrowLeft size={18} className="transition-all" />
    </Link>
  );
}