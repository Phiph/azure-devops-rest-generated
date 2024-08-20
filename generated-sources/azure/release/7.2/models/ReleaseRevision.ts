/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
export type ReleaseRevision = {
    /**
     * Gets or sets the identity who changed.
     */
    changedBy?: IdentityRef;
    /**
     * Change date of the revision.
     */
    changedDate?: string;
    /**
     * Change details of the revision.
     */
    changeDetails?: string;
    /**
     * Change details of the revision. Typically ChangeDetails values are Add and Update.
     */
    changeType?: string;
    /**
     * Comment of the revision.
     */
    comment?: string;
    /**
     * Release ID of which this revision belongs.
     */
    definitionSnapshotRevision?: number;
    /**
     * Gets or sets the release ID of which this revision belongs.
     */
    releaseId?: number;
};

