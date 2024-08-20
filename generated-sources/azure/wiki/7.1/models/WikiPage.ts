/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WikiPageCreateOrUpdateParameters } from './WikiPageCreateOrUpdateParameters';
/**
 * Defines a page in a wiki.
 */
export type WikiPage = (WikiPageCreateOrUpdateParameters & {
    /**
     * Path of the git item corresponding to the wiki page stored in the backing Git repository.
     */
    gitItemPath?: string;
    /**
     * When present, permanent identifier for the wiki page
     */
    id?: number;
    /**
     * True if a page is non-conforming, i.e. 1) if the name doesn't match page naming standards. 2) if the page does not have a valid entry in the appropriate order file.
     */
    isNonConformant?: boolean;
    /**
     * True if this page has subpages under its path.
     */
    isParentPage?: boolean;
    /**
     * Order of the wiki page, relative to other pages in the same hierarchy level.
     */
    order?: number;
    /**
     * Path of the wiki page.
     */
    path?: string;
    /**
     * Remote web url to the wiki page.
     */
    remoteUrl?: string;
    /**
     * List of subpages of the current page.
     */
    subPages?: Array<WikiPage>;
    /**
     * REST url for this wiki page.
     */
    url?: string;
});

