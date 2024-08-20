/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExtensionRequest } from './ExtensionRequest';
/**
 * A request for an extension (to be installed or have a license assigned)
 */
export type RequestedExtension = {
    /**
     * The unique name of the extension
     */
    extensionName?: string;
    /**
     * A list of each request for the extension
     */
    extensionRequests?: Array<ExtensionRequest>;
    /**
     * DisplayName of the publisher that owns the extension being published.
     */
    publisherDisplayName?: string;
    /**
     * Represents the Publisher of the requested extension
     */
    publisherName?: string;
    /**
     * The total number of requests for an extension
     */
    requestCount?: number;
};

