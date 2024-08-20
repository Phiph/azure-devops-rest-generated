/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkItemIcon } from './WorkItemIcon';
import type { WorkItemStateColor } from './WorkItemStateColor';
import type { WorkItemStateTransition } from './WorkItemStateTransition';
import type { WorkItemTrackingResource } from './WorkItemTrackingResource';
import type { WorkItemTypeFieldInstance } from './WorkItemTypeFieldInstance';
/**
 * Describes a work item type.
 */
export type WorkItemType = (WorkItemTrackingResource & {
    /**
     * The color.
     */
    color?: string;
    /**
     * The description of the work item type.
     */
    description?: string;
    /**
     * The fields that exist on the work item type.
     */
    fieldInstances?: Array<WorkItemTypeFieldInstance>;
    /**
     * The fields that exist on the work item type.
     */
    fields?: Array<WorkItemTypeFieldInstance>;
    /**
     * The icon of the work item type.
     */
    icon?: WorkItemIcon;
    /**
     * True if work item type is disabled
     */
    isDisabled?: boolean;
    /**
     * Gets the name of the work item type.
     */
    name?: string;
    /**
     * The reference name of the work item type.
     */
    referenceName?: string;
    /**
     * Gets state information for the work item type.
     */
    states?: Array<WorkItemStateColor>;
    /**
     * Gets the various state transition mappings in the work item type.
     */
    transitions?: Record<string, Array<WorkItemStateTransition>>;
    /**
     * The XML form.
     */
    xmlForm?: string;
});

