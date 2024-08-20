/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitPush } from '../models/GitPush';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PushesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Push changes to the repository.
     * @returns GitPush successful operation
     * @throws ApiError
     */
    public pushesCreate({
        organization,
        body,
        repositoryId,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: GitPush,
        /**
         * The name or ID of the repository.
         */
        repositoryId: string,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<GitPush> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/pushes',
            path: {
                'organization': organization,
                'repositoryId': repositoryId,
                'project': project,
            },
            body: body,
        });
    }
    /**
     * Retrieves pushes associated with the specified repository.
     * @returns GitPush successful operation
     * @throws ApiError
     */
    public pushesList({
        organization,
        repositoryId,
        project,
        skip,
        top,
        searchCriteriaFromDate,
        searchCriteriaIncludeLinks,
        searchCriteriaIncludeRefUpdates,
        searchCriteriaPusherId,
        searchCriteriaRefName,
        searchCriteriaToDate,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The name or ID of the repository.
         */
        repositoryId: string,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Number of pushes to skip.
         */
        skip?: number,
        /**
         * Number of pushes to return.
         */
        top?: number,
        /**
         * Search criteria attributes: fromDate, toDate, pusherId, refName, includeRefUpdates or includeLinks. fromDate: Start date to search from. toDate: End date to search to. pusherId: Identity of the person who submitted the push. refName: Branch name to consider. includeRefUpdates: If true, include the list of refs that were updated by the push. includeLinks: Whether to include the _links field on the shallow references.
         */
        searchCriteriaFromDate?: string,
        /**
         * Whether to include the _links field on the shallow references
         */
        searchCriteriaIncludeLinks?: boolean,
        /**
         * Search criteria attributes: fromDate, toDate, pusherId, refName, includeRefUpdates or includeLinks. fromDate: Start date to search from. toDate: End date to search to. pusherId: Identity of the person who submitted the push. refName: Branch name to consider. includeRefUpdates: If true, include the list of refs that were updated by the push. includeLinks: Whether to include the _links field on the shallow references.
         */
        searchCriteriaIncludeRefUpdates?: boolean,
        /**
         * Search criteria attributes: fromDate, toDate, pusherId, refName, includeRefUpdates or includeLinks. fromDate: Start date to search from. toDate: End date to search to. pusherId: Identity of the person who submitted the push. refName: Branch name to consider. includeRefUpdates: If true, include the list of refs that were updated by the push. includeLinks: Whether to include the _links field on the shallow references.
         */
        searchCriteriaPusherId?: string,
        /**
         * Search criteria attributes: fromDate, toDate, pusherId, refName, includeRefUpdates or includeLinks. fromDate: Start date to search from. toDate: End date to search to. pusherId: Identity of the person who submitted the push. refName: Branch name to consider. includeRefUpdates: If true, include the list of refs that were updated by the push. includeLinks: Whether to include the _links field on the shallow references.
         */
        searchCriteriaRefName?: string,
        /**
         * Search criteria attributes: fromDate, toDate, pusherId, refName, includeRefUpdates or includeLinks. fromDate: Start date to search from. toDate: End date to search to. pusherId: Identity of the person who submitted the push. refName: Branch name to consider. includeRefUpdates: If true, include the list of refs that were updated by the push. includeLinks: Whether to include the _links field on the shallow references.
         */
        searchCriteriaToDate?: string,
    }): CancelablePromise<Array<GitPush>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/pushes',
            path: {
                'organization': organization,
                'repositoryId': repositoryId,
                'project': project,
            },
            query: {
                '$skip': skip,
                '$top': top,
                'searchCriteria.fromDate': searchCriteriaFromDate,
                'searchCriteria.includeLinks': searchCriteriaIncludeLinks,
                'searchCriteria.includeRefUpdates': searchCriteriaIncludeRefUpdates,
                'searchCriteria.pusherId': searchCriteriaPusherId,
                'searchCriteria.refName': searchCriteriaRefName,
                'searchCriteria.toDate': searchCriteriaToDate,
            },
        });
    }
    /**
     * Retrieves a particular push.
     * @returns GitPush successful operation
     * @throws ApiError
     */
    public pushesGet({
        organization,
        repositoryId,
        pushId,
        project,
        includeCommits,
        includeRefUpdates,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The name or ID of the repository.
         */
        repositoryId: string,
        /**
         * ID of the push.
         */
        pushId: number,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * The number of commits to include in the result.
         */
        includeCommits?: number,
        /**
         * If true, include the list of refs that were updated by the push.
         */
        includeRefUpdates?: boolean,
    }): CancelablePromise<GitPush> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/pushes/{pushId}',
            path: {
                'organization': organization,
                'repositoryId': repositoryId,
                'pushId': pushId,
                'project': project,
            },
            query: {
                'includeCommits': includeCommits,
                'includeRefUpdates': includeRefUpdates,
            },
        });
    }
}
