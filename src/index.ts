import { keccak256, sha256, sha512, toUtf8Bytes } from "ethers"
import { TypeCompare } from "./type"

const to8bytes = (v: any) => toUtf8Bytes(v.toString())
const strKeccak256 = `keccak256`
const strSha256 = `sha256`
const strSha512 = `sha512`

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
  const hashFunc = method == strKeccak256 ? hashWithKeccak256 : method == strSha256 ? hashWithSha256 : method == strSha512 ? hashWithSha512 : null
  if (hashFunc === null) {
    throw new Error(`method is not found`)
  }
  const result = hash.toLowerCase() == hashFunc(password)
  return result
}

export { to8bytes, hashWithKeccak256, hashWithSha256, hashWithSha512, compareHashAndPassword, strKeccak256, strSha256, strSha512 }
export default { to8bytes, hashWithKeccak256, hashWithSha256, hashWithSha512, compareHashAndPassword, strKeccak256, strSha256, strSha512 }
