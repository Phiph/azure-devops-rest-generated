/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuildOptionDefinition } from '../models/BuildOptionDefinition';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class OptionsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets all build definition options supported by the system.
     * @returns BuildOptionDefinition successful operation
     * @throws ApiError
     */
    public optionsList({
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
    }): CancelablePromise<Array<BuildOptionDefinition>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/build/options',
            path: {
                'organization': organization,
                'project': project,
            },
        });
    }
}
