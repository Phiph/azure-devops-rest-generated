/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FormLayout } from '../models/FormLayout';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class LayoutService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets the form layout.
     * @returns FormLayout successful operation
     * @throws ApiError
     */
    public layoutGet({
        organization,
        processId,
        witRefName,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The ID of the process.
         */
        processId: string,
        /**
         * The reference name of the work item type.
         */
        witRefName: string,
    }): CancelablePromise<FormLayout> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/work/processes/{processId}/workItemTypes/{witRefName}/layout',
            path: {
                'organization': organization,
                'processId': processId,
                'witRefName': witRefName,
            },
        });
    }
}
