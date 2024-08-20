/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Maps a contribution to a licensing behavior
 */
export type LicensingOverride = {
    /**
     * How the inclusion of this contribution should change based on licensing
     */
    behavior?: 'onlyIfLicensed' | 'onlyIfUnlicensed' | 'alwaysInclude';
    /**
     * Fully qualified contribution id which we want to define licensing behavior for
     */
    id?: string;
};

