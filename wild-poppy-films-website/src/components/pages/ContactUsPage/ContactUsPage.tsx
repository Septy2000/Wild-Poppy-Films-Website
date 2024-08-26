"use client";
import React, { useState } from "react";
import TitleBuffer from "@/components/TitleBuffer/TitleBuffer";
import * as Styled from "./ContactUsPage.styled";
import PrimaryButton from "@/components/Buttons/PrimaryButton/PrimaryButton";
import emailjs from "@emailjs/browser";

export default function ContactUsPage() {
    const [preferredName, setPreferredName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        console.log("preferredName: ", preferredName);
        console.log("email: ", email);
        console.log("message: ", message);
    }

    return (
        <Styled.PageWrapper>
            <TitleBuffer title="CONTACT" description="Let's cultivate connections!" />
            <Styled.Container>
                <Styled.PageInfo>
                    <Styled.Title>Feel free to reach out!</Styled.Title>
                    <Styled.Text>contact@wildpoppyfilms.com</Styled.Text>
                    <Styled.Text>London, UK</Styled.Text>
                </Styled.PageInfo>
                <Styled.Divider />
                <Styled.FormContainer>
                    <Styled.FormGridContainer onSubmit={handleSubmit}>
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

                        <Styled.MessageTextBox
                            placeholder="Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                        <Styled.SubmitButtonContainer>
                            <PrimaryButton label="send" type="submit"></PrimaryButton>
                        </Styled.SubmitButtonContainer>
                    </Styled.FormGridContainer>
                </Styled.FormContainer>
            </Styled.Container>
        </Styled.PageWrapper>
    );
}
