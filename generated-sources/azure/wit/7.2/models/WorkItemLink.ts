/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkItemReference } from './WorkItemReference';
/**
 * A link between two work items.
 */
export type WorkItemLink = {
    /**
     * The type of link.
     */
    rel?: string;
    /**
     * The source work item.
     */
    source?: WorkItemReference;
    /**
     * The target work item.
     */
    target?: WorkItemReference;
};

