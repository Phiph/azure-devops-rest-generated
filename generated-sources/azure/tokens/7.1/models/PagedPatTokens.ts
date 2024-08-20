/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PatToken } from './PatToken';
/**
 * Returned by the List method; contains a list of personal access tokens (PATs) and the continuation token to get the next page of results
 */
export type PagedPatTokens = {
    /**
     * Used to access the next page of results in successive API calls to list personal access tokens (PATs)
     */
    continuationToken?: string;
    /**
     * The list of personal access tokens (PATs)
     */
    patTokens?: Array<PatToken>;
};

