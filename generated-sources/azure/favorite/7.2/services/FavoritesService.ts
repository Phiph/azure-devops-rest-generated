/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Favorite } from '../models/Favorite';
import type { FavoriteCreateParameters } from '../models/FavoriteCreateParameters';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class FavoritesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns Favorite successful operation
     * @throws ApiError
     */
    public favoritesCreateFavorite({
        organization,
        body,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: FavoriteCreateParameters,
    }): CancelablePromise<Favorite> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/_apis/favorite/favorites',
            path: {
                'organization': organization,
            },
            body: body,
        });
    }
    /**
     * @returns Favorite successful operation
     * @throws ApiError
     */
    public favoritesGetFavorites({
        organization,
        artifactType,
        artifactScopeType,
        artifactScopeId,
        includeExtendedDetails,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        artifactType?: string,
        artifactScopeType?: string,
        artifactScopeId?: string,
        includeExtendedDetails?: boolean,
    }): CancelablePromise<Array<Favorite>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/favorite/favorites',
            path: {
                'organization': organization,
            },
            query: {
                'artifactType': artifactType,
                'artifactScopeType': artifactScopeType,
                'artifactScopeId': artifactScopeId,
                'includeExtendedDetails': includeExtendedDetails,
            },
        });
    }
    /**
     * @returns any successful operation
     * @throws ApiError
     */
    public favoritesDeleteFavoriteById({
        organization,
        favoriteId,
        artifactType,
        artifactScopeType,
        artifactScopeId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        favoriteId: string,
        artifactType: string,
        artifactScopeType: string,
        artifactScopeId?: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/_apis/favorite/favorites/{favoriteId}',
            path: {
                'organization': organization,
                'favoriteId': favoriteId,
            },
            query: {
                'artifactType': artifactType,
                'artifactScopeType': artifactScopeType,
                'artifactScopeId': artifactScopeId,
            },
        });
    }
    /**
     * @returns Favorite successful operation
     * @throws ApiError
     */
    public favoritesGetFavoriteById({
        organization,
        favoriteId,
        artifactScopeType,
        artifactType,
        artifactScopeId,
        includeExtendedDetails,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        favoriteId: string,
        artifactScopeType: string,
        artifactType: string,
        artifactScopeId?: string,
        includeExtendedDetails?: boolean,
    }): CancelablePromise<Favorite> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/favorite/favorites/{favoriteId}',
            path: {
                'organization': organization,
                'favoriteId': favoriteId,
            },
            query: {
                'artifactScopeType': artifactScopeType,
                'artifactType': artifactType,
                'artifactScopeId': artifactScopeId,
                'includeExtendedDetails': includeExtendedDetails,
            },
        });
    }
}
