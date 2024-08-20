/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LiveSiteEventImpact } from './LiveSiteEventImpact';
import type { LiveSiteEventLog } from './LiveSiteEventLog';
export type LiveSiteEvent = {
    endTime?: string;
    id?: number;
    impact?: Array<LiveSiteEventImpact>;
    incidentUri?: string;
    logs?: Array<LiveSiteEventLog>;
    nextUpdateTime?: string;
    severity?: 'unhealthy' | 'degraded' | 'advisory';
    startTime?: string;
    state?: 'active' | 'resolved';
    title?: string;
};

