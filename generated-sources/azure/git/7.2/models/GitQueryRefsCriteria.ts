/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type GitQueryRefsCriteria = {
    /**
     * List of commit Ids to be searched
     */
    commitIds?: Array<string>;
    /**
     * List of complete or partial names for refs to be searched
     */
    refNames?: Array<string>;
    /**
     * Type of search on refNames, if provided
     */
    searchType?: 'exact' | 'startsWith' | 'contains';
};

