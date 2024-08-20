/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AssociatedWorkItem } from './AssociatedWorkItem';
import type { CheckinNote } from './CheckinNote';
import type { TfvcChange } from './TfvcChange';
import type { TfvcPolicyOverrideInfo } from './TfvcPolicyOverrideInfo';
import type { TfvcShelvesetRef } from './TfvcShelvesetRef';
/**
 * Metadata for a shelveset.
 */
export type TfvcShelveset = (TfvcShelvesetRef & {
    /**
     * List of changes.
     */
    changes?: Array<TfvcChange>;
    /**
     * List of checkin notes.
     */
    notes?: Array<CheckinNote>;
    /**
     * Policy override information if applicable.
     */
    policyOverride?: TfvcPolicyOverrideInfo;
    /**
     * List of associated workitems.
     */
    workItems?: Array<AssociatedWorkItem>;
});

