/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkItemClassificationNode } from '../models/WorkItemClassificationNode';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ClassificationNodesService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Gets root classification nodes under the project.
     * @returns WorkItemClassificationNode successful operation
     * @throws ApiError
     */
    public classificationNodesGetRootNodes({
        organization,
        project,
        depth,
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
         * Depth of children to fetch.
         */
        depth?: number,
    }): CancelablePromise<Array<WorkItemClassificationNode>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/wit/classificationnodes',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                '$depth': depth,
            },
        });
    }
    /**
     * Create new or update an existing classification node.
     * @returns WorkItemClassificationNode successful operation
     * @throws ApiError
     */
    public classificationNodesCreateOrUpdate({
        organization,
        body,
        project,
        structureGroup,
        path,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Node to create or update.
         */
        body: WorkItemClassificationNode,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Structure group of the classification node, area or iteration.
         */
        structureGroup: 'areas' | 'iterations',
        /**
         * Path of the classification node.
         */
        path: string,
    }): CancelablePromise<WorkItemClassificationNode> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/{organization}/{project}/_apis/wit/classificationnodes/{structureGroup}/{path}',
            path: {
                'organization': organization,
                'project': project,
                'structureGroup': structureGroup,
                'path': path,
            },
            body: body,
        });
    }
    /**
     * Delete an existing classification node.
     * @returns any successful operation
     * @throws ApiError
     */
    public classificationNodesDelete({
        organization,
        project,
        structureGroup,
        path,
        reclassifyId,
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
         * Structure group of the classification node, area or iteration.
         */
        structureGroup: 'areas' | 'iterations',
        /**
         * Path of the classification node.
         */
        path: string,
        /**
         * Id of the target classification node for reclassification.
         */
        reclassifyId?: number,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/{organization}/{project}/_apis/wit/classificationnodes/{structureGroup}/{path}',
            path: {
                'organization': organization,
                'project': project,
                'structureGroup': structureGroup,
                'path': path,
            },
            query: {
                '$reclassifyId': reclassifyId,
            },
        });
    }
    /**
     * Gets the classification node for a given node path.
     * @returns WorkItemClassificationNode successful operation
     * @throws ApiError
     */
    public classificationNodesGet({
        organization,
        project,
        structureGroup,
        path,
        depth,
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
         * Structure group of the classification node, area or iteration.
         */
        structureGroup: 'areas' | 'iterations',
        /**
         * Path of the classification node.
         */
        path: string,
        /**
         * Depth of children to fetch.
         */
        depth?: number,
    }): CancelablePromise<WorkItemClassificationNode> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/wit/classificationnodes/{structureGroup}/{path}',
            path: {
                'organization': organization,
                'project': project,
                'structureGroup': structureGroup,
                'path': path,
            },
            query: {
                '$depth': depth,
            },
        });
    }
    /**
     * Update an existing classification node.
     * @returns WorkItemClassificationNode successful operation
     * @throws ApiError
     */
    public classificationNodesUpdate({
        organization,
        body,
        project,
        structureGroup,
        path,
    }: {
        /**
         * The name of the Azure DevOps organization.
         */
        organization: string,
        /**
         * Node to create or update.
         */
        body: WorkItemClassificationNode,
        /**
         * Project ID or project name
         */
        project: string,
        /**
         * Structure group of the classification node, area or iteration.
         */
        structureGroup: 'areas' | 'iterations',
        /**
         * Path of the classification node.
         */
        path: string,
    }): CancelablePromise<WorkItemClassificationNode> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/{organization}/{project}/_apis/wit/classificationnodes/{structureGroup}/{path}',
            path: {
                'organization': organization,
                'project': project,
                'structureGroup': structureGroup,
                'path': path,
            },
            body: body,
        });
    }
}
