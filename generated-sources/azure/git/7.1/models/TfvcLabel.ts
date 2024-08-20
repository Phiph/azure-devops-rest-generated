/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TfvcItem } from './TfvcItem';
import type { TfvcLabelRef } from './TfvcLabelRef';
/**
 * Metadata for a label.
 */
export type TfvcLabel = (TfvcLabelRef & {
    /**
     * List of items.
     */
    items?: Array<TfvcItem>;
});

