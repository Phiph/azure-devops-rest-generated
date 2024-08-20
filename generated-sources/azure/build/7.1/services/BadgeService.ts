/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class BadgeService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @deprecated
     * This endpoint is deprecated. Please see the Build Status REST endpoint.
     * @returns string successful operation
     * @throws ApiError
     */
    public badgeGet({
        organization,
        project,
        definitionId,
        branchName,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The project ID or name.
         */
        project: string,
        /**
         * The ID of the definition.
         */
        definitionId: number,
        /**
         * The name of the branch.
         */
        branchName?: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/public/build/definitions/{project}/{definitionId}/badge',
            path: {
                'organization': organization,
                'project': project,
                'definitionId': definitionId,
            },
            query: {
                'branchName': branchName,
            },
        });
    }
    /**
     * Gets a badge that indicates the status of the most recent build for the specified branch.
     * @returns string successful operation
     * @throws ApiError
     */
    public badgeGetBuildBadgeData({
        organization,
        project,
        repoType,
        repoId,
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
         * The repository type.
         */
        repoType: string,
        /**
         * The repository ID.
         */
        repoId?: string,
        /**
         * The branch name.
         */
        branchName?: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/build/repos/{repoType}/badge',
            path: {
                'organization': organization,
                'project': project,
                'repoType': repoType,
            },
            query: {
                'repoId': repoId,
                'branchName': branchName,
            },
        });
    }
}
