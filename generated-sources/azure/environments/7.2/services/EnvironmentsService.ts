/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EnvironmentCreateParameter } from '../models/EnvironmentCreateParameter';
import type { EnvironmentInstance } from '../models/EnvironmentInstance';
import type { EnvironmentUpdateParameter } from '../models/EnvironmentUpdateParameter';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class EnvironmentsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create an environment.
     * @returns EnvironmentInstance successful operation
     * @throws ApiError
     */
    public environmentsAdd({
        organization,
        body,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Environment to create.
         */
        body: EnvironmentCreateParameter,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<EnvironmentInstance> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/pipelines/environments',
            path: {
                'organization': organization,
                'project': project,
            },
            body: body,
        });
    }
    /**
     * Get all environments.
     * @returns EnvironmentInstance successful operation
     * @throws ApiError
     */
    public environmentsList({
        organization,
        project,
        name,
        continuationToken,
        top,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Project ID or project name
         */
        project: string,
        name?: string,
        continuationToken?: string,
        top?: number,
    }): CancelablePromise<Array<EnvironmentInstance>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/pipelines/environments',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'name': name,
                'continuationToken': continuationToken,
                '$top': top,
            },
        });
    }
    /**
     * Delete the specified environment.
     * @returns any successful operation
     * @throws ApiError
     */
    public environmentsDelete({
        organization,
        project,
        environmentId,
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
         * ID of the environment.
         */
        environmentId: number,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/{project}/_apis/pipelines/environments/{environmentId}',
            path: {
                'organization': organization,
                'project': project,
                'environmentId': environmentId,
            },
        });
    }
    /**
     * Get an environment by its ID.
     * @returns EnvironmentInstance successful operation
     * @throws ApiError
     */
    public environmentsGet({
        organization,
        project,
        environmentId,
        expands,
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
         * ID of the environment.
         */
        environmentId: number,
        /**
         * Include these additional details in the returned objects.
         */
        expands?: 'none' | 'resourceReferences',
    }): CancelablePromise<EnvironmentInstance> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/pipelines/environments/{environmentId}',
            path: {
                'organization': organization,
                'project': project,
                'environmentId': environmentId,
            },
            query: {
                'expands': expands,
            },
        });
    }
    /**
     * Update the specified environment.
     * @returns EnvironmentInstance successful operation
     * @throws ApiError
     */
    public environmentsUpdate({
        organization,
        body,
        project,
        environmentId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Environment data to update.
         */
        body: EnvironmentUpdateParameter,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * ID of the environment.
         */
        environmentId: number,
    }): CancelablePromise<EnvironmentInstance> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/pipelines/environments/{environmentId}',
            path: {
                'organization': organization,
                'project': project,
                'environmentId': environmentId,
            },
            body: body,
        });
    }
}
