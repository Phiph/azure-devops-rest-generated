/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Encapsulates the request parameters for updating a personal access token (PAT)
 */
export type PatTokenUpdateRequest = {
    /**
     * (Optional) True if this personal access token (PAT) is for all of the user's accessible organizations. False if otherwise (e.g. if the token is for a specific organization)
     */
    allOrgs?: boolean;
    /**
     * The authorizationId identifying a single, unique personal access token (PAT)
     */
    authorizationId?: string;
    /**
     * (Optional) The token name
     */
    displayName?: string;
    /**
     * (Optional) The token scopes for accessing Azure DevOps resources
     */
    scope?: string;
    /**
     * (Optional) The token expiration date
     */
    validTo?: string;
};

