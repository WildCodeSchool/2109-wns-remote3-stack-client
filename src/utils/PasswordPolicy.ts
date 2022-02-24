/**
 * Only allows for:
 * - 8 minimum characters
 * - Alphanumeric characters
 * - No spacing allowed
 */
const passwordRegexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

export { passwordRegexp };
