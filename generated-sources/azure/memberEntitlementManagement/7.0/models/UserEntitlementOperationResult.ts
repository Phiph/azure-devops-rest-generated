/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserEntitlement } from './UserEntitlement';
export type UserEntitlementOperationResult = {
    /**
     * List of error codes paired with their corresponding error messages.
     */
    errors?: Array<any>;
    /**
     * Success status of the operation.
     */
    isSuccess?: boolean;
    /**
     * Result of the MemberEntitlement after the operation.
     */
    result?: UserEntitlement;
    /**
     * Identifier of the Member being acted upon.
     */
    userId?: string;
};

