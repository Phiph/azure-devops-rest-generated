/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExtensionHost } from './ExtensionHost';
import type { ExtensionRequest } from './ExtensionRequest';
import type { ExtensionRequestUrls } from './ExtensionRequestUrls';
import type { PublishedExtension } from './PublishedExtension';
export type ExtensionRequestsEvent = {
    /**
     * The extension which has been requested
     */
    extension?: PublishedExtension;
    /**
     * Information about the host for which this extension is requested
     */
    host?: ExtensionHost;
    /**
     * Gallery host url
     */
    links?: ExtensionRequestUrls;
    /**
     * The extension request object
     */
    requests?: Array<ExtensionRequest>;
    /**
     * The type of update that was made
     */
    updateType?: 'created' | 'approved' | 'rejected' | 'deleted';
};

