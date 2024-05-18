import { Alert, Select } from "flowbite-react";
import { useState } from "react";

function Register() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (
    //   !formData.fname ||
    //   !formData.email ||
    //   !formData.pnumber ||
    //   !formData.gender
    // ) {
    //   return setErrorMessage("Please fill out all fields");
    // }

    try {
      setErrorMessage(null);
      const res = await fetch("http://localhost:3557/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return setErrorMessage(data.message);
      }
      if (res.ok) {
        //Alert("Email has been sent");
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };
  return (
    <>
      <div className="bg-cover h-[100px] md:h-[300px] flex items-center justify-center bg-[url('https://t4.ftcdn.net/jpg/05/71/83/47/360_F_571834789_ujYbUnH190iUokdDhZq7GXeTBRgqYVwa.jpg')]">
        <h1 className="text-white font-extrabold text-6xl font-Oswald">
          Registration Page
        </h1>
      </div>
      <div className="max-w-3xl mx-auto">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            type="text"
            name="fname"
            id="fname"
            onChange={handleChange}
            placeholder="Full Name"
            className="mb-5 rounded-md py-6 border border-slate-300"
          />
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            placeholder="Email"
            className="mb-5 rounded-md py-6 border border-slate-300"
          />
          <input
            type="number"
            name="pnumber"
            id="pnumber"
            onChange={handleChange}
            placeholder="Phone"
            className="mb-5 rounded-md py-6 border border-slate-300"
          />
          <Select
            name="gender"
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </Select>

          <button
            type="submit"
            className="bg-red-500 rounded-tr-2xl rounded-bl-2xl text-xl md:text-2xl text-white p-4 font-bold"
          >
            Register
          </button>
        </form>
        {errorMessage && (
          <Alert className="mt-5" color="failure">
            {errorMessage}
          </Alert>
        )}
      </div>
    </>
  );
}

export default Register;
