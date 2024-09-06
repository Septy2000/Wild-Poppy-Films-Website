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

    const [messageSent, setMessageSent] = useState(false);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        console.log("preferredName: ", preferredName);
        console.log("email: ", email);
        console.log("message: ", message);

        setMessageSent(true);
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
                                {messageSent && (
                                    <Styled.SuccessMessage>
                                        {"Message sent, we can't wait to read it!"}
                                    </Styled.SuccessMessage>
                                )}
                                <PrimaryButton label="send" type="submit"></PrimaryButton>
                            </Styled.SubmitButtonContainer>
                        </ScrollIntoViewAnimationWrapper>
                    </Styled.FormGridContainer>
                </Styled.FormContainer>
            </Styled.Container>
        </Styled.PageWrapper>
    );
}
