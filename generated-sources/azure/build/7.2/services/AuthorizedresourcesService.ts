/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DefinitionResourceReference } from '../models/DefinitionResourceReference';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AuthorizedresourcesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns DefinitionResourceReference successful operation
     * @throws ApiError
     */
    public authorizedresourcesAuthorizeProjectResources({
        organization,
        body,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: Array<DefinitionResourceReference>,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<Array<DefinitionResourceReference>> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/build/authorizedresources',
            path: {
                'organization': organization,
                'project': project,
            },
            body: body,
        });
    }
    /**
     * @returns DefinitionResourceReference successful operation
     * @throws ApiError
     */
    public authorizedresourcesList({
        organization,
        project,
        type,
        id,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Project ID or project name
         */
        project: string,
        type?: string,
        id?: string,
    }): CancelablePromise<Array<DefinitionResourceReference>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/build/authorizedresources',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'type': type,
                'id': id,
            },
        });
    }
}
