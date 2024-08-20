/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseOperationResult } from './BaseOperationResult';
import type { GroupEntitlement } from './GroupEntitlement';
export type GroupOperationResult = (BaseOperationResult & {
    /**
     * Identifier of the Group being acted upon
     */
    groupId?: string;
    /**
     * Result of the Groupentitlement after the operation
     */
    result?: GroupEntitlement;
});

