/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeliveryViewData } from '../models/DeliveryViewData';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DeliverytimelineService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get Delivery View Data
     * @returns DeliveryViewData successful operation
     * @throws ApiError
     */
    public deliverytimelineGet({
        organization,
        project,
        id,
        revision,
        startDate,
        endDate,
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
         * Identifier for delivery view
         */
        id: string,
        /**
         * Revision of the plan for which you want data. If the current plan is a different revision you will get an ViewRevisionMismatchException exception. If you do not supply a revision you will get data for the latest revision.
         */
        revision?: number,
        /**
         * The start date of timeline
         */
        startDate?: string,
        /**
         * The end date of timeline
         */
        endDate?: string,
    }): CancelablePromise<DeliveryViewData> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/work/plans/{id}/deliverytimeline',
            path: {
                'organization': organization,
                'project': project,
                'id': id,
            },
            query: {
                'revision': revision,
                'startDate': startDate,
                'endDate': endDate,
            },
        });
    }
}
