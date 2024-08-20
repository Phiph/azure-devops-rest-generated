/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuildLogReference } from './BuildLogReference';
/**
 * Represents a build log.
 */
export type BuildLog = (BuildLogReference & {
    /**
     * The date and time the log was created.
     */
    createdOn?: string;
    /**
     * The date and time the log was last changed.
     */
    lastChangedOn?: string;
    /**
     * The number of lines in the log.
     */
    lineCount?: number;
});

