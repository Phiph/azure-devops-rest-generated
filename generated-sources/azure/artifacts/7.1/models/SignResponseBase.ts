/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The base reponse object for all responses from the signing api.
 */
export type SignResponseBase = {
    /**
     * The customer correlation id that is sent to ESRP for correlating the current request to ESRP.
     */
    customerCorrelationId?: string;
    /**
     * If this is an error response, it will have more information about the error.
     */
    errorInfo?: string;
    /**
     * The result of the response.
     */
    result?: 'success' | 'failure' | 'inProgress' | 'failCanRetry';
};

