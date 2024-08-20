/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Represents a reorder request for one or more work items.
 */
export type ReorderOperation = {
    /**
     * IDs of the work items to be reordered.  Must be valid WorkItem Ids.
     */
    ids?: Array<number>;
    /**
     * IterationPath for reorder operation. This is only used when we reorder from the Iteration Backlog
     */
    iterationPath?: string;
    /**
     * ID of the work item that should be after the reordered items. Can use 0 to specify the end of the list.
     */
    nextId?: number;
    /**
     * Parent ID for all of the work items involved in this operation. Can use 0 to indicate the items don't have a parent.
     */
    parentId?: number;
    /**
     * ID of the work item that should be before the reordered items. Can use 0 to specify the beginning of the list.
     */
    previousId?: number;
};

