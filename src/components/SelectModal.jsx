import React from 'react';

import StyledButton from './StyledButton';

const SelectModal = ({ Modal, description, selectedModal, onModalChange, name, pledge, pledgeAmount, onSelect, leftAmount, onPledgeChange, isOutOfStock }) => {

    const isSelected = selectedModal === Modal;

    return (
        <div>
            <div className={`relative py-8 border border-dark-gray border-opacity-50 rounded-lg mb-4 ${isSelected ? "modal-selected" : ""} ${isOutOfStock ? "out-of-stock" : ""}`}>

                <div className={`${isOutOfStock ? "" : "modal-option "}flex gap-4 items-center mb-8 px-5 md:mb-4`}>
                    <input
                        type="radio"
                        name={name}
                        value={Modal}
                        checked={selectedModal === Modal}
                        onChange={() => onModalChange(Modal)}
                        className="radio-custom"
                        disabled={isOutOfStock}
                    />
                    <div className='md: flex gap-4'>
                        <h3 className="font-bold cursor-pointer">{Modal}</h3>
                        {pledgeAmount > 0 && <h3 className='text-moderate-cyan'>Pledge ${pledgeAmount} or more</h3>}
                    </div>
                </div>
                <p className='text-dark-gray w-11/12 mb-4 px-5 md:ml-11 md:mb-0'>{description}</p>
                {leftAmount >= 0 && <p className='flex gap-2 items-center mb-2 px-5 md:absolute top-6 right-0'><span className='text-3xl font-bold'>{leftAmount}</span><span className='text-dark-gray'> left</span></p>}

                {isSelected && (
                    <>
                        <hr className='bg-dark-gray border-none mt-8 mb-8 opacity-30 h-0.5' />

                        <div className='md:flex justify-between items-center px-5'>
                            <div className='text-center mb-6 text-dark-gray md:mb-0'>Enter your pledge</div>

                            <div className=' relative flex justify-between items-center mb-4 px-5 md:mb-0 md:px-0 gap-2'>
                                <div className='absolute left-10 text-dark-gray md:left-5'>$</div>
                                {pledgeAmount > 0 ? (
                                    <input
                                        type="text"
                                        className='border border-dark-gray font-bold w-28 h-10 rounded-3xl px-9 cursor-pointer'
                                        value={pledge}
                                        onChange={(e) => onPledgeChange(e.target.value)}
                                    />
                                ) : (
                                    <input
                                        type="text"
                                        className='border border-dark-gray font-bold w-32 h-10 rounded-3xl px-9 cursor-pointer'
                                        value={pledgeAmount}
                                        readOnly
                                    />
                                )}

                                <StyledButton
                                    content="Continue"
                                    onClick={onSelect}
                                />
                            </div>
                        </div>

                    </>
                )}
            </div>
        </div>
    );
};

export default SelectModal;
