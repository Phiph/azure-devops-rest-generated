/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdentityRef } from './IdentityRef';
/**
 * Identity information including a vote on a pull request.
 */
export type IdentityRefWithVote = (IdentityRef & {
    /**
     * Indicates if this reviewer has declined to review this pull request.
     */
    hasDeclined?: boolean;
    /**
     * Indicates if this reviewer is flagged for attention on this pull request.
     */
    isFlagged?: boolean;
    /**
     * Indicates if this approve vote should still be handled even though vote didn't change.
     */
    isReapprove?: boolean;
    /**
     * Indicates if this is a required reviewer for this pull request. <br /> Branches can have policies that require particular reviewers are required for pull requests.
     */
    isRequired?: boolean;
    /**
     * URL to retrieve information about this identity
     */
    reviewerUrl?: string;
    /**
     * Vote on a pull request:<br /> 10 - approved 5 - approved with suggestions 0 - no vote -5 - waiting for author -10 - rejected
     */
    vote?: number;
    /**
     * Groups or teams that this reviewer contributed to. <br /> Groups and teams can be reviewers on pull requests but can not vote directly.  When a member of the group or team votes, that vote is rolled up into the group or team vote.  VotedFor is a list of such votes.
     */
    votedFor?: Array<IdentityRefWithVote>;
});

