---
category: general
title: Variables
subtitle: 变量
---

# 全局通用变量

```scss
@use "sass:color";
@use "sass:map";
// gray color
$white: #fff;
// 直接使用 $gray-70 , $gray-99 会在将来的版本移除
$gray-99: #fdfdfd !default; // 内容区域背景色

$gray-70: #fdfdfd !default; // 内容区域背景色，用于整个内容的背景色，sidebar 背景色
$gray-80: #fafafa !default; // 选项鼠标移上去的背景色，主要用于表格 Hover 移上去的颜色 和表格的编号背景色,
$gray-100: #f3f3f3 !default; // 搜索框背景色，消息栏置顶色, 完成任务卡片颜色， Popbox Menu 移上去的背景色
$gray-200: #eee !default; // 模块左侧导航鼠标移上去的阴影, 次分割线，部分控件描边, 消息评论图标使用
$gray-210: #e9e9e9 !default; //整块区域的背景色为 #f3f3f3 后，某个卡片模块的背景色，用于文件详情
$gray-300: #ddd !default; // 主分割线, 进度条背景色，三级图标色
$gray-400: #cacaca !default; // 搜索框默认文字， 禁用图标颜色, 部分图标颜色,
$gray-500: #aaa !default; // 添加参与人,负责人等操作图标的边框颜色,说明文字, 搜索框文字
$gray-600: #888 !default; // 次要文字,如 Tab 切换文字
$gray-700: #666 !default; // 主要文字
$gray-800: #333 !default; // 标题和重点文字
$gray-900: #212529 !default;
$black: #000;
//px to rem
$rem-5px: 0.3125rem;
$rem-10px: 0.625rem;
$rem-14px: 0.875rem;
$rem-15px: 0.9375rem;
$rem-18px: 1.125rem;
$rem-20px: 1.25rem;
$rem-26px: 1.625rem;
// color
$body-color: $gray-800 !default;
$primary: #348fe4 !default;
// deprecated
$primary-active: color.adjust($primary, $lightness: -10%) !default;
$secondary: $gray-700 !default;
$success: #66c060 !default; // 2dbcff
$info: #2dbcff !default;
$warning: #ffc442 !default;
$danger: #ff5b57 !default;
$pass: #2cccda !default;
$secondary-item-active: rgba($primary, 0.1) !default;
$item-active-bg-color: rgba($primary, 0.1) !default;
$light: $gray-300 !default;
// $light : $gray-100;
// $dark : $gray-800;
// enable-gradients

// font
$font-family-sans-serif: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, PingFang SC, Helvetica Neue, Noto Sans, Noto Sans CJK SC,
    Microsoft Yahei, Arial, Hiragino Sans GB, sans-serif !default;
$font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace !default;
$font-family-base: $font-family-sans-serif !default;
$font-family-statistics-number: $font-family-base !default;
$font-size-base: 0.875rem !default; // 14px
$font-size-lg: 1.25rem !default; // 20px
$font-size-sm: 0.75rem !default; // 12px

// line-height
$line-height-base: 1.5715 !default;
$line-height-lg: 1.5 !default;
$line-height-sm: 1.5715 !default;

$border-radius: 0.25rem !default;
$border-radius-lg: 0.3rem !default;
$border-radius-sm: 0.2rem !default;

$enable-gradients: false !default;
$enable-shadows: true !default;
// transition-duration
$transition-duration-normal: 200ms !default;

// link
$link-color: $primary !default;
$link-decoration: none !default;
$link-hover-color: $primary !default;
$link-hover-decoration: underline !default;
$link-icon-padding-right: 4px !default;
// box shadow
$box-shadow: 0 0 24px rgba(0, 0, 0, 0.18) !default;

// icon
$icon-vertical-align: -0.16em !default;

// 扩展
$font-size-md: 1rem !default; // 16px
$font-size-max-lg: 3.25rem !default; // 补充字体大小 52px
$font-size-xs: 0.625rem !default; // 10px
$font-size-xlg: 1.5rem !default; // 24px
// code
$code-color: $danger !default;
$code-font-size: 0.875rem !default;

// pill style for close(dialog,slide)
$close-pill-enabled: true !default;

// ---input-btn 输入框和按钮复用的变量---

// 按钮和输入框大小, 目前有5种大小, 按钮和输入框都是通过 padding 设置成对应大小的
// 为了方便记录或者在某些场景下使用, 新增了高度的变量
$input-btn-height-lg: 44px !default;
$input-btn-height: 36px !default;
$input-btn-height-md: 32px !default;
$input-btn-height-sm: 28px !default;
$input-btn-height-xs: 24px !default;

$input-btn-line-height: $line-height-base !default;
$input-btn-line-height-md: $line-height-base !default;
$input-btn-line-height-sm: $line-height-base !default;
$input-btn-line-height-lg: $line-height-lg !default;

$input-btn-padding-x: 1.625rem !default;
$input-btn-padding-y: 0.375rem !default; // 36px
$input-btn-padding-x-md: 1rem !default;
$input-btn-padding-y-md: 0.25rem !default; // 32px
$input-btn-padding-x-sm: 0.5rem !default;
$input-btn-padding-y-sm: 0.25rem !default;
$input-btn-padding-x-lg: 1rem !default;
$input-btn-padding-y-lg: 0.656rem !default;

$input-btn-focus-width: 0.0625rem !default; // 1px

// Buttons
$btn-border-radius: 4px !default;
$btn-border-radius-lg: 4px !default;
$btn-border-radius-sm: 4px !default;
$btn-border-radius-xs: 4px !default;
$btn-box-shadow: null !default;

$btn-line-height: $input-btn-line-height;
$btn-line-height-sm: $input-btn-line-height-sm;
$btn-line-height-lg: $input-btn-line-height-lg;
$btn-line-height-md: $input-btn-line-height-md;

$btn-padding-y: $input-btn-padding-y !default; //108*38px
$btn-padding-x: 1.25rem !default;
$btn-padding-y-md: $input-btn-padding-y-md !default;
$btn-padding-x-md: 15px !default; // 1.25rem !default;
$btn-padding-y-sm: 0.125rem !default; // 70*28px
$btn-padding-x-sm: 15px !default;
$btn-padding-y-lg: 0.375rem !default;
$btn-padding-x-lg: 2.215rem !default;
$btn-padding-y-xs: 0.125rem !default;
$btn-padding-x-xs: 15px !default;

$btn-disabled-color: $gray-400 !default;
$btn-disabled-bg-color: $gray-100 !default;
$btn-disabled-border-color: $gray-100 !default;
$btn-outline-disabled-border-color: $gray-300 !default;
$btn-link-color-default: $gray-500 !default;
$btn-link-color-disabled: $gray-400 !default;
$btn-icon-light-color: $gray-300 !default;
$btn-link-disabled-color: $gray-400 !default;
$btn-icon-color: $gray-400 !default; // #cacaca
$btn-icon-thick-dashed-color: $gray-300 !default; // #ddd
$btn-icon-thick-solid-color: $gray-400 !default; // #cacaca
// $btn-icon-circle-padding-lg: 0.8125rem;
// $btn-icon-circle-padding-base: 0.563rem;
// $btn-icon-circle-padding-sm: 0.4375rem;
// $btn-icon-circle-padding-xs: 0.25rem;
$btn-icon-circle-padding-lg: 13px;
$btn-icon-circle-padding-base: 8px;
$btn-icon-circle-padding-sm: 7px;
$btn-icon-circle-padding-xs: 4px;
$btn-icon-circle-padding-difference: 1;

// min-width
$btn-base-min-width: 97px !default;
$btn-md-min-width: 70px !default;
$btn-sm-min-width: 70px !default;
$btn-xs-min-width: 60px !default;
$btn-lg-min-width: 108px !default;
// font-size
$btn-font-size-xs: $font-size-sm !default;
$btn-font-size-sm: $font-size-base !default;
$btn-font-size-md: $font-size-base !default;
$btn-font-size-base: $font-size-base !default;
$btn-font-size-lg: $font-size-lg !default;

// btn-pair
$btn-pair-child-margin-left: 20px !default;
$btn-pair-child-link-margin-left: 10px !default;
$btn-pair-sm-child-margin-left: 4px !default;

// btn-group
$btn-group-btn-padding-y-lg: $btn-padding-y-lg !default;
$btn-group-btn-padding-y-md: $btn-padding-y-md !default;
$btn-group-btn-padding-y-sm: $btn-padding-y-sm !default;
$btn-group-btn-padding-y-xs: $btn-padding-y-xs !default;

$btn-group-btn-padding-x-lg: 25px !default;
$btn-group-btn-padding-x-md: 20px !default;
$btn-group-btn-padding-x-sm: 15px !default;
$btn-group-btn-padding-x-xs: 10px !default;

$btn-group-btn-dropdown-padding-x: 0.801rem !default;
$btn-group-btn-dropdown-padding-x-lg: 0.938rem !default;
$btn-group-btn-dropdown-padding-x-md: 0.676rem !default;
$btn-group-btn-dropdown-padding-x-sm: 0.551rem !default;
$btn-group-btn-dropdown-padding-x-xs: 0.5rem !default;

// Forms
// 输入框左右 padding 和 按钮大小不一致， bootstrap 是一致的
// input-padding-x 之前是 0.875rem, 芳美说太大了，改成了 10px 大小
$input-font-size: $font-size-base !default;
$input-font-size-sm: $font-size-sm !default;
$input-font-size-lg: $font-size-xlg !default;

$input-line-height-xs: $input-btn-line-height-sm !default;
$input-line-height-md: $input-btn-line-height-md !default;
$input-line-height-sm: $input-btn-line-height-sm !default;
$input-line-height-lg: $input-btn-line-height-lg !default;

$input-padding-x-fixed: 0.625rem !default; // input 所有大小左右间距都是固定的
$input-padding-x: $input-padding-x-fixed !default;
$input-padding-y: $input-btn-padding-y !default;
$input-padding-x-md: $input-padding-x-fixed !default;
$input-padding-y-md: $input-btn-padding-y-md !default;
$input-padding-x-sm: $input-padding-x-fixed !default;
$input-padding-y-sm: $input-btn-padding-y-sm !default;
$input-padding-x-lg: $input-padding-x-fixed !default;
$input-padding-y-lg: 0.188rem !default;
$input-padding-x-xs: $input-padding-x-fixed !default;
$input-padding-y-xs: 0.125rem !default;
// input border-radius
$input-border-radius-xs: 0.25rem !default;
$input-border-radius-md: 0.25rem !default;
// input height
$input-height-xs: $input-btn-height-xs !default;
$input-height-sm: $input-btn-height-sm !default;
$input-height-md: $input-btn-height-md !default;
$input-height-lg: $input-btn-height-lg !default;
// others
$input-focus-border-color: $primary !default;
$input-btn-focus-box-shadow: none !default;
$input-box-shadow: none !default;
$input-placeholder-color: $gray-400 !default;
$input-color: $gray-800 !default;
$input-focus-bg: transparent !default;
$input-label-color: $gray-600 !default; // label 文本的颜色，包括 Checkbox 和 Radio Label 的颜色
$input-label-checked-color: $gray-800 !default; // Checkbox 和 Radio Label 选中后的颜色
$input-border-color: $gray-200 !default;
$input-hover-border-color: $primary !default;
$input-disabled-bg: $gray-100 !default;
$input-disabled-color: $gray-600 !default;
$input-icon-color: $gray-500 !default;
$input-group-addon-color: $gray-700 !default;
$input-group-addon-bg: $gray-100 !default;
$form-text-margin-top: 0.5rem !default;
$input-ellipse-radius: 1.25rem !default;
$input-ellipse-background-color: $gray-100 !default;
$input-ellipse-focus-border-color: $primary !default;
$input-ellipse-hover-border-color: $gray-300 !default;
$input-ellipse-hover-focus-background-color: $white !default;
$input-form-check-size: 1rem !default;
$input-form-check-disable-color: $gray-400 !default;
$input-form-check-border-color: $gray-300 !default;
$form-label-color: $gray-700 !default;
$form-check-input-margin-t: 0.3rem !default;
$form-check-input-margin-l: 1.25rem !default;
$form-check-inline-margin-r: 0.75rem !default;
$form-check-inline-input-margin-r: 0.3125rem !default;

// Dropdown
$dropdown-toggle-y-l: 1.25rem !default;
$dropdown-toggle-y-r: 0.938rem !default;
$dropdown-toggle-split-y: 0.625rem !default;

// PopBox
$pop-box-divider: $gray-100 !default;
$pop-box-bg-hover: $gray-100 !default;
$pop-box-text: $gray-700 !default;
$pop-box-text-hover: $gray-900 !default;
$pop-box-body-padding: 15px 20px !default;
$pop-box-footer-padding: 15px 20px !default;
$pop-box-top-margin: 3px !default;
$zindex-pop-box: 1080 !default;

// Layout
$layout-header-background: rgba($gray-99, 0.97) !default;
$layout-header-padding: 0 15px !default;
$layout-header-height: 50px !default;
$layout-header-prefix-icon-size: 20px !default;
$layout-header-separator-color: $gray-500 !default;
$layout-header-icon-link-opacity: 0.85;

$layout-content-background: $gray-200 !default;
$layout-content-padding: 15px 15px 15px 15px !default;
$layout-sidebar-width: 240px !default;
$layout-sidebar-background: rgba($gray-99, 0.97) !default;
$layout-sidebar-border-right: 1px solid $gray-300 !default;
$layout-sidebar-drag-background-hover: $gray-300 !default;
$layout-sidebar-drag-background-active: $primary !default;
$layout-header-height-sm: 38px !default;
$layout-content-section-border-radius: 0px !default;
$layout-content-section-background: $white !default;
$layout-content-section-margin-bottom: 15px !default;
// Tables
$table-cell-padding: 12px 15px !default;
$table-sm-cell-padding: 0.3rem !default;
$table-color: $gray-800;
$table-bg: transparent !default;
$table-accent-bg: rgba($black, 0.05) !default;
$table-hover-bg: rgba($black, 0.075) !default;
$table-active-bg: $table-hover-bg !default;
$table-margin-bottom: 1.25rem;
$table-hover-color: $gray-80;
$table-border-width: 1px !default;
$table-border-color: $gray-200 !default;
$table-head-bg: $gray-200 !default;
$table-head-color: $gray-700 !default;
$table-default-head-color: $gray-600 !default;
$table-default-cell-height: 55px !default;
$table-sm-cell-height: 44px !default;
$table-bordered-padding: 11px 15px !default;
$table-bordered-bg: $gray-100 !default;
$table-bordered-head-color: $gray-700 !default;
$table-draggable-first-th-padding-left: 20px !default;
$table-draggable-first-td-padding-left: 20px !default;
$table-draggable-icon-color: $gray-600 !default;
$table-draggable-icon-left: 2px !default;
$table-draggable-bordered-icon-padding-left: 30px !default;
$table-default-header-cell-padding: 0 15px !default;
$table-default-header-padding: 12px 15px !default;
$table-default-sm-header-padding: 8px 15px !default;
$table-default-header-height: inherit !default;
$table-bordered-cell-height: 50px !default;
$table-group-first-cell-padding-left: 43px !default;
// grid
$table-footer-padding: 0 20px !default;
// action-menu
$action-menu-width: 240px !default;
$action-menu-group-width: 280px !default;
$action-menu-padding-y: 10px;
$action-menu-max-height: 400px !default;
$action-menu-bg: $white !default;
$action-menu-item-padding-x: 20px !default;
$action-menu-item-padding-y: 9px !default;
$action-menu-item-color: $gray-700 !default;
$action-menu-item-hover-color: $gray-800 !default;
$action-menu-item-icon-color: $gray-500 !default;
$action-menu-item-extend-color: $gray-500 !default;
$action-menu-item-hover-bg: $gray-100 !default;
$action-menu-divider-title-color: $gray-400 !default;
$action-menu-divider-border-color: $gray-200 !default;
$action-menu-divider-margin-y: 5px !default;
$action-menu-divider-margin-x: 20px !default;
$action-menu-group-name-color: $gray-400 !default;
$action-menu-group-name-padding-y: 5px;
$action-menu-group-name-padding-x: 20px;
// badges
$badge-font-size: 75% !default;
$badge-font-weight: normal !default;
$badge-padding-y: 0.25em !default;
$badge-padding-x: 7px !default;
$badge-border-radius: 14px !default;
$badge-pill-padding-x: 0.6em !default;
$badge-pill-border-radius: 10rem !default;
$badge-bg: $gray-200 !default; //#eee
$badge-color: $gray-600 !default; //#888
$badge-danger-color: #ff7461 !default;
//label
$label-size-padding: 5px 10px !default;
$label-size-padding-sm: 4px 10px !default;
$label-size-padding-md: 6px 10px !default;
$label-size-padding-lg: 7px 10px !default;
$label-border-radius: 3px !default;
$label-pill-radius: 18px !default;
$label-border-radius: 3px !default;
$label-default-bg: $gray-200 !default;
$label-primary-bg: $primary !default;
$label-success-bg: $success !default;
$label-info-bg: $info !default;
$label-warning-bg: $warning !default;
$label-danger-bg: $danger !default;
//avatar
$avatar-sizes: () !default;
$avatar-sizes: map.merge(
    (
        22: 12,
        24: 12,
        28: 12,
        32: 12,
        36: 12,
        48: 14,
        68: 16,
        110: 45,
        160: 50
    ),
    $avatar-sizes
);
// Navs
$nav-link-disabled-color: $gray-300 !default;
$nav-link-color: $gray-600 !default;
$nav-link-icon-color: $gray-500 !default;
$nav-link-primary-color: $gray-800 !default;
$nav-link-hover-color: $primary !default;
$nav-border-color: $gray-200 !default;
$nav-divider-color: $gray-200 !default;
$nav-border-width: 2px !default;
$nav-border-bottom: $nav-border-width solid $primary !default;
$nav-border-left: $nav-border-width solid $primary !default;
$nav-link-primary-padding-y: 0.813rem !default; // 高度 50px
$nav-link-primary-padding-x: 1rem !default;
$nav-link-primary-right: 20px !default;
$nav-link-primary-min-width: 80px !default;
$nav-link-secondary-padding-y: 0.438rem !default; // 高度 38px
$nav-link-secondary-padding-x: 0rem !default;
$nav-link-secondary-right: 40px !default;
$nav-link-secondary-split-right: 60px !default;
$nav-link-thirdly-padding-y: 0.5rem !default; // 高度 38px
$nav-link-thirdly-padding-x: 0rem !default;
$nav-link-thirdly-right: 40px !default;
$nav-link-thirdly-split-line-height: 15px !default;
$nav-link-thirdly-padding-y-sm: 0.4375rem !default;
$nav-link-thirdly-padding-x-sm: 0rem !default;
$nav-link-thirdly-right-sm: 40px !default;
$nav-link-thirdly-split-line-height-sm: 11px !default;
$nav-vertical-border-left: 4px solid $primary !default;
$nav-vertical-border-left-empty: 4px solid transparent !default;

$icon-nav-link-color: $gray-600 !default;
$icon-nav-link-hover-color: $primary !default;
$icon-nav-link-spacing: 15px !default;
$icon-nav-link-secondary-color: $gray-400 !default;
$icon-nav-link-secondary-spacing: 10px !default;
$icon-nav-link-individual-spacing: 0px !default;

// Modals
// Padding applied to the modal body
$modal-inner-padding: 1.25rem 1.875rem 1.875rem 1.875rem !default; //
$modal-has-footer-inner-padding: 1.25rem 1.875rem 0 1.875rem !default; //
$modal-dialog-margin: 0.5rem !default;
$modal-dialog-margin-y-sm-up: 3.75rem !default; //
$modal-title-line-height: 1.5 !default;
$modal-content-bg: $white !default;
$modal-content-border-color: rgba($black, 0.2) !default;
$modal-content-border-width: 0 !default; //
$modal-content-box-shadow-xs: 0 0 1.5rem rgba($black, 0.4) !default; //
$modal-content-box-shadow-sm-up: 0 0 1.5rem rgba($black, 0.5) !default; //
$modal-backdrop-bg: $black !default;
$modal-backdrop-opacity: 0.3 !default; //
$modal-header-border-color: $gray-200 !default; //
$modal-footer-border-color: $modal-header-border-color !default;
$modal-header-border-width: 1px !default;
$modal-footer-border-width: $modal-header-border-width !default;
$modal-header-padding: 1.875rem !default; //
$modal-lg: 980px !default; //
$modal-blg: 800px !default; //稍微大点，自定义属性
$modal-md: 660px !default; //
$modal-sm: 400px !default; //
$modal-transition: transform 0.3s ease-out !default;

// Dialog
$dialog-border-radius: 4px !default;
$dialog-header-height: 50px !default;
$dialog-header-title-line-height: 1.5rem !default;
$dialog-header-padding: 1.875rem !default;
$dialog-header-padding-lg: 1.25rem !default;

$dialog-header-border-width: 1px !default;
$dialog-header-border-color: $gray-200 !default;
$dialog-box-shadow: 0 0 24px rgba(0, 0, 0, 0.25) !default;
$dialog-body-padding: 1.25rem 1.875rem 1.875rem 1.875rem !default;

// $dialog-footer-padding: 1.25rem 1.875rem 1.875rem 1.875rem !default;
$dialog-footer-padding: 0.9375rem 1.875rem !default;
$dialog-footer-border-width: 1px !default;
$dialog-footer-border-color: $dialog-header-border-color !default;

$dialog-default-max-height: 85vh !default;
$dialog-max-lg: 980px !default; //
$dialog-lg: 800px !default;
$dialog-md: 660px !default; //
$dialog-sm: 400px !default; //
$dialog-supper-lg-max-height: 1000px !default;
$dialog-supper-lg-max-width: 1800px !default;
$dialog-supper-lg-height: 94vh !default;
$dialog-supper-lg-width: 94vw !default;

$btn-dialog-confirm-cancel: $btn-pair-child-link-margin-left !default;

// Card
$card-border-radius: 0 !default;
$card-title-icon-color: $primary !default;
// change from $gray-700(#888) to $gray-800 (#333) by Terry required
$card-title-color: $gray-800 !default;
$card-title-info-color: $gray-500 !default;
$card-header-divider-color: $gray-200 !default;
// divided 分割模式，头部和内容区域的上下间距
$card-divided-spacing-y: 15px;

//Datepicker
$datepicker-z-index: 1100 !default;
// Notify
$notify-width: 320px !default;
$notify-z-index: 1100 !default;
$notify-spacing: 20px !default;
$notify-margin-bottom: 10px !default;
$notify-line-height: 1.5 !default;
$notify-padding: 18px !default;
$notify-border-radius-width: 4px !default;
$notify-bg: $white !default;
$notify-success: $success !default;
$notify-info: $info !default;
$notify-warning: $warning !default;
$notify-danger: $danger !default;
$notify-title-color: $gray-800 !default;
$notify-icon-font-size: 18px !default;
$notify-box-shadow: $box-shadow !default;
$notify-content-color: $gray-500 !default;
$notify-close-color: $gray-400 !default;
$notify-close-hover-color: $gray-600 !default;
$notify-icon-padding-right: 15px !default;
$notify-states: (
    'success': $notify-success,
    'warning': $notify-warning,
    'error': $notify-danger,
    'info': $notify-info
);

//close
$close-font-size: $font-size-md !default;
$close-font-weight: normal !default;
$close-color: $black !default;
$close-text-shadow: 0 1px 0 $white !default;
$close-text-color: $gray-400 !default;

//empty
$empty-icon-size: 3.125rem !default;
$empty-icon-size-lg: 5rem !default;

$empty-icon-color: $gray-200 !default;
$empty-svg-width: 102px !default;
$empty-svg-height: 92px !default;
$empty-svg-width-lg: 148px !default;
$empty-svg-height-lg: 134px !default;
$empty-svg-width-sm: 64px !default;
$empty-svg-height-sm: 58px !default;
$empty-text-color: $gray-400 !default;
$empty-text-color-with-extra: $gray-800 !default;
$empty-text-size: $font-size-base !default;
$empty-text-size-lg: $font-size-md !default;
$empty-text-size-sm: $font-size-base !default;
$empty-text-margin-top: 12px !default;
$empty-text-margin-top-lg: 18px !default;
$empty-text-margin-top-sm: 6px !default;
$empty-description-color: $gray-600 !default;
$empty-description-size: $font-size-base !default;
$empty-description-margin-top: 14px !default;

//util
$operation-link-margin-y: 20px !default;
//switch
// $switch-lg-width: 48px !default;
// $switch-lg-height: 28px !default;
$switch-width: 42px !default;
$switch-height: 24px !default;
$handle-margin: 2px !default;
$switch-sm-width: 36px !default;
$switch-sm-height: 20px !default;
$switch-xs-width: 24px !default;
$switch-xs-height: 16px !default;
$switch-margin-bottom: 0 !default;
//Transfer
$transfer-width: 600px !default;
$transfer-list-header-padding: 10px 0 !default;
$transfer-list-header-font-color: $gray-600 !default;
$transfer-list-header-font-size: $font-size-base !default;
$transfer-list-border-width: 1px !default;
$transfer-list-border-color: $gray-200 !default;
$transfer-list-border-radius: 5px !default;
$transfer-list-width: 270px !default;
$transfer-list-height: 360px !default;
$transfer-list-padding: 10px 0 !default;
$transfer-list-item-padding: 0 15px 0 20px !default;
$transfer-list-item-line-hight: 38px !default;
$transfer-list-item-hover-color: $gray-200 !default;
$transfer-operation-padding: 0 10px !default;
$transfer-operation-font-size: 22px !default;
$transfer-operation-color: $gray-500 !default;
//progress
$progress-height: 10px !default;
$progress-height-lg: 16px !default;
$progress-height-sm: 6px !default;
$progress-height-xs: 4px !default;
$progress-bar-bg: $gray-200 !default;
$progress-split-color: $white !default;
$progress-bar-primary-bg: #73d897;
//Slide
$slide-bg: $white !default;
$slide-height: calc(100vh - #{$layout-header-height} - #{$layout-header-height-sm}) !default;
$slide-z-index: 900 !default;
$slide-header-height: 45px !default;
// $slide-header-padding: 0.75rem 1.25rem !default;
$slide-header-padding: 1.25rem !default;
$slide-header-main-padding: 0 20px !default;
$slide-body-content-padding: 0 1.25rem 0.75rem 1.25rem !default;
$slide-body-section-padding: 20px !default;
$slide-divider: $gray-200 !default;
$slide-footer-padding: 15px 20px 0 !default;
$slide-footer-height: 65px !default;
$slide-border-color: $gray-200 !default;
$slide-box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.04), 0 6px 30px 5px rgba(0, 0, 0, 0.08), 0 8px 10px -5px rgba(0, 0, 0, 0.12) !default;
//tree
$tree-padding: 10px 20px 10px 10px;
$tree-node-padding: 0 0 0 25px !default;
$tree-node-margin: 0 0 0 20px !default;
$tree-node-wrapper-padding: 0 !default;
$tree-node-wrapper-height: 44px !default;
$tree-node-wrapper-line-height: 44px !default;
$tree-node-wrapper-border-bottom: 1px solid $gray-200 !default;
$tree-node-wrapper-active-border-color: rgba($primary, 0.3) !default;
$tree-node-wrapper-active-background-color: rgba($primary, 0.1) !default;
$tree-node-wrapper-hover-shadow: 0 2px 8px 1px rgba(0, 0, 0, 0.08) !default;
$tree-node-wrapper-height-sm: 42px !default;
// stepper
$stepper-header: 70px !default;
$stepper-padding: 0 50px !default;
$stepper-header-padding: 0 5px !default;
$stepper-number-size: 24px !default;
$stepper-selected-icon-bottom: -24px !default;
$stepper-label-padding: 0 10px !default;
$stepper-line-margin: 0 10px 0 0 !default;
$stepper-line-min-width: 30px !default;

//#region scrollbar
$scrollbar-track-piece: $gray-200 !default;
$scrollbar-thumb: $gray-300 !default;
// #endregion

// breadcrumb

$breadcrumb-icon-color: $gray-500 !default;
$breadcrumb-separator-color: $gray-500 !default;
$breadcrumb-text-color: $gray-600 !default;
$breadcrumb-active-color: $gray-800 !default;

// thyMenu
$menu-height: 42px !default;
$menu-shadow: 0 0 8px 2px $gray-200 !default;
$menu-item-padding: 0 20px !default;
$menu-group-header-padding: 0 1020px !default;
$menu-group-margin-left: 15px !default;
$menu-divider-margin: 10px 20px !default;

// editable
$editable-border-color: $gray-200 !default;
$editable-padding-y: $input-padding-y !default;
$editable-padding-x: $input-padding-x !default;
$editable-padding-y-lg: $input-padding-y-lg !default;
$editable-padding-x-lg: $input-padding-x-lg !default;

// arrow-switcher
$arrow-switcher-btn-size: 30px !default;
$arrow-switcher-sm-btn-size: 24px !default;
$arrow-switcher-btn-bac: $gray-200 !default;
$arrow-switcher-btn-disabled-bac: #fafafa !default;
$arrow-switcher-btn-disabled-color: $gray-300 !default;
$arrow-switcher-btn-hover-bac: $primary !default;
$arrow-switcher-btn-hover-color: $white !default;

// pagination
$pagination-padding-y: 0.282rem !default;
$pagination-padding-x: 0.757rem !default;
$pagination-padding-y-sm: 3px !default;
$pagination-padding-x-sm: 8px !default;
$pagination-padding-y-lg: 0.282rem !default;
$pagination-padding-x-lg: 0.757rem !default;
$pagination-line-height: 1.42 !default;
$pagination-color: $gray-500 !default;
$pagination-font-size: 12px !default;
$pagination-bg: $white !default;
$pagination-border-width: 1px !default;
$pagination-border-color: $gray-200 !default;
$pagination-focus-box-shadow: none !default;
$pagination-hover-color: $link-hover-color !default;
$pagination-hover-bg: $white !default;
$pagination-hover-border-color: $gray-200 !default;
$pagination-active-color: $white !default;
$pagination-active-bg: $primary !default;
$pagination-active-border-color: $primary !default;
$pagination-disabled-color: $gray-400 !default;
$pagination-disabled-bg: $white !default;
$pagination-disabled-border-color: $gray-200 !default;
$pagination-total-pages-color: $gray-700;
$pagination-jumper-margin: 0 12px !default;
$pagination-jumper-input-width: 38px;
$pagination-jumper-input-color: $gray-700;
$pagination-jumper-button-color: $gray-700;

// tooltip
$tooltip-font-size: $font-size-base !default;
$tooltip-max-width: 350px !default;
$tooltip-color: $white !default;
$tooltip-bg: rgba(0, 0, 0, 0.75) !default;
$tooltip-border-radius: $border-radius !default;
$tooltip-opacity: 0.9 !default;
$tooltip-padding-y: 0.375rem !default;
$tooltip-padding-x: 0.75rem !default;
$tooltip-margin: 0 !default;
$tooltip-box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15) !default;
$tooltip-content-min-height: 34px !default;

$tooltip-arrow-width: 0.75rem !default;
$tooltip-arrow-height: 0.375rem !default;
$tooltip-arrow-color: $tooltip-bg !default;

// alert
$alert-padding-y: 0.625rem !default;
$alert-padding-x: 1.125rem !default;
$thy-alert-weak-colors: (
    'primary-weak': $primary,
    'success-weak': $success,
    'warning-weak': $warning,
    'danger-weak': $danger
) !default;
$alert-operation-margin-left: 40px !default;

// list
$list-item-padding: 0.554rem 10px !default;
$list-grid-option-margin: 0 25px 25px 0 !default;
$list-grid-option-width: 150px !default;
$list-grid-option-height: 120px !default;
$list-grid-option-sm: 95px !default;
$list-grid-option-margin-sm: 0 10px 10px 0 !default;
$list-grid-option-icon-size: 32px;
$list-grid-option-name-margin-top: 15px;
$list-grid-option-sm-name-margin-top: 7px;

// list-item-meta
$thy-list-item-border-bottom: 1px solid $gray-200 !default;
$list-item-meta-padding: 15px 0 !default;
$thy-list-item-meta-content-margin-left: 20px !default;
$thy-list-item-meta-title-font-size: 18px !default;
$thy-list-item-meta-description-margin-top: 10px !default;

// vote
$vote-layout-vertical-sm: 36px;
$vote-layout-vertical-default: 48px;
$vote-layout-vertical-padding-sm: 5px;
$vote-layout-vertical-padding-default: 7px;
$vote-layout-vertical-icon-margin-bottom: 4px;
$vote-layout-horizontal-padding: 4px 7px;
$vote-layout-horizontal-icon-margin-right: 5px;

// statistic
$statistic-size-default: 30px;
$statistic-suffix-size-default: $font-size-base;
$statistic-title-size-default: $font-size-base;

// result
$result-padding: 30px !default;
$result-title-font-size: $font-size-xlg !default;
$result-subtitle-font-size: $font-size-base !default;
$result-subtitle-color: $gray-600 !default;
$result-extra-margin-top: 17px !default;
$result-extra-item-margin: 6px !default;
$result-title-margin-top: 30px !default;
$result-subtitle-margin-top: 8px !default;

// markdown
$markdown-color-width: $rem-14px !default;
$markdown-color-height: $rem-14px !default;
$markdown-color-border-color: $gray-200 !default;

// mention
$mention-suggestions-width: 280px !default;
$mention-suggestions-height: 315px !default;

// Popover
$popover-divider: $gray-100 !default;
$popover-header-padding: 12px 20px !default;
$popover-body-padding: 15px 20px !default;

// divider
$divider-orientation-margin: 5% !default;
$divider-text-padding: 1em !default;
$divider-color: $gray-200 !default;
$divider-width: 1px !default;

```
