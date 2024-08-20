/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReleaseTriggerBase } from './ReleaseTriggerBase';
import type { TagFilter } from './TagFilter';
export type ContainerImageTrigger = (ReleaseTriggerBase & {
    /**
     * Alias of the trigger.
     */
    alias?: string;
    /**
     * List tag filters applied while trigger.
     */
    tagFilters?: Array<TagFilter>;
});

