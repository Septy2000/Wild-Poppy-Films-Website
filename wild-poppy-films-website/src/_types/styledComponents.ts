export type ScrollBannerColorVariant = "black" | "red" | "green";

export type PrimaryButtonColorVariant = "red" | "green";

export interface AnimationProps {
    $axis: "X" | "Y";
    $direction: 1 | -1;
    $delay?: number;
}

export interface PrimaryButtonStyledProps extends AnimationProps {
    $variant: PrimaryButtonColorVariant;
    $animated: boolean;
    $inView: boolean;
}

export type SecondaryButtonVariant = "blue" | "green";
