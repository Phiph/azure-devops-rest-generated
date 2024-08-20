/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TestResultMetaData } from '../models/TestResultMetaData';
import type { TestResultMetaDataUpdateInput } from '../models/TestResultMetaDataUpdateInput';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ResultMetaDataService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get list of test Result meta data details for corresponding testcasereferenceId
     * @returns TestResultMetaData successful operation
     * @throws ApiError
     */
    public resultMetaDataQuery({
        organization,
        body,
        project,
        detailsToInclude,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * TestCaseReference Ids of the test Result to be queried, comma separated list of valid ids (limit no. of ids 200).
         */
        body: Array<string>,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Details to include with test results metadata. Default is None. Other values are FlakyIdentifiers.
         */
        detailsToInclude?: 'none' | 'flakyIdentifiers',
    }): CancelablePromise<Array<TestResultMetaData>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/testresults/results/resultmetadata',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'detailsToInclude': detailsToInclude,
            },
            body: body,
        });
    }
    /**
     * Update properties of test result meta data
     * @returns TestResultMetaData successful operation
     * @throws ApiError
     */
    public resultMetaDataUpdate({
        organization,
        body,
        project,
        testCaseReferenceId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * TestResultMetaData update input TestResultMetaDataUpdateInput
         */
        body: TestResultMetaDataUpdateInput,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * TestCaseReference Id of Test Result to be updated.
         */
        testCaseReferenceId: number,
    }): CancelablePromise<TestResultMetaData> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/testresults/results/resultmetadata/{testCaseReferenceId}',
            path: {
                'organization': organization,
                'project': project,
                'testCaseReferenceId': testCaseReferenceId,
            },
            body: body,
        });
    }
}
