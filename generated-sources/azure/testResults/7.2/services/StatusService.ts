/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class StatusService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * <p>Gets the coverage status for the last successful build of a definition, optionally scoped to a specific branch</p>
     * @returns string successful operation
     * @throws ApiError
     */
    public statusGet({
        organization,
        project,
        definition,
        branchName,
        label,
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
         * The ID or name of the definition.
         */
        definition: string,
        /**
         * The branch name.
         */
        branchName?: string,
        /**
         * The String to replace the default text on the left side of the badge.
         */
        label?: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/testresults/codecoverage/status/{definition}',
            path: {
                'organization': organization,
                'project': project,
                'definition': definition,
            },
            query: {
                'branchName': branchName,
                'label': label,
            },
        });
    }
}
