/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserEntitlementOperationResult } from './UserEntitlementOperationResult';
import type { UserEntitlementsResponseBase } from './UserEntitlementsResponseBase';
export type UserEntitlementsPatchResponse = (UserEntitlementsResponseBase & {
    /**
     * List of results for each operation.
     */
    operationResults?: Array<UserEntitlementOperationResult>;
});

