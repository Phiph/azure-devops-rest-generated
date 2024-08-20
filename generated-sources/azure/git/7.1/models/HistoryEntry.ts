/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChangeList } from './ChangeList';
export type HistoryEntry = {
    /**
     * The Change list (changeset/commit/shelveset) for this point in history
     */
    changeList?: ChangeList;
    /**
     * The change made to the item from this change list (only relevant for File history, not folders)
     */
    itemChangeType?: 'none' | 'add' | 'edit' | 'encoding' | 'rename' | 'delete' | 'undelete' | 'branch' | 'merge' | 'lock' | 'rollback' | 'sourceRename' | 'targetRename' | 'property' | 'all';
    /**
     * The path of the item at this point in history (only relevant for File history, not folders)
     */
    serverItem?: string;
};

