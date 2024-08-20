/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TestConfiguration } from '../models/TestConfiguration';
import type { TestConfigurationCreateUpdateParameters } from '../models/TestConfigurationCreateUpdateParameters';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ConfigurationsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create a test configuration.
     * @returns TestConfiguration successful operation
     * @throws ApiError
     */
    public configurationsCreate({
        organization,
        body,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * TestConfigurationCreateUpdateParameters
         */
        body: TestConfigurationCreateUpdateParameters,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<TestConfiguration> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/testplan/configurations',
            path: {
                'organization': organization,
                'project': project,
            },
            body: body,
        });
    }
    /**
     * Delete a test configuration by its ID.
     * @returns any successful operation
     * @throws ApiError
     */
    public configurationsDelete({
        organization,
        project,
        testConfiguartionId,
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
         * ID of the test configuration to delete.
         */
        testConfiguartionId: number,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/{project}/_apis/testplan/configurations',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'testConfiguartionId': testConfiguartionId,
            },
        });
    }
    /**
     * Get a list of test configurations.
     * @returns TestConfiguration successful operation
     * @throws ApiError
     */
    public configurationsList({
        organization,
        project,
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
         * If the list of configurations returned is not complete, a continuation token to query next batch of configurations is included in the response header as "x-ms-continuationtoken". Omit this parameter to get the first batch of test configurations.
         */
        continuationToken?: string,
    }): CancelablePromise<Array<TestConfiguration>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/testplan/configurations',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'continuationToken': continuationToken,
            },
        });
    }
    /**
     * Update a test configuration by its ID.
     * @returns TestConfiguration successful operation
     * @throws ApiError
     */
    public configurationsUpdate({
        organization,
        body,
        project,
        testConfiguartionId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * TestConfigurationCreateUpdateParameters
         */
        body: TestConfigurationCreateUpdateParameters,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * ID of the test configuration to update.
         */
        testConfiguartionId: number,
    }): CancelablePromise<TestConfiguration> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/testplan/configurations',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'testConfiguartionId': testConfiguartionId,
            },
            body: body,
        });
    }
    /**
     * Get a test configuration
     * @returns TestConfiguration successful operation
     * @throws ApiError
     */
    public configurationsGet({
        organization,
        project,
        testConfigurationId,
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
         * ID of the test configuration to get.
         */
        testConfigurationId: number,
    }): CancelablePromise<TestConfiguration> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/testplan/configurations/{testConfigurationId}',
            path: {
                'organization': organization,
                'project': project,
                'testConfigurationId': testConfigurationId,
            },
        });
    }
}
