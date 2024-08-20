/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PullRequestConfiguration } from './PullRequestConfiguration';
import type { PullRequestFilter } from './PullRequestFilter';
import type { ReleaseTriggerBase } from './ReleaseTriggerBase';
export type PullRequestTrigger = (ReleaseTriggerBase & {
    /**
     * Artifact alias trigger is linked to.
     */
    artifactAlias?: string;
    /**
     * Code reference details of pull request.
     */
    pullRequestConfiguration?: PullRequestConfiguration;
    /**
     * Policy name using which status will be published to pull request.
     */
    statusPolicyName?: string;
    /**
     * List of filters applied while trigger.
     */
    triggerConditions?: Array<PullRequestFilter>;
});

