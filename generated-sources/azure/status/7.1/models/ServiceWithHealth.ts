/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Service } from './Service';
export type ServiceWithHealth = (Service & {
    health?: 'unknown' | 'unhealthy' | 'degraded' | 'advisory' | 'healthy';
});

