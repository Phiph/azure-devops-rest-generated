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
        body: TestAttachmentRequestModel,
        /**
         * Project ID or project name
         */
        project: string,
        runId: number,
    }): CancelablePromise<TestAttachmentReference> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/testresults/runs/{runId}/attachments',
            path: {
                'organization': organization,
                'project': project,
                'runId': runId,
            },
            body: body,
        });
    }
    /**
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
        runId: number,
    }): CancelablePromise<Array<TestAttachment>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/testresults/runs/{runId}/attachments',
            path: {
                'organization': organization,
                'project': project,
                'runId': runId,
            },
        });
    }
    /**
     * @returns any successful operation
     * @throws ApiError
     */
    public attachmentsDeleteTestRunAttachment({
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
        runId: number,
        attachmentId: number,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/{project}/_apis/testresults/runs/{runId}/attachments/{attachmentId}',
            path: {
                'organization': organization,
                'project': project,
                'runId': runId,
                'attachmentId': attachmentId,
            },
        });
    }
    /**
     * Returns a test run attachment
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
        runId: number,
        attachmentId: number,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/testresults/runs/{runId}/attachments/{attachmentId}',
            path: {
                'organization': organization,
                'project': project,
                'runId': runId,
                'attachmentId': attachmentId,
            },
        });
    }
    /**
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
        body: TestAttachmentRequestModel,
        /**
         * Project ID or project name
         */
        project: string,
        runId: number,
        testCaseResultId: number,
    }): CancelablePromise<TestAttachmentReference> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/testresults/runs/{runId}/results/{testCaseResultId}/attachments',
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
        runId: number,
        testCaseResultId: number,
    }): CancelablePromise<Array<TestAttachment>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/testresults/runs/{runId}/results/{testCaseResultId}/attachments',
            path: {
                'organization': organization,
                'project': project,
                'runId': runId,
                'testCaseResultId': testCaseResultId,
            },
        });
    }
    /**
     * @returns any successful operation
     * @throws ApiError
     */
    public attachmentsDeleteTestResultAttachment({
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
        runId: number,
        testCaseResultId: number,
        attachmentId: number,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/{project}/_apis/testresults/runs/{runId}/results/{testCaseResultId}/attachments/{attachmentId}',
            path: {
                'organization': organization,
                'project': project,
                'runId': runId,
                'testCaseResultId': testCaseResultId,
                'attachmentId': attachmentId,
            },
        });
    }
    /**
     * Returns a test result attachment
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
        runId: number,
        testCaseResultId: number,
        attachmentId: number,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/testresults/runs/{runId}/results/{testCaseResultId}/attachments/{attachmentId}',
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
