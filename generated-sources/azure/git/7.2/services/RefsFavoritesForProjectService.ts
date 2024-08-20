/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitRefFavorite } from '../models/GitRefFavorite';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class RefsFavoritesForProjectService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns GitRefFavorite successful operation
     * @throws ApiError
     */
    public refsFavoritesForProjectList({
        organization,
        project,
        identityId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Project ID or project name
         */
        project: string,
        identityId?: string,
    }): CancelablePromise<Array<GitRefFavorite>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/git/favorites/refsForProject',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'identityId': identityId,
            },
        });
    }
}
