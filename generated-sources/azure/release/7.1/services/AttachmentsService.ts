/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReleaseTaskAttachment } from '../models/ReleaseTaskAttachment';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AttachmentsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get the release task attachments.
     * @returns ReleaseTaskAttachment successful operation
     * @throws ApiError
     */
    public attachmentsGetReleaseTaskAttachments({
        organization,
        project,
        releaseId,
        environmentId,
        attemptId,
        planId,
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
         * Id of the release.
         */
        releaseId: number,
        /**
         * Id of the release environment.
         */
        environmentId: number,
        /**
         * Attempt number of deployment.
         */
        attemptId: number,
        /**
         * Plan Id of the deploy phase.
         */
        planId: string,
        /**
         * Type of the attachment.
         */
        type: string,
    }): CancelablePromise<Array<ReleaseTaskAttachment>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/release/releases/{releaseId}/environments/{environmentId}/attempts/{attemptId}/plan/{planId}/attachments/{type}',
            path: {
                'organization': organization,
                'project': project,
                'releaseId': releaseId,
                'environmentId': environmentId,
                'attemptId': attemptId,
                'planId': planId,
                'type': type,
            },
        });
    }
    /**
     * Get a release task attachment.
     * @returns string successful operation
     * @throws ApiError
     */
    public attachmentsGetReleaseTaskAttachmentContent({
        organization,
        project,
        releaseId,
        environmentId,
        attemptId,
        planId,
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
         * Id of the release.
         */
        releaseId: number,
        /**
         * Id of the release environment.
         */
        environmentId: number,
        /**
         * Attempt number of deployment.
         */
        attemptId: number,
        /**
         * Plan Id of the deploy phase.
         */
        planId: string,
        /**
         * Timeline Id of the task.
         */
        timelineId: string,
        /**
         * Record Id of attachment.
         */
        recordId: string,
        /**
         * Type of the attachment.
         */
        type: string,
        /**
         * Name of the attachment.
         */
        name: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/release/releases/{releaseId}/environments/{environmentId}/attempts/{attemptId}/plan/{planId}/timelines/{timelineId}/records/{recordId}/attachments/{type}/{name}',
            path: {
                'organization': organization,
                'project': project,
                'releaseId': releaseId,
                'environmentId': environmentId,
                'attemptId': attemptId,
                'planId': planId,
                'timelineId': timelineId,
                'recordId': recordId,
                'type': type,
                'name': name,
            },
        });
    }
    /**
     * @deprecated
     * GetTaskAttachments API is deprecated. Use GetReleaseTaskAttachments API instead.
     * @returns ReleaseTaskAttachment successful operation
     * @throws ApiError
     */
    public attachmentsGetTaskAttachments({
        organization,
        project,
        releaseId,
        environmentId,
        attemptId,
        timelineId,
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
         * Id of the release.
         */
        releaseId: number,
        /**
         * Id of the release environment.
         */
        environmentId: number,
        /**
         * Attempt number of deployment.
         */
        attemptId: number,
        /**
         * Timeline Id of the task.
         */
        timelineId: string,
        /**
         * Type of the attachment.
         */
        type: string,
    }): CancelablePromise<Array<ReleaseTaskAttachment>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/release/releases/{releaseId}/environments/{environmentId}/attempts/{attemptId}/timelines/{timelineId}/attachments/{type}',
            path: {
                'organization': organization,
                'project': project,
                'releaseId': releaseId,
                'environmentId': environmentId,
                'attemptId': attemptId,
                'timelineId': timelineId,
                'type': type,
            },
        });
    }
    /**
     * @deprecated
     * GetTaskAttachmentContent API is deprecated. Use GetReleaseTaskAttachmentContent API instead.
     * @returns string successful operation
     * @throws ApiError
     */
    public attachmentsGetTaskAttachmentContent({
        organization,
        project,
        releaseId,
        environmentId,
        attemptId,
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
         * Id of the release.
         */
        releaseId: number,
        /**
         * Id of the release environment.
         */
        environmentId: number,
        /**
         * Attempt number of deployment.
         */
        attemptId: number,
        /**
         * Timeline Id of the task.
         */
        timelineId: string,
        /**
         * Record Id of attachment.
         */
        recordId: string,
        /**
         * Type of the attachment.
         */
        type: string,
        /**
         * Name of the attachment.
         */
        name: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/release/releases/{releaseId}/environments/{environmentId}/attempts/{attemptId}/timelines/{timelineId}/records/{recordId}/attachments/{type}/{name}',
            path: {
                'organization': organization,
                'project': project,
                'releaseId': releaseId,
                'environmentId': environmentId,
                'attemptId': attemptId,
                'timelineId': timelineId,
                'recordId': recordId,
                'type': type,
                'name': name,
            },
        });
    }
}
