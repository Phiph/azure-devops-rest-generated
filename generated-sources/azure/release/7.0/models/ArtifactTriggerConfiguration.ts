/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ArtifactTriggerConfiguration = {
    /**
     * Gets or sets the whether trigger is supported or not.
     */
    isTriggerSupported?: boolean;
    /**
     * Gets or sets the whether trigger is supported only on hosted environment.
     */
    isTriggerSupportedOnlyInHosted?: boolean;
    /**
     * Gets or sets the whether webhook is supported at server level.
     */
    isWebhookSupportedAtServerLevel?: boolean;
    /**
     * Gets or sets the payload hash header name for the artifact trigger configuration.
     */
    payloadHashHeaderName?: string;
    /**
     * Gets or sets the resources for artifact trigger configuration.
     */
    resources?: Record<string, string>;
    /**
     * Gets or sets the webhook payload mapping for artifact trigger configuration.
     */
    webhookPayloadMapping?: Record<string, string>;
};

