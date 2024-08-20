/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuildDefinition3_2 } from './BuildDefinition3_2';
/**
 * For back-compat with extensions that use the old Steps format instead of Process and Phases
 */
export type BuildDefinitionTemplate3_2 = {
    canDelete?: boolean;
    category?: string;
    defaultHostedQueue?: string;
    description?: string;
    icons?: Record<string, string>;
    iconTaskId?: string;
    id?: string;
    name?: string;
    template?: BuildDefinition3_2;
};

