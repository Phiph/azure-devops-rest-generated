/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ClientContribution } from './ClientContribution';
/**
 * Representation of a ContributionNode that can be used for serialized to clients.
 */
export type ClientContributionNode = {
    /**
     * List of ids for contributions which are children to the current contribution.
     */
    children?: Array<string>;
    /**
     * Contribution associated with this node.
     */
    contribution?: ClientContribution;
    /**
     * List of ids for contributions which are parents to the current contribution.
     */
    parents?: Array<string>;
};

