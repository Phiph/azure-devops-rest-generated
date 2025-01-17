/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Encapsulates the properties of an event role.  An event Role is used for role based subscription for example for a buildCompletedEvent, one role is request by field
 */
export type NotificationEventRole = {
    /**
     * Gets or sets an Id for that role, this id is used by the event.
     */
    id?: string;
    /**
     * Gets or sets the Name for that role, this name is used for UI display.
     */
    name?: string;
    /**
     * Gets or sets whether this role can be a group or just an individual user
     */
    supportsGroups?: boolean;
};

