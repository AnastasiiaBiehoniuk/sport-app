'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-blue-500 text-white p-4 flex gap-4">
      <Link href="/">Главная</Link>
      <Link href="/about">О проекте</Link>
      <Link href="/sports">Курсы по спорту</Link>
    </nav>
  );
}