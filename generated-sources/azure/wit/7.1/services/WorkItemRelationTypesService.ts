/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkItemRelationType } from '../models/WorkItemRelationType';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class WorkItemRelationTypesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets the work item relation types.
     * @returns WorkItemRelationType successful operation
     * @throws ApiError
     */
    public workItemRelationTypesList({
        organization,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
    }): CancelablePromise<Array<WorkItemRelationType>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/wit/workitemrelationtypes',
            path: {
                'organization': organization,
            },
        });
    }
    /**
     * Gets the work item relation type definition.
     * @returns WorkItemRelationType successful operation
     * @throws ApiError
     */
    public workItemRelationTypesGet({
        organization,
        relation,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The relation name
         */
        relation: string,
    }): CancelablePromise<WorkItemRelationType> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/wit/workitemrelationtypes/{relation}',
            path: {
                'organization': organization,
                'relation': relation,
            },
        });
    }
}
