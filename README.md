<h1 align="center">
    NODE-HASH-PASSWORD
</h1>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/damartripamungkas/node-hash-password?color=04D361&labelColor=000000">

  <a href="#">
    <img alt="Made by" src="https://img.shields.io/static/v1?label=made%20by&message=damartripamungkas&color=04D361&labelColor=000000">
  </a>
  
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/damartripamungkas/node-hash-password?color=04D361&labelColor=000000">
  
  <a href="#">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/damartripamungkas/node-hash-password?color=04D361&labelColor=000000">
  </a>
</p>

<br>

### 📖 Description :

This package hashes plain text, passwords using algorithms KECCAK-256, SHA-256 or SHA-512.

### 💻 Step to install :

```
npm install node-hash-password
```

### ✏️ Example :

full example see [here](./test)

```javascript
const { hashWithKeccak256, hashWithSha256, hashWithSha512, compareHashAndPassword } = require(`node-hash-password`)
const passwordFromUser = `my name is damar` // example from input HTML

// result : 0x334700c8ae0754b6660291b12ae7b663531431bbab1ebc185a45ce31b344d926
const resKeccak256 = hashWithKeccak256(passwordFromUser)
console.log(`keccak256 : ${resKeccak256}`)

// result : 0x0f0bc5f6c0e1a6c2a5725950e66410db8411f000e36edebb46e5029c4f99511b
const resSha256 = hashWithSha256(passwordFromUser)
console.log(`sha256    : ${resSha256}`)

// result : 0xa1e1846cb71a9573fba1d4e8d574e1a22dd8099bd0d2ae4634e42be9ad7b7255edd0e17102855d02b513fd0675085ae06c4ba6f352e0b95b4a9fb38e71958d78
const resSha512 = hashWithSha512(passwordFromUser)
console.log(`sha512    : ${resSha512}`)

const compare = compareHashAndPassword({
  method: `keccak256`,
  hash: resKeccak256,
  password: passwordFromUser
})
console.log(`compare   : ${compare}`) // result : true
```

### 🧾 Pre-Requisistes :

```
- node.js / bun.js / deno.js
- (optional) typescript
- (optional) commonJS
- (optional) ESM
```

### 📝 License :

Licensed see [here](./LICENSE)
