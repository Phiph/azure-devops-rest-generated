/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TestSession } from '../models/TestSession';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SessionService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create a test session
     * @returns TestSession successful operation
     * @throws ApiError
     */
    public sessionCreate({
        organization,
        body,
        project,
        team,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Test session details for creation
         */
        body: TestSession,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Team ID or team name
         */
        team: string,
    }): CancelablePromise<TestSession> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/{team}/_apis/test/session',
            path: {
                'organization': organization,
                'project': project,
                'team': team,
            },
            body: body,
        });
    }
    /**
     * Get a list of test sessions
     * @returns TestSession successful operation
     * @throws ApiError
     */
    public sessionList({
        organization,
        project,
        team,
        period,
        allSessions,
        includeAllProperties,
        source,
        includeOnlyCompletedSessions,
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
         * Team ID or team name
         */
        team: string,
        /**
         * Period in days from now, for which test sessions are fetched.
         */
        period?: number,
        /**
         * If false, returns test sessions for current user. Otherwise, it returns test sessions for all users
         */
        allSessions?: boolean,
        /**
         * If true, it returns all properties of the test sessions. Otherwise, it returns the skinny version.
         */
        includeAllProperties?: boolean,
        /**
         * Source of the test session.
         */
        source?: 'unknown' | 'xtDesktop' | 'feedbackDesktop' | 'xtWeb' | 'feedbackWeb' | 'xtDesktop2' | 'sessionInsightsForAll',
        /**
         * If true, it returns test sessions in completed state. Otherwise, it returns test sessions for all states
         */
        includeOnlyCompletedSessions?: boolean,
    }): CancelablePromise<Array<TestSession>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/{team}/_apis/test/session',
            path: {
                'organization': organization,
                'project': project,
                'team': team,
            },
            query: {
                'period': period,
                'allSessions': allSessions,
                'includeAllProperties': includeAllProperties,
                'source': source,
                'includeOnlyCompletedSessions': includeOnlyCompletedSessions,
            },
        });
    }
    /**
     * Update a test session
     * @returns TestSession successful operation
     * @throws ApiError
     */
    public sessionUpdate({
        organization,
        body,
        project,
        team,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Test session details for update
         */
        body: TestSession,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Team ID or team name
         */
        team: string,
    }): CancelablePromise<TestSession> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/{team}/_apis/test/session',
            path: {
                'organization': organization,
                'project': project,
                'team': team,
            },
            body: body,
        });
    }
}
