import { Component } from '../component.js';

const renderMarkup = (options) =>
`
    <div class="about">
        <h2>Где я?</h2>
        <p>На My Shop – модной платформе распродаж.
        Наша гордость – больше 1000 брендов без переплат.
        Здесь огромный выбор одежды и аксессуаров для взрослых и детей всегда со скидками до 90%.
        Но вы найдете в My Shop и косметику, и симпатичные вещи для дома.</p>
    </div>
`;

export class AboutUsPage extends Component {
    constructor(options = {}) {
        super(options, renderMarkup(options));
    }
}