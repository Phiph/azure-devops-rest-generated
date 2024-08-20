/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EndpointAuthorization } from './EndpointAuthorization';
/**
 * Represents details of the service endpoint.
 */
export type ServiceEndpointDetails = {
    /**
     * Gets or sets the authorization of service endpoint.
     */
    authorization?: EndpointAuthorization;
    /**
     * Gets or sets the data of service endpoint.
     */
    data?: Record<string, string>;
    /**
     * Gets or sets the type of service endpoint.
     */
    type?: string;
    /**
     * Gets or sets the connection url of service endpoint.
     */
    url?: string;
};

