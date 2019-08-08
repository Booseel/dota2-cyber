import * as $ from 'jquery';
import { IWindow } from 'app/interfaces/IWindow';

export const leftTeamImg = () => {
    const { LEFT_TEAM_IMAGE } = (window as IWindow).config;
    $('.left_team').attr('src', `${LEFT_TEAM_IMAGE}`);
};

export const rightTeamImg = () => {
    const { RIGHT_TEAM_IMAGE } = (window as IWindow).config;
    $('.right_team').attr('src', `${RIGHT_TEAM_IMAGE}`);
};