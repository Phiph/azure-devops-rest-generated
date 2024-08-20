/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Represents a Supported IDE entity.
 */
export type SupportedIde = {
    /**
     * The download URL for the IDE.
     */
    downloadUrl?: string;
    /**
     * The type of the IDE.
     */
    ideType?: 'unknown' | 'androidStudio' | 'appCode' | 'cLion' | 'dataGrip' | 'eclipse' | 'intelliJ' | 'mps' | 'phpStorm' | 'pyCharm' | 'rubyMine' | 'tower' | 'visualStudio' | 'vsCode' | 'webStorm';
    /**
     * The name of the IDE.
     */
    name?: string;
    /**
     * The URL to open the protocol handler for the IDE.
     */
    protocolHandlerUrl?: string;
    /**
     * A list of SupportedPlatforms.
     */
    supportedPlatforms?: Array<string>;
};

