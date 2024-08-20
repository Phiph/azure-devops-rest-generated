/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ProjectAlertSummary } from './ProjectAlertSummary';
/**
 * Org Alert Summary.
 */
export type OrgAlertSummary = {
    /**
     * Org Id.
     */
    orgId?: string;
    /**
     * A list of Project summary data.
     */
    projects?: Array<ProjectAlertSummary>;
};

