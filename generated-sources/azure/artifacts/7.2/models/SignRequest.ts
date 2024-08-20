/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FileHash } from './FileHash';
/**
 * Used to provide the FileHash of the SBOM file and EBOM ID to be added to the catalog file.
 */
export type SignRequest = {
    /**
     * The EBOM ID for the associated image.
     */
    ebomId?: string;
    /**
     * The file hash of the generated SBOM file.
     */
    fileHash?: FileHash;
};

