/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
import type { ReleaseApprovalHistory } from './ReleaseApprovalHistory';
import type { ReleaseDefinitionShallowReference } from './ReleaseDefinitionShallowReference';
import type { ReleaseEnvironmentShallowReference } from './ReleaseEnvironmentShallowReference';
import type { ReleaseShallowReference } from './ReleaseShallowReference';
export type ReleaseApproval = {
    /**
     * Gets or sets the type of approval.
     */
    approvalType?: 'undefined' | 'preDeploy' | 'postDeploy' | 'all';
    /**
     * Gets the identity who approved.
     */
    approvedBy?: IdentityRef;
    /**
     * Gets or sets the identity who should approve.
     */
    approver?: IdentityRef;
    /**
     * Gets or sets attempt which specifies as which deployment attempt it belongs.
     */
    attempt?: number;
    /**
     * Gets or sets comments for approval.
     */
    comments?: string;
    /**
     * Gets date on which it got created.
     */
    createdOn?: string;
    /**
     * Gets history which specifies all approvals associated with this approval.
     */
    history?: Array<ReleaseApprovalHistory>;
    /**
     * Gets the unique identifier of this field.
     */
    id?: number;
    /**
     * Gets or sets as approval is automated or not.
     */
    isAutomated?: boolean;
    /**
     * Gets date on which it got modified.
     */
    modifiedOn?: string;
    /**
     * Gets or sets rank which specifies the order of the approval. e.g. Same rank denotes parallel approval.
     */
    rank?: number;
    /**
     * Gets releaseReference which specifies the reference of the release to which this approval is associated.
     */
    release?: ReleaseShallowReference;
    /**
     * Gets releaseDefinitionReference which specifies the reference of the release definition to which this approval is associated.
     */
    releaseDefinition?: ReleaseDefinitionShallowReference;
    /**
     * Gets releaseEnvironmentReference which specifies the reference of the release environment to which this approval is associated.
     */
    releaseEnvironment?: ReleaseEnvironmentShallowReference;
    /**
     * Gets the revision number.
     */
    revision?: number;
    /**
     * Gets or sets the status of the approval.
     */
    status?: 'undefined' | 'pending' | 'approved' | 'rejected' | 'reassigned' | 'canceled' | 'skipped';
    /**
     * Gets url to access the approval.
     */
    url?: string;
};

