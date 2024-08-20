/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InputDescriptor } from './InputDescriptor';
import type { ReferenceLinks } from './ReferenceLinks';
/**
 * Defines the data contract of a consumer action.
 */
export type ConsumerAction = {
    /**
     * Reference Links
     */
    _links?: ReferenceLinks;
    /**
     * Gets or sets the flag indicating if resource version can be overridden when creating or editing a subscription.
     */
    allowResourceVersionOverride?: boolean;
    /**
     * Gets or sets the identifier of the consumer to which this action belongs.
     */
    consumerId?: string;
    /**
     * Gets or sets this action's localized description.
     */
    description?: string;
    /**
     * Gets or sets this action's identifier.
     */
    id?: string;
    /**
     * Gets or sets this action's input descriptors.
     */
    inputDescriptors?: Array<InputDescriptor>;
    /**
     * Gets or sets this action's localized name.
     */
    name?: string;
    /**
     * Gets or sets this action's supported event identifiers.
     */
    supportedEventTypes?: Array<string>;
    /**
     * Gets or sets this action's supported resource versions.
     */
    supportedResourceVersions?: Record<string, Array<string>>;
    /**
     * The url for this resource
     */
    url?: string;
};

