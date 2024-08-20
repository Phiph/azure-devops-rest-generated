/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HideStateModel } from '../models/HideStateModel';
import type { WorkItemStateInputModel } from '../models/WorkItemStateInputModel';
import type { WorkItemStateResultModel } from '../models/WorkItemStateResultModel';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class StatesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates a state definition in the work item type of the process.
     * @returns WorkItemStateResultModel successful operation
     * @throws ApiError
     */
    public statesCreate({
        organization,
        body,
        processId,
        witRefName,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: WorkItemStateInputModel,
        /**
         * The ID of the process
         */
        processId: string,
        /**
         * The reference name of the work item type
         */
        witRefName: string,
    }): CancelablePromise<WorkItemStateResultModel> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/_apis/work/processes/{processId}/workItemTypes/{witRefName}/states',
            path: {
                'organization': organization,
                'processId': processId,
                'witRefName': witRefName,
            },
            body: body,
        });
    }
    /**
     * Returns a list of all state definitions in a work item type of the process.
     * @returns WorkItemStateResultModel successful operation
     * @throws ApiError
     */
    public statesList({
        organization,
        processId,
        witRefName,
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
         * The reference name of the work item type
         */
        witRefName: string,
    }): CancelablePromise<Array<WorkItemStateResultModel>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/work/processes/{processId}/workItemTypes/{witRefName}/states',
            path: {
                'organization': organization,
                'processId': processId,
                'witRefName': witRefName,
            },
        });
    }
    /**
     * Removes a state definition in the work item type of the process.
     * @returns any successful operation
     * @throws ApiError
     */
    public statesDelete({
        organization,
        processId,
        witRefName,
        stateId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * ID of the process
         */
        processId: string,
        /**
         * The reference name of the work item type
         */
        witRefName: string,
        /**
         * ID of the state
         */
        stateId: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/_apis/work/processes/{processId}/workItemTypes/{witRefName}/states/{stateId}',
            path: {
                'organization': organization,
                'processId': processId,
                'witRefName': witRefName,
                'stateId': stateId,
            },
        });
    }
    /**
     * Returns a single state definition in a work item type of the process.
     * @returns WorkItemStateResultModel successful operation
     * @throws ApiError
     */
    public statesGet({
        organization,
        processId,
        witRefName,
        stateId,
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
         * The reference name of the work item type
         */
        witRefName: string,
        /**
         * The ID of the state
         */
        stateId: string,
    }): CancelablePromise<WorkItemStateResultModel> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/work/processes/{processId}/workItemTypes/{witRefName}/states/{stateId}',
            path: {
                'organization': organization,
                'processId': processId,
                'witRefName': witRefName,
                'stateId': stateId,
            },
        });
    }
    /**
     * Hides a state definition in the work item type of the process.Only states with customizationType:System can be hidden.
     * @returns WorkItemStateResultModel successful operation
     * @throws ApiError
     */
    public statesHideStateDefinition({
        organization,
        body,
        processId,
        witRefName,
        stateId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: HideStateModel,
        /**
         * The ID of the process
         */
        processId: string,
        /**
         * The reference name of the work item type
         */
        witRefName: string,
        /**
         * The ID of the state
         */
        stateId: string,
    }): CancelablePromise<WorkItemStateResultModel> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/{organization}/_apis/work/processes/{processId}/workItemTypes/{witRefName}/states/{stateId}',
            path: {
                'organization': organization,
                'processId': processId,
                'witRefName': witRefName,
                'stateId': stateId,
            },
            body: body,
        });
    }
    /**
     * Updates a given state definition in the work item type of the process.
     * @returns WorkItemStateResultModel successful operation
     * @throws ApiError
     */
    public statesUpdate({
        organization,
        body,
        processId,
        witRefName,
        stateId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: WorkItemStateInputModel,
        /**
         * ID of the process
         */
        processId: string,
        /**
         * The reference name of the work item type
         */
        witRefName: string,
        /**
         * ID of the state
         */
        stateId: string,
    }): CancelablePromise<WorkItemStateResultModel> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/_apis/work/processes/{processId}/workItemTypes/{witRefName}/states/{stateId}',
            path: {
                'organization': organization,
                'processId': processId,
                'witRefName': witRefName,
                'stateId': stateId,
            },
            body: body,
        });
    }
}
