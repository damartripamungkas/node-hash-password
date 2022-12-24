const { hashWithKeccak256, hashWithSha256, hashWithSha512, compareHashAndPassword } = require('hash-my-password');


// hash password using keccak256 (ethash)
const hash1 = hashWithKeccak256({ password: "my name is damar" });
console.log(`keccak256: ${hash1}`);

// hash password using sha256
const hash2 = hashWithSha256({ password: "my name is damar" });
console.log(`sha256: ${hash2}`);

// hash password using sha512 (strong security)
const hash3 = hashWithSha512({ password: "my name is damar" });
console.log(`sha512: ${hash3}`);

/**
 * compare pure password with hash
 * example with method keccak256
 */
const passwordFromUser = "my name is damar"; // example from input HTML
const passwordFromDatabase = "0x334700c8ae0754b6660291b12ae7b663531431bbab1ebc185a45ce31b344d926"; // example from your database
const result4 = compareHashAndPassword({
    method: "keccak256", // avaible methods: keccak256, sha256, sha512
    hash: passwordFromDatabase,
    password: passwordFromUser
}); // true or false
console.log(`compare pure password and hash: ${result4}`);