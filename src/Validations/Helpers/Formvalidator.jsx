import { useContext } from "react";
import validationSchemas from "../Schemas/steppervalidSchema";
import { StepperContext } from "../../Contexts/StepperContext";

const useFieldValidation = () => {
  const { setErrors, currStep } = useContext(StepperContext);

  const validateField = (field, value) => {
    const schema = validationSchemas[currStep].extract(field);
    const { error } = schema.validate(value);

    if (error) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: error.details[0].message,
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, [field]: "" }));
    }
  };

  return { validateField };
};

export default useFieldValidation;
