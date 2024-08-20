/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QueryHierarchyItem } from './QueryHierarchyItem';
export type QueryHierarchyItemsResult = {
    /**
     * The count of items.
     */
    count?: number;
    /**
     * Indicates if the max return limit was hit but there are still more items
     */
    hasMore?: boolean;
    /**
     * The list of items
     */
    value?: Array<QueryHierarchyItem>;
};

