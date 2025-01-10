import React from "react";

interface propsType {
  user: { name: string; age: number };
}

const Users = ({ user }: propsType) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
      <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
      <p className="mt-2 text-gray-600">
        Age: {user.age}
      </p>
    </div>
  );
};

export default Users;
