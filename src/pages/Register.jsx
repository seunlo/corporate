import { Alert, Select } from "flowbite-react";
import { useState } from "react";
import { toast } from "react-toastify";

function Register() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    pnumber: "",
    gender: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (
    //   !formData.firstname ||
    //   !formData.lastname ||
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
        toast.success("Thank you for your registration");
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };
  return (
    <>
      <div className="bg-cover h-[100px] md:h-[200px] flex items-center justify-center bg-[url('https://t4.ftcdn.net/jpg/05/71/83/47/360_F_571834789_ujYbUnH190iUokdDhZq7GXeTBRgqYVwa.jpg')]">
        <h1 className="text-white font-bold text-3xl font-montserrat">
          Pitch Application
        </h1>
      </div>
      <div className="max-w-3xl mx-auto py-5 p-2">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstname"
            id="firstname"
            value={formData.firstname}
            onChange={handleChange}
            placeholder="First Name"
            className="rounded-md mb-2 py-4 border border-slate-300"
          />
          <input
            type="text"
            name="lastname"
            id="lastname"
            value={formData.lastname}
            onChange={handleChange}
            placeholder="Last Name"
            className="rounded-md py-4 border border-slate-300"
          />
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="my-2 rounded-md py-4 border border-slate-300"
          />
          <input
            type="number"
            name="pnumber"
            id="pnumber"
            value={formData.pnumber}
            onChange={handleChange}
            placeholder="Phone Number"
            className="rounded-md py-4 border border-slate-300"
          />
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="my-2 rounded-md py-4 border border-slate-300"
          >
            <option value="" disabled>
              Select Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <button
            type="submit"
            className="inline-flex items-center justify-center px-5 py-3 border border-limeGreen rounded-tl-2xl rounded-br-2xl text-base font-medium text-white hover:bg-limeGreen"
          >
            Apply
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
