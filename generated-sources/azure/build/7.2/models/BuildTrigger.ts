/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Represents a trigger for a buld definition.
 */
export type BuildTrigger = {
    /**
     * The type of the trigger.
     */
    triggerType?: 'none' | 'continuousIntegration' | 'batchedContinuousIntegration' | 'schedule' | 'gatedCheckIn' | 'batchedGatedCheckIn' | 'pullRequest' | 'buildCompletion' | 'all';
};

