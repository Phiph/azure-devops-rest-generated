/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkItemIcon } from '../models/WorkItemIcon';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class WorkItemIconsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get a list of all work item icons.
     * @returns WorkItemIcon successful operation
     * @throws ApiError
     */
    public workItemIconsList({
        organization,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
    }): CancelablePromise<Array<WorkItemIcon>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/wit/workitemicons',
            path: {
                'organization': organization,
            },
        });
    }
    /**
     * Get a work item icon given the friendly name and icon color.
     * @returns WorkItemIcon successful operation
     * @throws ApiError
     */
    public workItemIconsGet({
        icon,
        organization,
        color,
        v,
    }: {
        /**
         * The name of the icon
         */
        icon: string,
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The 6-digit hex color for the icon
         */
        color?: string,
        /**
         * The version of the icon (used only for cache invalidation)
         */
        v?: number,
    }): CancelablePromise<WorkItemIcon> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/wit/workitemicons/{icon}',
            path: {
                'icon': icon,
                'organization': organization,
            },
            query: {
                'color': color,
                'v': v,
            },
        });
    }
}
