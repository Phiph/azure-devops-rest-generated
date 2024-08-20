/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EntitySearchRequestBase } from './EntitySearchRequestBase';
/**
 * Defines a scroll code search request.
 */
export type ScrollSearchRequest = (EntitySearchRequestBase & {
    /**
     * Scroll Id for scroll search query.
     */
    $scrollId?: string;
    /**
     * Size of data to return for scroll search query. Min value is 201.
     */
    $scrollSize?: number;
});

