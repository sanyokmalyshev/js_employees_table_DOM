parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){return a(e)||r(e)||t(e)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function t(e,n){if(e){if("string"==typeof e)return o(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?o(e,n):void 0}}function r(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function a(e){if(Array.isArray(e))return o(e)}function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var i=document.querySelector("thead tr"),c=document.querySelector("tbody"),l=!0;i.addEventListener("click",function(n){var t=n.target.cellIndex,r=document.querySelectorAll("tbody tr"),a=e(r).map(function(e){return e.cloneNode(!0)});a.sort(function(e,n){var r=e.querySelector("td:nth-child(".concat(t+1)).innerText,a=n.querySelector("td:nth-child(".concat(t+1)).innerText;return r.startsWith("$")||a.startsWith("$")?(r=r.replace(/[^0-9]/g,""))-(a=a.replace(/[^0-9]/g,"")):r.localeCompare(a)}),l||(a=a.reverse()),l=!l,r.forEach(function(e,n){e.innerHTML=a[n].innerHTML})}),c.addEventListener("click",function(e){var n=document.querySelector(".active");n&&n.classList.toggle("active"),e.target.closest("tr").classList.toggle("active")});var u=document.createElement("form");u.classList.add("new-employee-form"),u.innerHTML='\n  <label>Name: <input name="name" type="text" data-qa="name" required></label>\n  <label>Position:\n    <input name="position" type="text" data-qa="position" required>\n  </label>\n  <label>Office:\n    <select name="office" data-qa="office" required>\n      <option value="Tokyo">Tokyo</option>\n      <option value="Singapore">Singapore</option>\n      <option value="London">London</option>\n      <option value="New York">New York</option>\n      <option value="Edinburgh">Edinburgh</option>\n      <option value="San Francisco">San Francisco</option>\n    </select>\n  </label>\n  <label>Age: <input name="age" type="number" data-qa="age" required></label>\n  <label>Salary:\n    <input name="salary" type="number" data-qa="salary" required>\n  </label>\n  <button type="Submit">Save to table</button>\n',document.body.append(u);var d=document.querySelectorAll("input");d.forEach(function(e){e.addEventListener("invalid",function(e){e.preventDefault(),s("Error","Some inputs are incorrect","error")})}),u.addEventListener("submit",function(e){e.preventDefault();var n=new FormData(u),t=Object.fromEntries(n.entries()),r=new Intl.NumberFormat("en-US");if(t.salary="$"+r.format(t.salary),t.name.length<4||t.position.length<4||t.age<18||t.age>90)s("Error","Some inputs are incorrect","error");else{s("Success","Data added to the table","success");var a=document.createElement("tr");a.innerHTML="\n    <td>".concat(t.name,"</td>\n    <td>").concat(t.position,"</td>\n    <td>").concat(t.office,"</td>\n    <td>").concat(t.age,"</td>\n    <td>").concat(t.salary,"</td>\n  "),c.append(a)}});var s=function(e,n,t){var r=document.createElement("div");r.className="notification ".concat(t),r.dataset.qa="notification",r.innerHTML="\n    <h2 class='title'>".concat(e,"</h2>\n    <p>").concat(n,"</p>\n  "),document.body.append(r),setTimeout(function(){document.body.removeChild(r)},2e3)};c.addEventListener("dblclick",function(e){var n=e.target,t=n.cellIndex,r=n.innerText,a=document.createElement("input");function o(){var e=a.value;if((0===t||1===t||2===t)&&e.length<4)return s("Error","Name length should be more than 4 symbols","error"),void(n.innerHTML=r);if(3===t&&(e=+e,!Number.isFinite(e)||e<18||e>90))return s("Error","Age should be number and more 18 and less 90","error"),void(n.innerHTML=r);if(4===t){if(e=+e,!Number.isFinite(e))return s("Error","Salary should be a number","error"),void(n.innerHTML=r);e="$"+new Intl.NumberFormat("en-US").format(e)}a.value.length?(s("Success","Data added to the table","success"),n.innerHTML=e):n.innerHTML=r}a.value=r,a.classList.add("cell-input"),a.addEventListener("blur",o),a.addEventListener("keypress",function(e){"Enter"===e.key&&(a.removeEventListener("blur",o),o())}),n.innerHTML="",n.appendChild(a),a.focus()});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.ffe5f9cc.js.map