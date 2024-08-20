/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FeedInfo } from './FeedInfo';
import type { PackageHit } from './PackageHit';
/**
 * Defines the package result that matched a package search request.
 */
export type PackageResult = {
    /**
     * Description of the package.
     */
    description?: string;
    /**
     * List of feeds which contain the matching package.
     */
    feeds?: Array<FeedInfo>;
    /**
     * List of highlighted fields for the match.
     */
    hits?: Array<PackageHit>;
    /**
     * Id of the package.
     */
    id?: string;
    /**
     * Name of the package.
     */
    name?: string;
    /**
     * Type of the package.
     */
    protocolType?: string;
};

