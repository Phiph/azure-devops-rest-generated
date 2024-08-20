/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExtensionEventUrls } from './ExtensionEventUrls';
import type { ExtensionHost } from './ExtensionHost';
import type { IdentityRef } from './IdentityRef';
import type { PublishedExtension } from './PublishedExtension';
export type ExtensionEvent = {
    /**
     * The extension which has been updated
     */
    extension?: PublishedExtension;
    /**
     * The current version of the extension that was updated
     */
    extensionVersion?: string;
    /**
     * Name of the collection for which the extension was requested
     */
    host?: ExtensionHost;
    /**
     * Gallery host url
     */
    links?: ExtensionEventUrls;
    /**
     * Represents the user who initiated the update
     */
    modifiedBy?: IdentityRef;
    /**
     * The type of update that was made
     */
    updateType?: 'installed' | 'uninstalled' | 'enabled' | 'disabled' | 'versionUpdated' | 'actionRequired' | 'actionResolved';
};

