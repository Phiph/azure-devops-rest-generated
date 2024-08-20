/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Publisher } from './Publisher';
/**
 * Defines a query for service hook publishers.
 */
export type PublishersQuery = {
    /**
     * Optional list of publisher ids to restrict the results to
     */
    publisherIds?: Array<string>;
    /**
     * Filter for publisher inputs
     */
    publisherInputs?: Record<string, string>;
    /**
     * Results from the query
     */
    results?: Array<Publisher>;
};

