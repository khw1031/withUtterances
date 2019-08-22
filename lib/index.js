"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
function withUtterances(WrappedComponent, repo, theme, term, label) {
    if (theme === void 0) { theme = 'github-light'; }
    if (term === void 0) { term = 'pathname'; }
    return (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.withUtterancesContainer = React.createRef();
            _this.injectScript = function () {
                var script = document.createElement('script');
                script.src = 'https://utteranc.es/client.js';
                script.async = true;
                script.setAttribute('repo', repo);
                script.setAttribute('theme', theme);
                script.setAttribute('issue-term', term);
                if (label)
                    script.setAttribute('label', label);
                _this.withUtterancesContainer.current.appendChild(script);
            };
            _this.injectPrefetch = function () {
                document.head.insertAdjacentHTML('beforeend', '<link rel="prefetch" href="https://utteranc.es/client.js" />');
            };
            _this.injectPreload = function () {
                document.head.insertAdjacentHTML('beforeend', '<link rel="preload" href="https://utteranc.es/client.js" as="script" />');
            };
            _this.initUtterances = function () {
                _this.injectPrefetch();
                _this.injectPreload();
                _this.injectScript();
            };
            return _this;
        }
        class_1.prototype.componentDidMount = function () {
            this.initUtterances();
        };
        class_1.prototype.render = function () {
            return (React.createElement("div", { ref: this.withUtterancesContainer },
                React.createElement(WrappedComponent, __assign({}, this.props))));
        };
        return class_1;
    }(React.Component));
}
exports.default = withUtterances;
//# sourceMappingURL=index.js.map