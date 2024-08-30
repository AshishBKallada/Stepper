import { createContext, useState } from "react";

const StepperContext = createContext([]);

const StepperProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});
  const [currStep, setCurrStep] = useState(1);

  return (
    <StepperContext.Provider
      value={{ data, setData, errors, setErrors, currStep, setCurrStep }}
    >
      {children}
    </StepperContext.Provider>
  );
};
export { StepperContext, StepperProvider };
