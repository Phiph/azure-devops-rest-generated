/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JsonPatchDocument } from '../models/JsonPatchDocument';
import type { WorkItem } from '../models/WorkItem';
import type { WorkItemBatchGetRequest } from '../models/WorkItemBatchGetRequest';
import type { WorkItemDelete } from '../models/WorkItemDelete';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class WorkItemsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Returns a list of work items (Maximum 200)
     * @returns WorkItem successful operation
     * @throws ApiError
     */
    public workItemsList({
        organization,
        ids,
        project,
        fields,
        asOf,
        expand,
        errorPolicy,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The comma-separated list of requested work item ids. (Maximum 200 ids allowed).
         */
        ids: string,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Comma-separated list of requested fields
         */
        fields?: string,
        /**
         * AsOf UTC date time string
         */
        asOf?: string,
        /**
         * The expand parameters for work item attributes. Possible options are { None, Relations, Fields, Links, All }.
         */
        expand?: 'none' | 'relations' | 'fields' | 'links' | 'all',
        /**
         * The flag to control error policy in a bulk get work items request. Possible options are {Fail, Omit}.
         */
        errorPolicy?: 'fail' | 'omit',
    }): CancelablePromise<Array<WorkItem>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/wit/workitems',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'ids': ids,
                'fields': fields,
                'asOf': asOf,
                '$expand': expand,
                'errorPolicy': errorPolicy,
            },
        });
    }
    /**
     * Creates a single work item.
     * @returns WorkItem successful operation
     * @throws ApiError
     */
    public workItemsCreate({
        organization,
        body,
        project,
        type,
        validateOnly,
        bypassRules,
        suppressNotifications,
        expand,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The JSON Patch document representing the work item
         */
        body: JsonPatchDocument,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * The work item type of the work item to create
         */
        type: string,
        /**
         * Indicate if you only want to validate the changes without saving the work item
         */
        validateOnly?: boolean,
        /**
         * Do not enforce the work item type rules on this update
         */
        bypassRules?: boolean,
        /**
         * Do not fire any notifications for this change
         */
        suppressNotifications?: boolean,
        /**
         * The expand parameters for work item attributes. Possible options are { None, Relations, Fields, Links, All }.
         */
        expand?: 'none' | 'relations' | 'fields' | 'links' | 'all',
    }): CancelablePromise<WorkItem> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/wit/workitems/${type}',
            path: {
                'organization': organization,
                'project': project,
                'type': type,
            },
            query: {
                'validateOnly': validateOnly,
                'bypassRules': bypassRules,
                'suppressNotifications': suppressNotifications,
                '$expand': expand,
            },
            body: body,
        });
    }
    /**
     * Returns a single work item from a template.
     * @returns WorkItem successful operation
     * @throws ApiError
     */
    public workItemsGetWorkItemTemplate({
        organization,
        project,
        type,
        fields,
        asOf,
        expand,
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
         * The work item type name
         */
        type: string,
        /**
         * Comma-separated list of requested fields
         */
        fields?: string,
        /**
         * AsOf UTC date time string
         */
        asOf?: string,
        /**
         * The expand parameters for work item attributes. Possible options are { None, Relations, Fields, Links, All }.
         */
        expand?: 'none' | 'relations' | 'fields' | 'links' | 'all',
    }): CancelablePromise<WorkItem> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/wit/workitems/${type}',
            path: {
                'organization': organization,
                'project': project,
                'type': type,
            },
            query: {
                'fields': fields,
                'asOf': asOf,
                '$expand': expand,
            },
        });
    }
    /**
     * Deletes the specified work item and sends it to the Recycle Bin, so that it can be restored back, if required. Optionally, if the destroy parameter has been set to true, it destroys the work item permanently. WARNING: If the destroy parameter is set to true, work items deleted by this command will NOT go to recycle-bin and there is no way to restore/recover them after deletion. It is recommended NOT to use this parameter. If you do, please use this parameter with extreme caution.
     * @returns WorkItemDelete successful operation
     * @throws ApiError
     */
    public workItemsDelete({
        organization,
        id,
        project,
        destroy,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * ID of the work item to be deleted
         */
        id: number,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Optional parameter, if set to true, the work item is deleted permanently. Please note: the destroy action is PERMANENT and cannot be undone.
         */
        destroy?: boolean,
    }): CancelablePromise<WorkItemDelete> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/{project}/_apis/wit/workitems/{id}',
            path: {
                'organization': organization,
                'id': id,
                'project': project,
            },
            query: {
                'destroy': destroy,
            },
        });
    }
    /**
     * Returns a single work item.
     * @returns WorkItem successful operation
     * @throws ApiError
     */
    public workItemsGetWorkItem({
        organization,
        id,
        project,
        fields,
        asOf,
        expand,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The work item id
         */
        id: number,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Comma-separated list of requested fields
         */
        fields?: string,
        /**
         * AsOf UTC date time string
         */
        asOf?: string,
        /**
         * The expand parameters for work item attributes. Possible options are { None, Relations, Fields, Links, All }.
         */
        expand?: 'none' | 'relations' | 'fields' | 'links' | 'all',
    }): CancelablePromise<WorkItem> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/wit/workitems/{id}',
            path: {
                'organization': organization,
                'id': id,
                'project': project,
            },
            query: {
                'fields': fields,
                'asOf': asOf,
                '$expand': expand,
            },
        });
    }
    /**
     * Updates a single work item.
     * @returns WorkItem successful operation
     * @throws ApiError
     */
    public workItemsUpdate({
        organization,
        body,
        id,
        project,
        validateOnly,
        bypassRules,
        suppressNotifications,
        expand,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The JSON Patch document representing the update
         */
        body: JsonPatchDocument,
        /**
         * The id of the work item to update
         */
        id: number,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Indicate if you only want to validate the changes without saving the work item
         */
        validateOnly?: boolean,
        /**
         * Do not enforce the work item type rules on this update
         */
        bypassRules?: boolean,
        /**
         * Do not fire any notifications for this change
         */
        suppressNotifications?: boolean,
        /**
         * The expand parameters for work item attributes. Possible options are { None, Relations, Fields, Links, All }.
         */
        expand?: 'none' | 'relations' | 'fields' | 'links' | 'all',
    }): CancelablePromise<WorkItem> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/wit/workitems/{id}',
            path: {
                'organization': organization,
                'id': id,
                'project': project,
            },
            query: {
                'validateOnly': validateOnly,
                'bypassRules': bypassRules,
                'suppressNotifications': suppressNotifications,
                '$expand': expand,
            },
            body: body,
        });
    }
    /**
     * Gets work items for a list of work item ids (Maximum 200)
     * @returns WorkItem successful operation
     * @throws ApiError
     */
    public workItemsGetWorkItemsBatch({
        organization,
        body,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: WorkItemBatchGetRequest,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<Array<WorkItem>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/wit/workitemsbatch',
            path: {
                'organization': organization,
                'project': project,
            },
            body: body,
        });
    }
}
