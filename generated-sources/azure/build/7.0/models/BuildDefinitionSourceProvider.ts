/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type BuildDefinitionSourceProvider = {
    /**
     * Uri of the associated definition
     */
    definitionUri?: string;
    /**
     * fields associated with this build definition
     */
    fields?: Record<string, string>;
    /**
     * Id of this source provider
     */
    id?: number;
    /**
     * The lst time this source provider was modified
     */
    lastModified?: string;
    /**
     * Name of the source provider
     */
    name?: string;
    /**
     * Which trigger types are supported by this definition source provider
     */
    supportedTriggerTypes?: 'none' | 'continuousIntegration' | 'batchedContinuousIntegration' | 'schedule' | 'gatedCheckIn' | 'batchedGatedCheckIn' | 'pullRequest' | 'buildCompletion' | 'all';
};

