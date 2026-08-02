import "styled-components";
import theme from "@/styles/theme/theme";

/**
 * Teaches styled-components what `({ theme }) => ...` actually contains.
 *
 * Without this, DefaultTheme is an empty interface: every `theme.colors.*` and
 * `theme.screen.*` lookup is unchecked, and a typo silently compiles to
 * `undefined` in the generated CSS. Deriving it from the real theme object means
 * the palette and breakpoints stay in sync automatically and autocomplete works.
 */
type AppTheme = typeof theme;

declare module "styled-components" {
    export interface DefaultTheme extends AppTheme {}
}
