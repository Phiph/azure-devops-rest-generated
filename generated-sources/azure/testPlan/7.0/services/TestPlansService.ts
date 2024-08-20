/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TestPlan } from '../models/TestPlan';
import type { TestPlanCreateParams } from '../models/TestPlanCreateParams';
import type { TestPlanUpdateParams } from '../models/TestPlanUpdateParams';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TestPlansService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create a test plan.
     * @returns TestPlan successful operation
     * @throws ApiError
     */
    public testPlansCreate({
        organization,
        body,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * A testPlanCreateParams object.TestPlanCreateParams
         */
        body: TestPlanCreateParams,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<TestPlan> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/testplan/plans',
            path: {
                'organization': organization,
                'project': project,
            },
            body: body,
        });
    }
    /**
     * Get a list of test plans
     * @returns TestPlan successful operation
     * @throws ApiError
     */
    public testPlansList({
        organization,
        project,
        owner,
        continuationToken,
        includePlanDetails,
        filterActivePlans,
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
         * Filter for test plan by owner ID or name
         */
        owner?: string,
        /**
         * If the list of plans returned is not complete, a continuation token to query next batch of plans is included in the response header as "x-ms-continuationtoken". Omit this parameter to get the first batch of test plans.
         */
        continuationToken?: string,
        /**
         * Get all properties of the test plan
         */
        includePlanDetails?: boolean,
        /**
         * Get just the active plans
         */
        filterActivePlans?: boolean,
    }): CancelablePromise<Array<TestPlan>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/testplan/plans',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'owner': owner,
                'continuationToken': continuationToken,
                'includePlanDetails': includePlanDetails,
                'filterActivePlans': filterActivePlans,
            },
        });
    }
    /**
     * Delete a test plan.
     * @returns any successful operation
     * @throws ApiError
     */
    public testPlansDelete({
        organization,
        project,
        planId,
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
         * ID of the test plan to be deleted.
         */
        planId: number,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/{project}/_apis/testplan/plans/{planId}',
            path: {
                'organization': organization,
                'project': project,
                'planId': planId,
            },
        });
    }
    /**
     * Get a test plan by Id.
     * @returns TestPlan successful operation
     * @throws ApiError
     */
    public testPlansGet({
        organization,
        project,
        planId,
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
         * ID of the test plan to get.
         */
        planId: number,
    }): CancelablePromise<TestPlan> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/testplan/plans/{planId}',
            path: {
                'organization': organization,
                'project': project,
                'planId': planId,
            },
        });
    }
    /**
     * Update a test plan.
     * @returns TestPlan successful operation
     * @throws ApiError
     */
    public testPlansUpdate({
        organization,
        body,
        project,
        planId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * A testPlanUpdateParams object.TestPlanUpdateParams
         */
        body: TestPlanUpdateParams,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * ID of the test plan to be updated.
         */
        planId: number,
    }): CancelablePromise<TestPlan> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/testplan/plans/{planId}',
            path: {
                'organization': organization,
                'project': project,
                'planId': planId,
            },
            body: body,
        });
    }
}
