/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Reference to a deleted work item.
 */
export type WorkItemDeleteReference = {
    /**
     * The HTTP status code for work item operation in a batch request.
     */
    code?: number;
    /**
     * The user who deleted the work item type.
     */
    deletedBy?: string;
    /**
     * The work item deletion date.
     */
    deletedDate?: string;
    /**
     * Work item ID.
     */
    id?: number;
    /**
     * The exception message for work item operation in a batch request.
     */
    message?: string;
    /**
     * Name or title of the work item.
     */
    name?: string;
    /**
     * Parent project of the deleted work item.
     */
    project?: string;
    /**
     * Type of work item.
     */
    type?: string;
    /**
     * REST API URL of the resource
     */
    url?: string;
};

