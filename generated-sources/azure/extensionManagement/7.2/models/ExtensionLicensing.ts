/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LicensingOverride } from './LicensingOverride';
/**
 * How an extension should handle including contributions based on licensing
 */
export type ExtensionLicensing = {
    /**
     * A list of contributions which deviate from the default licensing behavior
     */
    overrides?: Array<LicensingOverride>;
};

