/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Copy options of a Dashboard.
 */
export type CopyDashboardOptions = {
    /**
     * Dashboard Scope. Can be either Project or Project_Team
     */
    copyDashboardScope?: 'collection_User' | 'project_Team' | 'project';
    /**
     * When this flag is set to true,option to select the folder to copy Queries of copy dashboard will appear.
     */
    copyQueriesFlag?: boolean;
    /**
     * Description of the dashboard
     */
    description?: string;
    /**
     * Name of the dashboard
     */
    name?: string;
    /**
     * ID of the project. Provided by service at creation time.
     */
    projectId?: string;
    /**
     * Path to which the queries should be copied of copy dashboard
     */
    queryFolderPath?: string;
    /**
     * Refresh interval of dashboard
     */
    refreshInterval?: number;
    /**
     * ID of the team. Provided by service at creation time
     */
    teamId?: string;
};

