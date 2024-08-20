/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Dashboard } from '../models/Dashboard';
import type { DashboardGroup } from '../models/DashboardGroup';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DashboardsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create the supplied dashboard.
     * @returns Dashboard successful operation
     * @throws ApiError
     */
    public dashboardsCreate({
        organization,
        body,
        project,
        team,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The initial state of the dashboard
         */
        body: Dashboard,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Team ID or team name
         */
        team: string,
    }): CancelablePromise<Dashboard> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/{team}/_apis/dashboard/dashboards',
            path: {
                'organization': organization,
                'project': project,
                'team': team,
            },
            body: body,
        });
    }
    /**
     * Get a list of dashboards under a project.
     * @returns Dashboard successful operation
     * @throws ApiError
     */
    public dashboardsList({
        organization,
        project,
        team,
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
         * Team ID or team name
         */
        team: string,
    }): CancelablePromise<Array<Dashboard>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/{team}/_apis/dashboard/dashboards',
            path: {
                'organization': organization,
                'project': project,
                'team': team,
            },
        });
    }
    /**
     * Update the name and position of dashboards in the supplied group, and remove omitted dashboards. Does not modify dashboard content.
     * @returns DashboardGroup successful operation
     * @throws ApiError
     */
    public dashboardsReplaceDashboards({
        organization,
        body,
        project,
        team,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: DashboardGroup,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Team ID or team name
         */
        team: string,
    }): CancelablePromise<DashboardGroup> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/{organization}/{project}/{team}/_apis/dashboard/dashboards',
            path: {
                'organization': organization,
                'project': project,
                'team': team,
            },
            body: body,
        });
    }
    /**
     * Delete a dashboard given its ID. This also deletes the widgets associated with this dashboard.
     * @returns any successful operation
     * @throws ApiError
     */
    public dashboardsDelete({
        organization,
        project,
        dashboardId,
        team,
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
         * ID of the dashboard to delete.
         */
        dashboardId: string,
        /**
         * Team ID or team name
         */
        team: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/{project}/{team}/_apis/dashboard/dashboards/{dashboardId}',
            path: {
                'organization': organization,
                'project': project,
                'dashboardId': dashboardId,
                'team': team,
            },
        });
    }
    /**
     * Get a dashboard by its ID.
     * @returns Dashboard successful operation
     * @throws ApiError
     */
    public dashboardsGet({
        organization,
        project,
        dashboardId,
        team,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Project ID or project name
         */
        project: string,
        dashboardId: string,
        /**
         * Team ID or team name
         */
        team: string,
    }): CancelablePromise<Dashboard> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/{team}/_apis/dashboard/dashboards/{dashboardId}',
            path: {
                'organization': organization,
                'project': project,
                'dashboardId': dashboardId,
                'team': team,
            },
        });
    }
    /**
     * Replace configuration for the specified dashboard. Replaces Widget list on Dashboard, only if property is supplied.
     * @returns Dashboard successful operation
     * @throws ApiError
     */
    public dashboardsReplaceDashboard({
        organization,
        body,
        project,
        dashboardId,
        team,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The Configuration of the dashboard to replace.
         */
        body: Dashboard,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * ID of the dashboard to replace.
         */
        dashboardId: string,
        /**
         * Team ID or team name
         */
        team: string,
    }): CancelablePromise<Dashboard> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/{organization}/{project}/{team}/_apis/dashboard/dashboards/{dashboardId}',
            path: {
                'organization': organization,
                'project': project,
                'dashboardId': dashboardId,
                'team': team,
            },
            body: body,
        });
    }
}
