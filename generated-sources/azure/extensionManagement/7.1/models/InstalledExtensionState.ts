/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InstalledExtensionStateIssue } from './InstalledExtensionStateIssue';
/**
 * The state of an installed extension
 */
export type InstalledExtensionState = {
    /**
     * States of an installed extension
     */
    flags?: 'none' | 'disabled' | 'builtIn' | 'multiVersion' | 'unInstalled' | 'versionCheckError' | 'trusted' | 'error' | 'needsReauthorization' | 'autoUpgradeError' | 'warning';
    /**
     * List of installation issues
     */
    installationIssues?: Array<InstalledExtensionStateIssue>;
    /**
     * The time at which this installation was last updated
     */
    lastUpdated?: string;
};

