/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PointUpdateModel } from '../models/PointUpdateModel';
import type { TestPoint } from '../models/TestPoint';
import type { TestPointsQuery } from '../models/TestPointsQuery';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PointsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get a list of test points.
     * @returns TestPoint successful operation
     * @throws ApiError
     */
    public pointsList({
        organization,
        project,
        planId,
        suiteId,
        witFields,
        configurationId,
        testCaseId,
        testPointIds,
        includePointDetails,
        skip,
        top,
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
         * ID of the test plan.
         */
        planId: number,
        /**
         * ID of the suite that contains the points.
         */
        suiteId: number,
        /**
         * Comma-separated list of work item field names.
         */
        witFields?: string,
        /**
         * Get test points for specific configuration.
         */
        configurationId?: string,
        /**
         * Get test points for a specific test case, valid when configurationId is not set.
         */
        testCaseId?: string,
        /**
         * Get test points for comma-separated list of test point IDs, valid only when configurationId and testCaseId are not set.
         */
        testPointIds?: string,
        /**
         * Include all properties for the test point.
         */
        includePointDetails?: boolean,
        /**
         * Number of test points to skip..
         */
        skip?: number,
        /**
         * Number of test points to return.
         */
        top?: number,
    }): CancelablePromise<Array<TestPoint>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/test/Plans/{planId}/Suites/{suiteId}/points',
            path: {
                'organization': organization,
                'project': project,
                'planId': planId,
                'suiteId': suiteId,
            },
            query: {
                'witFields': witFields,
                'configurationId': configurationId,
                'testCaseId': testCaseId,
                'testPointIds': testPointIds,
                'includePointDetails': includePointDetails,
                '$skip': skip,
                '$top': top,
            },
        });
    }
    /**
     * Get a test point.
     * @returns TestPoint successful operation
     * @throws ApiError
     */
    public pointsGetPoint({
        organization,
        project,
        planId,
        suiteId,
        pointIds,
        witFields,
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
         * ID of the test plan.
         */
        planId: number,
        /**
         * ID of the suite that contains the point.
         */
        suiteId: number,
        /**
         * ID of the test point to get.
         */
        pointIds: number,
        /**
         * Comma-separated list of work item field names.
         */
        witFields?: string,
    }): CancelablePromise<TestPoint> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/test/Plans/{planId}/Suites/{suiteId}/points/{pointIds}',
            path: {
                'organization': organization,
                'project': project,
                'planId': planId,
                'suiteId': suiteId,
                'pointIds': pointIds,
            },
            query: {
                'witFields': witFields,
            },
        });
    }
    /**
     * Update test points.
     * @returns TestPoint successful operation
     * @throws ApiError
     */
    public pointsUpdate({
        organization,
        body,
        project,
        planId,
        suiteId,
        pointIds,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Data to update.
         */
        body: PointUpdateModel,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * ID of the test plan.
         */
        planId: number,
        /**
         * ID of the suite that contains the points.
         */
        suiteId: number,
        /**
         * ID of the test point to get. Use a comma-separated list of IDs to update multiple test points.
         */
        pointIds: string,
    }): CancelablePromise<Array<TestPoint>> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/test/Plans/{planId}/Suites/{suiteId}/points/{pointIds}',
            path: {
                'organization': organization,
                'project': project,
                'planId': planId,
                'suiteId': suiteId,
                'pointIds': pointIds,
            },
            body: body,
        });
    }
    /**
     * Get test points using query.
     * @returns TestPointsQuery successful operation
     * @throws ApiError
     */
    public pointsGetPointsByQuery({
        organization,
        body,
        project,
        skip,
        top,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * TestPointsQuery to get test points.
         */
        body: TestPointsQuery,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Number of test points to skip..
         */
        skip?: number,
        /**
         * Number of test points to return.
         */
        top?: number,
    }): CancelablePromise<TestPointsQuery> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/test/points',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                '$skip': skip,
                '$top': top,
            },
            body: body,
        });
    }
}
