/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { FieldInfo } from './FieldInfo';
/**
 * Card settings, such as fields and rules
 */
export type CardFieldSettings = {
    /**
     * A collection of field information of additional fields on cards. The index in the collection signifies the order of the field among the additional fields. Currently unused. Should be used with User Story 691539: Card setting: additional fields
     */
    additionalFields?: Array<FieldInfo>;
    /**
     * Display format for the assigned to field
     */
    assignedToDisplayFormat?: 'avatarOnly' | 'fullName' | 'avatarAndFullName';
    /**
     * A collection of field information of rendered core fields on cards.
     */
    coreFields?: Array<FieldInfo>;
    /**
     * Flag indicating whether to show assigned to field on cards. When true, AssignedToDisplayFormat will determine how the field will be displayed
     */
    showAssignedTo?: boolean;
    /**
     * Flag indicating whether to show child rollup on cards
     */
    showChildRollup?: boolean;
    /**
     * Flag indicating whether to show empty fields on cards
     */
    showEmptyFields?: boolean;
    /**
     * Flag indicating whether to show ID on cards
     */
    showId?: boolean;
    /**
     * Flag indicating whether to show show parent field on cards
     */
    showParent?: boolean;
    /**
     * Flag indicating whether to show state field on cards
     */
    showState?: boolean;
    /**
     * Flag indicating whether to show tags on cards
     */
    showTags?: boolean;
};

