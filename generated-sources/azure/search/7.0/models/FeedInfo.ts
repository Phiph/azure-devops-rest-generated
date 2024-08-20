/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Defines the details of a feed.
 */
export type FeedInfo = {
    /**
     * Id of the collection.
     */
    collectionId?: string;
    /**
     * Name of the collection.
     */
    collectionName?: string;
    /**
     * Id of the feed.
     */
    feedId?: string;
    /**
     * Name of the feed.
     */
    feedName?: string;
    /**
     * Latest matched version of package in this Feed.
     */
    latestMatchedVersion?: string;
    /**
     * Latest version of package in this Feed.
     */
    latestVersion?: string;
    /**
     * Url of package in this Feed.
     */
    packageUrl?: string;
    /**
     * List of views which contain the matched package.
     */
    views?: Array<string>;
};

