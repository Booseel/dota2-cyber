import * as $ from 'jquery';
import { IWindow } from 'app/interfaces/IWindow';

export const submitLink = () => {
    const { SUBMIT_LINK } = (window as IWindow).config;
    $('.submit').attr('href', `${SUBMIT_LINK}`);
};