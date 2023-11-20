import { utils } from "ethers";

interface IfacePassword {
  password: string;
}

interface IfaceCompare {
  method: string;
  hash: string;
  password: string;
}

/**
 *
 * @param_password string plain text
 * @returns string hash with length 66
 */
const hashWithKeccak256 = (param: IfacePassword) => {
  const { password } = param;
  return utils.keccak256(utils.toUtf8Bytes(password.toString()));
};

/**
 *
 * @param_password string plain text
 * @returns string hash with length 66
 */
const hashWithSha256 = (param: IfacePassword) => {
  const { password } = param;
  return utils.sha256(utils.toUtf8Bytes(password.toString()));
};

/**
 *
 * @param_password string plain text
 * @returns string hash with length 130
 */
const hashWithSha512 = (param: IfacePassword) => {
  const { password } = param;
  return utils.sha512(utils.toUtf8Bytes(password.toString()));
};

/**
 *
 * @param_method string. algoritma method example keccak256, sha256, sha512
 * @param_hash string. result from algoritma hash
 * @param_password string. your pure password plain text
 * @returns boolean. if true password and hash is match
 */
const compareHashAndPassword = (param: IfaceCompare) => {
  const { method, hash, password } = param;
  const hashFunc = method == "keccak256" ? hashWithKeccak256 : method == "sha256" ? hashWithSha256 : method == "sha512" ? hashWithSha512 : null;
  if (hashFunc === null) throw new Error("method is not found");
  const result = hash.toLowerCase() == hashFunc({ password });
  return result;
};

export { hashWithKeccak256, hashWithSha256, hashWithSha512, compareHashAndPassword };
export default { hashWithKeccak256, hashWithSha256, hashWithSha512, compareHashAndPassword };
