/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UpdateStageParameters } from '../models/UpdateStageParameters';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class StagesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Update a build stage
     * @returns any successful operation
     * @throws ApiError
     */
    public stagesUpdate({
        organization,
        body,
        buildId,
        stageRefName,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: UpdateStageParameters,
        buildId: number,
        stageRefName: string,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/build/builds/{buildId}/stages/{stageRefName}',
            path: {
                'organization': organization,
                'buildId': buildId,
                'stageRefName': stageRefName,
                'project': project,
            },
            body: body,
        });
    }
}
