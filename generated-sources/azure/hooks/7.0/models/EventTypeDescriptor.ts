/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InputDescriptor } from './InputDescriptor';
/**
 * Describes a type of event
 */
export type EventTypeDescriptor = {
    /**
     * A localized description of the event type
     */
    description?: string;
    /**
     * A unique id for the event type
     */
    id?: string;
    /**
     * Event-specific inputs
     */
    inputDescriptors?: Array<InputDescriptor>;
    /**
     * A localized friendly name for the event type
     */
    name?: string;
    /**
     * A unique id for the publisher of this event type
     */
    publisherId?: string;
    /**
     * Supported versions for the event's resource payloads.
     */
    supportedResourceVersions?: Array<string>;
    /**
     * The url for this resource
     */
    url?: string;
};

