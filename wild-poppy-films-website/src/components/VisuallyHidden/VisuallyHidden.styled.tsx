"use client";
import styled from "styled-components";

/**
 * Removes content from the visual layout while keeping it available to screen
 * readers and search engines. Used for headings that the design expresses
 * graphically rather than as text.
 *
 * `clip-path` plus a 1px box is the standard technique - `display: none` and
 * `visibility: hidden` would remove it from the accessibility tree too.
 */
export const VisuallyHidden = styled.span`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
    border: 0;
`;
