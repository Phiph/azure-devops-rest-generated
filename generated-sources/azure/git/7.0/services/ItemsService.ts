/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitItem } from '../models/GitItem';
import type { GitItemRequestData } from '../models/GitItemRequestData';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ItemsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get Item Metadata and/or Content for a collection of items. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content which is always returned as a download.
     * @returns GitItem successful operation
     * @throws ApiError
     */
    public itemsList({
        organization,
        repositoryId,
        project,
        scopePath,
        recursionLevel,
        includeContentMetadata,
        latestProcessedChange,
        download,
        includeLinks,
        format,
        versionDescriptorVersion,
        versionDescriptorVersionOptions,
        versionDescriptorVersionType,
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
         * The path scope.  The default is null.
         */
        scopePath?: string,
        /**
         * The recursion level of this request. The default is 'none', no recursion.
         */
        recursionLevel?: 'none' | 'oneLevel' | 'oneLevelPlusNestedEmptyFolders' | 'full',
        /**
         * Set to true to include content metadata.  Default is false.
         */
        includeContentMetadata?: boolean,
        /**
         * Set to true to include the latest changes.  Default is false.
         */
        latestProcessedChange?: boolean,
        /**
         * Set to true to download the response as a file.  Default is false.
         */
        download?: boolean,
        /**
         * Set to true to include links to items.  Default is false.
         */
        includeLinks?: boolean,
        /**
         * If specified, this overrides the HTTP Accept request header to return either 'json' or 'zip'. If $format is specified, then api-version should also be specified as a query parameter.
         */
        format?: string,
        /**
         * Version string identifier (name of tag/branch, SHA1 of commit)
         */
        versionDescriptorVersion?: string,
        /**
         * Version options - Specify additional modifiers to version (e.g Previous)
         */
        versionDescriptorVersionOptions?: 'none' | 'previousChange' | 'firstParent',
        /**
         * Version type (branch, tag, or commit). Determines how Id is interpreted
         */
        versionDescriptorVersionType?: 'branch' | 'tag' | 'commit',
    }): CancelablePromise<Array<GitItem>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/items',
            path: {
                'organization': organization,
                'repositoryId': repositoryId,
                'project': project,
            },
            query: {
                'scopePath': scopePath,
                'recursionLevel': recursionLevel,
                'includeContentMetadata': includeContentMetadata,
                'latestProcessedChange': latestProcessedChange,
                'download': download,
                'includeLinks': includeLinks,
                '$format': format,
                'versionDescriptor.version': versionDescriptorVersion,
                'versionDescriptor.versionOptions': versionDescriptorVersionOptions,
                'versionDescriptor.versionType': versionDescriptorVersionType,
            },
        });
    }
    /**
     * Post for retrieving a creating a batch out of a set of items in a repo / project given a list of paths or a long path
     * @returns any[] successful operation
     * @throws ApiError
     */
    public itemsGetItemsBatch({
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
         * Request data attributes: ItemDescriptors, IncludeContentMetadata, LatestProcessedChange, IncludeLinks. ItemDescriptors: Collection of items to fetch, including path, version, and recursion level. IncludeContentMetadata: Whether to include metadata for all items LatestProcessedChange: Whether to include shallow ref to commit that last changed each item. IncludeLinks: Whether to include the _links field on the shallow references.
         */
        body: GitItemRequestData,
        /**
         * The name or ID of the repository
         */
        repositoryId: string,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<Array<any[]>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/itemsbatch',
            path: {
                'organization': organization,
                'repositoryId': repositoryId,
                'project': project,
            },
            body: body,
        });
    }
}
