import { Component } from '@angular/core';
import { ContentView, ObservableArray } from '@nativescript/core';
import { RouterExtensions } from '@nativescript/angular';
import { CollectionView } from '@nativescript-community/ui-collectionview';

@Component({
    selector: 'ns-collectionview-reorder',
    templateUrl: './reorder.component.html',
    styleUrls: ['../styles.scss']
})
export class ReorderComponent {
    constructor(private router: RouterExtensions) {}

    items = new ObservableArray([
        { index: 0, name: 'TURQUOISE', color: '#1abc9c' },
        { index: 1, name: 'EMERALD', color: '#2ecc71' },
        { index: 2, name: 'PETER RIVER', color: '#3498db' },
        { index: 3, name: 'AMETHYST', color: '#9b59b6' },
        { index: 4, name: 'WET ASPHALT', color: '#34495e' },
        { index: 5, name: 'GREEN SEA', color: '#16a085' },
        { index: 6, name: 'NEPHRITIS', color: '#27ae60' },
        { index: 7, name: 'BELIZE HOLE', color: '#2980b9' },
        { index: 8, name: 'WISTERIA', color: '#8e44ad' },
        { index: 9, name: 'MIDNIGHT BLUE', color: '#2c3e50' },
        { index: 10, name: 'SUN FLOWER', color: '#f1c40f' },
        { index: 11, name: 'CARROT', color: '#e67e22' },
        { index: 12, name: 'ALIZARIN', color: '#e74c3c' },
        { index: 13, name: 'CLOUDS', color: '#ecf0f1' },
        { index: 14, name: 'CONCRETE', color: '#95a5a6' },
        { index: 15, name: 'ORANGE', color: '#f39c12' },
        { index: 16, name: 'PUMPKIN', color: '#d35400' },
        { index: 17, name: 'POMEGRANATE', color: '#c0392b' },
        { index: 18, name: 'SILVER', color: '#bdc3c7' },
        { index: 19, name: 'ASBESTOS', color: '#7f8c8d' }
    ]);
    useLongPress = false;

    onItemReordered(e) {
        console.log('onItemReordered', e.index);
        (e.view as ContentView).opacity = 1;
    }

    onItemReorderStarting(e) {
        console.log('onItemReorderStarting', e.index, e.view, (e.view as ContentView));
        (e.view as ContentView).opacity = 0.7;
    }

    onTouch(item, event) {
        if (!this.useLongPress && event.action === 'down') {
            const pointer = event.getActivePointers()[0];
            this.collectionView.startDragging(this.items.indexOf(item), pointer);
        }
    }

    switchLongPress() {
        this.useLongPress = !this.useLongPress;
    }

    private collectionView: CollectionView;
    onCollectionViewLoaded(args: any): void {
        this.collectionView = args.object;
        console.log('onCollectionViewLoaded');
    }

    onItemTap({ index, item }) {
        console.log(`EVENT TRIGGERED: Tapped on ${index} ${item.name}`);
    }

    onLoadMoreItems() {
        console.log('EVENT TRIGGERED: onLoadMoreItems()');
    }

    goBack(): void {
        this.router.back();
    }
}
