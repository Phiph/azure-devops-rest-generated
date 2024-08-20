/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RunCreateModel } from '../models/RunCreateModel';
import type { RunUpdateModel } from '../models/RunUpdateModel';
import type { TestRun } from '../models/TestRun';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class RunsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns TestRun successful operation
     * @throws ApiError
     */
    public runsCreate({
        organization,
        body,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: RunCreateModel,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<TestRun> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/testresults/runs',
            path: {
                'organization': organization,
                'project': project,
            },
            body: body,
        });
    }
    /**
     * @returns TestRun successful operation
     * @throws ApiError
     */
    public runsList({
        organization,
        project,
        buildUri,
        owner,
        tmiRunId,
        planId,
        includeRunDetails,
        automated,
        skip,
        top,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Project ID or project name
         */
        project: string,
        buildUri?: string,
        owner?: string,
        tmiRunId?: string,
        planId?: number,
        includeRunDetails?: boolean,
        automated?: boolean,
        skip?: number,
        top?: number,
    }): CancelablePromise<Array<TestRun>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/testresults/runs',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'buildUri': buildUri,
                'owner': owner,
                'tmiRunId': tmiRunId,
                'planId': planId,
                'includeRunDetails': includeRunDetails,
                'automated': automated,
                '$skip': skip,
                '$top': top,
            },
        });
    }
    /**
     * @returns any successful operation
     * @throws ApiError
     */
    public runsDelete({
        organization,
        project,
        runId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Project ID or project name
         */
        project: string,
        runId: number,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/{project}/_apis/testresults/runs/{runId}',
            path: {
                'organization': organization,
                'project': project,
                'runId': runId,
            },
        });
    }
    /**
     * @returns TestRun successful operation
     * @throws ApiError
     */
    public runsGet({
        organization,
        project,
        runId,
        includeDetails,
        includeTags,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Project ID or project name
         */
        project: string,
        runId: number,
        includeDetails?: boolean,
        includeTags?: boolean,
    }): CancelablePromise<TestRun> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/testresults/runs/{runId}',
            path: {
                'organization': organization,
                'project': project,
                'runId': runId,
            },
            query: {
                'includeDetails': includeDetails,
                'includeTags': includeTags,
            },
        });
    }
    /**
     * @returns TestRun successful operation
     * @throws ApiError
     */
    public runsUpdate({
        organization,
        body,
        project,
        runId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: RunUpdateModel,
        /**
         * Project ID or project name
         */
        project: string,
        runId: number,
    }): CancelablePromise<TestRun> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/testresults/runs/{runId}',
            path: {
                'organization': organization,
                'project': project,
                'runId': runId,
            },
            body: body,
        });
    }
}
