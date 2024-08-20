/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Represents Work Item Recent Activity
 */
export type AccountRecentActivityWorkItemModelBase = {
    /**
     * Date of the last Activity by the user
     */
    activityDate?: string;
    /**
     * Type of the activity
     */
    activityType?: 'visited' | 'edited' | 'deleted' | 'restored';
    /**
     * Last changed date of the work item
     */
    changedDate?: string;
    /**
     * Work Item Id
     */
    id?: number;
    /**
     * TeamFoundationId of the user this activity belongs to
     */
    identityId?: string;
    /**
     * State of the work item
     */
    state?: string;
    /**
     * Team project the work item belongs to
     */
    teamProject?: string;
    /**
     * Title of the work item
     */
    title?: string;
    /**
     * Type of Work Item
     */
    workItemType?: string;
};

