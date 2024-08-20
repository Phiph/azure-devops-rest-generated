/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
/**
 * Data contract for the plan definition
 */
export type Plan = {
    /**
     * Identity that created this plan. Defaults to null for records before upgrading to ScaledAgileViewComponent4.
     */
    createdByIdentity?: IdentityRef;
    /**
     * Date when the plan was created
     */
    createdDate?: string;
    /**
     * Description of the plan
     */
    description?: string;
    /**
     * Id of the plan
     */
    id?: string;
    /**
     * Date when the plan was last accessed. Default is null.
     */
    lastAccessed?: string;
    /**
     * Identity that last modified this plan. Defaults to null for records before upgrading to ScaledAgileViewComponent4.
     */
    modifiedByIdentity?: IdentityRef;
    /**
     * Date when the plan was last modified. Default to CreatedDate when the plan is first created.
     */
    modifiedDate?: string;
    /**
     * Name of the plan
     */
    name?: string;
    /**
     * The PlanPropertyCollection instance associated with the plan. These are dependent on the type of the plan. For example, DeliveryTimelineView, it would be of type DeliveryViewPropertyCollection.
     */
    properties?: any;
    /**
     * Revision of the plan. Used to safeguard users from overwriting each other's changes.
     */
    revision?: number;
    /**
     * Type of the plan
     */
    type?: 'deliveryTimelineView';
    /**
     * The resource url to locate the plan via rest api
     */
    url?: string;
    /**
     * Bit flag indicating set of permissions a user has to the plan.
     */
    userPermissions?: 'none' | 'view' | 'edit' | 'delete' | 'manage' | 'allPermissions';
};

