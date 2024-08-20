/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuildArtifact } from '../models/BuildArtifact';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ArtifactsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Associates an artifact with a build.
     * @returns BuildArtifact successful operation
     * @throws ApiError
     */
    public artifactsCreate({
        organization,
        body,
        project,
        buildId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The artifact.
         */
        body: BuildArtifact,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * The ID of the build.
         */
        buildId: number,
    }): CancelablePromise<BuildArtifact> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/build/builds/{buildId}/artifacts',
            path: {
                'organization': organization,
                'project': project,
                'buildId': buildId,
            },
            body: body,
        });
    }
    /**
     * Gets all artifacts for a build.
     * @returns BuildArtifact successful operation
     * @throws ApiError
     */
    public artifactsList({
        organization,
        project,
        buildId,
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
         * The ID of the build.
         */
        buildId: number,
    }): CancelablePromise<Array<BuildArtifact>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/build/builds/{buildId}/artifacts',
            path: {
                'organization': organization,
                'project': project,
                'buildId': buildId,
            },
        });
    }
}
