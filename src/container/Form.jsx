import React, { useState } from "react";
import FormInput from "../components/FormInput";
import UserTable from "../components/UserTable";
import Modal from "../components/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const [users, setUsers] = useState([
    {
      university: "M.D.S. University, Ajmer",
      firstName: "Ram",
      lastName: "Sharma",
      email: "ramsharma123@gmail.com",
      age: "24",
      course: "Computer Science",
      gender: "Male",
    },
  ]);
  const [formData, setFormData] = useState({
    university: "",
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    course: "",
    gender: "",
  });
  const [editingIndex, setEditingIndex] = useState(null);
  const [viewingUser, setViewingUser] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { firstName, lastName, email, age, university, course, gender } =
      formData;

    // Check for empty fields
    if (
      !firstName ||
      !lastName ||
      !email ||
      !age ||
      !university ||
      !course ||
      !gender
    ) {
      setError("Please fill out all fields.");
      return false;
    }

    // Check for duplicate users (by email)
    const duplicateUser = users.find((user) => user.email === email);

    if (duplicateUser && editingIndex === null) {
      setError("Email already exists.");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) {
      return;
    }

    if (editingIndex !== null) {
      const updatedUsers = users.map((user, index) =>
        index === editingIndex ? formData : user
      );
      setUsers(updatedUsers);
      setEditingIndex(null);
      toast.success("Student details updated successfully!");
    } else {
      setUsers([...users, formData]);
      toast.success("Student registered successfully!");
    }

    setFormData({
      university: "",
      firstName: "",
      lastName: "",
      email: "",
      age: "",
      course: "",
      gender: "",
    });
  };

  const handleEdit = (index) => {
    setFormData(users[index]);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
    toast.error("Student deleted successfully!");
  };

  const handleViewDetails = (user) => {
    setViewingUser(user);
  };

  const handleCloseModal = () => {
    setViewingUser(null);
  };

  return (
    <div className="p-4 md:p-8 max-w-full lg:max-w-4xl mx-auto">
      <h1 className="text-2xl md:text-3xl text-[#406c6f] font-bold mb-6 text-center">
        Student Registration
      </h1>

      {/* Form */}
      <form
        className="bg-gray-100 p-4 md:p-6 shadow-md rounded-lg"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormInput
            label="First Name"
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <FormInput
            label="Last Name"
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <FormInput
            label="University Name"
            type="text"
            name="university"
            value={formData.university}
            onChange={handleChange}
          />
          <FormInput
            label="Email Address"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <FormInput
            label="Course"
            type="select"
            name="course"
            value={formData.course}
            onChange={handleChange}
            options={[
              "Computer Science",
              "Information Technology",
              "Data Science",
              "Electrical Engineering",
              "Mechanical Engineering",
            ]}
          />
          <div className="flex gap-6">
            <div className="w-full md:w-1/2">
              <FormInput
                label="Age"
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
              />
            </div>
            <div className="w-full md:w-1/2">
              <FormInput
                label="Gender"
                type="select"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                options={["Male", "Female", "Other"]}
              />
            </div>
          </div>
        </div>
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        <div className="mt-6 flex justify-center">
          <button
            type="submit"
            className="w-full md:w-[96%] hover:scale-105 active:scale-100 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded focus:outline-none transition duration-300"
          >
            {editingIndex !== null ? "Update Student" : "Register Student"}
          </button>
        </div>
      </form>

      {/* User Table */}
      <h2 className="text-xl md:text-2xl text-[#1bb6f9] font-semibold mt-14 mb-4">
        Registered Students
      </h2>
      <div className="overflow-x-auto">
        <UserTable
          users={users}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onViewDetails={handleViewDetails}
        />
      </div>

      {/* Modal for User Details */}
      {viewingUser && (
        <Modal viewingUser={viewingUser} onClose={handleCloseModal} />
      )}

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default Form;
