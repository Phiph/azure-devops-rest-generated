/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DecoratedAuditLogEntry } from './DecoratedAuditLogEntry';
/**
 * The object returned when the audit log is queried. It contains the log and the information needed to query more audit entries.
 */
export type AuditLogQueryResult = {
    /**
     * The continuation token to pass to get the next set of results
     */
    continuationToken?: string;
    /**
     * The list of audit log entries
     */
    decoratedAuditLogEntries?: Array<DecoratedAuditLogEntry>;
    /**
     * True when there are more matching results to be fetched, false otherwise.
     */
    hasMore?: boolean;
};

