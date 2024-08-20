/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Log data for an Elastic Pool
 */
export type ElasticPoolLog = {
    /**
     * Log Id
     */
    id?: number;
    /**
     * E.g. error, warning, info
     */
    level?: 'error' | 'warning' | 'info';
    /**
     * Log contents
     */
    message?: string;
    /**
     * Operation that triggered the message being logged
     */
    operation?: 'configurationJob' | 'sizingJob' | 'increaseCapacity' | 'reimage' | 'deleteVMs';
    /**
     * Id of the associated TaskAgentPool
     */
    poolId?: number;
    /**
     * Datetime that the log occurred
     */
    timestamp?: string;
};

