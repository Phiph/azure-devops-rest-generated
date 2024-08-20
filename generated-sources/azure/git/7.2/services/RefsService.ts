/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitRef } from '../models/GitRef';
import type { GitRefUpdate } from '../models/GitRefUpdate';
import type { GitRefUpdateResult } from '../models/GitRefUpdateResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class RefsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Queries the provided repository for its refs and returns them.
     * @returns GitRef successful operation
     * @throws ApiError
     */
    public refsList({
        organization,
        repositoryId,
        project,
        filter,
        includeLinks,
        includeStatuses,
        includeMyBranches,
        latestStatusesOnly,
        peelTags,
        filterContains,
        top,
        continuationToken,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The name or ID of the repository.
         */
        repositoryId: string,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * [optional] A filter to apply to the refs (starts with).
         */
        filter?: string,
        /**
         * [optional] Specifies if referenceLinks should be included in the result. default is false.
         */
        includeLinks?: boolean,
        /**
         * [optional] Includes up to the first 1000 commit statuses for each ref. The default value is false.
         */
        includeStatuses?: boolean,
        /**
         * [optional] Includes only branches that the user owns, the branches the user favorites, and the default branch. The default value is false. Cannot be combined with the filter parameter.
         */
        includeMyBranches?: boolean,
        /**
         * [optional] True to include only the tip commit status for each ref. This option requires `includeStatuses` to be true. The default value is false.
         */
        latestStatusesOnly?: boolean,
        /**
         * [optional] Annotated tags will populate the PeeledObjectId property. default is false.
         */
        peelTags?: boolean,
        /**
         * [optional] A filter to apply to the refs (contains).
         */
        filterContains?: string,
        /**
         * [optional] Maximum number of refs to return. It cannot be bigger than 1000. If it is not provided but continuationToken is, top will default to 100.
         */
        top?: number,
        /**
         * The continuation token used for pagination.
         */
        continuationToken?: string,
    }): CancelablePromise<Array<GitRef>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/refs',
            path: {
                'organization': organization,
                'repositoryId': repositoryId,
                'project': project,
            },
            query: {
                'filter': filter,
                'includeLinks': includeLinks,
                'includeStatuses': includeStatuses,
                'includeMyBranches': includeMyBranches,
                'latestStatusesOnly': latestStatusesOnly,
                'peelTags': peelTags,
                'filterContains': filterContains,
                '$top': top,
                'continuationToken': continuationToken,
            },
        });
    }
    /**
     * Lock or Unlock a branch.
     * @returns GitRef successful operation
     * @throws ApiError
     */
    public refsUpdateRef({
        organization,
        body,
        repositoryId,
        filter,
        project,
        projectId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The ref update action (lock/unlock) to perform
         */
        body: GitRefUpdate,
        /**
         * The name or ID of the repository.
         */
        repositoryId: string,
        /**
         * The name of the branch to lock/unlock
         */
        filter: string,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * ID or name of the team project. Optional if specifying an ID for repository.
         */
        projectId?: string,
    }): CancelablePromise<GitRef> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/refs',
            path: {
                'organization': organization,
                'repositoryId': repositoryId,
                'project': project,
            },
            query: {
                'filter': filter,
                'projectId': projectId,
            },
            body: body,
        });
    }
    /**
     * Creating, updating, or deleting refs(branches).
     *
     * Updating a ref means making it point at a different commit than it used to. You must specify both the old and new commit to avoid race conditions.
     * @returns GitRefUpdateResult successful operation
     * @throws ApiError
     */
    public refsUpdateRefs({
        organization,
        body,
        repositoryId,
        project,
        projectId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * List of ref updates to attempt to perform
         */
        body: Array<GitRefUpdate>,
        /**
         * The name or ID of the repository.
         */
        repositoryId: string,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * ID or name of the team project. Optional if specifying an ID for repository.
         */
        projectId?: string,
    }): CancelablePromise<Array<GitRefUpdateResult>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/refs',
            path: {
                'organization': organization,
                'repositoryId': repositoryId,
                'project': project,
            },
            query: {
                'projectId': projectId,
            },
            body: body,
        });
    }
}
