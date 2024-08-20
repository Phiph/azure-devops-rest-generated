/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CloneTestSuiteOperationInformation } from '../models/CloneTestSuiteOperationInformation';
import type { CloneTestSuiteParams } from '../models/CloneTestSuiteParams';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TestSuiteCloneService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Clone test suite
     * @returns CloneTestSuiteOperationInformation successful operation
     * @throws ApiError
     */
    public testSuiteCloneCloneTestSuite({
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
         * Suite Clone Request Body detail TestSuiteCloneRequest
         */
        body: CloneTestSuiteParams,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Clones all the associated test cases as well
         */
        deepClone?: boolean,
    }): CancelablePromise<CloneTestSuiteOperationInformation> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/testplan/Suites/CloneOperation',
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
     * @returns CloneTestSuiteOperationInformation successful operation
     * @throws ApiError
     */
    public testSuiteCloneGet({
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
    }): CancelablePromise<CloneTestSuiteOperationInformation> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/testplan/Suites/CloneOperation/{cloneOperationId}',
            path: {
                'organization': organization,
                'project': project,
                'cloneOperationId': cloneOperationId,
            },
        });
    }
}
