(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors~ec8c427e"],{"59f0":function(t,e,s){"use strict";var r=s("02cc"),i={stripTags:!1,ellipsis:"...",decodeEntities:!1,byWords:!1,excludes:"",reserveLastWord:!1,keepWhitespaces:!1},n={setup:function(t,e){switch(typeof t){case"object":e=t;break;case"number":"object"===typeof e?e.length=t:e={length:t}}var s=this.extend(e,i);s.excludes&&(Array.isArray(s.excludes)||(s.excludes=[s.excludes]),s.excludes=s.excludes.join(",")),this.options=s,this.limit=s.length,this.ellipsis=s.ellipsis,this.keepWhitespaces=s.keepWhitespaces,this.reserveLastWord=s.reserveLastWord},extend:function(t,e){for(var s in null==t&&(t={}),e){var r=e[s];null==t[s]&&(t[s]=r)}return t},isBlank:function(t){return" "===t||"\f"===t||"\n"===t||"\r"===t||"\t"===t||"\v"===t||" "===t||"\u2028"===t||"\u2029"===t},truncate:function(t,e){var s=this;this.keepWhitespaces||(t=t.replace(/\s+/g," "));var r,i=this.options.byWords,n=t.length,a=0,l=0,h=i,o=!1;while(a<n)if(o=s.isBlank(t.charAt(a++)),!i||h!==o){if(l===s.limit){if(o){h=o;continue}--a;break}i?o||++l:o&&h||++l,h=o}return this.limit-=l,this.limit?t:(r=i?t.substr(0,a):this.substr(t,a),r===t?e?t:t+this.ellipsis:r+this.ellipsis)},substr:function(t,e){var s=t.substr(0,e);if(!this.reserveLastWord)return s;var r=t.substring(e-1,e+1);if(/\W/.test(r))return s;if(this.reserveLastWord<0){var i=s.replace(/\w+$/,"");if(0!==i.length||s.length!==this.options.length)return i}var n=!0!==this.reserveLastWord&&this.reserveLastWord>0?this.reserveLastWord:10,a=t.substr(e).match(/(\w+)/),l=a?a[1]:"";return s+l.substr(0,n)}};function a(t){return t&&t.contains&&t.html&&t.parseHTML&&!0}var l=function(t,e,s){if(n.setup(e,s),!t||isNaN(n.limit)||n.limit<=0||n.limit===1/0)return t;var i;i=a(t)?t:Object(r["load"])(""+t,{decodeEntities:n.options.decodeEntities});var l=i.root();if(n.options.excludes&&l.find(n.options.excludes).remove(),n.options.stripTags)return n.truncate(l.text());var h=function(t,e){void 0===e&&(e=!0);var s=t.contents(),r=s.length-1;return s.each(function(t){switch(this.type){case"text":if(!n.limit)return void i(this).remove();this.data=n.truncate(i(this).text(),e&&t===r);break;case"tag":if(n.limit)return h(i(this),e&&t===r);i(this).remove();break;default:return i(this).remove()}})};return h(l),l.html()};l.setup=function(t){return void 0===t&&(t={}),Object.assign(i,t)},e["a"]=l},"7d72":function(t,e,s){"use strict";var r=s("8707").Buffer,i=r.isEncoding||function(t){switch(t=""+t,t&&t.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0;default:return!1}};function n(t){if(!t)return"utf8";var e;while(1)switch(t){case"utf8":case"utf-8":return"utf8";case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return"utf16le";case"latin1":case"binary":return"latin1";case"base64":case"ascii":case"hex":return t;default:if(e)return;t=(""+t).toLowerCase(),e=!0}}function a(t){var e=n(t);if("string"!==typeof e&&(r.isEncoding===i||!i(t)))throw new Error("Unknown encoding: "+t);return e||t}function l(t){var e;switch(this.encoding=a(t),this.encoding){case"utf16le":this.text=g,this.end=p,e=4;break;case"utf8":this.fillLast=c,e=4;break;case"base64":this.text=v,this.end=b,e=3;break;default:return this.write=w,void(this.end=m)}this.lastNeed=0,this.lastTotal=0,this.lastChar=r.allocUnsafe(e)}function h(t){return t<=127?0:t>>5===6?2:t>>4===14?3:t>>3===30?4:t>>6===2?-1:-2}function o(t,e,s){var r=e.length-1;if(r<s)return 0;var i=h(e[r]);return i>=0?(i>0&&(t.lastNeed=i-1),i):--r<s||-2===i?0:(i=h(e[r]),i>=0?(i>0&&(t.lastNeed=i-2),i):--r<s||-2===i?0:(i=h(e[r]),i>=0?(i>0&&(2===i?i=0:t.lastNeed=i-3),i):0))}function u(t,e,s){if(128!==(192&e[0]))return t.lastNeed=0,"�";if(t.lastNeed>1&&e.length>1){if(128!==(192&e[1]))return t.lastNeed=1,"�";if(t.lastNeed>2&&e.length>2&&128!==(192&e[2]))return t.lastNeed=2,"�"}}function c(t){var e=this.lastTotal-this.lastNeed,s=u(this,t,e);return void 0!==s?s:this.lastNeed<=t.length?(t.copy(this.lastChar,e,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal)):(t.copy(this.lastChar,e,0,t.length),void(this.lastNeed-=t.length))}function f(t,e){var s=o(this,t,e);if(!this.lastNeed)return t.toString("utf8",e);this.lastTotal=s;var r=t.length-(s-this.lastNeed);return t.copy(this.lastChar,0,r),t.toString("utf8",e,r)}function d(t){var e=t&&t.length?this.write(t):"";return this.lastNeed?e+"�":e}function g(t,e){if((t.length-e)%2===0){var s=t.toString("utf16le",e);if(s){var r=s.charCodeAt(s.length-1);if(r>=55296&&r<=56319)return this.lastNeed=2,this.lastTotal=4,this.lastChar[0]=t[t.length-2],this.lastChar[1]=t[t.length-1],s.slice(0,-1)}return s}return this.lastNeed=1,this.lastTotal=2,this.lastChar[0]=t[t.length-1],t.toString("utf16le",e,t.length-1)}function p(t){var e=t&&t.length?this.write(t):"";if(this.lastNeed){var s=this.lastTotal-this.lastNeed;return e+this.lastChar.toString("utf16le",0,s)}return e}function v(t,e){var s=(t.length-e)%3;return 0===s?t.toString("base64",e):(this.lastNeed=3-s,this.lastTotal=3,1===s?this.lastChar[0]=t[t.length-1]:(this.lastChar[0]=t[t.length-2],this.lastChar[1]=t[t.length-1]),t.toString("base64",e,t.length-s))}function b(t){var e=t&&t.length?this.write(t):"";return this.lastNeed?e+this.lastChar.toString("base64",0,3-this.lastNeed):e}function w(t){return t.toString(this.encoding)}function m(t){return t&&t.length?this.write(t):""}e.StringDecoder=l,l.prototype.write=function(t){if(0===t.length)return"";var e,s;if(this.lastNeed){if(e=this.fillLast(t),void 0===e)return"";s=this.lastNeed,this.lastNeed=0}else s=0;return s<t.length?e?e+this.text(t,s):this.text(t,s):e||""},l.prototype.end=d,l.prototype.text=f,l.prototype.fillLast=function(t){if(this.lastNeed<=t.length)return t.copy(this.lastChar,this.lastTotal-this.lastNeed,0,this.lastNeed),this.lastChar.toString(this.encoding,0,this.lastTotal);t.copy(this.lastChar,this.lastTotal-this.lastNeed,0,t.length),this.lastNeed-=t.length}},8707:function(t,e,s){var r=s("b639"),i=r.Buffer;function n(t,e){for(var s in t)e[s]=t[s]}function a(t,e,s){return i(t,e,s)}i.from&&i.alloc&&i.allocUnsafe&&i.allocUnsafeSlow?t.exports=r:(n(r,e),e.Buffer=a),n(i,a),a.from=function(t,e,s){if("number"===typeof t)throw new TypeError("Argument must not be a number");return i(t,e,s)},a.alloc=function(t,e,s){if("number"!==typeof t)throw new TypeError("Argument must be a number");var r=i(t);return void 0!==e?"string"===typeof s?r.fill(e,s):r.fill(e):r.fill(0),r},a.allocUnsafe=function(t){if("number"!==typeof t)throw new TypeError("Argument must be a number");return i(t)},a.allocUnsafeSlow=function(t){if("number"!==typeof t)throw new TypeError("Argument must be a number");return r.SlowBuffer(t)}}}]);
//# sourceMappingURL=chunk-vendors~ec8c427e.38577846.js.map