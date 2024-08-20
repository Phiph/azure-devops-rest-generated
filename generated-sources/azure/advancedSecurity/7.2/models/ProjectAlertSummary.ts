/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RepoAlertSummary } from './RepoAlertSummary';
/**
 * Project Alert Summary.
 */
export type ProjectAlertSummary = {
    /**
     * Project Id.
     */
    projectId?: string;
    /**
     * A list of RepoAlertSummary data.
     */
    repos?: Array<RepoAlertSummary>;
};

