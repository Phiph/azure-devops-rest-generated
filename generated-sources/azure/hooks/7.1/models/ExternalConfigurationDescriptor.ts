/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Describes how to configure a subscription that is managed externally.
 */
export type ExternalConfigurationDescriptor = {
    /**
     * Url of the site to create this type of subscription.
     */
    createSubscriptionUrl?: string;
    /**
     * The name of an input property that contains the URL to edit a subscription.
     */
    editSubscriptionPropertyName?: string;
    /**
     * True if the external configuration applies only to hosted.
     */
    hostedOnly?: boolean;
};

