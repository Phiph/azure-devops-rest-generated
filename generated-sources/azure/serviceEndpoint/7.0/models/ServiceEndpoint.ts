/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EndpointAuthorization } from './EndpointAuthorization';
import type { IdentityRef } from './IdentityRef';
import type { JObject } from './JObject';
import type { ServiceEndpointProjectReference } from './ServiceEndpointProjectReference';
/**
 * Represents an endpoint which may be used by an orchestration job.
 */
export type ServiceEndpoint = {
    /**
     * This is a deprecated field.
     */
    administratorsGroup?: IdentityRef;
    /**
     * Gets or sets the authorization data for talking to the endpoint.
     */
    authorization?: EndpointAuthorization;
    /**
     * Gets or sets the identity reference for the user who created the Service endpoint.
     */
    createdBy?: IdentityRef;
    data?: Record<string, string>;
    /**
     * Gets or sets the description of endpoint.
     */
    description?: string;
    /**
     * This is a deprecated field.
     */
    groupScopeId?: string;
    /**
     * Gets or sets the identifier of this endpoint.
     */
    id?: string;
    /**
     * EndPoint state indicator
     */
    isReady?: boolean;
    /**
     * Indicates whether service endpoint is shared with other projects or not.
     */
    isShared?: boolean;
    /**
     * Gets or sets the friendly name of the endpoint.
     */
    name?: string;
    /**
     * Error message during creation/deletion of endpoint
     */
    operationStatus?: JObject;
    /**
     * Owner of the endpoint Supported values are "library", "agentcloud"
     */
    owner?: string;
    /**
     * Gets or sets the identity reference for the readers group of the service endpoint.
     */
    readersGroup?: IdentityRef;
    /**
     * All other project references where the service endpoint is shared.
     */
    serviceEndpointProjectReferences?: Array<ServiceEndpointProjectReference>;
    /**
     * Gets or sets the type of the endpoint.
     */
    type?: string;
    /**
     * Gets or sets the url of the endpoint.
     */
    url?: string;
};

