/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Release } from '../models/Release';
import type { ReleaseEnvironment } from '../models/ReleaseEnvironment';
import type { ReleaseEnvironmentUpdateMetadata } from '../models/ReleaseEnvironmentUpdateMetadata';
import type { ReleaseStartMetadata } from '../models/ReleaseStartMetadata';
import type { ReleaseUpdateMetadata } from '../models/ReleaseUpdateMetadata';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ReleasesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get a list of releases
     * @returns Release successful operation
     * @throws ApiError
     */
    public releasesList({
        organization,
        project,
        definitionId,
        definitionEnvironmentId,
        searchText,
        createdBy,
        statusFilter,
        environmentStatusFilter,
        minCreatedTime,
        maxCreatedTime,
        queryOrder,
        top,
        continuationToken,
        expand,
        artifactTypeId,
        sourceId,
        artifactVersionId,
        sourceBranchFilter,
        isDeleted,
        tagFilter,
        propertyFilters,
        releaseIdFilter,
        path,
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
         * Releases from this release definition Id.
         */
        definitionId?: number,
        definitionEnvironmentId?: number,
        /**
         * Releases with names containing searchText.
         */
        searchText?: string,
        /**
         * Releases created by this user.
         */
        createdBy?: string,
        /**
         * Releases that have this status.
         */
        statusFilter?: 'undefined' | 'draft' | 'active' | 'abandoned',
        environmentStatusFilter?: number,
        /**
         * Releases that were created after this time.
         */
        minCreatedTime?: string,
        /**
         * Releases that were created before this time.
         */
        maxCreatedTime?: string,
        /**
         * Gets the results in the defined order of created date for releases. Default is descending.
         */
        queryOrder?: 'descending' | 'ascending',
        /**
         * Number of releases to get. Default is 50.
         */
        top?: number,
        /**
         * Gets the releases after the continuation token provided.
         */
        continuationToken?: number,
        /**
         * The property that should be expanded in the list of releases.
         */
        expand?: 'none' | 'environments' | 'artifacts' | 'approvals' | 'manualInterventions' | 'variables' | 'tags',
        /**
         * Releases with given artifactTypeId will be returned. Values can be Build, Jenkins, GitHub, Nuget, Team Build (external), ExternalTFSBuild, Git, TFVC, ExternalTfsXamlBuild.
         */
        artifactTypeId?: string,
        /**
         * Unique identifier of the artifact used. e.g. For build it would be {projectGuid}:{BuildDefinitionId}, for Jenkins it would be {JenkinsConnectionId}:{JenkinsDefinitionId}, for TfsOnPrem it would be {TfsOnPremConnectionId}:{ProjectName}:{TfsOnPremDefinitionId}. For third-party artifacts e.g. TeamCity, BitBucket you may refer 'uniqueSourceIdentifier' inside vss-extension.json https://github.com/Microsoft/vsts-rm-extensions/blob/master/Extensions.
         */
        sourceId?: string,
        /**
         * Releases with given artifactVersionId will be returned. E.g. in case of Build artifactType, it is buildId.
         */
        artifactVersionId?: string,
        /**
         * Releases with given sourceBranchFilter will be returned.
         */
        sourceBranchFilter?: string,
        /**
         * Gets the soft deleted releases, if true.
         */
        isDeleted?: boolean,
        /**
         * A comma-delimited list of tags. Only releases with these tags will be returned.
         */
        tagFilter?: string,
        /**
         * A comma-delimited list of extended properties to be retrieved. If set, the returned Releases will contain values for the specified property Ids (if they exist). If not set, properties will not be included. Note that this will not filter out any Release from results irrespective of whether it has property set or not.
         */
        propertyFilters?: string,
        /**
         * A comma-delimited list of releases Ids. Only releases with these Ids will be returned.
         */
        releaseIdFilter?: string,
        /**
         * Releases under this folder path will be returned
         */
        path?: string,
    }): CancelablePromise<Array<Release>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/release/releases',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'definitionId': definitionId,
                'definitionEnvironmentId': definitionEnvironmentId,
                'searchText': searchText,
                'createdBy': createdBy,
                'statusFilter': statusFilter,
                'environmentStatusFilter': environmentStatusFilter,
                'minCreatedTime': minCreatedTime,
                'maxCreatedTime': maxCreatedTime,
                'queryOrder': queryOrder,
                '$top': top,
                'continuationToken': continuationToken,
                '$expand': expand,
                'artifactTypeId': artifactTypeId,
                'sourceId': sourceId,
                'artifactVersionId': artifactVersionId,
                'sourceBranchFilter': sourceBranchFilter,
                'isDeleted': isDeleted,
                'tagFilter': tagFilter,
                'propertyFilters': propertyFilters,
                'releaseIdFilter': releaseIdFilter,
                'path': path,
            },
        });
    }
    /**
     * Create a release.
     * @returns Release successful operation
     * @throws ApiError
     */
    public releasesCreate({
        organization,
        body,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Metadata to create a release.
         */
        body: ReleaseStartMetadata,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<Release> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/release/releases',
            path: {
                'organization': organization,
                'project': project,
            },
            body: body,
        });
    }
    /**
     * Get release for a given revision number.
     * @returns string successful operation
     * @throws ApiError
     */
    public releasesGetReleaseRevision({
        organization,
        project,
        releaseId,
        definitionSnapshotRevision,
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
         * Id of the release.
         */
        releaseId: number,
        /**
         * Definition snapshot revision number.
         */
        definitionSnapshotRevision: number,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/release/releases/{releaseId}',
            path: {
                'organization': organization,
                'project': project,
                'releaseId': releaseId,
            },
            query: {
                'definitionSnapshotRevision': definitionSnapshotRevision,
            },
        });
    }
    /**
     * Update a complete release object.
     * @returns Release successful operation
     * @throws ApiError
     */
    public releasesUpdateRelease({
        organization,
        body,
        project,
        releaseId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Release object for update.
         */
        body: Release,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Id of the release to update.
         */
        releaseId: number,
    }): CancelablePromise<Release> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/{organization}/{project}/_apis/release/releases/{releaseId}',
            path: {
                'organization': organization,
                'project': project,
                'releaseId': releaseId,
            },
            body: body,
        });
    }
    /**
     * Update few properties of a release.
     * @returns Release successful operation
     * @throws ApiError
     */
    public releasesUpdateReleaseResource({
        organization,
        body,
        project,
        releaseId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Properties of release to update.
         */
        body: ReleaseUpdateMetadata,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Id of the release to update.
         */
        releaseId: number,
    }): CancelablePromise<Release> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/release/releases/{releaseId}',
            path: {
                'organization': organization,
                'project': project,
                'releaseId': releaseId,
            },
            body: body,
        });
    }
    /**
     * Get a release environment.
     * @returns ReleaseEnvironment successful operation
     * @throws ApiError
     */
    public releasesGetReleaseEnvironment({
        organization,
        project,
        releaseId,
        environmentId,
        expand,
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
         * Id of the release.
         */
        releaseId: number,
        /**
         * Id of the release environment.
         */
        environmentId: number,
        /**
         * A property that should be expanded in the environment.
         */
        expand?: 'none' | 'tasks',
    }): CancelablePromise<ReleaseEnvironment> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/Release/releases/{releaseId}/environments/{environmentId}',
            path: {
                'organization': organization,
                'project': project,
                'releaseId': releaseId,
                'environmentId': environmentId,
            },
            query: {
                '$expand': expand,
            },
        });
    }
    /**
     * Update the status of a release environment
     * @returns ReleaseEnvironment successful operation
     * @throws ApiError
     */
    public releasesUpdateReleaseEnvironment({
        organization,
        body,
        project,
        releaseId,
        environmentId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Environment update meta data.
         */
        body: ReleaseEnvironmentUpdateMetadata,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Id of the release.
         */
        releaseId: number,
        /**
         * Id of release environment.
         */
        environmentId: number,
    }): CancelablePromise<ReleaseEnvironment> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/Release/releases/{releaseId}/environments/{environmentId}',
            path: {
                'organization': organization,
                'project': project,
                'releaseId': releaseId,
                'environmentId': environmentId,
            },
            body: body,
        });
    }
    /**
     * Gets the task log of a release as a plain text file.
     * @returns string successful operation
     * @throws ApiError
     */
    public releasesGetTaskLog({
        organization,
        project,
        releaseId,
        environmentId,
        releaseDeployPhaseId,
        taskId,
        startLine,
        endLine,
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
         * Id of the release.
         */
        releaseId: number,
        /**
         * Id of release environment.
         */
        environmentId: number,
        /**
         * Release deploy phase Id.
         */
        releaseDeployPhaseId: number,
        /**
         * ReleaseTask Id for the log.
         */
        taskId: number,
        /**
         * Starting line number for logs
         */
        startLine?: number,
        /**
         * Ending line number for logs
         */
        endLine?: number,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/release/releases/{releaseId}/environments/{environmentId}/deployPhases/{releaseDeployPhaseId}/tasks/{taskId}/logs',
            path: {
                'organization': organization,
                'project': project,
                'releaseId': releaseId,
                'environmentId': environmentId,
                'releaseDeployPhaseId': releaseDeployPhaseId,
                'taskId': taskId,
            },
            query: {
                'startLine': startLine,
                'endLine': endLine,
            },
        });
    }
    /**
     * Get logs for a release Id.
     * @returns string successful operation
     * @throws ApiError
     */
    public releasesGetLogs({
        organization,
        project,
        releaseId,
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
         * Id of the release.
         */
        releaseId: number,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/release/releases/{releaseId}/logs',
            path: {
                'organization': organization,
                'project': project,
                'releaseId': releaseId,
            },
        });
    }
}
