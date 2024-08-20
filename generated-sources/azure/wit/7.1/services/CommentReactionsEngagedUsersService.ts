/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from '../models/IdentityRef';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CommentReactionsEngagedUsersService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get users who reacted on the comment.
     * @returns IdentityRef successful operation
     * @throws ApiError
     */
    public commentReactionsEngagedUsersList({
        organization,
        project,
        workItemId,
        commentId,
        reactionType,
        top,
        skip,
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
         * WorkItem ID.
         */
        workItemId: number,
        /**
         * Comment ID.
         */
        commentId: number,
        /**
         * Type of the reaction.
         */
        reactionType: 'like' | 'dislike' | 'heart' | 'hooray' | 'smile' | 'confused',
        top?: number,
        skip?: number,
    }): CancelablePromise<Array<IdentityRef>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/wit/workItems/{workItemId}/comments/{commentId}/reactions/{reactionType}/users',
            path: {
                'organization': organization,
                'project': project,
                'workItemId': workItemId,
                'commentId': commentId,
                'reactionType': reactionType,
            },
            query: {
                '$top': top,
                '$skip': skip,
            },
        });
    }
}
