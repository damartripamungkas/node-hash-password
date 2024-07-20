export type TypeHash = `keccak256` | `sha256` | `sha512`

export type TypeCompare = {
  method: TypeHash
  hash: string
  password: string
}
