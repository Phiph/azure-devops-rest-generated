/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { INotificationDiagnosticLog } from '../models/INotificationDiagnosticLog';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DiagnosticLogsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get a list of diagnostic logs for this service.
     * @returns INotificationDiagnosticLog successful operation
     * @throws ApiError
     */
    public diagnosticLogsList({
        source,
        organization,
        entryId,
        startTime,
        endTime,
    }: {
        /**
         * ID specifying which type of logs to check diagnostics for.
         */
        source: string,
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The ID of the specific log to query for.
         */
        entryId: string,
        /**
         * Start time for the time range to query in.
         */
        startTime?: string,
        /**
         * End time for the time range to query in.
         */
        endTime?: string,
    }): CancelablePromise<Array<INotificationDiagnosticLog>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/notification/diagnosticlogs/{source}/entries/{entryId}',
            path: {
                'source': source,
                'organization': organization,
                'entryId': entryId,
            },
            query: {
                'startTime': startTime,
                'endTime': endTime,
            },
        });
    }
}
