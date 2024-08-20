/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreatePlan } from '../models/CreatePlan';
import type { Plan } from '../models/Plan';
import type { UpdatePlan } from '../models/UpdatePlan';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PlansService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Add a new plan for the team
     * @returns Plan successful operation
     * @throws ApiError
     */
    public plansCreate({
        organization,
        body,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Plan definition
         */
        body: CreatePlan,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<Plan> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/work/plans',
            path: {
                'organization': organization,
                'project': project,
            },
            body: body,
        });
    }
    /**
     * Get the information for all the plans configured for the given team
     * @returns Plan successful operation
     * @throws ApiError
     */
    public plansList({
        organization,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<Array<Plan>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/work/plans',
            path: {
                'organization': organization,
                'project': project,
            },
        });
    }
    /**
     * Delete the specified plan
     * @returns any successful operation
     * @throws ApiError
     */
    public plansDelete({
        organization,
        project,
        id,
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
         * Identifier of the plan
         */
        id: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/{project}/_apis/work/plans/{id}',
            path: {
                'organization': organization,
                'project': project,
                'id': id,
            },
        });
    }
    /**
     * Get the information for the specified plan
     * @returns Plan successful operation
     * @throws ApiError
     */
    public plansGet({
        organization,
        project,
        id,
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
         * Identifier of the plan
         */
        id: string,
    }): CancelablePromise<Plan> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/work/plans/{id}',
            path: {
                'organization': organization,
                'project': project,
                'id': id,
            },
        });
    }
    /**
     * Update the information for the specified plan
     * @returns Plan successful operation
     * @throws ApiError
     */
    public plansUpdate({
        organization,
        body,
        project,
        id,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Plan definition to be updated
         */
        body: UpdatePlan,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Identifier of the plan
         */
        id: string,
    }): CancelablePromise<Plan> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/{organization}/{project}/_apis/work/plans/{id}',
            path: {
                'organization': organization,
                'project': project,
                'id': id,
            },
            body: body,
        });
    }
}
