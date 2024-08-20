/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { YamlBuild } from '../models/YamlBuild';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class YamlService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Converts a definition to YAML, optionally at a specific revision.
     * @returns YamlBuild successful operation
     * @throws ApiError
     */
    public yamlGet({
        organization,
        project,
        definitionId,
        revision,
        minMetricsTime,
        propertyFilters,
        includeLatestBuilds,
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
         * The ID of the definition.
         */
        definitionId: number,
        /**
         * The revision number to retrieve. If this is not specified, the latest version will be returned.
         */
        revision?: number,
        /**
         * If specified, indicates the date from which metrics should be included.
         */
        minMetricsTime?: string,
        /**
         * A comma-delimited list of properties to include in the results.
         */
        propertyFilters?: string,
        includeLatestBuilds?: boolean,
    }): CancelablePromise<YamlBuild> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/build/definitions/{definitionId}/yaml',
            path: {
                'organization': organization,
                'project': project,
                'definitionId': definitionId,
            },
            query: {
                'revision': revision,
                'minMetricsTime': minMetricsTime,
                'propertyFilters': propertyFilters,
                'includeLatestBuilds': includeLatestBuilds,
            },
        });
    }
}
