/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Event } from './Event';
import type { InputFilter } from './InputFilter';
import type { Subscription } from './Subscription';
import type { VersionedResource } from './VersionedResource';
/**
 * Wrapper around an event which is being published
 */
export type PublisherEvent = {
    /**
     * Add key/value pairs which will be stored with a published notification in the SH service DB.  This key/value pairs are for diagnostic purposes only and will have not effect on the delivery of a notification.
     */
    diagnostics?: Record<string, string>;
    /**
     * The event being published
     */
    event?: Event;
    /**
     * Gets or sets flag for filtered events
     */
    isFilteredEvent?: boolean;
    /**
     * Additional data that needs to be sent as part of notification to complement the Resource data in the Event
     */
    notificationData?: Record<string, string>;
    /**
     * Gets or sets the array of older supported resource versions.
     */
    otherResourceVersions?: Array<VersionedResource>;
    /**
     * Optional publisher-input filters which restricts the set of subscriptions which are triggered by the event
     */
    publisherInputFilters?: Array<InputFilter>;
    /**
     * Gets or sets matched hooks subscription which caused this event.
     */
    subscription?: Subscription;
};

