/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CommentVersion } from '../models/CommentVersion';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CommentsVersionsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns CommentVersion successful operation
     * @throws ApiError
     */
    public commentsVersionsList({
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
        workItemId: number,
        commentId: number,
    }): CancelablePromise<Array<CommentVersion>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/wit/workItems/{workItemId}/comments/{commentId}/versions',
            path: {
                'organization': organization,
                'project': project,
                'workItemId': workItemId,
                'commentId': commentId,
            },
        });
    }
    /**
     * @returns CommentVersion successful operation
     * @throws ApiError
     */
    public commentsVersionsGet({
        organization,
        project,
        workItemId,
        commentId,
        version,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Project ID or project name
         */
        project: string,
        workItemId: number,
        commentId: number,
        version: number,
    }): CancelablePromise<CommentVersion> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/wit/workItems/{workItemId}/comments/{commentId}/versions/{version}',
            path: {
                'organization': organization,
                'project': project,
                'workItemId': workItemId,
                'commentId': commentId,
                'version': version,
            },
        });
    }
}
