//Header Template
class HeaderTmp extends HTMLElement{
    connectedCallback(){ 
        this.innerHTML = `
        <div class="coffee-header">
        
        </div>
    `
    }
    }

customElements.define('header-tmp', HeaderTmp)


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