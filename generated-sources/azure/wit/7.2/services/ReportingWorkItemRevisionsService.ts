/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReportingWorkItemRevisionsBatch } from '../models/ReportingWorkItemRevisionsBatch';
import type { ReportingWorkItemRevisionsFilter } from '../models/ReportingWorkItemRevisionsFilter';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ReportingWorkItemRevisionsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get a batch of work item revisions with the option of including deleted items
     * @returns ReportingWorkItemRevisionsBatch successful operation
     * @throws ApiError
     */
    public reportingWorkItemRevisionsReadReportingRevisionsGet({
        organization,
        project,
        fields,
        types,
        continuationToken,
        startDateTime,
        includeIdentityRef,
        includeDeleted,
        includeTagRef,
        includeLatestOnly,
        expand,
        includeDiscussionChangesOnly,
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
        /**
         * A list of fields to return in work item revisions. Omit this parameter to get all reportable fields.
         */
        fields?: string,
        /**
         * A list of types to filter the results to specific work item types. Omit this parameter to get work item revisions of all work item types.
         */
        types?: string,
        /**
         * Specifies the watermark to start the batch from. Omit this parameter to get the first batch of revisions.
         */
        continuationToken?: string,
        /**
         * Date/time to use as a starting point for revisions, all revisions will occur after this date/time. Cannot be used in conjunction with 'watermark' parameter.
         */
        startDateTime?: string,
        /**
         * Return an identity reference instead of a string value for identity fields.
         */
        includeIdentityRef?: boolean,
        /**
         * Specify if the deleted item should be returned.
         */
        includeDeleted?: boolean,
        /**
         * Specify if the tag objects should be returned for System.Tags field.
         */
        includeTagRef?: boolean,
        /**
         * Return only the latest revisions of work items, skipping all historical revisions
         */
        includeLatestOnly?: boolean,
        /**
         * Return all the fields in work item revisions, including long text fields which are not returned by default
         */
        expand?: 'none' | 'fields',
        /**
         * Return only the those revisions of work items, where only history field was changed
         */
        includeDiscussionChangesOnly?: boolean,
        /**
         * The maximum number of results to return in this batch
         */
        maxPageSize?: number,
    }): CancelablePromise<ReportingWorkItemRevisionsBatch> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/wit/reporting/workitemrevisions',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'fields': fields,
                'types': types,
                'continuationToken': continuationToken,
                'startDateTime': startDateTime,
                'includeIdentityRef': includeIdentityRef,
                'includeDeleted': includeDeleted,
                'includeTagRef': includeTagRef,
                'includeLatestOnly': includeLatestOnly,
                '$expand': expand,
                'includeDiscussionChangesOnly': includeDiscussionChangesOnly,
                '$maxPageSize': maxPageSize,
            },
        });
    }
    /**
     * Get a batch of work item revisions. This request may be used if your list of fields is large enough that it may run the URL over the length limit.
     * @returns ReportingWorkItemRevisionsBatch successful operation
     * @throws ApiError
     */
    public reportingWorkItemRevisionsReadReportingRevisionsPost({
        organization,
        body,
        project,
        continuationToken,
        startDateTime,
        expand,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * An object that contains request settings: field filter, type filter, identity format
         */
        body: ReportingWorkItemRevisionsFilter,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Specifies the watermark to start the batch from. Omit this parameter to get the first batch of revisions.
         */
        continuationToken?: string,
        /**
         * Date/time to use as a starting point for revisions, all revisions will occur after this date/time. Cannot be used in conjunction with 'watermark' parameter.
         */
        startDateTime?: string,
        expand?: 'none' | 'fields',
    }): CancelablePromise<ReportingWorkItemRevisionsBatch> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/wit/reporting/workitemrevisions',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'continuationToken': continuationToken,
                'startDateTime': startDateTime,
                '$expand': expand,
            },
            body: body,
        });
    }
}
