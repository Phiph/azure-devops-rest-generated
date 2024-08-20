/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FormLayout } from './FormLayout';
import type { WorkItemStateResultModel } from './WorkItemStateResultModel';
import type { WorkItemTypeBehavior } from './WorkItemTypeBehavior';
export type WorkItemTypeModel = {
    behaviors?: Array<WorkItemTypeBehavior>;
    class?: 'system' | 'derived' | 'custom';
    color?: string;
    description?: string;
    icon?: string;
    id?: string;
    /**
     * Parent WIT Id/Internal ReferenceName that it inherits from
     */
    inherits?: string;
    isDisabled?: boolean;
    layout?: FormLayout;
    name?: string;
    states?: Array<WorkItemStateResultModel>;
    url?: string;
};

