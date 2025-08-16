const validateLogin = (email, password) => {

  let errors = {}

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  //email invalid
  if (!emailRegex.test(email)) {
    errors.emailMessage = "Invalid email format"
  };

  //password invalid
  if (!passwordRegex.test(password)) {
    errors.passwordMessage = "Password must be at least 8 characters, include one letter and one number"
  }

  return errors;

}

export const validateSignUp = (email, password, name) => {

  let errors = {};

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;


  //email invalid
  if (!emailRegex.test(email)) {
    errors.emailMessage = "Invalid email format"
  };

  //password invalid
  if (!passwordRegex.test(password)) {
    errors.passwordMessage = "Password must be at least 8 characters, include one letter and one number"
  }

  //if name is empty
  if (name == '') {
    errors.nameErrorMessage = "Name is required"
  }

  return errors;
}

export default validateLogin;