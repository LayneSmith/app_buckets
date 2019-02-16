const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  // NAME must be more than 2 characters
  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Name must be between 2 and 30 characters.";
  }

  // NAME must have somethign in it
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  // EMAIL must have something in it
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  // EMAIL must be in email format
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  // EMAIL field is required
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  // PASSWORD is required
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  // PASSWORD must be between 6-30 characters
  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be between six and 30 characters.";
  }

  // PASSWORD 2 is required
  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm password field is required";
  }

  // PASSWORD and PASSWORD 2 must match
  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
