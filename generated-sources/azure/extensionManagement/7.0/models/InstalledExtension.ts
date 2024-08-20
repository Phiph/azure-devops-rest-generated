/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExtensionFile } from './ExtensionFile';
import type { ExtensionManifest } from './ExtensionManifest';
import type { InstalledExtensionState } from './InstalledExtensionState';
/**
 * Represents a VSTS extension along with its installation state
 */
export type InstalledExtension = (ExtensionManifest & {
    /**
     * The friendly extension id for this extension - unique for a given publisher.
     */
    extensionId?: string;
    /**
     * The display name of the extension.
     */
    extensionName?: string;
    /**
     * This is the set of files available from the extension.
     */
    files?: Array<ExtensionFile>;
    /**
     * Extension flags relevant to contribution consumers
     */
    flags?: 'builtIn' | 'trusted';
    /**
     * Information about this particular installation of the extension
     */
    installState?: InstalledExtensionState;
    /**
     * This represents the date/time the extensions was last updated in the gallery. This doesnt mean this version was updated the value represents changes to any and all versions of the extension.
     */
    lastPublished?: string;
    /**
     * Unique id of the publisher of this extension
     */
    publisherId?: string;
    /**
     * The display name of the publisher
     */
    publisherName?: string;
    /**
     * Unique id for this extension (the same id is used for all versions of a single extension)
     */
    registrationId?: string;
    /**
     * Version of this extension
     */
    version?: string;
});

