/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GraphMember } from './GraphMember';
export type AadGraphMember = (GraphMember & {
    /**
     * The short, generally unique name for the user in the backing directory. For AAD users, this corresponds to the mail nickname, which is often but not necessarily similar to the part of the user's mail address before the @ sign. For GitHub users, this corresponds to the GitHub user handle.
     */
    directoryAlias?: string;
    /**
     * When true, the group has been deleted in the identity provider
     */
    isDeletedInOrigin?: boolean;
    /**
     * The meta type of the user in the origin, such as "member", "guest", etc. See UserMetaType for the set of possible values.
     */
    metaType?: string;
});

