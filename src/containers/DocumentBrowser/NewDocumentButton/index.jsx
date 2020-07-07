import React, { useRef, useEffect } from "react";
import PropTypes from 'prop-types';
import RowItem from '../RowItem';
import styled from 'styled-components';

import { ReactComponent as PlusSVG } from '../../../assets/icons/plus.svg';

const Dot = styled.div`
    position: relative;

    width: ${({ theme }) => theme.constants.browser.dotSize};
    height: ${({ theme }) => theme.constants.browser.dotSize};
    margin: 0 21px; /* centers with search magnify icon */

    border-radius: 50%;
    border: 1.5px solid ${({ theme }) => theme.palette.text.regular};
`

const PlusIcon = styled(PlusSVG)`
    position: absolute;
    top: 1px;
    left: 1px;

    width: 8px;
    height: 8px;

    stroke: ${({ theme }) => theme.palette.text.regular};
    stroke-width: 1.5;
`

const ContentContainer = styled.div`
    flex-grow: 1;
`

const TitleInput = styled.input`
    width: 100%;

    color: ${({ theme }) => theme.palette.text.regular};
    background-color: transparent;
    border: none;
    
    font-weight: bold;
    font-family: ${({ theme }) => theme.typography.searchBar.fontFamily};
    font-size: ${({ theme }) => theme.typography.searchBar.fontSize};
    line-height: ${({ theme }) => theme.typography.searchBar.lineHeight};

    cursor: pointer;

    &:focus {
        outline: none;
    }
`


function focusOnTitleInput(titleInputRef) {
    if (titleInputRef.current) {
        titleInputRef.current.focus();
    }
}

function useOutsideAlerter(ref) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                alert("You clicked outside of me!");
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

const NewDocumentButton = () => {
    const titleInputRef = useRef(null);
    const rowItemRef = useRef(null);
    useOutsideAlerter(rowItemRef);

    return (
        <RowItem onClick={() => focusOnTitleInput(titleInputRef)}>
            <Dot> 
                <PlusIcon/>
            </Dot>
            <ContentContainer>
                <TitleInput ref={titleInputRef} type="text" placeholder="New Document"/>
            </ContentContainer>
        </RowItem>
    );
};

NewDocumentButton.propTypes = {};

export default NewDocumentButton;