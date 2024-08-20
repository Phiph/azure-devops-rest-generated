/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExtensionEventCallback } from './ExtensionEventCallback';
/**
 * Collection of event callbacks - endpoints called when particular extension events occur.
 */
export type ExtensionEventCallbackCollection = {
    /**
     * Optional.  Defines an endpoint that gets called via a POST request to notify that an extension disable has occurred.
     */
    postDisable?: ExtensionEventCallback;
    /**
     * Optional.  Defines an endpoint that gets called via a POST request to notify that an extension enable has occurred.
     */
    postEnable?: ExtensionEventCallback;
    /**
     * Optional.  Defines an endpoint that gets called via a POST request to notify that an extension install has completed.
     */
    postInstall?: ExtensionEventCallback;
    /**
     * Optional.  Defines an endpoint that gets called via a POST request to notify that an extension uninstall has occurred.
     */
    postUninstall?: ExtensionEventCallback;
    /**
     * Optional.  Defines an endpoint that gets called via a POST request to notify that an extension update has occurred.
     */
    postUpdate?: ExtensionEventCallback;
    /**
     * Optional.  Defines an endpoint that gets called via a POST request to notify that an extension install is about to occur.  Response indicates whether to proceed or abort.
     */
    preInstall?: ExtensionEventCallback;
    /**
     * For multi-version extensions, defines an endpoint that gets called via an OPTIONS request to determine the particular version of the extension to be used
     */
    versionCheck?: ExtensionEventCallback;
};

