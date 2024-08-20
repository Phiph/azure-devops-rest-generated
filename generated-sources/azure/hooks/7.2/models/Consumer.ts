/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ConsumerAction } from './ConsumerAction';
import type { ExternalConfigurationDescriptor } from './ExternalConfigurationDescriptor';
import type { InputDescriptor } from './InputDescriptor';
import type { ReferenceLinks } from './ReferenceLinks';
/**
 * Defines the data contract of a consumer.
 */
export type Consumer = {
    /**
     * Reference Links
     */
    _links?: ReferenceLinks;
    /**
     * Gets this consumer's actions.
     */
    actions?: Array<ConsumerAction>;
    /**
     * Gets or sets this consumer's authentication type.
     */
    authenticationType?: 'none' | 'oAuth' | 'external';
    /**
     * Gets or sets this consumer's localized description.
     */
    description?: string;
    /**
     * Non-null only if subscriptions for this consumer are configured externally.
     */
    externalConfiguration?: ExternalConfigurationDescriptor;
    /**
     * Gets or sets this consumer's identifier.
     */
    id?: string;
    /**
     * Gets or sets this consumer's image URL, if any.
     */
    imageUrl?: string;
    /**
     * Gets or sets this consumer's information URL, if any.
     */
    informationUrl?: string;
    /**
     * Gets or sets this consumer's input descriptors.
     */
    inputDescriptors?: Array<InputDescriptor>;
    /**
     * Gets or sets this consumer's localized name.
     */
    name?: string;
    /**
     * The url for this resource
     */
    url?: string;
};

