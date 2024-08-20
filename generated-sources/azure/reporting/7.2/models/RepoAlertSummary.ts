/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AlertSummaryBySeverity } from './AlertSummaryBySeverity';
/**
 * Repo Alert Summary.
 */
export type RepoAlertSummary = {
    /**
     * RepoId.
     */
    repoId?: string;
    /**
     * Repo Name.
     */
    repoName?: string;
    /**
     * Total active alerts in the repo.
     */
    totalAlerts?: number;
    /**
     * Total alerts by severity.
     */
    totalAlertsBySeverity?: AlertSummaryBySeverity;
};
