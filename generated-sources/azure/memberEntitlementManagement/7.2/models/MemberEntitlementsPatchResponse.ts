/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MemberEntitlementsResponseBase } from './MemberEntitlementsResponseBase';
import type { OperationResult } from './OperationResult';
/**
 * Obsolete: Please use UserEntitlementsPatchResponse instead
 */
export type MemberEntitlementsPatchResponse = (MemberEntitlementsResponseBase & {
    /**
     * List of results for each operation
     */
    operationResults?: Array<OperationResult>;
});

