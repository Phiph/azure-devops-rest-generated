/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ISubscriptionChannel } from './ISubscriptionChannel';
import type { ISubscriptionFilter } from './ISubscriptionFilter';
import type { SubscriptionAdminSettings } from './SubscriptionAdminSettings';
import type { SubscriptionScope } from './SubscriptionScope';
import type { SubscriptionUserSettings } from './SubscriptionUserSettings';
/**
 * Parameters for updating an existing subscription. A subscription defines criteria for matching events and how the subscription's subscriber should be notified about those events. Note: only the fields to be updated should be set.
 */
export type NotificationSubscriptionUpdateParameters = {
    /**
     * Admin-managed settings for the subscription. Only applies to subscriptions where the subscriber is a group.
     */
    adminSettings?: SubscriptionAdminSettings;
    /**
     * Channel for delivering notifications triggered by the subscription.
     */
    channel?: ISubscriptionChannel;
    /**
     * Updated description for the subscription. Typically describes filter criteria which helps identity the subscription.
     */
    description?: string;
    /**
     * Matching criteria for the subscription. ExpressionFilter
     */
    filter?: ISubscriptionFilter;
    /**
     * The container in which events must be published from in order to be matched by the new subscription. If not specified, defaults to the current host (typically the current account or project collection). For example, a subscription scoped to project A will not produce notifications for events published from project B.
     */
    scope?: SubscriptionScope;
    /**
     * Updated status for the subscription. Typically used to enable or disable a subscription.
     */
    status?: 'jailedByNotificationsVolume' | 'pendingDeletion' | 'disabledArgumentException' | 'disabledProjectInvalid' | 'disabledMissingPermissions' | 'disabledFromProbation' | 'disabledInactiveIdentity' | 'disabledMessageQueueNotSupported' | 'disabledMissingIdentity' | 'disabledInvalidRoleExpression' | 'disabledInvalidPathClause' | 'disabledAsDuplicateOfDefault' | 'disabledByAdmin' | 'disabled' | 'enabled' | 'enabledOnProbation';
    /**
     * Optional message that provides more details about the updated status.
     */
    statusMessage?: string;
    /**
     * User-managed settings for the subscription. Only applies to subscriptions where the subscriber is a group. Typically used to opt-in or opt-out a user from a group subscription.
     */
    userSettings?: SubscriptionUserSettings;
};

