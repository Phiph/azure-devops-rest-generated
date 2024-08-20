/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { KubernetesResource } from '../models/KubernetesResource';
import type { KubernetesResourceCreateParameters } from '../models/KubernetesResourceCreateParameters';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class KubernetesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns KubernetesResource successful operation
     * @throws ApiError
     */
    public kubernetesAdd({
        organization,
        body,
        project,
        environmentId,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        body: KubernetesResourceCreateParameters,
        /**
         * Project ID or project name
         */
        project: string,
        environmentId: number,
    }): CancelablePromise<KubernetesResource> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/distributedtask/environments/{environmentId}/providers/kubernetes',
            path: {
                'organization': organization,
                'project': project,
                'environmentId': environmentId,
            },
            body: body,
        });
    }
    /**
     * @returns any successful operation
     * @throws ApiError
     */
    public kubernetesDelete({
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
        environmentId: number,
        resourceId: number,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/{project}/_apis/distributedtask/environments/{environmentId}/providers/kubernetes/{resourceId}',
            path: {
                'organization': organization,
                'project': project,
                'environmentId': environmentId,
                'resourceId': resourceId,
            },
        });
    }
    /**
     * @returns KubernetesResource successful operation
     * @throws ApiError
     */
    public kubernetesGet({
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
        environmentId: number,
        resourceId: number,
    }): CancelablePromise<KubernetesResource> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/distributedtask/environments/{environmentId}/providers/kubernetes/{resourceId}',
            path: {
                'organization': organization,
                'project': project,
                'environmentId': environmentId,
                'resourceId': resourceId,
            },
        });
    }
}