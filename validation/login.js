const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  // EMAIL must be in email format
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  // EMAIL must have something in it
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  // PASSWORD is required
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
