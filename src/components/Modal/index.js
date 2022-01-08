import React from "react";
import Modal from "react-modal";

const CustomModal = ({ visible, size, toggleModal, children }) => {
    const props = {
        centered: true,
        isOpen: visible,
        style: {
            content: {
                display: "flex",
                position: "absolute",
                alignSelf: "center",
                justifyContent: "center",
                borderRadius: "10px",
                marginTop: 20,
                maxHeight: 'fit-content',
                zIndex: 3,
                overFlow: 'hidden',
            },
            overlay: {
                backgroundColor: "rgba(0,0,0,0.5)",
            },
        },
    };
    return (
        <div className="z-[3]">
            <Modal                
                appElement={document.getElementById("root")}
                {...props}
            >
                {children}
            </Modal>
        </div>
    );
};

export default CustomModal;
