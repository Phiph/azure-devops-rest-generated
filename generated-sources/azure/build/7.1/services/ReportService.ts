/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuildReportMetadata } from '../models/BuildReportMetadata';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ReportService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets a build report.
     * @returns BuildReportMetadata successful operation
     * @throws ApiError
     */
    public reportGet({
        organization,
        project,
        buildId,
        type,
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
         * The ID of the build.
         */
        buildId: number,
        type?: string,
    }): CancelablePromise<BuildReportMetadata> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/build/builds/{buildId}/report',
            path: {
                'organization': organization,
                'project': project,
                'buildId': buildId,
            },
            query: {
                'type': type,
            },
        });
    }
}
