/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApprovalStep } from './ApprovalStep';
import type { IdentityRef } from './IdentityRef';
import type { ReferenceLinks } from './ReferenceLinks';
export type Approval = {
    /**
     * /// Gets the links to access the approval object.
     */
    _links?: ReferenceLinks;
    /**
     * Identities which are not allowed to approve.
     */
    blockedApprovers?: Array<IdentityRef>;
    /**
     * Date on which approval got created.
     */
    createdOn?: string;
    /**
     * Order in which approvers will be actionable.
     */
    executionOrder?: 'anyOrder' | 'inSequence';
    /**
     * Unique identifier of the approval.
     */
    id?: string;
    /**
     * Instructions for the approvers.
     */
    instructions?: string;
    /**
     * Date on which approval was last modified.
     */
    lastModifiedOn?: string;
    /**
     * Minimum number of approvers that should approve for the entire approval to be considered approved.
     */
    minRequiredApprovers?: number;
    /**
     * Current user permissions for approval object.
     */
    permissions?: 'none' | 'view' | 'update' | 'reassign' | 'resourceAdmin' | 'queueBuild';
    /**
     * Overall status of the approval.
     */
    status?: 'undefined' | 'uninitiated' | 'pending' | 'approved' | 'rejected' | 'skipped' | 'canceled' | 'timedOut' | 'failed' | 'completed' | 'all';
    /**
     * List of steps associated with the approval.
     */
    steps?: Array<ApprovalStep>;
};

