/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Build } from '../models/Build';
import type { BuildLog } from '../models/BuildLog';
import type { Change } from '../models/Change';
import type { ResourceRef } from '../models/ResourceRef';
import type { RetentionLease } from '../models/RetentionLease';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class BuildsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets a list of builds.
     * @returns Build successful operation
     * @throws ApiError
     */
    public buildsList({
        organization,
        project,
        definitions,
        queues,
        buildNumber,
        minTime,
        maxTime,
        requestedFor,
        reasonFilter,
        statusFilter,
        resultFilter,
        tagFilters,
        properties,
        top,
        continuationToken,
        maxBuildsPerDefinition,
        deletedFilter,
        queryOrder,
        branchName,
        buildIds,
        repositoryId,
        repositoryType,
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
         * A comma-delimited list of definition IDs. If specified, filters to builds for these definitions.
         */
        definitions?: string,
        /**
         * A comma-delimited list of queue IDs. If specified, filters to builds that ran against these queues.
         */
        queues?: string,
        /**
         * If specified, filters to builds that match this build number. Append * to do a prefix search.
         */
        buildNumber?: string,
        /**
         * If specified, filters to builds that finished/started/queued after this date based on the queryOrder specified.
         */
        minTime?: string,
        /**
         * If specified, filters to builds that finished/started/queued before this date based on the queryOrder specified.
         */
        maxTime?: string,
        /**
         * If specified, filters to builds requested for the specified user.
         */
        requestedFor?: string,
        /**
         * If specified, filters to builds that match this reason.
         */
        reasonFilter?: 'none' | 'manual' | 'individualCI' | 'batchedCI' | 'schedule' | 'scheduleForced' | 'userCreated' | 'validateShelveset' | 'checkInShelveset' | 'pullRequest' | 'buildCompletion' | 'resourceTrigger' | 'triggered' | 'all',
        /**
         * If specified, filters to builds that match this status.
         */
        statusFilter?: 'none' | 'inProgress' | 'completed' | 'cancelling' | 'postponed' | 'notStarted' | 'all',
        /**
         * If specified, filters to builds that match this result.
         */
        resultFilter?: 'none' | 'succeeded' | 'partiallySucceeded' | 'failed' | 'canceled',
        /**
         * A comma-delimited list of tags. If specified, filters to builds that have the specified tags.
         */
        tagFilters?: string,
        /**
         * A comma-delimited list of properties to retrieve.
         */
        properties?: string,
        /**
         * The maximum number of builds to return.
         */
        top?: number,
        /**
         * A continuation token, returned by a previous call to this method, that can be used to return the next set of builds.
         */
        continuationToken?: string,
        /**
         * The maximum number of builds to return per definition.
         */
        maxBuildsPerDefinition?: number,
        /**
         * Indicates whether to exclude, include, or only return deleted builds.
         */
        deletedFilter?: 'excludeDeleted' | 'includeDeleted' | 'onlyDeleted',
        /**
         * The order in which builds should be returned.
         */
        queryOrder?: 'finishTimeAscending' | 'finishTimeDescending' | 'queueTimeDescending' | 'queueTimeAscending' | 'startTimeDescending' | 'startTimeAscending',
        /**
         * If specified, filters to builds that built branches that built this branch.
         */
        branchName?: string,
        /**
         * A comma-delimited list that specifies the IDs of builds to retrieve.
         */
        buildIds?: string,
        /**
         * If specified, filters to builds that built from this repository.
         */
        repositoryId?: string,
        /**
         * If specified, filters to builds that built from repositories of this type.
         */
        repositoryType?: string,
    }): CancelablePromise<Array<Build>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/build/builds',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'definitions': definitions,
                'queues': queues,
                'buildNumber': buildNumber,
                'minTime': minTime,
                'maxTime': maxTime,
                'requestedFor': requestedFor,
                'reasonFilter': reasonFilter,
                'statusFilter': statusFilter,
                'resultFilter': resultFilter,
                'tagFilters': tagFilters,
                'properties': properties,
                '$top': top,
                'continuationToken': continuationToken,
                'maxBuildsPerDefinition': maxBuildsPerDefinition,
                'deletedFilter': deletedFilter,
                'queryOrder': queryOrder,
                'branchName': branchName,
                'buildIds': buildIds,
                'repositoryId': repositoryId,
                'repositoryType': repositoryType,
            },
        });
    }
    /**
     * Queues a build
     * @returns Build successful operation
     * @throws ApiError
     */
    public buildsQueue({
        organization,
        body,
        project,
        ignoreWarnings,
        checkInTicket,
        sourceBuildId,
        definitionId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: Build,
        /**
         * Project ID or project name
         */
        project: string,
        ignoreWarnings?: boolean,
        checkInTicket?: string,
        sourceBuildId?: number,
        /**
         * Optional definition id to queue a build without a body. Ignored if there's a valid body
         */
        definitionId?: number,
    }): CancelablePromise<Build> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/build/builds',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'ignoreWarnings': ignoreWarnings,
                'checkInTicket': checkInTicket,
                'sourceBuildId': sourceBuildId,
                'definitionId': definitionId,
            },
            body: body,
        });
    }
    /**
     * Updates multiple builds.
     * @returns Build successful operation
     * @throws ApiError
     */
    public buildsUpdateBuilds({
        organization,
        body,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The builds to update.
         */
        body: Array<Build>,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<Array<Build>> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/build/builds',
            path: {
                'organization': organization,
                'project': project,
            },
            body: body,
        });
    }
    /**
     * Deletes a build.
     * @returns any successful operation
     * @throws ApiError
     */
    public buildsDelete({
        organization,
        project,
        buildId,
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
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/{project}/_apis/build/builds/{buildId}',
            path: {
                'organization': organization,
                'project': project,
                'buildId': buildId,
            },
        });
    }
    /**
     * Gets a build
     * @returns Build successful operation
     * @throws ApiError
     */
    public buildsGet({
        organization,
        project,
        buildId,
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
        buildId: number,
        propertyFilters?: string,
    }): CancelablePromise<Build> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/build/builds/{buildId}',
            path: {
                'organization': organization,
                'project': project,
                'buildId': buildId,
            },
            query: {
                'propertyFilters': propertyFilters,
            },
        });
    }
    /**
     * Updates a build.
     * @returns Build successful operation
     * @throws ApiError
     */
    public buildsUpdateBuild({
        organization,
        body,
        project,
        buildId,
        retry,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The build.
         */
        body: Build,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * The ID of the build.
         */
        buildId: number,
        retry?: boolean,
    }): CancelablePromise<Build> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/build/builds/{buildId}',
            path: {
                'organization': organization,
                'project': project,
                'buildId': buildId,
            },
            query: {
                'retry': retry,
            },
            body: body,
        });
    }
    /**
     * Gets the changes associated with a build
     * @returns Change successful operation
     * @throws ApiError
     */
    public buildsGetBuildChanges({
        organization,
        project,
        buildId,
        continuationToken,
        top,
        includeSourceChange,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Project ID or project name
         */
        project: string,
        buildId: number,
        continuationToken?: string,
        /**
         * The maximum number of changes to return
         */
        top?: number,
        includeSourceChange?: boolean,
    }): CancelablePromise<Array<Change>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/build/builds/{buildId}/changes',
            path: {
                'organization': organization,
                'project': project,
                'buildId': buildId,
            },
            query: {
                'continuationToken': continuationToken,
                '$top': top,
                'includeSourceChange': includeSourceChange,
            },
        });
    }
    /**
     * Gets all retention leases that apply to a specific build.
     * @returns RetentionLease successful operation
     * @throws ApiError
     */
    public buildsGetRetentionLeasesForBuild({
        organization,
        project,
        buildId,
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
    }): CancelablePromise<Array<RetentionLease>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/build/builds/{buildId}/leases',
            path: {
                'organization': organization,
                'project': project,
                'buildId': buildId,
            },
        });
    }
    /**
     * Gets the logs for a build.
     * @returns BuildLog successful operation
     * @throws ApiError
     */
    public buildsGetBuildLogs({
        organization,
        project,
        buildId,
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
    }): CancelablePromise<Array<BuildLog>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/build/builds/{buildId}/logs',
            path: {
                'organization': organization,
                'project': project,
                'buildId': buildId,
            },
        });
    }
    /**
     * Gets an individual log file for a build.
     * @returns string successful operation
     * @throws ApiError
     */
    public buildsGetBuildLog({
        organization,
        project,
        buildId,
        logId,
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
         * The ID of the build.
         */
        buildId: number,
        /**
         * The ID of the log file.
         */
        logId: number,
        /**
         * The start line.
         */
        startLine?: number,
        /**
         * The end line.
         */
        endLine?: number,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/build/builds/{buildId}/logs/{logId}',
            path: {
                'organization': organization,
                'project': project,
                'buildId': buildId,
                'logId': logId,
            },
            query: {
                'startLine': startLine,
                'endLine': endLine,
            },
        });
    }
    /**
     * Gets the work items associated with a build. Only work items in the same project are returned.
     * @returns ResourceRef successful operation
     * @throws ApiError
     */
    public buildsGetBuildWorkItemsRefs({
        organization,
        project,
        buildId,
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
        /**
         * The ID of the build.
         */
        buildId: number,
        /**
         * The maximum number of work items to return.
         */
        top?: number,
    }): CancelablePromise<Array<ResourceRef>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/build/builds/{buildId}/workitems',
            path: {
                'organization': organization,
                'project': project,
                'buildId': buildId,
            },
            query: {
                '$top': top,
            },
        });
    }
    /**
     * Gets the work items associated with a build, filtered to specific commits.
     * @returns ResourceRef successful operation
     * @throws ApiError
     */
    public buildsGetBuildWorkItemsRefsFromCommits({
        organization,
        body,
        project,
        buildId,
        top,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * A comma-delimited list of commit IDs.
         */
        body: Array<string>,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * The ID of the build.
         */
        buildId: number,
        /**
         * The maximum number of work items to return, or the number of commits to consider if no commit IDs are specified.
         */
        top?: number,
    }): CancelablePromise<Array<ResourceRef>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/build/builds/{buildId}/workitems',
            path: {
                'organization': organization,
                'project': project,
                'buildId': buildId,
            },
            query: {
                '$top': top,
            },
            body: body,
        });
    }
    /**
     * Gets the changes made to the repository between two given builds.
     * @returns Change successful operation
     * @throws ApiError
     */
    public buildsGetChangesBetweenBuilds({
        organization,
        project,
        fromBuildId,
        toBuildId,
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
        /**
         * The ID of the first build.
         */
        fromBuildId?: number,
        /**
         * The ID of the last build.
         */
        toBuildId?: number,
        /**
         * The maximum number of changes to return.
         */
        top?: number,
    }): CancelablePromise<Array<Change>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/build/changes',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'fromBuildId': fromBuildId,
                'toBuildId': toBuildId,
                '$top': top,
            },
        });
    }
    /**
     * Gets all the work items between two builds.
     * @returns ResourceRef successful operation
     * @throws ApiError
     */
    public buildsGetWorkItemsBetweenBuilds({
        organization,
        project,
        fromBuildId,
        toBuildId,
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
        /**
         * The ID of the first build.
         */
        fromBuildId: number,
        /**
         * The ID of the last build.
         */
        toBuildId: number,
        /**
         * The maximum number of work items to return.
         */
        top?: number,
    }): CancelablePromise<Array<ResourceRef>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/build/workitems',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'fromBuildId': fromBuildId,
                'toBuildId': toBuildId,
                '$top': top,
            },
        });
    }
}
