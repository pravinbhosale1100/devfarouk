"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./datas/data.ts":
/*!***********************!*\
  !*** ./datas/data.ts ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   companies: function() { return /* binding */ companies; },\n/* harmony export */   companiesInfo: function() { return /* binding */ companiesInfo; },\n/* harmony export */   sections: function() { return /* binding */ sections; },\n/* harmony export */   socialLinks: function() { return /* binding */ socialLinks; },\n/* harmony export */   technologies: function() { return /* binding */ technologies; }\n/* harmony export */ });\nconst socialLinks = [\n    {\n        name: \"Github\",\n        link: \"https://github.com/pravinbhosale1100\",\n        simpleIcon: \"https://cdn.simpleicons.org/github\"\n    },\n    {\n        name: \"LinkedIn\",\n        link: \"https://in.linkedin.com/in/pravin-bhosale-232385250\",\n        simpleIcon: \"https://cdn.simpleicons.org/linkedin\"\n    },\n    {\n        name: \"X\",\n        link: \"https://x.com\",\n        simpleIcon: \"https://cdn.simpleicons.org/x\"\n    },\n    {\n        name: \"Instagram\",\n        link: \"https://www.instagram.com\",\n        simpleIcon: \"https://cdn.simpleicons.org/instagram\"\n    }\n];\nconst technologies = [\n    {\n        name: \"NextJs\",\n        iconLink: \"https://cdn.simpleicons.org/nextdotjs\"\n    },\n    {\n        name: \"React\",\n        iconLink: \"https://cdn.simpleicons.org/react\"\n    },\n    {\n        name: \"TailwindCss\",\n        iconLink: \"https://cdn.simpleicons.org/tailwindcss\"\n    },\n    {\n        name: \"Framer Motion\",\n        iconLink: \"https://cdn.simpleicons.org/framer\"\n    },\n    {\n        name: \"Sass\",\n        iconLink: \"https://cdn.simpleicons.org/sass\"\n    },\n    {\n        name: \"Git\",\n        iconLink: \"https://cdn.simpleicons.org/git\"\n    },\n    {\n        name: \"Chakra UI\",\n        iconLink: \"https://cdn.simpleicons.org/chakraui\"\n    },\n    {\n        name: \"Shadcn/ui\",\n        iconLink: \"https://cdn.simpleicons.org/shadcnui\"\n    }\n];\nconst sections = [\n    {\n        idRoute: \"#about\",\n        name: \"About\"\n    },\n    {\n        idRoute: \"#experience\",\n        name: \"Experience\"\n    },\n    {\n        idRoute: \"#works\",\n        name: \"Works\"\n    },\n    {\n        idRoute: \"#contact\",\n        name: \"Contact\"\n    }\n];\nconst companies = [\n    \"Pathpalz\",\n    \"Berrystamp\",\n    \"Busineess Prompt\",\n    \"Deep Focus\",\n    \"JustDo Startup\"\n];\nconst companiesInfo = [\n    {\n        title: \"Asp Dot Net Devloper\",\n        company: \"Aloha Technology\",\n        location: \"Pune, India\",\n        duration: \"February 2023 - September 2024\",\n        roles: [\n            \"Implemented real-time tracking features for users to locate nearby commuters and accurately estimate arrival times, leveraging React tools and Tailwind CSS for enhanced styling\",\n            \"Developed a ridesharing progressive web application using TypeScript and React, with seamless backend integration of geocoordinate data\",\n            \"Designed a user-friendly and accessible frontend, prioritizing smooth navigation and efficient API consumption\"\n        ]\n    },\n    , \n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2RhdGFzL2RhdGEudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBTyxNQUFNQSxjQUFjO0lBQ3pCO1FBQ0VDLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxZQUFZO0lBQ2Q7SUFDQTtRQUNFRixNQUFNO1FBQ05DLE1BQU07UUFDTkMsWUFBWTtJQUNkO0lBQ0E7UUFDRUYsTUFBTTtRQUNOQyxNQUFNO1FBQ05DLFlBQVk7SUFDZDtJQUVBO1FBQ0VGLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxZQUFZO0lBQ2Q7Q0FDRCxDQUFDO0FBRUssTUFBTUMsZUFBZTtJQUMxQjtRQUNFSCxNQUFNO1FBQ05JLFVBQVU7SUFDWjtJQUNBO1FBQ0VKLE1BQU07UUFDTkksVUFBVTtJQUNaO0lBQ0E7UUFDRUosTUFBTTtRQUNOSSxVQUFVO0lBQ1o7SUFDQTtRQUNFSixNQUFNO1FBQ05JLFVBQVU7SUFDWjtJQUNBO1FBQ0VKLE1BQU07UUFDTkksVUFBVTtJQUNaO0lBQ0E7UUFDRUosTUFBTTtRQUNOSSxVQUFVO0lBQ1o7SUFDQTtRQUNFSixNQUFNO1FBQ05JLFVBQVU7SUFDWjtJQUNBO1FBQ0VKLE1BQU07UUFDTkksVUFBVTtJQUNaO0NBQ0QsQ0FBQztBQUVLLE1BQU1DLFdBQVc7SUFDdEI7UUFBRUMsU0FBUztRQUFVTixNQUFNO0lBQVE7SUFDbkM7UUFBRU0sU0FBUztRQUFlTixNQUFNO0lBQWE7SUFDN0M7UUFBRU0sU0FBUztRQUFVTixNQUFNO0lBQVE7SUFDbkM7UUFBRU0sU0FBUztRQUFZTixNQUFNO0lBQVU7Q0FDeEMsQ0FBQztBQUVLLE1BQU1PLFlBQVk7SUFDdkI7SUFDQTtJQUNBO0lBQ0E7SUFDQTtDQUNELENBQUM7QUFFSyxNQUFNQyxnQkFBZ0I7SUFDM0I7UUFDRUMsT0FBTztRQUNQQyxTQUFTO1FBQ1RDLFVBQVU7UUFDVkMsVUFBVTtRQUNWQyxPQUFPO1lBQ0w7WUFDQTtZQUNBO1NBQ0Q7SUFDSDs7Q0F1SkQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9kYXRhcy9kYXRhLnRzPzM5ZmMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHNvY2lhbExpbmtzID0gW1xyXG4gIHtcclxuICAgIG5hbWU6IFwiR2l0aHViXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9wcmF2aW5iaG9zYWxlMTEwMFwiLFxyXG4gICAgc2ltcGxlSWNvbjogXCJodHRwczovL2Nkbi5zaW1wbGVpY29ucy5vcmcvZ2l0aHViXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkxpbmtlZEluXCIsXHJcbiAgICBsaW5rOiBcImh0dHBzOi8vaW4ubGlua2VkaW4uY29tL2luL3ByYXZpbi1iaG9zYWxlLTIzMjM4NTI1MFwiLFxyXG4gICAgc2ltcGxlSWNvbjogXCJodHRwczovL2Nkbi5zaW1wbGVpY29ucy5vcmcvbGlua2VkaW5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiWFwiLFxyXG4gICAgbGluazogXCJodHRwczovL3guY29tXCIsXHJcbiAgICBzaW1wbGVJY29uOiBcImh0dHBzOi8vY2RuLnNpbXBsZWljb25zLm9yZy94XCIsXHJcbiAgfSxcclxuXHJcbiAge1xyXG4gICAgbmFtZTogXCJJbnN0YWdyYW1cIixcclxuICAgIGxpbms6IFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbVwiLFxyXG4gICAgc2ltcGxlSWNvbjogXCJodHRwczovL2Nkbi5zaW1wbGVpY29ucy5vcmcvaW5zdGFncmFtXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCB0ZWNobm9sb2dpZXMgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogXCJOZXh0SnNcIixcclxuICAgIGljb25MaW5rOiBcImh0dHBzOi8vY2RuLnNpbXBsZWljb25zLm9yZy9uZXh0ZG90anNcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiUmVhY3RcIixcclxuICAgIGljb25MaW5rOiBcImh0dHBzOi8vY2RuLnNpbXBsZWljb25zLm9yZy9yZWFjdFwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJUYWlsd2luZENzc1wiLFxyXG4gICAgaWNvbkxpbms6IFwiaHR0cHM6Ly9jZG4uc2ltcGxlaWNvbnMub3JnL3RhaWx3aW5kY3NzXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkZyYW1lciBNb3Rpb25cIixcclxuICAgIGljb25MaW5rOiBcImh0dHBzOi8vY2RuLnNpbXBsZWljb25zLm9yZy9mcmFtZXJcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiU2Fzc1wiLFxyXG4gICAgaWNvbkxpbms6IFwiaHR0cHM6Ly9jZG4uc2ltcGxlaWNvbnMub3JnL3Nhc3NcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiR2l0XCIsXHJcbiAgICBpY29uTGluazogXCJodHRwczovL2Nkbi5zaW1wbGVpY29ucy5vcmcvZ2l0XCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkNoYWtyYSBVSVwiLFxyXG4gICAgaWNvbkxpbms6IFwiaHR0cHM6Ly9jZG4uc2ltcGxlaWNvbnMub3JnL2NoYWtyYXVpXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlNoYWRjbi91aVwiLFxyXG4gICAgaWNvbkxpbms6IFwiaHR0cHM6Ly9jZG4uc2ltcGxlaWNvbnMub3JnL3NoYWRjbnVpXCIsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZWN0aW9ucyA9IFtcclxuICB7IGlkUm91dGU6IFwiI2Fib3V0XCIsIG5hbWU6IFwiQWJvdXRcIiB9LFxyXG4gIHsgaWRSb3V0ZTogXCIjZXhwZXJpZW5jZVwiLCBuYW1lOiBcIkV4cGVyaWVuY2VcIiB9LFxyXG4gIHsgaWRSb3V0ZTogXCIjd29ya3NcIiwgbmFtZTogXCJXb3Jrc1wiIH0sXHJcbiAgeyBpZFJvdXRlOiBcIiNjb250YWN0XCIsIG5hbWU6IFwiQ29udGFjdFwiIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgY29tcGFuaWVzID0gW1xyXG4gIFwiUGF0aHBhbHpcIixcclxuICBcIkJlcnJ5c3RhbXBcIixcclxuICBcIkJ1c2luZWVzcyBQcm9tcHRcIixcclxuICBcIkRlZXAgRm9jdXNcIixcclxuICBcIkp1c3REbyBTdGFydHVwXCIsXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgY29tcGFuaWVzSW5mbyA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogXCJBc3AgRG90IE5ldCBEZXZsb3BlclwiLFxyXG4gICAgY29tcGFueTogXCJBbG9oYSBUZWNobm9sb2d5XCIsXHJcbiAgICBsb2NhdGlvbjogXCJQdW5lLCBJbmRpYVwiLFxyXG4gICAgZHVyYXRpb246IFwiRmVicnVhcnkgMjAyMyAtIFNlcHRlbWJlciAyMDI0XCIsXHJcbiAgICByb2xlczogW1xyXG4gICAgICBcIkltcGxlbWVudGVkIHJlYWwtdGltZSB0cmFja2luZyBmZWF0dXJlcyBmb3IgdXNlcnMgdG8gbG9jYXRlIG5lYXJieSBjb21tdXRlcnMgYW5kIGFjY3VyYXRlbHkgZXN0aW1hdGUgYXJyaXZhbCB0aW1lcywgbGV2ZXJhZ2luZyBSZWFjdCB0b29scyBhbmQgVGFpbHdpbmQgQ1NTIGZvciBlbmhhbmNlZCBzdHlsaW5nXCIsXHJcbiAgICAgIFwiRGV2ZWxvcGVkIGEgcmlkZXNoYXJpbmcgcHJvZ3Jlc3NpdmUgd2ViIGFwcGxpY2F0aW9uIHVzaW5nIFR5cGVTY3JpcHQgYW5kIFJlYWN0LCB3aXRoIHNlYW1sZXNzIGJhY2tlbmQgaW50ZWdyYXRpb24gb2YgZ2VvY29vcmRpbmF0ZSBkYXRhXCIsXHJcbiAgICAgIFwiRGVzaWduZWQgYSB1c2VyLWZyaWVuZGx5IGFuZCBhY2Nlc3NpYmxlIGZyb250ZW5kLCBwcmlvcml0aXppbmcgc21vb3RoIG5hdmlnYXRpb24gYW5kIGVmZmljaWVudCBBUEkgY29uc3VtcHRpb25cIixcclxuICAgIF0sXHJcbiAgfSxcclxuLy8gICB7XHJcbi8vICAgICB0aXRsZTogXCJGcm9udGVuZCBFbmdpbmVlclwiLFxyXG4vLyAgICAgY29tcGFueTogXCJCZXJyeXN0YW1wXCIsXHJcbi8vICAgICBsb2NhdGlvbjogXCJMYWdvcywgTmlnZXJpYVwiLFxyXG4vLyAgICAgZHVyYXRpb246IFwiT2N0b2JlciAyMDIzIC0gRmVicnVhcnkgMjAyNFwiLFxyXG4vLyAgICAgcm9sZXM6IFtcclxuLy8gICAgICAgXCJDb250cmlidXRlZCBzaWduaWZpY2FudGx5IHRvIHRoZSBwcm9ncmVzcyBvZiB0aGUgc3RhcnR1cCB0ZWNoIGNvbXBhbnkgYWltaW5nIHRvIGRlY2VudHJhbGl6ZSB0aGUgcHJpbnQtb24tZGVtYW5kIHNwYWNlKEJlcnJ5c3RhbXApXCIsXHJcbi8vICAgICAgIFwiU3BlY2lhbGl6ZWQgaW4gQVBJIGludGVncmF0aW9uIGZvciB0aGUgYWRtaW4gZGFzaGJvYXJkLCBjb2xsYWJvcmF0aW5nIHdpdGggQmFja2VuZCBkZXZlbG9wZXJzLCBEZXZPcHMsIGFuZCBVSS9VWCBkZXNpZ25lcnNcIixcclxuLy8gICAgICAgXCJQcm9maWNpZW50bHkgdXRpbGl6ZWQgVHlwZVNjcmlwdCBhbmQgUmVhY3QgdG8gZW5oYW5jZSB0aGUgZnVuY3Rpb25hbGl0eSBhbmQgdXNlciBleHBlcmllbmNlIG9mIHRoZSBwcm9qZWN0XCIsXHJcbi8vICAgICBdLFxyXG4vLyAgIH0sXHJcbi8vICAge1xyXG4vLyAgICAgdGl0bGU6IFwiRnJvbnRlbmQgRW5naW5lZXJcIixcclxuLy8gICAgIGNvbXBhbnk6IFwiQnVzaW5lc3MgUHJvbXB0IFByb1wiLFxyXG4vLyAgICAgbG9jYXRpb246IFwiUmVtb3RlXCIsXHJcbi8vICAgICBkdXJhdGlvbjogXCIgTm92ZW1iZXIgMjAyMyAtIERlY2VtYmVyIDIwMjNcIixcclxuLy8gICAgIHJvbGVzOiBbXHJcbi8vICAgICAgIFwiVXRpbGl6ZWQgYW5kIGNvbGxhYm9yYXRlZCBjbG9zZWx5IHdpdGggYSBwYXJ0bmVyIHByb2ZpY2llbnQgaW4gU09GVFIuSU8gYW5kIEFpcnRhYmxlIHRvIGNyZWF0ZSBhIHVzZXItZnJpZW5kbHkgZnJvbnQtZW5kIGludGVyZmFjZSBmb3IgZGF0YSBlbnRyeSBhbmQgcmV0cmlldmFsIGFuZCBhbHNvIGVuYWJsaW5nIGV4dGVybmFsIHVzZXJzIHRvIHNlYW1sZXNzbHkgc2VhcmNoIHRoZSBBaXJ0YWJsZSBkYXRhYmFzZVwiLFxyXG4vLyAgICAgICBcIkVuZ2luZWVyZWQgYW4gaW50dWl0aXZlIGRhdGEgZW50cnkgaW50ZXJmYWNlIHdpdGhpbiBBaXJ0YWJsZSBmb3IgZmV0Y2hpbmcgdGhlIG9wdGlvbnMgZm9yIGVhY2ggZGF0YSBmaWVsZCBhbmQgcG9zdGluZyBkYXRhIHVwb24gZm9ybSBzdWJtaXNzaW9uXCIsXHJcbi8vICAgICBdLFxyXG4vLyAgIH0sXHJcbi8vICAge1xyXG4vLyAgICAgdGl0bGU6IFwiRnJvbnRlbmQgRGV2ZWxvcGVyXCIsXHJcbi8vICAgICBjb21wYW55OiBcIkRlZXBGb2N1c1wiLFxyXG4vLyAgICAgbG9jYXRpb246IFwiUmVtb3RlXCIsXHJcbi8vICAgICBkdXJhdGlvbjogXCJTZXB0ZW1iZXIgMjAyM1wiLFxyXG4vLyAgICAgcm9sZXM6IFtcclxuLy8gICAgICAgXCJFbmhhbmNlZCBEZWVwRm9jdXMgV2l4IFdlYnNpdGUgYnkgaW50ZWdyYXRpbmcgZGVzaWduIGVsZW1lbnRzIHdpdGggY29kZSwgZm9jdXNpbmcgb24gdGhlIOKAnG91ciB0ZWFt4oCdIHNlY3Rpb24gYW5kIGltcGxlbWVudGluZyBhIGNhcHRpdmF0aW5nIGxvZ28gYW5pbWF0aW9uIHdpdGggdGhlIHVzZSBvZiBKYXZhU2NyaXB0XCIsXHJcbi8vICAgICAgIFwiQ29udHJpYnV0ZWQgdG8gdGhlIHZpc3VhbCBhcHBlYWwgYW5kIGZ1bmN0aW9uYWxpdHksIGNvbGxhYm9yYXRpbmcgY2xvc2VseSB3aXRoIHRoZSB0ZWFtIHRvIGVsZXZhdGUgdGhlIGJyYW5k4oCZcyBvbmxpbmUgcHJlc2VuY2VcIixcclxuLy8gICAgICAgLFxyXG4vLyAgICAgXSxcclxuLy8gICB9LFxyXG4vLyAgIHtcclxuLy8gICAgIHRpdGxlOiBcIkZyb250ZW5kIERldmVsb3BlclwiLFxyXG4vLyAgICAgY29tcGFueTogXCJKdXN0RG8tU3RhcnR1cCAoSkRTKVwiLFxyXG4vLyAgICAgbG9jYXRpb246IFwiTGFnb3MgTmlnZXJpYVwiLFxyXG4vLyAgICAgZHVyYXRpb246IFwiRmVicnVhcnkgMjAyMyDigJMgSnVseSAyMDIzXCIsXHJcbi8vICAgICByb2xlczogW1xyXG4vLyAgICAgICBcIkNvbnRyaWJ1dGVkIHRvIGEgY29tbXVuaXR5IG9mIGRldmVsb3BlcnMgYW5kIHByb2R1Y3QgZGVzaWduZXJzLCBpbiBkZXZlbG9waW5nIGEgd2ViQXBwKEUtdmVudCkuIFRoZSAoRS12ZW50KSB3ZWJBcHAgaXMgZGVzaWduZWQgYW5kIGRldmVsb3BlZCB3aXRoIFJlYWN0LCBKYXZhU2NyaXB0LCBWaXRlLCBhbmQgY3V0dGluZyBlZGdlIFJlYWN0IDE4IGZlYXR1cmVzIHRvIHByb3ZpZGUgYSBjZW50cmFsaXplZCBwbGF0Zm9ybSBmb3IgZXZlbnQgcGxhbm5lcnMsIG9yZ2FuaXplcnMgYW5kIGF0dGVuZGVlcywgdG8gY29vcmRpbmF0ZSBhbmQgbWFuYWdlIHZhcmlvdXMgYXNwZWN0cyBvZiBldmVudHMgc3VjaCBhcyBzY2hlZHVsaW5nLCB0aWNrZXRpbmcsIHJlZ2lzdHJhdGlvbiwgbWFya2V0aW5nIGFuZCBjb21tdW5pY2F0aW9uXCIsXHJcbi8vICAgICAgICxcclxuLy8gICAgIF0sXHJcbi8vICAgfSxcclxuLy8gXTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IFtcclxuLy8gICB7XHJcbi8vICAgICBuYW1lOiBcIkJlcnJ5U3RhbXBcIixcclxuLy8gICAgIHR5cGU6IFwiRmVhdHVyZWQgUHJvamVjdFwiLFxyXG4vLyAgICAgZGVzY3JpcHRpb246XHJcbi8vICAgICAgIFwiQmVycnlzdGFtcCBpcyByZXZvbHV0aW9uaXppbmcgdGhlIHByaW50LW9uLWRlbWFuZCBpbmR1c3RyeSB3aXRoIGl0cyBpbm5vdmF0aXZlIGFwcHJvYWNoIHRvIGN1c3RvbWl6YXRpb24gYW5kIHByaW50aW5nIHNlcnZpY2VzLlwiLFxyXG4vLyAgICAgaW1hZ2U6IFwiL2JlcnJ5c3RhbXAud2VicFwiLFxyXG4vLyAgICAgbGl2ZUxpbms6IFwiaHR0cHM6Ly9iZXJyeXN0YW1wLmNvbS9cIixcclxuLy8gICAgIHN0YWNrczogW1wiVHlwZVNjcmlwdFwiLCBcIlJlYWN0XCIsIFwiVGFpbHdpbmRDc3NcIiwgXCJSZWR1eFwiXSxcclxuLy8gICB9LFxyXG4vLyAgIHtcclxuLy8gICAgIG5hbWU6IFwiQkZOXCIsXHJcbi8vICAgICB0eXBlOiBcIkZlYXR1cmVkIFByb2plY3RcIixcclxuLy8gICAgIGRlc2NyaXB0aW9uOlxyXG4vLyAgICAgICBcIkRldmVsb3BlZCBhIG1pY3Jvc2l0ZSBmb3IgdGhlIEJGTiBpbml0aWF0aXZlLCBjb2xsYWJvcmF0aW5nIGNsb3NlbHkgd2l0aCBjb250ZW50IHdyaXRlcnMgdG8gY3JlYXRlIGEgdmlzdWFsbHkgYXBwZWFsaW5nIGFuZCBpbnR1aXRpdmUgcGxhdGZvcm0uIFRoZSBzaXRlIGlzIGRlc2lnbmVkIHdpdGggYSBmb2N1cyBvbiB1c2VyIGV4cGVyaWVuY2UsIHV0aWxpemluZyBhIGNsZWFuIGFuZCBtb2Rlcm4gbGF5b3V0LlwiLFxyXG4vLyAgICAgaW1hZ2U6IFwiL2Jmbi53ZWJwXCIsXHJcbi8vICAgICBsaXZlTGluazogXCJodHRwczovL3d3dy5wcm9ncmFtcy1iZm4uY2EvXCIsXHJcbi8vICAgICBzdGFja3M6IFtcIlR5cGVTY3JpcHRcIiwgXCJSZWFjdFwiLCBcIlRhaWx3aW5kQ3NzXCIsIFwiQU9TXCJdLFxyXG4vLyAgIH0sXHJcbi8vICAge1xyXG4vLyAgICAgbmFtZTogXCJHU3dpZnRcIixcclxuLy8gICAgIHR5cGU6IFwiRmVhdHVyZWQgUHJvamVjdFwiLFxyXG4vLyAgICAgZGVzY3JpcHRpb246XHJcbi8vICAgICAgIFwiQSBHd2lmdCB3ZWIgYXBwIGlzIGEgcHJvZ3Jlc3NpdmUgcmlkZXNoYXJpbmcgYXBwbGljYXRpb24gd2l0aCByZWFsLXRpbWUgdHJhY2tpbmcsIHNlYW1sZXNzIGdlb2Nvb3JkaW5hdGUgaW50ZWdyYXRpb24sIGFuZCBhIHVzZXItZnJpZW5kbHkgaW50ZXJmYWNlLCBwcmlvcml0aXppbmcgc21vb3RoIG5hdmlnYXRpb24gYW5kIGVmZmljaWVudCBBUEkgY29uc3VtcHRpb24uXCIsXHJcbi8vICAgICBpbWFnZTogXCIvZ3N3aWZ0LndlYnBcIixcclxuLy8gICAgIGxpdmVMaW5rOiBcImh0dHBzOi8vZ3N3aWZ0LnBhdGhwYWx6LmNvbS9cIixcclxuLy8gICAgIHN0YWNrczogW1wiVHlwZVNjcmlwdFwiLCBcIlJlYWN0XCIsIFwiVGFpbHdpbmRDc3NcIl0sXHJcbi8vICAgfSxcclxuXHJcbi8vICAge1xyXG4vLyAgICAgbmFtZTogXCJEZWVwRm9jdXN0dFwiLFxyXG4vLyAgICAgdHlwZTogXCJGZWF0dXJlZCBQcm9qZWN0XCIsXHJcbi8vICAgICBkZXNjcmlwdGlvbjpcclxuLy8gICAgICAgXCJGb3IgdGhlIERlZXBGb2N1c3R0IHByb2plY3QsIEkgZGV2ZWxvcGVkIGFuZCBpbnRlZ3JhdGVkIGFuaW1hdGlvbnMgYnkgaW5jb3Jwb3JhdGluZyBmdWxsIEhUTUwgY29kZSwgaW5jbHVkaW5nIENTUywgSmF2YVNjcmlwdCwgYW5kIGFkZGl0aW9uYWwgcGFja2FnZXMsIHRvIGNyZWF0ZSBhIGR5bmFtaWMgYW5kIGVuZ2FnaW5nIHVzZXIgZXhwZXJpZW5jZSBvbiB0aGVpciBXaXggcGxhdGZvcm1cIixcclxuLy8gICAgIGltYWdlOiBcIi9kZWVwZm9jdXMud2VicFwiLFxyXG4vLyAgICAgbGl2ZUxpbms6IFwiaHR0cHM6Ly93d3cuZGVlcGZvY3VzdHQuY29tL1wiLFxyXG4vLyAgICAgc3RhY2tzOiBbXCJXaXhcIiwgXCJDc3NcIiwgXCJIdG1sXCIsIFwiR3NhcFwiXSxcclxuLy8gICB9LFxyXG4vLyAgIHtcclxuLy8gICAgIG5hbWU6IFwiSHVudHN0b3JlXCIsXHJcbi8vICAgICB0eXBlOiBcIlBlcnNvbmFsIFByb2plY3RcIixcclxuLy8gICAgIGRlc2NyaXB0aW9uOlxyXG4vLyAgICAgICBcIkh1bnRzdG9yZSBpcyBhbiBlY29tbWVyY2Ugc3RvcmUgdGhhdCBzaG93cyBhIHZhcmlldHkgb2YgZ2VuZGVyIHByb2R1Y3RzLlwiLFxyXG4vLyAgICAgaW1hZ2U6IFwiL2h1bnRzdG9yZS53ZWJwXCIsXHJcbi8vICAgICBsaXZlTGluazogXCJodHRwczovL2h1bnRzdG9yZS52ZXJjZWwuYXBwL1wiLFxyXG4vLyAgICAgZ2l0aHViTGluazogXCJodHRwczovL2dpdGh1Yi5jb20vRmFyb3VrLWF5by9odW50c3RvcmVcIixcclxuLy8gICAgIHN0YWNrczogW1wiSmF2YVNjcmlwdFwiLCBcIlJlYWN0XCIsIFwiY3NzXCJdLFxyXG4vLyAgIH0sXHJcbi8vICAge1xyXG4vLyAgICAgbmFtZTogXCJEdXBsaWNhdGUgY2hhcmFjdGVyIHJlbW92ZXJcIixcclxuLy8gICAgIHR5cGU6IFwiUGVyc29uYWwgUHJvamVjdFwiLFxyXG4vLyAgICAgZGVzY3JpcHRpb246XHJcbi8vICAgICAgIFwiQSBob3VzZXdhcmUgZnJvbnRlbmQgZW5naW5lZXJpbmcgb2N0ZXJuc2hpcCB0YXNrIHRvIGRldmVsb3AgYSB3ZWJhcHAgZm9yIGRlbGV0aW9uIG9mIGR1cGxpY2F0ZSBjaGFyYWN0ZXJzIG9uIGNsaWNraW5nIG9uIHRoZSBzZWxlY3RlZCBkdXBsaWNhdGVkIGNoYXJhY3RlciBvciB0ZXh0XCIsXHJcbi8vICAgICBpbWFnZTogXCIvZHVwbGljYXRlcmVtb3Zlci53ZWJwXCIsXHJcbi8vICAgICBsaXZlTGluazpcclxuLy8gICAgICAgXCJodHRwczovL2hvdXNld2FyZS1mcm9udGVuZC1lbmdpbmVlcmluZy1vY3Rlcm5zaGlwLWZyay1heW8udmVyY2VsLmFwcC9cIixcclxuLy8gICAgIHN0YWNrczogW1wiSmF2YVNjcmlwdFwiLCBcIlJlYWN0XCIsIFwiY3NzXCJdLFxyXG4vLyAgIH0sXHJcbi8vICAge1xyXG4vLyAgICAgbmFtZTogXCJFLXZlbnRcIixcclxuLy8gICAgIHR5cGU6IFwiRmVhdHVyZWQgUHJvamVjdFwiLFxyXG4vLyAgICAgZGVzY3JpcHRpb246XHJcbi8vICAgICAgIFwiRS12ZW50IGlzIGEgY2VudHJhbGl6ZWQgcGxhdGZvcm0gZm9yIGV2ZW50IHBsYW5uZXJzLCBvcmdhbml6ZXJzIGFuZCBhdHRlbmRlZXMsIHRvIGNvb3JkaW5hdGUgYW5kIG1hbmFnZSB2YXJpb3VzIGFzcGVjdHMgb2YgZXZlbnRzIHN1Y2ggYXMgc2NoZWR1bGluZywgdGlja2V0aW5nLCByZWdpc3RyYXRpb24sIG1hcmtldGluZyBhbmQgY29tbXVuaWNhdGlvblwiLFxyXG4vLyAgICAgaW1hZ2U6IFwiL2UtdmVudC53ZWJwXCIsXHJcbi8vICAgICBzdGFja3M6IFtcIkphdmFTY3JpcHRcIiwgXCJSZWFjdFwiLCBcIlRhaWx3aW5kXCIsIFwiTXVpXCJdLFxyXG4vLyAgIH0sXHJcbi8vICAge1xyXG4vLyAgICAgbmFtZTogXCJNb3ZpZUJveFwiLFxyXG4vLyAgICAgdHlwZTogXCJQZXJzb25hbCBQcm9qZWN0XCIsXHJcbi8vICAgICBkZXNjcmlwdGlvbjpcclxuLy8gICAgICAgXCJBIG1vdmllIGRpc2NvdmVyeSB3ZWIgYXBwbGljYXRpb24gdGhhdCBhbGxvd3MgdXNlcnMgdG8gc2VhcmNoIGZvciBtb3ZpZXMsIHZpZXcgZGV0YWlscyBhYm91dCB0aGVtLCBhbmQgc2F2ZSB0aGVpciBmYXZvcml0ZSBtb3ZpZXMsIGNvbnN1bWluZyBkYXRhIGZyb20gdGhlIFRNREIgQVBJLlwiLFxyXG4vLyAgICAgaW1hZ2U6IFwiL21vdmllYm94LndlYnBcIixcclxuLy8gICAgIGxpdmVMaW5rOiBcImh0dHBzOi8vbW92aWUtYm94LXRtZGIudmVyY2VsLmFwcC9cIixcclxuLy8gICAgIGdpdGh1Ykxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL0Zhcm91ay1heW8vbW92aWUtLWJveFRNREIvdHJlZS9tYXN0ZXJcIixcclxuLy8gICAgIHN0YWNrczogW1wiSmF2YVNjcmlwdFwiLCBcIlJlYWN0XCIsIFwiY3NzXCJdLFxyXG4vLyAgIH0sXHJcbi8vICAge1xyXG4vLyAgICAgbmFtZTogXCJQZW5zbGFiXCIsXHJcbi8vICAgICB0eXBlOiBcIkZlYXR1cmVkIFByb2plY3RcIixcclxuLy8gICAgIGRlc2NyaXB0aW9uOlxyXG4vLyAgICAgICBcIkFuIEVsZWN0cmljYWwgRWxlY3Ryb25pY3MgRW5naW5lZXJpbmcgRGVwYXJ0bWVudGFsIFByb2plY3QgaW4gY29ubmVjdGlvbiB0byBhbiBBcmR1aW5vIFNlbnNvclwiLFxyXG4vLyAgICAgaW1hZ2U6IFwiL3BlbnNsYWIud2VicFwiLFxyXG4vLyAgICAgbGl2ZUxpbms6IFwiaHR0cHM6Ly9wZW5zbGFiLnZlcmNlbC5hcHAvXCIsXHJcbi8vICAgICBnaXRodWJMaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9GYXJvdWstYXlvL3BlbnNsYWJcIixcclxuLy8gICAgIHN0YWNrczogW1wiSmF2YVNjcmlwdFwiLCBcIlJlYWN0XCIsIFwiVGFpbHdpbmRcIl0sXHJcbi8vICAgfSxcclxuLy8gICB7XHJcbi8vICAgICBuYW1lOiBcIllhbGJhemVcIixcclxuLy8gICAgIHR5cGU6IFwiUGVyc29uYWwgUHJvamVjdFwiLFxyXG4vLyAgICAgZGVzY3JpcHRpb246IFwiQSBkZXNpZ25lZCB3ZWJhcHAgbGFuZGluZyBwYWdlXCIsXHJcbi8vICAgICBpbWFnZTogXCIveWFsYmF6ZS53ZWJwXCIsXHJcbi8vICAgICBnaXRodWJMaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9GYXJvdWstYXlvL3lhbGJhemVcIixcclxuLy8gICAgIGxpdmVMaW5rOiBcImh0dHBzOi8veWFsYmF6ZS52ZXJjZWwuYXBwL1wiLFxyXG4vLyAgICAgc3RhY2tzOiBbXCJjc3NcIiwgXCJSZWFjdFwiXSxcclxuLy8gICB9LFxyXG4vLyAgIHtcclxuLy8gICAgIG5hbWU6IFwiRnJrLWF5b1wiLFxyXG4vLyAgICAgdHlwZTogXCJQZXJzb25hbCBQcm9qZWN0XCIsXHJcbi8vICAgICBkZXNjcmlwdGlvbjpcclxuLy8gICAgICAgXCJUaGUgYWltIG9mIHRoZSBwcm9qZWN0IHdhcyB0byBhdHRyYWN0IHRoZSB1c2VycyB3aXRoIHRoZSBVSSwgd2hpY2ggaSBidWlsdCB3aXRoIEhUTUwvQ1NTIGFuZCBKYXZhU2NyaXB0LlwiLFxyXG4vLyAgICAgaW1hZ2U6IFwiL2Zya19heW8ud2VicFwiLFxyXG4vLyAgICAgZ2l0aHViTGluazogXCJodHRwczovL2dpdGh1Yi5jb20vRmFyb3VrLWF5by9GcmtheW8tRmluYW5jZXNpdGVcIixcclxuLy8gICAgIGxpdmVMaW5rOiBcImh0dHBzOi8vZnJrYXlvLWZpbmFuY2VzaXRlLnZlcmNlbC5hcHBcIixcclxuLy8gICAgIHN0YWNrczogW1wiU2Fzcy9zY3NzXCIsIFwiSHRtbFwiLCBcIkphdmFTY3JpcHRcIl0sXHJcbi8vICAgfSxcclxuICAsXHJcbl07XHJcbiJdLCJuYW1lcyI6WyJzb2NpYWxMaW5rcyIsIm5hbWUiLCJsaW5rIiwic2ltcGxlSWNvbiIsInRlY2hub2xvZ2llcyIsImljb25MaW5rIiwic2VjdGlvbnMiLCJpZFJvdXRlIiwiY29tcGFuaWVzIiwiY29tcGFuaWVzSW5mbyIsInRpdGxlIiwiY29tcGFueSIsImxvY2F0aW9uIiwiZHVyYXRpb24iLCJyb2xlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./datas/data.ts\n"));

/***/ })

});