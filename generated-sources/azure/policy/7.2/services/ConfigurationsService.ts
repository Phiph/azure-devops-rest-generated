/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PolicyConfiguration } from '../models/PolicyConfiguration';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ConfigurationsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create a policy configuration of a given policy type.
     * @returns PolicyConfiguration successful operation
     * @throws ApiError
     */
    public configurationsCreate({
        organization,
        body,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The policy configuration to create.
         */
        body: PolicyConfiguration,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<PolicyConfiguration> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/policy/configurations',
            path: {
                'organization': organization,
                'project': project,
            },
            body: body,
        });
    }
    /**
     * Get a list of policy configurations in a project.
     *
     * The 'scope' parameter for this API should not be used, except for legacy compatability reasons. It returns specifically
     * scoped policies and does not support heirarchical nesting. Instead, use the /_apis/git/policy/configurations API, which provides
     * first class scope filtering support.
     *
     * The optional `policyType` parameter can be used to filter the set of policies returned from this method.
     * @returns PolicyConfiguration successful operation
     * @throws ApiError
     */
    public configurationsList({
        organization,
        project,
        scope,
        top,
        continuationToken,
        policyType,
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
         * [Provided for legacy reasons] The scope on which a subset of policies is defined.
         */
        scope?: string,
        /**
         * Maximum number of policies to return.
         */
        top?: number,
        /**
         * The continuation token used for pagination.
         */
        continuationToken?: string,
        /**
         * Filter returned policies to only this type
         */
        policyType?: string,
    }): CancelablePromise<Array<PolicyConfiguration>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/policy/configurations',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'scope': scope,
                '$top': top,
                'continuationToken': continuationToken,
                'policyType': policyType,
            },
        });
    }
    /**
     * Delete a policy configuration by its ID.
     * @returns void
     * @throws ApiError
     */
    public configurationsDelete({
        organization,
        project,
        configurationId,
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
         * ID of the policy configuration to delete.
         */
        configurationId: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/{project}/_apis/policy/configurations/{configurationId}',
            path: {
                'organization': organization,
                'project': project,
                'configurationId': configurationId,
            },
        });
    }
    /**
     * Get a policy configuration by its ID.
     * @returns PolicyConfiguration successful operation
     * @throws ApiError
     */
    public configurationsGet({
        organization,
        project,
        configurationId,
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
         * ID of the policy configuration
         */
        configurationId: number,
    }): CancelablePromise<PolicyConfiguration> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/policy/configurations/{configurationId}',
            path: {
                'organization': organization,
                'project': project,
                'configurationId': configurationId,
            },
        });
    }
    /**
     * Update a policy configuration by its ID.
     * @returns PolicyConfiguration successful operation
     * @throws ApiError
     */
    public configurationsUpdate({
        organization,
        body,
        project,
        configurationId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The policy configuration to update.
         */
        body: PolicyConfiguration,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * ID of the existing policy configuration to be updated.
         */
        configurationId: number,
    }): CancelablePromise<PolicyConfiguration> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/{organization}/{project}/_apis/policy/configurations/{configurationId}',
            path: {
                'organization': organization,
                'project': project,
                'configurationId': configurationId,
            },
            body: body,
        });
    }
}
