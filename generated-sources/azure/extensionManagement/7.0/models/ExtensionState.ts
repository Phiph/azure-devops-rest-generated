/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InstalledExtensionState } from './InstalledExtensionState';
/**
 * The state of an extension
 */
export type ExtensionState = (InstalledExtensionState & {
    extensionName?: string;
    /**
     * The time at which the version was last checked
     */
    lastVersionCheck?: string;
    publisherName?: string;
    version?: string;
});

