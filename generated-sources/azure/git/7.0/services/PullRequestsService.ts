/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitPullRequest } from '../models/GitPullRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PullRequestsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Retrieve all pull requests matching a specified criteria.
     *
     * Please note that description field will be truncated up to 400 symbols in the result.
     * @returns GitPullRequest successful operation
     * @throws ApiError
     */
    public pullRequestsGetPullRequestsByProject({
        organization,
        project,
        searchCriteriaCreatorId,
        searchCriteriaIncludeLinks,
        searchCriteriaRepositoryId,
        searchCriteriaReviewerId,
        searchCriteriaSourceRefName,
        searchCriteriaSourceRepositoryId,
        searchCriteriaStatus,
        searchCriteriaTargetRefName,
        maxCommentLength,
        skip,
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
         * If set, search for pull requests that were created by this identity.
         */
        searchCriteriaCreatorId?: string,
        /**
         * Whether to include the _links field on the shallow references
         */
        searchCriteriaIncludeLinks?: boolean,
        /**
         * If set, search for pull requests whose target branch is in this repository.
         */
        searchCriteriaRepositoryId?: string,
        /**
         * If set, search for pull requests that have this identity as a reviewer.
         */
        searchCriteriaReviewerId?: string,
        /**
         * If set, search for pull requests from this branch.
         */
        searchCriteriaSourceRefName?: string,
        /**
         * If set, search for pull requests whose source branch is in this repository.
         */
        searchCriteriaSourceRepositoryId?: string,
        /**
         * If set, search for pull requests that are in this state. Defaults to Active if unset.
         */
        searchCriteriaStatus?: 'notSet' | 'active' | 'abandoned' | 'completed' | 'all',
        /**
         * If set, search for pull requests into this branch.
         */
        searchCriteriaTargetRefName?: string,
        /**
         * Not used.
         */
        maxCommentLength?: number,
        /**
         * The number of pull requests to ignore. For example, to retrieve results 101-150, set top to 50 and skip to 100.
         */
        skip?: number,
        /**
         * The number of pull requests to retrieve.
         */
        top?: number,
    }): CancelablePromise<Array<GitPullRequest>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/git/pullrequests',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'searchCriteria.creatorId': searchCriteriaCreatorId,
                'searchCriteria.includeLinks': searchCriteriaIncludeLinks,
                'searchCriteria.repositoryId': searchCriteriaRepositoryId,
                'searchCriteria.reviewerId': searchCriteriaReviewerId,
                'searchCriteria.sourceRefName': searchCriteriaSourceRefName,
                'searchCriteria.sourceRepositoryId': searchCriteriaSourceRepositoryId,
                'searchCriteria.status': searchCriteriaStatus,
                'searchCriteria.targetRefName': searchCriteriaTargetRefName,
                'maxCommentLength': maxCommentLength,
                '$skip': skip,
                '$top': top,
            },
        });
    }
    /**
     * Retrieve a pull request.
     * @returns GitPullRequest successful operation
     * @throws ApiError
     */
    public pullRequestsGetPullRequestById({
        organization,
        pullRequestId,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The ID of the pull request to retrieve.
         */
        pullRequestId: number,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<GitPullRequest> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/git/pullrequests/{pullRequestId}',
            path: {
                'organization': organization,
                'pullRequestId': pullRequestId,
                'project': project,
            },
        });
    }
    /**
     * Create a pull request.
     * @returns GitPullRequest successful operation
     * @throws ApiError
     */
    public pullRequestsCreate({
        organization,
        body,
        repositoryId,
        project,
        supportsIterations,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The pull request to create.
         */
        body: GitPullRequest,
        /**
         * The repository ID of the pull request's target branch.
         */
        repositoryId: string,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * If true, subsequent pushes to the pull request will be individually reviewable. Set this to false for large pull requests for performance reasons if this functionality is not needed.
         */
        supportsIterations?: boolean,
    }): CancelablePromise<GitPullRequest> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/pullrequests',
            path: {
                'organization': organization,
                'repositoryId': repositoryId,
                'project': project,
            },
            query: {
                'supportsIterations': supportsIterations,
            },
            body: body,
        });
    }
    /**
     * Retrieve all pull requests matching a specified criteria.
     *
     * Please note that description field will be truncated up to 400 symbols in the result.
     * @returns GitPullRequest successful operation
     * @throws ApiError
     */
    public pullRequestsGetPullRequests({
        organization,
        repositoryId,
        project,
        searchCriteriaCreatorId,
        searchCriteriaIncludeLinks,
        searchCriteriaRepositoryId,
        searchCriteriaReviewerId,
        searchCriteriaSourceRefName,
        searchCriteriaSourceRepositoryId,
        searchCriteriaStatus,
        searchCriteriaTargetRefName,
        maxCommentLength,
        skip,
        top,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The repository ID of the pull request's target branch.
         */
        repositoryId: string,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * If set, search for pull requests that were created by this identity.
         */
        searchCriteriaCreatorId?: string,
        /**
         * Whether to include the _links field on the shallow references
         */
        searchCriteriaIncludeLinks?: boolean,
        /**
         * If set, search for pull requests whose target branch is in this repository.
         */
        searchCriteriaRepositoryId?: string,
        /**
         * If set, search for pull requests that have this identity as a reviewer.
         */
        searchCriteriaReviewerId?: string,
        /**
         * If set, search for pull requests from this branch.
         */
        searchCriteriaSourceRefName?: string,
        /**
         * If set, search for pull requests whose source branch is in this repository.
         */
        searchCriteriaSourceRepositoryId?: string,
        /**
         * If set, search for pull requests that are in this state. Defaults to Active if unset.
         */
        searchCriteriaStatus?: 'notSet' | 'active' | 'abandoned' | 'completed' | 'all',
        /**
         * If set, search for pull requests into this branch.
         */
        searchCriteriaTargetRefName?: string,
        /**
         * Not used.
         */
        maxCommentLength?: number,
        /**
         * The number of pull requests to ignore. For example, to retrieve results 101-150, set top to 50 and skip to 100.
         */
        skip?: number,
        /**
         * The number of pull requests to retrieve.
         */
        top?: number,
    }): CancelablePromise<Array<GitPullRequest>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/pullrequests',
            path: {
                'organization': organization,
                'repositoryId': repositoryId,
                'project': project,
            },
            query: {
                'searchCriteria.creatorId': searchCriteriaCreatorId,
                'searchCriteria.includeLinks': searchCriteriaIncludeLinks,
                'searchCriteria.repositoryId': searchCriteriaRepositoryId,
                'searchCriteria.reviewerId': searchCriteriaReviewerId,
                'searchCriteria.sourceRefName': searchCriteriaSourceRefName,
                'searchCriteria.sourceRepositoryId': searchCriteriaSourceRepositoryId,
                'searchCriteria.status': searchCriteriaStatus,
                'searchCriteria.targetRefName': searchCriteriaTargetRefName,
                'maxCommentLength': maxCommentLength,
                '$skip': skip,
                '$top': top,
            },
        });
    }
    /**
     * Retrieve a pull request.
     * @returns GitPullRequest successful operation
     * @throws ApiError
     */
    public pullRequestsGetPullRequest({
        organization,
        repositoryId,
        pullRequestId,
        project,
        maxCommentLength,
        skip,
        top,
        includeCommits,
        includeWorkItemRefs,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The repository ID of the pull request's target branch.
         */
        repositoryId: string,
        /**
         * The ID of the pull request to retrieve.
         */
        pullRequestId: number,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Not used.
         */
        maxCommentLength?: number,
        /**
         * Not used.
         */
        skip?: number,
        /**
         * Not used.
         */
        top?: number,
        /**
         * If true, the pull request will be returned with the associated commits.
         */
        includeCommits?: boolean,
        /**
         * If true, the pull request will be returned with the associated work item references.
         */
        includeWorkItemRefs?: boolean,
    }): CancelablePromise<GitPullRequest> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/pullrequests/{pullRequestId}',
            path: {
                'organization': organization,
                'repositoryId': repositoryId,
                'pullRequestId': pullRequestId,
                'project': project,
            },
            query: {
                'maxCommentLength': maxCommentLength,
                '$skip': skip,
                '$top': top,
                'includeCommits': includeCommits,
                'includeWorkItemRefs': includeWorkItemRefs,
            },
        });
    }
    /**
     * Update a pull request
     *
     * These are the properties that can be updated with the API:
     * - Status
     * - Title
     * - Description (up to 4000 characters)
     * - CompletionOptions
     * - MergeOptions
     * - AutoCompleteSetBy.Id
     * - TargetRefName (when the PR retargeting feature is enabled)
     * Attempting to update other properties outside of this list will either cause the server to throw an `InvalidArgumentValueException`,
     * or to silently ignore the update.
     * @returns GitPullRequest successful operation
     * @throws ApiError
     */
    public pullRequestsUpdate({
        organization,
        body,
        repositoryId,
        pullRequestId,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The pull request content that should be updated.
         */
        body: GitPullRequest,
        /**
         * The repository ID of the pull request's target branch.
         */
        repositoryId: string,
        /**
         * ID of the pull request to update.
         */
        pullRequestId: number,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<GitPullRequest> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/pullrequests/{pullRequestId}',
            path: {
                'organization': organization,
                'repositoryId': repositoryId,
                'pullRequestId': pullRequestId,
                'project': project,
            },
            body: body,
        });
    }
}
