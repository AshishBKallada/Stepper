import React, { useContext, useState } from "react";
import { StepperContext } from "../Contexts/StepperContext";
import validationSchemas from "../Validations/Schemas/steppervalidSchema";
import Overlay from "./Loaders/overlaymodal";

const CheckoutStepper = ({ steps }) => {
  const { data, setData, setErrors, currStep, setCurrStep } =
    useContext(StepperContext);
  const [showOverlay, setShowOverlay] = useState(false);

  const handleNext = () => {
    let filteredData = {};

    switch (currStep) {
      case 1:
        filteredData = {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          phone: data.phone,
        };
        break;
      case 2:
        filteredData = {
          companyName: data.companyName,
          position: data.position,
          website: data.website,
        };
        break;
      case 3:
        filteredData = {
          planName: data.planName,
          startDate: data.startDate,
          endDate: data.endDate,
        };
        break;
      default:
        filteredData = {};
    }

    // Validate data based on the current step's schema
    const schema = validationSchemas[currStep];
    if (schema) {
      const { error } = schema.validate(filteredData, { abortEarly: false });
      if (error) {
        const errorMessages = error.details.reduce((acc, { path, message }) => {
          acc[path[0]] = message;
          return acc;
        }, {});
        setErrors(errorMessages);
        return;
      }
    }
    //if the user is on the last page/step upon click, show overlay and forward to step 1 after form is cleared
    if (currStep === steps.length) {
      setShowOverlay(true);

      setTimeout(() => {
        setData({});
        setErrors({});
        setCurrStep(1);
        setShowOverlay(false);
      }, 3000);
    } else {
      setErrors({});
      setCurrStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setCurrStep((prev) => prev - 1);
  };

  // Determine which component to render based on the current step
  const ActiveComponent = steps[currStep - 1]?.Component;

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-200 p-3">
      <Overlay show={showOverlay} />

      <div className="w-full max-w-4xl bg-white my-3 p-4 sm:p-6 md:p-8 rounded-lg shadow-lg">
        <div className="hidden md:flex items-center justify-center w-full py-3 mb-6">
          <div className="flex items-center justify-between w-full max-w-3xl">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full font-semibold ${
                    currStep > index + 1
                      ? "bg-black text-white"
                      : "bg-gray-100 border-2 text-black"
                  }`}
                >
                  {currStep > index + 1 ? <span>&#10003;</span> : index + 1}
                </div>
                <span
                  className={`ml-1 ${
                    currStep > index + 1 ? "text-gray-800" : "text-gray-400"
                  } `}
                >
                  {step.name}
                </span>
                {index < steps.length - 1 && (
                  <div
                    className={`h-1 flex-1 mx-1 ${
                      currStep > index + 1 ? "bg-black" : "bg-gray-200"
                    }`}
                  ></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="mb-6 md:mb-8">
          <div className="flex justify-center items-center min-h-[120px] md:min-h-[160px]">
            {ActiveComponent ? (
              <ActiveComponent />
            ) : (
              <div className="text-gray-500 italic">
                Component Not Available
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between md:items-center space-y-3 md:space-y-0">
          {currStep > 1 && (
            <button
              onClick={handleBack}
              className="bg-gray-300 hover:bg-gray-600 md:bg-black md:hover:bg-gray-800 rounded-md px-3 py-2 md:px-5 md:py-2 text-white w-full md:w-auto"
              disabled={currStep === 1}
            >
              <span className="hidden md:inline">&#8592;</span> Back
            </button>
          )}
          <button
            onClick={handleNext}
            className={`bg-black rounded-md px-3 py-2 md:px-5 md:py-2 text-white w-full md:w-auto ${
              currStep > 1 ? "md:ml-auto" : "md:ml-auto"
            }`}
          >
            {currStep === steps.length ? (
              "Finish"
            ) : (
              <>
                <span className="inline md:hidden">Continue</span>{" "}
                <span className="hidden md:inline">
                  Next <span className="hidden md:inline">&#x2192;</span>{" "}
                </span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutStepper;
