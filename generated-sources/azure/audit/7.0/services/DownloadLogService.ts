/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DownloadLogService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Downloads audit log entries.
     * @returns string successful operation
     * @throws ApiError
     */
    public downloadLogDownloadLog({
        organization,
        format,
        startTime,
        endTime,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * File format for download. Can be "json" or "csv".
         */
        format: string,
        /**
         * Start time of download window. Optional
         */
        startTime?: string,
        /**
         * End time of download window. Optional
         */
        endTime?: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/audit/downloadlog',
            path: {
                'organization': organization,
            },
            query: {
                'format': format,
                'startTime': startTime,
                'endTime': endTime,
            },
        });
    }
}
