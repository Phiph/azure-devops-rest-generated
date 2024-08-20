/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuildDefinitionTemplate } from '../models/BuildDefinitionTemplate';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TemplatesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets all definition templates.
     * @returns BuildDefinitionTemplate successful operation
     * @throws ApiError
     */
    public templatesList({
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
    }): CancelablePromise<Array<BuildDefinitionTemplate>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/build/definitions/templates',
            path: {
                'organization': organization,
                'project': project,
            },
        });
    }
    /**
     * Deletes a build definition template.
     * @returns any successful operation
     * @throws ApiError
     */
    public templatesDelete({
        organization,
        project,
        templateId,
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
         * The ID of the template.
         */
        templateId: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/{project}/_apis/build/definitions/templates/{templateId}',
            path: {
                'organization': organization,
                'project': project,
                'templateId': templateId,
            },
        });
    }
    /**
     * Gets a specific build definition template.
     * @returns BuildDefinitionTemplate successful operation
     * @throws ApiError
     */
    public templatesGet({
        organization,
        project,
        templateId,
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
         * The ID of the requested template.
         */
        templateId: string,
    }): CancelablePromise<BuildDefinitionTemplate> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/build/definitions/templates/{templateId}',
            path: {
                'organization': organization,
                'project': project,
                'templateId': templateId,
            },
        });
    }
    /**
     * Updates an existing build definition template.
     * @returns BuildDefinitionTemplate successful operation
     * @throws ApiError
     */
    public templatesSaveTemplate({
        organization,
        body,
        project,
        templateId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The new version of the template.
         */
        body: BuildDefinitionTemplate,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * The ID of the template.
         */
        templateId: string,
    }): CancelablePromise<BuildDefinitionTemplate> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/{organization}/{project}/_apis/build/definitions/templates/{templateId}',
            path: {
                'organization': organization,
                'project': project,
                'templateId': templateId,
            },
            body: body,
        });
    }
}
