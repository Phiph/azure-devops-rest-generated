/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { attribute } from './attribute';
import type { FilterClause } from './FilterClause';
export type Rule = {
    clauses?: Array<FilterClause>;
    filter?: string;
    isEnabled?: string;
    name?: string;
    settings?: attribute;
};

