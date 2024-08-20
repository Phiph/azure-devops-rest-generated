/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkItem } from '../models/WorkItem';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class RevisionsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Returns the list of fully hydrated work item revisions, paged.
     * @returns WorkItem successful operation
     * @throws ApiError
     */
    public revisionsList({
        organization,
        id,
        project,
        top,
        skip,
        expand,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        id: number,
        /**
         * Project ID or project name
         */
        project: string,
        top?: number,
        skip?: number,
        expand?: 'none' | 'relations' | 'fields' | 'links' | 'all',
    }): CancelablePromise<Array<WorkItem>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/wit/workItems/{id}/revisions',
            path: {
                'organization': organization,
                'id': id,
                'project': project,
            },
            query: {
                '$top': top,
                '$skip': skip,
                '$expand': expand,
            },
        });
    }
    /**
     * Returns a fully hydrated work item for the requested revision
     * @returns WorkItem successful operation
     * @throws ApiError
     */
    public revisionsGet({
        organization,
        id,
        revisionNumber,
        project,
        expand,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        id: number,
        revisionNumber: number,
        /**
         * Project ID or project name
         */
        project: string,
        expand?: 'none' | 'relations' | 'fields' | 'links' | 'all',
    }): CancelablePromise<WorkItem> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/wit/workItems/{id}/revisions/{revisionNumber}',
            path: {
                'organization': organization,
                'id': id,
                'revisionNumber': revisionNumber,
                'project': project,
            },
            query: {
                '$expand': expand,
            },
        });
    }
}
