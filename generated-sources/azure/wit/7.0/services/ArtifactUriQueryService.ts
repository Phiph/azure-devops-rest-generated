/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ArtifactUriQuery } from '../models/ArtifactUriQuery';
import type { ArtifactUriQueryResult } from '../models/ArtifactUriQueryResult';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ArtifactUriQueryService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Queries work items linked to a given list of artifact URI.
     * @returns ArtifactUriQueryResult successful operation
     * @throws ApiError
     */
    public artifactUriQueryQuery({
        organization,
        body,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Defines a list of artifact URI for querying work items.
         */
        body: ArtifactUriQuery,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<ArtifactUriQueryResult> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/wit/artifacturiquery',
            path: {
                'organization': organization,
                'project': project,
            },
            body: body,
        });
    }
}
