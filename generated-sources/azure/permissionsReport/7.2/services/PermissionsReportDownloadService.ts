/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PermissionsReportDownloadService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Download the json results of a permissions report
     * @returns string successful operation
     * @throws ApiError
     */
    public permissionsReportDownloadDownload({
        organization,
        id,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The ID (GUID) of the permissions report
         */
        id: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/permissionsreport/{id}/download',
            path: {
                'organization': organization,
                'id': id,
            },
        });
    }
}
