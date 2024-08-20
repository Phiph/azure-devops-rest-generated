/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Approval } from '../models/Approval';
import type { ApprovalUpdateParameters } from '../models/ApprovalUpdateParameters';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ApprovalsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List Approvals. This can be used to get a set of pending approvals in a pipeline, on an user or for a resource..
     * @returns Approval successful operation
     * @throws ApiError
     */
    public approvalsQuery({
        organization,
        project,
        approvalIds,
        expand,
        userIds,
        state,
        top,
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
         * List of approval Ids to get.
         */
        approvalIds?: string,
        /**
         * Include these additional details in the returned objects.
         */
        expand?: 'none' | 'steps' | 'permissions',
        /**
         * List of user Ids approvals assigned to. Accepts either user Ids or user descriptors.
         */
        userIds?: string,
        /**
         * Approval status. Returns approvals of any status if not provided
         */
        state?: 'undefined' | 'uninitiated' | 'pending' | 'approved' | 'rejected' | 'skipped' | 'canceled' | 'timedOut' | 'failed' | 'completed' | 'all',
        /**
         * Maximum number of approvals to get.
         */
        top?: number,
    }): CancelablePromise<Array<Approval>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/pipelines/approvals',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'approvalIds': approvalIds,
                '$expand': expand,
                'userIds': userIds,
                'state': state,
                'top': top,
            },
        });
    }
    /**
     * Update approvals.
     * @returns Approval successful operation
     * @throws ApiError
     */
    public approvalsUpdate({
        organization,
        body,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: Array<ApprovalUpdateParameters>,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<Array<Approval>> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/pipelines/approvals',
            path: {
                'organization': organization,
                'project': project,
            },
            body: body,
        });
    }
    /**
     * Get an approval.
     * @returns Approval successful operation
     * @throws ApiError
     */
    public approvalsGet({
        organization,
        project,
        approvalId,
        expand,
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
         * Id of the approval.
         */
        approvalId: string,
        expand?: 'none' | 'steps' | 'permissions',
    }): CancelablePromise<Approval> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/pipelines/approvals/{approvalId}',
            path: {
                'organization': organization,
                'project': project,
                'approvalId': approvalId,
            },
            query: {
                '$expand': expand,
            },
        });
    }
}
