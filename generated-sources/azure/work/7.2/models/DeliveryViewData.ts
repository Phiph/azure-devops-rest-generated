/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ParentChildWIMap } from './ParentChildWIMap';
import type { PlanViewData } from './PlanViewData';
import type { TimelineCriteriaStatus } from './TimelineCriteriaStatus';
import type { TimelineTeamData } from './TimelineTeamData';
/**
 * Data contract for Data of Delivery View
 */
export type DeliveryViewData = (PlanViewData & {
    /**
     * Work item child id to parent id map
     */
    childIdToParentIdMap?: Record<string, number>;
    /**
     * Filter criteria status of the timeline
     */
    criteriaStatus?: TimelineCriteriaStatus;
    /**
     * The end date of the delivery view data
     */
    endDate?: string;
    /**
     * Max number of teams that can be configured for a delivery plan
     */
    maxExpandedTeams?: number;
    /**
     * Mapping between parent id, title and all the child work item ids
     */
    parentItemMaps?: Array<ParentChildWIMap>;
    /**
     * The start date for the delivery view data
     */
    startDate?: string;
    /**
     * All the team data
     */
    teams?: Array<TimelineTeamData>;
    /**
     * List of all work item ids that have a dependency but not a violation
     */
    workItemDependencies?: Array<number>;
    /**
     * List of all work item ids that have a violation
     */
    workItemViolations?: Array<number>;
});

