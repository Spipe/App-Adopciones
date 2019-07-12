Vue.component('cabecera', {
    template: `
        <header>
            
            <nav>
                <svg width="130" height="32" viewBox="0 0 130 32">
                    <title>Go to homepage</title>
                    <circle fill="var(--color-primary)" cx="16" cy="16" r="16"></circle>
                    <rect fill="var(--color-contrast-higher)" x="41" y="11" width="89" height="10"></rect>
                </svg>
                <ul>
                    <li><a class="selected" href="#">Inicio</a></li>
                    <li><a href="#">Mascotas</a></li>
                    <li><a href="#">Organizaciones</a></li>
                    <li><a href="#">Buscar</a></li>
                    <li class="nav-divider" aria-hidden="true"></li>
                    <li class="btn"><a href="#">Entrar</a></li>
                </ul>
            </nav>
        </header>
    `,
});

var app = new Vue({
    el: '#app'
});