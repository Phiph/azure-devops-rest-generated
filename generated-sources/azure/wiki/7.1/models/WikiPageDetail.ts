/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WikiPageStat } from './WikiPageStat';
/**
 * Defines a page with its metedata in a wiki.
 */
export type WikiPageDetail = {
    /**
     * When present, permanent identifier for the wiki page
     */
    id?: number;
    /**
     * Path of the wiki page.
     */
    path?: string;
    /**
     * Path of the wiki page.
     */
    viewStats?: Array<WikiPageStat>;
};

