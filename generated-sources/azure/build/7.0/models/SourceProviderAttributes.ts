/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SupportedTrigger } from './SupportedTrigger';
export type SourceProviderAttributes = {
    /**
     * The name of the source provider.
     */
    name?: string;
    /**
     * The capabilities supported by this source provider.
     */
    supportedCapabilities?: Record<string, boolean>;
    /**
     * The types of triggers supported by this source provider.
     */
    supportedTriggers?: Array<SupportedTrigger>;
};

