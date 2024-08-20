/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MemberEntitlement2OperationResult } from './MemberEntitlement2OperationResult';
import type { OperationReference } from './OperationReference';
export type MemberEntitlement2OperationReference = (OperationReference & {
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
    results?: Array<MemberEntitlement2OperationResult>;
});

