/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VariableGroup } from '../models/VariableGroup';
import type { VariableGroupParameters } from '../models/VariableGroupParameters';
import type { VariableGroupProjectReference } from '../models/VariableGroupProjectReference';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class VariablegroupsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Add a variable group.
     * @returns VariableGroup successful operation
     * @throws ApiError
     */
    public variablegroupsAdd({
        organization,
        body,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: VariableGroupParameters,
    }): CancelablePromise<VariableGroup> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/_apis/distributedtask/variablegroups',
            path: {
                'organization': organization,
            },
            body: body,
        });
    }
    /**
     * Add a variable group.
     * @returns any successful operation
     * @throws ApiError
     */
    public variablegroupsShareVariableGroup({
        organization,
        body,
        variableGroupId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: Array<VariableGroupProjectReference>,
        variableGroupId: number,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/_apis/distributedtask/variablegroups',
            path: {
                'organization': organization,
            },
            query: {
                'variableGroupId': variableGroupId,
            },
            body: body,
        });
    }
    /**
     * Delete a variable group
     * @returns any successful operation
     * @throws ApiError
     */
    public variablegroupsDelete({
        organization,
        groupId,
        projectIds,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Id of the variable group.
         */
        groupId: number,
        projectIds: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/_apis/distributedtask/variablegroups/{groupId}',
            path: {
                'organization': organization,
                'groupId': groupId,
            },
            query: {
                'projectIds': projectIds,
            },
        });
    }
    /**
     * Update a variable group.
     * @returns VariableGroup successful operation
     * @throws ApiError
     */
    public variablegroupsUpdate({
        organization,
        body,
        groupId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: VariableGroupParameters,
        /**
         * Id of the variable group to update.
         */
        groupId: number,
    }): CancelablePromise<VariableGroup> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/{organization}/_apis/distributedtask/variablegroups/{groupId}',
            path: {
                'organization': organization,
                'groupId': groupId,
            },
            body: body,
        });
    }
    /**
     * Get variable groups by ids.
     * @returns VariableGroup successful operation
     * @throws ApiError
     */
    public variablegroupsGetVariableGroupsById({
        organization,
        project,
        groupIds,
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
         * Comma separated list of Ids of variable groups.
         */
        groupIds: string,
    }): CancelablePromise<Array<VariableGroup>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/distributedtask/variablegroups',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'groupIds': groupIds,
            },
        });
    }
    /**
     * Get a variable group.
     * @returns VariableGroup successful operation
     * @throws ApiError
     */
    public variablegroupsGet({
        organization,
        project,
        groupId,
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
         * Id of the variable group.
         */
        groupId: number,
    }): CancelablePromise<VariableGroup> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/distributedtask/variablegroups/{groupId}',
            path: {
                'organization': organization,
                'project': project,
                'groupId': groupId,
            },
        });
    }
}
