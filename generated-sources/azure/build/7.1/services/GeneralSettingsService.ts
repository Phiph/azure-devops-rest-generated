/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PipelineGeneralSettings } from '../models/PipelineGeneralSettings';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class GeneralSettingsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets pipeline general settings.
     * @returns PipelineGeneralSettings successful operation
     * @throws ApiError
     */
    public generalSettingsGet({
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
    }): CancelablePromise<PipelineGeneralSettings> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/build/generalsettings',
            path: {
                'organization': organization,
                'project': project,
            },
        });
    }
    /**
     * Updates pipeline general settings.
     * @returns PipelineGeneralSettings successful operation
     * @throws ApiError
     */
    public generalSettingsUpdate({
        organization,
        body,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: PipelineGeneralSettings,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<PipelineGeneralSettings> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/build/generalsettings',
            path: {
                'organization': organization,
                'project': project,
            },
            body: body,
        });
    }
}
