/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QueryBatchGetRequest } from '../models/QueryBatchGetRequest';
import type { QueryHierarchyItem } from '../models/QueryHierarchyItem';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class QueriesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets the root queries and their children
     * @returns QueryHierarchyItem successful operation
     * @throws ApiError
     */
    public queriesList({
        organization,
        project,
        expand,
        depth,
        includeDeleted,
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
         * Include the query string (wiql), clauses, query result columns, and sort options in the results.
         */
        expand?: 'none' | 'wiql' | 'clauses' | 'all' | 'minimal',
        /**
         * In the folder of queries, return child queries and folders to this depth.
         */
        depth?: number,
        /**
         * Include deleted queries and folders
         */
        includeDeleted?: boolean,
    }): CancelablePromise<Array<QueryHierarchyItem>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/wit/queries',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                '$expand': expand,
                '$depth': depth,
                '$includeDeleted': includeDeleted,
            },
        });
    }
    /**
     * Creates a query, or moves a query.
     *
     * Learn more about Work Item Query Language (WIQL) syntax [here](https://docs.microsoft.com/en-us/vsts/collaborate/wiql-syntax?toc=/vsts/work/track/toc.json&bc=/vsts/work/track/breadcrumb/toc.json&view=vsts).
     * @returns QueryHierarchyItem successful operation
     * @throws ApiError
     */
    public queriesCreate({
        organization,
        body,
        project,
        query,
        validateWiqlOnly,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The query to create.
         */
        body: QueryHierarchyItem,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * The parent id or path under which the query is to be created.
         */
        query: string,
        /**
         * If you only want to validate your WIQL query without actually creating one, set it to true. Default is false.
         */
        validateWiqlOnly?: boolean,
    }): CancelablePromise<QueryHierarchyItem> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/wit/queries/{query}',
            path: {
                'organization': organization,
                'project': project,
                'query': query,
            },
            query: {
                'validateWiqlOnly': validateWiqlOnly,
            },
            body: body,
        });
    }
    /**
     * Delete a query or a folder. This deletes any permission change on the deleted query or folder and any of its descendants if it is a folder. It is important to note that the deleted permission changes cannot be recovered upon undeleting the query or folder.
     * @returns any successful operation
     * @throws ApiError
     */
    public queriesDelete({
        organization,
        project,
        query,
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
         * ID or path of the query or folder to delete.
         */
        query: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/{project}/_apis/wit/queries/{query}',
            path: {
                'organization': organization,
                'project': project,
                'query': query,
            },
        });
    }
    /**
     * Retrieves an individual query and its children
     * @returns QueryHierarchyItem successful operation
     * @throws ApiError
     */
    public queriesGet({
        organization,
        project,
        query,
        expand,
        depth,
        includeDeleted,
        useIsoDateFormat,
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
         * ID or path of the query.
         */
        query: string,
        /**
         * Include the query string (wiql), clauses, query result columns, and sort options in the results.
         */
        expand?: 'none' | 'wiql' | 'clauses' | 'all' | 'minimal',
        /**
         * In the folder of queries, return child queries and folders to this depth.
         */
        depth?: number,
        /**
         * Include deleted queries and folders
         */
        includeDeleted?: boolean,
        /**
         * DateTime query clauses will be formatted using a ISO 8601 compliant format
         */
        useIsoDateFormat?: boolean,
    }): CancelablePromise<QueryHierarchyItem> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/wit/queries/{query}',
            path: {
                'organization': organization,
                'project': project,
                'query': query,
            },
            query: {
                '$expand': expand,
                '$depth': depth,
                '$includeDeleted': includeDeleted,
                '$useIsoDateFormat': useIsoDateFormat,
            },
        });
    }
    /**
     * Update a query or a folder. This allows you to update, rename and move queries and folders.
     * @returns QueryHierarchyItem successful operation
     * @throws ApiError
     */
    public queriesUpdate({
        organization,
        body,
        project,
        query,
        undeleteDescendants,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The query to update.
         */
        body: QueryHierarchyItem,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * The ID or path for the query to update.
         */
        query: string,
        /**
         * Undelete the children of this folder. It is important to note that this will not bring back the permission changes that were previously applied to the descendants.
         */
        undeleteDescendants?: boolean,
    }): CancelablePromise<QueryHierarchyItem> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/wit/queries/{query}',
            path: {
                'organization': organization,
                'project': project,
                'query': query,
            },
            query: {
                '$undeleteDescendants': undeleteDescendants,
            },
            body: body,
        });
    }
    /**
     * Gets a list of queries by ids (Maximum 1000)
     * @returns QueryHierarchyItem successful operation
     * @throws ApiError
     */
    public queriesGetQueriesBatch({
        organization,
        body,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: QueryBatchGetRequest,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<Array<QueryHierarchyItem>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/wit/queriesbatch',
            path: {
                'organization': organization,
                'project': project,
            },
            body: body,
        });
    }
}
