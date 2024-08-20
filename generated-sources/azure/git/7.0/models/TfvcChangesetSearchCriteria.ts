/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TfvcMappingFilter } from './TfvcMappingFilter';
/**
 * Criteria used in a search for change lists.
 */
export type TfvcChangesetSearchCriteria = {
    /**
     * Alias or display name of user who made the changes.
     */
    author?: string;
    /**
     * Whether or not to follow renames for the given item being queried.
     */
    followRenames?: boolean;
    /**
     * If provided, only include changesets created after this date (string).
     */
    fromDate?: string;
    /**
     * If provided, only include changesets after this changesetID.
     */
    fromId?: number;
    /**
     * Whether to include the _links field on the shallow references.
     */
    includeLinks?: boolean;
    /**
     * Path of item to search under.
     */
    itemPath?: string;
    mappings?: Array<TfvcMappingFilter>;
    /**
     * If provided, only include changesets created before this date (string).
     */
    toDate?: string;
    /**
     * If provided, a version descriptor for the latest change list to include.
     */
    toId?: number;
};

