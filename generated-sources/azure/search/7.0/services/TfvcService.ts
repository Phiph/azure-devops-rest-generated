/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TfvcRepositoryStatusResponse } from '../models/TfvcRepositoryStatusResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TfvcService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Provides status of TFVC Repository.
     * @returns TfvcRepositoryStatusResponse successful operation
     * @throws ApiError
     */
    public tfvcGet({
        organization,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<TfvcRepositoryStatusResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/search/status/tfvc',
            path: {
                'organization': organization,
                'project': project,
            },
        });
    }
}
