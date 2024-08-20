/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GateUpdateMetadata } from '../models/GateUpdateMetadata';
import type { ReleaseGates } from '../models/ReleaseGates';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class GatesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Updates the gate for a deployment.
     * @returns ReleaseGates successful operation
     * @throws ApiError
     */
    public gatesUpdate({
        organization,
        body,
        project,
        gateStepId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Metadata to patch the Release Gates.
         */
        body: GateUpdateMetadata,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Gate step Id.
         */
        gateStepId: number,
    }): CancelablePromise<ReleaseGates> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/release/gates/{gateStepId}',
            path: {
                'organization': organization,
                'project': project,
                'gateStepId': gateStepId,
            },
            body: body,
        });
    }
}
