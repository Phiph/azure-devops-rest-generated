/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ManifestInfo } from './ManifestInfo';
/**
 * Represents a SBOM file object and contains additional properties related to the file.
 */
export type SBOMFile = {
    /**
     * The size of the SBOM file in bytes.
     */
    fileSizeInBytes?: number;
    /**
     * The path where the final generated SBOM is placed.
     */
    sbomFilePath?: string;
    /**
     * The name and version of the format of the generated SBOM.
     */
    sbomFormatName?: ManifestInfo;
};

