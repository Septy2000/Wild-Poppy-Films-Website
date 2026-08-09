/**
 * Joins a list of credited names for display, e.g. ["ANA PÂRVU", "LUKE MOTT"] -> "ANA PÂRVU & LUKE MOTT".
 *
 * Rendering a string[] directly as a JSX child concatenates the entries with no
 * separator ("ANA PÂRVULUKE MOTT"), so credits must always go through here.
 */
export function formatCredits(names: string[] | undefined): string {
    return names?.join(" & ") ?? "";
}
