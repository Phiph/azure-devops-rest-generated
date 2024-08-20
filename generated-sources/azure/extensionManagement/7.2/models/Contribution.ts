/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContributionBase } from './ContributionBase';
import type { ContributionConstraint } from './ContributionConstraint';
import type { JObject } from './JObject';
/**
 * An individual contribution made by an extension
 */
export type Contribution = (ContributionBase & {
    /**
     * List of constraints (filters) that should be applied to the availability of this contribution
     */
    constraints?: Array<ContributionConstraint>;
    /**
     * Includes is a set of contributions that should have this contribution included in their targets list.
     */
    includes?: Array<string>;
    /**
     * Properties/attributes of this contribution
     */
    properties?: JObject;
    /**
     * List of demanded claims in order for the user to see this contribution (like anonymous, public, member...).
     */
    restrictedTo?: Array<string>;
    /**
     * The ids of the contribution(s) that this contribution targets. (parent contributions)
     */
    targets?: Array<string>;
    /**
     * Id of the Contribution Type
     */
    type?: string;
});

