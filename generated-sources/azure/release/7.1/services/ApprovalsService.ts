/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReleaseApproval } from '../models/ReleaseApproval';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ApprovalsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get a list of approvals
     * @returns ReleaseApproval successful operation
     * @throws ApiError
     */
    public approvalsList({
        organization,
        project,
        assignedToFilter,
        statusFilter,
        releaseIdsFilter,
        typeFilter,
        top,
        continuationToken,
        queryOrder,
        includeMyGroupApprovals,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Approvals assigned to this user.
         */
        assignedToFilter?: string,
        /**
         * Approvals with this status. Default is 'pending'.
         */
        statusFilter?: 'undefined' | 'pending' | 'approved' | 'rejected' | 'reassigned' | 'canceled' | 'skipped',
        /**
         * Approvals for release id(s) mentioned in the filter. Multiple releases can be mentioned by separating them with ',' e.g. releaseIdsFilter=1,2,3,4.
         */
        releaseIdsFilter?: string,
        /**
         * Approval with this type.
         */
        typeFilter?: 'undefined' | 'preDeploy' | 'postDeploy' | 'all',
        /**
         * Number of approvals to get. Default is 50.
         */
        top?: number,
        /**
         * Gets the approvals after the continuation token provided.
         */
        continuationToken?: number,
        /**
         * Gets the results in the defined order of created approvals. Default is 'descending'.
         */
        queryOrder?: 'descending' | 'ascending',
        /**
         * 'true' to include my group approvals. Default is 'false'.
         */
        includeMyGroupApprovals?: boolean,
    }): CancelablePromise<Array<ReleaseApproval>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/release/approvals',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'assignedToFilter': assignedToFilter,
                'statusFilter': statusFilter,
                'releaseIdsFilter': releaseIdsFilter,
                'typeFilter': typeFilter,
                'top': top,
                'continuationToken': continuationToken,
                'queryOrder': queryOrder,
                'includeMyGroupApprovals': includeMyGroupApprovals,
            },
        });
    }
    /**
     * Update status of an approval
     * @returns ReleaseApproval successful operation
     * @throws ApiError
     */
    public approvalsUpdate({
        organization,
        body,
        project,
        approvalId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * ReleaseApproval object having status, approver and comments.
         */
        body: ReleaseApproval,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Id of the approval.
         */
        approvalId: number,
    }): CancelablePromise<ReleaseApproval> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/release/approvals/{approvalId}',
            path: {
                'organization': organization,
                'project': project,
                'approvalId': approvalId,
            },
            body: body,
        });
    }
}
