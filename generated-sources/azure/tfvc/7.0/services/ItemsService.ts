/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TfvcItem } from '../models/TfvcItem';
import type { TfvcItemRequestData } from '../models/TfvcItemRequestData';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ItemsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Post for retrieving a set of items given a list of paths or a long path. Allows for specifying the recursionLevel and version descriptors for each path.
     * @returns any[] successful operation
     * @throws ApiError
     */
    public itemsGetItemsBatch({
        organization,
        body,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: TfvcItemRequestData,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<Array<any[]>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/tfvc/itembatch',
            path: {
                'organization': organization,
                'project': project,
            },
            body: body,
        });
    }
    /**
     * Get a list of Tfvc items
     * @returns TfvcItem successful operation
     * @throws ApiError
     */
    public itemsList({
        organization,
        project,
        scopePath,
        recursionLevel,
        includeLinks,
        versionDescriptorVersion,
        versionDescriptorVersionOption,
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
         * Version control path of a folder to return multiple items.
         */
        scopePath?: string,
        /**
         * None (just the item), or OneLevel (contents of a folder).
         */
        recursionLevel?: 'none' | 'oneLevel' | 'oneLevelPlusNestedEmptyFolders' | 'full',
        /**
         * True to include links.
         */
        includeLinks?: boolean,
        /**
         * Version object.
         */
        versionDescriptorVersion?: string,
        versionDescriptorVersionOption?: 'none' | 'previous' | 'useRename',
        versionDescriptorVersionType?: 'none' | 'changeset' | 'shelveset' | 'change' | 'date' | 'latest' | 'tip' | 'mergeSource',
    }): CancelablePromise<Array<TfvcItem>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/tfvc/items',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'scopePath': scopePath,
                'recursionLevel': recursionLevel,
                'includeLinks': includeLinks,
                'versionDescriptor.version': versionDescriptorVersion,
                'versionDescriptor.versionOption': versionDescriptorVersionOption,
                'versionDescriptor.versionType': versionDescriptorVersionType,
            },
        });
    }
}
