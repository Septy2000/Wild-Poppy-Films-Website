import React from "react";
import * as Styled from "./SupportUsPage.styled";
import { ScrollIntoViewAnimationWrapper } from "@/components/AnimationWrappers/AnimationWrappers.styled";

export default function SupportUsPage() {
    const delayPerItem = 0.1;

    const text = {
        banner: {
            title: "Ready to plant your first poppy?",
            body: "Your donations help us us continue crafting captivating stories and fostering a vibrant, inclusive film community. Together, we can nurture a thriving creative landscape where love for cinema flourishes.",
        },
        content: {
            title: "WAYS YOU CAN CONTRIBUTE TO OUR PROJECT:",
            blocks: [
                {
                    title: "BANK TRANSFER",
                    bankDetails: {
                        accountName: "Wild Poppy Films Association",
                        iban: "IBAN ROXX XXXX XXXX XXXX XXXX XXXX",
                        bank: "Banca Transilvania",
                    },
                },
                {
                    title: "REDIRECT 3,5% OF YEARLY INCOME TAX",
                    subtitle: "STEP-BY-STEP PROCESS",
                    olItems: [
                        {
                            title: "Download the D230 form:",
                            desc: "",
                            ulItems: ["2-year pledge", "1-year pledge"],
                        },
                        {
                            title: "Fill in the form",
                            desc: "",
                            ulItems: [
                                "Our information is prefilled for the forms provided above. You only have to fill in your personal information in Section 1. DO NOT FORGET to sign the form on the left side of the lower section.",
                            ],
                        },
                        {
                            title: "Send the form via your preferred method: ",
                            desc: "",
                            ulItems: [
                                "Submit the form directly to the ANAF Center to which you belong according to your residence (as shown on your identity card).",
                                "Send the completed and signed form as a high-resolution scan/photograph to contact@wildpoppyfilms.com and we will submit it on your behalf.",
                                "Submit the form through the online ANAF service via the Virtual Private Space (this option requires you to own an electronic signature).",
                            ],
                        },
                    ],
                },
                {
                    title: "FREQENTLY ASKED QUESTIONS",
                    olItems: [
                        {
                            title: "Where can I use this method?",
                            desc: "Fulfilling ANY of the following conditions allows you to donate via this method: ",
                            ulItems: [
                                "You have income from salaries or income similar to salaries.",
                                "You have income from pensions.",
                                "You have income from self-employment or agricultural activities, taxed based on income norms.",
                                "You have income from self-employment in sports activities, for which the tax is withheld at source.",
                                "You have income from intellectual property rights, other than those for which the net income is determined in the real system.",
                                "You have income from the transfer of use of assets, for which the net income is determined based on expense rates or income norms.",
                            ],
                        },
                        {
                            title: "What happens to to the 3,5% if I opt not to donate it?",
                            desc: "If you choose to defer, the sum will be redirected towards the states yearly budget.",
                            ulItems: [],
                        },
                        {
                            title: "Should I calculate or estimate the value of the 3,5%?",
                            desc: "No, the tax body will do that for you automatically.",
                            ulItems: [],
                        },
                    ],
                },
            ],
        },
    };

    return (
        <Styled.PageWrapper>
            <Styled.Container>
                <Styled.Banner>
                    <Styled.VerticalFlexContainer $gap={1}>
                        <Styled.BannerTitle>{text.banner.title}</Styled.BannerTitle>
                        <Styled.BannerText>{text.banner.body}</Styled.BannerText>
                    </Styled.VerticalFlexContainer>
                    <Styled.WPFLogoStyled />
                </Styled.Banner>

                <Styled.ContentContainer>
                    <Styled.ContentTitle>{text.content.title}</Styled.ContentTitle>

                    <ScrollIntoViewAnimationWrapper
                        $inView={true}
                        $animationDelay={1 * delayPerItem}
                        $axis="Y"
                        $direction={1}
                        style={{ width: "100%" }}
                    >
                        <Styled.ContentBlock>
                            <Styled.ContentBlockTitleContainer>
                                <Styled.BlockTitle>
                                    {text.content.blocks[0].title}
                                </Styled.BlockTitle>
                                <Styled.PoppyLogoStyled />
                            </Styled.ContentBlockTitleContainer>

                            <Styled.VerticalFlexContainer $gap={0.5}>
                                <Styled.BlockText>
                                    {text.content.blocks[0].bankDetails!.accountName}
                                </Styled.BlockText>
                                <Styled.BlockText>
                                    {text.content.blocks[0].bankDetails!.iban}
                                </Styled.BlockText>
                                <Styled.BlockText>
                                    {text.content.blocks[0].bankDetails!.bank}
                                </Styled.BlockText>
                            </Styled.VerticalFlexContainer>
                        </Styled.ContentBlock>
                    </ScrollIntoViewAnimationWrapper>

                    <ScrollIntoViewAnimationWrapper
                        $inView={true}
                        $animationDelay={2 * delayPerItem}
                        $axis="Y"
                        $direction={1}
                        style={{ width: "100%" }}
                    >
                        <Styled.ContentBlock>
                            <Styled.ContentBlockTitleContainer>
                                <Styled.BlockTitle>
                                    {text.content.blocks[1].title}
                                </Styled.BlockTitle>
                                <Styled.PoppyLogoStyled />
                            </Styled.ContentBlockTitleContainer>
                            <Styled.BlockSubtitle>
                                {text.content.blocks[1].subtitle}
                            </Styled.BlockSubtitle>
                            <Styled.OLStyled>
                                {text.content.blocks[1].olItems!.map((item, index) => (
                                    <Styled.OLLIStyled key={index}>
                                        <Styled.BlockSubtitle>{item.title}</Styled.BlockSubtitle>
                                        <Styled.BlockText style={{ marginTop: "1rem" }}>
                                            {item.desc}
                                        </Styled.BlockText>
                                        <Styled.ULStyled>
                                            {item.ulItems!.map((ulItem, index) => (
                                                <Styled.ULLIStyled key={`${index}`}>
                                                    <Styled.BlockText>{ulItem}</Styled.BlockText>
                                                </Styled.ULLIStyled>
                                            ))}
                                        </Styled.ULStyled>
                                    </Styled.OLLIStyled>
                                ))}
                            </Styled.OLStyled>
                        </Styled.ContentBlock>
                    </ScrollIntoViewAnimationWrapper>

                    <ScrollIntoViewAnimationWrapper
                        $inView={true}
                        $animationDelay={3 * delayPerItem}
                        $axis="Y"
                        $direction={1}
                        style={{ width: "100%" }}
                    >
                        <Styled.ContentBlock>
                            <Styled.ContentBlockTitleContainer>
                                <Styled.BlockTitle>
                                    {text.content.blocks[2].title}
                                </Styled.BlockTitle>
                                <Styled.PoppyLogoStyled />
                            </Styled.ContentBlockTitleContainer>
                            <Styled.OLStyled>
                                {text.content.blocks[2].olItems!.map((item, index) => (
                                    <Styled.OLLIStyled key={index}>
                                        <Styled.BlockSubtitle>{item.title}</Styled.BlockSubtitle>
                                        <Styled.BlockText style={{ marginTop: "1rem" }}>
                                            {item.desc}
                                        </Styled.BlockText>
                                        <Styled.ULStyled>
                                            {item.ulItems!.map((ulItem, index) => (
                                                <Styled.ULLIStyled key={`${index}`}>
                                                    <Styled.BlockText>{ulItem}</Styled.BlockText>
                                                </Styled.ULLIStyled>
                                            ))}
                                        </Styled.ULStyled>
                                    </Styled.OLLIStyled>
                                ))}
                            </Styled.OLStyled>
                        </Styled.ContentBlock>
                    </ScrollIntoViewAnimationWrapper>
                </Styled.ContentContainer>
            </Styled.Container>
        </Styled.PageWrapper>
    );
}
