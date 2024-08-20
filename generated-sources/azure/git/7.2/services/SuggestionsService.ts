/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitSuggestion } from '../models/GitSuggestion';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SuggestionsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Retrieve a pull request suggestion for a particular repository or team project.
     * @returns GitSuggestion successful operation
     * @throws ApiError
     */
    public suggestionsList({
        organization,
        repositoryId,
        project,
        preferCompareBranch,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * ID of the git repository.
         */
        repositoryId: string,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * If true, prefer the compare branch over the default branch as target branch for pull requests.
         */
        preferCompareBranch?: boolean,
    }): CancelablePromise<Array<GitSuggestion>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/suggestions',
            path: {
                'organization': organization,
                'repositoryId': repositoryId,
                'project': project,
            },
            query: {
                'preferCompareBranch': preferCompareBranch,
            },
        });
    }
}
