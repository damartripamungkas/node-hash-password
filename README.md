<h1 align="center">
    NODE-HASH-PASSWORD
</h1>

<p align="center">
 <img src="https://camo.githubusercontent.com/3dbcfa4997505c80ef928681b291d33ecfac2dabf563eb742bb3e269a5af909c/68747470733a2f2f696d672e736869656c64732e696f2f6769746875622f6c6963656e73652f496c65726961796f2f6d61726b646f776e2d6261646765733f7374796c653d666f722d7468652d6261646765" alt="licensemit" />
  <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="javascript" />
  <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="nodejs" />
</p>

<p align="center">
    Simple hash password with node.js
</p>

<br>

## 💼 Available hash methods

```
1. keccak256 
2. sha256
3. sha512
```

## 💻 Step to install

```
npm install node-hash-password
```

## ✏️ Example

```javascript
const { hashWithKeccak256, compareHashAndPassword } = require('node-hash-password');

// try hash password with keccak256
const resultHash = hashWithKeccak256({ password: "my name is damar" });
console.log(resultHash); // 0x334700c8ae0754b6660291b12ae7b663531431bbab1ebc185a45ce31b344d927

// try compare pure password with hash method keccak256
const resultCompare = compareHashAndPassword({
    method: "keccak256",
    hash: "0x334700c8ae0754b6660291b12ae7b663531431bbab1ebc185a45ce31b344d927",
    password: "my name is damar"
});
console.log(resultCompare); // true
```
see full example on [here](./example/hash.js)

## 🧾 Pre-Requisistes

```
node.js
```

## 📝 License

Licensed under the [MIT License](./LICENSE).
