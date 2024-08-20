/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EntitySearchResponse } from './EntitySearchResponse';
import type { SettingResult } from './SettingResult';
/**
 * Defines a setting search response item
 */
export type SettingSearchResponse = (EntitySearchResponse & {
    /**
     * Total number of matched setting documents.
     */
    count?: number;
    /**
     * List of top matched setting documents.
     */
    results?: Array<SettingResult>;
});

