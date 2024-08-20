/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkItemRelation } from './WorkItemRelation';
/**
 * Describes updates to a work item's relations.
 */
export type WorkItemRelationUpdates = {
    /**
     * List of newly added relations.
     */
    added?: Array<WorkItemRelation>;
    /**
     * List of removed relations.
     */
    removed?: Array<WorkItemRelation>;
    /**
     * List of updated relations.
     */
    updated?: Array<WorkItemRelation>;
};

