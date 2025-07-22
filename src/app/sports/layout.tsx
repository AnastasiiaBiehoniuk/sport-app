import Link from 'next/link';
import { ReactNode } from 'react';

export default function SportsLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <aside className="bg-blue-500 p-4 mb-4">
        <h2 className="text-xl font-semibold">Виды спорта</h2>
        <ul className="list-disc ml-6 mt-2">
          <li><Link href="/sports/football">Футбол</Link></li>
          <li><Link href="/sports/tennis">Теннис</Link></li>
          <li><Link href="/sports/swimming">Плавание</Link></li>
        </ul>
      </aside>
      <div>{children}</div>
    </div>
  );
}

