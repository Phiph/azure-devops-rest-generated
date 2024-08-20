/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NotificationAdminSettings } from '../models/NotificationAdminSettings';
import type { NotificationAdminSettingsUpdateParameters } from '../models/NotificationAdminSettingsUpdateParameters';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SettingsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns NotificationAdminSettings successful operation
     * @throws ApiError
     */
    public settingsGet({
        organization,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
    }): CancelablePromise<NotificationAdminSettings> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/notification/settings',
            path: {
                'organization': organization,
            },
        });
    }
    /**
     * @returns NotificationAdminSettings successful operation
     * @throws ApiError
     */
    public settingsUpdate({
        body,
        organization,
    }: {
        body: NotificationAdminSettingsUpdateParameters,
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
    }): CancelablePromise<NotificationAdminSettings> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/_apis/notification/settings',
            path: {
                'organization': organization,
            },
            body: body,
        });
    }
}
