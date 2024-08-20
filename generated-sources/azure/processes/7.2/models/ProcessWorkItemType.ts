/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FormLayout } from './FormLayout';
import type { WorkItemStateResultModel } from './WorkItemStateResultModel';
import type { WorkItemTypeBehavior } from './WorkItemTypeBehavior';
/**
 * Class that describes a work item type object
 */
export type ProcessWorkItemType = {
    behaviors?: Array<WorkItemTypeBehavior>;
    /**
     * Color hexadecimal code to represent the work item type
     */
    color?: string;
    /**
     * Indicates the type of customization on this work item System work item types are inherited from parent process but not modified Inherited work item types are modified work item that were inherited from parent process Custom work item types are work item types that were created in the current process
     */
    customization?: 'system' | 'inherited' | 'custom';
    /**
     * Description of the work item type
     */
    description?: string;
    /**
     * Icon to represent the work item typ
     */
    icon?: string;
    /**
     * Reference name of the parent work item type
     */
    inherits?: string;
    /**
     * Indicates if a work item type is disabled
     */
    isDisabled?: boolean;
    layout?: FormLayout;
    /**
     * Name of the work item type
     */
    name?: string;
    /**
     * Reference name of work item type
     */
    referenceName?: string;
    states?: Array<WorkItemStateResultModel>;
    /**
     * Url of the work item type
     */
    url?: string;
};

