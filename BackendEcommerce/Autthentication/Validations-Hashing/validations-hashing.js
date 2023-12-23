import bcrypt from "bcrypt";

export default async function encryptPassword(argumentPassword) {
  let saltRounds = 10;
  let password = argumentPassword;
  return bcrypt
    .hash(password, saltRounds)
    .then((hashedPassword) => hashedPassword);
}
