import React, { useContext } from "react";
import { StepperContext } from "../../Contexts/StepperContext";
import useFieldValidation from "../../Validations/Helpers/Formvalidator";

const HelperForm = () => {
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
        <h2 className="text-2xl font-semibold">Add Helper</h2>
        <p className="text-sm text-gray-600">
          Please provide the details below.
        </p>
      </div>
      <div className="space-y-8">
        <div className="space-y-2">
          <label
            htmlFor="companyName"
            className="block text-sm font-medium text-gray-700"
          >
            Company Name
          </label>
          <input
            id="companyName"
            type="text"
            value={data["companyName"] || ""}
            onChange={handleChange}
            placeholder="Your Company"
            className="w-full px-4 py-3 border rounded-md focus-within:border-gray-500 focus:outline-none"
          />
          {errors?.companyName && (
            <p className="text-red-500 text-sm">{errors.companyName}</p>
          )}
        </div>
        <div className="space-y-2">
          <label
            htmlFor="position"
            className="block text-sm font-medium text-gray-700"
          >
            Position
          </label>
          <input
            id="position"
            type="text"
            value={data["position"] || ""}
            onChange={handleChange}
            placeholder="Your Position"
            className="w-full px-4 py-3 border rounded-md focus-within:border-gray-500 focus:outline-none"
          />
          {errors?.position && (
            <p className="text-red-500 text-sm">{errors.position}</p>
          )}
        </div>
        <div className="space-y-2">
          <label
            htmlFor="website"
            className="block text-sm font-medium text-gray-700"
          >
            Website
          </label>
          <input
            id="website"
            type="url"
            value={data["website"] || ""}
            onChange={handleChange}
            placeholder="https://yourwebsite.com"
            className="w-full px-4 py-3 border rounded-md focus-within:border-gray-500 focus:outline-none"
          />
          {errors?.website && (
            <p className="text-red-500 text-sm">{errors.website}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default HelperForm;
