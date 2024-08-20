/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuildRetentionSample } from './BuildRetentionSample';
/**
 * A historical overview of build retention information. This includes a list of snapshots taken about build retention usage, and a list of builds that have exceeded the default 30 day retention policy.
 */
export type BuildRetentionHistory = {
    /**
     * A list of builds that are older than the default retention policy, but are not marked as retained. Something is causing these builds to not get cleaned up.
     */
    buildRetentionSamples?: Array<BuildRetentionSample>;
};

