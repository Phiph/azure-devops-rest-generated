/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkItemBehaviorField } from './WorkItemBehaviorField';
import type { WorkItemBehaviorReference } from './WorkItemBehaviorReference';
export type WorkItemBehavior = {
    abstract?: boolean;
    color?: string;
    description?: string;
    fields?: Array<WorkItemBehaviorField>;
    id?: string;
    inherits?: WorkItemBehaviorReference;
    name?: string;
    overriden?: boolean;
    rank?: number;
    url?: string;
};

