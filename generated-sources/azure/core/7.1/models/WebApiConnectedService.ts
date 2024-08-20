/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
import type { TeamProjectReference } from './TeamProjectReference';
import type { WebApiConnectedServiceRef } from './WebApiConnectedServiceRef';
export type WebApiConnectedService = (WebApiConnectedServiceRef & {
    /**
     * The user who did the OAuth authentication to created this service
     */
    authenticatedBy?: IdentityRef;
    /**
     * Extra description on the service.
     */
    description?: string;
    /**
     * Friendly Name of service connection
     */
    friendlyName?: string;
    /**
     * Id/Name of the connection service. For Ex: Subscription Id for Azure Connection
     */
    id?: string;
    /**
     * The kind of service.
     */
    kind?: string;
    /**
     * The project associated with this service
     */
    project?: TeamProjectReference;
    /**
     * Optional uri to connect directly to the service such as https://windows.azure.com
     */
    serviceUri?: string;
});

