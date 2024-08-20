/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Used to provide the filename and hash of the SBOM file to be added to the catalog file.
 */
export type FileHash = {
    /**
     * The filename of the SBOM.
     */
    fileName?: string;
    /**
     * The string hash of the SBOM file.
     */
    hash?: string;
    /**
     * The HashAlgorithmName used to generate the hash of the file.
     */
    hashAlgorithmName?: string;
};

