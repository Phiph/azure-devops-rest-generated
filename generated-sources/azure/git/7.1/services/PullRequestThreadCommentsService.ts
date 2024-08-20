/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Comment } from '../models/Comment';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PullRequestThreadCommentsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create a comment on a specific thread in a pull request (up to 500 comments can be created per thread).
     * @returns Comment successful operation
     * @throws ApiError
     */
    public pullRequestThreadCommentsCreate({
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
         * The comment to create. Comments can be up to 150,000 characters.
         */
        body: Comment,
        /**
         * The repository ID of the pull request's target branch.
         */
        repositoryId: string,
        /**
         * ID of the pull request.
         */
        pullRequestId: number,
        /**
         * ID of the thread that the desired comment is in.
         */
        threadId: number,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<Comment> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/threads/{threadId}/comments',
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
    /**
     * Retrieve all comments associated with a specific thread in a pull request.
     * @returns Comment successful operation
     * @throws ApiError
     */
    public pullRequestThreadCommentsList({
        organization,
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
    }): CancelablePromise<Array<Comment>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/threads/{threadId}/comments',
            path: {
                'organization': organization,
                'repositoryId': repositoryId,
                'pullRequestId': pullRequestId,
                'threadId': threadId,
                'project': project,
            },
        });
    }
    /**
     * Delete a comment associated with a specific thread in a pull request.
     * @returns any successful operation
     * @throws ApiError
     */
    public pullRequestThreadCommentsDelete({
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
         * ID of the thread that the desired comment is in.
         */
        threadId: number,
        /**
         * ID of the comment.
         */
        commentId: number,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/threads/{threadId}/comments/{commentId}',
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
     * Retrieve a comment associated with a specific thread in a pull request.
     * @returns Comment successful operation
     * @throws ApiError
     */
    public pullRequestThreadCommentsGet({
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
         * ID of the thread that the desired comment is in.
         */
        threadId: number,
        /**
         * ID of the comment.
         */
        commentId: number,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<Comment> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/threads/{threadId}/comments/{commentId}',
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
     * Update a comment associated with a specific thread in a pull request.
     * @returns Comment successful operation
     * @throws ApiError
     */
    public pullRequestThreadCommentsUpdate({
        organization,
        body,
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
         * The comment content that should be updated. Comments can be up to 150,000 characters.
         */
        body: Comment,
        /**
         * The repository ID of the pull request's target branch.
         */
        repositoryId: string,
        /**
         * ID of the pull request.
         */
        pullRequestId: number,
        /**
         * ID of the thread that the desired comment is in.
         */
        threadId: number,
        /**
         * ID of the comment to update.
         */
        commentId: number,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<Comment> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/threads/{threadId}/comments/{commentId}',
            path: {
                'organization': organization,
                'repositoryId': repositoryId,
                'pullRequestId': pullRequestId,
                'threadId': threadId,
                'commentId': commentId,
                'project': project,
            },
            body: body,
        });
    }
}
