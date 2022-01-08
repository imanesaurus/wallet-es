import React from "react";
import { Container } from "reactstrap";
import { rightArrowIcon } from "../../assets/icons";
import Image from "../Image";
import { Label } from "../Label";

export const CategoryCard = ({ data }) => {
    return (
        <div
            className="flex rounded-small bg-[red] h-28"
            style={{ backgroundColor: data.bgColor }}
        >
            <Container>
                <Image
                    src={data.img}
                    size={40}
                    style={{
                        position: "absolute",
                        marginLeft: 10,
                        marginTop: 10,
                    }}
                />
            </Container>
            <Container className="flex flex-1 flex-row items-center self-end justify-between px-2 pb-[1.5]">
                <Label title={data.title} style={{ fontSize: 15 }} />
                <Image src={rightArrowIcon} size={15} />
            </Container>
        </div>
    );
};
