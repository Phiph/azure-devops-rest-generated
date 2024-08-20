/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Specify the properties for refreshing the endpoint authentication object being queried
 */
export type RefreshAuthenticationParameters = {
    /**
     * EndpointId which needs new authentication params
     */
    endpointId?: string;
    /**
     * Scope of the token requested. For GitHub marketplace apps, scope contains repository Ids
     */
    scope?: Array<number>;
    /**
     * The requested endpoint authentication should be valid for _ minutes. Authentication params will not be refreshed if the token contained in endpoint already has active token.
     */
    tokenValidityInMinutes?: number;
};

