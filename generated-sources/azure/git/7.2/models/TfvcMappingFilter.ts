/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * MappingFilter can be used to include or exclude specific paths.
 */
export type TfvcMappingFilter = {
    /**
     * True if ServerPath should be excluded.
     */
    exclude?: boolean;
    /**
     * Path to be included or excluded.
     */
    serverPath?: string;
};

