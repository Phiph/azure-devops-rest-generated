/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WikiCreateParametersV2 } from '../models/WikiCreateParametersV2';
import type { WikiUpdateParameters } from '../models/WikiUpdateParameters';
import type { WikiV2 } from '../models/WikiV2';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class WikisService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates the wiki resource.
     * @returns WikiV2 Wiki created
     * @throws ApiError
     */
    public wikisCreate({
        organization,
        body,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Parameters for the wiki creation.
         */
        body: WikiCreateParametersV2,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<WikiV2> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/wiki/wikis',
            path: {
                'organization': organization,
                'project': project,
            },
            body: body,
        });
    }
    /**
     * Gets all wikis in a project or collection.
     * @returns WikiV2 successful operation
     * @throws ApiError
     */
    public wikisList({
        organization,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<Array<WikiV2>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/wiki/wikis',
            path: {
                'organization': organization,
                'project': project,
            },
        });
    }
    /**
     * Deletes the wiki corresponding to the wiki ID or wiki name provided.
     * @returns WikiV2 Wiki deleted
     * @throws ApiError
     */
    public wikisDelete({
        organization,
        wikiIdentifier,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Wiki ID or wiki name.
         */
        wikiIdentifier: string,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<WikiV2> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/{project}/_apis/wiki/wikis/{wikiIdentifier}',
            path: {
                'organization': organization,
                'wikiIdentifier': wikiIdentifier,
                'project': project,
            },
        });
    }
    /**
     * Gets the wiki corresponding to the wiki ID or wiki name provided.
     * @returns WikiV2 successful operation
     * @throws ApiError
     */
    public wikisGet({
        organization,
        wikiIdentifier,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Wiki ID or wiki name.
         */
        wikiIdentifier: string,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<WikiV2> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/wiki/wikis/{wikiIdentifier}',
            path: {
                'organization': organization,
                'wikiIdentifier': wikiIdentifier,
                'project': project,
            },
        });
    }
    /**
     * Updates the wiki corresponding to the wiki ID or wiki name provided using the update parameters.
     * @returns WikiV2 successful operation
     * @throws ApiError
     */
    public wikisUpdate({
        organization,
        body,
        wikiIdentifier,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Update parameters.
         */
        body: WikiUpdateParameters,
        /**
         * Wiki ID or wiki name.
         */
        wikiIdentifier: string,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<WikiV2> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/wiki/wikis/{wikiIdentifier}',
            path: {
                'organization': organization,
                'wikiIdentifier': wikiIdentifier,
                'project': project,
            },
            body: body,
        });
    }
}
