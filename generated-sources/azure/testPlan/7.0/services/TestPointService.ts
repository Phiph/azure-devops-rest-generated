/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TestPoint } from '../models/TestPoint';
import type { TestPointUpdateParams } from '../models/TestPointUpdateParams';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TestPointService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get a particular Test Point from a suite.
     * @returns TestPoint successful operation
     * @throws ApiError
     */
    public testPointGetPoints({
        organization,
        project,
        planId,
        suiteId,
        pointId,
        returnIdentityRef,
        includePointDetails,
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
         * ID of the test plan for which test points are requested.
         */
        planId: number,
        /**
         * ID of the test suite for which test points are requested.
         */
        suiteId: number,
        /**
         * ID of test point to be fetched.
         */
        pointId: string,
        /**
         * If set to true, returns the AssignedTo field in TestCaseReference as IdentityRef object.
         */
        returnIdentityRef?: boolean,
        /**
         * If set to false, will get a smaller payload containing only basic details about the test point object
         */
        includePointDetails?: boolean,
    }): CancelablePromise<Array<TestPoint>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/testplan/Plans/{planId}/Suites/{suiteId}/TestPoint',
            path: {
                'organization': organization,
                'project': project,
                'planId': planId,
                'suiteId': suiteId,
            },
            query: {
                'pointId': pointId,
                'returnIdentityRef': returnIdentityRef,
                'includePointDetails': includePointDetails,
            },
        });
    }
    /**
     * Update Test Points. This is used to Reset test point to active, update the outcome of a test point or update the tester of a test point
     * @returns TestPoint successful operation
     * @throws ApiError
     */
    public testPointUpdate({
        organization,
        body,
        project,
        planId,
        suiteId,
        includePointDetails,
        returnIdentityRef,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * A TestPointUpdateParams Object.
         */
        body: Array<TestPointUpdateParams>,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * ID of the test plan for which test points are requested.
         */
        planId: number,
        /**
         * ID of the test suite for which test points are requested.
         */
        suiteId: number,
        /**
         * If set to false, will get a smaller payload containing only basic details about the test point object
         */
        includePointDetails?: boolean,
        /**
         * If set to true, returns the AssignedTo field in TestCaseReference as IdentityRef object.
         */
        returnIdentityRef?: boolean,
    }): CancelablePromise<Array<TestPoint>> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/testplan/Plans/{planId}/Suites/{suiteId}/TestPoint',
            path: {
                'organization': organization,
                'project': project,
                'planId': planId,
                'suiteId': suiteId,
            },
            query: {
                'includePointDetails': includePointDetails,
                'returnIdentityRef': returnIdentityRef,
            },
            body: body,
        });
    }
}
