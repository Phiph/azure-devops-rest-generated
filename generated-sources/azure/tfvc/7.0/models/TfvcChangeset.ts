/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AssociatedWorkItem } from './AssociatedWorkItem';
import type { CheckinNote } from './CheckinNote';
import type { TfvcChange } from './TfvcChange';
import type { TfvcChangesetRef } from './TfvcChangesetRef';
import type { TfvcPolicyOverrideInfo } from './TfvcPolicyOverrideInfo';
/**
 * A collection of changes.
 */
export type TfvcChangeset = (TfvcChangesetRef & {
    /**
     * Changeset Account Id also known as Organization Id.
     */
    accountId?: string;
    /**
     * List of associated changes.
     */
    changes?: Array<TfvcChange>;
    /**
     * List of Checkin Notes for the changeset.
     */
    checkinNotes?: Array<CheckinNote>;
    /**
     * Changeset collection Id.
     */
    collectionId?: string;
    /**
     * True if more changes are available.
     */
    hasMoreChanges?: boolean;
    /**
     * Policy Override for the changeset.
     */
    policyOverride?: TfvcPolicyOverrideInfo;
    /**
     * Team Project Ids for the changeset.
     */
    teamProjectIds?: Array<string>;
    /**
     * List of work items associated with the changeset.
     */
    workItems?: Array<AssociatedWorkItem>;
});

