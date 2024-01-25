import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    inputText: string = '';
    inputText2: string = '';

    onClickButton(value: string) {
        this.inputText = value;
    }

    log(template1: any) {
        console.log(template1);
    }

    onButtonClick(value: string) {
        this.inputText2 = value;
    }
}
