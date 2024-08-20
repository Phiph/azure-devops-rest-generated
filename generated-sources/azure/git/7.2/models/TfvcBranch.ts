/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TfvcBranchMapping } from './TfvcBranchMapping';
import type { TfvcBranchRef } from './TfvcBranchRef';
import type { TfvcShallowBranchRef } from './TfvcShallowBranchRef';
/**
 * Class representing a branch object.
 */
export type TfvcBranch = (TfvcBranchRef & {
    /**
     * List of children for the branch.
     */
    children?: Array<TfvcBranch>;
    /**
     * List of branch mappings.
     */
    mappings?: Array<TfvcBranchMapping>;
    /**
     * Path of the branch's parent.
     */
    parent?: TfvcShallowBranchRef;
    /**
     * List of paths of the related branches.
     */
    relatedBranches?: Array<TfvcShallowBranchRef>;
});

