/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NotificationEventFieldType } from './NotificationEventFieldType';
/**
 * Encapsulates the properties of a filterable field. A filterable field is a field in an event that can used to filter notifications for a certain event type.
 */
export type NotificationEventField = {
    /**
     * Gets or sets the type of this field.
     */
    fieldType?: NotificationEventFieldType;
    /**
     * Gets or sets the unique identifier of this field.
     */
    id?: string;
    /**
     * Gets or sets the name of this field.
     */
    name?: string;
    /**
     * Gets or sets the path to the field in the event object. This path can be either Json Path or XPath, depending on if the event will be serialized into Json or XML
     */
    path?: string;
    /**
     * Gets or sets the scopes that this field supports. If not specified then the event type scopes apply.
     */
    supportedScopes?: Array<string>;
};

