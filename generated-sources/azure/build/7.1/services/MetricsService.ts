/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuildMetric } from '../models/BuildMetric';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class MetricsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets build metrics for a definition.
     * @returns BuildMetric successful operation
     * @throws ApiError
     */
    public metricsGetDefinitionMetrics({
        organization,
        project,
        definitionId,
        minMetricsTime,
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
         * The date from which to calculate metrics.
         */
        minMetricsTime?: string,
    }): CancelablePromise<Array<BuildMetric>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/build/definitions/{definitionId}/metrics',
            path: {
                'organization': organization,
                'project': project,
                'definitionId': definitionId,
            },
            query: {
                'minMetricsTime': minMetricsTime,
            },
        });
    }
    /**
     * Gets build metrics for a project.
     * @returns BuildMetric successful operation
     * @throws ApiError
     */
    public metricsGetProjectMetrics({
        organization,
        project,
        metricAggregationType,
        minMetricsTime,
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
         * The aggregation type to use (hourly, daily).
         */
        metricAggregationType: string,
        /**
         * The date from which to calculate metrics.
         */
        minMetricsTime?: string,
    }): CancelablePromise<Array<BuildMetric>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/build/metrics/{metricAggregationType}',
            path: {
                'organization': organization,
                'project': project,
                'metricAggregationType': metricAggregationType,
            },
            query: {
                'minMetricsTime': minMetricsTime,
            },
        });
    }
}
