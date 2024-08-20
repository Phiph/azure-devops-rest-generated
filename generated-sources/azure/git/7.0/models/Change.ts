/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ItemContent } from './ItemContent';
export type Change = {
    /**
     * The type of change that was made to the item.
     */
    changeType?: 'none' | 'add' | 'edit' | 'encoding' | 'rename' | 'delete' | 'undelete' | 'branch' | 'merge' | 'lock' | 'rollback' | 'sourceRename' | 'targetRename' | 'property' | 'all';
    /**
     * Current version.
     */
    item?: string;
    /**
     * Content of the item after the change.
     */
    newContent?: ItemContent;
    /**
     * Path of the item on the server.
     */
    sourceServerItem?: string;
    /**
     * URL to retrieve the item.
     */
    url?: string;
};

