/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuildCoverage } from '../models/BuildCoverage';
import type { TestRunCoverage } from '../models/TestRunCoverage';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CodeCoverageService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get code coverage data for a build.
     * @returns BuildCoverage successful operation
     * @throws ApiError
     */
    public codeCoverageGetBuildCodeCoverage({
        organization,
        project,
        buildId,
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
        /**
         * ID of the build for which code coverage data needs to be fetched.
         */
        buildId: number,
        /**
         * Value of flags determine the level of code coverage details to be fetched. Flags are additive. Expected Values are 1 for Modules, 2 for Functions, 4 for BlockData.
         */
        flags: number,
    }): CancelablePromise<Array<BuildCoverage>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/test/codecoverage',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'buildId': buildId,
                'flags': flags,
            },
        });
    }
    /**
     * Get code coverage data for a test run
     * @returns TestRunCoverage successful operation
     * @throws ApiError
     */
    public codeCoverageGetTestRunCodeCoverage({
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
        /**
         * ID of the test run for which code coverage data needs to be fetched.
         */
        runId: number,
        /**
         * Value of flags determine the level of code coverage details to be fetched. Flags are additive. Expected Values are 1 for Modules, 2 for Functions, 4 for BlockData.
         */
        flags: number,
    }): CancelablePromise<Array<TestRunCoverage>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/test/Runs/{runId}/codecoverage',
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
