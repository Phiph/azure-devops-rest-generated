/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReleaseDefinition } from '../models/ReleaseDefinition';
import type { ReleaseDefinitionRevision } from '../models/ReleaseDefinitionRevision';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DefinitionsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create a release definition
     * @returns ReleaseDefinition successful operation
     * @throws ApiError
     */
    public definitionsCreate({
        organization,
        body,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * release definition object to create.
         */
        body: ReleaseDefinition,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<ReleaseDefinition> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/release/definitions',
            path: {
                'organization': organization,
                'project': project,
            },
            body: body,
        });
    }
    /**
     * Get a list of release definitions.
     * @returns ReleaseDefinition successful operation
     * @throws ApiError
     */
    public definitionsList({
        organization,
        project,
        searchText,
        expand,
        artifactType,
        artifactSourceId,
        top,
        continuationToken,
        queryOrder,
        path,
        isExactNameMatch,
        tagFilter,
        propertyFilters,
        definitionIdFilter,
        isDeleted,
        searchTextContainsFolderName,
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
         * Get release definitions with names containing searchText.
         */
        searchText?: string,
        /**
         * The properties that should be expanded in the list of Release definitions.
         */
        expand?: 'none' | 'environments' | 'artifacts' | 'triggers' | 'variables' | 'tags' | 'lastRelease',
        /**
         * Release definitions with given artifactType will be returned. Values can be Build, Jenkins, GitHub, Nuget, Team Build (external), ExternalTFSBuild, Git, TFVC, ExternalTfsXamlBuild.
         */
        artifactType?: string,
        /**
         * Release definitions with given artifactSourceId will be returned. e.g. For build it would be {projectGuid}:{BuildDefinitionId}, for Jenkins it would be {JenkinsConnectionId}:{JenkinsDefinitionId}, for TfsOnPrem it would be {TfsOnPremConnectionId}:{ProjectName}:{TfsOnPremDefinitionId}. For third-party artifacts e.g. TeamCity, BitBucket you may refer 'uniqueSourceIdentifier' inside vss-extension.json at https://github.com/Microsoft/vsts-rm-extensions/blob/master/Extensions.
         */
        artifactSourceId?: string,
        /**
         * Number of release definitions to get.
         */
        top?: number,
        /**
         * Gets the release definitions after the continuation token provided.
         */
        continuationToken?: string,
        /**
         * Gets the results in the defined order. Default is 'IdAscending'.
         */
        queryOrder?: 'idAscending' | 'idDescending' | 'nameAscending' | 'nameDescending',
        /**
         * Gets the release definitions under the specified path.
         */
        path?: string,
        /**
         * 'true'to gets the release definitions with exact match as specified in searchText. Default is 'false'.
         */
        isExactNameMatch?: boolean,
        /**
         * A comma-delimited list of tags. Only release definitions with these tags will be returned.
         */
        tagFilter?: string,
        /**
         * A comma-delimited list of extended properties to be retrieved. If set, the returned Release Definitions will contain values for the specified property Ids (if they exist). If not set, properties will not be included. Note that this will not filter out any Release Definition from results irrespective of whether it has property set or not.
         */
        propertyFilters?: string,
        /**
         * A comma-delimited list of release definitions to retrieve.
         */
        definitionIdFilter?: string,
        /**
         * 'true' to get release definitions that has been deleted. Default is 'false'
         */
        isDeleted?: boolean,
        /**
         * 'true' to get the release definitions under the folder with name as specified in searchText. Default is 'false'.
         */
        searchTextContainsFolderName?: boolean,
    }): CancelablePromise<Array<ReleaseDefinition>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/release/definitions',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'searchText': searchText,
                '$expand': expand,
                'artifactType': artifactType,
                'artifactSourceId': artifactSourceId,
                '$top': top,
                'continuationToken': continuationToken,
                'queryOrder': queryOrder,
                'path': path,
                'isExactNameMatch': isExactNameMatch,
                'tagFilter': tagFilter,
                'propertyFilters': propertyFilters,
                'definitionIdFilter': definitionIdFilter,
                'isDeleted': isDeleted,
                'searchTextContainsFolderName': searchTextContainsFolderName,
            },
        });
    }
    /**
     * Update a release definition.
     * @returns ReleaseDefinition successful operation
     * @throws ApiError
     */
    public definitionsUpdate({
        organization,
        body,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Release definition object to update.
         */
        body: ReleaseDefinition,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<ReleaseDefinition> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/{organization}/{project}/_apis/release/definitions',
            path: {
                'organization': organization,
                'project': project,
            },
            body: body,
        });
    }
    /**
     * Delete a release definition.
     * @returns any successful operation
     * @throws ApiError
     */
    public definitionsDelete({
        organization,
        project,
        definitionId,
        comment,
        forceDelete,
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
         * Id of the release definition.
         */
        definitionId: number,
        /**
         * Comment for deleting a release definition.
         */
        comment?: string,
        /**
         * 'true' to automatically cancel any in-progress release deployments and proceed with release definition deletion . Default is 'false'.
         */
        forceDelete?: boolean,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/{project}/_apis/release/definitions/{definitionId}',
            path: {
                'organization': organization,
                'project': project,
                'definitionId': definitionId,
            },
            query: {
                'comment': comment,
                'forceDelete': forceDelete,
            },
        });
    }
    /**
     * Get a release definition.
     * @returns ReleaseDefinition successful operation
     * @throws ApiError
     */
    public definitionsGet({
        organization,
        project,
        definitionId,
        propertyFilters,
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
         * Id of the release definition.
         */
        definitionId: number,
        /**
         * A comma-delimited list of extended properties to be retrieved. If set, the returned Release Definition will contain values for the specified property Ids (if they exist). If not set, properties will not be included.
         */
        propertyFilters?: string,
    }): CancelablePromise<ReleaseDefinition> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/release/definitions/{definitionId}',
            path: {
                'organization': organization,
                'project': project,
                'definitionId': definitionId,
            },
            query: {
                'propertyFilters': propertyFilters,
            },
        });
    }
    /**
     * Get revision history for a release definition
     * @returns ReleaseDefinitionRevision successful operation
     * @throws ApiError
     */
    public definitionsGetReleaseDefinitionHistory({
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
         * Id of the definition.
         */
        definitionId: number,
    }): CancelablePromise<Array<ReleaseDefinitionRevision>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/Release/definitions/{definitionId}/revisions',
            path: {
                'organization': organization,
                'project': project,
                'definitionId': definitionId,
            },
        });
    }
    /**
     * Get release definition for a given definitionId and revision
     * @returns string successful operation
     * @throws ApiError
     */
    public definitionsGetDefinitionRevision({
        organization,
        project,
        definitionId,
        revision,
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
         * Id of the definition.
         */
        definitionId: number,
        /**
         * Id of the revision.
         */
        revision: number,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/Release/definitions/{definitionId}/revisions/{revision}',
            path: {
                'organization': organization,
                'project': project,
                'definitionId': definitionId,
                'revision': revision,
            },
        });
    }
}
