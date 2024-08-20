/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TeamIterationAttributes } from './TeamIterationAttributes';
import type { TeamSettingsDataContractBase } from './TeamSettingsDataContractBase';
/**
 * Represents a shallow ref for a single iteration.
 */
export type TeamSettingsIteration = (TeamSettingsDataContractBase & {
    /**
     * Attributes of the iteration such as start and end date.
     */
    attributes?: TeamIterationAttributes;
    /**
     * Id of the iteration.
     */
    id?: string;
    /**
     * Name of the iteration.
     */
    name?: string;
    /**
     * Relative path of the iteration.
     */
    path?: string;
});

