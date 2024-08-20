/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VirtualMachineResource } from '../models/VirtualMachineResource';
import type { VirtualMachineResourceCreateParameters } from '../models/VirtualMachineResourceCreateParameters';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class VmresourceService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Add Virtual Machine Resource
     * @returns VirtualMachineResource successful operation
     * @throws ApiError
     */
    public vmresourceAdd({
        organization,
        body,
        project,
        environmentId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Properties to create Virtual Machine Resource
         */
        body: VirtualMachineResourceCreateParameters,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Id of the Environment
         */
        environmentId: number,
    }): CancelablePromise<VirtualMachineResource> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/pipelines/environments/{environmentId}/providers/virtualmachines',
            path: {
                'organization': organization,
                'project': project,
                'environmentId': environmentId,
            },
            body: body,
        });
    }
    /**
     * Get Virtual Machine Resources
     * @returns VirtualMachineResource successful operation
     * @throws ApiError
     */
    public vmresourceList({
        organization,
        project,
        environmentId,
        name,
        tags,
        continuationToken,
        top,
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
         * Id of the Environment
         */
        environmentId: number,
        /**
         * Name of the Virtual Machine Resource
         */
        name?: string,
        /**
         * Tags of the Virtual Machine Resource
         */
        tags?: string,
        /**
         * Gets the Virtual Machine Resources after the continuation token provided.
         */
        continuationToken?: string,
        /**
         * Number of Virtual Machine Resources to get. Default is 1000.
         */
        top?: number,
    }): CancelablePromise<Array<VirtualMachineResource>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/pipelines/environments/{environmentId}/providers/virtualmachines',
            path: {
                'organization': organization,
                'project': project,
                'environmentId': environmentId,
            },
            query: {
                'name': name,
                'tags': tags,
                'continuationToken': continuationToken,
                '$top': top,
            },
        });
    }
    /**
     * Replace Virtual Machine Resource
     * @returns VirtualMachineResource successful operation
     * @throws ApiError
     */
    public vmresourceReplaceVirtualMachineResource({
        organization,
        body,
        project,
        environmentId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Properties to replace Virtual Machine Resource
         */
        body: VirtualMachineResource,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Id of the Environment
         */
        environmentId: number,
    }): CancelablePromise<VirtualMachineResource> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/{organization}/{project}/_apis/pipelines/environments/{environmentId}/providers/virtualmachines',
            path: {
                'organization': organization,
                'project': project,
                'environmentId': environmentId,
            },
            body: body,
        });
    }
    /**
     * Update Virtual Machine Resource
     * @returns VirtualMachineResource successful operation
     * @throws ApiError
     */
    public vmresourceUpdate({
        organization,
        body,
        project,
        environmentId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Properties to update Virtual Machine Resource
         */
        body: VirtualMachineResource,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Id of the Environment
         */
        environmentId: number,
    }): CancelablePromise<VirtualMachineResource> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/pipelines/environments/{environmentId}/providers/virtualmachines',
            path: {
                'organization': organization,
                'project': project,
                'environmentId': environmentId,
            },
            body: body,
        });
    }
    /**
     * Delete Virtual Machine Resource
     * @returns any successful operation
     * @throws ApiError
     */
    public vmresourceDelete({
        organization,
        project,
        environmentId,
        resourceId,
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
         * Id of the Environment
         */
        environmentId: number,
        /**
         * Id of the Virtual Machine Resource
         */
        resourceId: number,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/{project}/_apis/pipelines/environments/{environmentId}/providers/virtualmachines/{resourceId}',
            path: {
                'organization': organization,
                'project': project,
                'environmentId': environmentId,
                'resourceId': resourceId,
            },
        });
    }
}
