/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApprovalStepHistory } from './ApprovalStepHistory';
import type { IdentityRef } from './IdentityRef';
/**
 * Data for a single approval step.
 */
export type ApprovalStep = {
    /**
     * Identity who approved.
     */
    actualApprover?: IdentityRef;
    /**
     * Identity who should approve.
     */
    assignedApprover?: IdentityRef;
    /**
     * Comment associated with this step.
     */
    comment?: string;
    /**
     * Date to which approval got deferred.
     */
    deferredTo?: string;
    /**
     * History of the approval step
     */
    history?: Array<ApprovalStepHistory>;
    /**
     * Timestamp at which this step was initiated.
     */
    initiatedOn?: string;
    /**
     * Identity by which this step was last modified.
     */
    lastModifiedBy?: IdentityRef;
    /**
     * Timestamp at which this step was last modified.
     */
    lastModifiedOn?: string;
    /**
     * Order in which the approvers are allowed to approve.
     */
    order?: number;
    /**
     * Current user permissions for step.
     */
    permissions?: 'none' | 'view' | 'update' | 'reassign' | 'resourceAdmin' | 'queueBuild';
    /**
     * Current status of this step.
     */
    status?: 'undefined' | 'uninitiated' | 'pending' | 'approved' | 'rejected' | 'skipped' | 'canceled' | 'timedOut' | 'deferred' | 'failed' | 'completed' | 'all';
};

