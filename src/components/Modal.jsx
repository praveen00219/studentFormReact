const Modal = ({ viewingUser, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      {/* Modal Student Details */}
      <div
        className="relative bg-white p-8 rounded-lg shadow-md transform transition-all duration-300 scale-100 opacity-100"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
      >
        <button
          className="absolute top-2 right-2  hover:scale-105 active:scale-100 bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded transition"
          onClick={onClose}
        >
          X
        </button>
        <h3 className="text-2xl text-[#724b68] font-semibold mb-4">
          Student Details
        </h3>
        <div className="flex flex-col gap-1 items-start">
          <p>
            <strong>Student Name:</strong>{" "}
            {`${viewingUser.firstName} ${viewingUser.lastName}`}
          </p>
          <p>
            <strong>University:</strong> {viewingUser.university}
          </p>
          <p>
            <strong>Course:</strong> {viewingUser.course}
          </p>
          <p>
            <strong>Email:</strong> {viewingUser.email}
          </p>
          <p>
            <strong>Age:</strong> {viewingUser.age}
          </p>
          <p>
            <strong>Gender:</strong> {viewingUser.gender}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
