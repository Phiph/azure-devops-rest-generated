/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuildRetentionHistory } from '../models/BuildRetentionHistory';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class HistoryService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Returns the retention history for the project collection. This includes pipelines that have custom retention rules that may prevent the retention job from cleaning them up, runs per pipeline with retention type, files associated with pipelines owned by the collection with retention type, and the number of files per pipeline.
     * @returns BuildRetentionHistory successful operation
     * @throws ApiError
     */
    public historyGet({
        organization,
        daysToLookback,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        daysToLookback?: number,
    }): CancelablePromise<BuildRetentionHistory> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/build/retention/history',
            path: {
                'organization': organization,
            },
            query: {
                'daysToLookback': daysToLookback,
            },
        });
    }
}
