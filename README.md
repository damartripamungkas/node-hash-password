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

This package hashes plain text, passwords using algorithms.

- keccak256 (max length 66)
- sha256 (max length 66)
- sha512 (max length 130)

### 💻 Step to install :

```
npm install --production node-hash-password
```

### ✏️ Example :

#### Typescript

```javascript
import { hashWithKeccak256, hashWithSha256, hashWithSha512, compareHashAndPassword } from "node-hash-password";
```

#### ESM (import)

```javascript
import { hashWithKeccak256, hashWithSha256, hashWithSha512, compareHashAndPassword } from "node-hash-password";
```

#### CommonJs (require)

```javascript
const { hashWithKeccak256, hashWithSha256, hashWithSha512, compareHashAndPassword } = require("node-interval-return");
```

#### Usage

```javascript
const { hashWithKeccak256, compareHashAndPassword } = require("node-hash-password");

const resultHash = hashWithKeccak256({ password: "my name is damar" }); // 0x334700c8ae0754b6660291b12ae7b663531431bbab1ebc185a45ce31b344d927

// try compare pure password with hash method keccak256
const resultCompare = compareHashAndPassword({
  method: "keccak256",
  hash: resultHash,
  password: "my name is damar",
});
console.log(resultCompare); // true
```

full example see [here](./test)

### 🧾 Pre-Requisistes :

```
node.js
```

### 📝 License :

Licensed under the [MIT License](./LICENSE).
