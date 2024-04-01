import styled from "styled-components/native";
import MainBackground from "../../components/organisms/MainBackground";
import { AppBigLogo } from "../../components/atoms/AppBigLogo";

export const StyledMainBackground = styled(MainBackground)`
    flex: 1;
    gap: 60px;
    align-items: center;
    justify-content: center;

    padding: 20px;

    background-color: #fff;
`;

export const AppLogoContainer = styled.View`
    width: 100%;
    align-items: flex-end;
`;

export const MainContainer = styled.View`
    border: 1px solid black;
    gap: 20px;
`;

export const AppBigLogoStyle = styled(AppBigLogo)`
    margin-bottom: 20px;
    height: 40px;
    visibility: hidden;
`;

