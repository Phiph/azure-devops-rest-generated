/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuthorizationHeader } from './AuthorizationHeader';
import type { ClientCertificate } from './ClientCertificate';
import type { DataSourceBinding } from './DataSourceBinding';
import type { InputDescriptor } from './InputDescriptor';
/**
 * Represents the authentication scheme used to authenticate the endpoint.
 */
export type ServiceEndpointAuthenticationScheme = {
    /**
     * Gets or sets the authorization headers of service endpoint authentication scheme.
     */
    authorizationHeaders?: Array<AuthorizationHeader>;
    /**
     * Gets or sets the Authorization url required to authenticate using OAuth2
     */
    authorizationUrl?: string;
    /**
     * Gets or sets the certificates of service endpoint authentication scheme.
     */
    clientCertificates?: Array<ClientCertificate>;
    /**
     * Gets or sets the data source bindings of the endpoint.
     */
    dataSourceBindings?: Array<DataSourceBinding>;
    /**
     * Gets or sets the display name for the service endpoint authentication scheme.
     */
    displayName?: string;
    /**
     * Gets or sets the input descriptors for the service endpoint authentication scheme.
     */
    inputDescriptors?: Array<InputDescriptor>;
    /**
     * Gets or sets the properties of service endpoint authentication scheme.
     */
    properties?: Record<string, string>;
    /**
     * Gets or sets whether this auth scheme requires OAuth2 configuration or not.
     */
    requiresOAuth2Configuration?: boolean;
    /**
     * Gets or sets the scheme for service endpoint authentication.
     */
    scheme?: string;
};

