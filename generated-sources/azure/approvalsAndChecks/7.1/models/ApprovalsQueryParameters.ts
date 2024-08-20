/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ApprovalsQueryParameters = {
    /**
     * Query approvals based on list of approval IDs.
     */
    approvalIds?: Array<string>;
    /**
     * Query approvals based on approval status
     */
    approverStatus?: 'undefined' | 'uninitiated' | 'pending' | 'approved' | 'rejected' | 'skipped' | 'canceled' | 'timedOut' | 'failed' | 'completed' | 'all';
    /**
     * Query approvals based on how many approvals to return.
     */
    top?: number;
    /**
     * Query approvals based on list of approver IDs.
     */
    userIds?: Array<string>;
};

