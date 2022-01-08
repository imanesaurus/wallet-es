import React from "react";
import { Container } from "reactstrap";
import {
    closeIcon,
    copyIcon,
    socialDiscordIcon,
    socialTelegramIcon,
    socialTwitterIcon,
} from "../../../assets/icons";
import Image from "../../../components/Image";
import CustomModal from "../../../components/Modal";
import { ContainerColumn, ContainerRow } from "../../../layout/Container";

export const ModalShare = ({ visible, toggleModal, shareLink }) => {
    return (
        <CustomModal visible={visible} toggleModal={toggleModal}>
            <div className="w-screen sm:w-full">
                <ContainerRow
                    style={{
                        justifyContent: "space-between",
                    }}
                >
                    <Container className="flex flex-row">
                        Share this Experience{" "}
                    </Container>
                    <Image src={closeIcon} size={20} onClick={toggleModal} />
                </ContainerRow>
                <ContainerColumn>
                    <Container className="self-center py-3 px-1 my-4 mt-6 bg-lightblue rounded-medium max-w-[80%]">
                        <div className="text-[#587BE0] truncate">
                            {shareLink}
                        </div>
                    </Container>
                    <ContainerRow
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            marginBottom: 10,
                        }}
                    >
                        <Image src={copyIcon} size={35} />
                        <p className="pl-2 text-[#587BE0]">Copy Link</p>
                    </ContainerRow>
                    <ContainerRow
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            marginBottom: 10,
                        }}
                    >
                        <Image src={socialDiscordIcon} size={40}  style={{ margin: 10}}/>
                        <Image src={socialTelegramIcon} size={40} style={{ margin: 10}} />
                        <Image src={socialTwitterIcon} size={40} style={{ margin: 10}} />
                    </ContainerRow>
                </ContainerColumn>
            </div>
        </CustomModal>
    );
};
