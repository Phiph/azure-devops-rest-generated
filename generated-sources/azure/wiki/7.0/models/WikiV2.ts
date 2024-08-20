/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitVersionDescriptor } from './GitVersionDescriptor';
import type { WikiCreateBaseParameters } from './WikiCreateBaseParameters';
/**
 * Defines a wiki resource.
 */
export type WikiV2 = (WikiCreateBaseParameters & {
    /**
     * ID of the wiki.
     */
    id?: string;
    /**
     * Is wiki repository disabled
     */
    isDisabled?: boolean;
    /**
     * Properties of the wiki.
     */
    properties?: Record<string, string>;
    /**
     * Remote web url to the wiki.
     */
    remoteUrl?: string;
    /**
     * REST url for this wiki.
     */
    url?: string;
    /**
     * Versions of the wiki.
     */
    versions?: Array<GitVersionDescriptor>;
});

