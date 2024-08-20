/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReleaseShallowReference } from './ReleaseShallowReference';
export type ReleaseDefinitionEnvironmentSummary = {
    /**
     * ID of ReleaseDefinition environment summary.
     */
    id?: number;
    /**
     * List of release shallow reference deployed using this ReleaseDefinition.
     */
    lastReleases?: Array<ReleaseShallowReference>;
    /**
     * Name of ReleaseDefinition environment summary.
     */
    name?: string;
};

