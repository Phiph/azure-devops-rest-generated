/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExtensionShare } from './ExtensionShare';
import type { ExtensionStatistic } from './ExtensionStatistic';
import type { ExtensionVersion } from './ExtensionVersion';
import type { InstallationTarget } from './InstallationTarget';
import type { PublisherFacts } from './PublisherFacts';
export type PublishedExtension = {
    categories?: Array<string>;
    deploymentType?: 'exe' | 'msi' | 'vsix' | 'referralLink';
    displayName?: string;
    extensionId?: string;
    extensionName?: string;
    flags?: 'none' | 'disabled' | 'builtIn' | 'validated' | 'trusted' | 'paid' | 'public' | 'multiVersion' | 'system' | 'preview' | 'unpublished' | 'trial' | 'locked' | 'hidden';
    installationTargets?: Array<InstallationTarget>;
    lastUpdated?: string;
    longDescription?: string;
    /**
     * Check if Extension is in conflict list or not. Taking as String and not as boolean because we don't want end customer to see this flag and by making it Boolean it is coming as false for all the cases.
     */
    presentInConflictList?: string;
    /**
     * Date on which the extension was first uploaded.
     */
    publishedDate?: string;
    publisher?: PublisherFacts;
    /**
     * Date on which the extension first went public.
     */
    releaseDate?: string;
    sharedWith?: Array<ExtensionShare>;
    shortDescription?: string;
    statistics?: Array<ExtensionStatistic>;
    tags?: Array<string>;
    versions?: Array<ExtensionVersion>;
};

