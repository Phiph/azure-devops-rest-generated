/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WikiPage } from '../models/WikiPage';
import type { WikiPageCreateOrUpdateParameters } from '../models/WikiPageCreateOrUpdateParameters';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PagesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates or edits a wiki page.
     * @returns WikiPage Page edited. Edited page's version is populated in the ETag response header.
     * @throws ApiError
     */
    public pagesCreateOrUpdate({
        organization,
        body,
        project,
        wikiIdentifier,
        path,
        version,
        comment,
        versionDescriptorVersion,
        versionDescriptorVersionOptions,
        versionDescriptorVersionType,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Wiki create or update operation parameters.
         */
        body: WikiPageCreateOrUpdateParameters,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Wiki ID or wiki name.
         */
        wikiIdentifier: string,
        /**
         * Wiki page path.
         */
        path: string,
        /**
         * Version of the page on which the change is to be made. Mandatory for `Edit` scenario. To be populated in the If-Match header of the request.
         */
        version: string,
        /**
         * Comment to be associated with the page operation.
         */
        comment?: string,
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
    }): CancelablePromise<WikiPage> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/{organization}/{project}/_apis/wiki/wikis/{wikiIdentifier}/pages',
            path: {
                'organization': organization,
                'project': project,
                'wikiIdentifier': wikiIdentifier,
            },
            headers: {
                'Version': version,
            },
            query: {
                'path': path,
                'comment': comment,
                'versionDescriptor.version': versionDescriptorVersion,
                'versionDescriptor.versionOptions': versionDescriptorVersionOptions,
                'versionDescriptor.versionType': versionDescriptorVersionType,
            },
            body: body,
        });
    }
    /**
     * Deletes a wiki page.
     * @returns WikiPage Page deleted.
     * @throws ApiError
     */
    public pagesDeletePage({
        organization,
        project,
        wikiIdentifier,
        path,
        comment,
        versionDescriptorVersion,
        versionDescriptorVersionOptions,
        versionDescriptorVersionType,
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
         * Wiki ID or wiki name.
         */
        wikiIdentifier: string,
        /**
         * Wiki page path.
         */
        path: string,
        /**
         * Comment to be associated with this page delete.
         */
        comment?: string,
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
    }): CancelablePromise<WikiPage> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/{project}/_apis/wiki/wikis/{wikiIdentifier}/pages',
            path: {
                'organization': organization,
                'project': project,
                'wikiIdentifier': wikiIdentifier,
            },
            query: {
                'path': path,
                'comment': comment,
                'versionDescriptor.version': versionDescriptorVersion,
                'versionDescriptor.versionOptions': versionDescriptorVersionOptions,
                'versionDescriptor.versionType': versionDescriptorVersionType,
            },
        });
    }
    /**
     * Gets metadata or content of the wiki page for the provided path. Content negotiation is done based on the `Accept` header sent in the request.
     * @returns WikiPage successful operation
     * @throws ApiError
     */
    public pagesGetPage({
        organization,
        project,
        wikiIdentifier,
        path,
        recursionLevel,
        versionDescriptorVersion,
        versionDescriptorVersionOptions,
        versionDescriptorVersionType,
        includeContent,
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
         * Wiki ID or wiki name.
         */
        wikiIdentifier: string,
        /**
         * Wiki page path.
         */
        path?: string,
        /**
         * Recursion level for subpages retrieval. Defaults to `None` (Optional).
         */
        recursionLevel?: 'none' | 'oneLevel' | 'oneLevelPlusNestedEmptyFolders' | 'full',
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
        /**
         * True to include the content of the page in the response for Json content type. Defaults to false (Optional)
         */
        includeContent?: boolean,
    }): CancelablePromise<WikiPage> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/wiki/wikis/{wikiIdentifier}/pages',
            path: {
                'organization': organization,
                'project': project,
                'wikiIdentifier': wikiIdentifier,
            },
            query: {
                'path': path,
                'recursionLevel': recursionLevel,
                'versionDescriptor.version': versionDescriptorVersion,
                'versionDescriptor.versionOptions': versionDescriptorVersionOptions,
                'versionDescriptor.versionType': versionDescriptorVersionType,
                'includeContent': includeContent,
            },
        });
    }
    /**
     * Deletes a wiki page.
     * @returns WikiPage Page deleted.
     * @throws ApiError
     */
    public pagesDeletePageById({
        organization,
        project,
        wikiIdentifier,
        id,
        comment,
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
         * Wiki ID or wiki name.
         */
        wikiIdentifier: string,
        /**
         * Wiki page ID.
         */
        id: number,
        /**
         * Comment to be associated with this page delete.
         */
        comment?: string,
    }): CancelablePromise<WikiPage> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/{project}/_apis/wiki/wikis/{wikiIdentifier}/pages/{id}',
            path: {
                'organization': organization,
                'project': project,
                'wikiIdentifier': wikiIdentifier,
                'id': id,
            },
            query: {
                'comment': comment,
            },
        });
    }
    /**
     * Gets metadata or content of the wiki page for the provided page id. Content negotiation is done based on the `Accept` header sent in the request.
     * @returns WikiPage successful operation
     * @throws ApiError
     */
    public pagesGetPageById({
        organization,
        project,
        wikiIdentifier,
        id,
        recursionLevel,
        includeContent,
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
         * Wiki ID or wiki name..
         */
        wikiIdentifier: string,
        /**
         * Wiki page ID.
         */
        id: number,
        /**
         * Recursion level for subpages retrieval. Defaults to `None` (Optional).
         */
        recursionLevel?: 'none' | 'oneLevel' | 'oneLevelPlusNestedEmptyFolders' | 'full',
        /**
         * True to include the content of the page in the response for Json content type. Defaults to false (Optional)
         */
        includeContent?: boolean,
    }): CancelablePromise<WikiPage> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/wiki/wikis/{wikiIdentifier}/pages/{id}',
            path: {
                'organization': organization,
                'project': project,
                'wikiIdentifier': wikiIdentifier,
                'id': id,
            },
            query: {
                'recursionLevel': recursionLevel,
                'includeContent': includeContent,
            },
        });
    }
    /**
     * Edits a wiki page.
     * @returns WikiPage Page edited. Edited page's version is populated in the ETag response header.
     * @throws ApiError
     */
    public pagesUpdate({
        organization,
        body,
        project,
        wikiIdentifier,
        id,
        version,
        comment,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Wiki update operation parameters.
         */
        body: WikiPageCreateOrUpdateParameters,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Wiki ID or wiki name.
         */
        wikiIdentifier: string,
        /**
         * Wiki page ID.
         */
        id: number,
        /**
         * Version of the page on which the change is to be made. Mandatory for `Edit` scenario. To be populated in the If-Match header of the request.
         */
        version: string,
        /**
         * Comment to be associated with the page operation.
         */
        comment?: string,
    }): CancelablePromise<WikiPage> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/wiki/wikis/{wikiIdentifier}/pages/{id}',
            path: {
                'organization': organization,
                'project': project,
                'wikiIdentifier': wikiIdentifier,
                'id': id,
            },
            headers: {
                'Version': version,
            },
            query: {
                'comment': comment,
            },
            body: body,
        });
    }
}
