/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GroupOperationResult } from './GroupOperationResult';
import type { OperationReference } from './OperationReference';
export type GroupEntitlementOperationReference = (OperationReference & {
    /**
     * Operation completed with success or failure.
     */
    completed?: boolean;
    /**
     * True if all operations were successful.
     */
    haveResultsSucceeded?: boolean;
    /**
     * List of results for each operation.
     */
    results?: Array<GroupOperationResult>;
});

