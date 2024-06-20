import * as Styled from "./ModalSocialButton.styled";

export default function ModalSocialButton({ link, icon }: { link: string; icon: React.ReactNode }) {
    return <Styled.Container href={link}>{icon}</Styled.Container>;
}
