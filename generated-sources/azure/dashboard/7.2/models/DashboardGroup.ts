/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DashboardGroupEntry } from './DashboardGroupEntry';
import type { ReferenceLinks } from './ReferenceLinks';
/**
 * Describes a list of dashboards associated to an owner. Currently, teams own dashboard groups.
 */
export type DashboardGroup = {
    _links?: ReferenceLinks;
    /**
     * A list of Dashboards held by the Dashboard Group
     */
    dashboardEntries?: Array<DashboardGroupEntry>;
    /**
     * Deprecated: The old permission model describing the level of permissions for the current team. Pre-M125.
     */
    permission?: 'none' | 'edit' | 'manage' | 'managePermissions';
    /**
     * A permissions bit mask describing the security permissions of the current team for dashboards. When this permission is the value None, use GroupMemberPermission. Permissions are evaluated based on the presence of a value other than None, else the GroupMemberPermission will be saved.
     */
    teamDashboardPermission?: 'none' | 'read' | 'create' | 'edit' | 'delete' | 'managePermissions';
    url?: string;
};

