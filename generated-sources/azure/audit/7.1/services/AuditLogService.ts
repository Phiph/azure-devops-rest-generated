/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuditLogQueryResult } from '../models/AuditLogQueryResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AuditLogService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Queries audit log entries
     * @returns AuditLogQueryResult successful operation
     * @throws ApiError
     */
    public auditLogQuery({
        organization,
        startTime,
        endTime,
        batchSize,
        continuationToken,
        skipAggregation,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Start time of download window. Optional
         */
        startTime?: string,
        /**
         * End time of download window. Optional
         */
        endTime?: string,
        /**
         * Max number of results to return. Optional
         */
        batchSize?: number,
        /**
         * Token used for returning next set of results from previous query. Optional
         */
        continuationToken?: string,
        /**
         * Skips aggregating events and leaves them as individual entries instead. By default events are aggregated. Event types that are aggregated: AuditLog.AccessLog.
         */
        skipAggregation?: boolean,
    }): CancelablePromise<AuditLogQueryResult> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/audit/auditlog',
            path: {
                'organization': organization,
            },
            query: {
                'startTime': startTime,
                'endTime': endTime,
                'batchSize': batchSize,
                'continuationToken': continuationToken,
                'skipAggregation': skipAggregation,
            },
        });
    }
}
