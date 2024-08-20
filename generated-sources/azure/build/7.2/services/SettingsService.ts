/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuildSettings } from '../models/BuildSettings';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SettingsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets the build settings.
     * @returns BuildSettings successful operation
     * @throws ApiError
     */
    public settingsGet({
        organization,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<BuildSettings> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/build/settings',
            path: {
                'organization': organization,
                'project': project,
            },
        });
    }
    /**
     * Updates the build settings.
     * @returns BuildSettings successful operation
     * @throws ApiError
     */
    public settingsUpdate({
        organization,
        body,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The new settings.
         */
        body: BuildSettings,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<BuildSettings> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/build/settings',
            path: {
                'organization': organization,
                'project': project,
            },
            body: body,
        });
    }
}
