/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChangeCountDictionary } from './ChangeCountDictionary';
import type { GitChange } from './GitChange';
import type { GitPushRef } from './GitPushRef';
import type { GitStatus } from './GitStatus';
import type { GitUserDate } from './GitUserDate';
import type { ReferenceLinks } from './ReferenceLinks';
import type { ResourceRef } from './ResourceRef';
/**
 * Provides properties that describe a Git commit and associated metadata.
 */
export type GitCommitRef = {
    /**
     * A collection of related REST reference links.
     */
    _links?: ReferenceLinks;
    /**
     * Author of the commit.
     */
    author?: GitUserDate;
    /**
     * Counts of the types of changes (edits, deletes, etc.) included with the commit.
     */
    changeCounts?: ChangeCountDictionary;
    /**
     * An enumeration of the changes included with the commit.
     */
    changes?: Array<GitChange>;
    /**
     * Comment or message of the commit.
     */
    comment?: string;
    /**
     * Indicates if the comment is truncated from the full Git commit comment message.
     */
    commentTruncated?: boolean;
    /**
     * ID (SHA-1) of the commit.
     */
    commitId?: string;
    /**
     * Committer of the commit.
     */
    committer?: GitUserDate;
    /**
     * An enumeration of the parent commit IDs for this commit.
     */
    parents?: Array<string>;
    /**
     * The push associated with this commit.
     */
    push?: GitPushRef;
    /**
     * Remote URL path to the commit.
     */
    remoteUrl?: string;
    /**
     * A list of status metadata from services and extensions that may associate additional information to the commit.
     */
    statuses?: Array<GitStatus>;
    /**
     * REST URL for this resource.
     */
    url?: string;
    /**
     * A list of workitems associated with this commit.
     */
    workItems?: Array<ResourceRef>;
};

