/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TestCasesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Delete a test case.
     * @returns any successful operation
     * @throws ApiError
     */
    public testCasesDelete({
        organization,
        project,
        testCaseId,
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
         * Id of test case to delete.
         */
        testCaseId: number,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/{project}/_apis/test/testcases/{testCaseId}',
            path: {
                'organization': organization,
                'project': project,
                'testCaseId': testCaseId,
            },
        });
    }
}
