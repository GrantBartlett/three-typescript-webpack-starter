import { createElement } from "react";
import ReactDOM from "react-dom";
import { Main } from "./Main";

export class App
{
    constructor()
    {
        this.render();
    }

    public static addTwoNumbers(num1: number, num2: number): number
    {
        return num1 + num2;
    }

    private render(): void
    {
        ReactDOM.render(createElement(Main, { app: this }), document.getElementById("app") || document.createElement("div"));
    }
}

new App();