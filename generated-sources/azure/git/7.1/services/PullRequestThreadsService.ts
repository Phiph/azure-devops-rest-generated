/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitPullRequestCommentThread } from '../models/GitPullRequestCommentThread';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PullRequestThreadsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create a thread in a pull request.
     * @returns GitPullRequestCommentThread successful operation
     * @throws ApiError
     */
    public pullRequestThreadsCreate({
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
         * The thread to create. Thread must contain at least one comment.
         */
        body: GitPullRequestCommentThread,
        /**
         * Repository ID of the pull request's target branch.
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
    }): CancelablePromise<GitPullRequestCommentThread> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/threads',
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
     * Retrieve all threads in a pull request.
     * @returns GitPullRequestCommentThread successful operation
     * @throws ApiError
     */
    public pullRequestThreadsList({
        organization,
        repositoryId,
        pullRequestId,
        project,
        iteration,
        baseIteration,
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
        /**
         * If specified, thread positions will be tracked using this iteration as the right side of the diff.
         */
        iteration?: number,
        /**
         * If specified, thread positions will be tracked using this iteration as the left side of the diff.
         */
        baseIteration?: number,
    }): CancelablePromise<Array<GitPullRequestCommentThread>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/threads',
            path: {
                'organization': organization,
                'repositoryId': repositoryId,
                'pullRequestId': pullRequestId,
                'project': project,
            },
            query: {
                '$iteration': iteration,
                '$baseIteration': baseIteration,
            },
        });
    }
    /**
     * Retrieve a thread in a pull request.
     * @returns GitPullRequestCommentThread successful operation
     * @throws ApiError
     */
    public pullRequestThreadsGet({
        organization,
        repositoryId,
        pullRequestId,
        threadId,
        project,
        iteration,
        baseIteration,
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
         * ID of the thread.
         */
        threadId: number,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * If specified, thread position will be tracked using this iteration as the right side of the diff.
         */
        iteration?: number,
        /**
         * If specified, thread position will be tracked using this iteration as the left side of the diff.
         */
        baseIteration?: number,
    }): CancelablePromise<GitPullRequestCommentThread> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/threads/{threadId}',
            path: {
                'organization': organization,
                'repositoryId': repositoryId,
                'pullRequestId': pullRequestId,
                'threadId': threadId,
                'project': project,
            },
            query: {
                '$iteration': iteration,
                '$baseIteration': baseIteration,
            },
        });
    }
    /**
     * Update a thread in a pull request.
     * @returns GitPullRequestCommentThread successful operation
     * @throws ApiError
     */
    public pullRequestThreadsUpdate({
        organization,
        body,
        repositoryId,
        pullRequestId,
        threadId,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The thread content that should be updated.
         */
        body: GitPullRequestCommentThread,
        /**
         * The repository ID of the pull request's target branch.
         */
        repositoryId: string,
        /**
         * ID of the pull request.
         */
        pullRequestId: number,
        /**
         * ID of the thread to update.
         */
        threadId: number,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<GitPullRequestCommentThread> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/threads/{threadId}',
            path: {
                'organization': organization,
                'repositoryId': repositoryId,
                'pullRequestId': pullRequestId,
                'threadId': threadId,
                'project': project,
            },
            body: body,
        });
    }
}
