/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExtensionHost } from './ExtensionHost';
import type { ExtensionRequest } from './ExtensionRequest';
import type { ExtensionRequestUrls } from './ExtensionRequestUrls';
import type { PublishedExtension } from './PublishedExtension';
export type ExtensionRequestEvent = {
    /**
     * The extension which has been requested
     */
    extension?: PublishedExtension;
    /**
     * Information about the host for which this extension is requested
     */
    host?: ExtensionHost;
    /**
     * Name of the collection for which the extension was requested
     */
    hostName?: string;
    /**
     * Gallery host url
     */
    links?: ExtensionRequestUrls;
    /**
     * The extension request object
     */
    request?: ExtensionRequest;
    /**
     * The type of update that was made
     */
    updateType?: 'created' | 'approved' | 'rejected' | 'deleted';
};

