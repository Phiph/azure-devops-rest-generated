/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
/**
 * Describes Github connection.
 */
export type GitHubConnectionModel = {
    /**
     * Github connection authorization type (f. e. PAT, OAuth)
     */
    authorizationType?: string;
    /**
     * Github connection created by
     */
    createdBy?: IdentityRef;
    /**
     * Github connection id
     */
    id?: string;
    /**
     * Whether current Github connection is valid or not
     */
    isConnectionValid?: boolean;
    /**
     * Github connection name (should contain organization/user name)
     */
    name?: string;
};

