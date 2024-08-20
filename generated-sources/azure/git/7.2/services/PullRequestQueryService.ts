/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitPullRequestQuery } from '../models/GitPullRequestQuery';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PullRequestQueryService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * This API is used to find what pull requests are related to a given commit.  It can be used to either find the pull request that created a particular merge commit or it can be used to find all pull requests that have ever merged a particular commit.  The input is a list of queries which each contain a list of commits. For each commit that you search against, you will get back a dictionary of commit -> pull requests.
     * @returns GitPullRequestQuery successful operation
     * @throws ApiError
     */
    public pullRequestQueryGet({
        organization,
        body,
        repositoryId,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The list of queries to perform.
         */
        body: GitPullRequestQuery,
        /**
         * ID of the repository.
         */
        repositoryId: string,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<GitPullRequestQuery> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/pullrequestquery',
            path: {
                'organization': organization,
                'repositoryId': repositoryId,
                'project': project,
            },
            body: body,
        });
    }
}
