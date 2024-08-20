/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
/**
 * Config to create a new approval.
 */
export type ApprovalConfig = {
    /**
     * Ordered list of approvers.
     */
    approvers?: Array<IdentityRef>;
    /**
     * Identities which are not allowed to approve.
     */
    blockedApprovers?: Array<IdentityRef>;
    /**
     * Order in which approvers will be actionable.
     */
    executionOrder?: 'anyOrder' | 'inSequence';
    /**
     * Instructions for the approver.
     */
    instructions?: string;
    /**
     * Minimum number of approvers that should approve for the entire approval to be considered approved. Defaults to all.
     */
    minRequiredApprovers?: number;
};

