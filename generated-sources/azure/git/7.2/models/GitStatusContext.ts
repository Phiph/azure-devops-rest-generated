/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Status context that uniquely identifies the status.
 */
export type GitStatusContext = {
    /**
     * Genre of the status. Typically name of the service/tool generating the status, can be empty.
     */
    genre?: string;
    /**
     * Name identifier of the status, cannot be null or empty.
     */
    name?: string;
};

