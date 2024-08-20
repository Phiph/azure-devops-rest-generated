/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WikiPageMove } from './WikiPageMove';
/**
 * Response contract for the Wiki Page Move API.
 */
export type WikiPageMoveResponse = {
    /**
     * Contains the list of ETag values from the response header of the page move API call. The first item in the list contains the version of the wiki page subject to page move.
     */
    eTag?: Array<string>;
    /**
     * Defines properties for wiki page move.
     */
    pageMove?: WikiPageMove;
};

