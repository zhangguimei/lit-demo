import { LitElement, html, css } from 'lit'

class LitCounter extends LitElement {
    static properties = {
        count: {}
    }
    constructor() {
        super()
        console.log('ccc', this.count)
        this.count = 0
    }
    click = () => {
        console.log('count', this.count)
        this.count ++
    }
    // lit的生命周期函数
    firstUpdated() {
        console.log('firstUpdated', this.count)
    }
    render() {
        return html`<button @click=${this.click}>${this.count}</button>`
    }
}

customElements.define('lit-counter', LitCounter)