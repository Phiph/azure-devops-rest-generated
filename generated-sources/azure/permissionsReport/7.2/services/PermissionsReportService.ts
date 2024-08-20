/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PermissionsReport } from '../models/PermissionsReport';
import type { PermissionsReportRequest } from '../models/PermissionsReportRequest';
import type { ReferenceLinks } from '../models/ReferenceLinks';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PermissionsReportService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Request a permissions report to be created asyncronously
     * @returns ReferenceLinks successful operation
     * @throws ApiError
     */
    public permissionsReportCreate({
        organization,
        body,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Request configuration to be included in the permissions report
         */
        body: PermissionsReportRequest,
    }): CancelablePromise<ReferenceLinks> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/_apis/permissionsreport',
            path: {
                'organization': organization,
            },
            body: body,
        });
    }
    /**
     * Get a list of permissions reports
     * @returns PermissionsReport successful operation
     * @throws ApiError
     */
    public permissionsReportList({
        organization,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
    }): CancelablePromise<Array<PermissionsReport>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/permissionsreport',
            path: {
                'organization': organization,
            },
        });
    }
    /**
     * Get a specific permissions report
     * @returns PermissionsReport successful operation
     * @throws ApiError
     */
    public permissionsReportGet({
        organization,
        id,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The ID (GUID) of the permissions report
         */
        id: string,
    }): CancelablePromise<PermissionsReport> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/permissionsreport/{id}',
            path: {
                'organization': organization,
                'id': id,
            },
        });
    }
}
