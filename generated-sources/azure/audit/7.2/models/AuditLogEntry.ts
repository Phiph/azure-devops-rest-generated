/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AuditLogEntry = {
    /**
     * The action if for the event, i.e Git.CreateRepo, Project.RenameProject
     */
    actionId?: string;
    /**
     * ActivityId
     */
    activityId?: string;
    /**
     * The Actor's Client Id (if actor is a service principal)
     */
    actorClientId?: string;
    /**
     * The Actor's CUID
     */
    actorCUID?: string;
    /**
     * The Actor's UPN
     */
    actorUPN?: string;
    /**
     * The Actor's User Id (if actor is a user)
     */
    actorUserId?: string;
    /**
     * Type of authentication used by the author
     */
    authenticationMechanism?: string;
    /**
     * This allows us to group things together, like one user action that caused a cascade of event entries (project creation).
     */
    correlationId?: string;
    /**
     * External data such as CUIDs, item names, etc.
     */
    data?: Record<string, any>;
    /**
     * EventId, should be unique
     */
    id?: string;
    /**
     * IP Address where the event was originated
     */
    ipAddress?: string;
    /**
     * When specified, the id of the project this event is associated to
     */
    projectId?: string;
    /**
     * The organization Id (Organization is the only scope currently supported)
     */
    scopeId?: string;
    /**
     * The type of the scope (Organization is only scope currently supported)
     */
    scopeType?: 'unknown' | 'deployment' | 'enterprise' | 'organization' | 'project';
    /**
     * The time when the event occurred in UTC
     */
    timestamp?: string;
    /**
     * The user agent from the request
     */
    userAgent?: string;
};

