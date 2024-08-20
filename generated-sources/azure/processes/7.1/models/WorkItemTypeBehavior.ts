/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkItemBehaviorReference } from './WorkItemBehaviorReference';
/**
 * Association between a work item type and it's behavior
 */
export type WorkItemTypeBehavior = {
    /**
     * Reference to the behavior of a work item type
     */
    behavior?: WorkItemBehaviorReference;
    /**
     * If true the work item type is the default work item type in the behavior
     */
    isDefault?: boolean;
    /**
     * If true the work item type is the default work item type in the parent behavior
     */
    isLegacyDefault?: boolean;
    /**
     * URL of the work item type behavior
     */
    url?: string;
};

