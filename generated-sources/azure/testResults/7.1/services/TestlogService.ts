/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TestLog } from '../models/TestLog';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TestlogService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get list of test result attachments reference
     * @returns TestLog successful operation
     * @throws ApiError
     */
    public testlogGetTestResultLogs({
        organization,
        project,
        runId,
        resultId,
        type,
        directoryPath,
        fileNamePrefix,
        fetchMetaData,
        top,
        continuationToken,
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
         * Id of the test run that contains the result
         */
        runId: number,
        /**
         * Id of the test result
         */
        resultId: number,
        /**
         * type of attachments to get
         */
        type: 'generalAttachment',
        /**
         * directory path of attachments to get
         */
        directoryPath?: string,
        /**
         * file name prefix to filter the list of attachment
         */
        fileNamePrefix?: string,
        /**
         * Default is false, set if metadata is needed
         */
        fetchMetaData?: boolean,
        /**
         * Numbe of attachments reference to return
         */
        top?: number,
        /**
         * Header to pass the continuationToken
         */
        continuationToken?: string,
    }): CancelablePromise<Array<TestLog>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/testresults/runs/{runId}/results/{resultId}/testlog',
            path: {
                'organization': organization,
                'project': project,
                'runId': runId,
                'resultId': resultId,
            },
            headers: {
                'continuationToken': continuationToken,
            },
            query: {
                'type': type,
                'directoryPath': directoryPath,
                'fileNamePrefix': fileNamePrefix,
                'fetchMetaData': fetchMetaData,
                'top': top,
            },
        });
    }
    /**
     * Get list of test run attachments reference
     * @returns TestLog successful operation
     * @throws ApiError
     */
    public testlogGetTestRunLogs({
        organization,
        project,
        runId,
        type,
        directoryPath,
        fileNamePrefix,
        fetchMetaData,
        top,
        continuationToken,
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
         * Id of the test run
         */
        runId: number,
        /**
         * type of the attachments to get
         */
        type: 'generalAttachment',
        /**
         * directory path for which attachments are needed
         */
        directoryPath?: string,
        /**
         * file name prefix to filter the list of attachment
         */
        fileNamePrefix?: string,
        /**
         * Default is false, set if metadata is needed
         */
        fetchMetaData?: boolean,
        /**
         * Number of attachments reference to return
         */
        top?: number,
        /**
         * Header to pass the continuationToken
         */
        continuationToken?: string,
    }): CancelablePromise<Array<TestLog>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/testresults/runs/{runId}/testlog',
            path: {
                'organization': organization,
                'project': project,
                'runId': runId,
            },
            headers: {
                'continuationToken': continuationToken,
            },
            query: {
                'type': type,
                'directoryPath': directoryPath,
                'fileNamePrefix': fileNamePrefix,
                'fetchMetaData': fetchMetaData,
                'top': top,
            },
        });
    }
    /**
     * Get list of build attachments reference
     * @returns TestLog successful operation
     * @throws ApiError
     */
    public testlogGetTestLogsForBuild({
        organization,
        project,
        buildId,
        type,
        directoryPath,
        fileNamePrefix,
        fetchMetaData,
        top,
        continuationToken,
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
         * Id of the build to get
         */
        buildId: number,
        /**
         * type of the attachment to get
         */
        type: 'generalAttachment',
        /**
         * directory path for which attachments are needed
         */
        directoryPath?: string,
        /**
         * file name prefix to filter the list of attachment
         */
        fileNamePrefix?: string,
        /**
         * Default is false, set if metadata is needed
         */
        fetchMetaData?: boolean,
        /**
         * Number of test attachments reference to return
         */
        top?: number,
        /**
         * Header to pass the continuationToken
         */
        continuationToken?: string,
    }): CancelablePromise<Array<TestLog>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/testresults/testlog',
            path: {
                'organization': organization,
                'project': project,
            },
            headers: {
                'continuationToken': continuationToken,
            },
            query: {
                'buildId': buildId,
                'type': type,
                'directoryPath': directoryPath,
                'fileNamePrefix': fileNamePrefix,
                'fetchMetaData': fetchMetaData,
                'top': top,
            },
        });
    }
}
