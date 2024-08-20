/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Defines a condition on a field when the rule should be triggered.
 */
export type RuleCondition = {
    /**
     * Type of condition. $When. This condition limits the execution of its children to cases when another field has a particular value, i.e. when the Is value of the referenced field is equal to the given literal value. $WhenNot.This condition limits the execution of its children to cases when another field does not have a particular value, i.e.when the Is value of the referenced field is not equal to the given literal value. $WhenChanged.This condition limits the execution of its children to cases when another field has changed, i.e.when the Is value of the referenced field is not equal to the Was value of that field. $WhenNotChanged.This condition limits the execution of its children to cases when another field has not changed, i.e.when the Is value of the referenced field is equal to the Was value of that field.
     */
    conditionType?: 'when' | 'whenNot' | 'whenChanged' | 'whenNotChanged' | 'whenWas' | 'whenStateChangedTo' | 'whenStateChangedFromAndTo' | 'whenWorkItemIsCreated' | 'whenValueIsDefined' | 'whenValueIsNotDefined' | 'whenCurrentUserIsMemberOfGroup' | 'whenCurrentUserIsNotMemberOfGroup';
    /**
     * Field that defines condition.
     */
    field?: string;
    /**
     * Value of field to define the condition for rule.
     */
    value?: string;
};

