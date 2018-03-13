// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://app.hubspot.com/sales/4243471/company/686699994/*
// ==/UserScript==

(function() {
    'use strict';

    var appendStyle = function(s) {
      var head = document.getElementsByTagName('head')[0];
      var style = document.createElement('style');
      style.type = 'text/css';
      style.innerHTML = s;
      head.appendChild(style);
    };

    var style = '.onboarding-peek-timeline{ position: fixed; z-index: 100000; left: 0; top: 0; right: 0; bottom: 0; background: #fff; overflow: auto; }';
    style += '.timeline-month h2{ margin-top: 0 !important; margin-left: 18px; line-height: 30px; font-size: 16px; }';
    style += '.timeline-month button{ display: none; }';
    style += '.onboarding-peek-timeline .col-xs-11{ flex: 0 0 100%; max-width: 100%; }';
    style += '.uiConnectedStep-vertical-line{ display: none; }';
    style += '.uiConnectedStep-vertical-item.timeline-month-container{ flex: 100%; width: 100%; }';
    style += '.p-y-2+.timeline-card-section-bottom-border{ display: none; }';
    style += '.timeline-card-section-bottom-border+.display-block{ display: none !important; }';
    style += '.timeline-card-section-bottom-border{ padding: 0 !important; }';
    style += '.timeline-card-section-bottom-border .UIColumn-content{ display: none !important; }';
    style += '.timeline-card-section-bottom-border .UIColumn-spreads >span{ padding: 0 !important; }';
    style += '.timeline-card-section-bottom-border .UIColumn-spreads .private-truncated-string__inner{ font-size: 26px; background: #f1f1f1; }';
    style += '.timeline-month .timeline-card-section-maybe-bottom-border{ display: none; }';
    style += '.timeline-card-section-maybe-bottom-border .UIColumn-content{ display: none !important; }';
    style += '.timeline-body-content{  font-size: 36px; line-height: 40px; }';
    style += '.uiConnectedStep-vertical-item{ margin-bottom: 0 !important; }';
    appendStyle(style);
})();
