/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PolicyType } from '../models/PolicyType';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TypesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Retrieve all available policy types.
     * @returns PolicyType successful operation
     * @throws ApiError
     */
    public typesList({
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
    }): CancelablePromise<Array<PolicyType>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/policy/types',
            path: {
                'organization': organization,
                'project': project,
            },
        });
    }
    /**
     * Retrieve a specific policy type by ID.
     * @returns PolicyType successful operation
     * @throws ApiError
     */
    public typesGet({
        organization,
        project,
        typeId,
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
         * The policy ID.
         */
        typeId: string,
    }): CancelablePromise<PolicyType> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/policy/types/{typeId}',
            path: {
                'organization': organization,
                'project': project,
                'typeId': typeId,
            },
        });
    }
}
