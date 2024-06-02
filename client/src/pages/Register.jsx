import React, { useState, useEffect } from "react";
import { Alert } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const FormStep = ({
  children,
  isVisible,
  isLastStep,
  onNext,
  errorMessage,
}) => (
  <div
    className={`transition-opacity duration-500 ${
      isVisible ? "opacity-100" : "opacity-0 hidden"
    }`}
  >
    {children}
    {errorMessage && <div className="mt-2">{errorMessage}</div>}
    {!isLastStep && (
      <button
        type="button"
        className="px-5 py-3 border border-limeGreen rounded-tl-2xl rounded-br-2xl text-base font-medium text-white w-full bg-limeGreen mt-2"
        onClick={onNext}
      >
        Next
      </button>
    )}
  </div>
);

function Register() {
  const navigate = useNavigate();
  const apiUrl = "https://todonodeserver.elaloeyfoundry.com";
  const [formData, setFormData] = useState({
    form_fullname: "",
    form_email: "",
    form_pnumber: "",
    form_gender: "",
    form_s_media: "",
    form_h_address: "",
    form_edu_back: "",
    form_work_exp: "",
    form_prob: "",
    form_sol: "",
    form_industry: "",
    form_stage: "",
    form_investor: "",
    form_challeng: "",
    form_expect: "",
  });
  const [errorMessage, setErrorMessage] = useState(null);
  const [step, setStep] = useState(0);
  const [isFieldValid, setIsFieldValid] = useState(false);
  const [fieldErrorMessage, setFieldErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setIsFieldValid(value.trim() !== "");
    setFieldErrorMessage("");
  };

  useEffect(() => {
    const currentField = Object.keys(formData)[step];
    setIsFieldValid(formData[currentField] !== "");
  }, [step, formData]);

  const handleNextStep = () => {
    const currentField = Object.keys(formData)[step];
    if (!formData[currentField]) {
      setFieldErrorMessage(`Please fill the fields above before you proceed`);
      return;
    }
    setFieldErrorMessage("");
    if (step < 2) setStep(step + 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setErrorMessage(null);
      const res = await fetch(`http://localhost:4000/register`, {
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
        navigate("/");
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <>
      <div className="bg-cover h-[100px] md:h-[200px] flex items-center justify-center bg-[url('https://t4.ftcdn.net/jpg/05/71/83/47/360_F_571834789_ujYbUnH190iUokdDhZq7GXeTBRgqYVwa.jpg')]">
        <h1 className="text-white font-bold text-3xl font-montserrat">
          Pitch Application Form
        </h1>
      </div>
      <div className="max-w-2xl mx-auto py-5 p-4 bg-white my-5 rounded-xl shadow-xl font-montserrat text-[14px]">
        <p className="mb-10 text-center text-[16px]">
          Hey there, welcome to Elaloey Foundry - the oxygen for your Startup!
        </p>
        <form className="flex flex-col relative" onSubmit={handleSubmit}>
          <FormStep
            isVisible={step === 0}
            isLastStep={false}
            onNext={handleNextStep}
            errorMessage={fieldErrorMessage}
          >
            <p className="mb-5 text-center">
              Section A - <span>Tell us about you...</span>
            </p>
            <label className="">What is your name?</label>
            <input
              type="text"
              name="form_fullname"
              id="form_fullname"
              value={formData.form_fullname}
              onChange={handleChange}
              placeholder="Type your answer here..."
              className="rounded-md py-2 border border-slate-300 w-full mt-1 mb-3 text-[14px]"
            />
            <label className="">What is your email?</label>
            <input
              type="email"
              name="form_email"
              id="form_email"
              value={formData.form_email}
              onChange={handleChange}
              placeholder="Type your answer here..."
              className="rounded-md py-2 border border-slate-300 w-full mt-1 mb-3 text-[14px]"
            />
            <label className="">What is your phone number?</label>
            <input
              type="number"
              name="form_pnumber"
              id="form_pnumber"
              value={formData.form_pnumber}
              onChange={handleChange}
              placeholder="Type your answer here..."
              className="rounded-md py-2 border border-slate-300 w-full mt-1 mb-3 text-[14px]"
            />
            <label className="">What is your gender?</label>
            <select
              name="form_gender"
              value={formData.form_gender}
              onChange={handleChange}
              className="rounded-md py-2 border border-slate-300 w-full mt-1 mb-3 text-[14px]"
            >
              <option value="" disabled>
                Select Your Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <label className="">What is your social media handle?</label>
            <input
              type="text"
              name="form_s_media"
              id="form_s_media"
              value={formData.form_s_media}
              onChange={handleChange}
              placeholder="Type your answer here..."
              className="rounded-md py-2 border border-slate-300 w-full mt-1 mb-3 text-[14px]"
            />
            <label className="">What is your home address?</label>
            <input
              type="text"
              name="form_h_address"
              id="form_h_address"
              value={formData.form_h_address}
              onChange={handleChange}
              placeholder="Type your answer here..."
              className="rounded-md py-2 border border-slate-300 w-full mt-1 mb-3 text-[14px]"
            />
            <label className="">What is your educational background?</label>
            <input
              type="text"
              name="form_edu_back"
              id="form_edu_back"
              value={formData.form_edu_back}
              onChange={handleChange}
              placeholder="Type your answer here..."
              className="rounded-md py-2 border border-slate-300 w-full mt-1 mb-3 text-[14px]"
            />
            <label className="">Tell us about your work experience?</label>
            <textarea
              name="form_work_exp"
              id="form_work_exp"
              value={formData.form_work_exp}
              onChange={handleChange}
              placeholder="Type your answer here..."
              className="rounded-md py-2 border border-slate-300 w-full mt-1 text-[14px]"
            ></textarea>
          </FormStep>
          <FormStep
            isVisible={step === 1}
            isLastStep={false}
            onNext={handleNextStep}
            errorMessage={fieldErrorMessage}
          >
            <p className="text-center mb-5">
              Section B - <span>Hint us about your Startup/Idea…</span>
            </p>
            <label className="">What problem are you solving?</label>
            <textarea
              name="form_prob"
              id="form_prob"
              value={formData.form_prob}
              onChange={handleChange}
              placeholder="Type your answer here..."
              className="rounded-md py-2 border border-slate-300 w-full mt-1 mb-3 text-[14px]"
            />
            <label className="">What's the solution/idea/product called?</label>
            <textarea
              name="form_sol"
              id="form_sol"
              value={formData.form_sol}
              onChange={handleChange}
              placeholder="Type your answer here..."
              className="rounded-md py-2 border border-slate-300 w-full mt-1 mb-3 text-[14px]"
            />
            <label className="">
              What industry/ecosystem best describes your Startup/Idea?
            </label>
            <select
              name="form_industry"
              value={formData.form_industry}
              onChange={handleChange}
              className="rounded-md py-2 border border-slate-300 w-full mt-1 mb-3 text-[14px]"
            >
              <option value="" disabled>
                Select your response
              </option>
              <option value="Food/Retail">Food/Retail</option>
              <option value="tech">Tech</option>
              <option value="travel & hospitality">Travel & Hospitality</option>
              <option value="health">Health</option>
              <option value="education">Education</option>
              <option value="finance">Finance</option>
              <option value="others">Others</option>
            </select>
            <label className="">
              What is the current stage of your Startup/Idea?
            </label>
            <select
              name="form_stage"
              value={formData.form_stage}
              onChange={handleChange}
              className="rounded-md py-2 border border-slate-300 w-full mt-1 mb-3 text-[14px]"
            >
              <option value="" disabled>
                Select your response
              </option>
              <option value="raw idea">Raw Idea</option>
              <option value="pre-seed">Pre-seed</option>
              <option value="seed">Seed</option>
            </select>
            <label className="">
              Do you currently have any investor in the Startup/Idea?
            </label>
            <select
              name="form_investor"
              value={formData.form_investor}
              onChange={handleChange}
              className="rounded-md py-2 border border-slate-300 w-full mt-1 text-[14px]"
            >
              <option value="" disabled>
                Select your response
              </option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </FormStep>
          <FormStep
            isVisible={step === 2}
            isLastStep={true}
            errorMessage={fieldErrorMessage}
          >
            <p className="text-center mb-5">
              Section C - <span>Share your expectations with us…</span>
            </p>
            <label className="">What are your major challenges?</label>
            <select
              name="form_challeng"
              value={formData.form_challeng}
              onChange={handleChange}
              className="rounded-md py-2 border border-limeGreen w-full mt-1 mb-3 text-[14px]"
            >
              <option value="" disabled>
                Select your response
              </option>
              <option value="mentorship">Mentorship</option>
              <option value="corporate services">Corporate Services</option>
              <option value="business advisory">Business Advisory</option>
              <option value="funding">Funding</option>
            </select>
            <label className="">Describe your specific expectations?</label>
            <textarea
              name="form_expect"
              id="form_expect"
              value={formData.form_expect}
              onChange={handleChange}
              placeholder="Type your answer here..."
              className="rounded-md py-2 border border-slate-300 w-full mt-1 text-[14px]"
            />
            <button
              type="submit"
              className="px-5 py-3 border border-limeGreen rounded-tl-2xl rounded-br-2xl text-base font-medium w-full text-white bg-limeGreen mt-4"
            >
              Apply
            </button>
          </FormStep>
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
