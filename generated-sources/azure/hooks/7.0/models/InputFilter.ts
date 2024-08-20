/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { InputFilterCondition } from './InputFilterCondition';
/**
 * Defines a filter for subscription inputs. The filter matches a set of inputs if any (one or more) of the groups evaluates to true.
 */
export type InputFilter = {
    /**
     * Groups of input filter expressions. This filter matches a set of inputs if any (one or more) of the groups evaluates to true.
     */
    conditions?: Array<InputFilterCondition>;
};

