/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Represents a session token used to access Azure DevOps resources
 */
export type SessionToken = {
    accessId?: string;
    /**
     * This is populated when user requests a compact token. The alternate token value is self describing token.
     */
    alternateToken?: string;
    authorizationId?: string;
    claims?: Record<string, string>;
    clientId?: string;
    displayName?: string;
    hostAuthorizationId?: string;
    isPublic?: boolean;
    isValid?: boolean;
    publicData?: string;
    scope?: string;
    source?: string;
    targetAccounts?: Array<string>;
    /**
     * This is computed and not returned in Get queries
     */
    token?: string;
    userId?: string;
    validFrom?: string;
    validTo?: string;
};

