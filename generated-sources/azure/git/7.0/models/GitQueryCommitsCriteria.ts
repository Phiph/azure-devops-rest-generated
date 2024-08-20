/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitVersionDescriptor } from './GitVersionDescriptor';
export type GitQueryCommitsCriteria = {
    /**
     * Number of entries to skip
     */
    $skip?: number;
    /**
     * Maximum number of entries to retrieve
     */
    $top?: number;
    /**
     * Alias or display name of the author
     */
    author?: string;
    /**
     * Only applicable when ItemVersion specified. If provided, start walking history starting at this commit.
     */
    compareVersion?: GitVersionDescriptor;
    /**
     * Only applies when an itemPath is specified. This determines whether to exclude delete entries of the specified path.
     */
    excludeDeletes?: boolean;
    /**
     * If provided, a lower bound for filtering commits alphabetically
     */
    fromCommitId?: string;
    /**
     * If provided, only include history entries created after this date (string)
     */
    fromDate?: string;
    /**
     * What Git history mode should be used. This only applies to the search criteria when Ids = null and an itemPath is specified.
     */
    historyMode?: 'simplifiedHistory' | 'firstParent' | 'fullHistory' | 'fullHistorySimplifyMerges';
    /**
     * If provided, specifies the exact commit ids of the commits to fetch. May not be combined with other parameters.
     */
    ids?: Array<string>;
    /**
     * Whether to include the _links field on the shallow references
     */
    includeLinks?: boolean;
    /**
     * Whether to include the push information
     */
    includePushData?: boolean;
    /**
     * Whether to include the image Url for committers and authors
     */
    includeUserImageUrl?: boolean;
    /**
     * Whether to include linked work items
     */
    includeWorkItems?: boolean;
    /**
     * Path of item to search under
     */
    itemPath?: string;
    /**
     * If provided, identifies the commit or branch to search
     */
    itemVersion?: GitVersionDescriptor;
    /**
     * If enabled, this option will ignore the itemVersion and compareVersion parameters
     */
    showOldestCommitsFirst?: boolean;
    /**
     * If provided, an upper bound for filtering commits alphabetically
     */
    toCommitId?: string;
    /**
     * If provided, only include history entries created before this date (string)
     */
    toDate?: string;
    /**
     * Alias or display name of the committer
     */
    user?: string;
};

