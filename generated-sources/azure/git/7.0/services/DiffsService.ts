/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitCommitDiffs } from '../models/GitCommitDiffs';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DiffsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Find the closest common commit (the merge base) between base and target commits, and get the diff between either the base and target commits or common and target commits.
     * @returns GitCommitDiffs successful operation
     * @throws ApiError
     */
    public diffsGet({
        organization,
        repositoryId,
        project,
        diffCommonCommit,
        top,
        skip,
        baseVersion,
        baseVersionOptions,
        baseVersionType,
        targetVersion,
        targetVersionOptions,
        targetVersionType,
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
         * If true, diff between common and target commits. If false, diff between base and target commits.
         */
        diffCommonCommit?: boolean,
        /**
         * Maximum number of changes to return. Defaults to 100.
         */
        top?: number,
        /**
         * Number of changes to skip
         */
        skip?: number,
        /**
         * Version string identifier (name of tag/branch, SHA1 of commit)
         */
        baseVersion?: string,
        /**
         * Version options - Specify additional modifiers to version (e.g Previous)
         */
        baseVersionOptions?: 'none' | 'previousChange' | 'firstParent',
        /**
         * Version type (branch, tag, or commit). Determines how Id is interpreted
         */
        baseVersionType?: 'branch' | 'tag' | 'commit',
        /**
         * Version string identifier (name of tag/branch, SHA1 of commit)
         */
        targetVersion?: string,
        /**
         * Version options - Specify additional modifiers to version (e.g Previous)
         */
        targetVersionOptions?: 'none' | 'previousChange' | 'firstParent',
        /**
         * Version type (branch, tag, or commit). Determines how Id is interpreted
         */
        targetVersionType?: 'branch' | 'tag' | 'commit',
    }): CancelablePromise<GitCommitDiffs> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/diffs/commits',
            path: {
                'organization': organization,
                'repositoryId': repositoryId,
                'project': project,
            },
            query: {
                'diffCommonCommit': diffCommonCommit,
                '$top': top,
                '$skip': skip,
                'baseVersion': baseVersion,
                'baseVersionOptions': baseVersionOptions,
                'baseVersionType': baseVersionType,
                'targetVersion': targetVersion,
                'targetVersionOptions': targetVersionOptions,
                'targetVersionType': targetVersionType,
            },
        });
    }
}
