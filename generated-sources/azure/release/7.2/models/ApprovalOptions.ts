/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ApprovalOptions = {
    /**
     * Specify whether the approval can be skipped if the same approver approved the previous stage.
     */
    autoTriggeredAndPreviousEnvironmentApprovedCanBeSkipped?: boolean;
    /**
     * Specify whether revalidate identity of approver before completing the approval.
     */
    enforceIdentityRevalidation?: boolean;
    /**
     * Approvals execution order.
     */
    executionOrder?: 'beforeGates' | 'afterSuccessfulGates' | 'afterGatesAlways';
    /**
     * Specify whether the user requesting a release or deployment should allow to approver.
     */
    releaseCreatorCanBeApprover?: boolean;
    /**
     * The number of approvals required to move release forward. '0' means all approvals required.
     */
    requiredApproverCount?: number;
    /**
     * Approval timeout. Approval default timeout is 30 days. Maximum allowed timeout is 365 days. '0' means default timeout i.e 30 days.
     */
    timeoutInMinutes?: number;
};

