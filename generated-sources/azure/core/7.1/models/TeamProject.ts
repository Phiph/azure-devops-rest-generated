/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ReferenceLinks } from './ReferenceLinks';
import type { TeamProjectReference } from './TeamProjectReference';
import type { WebApiTeamRef } from './WebApiTeamRef';
/**
 * Represents a Team Project object.
 */
export type TeamProject = (TeamProjectReference & {
    /**
     * The links to other objects related to this object.
     */
    _links?: ReferenceLinks;
    /**
     * Set of capabilities this project has (such as process template & version control).
     */
    capabilities?: Record<string, Record<string, string>>;
    /**
     * The shallow ref to the default team.
     */
    defaultTeam?: WebApiTeamRef;
});

