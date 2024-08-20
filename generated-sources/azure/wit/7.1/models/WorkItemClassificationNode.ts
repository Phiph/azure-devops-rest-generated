/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkItemTrackingResource } from './WorkItemTrackingResource';
/**
 * Defines a classification node for work item tracking.
 */
export type WorkItemClassificationNode = (WorkItemTrackingResource & {
    /**
     * Dictionary that has node attributes like start/finish date for iteration nodes.
     */
    attributes?: Record<string, any>;
    /**
     * List of child nodes fetched.
     */
    children?: Array<WorkItemClassificationNode>;
    /**
     * Flag that indicates if the classification node has any child nodes.
     */
    hasChildren?: boolean;
    /**
     * Integer ID of the classification node.
     */
    id?: number;
    /**
     * GUID ID of the classification node.
     */
    identifier?: string;
    /**
     * Name of the classification node.
     */
    name?: string;
    /**
     * Path of the classification node.
     */
    path?: string;
    /**
     * Node structure type.
     */
    structureType?: 'area' | 'iteration';
});

