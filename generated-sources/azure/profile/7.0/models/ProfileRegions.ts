/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProfileRegion } from './ProfileRegion';
/**
 * Container of country/region information
 */
export type ProfileRegions = {
    /**
     * List of country/region code with contact consent requirement type of notice
     */
    noticeContactConsentRequirementRegions?: Array<string>;
    /**
     * List of country/region code with contact consent requirement type of opt-out
     */
    optOutContactConsentRequirementRegions?: Array<string>;
    /**
     * List of country/regions
     */
    regions?: Array<ProfileRegion>;
};

