/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProcessIdModel } from '../models/ProcessIdModel';
import type { ProcessMigrationResultModel } from '../models/ProcessMigrationResultModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ProjectProcessMigrationService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Migrates a project to a different process within the same OOB type. For example, you can only migrate a project from agile/custom-agile to agile/custom-agile.
     * @returns ProcessMigrationResultModel successful operation
     * @throws ApiError
     */
    public projectProcessMigrationMigrateProjectsProcess({
        organization,
        body,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: ProcessIdModel,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<ProcessMigrationResultModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/wit/projectprocessmigration',
            path: {
                'organization': organization,
                'project': project,
            },
            body: body,
        });
    }
}
