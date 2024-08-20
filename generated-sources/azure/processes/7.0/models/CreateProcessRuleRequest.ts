/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RuleAction } from './RuleAction';
import type { RuleCondition } from './RuleCondition';
/**
 * Request object/class for creating a rule on a work item type.
 */
export type CreateProcessRuleRequest = {
    /**
     * List of actions to take when the rule is triggered.
     */
    actions?: Array<RuleAction>;
    /**
     * List of conditions when the rule should be triggered.
     */
    conditions?: Array<RuleCondition>;
    /**
     * Indicates if the rule is disabled.
     */
    isDisabled?: boolean;
    /**
     * Name for the rule.
     */
    name?: string;
};

