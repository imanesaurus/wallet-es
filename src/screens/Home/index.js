import React from "react";
import { Col, Container, Row } from "reactstrap";
import { rightArrowPurpleIcon } from "../../assets/icons";
import {
    category1,
    category2,
    category3,
    category4,
    category5,
    category6,
    content1,
    content2,
} from "../../assets/images";
import { CategoryCard } from "../../components/Card/CategoryCard";
import ContentCard from "../../components/Card/ContentCard";
import Image from "../../components/Image";
import { Label, SubLabel } from "../../components/Label";
import ScreenContainer from "../../layout/Container/ScreenContainer";
import SearchBarHome from "./component/SearchBar";

const recentData = [
    {
        id: 1,
        title: "Defi Swap",
        content: "Swap your digital assets",
        totalUsers: 200,
        img: content1,
    },
    {
        id: 2,
        title: "Docu Sign",
        content: "sign smart contracts seamlessly",
        totalUsers: 1700,
        img: content2,
    },
];

const popularCategories = [
    {
        id: 1,
        title: "Exchanges",
        bgColor: "#EAEFFF",
        img: category1,
    },
    {
        id: 2,
        title: "Games",
        bgColor: "#F5F5F5",
        img: category2,
    },
    {
        id: 3,
        title: "Marketplaces",
        bgColor: "#E2F9F3",
        img: category3,
    },
    {
        id: 4,
        title: "Defi",
        bgColor: "#FFF3EC",
        img: category4,
    },
    {
        id: 5,
        title: "Collectibles",
        bgColor: "#EBF5FF",
        img: category5,
    },
    {
        id: 6,
        title: "Utilities",
        bgColor: "#F0EBFF",
        img: category6,
    },
];

const RecentContent = () => {
    return recentData.map((item) => {
        return <ContentCard key={`${item.id}`} data={item} />;
    });
};

const PopularCategoriesContent = () => {
    return popularCategories.map((category) => {
        return <CategoryCard key={category.id} data={category} />;
    });
};

const Home = () => {
    return (
        <ScreenContainer>
            <Col className="w-full">
                <SearchBarHome />
                <Label title="Recent Experiences" />
                <RecentContent />

                <Row className="flex justify-between items-center">
                    <Container>
                        <Label title="Popular Categories" />
                    </Container>
                    <Row className="flex items-center">
                        <Container className="w-10 mr-2">
                            <SubLabel
                                title="See all"
                                style={{
                                    color: "#885FFF",
                                }}
                            />
                        </Container>
                        <Container>
                            <Image
                                src={rightArrowPurpleIcon}
                                size={14}
                                style={{ color: "red" }}
                            />
                        </Container>
                    </Row>
                </Row>
                <Container className="grid grid-cols-2 gap-3">
                    <PopularCategoriesContent />
                </Container>
            </Col>
        </ScreenContainer>
    );
};

export default Home;
