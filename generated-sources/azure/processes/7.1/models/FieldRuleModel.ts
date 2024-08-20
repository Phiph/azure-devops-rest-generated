/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RuleActionModel } from './RuleActionModel';
import type { RuleConditionModel } from './RuleConditionModel';
export type FieldRuleModel = {
    actions?: Array<RuleActionModel>;
    conditions?: Array<RuleConditionModel>;
    friendlyName?: string;
    id?: string;
    isDisabled?: boolean;
    isSystem?: boolean;
};

