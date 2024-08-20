/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IgnoredGate } from './IgnoredGate';
import type { ReleaseDeployPhase } from './ReleaseDeployPhase';
export type ReleaseGatesPhase = (ReleaseDeployPhase & {
    /**
     * List of ignored gates.
     */
    ignoredGates?: Array<IgnoredGate>;
    /**
     * Date and time at which stabilization of gates completed.
     */
    stabilizationCompletedOn?: string;
    /**
     * Date and time at which all gates executed successfully.
     */
    succeedingSince?: string;
});

