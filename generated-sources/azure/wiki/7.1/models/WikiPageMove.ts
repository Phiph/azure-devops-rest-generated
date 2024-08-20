/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WikiPage } from './WikiPage';
import type { WikiPageMoveParameters } from './WikiPageMoveParameters';
/**
 * Request contract for Wiki Page Move.
 */
export type WikiPageMove = (WikiPageMoveParameters & {
    /**
     * Resultant page of this page move operation.
     */
    page?: WikiPage;
});

