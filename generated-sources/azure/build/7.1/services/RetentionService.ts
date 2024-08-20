/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProjectRetentionSetting } from '../models/ProjectRetentionSetting';
import type { UpdateProjectRetentionSettingModel } from '../models/UpdateProjectRetentionSettingModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class RetentionService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets the project's retention settings.
     * @returns ProjectRetentionSetting successful operation
     * @throws ApiError
     */
    public retentionGet({
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
    }): CancelablePromise<ProjectRetentionSetting> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/build/retention',
            path: {
                'organization': organization,
                'project': project,
            },
        });
    }
    /**
     * Updates the project's retention settings.
     * @returns ProjectRetentionSetting successful operation
     * @throws ApiError
     */
    public retentionUpdate({
        organization,
        body,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: UpdateProjectRetentionSettingModel,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<ProjectRetentionSetting> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/build/retention',
            path: {
                'organization': organization,
                'project': project,
            },
            body: body,
        });
    }
}
