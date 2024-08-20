/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AttachmentReference } from '../models/AttachmentReference';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AttachmentsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Uploads an attachment.
     *
     * On accounts with higher attachment upload limits (>130MB), you will need to use chunked upload.
     * To upload an attachment in multiple chunks, you first need to [**Start a Chunked Upload**](#start_a_chunked_upload) and then follow the example from the **Upload Chunk** section.
     * @returns AttachmentReference successful operation
     * @throws ApiError
     */
    public attachmentsCreate({
        organization,
        body,
        project,
        fileName,
        uploadType,
        areaPath,
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
         * The name of the file
         */
        fileName?: string,
        /**
         * Attachment upload type: Simple or Chunked
         */
        uploadType?: string,
        /**
         * Target project Area Path
         */
        areaPath?: string,
    }): CancelablePromise<AttachmentReference> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/wit/attachments',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'fileName': fileName,
                'uploadType': uploadType,
                'areaPath': areaPath,
            },
            body: body,
        });
    }
    /**
     * Downloads an attachment.
     * @returns string successful operation
     * @throws ApiError
     */
    public attachmentsGet({
        organization,
        id,
        project,
        fileName,
        download,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Attachment ID
         */
        id: string,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Name of the file
         */
        fileName?: string,
        /**
         * If set to <c>true</c> always download attachment
         */
        download?: boolean,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/wit/attachments/{id}',
            path: {
                'organization': organization,
                'id': id,
                'project': project,
            },
            query: {
                'fileName': fileName,
                'download': download,
            },
        });
    }
    /**
     * Uploads an attachment chunk.
     *
     * Before performing [**Upload a Chunk**](#upload-a-chunk), make sure to have an attachment id returned in **Start a Chunked Upload** example on **Create** section. Specify the byte range of the chunk using Content-Length. For example: "Content - Length": "bytes 0 - 39999 / 50000" for the first 40000 bytes of a 50000 byte file.
     * @returns AttachmentReference successful operation
     * @throws ApiError
     */
    public attachmentsUploadChunk({
        organization,
        body,
        id,
        contentRangeHeader,
        project,
        fileName,
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
         * The id of the attachment
         */
        id: string,
        /**
         * starting and ending byte positions for chunked file upload, format is "Content-Range": "bytes 0-10000/50000"
         */
        contentRangeHeader: string,
        /**
         * Project ID or project name
         */
        project: string,
        fileName?: string,
    }): CancelablePromise<AttachmentReference> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/{organization}/{project}/_apis/wit/attachments/{id}',
            path: {
                'organization': organization,
                'id': id,
                'project': project,
            },
            headers: {
                'contentRangeHeader': contentRangeHeader,
            },
            query: {
                'fileName': fileName,
            },
            body: body,
        });
    }
}
