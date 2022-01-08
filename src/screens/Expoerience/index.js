import React, { useState } from "react";
import { Container } from "reactstrap";
import { profileIcon } from "../../assets/icons";
import { content1, content2 } from "../../assets/images";
import MainContainer from "../../layout/Container/MainContainer";
import ScreenContainer from "../../layout/Container/ScreenContainer";
import { ColorHeader, ContentBody, ContentHeader } from "./component";

const recentDetailsData = [
    {
        id: "1",
        title: "Defi Swap",
        content: "Swap your digital assets",
        totalUsers: 200,
        img: content1,
        category: {
            id: 6,
            title: "Utilities",
        },
        description:
            "it is easy to electronically sign, manage and distribute all your contracts and documents safely, securely, anywhere, anytime- paperlessly. ",
        activities: {
            count: 2,
            list: [
                {
                    id: 1,
                    name: "johndoe.near",
                    profileImg: profileIcon,
                    message: "signed the contract successfully",
                    createdAt: "2 days ago",
                },
                {
                    id: 2,
                    name: "CryptoKing.near",
                    profileImg: profileIcon,
                    message: "request to sign the contract",
                    createdAt: "3 days ago",
                },
            ],
        },
    },
    {
        id: "2",
        title: "Docu Sign",
        content: "sign smart contracts seamlessly",
        totalUsers: 1700,
        img: content2,
        category: {
            id: 5,
            title: "Collectibles",
        },
        description:
            "Content 2 e all your contracts and documents safely, securely, anywhere, anytime- paperlessly. ",
        activities: {
            count: 2,
            list: [
                {
                    id: 1,
                    name: "maxwll.near",
                    profileImg: profileIcon,
                    message: "request to sign the contract",
                    createdAt: "3 days ago",
                },
                {
                    id: 2,
                    name: "johndoe.near",
                    profileImg: profileIcon,
                    message: "signed the contract successfully",
                    createdAt: "2 days ago",
                },
            ],
        },
    },
    {
        id: "3",
        title: "Mist Exp",
        content: "sign smart contracts seamlessly",
        totalUsers: 500,
        img: content2,
        category: {
            id: 5,
            title: "Collectibles",
        },
        description:
            "Content 2 e all your contracts and documents safely, securely, anywhere, anytime- paperlessly. ",
        activities: {
            count: 2,
            list: [
                {
                    id: 1,
                    name: "maxwll.near",
                    profileImg: profileIcon,
                    message: "request to sign the contract",
                    createdAt: "3 days ago",
                },
                {
                    id: 2,
                    name: "johndoe.near",
                    profileImg: profileIcon,
                    message: "signed the contract successfully",
                    createdAt: "2 days ago",
                },
            ],
        },
    },
    {
        id: "4",
        title: "Great Max",
        content: "sign smart contracts seamlessly",
        totalUsers: 2100,
        img: content2,
        category: {
            id: 5,
            title: "Collectibles",
        },
        description:
            "Content 2 e all your contracts and documents safely, securely, anywhere, anytime- paperlessly. ",
        activities: {
            count: 2,
            list: [
                {
                    id: 1,
                    name: "maxwll.near",
                    profileImg: profileIcon,
                    message: "request to sign the contract",
                    createdAt: "3 days ago",
                },
                {
                    id: 2,
                    name: "johndoe.near",
                    profileImg: profileIcon,
                    message: "signed the contract successfully",
                    createdAt: "2 days ago",
                },
            ],
        },
    },
];

const Experience = (props) => {
    const [activeTab, setActiveTab] = useState(1);
    const params = props.match.params;

    const tabs = [
        {
            id: 1,
            label: "Details",
            onClick: (value) => setActiveTab(value),
        },
        {
            id: 2,
            label: "Activities",
            onClick: (value) => setActiveTab(value),
        },
    ];

    const data = recentDetailsData.find((item) => item.id === params.id);
    return (
        <MainContainer>
            <Container className="flex flex-1 flex-col">
                <ColorHeader color="#E5D0FF" />
                <ScreenContainer>
                    <ContentHeader data={data} />
                </ScreenContainer>
                <ContentBody tabs={tabs} activeTab={activeTab} data={data} />
            </Container>
        </MainContainer>
    );
};

export default Experience;
