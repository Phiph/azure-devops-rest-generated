/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Represents a personal access token (PAT) used to access Azure DevOps resources
 */
export type PatToken = {
    /**
     * Unique guid identifier
     */
    authorizationId?: string;
    /**
     * The token name
     */
    displayName?: string;
    /**
     * The token scopes for accessing Azure DevOps resources
     */
    scope?: string;
    /**
     * The organizations for which the token is valid; null if the token applies to all of the user's accessible organizations
     */
    targetAccounts?: Array<string>;
    /**
     * The unique token string generated at creation
     */
    token?: string;
    /**
     * The token creation date
     */
    validFrom?: string;
    /**
     * The token expiration date
     */
    validTo?: string;
};

