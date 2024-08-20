/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Attachment } from '../models/Attachment';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AttachmentsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets a specific attachment.
     * @returns string successful operation
     * @throws ApiError
     */
    public attachmentsGet({
        organization,
        project,
        buildId,
        timelineId,
        recordId,
        type,
        name,
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
         * The ID of the build.
         */
        buildId: number,
        /**
         * The ID of the timeline.
         */
        timelineId: string,
        /**
         * The ID of the timeline record.
         */
        recordId: string,
        /**
         * The type of the attachment.
         */
        type: string,
        /**
         * The name of the attachment.
         */
        name: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/build/builds/{buildId}/{timelineId}/{recordId}/attachments/{type}/{name}',
            path: {
                'organization': organization,
                'project': project,
                'buildId': buildId,
                'timelineId': timelineId,
                'recordId': recordId,
                'type': type,
                'name': name,
            },
        });
    }
    /**
     * Gets the list of attachments of a specific type that are associated with a build.
     * @returns Attachment successful operation
     * @throws ApiError
     */
    public attachmentsList({
        organization,
        project,
        buildId,
        type,
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
         * The ID of the build.
         */
        buildId: number,
        /**
         * The type of attachment.
         */
        type: string,
    }): CancelablePromise<Array<Attachment>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/build/builds/{buildId}/attachments/{type}',
            path: {
                'organization': organization,
                'project': project,
                'buildId': buildId,
                'type': type,
            },
        });
    }
}
