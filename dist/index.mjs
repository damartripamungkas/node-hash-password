// src/index.ts
import { utils } from "ethers";
var hashWithKeccak256 = (param) => {
  const { password } = param;
  return utils.keccak256(utils.toUtf8Bytes(password.toString()));
};
var hashWithSha256 = (param) => {
  const { password } = param;
  return utils.sha256(utils.toUtf8Bytes(password.toString()));
};
var hashWithSha512 = (param) => {
  const { password } = param;
  return utils.sha512(utils.toUtf8Bytes(password.toString()));
};
var compareHashAndPassword = (param) => {
  const { method, hash, password } = param;
  const hashFunc = method == "keccak256" ? hashWithKeccak256 : method == "sha256" ? hashWithSha256 : method == "sha512" ? hashWithSha512 : null;
  if (hashFunc === null)
    throw new Error("method is not found");
  const result = hash.toLowerCase() == hashFunc({ password });
  return result;
};
var src_default = { hashWithKeccak256, hashWithSha256, hashWithSha512, compareHashAndPassword };
export {
  compareHashAndPassword,
  src_default as default,
  hashWithKeccak256,
  hashWithSha256,
  hashWithSha512
};
