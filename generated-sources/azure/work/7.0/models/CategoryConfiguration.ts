/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WorkItemTypeReference } from './WorkItemTypeReference';
/**
 * Details about a given backlog category
 */
export type CategoryConfiguration = {
    /**
     * Name
     */
    name?: string;
    /**
     * Category Reference Name
     */
    referenceName?: string;
    /**
     * Work item types for the backlog category
     */
    workItemTypes?: Array<WorkItemTypeReference>;
};

