/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EventTypeDescriptor } from './EventTypeDescriptor';
import type { InputDescriptor } from './InputDescriptor';
import type { ReferenceLinks } from './ReferenceLinks';
/**
 * Defines the data contract of an event publisher.
 */
export type Publisher = {
    /**
     * Reference Links
     */
    _links?: ReferenceLinks;
    /**
     * Gets this publisher's localized description.
     */
    description?: string;
    /**
     * Gets this publisher's identifier.
     */
    id?: string;
    /**
     * Publisher-specific inputs
     */
    inputDescriptors?: Array<InputDescriptor>;
    /**
     * Gets this publisher's localized name.
     */
    name?: string;
    /**
     * The service instance type of the first party publisher.
     */
    serviceInstanceType?: string;
    /**
     * Gets this publisher's supported event types.
     */
    supportedEvents?: Array<EventTypeDescriptor>;
    /**
     * The url for this resource
     */
    url?: string;
};

