import Modal from 'react-modal';

Modal.setAppElement('#modal-root');

const ImageModal = ({
                        children,
                        handleClose,
                        modalIsOpen
                    }) => {
    return (<div>
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => handleClose()}
            contentLabel="Example Modal"
        >
            {children}
        </Modal>
    </div>);
}

export default ImageModal