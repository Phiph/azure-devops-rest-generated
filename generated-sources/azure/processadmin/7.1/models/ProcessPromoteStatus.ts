/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Describes result of process operation promote.
 */
export type ProcessPromoteStatus = {
    /**
     * Number of projects for which promote is complete.
     */
    complete?: number;
    /**
     * ID of the promote operation.
     */
    id?: string;
    /**
     * The error message associated with the promote operation. The string will be empty if there are no errors.
     */
    message?: string;
    /**
     * Number of projects for which promote is pending.
     */
    pending?: number;
    /**
     * The remaining retries.
     */
    remainingRetries?: number;
    /**
     * True if promote finished all the projects successfully. False if still in progress or any project promote failed.
     */
    successful?: boolean;
};

