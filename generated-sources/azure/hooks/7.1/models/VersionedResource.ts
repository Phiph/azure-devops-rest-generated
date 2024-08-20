/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Encapsulates the resource version and its data or reference to the compatible version. Only one of the two last fields should be not null.
 */
export type VersionedResource = {
    /**
     * Gets or sets the reference to the compatible version.
     */
    compatibleWith?: string;
    /**
     * Gets or sets the resource data.
     */
    resource?: any;
    /**
     * Gets or sets the version of the resource data.
     */
    resourceVersion?: string;
};

