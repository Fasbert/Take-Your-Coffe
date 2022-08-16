
//Footer Template
class FooterTmp extends HTMLElement{
    connectedCallback(){ 
        this.innerHTML = `
        <footer>
        <a href="https://github.com/Lumbert/Take-Your-Coffe">
            <h5>GitHub Page</h5>
        </a>
    </footer>
    `
    }
    }

customElements.define('footer-tmp', FooterTmp)