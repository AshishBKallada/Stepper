import Joi from 'joi';

const validationSchemas = {
  1: Joi.object({
    firstName: Joi.string()
      .min(2)
      .required()
      .label("First Name")
      .messages({
        "string.empty": "First Name is required.",
        "string.min": "First Name must be at least 2 characters long.",
      }),
    lastName: Joi.string()
      .min(2)
      .required()
      .label("Last Name")
      .messages({
        "string.empty": "Last Name is required.",
        "string.min": "Last Name must be at least 2 characters long.",
      }),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .label("Email")
      .messages({
        "string.empty": "Email is required.",
        "string.email": "Email must be a valid email address.",
      }),
      phone: Joi.string()
      .pattern(/^[0-9]*$/) 
      .required()
      .length(10) 
      .label("Phone")
      .messages({
        "string.empty": "Phone number is required.",
        "string.pattern.base": "Phone number must contain only numeric characters.",
        "string.length": "Phone number must be exactly 10 digits long.",
      }),
  }),
  2: Joi.object({
    companyName: Joi.string()
      .min(2)
      .required()
      .label("Company Name")
      .messages({
        "string.empty": "Company Name is required.",
        "string.min": "Company Name must be at least 2 characters long.",
      }),
    position: Joi.string()
      .min(2)
      .required()
      .label("Position")
      .messages({
        "string.empty": "Position is required.",
        "string.min": "Position must be at least 2 characters long.",
      }),
    website: Joi.string()
      .uri()
      .required()
      .label("Website")
      .messages({
        "string.empty": "Website URL is required.",
        "string.uri": "Website must be a valid URL.",
      }),
  }),
  3: Joi.object({
    planName: Joi.string()
      .min(2)
      .required()
      .label("Plan Name")
      .messages({
        "string.empty": "Plan Name is required.",
        "string.min": "Plan Name must be at least 2 characters long.",
      }),
    startDate: Joi.date()
      .required()
      .label("Start Date")
      .messages({
        "date.base": "Start Date must be a valid date.",
        "any.required": "Start Date is required.",
      }),
    endDate: Joi.when('startDate', {
      is: Joi.exist(),
      then: Joi.date()
        .min(Joi.ref('startDate'))
        .required()
        .label("End Date")
        .messages({
          "date.base": "End Date must be a valid date.",
          "any.required": "End Date is required.",
          "date.min": "End Date must be after the Start Date.",
        }),
      otherwise: Joi.date()
        .required()
        .label("End Date")
        .messages({
          "any.required": "End Date is required.",
        }),
    }),
  }),
};

export default validationSchemas;
