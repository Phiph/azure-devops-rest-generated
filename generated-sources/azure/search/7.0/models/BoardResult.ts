/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Collection } from './Collection';
import type { Project } from './Project';
import type { Team } from './Team';
/**
 * Defines the Board result that matched a Board search request.
 */
export type BoardResult = {
    /**
     * Board Type of the board document.
     */
    boardtype?: string;
    /**
     * Collection details of the baord document.
     */
    collection?: Collection;
    /**
     * Project details of the board document.
     */
    project?: Project;
    /**
     * Team details of the board document.
     */
    team?: Team;
};

