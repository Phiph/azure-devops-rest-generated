/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * The Team Context for an operation.
 */
export type TeamContext = {
    /**
     * The team project Id or name.  Ignored if ProjectId is set.
     */
    project?: string;
    /**
     * The Team Project ID.  Required if Project is not set.
     */
    projectId?: string;
    /**
     * The Team Id or name.  Ignored if TeamId is set.
     */
    team?: string;
    /**
     * The Team Id
     */
    teamId?: string;
};

