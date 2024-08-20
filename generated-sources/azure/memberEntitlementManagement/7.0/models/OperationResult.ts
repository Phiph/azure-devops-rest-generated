/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MemberEntitlement } from './MemberEntitlement';
export type OperationResult = {
    /**
     * List of error codes paired with their corresponding error messages.
     */
    errors?: Array<any>;
    /**
     * Success status of the operation.
     */
    isSuccess?: boolean;
    /**
     * Identifier of the Member being acted upon.
     */
    memberId?: string;
    /**
     * Result of the MemberEntitlement after the operation.
     */
    result?: MemberEntitlement;
};

