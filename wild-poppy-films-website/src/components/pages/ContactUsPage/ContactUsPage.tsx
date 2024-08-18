"use client";
import React, { useState } from "react";
import TitleBuffer from "@/components/TitleBuffer/TitleBuffer";
import * as Styled from "./ContactUsPage.styled";
import PrimaryButton from "@/components/Buttons/PrimaryButton/PrimaryButton";

export default function ContactUsPage() {
    const [preferredName, setPreferredName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({ preferredName, email, message });
    };

    return (
        <Styled.PageWrapper>
            <TitleBuffer title="CONTACT" description="Let's cultivate connections!" />
            <Styled.Container>
                <Styled.PageInfo>
                    <Styled.Title>Feel free to reach out!</Styled.Title>
                    <Styled.Text>contact@wildpoppyfilms.com</Styled.Text>
                    <Styled.Text>London, UK</Styled.Text>
                </Styled.PageInfo>
                <Styled.FormGridContainer onSubmit={handleSubmit}>
                    <Styled.InputBox
                        type="text"
                        placeholder="Preferred Name"
                        value={preferredName}
                        onChange={(e) => setPreferredName(e.target.value)}
                    />
                    <Styled.InputBox
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <Styled.TextArea
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                    <PrimaryButton label="send" onClick={() => {}}></PrimaryButton>
                </Styled.FormGridContainer>
            </Styled.Container>
        </Styled.PageWrapper>
    );
}
