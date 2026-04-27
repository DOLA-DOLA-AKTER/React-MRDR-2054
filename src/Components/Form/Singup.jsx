import React, { useState } from "react";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [errors, setErrors] = useState([]);
  const [fieldError, setFieldError] = useState({});

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // remove error on typing
    setFieldError({
      ...fieldError,
      [name]: false,
    });

    setErrors([]);
  };

  // Validation Function
  const validateForm = () => {
    let newErrors = [];
    let newFieldError = {};

    if (!formData.firstname) {
      newErrors.push("Firstname is required");
      newFieldError.firstname = true;
    }

    if (!formData.email) {
      newErrors.push("Email is required");
      newFieldError.email = true;
    }

    if (!formData.password) {
      newErrors.push("Password is required");
      newFieldError.password = true;
    }

    if (formData.password.length < 8) {
      newErrors.push("Password must be at least 8 characters");
      newFieldError.password = true;
    }

    if (formData.password !== formData.repeatPassword) {
      newErrors.push("Passwords do not match");
      newFieldError.password = true;
      newFieldError.repeatPassword = true;
    }

    setErrors(newErrors);
    setFieldError(newFieldError);

    return newErrors.length === 0;
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert("Form submitted সফলভাবে ✅");
    }
  };

  return (
    <div className="min-h-screen bg-[url('./img/bg.png')] bg-cover bg-right flex">
      <div className="bg-white h-screen w-[600px] max-w-full p-6 rounded-r-2xl flex flex-col items-center justify-center">

        <h1 className="text-4xl font-black uppercase">Signup</h1>

        {/* Error Message */}
        {errors.length > 0 && (
          <p className="text-red-400 mt-2">{errors.join(". ")}</p>
        )}

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-[400px] mt-5 mb-10 flex flex-col items-center gap-3"
        >

          {/* Firstname */}
          <div className="w-full flex">
            <label className={`w-[50px] h-[50px] flex items-center justify-center rounded-l-lg ${fieldError.firstname ? "bg-red-400" : "bg-[#8672FF]"}`}>
              <span className="text-white">👤</span>
            </label>

            <input
              type="text"
              name="firstname"
              placeholder="Firstname"
              value={formData.firstname}
              onChange={handleChange}
              className={`flex-grow h-[50px] p-3 border-2 rounded-r-lg focus:outline-none 
              ${fieldError.firstname ? "border-red-400 bg-red-50" : "border-[#F3F0FF] bg-[#F3F0FF] hover:border-[#8672FF]"}`}
            />
          </div>

          {/* Email */}
          <div className="w-full flex">
            <label className={`w-[50px] h-[50px] flex items-center justify-center rounded-l-lg ${fieldError.email ? "bg-red-400" : "bg-[#8672FF]"}`}>
              <span className="text-white">📧</span>
            </label>

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={`flex-grow h-[50px] p-3 border-2 rounded-r-lg focus:outline-none 
              ${fieldError.email ? "border-red-400 bg-red-50" : "border-[#F3F0FF] bg-[#F3F0FF] hover:border-[#8672FF]"}`}
            />
          </div>

          {/* Password */}
          <div className="w-full flex">
            <label className={`w-[50px] h-[50px] flex items-center justify-center rounded-l-lg ${fieldError.password ? "bg-red-400" : "bg-[#8672FF]"}`}>
              <span className="text-white">🔒</span>
            </label>

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className={`flex-grow h-[50px] p-3 border-2 rounded-r-lg focus:outline-none 
              ${fieldError.password ? "border-red-400 bg-red-50" : "border-[#F3F0FF] bg-[#F3F0FF] hover:border-[#8672FF]"}`}
            />
          </div>

          {/* Repeat Password */}
          <div className="w-full flex">
            <label className={`w-[50px] h-[50px] flex items-center justify-center rounded-l-lg ${fieldError.repeatPassword ? "bg-red-400" : "bg-[#8672FF]"}`}>
              <span className="text-white">🔒</span>
            </label>

            <input
              type="password"
              name="repeatPassword"
              placeholder="Repeat Password"
              value={formData.repeatPassword}
              onChange={handleChange}
              className={`flex-grow h-[50px] p-3 border-2 rounded-r-lg focus:outline-none 
              ${fieldError.repeatPassword ? "border-red-400 bg-red-50" : "border-[#F3F0FF] bg-[#F3F0FF] hover:border-[#8672FF]"}`}
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="mt-3 px-10 py-3 rounded-full bg-[#8672FF] text-white font-semibold hover:bg-[#2E2B41] transition"
          >
            Signup
          </button>
        </form>

        <p>
          Already have an account?{" "}
          <a href="/login" className="text-[#8672FF] hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;