import { ChangeDetectionStrategy, Component, ContentChildren, EventEmitter, HostBinding, Inject, Input, Output, PLATFORM_ID, ViewChild, ViewEncapsulation, } from '@angular/core';
// @ts-ignore
import Swiper from 'swiper';
import { of, Subject } from 'rxjs';
import { getParams } from './utils/get-params';
import { SwiperSlideDirective } from './swiper-slide.directive';
import { extend, isObject, setProperty, ignoreNgOnChanges, coerceBooleanProperty, isShowEl, } from './utils/utils';
import { isPlatformBrowser } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class SwiperComponent {
    constructor(_ngZone, elementRef, _changeDetectorRef, _platformId) {
        this._ngZone = _ngZone;
        this.elementRef = elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        this._platformId = _platformId;
        this.slideClass = 'swiper-slide';
        this.wrapperClass = 'swiper-wrapper';
        this.showNavigation = true;
        this.showPagination = true;
        this.showScrollbar = true;
        // prettier-ignore
        this.s__beforeBreakpoint = new EventEmitter();
        // prettier-ignore
        this.s__containerClasses = new EventEmitter();
        // prettier-ignore
        this.s__slideClass = new EventEmitter();
        // prettier-ignore
        this.s__swiper = new EventEmitter();
        // prettier-ignore
        this.s_activeIndexChange = new EventEmitter();
        // prettier-ignore
        this.s_afterInit = new EventEmitter();
        // prettier-ignore
        this.s_autoplay = new EventEmitter();
        // prettier-ignore
        this.s_autoplayStart = new EventEmitter();
        // prettier-ignore
        this.s_autoplayStop = new EventEmitter();
        // prettier-ignore
        this.s_beforeDestroy = new EventEmitter();
        // prettier-ignore
        this.s_beforeInit = new EventEmitter();
        // prettier-ignore
        this.s_beforeLoopFix = new EventEmitter();
        // prettier-ignore
        this.s_beforeResize = new EventEmitter();
        // prettier-ignore
        this.s_beforeSlideChangeStart = new EventEmitter();
        // prettier-ignore
        this.s_beforeTransitionStart = new EventEmitter();
        // prettier-ignore
        this.s_breakpoint = new EventEmitter();
        // prettier-ignore
        this.s_changeDirection = new EventEmitter();
        // prettier-ignore
        this.s_click = new EventEmitter();
        // prettier-ignore
        this.s_doubleTap = new EventEmitter();
        // prettier-ignore
        this.s_doubleClick = new EventEmitter();
        // prettier-ignore
        this.s_destroy = new EventEmitter();
        // prettier-ignore
        this.s_fromEdge = new EventEmitter();
        // prettier-ignore
        this.s_hashChange = new EventEmitter();
        // prettier-ignore
        this.s_hashSet = new EventEmitter();
        // prettier-ignore
        this.s_imagesReady = new EventEmitter();
        // prettier-ignore
        this.s_init = new EventEmitter();
        // prettier-ignore
        this.s_keyPress = new EventEmitter();
        // prettier-ignore
        this.s_lazyImageLoad = new EventEmitter();
        // prettier-ignore
        this.s_lazyImageReady = new EventEmitter();
        // prettier-ignore
        this.s_loopFix = new EventEmitter();
        // prettier-ignore
        this.s_momentumBounce = new EventEmitter();
        // prettier-ignore
        this.s_navigationHide = new EventEmitter();
        // prettier-ignore
        this.s_navigationShow = new EventEmitter();
        // prettier-ignore
        this.s_observerUpdate = new EventEmitter();
        // prettier-ignore
        this.s_orientationchange = new EventEmitter();
        // prettier-ignore
        this.s_paginationHide = new EventEmitter();
        // prettier-ignore
        this.s_paginationRender = new EventEmitter();
        // prettier-ignore
        this.s_paginationShow = new EventEmitter();
        // prettier-ignore
        this.s_paginationUpdate = new EventEmitter();
        // prettier-ignore
        this.s_progress = new EventEmitter();
        // prettier-ignore
        this.s_reachBeginning = new EventEmitter();
        // prettier-ignore
        this.s_reachEnd = new EventEmitter();
        // prettier-ignore
        this.s_realIndexChange = new EventEmitter();
        // prettier-ignore
        this.s_resize = new EventEmitter();
        // prettier-ignore
        this.s_scroll = new EventEmitter();
        // prettier-ignore
        this.s_scrollbarDragEnd = new EventEmitter();
        // prettier-ignore
        this.s_scrollbarDragMove = new EventEmitter();
        // prettier-ignore
        this.s_scrollbarDragStart = new EventEmitter();
        // prettier-ignore
        this.s_setTransition = new EventEmitter();
        // prettier-ignore
        this.s_setTranslate = new EventEmitter();
        // prettier-ignore
        this.s_slideChange = new EventEmitter();
        // prettier-ignore
        this.s_slideChangeTransitionEnd = new EventEmitter();
        // prettier-ignore
        this.s_slideChangeTransitionStart = new EventEmitter();
        // prettier-ignore
        this.s_slideNextTransitionEnd = new EventEmitter();
        // prettier-ignore
        this.s_slideNextTransitionStart = new EventEmitter();
        // prettier-ignore
        this.s_slidePrevTransitionEnd = new EventEmitter();
        // prettier-ignore
        this.s_slidePrevTransitionStart = new EventEmitter();
        // prettier-ignore
        this.s_slideResetTransitionStart = new EventEmitter();
        // prettier-ignore
        this.s_slideResetTransitionEnd = new EventEmitter();
        // prettier-ignore
        this.s_sliderMove = new EventEmitter();
        // prettier-ignore
        this.s_sliderFirstMove = new EventEmitter();
        // prettier-ignore
        this.s_slidesLengthChange = new EventEmitter();
        // prettier-ignore
        this.s_slidesGridLengthChange = new EventEmitter();
        // prettier-ignore
        this.s_snapGridLengthChange = new EventEmitter();
        // prettier-ignore
        this.s_snapIndexChange = new EventEmitter();
        // prettier-ignore
        this.s_tap = new EventEmitter();
        // prettier-ignore
        this.s_toEdge = new EventEmitter();
        // prettier-ignore
        this.s_touchEnd = new EventEmitter();
        // prettier-ignore
        this.s_touchMove = new EventEmitter();
        // prettier-ignore
        this.s_touchMoveOpposite = new EventEmitter();
        // prettier-ignore
        this.s_touchStart = new EventEmitter();
        // prettier-ignore
        this.s_transitionEnd = new EventEmitter();
        // prettier-ignore
        this.s_transitionStart = new EventEmitter();
        // prettier-ignore
        this.s_update = new EventEmitter();
        // prettier-ignore
        this.s_zoomChange = new EventEmitter();
        // prettier-ignore
        this.s_swiper = new EventEmitter();
        this.indexChange = new EventEmitter();
        this._activeSlides = new Subject();
        this.containerClasses = 'swiper';
        this.slidesChanges = (val) => {
            this.slides = val.map((slide, index) => {
                slide.slideIndex = index;
                slide.classNames = this.slideClass || '';
                return slide;
            });
            if (this.loop && !this.loopedSlides) {
                this.calcLoopedSlides();
            }
            if (!this.virtual) {
                if (this.loopedSlides) {
                    this.prependSlides = of(this.slides.slice(this.slides.length - this.loopedSlides));
                    this.appendSlides = of(this.slides.slice(0, this.loopedSlides));
                }
            }
            else if (this.swiperRef && this.swiperRef.virtual) {
                this._ngZone.runOutsideAngular(() => {
                    this.swiperRef.virtual.slides = this.slides;
                    this.swiperRef.virtual.update(true);
                });
            }
            this._changeDetectorRef.detectChanges();
        };
        this.style = null;
        this.updateVirtualSlides = (virtualData) => {
            // TODO: type virtualData
            if (!this.swiperRef ||
                (this.currentVirtualData &&
                    this.currentVirtualData.from === virtualData.from &&
                    this.currentVirtualData.to === virtualData.to &&
                    this.currentVirtualData.offset === virtualData.offset)) {
                return;
            }
            this.style = this.swiperRef.isHorizontal()
                ? {
                    [this.swiperRef.rtlTranslate ? 'right' : 'left']: `${virtualData.offset}px`,
                }
                : {
                    top: `${virtualData.offset}px`,
                };
            this.currentVirtualData = virtualData;
            this._activeSlides.next(virtualData.slides);
            this._ngZone.run(() => {
                this._changeDetectorRef.detectChanges();
            });
            this._ngZone.runOutsideAngular(() => {
                this.swiperRef.updateSlides();
                this.swiperRef.updateProgress();
                this.swiperRef.updateSlidesClasses();
                if (this.swiperRef.lazy && this.swiperRef.params.lazy['enabled']) {
                    this.swiperRef.lazy.load();
                }
                this.swiperRef.virtual.update(true);
            });
            return;
        };
    }
    set navigation(val) {
        var _a, _b, _c;
        const currentNext = typeof this._navigation !== 'boolean' && this._navigation !== ''
            ? (_a = this._navigation) === null || _a === void 0 ? void 0 : _a.nextEl
            : null;
        const currentPrev = typeof this._navigation !== 'boolean' && this._navigation !== ''
            ? (_b = this._navigation) === null || _b === void 0 ? void 0 : _b.prevEl
            : null;
        this._navigation = setProperty(val, {
            nextEl: currentNext || null,
            prevEl: currentPrev || null,
        });
        this.showNavigation = !(coerceBooleanProperty(val) !== true ||
            (this._navigation &&
                typeof this._navigation !== 'boolean' &&
                this._navigation.prevEl !== ((_c = this._prevElRef) === null || _c === void 0 ? void 0 : _c.nativeElement) &&
                (this._navigation.prevEl !== null || this._navigation.nextEl !== null) &&
                (typeof this._navigation.nextEl === 'string' ||
                    typeof this._navigation.prevEl === 'string' ||
                    typeof this._navigation.nextEl === 'object' ||
                    typeof this._navigation.prevEl === 'object')));
    }
    get navigation() {
        return this._navigation;
    }
    set pagination(val) {
        var _a;
        const current = typeof this._pagination !== 'boolean' && this._pagination !== ''
            ? (_a = this._pagination) === null || _a === void 0 ? void 0 : _a.el
            : null;
        this._pagination = setProperty(val, {
            el: current || null,
        });
        this.showPagination = isShowEl(val, this._pagination, this._paginationElRef);
    }
    get pagination() {
        return this._pagination;
    }
    set scrollbar(val) {
        var _a;
        const current = typeof this._scrollbar !== 'boolean' && this._scrollbar !== '' ? (_a = this._scrollbar) === null || _a === void 0 ? void 0 : _a.el : null;
        this._scrollbar = setProperty(val, {
            el: current || null,
        });
        this.showScrollbar = isShowEl(val, this._scrollbar, this._scrollbarElRef);
    }
    get scrollbar() {
        return this._scrollbar;
    }
    set virtual(val) {
        this._virtual = setProperty(val);
    }
    get virtual() {
        return this._virtual;
    }
    set index(index) {
        this.setIndex(index);
    }
    set config(val) {
        this.updateSwiper(val);
        const { params } = getParams(val);
        Object.assign(this, params);
    }
    set prevElRef(el) {
        this._prevElRef = el;
        this._setElement(el, this.navigation, 'navigation', 'prevEl');
    }
    set nextElRef(el) {
        this._nextElRef = el;
        this._setElement(el, this.navigation, 'navigation', 'nextEl');
    }
    set scrollbarElRef(el) {
        this._scrollbarElRef = el;
        this._setElement(el, this.scrollbar, 'scrollbar');
    }
    set paginationElRef(el) {
        this._paginationElRef = el;
        this._setElement(el, this.pagination, 'pagination');
    }
    get activeSlides() {
        if (this.virtual) {
            return this._activeSlides;
        }
        return of(this.slides);
    }
    get zoomContainerClass() {
        return this.zoom && typeof this.zoom !== 'boolean'
            ? this.zoom.containerClass
            : 'swiper-zoom-container';
    }
    _setElement(el, ref, update, key = 'el') {
        if (!el || !ref) {
            return;
        }
        if (ref && el.nativeElement) {
            if (ref[key] === el.nativeElement) {
                return;
            }
            ref[key] = el.nativeElement;
        }
        const updateObj = {};
        updateObj[update] = true;
        this.updateInitSwiper(updateObj);
    }
    ngOnInit() {
        const { params } = getParams(this);
        Object.assign(this, params);
    }
    ngAfterViewInit() {
        this.childrenSlidesInit();
        this.initSwiper();
        this._changeDetectorRef.detectChanges();
        setTimeout(() => {
            this.s_swiper.emit(this.swiperRef);
        });
    }
    childrenSlidesInit() {
        this.slidesChanges(this.slidesEl);
        this.slidesEl.changes.subscribe(this.slidesChanges);
    }
    get isSwiperActive() {
        return this.swiperRef && !this.swiperRef.destroyed;
    }
    initSwiper() {
        const { params: swiperParams, passedParams } = getParams(this);
        Object.assign(this, swiperParams);
        this._ngZone.runOutsideAngular(() => {
            swiperParams.init = false;
            if (!swiperParams.virtual) {
                swiperParams.observer = true;
            }
            swiperParams.onAny = (eventName, ...args) => {
                const emitter = this[('s_' + eventName)];
                if (emitter) {
                    emitter.emit(...args);
                }
            };
            const _slideClasses = (_, updated) => {
                updated.forEach(({ slideEl, classNames }, index) => {
                    const dataIndex = slideEl.getAttribute('data-swiper-slide-index');
                    const slideIndex = dataIndex ? parseInt(dataIndex) : index;
                    if (this.virtual) {
                        const virtualSlide = this.slides.find((item) => {
                            return item.virtualIndex && item.virtualIndex === slideIndex;
                        });
                        if (virtualSlide) {
                            virtualSlide.classNames = classNames;
                            return;
                        }
                    }
                    if (this.slides[slideIndex]) {
                        this.slides[slideIndex].classNames = classNames;
                    }
                });
                this._changeDetectorRef.detectChanges();
            };
            const _containerClasses = (_, classes) => {
                setTimeout(() => {
                    this.containerClasses = classes;
                });
            };
            Object.assign(swiperParams.on, {
                _containerClasses,
                _slideClasses,
            });
            const swiperRef = new Swiper(swiperParams);
            swiperRef.loopCreate = () => { };
            swiperRef.loopDestroy = () => { };
            if (swiperParams.loop) {
                swiperRef.loopedSlides = this.loopedSlides;
            }
            const isVirtualEnabled = typeof swiperRef.params.virtual !== 'undefined' &&
                typeof swiperRef.params.virtual !== 'boolean' &&
                swiperRef.params.virtual.enabled;
            if (swiperRef.virtual && isVirtualEnabled) {
                swiperRef.virtual.slides = this.slides;
                const extendWith = {
                    cache: false,
                    renderExternal: this.updateVirtualSlides,
                    renderExternalUpdate: false,
                };
                extend(swiperRef.params.virtual, extendWith);
                extend(swiperRef.originalParams.virtual, extendWith);
            }
            if (isPlatformBrowser(this._platformId)) {
                this.swiperRef = swiperRef.init(this.elementRef.nativeElement);
                const isEnabled = typeof this.swiperRef.params.virtual !== 'undefined' &&
                    typeof this.swiperRef.params.virtual !== 'boolean' &&
                    this.swiperRef.params.virtual.enabled;
                if (this.swiperRef.virtual && isEnabled) {
                    this.swiperRef.virtual.update(true);
                }
                this._changeDetectorRef.detectChanges();
                swiperRef.on('slideChange', () => {
                    this.indexChange.emit(this.swiperRef.realIndex);
                });
            }
        });
    }
    ngOnChanges(changedParams) {
        this.updateSwiper(changedParams);
        this._changeDetectorRef.detectChanges();
    }
    updateInitSwiper(changedParams) {
        if (!(changedParams && this.swiperRef && !this.swiperRef.destroyed)) {
            return;
        }
        this._ngZone.runOutsideAngular(() => {
            const { params: currentParams, pagination, navigation, scrollbar, virtual, thumbs, } = this.swiperRef;
            if (changedParams.pagination) {
                if (this.pagination &&
                    typeof this.pagination !== 'boolean' &&
                    this.pagination.el &&
                    pagination &&
                    !pagination.el) {
                    this.updateParameter('pagination', this.pagination);
                    pagination.init();
                    pagination.render();
                    pagination.update();
                }
                else {
                    pagination.destroy();
                    pagination.el = null;
                }
            }
            if (changedParams.scrollbar) {
                if (this.scrollbar &&
                    typeof this.scrollbar !== 'boolean' &&
                    this.scrollbar.el &&
                    scrollbar &&
                    !scrollbar.el) {
                    this.updateParameter('scrollbar', this.scrollbar);
                    scrollbar.init();
                    scrollbar.updateSize();
                    scrollbar.setTranslate();
                }
                else {
                    scrollbar.destroy();
                    scrollbar.el = null;
                }
            }
            if (changedParams.navigation) {
                if (this.navigation &&
                    typeof this.navigation !== 'boolean' &&
                    this.navigation.prevEl &&
                    this.navigation.nextEl &&
                    navigation &&
                    !navigation.prevEl &&
                    !navigation.nextEl) {
                    this.updateParameter('navigation', this.navigation);
                    navigation.init();
                    navigation.update();
                }
                else if (navigation.prevEl && navigation.nextEl) {
                    navigation.destroy();
                    navigation.nextEl = null;
                    navigation.prevEl = null;
                }
            }
            if (changedParams.thumbs && this.thumbs && this.thumbs.swiper) {
                this.updateParameter('thumbs', this.thumbs);
                const initialized = thumbs.init();
                if (initialized)
                    thumbs.update(true);
            }
            if (changedParams.controller && this.controller && this.controller.control) {
                this.swiperRef.controller.control = this.controller.control;
            }
            this.swiperRef.update();
        });
    }
    updateSwiper(changedParams) {
        this._ngZone.runOutsideAngular(() => {
            var _a, _b;
            if (changedParams.config) {
                return;
            }
            if (!(changedParams && this.swiperRef && !this.swiperRef.destroyed)) {
                return;
            }
            for (const key in changedParams) {
                if (ignoreNgOnChanges.indexOf(key) >= 0) {
                    continue;
                }
                const newValue = (_b = (_a = changedParams[key]) === null || _a === void 0 ? void 0 : _a.currentValue) !== null && _b !== void 0 ? _b : changedParams[key];
                this.updateParameter(key, newValue);
            }
            if (changedParams.allowSlideNext) {
                this.swiperRef.allowSlideNext = this.allowSlideNext;
            }
            if (changedParams.allowSlidePrev) {
                this.swiperRef.allowSlidePrev = this.allowSlidePrev;
            }
            if (changedParams.direction) {
                this.swiperRef.changeDirection(this.direction, false);
            }
            if (changedParams.breakpoints) {
                if (this.loop && !this.loopedSlides) {
                    this.calcLoopedSlides();
                }
                this.swiperRef.currentBreakpoint = null;
                this.swiperRef.setBreakpoint();
            }
            if (changedParams.thumbs || changedParams.controller) {
                this.updateInitSwiper(changedParams);
            }
            this.swiperRef.update();
        });
    }
    calcLoopedSlides() {
        if (!this.loop) {
            return;
        }
        let slidesPerViewParams = this.slidesPerView;
        if (this.breakpoints) {
            const breakpoint = Swiper.prototype.getBreakpoint(this.breakpoints);
            const breakpointOnlyParams = breakpoint in this.breakpoints ? this.breakpoints[breakpoint] : undefined;
            if (breakpointOnlyParams && breakpointOnlyParams.slidesPerView) {
                slidesPerViewParams = breakpointOnlyParams.slidesPerView;
            }
        }
        if (slidesPerViewParams === 'auto') {
            this.loopedSlides = this.slides.length;
            return this.slides.length;
        }
        let loopedSlides = this.loopedSlides || slidesPerViewParams;
        if (!loopedSlides) {
            // ?
            return;
        }
        if (this.loopAdditionalSlides) {
            loopedSlides += this.loopAdditionalSlides;
        }
        if (loopedSlides > this.slides.length) {
            loopedSlides = this.slides.length;
        }
        this.loopedSlides = loopedSlides;
        return loopedSlides;
    }
    updateParameter(key, value) {
        if (!(this.swiperRef && !this.swiperRef.destroyed)) {
            return;
        }
        const _key = key.replace(/^_/, '');
        const isCurrentParamObj = isObject(this.swiperRef.params[_key]);
        if (Object.keys(this.swiperRef.modules).indexOf(_key) >= 0) {
            const defaultParams = this.swiperRef.modules[_key].params[_key];
            if (isCurrentParamObj) {
                extend(this.swiperRef.params[_key], defaultParams);
            }
            else {
                this.swiperRef.params[_key] = defaultParams;
            }
        }
        if (isCurrentParamObj && isObject(value)) {
            extend(this.swiperRef.params[_key], value);
        }
        else {
            this.swiperRef.params[_key] = value;
        }
    }
    setIndex(index, speed, silent) {
        if (!this.isSwiperActive) {
            this.initialSlide = index;
            return;
        }
        if (index === this.swiperRef.activeIndex) {
            return;
        }
        this._ngZone.runOutsideAngular(() => {
            if (this.loop) {
                this.swiperRef.slideToLoop(index, speed, !silent);
            }
            else {
                this.swiperRef.slideTo(index, speed, !silent);
            }
        });
    }
    ngOnDestroy() {
        this._ngZone.runOutsideAngular(() => {
            var _a;
            (_a = this.swiperRef) === null || _a === void 0 ? void 0 : _a.destroy(true, false);
        });
    }
}
SwiperComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.2", ngImport: i0, type: SwiperComponent, deps: [{ token: i0.NgZone }, { token: i0.ElementRef }, { token: i0.ChangeDetectorRef }, { token: PLATFORM_ID }], target: i0.ɵɵFactoryTarget.Component });
SwiperComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.2", type: SwiperComponent, selector: "swiper, [swiper]", inputs: { direction: "direction", touchEventsTarget: "touchEventsTarget", initialSlide: "initialSlide", speed: "speed", cssMode: "cssMode", updateOnWindowResize: "updateOnWindowResize", resizeObserver: "resizeObserver", nested: "nested", focusableElements: "focusableElements", width: "width", height: "height", preventInteractionOnTransition: "preventInteractionOnTransition", userAgent: "userAgent", url: "url", edgeSwipeDetection: "edgeSwipeDetection", edgeSwipeThreshold: "edgeSwipeThreshold", freeMode: "freeMode", autoHeight: "autoHeight", setWrapperSize: "setWrapperSize", virtualTranslate: "virtualTranslate", effect: "effect", breakpoints: "breakpoints", spaceBetween: "spaceBetween", slidesPerView: "slidesPerView", grid: "grid", slidesPerGroup: "slidesPerGroup", slidesPerGroupSkip: "slidesPerGroupSkip", centeredSlides: "centeredSlides", centeredSlidesBounds: "centeredSlidesBounds", slidesOffsetBefore: "slidesOffsetBefore", slidesOffsetAfter: "slidesOffsetAfter", normalizeSlideIndex: "normalizeSlideIndex", centerInsufficientSlides: "centerInsufficientSlides", watchOverflow: "watchOverflow", roundLengths: "roundLengths", touchRatio: "touchRatio", touchAngle: "touchAngle", simulateTouch: "simulateTouch", shortSwipes: "shortSwipes", longSwipes: "longSwipes", longSwipesRatio: "longSwipesRatio", longSwipesMs: "longSwipesMs", followFinger: "followFinger", allowTouchMove: "allowTouchMove", threshold: "threshold", touchMoveStopPropagation: "touchMoveStopPropagation", touchStartPreventDefault: "touchStartPreventDefault", touchStartForcePreventDefault: "touchStartForcePreventDefault", touchReleaseOnEdges: "touchReleaseOnEdges", uniqueNavElements: "uniqueNavElements", resistance: "resistance", resistanceRatio: "resistanceRatio", watchSlidesProgress: "watchSlidesProgress", grabCursor: "grabCursor", preventClicks: "preventClicks", preventClicksPropagation: "preventClicksPropagation", slideToClickedSlide: "slideToClickedSlide", preloadImages: "preloadImages", updateOnImagesReady: "updateOnImagesReady", loop: "loop", loopAdditionalSlides: "loopAdditionalSlides", loopedSlides: "loopedSlides", loopFillGroupWithBlank: "loopFillGroupWithBlank", loopPreventsSlide: "loopPreventsSlide", allowSlidePrev: "allowSlidePrev", allowSlideNext: "allowSlideNext", swipeHandler: "swipeHandler", noSwiping: "noSwiping", noSwipingClass: "noSwipingClass", noSwipingSelector: "noSwipingSelector", passiveListeners: "passiveListeners", containerModifierClass: "containerModifierClass", slideClass: "slideClass", slideBlankClass: "slideBlankClass", slideActiveClass: "slideActiveClass", slideDuplicateActiveClass: "slideDuplicateActiveClass", slideVisibleClass: "slideVisibleClass", slideDuplicateClass: "slideDuplicateClass", slideNextClass: "slideNextClass", slideDuplicateNextClass: "slideDuplicateNextClass", slidePrevClass: "slidePrevClass", slideDuplicatePrevClass: "slideDuplicatePrevClass", wrapperClass: "wrapperClass", runCallbacksOnInit: "runCallbacksOnInit", observeParents: "observeParents", observeSlideChildren: "observeSlideChildren", a11y: "a11y", autoplay: "autoplay", controller: "controller", coverflowEffect: "coverflowEffect", cubeEffect: "cubeEffect", fadeEffect: "fadeEffect", flipEffect: "flipEffect", creativeEffect: "creativeEffect", cardsEffect: "cardsEffect", hashNavigation: "hashNavigation", history: "history", keyboard: "keyboard", lazy: "lazy", mousewheel: "mousewheel", parallax: "parallax", thumbs: "thumbs", zoom: "zoom", class: "class", id: "id", navigation: "navigation", pagination: "pagination", scrollbar: "scrollbar", virtual: "virtual", index: "index", config: "config" }, outputs: { s__beforeBreakpoint: "_beforeBreakpoint", s__containerClasses: "_containerClasses", s__slideClass: "_slideClass", s__swiper: "_swiper", s_activeIndexChange: "activeIndexChange", s_afterInit: "afterInit", s_autoplay: "autoplay", s_autoplayStart: "autoplayStart", s_autoplayStop: "autoplayStop", s_beforeDestroy: "beforeDestroy", s_beforeInit: "beforeInit", s_beforeLoopFix: "beforeLoopFix", s_beforeResize: "beforeResize", s_beforeSlideChangeStart: "beforeSlideChangeStart", s_beforeTransitionStart: "beforeTransitionStart", s_breakpoint: "breakpoint", s_changeDirection: "changeDirection", s_click: "click", s_doubleTap: "doubleTap", s_doubleClick: "doubleClick", s_destroy: "destroy", s_fromEdge: "fromEdge", s_hashChange: "hashChange", s_hashSet: "hashSet", s_imagesReady: "imagesReady", s_init: "init", s_keyPress: "keyPress", s_lazyImageLoad: "lazyImageLoad", s_lazyImageReady: "lazyImageReady", s_loopFix: "loopFix", s_momentumBounce: "momentumBounce", s_navigationHide: "navigationHide", s_navigationShow: "navigationShow", s_observerUpdate: "observerUpdate", s_orientationchange: "orientationchange", s_paginationHide: "paginationHide", s_paginationRender: "paginationRender", s_paginationShow: "paginationShow", s_paginationUpdate: "paginationUpdate", s_progress: "progress", s_reachBeginning: "reachBeginning", s_reachEnd: "reachEnd", s_realIndexChange: "realIndexChange", s_resize: "resize", s_scroll: "scroll", s_scrollbarDragEnd: "scrollbarDragEnd", s_scrollbarDragMove: "scrollbarDragMove", s_scrollbarDragStart: "scrollbarDragStart", s_setTransition: "setTransition", s_setTranslate: "setTranslate", s_slideChange: "slideChange", s_slideChangeTransitionEnd: "slideChangeTransitionEnd", s_slideChangeTransitionStart: "slideChangeTransitionStart", s_slideNextTransitionEnd: "slideNextTransitionEnd", s_slideNextTransitionStart: "slideNextTransitionStart", s_slidePrevTransitionEnd: "slidePrevTransitionEnd", s_slidePrevTransitionStart: "slidePrevTransitionStart", s_slideResetTransitionStart: "slideResetTransitionStart", s_slideResetTransitionEnd: "slideResetTransitionEnd", s_sliderMove: "sliderMove", s_sliderFirstMove: "sliderFirstMove", s_slidesLengthChange: "slidesLengthChange", s_slidesGridLengthChange: "slidesGridLengthChange", s_snapGridLengthChange: "snapGridLengthChange", s_snapIndexChange: "snapIndexChange", s_tap: "tap", s_toEdge: "toEdge", s_touchEnd: "touchEnd", s_touchMove: "touchMove", s_touchMoveOpposite: "touchMoveOpposite", s_touchStart: "touchStart", s_transitionEnd: "transitionEnd", s_transitionStart: "transitionStart", s_update: "update", s_zoomChange: "zoomChange", s_swiper: "swiper", indexChange: "indexChange" }, host: { properties: { "class": "this.containerClasses" } }, queries: [{ propertyName: "slidesEl", predicate: SwiperSlideDirective }], viewQueries: [{ propertyName: "prevElRef", first: true, predicate: ["prevElRef"], descendants: true }, { propertyName: "nextElRef", first: true, predicate: ["nextElRef"], descendants: true }, { propertyName: "scrollbarElRef", first: true, predicate: ["scrollbarElRef"], descendants: true }, { propertyName: "paginationElRef", first: true, predicate: ["paginationElRef"], descendants: true }], usesOnChanges: true, ngImport: i0, template: "<ng-content select=\"[slot=container-start]\"></ng-content>\r\n<ng-container *ngIf=\"navigation && showNavigation\">\r\n  <div class=\"swiper-button-prev\" #prevElRef></div>\r\n  <div class=\"swiper-button-next\" #nextElRef></div>\r\n</ng-container>\r\n<div *ngIf=\"scrollbar && showScrollbar\" class=\"swiper-scrollbar\" #scrollbarElRef></div>\r\n<div *ngIf=\"pagination && showPagination\" class=\"swiper-pagination\" #paginationElRef></div>\r\n<div [ngClass]=\"wrapperClass\" [attr.id]=\"id\">\r\n  <ng-content select=\"[slot=wrapper-start]\"></ng-content>\r\n  <ng-template *ngTemplateOutlet=\"\r\n      slidesTemplate;\r\n      context: {\r\n        loopSlides: prependSlides,\r\n        key: 'prepend'\r\n      }\r\n    \"></ng-template>\r\n  <ng-template *ngTemplateOutlet=\"\r\n      slidesTemplate;\r\n      context: {\r\n        loopSlides: activeSlides,\r\n        key: ''\r\n      }\r\n    \"></ng-template>\r\n  <ng-template *ngTemplateOutlet=\"\r\n      slidesTemplate;\r\n      context: {\r\n        loopSlides: appendSlides,\r\n        key: 'append'\r\n      }\r\n    \"></ng-template>\r\n  <ng-content select=\"[slot=wrapper-end]\"></ng-content>\r\n</div>\r\n<ng-content select=\"[slot=container-end]\"></ng-content>\r\n\r\n<ng-template #slidesTemplate let-loopSlides=\"loopSlides\" let-slideKey=\"key\">\r\n  <div *ngFor=\"let slide of loopSlides | async\" [ngClass]=\"\r\n      (slide.class ? slide.class + ' ' : '') +\r\n      slideClass +\r\n      (slideKey !== '' ? ' ' + slideDuplicateClass : '')\r\n    \" [attr.data-swiper-slide-index]=\"slide.virtualIndex ? slide.virtualIndex : slide.slideIndex\" [style]=\"style\"\r\n    [ngSwitch]=\"slide.zoom\">\r\n    <div *ngSwitchCase=\"true\" [ngClass]=\"zoomContainerClass\">\r\n      <ng-template [ngTemplateOutlet]=\"slide.template\" [ngTemplateOutletContext]=\"{\r\n          $implicit: slide.slideData\r\n        }\"></ng-template>\r\n    </div>\r\n    <ng-container *ngSwitchDefault>\r\n      <ng-template [ngTemplateOutlet]=\"slide.template\" [ngTemplateOutletContext]=\"{\r\n          $implicit: slide.slideData\r\n        }\"></ng-template>\r\n    </ng-container>\r\n  </div>\r\n</ng-template>\r\n", styles: ["\n      swiper {\n        display: block;\n      }\n    "], directives: [{ type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { type: i1.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { type: i1.NgSwitchDefault, selector: "[ngSwitchDefault]" }], pipes: { "async": i1.AsyncPipe }, changeDetection: i0.ChangeDetectionStrategy.OnPush, encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.2", ngImport: i0, type: SwiperComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'swiper, [swiper]',
                    templateUrl: './swiper.component.html',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    styles: [
                        `
      swiper {
        display: block;
      }
    `,
                    ],
                }]
        }], ctorParameters: function () { return [{ type: i0.NgZone }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: Object, decorators: [{
                    type: Inject,
                    args: [PLATFORM_ID]
                }] }]; }, propDecorators: { direction: [{
                type: Input
            }], touchEventsTarget: [{
                type: Input
            }], initialSlide: [{
                type: Input
            }], speed: [{
                type: Input
            }], cssMode: [{
                type: Input
            }], updateOnWindowResize: [{
                type: Input
            }], resizeObserver: [{
                type: Input
            }], nested: [{
                type: Input
            }], focusableElements: [{
                type: Input
            }], width: [{
                type: Input
            }], height: [{
                type: Input
            }], preventInteractionOnTransition: [{
                type: Input
            }], userAgent: [{
                type: Input
            }], url: [{
                type: Input
            }], edgeSwipeDetection: [{
                type: Input
            }], edgeSwipeThreshold: [{
                type: Input
            }], freeMode: [{
                type: Input
            }], autoHeight: [{
                type: Input
            }], setWrapperSize: [{
                type: Input
            }], virtualTranslate: [{
                type: Input
            }], effect: [{
                type: Input
            }], breakpoints: [{
                type: Input
            }], spaceBetween: [{
                type: Input
            }], slidesPerView: [{
                type: Input
            }], grid: [{
                type: Input
            }], slidesPerGroup: [{
                type: Input
            }], slidesPerGroupSkip: [{
                type: Input
            }], centeredSlides: [{
                type: Input
            }], centeredSlidesBounds: [{
                type: Input
            }], slidesOffsetBefore: [{
                type: Input
            }], slidesOffsetAfter: [{
                type: Input
            }], normalizeSlideIndex: [{
                type: Input
            }], centerInsufficientSlides: [{
                type: Input
            }], watchOverflow: [{
                type: Input
            }], roundLengths: [{
                type: Input
            }], touchRatio: [{
                type: Input
            }], touchAngle: [{
                type: Input
            }], simulateTouch: [{
                type: Input
            }], shortSwipes: [{
                type: Input
            }], longSwipes: [{
                type: Input
            }], longSwipesRatio: [{
                type: Input
            }], longSwipesMs: [{
                type: Input
            }], followFinger: [{
                type: Input
            }], allowTouchMove: [{
                type: Input
            }], threshold: [{
                type: Input
            }], touchMoveStopPropagation: [{
                type: Input
            }], touchStartPreventDefault: [{
                type: Input
            }], touchStartForcePreventDefault: [{
                type: Input
            }], touchReleaseOnEdges: [{
                type: Input
            }], uniqueNavElements: [{
                type: Input
            }], resistance: [{
                type: Input
            }], resistanceRatio: [{
                type: Input
            }], watchSlidesProgress: [{
                type: Input
            }], grabCursor: [{
                type: Input
            }], preventClicks: [{
                type: Input
            }], preventClicksPropagation: [{
                type: Input
            }], slideToClickedSlide: [{
                type: Input
            }], preloadImages: [{
                type: Input
            }], updateOnImagesReady: [{
                type: Input
            }], loop: [{
                type: Input
            }], loopAdditionalSlides: [{
                type: Input
            }], loopedSlides: [{
                type: Input
            }], loopFillGroupWithBlank: [{
                type: Input
            }], loopPreventsSlide: [{
                type: Input
            }], allowSlidePrev: [{
                type: Input
            }], allowSlideNext: [{
                type: Input
            }], swipeHandler: [{
                type: Input
            }], noSwiping: [{
                type: Input
            }], noSwipingClass: [{
                type: Input
            }], noSwipingSelector: [{
                type: Input
            }], passiveListeners: [{
                type: Input
            }], containerModifierClass: [{
                type: Input
            }], slideClass: [{
                type: Input
            }], slideBlankClass: [{
                type: Input
            }], slideActiveClass: [{
                type: Input
            }], slideDuplicateActiveClass: [{
                type: Input
            }], slideVisibleClass: [{
                type: Input
            }], slideDuplicateClass: [{
                type: Input
            }], slideNextClass: [{
                type: Input
            }], slideDuplicateNextClass: [{
                type: Input
            }], slidePrevClass: [{
                type: Input
            }], slideDuplicatePrevClass: [{
                type: Input
            }], wrapperClass: [{
                type: Input
            }], runCallbacksOnInit: [{
                type: Input
            }], observeParents: [{
                type: Input
            }], observeSlideChildren: [{
                type: Input
            }], a11y: [{
                type: Input
            }], autoplay: [{
                type: Input
            }], controller: [{
                type: Input
            }], coverflowEffect: [{
                type: Input
            }], cubeEffect: [{
                type: Input
            }], fadeEffect: [{
                type: Input
            }], flipEffect: [{
                type: Input
            }], creativeEffect: [{
                type: Input
            }], cardsEffect: [{
                type: Input
            }], hashNavigation: [{
                type: Input
            }], history: [{
                type: Input
            }], keyboard: [{
                type: Input
            }], lazy: [{
                type: Input
            }], mousewheel: [{
                type: Input
            }], parallax: [{
                type: Input
            }], thumbs: [{
                type: Input
            }], zoom: [{
                type: Input
            }], class: [{
                type: Input
            }], id: [{
                type: Input
            }], navigation: [{
                type: Input
            }], pagination: [{
                type: Input
            }], scrollbar: [{
                type: Input
            }], virtual: [{
                type: Input
            }], index: [{
                type: Input
            }], config: [{
                type: Input
            }], s__beforeBreakpoint: [{
                type: Output,
                args: ['_beforeBreakpoint']
            }], s__containerClasses: [{
                type: Output,
                args: ['_containerClasses']
            }], s__slideClass: [{
                type: Output,
                args: ['_slideClass']
            }], s__swiper: [{
                type: Output,
                args: ['_swiper']
            }], s_activeIndexChange: [{
                type: Output,
                args: ['activeIndexChange']
            }], s_afterInit: [{
                type: Output,
                args: ['afterInit']
            }], s_autoplay: [{
                type: Output,
                args: ['autoplay']
            }], s_autoplayStart: [{
                type: Output,
                args: ['autoplayStart']
            }], s_autoplayStop: [{
                type: Output,
                args: ['autoplayStop']
            }], s_beforeDestroy: [{
                type: Output,
                args: ['beforeDestroy']
            }], s_beforeInit: [{
                type: Output,
                args: ['beforeInit']
            }], s_beforeLoopFix: [{
                type: Output,
                args: ['beforeLoopFix']
            }], s_beforeResize: [{
                type: Output,
                args: ['beforeResize']
            }], s_beforeSlideChangeStart: [{
                type: Output,
                args: ['beforeSlideChangeStart']
            }], s_beforeTransitionStart: [{
                type: Output,
                args: ['beforeTransitionStart']
            }], s_breakpoint: [{
                type: Output,
                args: ['breakpoint']
            }], s_changeDirection: [{
                type: Output,
                args: ['changeDirection']
            }], s_click: [{
                type: Output,
                args: ['click']
            }], s_doubleTap: [{
                type: Output,
                args: ['doubleTap']
            }], s_doubleClick: [{
                type: Output,
                args: ['doubleClick']
            }], s_destroy: [{
                type: Output,
                args: ['destroy']
            }], s_fromEdge: [{
                type: Output,
                args: ['fromEdge']
            }], s_hashChange: [{
                type: Output,
                args: ['hashChange']
            }], s_hashSet: [{
                type: Output,
                args: ['hashSet']
            }], s_imagesReady: [{
                type: Output,
                args: ['imagesReady']
            }], s_init: [{
                type: Output,
                args: ['init']
            }], s_keyPress: [{
                type: Output,
                args: ['keyPress']
            }], s_lazyImageLoad: [{
                type: Output,
                args: ['lazyImageLoad']
            }], s_lazyImageReady: [{
                type: Output,
                args: ['lazyImageReady']
            }], s_loopFix: [{
                type: Output,
                args: ['loopFix']
            }], s_momentumBounce: [{
                type: Output,
                args: ['momentumBounce']
            }], s_navigationHide: [{
                type: Output,
                args: ['navigationHide']
            }], s_navigationShow: [{
                type: Output,
                args: ['navigationShow']
            }], s_observerUpdate: [{
                type: Output,
                args: ['observerUpdate']
            }], s_orientationchange: [{
                type: Output,
                args: ['orientationchange']
            }], s_paginationHide: [{
                type: Output,
                args: ['paginationHide']
            }], s_paginationRender: [{
                type: Output,
                args: ['paginationRender']
            }], s_paginationShow: [{
                type: Output,
                args: ['paginationShow']
            }], s_paginationUpdate: [{
                type: Output,
                args: ['paginationUpdate']
            }], s_progress: [{
                type: Output,
                args: ['progress']
            }], s_reachBeginning: [{
                type: Output,
                args: ['reachBeginning']
            }], s_reachEnd: [{
                type: Output,
                args: ['reachEnd']
            }], s_realIndexChange: [{
                type: Output,
                args: ['realIndexChange']
            }], s_resize: [{
                type: Output,
                args: ['resize']
            }], s_scroll: [{
                type: Output,
                args: ['scroll']
            }], s_scrollbarDragEnd: [{
                type: Output,
                args: ['scrollbarDragEnd']
            }], s_scrollbarDragMove: [{
                type: Output,
                args: ['scrollbarDragMove']
            }], s_scrollbarDragStart: [{
                type: Output,
                args: ['scrollbarDragStart']
            }], s_setTransition: [{
                type: Output,
                args: ['setTransition']
            }], s_setTranslate: [{
                type: Output,
                args: ['setTranslate']
            }], s_slideChange: [{
                type: Output,
                args: ['slideChange']
            }], s_slideChangeTransitionEnd: [{
                type: Output,
                args: ['slideChangeTransitionEnd']
            }], s_slideChangeTransitionStart: [{
                type: Output,
                args: ['slideChangeTransitionStart']
            }], s_slideNextTransitionEnd: [{
                type: Output,
                args: ['slideNextTransitionEnd']
            }], s_slideNextTransitionStart: [{
                type: Output,
                args: ['slideNextTransitionStart']
            }], s_slidePrevTransitionEnd: [{
                type: Output,
                args: ['slidePrevTransitionEnd']
            }], s_slidePrevTransitionStart: [{
                type: Output,
                args: ['slidePrevTransitionStart']
            }], s_slideResetTransitionStart: [{
                type: Output,
                args: ['slideResetTransitionStart']
            }], s_slideResetTransitionEnd: [{
                type: Output,
                args: ['slideResetTransitionEnd']
            }], s_sliderMove: [{
                type: Output,
                args: ['sliderMove']
            }], s_sliderFirstMove: [{
                type: Output,
                args: ['sliderFirstMove']
            }], s_slidesLengthChange: [{
                type: Output,
                args: ['slidesLengthChange']
            }], s_slidesGridLengthChange: [{
                type: Output,
                args: ['slidesGridLengthChange']
            }], s_snapGridLengthChange: [{
                type: Output,
                args: ['snapGridLengthChange']
            }], s_snapIndexChange: [{
                type: Output,
                args: ['snapIndexChange']
            }], s_tap: [{
                type: Output,
                args: ['tap']
            }], s_toEdge: [{
                type: Output,
                args: ['toEdge']
            }], s_touchEnd: [{
                type: Output,
                args: ['touchEnd']
            }], s_touchMove: [{
                type: Output,
                args: ['touchMove']
            }], s_touchMoveOpposite: [{
                type: Output,
                args: ['touchMoveOpposite']
            }], s_touchStart: [{
                type: Output,
                args: ['touchStart']
            }], s_transitionEnd: [{
                type: Output,
                args: ['transitionEnd']
            }], s_transitionStart: [{
                type: Output,
                args: ['transitionStart']
            }], s_update: [{
                type: Output,
                args: ['update']
            }], s_zoomChange: [{
                type: Output,
                args: ['zoomChange']
            }], s_swiper: [{
                type: Output,
                args: ['swiper']
            }], indexChange: [{
                type: Output
            }], prevElRef: [{
                type: ViewChild,
                args: ['prevElRef', { static: false }]
            }], nextElRef: [{
                type: ViewChild,
                args: ['nextElRef', { static: false }]
            }], scrollbarElRef: [{
                type: ViewChild,
                args: ['scrollbarElRef', { static: false }]
            }], paginationElRef: [{
                type: ViewChild,
                args: ['paginationElRef', { static: false }]
            }], slidesEl: [{
                type: ContentChildren,
                args: [SwiperSlideDirective, { descendants: false, emitDistinctChangesOnly: true }]
            }], containerClasses: [{
                type: HostBinding,
                args: ['class']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpcGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hbmd1bGFyL3NyYy9zd2lwZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vc3JjL2FuZ3VsYXIvc3JjL3N3aXBlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxlQUFlLEVBRWYsWUFBWSxFQUNaLFdBQVcsRUFDWCxNQUFNLEVBQ04sS0FBSyxFQUdMLE1BQU0sRUFDTixXQUFXLEVBR1gsU0FBUyxFQUNULGlCQUFpQixHQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixhQUFhO0FBQ2IsT0FBTyxNQUFNLE1BQU0sUUFBUSxDQUFDO0FBQzVCLE9BQU8sRUFBYyxFQUFFLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQ0wsTUFBTSxFQUNOLFFBQVEsRUFDUixXQUFXLEVBQ1gsaUJBQWlCLEVBQ2pCLHFCQUFxQixFQUNyQixRQUFRLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFTdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQWNwRCxNQUFNLE9BQU8sZUFBZTtJQXdZMUIsWUFDVSxPQUFlLEVBQ2YsVUFBc0IsRUFDdEIsa0JBQXFDLEVBQ2hCLFdBQW1CO1FBSHhDLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFDaEIsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFuVXpDLGVBQVUsR0FBZ0MsY0FBYyxDQUFDO1FBVXpELGlCQUFZLEdBQWtD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QVc7dUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBIb3N0QmluZGluZyxcclxuICBJbmplY3QsXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUExBVEZPUk1fSUQsXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG4vLyBAdHMtaWdub3JlXHJcbmltcG9ydCBTd2lwZXIgZnJvbSAnc3dpcGVyJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZ2V0UGFyYW1zIH0gZnJvbSAnLi91dGlscy9nZXQtcGFyYW1zJztcclxuaW1wb3J0IHsgU3dpcGVyU2xpZGVEaXJlY3RpdmUgfSBmcm9tICcuL3N3aXBlci1zbGlkZS5kaXJlY3RpdmUnO1xyXG5pbXBvcnQge1xyXG4gIGV4dGVuZCxcclxuICBpc09iamVjdCxcclxuICBzZXRQcm9wZXJ0eSxcclxuICBpZ25vcmVOZ09uQ2hhbmdlcyxcclxuICBjb2VyY2VCb29sZWFuUHJvcGVydHksXHJcbiAgaXNTaG93RWwsXHJcbn0gZnJvbSAnLi91dGlscy91dGlscyc7XHJcbmltcG9ydCB7XHJcbiAgU3dpcGVyT3B0aW9ucyxcclxuICBTd2lwZXJFdmVudHMsXHJcbiAgTmF2aWdhdGlvbk9wdGlvbnMsXHJcbiAgUGFnaW5hdGlvbk9wdGlvbnMsXHJcbiAgU2Nyb2xsYmFyT3B0aW9ucyxcclxuICBWaXJ0dWFsT3B0aW9ucyxcclxufSBmcm9tICdzd2lwZXIvdHlwZXMnO1xyXG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc3dpcGVyLCBbc3dpcGVyXScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3N3aXBlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgc3dpcGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgYCxcclxuICBdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3dpcGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBkaXJlY3Rpb246IFN3aXBlck9wdGlvbnNbJ2RpcmVjdGlvbiddO1xyXG4gIEBJbnB1dCgpIHRvdWNoRXZlbnRzVGFyZ2V0OiBTd2lwZXJPcHRpb25zWyd0b3VjaEV2ZW50c1RhcmdldCddO1xyXG4gIEBJbnB1dCgpIGluaXRpYWxTbGlkZTogU3dpcGVyT3B0aW9uc1snaW5pdGlhbFNsaWRlJ107XHJcbiAgQElucHV0KCkgc3BlZWQ6IFN3aXBlck9wdGlvbnNbJ3NwZWVkJ107XHJcbiAgQElucHV0KCkgY3NzTW9kZTogU3dpcGVyT3B0aW9uc1snY3NzTW9kZSddO1xyXG4gIEBJbnB1dCgpIHVwZGF0ZU9uV2luZG93UmVzaXplOiBTd2lwZXJPcHRpb25zWyd1cGRhdGVPbldpbmRvd1Jlc2l6ZSddO1xyXG4gIEBJbnB1dCgpIHJlc2l6ZU9ic2VydmVyOiBTd2lwZXJPcHRpb25zWydyZXNpemVPYnNlcnZlciddO1xyXG4gIEBJbnB1dCgpIG5lc3RlZDogU3dpcGVyT3B0aW9uc1snbmVzdGVkJ107XHJcbiAgQElucHV0KCkgZm9jdXNhYmxlRWxlbWVudHM6IFN3aXBlck9wdGlvbnNbJ2ZvY3VzYWJsZUVsZW1lbnRzJ107XHJcbiAgQElucHV0KCkgd2lkdGg6IFN3aXBlck9wdGlvbnNbJ3dpZHRoJ107XHJcbiAgQElucHV0KCkgaGVpZ2h0OiBTd2lwZXJPcHRpb25zWydoZWlnaHQnXTtcclxuICBASW5wdXQoKSBwcmV2ZW50SW50ZXJhY3Rpb25PblRyYW5zaXRpb246IFN3aXBlck9wdGlvbnNbJ3ByZXZlbnRJbnRlcmFjdGlvbk9uVHJhbnNpdGlvbiddO1xyXG4gIEBJbnB1dCgpIHVzZXJBZ2VudDogU3dpcGVyT3B0aW9uc1sndXNlckFnZW50J107XHJcbiAgQElucHV0KCkgdXJsOiBTd2lwZXJPcHRpb25zWyd1cmwnXTtcclxuICBASW5wdXQoKSBlZGdlU3dpcGVEZXRlY3Rpb246IGJvb2xlYW4gfCBzdHJpbmc7XHJcbiAgQElucHV0KCkgZWRnZVN3aXBlVGhyZXNob2xkOiBudW1iZXI7XHJcbiAgQElucHV0KCkgZnJlZU1vZGU6IFN3aXBlck9wdGlvbnNbJ2ZyZWVNb2RlJ107XHJcbiAgQElucHV0KCkgYXV0b0hlaWdodDogU3dpcGVyT3B0aW9uc1snYXV0b0hlaWdodCddO1xyXG4gIEBJbnB1dCgpIHNldFdyYXBwZXJTaXplOiBTd2lwZXJPcHRpb25zWydzZXRXcmFwcGVyU2l6ZSddO1xyXG4gIEBJbnB1dCgpIHZpcnR1YWxUcmFuc2xhdGU6IFN3aXBlck9wdGlvbnNbJ3ZpcnR1YWxUcmFuc2xhdGUnXTtcclxuICBASW5wdXQoKSBlZmZlY3Q6IFN3aXBlck9wdGlvbnNbJ2VmZmVjdCddO1xyXG4gIEBJbnB1dCgpIGJyZWFrcG9pbnRzOiBTd2lwZXJPcHRpb25zWydicmVha3BvaW50cyddO1xyXG4gIEBJbnB1dCgpIHNwYWNlQmV0d2VlbjogU3dpcGVyT3B0aW9uc1snc3BhY2VCZXR3ZWVuJ107XHJcbiAgQElucHV0KCkgc2xpZGVzUGVyVmlldzogU3dpcGVyT3B0aW9uc1snc2xpZGVzUGVyVmlldyddO1xyXG4gIEBJbnB1dCgpIGdyaWQ6IFN3aXBlck9wdGlvbnNbJ2dyaWQnXTtcclxuICBASW5wdXQoKSBzbGlkZXNQZXJHcm91cDogU3dpcGVyT3B0aW9uc1snc2xpZGVzUGVyR3JvdXAnXTtcclxuICBASW5wdXQoKSBzbGlkZXNQZXJHcm91cFNraXA6IFN3aXBlck9wdGlvbnNbJ3NsaWRlc1Blckdyb3VwU2tpcCddO1xyXG4gIEBJbnB1dCgpIGNlbnRlcmVkU2xpZGVzOiBTd2lwZXJPcHRpb25zWydjZW50ZXJlZFNsaWRlcyddO1xyXG4gIEBJbnB1dCgpIGNlbnRlcmVkU2xpZGVzQm91bmRzOiBTd2lwZXJPcHRpb25zWydjZW50ZXJlZFNsaWRlc0JvdW5kcyddO1xyXG4gIEBJbnB1dCgpIHNsaWRlc09mZnNldEJlZm9yZTogU3dpcGVyT3B0aW9uc1snc2xpZGVzT2Zmc2V0QmVmb3JlJ107XHJcbiAgQElucHV0KCkgc2xpZGVzT2Zmc2V0QWZ0ZXI6IFN3aXBlck9wdGlvbnNbJ3NsaWRlc09mZnNldEFmdGVyJ107XHJcbiAgQElucHV0KCkgbm9ybWFsaXplU2xpZGVJbmRleDogU3dpcGVyT3B0aW9uc1snbm9ybWFsaXplU2xpZGVJbmRleCddO1xyXG4gIEBJbnB1dCgpIGNlbnRlckluc3VmZmljaWVudFNsaWRlczogU3dpcGVyT3B0aW9uc1snY2VudGVySW5zdWZmaWNpZW50U2xpZGVzJ107XHJcbiAgQElucHV0KCkgd2F0Y2hPdmVyZmxvdzogU3dpcGVyT3B0aW9uc1snd2F0Y2hPdmVyZmxvdyddO1xyXG4gIEBJbnB1dCgpIHJvdW5kTGVuZ3RoczogU3dpcGVyT3B0aW9uc1sncm91bmRMZW5ndGhzJ107XHJcbiAgQElucHV0KCkgdG91Y2hSYXRpbzogU3dpcGVyT3B0aW9uc1sndG91Y2hSYXRpbyddO1xyXG4gIEBJbnB1dCgpIHRvdWNoQW5nbGU6IFN3aXBlck9wdGlvbnNbJ3RvdWNoQW5nbGUnXTtcclxuICBASW5wdXQoKSBzaW11bGF0ZVRvdWNoOiBTd2lwZXJPcHRpb25zWydzaW11bGF0ZVRvdWNoJ107XHJcbiAgQElucHV0KCkgc2hvcnRTd2lwZXM6IFN3aXBlck9wdGlvbnNbJ3Nob3J0U3dpcGVzJ107XHJcbiAgQElucHV0KCkgbG9uZ1N3aXBlczogU3dpcGVyT3B0aW9uc1snbG9uZ1N3aXBlcyddO1xyXG4gIEBJbnB1dCgpIGxvbmdTd2lwZXNSYXRpbzogU3dpcGVyT3B0aW9uc1snbG9uZ1N3aXBlc1JhdGlvJ107XHJcbiAgQElucHV0KCkgbG9uZ1N3aXBlc01zOiBTd2lwZXJPcHRpb25zWydsb25nU3dpcGVzTXMnXTtcclxuICBASW5wdXQoKSBmb2xsb3dGaW5nZXI6IFN3aXBlck9wdGlvbnNbJ2ZvbGxvd0ZpbmdlciddO1xyXG4gIEBJbnB1dCgpIGFsbG93VG91Y2hNb3ZlOiBTd2lwZXJPcHRpb25zWydhbGxvd1RvdWNoTW92ZSddO1xyXG4gIEBJbnB1dCgpIHRocmVzaG9sZDogU3dpcGVyT3B0aW9uc1sndGhyZXNob2xkJ107XHJcbiAgQElucHV0KCkgdG91Y2hNb3ZlU3RvcFByb3BhZ2F0aW9uOiBTd2lwZXJPcHRpb25zWyd0b3VjaE1vdmVTdG9wUHJvcGFnYXRpb24nXTtcclxuICBASW5wdXQoKSB0b3VjaFN0YXJ0UHJldmVudERlZmF1bHQ6IFN3aXBlck9wdGlvbnNbJ3RvdWNoU3RhcnRQcmV2ZW50RGVmYXVsdCddO1xyXG4gIEBJbnB1dCgpIHRvdWNoU3RhcnRGb3JjZVByZXZlbnREZWZhdWx0OiBTd2lwZXJPcHRpb25zWyd0b3VjaFN0YXJ0Rm9yY2VQcmV2ZW50RGVmYXVsdCddO1xyXG4gIEBJbnB1dCgpIHRvdWNoUmVsZWFzZU9uRWRnZXM6IFN3aXBlck9wdGlvbnNbJ3RvdWNoUmVsZWFzZU9uRWRnZXMnXTtcclxuICBASW5wdXQoKSB1bmlxdWVOYXZFbGVtZW50czogU3dpcGVyT3B0aW9uc1sndW5pcXVlTmF2RWxlbWVudHMnXTtcclxuICBASW5wdXQoKSByZXNpc3RhbmNlOiBTd2lwZXJPcHRpb25zWydyZXNpc3RhbmNlJ107XHJcbiAgQElucHV0KCkgcmVzaXN0YW5jZVJhdGlvOiBTd2lwZXJPcHRpb25zWydyZXNpc3RhbmNlUmF0aW8nXTtcclxuICBASW5wdXQoKSB3YXRjaFNsaWRlc1Byb2dyZXNzOiBTd2lwZXJPcHRpb25zWyd3YXRjaFNsaWRlc1Byb2dyZXNzJ107XHJcbiAgQElucHV0KCkgZ3JhYkN1cnNvcjogU3dpcGVyT3B0aW9uc1snZ3JhYkN1cnNvciddO1xyXG4gIEBJbnB1dCgpIHByZXZlbnRDbGlja3M6IFN3aXBlck9wdGlvbnNbJ3ByZXZlbnRDbGlja3MnXTtcclxuICBASW5wdXQoKSBwcmV2ZW50Q2xpY2tzUHJvcGFnYXRpb246IFN3aXBlck9wdGlvbnNbJ3ByZXZlbnRDbGlja3NQcm9wYWdhdGlvbiddO1xyXG4gIEBJbnB1dCgpIHNsaWRlVG9DbGlja2VkU2xpZGU6IFN3aXBlck9wdGlvbnNbJ3NsaWRlVG9DbGlja2VkU2xpZGUnXTtcclxuICBASW5wdXQoKSBwcmVsb2FkSW1hZ2VzOiBTd2lwZXJPcHRpb25zWydwcmVsb2FkSW1hZ2VzJ107XHJcbiAgQElucHV0KCkgdXBkYXRlT25JbWFnZXNSZWFkeTogU3dpcGVyT3B0aW9uc1sndXBkYXRlT25JbWFnZXNSZWFkeSddO1xyXG4gIEBJbnB1dCgpIGxvb3A6IFN3aXBlck9wdGlvbnNbJ2xvb3AnXTtcclxuICBASW5wdXQoKSBsb29wQWRkaXRpb25hbFNsaWRlczogU3dpcGVyT3B0aW9uc1snbG9vcEFkZGl0aW9uYWxTbGlkZXMnXTtcclxuICBASW5wdXQoKSBsb29wZWRTbGlkZXM6IFN3aXBlck9wdGlvbnNbJ2xvb3BlZFNsaWRlcyddO1xyXG4gIEBJbnB1dCgpIGxvb3BGaWxsR3JvdXBXaXRoQmxhbms6IFN3aXBlck9wdGlvbnNbJ2xvb3BGaWxsR3JvdXBXaXRoQmxhbmsnXTtcclxuICBASW5wdXQoKSBsb29wUHJldmVudHNTbGlkZTogU3dpcGVyT3B0aW9uc1snbG9vcFByZXZlbnRzU2xpZGUnXTtcclxuICBASW5wdXQoKSBhbGxvd1NsaWRlUHJldjogU3dpcGVyT3B0aW9uc1snYWxsb3dTbGlkZVByZXYnXTtcclxuICBASW5wdXQoKSBhbGxvd1NsaWRlTmV4dDogU3dpcGVyT3B0aW9uc1snYWxsb3dTbGlkZU5leHQnXTtcclxuICBASW5wdXQoKSBzd2lwZUhhbmRsZXI6IFN3aXBlck9wdGlvbnNbJ3N3aXBlSGFuZGxlciddO1xyXG4gIEBJbnB1dCgpIG5vU3dpcGluZzogU3dpcGVyT3B0aW9uc1snbm9Td2lwaW5nJ107XHJcbiAgQElucHV0KCkgbm9Td2lwaW5nQ2xhc3M6IFN3aXBlck9wdGlvbnNbJ25vU3dpcGluZ0NsYXNzJ107XHJcbiAgQElucHV0KCkgbm9Td2lwaW5nU2VsZWN0b3I6IFN3aXBlck9wdGlvbnNbJ25vU3dpcGluZ1NlbGVjdG9yJ107XHJcbiAgQElucHV0KCkgcGFzc2l2ZUxpc3RlbmVyczogU3dpcGVyT3B0aW9uc1sncGFzc2l2ZUxpc3RlbmVycyddO1xyXG4gIEBJbnB1dCgpIGNvbnRhaW5lck1vZGlmaWVyQ2xhc3M6IFN3aXBlck9wdGlvbnNbJ2NvbnRhaW5lck1vZGlmaWVyQ2xhc3MnXTtcclxuICBASW5wdXQoKSBzbGlkZUNsYXNzOiBTd2lwZXJPcHRpb25zWydzbGlkZUNsYXNzJ10gPSAnc3dpcGVyLXNsaWRlJztcclxuICBASW5wdXQoKSBzbGlkZUJsYW5rQ2xhc3M6IFN3aXBlck9wdGlvbnNbJ3NsaWRlQmxhbmtDbGFzcyddO1xyXG4gIEBJbnB1dCgpIHNsaWRlQWN0aXZlQ2xhc3M6IFN3aXBlck9wdGlvbnNbJ3NsaWRlQWN0aXZlQ2xhc3MnXTtcclxuICBASW5wdXQoKSBzbGlkZUR1cGxpY2F0ZUFjdGl2ZUNsYXNzOiBTd2lwZXJPcHRpb25zWydzbGlkZUR1cGxpY2F0ZUFjdGl2ZUNsYXNzJ107XHJcbiAgQElucHV0KCkgc2xpZGVWaXNpYmxlQ2xhc3M6IFN3aXBlck9wdGlvbnNbJ3NsaWRlVmlzaWJsZUNsYXNzJ107XHJcbiAgQElucHV0KCkgc2xpZGVEdXBsaWNhdGVDbGFzczogU3dpcGVyT3B0aW9uc1snc2xpZGVEdXBsaWNhdGVDbGFzcyddO1xyXG4gIEBJbnB1dCgpIHNsaWRlTmV4dENsYXNzOiBTd2lwZXJPcHRpb25zWydzbGlkZU5leHRDbGFzcyddO1xyXG4gIEBJbnB1dCgpIHNsaWRlRHVwbGljYXRlTmV4dENsYXNzOiBTd2lwZXJPcHRpb25zWydzbGlkZUR1cGxpY2F0ZU5leHRDbGFzcyddO1xyXG4gIEBJbnB1dCgpIHNsaWRlUHJldkNsYXNzOiBTd2lwZXJPcHRpb25zWydzbGlkZVByZXZDbGFzcyddO1xyXG4gIEBJbnB1dCgpIHNsaWRlRHVwbGljYXRlUHJldkNsYXNzOiBTd2lwZXJPcHRpb25zWydzbGlkZUR1cGxpY2F0ZVByZXZDbGFzcyddO1xyXG4gIEBJbnB1dCgpIHdyYXBwZXJDbGFzczogU3dpcGVyT3B0aW9uc1snd3JhcHBlckNsYXNzJ10gPSAnc3dpcGVyLXdyYXBwZXInO1xyXG4gIEBJbnB1dCgpIHJ1bkNhbGxiYWNrc09uSW5pdDogU3dpcGVyT3B0aW9uc1sncnVuQ2FsbGJhY2tzT25Jbml0J107XHJcbiAgQElucHV0KCkgb2JzZXJ2ZVBhcmVudHM6IFN3aXBlck9wdGlvbnNbJ29ic2VydmVQYXJlbnRzJ107XHJcbiAgQElucHV0KCkgb2JzZXJ2ZVNsaWRlQ2hpbGRyZW46IFN3aXBlck9wdGlvbnNbJ29ic2VydmVTbGlkZUNoaWxkcmVuJ107XHJcbiAgQElucHV0KCkgYTExeTogU3dpcGVyT3B0aW9uc1snYTExeSddO1xyXG4gIEBJbnB1dCgpIGF1dG9wbGF5OiBTd2lwZXJPcHRpb25zWydhdXRvcGxheSddO1xyXG4gIEBJbnB1dCgpIGNvbnRyb2xsZXI6IFN3aXBlck9wdGlvbnNbJ2NvbnRyb2xsZXInXTtcclxuICBASW5wdXQoKSBjb3ZlcmZsb3dFZmZlY3Q6IFN3aXBlck9wdGlvbnNbJ2NvdmVyZmxvd0VmZmVjdCddO1xyXG4gIEBJbnB1dCgpIGN1YmVFZmZlY3Q6IFN3aXBlck9wdGlvbnNbJ2N1YmVFZmZlY3QnXTtcclxuICBASW5wdXQoKSBmYWRlRWZmZWN0OiBTd2lwZXJPcHRpb25zWydmYWRlRWZmZWN0J107XHJcbiAgQElucHV0KCkgZmxpcEVmZmVjdDogU3dpcGVyT3B0aW9uc1snZmxpcEVmZmVjdCddO1xyXG4gIEBJbnB1dCgpIGNyZWF0aXZlRWZmZWN0OiBTd2lwZXJPcHRpb25zWydjcmVhdGl2ZUVmZmVjdCddO1xyXG4gIEBJbnB1dCgpIGNhcmRzRWZmZWN0OiBTd2lwZXJPcHRpb25zWydjYXJkc0VmZmVjdCddO1xyXG4gIEBJbnB1dCgpIGhhc2hOYXZpZ2F0aW9uOiBTd2lwZXJPcHRpb25zWydoYXNoTmF2aWdhdGlvbiddO1xyXG4gIEBJbnB1dCgpIGhpc3Rvcnk6IFN3aXBlck9wdGlvbnNbJ2hpc3RvcnknXTtcclxuICBASW5wdXQoKSBrZXlib2FyZDogU3dpcGVyT3B0aW9uc1sna2V5Ym9hcmQnXTtcclxuICBASW5wdXQoKSBsYXp5OiBTd2lwZXJPcHRpb25zWydsYXp5J107XHJcbiAgQElucHV0KCkgbW91c2V3aGVlbDogU3dpcGVyT3B0aW9uc1snbW91c2V3aGVlbCddO1xyXG4gIEBJbnB1dCgpIHBhcmFsbGF4OiBTd2lwZXJPcHRpb25zWydwYXJhbGxheCddO1xyXG4gIEBJbnB1dCgpIHRodW1iczogU3dpcGVyT3B0aW9uc1sndGh1bWJzJ107XHJcbiAgQElucHV0KCkgem9vbTogU3dpcGVyT3B0aW9uc1snem9vbSddO1xyXG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcclxuICBASW5wdXQoKVxyXG4gIHNldCBuYXZpZ2F0aW9uKHZhbCkge1xyXG4gICAgY29uc3QgY3VycmVudE5leHQgPVxyXG4gICAgICB0eXBlb2YgdGhpcy5fbmF2aWdhdGlvbiAhPT0gJ2Jvb2xlYW4nICYmIHRoaXMuX25hdmlnYXRpb24gIT09ICcnXHJcbiAgICAgICAgPyB0aGlzLl9uYXZpZ2F0aW9uPy5uZXh0RWxcclxuICAgICAgICA6IG51bGw7XHJcbiAgICBjb25zdCBjdXJyZW50UHJldiA9XHJcbiAgICAgIHR5cGVvZiB0aGlzLl9uYXZpZ2F0aW9uICE9PSAnYm9vbGVhbicgJiYgdGhpcy5fbmF2aWdhdGlvbiAhPT0gJydcclxuICAgICAgICA/IHRoaXMuX25hdmlnYXRpb24/LnByZXZFbFxyXG4gICAgICAgIDogbnVsbDtcclxuICAgIHRoaXMuX25hdmlnYXRpb24gPSBzZXRQcm9wZXJ0eSh2YWwsIHtcclxuICAgICAgbmV4dEVsOiBjdXJyZW50TmV4dCB8fCBudWxsLFxyXG4gICAgICBwcmV2RWw6IGN1cnJlbnRQcmV2IHx8IG51bGwsXHJcbiAgICB9KTtcclxuICAgIHRoaXMuc2hvd05hdmlnYXRpb24gPSAhKFxyXG4gICAgICBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsKSAhPT0gdHJ1ZSB8fFxyXG4gICAgICAodGhpcy5fbmF2aWdhdGlvbiAmJlxyXG4gICAgICAgIHR5cGVvZiB0aGlzLl9uYXZpZ2F0aW9uICE9PSAnYm9vbGVhbicgJiZcclxuICAgICAgICB0aGlzLl9uYXZpZ2F0aW9uLnByZXZFbCAhPT0gdGhpcy5fcHJldkVsUmVmPy5uYXRpdmVFbGVtZW50ICYmXHJcbiAgICAgICAgKHRoaXMuX25hdmlnYXRpb24ucHJldkVsICE9PSBudWxsIHx8IHRoaXMuX25hdmlnYXRpb24ubmV4dEVsICE9PSBudWxsKSAmJlxyXG4gICAgICAgICh0eXBlb2YgdGhpcy5fbmF2aWdhdGlvbi5uZXh0RWwgPT09ICdzdHJpbmcnIHx8XHJcbiAgICAgICAgICB0eXBlb2YgdGhpcy5fbmF2aWdhdGlvbi5wcmV2RWwgPT09ICdzdHJpbmcnIHx8XHJcbiAgICAgICAgICB0eXBlb2YgdGhpcy5fbmF2aWdhdGlvbi5uZXh0RWwgPT09ICdvYmplY3QnIHx8XHJcbiAgICAgICAgICB0eXBlb2YgdGhpcy5fbmF2aWdhdGlvbi5wcmV2RWwgPT09ICdvYmplY3QnKSlcclxuICAgICk7XHJcbiAgfVxyXG4gIGdldCBuYXZpZ2F0aW9uKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX25hdmlnYXRpb247XHJcbiAgfVxyXG4gIHByaXZhdGUgX25hdmlnYXRpb246IE5hdmlnYXRpb25PcHRpb25zIHwgYm9vbGVhbiB8ICcnO1xyXG4gIHNob3dOYXZpZ2F0aW9uOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgcGFnaW5hdGlvbih2YWwpIHtcclxuICAgIGNvbnN0IGN1cnJlbnQgPVxyXG4gICAgICB0eXBlb2YgdGhpcy5fcGFnaW5hdGlvbiAhPT0gJ2Jvb2xlYW4nICYmIHRoaXMuX3BhZ2luYXRpb24gIT09ICcnXHJcbiAgICAgICAgPyB0aGlzLl9wYWdpbmF0aW9uPy5lbFxyXG4gICAgICAgIDogbnVsbDtcclxuICAgIHRoaXMuX3BhZ2luYXRpb24gPSBzZXRQcm9wZXJ0eSh2YWwsIHtcclxuICAgICAgZWw6IGN1cnJlbnQgfHwgbnVsbCxcclxuICAgIH0pO1xyXG4gICAgdGhpcy5zaG93UGFnaW5hdGlvbiA9IGlzU2hvd0VsKHZhbCwgdGhpcy5fcGFnaW5hdGlvbiwgdGhpcy5fcGFnaW5hdGlvbkVsUmVmKTtcclxuICB9XHJcbiAgZ2V0IHBhZ2luYXRpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fcGFnaW5hdGlvbjtcclxuICB9XHJcbiAgcHJpdmF0ZSBfcGFnaW5hdGlvbjogUGFnaW5hdGlvbk9wdGlvbnMgfCBib29sZWFuIHwgJyc7XHJcbiAgc2hvd1BhZ2luYXRpb246IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBzY3JvbGxiYXIodmFsKSB7XHJcbiAgICBjb25zdCBjdXJyZW50ID1cclxuICAgICAgdHlwZW9mIHRoaXMuX3Njcm9sbGJhciAhPT0gJ2Jvb2xlYW4nICYmIHRoaXMuX3Njcm9sbGJhciAhPT0gJycgPyB0aGlzLl9zY3JvbGxiYXI/LmVsIDogbnVsbDtcclxuICAgIHRoaXMuX3Njcm9sbGJhciA9IHNldFByb3BlcnR5KHZhbCwge1xyXG4gICAgICBlbDogY3VycmVudCB8fCBudWxsLFxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNob3dTY3JvbGxiYXIgPSBpc1Nob3dFbCh2YWwsIHRoaXMuX3Njcm9sbGJhciwgdGhpcy5fc2Nyb2xsYmFyRWxSZWYpO1xyXG4gIH1cclxuICBnZXQgc2Nyb2xsYmFyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3Njcm9sbGJhcjtcclxuICB9XHJcbiAgcHJpdmF0ZSBfc2Nyb2xsYmFyOiBTY3JvbGxiYXJPcHRpb25zIHwgYm9vbGVhbiB8ICcnO1xyXG4gIHNob3dTY3JvbGxiYXI6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCB2aXJ0dWFsKHZhbCkge1xyXG4gICAgdGhpcy5fdmlydHVhbCA9IHNldFByb3BlcnR5KHZhbCk7XHJcbiAgfVxyXG4gIGdldCB2aXJ0dWFsKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ZpcnR1YWw7XHJcbiAgfVxyXG4gIHByaXZhdGUgX3ZpcnR1YWw6IFZpcnR1YWxPcHRpb25zIHwgYm9vbGVhbiB8ICcnO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBpbmRleChpbmRleDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLnNldEluZGV4KGluZGV4KTtcclxuICB9XHJcbiAgQElucHV0KClcclxuICBzZXQgY29uZmlnKHZhbDogU3dpcGVyT3B0aW9ucykge1xyXG4gICAgdGhpcy51cGRhdGVTd2lwZXIodmFsKTtcclxuICAgIGNvbnN0IHsgcGFyYW1zIH0gPSBnZXRQYXJhbXModmFsKTtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgcGFyYW1zKTtcclxuICB9XHJcbiAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgQE91dHB1dCgnX2JlZm9yZUJyZWFrcG9pbnQnKSBzX19iZWZvcmVCcmVha3BvaW50OiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydfYmVmb3JlQnJlYWtwb2ludCddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIC8vIHByZXR0aWVyLWlnbm9yZVxyXG4gIEBPdXRwdXQoJ19jb250YWluZXJDbGFzc2VzJykgc19fY29udGFpbmVyQ2xhc3NlczogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snX2NvbnRhaW5lckNsYXNzZXMnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAvLyBwcmV0dGllci1pZ25vcmVcclxuICBAT3V0cHV0KCdfc2xpZGVDbGFzcycpIHNfX3NsaWRlQ2xhc3M6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ19zbGlkZUNsYXNzJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgQE91dHB1dCgnX3N3aXBlcicpIHNfX3N3aXBlcjogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snX3N3aXBlciddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIC8vIHByZXR0aWVyLWlnbm9yZVxyXG4gIEBPdXRwdXQoJ2FjdGl2ZUluZGV4Q2hhbmdlJykgc19hY3RpdmVJbmRleENoYW5nZTogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snYWN0aXZlSW5kZXhDaGFuZ2UnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAvLyBwcmV0dGllci1pZ25vcmVcclxuICBAT3V0cHV0KCdhZnRlckluaXQnKSBzX2FmdGVySW5pdDogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snYWZ0ZXJJbml0J10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgQE91dHB1dCgnYXV0b3BsYXknKSBzX2F1dG9wbGF5OiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydhdXRvcGxheSddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIC8vIHByZXR0aWVyLWlnbm9yZVxyXG4gIEBPdXRwdXQoJ2F1dG9wbGF5U3RhcnQnKSBzX2F1dG9wbGF5U3RhcnQ6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ2F1dG9wbGF5U3RhcnQnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAvLyBwcmV0dGllci1pZ25vcmVcclxuICBAT3V0cHV0KCdhdXRvcGxheVN0b3AnKSBzX2F1dG9wbGF5U3RvcDogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snYXV0b3BsYXlTdG9wJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgQE91dHB1dCgnYmVmb3JlRGVzdHJveScpIHNfYmVmb3JlRGVzdHJveTogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snYmVmb3JlRGVzdHJveSddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIC8vIHByZXR0aWVyLWlnbm9yZVxyXG4gIEBPdXRwdXQoJ2JlZm9yZUluaXQnKSBzX2JlZm9yZUluaXQ6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ2JlZm9yZUluaXQnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAvLyBwcmV0dGllci1pZ25vcmVcclxuICBAT3V0cHV0KCdiZWZvcmVMb29wRml4Jykgc19iZWZvcmVMb29wRml4OiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydiZWZvcmVMb29wRml4J10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgQE91dHB1dCgnYmVmb3JlUmVzaXplJykgc19iZWZvcmVSZXNpemU6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ2JlZm9yZVJlc2l6ZSddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIC8vIHByZXR0aWVyLWlnbm9yZVxyXG4gIEBPdXRwdXQoJ2JlZm9yZVNsaWRlQ2hhbmdlU3RhcnQnKSBzX2JlZm9yZVNsaWRlQ2hhbmdlU3RhcnQ6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ2JlZm9yZVNsaWRlQ2hhbmdlU3RhcnQnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAvLyBwcmV0dGllci1pZ25vcmVcclxuICBAT3V0cHV0KCdiZWZvcmVUcmFuc2l0aW9uU3RhcnQnKSBzX2JlZm9yZVRyYW5zaXRpb25TdGFydDogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snYmVmb3JlVHJhbnNpdGlvblN0YXJ0J10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgQE91dHB1dCgnYnJlYWtwb2ludCcpIHNfYnJlYWtwb2ludDogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snYnJlYWtwb2ludCddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIC8vIHByZXR0aWVyLWlnbm9yZVxyXG4gIEBPdXRwdXQoJ2NoYW5nZURpcmVjdGlvbicpIHNfY2hhbmdlRGlyZWN0aW9uOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydjaGFuZ2VEaXJlY3Rpb24nXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAvLyBwcmV0dGllci1pZ25vcmVcclxuICBAT3V0cHV0KCdjbGljaycpIHNfY2xpY2s6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ2NsaWNrJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgQE91dHB1dCgnZG91YmxlVGFwJykgc19kb3VibGVUYXA6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ2RvdWJsZVRhcCddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIC8vIHByZXR0aWVyLWlnbm9yZVxyXG4gIEBPdXRwdXQoJ2RvdWJsZUNsaWNrJykgc19kb3VibGVDbGljazogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snZG91YmxlQ2xpY2snXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAvLyBwcmV0dGllci1pZ25vcmVcclxuICBAT3V0cHV0KCdkZXN0cm95Jykgc19kZXN0cm95OiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydkZXN0cm95J10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgQE91dHB1dCgnZnJvbUVkZ2UnKSBzX2Zyb21FZGdlOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydmcm9tRWRnZSddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIC8vIHByZXR0aWVyLWlnbm9yZVxyXG4gIEBPdXRwdXQoJ2hhc2hDaGFuZ2UnKSBzX2hhc2hDaGFuZ2U6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ2hhc2hDaGFuZ2UnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAvLyBwcmV0dGllci1pZ25vcmVcclxuICBAT3V0cHV0KCdoYXNoU2V0Jykgc19oYXNoU2V0OiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydoYXNoU2V0J10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgQE91dHB1dCgnaW1hZ2VzUmVhZHknKSBzX2ltYWdlc1JlYWR5OiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydpbWFnZXNSZWFkeSddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIC8vIHByZXR0aWVyLWlnbm9yZVxyXG4gIEBPdXRwdXQoJ2luaXQnKSBzX2luaXQ6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ2luaXQnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAvLyBwcmV0dGllci1pZ25vcmVcclxuICBAT3V0cHV0KCdrZXlQcmVzcycpIHNfa2V5UHJlc3M6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ2tleVByZXNzJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgQE91dHB1dCgnbGF6eUltYWdlTG9hZCcpIHNfbGF6eUltYWdlTG9hZDogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snbGF6eUltYWdlTG9hZCddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIC8vIHByZXR0aWVyLWlnbm9yZVxyXG4gIEBPdXRwdXQoJ2xhenlJbWFnZVJlYWR5Jykgc19sYXp5SW1hZ2VSZWFkeTogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snbGF6eUltYWdlUmVhZHknXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAvLyBwcmV0dGllci1pZ25vcmVcclxuICBAT3V0cHV0KCdsb29wRml4Jykgc19sb29wRml4OiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydsb29wRml4J10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgQE91dHB1dCgnbW9tZW50dW1Cb3VuY2UnKSBzX21vbWVudHVtQm91bmNlOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydtb21lbnR1bUJvdW5jZSddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIC8vIHByZXR0aWVyLWlnbm9yZVxyXG4gIEBPdXRwdXQoJ25hdmlnYXRpb25IaWRlJykgc19uYXZpZ2F0aW9uSGlkZTogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snbmF2aWdhdGlvbkhpZGUnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAvLyBwcmV0dGllci1pZ25vcmVcclxuICBAT3V0cHV0KCduYXZpZ2F0aW9uU2hvdycpIHNfbmF2aWdhdGlvblNob3c6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ25hdmlnYXRpb25TaG93J10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgQE91dHB1dCgnb2JzZXJ2ZXJVcGRhdGUnKSBzX29ic2VydmVyVXBkYXRlOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydvYnNlcnZlclVwZGF0ZSddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIC8vIHByZXR0aWVyLWlnbm9yZVxyXG4gIEBPdXRwdXQoJ29yaWVudGF0aW9uY2hhbmdlJykgc19vcmllbnRhdGlvbmNoYW5nZTogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snb3JpZW50YXRpb25jaGFuZ2UnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAvLyBwcmV0dGllci1pZ25vcmVcclxuICBAT3V0cHV0KCdwYWdpbmF0aW9uSGlkZScpIHNfcGFnaW5hdGlvbkhpZGU6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3BhZ2luYXRpb25IaWRlJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgQE91dHB1dCgncGFnaW5hdGlvblJlbmRlcicpIHNfcGFnaW5hdGlvblJlbmRlcjogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1sncGFnaW5hdGlvblJlbmRlciddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIC8vIHByZXR0aWVyLWlnbm9yZVxyXG4gIEBPdXRwdXQoJ3BhZ2luYXRpb25TaG93Jykgc19wYWdpbmF0aW9uU2hvdzogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1sncGFnaW5hdGlvblNob3cnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAvLyBwcmV0dGllci1pZ25vcmVcclxuICBAT3V0cHV0KCdwYWdpbmF0aW9uVXBkYXRlJykgc19wYWdpbmF0aW9uVXBkYXRlOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydwYWdpbmF0aW9uVXBkYXRlJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgQE91dHB1dCgncHJvZ3Jlc3MnKSBzX3Byb2dyZXNzOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydwcm9ncmVzcyddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIC8vIHByZXR0aWVyLWlnbm9yZVxyXG4gIEBPdXRwdXQoJ3JlYWNoQmVnaW5uaW5nJykgc19yZWFjaEJlZ2lubmluZzogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1sncmVhY2hCZWdpbm5pbmcnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAvLyBwcmV0dGllci1pZ25vcmVcclxuICBAT3V0cHV0KCdyZWFjaEVuZCcpIHNfcmVhY2hFbmQ6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3JlYWNoRW5kJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgQE91dHB1dCgncmVhbEluZGV4Q2hhbmdlJykgc19yZWFsSW5kZXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3JlYWxJbmRleENoYW5nZSddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIC8vIHByZXR0aWVyLWlnbm9yZVxyXG4gIEBPdXRwdXQoJ3Jlc2l6ZScpIHNfcmVzaXplOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydyZXNpemUnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAvLyBwcmV0dGllci1pZ25vcmVcclxuICBAT3V0cHV0KCdzY3JvbGwnKSBzX3Njcm9sbDogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snc2Nyb2xsJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgQE91dHB1dCgnc2Nyb2xsYmFyRHJhZ0VuZCcpIHNfc2Nyb2xsYmFyRHJhZ0VuZDogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snc2Nyb2xsYmFyRHJhZ0VuZCddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIC8vIHByZXR0aWVyLWlnbm9yZVxyXG4gIEBPdXRwdXQoJ3Njcm9sbGJhckRyYWdNb3ZlJykgc19zY3JvbGxiYXJEcmFnTW92ZTogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snc2Nyb2xsYmFyRHJhZ01vdmUnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAvLyBwcmV0dGllci1pZ25vcmVcclxuICBAT3V0cHV0KCdzY3JvbGxiYXJEcmFnU3RhcnQnKSBzX3Njcm9sbGJhckRyYWdTdGFydDogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snc2Nyb2xsYmFyRHJhZ1N0YXJ0J10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgQE91dHB1dCgnc2V0VHJhbnNpdGlvbicpIHNfc2V0VHJhbnNpdGlvbjogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snc2V0VHJhbnNpdGlvbiddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIC8vIHByZXR0aWVyLWlnbm9yZVxyXG4gIEBPdXRwdXQoJ3NldFRyYW5zbGF0ZScpIHNfc2V0VHJhbnNsYXRlOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydzZXRUcmFuc2xhdGUnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAvLyBwcmV0dGllci1pZ25vcmVcclxuICBAT3V0cHV0KCdzbGlkZUNoYW5nZScpIHNfc2xpZGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3NsaWRlQ2hhbmdlJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgQE91dHB1dCgnc2xpZGVDaGFuZ2VUcmFuc2l0aW9uRW5kJykgc19zbGlkZUNoYW5nZVRyYW5zaXRpb25FbmQ6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3NsaWRlQ2hhbmdlVHJhbnNpdGlvbkVuZCddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIC8vIHByZXR0aWVyLWlnbm9yZVxyXG4gIEBPdXRwdXQoJ3NsaWRlQ2hhbmdlVHJhbnNpdGlvblN0YXJ0Jykgc19zbGlkZUNoYW5nZVRyYW5zaXRpb25TdGFydDogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snc2xpZGVDaGFuZ2VUcmFuc2l0aW9uU3RhcnQnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAvLyBwcmV0dGllci1pZ25vcmVcclxuICBAT3V0cHV0KCdzbGlkZU5leHRUcmFuc2l0aW9uRW5kJykgc19zbGlkZU5leHRUcmFuc2l0aW9uRW5kOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydzbGlkZU5leHRUcmFuc2l0aW9uRW5kJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgQE91dHB1dCgnc2xpZGVOZXh0VHJhbnNpdGlvblN0YXJ0Jykgc19zbGlkZU5leHRUcmFuc2l0aW9uU3RhcnQ6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3NsaWRlTmV4dFRyYW5zaXRpb25TdGFydCddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIC8vIHByZXR0aWVyLWlnbm9yZVxyXG4gIEBPdXRwdXQoJ3NsaWRlUHJldlRyYW5zaXRpb25FbmQnKSBzX3NsaWRlUHJldlRyYW5zaXRpb25FbmQ6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3NsaWRlUHJldlRyYW5zaXRpb25FbmQnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAvLyBwcmV0dGllci1pZ25vcmVcclxuICBAT3V0cHV0KCdzbGlkZVByZXZUcmFuc2l0aW9uU3RhcnQnKSBzX3NsaWRlUHJldlRyYW5zaXRpb25TdGFydDogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snc2xpZGVQcmV2VHJhbnNpdGlvblN0YXJ0J10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgQE91dHB1dCgnc2xpZGVSZXNldFRyYW5zaXRpb25TdGFydCcpIHNfc2xpZGVSZXNldFRyYW5zaXRpb25TdGFydDogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snc2xpZGVSZXNldFRyYW5zaXRpb25TdGFydCddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIC8vIHByZXR0aWVyLWlnbm9yZVxyXG4gIEBPdXRwdXQoJ3NsaWRlUmVzZXRUcmFuc2l0aW9uRW5kJykgc19zbGlkZVJlc2V0VHJhbnNpdGlvbkVuZDogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1snc2xpZGVSZXNldFRyYW5zaXRpb25FbmQnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAvLyBwcmV0dGllci1pZ25vcmVcclxuICBAT3V0cHV0KCdzbGlkZXJNb3ZlJykgc19zbGlkZXJNb3ZlOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydzbGlkZXJNb3ZlJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgQE91dHB1dCgnc2xpZGVyRmlyc3RNb3ZlJykgc19zbGlkZXJGaXJzdE1vdmU6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3NsaWRlckZpcnN0TW92ZSddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIC8vIHByZXR0aWVyLWlnbm9yZVxyXG4gIEBPdXRwdXQoJ3NsaWRlc0xlbmd0aENoYW5nZScpIHNfc2xpZGVzTGVuZ3RoQ2hhbmdlOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydzbGlkZXNMZW5ndGhDaGFuZ2UnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAvLyBwcmV0dGllci1pZ25vcmVcclxuICBAT3V0cHV0KCdzbGlkZXNHcmlkTGVuZ3RoQ2hhbmdlJykgc19zbGlkZXNHcmlkTGVuZ3RoQ2hhbmdlOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydzbGlkZXNHcmlkTGVuZ3RoQ2hhbmdlJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgQE91dHB1dCgnc25hcEdyaWRMZW5ndGhDaGFuZ2UnKSBzX3NuYXBHcmlkTGVuZ3RoQ2hhbmdlOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydzbmFwR3JpZExlbmd0aENoYW5nZSddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIC8vIHByZXR0aWVyLWlnbm9yZVxyXG4gIEBPdXRwdXQoJ3NuYXBJbmRleENoYW5nZScpIHNfc25hcEluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWydzbmFwSW5kZXhDaGFuZ2UnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAvLyBwcmV0dGllci1pZ25vcmVcclxuICBAT3V0cHV0KCd0YXAnKSBzX3RhcDogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1sndGFwJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgQE91dHB1dCgndG9FZGdlJykgc190b0VkZ2U6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3RvRWRnZSddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIC8vIHByZXR0aWVyLWlnbm9yZVxyXG4gIEBPdXRwdXQoJ3RvdWNoRW5kJykgc190b3VjaEVuZDogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1sndG91Y2hFbmQnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAvLyBwcmV0dGllci1pZ25vcmVcclxuICBAT3V0cHV0KCd0b3VjaE1vdmUnKSBzX3RvdWNoTW92ZTogRXZlbnRFbWl0dGVyPFN3aXBlckV2ZW50c1sndG91Y2hNb3ZlJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgQE91dHB1dCgndG91Y2hNb3ZlT3Bwb3NpdGUnKSBzX3RvdWNoTW92ZU9wcG9zaXRlOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWyd0b3VjaE1vdmVPcHBvc2l0ZSddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIC8vIHByZXR0aWVyLWlnbm9yZVxyXG4gIEBPdXRwdXQoJ3RvdWNoU3RhcnQnKSBzX3RvdWNoU3RhcnQ6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3RvdWNoU3RhcnQnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAvLyBwcmV0dGllci1pZ25vcmVcclxuICBAT3V0cHV0KCd0cmFuc2l0aW9uRW5kJykgc190cmFuc2l0aW9uRW5kOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWyd0cmFuc2l0aW9uRW5kJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgQE91dHB1dCgndHJhbnNpdGlvblN0YXJ0Jykgc190cmFuc2l0aW9uU3RhcnQ6IEV2ZW50RW1pdHRlcjxTd2lwZXJFdmVudHNbJ3RyYW5zaXRpb25TdGFydCddPiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIC8vIHByZXR0aWVyLWlnbm9yZVxyXG4gIEBPdXRwdXQoJ3VwZGF0ZScpIHNfdXBkYXRlOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWyd1cGRhdGUnXT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICAvLyBwcmV0dGllci1pZ25vcmVcclxuICBAT3V0cHV0KCd6b29tQ2hhbmdlJykgc196b29tQ2hhbmdlOiBFdmVudEVtaXR0ZXI8U3dpcGVyRXZlbnRzWyd6b29tQ2hhbmdlJ10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgLy8gcHJldHRpZXItaWdub3JlXHJcbiAgQE91dHB1dCgnc3dpcGVyJykgc19zd2lwZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIEBPdXRwdXQoKSBpbmRleENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG5cclxuICBAVmlld0NoaWxkKCdwcmV2RWxSZWYnLCB7IHN0YXRpYzogZmFsc2UgfSlcclxuICBzZXQgcHJldkVsUmVmKGVsOiBFbGVtZW50UmVmKSB7XHJcbiAgICB0aGlzLl9wcmV2RWxSZWYgPSBlbDtcclxuICAgIHRoaXMuX3NldEVsZW1lbnQoZWwsIHRoaXMubmF2aWdhdGlvbiwgJ25hdmlnYXRpb24nLCAncHJldkVsJyk7XHJcbiAgfVxyXG4gIF9wcmV2RWxSZWY6IEVsZW1lbnRSZWY7XHJcbiAgQFZpZXdDaGlsZCgnbmV4dEVsUmVmJywgeyBzdGF0aWM6IGZhbHNlIH0pXHJcbiAgc2V0IG5leHRFbFJlZihlbDogRWxlbWVudFJlZikge1xyXG4gICAgdGhpcy5fbmV4dEVsUmVmID0gZWw7XHJcbiAgICB0aGlzLl9zZXRFbGVtZW50KGVsLCB0aGlzLm5hdmlnYXRpb24sICduYXZpZ2F0aW9uJywgJ25leHRFbCcpO1xyXG4gIH1cclxuICBfbmV4dEVsUmVmOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ3Njcm9sbGJhckVsUmVmJywgeyBzdGF0aWM6IGZhbHNlIH0pXHJcbiAgc2V0IHNjcm9sbGJhckVsUmVmKGVsOiBFbGVtZW50UmVmKSB7XHJcbiAgICB0aGlzLl9zY3JvbGxiYXJFbFJlZiA9IGVsO1xyXG4gICAgdGhpcy5fc2V0RWxlbWVudChlbCwgdGhpcy5zY3JvbGxiYXIsICdzY3JvbGxiYXInKTtcclxuICB9XHJcbiAgX3Njcm9sbGJhckVsUmVmOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ3BhZ2luYXRpb25FbFJlZicsIHsgc3RhdGljOiBmYWxzZSB9KVxyXG4gIHNldCBwYWdpbmF0aW9uRWxSZWYoZWw6IEVsZW1lbnRSZWYpIHtcclxuICAgIHRoaXMuX3BhZ2luYXRpb25FbFJlZiA9IGVsO1xyXG4gICAgdGhpcy5fc2V0RWxlbWVudChlbCwgdGhpcy5wYWdpbmF0aW9uLCAncGFnaW5hdGlvbicpO1xyXG4gIH1cclxuICBfcGFnaW5hdGlvbkVsUmVmOiBFbGVtZW50UmVmO1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oU3dpcGVyU2xpZGVEaXJlY3RpdmUsIHsgZGVzY2VuZGFudHM6IGZhbHNlLCBlbWl0RGlzdGluY3RDaGFuZ2VzT25seTogdHJ1ZSB9KVxyXG4gIHNsaWRlc0VsOiBRdWVyeUxpc3Q8U3dpcGVyU2xpZGVEaXJlY3RpdmU+O1xyXG4gIHByaXZhdGUgc2xpZGVzOiBTd2lwZXJTbGlkZURpcmVjdGl2ZVtdO1xyXG5cclxuICBwcmVwZW5kU2xpZGVzOiBPYnNlcnZhYmxlPFN3aXBlclNsaWRlRGlyZWN0aXZlW10+O1xyXG4gIGFwcGVuZFNsaWRlczogT2JzZXJ2YWJsZTxTd2lwZXJTbGlkZURpcmVjdGl2ZVtdPjtcclxuXHJcbiAgc3dpcGVyUmVmOiBTd2lwZXI7XHJcbiAgcmVhZG9ubHkgX2FjdGl2ZVNsaWRlcyA9IG5ldyBTdWJqZWN0PFN3aXBlclNsaWRlRGlyZWN0aXZlW10+KCk7XHJcblxyXG4gIGdldCBhY3RpdmVTbGlkZXMoKSB7XHJcbiAgICBpZiAodGhpcy52aXJ0dWFsKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLl9hY3RpdmVTbGlkZXM7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb2YodGhpcy5zbGlkZXMpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHpvb21Db250YWluZXJDbGFzcygpIHtcclxuICAgIHJldHVybiB0aGlzLnpvb20gJiYgdHlwZW9mIHRoaXMuem9vbSAhPT0gJ2Jvb2xlYW4nXHJcbiAgICAgID8gdGhpcy56b29tLmNvbnRhaW5lckNsYXNzXHJcbiAgICAgIDogJ3N3aXBlci16b29tLWNvbnRhaW5lcic7XHJcbiAgfVxyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgY29udGFpbmVyQ2xhc3Nlczogc3RyaW5nID0gJ3N3aXBlcic7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSxcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgX3BsYXRmb3JtSWQ6IE9iamVjdCxcclxuICApIHt9XHJcblxyXG4gIHByaXZhdGUgX3NldEVsZW1lbnQoZWw6IEVsZW1lbnRSZWYsIHJlZjogYW55LCB1cGRhdGU6IHN0cmluZywga2V5ID0gJ2VsJykge1xyXG4gICAgaWYgKCFlbCB8fCAhcmVmKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmIChyZWYgJiYgZWwubmF0aXZlRWxlbWVudCkge1xyXG4gICAgICBpZiAocmVmW2tleV0gPT09IGVsLm5hdGl2ZUVsZW1lbnQpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgcmVmW2tleV0gPSBlbC5uYXRpdmVFbGVtZW50O1xyXG4gICAgfVxyXG4gICAgY29uc3QgdXBkYXRlT2JqOiB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9O1xyXG4gICAgdXBkYXRlT2JqW3VwZGF0ZV0gPSB0cnVlO1xyXG4gICAgdGhpcy51cGRhdGVJbml0U3dpcGVyKHVwZGF0ZU9iaik7XHJcbiAgfVxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgY29uc3QgeyBwYXJhbXMgfSA9IGdldFBhcmFtcyh0aGlzKTtcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgcGFyYW1zKTtcclxuICB9XHJcbiAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgdGhpcy5jaGlsZHJlblNsaWRlc0luaXQoKTtcclxuICAgIHRoaXMuaW5pdFN3aXBlcigpO1xyXG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuc19zd2lwZXIuZW1pdCh0aGlzLnN3aXBlclJlZik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hpbGRyZW5TbGlkZXNJbml0KCkge1xyXG4gICAgdGhpcy5zbGlkZXNDaGFuZ2VzKHRoaXMuc2xpZGVzRWwpO1xyXG4gICAgdGhpcy5zbGlkZXNFbC5jaGFuZ2VzLnN1YnNjcmliZSh0aGlzLnNsaWRlc0NoYW5nZXMpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzbGlkZXNDaGFuZ2VzID0gKHZhbDogUXVlcnlMaXN0PFN3aXBlclNsaWRlRGlyZWN0aXZlPikgPT4ge1xyXG4gICAgdGhpcy5zbGlkZXMgPSB2YWwubWFwKChzbGlkZTogU3dpcGVyU2xpZGVEaXJlY3RpdmUsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgc2xpZGUuc2xpZGVJbmRleCA9IGluZGV4O1xyXG4gICAgICBzbGlkZS5jbGFzc05hbWVzID0gdGhpcy5zbGlkZUNsYXNzIHx8ICcnO1xyXG4gICAgICByZXR1cm4gc2xpZGU7XHJcbiAgICB9KTtcclxuICAgIGlmICh0aGlzLmxvb3AgJiYgIXRoaXMubG9vcGVkU2xpZGVzKSB7XHJcbiAgICAgIHRoaXMuY2FsY0xvb3BlZFNsaWRlcygpO1xyXG4gICAgfVxyXG4gICAgaWYgKCF0aGlzLnZpcnR1YWwpIHtcclxuICAgICAgaWYgKHRoaXMubG9vcGVkU2xpZGVzKSB7XHJcbiAgICAgICAgdGhpcy5wcmVwZW5kU2xpZGVzID0gb2YodGhpcy5zbGlkZXMuc2xpY2UodGhpcy5zbGlkZXMubGVuZ3RoIC0gdGhpcy5sb29wZWRTbGlkZXMpKTtcclxuICAgICAgICB0aGlzLmFwcGVuZFNsaWRlcyA9IG9mKHRoaXMuc2xpZGVzLnNsaWNlKDAsIHRoaXMubG9vcGVkU2xpZGVzKSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAodGhpcy5zd2lwZXJSZWYgJiYgdGhpcy5zd2lwZXJSZWYudmlydHVhbCkge1xyXG4gICAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc3dpcGVyUmVmLnZpcnR1YWwuc2xpZGVzID0gdGhpcy5zbGlkZXM7XHJcbiAgICAgICAgdGhpcy5zd2lwZXJSZWYudmlydHVhbC51cGRhdGUodHJ1ZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH07XHJcblxyXG4gIGdldCBpc1N3aXBlckFjdGl2ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLnN3aXBlclJlZiAmJiAhdGhpcy5zd2lwZXJSZWYuZGVzdHJveWVkO1xyXG4gIH1cclxuXHJcbiAgaW5pdFN3aXBlcigpIHtcclxuICAgIGNvbnN0IHsgcGFyYW1zOiBzd2lwZXJQYXJhbXMsIHBhc3NlZFBhcmFtcyB9ID0gZ2V0UGFyYW1zKHRoaXMpO1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBzd2lwZXJQYXJhbXMpO1xyXG4gICAgdGhpcy5fbmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgc3dpcGVyUGFyYW1zLmluaXQgPSBmYWxzZTtcclxuICAgICAgaWYgKCFzd2lwZXJQYXJhbXMudmlydHVhbCkge1xyXG4gICAgICAgIHN3aXBlclBhcmFtcy5vYnNlcnZlciA9IHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHN3aXBlclBhcmFtcy5vbkFueSA9IChldmVudE5hbWU6IGtleW9mIFN3aXBlckNvbXBvbmVudCwgLi4uYXJnczogYW55W10pID0+IHtcclxuICAgICAgICBjb25zdCBlbWl0dGVyID0gdGhpc1soJ3NfJyArIGV2ZW50TmFtZSkgYXMga2V5b2YgU3dpcGVyQ29tcG9uZW50XSBhcyBFdmVudEVtaXR0ZXI8YW55PjtcclxuICAgICAgICBpZiAoZW1pdHRlcikge1xyXG4gICAgICAgICAgZW1pdHRlci5lbWl0KC4uLmFyZ3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgICAgY29uc3QgX3NsaWRlQ2xhc3NlczogU3dpcGVyRXZlbnRzWydfc2xpZGVDbGFzc2VzJ10gPSAoXywgdXBkYXRlZCkgPT4ge1xyXG4gICAgICAgIHVwZGF0ZWQuZm9yRWFjaCgoeyBzbGlkZUVsLCBjbGFzc05hbWVzIH0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBkYXRhSW5kZXggPSBzbGlkZUVsLmdldEF0dHJpYnV0ZSgnZGF0YS1zd2lwZXItc2xpZGUtaW5kZXgnKTtcclxuICAgICAgICAgIGNvbnN0IHNsaWRlSW5kZXggPSBkYXRhSW5kZXggPyBwYXJzZUludChkYXRhSW5kZXgpIDogaW5kZXg7XHJcbiAgICAgICAgICBpZiAodGhpcy52aXJ0dWFsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZpcnR1YWxTbGlkZSA9IHRoaXMuc2xpZGVzLmZpbmQoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gaXRlbS52aXJ0dWFsSW5kZXggJiYgaXRlbS52aXJ0dWFsSW5kZXggPT09IHNsaWRlSW5kZXg7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAodmlydHVhbFNsaWRlKSB7XHJcbiAgICAgICAgICAgICAgdmlydHVhbFNsaWRlLmNsYXNzTmFtZXMgPSBjbGFzc05hbWVzO1xyXG4gICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmICh0aGlzLnNsaWRlc1tzbGlkZUluZGV4XSkge1xyXG4gICAgICAgICAgICB0aGlzLnNsaWRlc1tzbGlkZUluZGV4XS5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgIH07XHJcbiAgICAgIGNvbnN0IF9jb250YWluZXJDbGFzc2VzOiBTd2lwZXJFdmVudHNbJ19jb250YWluZXJDbGFzc2VzJ10gPSAoXywgY2xhc3NlcykgPT4ge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5jb250YWluZXJDbGFzc2VzID0gY2xhc3NlcztcclxuICAgICAgICB9KTtcclxuICAgICAgfTtcclxuICAgICAgT2JqZWN0LmFzc2lnbihzd2lwZXJQYXJhbXMub24sIHtcclxuICAgICAgICBfY29udGFpbmVyQ2xhc3NlcyxcclxuICAgICAgICBfc2xpZGVDbGFzc2VzLFxyXG4gICAgICB9KTtcclxuICAgICAgY29uc3Qgc3dpcGVyUmVmID0gbmV3IFN3aXBlcihzd2lwZXJQYXJhbXMpO1xyXG4gICAgICBzd2lwZXJSZWYubG9vcENyZWF0ZSA9ICgpID0+IHt9O1xyXG4gICAgICBzd2lwZXJSZWYubG9vcERlc3Ryb3kgPSAoKSA9PiB7fTtcclxuICAgICAgaWYgKHN3aXBlclBhcmFtcy5sb29wKSB7XHJcbiAgICAgICAgc3dpcGVyUmVmLmxvb3BlZFNsaWRlcyA9IHRoaXMubG9vcGVkU2xpZGVzO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IGlzVmlydHVhbEVuYWJsZWQgPVxyXG4gICAgICAgIHR5cGVvZiBzd2lwZXJSZWYucGFyYW1zLnZpcnR1YWwgIT09ICd1bmRlZmluZWQnICYmXHJcbiAgICAgICAgdHlwZW9mIHN3aXBlclJlZi5wYXJhbXMudmlydHVhbCAhPT0gJ2Jvb2xlYW4nICYmXHJcbiAgICAgICAgc3dpcGVyUmVmLnBhcmFtcy52aXJ0dWFsLmVuYWJsZWQ7XHJcbiAgICAgIGlmIChzd2lwZXJSZWYudmlydHVhbCAmJiBpc1ZpcnR1YWxFbmFibGVkKSB7XHJcbiAgICAgICAgc3dpcGVyUmVmLnZpcnR1YWwuc2xpZGVzID0gdGhpcy5zbGlkZXM7XHJcbiAgICAgICAgY29uc3QgZXh0ZW5kV2l0aCA9IHtcclxuICAgICAgICAgIGNhY2hlOiBmYWxzZSxcclxuICAgICAgICAgIHJlbmRlckV4dGVybmFsOiB0aGlzLnVwZGF0ZVZpcnR1YWxTbGlkZXMsXHJcbiAgICAgICAgICByZW5kZXJFeHRlcm5hbFVwZGF0ZTogZmFsc2UsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBleHRlbmQoc3dpcGVyUmVmLnBhcmFtcy52aXJ0dWFsLCBleHRlbmRXaXRoKTtcclxuICAgICAgICBleHRlbmQoc3dpcGVyUmVmLm9yaWdpbmFsUGFyYW1zLnZpcnR1YWwsIGV4dGVuZFdpdGgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoaXNQbGF0Zm9ybUJyb3dzZXIodGhpcy5fcGxhdGZvcm1JZCkpIHtcclxuICAgICAgICB0aGlzLnN3aXBlclJlZiA9IHN3aXBlclJlZi5pbml0KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcclxuICAgICAgICBjb25zdCBpc0VuYWJsZWQgPVxyXG4gICAgICAgICAgdHlwZW9mIHRoaXMuc3dpcGVyUmVmLnBhcmFtcy52aXJ0dWFsICE9PSAndW5kZWZpbmVkJyAmJlxyXG4gICAgICAgICAgdHlwZW9mIHRoaXMuc3dpcGVyUmVmLnBhcmFtcy52aXJ0dWFsICE9PSAnYm9vbGVhbicgJiZcclxuICAgICAgICAgIHRoaXMuc3dpcGVyUmVmLnBhcmFtcy52aXJ0dWFsLmVuYWJsZWQ7XHJcbiAgICAgICAgaWYgKHRoaXMuc3dpcGVyUmVmLnZpcnR1YWwgJiYgaXNFbmFibGVkKSB7XHJcbiAgICAgICAgICB0aGlzLnN3aXBlclJlZi52aXJ0dWFsLnVwZGF0ZSh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIHN3aXBlclJlZi5vbignc2xpZGVDaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmluZGV4Q2hhbmdlLmVtaXQodGhpcy5zd2lwZXJSZWYucmVhbEluZGV4KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdHlsZTogYW55ID0gbnVsbDtcclxuICBjdXJyZW50VmlydHVhbERhdGE6IGFueTsgLy8gVE9ETzogdHlwZSB2aXJ0dWFsRGF0YTtcclxuICBwcml2YXRlIHVwZGF0ZVZpcnR1YWxTbGlkZXMgPSAodmlydHVhbERhdGE6IGFueSkgPT4ge1xyXG4gICAgLy8gVE9ETzogdHlwZSB2aXJ0dWFsRGF0YVxyXG4gICAgaWYgKFxyXG4gICAgICAhdGhpcy5zd2lwZXJSZWYgfHxcclxuICAgICAgKHRoaXMuY3VycmVudFZpcnR1YWxEYXRhICYmXHJcbiAgICAgICAgdGhpcy5jdXJyZW50VmlydHVhbERhdGEuZnJvbSA9PT0gdmlydHVhbERhdGEuZnJvbSAmJlxyXG4gICAgICAgIHRoaXMuY3VycmVudFZpcnR1YWxEYXRhLnRvID09PSB2aXJ0dWFsRGF0YS50byAmJlxyXG4gICAgICAgIHRoaXMuY3VycmVudFZpcnR1YWxEYXRhLm9mZnNldCA9PT0gdmlydHVhbERhdGEub2Zmc2V0KVxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuc3R5bGUgPSB0aGlzLnN3aXBlclJlZi5pc0hvcml6b250YWwoKVxyXG4gICAgICA/IHtcclxuICAgICAgICAgIFt0aGlzLnN3aXBlclJlZi5ydGxUcmFuc2xhdGUgPyAncmlnaHQnIDogJ2xlZnQnXTogYCR7dmlydHVhbERhdGEub2Zmc2V0fXB4YCxcclxuICAgICAgICB9XHJcbiAgICAgIDoge1xyXG4gICAgICAgICAgdG9wOiBgJHt2aXJ0dWFsRGF0YS5vZmZzZXR9cHhgLFxyXG4gICAgICAgIH07XHJcbiAgICB0aGlzLmN1cnJlbnRWaXJ0dWFsRGF0YSA9IHZpcnR1YWxEYXRhO1xyXG4gICAgdGhpcy5fYWN0aXZlU2xpZGVzLm5leHQodmlydHVhbERhdGEuc2xpZGVzKTtcclxuICAgIHRoaXMuX25nWm9uZS5ydW4oKCkgPT4ge1xyXG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgIHRoaXMuc3dpcGVyUmVmLnVwZGF0ZVNsaWRlcygpO1xyXG4gICAgICB0aGlzLnN3aXBlclJlZi51cGRhdGVQcm9ncmVzcygpO1xyXG4gICAgICB0aGlzLnN3aXBlclJlZi51cGRhdGVTbGlkZXNDbGFzc2VzKCk7XHJcbiAgICAgIGlmICh0aGlzLnN3aXBlclJlZi5sYXp5ICYmIHRoaXMuc3dpcGVyUmVmLnBhcmFtcy5sYXp5WydlbmFibGVkJ10pIHtcclxuICAgICAgICB0aGlzLnN3aXBlclJlZi5sYXp5LmxvYWQoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnN3aXBlclJlZi52aXJ0dWFsLnVwZGF0ZSh0cnVlKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuO1xyXG4gIH07XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZWRQYXJhbXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIHRoaXMudXBkYXRlU3dpcGVyKGNoYW5nZWRQYXJhbXMpO1xyXG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlSW5pdFN3aXBlcihjaGFuZ2VkUGFyYW1zOiBhbnkpIHtcclxuICAgIGlmICghKGNoYW5nZWRQYXJhbXMgJiYgdGhpcy5zd2lwZXJSZWYgJiYgIXRoaXMuc3dpcGVyUmVmLmRlc3Ryb3llZCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgIGNvbnN0IHtcclxuICAgICAgICBwYXJhbXM6IGN1cnJlbnRQYXJhbXMsXHJcbiAgICAgICAgcGFnaW5hdGlvbixcclxuICAgICAgICBuYXZpZ2F0aW9uLFxyXG4gICAgICAgIHNjcm9sbGJhcixcclxuICAgICAgICB2aXJ0dWFsLFxyXG4gICAgICAgIHRodW1icyxcclxuICAgICAgfSA9IHRoaXMuc3dpcGVyUmVmO1xyXG5cclxuICAgICAgaWYgKGNoYW5nZWRQYXJhbXMucGFnaW5hdGlvbikge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHRoaXMucGFnaW5hdGlvbiAmJlxyXG4gICAgICAgICAgdHlwZW9mIHRoaXMucGFnaW5hdGlvbiAhPT0gJ2Jvb2xlYW4nICYmXHJcbiAgICAgICAgICB0aGlzLnBhZ2luYXRpb24uZWwgJiZcclxuICAgICAgICAgIHBhZ2luYXRpb24gJiZcclxuICAgICAgICAgICFwYWdpbmF0aW9uLmVsXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZVBhcmFtZXRlcigncGFnaW5hdGlvbicsIHRoaXMucGFnaW5hdGlvbik7XHJcbiAgICAgICAgICBwYWdpbmF0aW9uLmluaXQoKTtcclxuICAgICAgICAgIHBhZ2luYXRpb24ucmVuZGVyKCk7XHJcbiAgICAgICAgICBwYWdpbmF0aW9uLnVwZGF0ZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBwYWdpbmF0aW9uLmRlc3Ryb3koKTtcclxuICAgICAgICAgIHBhZ2luYXRpb24uZWwgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGNoYW5nZWRQYXJhbXMuc2Nyb2xsYmFyKSB7XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgdGhpcy5zY3JvbGxiYXIgJiZcclxuICAgICAgICAgIHR5cGVvZiB0aGlzLnNjcm9sbGJhciAhPT0gJ2Jvb2xlYW4nICYmXHJcbiAgICAgICAgICB0aGlzLnNjcm9sbGJhci5lbCAmJlxyXG4gICAgICAgICAgc2Nyb2xsYmFyICYmXHJcbiAgICAgICAgICAhc2Nyb2xsYmFyLmVsXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZVBhcmFtZXRlcignc2Nyb2xsYmFyJywgdGhpcy5zY3JvbGxiYXIpO1xyXG4gICAgICAgICAgc2Nyb2xsYmFyLmluaXQoKTtcclxuICAgICAgICAgIHNjcm9sbGJhci51cGRhdGVTaXplKCk7XHJcbiAgICAgICAgICBzY3JvbGxiYXIuc2V0VHJhbnNsYXRlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNjcm9sbGJhci5kZXN0cm95KCk7XHJcbiAgICAgICAgICBzY3JvbGxiYXIuZWwgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGNoYW5nZWRQYXJhbXMubmF2aWdhdGlvbikge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHRoaXMubmF2aWdhdGlvbiAmJlxyXG4gICAgICAgICAgdHlwZW9mIHRoaXMubmF2aWdhdGlvbiAhPT0gJ2Jvb2xlYW4nICYmXHJcbiAgICAgICAgICB0aGlzLm5hdmlnYXRpb24ucHJldkVsICYmXHJcbiAgICAgICAgICB0aGlzLm5hdmlnYXRpb24ubmV4dEVsICYmXHJcbiAgICAgICAgICBuYXZpZ2F0aW9uICYmXHJcbiAgICAgICAgICAhbmF2aWdhdGlvbi5wcmV2RWwgJiZcclxuICAgICAgICAgICFuYXZpZ2F0aW9uLm5leHRFbFxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgdGhpcy51cGRhdGVQYXJhbWV0ZXIoJ25hdmlnYXRpb24nLCB0aGlzLm5hdmlnYXRpb24pO1xyXG4gICAgICAgICAgbmF2aWdhdGlvbi5pbml0KCk7XHJcbiAgICAgICAgICBuYXZpZ2F0aW9uLnVwZGF0ZSgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobmF2aWdhdGlvbi5wcmV2RWwgJiYgbmF2aWdhdGlvbi5uZXh0RWwpIHtcclxuICAgICAgICAgIG5hdmlnYXRpb24uZGVzdHJveSgpO1xyXG4gICAgICAgICAgbmF2aWdhdGlvbi5uZXh0RWwgPSBudWxsO1xyXG4gICAgICAgICAgbmF2aWdhdGlvbi5wcmV2RWwgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAoY2hhbmdlZFBhcmFtcy50aHVtYnMgJiYgdGhpcy50aHVtYnMgJiYgdGhpcy50aHVtYnMuc3dpcGVyKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVQYXJhbWV0ZXIoJ3RodW1icycsIHRoaXMudGh1bWJzKTtcclxuICAgICAgICBjb25zdCBpbml0aWFsaXplZCA9IHRodW1icy5pbml0KCk7XHJcbiAgICAgICAgaWYgKGluaXRpYWxpemVkKSB0aHVtYnMudXBkYXRlKHRydWUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoY2hhbmdlZFBhcmFtcy5jb250cm9sbGVyICYmIHRoaXMuY29udHJvbGxlciAmJiB0aGlzLmNvbnRyb2xsZXIuY29udHJvbCkge1xyXG4gICAgICAgIHRoaXMuc3dpcGVyUmVmLmNvbnRyb2xsZXIuY29udHJvbCA9IHRoaXMuY29udHJvbGxlci5jb250cm9sO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnN3aXBlclJlZi51cGRhdGUoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlU3dpcGVyKGNoYW5nZWRQYXJhbXM6IFNpbXBsZUNoYW5nZXMgfCBhbnkpIHtcclxuICAgIHRoaXMuX25nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgIGlmIChjaGFuZ2VkUGFyYW1zLmNvbmZpZykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIShjaGFuZ2VkUGFyYW1zICYmIHRoaXMuc3dpcGVyUmVmICYmICF0aGlzLnN3aXBlclJlZi5kZXN0cm95ZWQpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGZvciAoY29uc3Qga2V5IGluIGNoYW5nZWRQYXJhbXMpIHtcclxuICAgICAgICBpZiAoaWdub3JlTmdPbkNoYW5nZXMuaW5kZXhPZihrZXkpID49IDApIHtcclxuICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IGNoYW5nZWRQYXJhbXNba2V5XT8uY3VycmVudFZhbHVlID8/IGNoYW5nZWRQYXJhbXNba2V5XTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVBhcmFtZXRlcihrZXksIG5ld1ZhbHVlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGNoYW5nZWRQYXJhbXMuYWxsb3dTbGlkZU5leHQpIHtcclxuICAgICAgICB0aGlzLnN3aXBlclJlZi5hbGxvd1NsaWRlTmV4dCA9IHRoaXMuYWxsb3dTbGlkZU5leHQ7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNoYW5nZWRQYXJhbXMuYWxsb3dTbGlkZVByZXYpIHtcclxuICAgICAgICB0aGlzLnN3aXBlclJlZi5hbGxvd1NsaWRlUHJldiA9IHRoaXMuYWxsb3dTbGlkZVByZXY7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNoYW5nZWRQYXJhbXMuZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5zd2lwZXJSZWYuY2hhbmdlRGlyZWN0aW9uKHRoaXMuZGlyZWN0aW9uLCBmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGNoYW5nZWRQYXJhbXMuYnJlYWtwb2ludHMpIHtcclxuICAgICAgICBpZiAodGhpcy5sb29wICYmICF0aGlzLmxvb3BlZFNsaWRlcykge1xyXG4gICAgICAgICAgdGhpcy5jYWxjTG9vcGVkU2xpZGVzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3dpcGVyUmVmLmN1cnJlbnRCcmVha3BvaW50ID0gbnVsbDtcclxuICAgICAgICB0aGlzLnN3aXBlclJlZi5zZXRCcmVha3BvaW50KCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChjaGFuZ2VkUGFyYW1zLnRodW1icyB8fCBjaGFuZ2VkUGFyYW1zLmNvbnRyb2xsZXIpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUluaXRTd2lwZXIoY2hhbmdlZFBhcmFtcyk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zd2lwZXJSZWYudXBkYXRlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNhbGNMb29wZWRTbGlkZXMoKSB7XHJcbiAgICBpZiAoIXRoaXMubG9vcCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgc2xpZGVzUGVyVmlld1BhcmFtcyA9IHRoaXMuc2xpZGVzUGVyVmlldztcclxuICAgIGlmICh0aGlzLmJyZWFrcG9pbnRzKSB7XHJcbiAgICAgIGNvbnN0IGJyZWFrcG9pbnQgPSBTd2lwZXIucHJvdG90eXBlLmdldEJyZWFrcG9pbnQodGhpcy5icmVha3BvaW50cyk7XHJcbiAgICAgIGNvbnN0IGJyZWFrcG9pbnRPbmx5UGFyYW1zID1cclxuICAgICAgICBicmVha3BvaW50IGluIHRoaXMuYnJlYWtwb2ludHMgPyB0aGlzLmJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdIDogdW5kZWZpbmVkO1xyXG4gICAgICBpZiAoYnJlYWtwb2ludE9ubHlQYXJhbXMgJiYgYnJlYWtwb2ludE9ubHlQYXJhbXMuc2xpZGVzUGVyVmlldykge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXdQYXJhbXMgPSBicmVha3BvaW50T25seVBhcmFtcy5zbGlkZXNQZXJWaWV3O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoc2xpZGVzUGVyVmlld1BhcmFtcyA9PT0gJ2F1dG8nKSB7XHJcbiAgICAgIHRoaXMubG9vcGVkU2xpZGVzID0gdGhpcy5zbGlkZXMubGVuZ3RoO1xyXG4gICAgICByZXR1cm4gdGhpcy5zbGlkZXMubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgbGV0IGxvb3BlZFNsaWRlcyA9IHRoaXMubG9vcGVkU2xpZGVzIHx8IHNsaWRlc1BlclZpZXdQYXJhbXM7XHJcbiAgICBpZiAoIWxvb3BlZFNsaWRlcykge1xyXG4gICAgICAvLyA/XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5sb29wQWRkaXRpb25hbFNsaWRlcykge1xyXG4gICAgICBsb29wZWRTbGlkZXMgKz0gdGhpcy5sb29wQWRkaXRpb25hbFNsaWRlcztcclxuICAgIH1cclxuICAgIGlmIChsb29wZWRTbGlkZXMgPiB0aGlzLnNsaWRlcy5sZW5ndGgpIHtcclxuICAgICAgbG9vcGVkU2xpZGVzID0gdGhpcy5zbGlkZXMubGVuZ3RoO1xyXG4gICAgfVxyXG4gICAgdGhpcy5sb29wZWRTbGlkZXMgPSBsb29wZWRTbGlkZXM7XHJcbiAgICByZXR1cm4gbG9vcGVkU2xpZGVzO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlUGFyYW1ldGVyKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XHJcbiAgICBpZiAoISh0aGlzLnN3aXBlclJlZiAmJiAhdGhpcy5zd2lwZXJSZWYuZGVzdHJveWVkKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBfa2V5ID0ga2V5LnJlcGxhY2UoL15fLywgJycpO1xyXG4gICAgY29uc3QgaXNDdXJyZW50UGFyYW1PYmogPSBpc09iamVjdCh0aGlzLnN3aXBlclJlZi5wYXJhbXNbX2tleV0pO1xyXG5cclxuICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLnN3aXBlclJlZi5tb2R1bGVzKS5pbmRleE9mKF9rZXkpID49IDApIHtcclxuICAgICAgY29uc3QgZGVmYXVsdFBhcmFtcyA9IHRoaXMuc3dpcGVyUmVmLm1vZHVsZXNbX2tleV0ucGFyYW1zW19rZXldO1xyXG4gICAgICBpZiAoaXNDdXJyZW50UGFyYW1PYmopIHtcclxuICAgICAgICBleHRlbmQodGhpcy5zd2lwZXJSZWYucGFyYW1zW19rZXldLCBkZWZhdWx0UGFyYW1zKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnN3aXBlclJlZi5wYXJhbXNbX2tleV0gPSBkZWZhdWx0UGFyYW1zO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzQ3VycmVudFBhcmFtT2JqICYmIGlzT2JqZWN0KHZhbHVlKSkge1xyXG4gICAgICBleHRlbmQodGhpcy5zd2lwZXJSZWYucGFyYW1zW19rZXldLCB2YWx1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnN3aXBlclJlZi5wYXJhbXNbX2tleV0gPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldEluZGV4KGluZGV4OiBudW1iZXIsIHNwZWVkPzogbnVtYmVyLCBzaWxlbnQ/OiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuaXNTd2lwZXJBY3RpdmUpIHtcclxuICAgICAgdGhpcy5pbml0aWFsU2xpZGUgPSBpbmRleDtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKGluZGV4ID09PSB0aGlzLnN3aXBlclJlZi5hY3RpdmVJbmRleCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5sb29wKSB7XHJcbiAgICAgICAgdGhpcy5zd2lwZXJSZWYuc2xpZGVUb0xvb3AoaW5kZXgsIHNwZWVkLCAhc2lsZW50KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnN3aXBlclJlZi5zbGlkZVRvKGluZGV4LCBzcGVlZCwgIXNpbGVudCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICB0aGlzLnN3aXBlclJlZj8uZGVzdHJveSh0cnVlLCBmYWxzZSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3Nsb3Q9Y29udGFpbmVyLXN0YXJ0XVwiPjwvbmctY29udGVudD5cclxuPG5nLWNvbnRhaW5lciAqbmdJZj1cIm5hdmlnYXRpb24gJiYgc2hvd05hdmlnYXRpb25cIj5cclxuICA8ZGl2IGNsYXNzPVwic3dpcGVyLWJ1dHRvbi1wcmV2XCIgI3ByZXZFbFJlZj48L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwic3dpcGVyLWJ1dHRvbi1uZXh0XCIgI25leHRFbFJlZj48L2Rpdj5cclxuPC9uZy1jb250YWluZXI+XHJcbjxkaXYgKm5nSWY9XCJzY3JvbGxiYXIgJiYgc2hvd1Njcm9sbGJhclwiIGNsYXNzPVwic3dpcGVyLXNjcm9sbGJhclwiICNzY3JvbGxiYXJFbFJlZj48L2Rpdj5cclxuPGRpdiAqbmdJZj1cInBhZ2luYXRpb24gJiYgc2hvd1BhZ2luYXRpb25cIiBjbGFzcz1cInN3aXBlci1wYWdpbmF0aW9uXCIgI3BhZ2luYXRpb25FbFJlZj48L2Rpdj5cclxuPGRpdiBbbmdDbGFzc109XCJ3cmFwcGVyQ2xhc3NcIiBbYXR0ci5pZF09XCJpZFwiPlxyXG4gIDxuZy1jb250ZW50IHNlbGVjdD1cIltzbG90PXdyYXBwZXItc3RhcnRdXCI+PC9uZy1jb250ZW50PlxyXG4gIDxuZy10ZW1wbGF0ZSAqbmdUZW1wbGF0ZU91dGxldD1cIlxyXG4gICAgICBzbGlkZXNUZW1wbGF0ZTtcclxuICAgICAgY29udGV4dDoge1xyXG4gICAgICAgIGxvb3BTbGlkZXM6IHByZXBlbmRTbGlkZXMsXHJcbiAgICAgICAga2V5OiAncHJlcGVuZCdcclxuICAgICAgfVxyXG4gICAgXCI+PC9uZy10ZW1wbGF0ZT5cclxuICA8bmctdGVtcGxhdGUgKm5nVGVtcGxhdGVPdXRsZXQ9XCJcclxuICAgICAgc2xpZGVzVGVtcGxhdGU7XHJcbiAgICAgIGNvbnRleHQ6IHtcclxuICAgICAgICBsb29wU2xpZGVzOiBhY3RpdmVTbGlkZXMsXHJcbiAgICAgICAga2V5OiAnJ1xyXG4gICAgICB9XHJcbiAgICBcIj48L25nLXRlbXBsYXRlPlxyXG4gIDxuZy10ZW1wbGF0ZSAqbmdUZW1wbGF0ZU91dGxldD1cIlxyXG4gICAgICBzbGlkZXNUZW1wbGF0ZTtcclxuICAgICAgY29udGV4dDoge1xyXG4gICAgICAgIGxvb3BTbGlkZXM6IGFwcGVuZFNsaWRlcyxcclxuICAgICAgICBrZXk6ICdhcHBlbmQnXHJcbiAgICAgIH1cclxuICAgIFwiPjwvbmctdGVtcGxhdGU+XHJcbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3Nsb3Q9d3JhcHBlci1lbmRdXCI+PC9uZy1jb250ZW50PlxyXG48L2Rpdj5cclxuPG5nLWNvbnRlbnQgc2VsZWN0PVwiW3Nsb3Q9Y29udGFpbmVyLWVuZF1cIj48L25nLWNvbnRlbnQ+XHJcblxyXG48bmctdGVtcGxhdGUgI3NsaWRlc1RlbXBsYXRlIGxldC1sb29wU2xpZGVzPVwibG9vcFNsaWRlc1wiIGxldC1zbGlkZUtleT1cImtleVwiPlxyXG4gIDxkaXYgKm5nRm9yPVwibGV0IHNsaWRlIG9mIGxvb3BTbGlkZXMgfCBhc3luY1wiIFtuZ0NsYXNzXT1cIlxyXG4gICAgICAoc2xpZGUuY2xhc3MgPyBzbGlkZS5jbGFzcyArICcgJyA6ICcnKSArXHJcbiAgICAgIHNsaWRlQ2xhc3MgK1xyXG4gICAgICAoc2xpZGVLZXkgIT09ICcnID8gJyAnICsgc2xpZGVEdXBsaWNhdGVDbGFzcyA6ICcnKVxyXG4gICAgXCIgW2F0dHIuZGF0YS1zd2lwZXItc2xpZGUtaW5kZXhdPVwic2xpZGUudmlydHVhbEluZGV4ID8gc2xpZGUudmlydHVhbEluZGV4IDogc2xpZGUuc2xpZGVJbmRleFwiIFtzdHlsZV09XCJzdHlsZVwiXHJcbiAgICBbbmdTd2l0Y2hdPVwic2xpZGUuem9vbVwiPlxyXG4gICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwidHJ1ZVwiIFtuZ0NsYXNzXT1cInpvb21Db250YWluZXJDbGFzc1wiPlxyXG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwic2xpZGUudGVtcGxhdGVcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie1xyXG4gICAgICAgICAgJGltcGxpY2l0OiBzbGlkZS5zbGlkZURhdGFcclxuICAgICAgICB9XCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgIDwvZGl2PlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hEZWZhdWx0PlxyXG4gICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwic2xpZGUudGVtcGxhdGVcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie1xyXG4gICAgICAgICAgJGltcGxpY2l0OiBzbGlkZS5zbGlkZURhdGFcclxuICAgICAgICB9XCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gIDwvZGl2PlxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=