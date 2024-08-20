/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ClientContributionNode } from './ClientContributionNode';
import type { ClientContributionProviderDetails } from './ClientContributionProviderDetails';
/**
 * Result of a contribution node query.  Wraps the resulting contribution nodes and provider details.
 */
export type ContributionNodeQueryResult = {
    /**
     * Map of contribution ids to corresponding node.
     */
    nodes?: Record<string, ClientContributionNode>;
    /**
     * Map of provider ids to the corresponding provider details object.
     */
    providerDetails?: Record<string, ClientContributionProviderDetails>;
};

