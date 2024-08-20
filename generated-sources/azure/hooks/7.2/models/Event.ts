/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FormattedEventMessage } from './FormattedEventMessage';
import type { ResourceContainer } from './ResourceContainer';
import type { SessionToken } from './SessionToken';
/**
 * Encapsulates the properties of an event.
 */
export type Event = {
    /**
     * Gets or sets the UTC-based date and time that this event was created.
     */
    createdDate?: string;
    /**
     * Gets or sets the detailed message associated with this event.
     */
    detailedMessage?: FormattedEventMessage;
    /**
     * Gets or sets the type of this event.
     */
    eventType?: string;
    /**
     * Gets or sets the unique identifier of this event.
     */
    id?: string;
    /**
     * Gets or sets the (brief) message associated with this event.
     */
    message?: FormattedEventMessage;
    /**
     * Gets or sets the identifier of the publisher that raised this event.
     */
    publisherId?: string;
    /**
     * Gets or sets the data associated with this event.
     */
    resource?: any;
    /**
     * Gets or sets the resource containers.
     */
    resourceContainers?: Record<string, ResourceContainer>;
    /**
     * Gets or sets the version of the data associated with this event.
     */
    resourceVersion?: string;
    /**
     * Gets or sets the Session Token that can be used in further interactions
     */
    sessionToken?: SessionToken;
};

