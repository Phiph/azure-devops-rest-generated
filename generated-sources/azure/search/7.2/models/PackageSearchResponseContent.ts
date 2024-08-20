/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EntitySearchResponse } from './EntitySearchResponse';
import type { PackageResult } from './PackageResult';
/**
 * Defines a response item that is returned for a package search request.
 */
export type PackageSearchResponseContent = (EntitySearchResponse & {
    /**
     * Total number of matched packages.
     */
    count?: number;
    /**
     * List of matched packages.
     */
    results?: Array<PackageResult>;
});

