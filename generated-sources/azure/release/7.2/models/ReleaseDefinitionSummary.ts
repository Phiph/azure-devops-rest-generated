/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Release } from './Release';
import type { ReleaseDefinitionEnvironmentSummary } from './ReleaseDefinitionEnvironmentSummary';
import type { ReleaseDefinitionShallowReference } from './ReleaseDefinitionShallowReference';
export type ReleaseDefinitionSummary = {
    /**
     * List of Release Definition environment summary.
     */
    environments?: Array<ReleaseDefinitionEnvironmentSummary>;
    /**
     * Release Definition reference.
     */
    releaseDefinition?: ReleaseDefinitionShallowReference;
    /**
     * List of releases deployed using this Release Definition.
     */
    releases?: Array<Release>;
};

