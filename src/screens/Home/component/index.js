import React from "react";
import { Container, Row } from "reactstrap";
import { Label, SubLabel } from "../../../components/Label";
import { rightArrowPurpleIcon } from "../../../assets/icons";
import Image from "../../../components/Image";

export const SectionLabel = ({ title, sub }) => {
    return (
        <Row className="flex justify-between items-center mt-4">
            <Container>
                <Label title={title} />
            </Container>
            <Row className="flex items-center">
                <Container className="w-10 mr-2">
                    <SubLabel
                        title={sub}
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
    );
};
