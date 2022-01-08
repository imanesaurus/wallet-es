import React from "react";
import { Input, InputGroup, InputGroupText, Row } from "reactstrap";
import { filterIcon, searchIcon } from "../../../assets/icons";
import Image from "../../../components/Image";

const SearchBar = () => {
    return (
        <Row className="flex flex-1 justify-between">
            <InputGroup
                className="bg-[#F5F5F5] flex-4 pl-3 text-[gray-light] items-center align-middle"
                style={{
                    height: "40px",
                    width: "80%",
                    borderRadius: "8px",
                }}
            >
                <InputGroupText className="flex flex-row items-center h-full">
                    <Image src={searchIcon} label="home-search" size="30px" />
                    <Input
                        className="bg-[#F5F5F5]"
                        placeholder="Search experiences"
                    />
                </InputGroupText>
            </InputGroup>

            <img
                src={filterIcon}
                alt="filter-icon"
                className="pr-2 object-contain"
                style={{ width: 40 }}
            />
        </Row>
    );
};

export default SearchBar;
