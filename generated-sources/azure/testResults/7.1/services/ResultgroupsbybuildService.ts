/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FieldDetailsForTestResults } from '../models/FieldDetailsForTestResults';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ResultgroupsbybuildService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns FieldDetailsForTestResults successful operation
     * @throws ApiError
     */
    public resultgroupsbybuildList({
        organization,
        project,
        buildId,
        publishContext,
        fields,
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
        buildId: number,
        publishContext: string,
        fields?: string,
        continuationToken?: string,
    }): CancelablePromise<Array<FieldDetailsForTestResults>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/testresults/resultgroupsbybuild',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'buildId': buildId,
                'publishContext': publishContext,
                'fields': fields,
                'continuationToken': continuationToken,
            },
        });
    }
}
