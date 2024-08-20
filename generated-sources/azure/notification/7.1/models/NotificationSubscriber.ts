/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * A subscriber is a user or group that has the potential to receive notifications.
 */
export type NotificationSubscriber = {
    /**
     * Indicates how the subscriber should be notified by default.
     */
    deliveryPreference?: 'noDelivery' | 'preferredEmailAddress' | 'eachMember' | 'useDefault';
    flags?: 'none' | 'deliveryPreferencesEditable' | 'supportsPreferredEmailAddressDelivery' | 'supportsEachMemberDelivery' | 'supportsNoDelivery' | 'isUser' | 'isGroup' | 'isTeam';
    /**
     * Identifier of the subscriber.
     */
    id?: string;
    /**
     * Preferred email address of the subscriber. A null or empty value indicates no preferred email address has been set.
     */
    preferredEmailAddress?: string;
};

