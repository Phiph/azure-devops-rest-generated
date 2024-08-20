/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PermissionsReportResource } from './PermissionsReportResource';
/**
 * Details for creating a permissions report
 */
export type PermissionsReportRequest = {
    /**
     * List of groups and users to fetch permissions on.  An empty list will fetch all groups and users in the organization
     */
    descriptors?: Array<string>;
    /**
     * Name of the report to create, make it unique
     */
    reportName?: string;
    /**
     * List of resources to fetch permisions on
     */
    resources?: Array<PermissionsReportResource>;
};

