/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DeploymentMachine } from '../models/DeploymentMachine';
import type { DeploymentTargetUpdateParameter } from '../models/DeploymentTargetUpdateParameter';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TargetsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get a list of deployment targets in a deployment group.
     * @returns DeploymentMachine successful operation
     * @throws ApiError
     */
    public targetsList({
        organization,
        project,
        deploymentGroupId,
        tags,
        name,
        partialNameMatch,
        expand,
        agentStatus,
        agentJobResult,
        continuationToken,
        top,
        enabled,
        propertyFilters,
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
         * Get only the deployment targets that contain all these comma separted list of tags.
         */
        tags?: string,
        /**
         * Name pattern of the deployment targets to return.
         */
        name?: string,
        /**
         * When set to true, treats **name** as pattern. Else treats it as absolute match. Default is **false**.
         */
        partialNameMatch?: boolean,
        /**
         * Include these additional details in the returned objects.
         */
        expand?: 'none' | 'capabilities' | 'assignedRequest' | 'lastCompletedRequest',
        /**
         * Get only deployment targets that have this status.
         */
        agentStatus?: 'offline' | 'online' | 'all',
        /**
         * Get only deployment targets that have this last job result.
         */
        agentJobResult?: 'failed' | 'passed' | 'neverDeployed' | 'all',
        /**
         * Get deployment targets with names greater than this continuationToken lexicographically.
         */
        continuationToken?: string,
        /**
         * Maximum number of deployment targets to return. Default is **1000**.
         */
        top?: number,
        /**
         * Get only deployment targets that are enabled or disabled. Default is 'null' which returns all the targets.
         */
        enabled?: boolean,
        propertyFilters?: string,
    }): CancelablePromise<Array<DeploymentMachine>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/distributedtask/deploymentgroups/{deploymentGroupId}/targets',
            path: {
                'organization': organization,
                'project': project,
                'deploymentGroupId': deploymentGroupId,
            },
            query: {
                'tags': tags,
                'name': name,
                'partialNameMatch': partialNameMatch,
                '$expand': expand,
                'agentStatus': agentStatus,
                'agentJobResult': agentJobResult,
                'continuationToken': continuationToken,
                '$top': top,
                'enabled': enabled,
                'propertyFilters': propertyFilters,
            },
        });
    }
    /**
     * Update tags of a list of deployment targets in a deployment group.
     * @returns DeploymentMachine successful operation
     * @throws ApiError
     */
    public targetsUpdate({
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
         * Deployment targets with tags to udpdate.
         */
        body: Array<DeploymentTargetUpdateParameter>,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * ID of the deployment group in which deployment targets are updated.
         */
        deploymentGroupId: number,
    }): CancelablePromise<Array<DeploymentMachine>> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/distributedtask/deploymentgroups/{deploymentGroupId}/targets',
            path: {
                'organization': organization,
                'project': project,
                'deploymentGroupId': deploymentGroupId,
            },
            body: body,
        });
    }
    /**
     * Delete a deployment target in a deployment group. This deletes the agent from associated deployment pool too.
     * @returns any successful operation
     * @throws ApiError
     */
    public targetsDelete({
        organization,
        project,
        deploymentGroupId,
        targetId,
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
         * ID of the deployment group in which deployment target is deleted.
         */
        deploymentGroupId: number,
        /**
         * ID of the deployment target to delete.
         */
        targetId: number,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/{project}/_apis/distributedtask/deploymentgroups/{deploymentGroupId}/targets/{targetId}',
            path: {
                'organization': organization,
                'project': project,
                'deploymentGroupId': deploymentGroupId,
                'targetId': targetId,
            },
        });
    }
    /**
     * Get a deployment target by its ID in a deployment group
     * @returns DeploymentMachine successful operation
     * @throws ApiError
     */
    public targetsGet({
        organization,
        project,
        deploymentGroupId,
        targetId,
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
         * ID of the deployment group to which deployment target belongs.
         */
        deploymentGroupId: number,
        /**
         * ID of the deployment target to return.
         */
        targetId: number,
        /**
         * Include these additional details in the returned objects.
         */
        expand?: 'none' | 'capabilities' | 'assignedRequest' | 'lastCompletedRequest',
    }): CancelablePromise<DeploymentMachine> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/distributedtask/deploymentgroups/{deploymentGroupId}/targets/{targetId}',
            path: {
                'organization': organization,
                'project': project,
                'deploymentGroupId': deploymentGroupId,
                'targetId': targetId,
            },
            query: {
                '$expand': expand,
            },
        });
    }
}
