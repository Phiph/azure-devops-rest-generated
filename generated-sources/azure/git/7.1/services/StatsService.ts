/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitBranchStats } from '../models/GitBranchStats';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class StatsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Retrieve statistics about all branches within a repository.
     * @returns GitBranchStats successful operation
     * @throws ApiError
     */
    public statsList({
        organization,
        repositoryId,
        project,
        baseVersionDescriptorVersion,
        baseVersionDescriptorVersionOptions,
        baseVersionDescriptorVersionType,
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
         * Version string identifier (name of tag/branch, SHA1 of commit)
         */
        baseVersionDescriptorVersion?: string,
        /**
         * Version options - Specify additional modifiers to version (e.g Previous)
         */
        baseVersionDescriptorVersionOptions?: 'none' | 'previousChange' | 'firstParent',
        /**
         * Version type (branch, tag, or commit). Determines how Id is interpreted
         */
        baseVersionDescriptorVersionType?: 'branch' | 'tag' | 'commit',
    }): CancelablePromise<Array<GitBranchStats>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/stats/branches',
            path: {
                'organization': organization,
                'repositoryId': repositoryId,
                'project': project,
            },
            query: {
                'baseVersionDescriptor.version': baseVersionDescriptorVersion,
                'baseVersionDescriptor.versionOptions': baseVersionDescriptorVersionOptions,
                'baseVersionDescriptor.versionType': baseVersionDescriptorVersionType,
            },
        });
    }
}
