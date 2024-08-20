/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PickList } from '../models/PickList';
import type { PickListMetadata } from '../models/PickListMetadata';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ListsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates a picklist.
     * @returns PickList successful operation
     * @throws ApiError
     */
    public listsCreate({
        organization,
        body,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Picklist
         */
        body: PickList,
    }): CancelablePromise<PickList> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/_apis/work/processes/lists',
            path: {
                'organization': organization,
            },
            body: body,
        });
    }
    /**
     * Returns meta data of the picklist.
     * @returns PickListMetadata successful operation
     * @throws ApiError
     */
    public listsList({
        organization,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
    }): CancelablePromise<Array<PickListMetadata>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/work/processes/lists',
            path: {
                'organization': organization,
            },
        });
    }
    /**
     * Removes a picklist.
     * @returns any successful operation
     * @throws ApiError
     */
    public listsDelete({
        organization,
        listId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The ID of the list
         */
        listId: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/_apis/work/processes/lists/{listId}',
            path: {
                'organization': organization,
                'listId': listId,
            },
        });
    }
    /**
     * Returns a picklist.
     * @returns PickList successful operation
     * @throws ApiError
     */
    public listsGet({
        organization,
        listId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The ID of the list
         */
        listId: string,
    }): CancelablePromise<PickList> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/work/processes/lists/{listId}',
            path: {
                'organization': organization,
                'listId': listId,
            },
        });
    }
    /**
     * Updates a list.
     * @returns PickList successful operation
     * @throws ApiError
     */
    public listsUpdate({
        organization,
        body,
        listId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: PickList,
        /**
         * The ID of the list
         */
        listId: string,
    }): CancelablePromise<PickList> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/{organization}/_apis/work/processes/lists/{listId}',
            path: {
                'organization': organization,
                'listId': listId,
            },
            body: body,
        });
    }
}
