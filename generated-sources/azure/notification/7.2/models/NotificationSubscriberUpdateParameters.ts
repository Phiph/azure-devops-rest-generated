/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Updates to a subscriber. Typically used to change (or set) a preferred email address or default delivery preference.
 */
export type NotificationSubscriberUpdateParameters = {
    /**
     * New delivery preference for the subscriber (indicates how the subscriber should be notified).
     */
    deliveryPreference?: 'noDelivery' | 'preferredEmailAddress' | 'eachMember' | 'useDefault';
    /**
     * New preferred email address for the subscriber. Specify an empty string to clear the current address.
     */
    preferredEmailAddress?: string;
};

