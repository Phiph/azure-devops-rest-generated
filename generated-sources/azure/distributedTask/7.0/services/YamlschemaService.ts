/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class YamlschemaService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * GET the Yaml schema used for Yaml file validation.
     * @returns any successful operation
     * @throws ApiError
     */
    public yamlschemaGet({
        organization,
        validateTaskNames,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Whether the schema should validate that tasks are actually installed (useful for offline tools where you don't want validation).
         */
        validateTaskNames?: boolean,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/distributedtask/yamlschema',
            path: {
                'organization': organization,
            },
            query: {
                'validateTaskNames': validateTaskNames,
            },
        });
    }
}
