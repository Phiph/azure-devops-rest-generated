/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JObject } from './JObject';
/**
 * Specifies a constraint that can be used to dynamically include/exclude a given contribution
 */
export type ContributionConstraint = {
    /**
     * An optional property that can be specified to group constraints together. All constraints within a group are AND'd together (all must be evaluate to True in order for the contribution to be included). Different groups of constraints are OR'd (only one group needs to evaluate to True for the contribution to be included).
     */
    group?: number;
    /**
     * Fully qualified identifier of a shared constraint
     */
    id?: string;
    /**
     * If true, negate the result of the filter (include the contribution if the applied filter returns false instead of true)
     */
    inverse?: boolean;
    /**
     * Name of the IContributionFilter plugin
     */
    name?: string;
    /**
     * Properties that are fed to the contribution filter class
     */
    properties?: JObject;
    /**
     * Constraints can be optionally be applied to one or more of the relationships defined in the contribution. If no relationships are defined then all relationships are associated with the constraint. This means the default behaviour will eliminate the contribution from the tree completely if the constraint is applied.
     */
    relationships?: Array<string>;
};

