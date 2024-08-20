/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JToken } from '../models/JToken';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class RequestAccessService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns any successful operation
     * @throws ApiError
     */
    public requestAccessRequestAccess({
        organization,
        body,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: JToken,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/_apis/graph/requestaccess',
            path: {
                'organization': organization,
            },
            body: body,
        });
    }
}
