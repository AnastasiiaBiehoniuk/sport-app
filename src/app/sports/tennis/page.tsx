export default function Tennis() {
  return (
    <section className="px-32 py-20">
      <h2 className="font-bold text-4xl p-4 m-4">Курс по теннису</h2>
      <h3 className="font-bold text-2xl p-4 m-4">Введение в теннис:</h3>
      <ul className="px-6 mx-4 py-1 my-1 flex flex-wrap gap-2">
        <li className="border py-2 px-4 border-gray-500 max-w-36 rounded-2xl shadow-1xl">
          удары
        </li>
        <li className="border py-2 px-4 border-gray-500 max-w-36 rounded-2xl shadow-1xl">
          подача
        </li>
        <li className="border py-2 px-4 border-gray-500 max-w-36 rounded-2xl shadow-1xl">
          дыхание
        </li>
        <li className="border py-2 px-4 border-gray-500 max-w-36 rounded-2xl shadow-1xl">
          тактика
        </li>
      </ul>

      <p className="p-4 m-4">Целевая аудитория: подходит для начинающих</p>
    </section>
  );
}