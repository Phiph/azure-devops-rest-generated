/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReportingWorkItemLinksBatch } from '../models/ReportingWorkItemLinksBatch';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ReportingWorkItemLinksService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get a batch of work item links
     * @returns ReportingWorkItemLinksBatch successful operation
     * @throws ApiError
     */
    public reportingWorkItemLinksGet({
        organization,
        project,
        linkTypes,
        types,
        continuationToken,
        startDateTime,
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
         * A list of types to filter the results to specific link types. Omit this parameter to get work item links of all link types.
         */
        linkTypes?: string,
        /**
         * A list of types to filter the results to specific work item types. Omit this parameter to get work item links of all work item types.
         */
        types?: string,
        /**
         * Specifies the continuationToken to start the batch from. Omit this parameter to get the first batch of links.
         */
        continuationToken?: string,
        /**
         * Date/time to use as a starting point for link changes. Only link changes that occurred after that date/time will be returned. Cannot be used in conjunction with 'watermark' parameter.
         */
        startDateTime?: string,
    }): CancelablePromise<ReportingWorkItemLinksBatch> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/wit/reporting/workitemlinks',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'linkTypes': linkTypes,
                'types': types,
                'continuationToken': continuationToken,
                'startDateTime': startDateTime,
            },
        });
    }
}
