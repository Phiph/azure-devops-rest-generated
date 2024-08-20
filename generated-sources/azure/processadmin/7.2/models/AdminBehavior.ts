/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminBehaviorField } from './AdminBehaviorField';
/**
 * Describes an admin behavior for a process.
 */
export type AdminBehavior = {
    /**
     * Is the behavior abstract (i.e. can not be associated with any work item type).
     */
    abstract?: boolean;
    /**
     * The color associated with the behavior.
     */
    color?: string;
    /**
     * Indicates if the behavior is custom.
     */
    custom?: boolean;
    /**
     * The description of the behavior.
     */
    description?: string;
    /**
     * List of behavior fields.
     */
    fields?: Array<AdminBehaviorField>;
    /**
     * Behavior ID.
     */
    id?: string;
    /**
     * Parent behavior reference.
     */
    inherits?: string;
    /**
     * The behavior name.
     */
    name?: string;
    /**
     * Is the behavior overrides a behavior from system process.
     */
    overriden?: boolean;
    /**
     * The rank.
     */
    rank?: number;
};

