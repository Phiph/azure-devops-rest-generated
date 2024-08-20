/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CategoryConfiguration } from './CategoryConfiguration';
import type { WorkItemFieldReference } from './WorkItemFieldReference';
/**
 * Process Configurations for the project
 */
export type ProcessConfiguration = {
    /**
     * Details about bug work items
     */
    bugWorkItems?: CategoryConfiguration;
    /**
     * Details about portfolio backlogs
     */
    portfolioBacklogs?: Array<CategoryConfiguration>;
    /**
     * Details of requirement backlog
     */
    requirementBacklog?: CategoryConfiguration;
    /**
     * Details of task backlog
     */
    taskBacklog?: CategoryConfiguration;
    /**
     * Type fields for the process configuration
     */
    typeFields?: Record<string, WorkItemFieldReference>;
    url?: string;
};

