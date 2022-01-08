import React from "react";
import { Col, Row } from "reactstrap";
import Card from ".";
import { totalUsersFormat } from "../../helper/textHelper";
import Image from "../Image";
import { Label, SubLabel } from "../Label";
import { rightArrowIcon } from "../../assets/icons";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const ContentCard = ({ data }) => {
    const history = useHistory();
    return (
        <Card onClick={() => history.push(`/experience/${data.id}`)}>
            <Row className="flex items-center">
                <Col className="flex-[0.5]">
                    <Image
                        src={data.img}
                        label={data.title}
                        size={90}
                        style={{ borderRadius: "8px" }}
                    />
                </Col>
                <Col className="flex-1 pr-1">
                    <Label title={data.title} style={{ padding: 0 }} />
                    <SubLabel title={data.content} />
                    <SubLabel
                        title={`${totalUsersFormat(
                            String(data.totalUsers)
                        )} users`}
                        style={{ color: "#587BE0", marginTop: 2 }}
                    />
                </Col>
                <Col className="flex-[0.1]">
                    <Image src={rightArrowIcon} size={15} label="home-arrow" />
                </Col>
            </Row>
        </Card>
    );
};

export default ContentCard;
