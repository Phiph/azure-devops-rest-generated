/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Represents a repository's webhook returned from a source provider.
 */
export type RepositoryWebhook = {
    /**
     * The friendly name of the repository.
     */
    name?: string;
    types?: Array<'none' | 'continuousIntegration' | 'batchedContinuousIntegration' | 'schedule' | 'gatedCheckIn' | 'batchedGatedCheckIn' | 'pullRequest' | 'buildCompletion' | 'all'>;
    /**
     * The URL of the repository.
     */
    url?: string;
};

