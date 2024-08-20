/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TestResultFailureType } from '../models/TestResultFailureType';
import type { TestResultFailureTypeRequestModel } from '../models/TestResultFailureTypeRequestModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TestfailuretypeService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates a new test failure type
     * @returns TestResultFailureType successful operation
     * @throws ApiError
     */
    public testfailuretypeCreate({
        organization,
        body,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: TestResultFailureTypeRequestModel,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<TestResultFailureType> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/testresults/testfailuretype',
            path: {
                'organization': organization,
                'project': project,
            },
            body: body,
        });
    }
    /**
     * Returns the list of test failure types.
     * @returns TestResultFailureType successful operation
     * @throws ApiError
     */
    public testfailuretypeList({
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
    }): CancelablePromise<Array<TestResultFailureType>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/testresults/testfailuretype',
            path: {
                'organization': organization,
                'project': project,
            },
        });
    }
    /**
     * Deletes a test failure type with specified failureTypeId
     * @returns any successful operation
     * @throws ApiError
     */
    public testfailuretypeDelete({
        organization,
        project,
        failureTypeId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Project ID or project name
         */
        project: string,
        failureTypeId: number,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/{project}/_apis/testresults/testfailuretype/{failureTypeId}',
            path: {
                'organization': organization,
                'project': project,
                'failureTypeId': failureTypeId,
            },
        });
    }
}
