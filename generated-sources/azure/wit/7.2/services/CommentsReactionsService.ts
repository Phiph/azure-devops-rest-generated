/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CommentReaction } from '../models/CommentReaction';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CommentsReactionsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets reactions of a comment.
     * @returns CommentReaction successful operation
     * @throws ApiError
     */
    public commentsReactionsList({
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
         * WorkItem ID
         */
        workItemId: number,
        /**
         * Comment ID
         */
        commentId: number,
    }): CancelablePromise<Array<CommentReaction>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/wit/workItems/{workItemId}/comments/{commentId}/reactions',
            path: {
                'organization': organization,
                'project': project,
                'workItemId': workItemId,
                'commentId': commentId,
            },
        });
    }
    /**
     * Adds a new reaction to a comment.
     * @returns CommentReaction successful operation
     * @throws ApiError
     */
    public commentsReactionsCreate({
        organization,
        project,
        workItemId,
        commentId,
        reactionType,
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
         * WorkItem ID
         */
        workItemId: number,
        /**
         * Comment ID
         */
        commentId: number,
        /**
         * Type of the reaction
         */
        reactionType: 'like' | 'dislike' | 'heart' | 'hooray' | 'smile' | 'confused',
    }): CancelablePromise<CommentReaction> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/{organization}/{project}/_apis/wit/workItems/{workItemId}/comments/{commentId}/reactions/{reactionType}',
            path: {
                'organization': organization,
                'project': project,
                'workItemId': workItemId,
                'commentId': commentId,
                'reactionType': reactionType,
            },
        });
    }
    /**
     * Deletes an existing reaction on a comment.
     * @returns CommentReaction successful operation
     * @throws ApiError
     */
    public commentsReactionsDelete({
        organization,
        project,
        workItemId,
        commentId,
        reactionType,
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
         * WorkItem ID
         */
        workItemId: number,
        /**
         * Comment ID
         */
        commentId: number,
        /**
         * Type of the reaction
         */
        reactionType: 'like' | 'dislike' | 'heart' | 'hooray' | 'smile' | 'confused',
    }): CancelablePromise<CommentReaction> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/{project}/_apis/wit/workItems/{workItemId}/comments/{commentId}/reactions/{reactionType}',
            path: {
                'organization': organization,
                'project': project,
                'workItemId': workItemId,
                'commentId': commentId,
                'reactionType': reactionType,
            },
        });
    }
}
