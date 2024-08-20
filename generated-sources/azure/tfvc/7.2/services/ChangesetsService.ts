/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AssociatedWorkItem } from '../models/AssociatedWorkItem';
import type { TfvcChange } from '../models/TfvcChange';
import type { TfvcChangeset } from '../models/TfvcChangeset';
import type { TfvcChangesetRef } from '../models/TfvcChangesetRef';
import type { TfvcChangesetsRequestData } from '../models/TfvcChangesetsRequestData';
import type { TfvcMappingFilter } from '../models/TfvcMappingFilter';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ChangesetsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Retrieve Tfvc changes for a given changeset.
     * @returns TfvcChange successful operation
     * @throws ApiError
     */
    public changesetsGetChangesetChanges({
        organization,
        id,
        skip,
        top,
        continuationToken,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * ID of the changeset. Default: null
         */
        id: number,
        /**
         * Number of results to skip. Default: null
         */
        skip?: number,
        /**
         * The maximum number of results to return. Default: null
         */
        top?: number,
        /**
         * Return the next page of results. Default: null
         */
        continuationToken?: string,
    }): CancelablePromise<Array<TfvcChange>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/tfvc/changesets/{id}/changes',
            path: {
                'organization': organization,
                'id': id,
            },
            query: {
                '$skip': skip,
                '$top': top,
                'continuationToken': continuationToken,
            },
        });
    }
    /**
     * Retrieves the work items associated with a particular changeset.
     * @returns AssociatedWorkItem successful operation
     * @throws ApiError
     */
    public changesetsGetChangesetWorkItems({
        organization,
        id,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * ID of the changeset.
         */
        id: number,
    }): CancelablePromise<Array<AssociatedWorkItem>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/tfvc/changesets/{id}/workItems',
            path: {
                'organization': organization,
                'id': id,
            },
        });
    }
    /**
     * Returns changesets for a given list of changeset Ids.
     * @returns TfvcChangesetRef successful operation
     * @throws ApiError
     */
    public changesetsGetBatchedChangesets({
        organization,
        body,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * List of changeset IDs.
         */
        body: TfvcChangesetsRequestData,
    }): CancelablePromise<Array<TfvcChangesetRef>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/_apis/tfvc/changesetsbatch',
            path: {
                'organization': organization,
            },
            body: body,
        });
    }
    /**
     * Create a new changeset.
     *
     * Accepts TfvcChangeset as JSON body
     * @returns TfvcChangesetRef successful operation
     * @throws ApiError
     */
    public changesetsCreate({
        organization,
        body,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: TfvcChangeset,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<TfvcChangesetRef> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/tfvc/changesets',
            path: {
                'organization': organization,
                'project': project,
            },
            body: body,
        });
    }
    /**
     * Retrieve Tfvc Changesets
     *
     * Note: This is a new version of the GetChangesets API that doesn't expose the unneeded queryParams
     * present in the 1.0 version of the API.
     * @returns TfvcChangesetRef successful operation
     * @throws ApiError
     */
    public changesetsGetChangesets({
        organization,
        project,
        maxCommentLength,
        skip,
        top,
        orderby,
        searchCriteriaAuthor,
        searchCriteriaFollowRenames,
        searchCriteriaFromDate,
        searchCriteriaFromId,
        searchCriteriaIncludeLinks,
        searchCriteriaItemPath,
        searchCriteriaMappings,
        searchCriteriaToDate,
        searchCriteriaToId,
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
         * Include details about associated work items in the response. Default: null
         */
        maxCommentLength?: number,
        /**
         * Number of results to skip. Default: null
         */
        skip?: number,
        /**
         * The maximum number of results to return. Default: null
         */
        top?: number,
        /**
         * Results are sorted by ID in descending order by default. Use id asc to sort by ID in ascending order.
         */
        orderby?: string,
        /**
         * Alias or display name of user who made the changes.
         */
        searchCriteriaAuthor?: string,
        /**
         * Whether or not to follow renames for the given item being queried.
         */
        searchCriteriaFollowRenames?: boolean,
        /**
         * If provided, only include changesets created after this date (string).
         */
        searchCriteriaFromDate?: string,
        /**
         * If provided, only include changesets after this changesetID.
         */
        searchCriteriaFromId?: number,
        /**
         * Whether to include the _links field on the shallow references.
         */
        searchCriteriaIncludeLinks?: boolean,
        /**
         * Path of item to search under.
         */
        searchCriteriaItemPath?: string,
        /**
         * Following criteria available (.itemPath, .version, .versionType, .versionOption, .author, .fromId, .toId, .fromDate, .toDate) Default: null
         */
        searchCriteriaMappings?: Array<TfvcMappingFilter>,
        /**
         * If provided, only include changesets created before this date (string).
         */
        searchCriteriaToDate?: string,
        /**
         * If provided, a version descriptor for the latest change list to include.
         */
        searchCriteriaToId?: number,
    }): CancelablePromise<Array<TfvcChangesetRef>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/tfvc/changesets',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'maxCommentLength': maxCommentLength,
                '$skip': skip,
                '$top': top,
                '$orderby': orderby,
                'searchCriteria.author': searchCriteriaAuthor,
                'searchCriteria.followRenames': searchCriteriaFollowRenames,
                'searchCriteria.fromDate': searchCriteriaFromDate,
                'searchCriteria.fromId': searchCriteriaFromId,
                'searchCriteria.includeLinks': searchCriteriaIncludeLinks,
                'searchCriteria.itemPath': searchCriteriaItemPath,
                'searchCriteria.mappings': searchCriteriaMappings,
                'searchCriteria.toDate': searchCriteriaToDate,
                'searchCriteria.toId': searchCriteriaToId,
            },
        });
    }
    /**
     * Retrieve a Tfvc Changeset
     * @returns TfvcChangeset successful operation
     * @throws ApiError
     */
    public changesetsGet({
        organization,
        id,
        project,
        maxChangeCount,
        includeDetails,
        includeWorkItems,
        maxCommentLength,
        includeSourceRename,
        skip,
        top,
        orderby,
        searchCriteriaAuthor,
        searchCriteriaFollowRenames,
        searchCriteriaFromDate,
        searchCriteriaFromId,
        searchCriteriaIncludeLinks,
        searchCriteriaItemPath,
        searchCriteriaMappings,
        searchCriteriaToDate,
        searchCriteriaToId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Changeset Id to retrieve.
         */
        id: number,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Number of changes to return (maximum 100 changes) Default: 0
         */
        maxChangeCount?: number,
        /**
         * Include policy details and check-in notes in the response. Default: false
         */
        includeDetails?: boolean,
        /**
         * Include workitems. Default: false
         */
        includeWorkItems?: boolean,
        /**
         * Include details about associated work items in the response. Default: null
         */
        maxCommentLength?: number,
        /**
         * Include renames.  Default: false
         */
        includeSourceRename?: boolean,
        /**
         * Number of results to skip. Default: null
         */
        skip?: number,
        /**
         * The maximum number of results to return. Default: null
         */
        top?: number,
        /**
         * Results are sorted by ID in descending order by default. Use id asc to sort by ID in ascending order.
         */
        orderby?: string,
        /**
         * Alias or display name of user who made the changes.
         */
        searchCriteriaAuthor?: string,
        /**
         * Whether or not to follow renames for the given item being queried.
         */
        searchCriteriaFollowRenames?: boolean,
        /**
         * If provided, only include changesets created after this date (string).
         */
        searchCriteriaFromDate?: string,
        /**
         * If provided, only include changesets after this changesetID.
         */
        searchCriteriaFromId?: number,
        /**
         * Whether to include the _links field on the shallow references.
         */
        searchCriteriaIncludeLinks?: boolean,
        /**
         * Path of item to search under.
         */
        searchCriteriaItemPath?: string,
        /**
         * Following criteria available (.itemPath, .version, .versionType, .versionOption, .author, .fromId, .toId, .fromDate, .toDate) Default: null
         */
        searchCriteriaMappings?: Array<TfvcMappingFilter>,
        /**
         * If provided, only include changesets created before this date (string).
         */
        searchCriteriaToDate?: string,
        /**
         * If provided, a version descriptor for the latest change list to include.
         */
        searchCriteriaToId?: number,
    }): CancelablePromise<TfvcChangeset> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/tfvc/changesets/{id}',
            path: {
                'organization': organization,
                'id': id,
                'project': project,
            },
            query: {
                'maxChangeCount': maxChangeCount,
                'includeDetails': includeDetails,
                'includeWorkItems': includeWorkItems,
                'maxCommentLength': maxCommentLength,
                'includeSourceRename': includeSourceRename,
                '$skip': skip,
                '$top': top,
                '$orderby': orderby,
                'searchCriteria.author': searchCriteriaAuthor,
                'searchCriteria.followRenames': searchCriteriaFollowRenames,
                'searchCriteria.fromDate': searchCriteriaFromDate,
                'searchCriteria.fromId': searchCriteriaFromId,
                'searchCriteria.includeLinks': searchCriteriaIncludeLinks,
                'searchCriteria.itemPath': searchCriteriaItemPath,
                'searchCriteria.mappings': searchCriteriaMappings,
                'searchCriteria.toDate': searchCriteriaToDate,
                'searchCriteria.toId': searchCriteriaToId,
            },
        });
    }
}
