/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Event } from './Event';
/**
 * Defines the data contract of notification details.
 */
export type NotificationDetails = {
    /**
     * Gets or sets the time that this notification was completed (response received from the consumer)
     */
    completedDate?: string;
    /**
     * Gets or sets this notification detail's consumer action identifier.
     */
    consumerActionId?: string;
    /**
     * Gets or sets this notification detail's consumer identifier.
     */
    consumerId?: string;
    /**
     * Gets or sets this notification detail's consumer inputs.
     */
    consumerInputs?: Record<string, string>;
    /**
     * Gets or sets the time that this notification was dequeued for processing
     */
    dequeuedDate?: string;
    /**
     * Gets or sets this notification detail's error detail.
     */
    errorDetail?: string;
    /**
     * Gets or sets this notification detail's error message.
     */
    errorMessage?: string;
    /**
     * Gets or sets this notification detail's event content.
     */
    event?: Event;
    /**
     * Gets or sets this notification detail's event type.
     */
    eventType?: string;
    /**
     * Gets or sets the time that this notification was finished processing (just before the request is sent to the consumer)
     */
    processedDate?: string;
    /**
     * Gets or sets this notification detail's publisher identifier.
     */
    publisherId?: string;
    /**
     * Gets or sets this notification detail's publisher inputs.
     */
    publisherInputs?: Record<string, string>;
    /**
     * Gets or sets the time that this notification was queued (created)
     */
    queuedDate?: string;
    /**
     * Gets or sets this notification detail's request.
     */
    request?: string;
    /**
     * Number of requests attempted to be sent to the consumer
     */
    requestAttempts?: number;
    /**
     * Duration of the request to the consumer in seconds
     */
    requestDuration?: number;
    /**
     * Gets or sets this notification detail's response.
     */
    response?: string;
};

