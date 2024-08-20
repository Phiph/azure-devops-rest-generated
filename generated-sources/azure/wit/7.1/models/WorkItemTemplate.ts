/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkItemTemplateReference } from './WorkItemTemplateReference';
/**
 * Describes a work item template.
 */
export type WorkItemTemplate = (WorkItemTemplateReference & {
    /**
     * Mapping of field and its templated value.
     */
    fields?: Record<string, string>;
});

