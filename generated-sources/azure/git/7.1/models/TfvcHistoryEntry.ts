/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { HistoryEntry } from './HistoryEntry';
export type TfvcHistoryEntry = (HistoryEntry & {
    /**
     * The encoding of the item at this point in history (only relevant for File history, not folders)
     */
    encoding?: number;
    /**
     * The file id of the item at this point in history (only relevant for File history, not folders)
     */
    fileId?: number;
});

