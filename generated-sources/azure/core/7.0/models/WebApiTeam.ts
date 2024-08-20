/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Identity } from './Identity';
import type { WebApiTeamRef } from './WebApiTeamRef';
export type WebApiTeam = (WebApiTeamRef & {
    /**
     * Team description
     */
    description?: string;
    /**
     * Team identity.
     */
    identity?: Identity;
    /**
     * Identity REST API Url to this team
     */
    identityUrl?: string;
    projectId?: string;
    projectName?: string;
});

