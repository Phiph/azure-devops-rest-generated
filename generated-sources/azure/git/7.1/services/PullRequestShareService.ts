/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ShareNotificationContext } from '../models/ShareNotificationContext';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PullRequestShareService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Sends an e-mail notification about a specific pull request to a set of recipients
     * @returns any successful operation
     * @throws ApiError
     */
    public pullRequestShareSharePullRequest({
        organization,
        body,
        repositoryId,
        pullRequestId,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: ShareNotificationContext,
        /**
         * ID of the git repository.
         */
        repositoryId: string,
        /**
         * ID of the pull request.
         */
        pullRequestId: number,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/share',
            path: {
                'organization': organization,
                'repositoryId': repositoryId,
                'pullRequestId': pullRequestId,
                'project': project,
            },
            body: body,
        });
    }
}
