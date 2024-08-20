/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The class represents the reporting work item revision filer.
 */
export type ReportingWorkItemRevisionsFilter = {
    /**
     * A list of fields to return in work item revisions. Omit this parameter to get all reportable fields.
     */
    fields?: Array<string>;
    /**
     * Include deleted work item in the result.
     */
    includeDeleted?: boolean;
    /**
     * Return an identity reference instead of a string value for identity fields.
     */
    includeIdentityRef?: boolean;
    /**
     * Include only the latest version of a work item, skipping over all previous revisions of the work item.
     */
    includeLatestOnly?: boolean;
    /**
     * Include tag reference instead of string value for System.Tags field
     */
    includeTagRef?: boolean;
    /**
     * A list of types to filter the results to specific work item types. Omit this parameter to get work item revisions of all work item types.
     */
    types?: Array<string>;
};

