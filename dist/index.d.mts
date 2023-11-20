interface IfacePassword {
    password: string;
}
interface IfaceCompare {
    method: string;
    hash: string;
    password: string;
}
/**
 *
 * @param_password string plain text
 * @returns string hash with length 66
 */
declare const hashWithKeccak256: (param: IfacePassword) => string;
/**
 *
 * @param_password string plain text
 * @returns string hash with length 66
 */
declare const hashWithSha256: (param: IfacePassword) => string;
/**
 *
 * @param_password string plain text
 * @returns string hash with length 130
 */
declare const hashWithSha512: (param: IfacePassword) => string;
/**
 *
 * @param_method string. algoritma method example keccak256, sha256, sha512
 * @param_hash string. result from algoritma hash
 * @param_password string. your pure password plain text
 * @returns boolean. if true password and hash is match
 */
declare const compareHashAndPassword: (param: IfaceCompare) => boolean;

declare const _default: {
    hashWithKeccak256: (param: IfacePassword) => string;
    hashWithSha256: (param: IfacePassword) => string;
    hashWithSha512: (param: IfacePassword) => string;
    compareHashAndPassword: (param: IfaceCompare) => boolean;
};

export { compareHashAndPassword, _default as default, hashWithKeccak256, hashWithSha256, hashWithSha512 };
