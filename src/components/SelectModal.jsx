import React from 'react';

import StyledButton from './StyledButton';

const SelectModal = ({ Modal, description, selectedModal, onModalChange, name, pledge, pledgeAmount, onSelect, leftAmount, onPledgeChange }) => {
    return (
        <div>
            {selectedModal === Modal ? (
                <div className='border-solid border-2  border-dark-cyan rounded-lg mb-6'>
                    <div className='flex gap-5 items-center px-5 pt-5 mb-8'>
                        <input
                            type="radio"
                            name={name}
                            value={Modal}
                            checked={selectedModal === Modal}
                            onChange={() => onModalChange(Modal)}
                        />
                        <div>
                            <h3 className='font-bold'>{Modal}</h3>
                            {pledgeAmount > 0 && <h3 className='text-moderate-cyan'>Pledge ${pledgeAmount} or more</h3>}
                        </div>
                    </div>
                    <p className='text-dark-gray mb-6 px-5'> {description}</p>
                    {leftAmount && <p className='flex gap-2 items-center mb-5 px-5'><span className='text-3xl font-bold'>{leftAmount}</span><span className='text-dark-gray'> left</span></p>}

                    <hr className='text-dark-gray mb-6' />
                    <div className='text-center mb-4 text-dark-gray'>Enter your pledge</div>

                    <div className=' relative flex justify-between items-center mb-4 px-5'>
                        <div className='absolute left-10 text-dark-gray'>$</div>
                        {pledgeAmount > 0 ? (
                            <input
                                type="text"
                                className='border border-dark-gray font-bold w-32 h-10 rounded-3xl px-9'
                                value={pledge}
                                onChange={(e) => onPledgeChange(e.target.value)}
                            />
                        ) : (
                            <input
                                type="text"
                                className='border border-dark-gray font-bold w-32 h-10 rounded-3xl px-9'
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
            ) : (
                <div className='px-5 py-8 border border-dark-gray border-opacity-50 rounded-lg mb-4'>
                    <div className='flex gap-5 items-center mb-8'>
                        <input
                            type="radio"
                            name={name}
                            value={Modal}
                            checked={selectedModal === Modal}
                            onChange={() => onModalChange(Modal)}
                        />
                        <div>
                            <h3 className='font-bold'>{Modal}</h3>
                            {pledgeAmount > 0 && <h3 className='text-moderate-cyan'>Pledge ${pledgeAmount} or more</h3>}
                        </div>
                    </div>
                    <p className='text-dark-gray w-11/12 mb-4'>{description}</p>
                    {leftAmount && <p className='flex gap-2 items-center mb-2'><span className='text-3xl font-bold'>{leftAmount}</span><span className='text-dark-gray'> left</span></p>}
                </div>
            )}
        </div>
    );
};

export default SelectModal;
