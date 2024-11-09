"use client";
import React, { useState } from "react";
import TitleBuffer from "@/components/TitleBuffer/TitleBuffer";
import * as Styled from "./ContactUsPage.styled";
import PrimaryButton from "@/components/Buttons/PrimaryButton/PrimaryButton";
import emailjs from "@emailjs/browser";
import { ScrollIntoViewAnimationWrapper } from "@/components/AnimationWrappers/AnimationWrappers.styled";

export default function ContactUsPage() {
    const [preferredName, setPreferredName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [messageStatus, setMessageStatus] = useState("");

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const templateParams = {
            preferredName: preferredName,
            email: email,
            message: message,
            reply_to: email,
        };

        emailjs
            .send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
                templateParams,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ""
            )
            .then(
                () => {
                    setMessageStatus("Message sent, we can't wait to read it!");
                },
                (error) => {
                    setMessageStatus(`Failed to send email: ${error.text}`);
                }
            );

        setPreferredName("");
        setEmail("");
        setMessage("");
    }

    const delayPerItem = 0.1;

    return (
        <Styled.PageWrapper>
            <TitleBuffer title="CONTACT" description="Let's cultivate connections!" />
            <Styled.Container>
                <ScrollIntoViewAnimationWrapper
                    $inView={true}
                    $animationDelay={1 * delayPerItem}
                    $axis="Y"
                    $direction={1}
                >
                    <Styled.PageInfo>
                        <Styled.Title>Feel free to reach out!</Styled.Title>
                        <Styled.Text>contact@wildpoppyfilms.com</Styled.Text>
                        <Styled.Text>London, UK</Styled.Text>
                    </Styled.PageInfo>
                </ScrollIntoViewAnimationWrapper>
                <Styled.Divider />
                <Styled.FormContainer>
                    <Styled.FormGridContainer onSubmit={handleSubmit}>
                        <ScrollIntoViewAnimationWrapper
                            $inView={true}
                            $animationDelay={1 * delayPerItem}
                            $axis="Y"
                            $direction={1}
                            style={{ width: "100%" }}
                        >
                            <Styled.NameEmailContainer>
                                <Styled.NameInputBox
                                    type="text"
                                    placeholder="Preferred Name"
                                    value={preferredName}
                                    onChange={(e) => setPreferredName(e.target.value)}
                                    required
                                />
                                <Styled.EmailInputBox
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </Styled.NameEmailContainer>
                        </ScrollIntoViewAnimationWrapper>
                        <ScrollIntoViewAnimationWrapper
                            $inView={true}
                            $animationDelay={2 * delayPerItem}
                            $axis="Y"
                            $direction={1}
                            style={{ width: "100%" }}
                        >
                            <Styled.MessageTextBox
                                placeholder="Message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                        </ScrollIntoViewAnimationWrapper>
                        <ScrollIntoViewAnimationWrapper
                            $inView={true}
                            $animationDelay={3 * delayPerItem}
                            $axis="Y"
                            $direction={1}
                        >
                            <Styled.SubmitButtonContainer>
                                <Styled.SuccessMessage>{messageStatus}</Styled.SuccessMessage>
                                <PrimaryButton label="send" type="submit"></PrimaryButton>
                            </Styled.SubmitButtonContainer>
                        </ScrollIntoViewAnimationWrapper>
                    </Styled.FormGridContainer>
                </Styled.FormContainer>
            </Styled.Container>
        </Styled.PageWrapper>
    );
}
