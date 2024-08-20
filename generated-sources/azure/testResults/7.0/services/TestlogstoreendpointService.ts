/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TestLogStoreEndpointDetails } from '../models/TestLogStoreEndpointDetails';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TestlogstoreendpointService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get SAS Uri of a test results attachment
     * @returns TestLogStoreEndpointDetails successful operation
     * @throws ApiError
     */
    public testlogstoreendpointGetTestLogStoreEndpointDetailsForResultLog({
        organization,
        project,
        runId,
        resultId,
        type,
        filePath,
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
         * Id of the test run that contains result
         */
        runId: number,
        /**
         * Id of the test result whose files need to be downloaded
         */
        resultId: number,
        /**
         * type of the file
         */
        type: 'generalAttachment',
        /**
         * filePath for which sas uri is needed
         */
        filePath: string,
    }): CancelablePromise<TestLogStoreEndpointDetails> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/testresults/runs/{runId}/results/{resultId}/testlogstoreendpoint',
            path: {
                'organization': organization,
                'project': project,
                'runId': runId,
                'resultId': resultId,
            },
            query: {
                'type': type,
                'filePath': filePath,
            },
        });
    }
    /**
     * Create empty file for a result and Get Sas uri for the file
     * @returns TestLogStoreEndpointDetails successful operation
     * @throws ApiError
     */
    public testlogstoreendpointTestLogStoreEndpointDetailsForResult({
        organization,
        project,
        runId,
        resultId,
        subResultId,
        filePath,
        type,
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
         * Id of the test results that contains sub result
         */
        resultId: number,
        /**
         * Id of the test sub result whose file sas uri is needed
         */
        subResultId: number,
        /**
         * file path inside the sub result for which sas uri is needed
         */
        filePath: string,
        /**
         * Type of the file for download
         */
        type: 'generalAttachment',
    }): CancelablePromise<TestLogStoreEndpointDetails> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/testresults/runs/{runId}/results/{resultId}/testlogstoreendpoint',
            path: {
                'organization': organization,
                'project': project,
                'runId': runId,
                'resultId': resultId,
            },
            query: {
                'subResultId': subResultId,
                'filePath': filePath,
                'type': type,
            },
        });
    }
    /**
     * Get SAS Uri of a test run attachment
     * @returns TestLogStoreEndpointDetails successful operation
     * @throws ApiError
     */
    public testlogstoreendpointGetTestLogStoreEndpointDetailsForRunLog({
        organization,
        project,
        runId,
        type,
        filePath,
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
         * Id of the test run whose file has to be downloaded
         */
        runId: number,
        /**
         * type of the file
         */
        type: 'generalAttachment',
        /**
         * filePath for which sas uri is needed
         */
        filePath: string,
    }): CancelablePromise<TestLogStoreEndpointDetails> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/testresults/runs/{runId}/testlogstoreendpoint',
            path: {
                'organization': organization,
                'project': project,
                'runId': runId,
            },
            query: {
                'type': type,
                'filePath': filePath,
            },
        });
    }
    /**
     * Create empty file for a run and Get Sas uri for the file
     * @returns TestLogStoreEndpointDetails successful operation
     * @throws ApiError
     */
    public testlogstoreendpointTestLogStoreEndpointDetailsForRun({
        organization,
        project,
        runId,
        testLogStoreOperationType,
        filePath,
        type,
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
         * Id of the run to get endpoint details
         */
        runId: number,
        /**
         * Type of operation to perform using sas uri
         */
        testLogStoreOperationType: 'read',
        /**
         * file path to create an empty file
         */
        filePath?: string,
        /**
         * Default is GeneralAttachment, type of empty file to be created
         */
        type?: 'generalAttachment',
    }): CancelablePromise<TestLogStoreEndpointDetails> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/testresults/runs/{runId}/testlogstoreendpoint',
            path: {
                'organization': organization,
                'project': project,
                'runId': runId,
            },
            query: {
                'testLogStoreOperationType': testLogStoreOperationType,
                'filePath': filePath,
                'type': type,
            },
        });
    }
}
