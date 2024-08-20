/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
export type OAuthConfiguration = {
    /**
     * Gets or sets the ClientId
     */
    clientId?: string;
    /**
     * Gets or sets the ClientSecret
     */
    clientSecret?: string;
    /**
     * Gets or sets the identity who created the config.
     */
    createdBy?: IdentityRef;
    /**
     * Gets or sets the time when config was created.
     */
    createdOn?: string;
    /**
     * Gets or sets the type of the endpoint.
     */
    endpointType?: string;
    /**
     * Gets or sets the unique identifier of this field
     */
    id?: string;
    /**
     * Gets or sets the identity who modified the config.
     */
    modifiedBy?: IdentityRef;
    /**
     * Gets or sets the time when variable group was modified
     */
    modifiedOn?: string;
    /**
     * Gets or sets the name
     */
    name?: string;
    /**
     * Gets or sets the Url
     */
    url?: string;
};

