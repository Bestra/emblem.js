'use strict';

var ast_builder = require('./ast-builder');
var preprocessor = require('./preprocessor');

/*jshint newcap: false, laxbreak: true */
var Parser = (function() {
  /*
   * Generated by PEG.js 0.8.0.
   *
   * http://pegjs.majda.cz/
   */

  function peg$subclass(child, parent) {
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
  }

  function SyntaxError(message, expected, found, offset, line, column) {
    this.message  = message;
    this.expected = expected;
    this.found    = found;
    this.offset   = offset;
    this.line     = line;
    this.column   = column;

    this.name     = "SyntaxError";
  }

  peg$subclass(SyntaxError, Error);

  function parse(input) {
    var options = arguments.length > 1 ? arguments[1] : {},

        peg$FAILED = {},

        peg$startRuleFunctions = { _0start: peg$parse_0start },
        peg$startRuleFunction  = peg$parse_0start,

        peg$c0 = peg$FAILED,
        peg$c1 = [],
        peg$c2 = function(name, attrs) {
          attrs = attrs.concat(name.shorthands);

          var ret = {
            name: name.name,
            attrs: attrs
          };
          if (name.modifier) {
            ret.modifier = name.modifier;
          }

          return ret;
        },
        peg$c3 = null,
        peg$c4 = function(attr) { return attr;},
        peg$c5 = void 0,
        peg$c6 = function(attrs) {
          return attrs;
        },
        peg$c7 = "[",
        peg$c8 = { type: "literal", value: "[", description: "\"[\"" },
        peg$c9 = "]",
        peg$c10 = { type: "literal", value: "]", description: "\"]\"" },
        peg$c11 = { type: "other", description: "_0INDENT" },
        peg$c12 = "\uEFEF",
        peg$c13 = { type: "literal", value: "\uEFEF", description: "\"\\uEFEF\"" },
        peg$c14 = function() { return ''; },
        peg$c15 = { type: "other", description: "_0LineEnd" },
        peg$c16 = "\r",
        peg$c17 = { type: "literal", value: "\r", description: "\"\\r\"" },
        peg$c18 = "\uEFFF",
        peg$c19 = { type: "literal", value: "\uEFFF", description: "\"\\uEFFF\"" },
        peg$c20 = "\n",
        peg$c21 = { type: "literal", value: "\n", description: "\"\\n\"" },
        peg$c22 = function() { return false; },
        peg$c23 = function(name, shorthands) {
          return {
            name: name.name,
            modifier: name.modifier,
            shorthands: shorthands
          };
        },
        peg$c24 = "%",
        peg$c25 = { type: "literal", value: "%", description: "\"%\"" },
        peg$c26 = function(tagName) {
          return 'tagName="' + tagName + '"';
        },
        peg$c27 = "#",
        peg$c28 = { type: "literal", value: "#", description: "\"#\"" },
        peg$c29 = function(idName) {
          return 'elementId="' + idName + '"';
        },
        peg$c30 = ".",
        peg$c31 = { type: "literal", value: ".", description: "\".\"" },
        peg$c32 = function(className) {
          return 'class="' + className + '"';
        },
        peg$c33 = /^[A-Za-z0-9\-]/,
        peg$c34 = { type: "class", value: "[A-Za-z0-9\\-]", description: "[A-Za-z0-9\\-]" },
        peg$c35 = function(name, modifier) {
          return {
            name: name,
            modifier: modifier
          };
        },
        peg$c36 = "-",
        peg$c37 = { type: "literal", value: "-", description: "\"-\"" },
        peg$c38 = /^[0-9]/,
        peg$c39 = { type: "class", value: "[0-9]", description: "[0-9]" },
        peg$c40 = "/",
        peg$c41 = { type: "literal", value: "/", description: "\"/\"" },
        peg$c42 = "!",
        peg$c43 = { type: "literal", value: "!", description: "\"!\"" },
        peg$c44 = "?",
        peg$c45 = { type: "literal", value: "?", description: "\"?\"" },
        peg$c46 = /^[A-Za-z0-9]/,
        peg$c47 = { type: "class", value: "[A-Za-z0-9]", description: "[A-Za-z0-9]" },
        peg$c48 = /^[_\/]/,
        peg$c49 = { type: "class", value: "[_\\/]", description: "[_\\/]" },
        peg$c50 = "=",
        peg$c51 = { type: "literal", value: "=", description: "\"=\"" },
        peg$c52 = function(attrName, attrValue) {
          return attrName + '=' + attrValue;
        },
        peg$c53 = function(v) {
          return v;
        },
        peg$c54 = "\"",
        peg$c55 = { type: "literal", value: "\"", description: "\"\\\"\"" },
        peg$c56 = "'",
        peg$c57 = { type: "literal", value: "'", description: "\"'\"" },
        peg$c58 = /^[^'"]/,
        peg$c59 = { type: "class", value: "[^'\"]", description: "[^'\"]" },
        peg$c60 = /^[^()]/,
        peg$c61 = { type: "class", value: "[^()]", description: "[^()]" },
        peg$c62 = function(p) {
          return p;
        },
        peg$c63 = "(",
        peg$c64 = { type: "literal", value: "(", description: "\"(\"" },
        peg$c65 = ")",
        peg$c66 = { type: "literal", value: ")", description: "\")\"" },
        peg$c67 = " ",
        peg$c68 = { type: "literal", value: " ", description: "\" \"" },

        peg$currPos          = 0,
        peg$reportedPos      = 0,
        peg$cachedPos        = 0,
        peg$cachedPosDetails = { line: 1, column: 1, seenCR: false },
        peg$maxFailPos       = 0,
        peg$maxFailExpected  = [],
        peg$silentFails      = 0,

        peg$result;

    if ("startRule" in options) {
      if (!(options.startRule in peg$startRuleFunctions)) {
        throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
      }

      peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
    }

    function text() {
      return input.substring(peg$reportedPos, peg$currPos);
    }

    function offset() {
      return peg$reportedPos;
    }

    function line() {
      return peg$computePosDetails(peg$reportedPos).line;
    }

    function column() {
      return peg$computePosDetails(peg$reportedPos).column;
    }

    function expected(description) {
      throw peg$buildException(
        null,
        [{ type: "other", description: description }],
        peg$reportedPos
      );
    }

    function error(message) {
      throw peg$buildException(message, null, peg$reportedPos);
    }

    function peg$computePosDetails(pos) {
      function advance(details, startPos, endPos) {
        var p, ch;

        for (p = startPos; p < endPos; p++) {
          ch = input.charAt(p);
          if (ch === "\n") {
            if (!details.seenCR) { details.line++; }
            details.column = 1;
            details.seenCR = false;
          } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
            details.line++;
            details.column = 1;
            details.seenCR = true;
          } else {
            details.column++;
            details.seenCR = false;
          }
        }
      }

      if (peg$cachedPos !== pos) {
        if (peg$cachedPos > pos) {
          peg$cachedPos = 0;
          peg$cachedPosDetails = { line: 1, column: 1, seenCR: false };
        }
        advance(peg$cachedPosDetails, peg$cachedPos, pos);
        peg$cachedPos = pos;
      }

      return peg$cachedPosDetails;
    }

    function peg$fail(expected) {
      if (peg$currPos < peg$maxFailPos) { return; }

      if (peg$currPos > peg$maxFailPos) {
        peg$maxFailPos = peg$currPos;
        peg$maxFailExpected = [];
      }

      peg$maxFailExpected.push(expected);
    }

    function peg$buildException(message, expected, pos) {
      function cleanupExpected(expected) {
        var i = 1;

        expected.sort(function(a, b) {
          if (a.description < b.description) {
            return -1;
          } else if (a.description > b.description) {
            return 1;
          } else {
            return 0;
          }
        });

        while (i < expected.length) {
          if (expected[i - 1] === expected[i]) {
            expected.splice(i, 1);
          } else {
            i++;
          }
        }
      }

      function buildMessage(expected, found) {
        function stringEscape(s) {
          function hex(ch) { return ch.charCodeAt(0).toString(16).toUpperCase(); }

          return s
            .replace(/\\/g,   '\\\\')
            .replace(/"/g,    '\\"')
            .replace(/\x08/g, '\\b')
            .replace(/\t/g,   '\\t')
            .replace(/\n/g,   '\\n')
            .replace(/\f/g,   '\\f')
            .replace(/\r/g,   '\\r')
            .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(ch) { return '\\x0' + hex(ch); })
            .replace(/[\x10-\x1F\x80-\xFF]/g,    function(ch) { return '\\x'  + hex(ch); })
            .replace(/[\u0180-\u0FFF]/g,         function(ch) { return '\\u0' + hex(ch); })
            .replace(/[\u1080-\uFFFF]/g,         function(ch) { return '\\u'  + hex(ch); });
        }

        var expectedDescs = new Array(expected.length),
            expectedDesc, foundDesc, i;

        for (i = 0; i < expected.length; i++) {
          expectedDescs[i] = expected[i].description;
        }

        expectedDesc = expected.length > 1
          ? expectedDescs.slice(0, -1).join(", ")
              + " or "
              + expectedDescs[expected.length - 1]
          : expectedDescs[0];

        foundDesc = found ? "\"" + stringEscape(found) + "\"" : "end of input";

        return "Expected " + expectedDesc + " but " + foundDesc + " found.";
      }

      var posDetails = peg$computePosDetails(pos),
          found      = pos < input.length ? input.charAt(pos) : null;

      if (expected !== null) {
        cleanupExpected(expected);
      }

      return new SyntaxError(
        message !== null ? message : buildMessage(expected, found),
        expected,
        found,
        pos,
        posDetails.line,
        posDetails.column
      );
    }

    function peg$parse_0start() {
      var s0;

      s0 = peg$parse_0newMustache();

      return s0;
    }

    function peg$parse_0newMustache() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      s1 = peg$parse_0newMustacheStart();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parse_0m_();
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parse_0m_();
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parse_0m_bracketedAttrs();
          if (s3 === peg$FAILED) {
            s3 = [];
            s4 = peg$parse_0newMustacheAttr();
            while (s4 !== peg$FAILED) {
              s3.push(s4);
              s4 = peg$parse_0newMustacheAttr();
            }
          }
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c2(s1, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parse_0m_bracketedAttrs() {
      var s0, s1, s2, s3, s4, s5, s6;

      s0 = peg$currPos;
      s1 = peg$parse_0m_openBracket();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$currPos;
        s4 = [];
        s5 = peg$parse_0m_();
        while (s5 !== peg$FAILED) {
          s4.push(s5);
          s5 = peg$parse_0m_();
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parse_0newMustacheAttr();
          if (s5 !== peg$FAILED) {
            s6 = peg$parse_0m_TERM();
            if (s6 === peg$FAILED) {
              s6 = peg$c3;
            }
            if (s6 !== peg$FAILED) {
              peg$reportedPos = s3;
              s4 = peg$c4(s5);
              s3 = s4;
            } else {
              peg$currPos = s3;
              s3 = peg$c0;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$c0;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
        }
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$currPos;
          s4 = [];
          s5 = peg$parse_0m_();
          while (s5 !== peg$FAILED) {
            s4.push(s5);
            s5 = peg$parse_0m_();
          }
          if (s4 !== peg$FAILED) {
            s5 = peg$parse_0newMustacheAttr();
            if (s5 !== peg$FAILED) {
              s6 = peg$parse_0m_TERM();
              if (s6 === peg$FAILED) {
                s6 = peg$c3;
              }
              if (s6 !== peg$FAILED) {
                peg$reportedPos = s3;
                s4 = peg$c4(s5);
                s3 = s4;
              } else {
                peg$currPos = s3;
                s3 = peg$c0;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$c0;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$c0;
          }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$currPos;
          peg$silentFails++;
          s4 = peg$parse_0m_closeBracket();
          peg$silentFails--;
          if (s4 !== peg$FAILED) {
            peg$currPos = s3;
            s3 = peg$c5;
          } else {
            s3 = peg$c0;
          }
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c6(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parse_0m_openBracket() {
      var s0, s1, s2, s3;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 91) {
        s1 = peg$c7;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c8); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_0m_TERM();
        if (s2 !== peg$FAILED) {
          s3 = peg$parse_0m_INDENT();
          if (s3 !== peg$FAILED) {
            s1 = [s1, s2, s3];
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parse_0m_closeBracket() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parse_0m_();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parse_0m_();
      }
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 93) {
          s2 = peg$c9;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c10); }
        }
        if (s2 !== peg$FAILED) {
          s1 = [s1, s2];
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parse_0m_INDENT() {
      var s0, s1;

      peg$silentFails++;
      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 61423) {
        s1 = peg$c12;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c13); }
      }
      if (s1 !== peg$FAILED) {
        peg$reportedPos = s0;
        s1 = peg$c14();
      }
      s0 = s1;
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c11); }
      }

      return s0;
    }

    function peg$parse_0m_TERM() {
      var s0, s1, s2, s3;

      peg$silentFails++;
      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 13) {
        s1 = peg$c16;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c17); }
      }
      if (s1 === peg$FAILED) {
        s1 = peg$c3;
      }
      if (s1 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 61439) {
          s2 = peg$c18;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c19); }
        }
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 10) {
            s3 = peg$c20;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c21); }
          }
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c22();
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }
      peg$silentFails--;
      if (s0 === peg$FAILED) {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c15); }
      }

      return s0;
    }

    function peg$parse_0newMustacheStart() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      s1 = peg$parse_0newMustacheName();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parse_0m_();
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parse_0m_();
        }
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$parse_0newMustacheShortHand();
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parse_0newMustacheShortHand();
          }
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c23(s1, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parse_0newMustacheShortHand() {
      var s0;

      s0 = peg$parse_0m_shortHandTagName();
      if (s0 === peg$FAILED) {
        s0 = peg$parse_0m_shortHandIdName();
        if (s0 === peg$FAILED) {
          s0 = peg$parse_0m_shortHandClassName();
        }
      }

      return s0;
    }

    function peg$parse_0m_shortHandTagName() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 37) {
        s1 = peg$c24;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c25); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_0newMustacheShortHandName();
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c26(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parse_0m_shortHandIdName() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 35) {
        s1 = peg$c27;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c28); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_0newMustacheShortHandName();
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c29(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parse_0m_shortHandClassName() {
      var s0, s1, s2;

      s0 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 46) {
        s1 = peg$c30;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c31); }
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_0newMustacheShortHandName();
        if (s2 !== peg$FAILED) {
          peg$reportedPos = s0;
          s1 = peg$c32(s2);
          s0 = s1;
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parse_0newMustacheShortHandName() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      if (peg$c33.test(input.charAt(peg$currPos))) {
        s2 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c34); }
      }
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          if (peg$c33.test(input.charAt(peg$currPos))) {
            s2 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c34); }
          }
        }
      } else {
        s1 = peg$c0;
      }
      if (s1 !== peg$FAILED) {
        s1 = input.substring(s0, peg$currPos);
      }
      s0 = s1;

      return s0;
    }

    function peg$parse_0newMustacheName() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      s1 = peg$currPos;
      peg$silentFails++;
      s2 = peg$parse_0m_invalidNameStartChar();
      peg$silentFails--;
      if (s2 === peg$FAILED) {
        s1 = peg$c5;
      } else {
        peg$currPos = s1;
        s1 = peg$c0;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        s3 = [];
        s4 = peg$parse_0newMustacheNameChar();
        if (s4 !== peg$FAILED) {
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parse_0newMustacheNameChar();
          }
        } else {
          s3 = peg$c0;
        }
        if (s3 !== peg$FAILED) {
          s3 = input.substring(s2, peg$currPos);
        }
        s2 = s3;
        if (s2 !== peg$FAILED) {
          s3 = peg$parse_0m_modifierChar();
          if (s3 === peg$FAILED) {
            s3 = peg$c3;
          }
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c35(s2, s3);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parse_0m_invalidNameStartChar() {
      var s0;

      if (input.charCodeAt(peg$currPos) === 46) {
        s0 = peg$c30;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c31); }
      }
      if (s0 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 45) {
          s0 = peg$c36;
          peg$currPos++;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c37); }
        }
        if (s0 === peg$FAILED) {
          if (peg$c38.test(input.charAt(peg$currPos))) {
            s0 = input.charAt(peg$currPos);
            peg$currPos++;
          } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c39); }
          }
        }
      }

      return s0;
    }

    function peg$parse_0m_invalidValueStartChar() {
      var s0;

      if (input.charCodeAt(peg$currPos) === 47) {
        s0 = peg$c40;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c41); }
      }
      if (s0 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 91) {
          s0 = peg$c7;
          peg$currPos++;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c8); }
        }
      }

      return s0;
    }

    function peg$parse_0m_modifierChar() {
      var s0;

      if (input.charCodeAt(peg$currPos) === 33) {
        s0 = peg$c42;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c43); }
      }
      if (s0 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 63) {
          s0 = peg$c44;
          peg$currPos++;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c45); }
        }
      }

      return s0;
    }

    function peg$parse_0newMustacheNameChar() {
      var s0;

      if (peg$c46.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c47); }
      }
      if (s0 === peg$FAILED) {
        if (peg$c48.test(input.charAt(peg$currPos))) {
          s0 = input.charAt(peg$currPos);
          peg$currPos++;
        } else {
          s0 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c49); }
        }
        if (s0 === peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 45) {
            s0 = peg$c36;
            peg$currPos++;
          } else {
            s0 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c37); }
          }
          if (s0 === peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 46) {
              s0 = peg$c30;
              peg$currPos++;
            } else {
              s0 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c31); }
            }
          }
        }
      }

      return s0;
    }

    function peg$parse_0newMustacheAttr() {
      var s0;

      s0 = peg$parse_0m_keyValue();
      if (s0 === peg$FAILED) {
        s0 = peg$parse_0m_parenthetical();
        if (s0 === peg$FAILED) {
          s0 = peg$parse_0newMustacheAttrValue();
        }
      }

      return s0;
    }

    function peg$parse_0m_keyValue() {
      var s0, s1, s2, s3, s4, s5, s6, s7;

      s0 = peg$currPos;
      s1 = peg$parse_0newMustacheAttrName();
      if (s1 !== peg$FAILED) {
        s2 = [];
        s3 = peg$parse_0m_();
        while (s3 !== peg$FAILED) {
          s2.push(s3);
          s3 = peg$parse_0m_();
        }
        if (s2 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 61) {
            s3 = peg$c50;
            peg$currPos++;
          } else {
            s3 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c51); }
          }
          if (s3 !== peg$FAILED) {
            s4 = [];
            s5 = peg$parse_0m_();
            while (s5 !== peg$FAILED) {
              s4.push(s5);
              s5 = peg$parse_0m_();
            }
            if (s4 !== peg$FAILED) {
              s5 = peg$parse_0newMustacheAttrValue();
              if (s5 !== peg$FAILED) {
                s6 = [];
                s7 = peg$parse_0m_();
                while (s7 !== peg$FAILED) {
                  s6.push(s7);
                  s7 = peg$parse_0m_();
                }
                if (s6 !== peg$FAILED) {
                  peg$reportedPos = s0;
                  s1 = peg$c52(s1, s5);
                  s0 = s1;
                } else {
                  peg$currPos = s0;
                  s0 = peg$c0;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$c0;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$c0;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parse_0newMustacheAttrName() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parse_0newMustacheNameChar();
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parse_0newMustacheNameChar();
        }
      } else {
        s1 = peg$c0;
      }
      if (s1 !== peg$FAILED) {
        s1 = input.substring(s0, peg$currPos);
      }
      s0 = s1;

      return s0;
    }

    function peg$parse_0newMustacheAttrValue() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      s1 = peg$currPos;
      peg$silentFails++;
      s2 = peg$parse_0m_invalidValueStartChar();
      peg$silentFails--;
      if (s2 === peg$FAILED) {
        s1 = peg$c5;
      } else {
        peg$currPos = s1;
        s1 = peg$c0;
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$parse_0m_quotedString();
        if (s2 === peg$FAILED) {
          s2 = peg$parse_0m_valuePath();
          if (s2 === peg$FAILED) {
            s2 = peg$parse_0m_parenthetical();
          }
        }
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$parse_0m_();
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parse_0m_();
          }
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c53(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parse_0m_valuePath() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parse_0newMustacheNameChar();
      if (s2 !== peg$FAILED) {
        while (s2 !== peg$FAILED) {
          s1.push(s2);
          s2 = peg$parse_0newMustacheNameChar();
        }
      } else {
        s1 = peg$c0;
      }
      if (s1 !== peg$FAILED) {
        s1 = input.substring(s0, peg$currPos);
      }
      s0 = s1;

      return s0;
    }

    function peg$parse_0m_quotedString() {
      var s0, s1, s2, s3, s4;

      s0 = peg$currPos;
      s1 = peg$currPos;
      if (input.charCodeAt(peg$currPos) === 34) {
        s2 = peg$c54;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c55); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parse_0m_stringWithoutDouble();
        if (s3 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 34) {
            s4 = peg$c54;
            peg$currPos++;
          } else {
            s4 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c55); }
          }
          if (s4 !== peg$FAILED) {
            s2 = [s2, s3, s4];
            s1 = s2;
          } else {
            peg$currPos = s1;
            s1 = peg$c0;
          }
        } else {
          peg$currPos = s1;
          s1 = peg$c0;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$c0;
      }
      if (s1 !== peg$FAILED) {
        s1 = input.substring(s0, peg$currPos);
      }
      s0 = s1;
      if (s0 === peg$FAILED) {
        s0 = peg$currPos;
        s1 = peg$currPos;
        if (input.charCodeAt(peg$currPos) === 39) {
          s2 = peg$c56;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c57); }
        }
        if (s2 !== peg$FAILED) {
          s3 = peg$parse_0m_stringWithoutSingle();
          if (s3 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 39) {
              s4 = peg$c56;
              peg$currPos++;
            } else {
              s4 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c57); }
            }
            if (s4 !== peg$FAILED) {
              s2 = [s2, s3, s4];
              s1 = s2;
            } else {
              peg$currPos = s1;
              s1 = peg$c0;
            }
          } else {
            peg$currPos = s1;
            s1 = peg$c0;
          }
        } else {
          peg$currPos = s1;
          s1 = peg$c0;
        }
        if (s1 !== peg$FAILED) {
          s1 = input.substring(s0, peg$currPos);
        }
        s0 = s1;
      }

      return s0;
    }

    function peg$parse_0m_stringWithoutDouble() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parse_0m_inStringChar();
      if (s2 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 39) {
          s2 = peg$c56;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c57); }
        }
      }
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parse_0m_inStringChar();
        if (s2 === peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 39) {
            s2 = peg$c56;
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c57); }
          }
        }
      }
      if (s1 !== peg$FAILED) {
        s1 = input.substring(s0, peg$currPos);
      }
      s0 = s1;

      return s0;
    }

    function peg$parse_0m_stringWithoutSingle() {
      var s0, s1, s2;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parse_0m_inStringChar();
      if (s2 === peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 34) {
          s2 = peg$c54;
          peg$currPos++;
        } else {
          s2 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$c55); }
        }
      }
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parse_0m_inStringChar();
        if (s2 === peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 34) {
            s2 = peg$c54;
            peg$currPos++;
          } else {
            s2 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c55); }
          }
        }
      }
      if (s1 !== peg$FAILED) {
        s1 = input.substring(s0, peg$currPos);
      }
      s0 = s1;

      return s0;
    }

    function peg$parse_0m_inStringChar() {
      var s0;

      if (peg$c58.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c59); }
      }

      return s0;
    }

    function peg$parse_0m_inParensChar() {
      var s0;

      if (peg$c60.test(input.charAt(peg$currPos))) {
        s0 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c61); }
      }

      return s0;
    }

    function peg$parse_0m_commentChar() {
      var s0;

      if (input.charCodeAt(peg$currPos) === 47) {
        s0 = peg$c40;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c41); }
      }

      return s0;
    }

    function peg$parse_0m_parenthetical() {
      var s0, s1, s2, s3, s4, s5, s6, s7, s8;

      s0 = peg$currPos;
      s1 = [];
      s2 = peg$parse_0m_();
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parse_0m_();
      }
      if (s1 !== peg$FAILED) {
        s2 = peg$currPos;
        s3 = peg$currPos;
        s4 = peg$parse_0m_OPEN_PAREN();
        if (s4 !== peg$FAILED) {
          s5 = [];
          s6 = peg$parse_0m_inParensChar();
          while (s6 !== peg$FAILED) {
            s5.push(s6);
            s6 = peg$parse_0m_inParensChar();
          }
          if (s5 !== peg$FAILED) {
            s6 = peg$parse_0m_parenthetical();
            if (s6 === peg$FAILED) {
              s6 = peg$c3;
            }
            if (s6 !== peg$FAILED) {
              s7 = [];
              s8 = peg$parse_0m_inParensChar();
              while (s8 !== peg$FAILED) {
                s7.push(s8);
                s8 = peg$parse_0m_inParensChar();
              }
              if (s7 !== peg$FAILED) {
                s8 = peg$parse_0m_CLOSE_PAREN();
                if (s8 !== peg$FAILED) {
                  s4 = [s4, s5, s6, s7, s8];
                  s3 = s4;
                } else {
                  peg$currPos = s3;
                  s3 = peg$c0;
                }
              } else {
                peg$currPos = s3;
                s3 = peg$c0;
              }
            } else {
              peg$currPos = s3;
              s3 = peg$c0;
            }
          } else {
            peg$currPos = s3;
            s3 = peg$c0;
          }
        } else {
          peg$currPos = s3;
          s3 = peg$c0;
        }
        if (s3 !== peg$FAILED) {
          s3 = input.substring(s2, peg$currPos);
        }
        s2 = s3;
        if (s2 !== peg$FAILED) {
          s3 = [];
          s4 = peg$parse_0m_();
          while (s4 !== peg$FAILED) {
            s3.push(s4);
            s4 = peg$parse_0m_();
          }
          if (s3 !== peg$FAILED) {
            peg$reportedPos = s0;
            s1 = peg$c62(s2);
            s0 = s1;
          } else {
            peg$currPos = s0;
            s0 = peg$c0;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$c0;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$c0;
      }

      return s0;
    }

    function peg$parse_0m_OPEN_PAREN() {
      var s0;

      if (input.charCodeAt(peg$currPos) === 40) {
        s0 = peg$c63;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c64); }
      }

      return s0;
    }

    function peg$parse_0m_CLOSE_PAREN() {
      var s0;

      if (input.charCodeAt(peg$currPos) === 41) {
        s0 = peg$c65;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c66); }
      }

      return s0;
    }

    function peg$parse_0m_() {
      var s0;

      if (input.charCodeAt(peg$currPos) === 32) {
        s0 = peg$c67;
        peg$currPos++;
      } else {
        s0 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c68); }
      }

      return s0;
    }

    peg$result = peg$startRuleFunction();

    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
      return peg$result;
    } else {
      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
        peg$fail({ type: "end", description: "end of input" });
      }

      throw peg$buildException(null, peg$maxFailExpected, peg$maxFailPos);
    }
  }

  return {
    SyntaxError: SyntaxError,
    parse:       parse
  };
})();
var parse = Parser.parse, ParserSyntaxError = Parser.SyntaxError;
exports['default'] = parse;

exports.ParserSyntaxError = ParserSyntaxError;
exports.parse = parse;