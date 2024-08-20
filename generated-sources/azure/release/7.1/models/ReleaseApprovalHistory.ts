/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
export type ReleaseApprovalHistory = {
    /**
     * Identity of the approver.
     */
    approver?: IdentityRef;
    /**
     * Identity of the object who changed approval.
     */
    changedBy?: IdentityRef;
    /**
     * Approval history comments.
     */
    comments?: string;
    /**
     * Time when this approval created.
     */
    createdOn?: string;
    /**
     * Time when this approval modified.
     */
    modifiedOn?: string;
    /**
     * Approval history revision.
     */
    revision?: number;
};

