/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DefinitionResourceReference } from '../models/DefinitionResourceReference';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ResourcesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns DefinitionResourceReference successful operation
     * @throws ApiError
     */
    public resourcesAuthorizeDefinitionResources({
        organization,
        body,
        project,
        definitionId,
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
        definitionId: number,
    }): CancelablePromise<Array<DefinitionResourceReference>> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/build/definitions/{definitionId}/resources',
            path: {
                'organization': organization,
                'project': project,
                'definitionId': definitionId,
            },
            body: body,
        });
    }
    /**
     * @returns DefinitionResourceReference successful operation
     * @throws ApiError
     */
    public resourcesList({
        organization,
        project,
        definitionId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Project ID or project name
         */
        project: string,
        definitionId: number,
    }): CancelablePromise<Array<DefinitionResourceReference>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/build/definitions/{definitionId}/resources',
            path: {
                'organization': organization,
                'project': project,
                'definitionId': definitionId,
            },
        });
    }
}
