/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReleaseReference } from '../models/ReleaseReference';
import type { TestResultSummary } from '../models/TestResultSummary';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ResultsummarybyreleaseService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns TestResultSummary successful operation
     * @throws ApiError
     */
    public resultsummarybyreleaseQueryTestResultsReportForRelease({
        organization,
        project,
        releaseId,
        releaseEnvId,
        publishContext,
        includeFailureDetails,
        releaseToCompareAttempt,
        releaseToCompareCreationDate,
        releaseToCompareDefinitionId,
        releaseToCompareEnvironmentCreationDate,
        releaseToCompareEnvironmentDefinitionId,
        releaseToCompareEnvironmentDefinitionName,
        releaseToCompareEnvironmentId,
        releaseToCompareEnvironmentName,
        releaseToCompareId,
        releaseToCompareName,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Project ID or project name
         */
        project: string,
        releaseId: number,
        releaseEnvId: number,
        publishContext?: string,
        includeFailureDetails?: boolean,
        /**
         * Number of Release Attempt.
         */
        releaseToCompareAttempt?: number,
        /**
         * Release Creation Date(UTC).
         */
        releaseToCompareCreationDate?: string,
        /**
         * Release definition ID.
         */
        releaseToCompareDefinitionId?: number,
        /**
         * Environment creation Date(UTC).
         */
        releaseToCompareEnvironmentCreationDate?: string,
        /**
         * Release environment definition ID.
         */
        releaseToCompareEnvironmentDefinitionId?: number,
        /**
         * Release environment definition name.
         */
        releaseToCompareEnvironmentDefinitionName?: string,
        /**
         * Release environment ID.
         */
        releaseToCompareEnvironmentId?: number,
        /**
         * Release environment name.
         */
        releaseToCompareEnvironmentName?: string,
        /**
         * Release ID.
         */
        releaseToCompareId?: number,
        /**
         * Release name.
         */
        releaseToCompareName?: string,
    }): CancelablePromise<TestResultSummary> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/testresults/resultsummarybyrelease',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'releaseId': releaseId,
                'releaseEnvId': releaseEnvId,
                'publishContext': publishContext,
                'includeFailureDetails': includeFailureDetails,
                'releaseToCompare.attempt': releaseToCompareAttempt,
                'releaseToCompare.creationDate': releaseToCompareCreationDate,
                'releaseToCompare.definitionId': releaseToCompareDefinitionId,
                'releaseToCompare.environmentCreationDate': releaseToCompareEnvironmentCreationDate,
                'releaseToCompare.environmentDefinitionId': releaseToCompareEnvironmentDefinitionId,
                'releaseToCompare.environmentDefinitionName': releaseToCompareEnvironmentDefinitionName,
                'releaseToCompare.environmentId': releaseToCompareEnvironmentId,
                'releaseToCompare.environmentName': releaseToCompareEnvironmentName,
                'releaseToCompare.id': releaseToCompareId,
                'releaseToCompare.name': releaseToCompareName,
            },
        });
    }
    /**
     * @returns TestResultSummary successful operation
     * @throws ApiError
     */
    public resultsummarybyreleaseQueryTestResultsSummaryForReleases({
        organization,
        body,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: Array<ReleaseReference>,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<Array<TestResultSummary>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/testresults/resultsummarybyrelease',
            path: {
                'organization': organization,
                'project': project,
            },
            body: body,
        });
    }
}
