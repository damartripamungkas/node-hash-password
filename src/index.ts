import { keccak256, sha256, sha512, toUtf8Bytes } from "ethers"
import { TypeCompare } from "./type"

const to8bytes = (v: any) => toUtf8Bytes(v.toString())

/**
 *
 * @password string plain text
 * @returns string hash with prefix 0x
 */
const hashWithKeccak256 = (password: string) => keccak256(to8bytes(password))

/**
 *
 * @password string plain text
 * @returns string hash with prefix 0x
 */
const hashWithSha256 = (password: string) => sha256(to8bytes(password))

/**
 *
 * @password string plain text
 * @returns string hash with prefix 0x
 */
const hashWithSha512 = (password: string) => sha512(to8bytes(password))

/**
 *
 * @method string. algoritma method example keccak256, sha256, sha512
 * @hash string. result from algoritma hash
 * @password string. your pure password plain text
 * @returns boolean. if true password and hash is match
 */
const compareHashAndPassword = (param: TypeCompare) => {
  const { method, hash, password } = param
  const hashFunc = method == `keccak256` ? hashWithKeccak256 : method == `sha256` ? hashWithSha256 : method == `sha512` ? hashWithSha512 : null
  if (hashFunc === null) {
    throw new Error(`method is not found`)
  }
  const result = hash.toLowerCase() == hashFunc(password)
  return result
}

/**
 *
 * @todo automate find algoritma hash and compare it if equal with return "true" otherwise "false"
 * @hash string. result from algoritma hash
 * @password string. your pure password plain text
 * @returns boolean. if "true" password and hash is match
 */
const compareHashAndPasswordAuto = (param: { hash: string; password: string }) => {
  const { hash, password } = param
  const keccak256 = hashWithKeccak256(password)
  if (keccak256 == hash.toLowerCase()) {
    return true
  }

  const sha256 = hashWithSha256(password)
  if (sha256 == hash.toLowerCase()) {
    return true
  }

  const sha512 = hashWithSha512(password)
  if (sha512 == hash.toLowerCase()) {
    return true
  }

  return false
}

export { to8bytes, hashWithKeccak256, hashWithSha256, hashWithSha512, compareHashAndPassword, compareHashAndPasswordAuto }
export default { to8bytes, hashWithKeccak256, hashWithSha256, hashWithSha512, compareHashAndPassword, compareHashAndPasswordAuto }
