import React, { useContext } from "react";
import { StepperContext } from "../../Contexts/StepperContext";

const SummaryForm = () => {
  const { data } = useContext(StepperContext);

  return (
    <div className="w-full max-w-5xl mx-auto bg-white border-2 border-gray-150 rounded-lg p-10">
      <div className="mb-8 border-b pb-6">
        <h2 className="text-2xl font-semibold">Summary</h2>
        <p className="text-sm text-gray-600">Review the information below.</p>
      </div>
      <div className="space-y-7">
        <div className="space-y-2">
          <h3 className="text-lg font-medium text-gray-800">
            Owner Information
          </h3>
          <p>
            
            <strong>First Name:</strong> {data?.firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {data?.lastName}
          </p>
          <p>
            <strong>Email:</strong> {data?.email}
          </p>
          <p>
            <strong>Phone:</strong> {data?.phone}
          </p>
        </div>
        <div className="space-y-1">
          <h3 className="text-lg font-medium text-gray-800">Plan Details</h3>
          <p>
            <strong>Plan Name:</strong> {data?.planName}
          </p>
          <p>
            <strong>Start Date:</strong> {data?.startDate}
          </p>
          <p>
            <strong>End Date:</strong> {data?.endDate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SummaryForm;
