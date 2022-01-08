import React from "react";
import { Container } from "reactstrap";
import ContentCard from "../../../components/Card/ContentCard";
import { SubLabel } from "../../../components/Label";
import { ContainerColumn } from "../../../layout/Container";

export const SearchBarContainer = ({ searchData = [], filterActive }) => {
    return (
        <div
            className="flex absolute bg-white h-full z-[2]"
            style={{ zIndex: filterActive ? 0 : 2 }}
        >
            <ContainerColumn>
                <SubLabel
                    title={`${searchData.length} experiences found`}
                    style={{ paddingTop: 10, paddingBottom: 20 }}
                />
                <Container className="flex-col w-screen sm:w-full pr-4">
                    {searchData.map((data) => {
                        return <ContentCard data={data} />;
                    })}
                </Container>
            </ContainerColumn>
        </div>
    );
};
