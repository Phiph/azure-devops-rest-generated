/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CloneTestCaseOperationInformation } from '../models/CloneTestCaseOperationInformation';
import type { CloneTestCaseParams } from '../models/CloneTestCaseParams';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TestCaseCloneService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns CloneTestCaseOperationInformation successful operation
     * @throws ApiError
     */
    public testCaseCloneCloneTestCase({
        organization,
        body,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: CloneTestCaseParams,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<CloneTestCaseOperationInformation> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/testplan/TestCases/CloneTestCaseOperation',
            path: {
                'organization': organization,
                'project': project,
            },
            body: body,
        });
    }
    /**
     * Get clone information.
     * @returns CloneTestCaseOperationInformation successful operation
     * @throws ApiError
     */
    public testCaseCloneGet({
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
    }): CancelablePromise<CloneTestCaseOperationInformation> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/testplan/TestCases/CloneTestCaseOperation/{cloneOperationId}',
            path: {
                'organization': organization,
                'project': project,
                'cloneOperationId': cloneOperationId,
            },
        });
    }
}
