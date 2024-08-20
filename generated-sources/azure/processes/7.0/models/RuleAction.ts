/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Action to take when the rule is triggered.
 */
export type RuleAction = {
    /**
     * Type of action to take when the rule is triggered.
     */
    actionType?: 'makeRequired' | 'makeReadOnly' | 'setDefaultValue' | 'setDefaultFromClock' | 'setDefaultFromCurrentUser' | 'setDefaultFromField' | 'copyValue' | 'copyFromClock' | 'copyFromCurrentUser' | 'copyFromField' | 'setValueToEmpty' | 'copyFromServerClock' | 'copyFromServerCurrentUser' | 'hideTargetField' | 'disallowValue';
    /**
     * Field on which the action should be taken.
     */
    targetField?: string;
    /**
     * Value to apply on target field, once the action is taken.
     */
    value?: string;
};

