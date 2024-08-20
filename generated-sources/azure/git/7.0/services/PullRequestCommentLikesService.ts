/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from '../models/IdentityRef';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PullRequestCommentLikesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Add a like on a comment.
     * @returns any successful operation
     * @throws ApiError
     */
    public pullRequestCommentLikesCreate({
        organization,
        repositoryId,
        pullRequestId,
        threadId,
        commentId,
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
         * The ID of the thread that contains the comment.
         */
        threadId: number,
        /**
         * The ID of the comment.
         */
        commentId: number,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/threads/{threadId}/comments/{commentId}/likes',
            path: {
                'organization': organization,
                'repositoryId': repositoryId,
                'pullRequestId': pullRequestId,
                'threadId': threadId,
                'commentId': commentId,
                'project': project,
            },
        });
    }
    /**
     * Delete a like on a comment.
     * @returns any successful operation
     * @throws ApiError
     */
    public pullRequestCommentLikesDelete({
        organization,
        repositoryId,
        pullRequestId,
        threadId,
        commentId,
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
         * The ID of the thread that contains the comment.
         */
        threadId: number,
        /**
         * The ID of the comment.
         */
        commentId: number,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/threads/{threadId}/comments/{commentId}/likes',
            path: {
                'organization': organization,
                'repositoryId': repositoryId,
                'pullRequestId': pullRequestId,
                'threadId': threadId,
                'commentId': commentId,
                'project': project,
            },
        });
    }
    /**
     * Get likes for a comment.
     * @returns IdentityRef successful operation
     * @throws ApiError
     */
    public pullRequestCommentLikesList({
        organization,
        repositoryId,
        pullRequestId,
        threadId,
        commentId,
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
         * The ID of the thread that contains the comment.
         */
        threadId: number,
        /**
         * The ID of the comment.
         */
        commentId: number,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<Array<IdentityRef>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/threads/{threadId}/comments/{commentId}/likes',
            path: {
                'organization': organization,
                'repositoryId': repositoryId,
                'pullRequestId': pullRequestId,
                'threadId': threadId,
                'commentId': commentId,
                'project': project,
            },
        });
    }
}
