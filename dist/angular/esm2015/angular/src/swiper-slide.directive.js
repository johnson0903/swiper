import { Directive, Input } from '@angular/core';
import { coerceBooleanProperty } from './utils/utils';
import * as i0 from "@angular/core";
export class SwiperSlideDirective {
    constructor(template) {
        this.template = template;
        this.class = '';
        this.slideData = {
            isActive: false,
            isPrev: false,
            isNext: false,
            isVisible: false,
            isDuplicate: false,
        };
    }
    set zoom(val) {
        this._zoom = coerceBooleanProperty(val);
    }
    get zoom() {
        return this._zoom;
    }
    get classNames() {
        return this._classNames;
    }
    set classNames(val) {
        if (this._classNames === val) {
            return;
        }
        this._classNames = val;
        this.slideData = {
            isActive: this._hasClass(['swiper-slide-active', 'swiper-slide-duplicate-active']),
            isVisible: this._hasClass(['swiper-slide-visible']),
            isDuplicate: this._hasClass(['swiper-slide-duplicate']),
            isPrev: this._hasClass(['swiper-slide-prev', 'swiper-slide-duplicate-prev']),
            isNext: this._hasClass(['swiper-slide-next', 'swiper-slide-duplicate-next']),
        };
    }
    _hasClass(classNames) {
        return classNames.some((className) => this._classNames.indexOf(className) >= 0);
    }
}
SwiperSlideDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.2", ngImport: i0, type: SwiperSlideDirective, deps: [{ token: i0.TemplateRef }], target: i0.ɵɵFactoryTarget.Directive });
SwiperSlideDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "12.2.2", type: SwiperSlideDirective, selector: "ng-template[swiperSlide]", inputs: { virtualIndex: "virtualIndex", class: "class", zoom: "zoom" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.2", ngImport: i0, type: SwiperSlideDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ng-template[swiperSlide]',
                }]
        }], ctorParameters: function () { return [{ type: i0.TemplateRef }]; }, propDecorators: { virtualIndex: [{
                type: Input
            }], class: [{
                type: Input
            }], zoom: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpcGVyLXNsaWRlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hbmd1bGFyL3NyYy9zd2lwZXItc2xpZGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFlLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFJdEQsTUFBTSxPQUFPLG9CQUFvQjtJQXlDL0IsWUFBbUIsUUFBMEI7UUFBMUIsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7UUF2Q3BDLFVBQUssR0FBVyxFQUFFLENBQUM7UUE4QjVCLGNBQVMsR0FBRztZQUNWLFFBQVEsRUFBRSxLQUFLO1lBQ2YsTUFBTSxFQUFFLEtBQUs7WUFDYixNQUFNLEVBQUUsS0FBSztZQUNiLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLFdBQVcsRUFBRSxLQUFLO1NBQ25CLENBQUM7SUFHOEMsQ0FBQztJQXRDakQsSUFDSSxJQUFJLENBQUMsR0FBWTtRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLHFCQUFxQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFDRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUdELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBQ0QsSUFBSSxVQUFVLENBQUMsR0FBRztRQUNoQixJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssR0FBRyxFQUFFO1lBQzVCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUc7WUFDZixRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLHFCQUFxQixFQUFFLCtCQUErQixDQUFDLENBQUM7WUFDbEYsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBQ25ELFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUN2RCxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLG1CQUFtQixFQUFFLDZCQUE2QixDQUFDLENBQUM7WUFDNUUsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxtQkFBbUIsRUFBRSw2QkFBNkIsQ0FBQyxDQUFDO1NBQzdFLENBQUM7SUFDSixDQUFDO0lBRU8sU0FBUyxDQUFDLFVBQW9CO1FBQ3BDLE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbEYsQ0FBQzs7aUhBL0JVLG9CQUFvQjtxR0FBcEIsb0JBQW9COzJGQUFwQixvQkFBb0I7a0JBSGhDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtpQkFDckM7a0dBRVUsWUFBWTtzQkFBcEIsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBRUYsSUFBSTtzQkFEUCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgY29lcmNlQm9vbGVhblByb3BlcnR5IH0gZnJvbSAnLi91dGlscy91dGlscyc7XHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnbmctdGVtcGxhdGVbc3dpcGVyU2xpZGVdJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFN3aXBlclNsaWRlRGlyZWN0aXZlIHtcclxuICBASW5wdXQoKSB2aXJ0dWFsSW5kZXg6IG51bWJlcjtcclxuICBASW5wdXQoKSBjbGFzczogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KClcclxuICBzZXQgem9vbSh2YWw6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX3pvb20gPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsKTtcclxuICB9XHJcbiAgZ2V0IHpvb20oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fem9vbTtcclxuICB9XHJcbiAgcHJpdmF0ZSBfem9vbTogYm9vbGVhbjtcclxuICBzbGlkZUluZGV4OiBudW1iZXI7XHJcbiAgZ2V0IGNsYXNzTmFtZXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY2xhc3NOYW1lcztcclxuICB9XHJcbiAgc2V0IGNsYXNzTmFtZXModmFsKSB7XHJcbiAgICBpZiAodGhpcy5fY2xhc3NOYW1lcyA9PT0gdmFsKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuX2NsYXNzTmFtZXMgPSB2YWw7XHJcbiAgICB0aGlzLnNsaWRlRGF0YSA9IHtcclxuICAgICAgaXNBY3RpdmU6IHRoaXMuX2hhc0NsYXNzKFsnc3dpcGVyLXNsaWRlLWFjdGl2ZScsICdzd2lwZXItc2xpZGUtZHVwbGljYXRlLWFjdGl2ZSddKSxcclxuICAgICAgaXNWaXNpYmxlOiB0aGlzLl9oYXNDbGFzcyhbJ3N3aXBlci1zbGlkZS12aXNpYmxlJ10pLFxyXG4gICAgICBpc0R1cGxpY2F0ZTogdGhpcy5faGFzQ2xhc3MoWydzd2lwZXItc2xpZGUtZHVwbGljYXRlJ10pLFxyXG4gICAgICBpc1ByZXY6IHRoaXMuX2hhc0NsYXNzKFsnc3dpcGVyLXNsaWRlLXByZXYnLCAnc3dpcGVyLXNsaWRlLWR1cGxpY2F0ZS1wcmV2J10pLFxyXG4gICAgICBpc05leHQ6IHRoaXMuX2hhc0NsYXNzKFsnc3dpcGVyLXNsaWRlLW5leHQnLCAnc3dpcGVyLXNsaWRlLWR1cGxpY2F0ZS1uZXh0J10pLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2hhc0NsYXNzKGNsYXNzTmFtZXM6IHN0cmluZ1tdKSB7XHJcbiAgICByZXR1cm4gY2xhc3NOYW1lcy5zb21lKChjbGFzc05hbWUpID0+IHRoaXMuX2NsYXNzTmFtZXMuaW5kZXhPZihjbGFzc05hbWUpID49IDApO1xyXG4gIH1cclxuICBzbGlkZURhdGEgPSB7XHJcbiAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICBpc1ByZXY6IGZhbHNlLFxyXG4gICAgaXNOZXh0OiBmYWxzZSxcclxuICAgIGlzVmlzaWJsZTogZmFsc2UsXHJcbiAgICBpc0R1cGxpY2F0ZTogZmFsc2UsXHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBfY2xhc3NOYW1lczogc3RyaW5nO1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55Pikge31cclxufVxyXG4iXX0=