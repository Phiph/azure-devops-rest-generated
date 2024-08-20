/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Represents a session token to be attached in Events for Consumer actions that need it.
 */
export type SessionToken = {
    /**
     * The error message in case of error
     */
    error?: string;
    /**
     * The access token
     */
    token?: string;
    /**
     * The expiration date in UTC
     */
    validTo?: string;
};

