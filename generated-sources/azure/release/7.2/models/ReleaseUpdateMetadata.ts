/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ReleaseUpdateMetadata = {
    /**
     * Sets comment for release.
     */
    comment?: string;
    /**
     * Set 'true' to exclude the release from retention policies.
     */
    keepForever?: boolean;
    /**
     * Sets list of manual environments.
     */
    manualEnvironments?: Array<string>;
    /**
     * Sets name of the release.
     */
    name?: string;
    /**
     * Sets status of the release.
     */
    status?: 'undefined' | 'draft' | 'active' | 'abandoned';
};

