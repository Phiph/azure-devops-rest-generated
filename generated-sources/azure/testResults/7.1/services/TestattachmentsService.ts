/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TestAttachmentRequestModel } from '../models/TestAttachmentRequestModel';
import type { TestLogStoreAttachment } from '../models/TestLogStoreAttachment';
import type { TestLogStoreAttachmentReference } from '../models/TestLogStoreAttachmentReference';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TestattachmentsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates an attachment in the LogStore for the specified runId.
     * @returns TestLogStoreAttachmentReference successful operation
     * @throws ApiError
     */
    public testattachmentsCreateTestRunLogStoreAttachment({
        organization,
        body,
        project,
        runId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Contains attachment info like stream, filename, comment, attachmentType
         */
        body: TestAttachmentRequestModel,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Test RunId
         */
        runId: number,
    }): CancelablePromise<TestLogStoreAttachmentReference> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/testresults/runs/{runId}/testattachments',
            path: {
                'organization': organization,
                'project': project,
                'runId': runId,
            },
            body: body,
        });
    }
    /**
     * Deletes the attachment with the specified filename for the specified runId from the LogStore.
     * @returns any successful operation
     * @throws ApiError
     */
    public testattachmentsDelete({
        organization,
        project,
        runId,
        filename,
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
         * Test RunId
         */
        runId: number,
        /**
         * Attachment FileName
         */
        filename: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/{project}/_apis/testresults/runs/{runId}/testattachments',
            path: {
                'organization': organization,
                'project': project,
                'runId': runId,
            },
            query: {
                'filename': filename,
            },
        });
    }
    /**
     * Returns a list of attachments for the specified runId from the LogStore.
     * @returns TestLogStoreAttachment successful operation
     * @throws ApiError
     */
    public testattachmentsList({
        organization,
        project,
        runId,
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
         * Test RunId
         */
        runId: number,
    }): CancelablePromise<Array<TestLogStoreAttachment>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/testresults/runs/{runId}/testattachments',
            path: {
                'organization': organization,
                'project': project,
                'runId': runId,
            },
        });
    }
    /**
     * Creates an attachment in the LogStore for the specified buildId.
     * @returns any successful operation
     * @throws ApiError
     */
    public testattachmentsCreateBuildAttachmentInLogStore({
        organization,
        body,
        project,
        buildId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Contains attachment info like stream, filename, comment, attachmentType
         */
        body: TestAttachmentRequestModel,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * BuildId
         */
        buildId: number,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/testresults/uploadbuildattachments/{buildId}',
            path: {
                'organization': organization,
                'project': project,
                'buildId': buildId,
            },
            body: body,
        });
    }
}
