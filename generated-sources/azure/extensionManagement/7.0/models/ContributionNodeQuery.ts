/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DataProviderContext } from './DataProviderContext';
/**
 * A query that can be issued for contribution nodes
 */
export type ContributionNodeQuery = {
    /**
     * The contribution ids of the nodes to find.
     */
    contributionIds?: Array<string>;
    /**
     * Contextual information that can be leveraged by contribution constraints
     */
    dataProviderContext?: DataProviderContext;
    /**
     * Indicator if contribution provider details should be included in the result.
     */
    includeProviderDetails?: boolean;
    /**
     * Query options tpo be used when fetching ContributionNodes
     */
    queryOptions?: 'none' | 'includeSelf' | 'includeChildren' | 'includeSubTree' | 'includeAll' | 'ignoreConstraints';
};

