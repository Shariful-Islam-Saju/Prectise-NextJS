"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useQueries } from "@tanstack/react-query";

type User = {
  name: string;
  age: number;
};

const Users = () => {
  const [users, setUsers] = useState<User[]>([]); // Correctly typed as an array of `User`
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await axios.get<User[]>("http://localhost:4000/users");
        setUsers(response.data); // The response's `data` is of type `User[]`
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      {loading ? (
        // Add the loading spinner
        <div className="flex items-center justify-center w-full ">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
          {users.map((user, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300"
            >
              <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
              <p className="mt-2 text-gray-600">Age: {user.age}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Users;
