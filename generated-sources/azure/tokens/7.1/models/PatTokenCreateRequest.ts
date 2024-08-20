/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Encapsulates the request parameters for creating a new personal access token (PAT)
 */
export type PatTokenCreateRequest = {
    /**
     * True, if this personal access token (PAT) is for all of the user's accessible organizations. False, if otherwise (e.g. if the token is for a specific organization)
     */
    allOrgs?: boolean;
    /**
     * The token name
     */
    displayName?: string;
    /**
     * The token scopes for accessing Azure DevOps resources
     */
    scope?: string;
    /**
     * The token expiration date
     */
    validTo?: string;
};

