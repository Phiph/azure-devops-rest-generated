/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Used by AdvSec to estimate billable pushers for a Host or Project.
 */
export type BillablePusher = {
    /**
     * ProjectId that was pushed to.
     */
    projectId?: string;
    /**
     * RepositoryId that was pushed to.
     */
    repoId?: string;
    /**
     * Visual Studio ID /Team Foundation ID
     */
    vsid?: string;
};

