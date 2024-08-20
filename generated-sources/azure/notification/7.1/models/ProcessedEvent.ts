/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EventActor } from './EventActor';
import type { GeneratedNotification } from './GeneratedNotification';
import type { ProcessingIdentities } from './ProcessingIdentities';
import type { SubscriptionEvaluation } from './SubscriptionEvaluation';
export type ProcessedEvent = {
    /**
     * All of the users that were associated with this event and their role.
     */
    actors?: Array<EventActor>;
    allowedChannels?: string;
    artifactUri?: string;
    deliveryIdentities?: ProcessingIdentities;
    /**
     * Evaluations for each user
     */
    evaluations?: Record<string, SubscriptionEvaluation>;
    eventId?: number;
    /**
     * Which members were excluded from evaluation (only applies to ActorMatcher subscriptions)
     */
    exclusions?: Array<EventActor>;
    /**
     * Which members were included for evaluation (only applies to ActorMatcher subscriptions)
     */
    inclusions?: Array<EventActor>;
    notifications?: Array<GeneratedNotification>;
};

