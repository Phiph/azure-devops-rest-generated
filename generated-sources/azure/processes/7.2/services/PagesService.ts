/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Page } from '../models/Page';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PagesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Adds a page to the work item form.
     * @returns Page successful operation
     * @throws ApiError
     */
    public pagesAdd({
        organization,
        body,
        processId,
        witRefName,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The page.
         */
        body: Page,
        /**
         * The ID of the process.
         */
        processId: string,
        /**
         * The reference name of the work item type.
         */
        witRefName: string,
    }): CancelablePromise<Page> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/_apis/work/processes/{processId}/workItemTypes/{witRefName}/layout/pages',
            path: {
                'organization': organization,
                'processId': processId,
                'witRefName': witRefName,
            },
            body: body,
        });
    }
    /**
     * Updates a page on the work item form
     * @returns Page successful operation
     * @throws ApiError
     */
    public pagesUpdate({
        organization,
        body,
        processId,
        witRefName,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The page
         */
        body: Page,
        /**
         * The ID of the process
         */
        processId: string,
        /**
         * The reference name of the work item type
         */
        witRefName: string,
    }): CancelablePromise<Page> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/_apis/work/processes/{processId}/workItemTypes/{witRefName}/layout/pages',
            path: {
                'organization': organization,
                'processId': processId,
                'witRefName': witRefName,
            },
            body: body,
        });
    }
    /**
     * Removes a page from the work item form
     * @returns any successful operation
     * @throws ApiError
     */
    public pagesRemovePage({
        organization,
        processId,
        witRefName,
        pageId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The ID of the process
         */
        processId: string,
        /**
         * The reference name of the work item type
         */
        witRefName: string,
        /**
         * The ID of the page
         */
        pageId: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/_apis/work/processes/{processId}/workItemTypes/{witRefName}/layout/pages/{pageId}',
            path: {
                'organization': organization,
                'processId': processId,
                'witRefName': witRefName,
                'pageId': pageId,
            },
        });
    }
}
