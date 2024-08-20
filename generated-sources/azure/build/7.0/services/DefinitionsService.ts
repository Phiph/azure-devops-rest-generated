/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuildDefinition } from '../models/BuildDefinition';
import type { BuildDefinitionReference } from '../models/BuildDefinitionReference';
import type { BuildDefinitionRevision } from '../models/BuildDefinitionRevision';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DefinitionsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates a new definition.
     * @returns BuildDefinition successful operation
     * @throws ApiError
     */
    public definitionsCreate({
        organization,
        body,
        project,
        definitionToCloneId,
        definitionToCloneRevision,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The definition.
         */
        body: BuildDefinition,
        /**
         * Project ID or project name
         */
        project: string,
        definitionToCloneId?: number,
        definitionToCloneRevision?: number,
    }): CancelablePromise<BuildDefinition> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/build/definitions',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'definitionToCloneId': definitionToCloneId,
                'definitionToCloneRevision': definitionToCloneRevision,
            },
            body: body,
        });
    }
    /**
     * Gets a list of definitions.
     * @returns BuildDefinitionReference successful operation
     * @throws ApiError
     */
    public definitionsList({
        organization,
        project,
        name,
        repositoryId,
        repositoryType,
        queryOrder,
        top,
        continuationToken,
        minMetricsTime,
        definitionIds,
        path,
        builtAfter,
        notBuiltAfter,
        includeAllProperties,
        includeLatestBuilds,
        taskIdFilter,
        processType,
        yamlFilename,
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
         * If specified, filters to definitions whose names match this pattern.
         */
        name?: string,
        /**
         * A repository ID. If specified, filters to definitions that use this repository.
         */
        repositoryId?: string,
        /**
         * If specified, filters to definitions that have a repository of this type.
         */
        repositoryType?: string,
        /**
         * Indicates the order in which definitions should be returned.
         */
        queryOrder?: 'none' | 'lastModifiedAscending' | 'lastModifiedDescending' | 'definitionNameAscending' | 'definitionNameDescending',
        /**
         * The maximum number of definitions to return.
         */
        top?: number,
        /**
         * A continuation token, returned by a previous call to this method, that can be used to return the next set of definitions.
         */
        continuationToken?: string,
        /**
         * If specified, indicates the date from which metrics should be included.
         */
        minMetricsTime?: string,
        /**
         * A comma-delimited list that specifies the IDs of definitions to retrieve.
         */
        definitionIds?: string,
        /**
         * If specified, filters to definitions under this folder.
         */
        path?: string,
        /**
         * If specified, filters to definitions that have builds after this date.
         */
        builtAfter?: string,
        /**
         * If specified, filters to definitions that do not have builds after this date.
         */
        notBuiltAfter?: string,
        /**
         * Indicates whether the full definitions should be returned. By default, shallow representations of the definitions are returned.
         */
        includeAllProperties?: boolean,
        /**
         * Indicates whether to return the latest and latest completed builds for this definition.
         */
        includeLatestBuilds?: boolean,
        /**
         * If specified, filters to definitions that use the specified task.
         */
        taskIdFilter?: string,
        /**
         * If specified, filters to definitions with the given process type.
         */
        processType?: number,
        /**
         * If specified, filters to YAML definitions that match the given filename. To use this filter includeAllProperties should be set to true
         */
        yamlFilename?: string,
    }): CancelablePromise<Array<BuildDefinitionReference>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/build/definitions',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'name': name,
                'repositoryId': repositoryId,
                'repositoryType': repositoryType,
                'queryOrder': queryOrder,
                '$top': top,
                'continuationToken': continuationToken,
                'minMetricsTime': minMetricsTime,
                'definitionIds': definitionIds,
                'path': path,
                'builtAfter': builtAfter,
                'notBuiltAfter': notBuiltAfter,
                'includeAllProperties': includeAllProperties,
                'includeLatestBuilds': includeLatestBuilds,
                'taskIdFilter': taskIdFilter,
                'processType': processType,
                'yamlFilename': yamlFilename,
            },
        });
    }
    /**
     * Deletes a definition and all associated builds.
     * @returns any successful operation
     * @throws ApiError
     */
    public definitionsDelete({
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
        /**
         * The ID of the definition.
         */
        definitionId: number,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/{project}/_apis/build/definitions/{definitionId}',
            path: {
                'organization': organization,
                'project': project,
                'definitionId': definitionId,
            },
        });
    }
    /**
     * Gets a definition, optionally at a specific revision.
     * @returns BuildDefinition successful operation
     * @throws ApiError
     */
    public definitionsGet({
        organization,
        project,
        definitionId,
        revision,
        minMetricsTime,
        propertyFilters,
        includeLatestBuilds,
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
         * The revision number to retrieve. If this is not specified, the latest version will be returned.
         */
        revision?: number,
        /**
         * If specified, indicates the date from which metrics should be included.
         */
        minMetricsTime?: string,
        /**
         * A comma-delimited list of properties to include in the results.
         */
        propertyFilters?: string,
        includeLatestBuilds?: boolean,
    }): CancelablePromise<BuildDefinition> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/build/definitions/{definitionId}',
            path: {
                'organization': organization,
                'project': project,
                'definitionId': definitionId,
            },
            query: {
                'revision': revision,
                'minMetricsTime': minMetricsTime,
                'propertyFilters': propertyFilters,
                'includeLatestBuilds': includeLatestBuilds,
            },
        });
    }
    /**
     * Restores a deleted definition
     * @returns BuildDefinition successful operation
     * @throws ApiError
     */
    public definitionsRestoreDefinition({
        organization,
        project,
        definitionId,
        deleted,
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
         * The identifier of the definition to restore.
         */
        definitionId: number,
        /**
         * When false, restores a deleted definition.
         */
        deleted: boolean,
    }): CancelablePromise<BuildDefinition> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/build/definitions/{definitionId}',
            path: {
                'organization': organization,
                'project': project,
                'definitionId': definitionId,
            },
            query: {
                'deleted': deleted,
            },
        });
    }
    /**
     * Updates an existing build definition.  In order for this operation to succeed, the value of the "Revision" property of the request body must match the existing build definition's. It is recommended that you obtain the existing build definition by using GET, modify the build definition as necessary, and then submit the modified definition with PUT.
     * @returns BuildDefinition successful operation
     * @throws ApiError
     */
    public definitionsUpdate({
        organization,
        body,
        project,
        definitionId,
        secretsSourceDefinitionId,
        secretsSourceDefinitionRevision,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The new version of the definition. Its "Revision" property must match the existing definition for the update to be accepted.
         */
        body: BuildDefinition,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * The ID of the definition.
         */
        definitionId: number,
        secretsSourceDefinitionId?: number,
        secretsSourceDefinitionRevision?: number,
    }): CancelablePromise<BuildDefinition> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/{organization}/{project}/_apis/build/definitions/{definitionId}',
            path: {
                'organization': organization,
                'project': project,
                'definitionId': definitionId,
            },
            query: {
                'secretsSourceDefinitionId': secretsSourceDefinitionId,
                'secretsSourceDefinitionRevision': secretsSourceDefinitionRevision,
            },
            body: body,
        });
    }
    /**
     * Gets all revisions of a definition.
     * @returns BuildDefinitionRevision successful operation
     * @throws ApiError
     */
    public definitionsGetDefinitionRevisions({
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
        /**
         * The ID of the definition.
         */
        definitionId: number,
    }): CancelablePromise<Array<BuildDefinitionRevision>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/build/definitions/{definitionId}/revisions',
            path: {
                'organization': organization,
                'project': project,
                'definitionId': definitionId,
            },
        });
    }
}
