/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * A data transfer object that stores the metadata associated with the temporary data.
 */
export type TemporaryDataDTO = {
    /**
     * Temporary data expire in seconds
     */
    expirationSeconds?: number;
    /**
     * Temporary data origin
     */
    origin?: string;
    /**
     * Temporary data.
     */
    value?: any;
};

