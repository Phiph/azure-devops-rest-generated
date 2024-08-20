/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Describes a request to get a set of work items
 */
export type WorkItemBatchGetRequest = {
    /**
     * The expand parameters for work item attributes. Possible options are { None, Relations, Fields, Links, All }
     */
    $expand?: 'none' | 'relations' | 'fields' | 'links' | 'all';
    /**
     * AsOf UTC date time string
     */
    asOf?: string;
    /**
     * The flag to control error policy in a bulk get work items request. Possible options are {Fail, Omit}.
     */
    errorPolicy?: 'fail' | 'omit';
    /**
     * The requested fields
     */
    fields?: Array<string>;
    /**
     * The requested work item ids
     */
    ids?: Array<number>;
};

