/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FileCoverageRequest } from '../models/FileCoverageRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class FilecoverageService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get file coverage for the specified file
     * @returns string successful operation
     * @throws ApiError
     */
    public filecoverageGet({
        organization,
        body,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * File details with pull request iteration context
         */
        body: FileCoverageRequest,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/testresults/codecoverage/filecoverage',
            path: {
                'organization': organization,
                'project': project,
            },
            body: body,
        });
    }
}
