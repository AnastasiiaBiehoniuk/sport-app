import Link from 'next/link';

export default function SportsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Курсы по видам спорта</h1>
      <ul className="mt-4 space-y-2">
        <li>
          <Link href="/sports/football" className="text-blue-600 underline">
            Футбол
          </Link> — Изучите технику, пас, дриблинг и тактику футбола.
        </li>
        <li>
          <Link href="/sports/tennis" className="text-blue-600 underline">
            Теннис
          </Link> — Научитесь ударам, подаче, правилам и стратегии.
        </li>
        <li>
          <Link href="/sports/swimming" className="text-blue-600 underline">
            Плавание
          </Link> — Освойте дыхание, технику и стили плавания.
        </li>
      </ul>
    </div>
  );
}