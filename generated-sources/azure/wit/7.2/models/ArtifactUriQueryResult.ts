/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkItemReference } from './WorkItemReference';
/**
 * Defines result of artifact URI query on work items. Contains mapping of work item IDs to artifact URI.
 */
export type ArtifactUriQueryResult = {
    /**
     * A Dictionary that maps a list of work item references to the given list of artifact URI.
     */
    artifactUrisQueryResult?: Record<string, Array<WorkItemReference>>;
};

