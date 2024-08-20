/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProcessBehaviorField } from './ProcessBehaviorField';
import type { ProcessBehaviorReference } from './ProcessBehaviorReference';
/**
 * Process Behavior Model.
 */
export type ProcessBehavior = {
    /**
     * Color.
     */
    color?: string;
    /**
     * Indicates the type of customization on this work item. System behaviors are inherited from parent process but not modified. Inherited behaviors are modified behaviors that were inherited from parent process. Custom behaviors are behaviors created by user in current process.
     */
    customization?: 'system' | 'inherited' | 'custom';
    /**
     * . Description
     */
    description?: string;
    /**
     * Process Behavior Fields.
     */
    fields?: Array<ProcessBehaviorField>;
    /**
     * Parent behavior reference.
     */
    inherits?: ProcessBehaviorReference;
    /**
     * Behavior Name.
     */
    name?: string;
    /**
     * Rank of the behavior
     */
    rank?: number;
    /**
     * Behavior Id
     */
    referenceName?: string;
    /**
     * Url of the behavior.
     */
    url?: string;
};

