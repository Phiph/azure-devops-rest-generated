/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RepositoryStatusResponse } from '../models/RepositoryStatusResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class RepositoriesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Provides status of Repository.
     * @returns RepositoryStatusResponse successful operation
     * @throws ApiError
     */
    public repositoriesGet({
        organization,
        project,
        repository,
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
         * Repository ID or repository name.
         */
        repository: string,
    }): CancelablePromise<RepositoryStatusResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/search/status/repositories/{repository}',
            path: {
                'organization': organization,
                'project': project,
                'repository': repository,
            },
        });
    }
}
