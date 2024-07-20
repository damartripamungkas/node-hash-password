const { hashWithKeccak256, hashWithSha256, hashWithSha512, compareHashAndPassword, compareHashAndPasswordAuto } = require("..")
const passwordFromUser = `my name is damar` // example from input HTML

const resKeccak256 = hashWithKeccak256(passwordFromUser)
console.log(`keccak256 : ${resKeccak256}`) // result : 0x334700c8ae0754b6660291b12ae7b663531431bbab1ebc185a45ce31b344d926

const resSha256 = hashWithSha256(passwordFromUser)
console.log(`sha256    : ${resSha256}`) // result : 0x0f0bc5f6c0e1a6c2a5725950e66410db8411f000e36edebb46e5029c4f99511b

const resSha512 = hashWithSha512(passwordFromUser)
console.log(`sha512    : ${resSha512}`) // result : 0xa1e1846cb71a9573fba1d4e8d574e1a22dd8099bd0d2ae4634e42be9ad7b7255edd0e17102855d02b513fd0675085ae06c4ba6f352e0b95b4a9fb38e71958d78

const resultCompareKeccak256 = compareHashAndPassword({
  method: `keccak256`,
  hash: resKeccak256,
  password: passwordFromUser
})
console.log(`resultCompareKeccak256   : ${resultCompareKeccak256}`) // result : true

const resultCompareAuto = compareHashAndPasswordAuto({
  hash: resKeccak256,
  password: passwordFromUser
})
console.log(`resultCompareAuto   : ${resultCompareAuto}`) // result : true
