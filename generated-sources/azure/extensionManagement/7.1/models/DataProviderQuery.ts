/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DataProviderContext } from './DataProviderContext';
/**
 * A query that can be issued for data provider data
 */
export type DataProviderQuery = {
    /**
     * Contextual information to pass to the data providers
     */
    context?: DataProviderContext;
    /**
     * The contribution ids of the data providers to resolve
     */
    contributionIds?: Array<string>;
};

