/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { JObject } from './JObject';
/**
 * Representation of a ContributionNode that can be used for serialized to clients.
 */
export type ClientContribution = {
    /**
     * Description of the contribution/type
     */
    description?: string;
    /**
     * Fully qualified identifier of the contribution/type
     */
    id?: string;
    /**
     * Includes is a set of contributions that should have this contribution included in their targets list.
     */
    includes?: Array<string>;
    /**
     * Properties/attributes of this contribution
     */
    properties?: JObject;
    /**
     * The ids of the contribution(s) that this contribution targets. (parent contributions)
     */
    targets?: Array<string>;
    /**
     * Id of the Contribution Type
     */
    type?: string;
};

