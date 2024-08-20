/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AuditActionInfo } from '../models/AuditActionInfo';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ActionsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get all auditable actions filterable by area.
     * @returns AuditActionInfo successful operation
     * @throws ApiError
     */
    public actionsList({
        organization,
        areaName,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Optional. Get actions scoped to area
         */
        areaName?: string,
    }): CancelablePromise<Array<AuditActionInfo>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/audit/actions',
            path: {
                'organization': organization,
            },
            query: {
                'areaName': areaName,
            },
        });
    }
}
