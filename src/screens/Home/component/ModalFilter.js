import React, { useState } from "react";
import { Container, Input } from "reactstrap";
import { closeIcon } from "../../../assets/icons";
import Image from "../../../components/Image";
import CustomModal from "../../../components/Modal";
import { ContainerRow } from "../../../layout/Container";

const ModalFilter = ({ visible, toggleModal, setFilter, filterData = [] }) => {
    const [categoryIds, setCategoryIds] = useState([]);

    function handleFilterClick(value) {
        let currentState = [...categoryIds];
        if (value === 0) {
            if (categoryIds.length === filterData.length) {
                currentState = [];
            } else {
                currentState = filterData.map((x) => x.id);
            }
        } else if (currentState.includes(value)) {
            currentState = currentState.filter((x) => x !== value);
        } else {
            currentState.push(value);
        }
        setCategoryIds(currentState);
        setFilter(currentState);
    }
    return (
        <CustomModal visible={visible} toggleModal={toggleModal}>
            <div className="w-screen sm:w-full">
                <ContainerRow
                    style={{
                        justifyContent: "space-between",
                        paddingBottom: 10,
                    }}
                >
                    <Container className="flex flex-row">
                        Filter{" "}
                        {categoryIds.length > 0 && (
                            <div
                                className="flex text-white bg-primary justify-center items-center rounded-full ml-2"
                                style={{ width: 25 }}
                            >
                                {categoryIds.length}
                            </div>
                        )}
                    </Container>
                    <Image src={closeIcon} size={20} onClick={toggleModal} />
                </ContainerRow>
                {filterData.map((item) => {
                    let isChecked = categoryIds.includes(item.id);
                    return (
                        <ContainerRow
                            key={`${item.id}`}
                            style={{ alignItems: "center", paddingBottom: 10 }}
                        >
                            <Input
                                className="mr-2 bg-[red]"
                                type="checkbox"
                                checked={isChecked}
                                style={{ width: 15 }}
                                onChange={() => handleFilterClick(item.id)}
                            />
                            {item.img && <Image src={item.img} size={35} />}
                            <Container>{item.title}</Container>
                        </ContainerRow>
                    );
                })}
            </div>
        </CustomModal>
    );
};

export default ModalFilter;
