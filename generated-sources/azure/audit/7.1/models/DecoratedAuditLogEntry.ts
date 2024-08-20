/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type DecoratedAuditLogEntry = {
    /**
     * The action id for the event, i.e Git.CreateRepo, Project.RenameProject
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
     * DisplayName of the user who initiated the action
     */
    actorDisplayName?: string;
    /**
     * URL of Actor's Profile image
     */
    actorImageUrl?: string;
    /**
     * The Actor's UPN
     */
    actorUPN?: string;
    /**
     * The Actor's User Id (if actor is a user)
     */
    actorUserId?: string;
    /**
     * Area of Azure DevOps the action occurred
     */
    area?: string;
    /**
     * Type of authentication used by the actor
     */
    authenticationMechanism?: string;
    /**
     * Type of action executed
     */
    category?: 'unknown' | 'modify' | 'remove' | 'create' | 'access' | 'execute';
    /**
     * DisplayName of the category
     */
    categoryDisplayName?: string;
    /**
     * This allows related audit entries to be grouped together. Generally this occurs when a single action causes a cascade of audit entries. For example, project creation.
     */
    correlationId?: string;
    /**
     * External data such as CUIDs, item names, etc.
     */
    data?: Record<string, any>;
    /**
     * Decorated details
     */
    details?: string;
    /**
     * EventId - Needs to be unique per service
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
     * When specified, the name of the project this event is associated to
     */
    projectName?: string;
    /**
     * DisplayName of the scope
     */
    scopeDisplayName?: string;
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

