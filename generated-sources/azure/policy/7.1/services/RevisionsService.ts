/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PolicyConfiguration } from '../models/PolicyConfiguration';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class RevisionsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Retrieve all revisions for a given policy.
     * @returns PolicyConfiguration successful operation
     * @throws ApiError
     */
    public revisionsList({
        organization,
        project,
        configurationId,
        top,
        skip,
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
         * The policy configuration ID.
         */
        configurationId: number,
        /**
         * The number of revisions to retrieve.
         */
        top?: number,
        /**
         * The number of revisions to ignore. For example, to retrieve results 101-150, set top to 50 and skip to 100.
         */
        skip?: number,
    }): CancelablePromise<Array<PolicyConfiguration>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/policy/configurations/{configurationId}/revisions',
            path: {
                'organization': organization,
                'project': project,
                'configurationId': configurationId,
            },
            query: {
                '$top': top,
                '$skip': skip,
            },
        });
    }
    /**
     * Retrieve a specific revision of a given policy by ID.
     * @returns PolicyConfiguration successful operation
     * @throws ApiError
     */
    public revisionsGet({
        organization,
        project,
        configurationId,
        revisionId,
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
         * The policy configuration ID.
         */
        configurationId: number,
        /**
         * The revision ID.
         */
        revisionId: number,
    }): CancelablePromise<PolicyConfiguration> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/policy/configurations/{configurationId}/revisions/{revisionId}',
            path: {
                'organization': organization,
                'project': project,
                'configurationId': configurationId,
                'revisionId': revisionId,
            },
        });
    }
}
