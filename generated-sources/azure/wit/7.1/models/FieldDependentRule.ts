/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkItemFieldReference } from './WorkItemFieldReference';
import type { WorkItemTrackingResource } from './WorkItemTrackingResource';
/**
 * Describes a list of dependent fields for a rule.
 */
export type FieldDependentRule = (WorkItemTrackingResource & {
    /**
     * The dependent fields.
     */
    dependentFields?: Array<WorkItemFieldReference>;
});

