/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
import type { ISubscriptionChannel } from './ISubscriptionChannel';
import type { ISubscriptionFilter } from './ISubscriptionFilter';
import type { ReferenceLinks } from './ReferenceLinks';
import type { SubscriptionAdminSettings } from './SubscriptionAdminSettings';
import type { SubscriptionDiagnostics } from './SubscriptionDiagnostics';
import type { SubscriptionScope } from './SubscriptionScope';
import type { SubscriptionUserSettings } from './SubscriptionUserSettings';
/**
 * A subscription defines criteria for matching events and how the subscription's subscriber should be notified about those events.
 */
export type NotificationSubscription = {
    /**
     * Links to related resources, APIs, and views for the subscription.
     */
    _links?: ReferenceLinks;
    /**
     * Admin-managed settings for the subscription. Only applies when the subscriber is a group.
     */
    adminSettings?: SubscriptionAdminSettings;
    /**
     * Channel for delivering notifications triggered by the subscription.
     */
    channel?: ISubscriptionChannel;
    /**
     * Description of the subscription. Typically describes filter criteria which helps identity the subscription.
     */
    description?: string;
    /**
     * Diagnostics for this subscription.
     */
    diagnostics?: SubscriptionDiagnostics;
    /**
     * Any extra properties like detailed description for different contexts, user/group contexts
     */
    extendedProperties?: Record<string, string>;
    /**
     * Matching criteria for the subscription. ExpressionFilter
     */
    filter?: ISubscriptionFilter;
    /**
     * Read-only indicators that further describe the subscription.
     */
    flags?: 'none' | 'groupSubscription' | 'contributedSubscription' | 'canOptOut' | 'teamSubscription' | 'oneActorMatches';
    /**
     * Subscription identifier.
     */
    id?: string;
    /**
     * User that last modified (or created) the subscription.
     */
    lastModifiedBy?: IdentityRef;
    /**
     * Date when the subscription was last modified. If the subscription has not been updated since it was created, this value will indicate when the subscription was created.
     */
    modifiedDate?: string;
    /**
     * The permissions the user have for this subscriptions.
     */
    permissions?: 'none' | 'view' | 'edit' | 'delete';
    /**
     * The container in which events must be published from in order to be matched by the subscription. If empty, the scope is the current host (typically an account or project collection). For example, a subscription scoped to project A will not produce notifications for events published from project B.
     */
    scope?: SubscriptionScope;
    /**
     * Status of the subscription. Typically indicates whether the subscription is enabled or not.
     */
    status?: 'jailedByNotificationsVolume' | 'pendingDeletion' | 'disabledArgumentException' | 'disabledProjectInvalid' | 'disabledMissingPermissions' | 'disabledFromProbation' | 'disabledInactiveIdentity' | 'disabledMessageQueueNotSupported' | 'disabledMissingIdentity' | 'disabledInvalidRoleExpression' | 'disabledInvalidPathClause' | 'disabledAsDuplicateOfDefault' | 'disabledByAdmin' | 'disabled' | 'enabled' | 'enabledOnProbation';
    /**
     * Message that provides more details about the status of the subscription.
     */
    statusMessage?: string;
    /**
     * User or group that will receive notifications for events matching the subscription's filter criteria.
     */
    subscriber?: IdentityRef;
    /**
     * REST API URL of the subscription.
     */
    url?: string;
    /**
     * User-managed settings for the subscription. Only applies when the subscriber is a group. Typically used to indicate whether the calling user is opted in or out of a group subscription.
     */
    userSettings?: SubscriptionUserSettings;
};

