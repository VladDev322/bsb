var c=Object.defineProperty;var u=(o,t,r)=>t in o?c(o,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[t]=r;var i=(o,t,r)=>u(o,typeof t!="symbol"?t+"":t,r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();class a{constructor(){i(this,"selectors",{root:"[data-js-header]",overlay:"[data-js-header-overlay]",menuButton:"[data-js-header-menu-button]",input:"[data-js-header-input]"});i(this,"stateClasses",{isActive:"is-active",isLock:"is-lock"});i(this,"onMenuButtonClick",()=>{this.menuInputElement.classList.toggle(this.stateClasses.isActive),this.menuButtonElement.classList.toggle(this.stateClasses.isActive),this.overlayElement.classList.toggle(this.stateClasses.isActive),document.documentElement.classList.toggle(this.stateClasses.isLock)});this.rootElement=document.querySelector(this.selectors.root),this.overlayElement=this.rootElement.querySelector(this.selectors.overlay),this.menuButtonElement=this.rootElement.querySelector(this.selectors.menuButton),this.menuInputElement=this.rootElement.querySelector(this.selectors.input),this.bindEvents()}bindEvents(){this.menuButtonElement.addEventListener("click",this.onMenuButtonClick)}}new a;
