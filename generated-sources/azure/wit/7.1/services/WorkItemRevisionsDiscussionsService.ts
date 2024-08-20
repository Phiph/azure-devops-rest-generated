/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReportingWorkItemRevisionsBatch } from '../models/ReportingWorkItemRevisionsBatch';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class WorkItemRevisionsDiscussionsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns ReportingWorkItemRevisionsBatch successful operation
     * @throws ApiError
     */
    public workItemRevisionsDiscussionsReadReportingDiscussions({
        organization,
        project,
        continuationToken,
        maxPageSize,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Project ID or project name
         */
        project: string,
        continuationToken?: string,
        maxPageSize?: number,
    }): CancelablePromise<ReportingWorkItemRevisionsBatch> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/wit/reporting/workItemRevisions/discussions',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'continuationToken': continuationToken,
                '$maxPageSize': maxPageSize,
            },
        });
    }
}
