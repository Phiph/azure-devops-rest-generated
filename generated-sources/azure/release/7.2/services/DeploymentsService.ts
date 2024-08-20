/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Deployment } from '../models/Deployment';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DeploymentsService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Get a list of deployments
     * @returns Deployment successful operation
     * @throws ApiError
     */
    public deploymentsList({
        organization,
        project,
        definitionId,
        definitionEnvironmentId,
        createdBy,
        minModifiedTime,
        maxModifiedTime,
        deploymentStatus,
        operationStatus,
        latestAttemptsOnly,
        queryOrder,
        top,
        continuationToken,
        createdFor,
        minStartedTime,
        maxStartedTime,
        sourceBranch,
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
         * List the deployments for a given definition id.
         */
        definitionId?: number,
        /**
         * List the deployments for a given definition environment id.
         */
        definitionEnvironmentId?: number,
        /**
         * List the deployments for which deployments are created as identity specified.
         */
        createdBy?: string,
        /**
         * List the deployments with LastModified time >= minModifiedTime.
         */
        minModifiedTime?: string,
        /**
         * List the deployments with LastModified time <= maxModifiedTime.
         */
        maxModifiedTime?: string,
        /**
         * List the deployments with given deployment status. Defult is 'All'.
         */
        deploymentStatus?: 'undefined' | 'notDeployed' | 'inProgress' | 'succeeded' | 'partiallySucceeded' | 'failed' | 'all',
        /**
         * List the deployments with given operation status. Default is 'All'.
         */
        operationStatus?: 'undefined' | 'queued' | 'scheduled' | 'pending' | 'approved' | 'rejected' | 'deferred' | 'queuedForAgent' | 'phaseInProgress' | 'phaseSucceeded' | 'phasePartiallySucceeded' | 'phaseFailed' | 'canceled' | 'phaseCanceled' | 'manualInterventionPending' | 'queuedForPipeline' | 'cancelling' | 'evaluatingGates' | 'gateFailed' | 'all',
        /**
         * 'true' to include deployments with latest attempt only. Default is 'false'.
         */
        latestAttemptsOnly?: boolean,
        /**
         * List the deployments with given query order. Default is 'Descending'.
         */
        queryOrder?: 'descending' | 'ascending',
        /**
         * List the deployments with given top. Default top is '50' and Max top is '100'.
         */
        top?: number,
        /**
         * List the deployments with deployment id >= continuationToken.
         */
        continuationToken?: number,
        /**
         * List the deployments for which deployments are requested as identity specified.
         */
        createdFor?: string,
        /**
         * List the deployments with StartedOn time >= minStartedTime.
         */
        minStartedTime?: string,
        /**
         * List the deployments with StartedOn time <= maxStartedTime.
         */
        maxStartedTime?: string,
        /**
         * List the deployments that are deployed from given branch name.
         */
        sourceBranch?: string,
    }): CancelablePromise<Array<Deployment>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/{organization}/{project}/_apis/release/deployments',
            path: {
                'organization': organization,
                'project': project,
            },
            query: {
                'definitionId': definitionId,
                'definitionEnvironmentId': definitionEnvironmentId,
                'createdBy': createdBy,
                'minModifiedTime': minModifiedTime,
                'maxModifiedTime': maxModifiedTime,
                'deploymentStatus': deploymentStatus,
                'operationStatus': operationStatus,
                'latestAttemptsOnly': latestAttemptsOnly,
                'queryOrder': queryOrder,
                '$top': top,
                'continuationToken': continuationToken,
                'createdFor': createdFor,
                'minStartedTime': minStartedTime,
                'maxStartedTime': maxStartedTime,
                'sourceBranch': sourceBranch,
            },
        });
    }
}
