/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SummaryData } from './SummaryData';
/**
 * Summary of Licenses in the organization.
 */
export type LicenseSummaryData = (SummaryData & {
    /**
     * Type of Account License.
     */
    accountLicenseType?: 'none' | 'earlyAdopter' | 'express' | 'professional' | 'advanced' | 'stakeholder';
    /**
     * Count of Disabled Licenses.
     */
    disabled?: number;
    /**
     * Designates if this license quantity can be changed through purchase
     */
    isPurchasable?: boolean;
    /**
     * Name of the License.
     */
    licenseName?: string;
    /**
     * Type of MSDN License.
     */
    msdnLicenseType?: 'none' | 'eligible' | 'professional' | 'platforms' | 'testProfessional' | 'premium' | 'ultimate' | 'enterprise';
    /**
     * Specifies the date when billing will charge for paid licenses
     */
    nextBillingDate?: string;
    /**
     * Source of the License.
     */
    source?: 'none' | 'account' | 'msdn' | 'profile' | 'auto' | 'trial';
    /**
     * Total license count after next billing cycle
     */
    totalAfterNextBillingDate?: number;
});

