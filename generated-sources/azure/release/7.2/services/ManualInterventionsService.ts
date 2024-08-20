/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ManualIntervention } from '../models/ManualIntervention';
import type { ManualInterventionUpdateMetadata } from '../models/ManualInterventionUpdateMetadata';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ManualInterventionsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List all manual interventions for a given release.
     * @returns ManualIntervention successful operation
     * @throws ApiError
     */
    public manualInterventionsList({
        organization,
        project,
        releaseId,
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
         * Id of the release.
         */
        releaseId: number,
    }): CancelablePromise<Array<ManualIntervention>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/Release/releases/{releaseId}/manualinterventions',
            path: {
                'organization': organization,
                'project': project,
                'releaseId': releaseId,
            },
        });
    }
    /**
     * Get manual intervention for a given release and manual intervention id.
     * @returns ManualIntervention successful operation
     * @throws ApiError
     */
    public manualInterventionsGet({
        organization,
        project,
        releaseId,
        manualInterventionId,
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
         * Id of the release.
         */
        releaseId: number,
        /**
         * Id of the manual intervention.
         */
        manualInterventionId: number,
    }): CancelablePromise<ManualIntervention> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/Release/releases/{releaseId}/manualinterventions/{manualInterventionId}',
            path: {
                'organization': organization,
                'project': project,
                'releaseId': releaseId,
                'manualInterventionId': manualInterventionId,
            },
        });
    }
    /**
     * Update manual intervention.
     * @returns ManualIntervention successful operation
     * @throws ApiError
     */
    public manualInterventionsUpdate({
        organization,
        body,
        project,
        releaseId,
        manualInterventionId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Meta data to update manual intervention.
         */
        body: ManualInterventionUpdateMetadata,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Id of the release.
         */
        releaseId: number,
        /**
         * Id of the manual intervention.
         */
        manualInterventionId: number,
    }): CancelablePromise<ManualIntervention> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/Release/releases/{releaseId}/manualinterventions/{manualInterventionId}',
            path: {
                'organization': organization,
                'project': project,
                'releaseId': releaseId,
                'manualInterventionId': manualInterventionId,
            },
            body: body,
        });
    }
}
