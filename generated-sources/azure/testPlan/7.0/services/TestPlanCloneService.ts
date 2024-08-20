/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CloneTestPlanOperationInformation } from '../models/CloneTestPlanOperationInformation';
import type { CloneTestPlanParams } from '../models/CloneTestPlanParams';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TestPlanCloneService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Clone test plan
     * @returns CloneTestPlanOperationInformation successful operation
     * @throws ApiError
     */
    public testPlanCloneCloneTestPlan({
        organization,
        body,
        project,
        deepClone,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Plan Clone Request Body detail TestPlanCloneRequest
         */
        body: CloneTestPlanParams,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Clones all the associated test cases as well
         */
        deepClone?: boolean,
    }): CancelablePromise<CloneTestPlanOperationInformation> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/testplan/Plans/CloneOperation',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'deepClone': deepClone,
            },
            body: body,
        });
    }
    /**
     * Get clone information.
     * @returns CloneTestPlanOperationInformation successful operation
     * @throws ApiError
     */
    public testPlanCloneGet({
        organization,
        project,
        cloneOperationId,
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
         * Operation ID returned when we queue a clone operation
         */
        cloneOperationId: number,
    }): CancelablePromise<CloneTestPlanOperationInformation> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/testplan/Plans/CloneOperation/{cloneOperationId}',
            path: {
                'organization': organization,
                'project': project,
                'cloneOperationId': cloneOperationId,
            },
        });
    }
}
