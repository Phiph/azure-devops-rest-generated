/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkItemTemplate } from '../models/WorkItemTemplate';
import type { WorkItemTemplateReference } from '../models/WorkItemTemplateReference';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TemplatesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates a template
     * @returns WorkItemTemplate successful operation
     * @throws ApiError
     */
    public templatesCreate({
        organization,
        body,
        project,
        team,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Template contents
         */
        body: WorkItemTemplate,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Team ID or team name
         */
        team: string,
    }): CancelablePromise<WorkItemTemplate> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/{team}/_apis/wit/templates',
            path: {
                'organization': organization,
                'project': project,
                'team': team,
            },
            body: body,
        });
    }
    /**
     * Gets template
     * @returns WorkItemTemplateReference successful operation
     * @throws ApiError
     */
    public templatesList({
        organization,
        project,
        team,
        workitemtypename,
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
         * Team ID or team name
         */
        team: string,
        /**
         * Optional, When specified returns templates for given Work item type.
         */
        workitemtypename?: string,
    }): CancelablePromise<Array<WorkItemTemplateReference>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/{team}/_apis/wit/templates',
            path: {
                'organization': organization,
                'project': project,
                'team': team,
            },
            query: {
                'workitemtypename': workitemtypename,
            },
        });
    }
    /**
     * Deletes the template with given id
     * @returns any successful operation
     * @throws ApiError
     */
    public templatesDelete({
        organization,
        project,
        team,
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
         * Team ID or team name
         */
        team: string,
        /**
         * Template id
         */
        templateId: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/{project}/{team}/_apis/wit/templates/{templateId}',
            path: {
                'organization': organization,
                'project': project,
                'team': team,
                'templateId': templateId,
            },
        });
    }
    /**
     * Gets the template with specified id
     * @returns WorkItemTemplate successful operation
     * @throws ApiError
     */
    public templatesGet({
        organization,
        project,
        team,
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
         * Team ID or team name
         */
        team: string,
        /**
         * Template Id
         */
        templateId: string,
    }): CancelablePromise<WorkItemTemplate> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/{team}/_apis/wit/templates/{templateId}',
            path: {
                'organization': organization,
                'project': project,
                'team': team,
                'templateId': templateId,
            },
        });
    }
    /**
     * Replace template contents
     * @returns WorkItemTemplate successful operation
     * @throws ApiError
     */
    public templatesReplaceTemplate({
        organization,
        body,
        project,
        team,
        templateId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Template contents to replace with
         */
        body: WorkItemTemplate,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Team ID or team name
         */
        team: string,
        /**
         * Template id
         */
        templateId: string,
    }): CancelablePromise<WorkItemTemplate> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/{organization}/{project}/{team}/_apis/wit/templates/{templateId}',
            path: {
                'organization': organization,
                'project': project,
                'team': team,
                'templateId': templateId,
            },
            body: body,
        });
    }
}
