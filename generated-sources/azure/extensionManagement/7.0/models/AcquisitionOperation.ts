/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AcquisitionOperationDisallowReason } from './AcquisitionOperationDisallowReason';
export type AcquisitionOperation = {
    /**
     * State of the the AcquisitionOperation for the current user
     */
    operationState?: 'disallow' | 'allow' | 'completed';
    /**
     * AcquisitionOperationType: install, request, buy, etc...
     */
    operationType?: 'get' | 'install' | 'buy' | 'try' | 'request' | 'none' | 'purchaseRequest';
    /**
     * Optional reason to justify current state. Typically used with Disallow state.
     */
    reason?: string;
    /**
     * List of reasons indicating why the operation is not allowed.
     */
    reasons?: Array<AcquisitionOperationDisallowReason>;
};

