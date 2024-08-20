/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExtensionAuditLogEntry } from './ExtensionAuditLogEntry';
/**
 * Audit log for an extension
 */
export type ExtensionAuditLog = {
    /**
     * Collection of audit log entries
     */
    entries?: Array<ExtensionAuditLogEntry>;
    /**
     * Extension that the change was made for
     */
    extensionName?: string;
    /**
     * Publisher that the extension is part of
     */
    publisherName?: string;
};

