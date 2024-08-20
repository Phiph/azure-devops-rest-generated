/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WebApiTeam } from './WebApiTeam';
export type CategorizedWebApiTeams = {
    /**
     * Teams that the user is a member of.
     */
    myTeams?: Array<WebApiTeam>;
    /**
     * Teams that the user can read but is not member of.
     */
    otherReadableTeams?: Array<WebApiTeam>;
};

