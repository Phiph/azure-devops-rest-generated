/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from '../models/IdentityRef';
import type { IdentityRefWithVote } from '../models/IdentityRefWithVote';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PullRequestReviewersService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Add reviewers to a pull request.
     * @returns IdentityRefWithVote successful operation
     * @throws ApiError
     */
    public pullRequestReviewersCreatePullRequestReviewers({
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
         * Reviewers to add to the pull request.
         */
        body: Array<IdentityRef>,
        /**
         * The repository ID of the pull request's target branch.
         */
        repositoryId: string,
        /**
         * ID of the pull request.
         */
        pullRequestId: number,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<Array<IdentityRefWithVote>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/reviewers',
            path: {
                'organization': organization,
                'repositoryId': repositoryId,
                'pullRequestId': pullRequestId,
                'project': project,
            },
            body: body,
        });
    }
    /**
     * Add an unmaterialized identity to the reviewers of a pull request.
     * @returns IdentityRefWithVote successful operation
     * @throws ApiError
     */
    public pullRequestReviewersCreateUnmaterializedPullRequestReviewer({
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
         * Reviewer to add to the pull request.
         */
        body: IdentityRefWithVote,
        /**
         * The repository ID of the pull request's target branch.
         */
        repositoryId: string,
        /**
         * ID of the pull request.
         */
        pullRequestId: number,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<IdentityRefWithVote> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/reviewers',
            path: {
                'organization': organization,
                'repositoryId': repositoryId,
                'pullRequestId': pullRequestId,
                'project': project,
            },
            body: body,
        });
    }
    /**
     * Retrieve the reviewers for a pull request
     * @returns IdentityRefWithVote successful operation
     * @throws ApiError
     */
    public pullRequestReviewersList({
        organization,
        repositoryId,
        pullRequestId,
        project,
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
         * ID of the pull request.
         */
        pullRequestId: number,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<Array<IdentityRefWithVote>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/reviewers',
            path: {
                'organization': organization,
                'repositoryId': repositoryId,
                'pullRequestId': pullRequestId,
                'project': project,
            },
        });
    }
    /**
     * Reset the votes of multiple reviewers on a pull request.  NOTE: This endpoint only supports updating votes, but does not support updating required reviewers (use policy) or display names.
     * @returns any successful operation
     * @throws ApiError
     */
    public pullRequestReviewersUpdatePullRequestReviewers({
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
         * IDs of the reviewers whose votes will be reset to zero
         */
        body: Array<IdentityRefWithVote>,
        /**
         * The repository ID of the pull request's target branch.
         */
        repositoryId: string,
        /**
         * ID of the pull request
         */
        pullRequestId: number,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/reviewers',
            path: {
                'organization': organization,
                'repositoryId': repositoryId,
                'pullRequestId': pullRequestId,
                'project': project,
            },
            body: body,
        });
    }
    /**
     * Add a reviewer to a pull request or cast a vote.
     * @returns IdentityRefWithVote successful operation
     * @throws ApiError
     */
    public pullRequestReviewersCreatePullRequestReviewer({
        organization,
        body,
        repositoryId,
        pullRequestId,
        reviewerId,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Reviewer's vote.<br />If the reviewer's ID is included here, it must match the reviewerID parameter.<br />Reviewers can set their own vote with this method.  When adding other reviewers, vote must be set to zero.
         */
        body: IdentityRefWithVote,
        /**
         * The repository ID of the pull request's target branch.
         */
        repositoryId: string,
        /**
         * ID of the pull request.
         */
        pullRequestId: number,
        /**
         * ID of the reviewer.
         */
        reviewerId: string,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<IdentityRefWithVote> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/reviewers/{reviewerId}',
            path: {
                'organization': organization,
                'repositoryId': repositoryId,
                'pullRequestId': pullRequestId,
                'reviewerId': reviewerId,
                'project': project,
            },
            body: body,
        });
    }
    /**
     * Remove a reviewer from a pull request.
     * @returns any successful operation
     * @throws ApiError
     */
    public pullRequestReviewersDelete({
        organization,
        repositoryId,
        pullRequestId,
        reviewerId,
        project,
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
         * ID of the pull request.
         */
        pullRequestId: number,
        /**
         * ID of the reviewer to remove.
         */
        reviewerId: string,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/reviewers/{reviewerId}',
            path: {
                'organization': organization,
                'repositoryId': repositoryId,
                'pullRequestId': pullRequestId,
                'reviewerId': reviewerId,
                'project': project,
            },
        });
    }
    /**
     * Retrieve information about a particular reviewer on a pull request
     * @returns IdentityRefWithVote successful operation
     * @throws ApiError
     */
    public pullRequestReviewersGet({
        organization,
        repositoryId,
        pullRequestId,
        reviewerId,
        project,
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
         * ID of the pull request.
         */
        pullRequestId: number,
        /**
         * ID of the reviewer.
         */
        reviewerId: string,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<IdentityRefWithVote> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/reviewers/{reviewerId}',
            path: {
                'organization': organization,
                'repositoryId': repositoryId,
                'pullRequestId': pullRequestId,
                'reviewerId': reviewerId,
                'project': project,
            },
        });
    }
    /**
     * Edit a reviewer entry. These fields are patchable: isFlagged, hasDeclined
     * @returns IdentityRefWithVote successful operation
     * @throws ApiError
     */
    public pullRequestReviewersUpdatePullRequestReviewer({
        organization,
        body,
        repositoryId,
        pullRequestId,
        reviewerId,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Reviewer data.<br />If the reviewer's ID is included here, it must match the reviewerID parameter.
         */
        body: IdentityRefWithVote,
        /**
         * The repository ID of the pull request's target branch.
         */
        repositoryId: string,
        /**
         * ID of the pull request.
         */
        pullRequestId: number,
        /**
         * ID of the reviewer.
         */
        reviewerId: string,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<IdentityRefWithVote> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/reviewers/{reviewerId}',
            path: {
                'organization': organization,
                'repositoryId': repositoryId,
                'pullRequestId': pullRequestId,
                'reviewerId': reviewerId,
                'project': project,
            },
            body: body,
        });
    }
}
