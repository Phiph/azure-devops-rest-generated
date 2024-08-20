/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EventsEvaluationResult } from './EventsEvaluationResult';
import type { NotificationsEvaluationResult } from './NotificationsEvaluationResult';
/**
 * Encapsulates the subscription evaluation results. It defines the Date Interval that was used, number of events evaluated and events and notifications results
 */
export type SubscriptionEvaluationResult = {
    /**
     * Subscription evaluation job status
     */
    evaluationJobStatus?: 'notSet' | 'queued' | 'inProgress' | 'cancelled' | 'succeeded' | 'failed' | 'timedOut' | 'notFound';
    /**
     * Subscription evaluation events results.
     */
    events?: EventsEvaluationResult;
    /**
     * The requestId which is the subscription evaluation jobId
     */
    id?: string;
    /**
     * Subscription evaluation  notification results.
     */
    notifications?: NotificationsEvaluationResult;
};

