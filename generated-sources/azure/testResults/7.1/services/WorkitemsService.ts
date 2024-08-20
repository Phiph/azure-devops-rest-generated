/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkItemReference } from '../models/WorkItemReference';
import type { WorkItemToTestLinks } from '../models/WorkItemToTestLinks';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class WorkitemsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Query Test Result WorkItems based on filter
     * @returns WorkItemReference successful operation
     * @throws ApiError
     */
    public workitemsQueryTestResultWorkItems({
        organization,
        project,
        workItemCategory,
        automatedTestName,
        testCaseId,
        maxCompleteDate,
        days,
        workItemCount,
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
         * can take values Microsoft.BugCategory or all(for getting all workitems)
         */
        workItemCategory: string,
        automatedTestName?: string,
        testCaseId?: number,
        maxCompleteDate?: string,
        days?: number,
        workItemCount?: number,
    }): CancelablePromise<Array<WorkItemReference>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/testresults/results/workitems',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'workItemCategory': workItemCategory,
                'automatedTestName': automatedTestName,
                'testCaseId': testCaseId,
                'maxCompleteDate': maxCompleteDate,
                'days': days,
                '$workItemCount': workItemCount,
            },
        });
    }
    /**
     * @returns WorkItemReference successful operation
     * @throws ApiError
     */
    public workitemsList({
        organization,
        project,
        runId,
        testCaseResultId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Project ID or project name
         */
        project: string,
        runId: number,
        testCaseResultId: number,
    }): CancelablePromise<Array<WorkItemReference>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/testresults/runs/{runId}/results/{testCaseResultId}/workitems',
            path: {
                'organization': organization,
                'project': project,
                'runId': runId,
                'testCaseResultId': testCaseResultId,
            },
        });
    }
    /**
     * @returns WorkItemToTestLinks successful operation
     * @throws ApiError
     */
    public workitemsAdd({
        organization,
        body,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: WorkItemToTestLinks,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<WorkItemToTestLinks> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/testresults/testmethods/workitems',
            path: {
                'organization': organization,
                'project': project,
            },
            body: body,
        });
    }
    /**
     * @returns boolean successful operation
     * @throws ApiError
     */
    public workitemsDelete({
        organization,
        project,
        testName,
        workItemId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Project ID or project name
         */
        project: string,
        testName: string,
        workItemId: number,
    }): CancelablePromise<boolean> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/{project}/_apis/testresults/testmethods/workitems',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'testName': testName,
                'workItemId': workItemId,
            },
        });
    }
}
