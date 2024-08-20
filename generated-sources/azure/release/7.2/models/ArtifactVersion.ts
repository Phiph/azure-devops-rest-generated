/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuildVersion } from './BuildVersion';
export type ArtifactVersion = {
    /**
     * Gets or sets the alias of artifact.
     */
    alias?: string;
    /**
     * Gets or sets the default version of artifact.
     */
    defaultVersion?: BuildVersion;
    /**
     * Gets or sets the error message encountered during querying of versions for artifact.
     */
    errorMessage?: string;
    /**
     * Gets or sets the list of build versions of artifact.
     */
    versions?: Array<BuildVersion>;
};

