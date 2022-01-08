import React from "react";
import { Badge, ButtonGroup, Container } from "reactstrap";
import { openArrowIcon, peopleIcon, shareIcon } from "../../../assets/icons";
import Image from "../../../components/Image";
import { Label, SubLabel } from "../../../components/Label";
import { ContainerColumn, ContainerRow } from "../../../layout/Container";
import ScreenContainer from "../../../layout/Container/ScreenContainer";

export const ColorHeader = ({ color }) => {
    return (
        <div
            className="flex h-20 w-full m-0"
            style={{ backgroundColor: color }}
        />
    );
};

export const ContentHeader = ({ data }) => {
    return (
        <Container>
            <Container className="flex flex-row justify-between">
                <Image src={data.img} size={75} style={{ marginTop: -50 }} />
                <Image src={shareIcon} style={{ width: 70 }} />
            </Container>
            <Label title={data.title} />
            <SubLabel title={data.content} />
            <SubLabel
                title={data.category?.title}
                style={{ marginTop: 5, color: "#885FFF" }}
            />
            <Container className="flex flex-row mt-2 items-center">
                <ButtonGroup
                    onClick={() => alert("open")}
                    className="bg-secondary px-4 py-2 rounded-medium mr-4"
                >
                    <Container className="flex flex-row items-center jusitfy-center">
                        <div className="mr-4 text-white">Open</div>
                        <Image src={openArrowIcon} size={20} />
                    </Container>
                </ButtonGroup>
                <Container className="flex flex-row">
                    <Image src={peopleIcon} size={25} />
                    <div className="text-text-gray">
                        {data.totalUsers}+ users
                    </div>
                </Container>
            </Container>
        </Container>
    );
};

export const ContentBody = ({ tabs = [], activeTab, data }) => {
    const renderDetails = () => {
        return (
            <Container>
                <ContainerColumn>
                    <Label title="Overview" />
                    {data.description}
                </ContainerColumn>
            </Container>
        );
    };

    const renderActivities = () => {
        return (
            <ContainerColumn>
                <Badge className="w-auto self-center px-2 py-1 mt-1 rounded-medium bg-navbar-gray">
                    <SubLabel
                        title={`${data.activities.count} Activity Found`}
                        style={{ color: "gray" }}
                    />
                </Badge>
                <ScreenContainer>
                    {data.activities.list.map((item) => {
                        return (
                            <ContainerColumn
                                style={{
                                    alignSelf: "flex-start",
                                    paddingBottom: 10,
                                }}
                            >
                                <ContainerRow>
                                    <Image
                                        src={item.profileImg}
                                        size={50}
                                        style={{
                                            marginLeft: -5,
                                            marginRight: 5,
                                        }}
                                    />
                                    <ContainerColumn>
                                        <div className="text-base">
                                            <span className="text-primary">
                                                {item.name}
                                            </span>{" "}
                                            {item.message}
                                        </div>
                                        <SubLabel
                                            title={item.createdAt}
                                            textColor="text-gray"
                                        />
                                    </ContainerColumn>
                                </ContainerRow>
                            </ContainerColumn>
                        );
                    })}
                </ScreenContainer>
            </ContainerColumn>
        );
    };

    return (
        <Container>
            <Container className="flex flex-1 items-center">
                {tabs.map((tab) => {
                    let isSelected = tab.id === activeTab;
                    return (
                        <Container
                            key={`${tab.id}`}
                            onClick={() => tab.onClick(tab.id)}
                            className="flex flex-1 mt-4 content-center py-2"
                            style={{
                                alignItems: "center",
                                justifySelf: "center",
                                borderBottomWidth: isSelected && 4,
                                borderBottomColor: isSelected && "secondary",
                            }}
                        >
                            <div className="flex w-full justify-center">
                                {tab.label}
                            </div>
                        </Container>
                    );
                })}
            </Container>
            <ScreenContainer>
                {activeTab === 1 ? renderDetails() : renderActivities()}
            </ScreenContainer>
        </Container>
    );
};
