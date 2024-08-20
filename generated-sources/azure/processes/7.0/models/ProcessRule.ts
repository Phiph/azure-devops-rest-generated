/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateProcessRuleRequest } from './CreateProcessRuleRequest';
/**
 * Process Rule Response.
 */
export type ProcessRule = (CreateProcessRuleRequest & {
    /**
     * Indicates if the rule is system generated or created by user.
     */
    customizationType?: 'system' | 'inherited' | 'custom';
    /**
     * Id to uniquely identify the rule.
     */
    id?: string;
    /**
     * Resource Url.
     */
    url?: string;
});

