/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * License assigned to a user
 */
export type AccessLevel = {
    /**
     * Type of Account License (e.g. Express, Stakeholder etc.)
     */
    accountLicenseType?: 'none' | 'earlyAdopter' | 'express' | 'professional' | 'advanced' | 'stakeholder';
    /**
     * Assignment Source of the License (e.g. Group, Unknown etc.
     */
    assignmentSource?: 'none' | 'unknown' | 'groupRule';
    /**
     * Display name of the License
     */
    licenseDisplayName?: string;
    /**
     * Licensing Source (e.g. Account. MSDN etc.)
     */
    licensingSource?: 'none' | 'account' | 'msdn' | 'profile' | 'auto' | 'trial';
    /**
     * Type of MSDN License (e.g. Visual Studio Professional, Visual Studio Enterprise etc.)
     */
    msdnLicenseType?: 'none' | 'eligible' | 'professional' | 'platforms' | 'testProfessional' | 'premium' | 'ultimate' | 'enterprise';
    /**
     * User status in the account
     */
    status?: 'none' | 'active' | 'disabled' | 'deleted' | 'pending' | 'expired' | 'pendingDisabled';
    /**
     * Status message.
     */
    statusMessage?: string;
};

