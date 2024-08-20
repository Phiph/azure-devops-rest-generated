/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitRefFavorite } from '../models/GitRefFavorite';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class RefsFavoritesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates a ref favorite
     * @returns GitRefFavorite successful operation
     * @throws ApiError
     */
    public refsFavoritesCreate({
        organization,
        body,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The ref favorite to create.
         */
        body: GitRefFavorite,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<GitRefFavorite> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/git/favorites/refs',
            path: {
                'organization': organization,
                'project': project,
            },
            body: body,
        });
    }
    /**
     * Gets the refs favorites for a repo and an identity.
     * @returns GitRefFavorite successful operation
     * @throws ApiError
     */
    public refsFavoritesList({
        organization,
        project,
        repositoryId,
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
        /**
         * The id of the repository.
         */
        repositoryId?: string,
        /**
         * The id of the identity whose favorites are to be retrieved. If null, the requesting identity is used.
         */
        identityId?: string,
    }): CancelablePromise<Array<GitRefFavorite>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/git/favorites/refs',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'repositoryId': repositoryId,
                'identityId': identityId,
            },
        });
    }
    /**
     * Deletes the refs favorite specified
     * @returns any successful operation
     * @throws ApiError
     */
    public refsFavoritesDelete({
        organization,
        project,
        favoriteId,
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
         * The Id of the ref favorite to delete.
         */
        favoriteId: number,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/{project}/_apis/git/favorites/refs/{favoriteId}',
            path: {
                'organization': organization,
                'project': project,
                'favoriteId': favoriteId,
            },
        });
    }
    /**
     * Gets the refs favorite for a favorite Id.
     * @returns GitRefFavorite successful operation
     * @throws ApiError
     */
    public refsFavoritesGet({
        organization,
        project,
        favoriteId,
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
         * The Id of the requested ref favorite.
         */
        favoriteId: number,
    }): CancelablePromise<GitRefFavorite> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/git/favorites/refs/{favoriteId}',
            path: {
                'organization': organization,
                'project': project,
                'favoriteId': favoriteId,
            },
        });
    }
}
