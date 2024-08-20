/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TestAttachment } from '../models/TestAttachment';
import type { TestAttachmentReference } from '../models/TestAttachmentReference';
import type { TestAttachmentRequestModel } from '../models/TestAttachmentRequestModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AttachmentsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Attach a file to a test run.
     * @returns TestAttachmentReference successful operation
     * @throws ApiError
     */
    public attachmentsCreateTestRunAttachment({
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
         * Attachment details TestAttachmentRequestModel
         */
        body: TestAttachmentRequestModel,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * ID of the test run against which attachment has to be uploaded.
         */
        runId: number,
    }): CancelablePromise<TestAttachmentReference> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/test/Runs/{runId}/attachments',
            path: {
                'organization': organization,
                'project': project,
                'runId': runId,
            },
            body: body,
        });
    }
    /**
     * Get list of test run attachments reference.
     * @returns TestAttachment successful operation
     * @throws ApiError
     */
    public attachmentsGetTestRunAttachments({
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
         * ID of the test run.
         */
        runId: number,
    }): CancelablePromise<Array<TestAttachment>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/test/Runs/{runId}/attachments',
            path: {
                'organization': organization,
                'project': project,
                'runId': runId,
            },
        });
    }
    /**
     * Download a test run attachment by its ID.
     * @returns string successful operation
     * @throws ApiError
     */
    public attachmentsGetTestRunAttachmentZip({
        organization,
        project,
        runId,
        attachmentId,
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
         * ID of the test run whose attachment has to be downloaded.
         */
        runId: number,
        /**
         * ID of the test run attachment to be downloaded.
         */
        attachmentId: number,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/test/Runs/{runId}/attachments/{attachmentId}',
            path: {
                'organization': organization,
                'project': project,
                'runId': runId,
                'attachmentId': attachmentId,
            },
        });
    }
    /**
     * Attach a file to a test result.
     * @returns TestAttachmentReference successful operation
     * @throws ApiError
     */
    public attachmentsCreateTestResultAttachment({
        organization,
        body,
        project,
        runId,
        testCaseResultId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Attachment details TestAttachmentRequestModel
         */
        body: TestAttachmentRequestModel,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * ID of the test run that contains the result.
         */
        runId: number,
        /**
         * ID of the test result against which attachment has to be uploaded.
         */
        testCaseResultId: number,
    }): CancelablePromise<TestAttachmentReference> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/test/Runs/{runId}/Results/{testCaseResultId}/attachments',
            path: {
                'organization': organization,
                'project': project,
                'runId': runId,
                'testCaseResultId': testCaseResultId,
            },
            body: body,
        });
    }
    /**
     * Get list of test result attachments reference.
     * @returns TestAttachment successful operation
     * @throws ApiError
     */
    public attachmentsGetTestResultAttachments({
        organization,
        project,
        runId,
        testCaseResultId,
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
         * ID of the test run that contains the result.
         */
        runId: number,
        /**
         * ID of the test result.
         */
        testCaseResultId: number,
    }): CancelablePromise<Array<TestAttachment>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/test/Runs/{runId}/Results/{testCaseResultId}/attachments',
            path: {
                'organization': organization,
                'project': project,
                'runId': runId,
                'testCaseResultId': testCaseResultId,
            },
        });
    }
    /**
     * Download a test result attachment by its ID.
     * @returns string successful operation
     * @throws ApiError
     */
    public attachmentsGetTestResultAttachmentZip({
        organization,
        project,
        runId,
        testCaseResultId,
        attachmentId,
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
         * ID of the test run that contains the testCaseResultId.
         */
        runId: number,
        /**
         * ID of the test result whose attachment has to be downloaded.
         */
        testCaseResultId: number,
        /**
         * ID of the test result attachment to be downloaded.
         */
        attachmentId: number,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/test/Runs/{runId}/Results/{testCaseResultId}/attachments/{attachmentId}',
            path: {
                'organization': organization,
                'project': project,
                'runId': runId,
                'testCaseResultId': testCaseResultId,
                'attachmentId': attachmentId,
            },
        });
    }
}
