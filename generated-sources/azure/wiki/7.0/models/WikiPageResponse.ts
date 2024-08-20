/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WikiPage } from './WikiPage';
/**
 * Response contract for the Wiki Pages PUT, PATCH and DELETE APIs.
 */
export type WikiPageResponse = {
    /**
     * Contains the list of ETag values from the response header of the pages API call. The first item in the list contains the version of the wiki page.
     */
    eTag?: Array<string>;
    /**
     * Defines properties for wiki page.
     */
    page?: WikiPage;
};

