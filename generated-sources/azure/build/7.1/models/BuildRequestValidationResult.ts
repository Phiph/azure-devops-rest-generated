/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Represents the result of validating a build request.
 */
export type BuildRequestValidationResult = {
    /**
     * The message associated with the result.
     */
    message?: string;
    /**
     * The result.
     */
    result?: 'ok' | 'warning' | 'error';
};

