// tslint:disable-next-line:no-import-side-effect
import './base.sass';
import * as $ from 'jquery';
import { modal } from './app/Modal/index';
import { currency } from './app/Currency';
import { form } from './app/Form';
import { submitLink } from './app/submit';
import { leftTeamImg, rightTeamImg } from './app/images';

$(document).ready(() => {
    modal();
    currency();
    form();
    submitLink();
    leftTeamImg();
    rightTeamImg();
});
