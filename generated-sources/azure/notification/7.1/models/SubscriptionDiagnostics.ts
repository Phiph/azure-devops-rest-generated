/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SubscriptionTracing } from './SubscriptionTracing';
/**
 * Contains all the diagnostics settings for a subscription.
 */
export type SubscriptionDiagnostics = {
    /**
     * Diagnostics settings for retaining delivery results.  Used for Service Hooks subscriptions.
     */
    deliveryResults?: SubscriptionTracing;
    /**
     * Diagnostics settings for troubleshooting notification delivery.
     */
    deliveryTracing?: SubscriptionTracing;
    /**
     * Diagnostics settings for troubleshooting event matching.
     */
    evaluationTracing?: SubscriptionTracing;
};

