/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Criteria used in a search for change lists
 */
export type ChangeListSearchCriteria = {
    /**
     * If provided, a version descriptor to compare against base
     */
    compareVersion?: string;
    /**
     * If true, don't include delete history entries
     */
    excludeDeletes?: boolean;
    /**
     * Whether or not to follow renames for the given item being queried
     */
    followRenames?: boolean;
    /**
     * If provided, only include history entries created after this date (string)
     */
    fromDate?: string;
    /**
     * If provided, a version descriptor for the earliest change list to include
     */
    fromVersion?: string;
    /**
     * Path of item to search under. If the itemPaths memebr is used then it will take precedence over this.
     */
    itemPath?: string;
    /**
     * List of item paths to search under. If this member is used then itemPath will be ignored.
     */
    itemPaths?: Array<string>;
    /**
     * Version of the items to search
     */
    itemVersion?: string;
    /**
     * Number of results to skip (used when clicking more...)
     */
    skip?: number;
    /**
     * If provided, only include history entries created before this date (string)
     */
    toDate?: string;
    /**
     * If provided, the maximum number of history entries to return
     */
    top?: number;
    /**
     * If provided, a version descriptor for the latest change list to include
     */
    toVersion?: string;
    /**
     * Alias or display name of user who made the changes
     */
    user?: string;
};

