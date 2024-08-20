/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CodeCoverageData } from '../models/CodeCoverageData';
import type { CodeCoverageSummary } from '../models/CodeCoverageSummary';
import type { SourceViewBuildCoverage } from '../models/SourceViewBuildCoverage';
import type { TestRunCoverage } from '../models/TestRunCoverage';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CodecoverageService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * http://(tfsserver):8080/tfs/DefaultCollection/_apis/test/CodeCoverage?buildId=10&deltaBuildId=9 Request: build id and delta build id (optional)
     * @returns CodeCoverageSummary successful operation
     * @throws ApiError
     */
    public codecoverageGet({
        organization,
        project,
        buildId,
        deltaBuildId,
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
        deltaBuildId?: number,
    }): CancelablePromise<CodeCoverageSummary> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/testresults/codecoverage',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'buildId': buildId,
                'deltaBuildId': deltaBuildId,
            },
        });
    }
    /**
     * http://(tfsserver):8080/tfs/DefaultCollection/_apis/test/CodeCoverage?buildId=10 Request: Json of code coverage summary
     * @returns any successful operation
     * @throws ApiError
     */
    public codecoverageUpdate({
        organization,
        project,
        buildId,
        body,
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
        body?: CodeCoverageData,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/testresults/codecoverage',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'buildId': buildId,
            },
            body: body,
        });
    }
    /**
     * @returns SourceViewBuildCoverage successful operation
     * @throws ApiError
     */
    public codecoverageFetchSourceCodeCoverageReport({
        organization,
        project,
        buildId,
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
    }): CancelablePromise<Array<SourceViewBuildCoverage>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/testresults/codecoverage/sourceview',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'buildId': buildId,
            },
        });
    }
    /**
     * @returns TestRunCoverage successful operation
     * @throws ApiError
     */
    public codecoverageGetTestRunCodeCoverage({
        organization,
        project,
        runId,
        flags,
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
        flags: number,
    }): CancelablePromise<Array<TestRunCoverage>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/testresults/runs/{runId}/codecoverage',
            path: {
                'organization': organization,
                'project': project,
                'runId': runId,
            },
            query: {
                'flags': flags,
            },
        });
    }
}
