/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class EnvironmentaccesstokenService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * GET a PAT token for creating and deleting deployment targets in an environment.
     * @returns string successful operation
     * @throws ApiError
     */
    public environmentaccesstokenGenerateEnvironmentAccessToken({
        organization,
        project,
        environmentId,
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
         * ID of the environment in which deployment targets are managed.
         */
        environmentId: number,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/pipelines/environments/environmentaccesstoken/{environmentId}',
            path: {
                'organization': organization,
                'project': project,
                'environmentId': environmentId,
            },
        });
    }
}
