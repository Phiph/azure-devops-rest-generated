/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminBehavior } from '../models/AdminBehavior';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class BehaviorsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Returns a list of behaviors for the process.
     * @returns AdminBehavior successful operation
     * @throws ApiError
     */
    public behaviorsList({
        organization,
        processId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The ID of the process
         */
        processId: string,
    }): CancelablePromise<Array<AdminBehavior>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/work/processadmin/{processId}/behaviors',
            path: {
                'organization': organization,
                'processId': processId,
            },
        });
    }
}
