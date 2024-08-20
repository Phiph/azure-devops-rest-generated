/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NotificationEventFieldOperator } from './NotificationEventFieldOperator';
import type { OperatorConstraint } from './OperatorConstraint';
import type { ValueDefinition } from './ValueDefinition';
/**
 * Encapsulates the properties of a field type. It describes the data type of a field, the operators it support and how to populate it in the UI
 */
export type NotificationEventFieldType = {
    /**
     * Gets or sets the unique identifier of this field type.
     */
    id?: string;
    operatorConstraints?: Array<OperatorConstraint>;
    /**
     * Gets or sets the list of operators that this type supports.
     */
    operators?: Array<NotificationEventFieldOperator>;
    subscriptionFieldType?: 'string' | 'integer' | 'dateTime' | 'plainText' | 'html' | 'treePath' | 'history' | 'double' | 'guid' | 'boolean' | 'identity' | 'picklistInteger' | 'picklistString' | 'picklistDouble' | 'teamProject';
    /**
     * Gets or sets the value definition of this field like the getValuesMethod and template to display in the UI
     */
    value?: ValueDefinition;
};

