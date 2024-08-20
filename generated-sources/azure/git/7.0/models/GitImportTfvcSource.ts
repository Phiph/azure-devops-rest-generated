/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Parameter for creating a git import request when source is tfvc version control
 */
export type GitImportTfvcSource = {
    /**
     * Set true to import History, false otherwise
     */
    importHistory?: boolean;
    /**
     * Get history for last n days (max allowed value is 180 days)
     */
    importHistoryDurationInDays?: number;
    /**
     * Path which we want to import (this can be copied from Path Control in Explorer)
     */
    path?: string;
};

