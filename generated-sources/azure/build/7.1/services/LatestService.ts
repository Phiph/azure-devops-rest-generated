/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Build } from '../models/Build';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class LatestService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets the latest build for a definition, optionally scoped to a specific branch.
     * @returns Build successful operation
     * @throws ApiError
     */
    public latestGet({
        organization,
        project,
        definition,
        branchName,
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
         * definition name with optional leading folder path, or the definition id
         */
        definition: string,
        /**
         * optional parameter that indicates the specific branch to use. If not specified, the default branch is used.
         */
        branchName?: string,
    }): CancelablePromise<Build> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/build/latest/{definition}',
            path: {
                'organization': organization,
                'project': project,
                'definition': definition,
            },
            query: {
                'branchName': branchName,
            },
        });
    }
}
