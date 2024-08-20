/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Attachment } from '../models/Attachment';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PullRequestAttachmentsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get a list of files attached to a given pull request.
     * @returns Attachment successful operation
     * @throws ApiError
     */
    public pullRequestAttachmentsList({
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
         * The repository ID of the pull request’s target branch.
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
    }): CancelablePromise<Array<Attachment>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/attachments',
            path: {
                'organization': organization,
                'repositoryId': repositoryId,
                'pullRequestId': pullRequestId,
                'project': project,
            },
        });
    }
    /**
     * Attach a new file to a pull request.
     * @returns Attachment Created
     * @throws ApiError
     */
    public pullRequestAttachmentsCreate({
        organization,
        body,
        fileName,
        repositoryId,
        pullRequestId,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Stream to upload
         */
        body: string,
        /**
         * The name of the file.
         */
        fileName: string,
        /**
         * The repository ID of the pull request’s target branch.
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
    }): CancelablePromise<Attachment> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/attachments/{fileName}',
            path: {
                'organization': organization,
                'fileName': fileName,
                'repositoryId': repositoryId,
                'pullRequestId': pullRequestId,
                'project': project,
            },
            body: body,
        });
    }
    /**
     * Delete a pull request attachment.
     * @returns any successful operation
     * @throws ApiError
     */
    public pullRequestAttachmentsDelete({
        organization,
        fileName,
        repositoryId,
        pullRequestId,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The name of the attachment to delete.
         */
        fileName: string,
        /**
         * The repository ID of the pull request’s target branch.
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
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/attachments/{fileName}',
            path: {
                'organization': organization,
                'fileName': fileName,
                'repositoryId': repositoryId,
                'pullRequestId': pullRequestId,
                'project': project,
            },
        });
    }
    /**
     * Get the file content of a pull request attachment.
     * @returns string successful operation
     * @throws ApiError
     */
    public pullRequestAttachmentsGet({
        organization,
        fileName,
        repositoryId,
        pullRequestId,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The name of the attachment.
         */
        fileName: string,
        /**
         * The repository ID of the pull request’s target branch.
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
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/attachments/{fileName}',
            path: {
                'organization': organization,
                'fileName': fileName,
                'repositoryId': repositoryId,
                'pullRequestId': pullRequestId,
                'project': project,
            },
        });
    }
}
