import styled from 'styled-components';

export const Div = styled.div`
`;

export const Ul = styled.ul`
    background-color: white;
    margin: 0;
    list-style: none;
    padding: 25px;
    display: grid;
    gap: 32px;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;

`;

export const Nav = styled.nav`
    height: 100vh;
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    background-color: rgba(11, 20, 34, 0.15);
    visibility: ${(props) => (props.show ? 'show' : 'hidden')};
    & > ${Ul} {
        transform: ${(props) => (props.show ? 'translateY(0)' : 'translateY(-100%)')};
        transition: transform 0.3s;
    }
    transition: visibility 0.2s;
`;

export const IconWrapper = styled.div`
    background-color: ${(props) => (props.showBg ? '#F2F2F5' : 'transparent')};
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 32px;
    cursor: pointer;
    position: relative;
    z-index: 1;
`;

export const Li = styled.li`
    & > a {
        font-size: 15px;
        text-decoration: none;
        color:   ${(props) => (props.active ? '#71BB5A' : '#000000')};
        font-family:   ${(props) => (props.active ? 'Inter-Bold' : 'Inter-Medium')};
    }
`;
