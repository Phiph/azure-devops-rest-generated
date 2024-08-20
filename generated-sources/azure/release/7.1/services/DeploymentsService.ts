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
        definitionId?: number,
        definitionEnvironmentId?: number,
        createdBy?: string,
        minModifiedTime?: string,
        maxModifiedTime?: string,
        deploymentStatus?: 'undefined' | 'notDeployed' | 'inProgress' | 'succeeded' | 'partiallySucceeded' | 'failed' | 'all',
        operationStatus?: 'undefined' | 'queued' | 'scheduled' | 'pending' | 'approved' | 'rejected' | 'deferred' | 'queuedForAgent' | 'phaseInProgress' | 'phaseSucceeded' | 'phasePartiallySucceeded' | 'phaseFailed' | 'canceled' | 'phaseCanceled' | 'manualInterventionPending' | 'queuedForPipeline' | 'cancelling' | 'evaluatingGates' | 'gateFailed' | 'all',
        latestAttemptsOnly?: boolean,
        queryOrder?: 'descending' | 'ascending',
        top?: number,
        continuationToken?: number,
        createdFor?: string,
        minStartedTime?: string,
        maxStartedTime?: string,
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
