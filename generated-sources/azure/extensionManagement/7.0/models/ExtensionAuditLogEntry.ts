/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
/**
 * An audit log entry for an extension
 */
export type ExtensionAuditLogEntry = {
    /**
     * Change that was made to extension
     */
    auditAction?: string;
    /**
     * Date at which the change was made
     */
    auditDate?: string;
    /**
     * Extra information about the change
     */
    comment?: string;
    /**
     * Represents the user who made the change
     */
    updatedBy?: IdentityRef;
};

