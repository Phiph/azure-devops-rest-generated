/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WebApiConnectedService } from './WebApiConnectedService';
import type { WebApiConnectedServiceRef } from './WebApiConnectedServiceRef';
export type WebApiConnectedServiceDetails = (WebApiConnectedServiceRef & {
    /**
     * Meta data for service connection
     */
    connectedServiceMetaData?: WebApiConnectedService;
    /**
     * Credential info
     */
    credentialsXml?: string;
    /**
     * Optional uri to connect directly to the service such as https://windows.azure.com
     */
    endPoint?: string;
});

