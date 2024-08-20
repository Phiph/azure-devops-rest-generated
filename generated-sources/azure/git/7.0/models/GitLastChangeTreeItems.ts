/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GitCommitRef } from './GitCommitRef';
import type { GitLastChangeItem } from './GitLastChangeItem';
export type GitLastChangeTreeItems = {
    /**
     * The list of commits referenced by Items, if they were requested.
     */
    commits?: Array<GitCommitRef>;
    /**
     * The last change of items.
     */
    items?: Array<GitLastChangeItem>;
    /**
     * The last explored time, in case the result is not comprehensive. Null otherwise.
     */
    lastExploredTime?: string;
};

