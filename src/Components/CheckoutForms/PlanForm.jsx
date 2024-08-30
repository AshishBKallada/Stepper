import React, { useContext } from "react";
import { StepperContext } from "../../Contexts/StepperContext";
import useFieldValidation from "../../Validations/Helpers/Formvalidator";

const PlanForm = () => {
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
        <h2 className="text-2xl font-semibold">Add Plan Details</h2>
        <p className="text-sm text-gray-600">
          Provide the details of your plan below.
        </p>
      </div>
      <div className="space-y-8">
        <div className="space-y-2">
          <label
            htmlFor="planName"
            className="block text-sm font-medium text-gray-700"
          >
            Plan Name
          </label>
          <input
            id="planName"
            type="text"
            value={data["planName"] || ""}
            onChange={handleChange}
            placeholder="Enter the plan name"
            className="w-full px-4 py-3 border rounded-md focus:border-gray-500 focus:outline-none"
          />
          {errors?.planName && (
            <p className="text-red-500 text-sm">{errors.planName}</p>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="startDate"
            className="block text-sm font-medium text-gray-700"
          >
            Start Date
          </label>
          <input
            id="startDate"
            type="date"
            value={data["startDate"] || ""}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-md focus:border-gray-500 focus:outline-none"
          />
          {errors?.startDate && (
            <p className="text-red-500 text-sm">{errors.startDate}</p>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="endDate"
            className="block text-sm font-medium text-gray-700"
          >
            End Date
          </label>
          <input
            id="endDate"
            type="date"
            value={data["endDate"] || ""}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-md focus:border-gray-500 focus:outline-none"
          />
          {errors?.endDate && (
            <p className="text-red-500 text-sm">{errors.endDate}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlanForm;
