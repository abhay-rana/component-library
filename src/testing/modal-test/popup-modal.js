import { ExclamationCircleIcon } from '@heroicons/react/24/solid';
import Button from 'components/common/button';
import Modal from 'components/modal/modal';
import { useModalUpdater } from 'provider/portal-provider';
import React, { useState } from 'react';

const PopUpModal = (props) => {
    const [is_loading, setLoading] = useState(false);
    const { toggleModal } = useModalUpdater();

    const hideDelay = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            toggleModal.hide('popup_modal');
        }, 2500);
    };

    console.log('setLoading', is_loading);
    return (
        <Modal {...props}>
            <section className="flex h-[150px] w-[450px] flex-col items-center justify-evenly border border-green-400">
                <ExclamationCircleIcon width={40} height={40} />
                <p className="text-center text-xl">
                    Are you sure you want to delete this product?
                </p>
                <div className="flex flex-row">
                    <Button
                        className="bg-danger text-black"
                        onClick={hideDelay}
                        loader={is_loading}
                    >
                        Yes, I'm sure
                    </Button>
                    <Button onClick={() => toggleModal.hide('popup_modal')}>
                        No, cancel
                    </Button>
                </div>
            </section>
        </Modal>
    );
};

export default PopUpModal;
