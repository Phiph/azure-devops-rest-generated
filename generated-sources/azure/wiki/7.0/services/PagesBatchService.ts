/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WikiPageDetail } from '../models/WikiPageDetail';
import type { WikiPagesBatchRequest } from '../models/WikiPagesBatchRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PagesBatchService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Returns pageable list of Wiki Pages
     * @returns WikiPageDetail successful operation
     * @throws ApiError
     */
    public pagesBatchGet({
        organization,
        body,
        project,
        wikiIdentifier,
        versionDescriptorVersion,
        versionDescriptorVersionOptions,
        versionDescriptorVersionType,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Wiki batch page request.
         */
        body: WikiPagesBatchRequest,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Wiki ID or wiki name.
         */
        wikiIdentifier: string,
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
    }): CancelablePromise<Array<WikiPageDetail>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/wiki/wikis/{wikiIdentifier}/pagesbatch',
            path: {
                'organization': organization,
                'project': project,
                'wikiIdentifier': wikiIdentifier,
            },
            query: {
                'versionDescriptor.version': versionDescriptorVersion,
                'versionDescriptor.versionOptions': versionDescriptorVersionOptions,
                'versionDescriptor.versionType': versionDescriptorVersionType,
            },
            body: body,
        });
    }
}
