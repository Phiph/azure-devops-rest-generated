/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type DeploymentAuthorizationInfo = {
    /**
     * Authorization header type, typically either RevalidateApproverIdentity or OnBehalfOf.
     */
    authorizationHeaderFor?: 'revalidateApproverIdentity' | 'onBehalfOf';
    /**
     * List of resources.
     */
    resources?: Array<string>;
    /**
     * ID of the tenant.
     */
    tenantId?: string;
    /**
     * Access token key.
     */
    vstsAccessTokenKey?: string;
};

