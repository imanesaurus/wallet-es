import React, { useState } from "react";
import { Col, Container } from "reactstrap";
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
import { Label } from "../../components/Label";
import ScreenContainer from "../../layout/Container/ScreenContainer";
import { SectionLabel } from "./component";
import ModalFilter from "./component/ModalFilter";
import SearchBarHome from "./component/SearchBar";
import { SearchBarContainer } from "./component/SearchBarContainer";

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

const trendingData = [
    {
        id: 2,
        title: "Docu Sign",
        content: "sign smart contracts seamlessly",
        totalUsers: 1700,
        img: content2,
    },
];

const allExperiences = [
    {
        id: 1,
        title: "Defi Swap",
        content: "Swap your digital assets",
        totalUsers: 200,
        categoryId: 1,
        img: content1,
    },
    {
        id: 2,
        title: "Docu Sign",
        content: "sign smart contracts seamlessly",
        totalUsers: 1700,
        categoryId: 2,
        img: content2,
    },
    {
        id: 3,
        title: "Mist Exp",
        content: "Swap your digital assets",
        totalUsers: 500,
        categoryId: 2,
        img: content1,
    },
    {
        id: 4,
        title: "Great Max",
        content: "sign smart contracts seamlessly",
        totalUsers: 2100,
        categoryId: 3,
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

const filterData = [
    {
        id: 0,
        title: "All Experiences",
    },
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

const RecentContent = ({ data }) => {
    return data.map((item) => {
        return <ContentCard key={`${item.id}`} data={item} />;
    });
};

const PopularCategoriesContent = () => {
    return popularCategories.map((category) => {
        return <CategoryCard key={category.id} data={category} />;
    });
};

const Home = () => {
    const [term, setTerm] = useState("");
    const [showFilterModal, setShowFilterModal] = useState(false);
    const [filteredExperiences, setFiltered] = useState([...allExperiences]);

    function handleSearch(e) {
        setTerm(e.target.value);
    }

    function toggleModal() {
        setShowFilterModal(!showFilterModal);
    }

    function handleFilter(value) {
        let currentFilter = [...filteredExperiences];
        currentFilter = allExperiences.filter((x) =>
            value.includes(x.categoryId)
        );
        setFiltered(currentFilter);
    }

    let df =
        filteredExperiences.length > 0 ? filteredExperiences : allExperiences;
    return (
        <>
            <ModalFilter
                visible={showFilterModal}
                toggleModal={toggleModal}
                filterData={filterData}
                title="Modal"
                setFilter={handleFilter}
            />
            <ScreenContainer>
                <Col className="w-full">
                    <SearchBarHome
                        value={term}
                        onChange={handleSearch}
                        onFilterClick={toggleModal}
                    />
                    {term && (
                        <SearchBarContainer
                            filterActive={showFilterModal}
                            searchData={df.filter((e) =>
                                e.title
                                    .toLocaleLowerCase()
                                    .includes(term.toLocaleLowerCase())
                            )}
                        />
                    )}
                    <Label title="Recent Experiences" />
                    <RecentContent data={recentData} />

                    <SectionLabel title="Popular Categories" sub="See all" />
                    <Container className="grid grid-cols-2 gap-3">
                        <PopularCategoriesContent />
                    </Container>

                    <SectionLabel title="Trending Experiences" sub="See all" />
                    <RecentContent data={trendingData} />
                </Col>
            </ScreenContainer>
        </>
    );
};

export default Home;
