/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NotificationEventField } from './NotificationEventField';
import type { NotificationEventPublisher } from './NotificationEventPublisher';
import type { NotificationEventRole } from './NotificationEventRole';
import type { NotificationEventTypeCategory } from './NotificationEventTypeCategory';
/**
 * Encapsulates the properties of an event type. It defines the fields, that can be used for filtering, for that event type.
 */
export type NotificationEventType = {
    category?: NotificationEventTypeCategory;
    /**
     * Gets or sets the color representing this event type. Example: rgb(128,245,211) or #fafafa
     */
    color?: string;
    customSubscriptionsAllowed?: boolean;
    eventPublisher?: NotificationEventPublisher;
    fields?: Record<string, NotificationEventField>;
    hasInitiator?: boolean;
    /**
     * Gets or sets the icon representing this event type. Can be a URL or a CSS class. Example: css://some-css-class
     */
    icon?: string;
    /**
     * Gets or sets the unique identifier of this event definition.
     */
    id?: string;
    /**
     * Gets or sets the name of this event definition.
     */
    name?: string;
    roles?: Array<NotificationEventRole>;
    /**
     * Gets or sets the scopes that this event type supports
     */
    supportedScopes?: Array<string>;
    /**
     * Gets or sets the rest end point to get this event type details (fields, fields types)
     */
    url?: string;
};

