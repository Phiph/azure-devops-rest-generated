/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JObject } from './JObject';
import type { PolicyConfiguration } from './PolicyConfiguration';
import type { ReferenceLinks } from './ReferenceLinks';
/**
 * This record encapsulates the current state of a policy as it applies to one specific pull request. Each pull request has a unique PolicyEvaluationRecord for each pull request which the policy applies to.
 */
export type PolicyEvaluationRecord = {
    /**
     * Links to other related objects
     */
    _links?: ReferenceLinks;
    /**
     * A string which uniquely identifies the target of a policy evaluation.
     */
    artifactId?: string;
    /**
     * Time when this policy finished evaluating on this pull request.
     */
    completedDate?: string;
    /**
     * Contains all configuration data for the policy which is being evaluated.
     */
    configuration?: PolicyConfiguration;
    /**
     * Internal context data of this policy evaluation.
     */
    context?: JObject;
    /**
     * Guid which uniquely identifies this evaluation record (one policy running on one pull request).
     */
    evaluationId?: string;
    /**
     * Time when this policy was first evaluated on this pull request.
     */
    startedDate?: string;
    /**
     * Status of the policy (Running, Approved, Failed, etc.)
     */
    status?: 'queued' | 'running' | 'approved' | 'rejected' | 'notApplicable' | 'broken';
};

