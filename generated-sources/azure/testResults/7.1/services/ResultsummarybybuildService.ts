/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TestResultSummary } from '../models/TestResultSummary';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ResultsummarybybuildService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns TestResultSummary successful operation
     * @throws ApiError
     */
    public resultsummarybybuildQuery({
        organization,
        project,
        buildId,
        publishContext,
        includeFailureDetails,
        buildToCompareBranchName,
        buildToCompareBuildSystem,
        buildToCompareDefinitionId,
        buildToCompareId,
        buildToCompareNumber,
        buildToCompareRepositoryId,
        buildToCompareUri,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Project ID or project name
         */
        project: string,
        buildId: number,
        publishContext?: string,
        includeFailureDetails?: boolean,
        /**
         * Branch name.
         */
        buildToCompareBranchName?: string,
        /**
         * Build system.
         */
        buildToCompareBuildSystem?: string,
        /**
         * Build Definition ID.
         */
        buildToCompareDefinitionId?: number,
        /**
         * Build ID.
         */
        buildToCompareId?: number,
        /**
         * Build Number.
         */
        buildToCompareNumber?: string,
        /**
         * Repository ID.
         */
        buildToCompareRepositoryId?: string,
        /**
         * Build URI.
         */
        buildToCompareUri?: string,
    }): CancelablePromise<TestResultSummary> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/testresults/resultsummarybybuild',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'buildId': buildId,
                'publishContext': publishContext,
                'includeFailureDetails': includeFailureDetails,
                'buildToCompare.branchName': buildToCompareBranchName,
                'buildToCompare.buildSystem': buildToCompareBuildSystem,
                'buildToCompare.definitionId': buildToCompareDefinitionId,
                'buildToCompare.id': buildToCompareId,
                'buildToCompare.number': buildToCompareNumber,
                'buildToCompare.repositoryId': buildToCompareRepositoryId,
                'buildToCompare.uri': buildToCompareUri,
            },
        });
    }
}
