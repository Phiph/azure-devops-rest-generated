/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProcessBehavior } from '../models/ProcessBehavior';
import type { ProcessBehaviorCreateRequest } from '../models/ProcessBehaviorCreateRequest';
import type { ProcessBehaviorUpdateRequest } from '../models/ProcessBehaviorUpdateRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class BehaviorsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates a single behavior in the given process.
     * @returns ProcessBehavior successful operation
     * @throws ApiError
     */
    public behaviorsCreate({
        organization,
        body,
        processId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: ProcessBehaviorCreateRequest,
        /**
         * The ID of the process
         */
        processId: string,
    }): CancelablePromise<ProcessBehavior> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/_apis/work/processes/{processId}/behaviors',
            path: {
                'organization': organization,
                'processId': processId,
            },
            body: body,
        });
    }
    /**
     * Returns a list of all behaviors in the process.
     * @returns ProcessBehavior successful operation
     * @throws ApiError
     */
    public behaviorsList({
        organization,
        processId,
        expand,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The ID of the process
         */
        processId: string,
        expand?: 'none' | 'fields' | 'combinedFields',
    }): CancelablePromise<Array<ProcessBehavior>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/work/processes/{processId}/behaviors',
            path: {
                'organization': organization,
                'processId': processId,
            },
            query: {
                '$expand': expand,
            },
        });
    }
    /**
     * Removes a behavior in the process.
     * @returns any successful operation
     * @throws ApiError
     */
    public behaviorsDelete({
        organization,
        processId,
        behaviorRefName,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The ID of the process
         */
        processId: string,
        /**
         * The reference name of the behavior
         */
        behaviorRefName: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/_apis/work/processes/{processId}/behaviors/{behaviorRefName}',
            path: {
                'organization': organization,
                'processId': processId,
                'behaviorRefName': behaviorRefName,
            },
        });
    }
    /**
     * Returns a behavior of the process.
     * @returns ProcessBehavior successful operation
     * @throws ApiError
     */
    public behaviorsGet({
        organization,
        processId,
        behaviorRefName,
        expand,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The ID of the process
         */
        processId: string,
        /**
         * The reference name of the behavior
         */
        behaviorRefName: string,
        expand?: 'none' | 'fields' | 'combinedFields',
    }): CancelablePromise<ProcessBehavior> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/work/processes/{processId}/behaviors/{behaviorRefName}',
            path: {
                'organization': organization,
                'processId': processId,
                'behaviorRefName': behaviorRefName,
            },
            query: {
                '$expand': expand,
            },
        });
    }
    /**
     * Replaces a behavior in the process.
     * @returns ProcessBehavior successful operation
     * @throws ApiError
     */
    public behaviorsUpdate({
        organization,
        body,
        processId,
        behaviorRefName,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: ProcessBehaviorUpdateRequest,
        /**
         * The ID of the process
         */
        processId: string,
        /**
         * The reference name of the behavior
         */
        behaviorRefName: string,
    }): CancelablePromise<ProcessBehavior> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/{organization}/_apis/work/processes/{processId}/behaviors/{behaviorRefName}',
            path: {
                'organization': organization,
                'processId': processId,
                'behaviorRefName': behaviorRefName,
            },
            body: body,
        });
    }
}
