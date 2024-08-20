/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkItemFieldReference } from './WorkItemFieldReference';
/**
 * Base field instance for workItemType fields.
 */
export type WorkItemTypeFieldInstanceBase = (WorkItemFieldReference & {
    /**
     * Indicates whether field value is always required.
     */
    alwaysRequired?: boolean;
    /**
     * The list of dependent fields.
     */
    dependentFields?: Array<WorkItemFieldReference>;
    /**
     * Gets the help text for the field.
     */
    helpText?: string;
});

