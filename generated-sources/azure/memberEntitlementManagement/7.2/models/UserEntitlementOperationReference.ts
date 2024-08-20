/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OperationReference } from './OperationReference';
import type { UserEntitlementOperationResult } from './UserEntitlementOperationResult';
export type UserEntitlementOperationReference = (OperationReference & {
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
    results?: Array<UserEntitlementOperationResult>;
});

