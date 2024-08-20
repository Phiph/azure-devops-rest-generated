/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PolicyConfiguration } from '../models/PolicyConfiguration';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PolicyConfigurationsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Retrieve a list of policy configurations by a given set of scope/filtering criteria.
     *
     * Below is a short description of how all of the query parameters interact with each other:
     * - repositoryId set, refName set: returns all policy configurations that *apply* to a particular branch in a repository
     * - repositoryId set, refName unset: returns all policy configurations that *apply* to a particular repository
     * - repositoryId unset, refName unset: returns all policy configurations that are *defined* at the project level
     * - repositoryId unset, refName set: returns all project-level branch policies, plus the project level configurations
     * For all of the examples above, when policyType is set, it'll restrict results to the given policy type
     * @returns PolicyConfiguration successful operation
     * @throws ApiError
     */
    public policyConfigurationsGet({
        organization,
        project,
        repositoryId,
        refName,
        policyType,
        top,
        continuationToken,
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
         * The repository id.
         */
        repositoryId?: string,
        /**
         * The fully-qualified Git ref name (e.g. refs/heads/master).
         */
        refName?: string,
        /**
         * The policy type filter.
         */
        policyType?: string,
        /**
         * Maximum number of policies to return.
         */
        top?: number,
        /**
         * Pass a policy configuration ID to fetch the next page of results, up to top number of results, for this endpoint.
         */
        continuationToken?: string,
    }): CancelablePromise<Array<PolicyConfiguration>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/git/policy/configurations',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'repositoryId': repositoryId,
                'refName': refName,
                'policyType': policyType,
                '$top': top,
                'continuationToken': continuationToken,
            },
        });
    }
}
