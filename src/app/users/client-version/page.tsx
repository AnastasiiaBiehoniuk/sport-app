"use client";
import { User } from "@/types";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function UsersClientVersion() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    const res = await fetch("https://api.escuelajs.co/api/v1/users", {
      headers: { "Api-Key": "asdasda.asdasd.asdasdasd9123adsmkkasd" },
    });
    if (!res.ok) {
      throw new Error("Failed to fetch users");
    }
    const arr = await res.json();

    const adapted = arr.map((u: any) => ({
      id: u.id,
      name: u.name,
      email: u.email,
      avatar: u.avatar,
      role: u.role,
      timestamps: {
        createdAt: u.creationAt,
        updatedAt: u.updatedAt,
      },
    }));
    setUsers(adapted);
  }

  return (
    <div className="max-w-3xl mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Список пользователей</h1>
      <ul className="grid gap-4">
        {users.map((user) => (
          <li
            key={user.id}
            className="flex items-center gap-4 p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition"
          >
            <img
              src={user.avatar}
              alt={user.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <p className="font-semibold text-lg">{user.name}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
            <Link
              href={`/users/client-version/${user.id}`}
              className="text-purple-600 font-medium hover:underline"
            >
              Подробнее →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}