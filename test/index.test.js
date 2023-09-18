const { hashWithKeccak256, hashWithSha256, hashWithSha512, compareHashAndPassword } = require("../index");

test("hash password with keccak256", () => {
    const result = hashWithKeccak256({ password: "my name is damar" });
    const resultExpect = result.startsWith("0x") && result.length == 66;
    expect(resultExpect).toBe(true);
});

test("hash password with sha256", () => {
    const result = hashWithSha256({ password: "my name is damar" });
    const resultExpect = result.startsWith("0x") && result.length == 66;
    expect(resultExpect).toBe(true);
});

test("hash password with sha512", () => {
    const result = hashWithSha512({ password: "my name is damar" });
    const resultExpect = result.startsWith("0x") && result.length == 130;
    expect(resultExpect).toBe(true);
});

test("compare pure password and hash with spesific method hash", () => {
    // example with method keccak256
    const passwordFromUser = "my name is damar"; // example from input HTML
    const passwordFromDatabase = "0x334700c8ae0754b6660291b12ae7b663531431bbab1ebc185a45ce31b344d926"; // example from your database
    const result = compareHashAndPassword({
        method: "keccak256",
        hash: passwordFromDatabase,
        password: passwordFromUser
    }); // true or false
    expect(result).toBe(true);
});