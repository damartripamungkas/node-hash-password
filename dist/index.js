var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  compareHashAndPassword: () => compareHashAndPassword,
  default: () => src_default,
  hashWithKeccak256: () => hashWithKeccak256,
  hashWithSha256: () => hashWithSha256,
  hashWithSha512: () => hashWithSha512
});
module.exports = __toCommonJS(src_exports);
var import_ethers = require("ethers");
var hashWithKeccak256 = (param) => {
  const { password } = param;
  return import_ethers.utils.keccak256(import_ethers.utils.toUtf8Bytes(password.toString()));
};
var hashWithSha256 = (param) => {
  const { password } = param;
  return import_ethers.utils.sha256(import_ethers.utils.toUtf8Bytes(password.toString()));
};
var hashWithSha512 = (param) => {
  const { password } = param;
  return import_ethers.utils.sha512(import_ethers.utils.toUtf8Bytes(password.toString()));
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  compareHashAndPassword,
  hashWithKeccak256,
  hashWithSha256,
  hashWithSha512
});
