/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Collection } from './Collection';
import type { ProjectReference } from './ProjectReference';
import type { Wiki } from './Wiki';
import type { WikiHit } from './WikiHit';
/**
 * Defines the wiki result that matched a wiki search request.
 */
export type WikiResult = {
    /**
     * Collection of the result file.
     */
    collection?: Collection;
    /**
     * ContentId of the result file.
     */
    contentId?: string;
    /**
     * Name of the result file.
     */
    fileName?: string;
    /**
     * Highlighted snippets of fields that match the search request. The list is sorted by relevance of the snippets.
     */
    hits?: Array<WikiHit>;
    /**
     * Path at which result file is present.
     */
    path?: string;
    /**
     * Project details of the wiki document.
     */
    project?: ProjectReference;
    /**
     * Wiki information for the result.
     */
    wiki?: Wiki;
};

