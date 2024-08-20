/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RealtimeReleaseDefinitionEvent } from './RealtimeReleaseDefinitionEvent';
export type ReleaseEnvironmentStatusUpdatedEvent = (RealtimeReleaseDefinitionEvent & {
    environmentId?: number;
    environmentStatus?: 'undefined' | 'notStarted' | 'inProgress' | 'succeeded' | 'canceled' | 'rejected' | 'queued' | 'scheduled' | 'partiallySucceeded';
    latestDeploymentOperationStatus?: 'undefined' | 'queued' | 'scheduled' | 'pending' | 'approved' | 'rejected' | 'deferred' | 'queuedForAgent' | 'phaseInProgress' | 'phaseSucceeded' | 'phasePartiallySucceeded' | 'phaseFailed' | 'canceled' | 'phaseCanceled' | 'manualInterventionPending' | 'queuedForPipeline' | 'cancelling' | 'evaluatingGates' | 'gateFailed' | 'all';
    latestDeploymentStatus?: 'undefined' | 'notDeployed' | 'inProgress' | 'succeeded' | 'partiallySucceeded' | 'failed' | 'all';
    releaseId?: number;
});

