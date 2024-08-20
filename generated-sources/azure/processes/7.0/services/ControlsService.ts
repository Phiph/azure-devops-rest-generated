/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Control } from '../models/Control';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ControlsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Creates a control in a group.
     * @returns Control successful operation
     * @throws ApiError
     */
    public controlsCreate({
        organization,
        body,
        processId,
        witRefName,
        groupId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The control.
         */
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
         * The ID of the group to add the control to.
         */
        groupId: string,
    }): CancelablePromise<Control> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/_apis/work/processes/{processId}/workItemTypes/{witRefName}/layout/groups/{groupId}/controls',
            path: {
                'organization': organization,
                'processId': processId,
                'witRefName': witRefName,
                'groupId': groupId,
            },
            body: body,
        });
    }
    /**
     * Moves a control to a specified group.
     * @returns Control successful operation
     * @throws ApiError
     */
    public controlsMoveControlToGroup({
        organization,
        body,
        processId,
        witRefName,
        groupId,
        controlId,
        removeFromGroupId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The control.
         */
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
         * The ID of the group to move the control to.
         */
        groupId: string,
        /**
         * The ID of the control.
         */
        controlId: string,
        /**
         * The group ID to remove the control from.
         */
        removeFromGroupId?: string,
    }): CancelablePromise<Control> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/{organization}/_apis/work/processes/{processId}/workItemTypes/{witRefName}/layout/groups/{groupId}/controls/{controlId}',
            path: {
                'organization': organization,
                'processId': processId,
                'witRefName': witRefName,
                'groupId': groupId,
                'controlId': controlId,
            },
            query: {
                'removeFromGroupId': removeFromGroupId,
            },
            body: body,
        });
    }
    /**
     * Removes a control from the work item form.
     * @returns any successful operation
     * @throws ApiError
     */
    public controlsRemoveControlFromGroup({
        organization,
        processId,
        witRefName,
        groupId,
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
         * The ID of the group.
         */
        groupId: string,
        /**
         * The ID of the control to remove.
         */
        controlId: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/_apis/work/processes/{processId}/workItemTypes/{witRefName}/layout/groups/{groupId}/controls/{controlId}',
            path: {
                'organization': organization,
                'processId': processId,
                'witRefName': witRefName,
                'groupId': groupId,
                'controlId': controlId,
            },
        });
    }
    /**
     * Updates a control on the work item form.
     * @returns Control successful operation
     * @throws ApiError
     */
    public controlsUpdate({
        organization,
        body,
        processId,
        witRefName,
        groupId,
        controlId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * The updated control.
         */
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
         * The ID of the group.
         */
        groupId: string,
        /**
         * The ID of the control.
         */
        controlId: string,
    }): CancelablePromise<Control> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/_apis/work/processes/{processId}/workItemTypes/{witRefName}/layout/groups/{groupId}/controls/{controlId}',
            path: {
                'organization': organization,
                'processId': processId,
                'witRefName': witRefName,
                'groupId': groupId,
                'controlId': controlId,
            },
            body: body,
        });
    }
}
