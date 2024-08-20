/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JsonPatchDocument } from '../models/JsonPatchDocument';
import type { PropertiesCollection } from '../models/PropertiesCollection';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PropertiesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets properties for a build.
     * @returns PropertiesCollection successful operation
     * @throws ApiError
     */
    public propertiesGetBuildProperties({
        organization,
        project,
        buildId,
        filter,
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
         * The ID of the build.
         */
        buildId: number,
        /**
         * A comma-delimited list of properties. If specified, filters to these specific properties.
         */
        filter?: string,
    }): CancelablePromise<PropertiesCollection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/build/builds/{buildId}/properties',
            path: {
                'organization': organization,
                'project': project,
                'buildId': buildId,
            },
            query: {
                'filter': filter,
            },
        });
    }
    /**
     * Updates properties for a build.
     * @returns PropertiesCollection successful operation
     * @throws ApiError
     */
    public propertiesUpdateBuildProperties({
        organization,
        body,
        project,
        buildId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * A json-patch document describing the properties to update.
         */
        body: JsonPatchDocument,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * The ID of the build.
         */
        buildId: number,
    }): CancelablePromise<PropertiesCollection> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/build/builds/{buildId}/properties',
            path: {
                'organization': organization,
                'project': project,
                'buildId': buildId,
            },
            body: body,
        });
    }
    /**
     * Gets properties for a definition.
     * @returns PropertiesCollection successful operation
     * @throws ApiError
     */
    public propertiesGetDefinitionProperties({
        organization,
        project,
        definitionId,
        filter,
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
         * The ID of the definition.
         */
        definitionId: number,
        /**
         * A comma-delimited list of properties. If specified, filters to these specific properties.
         */
        filter?: string,
    }): CancelablePromise<PropertiesCollection> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/build/definitions/{definitionId}/properties',
            path: {
                'organization': organization,
                'project': project,
                'definitionId': definitionId,
            },
            query: {
                'filter': filter,
            },
        });
    }
    /**
     * Updates properties for a definition.
     * @returns PropertiesCollection successful operation
     * @throws ApiError
     */
    public propertiesUpdateDefinitionProperties({
        organization,
        body,
        project,
        definitionId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * A json-patch document describing the properties to update.
         */
        body: JsonPatchDocument,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * The ID of the definition.
         */
        definitionId: number,
    }): CancelablePromise<PropertiesCollection> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/build/definitions/{definitionId}/properties',
            path: {
                'organization': organization,
                'project': project,
                'definitionId': definitionId,
            },
            body: body,
        });
    }
}
