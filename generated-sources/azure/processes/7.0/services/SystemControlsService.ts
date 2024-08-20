/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Control } from '../models/Control';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SystemControlsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets edited system controls for a work item type in a process. To get all system controls (base + edited) use layout API(s)
     * @returns Control successful operation
     * @throws ApiError
     */
    public systemControlsList({
        organization,
        processId,
        witRefName,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The ID of the process.
         */
        processId: string,
        /**
         * The reference name of the work item type.
         */
        witRefName: string,
    }): CancelablePromise<Array<Control>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/_apis/work/processes/{processId}/workItemTypes/{witRefName}/layout/systemcontrols',
            path: {
                'organization': organization,
                'processId': processId,
                'witRefName': witRefName,
            },
        });
    }
    /**
     * Deletes a system control modification on the work item form.
     * @returns Control successful operation
     * @throws ApiError
     */
    public systemControlsDelete({
        organization,
        processId,
        witRefName,
        controlId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The ID of the process.
         */
        processId: string,
        /**
         * The reference name of the work item type.
         */
        witRefName: string,
        /**
         * The ID of the control.
         */
        controlId: string,
    }): CancelablePromise<Array<Control>> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/_apis/work/processes/{processId}/workItemTypes/{witRefName}/layout/systemcontrols/{controlId}',
            path: {
                'organization': organization,
                'processId': processId,
                'witRefName': witRefName,
                'controlId': controlId,
            },
        });
    }
    /**
     * Updates/adds a system control on the work item form.
     * @returns Control successful operation
     * @throws ApiError
     */
    public systemControlsUpdate({
        organization,
        body,
        processId,
        witRefName,
        controlId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: Control,
        /**
         * The ID of the process.
         */
        processId: string,
        /**
         * The reference name of the work item type.
         */
        witRefName: string,
        /**
         * The ID of the control.
         */
        controlId: string,
    }): CancelablePromise<Control> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/_apis/work/processes/{processId}/workItemTypes/{witRefName}/layout/systemcontrols/{controlId}',
            path: {
                'organization': organization,
                'processId': processId,
                'witRefName': witRefName,
                'controlId': controlId,
            },
            body: body,
        });
    }
}
