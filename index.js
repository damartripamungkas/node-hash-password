const utils = require('ethers').utils;

/**
 * 
 * @param password string
 * @returns string hash with length 66
 */
const hashWithKeccak256 = ({ password = "" }) => {
    return utils.keccak256(utils.toUtf8Bytes(password.toString()));
};

/**
 * 
 * @param password string
 * @returns string hash with length 66
 */
const hashWithSha256 = ({ password = "" }) => {
    return utils.sha256(utils.toUtf8Bytes(password.toString()));
};

/**
 * 
 * @param password string
 * @returns string hash with length 130
 */
const hashWithSha512 = ({ password = "" }) => {
    return utils.sha512(utils.toUtf8Bytes(password.toString()));
};

/**
 * 
 * @param method string example keccak256, sha256, sha512
 * @param hash string hash
 * @param password string your pure password
 * @returns boolean. if true password and hash is match
 */
const compareHashAndPassword = ({ method = "", hash = "", password = "" }) => {
    const hashFunc = method == "keccak256" ? hashWithKeccak256 : method == "sha256" ? hashWithSha256 : method == "sha512" ? hashWithSha512 : null;
    if (hashFunc === null) throw new Error("method is not found");
    const result = hash.toLowerCase() == hashFunc({ password });
    return result;
};

module.exports = { hashWithKeccak256, hashWithSha256, hashWithSha512, compareHashAndPassword };