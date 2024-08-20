/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Describes a request to delete a set of work items
 */
export type WorkItemDeleteBatchRequest = {
    /**
     * Optional parameter, if set to true, the work item is deleted permanently. Please note: the destroy action is PERMANENT and cannot be undone.
     */
    destroy?: boolean;
    /**
     * The requested work item ids
     */
    ids?: Array<number>;
    /**
     * Optional parameter, if set to true, notifications will be disabled.
     */
    skipNotifications?: boolean;
};

