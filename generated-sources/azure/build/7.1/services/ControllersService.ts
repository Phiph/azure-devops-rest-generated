/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuildController } from '../models/BuildController';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ControllersService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets controller, optionally filtered by name
     * @returns BuildController successful operation
     * @throws ApiError
     */
    public controllersList({
        organization,
        name,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        name?: string,
    }): CancelablePromise<Array<BuildController>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/build/controllers',
            path: {
                'organization': organization,
            },
            query: {
                'name': name,
            },
        });
    }
    /**
     * Gets a controller
     * @returns BuildController successful operation
     * @throws ApiError
     */
    public controllersGet({
        organization,
        controllerId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        controllerId: number,
    }): CancelablePromise<BuildController> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/build/controllers/{controllerId}',
            path: {
                'organization': organization,
                'controllerId': controllerId,
            },
        });
    }
}
