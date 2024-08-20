/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProxyAuthorization } from './ProxyAuthorization';
export type Proxy = {
    authorization?: ProxyAuthorization;
    /**
     * This is a description string
     */
    description?: string;
    /**
     * The friendly name of the server
     */
    friendlyName?: string;
    globalDefault?: boolean;
    /**
     * This is a string representation of the site that the proxy server is located in (e.g. "NA-WA-RED")
     */
    site?: string;
    siteDefault?: boolean;
    /**
     * The URL of the proxy server
     */
    url?: string;
};

