import * as Styled from "./CircularCounter.styled";

export default function CircularProgress({
    currentIndex,
    total,
}: {
    currentIndex: number;
    total: number;
}) {
    const radius = 14;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (currentIndex / total) * circumference;

    return (
        <Styled.Wrapper>
            <svg width="32" height="32">
                <Styled.CircleProgress
                    r={radius}
                    cx="16"
                    cy="16"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                />
            </svg>
            <Styled.Counter>{currentIndex}</Styled.Counter>
        </Styled.Wrapper>
    );
}
