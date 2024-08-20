/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Comment } from '../models/Comment';
import type { CommentCreate } from '../models/CommentCreate';
import type { CommentList } from '../models/CommentList';
import type { CommentUpdate } from '../models/CommentUpdate';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CommentsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Add a comment on a work item.
     * @returns Comment successful operation
     * @throws ApiError
     */
    public commentsAdd({
        organization,
        body,
        project,
        workItemId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Comment create request.
         */
        body: CommentCreate,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Id of a work item.
         */
        workItemId: number,
    }): CancelablePromise<Comment> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/wit/workItems/{workItemId}/comments',
            path: {
                'organization': organization,
                'project': project,
                'workItemId': workItemId,
            },
            body: body,
        });
    }
    /**
     * Returns a list of work item comments by ids.
     * @returns CommentList successful operation
     * @throws ApiError
     */
    public commentsGetCommentsBatch({
        organization,
        project,
        workItemId,
        ids,
        includeDeleted,
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
         * Id of a work item to get comments for.
         */
        workItemId: number,
        /**
         * Comma-separated list of comment ids to return.
         */
        ids: string,
        /**
         * Specify if the deleted comments should be retrieved.
         */
        includeDeleted?: boolean,
        /**
         * Specifies the additional data retrieval options for work item comments.
         */
        expand?: 'none' | 'reactions' | 'renderedText' | 'renderedTextOnly' | 'all',
    }): CancelablePromise<CommentList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/wit/workItems/{workItemId}/comments',
            path: {
                'organization': organization,
                'project': project,
                'workItemId': workItemId,
            },
            query: {
                'ids': ids,
                'includeDeleted': includeDeleted,
                '$expand': expand,
            },
        });
    }
    /**
     * Delete a comment on a work item.
     * @returns any successful operation
     * @throws ApiError
     */
    public commentsDelete({
        organization,
        project,
        workItemId,
        commentId,
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
         * Id of a work item.
         */
        workItemId: number,
        commentId: number,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/{project}/_apis/wit/workItems/{workItemId}/comments/{commentId}',
            path: {
                'organization': organization,
                'project': project,
                'workItemId': workItemId,
                'commentId': commentId,
            },
        });
    }
    /**
     * Returns a work item comment.
     * @returns Comment successful operation
     * @throws ApiError
     */
    public commentsGetComment({
        organization,
        project,
        workItemId,
        commentId,
        includeDeleted,
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
         * Id of a work item to get the comment.
         */
        workItemId: number,
        /**
         * Id of the comment to return.
         */
        commentId: number,
        /**
         * Specify if the deleted comment should be retrieved.
         */
        includeDeleted?: boolean,
        /**
         * Specifies the additional data retrieval options for work item comments.
         */
        expand?: 'none' | 'reactions' | 'renderedText' | 'renderedTextOnly' | 'all',
    }): CancelablePromise<Comment> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/wit/workItems/{workItemId}/comments/{commentId}',
            path: {
                'organization': organization,
                'project': project,
                'workItemId': workItemId,
                'commentId': commentId,
            },
            query: {
                'includeDeleted': includeDeleted,
                '$expand': expand,
            },
        });
    }
    /**
     * Update a comment on a work item.
     * @returns Comment successful operation
     * @throws ApiError
     */
    public commentsUpdate({
        organization,
        body,
        project,
        workItemId,
        commentId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Comment update request.
         */
        body: CommentUpdate,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Id of a work item.
         */
        workItemId: number,
        commentId: number,
    }): CancelablePromise<Comment> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/wit/workItems/{workItemId}/comments/{commentId}',
            path: {
                'organization': organization,
                'project': project,
                'workItemId': workItemId,
                'commentId': commentId,
            },
            body: body,
        });
    }
}
