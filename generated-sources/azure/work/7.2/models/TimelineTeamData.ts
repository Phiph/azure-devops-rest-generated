/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BacklogLevel } from './BacklogLevel';
import type { TeamFieldValue } from './TeamFieldValue';
import type { TimelineTeamIteration } from './TimelineTeamIteration';
import type { TimelineTeamStatus } from './TimelineTeamStatus';
import type { WorkItemColor } from './WorkItemColor';
export type TimelineTeamData = {
    /**
     * Backlog matching the mapped backlog associated with this team.
     */
    backlog?: BacklogLevel;
    /**
     * The field reference names of the work item data
     */
    fieldReferenceNames?: Array<string>;
    /**
     * The id of the team
     */
    id?: string;
    /**
     * Was iteration and work item data retrieved for this team. <remarks> Teams with IsExpanded false have not had their iteration, work item, and field related data queried and will never contain this data. If true then these items are queried and, if there are items in the queried range, there will be data. </remarks>
     */
    isExpanded?: boolean;
    /**
     * The iteration data, including the work items, in the queried date range.
     */
    iterations?: Array<TimelineTeamIteration>;
    /**
     * The name of the team
     */
    name?: string;
    /**
     * The order by field name of this team
     */
    orderByField?: string;
    /**
     * The field reference names of the partially paged work items, such as ID, WorkItemType
     */
    partiallyPagedFieldReferenceNames?: Array<string>;
    partiallyPagedWorkItems?: Array<Array<any>>;
    /**
     * The project id the team belongs team
     */
    projectId?: string;
    /**
     * Work item types for which we will collect roll up data on the client side
     */
    rollupWorkItemTypes?: Array<string>;
    /**
     * Status for this team.
     */
    status?: TimelineTeamStatus;
    /**
     * The team field default value
     */
    teamFieldDefaultValue?: string;
    /**
     * The team field name of this team
     */
    teamFieldName?: string;
    /**
     * The team field values
     */
    teamFieldValues?: Array<TeamFieldValue>;
    /**
     * Work items associated with the team that are not under any of the team's iterations
     */
    workItems?: Array<Array<any>>;
    /**
     * Colors for the work item types.
     */
    workItemTypeColors?: Array<WorkItemColor>;
};

