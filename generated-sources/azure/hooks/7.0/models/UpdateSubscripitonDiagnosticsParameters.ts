/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UpdateSubscripitonTracingParameters } from './UpdateSubscripitonTracingParameters';
/**
 * Parameters to update diagnostics settings for a subscription.
 */
export type UpdateSubscripitonDiagnosticsParameters = {
    /**
     * Diagnostics settings for retaining delivery results.  Used for Service Hooks subscriptions.
     */
    deliveryResults?: UpdateSubscripitonTracingParameters;
    /**
     * Diagnostics settings for troubleshooting notification delivery.
     */
    deliveryTracing?: UpdateSubscripitonTracingParameters;
    /**
     * Diagnostics settings for troubleshooting event matching.
     */
    evaluationTracing?: UpdateSubscripitonTracingParameters;
};

