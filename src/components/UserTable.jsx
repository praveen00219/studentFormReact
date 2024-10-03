const UserTable = ({ users, onEdit, onDelete, onViewDetails }) => {
  return (
    <div className="relative overflow-x-auto">
      {users.length > 0 ? (
        <table className="w-full bg-white rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-200 text-gray-700 ">
              <th className="p-2 sm:p-4 text-xs sm:text-base">
                Student's Name
              </th>
              <th className="p-2 sm:p-4 text-xs sm:text-base">Email</th>
              {/* Hide this column on screens smaller than 'sm' (640px) */}
              <th className="hidden sm:table-cell p-2 sm:p-4 text-xs sm:text-base">
                University
              </th>
              <th className="p-2 sm:p-4 text-xs sm:text-base">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index} className="border-b text-xs sm:text-base">
                <td className="p-2 sm:p-4">
                  <button
                    onClick={() => onViewDetails(user)}
                    className="text-green-500 hover:scale-105 active:scale-100 hover:text-green-700 transition"
                  >
                    {`${user.firstName} ${user.lastName}`}
                  </button>
                </td>
                <td className="p-2 sm:p-4">{user.email}</td>
                {/* Hide the university column on mobile */}
                <td className="hidden sm:table-cell p-2 sm:p-4">
                  {user.university}
                </td>
                <td className="p-2 sm:p-4 flex gap-2 sm:gap-3 justify-center">
                  <button
                    onClick={() => onEdit(index)}
                    className="text-blue-500 hover:scale-105 active:scale-100 hover:text-blue-700 transition"
                  >
                    <span>
                      <i
                        className="fa-regular fa-pen-to-square"
                        style={{ color: "#FFD43B" }}
                      ></i>
                    </span>
                  </button>
                  <button
                    onClick={() => onDelete(index)}
                    className="text-red-500 hover:scale-105 active:scale-100 hover:text-red-700 transition"
                  >
                    <span>
                      <i
                        className="fa-solid fa-trash"
                        style={{ color: "#fb3f32" }}
                      ></i>
                    </span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-gray-600 mt-4">
          No students registered yet.
        </p>
      )}
    </div>
  );
};

export default UserTable;
