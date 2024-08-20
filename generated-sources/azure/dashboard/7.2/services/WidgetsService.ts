/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Dashboard } from '../models/Dashboard';
import type { Widget } from '../models/Widget';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class WidgetsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create a widget on the specified dashboard.
     * @returns Widget successful operation
     * @throws ApiError
     */
    public widgetsCreate({
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
         * State of the widget to add
         */
        body: Widget,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * ID of dashboard the widget will be added to.
         */
        dashboardId: string,
        /**
         * Team ID or team name
         */
        team: string,
    }): CancelablePromise<Widget> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/{team}/_apis/dashboard/dashboards/{dashboardId}/widgets',
            path: {
                'organization': organization,
                'project': project,
                'dashboardId': dashboardId,
                'team': team,
            },
            body: body,
        });
    }
    /**
     * Get widgets contained on the specified dashboard.
     * @returns Widget successful operation
     * @throws ApiError
     */
    public widgetsGetWidgets({
        organization,
        project,
        dashboardId,
        team,
        eTag,
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
         * ID of the dashboard to read.
         */
        dashboardId: string,
        /**
         * Team ID or team name
         */
        team: string,
        /**
         * Dashboard Widgets Version
         */
        eTag?: string,
    }): CancelablePromise<Array<Widget>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/{team}/_apis/dashboard/dashboards/{dashboardId}/widgets',
            path: {
                'organization': organization,
                'project': project,
                'dashboardId': dashboardId,
                'team': team,
            },
            headers: {
                'eTag': eTag,
            },
        });
    }
    /**
     * Replace the widgets on specified dashboard with the supplied widgets.
     * @returns Widget successful operation
     * @throws ApiError
     */
    public widgetsReplaceWidgets({
        organization,
        body,
        project,
        dashboardId,
        team,
        eTag,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Revised state of widgets to store for the dashboard.
         */
        body: Array<Widget>,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * ID of the Dashboard to modify.
         */
        dashboardId: string,
        /**
         * Team ID or team name
         */
        team: string,
        /**
         * Dashboard Widgets Version
         */
        eTag?: string,
    }): CancelablePromise<Array<Widget>> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/{organization}/{project}/{team}/_apis/dashboard/dashboards/{dashboardId}/widgets',
            path: {
                'organization': organization,
                'project': project,
                'dashboardId': dashboardId,
                'team': team,
            },
            headers: {
                'eTag': eTag,
            },
            body: body,
        });
    }
    /**
     * Update the supplied widgets on the dashboard using supplied state. State of existing Widgets not passed in the widget list is preserved.
     * @returns Widget successful operation
     * @throws ApiError
     */
    public widgetsUpdateWidgets({
        organization,
        body,
        project,
        dashboardId,
        team,
        eTag,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The set of widget states to update on the dashboard.
         */
        body: Array<Widget>,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * ID of the Dashboard to modify.
         */
        dashboardId: string,
        /**
         * Team ID or team name
         */
        team: string,
        /**
         * Dashboard Widgets Version
         */
        eTag?: string,
    }): CancelablePromise<Array<Widget>> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/{team}/_apis/dashboard/dashboards/{dashboardId}/widgets',
            path: {
                'organization': organization,
                'project': project,
                'dashboardId': dashboardId,
                'team': team,
            },
            headers: {
                'eTag': eTag,
            },
            body: body,
        });
    }
    /**
     * Delete the specified widget.
     * @returns Dashboard successful operation
     * @throws ApiError
     */
    public widgetsDelete({
        organization,
        project,
        dashboardId,
        widgetId,
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
         * ID of the dashboard containing the widget.
         */
        dashboardId: string,
        /**
         * ID of the widget to update.
         */
        widgetId: string,
        /**
         * Team ID or team name
         */
        team: string,
    }): CancelablePromise<Dashboard> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/{project}/{team}/_apis/dashboard/dashboards/{dashboardId}/widgets/{widgetId}',
            path: {
                'organization': organization,
                'project': project,
                'dashboardId': dashboardId,
                'widgetId': widgetId,
                'team': team,
            },
        });
    }
    /**
     * Get the current state of the specified widget.
     * @returns Widget successful operation
     * @throws ApiError
     */
    public widgetsGetWidget({
        organization,
        project,
        dashboardId,
        widgetId,
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
         * ID of the dashboard containing the widget.
         */
        dashboardId: string,
        /**
         * ID of the widget to read.
         */
        widgetId: string,
        /**
         * Team ID or team name
         */
        team: string,
    }): CancelablePromise<Widget> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/{team}/_apis/dashboard/dashboards/{dashboardId}/widgets/{widgetId}',
            path: {
                'organization': organization,
                'project': project,
                'dashboardId': dashboardId,
                'widgetId': widgetId,
                'team': team,
            },
        });
    }
    /**
     * Override the  state of the specified widget.
     * @returns Widget successful operation
     * @throws ApiError
     */
    public widgetsReplaceWidget({
        organization,
        body,
        project,
        dashboardId,
        widgetId,
        team,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * State to be written for the widget.
         */
        body: Widget,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * ID of the dashboard containing the widget.
         */
        dashboardId: string,
        /**
         * ID of the widget to update.
         */
        widgetId: string,
        /**
         * Team ID or team name
         */
        team: string,
    }): CancelablePromise<Widget> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/{organization}/{project}/{team}/_apis/dashboard/dashboards/{dashboardId}/widgets/{widgetId}',
            path: {
                'organization': organization,
                'project': project,
                'dashboardId': dashboardId,
                'widgetId': widgetId,
                'team': team,
            },
            body: body,
        });
    }
    /**
     * Perform a partial update of the specified widget.
     * @returns Widget successful operation
     * @throws ApiError
     */
    public widgetsUpdateWidget({
        organization,
        body,
        project,
        dashboardId,
        widgetId,
        team,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Description of the widget changes to apply. All non-null fields will be replaced.
         */
        body: Widget,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * ID of the dashboard containing the widget.
         */
        dashboardId: string,
        /**
         * ID of the widget to update.
         */
        widgetId: string,
        /**
         * Team ID or team name
         */
        team: string,
    }): CancelablePromise<Widget> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/{team}/_apis/dashboard/dashboards/{dashboardId}/widgets/{widgetId}',
            path: {
                'organization': organization,
                'project': project,
                'dashboardId': dashboardId,
                'widgetId': widgetId,
                'team': team,
            },
            body: body,
        });
    }
}
