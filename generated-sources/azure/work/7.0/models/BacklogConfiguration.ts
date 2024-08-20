/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BacklogFields } from './BacklogFields';
import type { BacklogLevelConfiguration } from './BacklogLevelConfiguration';
import type { WorkItemTypeStateInfo } from './WorkItemTypeStateInfo';
export type BacklogConfiguration = {
    /**
     * Behavior/type field mapping
     */
    backlogFields?: BacklogFields;
    /**
     * Bugs behavior
     */
    bugsBehavior?: 'off' | 'asRequirements' | 'asTasks';
    /**
     * Hidden Backlog
     */
    hiddenBacklogs?: Array<string>;
    /**
     * Is BugsBehavior Configured in the process
     */
    isBugsBehaviorConfigured?: boolean;
    /**
     * Portfolio backlog descriptors
     */
    portfolioBacklogs?: Array<BacklogLevelConfiguration>;
    /**
     * Requirement backlog
     */
    requirementBacklog?: BacklogLevelConfiguration;
    /**
     * Task backlog
     */
    taskBacklog?: BacklogLevelConfiguration;
    url?: string;
    /**
     * Mapped states for work item types
     */
    workItemTypeMappedStates?: Array<WorkItemTypeStateInfo>;
};

