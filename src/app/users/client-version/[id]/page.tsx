import { User } from "@/types";
import Link from "next/link";

async function getUser(id: string): Promise<User> {
  const res = await fetch(`https://api.escuelajs.co/api/v1/users/${id}`, {
    headers: {
      "Api-Key": "asdasda.asdasd.asdasdasd9123adsmkkasd", 
    },
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch user");
  }
  const raw = await res.json();

  const user: User = {
    id: raw.id,
    name: raw.name,
    email: raw.email,
    avatar: raw.avatar,
    role: raw.role,
    timestamps: {
      createdAt: raw.creationAt,
      updatedAt: raw.updatedAt,
    },
  };
  
  return user;
}

export default async function UserPage({ params }: { params: { id: string } }) {
  const user = await getUser(params.id);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-xl rounded-2xl border border-gray-200">
      <div className="flex flex-col items-center text-center">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-32 h-32 rounded-full object-cover shadow mb-4"
        />
        <h1 className="text-2xl font-bold">{user.name}</h1>
        <p className="text-gray-600 text-sm">{user.email}</p>
        <p className="mt-2 text-sm">
          <span className="font-semibold">Роль:</span> {user.role}
        </p>
        <p className="text-sm text-gray-500 mt-1">
          Зарегистрирован:{" "}
          {new Date(user.timestamps.createdAt).toLocaleDateString()}
        </p>
        <Link
          href="/users/client-version"
          className="mt-6 inline-block bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded transition"
        >
          ← Назад
        </Link>
      </div>
    </div>
  );
}