/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Geography } from './Geography';
export type GeographyWithHealth = (Geography & {
    health?: 'unknown' | 'unhealthy' | 'degraded' | 'advisory' | 'healthy';
});

