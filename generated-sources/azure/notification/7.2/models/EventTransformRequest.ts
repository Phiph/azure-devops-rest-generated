/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * A transform request specify the properties of a notification event to be transformed.
 */
export type EventTransformRequest = {
    /**
     * Event payload.
     */
    eventPayload?: string;
    /**
     * Event type.
     */
    eventType?: string;
    /**
     * System inputs.
     */
    systemInputs?: Record<string, string>;
};

