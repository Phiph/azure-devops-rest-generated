/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Specifics of the resource for the permissions report
 */
export type PermissionsReportResource = {
    /**
     * GUID, Name, or ref for the specified resource type
     */
    resourceId?: string;
    /**
     * For repo resource type, resource name is the repo name
     */
    resourceName?: string;
    /**
     * Specify the type of resource to report permissions on
     */
    resourceType?: 'repo' | 'ref' | 'projectGit' | 'release' | 'tfvc';
};

