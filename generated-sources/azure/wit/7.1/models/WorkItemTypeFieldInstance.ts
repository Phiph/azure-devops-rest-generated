/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkItemTypeFieldInstanceBase } from './WorkItemTypeFieldInstanceBase';
/**
 * Field instance of a work item type.
 */
export type WorkItemTypeFieldInstance = (WorkItemTypeFieldInstanceBase & {
    /**
     * The list of field allowed values.
     */
    allowedValues?: Array<string>;
    /**
     * Represents the default value of the field.
     */
    defaultValue?: string;
});

