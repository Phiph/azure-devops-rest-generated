/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type GraphMembershipTraversal = {
    /**
     * Reason why the subject could not be traversed completely
     */
    incompletenessReason?: string;
    /**
     * When true, the subject is traversed completely
     */
    isComplete?: boolean;
    /**
     * The traversed subject descriptor
     */
    subjectDescriptor?: string;
    /**
     * Subject descriptor ids of the traversed members
     */
    traversedSubjectIds?: Array<string>;
    /**
     * Subject descriptors of the traversed members
     */
    traversedSubjects?: Array<string>;
};

