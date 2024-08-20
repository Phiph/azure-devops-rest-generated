/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WidgetMetadataResponse } from '../models/WidgetMetadataResponse';
import type { WidgetTypesResponse } from '../models/WidgetTypesResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class WidgetTypesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get all available widget metadata in alphabetical order, including widgets marked with isVisibleFromCatalog == false.
     * @returns WidgetTypesResponse successful operation
     * @throws ApiError
     */
    public widgetTypesGetWidgetTypes({
        organization,
        scope,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        scope: 'collection_User' | 'project_Team',
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<WidgetTypesResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/dashboard/widgettypes',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                '$scope': scope,
            },
        });
    }
    /**
     * Get the widget metadata satisfying the specified contribution ID.
     * @returns WidgetMetadataResponse successful operation
     * @throws ApiError
     */
    public widgetTypesGetWidgetMetadata({
        organization,
        contributionId,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The ID of Contribution for the Widget
         */
        contributionId: string,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<WidgetMetadataResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/dashboard/widgettypes/{contributionId}',
            path: {
                'organization': organization,
                'contributionId': contributionId,
                'project': project,
            },
        });
    }
}
