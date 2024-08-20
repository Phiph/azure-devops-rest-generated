/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FieldDetailsForTestResults } from '../models/FieldDetailsForTestResults';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ResultgroupsbyreleaseService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns FieldDetailsForTestResults successful operation
     * @throws ApiError
     */
    public resultgroupsbyreleaseList({
        organization,
        project,
        releaseId,
        publishContext,
        releaseEnvId,
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
        releaseId: number,
        publishContext: string,
        releaseEnvId?: number,
        fields?: string,
        continuationToken?: string,
    }): CancelablePromise<Array<FieldDetailsForTestResults>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/testresults/resultgroupsbyrelease',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'releaseId': releaseId,
                'publishContext': publishContext,
                'releaseEnvId': releaseEnvId,
                'fields': fields,
                'continuationToken': continuationToken,
            },
        });
    }
}
