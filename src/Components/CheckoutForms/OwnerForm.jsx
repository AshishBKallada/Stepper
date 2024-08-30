import React, { useContext } from "react";
import { StepperContext } from "../../Contexts/StepperContext";
import useFieldValidation from "../../Validations/Helpers/Formvalidator";

const OwnerForm = () => {
  const { validateField } = useFieldValidation(); //calling customHook
  const { data, setData, errors } = useContext(StepperContext);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setData({ ...data, [id]: value });
    validateField(id, value);
  };

  return (
    <div className="w-full max-w-5xl mx-auto bg-white border-2 border-gray-150 rounded-lg p-10">
      <div className="mb-8 border-b pb-6">
        <h2 className="text-2xl font-semibold">Contact Us</h2>
        <p className="text-sm text-gray-600">
          Fill out the form below to get in touch.
        </p>
      </div>
      <div className="space-y-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              id="firstName"
              type="text"
              placeholder="John"
              value={data["firstName"] || ""}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-md focus:border-gray-500 focus:outline-none"
            />
            {errors?.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName}</p>
            )}
          </div>
          <div className="space-y-2">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              id="lastName"
              type="text"
              placeholder="Doe"
              value={data["lastName"] || ""}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-md focus:border-gray-500 focus:outline-none"
            />
            {errors?.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName}</p>
            )}
          </div>
        </div>
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="john@example.com"
            value={data["email"] || ""}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-md focus:border-gray-500 focus:outline-none"
          />
          {errors?.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}
        </div>
        <div className="space-y-2">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="754-456-7890"
            value={data["phone"] || ""}
            onChange={handleChange}
            pattern="[0-9]*"  
            inputMode="numeric"
            maxLength={10} 
            className="w-full px-4 py-3 border rounded-md focus:border-gray-500 focus:outline-none"
          />
          {errors?.phone && (
            <p className="text-red-500 text-sm">{errors.phone}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default OwnerForm;
