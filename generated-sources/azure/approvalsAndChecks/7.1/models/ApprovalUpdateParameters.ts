/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
/**
 * Data to update an approval object or its individual step.
 */
export type ApprovalUpdateParameters = {
    /**
     * ID of the approval to be updated.
     */
    approvalId?: string;
    /**
     * Current approver.
     */
    assignedApprover?: IdentityRef;
    /**
     * Gets or sets comment.
     */
    comment?: string;
    /**
     * Reassigned Approver.
     */
    reassignTo?: IdentityRef;
    /**
     * Gets or sets status.
     */
    status?: 'undefined' | 'uninitiated' | 'pending' | 'approved' | 'rejected' | 'skipped' | 'canceled' | 'timedOut' | 'failed' | 'completed' | 'all';
};

