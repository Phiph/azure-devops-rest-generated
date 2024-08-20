/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WikiAttachment } from '../models/WikiAttachment';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AttachmentsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates an attachment in the wiki.
     * @returns WikiAttachment Attachment created. Attachment's version is populated in the ETag response header.
     * @throws ApiError
     */
    public attachmentsCreate({
        organization,
        body,
        project,
        wikiIdentifier,
        name,
        versionDescriptorVersion,
        versionDescriptorVersionOptions,
        versionDescriptorVersionType,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Stream to upload
         */
        body: string,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Wiki ID or wiki name.
         */
        wikiIdentifier: string,
        /**
         * Wiki attachment name.
         */
        name: string,
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
    }): CancelablePromise<WikiAttachment> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/{organization}/{project}/_apis/wiki/wikis/{wikiIdentifier}/attachments',
            path: {
                'organization': organization,
                'project': project,
                'wikiIdentifier': wikiIdentifier,
            },
            query: {
                'name': name,
                'versionDescriptor.version': versionDescriptorVersion,
                'versionDescriptor.versionOptions': versionDescriptorVersionOptions,
                'versionDescriptor.versionType': versionDescriptorVersionType,
            },
            body: body,
        });
    }
}
