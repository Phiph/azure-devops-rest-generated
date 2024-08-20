/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReferenceLinks } from './ReferenceLinks';
import type { Widget } from './Widget';
/**
 * Model of a Dashboard.
 */
export type Dashboard = {
    _links?: ReferenceLinks;
    /**
     * Entity to which the dashboard is scoped.
     */
    dashboardScope?: 'collection_User' | 'project_Team' | 'project';
    /**
     * Description of the dashboard.
     */
    description?: string;
    /**
     * Server defined version tracking value, used for edit collision detection.
     */
    eTag?: string;
    /**
     * Dashboard Global Parameters Config
     */
    globalParametersConfig?: string;
    /**
     * ID of the group for a dashboard. For team-scoped dashboards, this is the unique identifier for the team associated with the dashboard. For project-scoped dashboards this property is empty.
     */
    groupId?: string;
    /**
     * ID of the Dashboard. Provided by service at creation time.
     */
    id?: string;
    /**
     * Dashboard Last Accessed Date.
     */
    lastAccessedDate?: string;
    /**
     * Id of the person who modified Dashboard.
     */
    modifiedBy?: string;
    /**
     * Dashboard's last modified date.
     */
    modifiedDate?: string;
    /**
     * Name of the Dashboard.
     */
    name?: string;
    /**
     * ID of the owner for a dashboard. For team-scoped dashboards, this is the unique identifier for the team associated with the dashboard. For project-scoped dashboards, this is the unique identifier for the user identity associated with the dashboard.
     */
    ownerId?: string;
    /**
     * Position of the dashboard, within a dashboard group. If unset at creation time, position is decided by the service.
     */
    position?: number;
    /**
     * Interval for client to automatically refresh the dashboard. Expressed in minutes.
     */
    refreshInterval?: number;
    url?: string;
    /**
     * The set of Widgets on the dashboard.
     */
    widgets?: Array<Widget>;
};

