export const pathLink = process.env.REACT_APP_BACK_URL!

export const validateEmail = (email: string) => {
  const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (email.match(validRegex)) {
    return false;
  } else {
    return true;
  }
}
