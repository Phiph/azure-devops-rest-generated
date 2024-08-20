/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PatTokenCreateRequest } from '../models/PatTokenCreateRequest';
import type { PatTokenResult } from '../models/PatTokenResult';
import type { PatTokenUpdateRequest } from '../models/PatTokenUpdateRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PatsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates a new personal access token (PAT) for the requesting user.
     * @returns PatTokenResult successful operation
     * @throws ApiError
     */
    public patsCreate({
        organization,
        body,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: PatTokenCreateRequest,
    }): CancelablePromise<PatTokenResult> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/_apis/tokens/pats',
            path: {
                'organization': organization,
            },
            body: body,
        });
    }
    /**
     * Gets a single personal access token (PAT).
     * @returns PatTokenResult successful operation
     * @throws ApiError
     */
    public patsGet({
        organization,
        authorizationId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The authorizationId identifying a single, unique personal access token (PAT)
         */
        authorizationId: string,
    }): CancelablePromise<PatTokenResult> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/tokens/pats',
            path: {
                'organization': organization,
            },
            query: {
                'authorizationId': authorizationId,
            },
        });
    }
    /**
     * Revokes a personal access token (PAT) by authorizationId.
     * @returns any successful operation
     * @throws ApiError
     */
    public patsRevoke({
        organization,
        authorizationId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The authorizationId identifying a single, unique personal access token (PAT)
         */
        authorizationId: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/_apis/tokens/pats',
            path: {
                'organization': organization,
            },
            query: {
                'authorizationId': authorizationId,
            },
        });
    }
    /**
     * Updates an existing personal access token (PAT) with the new parameters. To update a token, it must be valid (has not been revoked).
     * @returns PatTokenResult successful operation
     * @throws ApiError
     */
    public patsUpdate({
        organization,
        body,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: PatTokenUpdateRequest,
    }): CancelablePromise<PatTokenResult> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/{organization}/_apis/tokens/pats',
            path: {
                'organization': organization,
            },
            body: body,
        });
    }
}
