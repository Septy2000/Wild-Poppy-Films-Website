import * as Styled from "./TermsAndConditionsPage.styled";
import React from "react";
export default function TermsAndConditionsPage() {
    const pageContent = {
        title: "- TERMS & CONDITIONS",
        content: {
            date: "Effective Date: 24/05/2024",
            intro: 'Welcome to the Wild Poppy Film website (the "Site"). By accessing or using the Site, you agree to be bound by the following Terms and Conditions. If you do not agree to these Terms and Conditions, you may not use the Site.',
            list: [
                {
                    title: "Use of the Site",
                    content:
                        "You may use the Site for personal, non-commercial purposes only. You may not use the Site for any illegal or unauthorized purpose. You may not attempt to gain unauthorized access to the Site or interfere with its operation.",
                },
                {
                    title: "Content Ownership",
                    content:
                        "All content on the Site, including text, graphics, logos, and images, is the property of Wild Poppy Film or its licensors and is protected by copyright and other intellectual property laws. You may not use any content from the Site without the express written permission of Wild Poppy Film.",
                },
                {
                    title: "Disclaimer of Warranties",
                    content:
                        'Wild Poppy Film makes no representations or warranties of any kind, express or implied, as to the operation of the Site or the information, content, or materials included on the Site. The Site is provided "as is" and "as available," and Wild Poppy Film disclaims all warranties, express or implied, including but not limited to implied warranties of merchantability and fitness for a particular purpose.',
                },
                {
                    title: "Limitation of Liability",
                    content:
                        "Wild Poppy Film will not be liable for any damages of any kind arising from the use of the Site, including but not limited to direct, indirect, incidental, punitive, and consequential damages.",
                },
                {
                    title: "Changes to the Terms and Conditions",
                    content:
                        "Wild Poppy Film reserves the right to make changes to these Terms and Conditions at any time. Your continued use of the Site after any changes to the Terms and Conditions will signify your acceptance of the revised terms.",
                },
                {
                    title: "Governing Law",
                    content:
                        "These Terms and Conditions will be governed by and construed in accordance with the laws of [your jurisdiction], and any disputes arising from these Terms and Conditions will be resolved in the courts of [your jurisdiction].",
                },
                {
                    title: "Contact Information",
                    content:
                        "If you have any questions or concerns about these Terms and Conditions, please contact us at [your contact information].",
                },
            ],
            thanks: "Thank you for visiting the Wild Poppy Film website.",
        },
    };

    return (
        <Styled.PageWrapper>
            <Styled.Banner>
                <Styled.PageTitle>{pageContent.title}</Styled.PageTitle>
            </Styled.Banner>
            <Styled.Container>
                <Styled.Text>{pageContent.content.date}</Styled.Text>
                <Styled.Text>{pageContent.content.intro}</Styled.Text>
                {pageContent.content.list.map((item, index) => (
                    <Styled.ListItem key={index}>
                        <Styled.ContentTitle>{`${index + 1}. ${item.title}`}</Styled.ContentTitle>
                        <Styled.Text>{item.content}</Styled.Text>
                    </Styled.ListItem>
                ))}
                <Styled.Text>{pageContent.content.thanks}</Styled.Text>
            </Styled.Container>
        </Styled.PageWrapper>
    );
}
