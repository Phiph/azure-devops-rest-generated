/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LiveSiteEvent } from './LiveSiteEvent';
import type { ServiceStatus } from './ServiceStatus';
/**
 * Represents data for the impacted organization. Will be null if org is not impacted
 */
export type StatusImpact = {
    liveSiteEvents?: Array<LiveSiteEvent>;
    serviceStatus?: ServiceStatus;
};

