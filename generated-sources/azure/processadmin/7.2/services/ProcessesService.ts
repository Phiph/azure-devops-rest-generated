/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProcessImportResult } from '../models/ProcessImportResult';
import type { ProcessPromoteStatus } from '../models/ProcessPromoteStatus';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ProcessesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Returns requested process template.
     * @returns string successful operation
     * @throws ApiError
     */
    public processesExportProcessTemplate({
        organization,
        id,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The ID of the process
         */
        id: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/work/processadmin/processes/export/{id}',
            path: {
                'organization': organization,
                'id': id,
            },
        });
    }
    /**
     * Imports a process from zip file.
     * @returns ProcessImportResult successful operation
     * @throws ApiError
     */
    public processesImportProcessTemplate({
        organization,
        body,
        ignoreWarnings,
        replaceExistingTemplate,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Stream to upload
         */
        body: string,
        /**
         * Ignores validation warnings. Default value is false.
         */
        ignoreWarnings?: boolean,
        /**
         * Replaces the existing template. Default value is true.
         */
        replaceExistingTemplate?: boolean,
    }): CancelablePromise<ProcessImportResult> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/_apis/work/processadmin/processes/import',
            path: {
                'organization': organization,
            },
            query: {
                'ignoreWarnings': ignoreWarnings,
                'replaceExistingTemplate': replaceExistingTemplate,
            },
            body: body,
        });
    }
    /**
     * Tells whether promote has completed for the specified promote job ID.
     * @returns ProcessPromoteStatus successful operation
     * @throws ApiError
     */
    public processesImportProcessTemplateStatus({
        organization,
        id,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The ID of the promote job operation
         */
        id: string,
    }): CancelablePromise<ProcessPromoteStatus> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/work/processadmin/processes/status/{id}',
            path: {
                'organization': organization,
                'id': id,
            },
        });
    }
}
