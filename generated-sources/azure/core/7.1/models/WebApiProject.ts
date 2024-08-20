/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TeamProjectReference } from './TeamProjectReference';
import type { WebApiProjectCollectionRef } from './WebApiProjectCollectionRef';
import type { WebApiTeamRef } from './WebApiTeamRef';
export type WebApiProject = (TeamProjectReference & {
    /**
     * Set of capabilities this project has
     */
    capabilities?: Record<string, Record<string, string>>;
    /**
     * Reference to collection which contains this project
     */
    collection?: WebApiProjectCollectionRef;
    /**
     * Default team for this project
     */
    defaultTeam?: WebApiTeamRef;
});

