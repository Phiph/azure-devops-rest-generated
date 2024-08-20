/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WikiPageMove } from '../models/WikiPageMove';
import type { WikiPageMoveParameters } from '../models/WikiPageMoveParameters';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PageMovesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates a page move operation that updates the path and order of the page as provided in the parameters.
     * @returns WikiPageMove Page move created. Moved page's version is populated in the ETag response header.
     * @throws ApiError
     */
    public pageMovesCreate({
        organization,
        body,
        project,
        wikiIdentifier,
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
         * Page more operation parameters.
         */
        body: WikiPageMoveParameters,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Wiki ID or wiki name.
         */
        wikiIdentifier: string,
        /**
         * Comment that is to be associated with this page move.
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
    }): CancelablePromise<WikiPageMove> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/wiki/wikis/{wikiIdentifier}/pagemoves',
            path: {
                'organization': organization,
                'project': project,
                'wikiIdentifier': wikiIdentifier,
            },
            query: {
                'comment': comment,
                'versionDescriptor.version': versionDescriptorVersion,
                'versionDescriptor.versionOptions': versionDescriptorVersionOptions,
                'versionDescriptor.versionType': versionDescriptorVersionType,
            },
            body: body,
        });
    }
}
