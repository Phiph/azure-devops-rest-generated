/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkArtifactLink } from '../models/WorkArtifactLink';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ArtifactLinkTypesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get the list of work item tracking outbound artifact link types.
     * @returns WorkArtifactLink successful operation
     * @throws ApiError
     */
    public artifactLinkTypesList({
        organization,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
    }): CancelablePromise<Array<WorkArtifactLink>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/wit/artifactlinktypes',
            path: {
                'organization': organization,
            },
        });
    }
}
