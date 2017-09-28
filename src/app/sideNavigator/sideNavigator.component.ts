import {AfterViewChecked, Component, Input} from '@angular/core';
import {SideNavigatorModel} from "./sideNavigator.model";

@Component({
    selector: 'blog-side-navigator-component',
    templateUrl: './sideNavigator.component.html'
})
export class SideNavigatorComponent implements AfterViewChecked {

    @Input() postList: SideNavigatorModel[];

    private posts: HTMLCollectionOf<Element>;
    private postsTopPositions: Array<number> = [];
    public currentId: string;

    constructor() {
        document.addEventListener('scroll', this.handleOnScroll.bind(this));
    }

    ngAfterViewChecked() {
        if (!this.postsTopPositions.length) {
            this.posts = document.getElementsByClassName('post-content');
            this.postsTopPositions = Array.from(this.posts).map(element => {
                return element.getBoundingClientRect().top + window.innerHeight/2;
            })
        }
    }

    private handleOnScroll() {
        const position: number = document.body.scrollTop;

        if (!this.posts) {
            return;
        }
        let currentId: string;
        const arr = Array.from(this.posts).filter((element, key) => {
            return this.postsTopPositions[key] > position /*&& this.postsTopPositions[key + 1] < position*/;
        });
        if (arr && arr[0] && arr[0].getElementsByTagName('h2')) {
            currentId = arr[0].getElementsByTagName('h2')[0].id;
            if (this.currentId !== currentId) {
                this.currentId = currentId;
            }
        } else {
            return;
        }
    }
}
