/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Avatar } from '../models/Avatar';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AvatarsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns any successful operation
     * @throws ApiError
     */
    public avatarsDelete({
        subjectDescriptor,
        organization,
    }: {
        subjectDescriptor: string,
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/_apis/graph/Subjects/{subjectDescriptor}/avatars',
            path: {
                'subjectDescriptor': subjectDescriptor,
                'organization': organization,
            },
        });
    }
    /**
     * @returns Avatar successful operation
     * @throws ApiError
     */
    public avatarsGet({
        subjectDescriptor,
        organization,
        size,
        format,
    }: {
        subjectDescriptor: string,
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        size?: 'small' | 'medium' | 'large',
        format?: string,
    }): CancelablePromise<Avatar> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/graph/Subjects/{subjectDescriptor}/avatars',
            path: {
                'subjectDescriptor': subjectDescriptor,
                'organization': organization,
            },
            query: {
                'size': size,
                'format': format,
            },
        });
    }
    /**
     * @returns any successful operation
     * @throws ApiError
     */
    public avatarsSetAvatar({
        body,
        subjectDescriptor,
        organization,
    }: {
        body: Avatar,
        subjectDescriptor: string,
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/{organization}/_apis/graph/Subjects/{subjectDescriptor}/avatars',
            path: {
                'subjectDescriptor': subjectDescriptor,
                'organization': organization,
            },
            body: body,
        });
    }
}
