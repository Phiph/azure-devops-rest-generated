/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Detailed report of permissions for a set of groups and users over a set of security namespaces
 */
export type PermissionsReport = {
    /**
     * Error if the report creation failed or empty if successful
     */
    error?: string;
    id?: string;
    /**
     * Name of the report which typically includes the requestor's display name
     */
    reportName?: string;
    reportStatus?: 'created' | 'inProgress' | 'completedWithErrors' | 'completedSuccessfully' | 'deleted';
    reportStatusLastUpdatedTime?: string;
    requestedTime?: string;
    /**
     * User who requested the report be created
     */
    requestor?: string;
};

