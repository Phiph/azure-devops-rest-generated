/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
import type { ReferenceLinks } from './ReferenceLinks';
/**
 * Represents a reference to a build.
 */
export type BuildReference = {
    _links?: ReferenceLinks;
    /**
     * The build number.
     */
    buildNumber?: string;
    /**
     * Indicates whether the build has been deleted.
     */
    deleted?: boolean;
    /**
     * The time that the build was completed.
     */
    finishTime?: string;
    /**
     * The ID of the build.
     */
    id?: number;
    /**
     * The time that the build was queued.
     */
    queueTime?: string;
    /**
     * The identity on whose behalf the build was queued.
     */
    requestedFor?: IdentityRef;
    /**
     * The build result.
     */
    result?: 'none' | 'succeeded' | 'partiallySucceeded' | 'failed' | 'canceled';
    /**
     * The time that the build was started.
     */
    startTime?: string;
    /**
     * The build status.
     */
    status?: 'none' | 'inProgress' | 'completed' | 'cancelling' | 'postponed' | 'notStarted' | 'all';
};

