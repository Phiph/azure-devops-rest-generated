/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BacklogColumn } from './BacklogColumn';
import type { WorkItemFieldReference } from './WorkItemFieldReference';
import type { WorkItemTypeReference } from './WorkItemTypeReference';
export type BacklogLevelConfiguration = {
    /**
     * List of fields to include in Add Panel
     */
    addPanelFields?: Array<WorkItemFieldReference>;
    /**
     * Color for the backlog level
     */
    color?: string;
    /**
     * Default list of columns for the backlog
     */
    columnFields?: Array<BacklogColumn>;
    /**
     * Default Work Item Type for the backlog
     */
    defaultWorkItemType?: WorkItemTypeReference;
    /**
     * Backlog Id (for Legacy Backlog Level from process config it can be categoryref name)
     */
    id?: string;
    /**
     * Indicates whether the backlog level is hidden
     */
    isHidden?: boolean;
    /**
     * Backlog Name
     */
    name?: string;
    /**
     * Backlog Rank (Taskbacklog is 0)
     */
    rank?: number;
    /**
     * The type of this backlog level
     */
    type?: 'portfolio' | 'requirement' | 'task';
    /**
     * Max number of work items to show in the given backlog
     */
    workItemCountLimit?: number;
    /**
     * Work Item types participating in this backlog as known by the project/Process, can be overridden by team settings for bugs
     */
    workItemTypes?: Array<WorkItemTypeReference>;
};

