import { menuButton } from "./htmlElements/button.js";
import { dropdown_list } from "./htmlElements/dropdown.js";

const menuButtonSetup = () => {
    if (dropdown_list) {
        dropdown_list.classList.toggle('toggle-menu_button');
    }
};

menuButton.addEventListener('click', menuButtonSetup);