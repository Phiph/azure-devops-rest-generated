/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeploymentGroup } from '../models/DeploymentGroup';
import type { DeploymentGroupCreateParameter } from '../models/DeploymentGroupCreateParameter';
import type { DeploymentGroupUpdateParameter } from '../models/DeploymentGroupUpdateParameter';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DeploymentgroupsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Create a deployment group.
     * @returns DeploymentGroup successful operation
     * @throws ApiError
     */
    public deploymentgroupsAdd({
        organization,
        body,
        project,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Deployment group to create.
         */
        body: DeploymentGroupCreateParameter,
        /**
         * Project ID or project name
         */
        project: string,
    }): CancelablePromise<DeploymentGroup> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/distributedtask/deploymentgroups',
            path: {
                'organization': organization,
                'project': project,
            },
            body: body,
        });
    }
    /**
     * Get a list of deployment groups by name or IDs.
     * @returns DeploymentGroup successful operation
     * @throws ApiError
     */
    public deploymentgroupsList({
        organization,
        project,
        name,
        actionFilter,
        expand,
        continuationToken,
        top,
        ids,
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
         * Name of the deployment group.
         */
        name?: string,
        /**
         * Get only deployment groups on which this action can be performed.
         */
        actionFilter?: 'none' | 'manage' | 'use',
        /**
         * Include these additional details in the returned objects.
         */
        expand?: 'none' | 'machines' | 'tags',
        /**
         * Get deployment groups with names greater than this continuationToken lexicographically.
         */
        continuationToken?: string,
        /**
         * Maximum number of deployment groups to return. Default is **1000**.
         */
        top?: number,
        /**
         * Comma separated list of IDs of the deployment groups.
         */
        ids?: string,
    }): CancelablePromise<Array<DeploymentGroup>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/distributedtask/deploymentgroups',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'name': name,
                'actionFilter': actionFilter,
                '$expand': expand,
                'continuationToken': continuationToken,
                '$top': top,
                'ids': ids,
            },
        });
    }
    /**
     * Delete a deployment group.
     * @returns any successful operation
     * @throws ApiError
     */
    public deploymentgroupsDelete({
        organization,
        project,
        deploymentGroupId,
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
         * ID of the deployment group to be deleted.
         */
        deploymentGroupId: number,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/{project}/_apis/distributedtask/deploymentgroups/{deploymentGroupId}',
            path: {
                'organization': organization,
                'project': project,
                'deploymentGroupId': deploymentGroupId,
            },
        });
    }
    /**
     * Get a deployment group by its ID.
     * @returns DeploymentGroup successful operation
     * @throws ApiError
     */
    public deploymentgroupsGet({
        organization,
        project,
        deploymentGroupId,
        actionFilter,
        expand,
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
         * ID of the deployment group.
         */
        deploymentGroupId: number,
        /**
         * Get the deployment group only if this action can be performed on it.
         */
        actionFilter?: 'none' | 'manage' | 'use',
        /**
         * Include these additional details in the returned object.
         */
        expand?: 'none' | 'machines' | 'tags',
    }): CancelablePromise<DeploymentGroup> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/distributedtask/deploymentgroups/{deploymentGroupId}',
            path: {
                'organization': organization,
                'project': project,
                'deploymentGroupId': deploymentGroupId,
            },
            query: {
                'actionFilter': actionFilter,
                '$expand': expand,
            },
        });
    }
    /**
     * Update a deployment group.
     * @returns DeploymentGroup successful operation
     * @throws ApiError
     */
    public deploymentgroupsUpdate({
        organization,
        body,
        project,
        deploymentGroupId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Deployment group to update.
         */
        body: DeploymentGroupUpdateParameter,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * ID of the deployment group.
         */
        deploymentGroupId: number,
    }): CancelablePromise<DeploymentGroup> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/distributedtask/deploymentgroups/{deploymentGroupId}',
            path: {
                'organization': organization,
                'project': project,
                'deploymentGroupId': deploymentGroupId,
            },
            body: body,
        });
    }
}
