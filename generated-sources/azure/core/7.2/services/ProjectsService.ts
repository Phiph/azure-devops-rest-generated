/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JsonPatchDocument } from '../models/JsonPatchDocument';
import type { OperationReference } from '../models/OperationReference';
import type { ProjectProperty } from '../models/ProjectProperty';
import type { TeamProject } from '../models/TeamProject';
import type { TeamProjectReference } from '../models/TeamProjectReference';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ProjectsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get all projects in the organization that the authenticated user has access to.
     * @returns TeamProjectReference successful operation
     * @throws ApiError
     */
    public projectsList({
        organization,
        stateFilter,
        top,
        skip,
        continuationToken,
        getDefaultTeamImageUrl,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Filter on team projects in a specific team project state (default: WellFormed).
         */
        stateFilter?: 'deleting' | 'new' | 'wellFormed' | 'createPending' | 'all' | 'unchanged' | 'deleted',
        top?: number,
        skip?: number,
        /**
         * Pointer that shows how many projects already been fetched.
         */
        continuationToken?: number,
        getDefaultTeamImageUrl?: boolean,
    }): CancelablePromise<Array<TeamProjectReference>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/projects',
            path: {
                'organization': organization,
            },
            query: {
                'stateFilter': stateFilter,
                '$top': top,
                '$skip': skip,
                'continuationToken': continuationToken,
                'getDefaultTeamImageUrl': getDefaultTeamImageUrl,
            },
        });
    }
    /**
     * Queues a project to be created. Use the [GetOperation](../../operations/operations/get) to periodically check for create project status.
     * @returns OperationReference successful operation
     * @throws ApiError
     */
    public projectsCreate({
        organization,
        body,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The project to create.
         */
        body: TeamProject,
    }): CancelablePromise<OperationReference> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/_apis/projects',
            path: {
                'organization': organization,
            },
            body: body,
        });
    }
    /**
     * Get project with the specified id or name, optionally including capabilities.
     * @returns TeamProject successful operation
     * @throws ApiError
     */
    public projectsGet({
        organization,
        projectId,
        includeCapabilities,
        includeHistory,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        projectId: string,
        /**
         * Include capabilities (such as source control) in the team project result (default: false).
         */
        includeCapabilities?: boolean,
        /**
         * Search within renamed projects (that had such name in the past).
         */
        includeHistory?: boolean,
    }): CancelablePromise<TeamProject> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/projects/{projectId}',
            path: {
                'organization': organization,
                'projectId': projectId,
            },
            query: {
                'includeCapabilities': includeCapabilities,
                'includeHistory': includeHistory,
            },
        });
    }
    /**
     * Queues a project to be deleted. Use the [GetOperation](../../operations/operations/get) to periodically check for delete project status.
     * @returns OperationReference successful operation
     * @throws ApiError
     */
    public projectsDelete({
        organization,
        projectId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The project id of the project to delete.
         */
        projectId: string,
    }): CancelablePromise<OperationReference> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/_apis/projects/{projectId}',
            path: {
                'organization': organization,
                'projectId': projectId,
            },
        });
    }
    /**
     * Update an existing project's name, abbreviation, description, or restore a project.
     * @returns OperationReference successful operation
     * @throws ApiError
     */
    public projectsUpdate({
        organization,
        body,
        projectId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The updates for the project. The state must be set to wellFormed to restore the project.
         */
        body: TeamProject,
        /**
         * The project id of the project to update.
         */
        projectId: string,
    }): CancelablePromise<OperationReference> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/_apis/projects/{projectId}',
            path: {
                'organization': organization,
                'projectId': projectId,
            },
            body: body,
        });
    }
    /**
     * Get a collection of team project properties.
     * @returns ProjectProperty successful operation
     * @throws ApiError
     */
    public projectsGetProjectProperties({
        organization,
        projectId,
        keys,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The team project ID.
         */
        projectId: string,
        /**
         * A comma-delimited string of team project property names. Wildcard characters ("?" and "*") are supported. If no key is specified, all properties will be returned.
         */
        keys?: string,
    }): CancelablePromise<Array<ProjectProperty>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/projects/{projectId}/properties',
            path: {
                'organization': organization,
                'projectId': projectId,
            },
            query: {
                'keys': keys,
            },
        });
    }
    /**
     * Create, update, and delete team project properties.
     * @returns any successful operation
     * @throws ApiError
     */
    public projectsSetProjectProperties({
        organization,
        projectId,
        body,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The team project ID.
         */
        projectId: string,
        /**
         * A JSON Patch document that represents an array of property operations. See RFC 6902 for more details on JSON Patch. The accepted operation verbs are Add and Remove, where Add is used for both creating and updating properties. The path consists of a forward slash and a property name.
         */
        body: JsonPatchDocument,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/_apis/projects/{projectId}/properties',
            path: {
                'organization': organization,
                'projectId': projectId,
            },
            body: body,
        });
    }
}
