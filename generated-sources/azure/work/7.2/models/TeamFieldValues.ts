/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FieldReference } from './FieldReference';
import type { TeamFieldValue } from './TeamFieldValue';
import type { TeamSettingsDataContractBase } from './TeamSettingsDataContractBase';
/**
 * Essentially a collection of team field values
 */
export type TeamFieldValues = (TeamSettingsDataContractBase & {
    /**
     * The default team field value
     */
    defaultValue?: string;
    /**
     * Shallow ref to the field being used as a team field
     */
    field?: FieldReference;
    /**
     * Collection of all valid team field values
     */
    values?: Array<TeamFieldValue>;
});

