/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitBlobRef } from '../models/GitBlobRef';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class BlobsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets one or more blobs in a zip file download.
     * @returns string successful operation
     * @throws ApiError
     */
    public blobsGetBlobsZip({
        organization,
        body,
        repositoryId,
        project,
        filename,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Blob IDs (SHA1 hashes) to be returned in the zip file.
         */
        body: Array<string>,
        /**
         * The name or ID of the repository.
         */
        repositoryId: string,
        /**
         * Project ID or project name
         */
        project: string,
        filename?: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/blobs',
            path: {
                'organization': organization,
                'repositoryId': repositoryId,
                'project': project,
            },
            query: {
                'filename': filename,
            },
            body: body,
        });
    }
    /**
     * Get a single blob.
     *
     * Repositories have both a name and an identifier. Identifiers are globally unique,
     * but several projects may contain a repository of the same name. You don't need to include
     * the project if you specify a repository by ID. However, if you specify a repository by name,
     * you must also specify the project (by name or ID).
     * @returns GitBlobRef successful operation
     * @throws ApiError
     */
    public blobsGetBlob({
        organization,
        repositoryId,
        sha1,
        project,
        download,
        fileName,
        format,
        resolveLfs,
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
         * SHA1 hash of the file. You can get the SHA1 of a file using the "Git/Items/Get Item" endpoint.
         */
        sha1: string,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * If true, prompt for a download rather than rendering in a browser. Note: this value defaults to true if $format is zip
         */
        download?: boolean,
        /**
         * Provide a fileName to use for a download.
         */
        fileName?: string,
        /**
         * Options: json, zip, text, octetstream. If not set, defaults to the MIME type set in the Accept header.
         */
        format?: string,
        /**
         * If true, try to resolve a blob to its LFS contents, if it's an LFS pointer file. Only compatible with octet-stream Accept headers or $format types
         */
        resolveLfs?: boolean,
    }): CancelablePromise<GitBlobRef> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/git/repositories/{repositoryId}/blobs/{sha1}',
            path: {
                'organization': organization,
                'repositoryId': repositoryId,
                'sha1': sha1,
                'project': project,
            },
            query: {
                'download': download,
                'fileName': fileName,
                '$format': format,
                'resolveLfs': resolveLfs,
            },
        });
    }
}
