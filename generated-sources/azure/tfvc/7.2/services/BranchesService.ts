/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TfvcBranchRef } from '../models/TfvcBranchRef';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class BranchesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get branch hierarchies below the specified scopePath
     * @returns TfvcBranchRef successful operation
     * @throws ApiError
     */
    public branchesGetBranchRefs({
        organization,
        scopePath,
        project,
        includeDeleted,
        includeLinks,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Full path to the branch.  Default: $/ Examples: $/, $/MyProject, $/MyProject/SomeFolder.
         */
        scopePath: string,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Return deleted branches. Default: False
         */
        includeDeleted?: boolean,
        /**
         * Return links. Default: False
         */
        includeLinks?: boolean,
    }): CancelablePromise<Array<TfvcBranchRef>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/tfvc/branches',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'scopePath': scopePath,
                'includeDeleted': includeDeleted,
                'includeLinks': includeLinks,
            },
        });
    }
}
