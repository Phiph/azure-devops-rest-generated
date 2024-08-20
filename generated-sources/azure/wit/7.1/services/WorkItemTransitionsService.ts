/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkItemNextStateOnTransition } from '../models/WorkItemNextStateOnTransition';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class WorkItemTransitionsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Returns the next state on the given work item IDs.
     * @returns WorkItemNextStateOnTransition successful operation
     * @throws ApiError
     */
    public workItemTransitionsList({
        organization,
        ids,
        action,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * list of work item ids
         */
        ids: string,
        /**
         * possible actions. Currently only supports checkin
         */
        action?: string,
    }): CancelablePromise<Array<WorkItemNextStateOnTransition>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/wit/workitemtransitions',
            path: {
                'organization': organization,
            },
            query: {
                'ids': ids,
                'action': action,
            },
        });
    }
}
