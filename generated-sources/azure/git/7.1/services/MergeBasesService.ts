/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitCommitRef } from '../models/GitCommitRef';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class MergeBasesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Find the merge bases of two commits, optionally across forks. If otherRepositoryId is not specified, the merge bases will only be calculated within the context of the local repositoryNameOrId.
     * @returns GitCommitRef successful operation
     * @throws ApiError
     */
    public mergeBasesList({
        organization,
        repositoryNameOrId,
        commitId,
        otherCommitId,
        project,
        otherCollectionId,
        otherRepositoryId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * ID or name of the local repository.
         */
        repositoryNameOrId: string,
        /**
         * First commit, usually the tip of the target branch of the potential merge.
         */
        commitId: string,
        /**
         * Other commit, usually the tip of the source branch of the potential merge.
         */
        otherCommitId: string,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * The collection ID where otherCommitId lives.
         */
        otherCollectionId?: string,
        /**
         * The repository ID where otherCommitId lives.
         */
        otherRepositoryId?: string,
    }): CancelablePromise<Array<GitCommitRef>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryNameOrId}/commits/{commitId}/mergebases',
            path: {
                'organization': organization,
                'repositoryNameOrId': repositoryNameOrId,
                'commitId': commitId,
                'project': project,
            },
            query: {
                'otherCommitId': otherCommitId,
                'otherCollectionId': otherCollectionId,
                'otherRepositoryId': otherRepositoryId,
            },
        });
    }
}
