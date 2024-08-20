/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProjectAvatar } from '../models/ProjectAvatar';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AvatarService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Removes the avatar for the project.
     * @returns any successful operation
     * @throws ApiError
     */
    public avatarRemoveProjectAvatar({
        organization,
        projectId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The ID or name of the project.
         */
        projectId: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/_apis/projects/{projectId}/avatar',
            path: {
                'organization': organization,
                'projectId': projectId,
            },
        });
    }
    /**
     * Sets the avatar for the project.
     * @returns any successful operation
     * @throws ApiError
     */
    public avatarSetProjectAvatar({
        organization,
        body,
        projectId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The avatar blob data object to upload.
         */
        body: ProjectAvatar,
        /**
         * The ID or name of the project.
         */
        projectId: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/{organization}/_apis/projects/{projectId}/avatar',
            path: {
                'organization': organization,
                'projectId': projectId,
            },
            body: body,
        });
    }
}
