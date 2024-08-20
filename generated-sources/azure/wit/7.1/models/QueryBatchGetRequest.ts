/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Describes a request to get a list of queries
 */
export type QueryBatchGetRequest = {
    /**
     * The expand parameters for queries. Possible options are { None, Wiql, Clauses, All, Minimal }
     */
    $expand?: 'none' | 'wiql' | 'clauses' | 'all' | 'minimal';
    /**
     * The flag to control error policy in a query batch request. Possible options are { Fail, Omit }.
     */
    errorPolicy?: 'fail' | 'omit';
    /**
     * The requested query ids
     */
    ids?: Array<string>;
};

