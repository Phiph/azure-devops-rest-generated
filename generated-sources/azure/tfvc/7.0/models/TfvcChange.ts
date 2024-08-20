/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Change } from './Change';
import type { TfvcMergeSource } from './TfvcMergeSource';
/**
 * A change.
 */
export type TfvcChange = (Change & {
    /**
     * List of merge sources in case of rename or branch creation.
     */
    mergeSources?: Array<TfvcMergeSource>;
    /**
     * Version at which a (shelved) change was pended against
     */
    pendingVersion?: number;
});

