/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Timeline } from '../models/Timeline';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TimelineService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets details for a build
     * @returns Timeline successful operation
     * @throws ApiError
     */
    public timelineGet({
        organization,
        project,
        buildId,
        timelineId,
        changeId,
        planId,
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
        timelineId: string,
        changeId?: number,
        planId?: string,
    }): CancelablePromise<Timeline> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/build/builds/{buildId}/timeline/{timelineId}',
            path: {
                'organization': organization,
                'project': project,
                'buildId': buildId,
                'timelineId': timelineId,
            },
            query: {
                'changeId': changeId,
                'planId': planId,
            },
        });
    }
}
