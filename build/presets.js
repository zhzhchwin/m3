/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	window.$ = window.jQuery = __webpack_require__(13);
	window.THREE = __webpack_require__(14);
	window.TWEEN = __webpack_require__(15);
	
	// require('exports?window.dat!./libs/dat.gui.js');
	__webpack_require__(17);
	__webpack_require__(22);
	__webpack_require__(18);
	__webpack_require__(19);
	__webpack_require__(20);

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v3.0.0
	 * https://jquery.com/
	 *
	 * Includes Sizzle.js
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2016-06-09T18:02Z
	 */
	( function( global, factory ) {
	
		"use strict";
	
		if ( typeof module === "object" && typeof module.exports === "object" ) {
	
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}
	
	// Pass this if window is not defined yet
	}( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {
	
	// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
	// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
	// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
	// enough that all such attempts are guarded in a try block.
	"use strict";
	
	var arr = [];
	
	var document = window.document;
	
	var getProto = Object.getPrototypeOf;
	
	var slice = arr.slice;
	
	var concat = arr.concat;
	
	var push = arr.push;
	
	var indexOf = arr.indexOf;
	
	var class2type = {};
	
	var toString = class2type.toString;
	
	var hasOwn = class2type.hasOwnProperty;
	
	var fnToString = hasOwn.toString;
	
	var ObjectFunctionString = fnToString.call( Object );
	
	var support = {};
	
	
	
		function DOMEval( code, doc ) {
			doc = doc || document;
	
			var script = doc.createElement( "script" );
	
			script.text = code;
			doc.head.appendChild( script ).parentNode.removeChild( script );
		}
	
	
	var
		version = "3.0.0",
	
		// Define a local copy of jQuery
		jQuery = function( selector, context ) {
	
			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},
	
		// Support: Android <=4.0 only
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	
		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([a-z])/g,
	
		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};
	
	jQuery.fn = jQuery.prototype = {
	
		// The current version of jQuery being used
		jquery: version,
	
		constructor: jQuery,
	
		// The default length of a jQuery object is 0
		length: 0,
	
		toArray: function() {
			return slice.call( this );
		},
	
		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?
	
				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :
	
				// Return all the elements in a clean array
				slice.call( this );
		},
	
		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {
	
			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );
	
			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
	
			// Return the newly-formed element set
			return ret;
		},
	
		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},
	
		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},
	
		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},
	
		first: function() {
			return this.eq( 0 );
		},
	
		last: function() {
			return this.eq( -1 );
		},
	
		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},
	
		end: function() {
			return this.prevObject || this.constructor();
		},
	
		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};
	
	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;
	
		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;
	
			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}
	
		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}
	
		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}
	
		for ( ; i < length; i++ ) {
	
			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {
	
				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];
	
					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}
	
					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {
	
						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];
	
						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}
	
						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );
	
					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}
	
		// Return the modified object
		return target;
	};
	
	jQuery.extend( {
	
		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),
	
		// Assume jQuery is ready without the ready module
		isReady: true,
	
		error: function( msg ) {
			throw new Error( msg );
		},
	
		noop: function() {},
	
		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},
	
		isArray: Array.isArray,
	
		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},
	
		isNumeric: function( obj ) {
	
			// As of jQuery 3.0, isNumeric is limited to
			// strings and numbers (primitives or objects)
			// that can be coerced to finite numbers (gh-2662)
			var type = jQuery.type( obj );
			return ( type === "number" || type === "string" ) &&
	
				// parseFloat NaNs numeric-cast false positives ("")
				// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
				// subtraction forces infinities to NaN
				!isNaN( obj - parseFloat( obj ) );
		},
	
		isPlainObject: function( obj ) {
			var proto, Ctor;
	
			// Detect obvious negatives
			// Use toString instead of jQuery.type to catch host objects
			if ( !obj || toString.call( obj ) !== "[object Object]" ) {
				return false;
			}
	
			proto = getProto( obj );
	
			// Objects with no prototype (e.g., `Object.create( null )`) are plain
			if ( !proto ) {
				return true;
			}
	
			// Objects with prototype are plain iff they were constructed by a global Object function
			Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
			return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
		},
	
		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},
	
		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}
	
			// Support: Android <=2.3 only (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},
	
		// Evaluates a script in a global context
		globalEval: function( code ) {
			DOMEval( code );
		},
	
		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE <=9 - 11, Edge 12 - 13
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},
	
		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},
	
		each: function( obj, callback ) {
			var length, i = 0;
	
			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}
	
			return obj;
		},
	
		// Support: Android <=4.0 only
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},
	
		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];
	
			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}
	
			return ret;
		},
	
		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},
	
		// Support: Android <=4.0 only, PhantomJS 1 only
		// push.apply(_, arraylike) throws on ancient WebKit
		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;
	
			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}
	
			first.length = i;
	
			return first;
		},
	
		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;
	
			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}
	
			return matches;
		},
	
		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];
	
			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );
	
					if ( value != null ) {
						ret.push( value );
					}
				}
	
			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );
	
					if ( value != null ) {
						ret.push( value );
					}
				}
			}
	
			// Flatten any nested arrays
			return concat.apply( [], ret );
		},
	
		// A global GUID counter for objects
		guid: 1,
	
		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;
	
			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}
	
			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}
	
			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};
	
			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;
	
			return proxy;
		},
	
		now: Date.now,
	
		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );
	
	// JSHint would error on this code due to the Symbol not being defined in ES5.
	// Defining this global in .jshintrc would create a danger of using the global
	// unguarded in another place, it seems safer to just disable JSHint for these
	// three lines.
	/* jshint ignore: start */
	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}
	/* jshint ignore: end */
	
	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );
	
	function isArrayLike( obj ) {
	
		// Support: real iOS 8.2 only (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );
	
		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}
	
		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.3.0
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-01-04
	 */
	(function( window ) {
	
	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,
	
		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,
	
		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},
	
		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// https://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},
	
		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
	
		// Regular expressions
	
		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",
	
		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
	
		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",
	
		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",
	
		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),
	
		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	
		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),
	
		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),
	
		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},
	
		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,
	
		rnative = /^[^{]+\{\s*\[native \w/,
	
		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
	
		rsibling = /[+~]/,
	
		// CSS escapes
		// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},
	
		// CSS string/identifier serialization
		// https://drafts.csswg.org/cssom/#common-serializing-idioms
		rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
		fcssescape = function( ch, asCodePoint ) {
			if ( asCodePoint ) {
	
				// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
				if ( ch === "\0" ) {
					return "\uFFFD";
				}
	
				// Control characters and (dependent upon position) numbers get escaped as code points
				return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
			}
	
			// Other potentially-special ASCII characters get backslash-escaped
			return "\\" + ch;
		},
	
		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		},
	
		disabledAncestor = addCombinator(
			function( elem ) {
				return elem.disabled === true;
			},
			{ dir: "parentNode", next: "legend" }
		);
	
	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?
	
			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :
	
			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}
	
	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, match, groups, newSelector,
			newContext = context && context.ownerDocument,
	
			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;
	
		results = results || [];
	
		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {
	
			return results;
		}
	
		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {
	
			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;
	
			if ( documentIsHTML ) {
	
				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
	
					// ID selector
					if ( (m = match[1]) ) {
	
						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {
	
								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}
	
						// Element context
						} else {
	
							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {
	
								results.push( elem );
								return results;
							}
						}
	
					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;
	
					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {
	
						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}
	
				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
	
					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;
	
					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {
	
						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}
	
						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						while ( i-- ) {
							groups[i] = "#" + nid + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );
	
						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}
	
					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}
	
		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}
	
	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];
	
		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}
	
	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}
	
	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created element and returns a boolean result
	 */
	function assert( fn ) {
		var el = document.createElement("fieldset");
	
		try {
			return !!fn( el );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( el.parentNode ) {
				el.parentNode.removeChild( el );
			}
			// release memory in IE
			el = null;
		}
	}
	
	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;
	
		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}
	
	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				a.sourceIndex - b.sourceIndex;
	
		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}
	
		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}
	
		return a ? 1 : -1;
	}
	
	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for :enabled/:disabled
	 * @param {Boolean} disabled true for :disabled; false for :enabled
	 */
	function createDisabledPseudo( disabled ) {
		// Known :disabled false positives:
		// IE: *[disabled]:not(button, input, select, textarea, optgroup, option, menuitem, fieldset)
		// not IE: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
		return function( elem ) {
	
			// Check form elements and option elements for explicit disabling
			return "label" in elem && elem.disabled === disabled ||
				"form" in elem && elem.disabled === disabled ||
	
				// Check non-disabled form elements for fieldset[disabled] ancestors
				"form" in elem && elem.disabled === false && (
					// Support: IE6-11+
					// Ancestry is covered for us
					elem.isDisabled === disabled ||
	
					// Otherwise, assume any non-<option> under fieldset[disabled] is disabled
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						("label" in elem || !disabledAncestor( elem )) !== disabled
				);
		};
	}
	
	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;
	
				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}
	
	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}
	
	// Expose support vars for convenience
	support = Sizzle.support = {};
	
	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};
	
	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, subWindow,
			doc = node ? node.ownerDocument || node : preferredDoc;
	
		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}
	
		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );
	
		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( preferredDoc !== document &&
			(subWindow = document.defaultView) && subWindow.top !== subWindow ) {
	
			// Support: IE 11, Edge
			if ( subWindow.addEventListener ) {
				subWindow.addEventListener( "unload", unloadHandler, false );
	
			// Support: IE 9 - 10 only
			} else if ( subWindow.attachEvent ) {
				subWindow.attachEvent( "onunload", unloadHandler );
			}
		}
	
		/* Attributes
		---------------------------------------------------------------------- */
	
		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( el ) {
			el.className = "i";
			return !el.getAttribute("className");
		});
	
		/* getElement(s)By*
		---------------------------------------------------------------------- */
	
		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( el ) {
			el.appendChild( document.createComment("") );
			return !el.getElementsByTagName("*").length;
		});
	
		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );
	
		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programmatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( el ) {
			docElem.appendChild( el ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});
	
		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					return m ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];
	
			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}
	
		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );
	
				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :
	
			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );
	
				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}
	
					return tmp;
				}
				return results;
			};
	
		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};
	
		/* QSA/matchesSelector
		---------------------------------------------------------------------- */
	
		// QSA and matchesSelector support
	
		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];
	
		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See https://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];
	
		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( el ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// https://bugs.jquery.com/ticket/12359
				docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";
	
				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( el.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}
	
				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !el.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}
	
				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}
	
				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !el.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}
	
				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibling-combinator selector` fails
				if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});
	
			assert(function( el ) {
				el.innerHTML = "<a href='' disabled='disabled'></a>" +
					"<select disabled='disabled'><option/></select>";
	
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				el.appendChild( input ).setAttribute( "name", "D" );
	
				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( el.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}
	
				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( el.querySelectorAll(":enabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}
	
				// Support: IE9-11+
				// IE's :disabled selector does not pick up the children of disabled fieldsets
				docElem.appendChild( el ).disabled = true;
				if ( el.querySelectorAll(":disabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}
	
				// Opera 10-11 does not throw on post-comma invalid pseudos
				el.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}
	
		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {
	
			assert(function( el ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( el, "*" );
	
				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( el, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}
	
		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );
	
		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );
	
		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};
	
		/* Sorting
		---------------------------------------------------------------------- */
	
		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {
	
			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
	
			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}
	
			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :
	
				// Otherwise we know they are disconnected
				1;
	
			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {
	
				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}
	
				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}
	
			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
	
			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];
	
			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
	
			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}
	
			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}
	
			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}
	
			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :
	
				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};
	
		return document;
	};
	
	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};
	
	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}
	
		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );
	
		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {
	
			try {
				var ret = matches.call( elem, expr );
	
				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}
	
		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};
	
	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};
	
	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}
	
		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;
	
		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};
	
	Sizzle.escape = function( sel ) {
		return (sel + "").replace( rcssescape, fcssescape );
	};
	
	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};
	
	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;
	
		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );
	
		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}
	
		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;
	
		return results;
	};
	
	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;
	
		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes
	
		return ret;
	};
	
	Expr = Sizzle.selectors = {
	
		// Can be adjusted by the user
		cacheLength: 50,
	
		createPseudo: markFunction,
	
		match: matchExpr,
	
		attrHandle: {},
	
		find: {},
	
		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},
	
		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );
	
				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );
	
				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}
	
				return match.slice( 0, 4 );
			},
	
			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();
	
				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}
	
					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );
	
				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}
	
				return match;
			},
	
			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];
	
				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}
	
				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";
	
				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {
	
					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}
	
				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},
	
		filter: {
	
			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},
	
			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];
	
				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},
	
			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );
	
					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}
	
					result += "";
	
					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},
	
			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";
	
				return first === 1 && last === 0 ?
	
					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :
	
					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;
	
						if ( parent ) {
	
							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {
	
											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}
	
							start = [ forward ? parent.firstChild : parent.lastChild ];
	
							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {
	
								// Seek `elem` from a previously-cached index
	
								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});
	
								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});
	
								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];
	
								while ( (node = ++nodeIndex && node && node[ dir ] ||
	
									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {
	
									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}
	
							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});
	
									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});
	
									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}
	
								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {
	
										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {
	
											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});
	
												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});
	
												uniqueCache[ type ] = [ dirruns, diff ];
											}
	
											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}
	
							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},
	
			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );
	
				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}
	
				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}
	
				return fn;
			}
		},
	
		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );
	
				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;
	
						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),
	
			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),
	
			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),
	
			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {
	
							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),
	
			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},
	
			"root": function( elem ) {
				return elem === docElem;
			},
	
			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},
	
			// Boolean properties
			"enabled": createDisabledPseudo( false ),
			"disabled": createDisabledPseudo( true ),
	
			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},
	
			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}
	
				return elem.selected === true;
			},
	
			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},
	
			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},
	
			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},
	
			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},
	
			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},
	
			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&
	
					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},
	
			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),
	
			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),
	
			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),
	
			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};
	
	Expr.pseudos["nth"] = Expr.pseudos["eq"];
	
	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}
	
	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();
	
	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];
	
		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}
	
		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;
	
		while ( soFar ) {
	
			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}
	
			matched = false;
	
			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}
	
			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}
	
			if ( !matched ) {
				break;
			}
		}
	
		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};
	
	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}
	
	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			skip = combinator.next,
			key = skip || dir,
			checkNonElements = base && key === "parentNode",
			doneName = done++;
	
		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :
	
			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];
	
				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});
	
							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});
	
							if ( skip && skip === elem.nodeName.toLowerCase() ) {
								elem = elem[ dir ] || elem;
							} else if ( (oldCache = uniqueCache[ key ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {
	
								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ key ] = newCache;
	
								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}
	
	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}
	
	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}
	
	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;
	
		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}
	
		return newUnmatched;
	}
	
	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,
	
				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),
	
				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,
	
				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?
	
						// ...intermediate processing is necessary
						[] :
	
						// ...otherwise use results directly
						results :
					matcherIn;
	
			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}
	
			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );
	
				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}
	
			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}
	
					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {
	
							seed[temp] = !(results[temp] = elem);
						}
					}
				}
	
			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}
	
	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,
	
			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];
	
		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );
	
				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}
	
		return elementMatcher( matchers );
	}
	
	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;
	
				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}
	
				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}
	
					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}
	
						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}
	
				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;
	
				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}
	
					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}
	
						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}
	
					// Add matches to results
					push.apply( results, setMatched );
	
					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {
	
						Sizzle.uniqueSort( results );
					}
				}
	
				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}
	
				return unmatched;
			};
	
		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}
	
	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];
	
		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}
	
			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
	
			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};
	
	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );
	
		results = results || [];
	
		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {
	
			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {
	
				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;
	
				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}
	
				selector = selector.slice( tokens.shift().value.length );
			}
	
			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];
	
				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {
	
						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}
	
						break;
					}
				}
			}
		}
	
		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};
	
	// One-time assignments
	
	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;
	
	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;
	
	// Initialize against the default document
	setDocument();
	
	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( el ) {
		// Should return 1, but returns 4 (following)
		return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
	});
	
	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( el ) {
		el.innerHTML = "<a href='#'></a>";
		return el.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}
	
	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( el ) {
		el.innerHTML = "<input/>";
		el.firstChild.setAttribute( "value", "" );
		return el.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}
	
	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( el ) {
		return el.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}
	
	return Sizzle;
	
	})( window );
	
	
	
	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	
	// Deprecated
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	jQuery.escapeSelector = Sizzle.escape;
	
	
	
	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;
	
		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};
	
	
	var siblings = function( n, elem ) {
		var matched = [];
	
		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}
	
		return matched;
	};
	
	
	var rneedsContext = jQuery.expr.match.needsContext;
	
	var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );
	
	
	
	var risSimple = /^.[^:#\[\.,]*$/;
	
	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				/* jshint -W018 */
				return !!qualifier.call( elem, i, elem ) !== not;
			} );
	
		}
	
		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );
	
		}
	
		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}
	
			qualifier = jQuery.filter( qualifier, elements );
		}
	
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
		} );
	}
	
	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];
	
		if ( not ) {
			expr = ":not(" + expr + ")";
		}
	
		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			} ) );
	};
	
	jQuery.fn.extend( {
		find: function( selector ) {
			var i, ret,
				len = this.length,
				self = this;
	
			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}
	
			ret = this.pushStack( [] );
	
			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}
	
			return len > 1 ? jQuery.uniqueSort( ret ) : ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,
	
				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );
	
	
	// Initialize a jQuery object
	
	
	// A central reference to the root jQuery(document)
	var rootjQuery,
	
		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		// Shortcut simple #id case for speed
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
	
		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;
	
			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}
	
			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;
	
			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {
	
					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];
	
				} else {
					match = rquickExpr.exec( selector );
				}
	
				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {
	
					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;
	
						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );
	
						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {
	
								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );
	
								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}
	
						return this;
	
					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );
	
						if ( elem ) {
	
							// Inject the element directly into the jQuery object
							this[ 0 ] = elem;
							this.length = 1;
						}
						return this;
					}
	
				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );
	
				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}
	
			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this[ 0 ] = selector;
				this.length = 1;
				return this;
	
			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :
	
					// Execute immediately if ready is not present
					selector( jQuery );
			}
	
			return jQuery.makeArray( selector, this );
		};
	
	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;
	
	// Initialize central reference
	rootjQuery = jQuery( document );
	
	
	var rparentsprev = /^(?:parents|prev(?:Until|All))/,
	
		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};
	
	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;
	
			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},
	
		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				targets = typeof selectors !== "string" && jQuery( selectors );
	
			// Positional selectors never match, since there's no _selection_ context
			if ( !rneedsContext.test( selectors ) ) {
				for ( ; i < l; i++ ) {
					for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {
	
						// Always skip document fragments
						if ( cur.nodeType < 11 && ( targets ?
							targets.index( cur ) > -1 :
	
							// Don't pass non-elements to Sizzle
							cur.nodeType === 1 &&
								jQuery.find.matchesSelector( cur, selectors ) ) ) {
	
							matched.push( cur );
							break;
						}
					}
				}
			}
	
			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},
	
		// Determine the position of an element within the set
		index: function( elem ) {
	
			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}
	
			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}
	
			// Locate the position of the desired element
			return indexOf.call( this,
	
				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},
	
		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},
	
		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );
	
	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}
	
	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );
	
			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}
	
			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}
	
			if ( this.length > 1 ) {
	
				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}
	
				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}
	
			return this.pushStack( matched );
		};
	} );
	var rnotwhite = ( /\S+/g );
	
	
	
	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}
	
	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {
	
		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );
	
		var // Flag to know if list is currently firing
			firing,
	
			// Last fire value for non-forgettable lists
			memory,
	
			// Flag to know if list was already fired
			fired,
	
			// Flag to prevent firing
			locked,
	
			// Actual callback list
			list = [],
	
			// Queue of execution data for repeatable lists
			queue = [],
	
			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,
	
			// Fire callbacks
			fire = function() {
	
				// Enforce single-firing
				locked = options.once;
	
				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {
	
						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {
	
							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}
	
				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}
	
				firing = false;
	
				// Clean up if we're done firing for good
				if ( locked ) {
	
					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];
	
					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},
	
			// Actual Callbacks object
			self = {
	
				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {
	
						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}
	
						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {
	
									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );
	
						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},
	
				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
	
							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},
	
				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},
	
				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},
	
				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},
	
				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory && !firing ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},
	
				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},
	
				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},
	
				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};
	
		return self;
	};
	
	
	function Identity( v ) {
		return v;
	}
	function Thrower( ex ) {
		throw ex;
	}
	
	function adoptValue( value, resolve, reject ) {
		var method;
	
		try {
	
			// Check for promise aspect first to privilege synchronous behavior
			if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
				method.call( value ).done( resolve ).fail( reject );
	
			// Other thenables
			} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
				method.call( value, resolve, reject );
	
			// Other non-thenables
			} else {
	
				// Support: Android 4.0 only
				// Strict mode functions invoked without .call/.apply get global-object context
				resolve.call( undefined, value );
			}
	
		// For Promises/A+, convert exceptions into rejections
		// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
		// Deferred#then to conditionally suppress rejection.
		} catch ( /*jshint -W002 */ value ) {
	
			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			reject.call( undefined, value );
		}
	}
	
	jQuery.extend( {
	
		Deferred: function( func ) {
			var tuples = [
	
					// action, add listener, callbacks,
					// ... .then handlers, argument index, [final state]
					[ "notify", "progress", jQuery.Callbacks( "memory" ),
						jQuery.Callbacks( "memory" ), 2 ],
					[ "resolve", "done", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 0, "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 1, "rejected" ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					"catch": function( fn ) {
						return promise.then( null, fn );
					},
	
					// Keep pipe for back-compat
					pipe: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
	
						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
	
								// Map tuples (progress, done, fail) to arguments (done, fail, progress)
								var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];
	
								// deferred.progress(function() { bind to newDefer or newDefer.notify })
								// deferred.done(function() { bind to newDefer or newDefer.resolve })
								// deferred.fail(function() { bind to newDefer or newDefer.reject })
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},
					then: function( onFulfilled, onRejected, onProgress ) {
						var maxDepth = 0;
						function resolve( depth, deferred, handler, special ) {
							return function() {
								var that = this,
									args = arguments,
									mightThrow = function() {
										var returned, then;
	
										// Support: Promises/A+ section 2.3.3.3.3
										// https://promisesaplus.com/#point-59
										// Ignore double-resolution attempts
										if ( depth < maxDepth ) {
											return;
										}
	
										returned = handler.apply( that, args );
	
										// Support: Promises/A+ section 2.3.1
										// https://promisesaplus.com/#point-48
										if ( returned === deferred.promise() ) {
											throw new TypeError( "Thenable self-resolution" );
										}
	
										// Support: Promises/A+ sections 2.3.3.1, 3.5
										// https://promisesaplus.com/#point-54
										// https://promisesaplus.com/#point-75
										// Retrieve `then` only once
										then = returned &&
	
											// Support: Promises/A+ section 2.3.4
											// https://promisesaplus.com/#point-64
											// Only check objects and functions for thenability
											( typeof returned === "object" ||
												typeof returned === "function" ) &&
											returned.then;
	
										// Handle a returned thenable
										if ( jQuery.isFunction( then ) ) {
	
											// Special processors (notify) just wait for resolution
											if ( special ) {
												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special )
												);
	
											// Normal processors (resolve) also hook into progress
											} else {
	
												// ...and disregard older resolution values
												maxDepth++;
	
												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special ),
													resolve( maxDepth, deferred, Identity,
														deferred.notifyWith )
												);
											}
	
										// Handle all other returned values
										} else {
	
											// Only substitute handlers pass on context
											// and multiple values (non-spec behavior)
											if ( handler !== Identity ) {
												that = undefined;
												args = [ returned ];
											}
	
											// Process the value(s)
											// Default process is resolve
											( special || deferred.resolveWith )( that, args );
										}
									},
	
									// Only normal processors (resolve) catch and reject exceptions
									process = special ?
										mightThrow :
										function() {
											try {
												mightThrow();
											} catch ( e ) {
	
												if ( jQuery.Deferred.exceptionHook ) {
													jQuery.Deferred.exceptionHook( e,
														process.stackTrace );
												}
	
												// Support: Promises/A+ section 2.3.3.3.4.1
												// https://promisesaplus.com/#point-61
												// Ignore post-resolution exceptions
												if ( depth + 1 >= maxDepth ) {
	
													// Only substitute handlers pass on context
													// and multiple values (non-spec behavior)
													if ( handler !== Thrower ) {
														that = undefined;
														args = [ e ];
													}
	
													deferred.rejectWith( that, args );
												}
											}
										};
	
								// Support: Promises/A+ section 2.3.3.3.1
								// https://promisesaplus.com/#point-57
								// Re-resolve promises immediately to dodge false rejection from
								// subsequent errors
								if ( depth ) {
									process();
								} else {
	
									// Call an optional hook to record the stack, in case of exception
									// since it's otherwise lost when execution goes async
									if ( jQuery.Deferred.getStackHook ) {
										process.stackTrace = jQuery.Deferred.getStackHook();
									}
									window.setTimeout( process );
								}
							};
						}
	
						return jQuery.Deferred( function( newDefer ) {
	
							// progress_handlers.add( ... )
							tuples[ 0 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onProgress ) ?
										onProgress :
										Identity,
									newDefer.notifyWith
								)
							);
	
							// fulfilled_handlers.add( ... )
							tuples[ 1 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onFulfilled ) ?
										onFulfilled :
										Identity
								)
							);
	
							// rejected_handlers.add( ... )
							tuples[ 2 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onRejected ) ?
										onRejected :
										Thrower
								)
							);
						} ).promise();
					},
	
					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};
	
			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 5 ];
	
				// promise.progress = list.add
				// promise.done = list.add
				// promise.fail = list.add
				promise[ tuple[ 1 ] ] = list.add;
	
				// Handle state
				if ( stateString ) {
					list.add(
						function() {
	
							// state = "resolved" (i.e., fulfilled)
							// state = "rejected"
							state = stateString;
						},
	
						// rejected_callbacks.disable
						// fulfilled_callbacks.disable
						tuples[ 3 - i ][ 2 ].disable,
	
						// progress_callbacks.lock
						tuples[ 0 ][ 2 ].lock
					);
				}
	
				// progress_handlers.fire
				// fulfilled_handlers.fire
				// rejected_handlers.fire
				list.add( tuple[ 3 ].fire );
	
				// deferred.notify = function() { deferred.notifyWith(...) }
				// deferred.resolve = function() { deferred.resolveWith(...) }
				// deferred.reject = function() { deferred.rejectWith(...) }
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
					return this;
				};
	
				// deferred.notifyWith = list.fireWith
				// deferred.resolveWith = list.fireWith
				// deferred.rejectWith = list.fireWith
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );
	
			// Make the deferred a promise
			promise.promise( deferred );
	
			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}
	
			// All done!
			return deferred;
		},
	
		// Deferred helper
		when: function( singleValue ) {
			var
	
				// count of uncompleted subordinates
				remaining = arguments.length,
	
				// count of unprocessed arguments
				i = remaining,
	
				// subordinate fulfillment data
				resolveContexts = Array( i ),
				resolveValues = slice.call( arguments ),
	
				// the master Deferred
				master = jQuery.Deferred(),
	
				// subordinate callback factory
				updateFunc = function( i ) {
					return function( value ) {
						resolveContexts[ i ] = this;
						resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( !( --remaining ) ) {
							master.resolveWith( resolveContexts, resolveValues );
						}
					};
				};
	
			// Single- and empty arguments are adopted like Promise.resolve
			if ( remaining <= 1 ) {
				adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject );
	
				// Use .then() to unwrap secondary thenables (cf. gh-3000)
				if ( master.state() === "pending" ||
					jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {
	
					return master.then();
				}
			}
	
			// Multiple arguments are aggregated like Promise.all array elements
			while ( i-- ) {
				adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
			}
	
			return master.promise();
		}
	} );
	
	
	// These usually indicate a programmer mistake during development,
	// warn about them ASAP rather than swallowing them by default.
	var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	
	jQuery.Deferred.exceptionHook = function( error, stack ) {
	
		// Support: IE 8 - 9 only
		// Console exists when dev tools are open, which can happen at any time
		if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
			window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
		}
	};
	
	
	
	
	// The deferred used on DOM ready
	var readyList = jQuery.Deferred();
	
	jQuery.fn.ready = function( fn ) {
	
		readyList.then( fn );
	
		return this;
	};
	
	jQuery.extend( {
	
		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,
	
		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,
	
		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},
	
		// Handle when the DOM is ready
		ready: function( wait ) {
	
			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}
	
			// Remember that the DOM is ready
			jQuery.isReady = true;
	
			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}
	
			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );
		}
	} );
	
	jQuery.ready.then = readyList.then;
	
	// The ready event handler and self cleanup method
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}
	
	// Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE <=9 - 10 only
	// Older IE sometimes signals "interactive" too soon
	if ( document.readyState === "complete" ||
		( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {
	
		// Handle it asynchronously to allow scripts the opportunity to delay ready
		window.setTimeout( jQuery.ready );
	
	} else {
	
		// Use the handy event callback
		document.addEventListener( "DOMContentLoaded", completed );
	
		// A fallback to window.onload, that will always work
		window.addEventListener( "load", completed );
	}
	
	
	
	
	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;
	
		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}
	
		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;
	
			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}
	
			if ( bulk ) {
	
				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;
	
				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}
	
			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}
	
		return chainable ?
			elems :
	
			// Gets
			bulk ?
				fn.call( elems ) :
				len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {
	
		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		/* jshint -W018 */
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};
	
	
	
	
	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}
	
	Data.uid = 1;
	
	Data.prototype = {
	
		cache: function( owner ) {
	
			// Check if the owner object already has a cache
			var value = owner[ this.expando ];
	
			// If not, create one
			if ( !value ) {
				value = {};
	
				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {
	
					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;
	
					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}
	
			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );
	
			// Handle: [ owner, key, value ] args
			// Always use camelCase key (gh-2257)
			if ( typeof data === "string" ) {
				cache[ jQuery.camelCase( data ) ] = value;
	
			// Handle: [ owner, { properties } ] args
			} else {
	
				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ jQuery.camelCase( prop ) ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :
	
				// Always use camelCase key (gh-2257)
				owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
		},
		access: function( owner, key, value ) {
	
			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {
	
				return this.get( owner, key );
			}
	
			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );
	
			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i,
				cache = owner[ this.expando ];
	
			if ( cache === undefined ) {
				return;
			}
	
			if ( key !== undefined ) {
	
				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {
	
					// If key is an array of keys...
					// We always set camelCase keys, so remove that.
					key = key.map( jQuery.camelCase );
				} else {
					key = jQuery.camelCase( key );
	
					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					key = key in cache ?
						[ key ] :
						( key.match( rnotwhite ) || [] );
				}
	
				i = key.length;
	
				while ( i-- ) {
					delete cache[ key[ i ] ];
				}
			}
	
			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {
	
				// Support: Chrome <=35 - 45
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();
	
	var dataUser = new Data();
	
	
	
	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014
	
	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;
	
	function dataAttr( elem, key, data ) {
		var name;
	
		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );
	
			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :
	
						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? JSON.parse( data ) :
						data;
				} catch ( e ) {}
	
				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}
	
	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},
	
		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},
	
		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},
	
		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},
	
		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );
	
	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;
	
			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );
	
					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {
	
							// Support: IE 11 only
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}
	
				return data;
			}
	
			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}
	
			return access( this, function( value ) {
				var data;
	
				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {
	
					// Attempt to get data from the cache
					// The key will always be camelCased in Data
					data = dataUser.get( elem, key );
					if ( data !== undefined ) {
						return data;
					}
	
					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, key );
					if ( data !== undefined ) {
						return data;
					}
	
					// We tried really hard, but the data doesn't exist.
					return;
				}
	
				// Set the data...
				this.each( function() {
	
					// We always store the camelCased key
					dataUser.set( this, key, value );
				} );
			}, null, value, arguments.length > 1, null, true );
		},
	
		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );
	
	
	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;
	
			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );
	
				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},
	
		dequeue: function( elem, type ) {
			type = type || "fx";
	
			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};
	
			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}
	
			if ( fn ) {
	
				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}
	
				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}
	
			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},
	
		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );
	
	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;
	
			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}
	
			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}
	
			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );
	
					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );
	
					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},
	
		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};
	
			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";
	
			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;
	
	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );
	
	
	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];
	
	var isHiddenWithinTree = function( elem, el ) {
	
			// isHiddenWithinTree might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
	
			// Inline style trumps all
			return elem.style.display === "none" ||
				elem.style.display === "" &&
	
				// Otherwise, check computed style
				// Support: Firefox <=43 - 45
				// Disconnected elements can have computed display: none, so first confirm that elem is
				// in the document.
				jQuery.contains( elem.ownerDocument, elem ) &&
	
				jQuery.css( elem, "display" ) === "none";
		};
	
	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};
	
		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}
	
		ret = callback.apply( elem, args || [] );
	
		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}
	
		return ret;
	};
	
	
	
	
	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() { return tween.cur(); } :
				function() { return jQuery.css( elem, prop, "" ); },
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),
	
			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );
	
		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {
	
			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];
	
			// Make sure we update the tween properties later on
			valueParts = valueParts || [];
	
			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;
	
			do {
	
				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";
	
				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );
	
			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}
	
		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;
	
			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}
	
	
	var defaultDisplayMap = {};
	
	function getDefaultDisplay( elem ) {
		var temp,
			doc = elem.ownerDocument,
			nodeName = elem.nodeName,
			display = defaultDisplayMap[ nodeName ];
	
		if ( display ) {
			return display;
		}
	
		temp = doc.body.appendChild( doc.createElement( nodeName ) ),
		display = jQuery.css( temp, "display" );
	
		temp.parentNode.removeChild( temp );
	
		if ( display === "none" ) {
			display = "block";
		}
		defaultDisplayMap[ nodeName ] = display;
	
		return display;
	}
	
	function showHide( elements, show ) {
		var display, elem,
			values = [],
			index = 0,
			length = elements.length;
	
		// Determine new display value for elements that need to change
		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
	
			display = elem.style.display;
			if ( show ) {
	
				// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
				// check is required in this first loop unless we have a nonempty display value (either
				// inline or about-to-be-restored)
				if ( display === "none" ) {
					values[ index ] = dataPriv.get( elem, "display" ) || null;
					if ( !values[ index ] ) {
						elem.style.display = "";
					}
				}
				if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
					values[ index ] = getDefaultDisplay( elem );
				}
			} else {
				if ( display !== "none" ) {
					values[ index ] = "none";
	
					// Remember what we're overwriting
					dataPriv.set( elem, "display", display );
				}
			}
		}
	
		// Set the display of the elements in a second loop to avoid constant reflow
		for ( index = 0; index < length; index++ ) {
			if ( values[ index ] != null ) {
				elements[ index ].style.display = values[ index ];
			}
		}
	
		return elements;
	}
	
	jQuery.fn.extend( {
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}
	
			return this.each( function() {
				if ( isHiddenWithinTree( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );
	var rcheckableType = ( /^(?:checkbox|radio)$/i );
	
	var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );
	
	var rscriptType = ( /^$|\/(?:java|ecma)script/i );
	
	
	
	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {
	
		// Support: IE <=9 only
		option: [ 1, "<select multiple='multiple'>", "</select>" ],
	
		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
	
		_default: [ 0, "", "" ]
	};
	
	// Support: IE <=9 only
	wrapMap.optgroup = wrapMap.option;
	
	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;
	
	
	function getAll( context, tag ) {
	
		// Support: IE <=9 - 11 only
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret = typeof context.getElementsByTagName !== "undefined" ?
				context.getElementsByTagName( tag || "*" ) :
				typeof context.querySelectorAll !== "undefined" ?
					context.querySelectorAll( tag || "*" ) :
				[];
	
		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], ret ) :
			ret;
	}
	
	
	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;
	
		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}
	
	
	var rhtml = /<|&#?\w+;/;
	
	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;
	
		for ( ; i < l; i++ ) {
			elem = elems[ i ];
	
			if ( elem || elem === 0 ) {
	
				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
	
					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );
	
				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );
	
				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );
	
					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];
	
					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}
	
					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );
	
					// Remember the top-level container
					tmp = fragment.firstChild;
	
					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}
	
		// Remove wrapper from fragment
		fragment.textContent = "";
	
		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {
	
			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}
	
			contains = jQuery.contains( elem.ownerDocument, elem );
	
			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );
	
			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}
	
			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}
	
		return fragment;
	}
	
	
	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );
	
		// Support: Android 4.0 - 4.3 only
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );
	
		div.appendChild( input );
	
		// Support: Android <=4.1 only
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;
	
		// Support: IE <=11 only
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();
	var documentElement = document.documentElement;
	
	
	
	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
	
	function returnTrue() {
		return true;
	}
	
	function returnFalse() {
		return false;
	}
	
	// Support: IE <=9 only
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}
	
	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;
	
		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
	
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
	
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}
	
		if ( data == null && fn == null ) {
	
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
	
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
	
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}
	
		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
	
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
	
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}
	
	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {
	
		global: {},
	
		add: function( elem, types, handler, data, selector ) {
	
			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );
	
			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}
	
			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}
	
			// Ensure that invalid selectors throw exceptions at attach time
			// Evaluate against documentElement in case elem is a non-element node (e.g., document)
			if ( selector ) {
				jQuery.find.matchesSelector( documentElement, selector );
			}
	
			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}
	
			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {
	
					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}
	
			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
	
				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}
	
				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};
	
				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;
	
				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};
	
				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );
	
				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;
	
					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
	
						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}
	
				if ( special.add ) {
					special.add.call( elem, handleObj );
	
					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}
	
				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}
	
				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}
	
		},
	
		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {
	
			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );
	
			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}
	
			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
	
				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}
	
				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );
	
				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];
	
					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );
	
						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}
	
				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
	
						jQuery.removeEvent( elem, type, elemData.handle );
					}
	
					delete events[ type ];
				}
			}
	
			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},
	
		dispatch: function( nativeEvent ) {
	
			// Make a writable jQuery.Event from the native event object
			var event = jQuery.event.fix( nativeEvent );
	
			var i, j, ret, matched, handleObj, handlerQueue,
				args = new Array( arguments.length ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};
	
			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;
	
			for ( i = 1; i < arguments.length; i++ ) {
				args[ i ] = arguments[ i ];
			}
	
			event.delegateTarget = this;
	
			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}
	
			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );
	
			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;
	
				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {
	
					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {
	
						event.handleObj = handleObj;
						event.data = handleObj.data;
	
						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );
	
						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}
	
			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}
	
			return event.result;
		},
	
		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;
	
			// Support: IE <=9
			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			//
			// Support: Firefox <=42
			// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
			if ( delegateCount && cur.nodeType &&
				( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {
	
				for ( ; cur !== this; cur = cur.parentNode || this ) {
	
					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];
	
							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";
	
							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push( { elem: cur, handlers: matches } );
						}
					}
				}
			}
	
			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
			}
	
			return handlerQueue;
		},
	
		addProp: function( name, hook ) {
			Object.defineProperty( jQuery.Event.prototype, name, {
				enumerable: true,
				configurable: true,
	
				get: jQuery.isFunction( hook ) ?
					function() {
						if ( this.originalEvent ) {
								return hook( this.originalEvent );
						}
					} :
					function() {
						if ( this.originalEvent ) {
								return this.originalEvent[ name ];
						}
					},
	
				set: function( value ) {
					Object.defineProperty( this, name, {
						enumerable: true,
						configurable: true,
						writable: true,
						value: value
					} );
				}
			} );
		},
	
		fix: function( originalEvent ) {
			return originalEvent[ jQuery.expando ] ?
				originalEvent :
				new jQuery.Event( originalEvent );
		},
	
		special: {
			load: {
	
				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {
	
				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {
	
				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},
	
				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},
	
			beforeunload: {
				postDispatch: function( event ) {
	
					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};
	
	jQuery.removeEvent = function( elem, type, handle ) {
	
		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};
	
	jQuery.Event = function( src, props ) {
	
		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}
	
		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;
	
			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&
	
					// Support: Android <=2.3 only
					src.returnValue === false ?
				returnTrue :
				returnFalse;
	
			// Create target properties
			// Support: Safari <=6 - 7 only
			// Target should not be a text node (#504, #13143)
			this.target = ( src.target && src.target.nodeType === 3 ) ?
				src.target.parentNode :
				src.target;
	
			this.currentTarget = src.currentTarget;
			this.relatedTarget = src.relatedTarget;
	
		// Event type
		} else {
			this.type = src;
		}
	
		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}
	
		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();
	
		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};
	
	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,
	
		preventDefault: function() {
			var e = this.originalEvent;
	
			this.isDefaultPrevented = returnTrue;
	
			if ( e && !this.isSimulated ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;
	
			this.isPropagationStopped = returnTrue;
	
			if ( e && !this.isSimulated ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
	
			this.isImmediatePropagationStopped = returnTrue;
	
			if ( e && !this.isSimulated ) {
				e.stopImmediatePropagation();
			}
	
			this.stopPropagation();
		}
	};
	
	// Includes all common event props including KeyEvent and MouseEvent specific props
	jQuery.each( {
		altKey: true,
		bubbles: true,
		cancelable: true,
		changedTouches: true,
		ctrlKey: true,
		detail: true,
		eventPhase: true,
		metaKey: true,
		pageX: true,
		pageY: true,
		shiftKey: true,
		view: true,
		"char": true,
		charCode: true,
		key: true,
		keyCode: true,
		button: true,
		buttons: true,
		clientX: true,
		clientY: true,
		offsetX: true,
		offsetY: true,
		pointerId: true,
		pointerType: true,
		screenX: true,
		screenY: true,
		targetTouches: true,
		toElement: true,
		touches: true,
	
		which: function( event ) {
			var button = event.button;
	
			// Add which for key events
			if ( event.which == null && rkeyEvent.test( event.type ) ) {
				return event.charCode != null ? event.charCode : event.keyCode;
			}
	
			// Add which for click: 1 === left; 2 === middle; 3 === right
			if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
				return ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}
	
			return event.which;
		}
	}, jQuery.event.addProp );
	
	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,
	
			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;
	
				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );
	
	jQuery.fn.extend( {
	
		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {
	
				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {
	
				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {
	
				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );
	
	
	var
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
	
		// Support: IE <=10 - 11, Edge 12 - 13
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,
	
		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
	
	function manipulationTarget( elem, content ) {
		if ( jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {
	
			return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
		}
	
		return elem;
	}
	
	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );
	
		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}
	
		return elem;
	}
	
	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;
	
		if ( dest.nodeType !== 1 ) {
			return;
		}
	
		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;
	
			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};
	
				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}
	
		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );
	
			dataUser.set( dest, udataCur );
		}
	}
	
	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();
	
		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;
	
		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}
	
	function domManip( collection, args, callback, ignored ) {
	
		// Flatten any nested arrays
		args = concat.apply( [], args );
	
		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );
	
		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}
	
		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;
	
			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}
	
			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;
	
				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;
	
					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );
	
						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {
	
							// Support: Android <=4.0 only, PhantomJS 1 only
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}
	
					callback.call( collection[ i ], node, i );
				}
	
				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;
	
					// Reenable scripts
					jQuery.map( scripts, restoreScript );
	
					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {
	
							if ( node.src ) {
	
								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
							}
						}
					}
				}
			}
		}
	
		return collection;
	}
	
	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;
	
		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}
	
			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}
	
		return elem;
	}
	
	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},
	
		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );
	
			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {
	
				// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );
	
				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}
	
			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );
	
					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}
	
			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}
	
			// Return the cloned set
			return clone;
		},
	
		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;
	
			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );
	
								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}
	
						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {
	
						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );
	
	jQuery.fn.extend( {
		detach: function( selector ) {
			return remove( this, selector, true );
		},
	
		remove: function( selector ) {
			return remove( this, selector );
		},
	
		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},
	
		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},
	
		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},
	
		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},
	
		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},
	
		empty: function() {
			var elem,
				i = 0;
	
			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {
	
					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );
	
					// Remove any remaining nodes
					elem.textContent = "";
				}
			}
	
			return this;
		},
	
		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
	
			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},
	
		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;
	
				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}
	
				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {
	
					value = jQuery.htmlPrefilter( value );
	
					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};
	
							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}
	
						elem = 0;
	
					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}
	
				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},
	
		replaceWith: function() {
			var ignored = [];
	
			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;
	
				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}
	
			// Force callback invocation
			}, ignored );
		}
	} );
	
	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;
	
			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );
	
				// Support: Android <=4.0 only, PhantomJS 1 only
				// .get() because push.apply(_, arraylike) throws on ancient WebKit
				push.apply( ret, elems.get() );
			}
	
			return this.pushStack( ret );
		};
	} );
	var rmargin = ( /^margin/ );
	
	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );
	
	var getStyles = function( elem ) {
	
			// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;
	
			if ( !view || !view.opener ) {
				view = window;
			}
	
			return view.getComputedStyle( elem );
		};
	
	
	
	( function() {
	
		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {
	
			// This is a singleton, we need to execute it only once
			if ( !div ) {
				return;
			}
	
			div.style.cssText =
				"box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );
	
			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";
	
			// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";
	
			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";
	
			documentElement.removeChild( container );
	
			// Nullify the div so it wouldn't be stored in the memory and
			// it will also be a sign that checks already performed
			div = null;
		}
	
		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );
	
		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}
	
		// Support: IE <=9 - 11 only
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";
	
		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );
	
		jQuery.extend( support, {
			pixelPosition: function() {
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				computeStyleTests();
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {
				computeStyleTests();
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {
				computeStyleTests();
				return reliableMarginLeftVal;
			}
		} );
	} )();
	
	
	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;
	
		computed = computed || getStyles( elem );
	
		// Support: IE <=9 only
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {
			ret = computed.getPropertyValue( name ) || computed[ name ];
	
			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}
	
			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// https://drafts.csswg.org/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {
	
				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;
	
				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;
	
				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}
	
		return ret !== undefined ?
	
			// Support: IE <=9 - 11 only
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}
	
	
	function addGetHookIf( conditionFn, hookFn ) {
	
		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {
	
					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}
	
				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}
	
	
	var
	
		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},
	
		cssPrefixes = [ "Webkit", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;
	
	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {
	
		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}
	
		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;
	
		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}
	
	function setPositiveNumber( elem, value, subtract ) {
	
		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?
	
			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}
	
	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?
	
			// If we already have the right measurement, avoid augmentation
			4 :
	
			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,
	
			val = 0;
	
		for ( ; i < 4; i += 2 ) {
	
			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}
	
			if ( isBorderBox ) {
	
				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}
	
				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {
	
				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
	
				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}
	
		return val;
	}
	
	function getWidthOrHeight( elem, name, extra ) {
	
		// Start with offset property, which is equivalent to the border-box value
		var val,
			valueIsBorderBox = true,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";
	
		// Support: IE <=11 only
		// Running getBoundingClientRect on a disconnected node
		// in IE throws an error.
		if ( elem.getClientRects().length ) {
			val = elem.getBoundingClientRect()[ name ];
		}
	
		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {
	
			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}
	
			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}
	
			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );
	
			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}
	
		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}
	
	jQuery.extend( {
	
		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {
	
						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},
	
		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},
	
		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},
	
		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {
	
			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}
	
			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;
	
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );
	
			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
	
			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;
	
				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );
	
					// Fixes bug #9237
					type = "number";
				}
	
				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}
	
				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}
	
				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}
	
				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {
	
					style[ name ] = value;
				}
	
			} else {
	
				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {
	
					return ret;
				}
	
				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},
	
		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );
	
			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );
	
			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
	
			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}
	
			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}
	
			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}
	
			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );
	
	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {
	
					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
	
						// Support: Safari 8+
						// Table columns in Safari have non-zero offsetWidth & zero
						// getBoundingClientRect().width unless display is changed.
						// Support: IE <=11 only
						// Running getBoundingClientRect on a disconnected node
						// in IE throws an error.
						( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},
	
			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);
	
				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {
	
					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}
	
				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );
	
	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);
	
	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},
	
					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];
	
				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}
	
				return expanded;
			}
		};
	
		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );
	
	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;
	
				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;
	
					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}
	
					return map;
				}
	
				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		}
	} );
	
	
	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;
	
	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];
	
			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];
	
			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;
	
			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}
	
			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};
	
	Tween.prototype.init.prototype = Tween.prototype;
	
	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;
	
				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}
	
				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );
	
				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {
	
				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};
	
	// Support: IE <=9 only
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};
	
	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};
	
	jQuery.fx = Tween.prototype.init;
	
	// Back compat <1.8 extension point
	jQuery.fx.step = {};
	
	
	
	
	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;
	
	function raf() {
		if ( timerId ) {
			window.requestAnimationFrame( raf );
			jQuery.fx.tick();
		}
	}
	
	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}
	
	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };
	
		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4 ; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}
	
		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}
	
		return attrs;
	}
	
	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {
	
				// We're done with this property
				return tween;
			}
		}
	}
	
	function defaultPrefilter( elem, props, opts ) {
		/* jshint validthis: true */
		var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
			isBox = "width" in props || "height" in props,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHiddenWithinTree( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );
	
		// Queue-skipping animations hijack the fx hooks
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;
	
			anim.always( function() {
	
				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}
	
		// Detect show/hide animations
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.test( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {
	
					// Pretend to be hidden if this is a "show" and
					// there is still data from a stopped show/hide
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
	
					// Ignore all other no-op show/hide data
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
			}
		}
	
		// Bail out if this is a no-op like .hide().hide()
		propTween = !jQuery.isEmptyObject( props );
		if ( !propTween && jQuery.isEmptyObject( orig ) ) {
			return;
		}
	
		// Restrict "overflow" and "display" styles during box animations
		if ( isBox && elem.nodeType === 1 ) {
	
			// Support: IE <=9 - 11, Edge 12 - 13
			// Record all 3 overflow attributes because IE does not infer the shorthand
			// from identically-valued overflowX and overflowY
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];
	
			// Identify a display type, preferring old show/hide data over the CSS cascade
			restoreDisplay = dataShow && dataShow.display;
			if ( restoreDisplay == null ) {
				restoreDisplay = dataPriv.get( elem, "display" );
			}
			display = jQuery.css( elem, "display" );
			if ( display === "none" ) {
				if ( restoreDisplay ) {
					display = restoreDisplay;
				} else {
	
					// Get nonempty value(s) by temporarily forcing visibility
					showHide( [ elem ], true );
					restoreDisplay = elem.style.display || restoreDisplay;
					display = jQuery.css( elem, "display" );
					showHide( [ elem ] );
				}
			}
	
			// Animate inline elements as inline-block
			if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
				if ( jQuery.css( elem, "float" ) === "none" ) {
	
					// Restore the original display value at the end of pure show/hide animations
					if ( !propTween ) {
						anim.done( function() {
							style.display = restoreDisplay;
						} );
						if ( restoreDisplay == null ) {
							display = style.display;
							restoreDisplay = display === "none" ? "" : display;
						}
					}
					style.display = "inline-block";
				}
			}
		}
	
		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}
	
		// Implement show/hide animations
		propTween = false;
		for ( prop in orig ) {
	
			// General show/hide setup for this element animation
			if ( !propTween ) {
				if ( dataShow ) {
					if ( "hidden" in dataShow ) {
						hidden = dataShow.hidden;
					}
				} else {
					dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
				}
	
				// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
				if ( toggle ) {
					dataShow.hidden = !hidden;
				}
	
				// Show elements before animating them
				if ( hidden ) {
					showHide( [ elem ], true );
				}
	
				/* jshint -W083 */
				anim.done( function() {
	
					// The final step of a "hide" animation is actually hiding the element
					if ( !hidden ) {
						showHide( [ elem ] );
					}
					dataPriv.remove( elem, "fxshow" );
					for ( prop in orig ) {
						jQuery.style( elem, prop, orig[ prop ] );
					}
				} );
			}
	
			// Per-property setup
			propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = propTween.start;
				if ( hidden ) {
					propTween.end = propTween.start;
					propTween.start = 0;
				}
			}
		}
	}
	
	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;
	
		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}
	
			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}
	
			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];
	
				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}
	
	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {
	
				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
	
					// Support: Android 2.3 only
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;
	
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( percent );
				}
	
				deferred.notifyWith( elem, [ animation, percent, remaining ] );
	
				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,
	
						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( 1 );
					}
	
					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;
	
		propFilter( props, animation.opts.specialEasing );
	
		for ( ; index < length ; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}
	
		jQuery.map( props, createTween, animation );
	
		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}
	
		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);
	
		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}
	
	jQuery.Animation = jQuery.extend( Animation, {
	
		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},
	
		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnotwhite );
			}
	
			var prop,
				index = 0,
				length = props.length;
	
			for ( ; index < length ; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},
	
		prefilters: [ defaultPrefilter ],
	
		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );
	
	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};
	
		// Go to the end state if fx are off or if document is hidden
		if ( jQuery.fx.off || document.hidden ) {
			opt.duration = 0;
	
		} else {
			opt.duration = typeof opt.duration === "number" ?
				opt.duration : opt.duration in jQuery.fx.speeds ?
					jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;
		}
	
		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}
	
		// Queueing
		opt.old = opt.complete;
	
		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}
	
			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};
	
		return opt;
	};
	
	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {
	
			// Show any hidden elements after setting opacity to 0
			return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()
	
				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {
	
					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );
	
					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;
	
			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};
	
			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}
	
			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );
	
				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}
	
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {
	
						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}
	
				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;
	
				// Enable finishing flag on private data
				data.finish = true;
	
				// Empty the queue first
				jQuery.queue( this, type, [] );
	
				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}
	
				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}
	
				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}
	
				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );
	
	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );
	
	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );
	
	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;
	
		fxNow = jQuery.now();
	
		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];
	
			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}
	
		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};
	
	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};
	
	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.requestAnimationFrame ?
				window.requestAnimationFrame( raf ) :
				window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};
	
	jQuery.fx.stop = function() {
		if ( window.cancelAnimationFrame ) {
			window.cancelAnimationFrame( timerId );
		} else {
			window.clearInterval( timerId );
		}
	
		timerId = null;
	};
	
	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,
	
		// Default speed
		_default: 400
	};
	
	
	// Based off of the plugin by Clint Helfers, with permission.
	// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";
	
		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};
	
	
	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );
	
		input.type = "checkbox";
	
		// Support: Android <=4.3 only
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";
	
		// Support: IE <=11 only
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;
	
		// Support: IE <=11 only
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();
	
	
	var boolHook,
		attrHandle = jQuery.expr.attrHandle;
	
	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},
	
		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );
	
	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;
	
			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}
	
			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}
	
			// Attribute hooks are determined by the lowercase version
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}
	
			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}
	
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}
	
				elem.setAttribute( name, value + "" );
				return value;
			}
	
			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}
	
			ret = jQuery.find.attr( elem, name );
	
			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},
	
		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},
	
		removeAttr: function( elem, value ) {
			var name,
				i = 0,
				attrNames = value && value.match( rnotwhite );
	
			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					elem.removeAttribute( name );
				}
			}
		}
	} );
	
	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {
	
				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};
	
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;
	
		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle,
				lowercaseName = name.toLowerCase();
	
			if ( !isXML ) {
	
				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ lowercaseName ];
				attrHandle[ lowercaseName ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					lowercaseName :
					null;
				attrHandle[ lowercaseName ] = handle;
			}
			return ret;
		};
	} );
	
	
	
	
	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;
	
	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},
	
		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );
	
	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;
	
			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}
	
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
	
				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}
	
			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}
	
				return ( elem[ name ] = value );
			}
	
			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}
	
			return elem[ name ];
		},
	
		propHooks: {
			tabIndex: {
				get: function( elem ) {
	
					// Support: IE <=9 - 11 only
					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );
	
					return tabindex ?
						parseInt( tabindex, 10 ) :
						rfocusable.test( elem.nodeName ) ||
							rclickable.test( elem.nodeName ) && elem.href ?
								0 :
								-1;
				}
			}
		},
	
		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );
	
	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {
				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;
	
					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}
	
	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );
	
	
	
	
	var rclass = /[\t\r\n\f]/g;
	
	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}
	
	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}
	
			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];
	
				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );
	
					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}
	
						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}
	
			return this;
		},
	
		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}
	
			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}
	
			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];
	
				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
	
					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );
	
					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
	
							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}
	
						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}
	
			return this;
		},
	
		toggleClass: function( value, stateVal ) {
			var type = typeof value;
	
			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}
	
			return this.each( function() {
				var className, i, self, classNames;
	
				if ( type === "string" ) {
	
					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnotwhite ) || [];
	
					while ( ( className = classNames[ i++ ] ) ) {
	
						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}
	
				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {
	
						// Store className if set
						dataPriv.set( this, "__className__", className );
					}
	
					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},
	
		hasClass: function( selector ) {
			var className, elem,
				i = 0;
	
			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + getClass( elem ) + " " ).replace( rclass, " " )
						.indexOf( className ) > -1
				) {
					return true;
				}
			}
	
			return false;
		}
	} );
	
	
	
	
	var rreturn = /\r/g,
		rspaces = /[\x20\t\r\n\f]+/g;
	
	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];
	
			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];
	
					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}
	
					ret = elem.value;
	
					return typeof ret === "string" ?
	
						// Handle most common string cases
						ret.replace( rreturn, "" ) :
	
						// Handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}
	
				return;
			}
	
			isFunction = jQuery.isFunction( value );
	
			return this.each( function( i ) {
				var val;
	
				if ( this.nodeType !== 1 ) {
					return;
				}
	
				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}
	
				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";
	
				} else if ( typeof val === "number" ) {
					val += "";
	
				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}
	
				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];
	
				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );
	
	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {
	
					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :
	
						// Support: IE <=10 - 11 only
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one",
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;
	
					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];
	
						// Support: IE <=9 only
						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&
	
								// Don't return options that are disabled or in a disabled optgroup
								!option.disabled &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {
	
							// Get the specific value for the option
							value = jQuery( option ).val();
	
							// We don't need an array for one selects
							if ( one ) {
								return value;
							}
	
							// Multi-Selects return an array
							values.push( value );
						}
					}
	
					return values;
				},
	
				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;
	
					while ( i-- ) {
						option = options[ i ];
						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}
					}
	
					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );
	
	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );
	
	
	
	
	// Return jQuery for attributes-only inclusion
	
	
	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;
	
	jQuery.extend( jQuery.event, {
	
		trigger: function( event, data, elem, onlyHandlers ) {
	
			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];
	
			cur = tmp = elem = elem || document;
	
			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}
	
			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}
	
			if ( type.indexOf( "." ) > -1 ) {
	
				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;
	
			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );
	
			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;
	
			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}
	
			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );
	
			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}
	
			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {
	
				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}
	
				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}
	
			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
	
				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;
	
				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}
	
				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;
	
			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {
	
				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {
	
					// Call a native DOM method on the target with the same name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {
	
						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];
	
						if ( tmp ) {
							elem[ ontype ] = null;
						}
	
						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;
	
						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}
	
			return event.result;
		},
	
		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
				}
			);
	
			jQuery.event.trigger( e, null, elem );
		}
	
	} );
	
	jQuery.fn.extend( {
	
		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );
	
	
	jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup contextmenu" ).split( " " ),
		function( i, name ) {
	
		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );
	
	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );
	
	
	
	
	support.focusin = "onfocusin" in window;
	
	
	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {
	
			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};
	
			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );
	
					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;
	
					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );
	
					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;
	
	var nonce = jQuery.now();
	
	var rquery = ( /\?/ );
	
	
	
	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}
	
		// Support: IE 9 - 11 only
		// IE throws on parseFromString with invalid input.
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}
	
		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};
	
	
	var
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;
	
	function buildParams( prefix, obj, traditional, add ) {
		var name;
	
		if ( jQuery.isArray( obj ) ) {
	
			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {
	
					// Treat each array item as a scalar.
					add( prefix, v );
	
				} else {
	
					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );
	
		} else if ( !traditional && jQuery.type( obj ) === "object" ) {
	
			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}
	
		} else {
	
			// Serialize scalar item.
			add( prefix, obj );
		}
	}
	
	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, valueOrFunction ) {
	
				// If value is a function, invoke it and use its return value
				var value = jQuery.isFunction( valueOrFunction ) ?
					valueOrFunction() :
					valueOrFunction;
	
				s[ s.length ] = encodeURIComponent( key ) + "=" +
					encodeURIComponent( value == null ? "" : value );
			};
	
		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
	
			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );
	
		} else {
	
			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}
	
		// Return the resulting serialization
		return s.join( "&" );
	};
	
	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {
	
				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;
	
				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();
	
				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						} ) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );
	
	
	var
		r20 = /%20/g,
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
	
		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,
	
		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},
	
		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},
	
		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),
	
		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;
	
	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {
	
		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {
	
			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}
	
			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];
	
			if ( jQuery.isFunction( func ) ) {
	
				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {
	
					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );
	
					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}
	
	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {
	
		var inspected = {},
			seekingTransport = ( structure === transports );
	
		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {
	
					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}
	
		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}
	
	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};
	
		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}
	
		return target;
	}
	
	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {
	
		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;
	
		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}
	
		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}
	
		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {
	
			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}
	
			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}
	
		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}
	
	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},
	
			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();
	
		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}
	
		current = dataTypes.shift();
	
		// Convert to each sequential dataType
		while ( current ) {
	
			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}
	
			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}
	
			prev = current;
			current = dataTypes.shift();
	
			if ( current ) {
	
				// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {
	
					current = prev;
	
				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {
	
					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];
	
					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {
	
							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {
	
								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {
	
									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];
	
									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}
	
					// Apply converter (if not an equivalence)
					if ( conv !== true ) {
	
						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}
	
		return { state: "success", data: response };
	}
	
	jQuery.extend( {
	
		// Counter for holding the number of active queries
		active: 0,
	
		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},
	
		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/
	
			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
	
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
	
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
	
			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {
	
				// Convert anything to text
				"* text": String,
	
				// Text to html (true = no transformation)
				"text html": true,
	
				// Evaluate text as a json expression
				"text json": JSON.parse,
	
				// Parse text as xml
				"text xml": jQuery.parseXML
			},
	
			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},
	
		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?
	
				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :
	
				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},
	
		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),
	
		// Main method
		ajax: function( url, options ) {
	
			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}
	
			// Force options to be an object
			options = options || {};
	
			var transport,
	
				// URL without anti-cache param
				cacheURL,
	
				// Response headers
				responseHeadersString,
				responseHeaders,
	
				// timeout handle
				timeoutTimer,
	
				// Url cleanup var
				urlAnchor,
	
				// Request state (becomes false upon send and true upon completion)
				completed,
	
				// To know if global events are to be dispatched
				fireGlobals,
	
				// Loop variable
				i,
	
				// uncached part of the url
				uncached,
	
				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),
	
				// Callbacks context
				callbackContext = s.context || s,
	
				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,
	
				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),
	
				// Status-dependent callbacks
				statusCode = s.statusCode || {},
	
				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},
	
				// Default abort message
				strAbort = "canceled",
	
				// Fake xhr
				jqXHR = {
					readyState: 0,
	
					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( completed ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},
	
					// Raw string
					getAllResponseHeaders: function() {
						return completed ? responseHeadersString : null;
					},
	
					// Caches the header
					setRequestHeader: function( name, value ) {
						if ( completed == null ) {
							name = requestHeadersNames[ name.toLowerCase() ] =
								requestHeadersNames[ name.toLowerCase() ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},
	
					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( completed == null ) {
							s.mimeType = type;
						}
						return this;
					},
	
					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( completed ) {
	
								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							} else {
	
								// Lazy-add the new callbacks in a way that preserves old ones
								for ( code in map ) {
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							}
						}
						return this;
					},
	
					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};
	
			// Attach deferreds
			deferred.promise( jqXHR );
	
			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" )
				.replace( rprotocol, location.protocol + "//" );
	
			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;
	
			// Extract dataTypes list
			s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];
	
			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );
	
				// Support: IE <=8 - 11, Edge 12 - 13
				// IE throws exception on accessing the href property if url is malformed,
				// e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;
	
					// Support: IE <=8 - 11 only
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {
	
					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}
	
			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}
	
			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );
	
			// If request was aborted inside a prefilter, stop there
			if ( completed ) {
				return jqXHR;
			}
	
			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;
	
			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}
	
			// Uppercase the type
			s.type = s.type.toUpperCase();
	
			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );
	
			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			// Remove hash to simplify url manipulation
			cacheURL = s.url.replace( rhash, "" );
	
			// More options handling for requests with no content
			if ( !s.hasContent ) {
	
				// Remember the hash so we can put it back
				uncached = s.url.slice( cacheURL.length );
	
				// If data is available, append data to url
				if ( s.data ) {
					cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;
	
					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}
	
				// Add anti-cache in uncached url if needed
				if ( s.cache === false ) {
					cacheURL = cacheURL.replace( rts, "" );
					uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
				}
	
				// Put hash and anti-cache on the URL that will be requested (gh-1732)
				s.url = cacheURL + uncached;
	
			// Change '%20' to '+' if this is encoded form body content (gh-2658)
			} else if ( s.data && s.processData &&
				( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
				s.data = s.data.replace( r20, "+" );
			}
	
			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}
	
			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}
	
			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);
	
			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}
	
			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {
	
				// Abort if not done already and return
				return jqXHR.abort();
			}
	
			// Aborting is no longer a cancellation
			strAbort = "abort";
	
			// Install callbacks on deferreds
			completeDeferred.add( s.complete );
			jqXHR.done( s.success );
			jqXHR.fail( s.error );
	
			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );
	
			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;
	
				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}
	
				// If request was aborted inside ajaxSend, stop there
				if ( completed ) {
					return jqXHR;
				}
	
				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}
	
				try {
					completed = false;
					transport.send( requestHeaders, done );
				} catch ( e ) {
	
					// Rethrow post-completion exceptions
					if ( completed ) {
						throw e;
					}
	
					// Propagate others as results
					done( -1, e );
				}
			}
	
			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;
	
				// Ignore repeat invocations
				if ( completed ) {
					return;
				}
	
				completed = true;
	
				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}
	
				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;
	
				// Cache response headers
				responseHeadersString = headers || "";
	
				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;
	
				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;
	
				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}
	
				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );
	
				// If successful, handle type chaining
				if ( isSuccess ) {
	
					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}
	
					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";
	
					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";
	
					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {
	
					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}
	
				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";
	
				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}
	
				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;
	
				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}
	
				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );
	
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
	
					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}
	
			return jqXHR;
		},
	
		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},
	
		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );
	
	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {
	
			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}
	
			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );
	
	
	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,
	
			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,
			"throws": true
		} );
	};
	
	
	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;
	
			if ( this[ 0 ] ) {
				if ( jQuery.isFunction( html ) ) {
					html = html.call( this[ 0 ] );
				}
	
				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );
	
				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}
	
				wrap.map( function() {
					var elem = this;
	
					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}
	
					return elem;
				} ).append( this );
			}
	
			return this;
		},
	
		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}
	
			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();
	
				if ( contents.length ) {
					contents.wrapAll( html );
	
				} else {
					self.append( html );
				}
			} );
		},
	
		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );
	
			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},
	
		unwrap: function( selector ) {
			this.parent( selector ).not( "body" ).each( function() {
				jQuery( this ).replaceWith( this.childNodes );
			} );
			return this;
		}
	} );
	
	
	jQuery.expr.pseudos.hidden = function( elem ) {
		return !jQuery.expr.pseudos.visible( elem );
	};
	jQuery.expr.pseudos.visible = function( elem ) {
		return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
	};
	
	
	
	
	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};
	
	var xhrSuccessStatus = {
	
			// File protocol always yields status code 0, assume 200
			0: 200,
	
			// Support: IE <=9 only
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();
	
	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;
	
	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;
	
		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();
	
					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);
	
					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}
	
					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}
	
					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}
	
					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}
	
					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;
	
								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {
	
									// Support: IE <=9 only
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(
	
											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,
	
										// Support: IE <=9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};
	
					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );
	
					// Support: IE 9 only
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {
	
							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {
	
								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}
	
					// Create the abort callback
					callback = callback( "abort" );
	
					try {
	
						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {
	
						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},
	
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );
	
	
	
	
	// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
	jQuery.ajaxPrefilter( function( s ) {
		if ( s.crossDomain ) {
			s.contents.script = false;
		}
	} );
	
	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );
	
	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );
	
	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {
	
		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);
	
					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );
	
	
	
	
	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;
	
	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );
	
	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {
	
		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);
	
		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {
	
			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;
	
			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}
	
			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};
	
			// Force json dataType
			s.dataTypes[ 0 ] = "json";
	
			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};
	
			// Clean-up function (fires after converters)
			jqXHR.always( function() {
	
				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );
	
				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}
	
				// Save back as free
				if ( s[ callbackName ] ) {
	
					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;
	
					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}
	
				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}
	
				responseContainer = overwritten = undefined;
			} );
	
			// Delegate to script
			return "script";
		}
	} );
	
	
	
	
	// Support: Safari 8 only
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument = ( function() {
		var body = document.implementation.createHTMLDocument( "" ).body;
		body.innerHTML = "<form></form><form></form>";
		return body.childNodes.length === 2;
	} )();
	
	
	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( typeof data !== "string" ) {
			return [];
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
	
		var base, parsed, scripts;
	
		if ( !context ) {
	
			// Stop scripts or inline event handlers from being executed immediately
			// by using document.implementation
			if ( support.createHTMLDocument ) {
				context = document.implementation.createHTMLDocument( "" );
	
				// Set the base href for the created document
				// so any parsed elements with URLs
				// are based on the document's URL (gh-2965)
				base = context.createElement( "base" );
				base.href = document.location.href;
				context.head.appendChild( base );
			} else {
				context = document;
			}
		}
	
		parsed = rsingleTag.exec( data );
		scripts = !keepScripts && [];
	
		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}
	
		parsed = buildFragment( [ data ], context, scripts );
	
		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}
	
		return jQuery.merge( [], parsed.childNodes );
	};
	
	
	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		var selector, type, response,
			self = this,
			off = url.indexOf( " " );
	
		if ( off > -1 ) {
			selector = jQuery.trim( url.slice( off ) );
			url = url.slice( 0, off );
		}
	
		// If it's a function
		if ( jQuery.isFunction( params ) ) {
	
			// We assume that it's the callback
			callback = params;
			params = undefined;
	
		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}
	
		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,
	
				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {
	
				// Save response for use in complete callback
				response = arguments;
	
				self.html( selector ?
	
					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :
	
					// Otherwise use the full result
					responseText );
	
			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}
	
		return this;
	};
	
	
	
	
	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );
	
	
	
	
	jQuery.expr.pseudos.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};
	
	
	
	
	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}
	
	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};
	
			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}
	
			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;
	
			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;
	
			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}
	
			if ( jQuery.isFunction( options ) ) {
	
				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}
	
			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}
	
			if ( "using" in options ) {
				options.using.call( elem, props );
	
			} else {
				curElem.css( props );
			}
		}
	};
	
	jQuery.fn.extend( {
		offset: function( options ) {
	
			// Preserve chaining for setter
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}
	
			var docElem, win, rect, doc,
				elem = this[ 0 ];
	
			if ( !elem ) {
				return;
			}
	
			// Support: IE <=11 only
			// Running getBoundingClientRect on a
			// disconnected node in IE throws an error
			if ( !elem.getClientRects().length ) {
				return { top: 0, left: 0 };
			}
	
			rect = elem.getBoundingClientRect();
	
			// Make sure element is not hidden (display: none)
			if ( rect.width || rect.height ) {
				doc = elem.ownerDocument;
				win = getWindow( doc );
				docElem = doc.documentElement;
	
				return {
					top: rect.top + win.pageYOffset - docElem.clientTop,
					left: rect.left + win.pageXOffset - docElem.clientLeft
				};
			}
	
			// Return zeros for disconnected and hidden elements (gh-2310)
			return rect;
		},
	
		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}
	
			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };
	
			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {
	
				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();
	
			} else {
	
				// Get *real* offsetParent
				offsetParent = this.offsetParent();
	
				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}
	
				// Add offsetParent borders
				parentOffset = {
					top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
					left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
				};
			}
	
			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},
	
		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;
	
				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}
	
				return offsetParent || documentElement;
			} );
		}
	} );
	
	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;
	
		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );
	
				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}
	
				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);
	
				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );
	
	// Support: Safari <=7 - 9.1, Chrome <=37 - 49
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );
	
					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );
	
	
	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {
	
			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );
	
				return access( this, function( elem, type, value ) {
					var doc;
	
					if ( jQuery.isWindow( elem ) ) {
	
						// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
						return funcName.indexOf( "outer" ) === 0 ?
							elem[ "inner" + name ] :
							elem.document.documentElement[ "client" + name ];
					}
	
					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;
	
						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}
	
					return value === undefined ?
	
						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :
	
						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable );
			};
		} );
	} );
	
	
	jQuery.fn.extend( {
	
		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},
	
		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {
	
			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		}
	} );
	
	jQuery.parseJSON = JSON.parse;
	
	
	
	
	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.
	
	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
	
	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
	
	
	
	
	
	var
	
		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,
	
		// Map over the $ in case of overwrite
		_$ = window.$;
	
	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}
	
		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}
	
		return jQuery;
	};
	
	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}
	
	
	return jQuery;
	} ) );


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;// threejs.org/license
	'use strict';var THREE={REVISION:"79"}; true?!(__WEBPACK_AMD_DEFINE_FACTORY__ = (THREE), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"undefined"!==typeof exports&&"undefined"!==typeof module&&(module.exports=THREE);void 0===Number.EPSILON&&(Number.EPSILON=Math.pow(2,-52));void 0===Math.sign&&(Math.sign=function(a){return 0>a?-1:0<a?1:+a;});void 0===Function.prototype.name&&Object.defineProperty(Function.prototype,"name",{get:function get(){return this.toString().match(/^\s*function\s*(\S*)\s*\(/)[1];}});void 0===Object.assign&&function(){Object.assign=function(a){if(void 0===a||null===a)throw new TypeError("Cannot convert undefined or null to object");for(var b=Object(a),c=1;c<arguments.length;c++){var d=arguments[c];if(void 0!==d&&null!==d)for(var e in d){Object.prototype.hasOwnProperty.call(d,e)&&(b[e]=d[e]);}}return b;};}();Object.assign(THREE,{MOUSE:{LEFT:0,MIDDLE:1,RIGHT:2},CullFaceNone:0,CullFaceBack:1,CullFaceFront:2,CullFaceFrontBack:3,FrontFaceDirectionCW:0,FrontFaceDirectionCCW:1,BasicShadowMap:0,PCFShadowMap:1,PCFSoftShadowMap:2,FrontSide:0,BackSide:1,DoubleSide:2,FlatShading:1,SmoothShading:2,NoColors:0,FaceColors:1,VertexColors:2,NoBlending:0,NormalBlending:1,AdditiveBlending:2,SubtractiveBlending:3,MultiplyBlending:4,CustomBlending:5,AddEquation:100,SubtractEquation:101,ReverseSubtractEquation:102,MinEquation:103,MaxEquation:104,ZeroFactor:200,OneFactor:201,SrcColorFactor:202,OneMinusSrcColorFactor:203,SrcAlphaFactor:204,OneMinusSrcAlphaFactor:205,DstAlphaFactor:206,OneMinusDstAlphaFactor:207,DstColorFactor:208,OneMinusDstColorFactor:209,SrcAlphaSaturateFactor:210,NeverDepth:0,AlwaysDepth:1,LessDepth:2,LessEqualDepth:3,EqualDepth:4,GreaterEqualDepth:5,GreaterDepth:6,NotEqualDepth:7,MultiplyOperation:0,MixOperation:1,AddOperation:2,NoToneMapping:0,LinearToneMapping:1,ReinhardToneMapping:2,Uncharted2ToneMapping:3,CineonToneMapping:4,UVMapping:300,CubeReflectionMapping:301,CubeRefractionMapping:302,EquirectangularReflectionMapping:303,EquirectangularRefractionMapping:304,SphericalReflectionMapping:305,CubeUVReflectionMapping:306,CubeUVRefractionMapping:307,RepeatWrapping:1E3,ClampToEdgeWrapping:1001,MirroredRepeatWrapping:1002,NearestFilter:1003,NearestMipMapNearestFilter:1004,NearestMipMapLinearFilter:1005,LinearFilter:1006,LinearMipMapNearestFilter:1007,LinearMipMapLinearFilter:1008,UnsignedByteType:1009,ByteType:1010,ShortType:1011,UnsignedShortType:1012,IntType:1013,UnsignedIntType:1014,FloatType:1015,HalfFloatType:1025,UnsignedShort4444Type:1016,UnsignedShort5551Type:1017,UnsignedShort565Type:1018,AlphaFormat:1019,RGBFormat:1020,RGBAFormat:1021,LuminanceFormat:1022,LuminanceAlphaFormat:1023,RGBEFormat:THREE.RGBAFormat,DepthFormat:1026,RGB_S3TC_DXT1_Format:2001,RGBA_S3TC_DXT1_Format:2002,RGBA_S3TC_DXT3_Format:2003,RGBA_S3TC_DXT5_Format:2004,RGB_PVRTC_4BPPV1_Format:2100,RGB_PVRTC_2BPPV1_Format:2101,RGBA_PVRTC_4BPPV1_Format:2102,RGBA_PVRTC_2BPPV1_Format:2103,RGB_ETC1_Format:2151,LoopOnce:2200,LoopRepeat:2201,LoopPingPong:2202,InterpolateDiscrete:2300,InterpolateLinear:2301,InterpolateSmooth:2302,ZeroCurvatureEnding:2400,ZeroSlopeEnding:2401,WrapAroundEnding:2402,TrianglesDrawMode:0,TriangleStripDrawMode:1,TriangleFanDrawMode:2,LinearEncoding:3E3,sRGBEncoding:3001,GammaEncoding:3007,RGBEEncoding:3002,LogLuvEncoding:3003,RGBM7Encoding:3004,RGBM16Encoding:3005,RGBDEncoding:3006,BasicDepthPacking:3200,RGBADepthPacking:3201});THREE.Color=function(a,b,c){return void 0===b&&void 0===c?this.set(a):this.setRGB(a,b,c);};THREE.Color.prototype={constructor:THREE.Color,r:1,g:1,b:1,set:function set(a){a instanceof THREE.Color?this.copy(a):"number"===typeof a?this.setHex(a):"string"===typeof a&&this.setStyle(a);return this;},setScalar:function setScalar(a){this.b=this.g=this.r=a;},setHex:function setHex(a){a=Math.floor(a);this.r=(a>>16&255)/255;this.g=(a>>8&255)/255;this.b=(a&255)/255;return this;},setRGB:function setRGB(a,b,c){this.r=a;this.g=b;this.b=c;return this;},setHSL:function(){function a(a,c,d){0>d&&(d+=1);1<d&&(d-=1);return d<1/6?a+6*(c-a)*d:.5>d?c:d<2/3?a+6*(c-a)*(2/3-d):a;}return function(b,c,d){b=THREE.Math.euclideanModulo(b,1);c=THREE.Math.clamp(c,0,1);d=THREE.Math.clamp(d,0,1);0===c?this.r=this.g=this.b=d:(c=.5>=d?d*(1+c):d+c-d*c,d=2*d-c,this.r=a(d,c,b+1/3),this.g=a(d,c,b),this.b=a(d,c,b-1/3));return this;};}(),setStyle:function setStyle(a){function b(b){void 0!==b&&1>parseFloat(b)&&console.warn("THREE.Color: Alpha component of "+a+" will be ignored.");}var c;if(c=/^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(a)){var d=c[2];switch(c[1]){case"rgb":case"rgba":if(c=/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d))return this.r=Math.min(255,parseInt(c[1],10))/255,this.g=Math.min(255,parseInt(c[2],10))/255,this.b=Math.min(255,parseInt(c[3],10))/255,b(c[5]),this;if(c=/^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d))return this.r=Math.min(100,parseInt(c[1],10))/100,this.g=Math.min(100,parseInt(c[2],10))/100,this.b=Math.min(100,parseInt(c[3],10))/100,b(c[5]),this;break;case"hsl":case"hsla":if(c=/^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(d)){var d=parseFloat(c[1])/360,e=parseInt(c[2],10)/100,f=parseInt(c[3],10)/100;b(c[5]);return this.setHSL(d,e,f);}}}else if(c=/^\#([A-Fa-f0-9]+)$/.exec(a)){c=c[1];d=c.length;if(3===d)return this.r=parseInt(c.charAt(0)+c.charAt(0),16)/255,this.g=parseInt(c.charAt(1)+c.charAt(1),16)/255,this.b=parseInt(c.charAt(2)+c.charAt(2),16)/255,this;if(6===d)return this.r=parseInt(c.charAt(0)+c.charAt(1),16)/255,this.g=parseInt(c.charAt(2)+c.charAt(3),16)/255,this.b=parseInt(c.charAt(4)+c.charAt(5),16)/255,this;}a&&0<a.length&&(c=THREE.ColorKeywords[a],void 0!==c?this.setHex(c):console.warn("THREE.Color: Unknown color "+a));return this;},clone:function clone(){return new this.constructor(this.r,this.g,this.b);},copy:function copy(a){this.r=a.r;this.g=a.g;this.b=a.b;return this;},copyGammaToLinear:function copyGammaToLinear(a,b){void 0===b&&(b=2);this.r=Math.pow(a.r,b);this.g=Math.pow(a.g,b);this.b=Math.pow(a.b,b);return this;},copyLinearToGamma:function copyLinearToGamma(a,b){void 0===b&&(b=2);var c=0<b?1/b:1;this.r=Math.pow(a.r,c);this.g=Math.pow(a.g,c);this.b=Math.pow(a.b,c);return this;},convertGammaToLinear:function convertGammaToLinear(){var a=this.r,b=this.g,c=this.b;this.r=a*a;this.g=b*b;this.b=c*c;return this;},convertLinearToGamma:function convertLinearToGamma(){this.r=Math.sqrt(this.r);this.g=Math.sqrt(this.g);this.b=Math.sqrt(this.b);return this;},getHex:function getHex(){return 255*this.r<<16^255*this.g<<8^255*this.b<<0;},getHexString:function getHexString(){return("000000"+this.getHex().toString(16)).slice(-6);},getHSL:function getHSL(a){a=a||{h:0,s:0,l:0};var b=this.r,c=this.g,d=this.b,e=Math.max(b,c,d),f=Math.min(b,c,d),g,h=(f+e)/2;if(f===e)f=g=0;else{var k=e-f,f=.5>=h?k/(e+f):k/(2-e-f);switch(e){case b:g=(c-d)/k+(c<d?6:0);break;case c:g=(d-b)/k+2;break;case d:g=(b-c)/k+4;}g/=6;}a.h=g;a.s=f;a.l=h;return a;},getStyle:function getStyle(){return"rgb("+(255*this.r|0)+","+(255*this.g|0)+","+(255*this.b|0)+")";},offsetHSL:function offsetHSL(a,b,c){var d=this.getHSL();d.h+=a;d.s+=b;d.l+=c;this.setHSL(d.h,d.s,d.l);return this;},add:function add(a){this.r+=a.r;this.g+=a.g;this.b+=a.b;return this;},addColors:function addColors(a,b){this.r=a.r+b.r;this.g=a.g+b.g;this.b=a.b+b.b;return this;},addScalar:function addScalar(a){this.r+=a;this.g+=a;this.b+=a;return this;},sub:function sub(a){this.r=Math.max(0,this.r-a.r);this.g=Math.max(0,this.g-a.g);this.b=Math.max(0,this.b-a.b);return this;},multiply:function multiply(a){this.r*=a.r;this.g*=a.g;this.b*=a.b;return this;},multiplyScalar:function multiplyScalar(a){this.r*=a;this.g*=a;this.b*=a;return this;},lerp:function lerp(a,b){this.r+=(a.r-this.r)*b;this.g+=(a.g-this.g)*b;this.b+=(a.b-this.b)*b;return this;},equals:function equals(a){return a.r===this.r&&a.g===this.g&&a.b===this.b;},fromArray:function fromArray(a,b){void 0===b&&(b=0);this.r=a[b];this.g=a[b+1];this.b=a[b+2];return this;},toArray:function toArray(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.r;a[b+1]=this.g;a[b+2]=this.b;return a;}};THREE.ColorKeywords={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};THREE.Quaternion=function(a,b,c,d){this._x=a||0;this._y=b||0;this._z=c||0;this._w=void 0!==d?d:1;};THREE.Quaternion.prototype={constructor:THREE.Quaternion,get x(){return this._x;},set x(a){this._x=a;this.onChangeCallback();},get y(){return this._y;},set y(a){this._y=a;this.onChangeCallback();},get z(){return this._z;},set z(a){this._z=a;this.onChangeCallback();},get w(){return this._w;},set w(a){this._w=a;this.onChangeCallback();},set:function set(a,b,c,d){this._x=a;this._y=b;this._z=c;this._w=d;this.onChangeCallback();return this;},clone:function clone(){return new this.constructor(this._x,this._y,this._z,this._w);},copy:function copy(a){this._x=a.x;this._y=a.y;this._z=a.z;this._w=a.w;this.onChangeCallback();return this;},setFromEuler:function setFromEuler(a,b){if(!1===a instanceof THREE.Euler)throw Error("THREE.Quaternion: .setFromEuler() now expects a Euler rotation rather than a Vector3 and order.");var c=Math.cos(a._x/2),d=Math.cos(a._y/2),e=Math.cos(a._z/2),f=Math.sin(a._x/2),g=Math.sin(a._y/2),h=Math.sin(a._z/2),k=a.order;"XYZ"===k?(this._x=f*d*e+c*g*h,this._y=c*g*e-f*d*h,this._z=c*d*h+f*g*e,this._w=c*d*e-f*g*h):"YXZ"===k?(this._x=f*d*e+c*g*h,this._y=c*g*e-f*d*h,this._z=c*d*h-f*g*e,this._w=c*d*e+f*g*h):"ZXY"===k?(this._x=f*d*e-c*g*h,this._y=c*g*e+f*d*h,this._z=c*d*h+f*g*e,this._w=c*d*e-f*g*h):"ZYX"===k?(this._x=f*d*e-c*g*h,this._y=c*g*e+f*d*h,this._z=c*d*h-f*g*e,this._w=c*d*e+f*g*h):"YZX"===k?(this._x=f*d*e+c*g*h,this._y=c*g*e+f*d*h,this._z=c*d*h-f*g*e,this._w=c*d*e-f*g*h):"XZY"===k&&(this._x=f*d*e-c*g*h,this._y=c*g*e-f*d*h,this._z=c*d*h+f*g*e,this._w=c*d*e+f*g*h);if(!1!==b)this.onChangeCallback();return this;},setFromAxisAngle:function setFromAxisAngle(a,b){var c=b/2,d=Math.sin(c);this._x=a.x*d;this._y=a.y*d;this._z=a.z*d;this._w=Math.cos(c);this.onChangeCallback();return this;},setFromRotationMatrix:function setFromRotationMatrix(a){var b=a.elements,c=b[0];a=b[4];var d=b[8],e=b[1],f=b[5],g=b[9],h=b[2],k=b[6],b=b[10],l=c+f+b;0<l?(c=.5/Math.sqrt(l+1),this._w=.25/c,this._x=(k-g)*c,this._y=(d-h)*c,this._z=(e-a)*c):c>f&&c>b?(c=2*Math.sqrt(1+c-f-b),this._w=(k-g)/c,this._x=.25*c,this._y=(a+e)/c,this._z=(d+h)/c):f>b?(c=2*Math.sqrt(1+f-c-b),this._w=(d-h)/c,this._x=(a+e)/c,this._y=.25*c,this._z=(g+k)/c):(c=2*Math.sqrt(1+b-c-f),this._w=(e-a)/c,this._x=(d+h)/c,this._y=(g+k)/c,this._z=.25*c);this.onChangeCallback();return this;},setFromUnitVectors:function(){var a,b;return function(c,d){void 0===a&&(a=new THREE.Vector3());b=c.dot(d)+1;1E-6>b?(b=0,Math.abs(c.x)>Math.abs(c.z)?a.set(-c.y,c.x,0):a.set(0,-c.z,c.y)):a.crossVectors(c,d);this._x=a.x;this._y=a.y;this._z=a.z;this._w=b;return this.normalize();};}(),inverse:function inverse(){return this.conjugate().normalize();},conjugate:function conjugate(){this._x*=-1;this._y*=-1;this._z*=-1;this.onChangeCallback();return this;},dot:function dot(a){return this._x*a._x+this._y*a._y+this._z*a._z+this._w*a._w;},lengthSq:function lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w;},length:function length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w);},normalize:function normalize(){var a=this.length();0===a?(this._z=this._y=this._x=0,this._w=1):(a=1/a,this._x*=a,this._y*=a,this._z*=a,this._w*=a);this.onChangeCallback();return this;},multiply:function multiply(a,b){return void 0!==b?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(a,b)):this.multiplyQuaternions(this,a);},premultiply:function premultiply(a){return this.multiplyQuaternions(a,this);},multiplyQuaternions:function multiplyQuaternions(a,b){var c=a._x,d=a._y,e=a._z,f=a._w,g=b._x,h=b._y,k=b._z,l=b._w;this._x=c*l+f*g+d*k-e*h;this._y=d*l+f*h+e*g-c*k;this._z=e*l+f*k+c*h-d*g;this._w=f*l-c*g-d*h-e*k;this.onChangeCallback();return this;},slerp:function slerp(a,b){if(0===b)return this;if(1===b)return this.copy(a);var c=this._x,d=this._y,e=this._z,f=this._w,g=f*a._w+c*a._x+d*a._y+e*a._z;0>g?(this._w=-a._w,this._x=-a._x,this._y=-a._y,this._z=-a._z,g=-g):this.copy(a);if(1<=g)return this._w=f,this._x=c,this._y=d,this._z=e,this;var h=Math.sqrt(1-g*g);if(.001>Math.abs(h))return this._w=.5*(f+this._w),this._x=.5*(c+this._x),this._y=.5*(d+this._y),this._z=.5*(e+this._z),this;var k=Math.atan2(h,g),g=Math.sin((1-b)*k)/h,h=Math.sin(b*k)/h;this._w=f*g+this._w*h;this._x=c*g+this._x*h;this._y=d*g+this._y*h;this._z=e*g+this._z*h;this.onChangeCallback();return this;},equals:function equals(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._w===this._w;},fromArray:function fromArray(a,b){void 0===b&&(b=0);this._x=a[b];this._y=a[b+1];this._z=a[b+2];this._w=a[b+3];this.onChangeCallback();return this;},toArray:function toArray(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this._x;a[b+1]=this._y;a[b+2]=this._z;a[b+3]=this._w;return a;},onChange:function onChange(a){this.onChangeCallback=a;return this;},onChangeCallback:function onChangeCallback(){}};Object.assign(THREE.Quaternion,{slerp:function slerp(a,b,c,d){return c.copy(a).slerp(b,d);},slerpFlat:function slerpFlat(a,b,c,d,e,f,g){var h=c[d+0],k=c[d+1],l=c[d+2];c=c[d+3];d=e[f+0];var m=e[f+1],p=e[f+2];e=e[f+3];if(c!==e||h!==d||k!==m||l!==p){f=1-g;var n=h*d+k*m+l*p+c*e,q=0<=n?1:-1,r=1-n*n;r>Number.EPSILON&&(r=Math.sqrt(r),n=Math.atan2(r,n*q),f=Math.sin(f*n)/r,g=Math.sin(g*n)/r);q*=g;h=h*f+d*q;k=k*f+m*q;l=l*f+p*q;c=c*f+e*q;f===1-g&&(g=1/Math.sqrt(h*h+k*k+l*l+c*c),h*=g,k*=g,l*=g,c*=g);}a[b]=h;a[b+1]=k;a[b+2]=l;a[b+3]=c;}});THREE.Vector2=function(a,b){this.x=a||0;this.y=b||0;};THREE.Vector2.prototype={constructor:THREE.Vector2,get width(){return this.x;},set width(a){this.x=a;},get height(){return this.y;},set height(a){this.y=a;},set:function set(a,b){this.x=a;this.y=b;return this;},setScalar:function setScalar(a){this.y=this.x=a;return this;},setX:function setX(a){this.x=a;return this;},setY:function setY(a){this.y=a;return this;},setComponent:function setComponent(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;default:throw Error("index is out of range: "+a);}},getComponent:function getComponent(a){switch(a){case 0:return this.x;case 1:return this.y;default:throw Error("index is out of range: "+a);}},clone:function clone(){return new this.constructor(this.x,this.y);},copy:function copy(a){this.x=a.x;this.y=a.y;return this;},add:function add(a,b){if(void 0!==b)return console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;return this;},addScalar:function addScalar(a){this.x+=a;this.y+=a;return this;},addVectors:function addVectors(a,b){this.x=a.x+b.x;this.y=a.y+b.y;return this;},addScaledVector:function addScaledVector(a,b){this.x+=a.x*b;this.y+=a.y*b;return this;},sub:function sub(a,b){if(void 0!==b)return console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=a.y;return this;},subScalar:function subScalar(a){this.x-=a;this.y-=a;return this;},subVectors:function subVectors(a,b){this.x=a.x-b.x;this.y=a.y-b.y;return this;},multiply:function multiply(a){this.x*=a.x;this.y*=a.y;return this;},multiplyScalar:function multiplyScalar(a){isFinite(a)?(this.x*=a,this.y*=a):this.y=this.x=0;return this;},divide:function divide(a){this.x/=a.x;this.y/=a.y;return this;},divideScalar:function divideScalar(a){return this.multiplyScalar(1/a);},min:function min(a){this.x=Math.min(this.x,a.x);this.y=Math.min(this.y,a.y);return this;},max:function max(a){this.x=Math.max(this.x,a.x);this.y=Math.max(this.y,a.y);return this;},clamp:function clamp(a,b){this.x=Math.max(a.x,Math.min(b.x,this.x));this.y=Math.max(a.y,Math.min(b.y,this.y));return this;},clampScalar:function(){var a,b;return function(c,d){void 0===a&&(a=new THREE.Vector2(),b=new THREE.Vector2());a.set(c,c);b.set(d,d);return this.clamp(a,b);};}(),clampLength:function clampLength(a,b){var c=this.length();return this.multiplyScalar(Math.max(a,Math.min(b,c))/c);},floor:function floor(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this;},ceil:function ceil(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this;},round:function round(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this;},roundToZero:function roundToZero(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);return this;},negate:function negate(){this.x=-this.x;this.y=-this.y;return this;},dot:function dot(a){return this.x*a.x+this.y*a.y;},lengthSq:function lengthSq(){return this.x*this.x+this.y*this.y;},length:function length(){return Math.sqrt(this.x*this.x+this.y*this.y);},lengthManhattan:function lengthManhattan(){return Math.abs(this.x)+Math.abs(this.y);},normalize:function normalize(){return this.divideScalar(this.length());},angle:function angle(){var a=Math.atan2(this.y,this.x);0>a&&(a+=2*Math.PI);return a;},distanceTo:function distanceTo(a){return Math.sqrt(this.distanceToSquared(a));},distanceToSquared:function distanceToSquared(a){var b=this.x-a.x;a=this.y-a.y;return b*b+a*a;},distanceToManhattan:function distanceToManhattan(a){return Math.abs(this.x-a.x)+Math.abs(this.y-a.y);},setLength:function setLength(a){return this.multiplyScalar(a/this.length());},lerp:function lerp(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;return this;},lerpVectors:function lerpVectors(a,b,c){return this.subVectors(b,a).multiplyScalar(c).add(a);},equals:function equals(a){return a.x===this.x&&a.y===this.y;},fromArray:function fromArray(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];return this;},toArray:function toArray(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;return a;},fromAttribute:function fromAttribute(a,b,c){void 0===c&&(c=0);b=b*a.itemSize+c;this.x=a.array[b];this.y=a.array[b+1];return this;},rotateAround:function rotateAround(a,b){var c=Math.cos(b),d=Math.sin(b),e=this.x-a.x,f=this.y-a.y;this.x=e*c-f*d+a.x;this.y=e*d+f*c+a.y;return this;}};THREE.Vector3=function(a,b,c){this.x=a||0;this.y=b||0;this.z=c||0;};THREE.Vector3.prototype={constructor:THREE.Vector3,set:function set(a,b,c){this.x=a;this.y=b;this.z=c;return this;},setScalar:function setScalar(a){this.z=this.y=this.x=a;return this;},setX:function setX(a){this.x=a;return this;},setY:function setY(a){this.y=a;return this;},setZ:function setZ(a){this.z=a;return this;},setComponent:function setComponent(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;default:throw Error("index is out of range: "+a);}},getComponent:function getComponent(a){switch(a){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error("index is out of range: "+a);}},clone:function clone(){return new this.constructor(this.x,this.y,this.z);},copy:function copy(a){this.x=a.x;this.y=a.y;this.z=a.z;return this;},add:function add(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;this.z+=a.z;return this;},addScalar:function addScalar(a){this.x+=a;this.y+=a;this.z+=a;return this;},addVectors:function addVectors(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;return this;},addScaledVector:function addScaledVector(a,b){this.x+=a.x*b;this.y+=a.y*b;this.z+=a.z*b;return this;},sub:function sub(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=a.y;this.z-=a.z;return this;},subScalar:function subScalar(a){this.x-=a;this.y-=a;this.z-=a;return this;},subVectors:function subVectors(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;return this;},multiply:function multiply(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(a,b);this.x*=a.x;this.y*=a.y;this.z*=a.z;return this;},multiplyScalar:function multiplyScalar(a){isFinite(a)?(this.x*=a,this.y*=a,this.z*=a):this.z=this.y=this.x=0;return this;},multiplyVectors:function multiplyVectors(a,b){this.x=a.x*b.x;this.y=a.y*b.y;this.z=a.z*b.z;return this;},applyEuler:function(){var a;return function(b){!1===b instanceof THREE.Euler&&console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order.");void 0===a&&(a=new THREE.Quaternion());return this.applyQuaternion(a.setFromEuler(b));};}(),applyAxisAngle:function(){var a;return function(b,c){void 0===a&&(a=new THREE.Quaternion());return this.applyQuaternion(a.setFromAxisAngle(b,c));};}(),applyMatrix3:function applyMatrix3(a){var b=this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[3]*c+a[6]*d;this.y=a[1]*b+a[4]*c+a[7]*d;this.z=a[2]*b+a[5]*c+a[8]*d;return this;},applyMatrix4:function applyMatrix4(a){var b=this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d+a[12];this.y=a[1]*b+a[5]*c+a[9]*d+a[13];this.z=a[2]*b+a[6]*c+a[10]*d+a[14];return this;},applyProjection:function applyProjection(a){var b=this.x,c=this.y,d=this.z;a=a.elements;var e=1/(a[3]*b+a[7]*c+a[11]*d+a[15]);this.x=(a[0]*b+a[4]*c+a[8]*d+a[12])*e;this.y=(a[1]*b+a[5]*c+a[9]*d+a[13])*e;this.z=(a[2]*b+a[6]*c+a[10]*d+a[14])*e;return this;},applyQuaternion:function applyQuaternion(a){var b=this.x,c=this.y,d=this.z,e=a.x,f=a.y,g=a.z;a=a.w;var h=a*b+f*d-g*c,k=a*c+g*b-e*d,l=a*d+e*c-f*b,b=-e*b-f*c-g*d;this.x=h*a+b*-e+k*-g-l*-f;this.y=k*a+b*-f+l*-e-h*-g;this.z=l*a+b*-g+h*-f-k*-e;return this;},project:function(){var a;return function(b){void 0===a&&(a=new THREE.Matrix4());a.multiplyMatrices(b.projectionMatrix,a.getInverse(b.matrixWorld));return this.applyProjection(a);};}(),unproject:function(){var a;return function(b){void 0===a&&(a=new THREE.Matrix4());a.multiplyMatrices(b.matrixWorld,a.getInverse(b.projectionMatrix));return this.applyProjection(a);};}(),transformDirection:function transformDirection(a){var b=this.x,c=this.y,d=this.z;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d;this.y=a[1]*b+a[5]*c+a[9]*d;this.z=a[2]*b+a[6]*c+a[10]*d;return this.normalize();},divide:function divide(a){this.x/=a.x;this.y/=a.y;this.z/=a.z;return this;},divideScalar:function divideScalar(a){return this.multiplyScalar(1/a);},min:function min(a){this.x=Math.min(this.x,a.x);this.y=Math.min(this.y,a.y);this.z=Math.min(this.z,a.z);return this;},max:function max(a){this.x=Math.max(this.x,a.x);this.y=Math.max(this.y,a.y);this.z=Math.max(this.z,a.z);return this;},clamp:function clamp(a,b){this.x=Math.max(a.x,Math.min(b.x,this.x));this.y=Math.max(a.y,Math.min(b.y,this.y));this.z=Math.max(a.z,Math.min(b.z,this.z));return this;},clampScalar:function(){var a,b;return function(c,d){void 0===a&&(a=new THREE.Vector3(),b=new THREE.Vector3());a.set(c,c,c);b.set(d,d,d);return this.clamp(a,b);};}(),clampLength:function clampLength(a,b){var c=this.length();return this.multiplyScalar(Math.max(a,Math.min(b,c))/c);},floor:function floor(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);this.z=Math.floor(this.z);return this;},ceil:function ceil(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);this.z=Math.ceil(this.z);return this;},round:function round(){this.x=Math.round(this.x);this.y=Math.round(this.y);this.z=Math.round(this.z);return this;},roundToZero:function roundToZero(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);this.z=0>this.z?Math.ceil(this.z):Math.floor(this.z);return this;},negate:function negate(){this.x=-this.x;this.y=-this.y;this.z=-this.z;return this;},dot:function dot(a){return this.x*a.x+this.y*a.y+this.z*a.z;},lengthSq:function lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z;},length:function length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z);},lengthManhattan:function lengthManhattan(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z);},normalize:function normalize(){return this.divideScalar(this.length());},setLength:function setLength(a){return this.multiplyScalar(a/this.length());},lerp:function lerp(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;return this;},lerpVectors:function lerpVectors(a,b,c){return this.subVectors(b,a).multiplyScalar(c).add(a);},cross:function cross(a,b){if(void 0!==b)return console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(a,b);var c=this.x,d=this.y,e=this.z;this.x=d*a.z-e*a.y;this.y=e*a.x-c*a.z;this.z=c*a.y-d*a.x;return this;},crossVectors:function crossVectors(a,b){var c=a.x,d=a.y,e=a.z,f=b.x,g=b.y,h=b.z;this.x=d*h-e*g;this.y=e*f-c*h;this.z=c*g-d*f;return this;},projectOnVector:function projectOnVector(a){var b=a.dot(this)/a.lengthSq();return this.copy(a).multiplyScalar(b);},projectOnPlane:function(){var a;return function(b){void 0===a&&(a=new THREE.Vector3());a.copy(this).projectOnVector(b);return this.sub(a);};}(),reflect:function(){var a;return function(b){void 0===a&&(a=new THREE.Vector3());return this.sub(a.copy(b).multiplyScalar(2*this.dot(b)));};}(),angleTo:function angleTo(a){a=this.dot(a)/Math.sqrt(this.lengthSq()*a.lengthSq());return Math.acos(THREE.Math.clamp(a,-1,1));},distanceTo:function distanceTo(a){return Math.sqrt(this.distanceToSquared(a));},distanceToSquared:function distanceToSquared(a){var b=this.x-a.x,c=this.y-a.y;a=this.z-a.z;return b*b+c*c+a*a;},distanceToManhattan:function distanceToManhattan(a){return Math.abs(this.x-a.x)+Math.abs(this.y-a.y)+Math.abs(this.z-a.z);},setFromSpherical:function setFromSpherical(a){var b=Math.sin(a.phi)*a.radius;this.x=b*Math.sin(a.theta);this.y=Math.cos(a.phi)*a.radius;this.z=b*Math.cos(a.theta);return this;},setFromMatrixPosition:function setFromMatrixPosition(a){return this.setFromMatrixColumn(a,3);},setFromMatrixScale:function setFromMatrixScale(a){var b=this.setFromMatrixColumn(a,0).length(),c=this.setFromMatrixColumn(a,1).length();a=this.setFromMatrixColumn(a,2).length();this.x=b;this.y=c;this.z=a;return this;},setFromMatrixColumn:function setFromMatrixColumn(a,b){if("number"===typeof a){console.warn("THREE.Vector3: setFromMatrixColumn now expects ( matrix, index ).");var c=a;a=b;b=c;}return this.fromArray(a.elements,4*b);},equals:function equals(a){return a.x===this.x&&a.y===this.y&&a.z===this.z;},fromArray:function fromArray(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];this.z=a[b+2];return this;},toArray:function toArray(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;a[b+2]=this.z;return a;},fromAttribute:function fromAttribute(a,b,c){void 0===c&&(c=0);b=b*a.itemSize+c;this.x=a.array[b];this.y=a.array[b+1];this.z=a.array[b+2];return this;}};THREE.Vector4=function(a,b,c,d){this.x=a||0;this.y=b||0;this.z=c||0;this.w=void 0!==d?d:1;};THREE.Vector4.prototype={constructor:THREE.Vector4,set:function set(a,b,c,d){this.x=a;this.y=b;this.z=c;this.w=d;return this;},setScalar:function setScalar(a){this.w=this.z=this.y=this.x=a;return this;},setX:function setX(a){this.x=a;return this;},setY:function setY(a){this.y=a;return this;},setZ:function setZ(a){this.z=a;return this;},setW:function setW(a){this.w=a;return this;},setComponent:function setComponent(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;case 3:this.w=b;break;default:throw Error("index is out of range: "+a);}},getComponent:function getComponent(a){switch(a){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error("index is out of range: "+a);}},clone:function clone(){return new this.constructor(this.x,this.y,this.z,this.w);},copy:function copy(a){this.x=a.x;this.y=a.y;this.z=a.z;this.w=void 0!==a.w?a.w:1;return this;},add:function add(a,b){if(void 0!==b)return console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b);this.x+=a.x;this.y+=a.y;this.z+=a.z;this.w+=a.w;return this;},addScalar:function addScalar(a){this.x+=a;this.y+=a;this.z+=a;this.w+=a;return this;},addVectors:function addVectors(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;this.w=a.w+b.w;return this;},addScaledVector:function addScaledVector(a,b){this.x+=a.x*b;this.y+=a.y*b;this.z+=a.z*b;this.w+=a.w*b;return this;},sub:function sub(a,b){if(void 0!==b)return console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b);this.x-=a.x;this.y-=a.y;this.z-=a.z;this.w-=a.w;return this;},subScalar:function subScalar(a){this.x-=a;this.y-=a;this.z-=a;this.w-=a;return this;},subVectors:function subVectors(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;this.w=a.w-b.w;return this;},multiplyScalar:function multiplyScalar(a){isFinite(a)?(this.x*=a,this.y*=a,this.z*=a,this.w*=a):this.w=this.z=this.y=this.x=0;return this;},applyMatrix4:function applyMatrix4(a){var b=this.x,c=this.y,d=this.z,e=this.w;a=a.elements;this.x=a[0]*b+a[4]*c+a[8]*d+a[12]*e;this.y=a[1]*b+a[5]*c+a[9]*d+a[13]*e;this.z=a[2]*b+a[6]*c+a[10]*d+a[14]*e;this.w=a[3]*b+a[7]*c+a[11]*d+a[15]*e;return this;},divideScalar:function divideScalar(a){return this.multiplyScalar(1/a);},setAxisAngleFromQuaternion:function setAxisAngleFromQuaternion(a){this.w=2*Math.acos(a.w);var b=Math.sqrt(1-a.w*a.w);1E-4>b?(this.x=1,this.z=this.y=0):(this.x=a.x/b,this.y=a.y/b,this.z=a.z/b);return this;},setAxisAngleFromRotationMatrix:function setAxisAngleFromRotationMatrix(a){var b,c,d;a=a.elements;var e=a[0];d=a[4];var f=a[8],g=a[1],h=a[5],k=a[9];c=a[2];b=a[6];var l=a[10];if(.01>Math.abs(d-g)&&.01>Math.abs(f-c)&&.01>Math.abs(k-b)){if(.1>Math.abs(d+g)&&.1>Math.abs(f+c)&&.1>Math.abs(k+b)&&.1>Math.abs(e+h+l-3))return this.set(1,0,0,0),this;a=Math.PI;e=(e+1)/2;h=(h+1)/2;l=(l+1)/2;d=(d+g)/4;f=(f+c)/4;k=(k+b)/4;e>h&&e>l?.01>e?(b=0,d=c=.707106781):(b=Math.sqrt(e),c=d/b,d=f/b):h>l?.01>h?(b=.707106781,c=0,d=.707106781):(c=Math.sqrt(h),b=d/c,d=k/c):.01>l?(c=b=.707106781,d=0):(d=Math.sqrt(l),b=f/d,c=k/d);this.set(b,c,d,a);return this;}a=Math.sqrt((b-k)*(b-k)+(f-c)*(f-c)+(g-d)*(g-d));.001>Math.abs(a)&&(a=1);this.x=(b-k)/a;this.y=(f-c)/a;this.z=(g-d)/a;this.w=Math.acos((e+h+l-1)/2);return this;},min:function min(a){this.x=Math.min(this.x,a.x);this.y=Math.min(this.y,a.y);this.z=Math.min(this.z,a.z);this.w=Math.min(this.w,a.w);return this;},max:function max(a){this.x=Math.max(this.x,a.x);this.y=Math.max(this.y,a.y);this.z=Math.max(this.z,a.z);this.w=Math.max(this.w,a.w);return this;},clamp:function clamp(a,b){this.x=Math.max(a.x,Math.min(b.x,this.x));this.y=Math.max(a.y,Math.min(b.y,this.y));this.z=Math.max(a.z,Math.min(b.z,this.z));this.w=Math.max(a.w,Math.min(b.w,this.w));return this;},clampScalar:function(){var a,b;return function(c,d){void 0===a&&(a=new THREE.Vector4(),b=new THREE.Vector4());a.set(c,c,c,c);b.set(d,d,d,d);return this.clamp(a,b);};}(),floor:function floor(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);this.z=Math.floor(this.z);this.w=Math.floor(this.w);return this;},ceil:function ceil(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);this.z=Math.ceil(this.z);this.w=Math.ceil(this.w);return this;},round:function round(){this.x=Math.round(this.x);this.y=Math.round(this.y);this.z=Math.round(this.z);this.w=Math.round(this.w);return this;},roundToZero:function roundToZero(){this.x=0>this.x?Math.ceil(this.x):Math.floor(this.x);this.y=0>this.y?Math.ceil(this.y):Math.floor(this.y);this.z=0>this.z?Math.ceil(this.z):Math.floor(this.z);this.w=0>this.w?Math.ceil(this.w):Math.floor(this.w);return this;},negate:function negate(){this.x=-this.x;this.y=-this.y;this.z=-this.z;this.w=-this.w;return this;},dot:function dot(a){return this.x*a.x+this.y*a.y+this.z*a.z+this.w*a.w;},lengthSq:function lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w;},length:function length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);},lengthManhattan:function lengthManhattan(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w);},normalize:function normalize(){return this.divideScalar(this.length());},setLength:function setLength(a){return this.multiplyScalar(a/this.length());},lerp:function lerp(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;this.w+=(a.w-this.w)*b;return this;},lerpVectors:function lerpVectors(a,b,c){return this.subVectors(b,a).multiplyScalar(c).add(a);},equals:function equals(a){return a.x===this.x&&a.y===this.y&&a.z===this.z&&a.w===this.w;},fromArray:function fromArray(a,b){void 0===b&&(b=0);this.x=a[b];this.y=a[b+1];this.z=a[b+2];this.w=a[b+3];return this;},toArray:function toArray(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this.x;a[b+1]=this.y;a[b+2]=this.z;a[b+3]=this.w;return a;},fromAttribute:function fromAttribute(a,b,c){void 0===c&&(c=0);b=b*a.itemSize+c;this.x=a.array[b];this.y=a.array[b+1];this.z=a.array[b+2];this.w=a.array[b+3];return this;}};THREE.Euler=function(a,b,c,d){this._x=a||0;this._y=b||0;this._z=c||0;this._order=d||THREE.Euler.DefaultOrder;};THREE.Euler.RotationOrders="XYZ YZX ZXY XZY YXZ ZYX".split(" ");THREE.Euler.DefaultOrder="XYZ";THREE.Euler.prototype={constructor:THREE.Euler,get x(){return this._x;},set x(a){this._x=a;this.onChangeCallback();},get y(){return this._y;},set y(a){this._y=a;this.onChangeCallback();},get z(){return this._z;},set z(a){this._z=a;this.onChangeCallback();},get order(){return this._order;},set order(a){this._order=a;this.onChangeCallback();},set:function set(a,b,c,d){this._x=a;this._y=b;this._z=c;this._order=d||this._order;this.onChangeCallback();return this;},clone:function clone(){return new this.constructor(this._x,this._y,this._z,this._order);},copy:function copy(a){this._x=a._x;this._y=a._y;this._z=a._z;this._order=a._order;this.onChangeCallback();return this;},setFromRotationMatrix:function setFromRotationMatrix(a,b,c){var d=THREE.Math.clamp,e=a.elements;a=e[0];var f=e[4],g=e[8],h=e[1],k=e[5],l=e[9],m=e[2],p=e[6],e=e[10];b=b||this._order;"XYZ"===b?(this._y=Math.asin(d(g,-1,1)),.99999>Math.abs(g)?(this._x=Math.atan2(-l,e),this._z=Math.atan2(-f,a)):(this._x=Math.atan2(p,k),this._z=0)):"YXZ"===b?(this._x=Math.asin(-d(l,-1,1)),.99999>Math.abs(l)?(this._y=Math.atan2(g,e),this._z=Math.atan2(h,k)):(this._y=Math.atan2(-m,a),this._z=0)):"ZXY"===b?(this._x=Math.asin(d(p,-1,1)),.99999>Math.abs(p)?(this._y=Math.atan2(-m,e),this._z=Math.atan2(-f,k)):(this._y=0,this._z=Math.atan2(h,a))):"ZYX"===b?(this._y=Math.asin(-d(m,-1,1)),.99999>Math.abs(m)?(this._x=Math.atan2(p,e),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-f,k))):"YZX"===b?(this._z=Math.asin(d(h,-1,1)),.99999>Math.abs(h)?(this._x=Math.atan2(-l,k),this._y=Math.atan2(-m,a)):(this._x=0,this._y=Math.atan2(g,e))):"XZY"===b?(this._z=Math.asin(-d(f,-1,1)),.99999>Math.abs(f)?(this._x=Math.atan2(p,k),this._y=Math.atan2(g,a)):(this._x=Math.atan2(-l,e),this._y=0)):console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: "+b);this._order=b;if(!1!==c)this.onChangeCallback();return this;},setFromQuaternion:function(){var a;return function(b,c,d){void 0===a&&(a=new THREE.Matrix4());a.makeRotationFromQuaternion(b);return this.setFromRotationMatrix(a,c,d);};}(),setFromVector3:function setFromVector3(a,b){return this.set(a.x,a.y,a.z,b||this._order);},reorder:function(){var a=new THREE.Quaternion();return function(b){a.setFromEuler(this);return this.setFromQuaternion(a,b);};}(),equals:function equals(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._order===this._order;},fromArray:function fromArray(a){this._x=a[0];this._y=a[1];this._z=a[2];void 0!==a[3]&&(this._order=a[3]);this.onChangeCallback();return this;},toArray:function toArray(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);a[b]=this._x;a[b+1]=this._y;a[b+2]=this._z;a[b+3]=this._order;return a;},toVector3:function toVector3(a){return a?a.set(this._x,this._y,this._z):new THREE.Vector3(this._x,this._y,this._z);},onChange:function onChange(a){this.onChangeCallback=a;return this;},onChangeCallback:function onChangeCallback(){}};THREE.Line3=function(a,b){this.start=void 0!==a?a:new THREE.Vector3();this.end=void 0!==b?b:new THREE.Vector3();};THREE.Line3.prototype={constructor:THREE.Line3,set:function set(a,b){this.start.copy(a);this.end.copy(b);return this;},clone:function clone(){return new this.constructor().copy(this);},copy:function copy(a){this.start.copy(a.start);this.end.copy(a.end);return this;},center:function center(a){return(a||new THREE.Vector3()).addVectors(this.start,this.end).multiplyScalar(.5);},delta:function delta(a){return(a||new THREE.Vector3()).subVectors(this.end,this.start);},distanceSq:function distanceSq(){return this.start.distanceToSquared(this.end);},distance:function distance(){return this.start.distanceTo(this.end);},at:function at(a,b){var c=b||new THREE.Vector3();return this.delta(c).multiplyScalar(a).add(this.start);},closestPointToPointParameter:function(){var a=new THREE.Vector3(),b=new THREE.Vector3();return function(c,d){a.subVectors(c,this.start);b.subVectors(this.end,this.start);var e=b.dot(b),e=b.dot(a)/e;d&&(e=THREE.Math.clamp(e,0,1));return e;};}(),closestPointToPoint:function closestPointToPoint(a,b,c){a=this.closestPointToPointParameter(a,b);c=c||new THREE.Vector3();return this.delta(c).multiplyScalar(a).add(this.start);},applyMatrix4:function applyMatrix4(a){this.start.applyMatrix4(a);this.end.applyMatrix4(a);return this;},equals:function equals(a){return a.start.equals(this.start)&&a.end.equals(this.end);}};THREE.Box2=function(a,b){this.min=void 0!==a?a:new THREE.Vector2(Infinity,Infinity);this.max=void 0!==b?b:new THREE.Vector2(-Infinity,-Infinity);};THREE.Box2.prototype={constructor:THREE.Box2,set:function set(a,b){this.min.copy(a);this.max.copy(b);return this;},setFromPoints:function setFromPoints(a){this.makeEmpty();for(var b=0,c=a.length;b<c;b++){this.expandByPoint(a[b]);}return this;},setFromCenterAndSize:function(){var a=new THREE.Vector2();return function(b,c){var d=a.copy(c).multiplyScalar(.5);this.min.copy(b).sub(d);this.max.copy(b).add(d);return this;};}(),clone:function clone(){return new this.constructor().copy(this);},copy:function copy(a){this.min.copy(a.min);this.max.copy(a.max);return this;},makeEmpty:function makeEmpty(){this.min.x=this.min.y=Infinity;this.max.x=this.max.y=-Infinity;return this;},isEmpty:function isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y;},center:function center(a){return(a||new THREE.Vector2()).addVectors(this.min,this.max).multiplyScalar(.5);},size:function size(a){return(a||new THREE.Vector2()).subVectors(this.max,this.min);},expandByPoint:function expandByPoint(a){this.min.min(a);this.max.max(a);return this;},expandByVector:function expandByVector(a){this.min.sub(a);this.max.add(a);return this;},expandByScalar:function expandByScalar(a){this.min.addScalar(-a);this.max.addScalar(a);return this;},containsPoint:function containsPoint(a){return a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y?!1:!0;},containsBox:function containsBox(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y?!0:!1;},getParameter:function getParameter(a,b){return(b||new THREE.Vector2()).set((a.x-this.min.x)/(this.max.x-this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y));},intersectsBox:function intersectsBox(a){return a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>this.max.y?!1:!0;},clampPoint:function clampPoint(a,b){return(b||new THREE.Vector2()).copy(a).clamp(this.min,this.max);},distanceToPoint:function(){var a=new THREE.Vector2();return function(b){return a.copy(b).clamp(this.min,this.max).sub(b).length();};}(),intersect:function intersect(a){this.min.max(a.min);this.max.min(a.max);return this;},union:function union(a){this.min.min(a.min);this.max.max(a.max);return this;},translate:function translate(a){this.min.add(a);this.max.add(a);return this;},equals:function equals(a){return a.min.equals(this.min)&&a.max.equals(this.max);}};THREE.Box3=function(a,b){this.min=void 0!==a?a:new THREE.Vector3(Infinity,Infinity,Infinity);this.max=void 0!==b?b:new THREE.Vector3(-Infinity,-Infinity,-Infinity);};THREE.Box3.prototype={constructor:THREE.Box3,set:function set(a,b){this.min.copy(a);this.max.copy(b);return this;},setFromArray:function setFromArray(a){for(var b=Infinity,c=Infinity,d=Infinity,e=-Infinity,f=-Infinity,g=-Infinity,h=0,k=a.length;h<k;h+=3){var l=a[h],m=a[h+1],p=a[h+2];l<b&&(b=l);m<c&&(c=m);p<d&&(d=p);l>e&&(e=l);m>f&&(f=m);p>g&&(g=p);}this.min.set(b,c,d);this.max.set(e,f,g);},setFromPoints:function setFromPoints(a){this.makeEmpty();for(var b=0,c=a.length;b<c;b++){this.expandByPoint(a[b]);}return this;},setFromCenterAndSize:function(){var a=new THREE.Vector3();return function(b,c){var d=a.copy(c).multiplyScalar(.5);this.min.copy(b).sub(d);this.max.copy(b).add(d);return this;};}(),setFromObject:function(){var a=new THREE.Vector3();return function(b){var c=this;b.updateMatrixWorld(!0);this.makeEmpty();b.traverse(function(b){var e=b.geometry;if(void 0!==e)if(e instanceof THREE.Geometry)for(var e=e.vertices,f=0,g=e.length;f<g;f++){a.copy(e[f]),a.applyMatrix4(b.matrixWorld),c.expandByPoint(a);}else if(e instanceof THREE.BufferGeometry&&(g=e.attributes.position,void 0!==g)){var h;g instanceof THREE.InterleavedBufferAttribute?(e=g.data.array,f=g.offset,h=g.data.stride):(e=g.array,f=0,h=3);for(g=e.length;f<g;f+=h){a.fromArray(e,f),a.applyMatrix4(b.matrixWorld),c.expandByPoint(a);}}});return this;};}(),clone:function clone(){return new this.constructor().copy(this);},copy:function copy(a){this.min.copy(a.min);this.max.copy(a.max);return this;},makeEmpty:function makeEmpty(){this.min.x=this.min.y=this.min.z=Infinity;this.max.x=this.max.y=this.max.z=-Infinity;return this;},isEmpty:function isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z;},center:function center(a){return(a||new THREE.Vector3()).addVectors(this.min,this.max).multiplyScalar(.5);},size:function size(a){return(a||new THREE.Vector3()).subVectors(this.max,this.min);},expandByPoint:function expandByPoint(a){this.min.min(a);this.max.max(a);return this;},expandByVector:function expandByVector(a){this.min.sub(a);this.max.add(a);return this;},expandByScalar:function expandByScalar(a){this.min.addScalar(-a);this.max.addScalar(a);return this;},containsPoint:function containsPoint(a){return a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y||a.z<this.min.z||a.z>this.max.z?!1:!0;},containsBox:function containsBox(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y&&this.min.z<=a.min.z&&a.max.z<=this.max.z?!0:!1;},getParameter:function getParameter(a,b){return(b||new THREE.Vector3()).set((a.x-this.min.x)/(this.max.x-this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y),(a.z-this.min.z)/(this.max.z-this.min.z));},intersectsBox:function intersectsBox(a){return a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>this.max.y||a.max.z<this.min.z||a.min.z>this.max.z?!1:!0;},intersectsSphere:function(){var a;return function(b){void 0===a&&(a=new THREE.Vector3());this.clampPoint(b.center,a);return a.distanceToSquared(b.center)<=b.radius*b.radius;};}(),intersectsPlane:function intersectsPlane(a){var b,c;0<a.normal.x?(b=a.normal.x*this.min.x,c=a.normal.x*this.max.x):(b=a.normal.x*this.max.x,c=a.normal.x*this.min.x);0<a.normal.y?(b+=a.normal.y*this.min.y,c+=a.normal.y*this.max.y):(b+=a.normal.y*this.max.y,c+=a.normal.y*this.min.y);0<a.normal.z?(b+=a.normal.z*this.min.z,c+=a.normal.z*this.max.z):(b+=a.normal.z*this.max.z,c+=a.normal.z*this.min.z);return b<=a.constant&&c>=a.constant;},clampPoint:function clampPoint(a,b){return(b||new THREE.Vector3()).copy(a).clamp(this.min,this.max);},distanceToPoint:function(){var a=new THREE.Vector3();return function(b){return a.copy(b).clamp(this.min,this.max).sub(b).length();};}(),getBoundingSphere:function(){var a=new THREE.Vector3();return function(b){b=b||new THREE.Sphere();b.center=this.center();b.radius=.5*this.size(a).length();return b;};}(),intersect:function intersect(a){this.min.max(a.min);this.max.min(a.max);this.isEmpty()&&this.makeEmpty();return this;},union:function union(a){this.min.min(a.min);this.max.max(a.max);return this;},applyMatrix4:function(){var a=[new THREE.Vector3(),new THREE.Vector3(),new THREE.Vector3(),new THREE.Vector3(),new THREE.Vector3(),new THREE.Vector3(),new THREE.Vector3(),new THREE.Vector3()];return function(b){if(this.isEmpty())return this;a[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(b);a[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(b);a[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(b);a[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(b);a[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(b);a[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(b);a[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(b);a[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(b);this.setFromPoints(a);return this;};}(),translate:function translate(a){this.min.add(a);this.max.add(a);return this;},equals:function equals(a){return a.min.equals(this.min)&&a.max.equals(this.max);}};THREE.Matrix3=function(){this.elements=new Float32Array([1,0,0,0,1,0,0,0,1]);0<arguments.length&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.");};THREE.Matrix3.prototype={constructor:THREE.Matrix3,set:function set(a,b,c,d,e,f,g,h,k){var l=this.elements;l[0]=a;l[1]=d;l[2]=g;l[3]=b;l[4]=e;l[5]=h;l[6]=c;l[7]=f;l[8]=k;return this;},identity:function identity(){this.set(1,0,0,0,1,0,0,0,1);return this;},clone:function clone(){return new this.constructor().fromArray(this.elements);},copy:function copy(a){a=a.elements;this.set(a[0],a[3],a[6],a[1],a[4],a[7],a[2],a[5],a[8]);return this;},setFromMatrix4:function setFromMatrix4(a){a=a.elements;this.set(a[0],a[4],a[8],a[1],a[5],a[9],a[2],a[6],a[10]);return this;},applyToVector3Array:function(){var a;return function(b,c,d){void 0===a&&(a=new THREE.Vector3());void 0===c&&(c=0);void 0===d&&(d=b.length);for(var e=0;e<d;e+=3,c+=3){a.fromArray(b,c),a.applyMatrix3(this),a.toArray(b,c);}return b;};}(),applyToBuffer:function(){var a;return function(b,c,d){void 0===a&&(a=new THREE.Vector3());void 0===c&&(c=0);void 0===d&&(d=b.length/b.itemSize);for(var e=0;e<d;e++,c++){a.x=b.getX(c),a.y=b.getY(c),a.z=b.getZ(c),a.applyMatrix3(this),b.setXYZ(a.x,a.y,a.z);}return b;};}(),multiplyScalar:function multiplyScalar(a){var b=this.elements;b[0]*=a;b[3]*=a;b[6]*=a;b[1]*=a;b[4]*=a;b[7]*=a;b[2]*=a;b[5]*=a;b[8]*=a;return this;},determinant:function determinant(){var a=this.elements,b=a[0],c=a[1],d=a[2],e=a[3],f=a[4],g=a[5],h=a[6],k=a[7],a=a[8];return b*f*a-b*g*k-c*e*a+c*g*h+d*e*k-d*f*h;},getInverse:function getInverse(a,b){a instanceof THREE.Matrix4&&console.error("THREE.Matrix3.getInverse no longer takes a Matrix4 argument.");var c=a.elements,d=this.elements,e=c[0],f=c[1],g=c[2],h=c[3],k=c[4],l=c[5],m=c[6],p=c[7],c=c[8],n=c*k-l*p,q=l*m-c*h,r=p*h-k*m,s=e*n+f*q+g*r;if(0===s){if(b)throw Error("THREE.Matrix3.getInverse(): can't invert matrix, determinant is 0");console.warn("THREE.Matrix3.getInverse(): can't invert matrix, determinant is 0");return this.identity();}s=1/s;d[0]=n*s;d[1]=(g*p-c*f)*s;d[2]=(l*f-g*k)*s;d[3]=q*s;d[4]=(c*e-g*m)*s;d[5]=(g*h-l*e)*s;d[6]=r*s;d[7]=(f*m-p*e)*s;d[8]=(k*e-f*h)*s;return this;},transpose:function transpose(){var a,b=this.elements;a=b[1];b[1]=b[3];b[3]=a;a=b[2];b[2]=b[6];b[6]=a;a=b[5];b[5]=b[7];b[7]=a;return this;},flattenToArrayOffset:function flattenToArrayOffset(a,b){console.warn("THREE.Matrix3: .flattenToArrayOffset is deprecated - just use .toArray instead.");return this.toArray(a,b);},getNormalMatrix:function getNormalMatrix(a){return this.setFromMatrix4(a).getInverse(this).transpose();},transposeIntoArray:function transposeIntoArray(a){var b=this.elements;a[0]=b[0];a[1]=b[3];a[2]=b[6];a[3]=b[1];a[4]=b[4];a[5]=b[7];a[6]=b[2];a[7]=b[5];a[8]=b[8];return this;},fromArray:function fromArray(a){this.elements.set(a);return this;},toArray:function toArray(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);var c=this.elements;a[b]=c[0];a[b+1]=c[1];a[b+2]=c[2];a[b+3]=c[3];a[b+4]=c[4];a[b+5]=c[5];a[b+6]=c[6];a[b+7]=c[7];a[b+8]=c[8];return a;}};THREE.Matrix4=function(){this.elements=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]);0<arguments.length&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.");};THREE.Matrix4.prototype={constructor:THREE.Matrix4,set:function set(a,b,c,d,e,f,g,h,k,l,m,p,n,q,r,s){var v=this.elements;v[0]=a;v[4]=b;v[8]=c;v[12]=d;v[1]=e;v[5]=f;v[9]=g;v[13]=h;v[2]=k;v[6]=l;v[10]=m;v[14]=p;v[3]=n;v[7]=q;v[11]=r;v[15]=s;return this;},identity:function identity(){this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);return this;},clone:function clone(){return new THREE.Matrix4().fromArray(this.elements);},copy:function copy(a){this.elements.set(a.elements);return this;},copyPosition:function copyPosition(a){var b=this.elements;a=a.elements;b[12]=a[12];b[13]=a[13];b[14]=a[14];return this;},extractBasis:function extractBasis(a,b,c){a.setFromMatrixColumn(this,0);b.setFromMatrixColumn(this,1);c.setFromMatrixColumn(this,2);return this;},makeBasis:function makeBasis(a,b,c){this.set(a.x,b.x,c.x,0,a.y,b.y,c.y,0,a.z,b.z,c.z,0,0,0,0,1);return this;},extractRotation:function(){var a;return function(b){void 0===a&&(a=new THREE.Vector3());var c=this.elements,d=b.elements,e=1/a.setFromMatrixColumn(b,0).length(),f=1/a.setFromMatrixColumn(b,1).length();b=1/a.setFromMatrixColumn(b,2).length();c[0]=d[0]*e;c[1]=d[1]*e;c[2]=d[2]*e;c[4]=d[4]*f;c[5]=d[5]*f;c[6]=d[6]*f;c[8]=d[8]*b;c[9]=d[9]*b;c[10]=d[10]*b;return this;};}(),makeRotationFromEuler:function makeRotationFromEuler(a){!1===a instanceof THREE.Euler&&console.error("THREE.Matrix: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");var b=this.elements,c=a.x,d=a.y,e=a.z,f=Math.cos(c),c=Math.sin(c),g=Math.cos(d),d=Math.sin(d),h=Math.cos(e),e=Math.sin(e);if("XYZ"===a.order){a=f*h;var k=f*e,l=c*h,m=c*e;b[0]=g*h;b[4]=-g*e;b[8]=d;b[1]=k+l*d;b[5]=a-m*d;b[9]=-c*g;b[2]=m-a*d;b[6]=l+k*d;b[10]=f*g;}else"YXZ"===a.order?(a=g*h,k=g*e,l=d*h,m=d*e,b[0]=a+m*c,b[4]=l*c-k,b[8]=f*d,b[1]=f*e,b[5]=f*h,b[9]=-c,b[2]=k*c-l,b[6]=m+a*c,b[10]=f*g):"ZXY"===a.order?(a=g*h,k=g*e,l=d*h,m=d*e,b[0]=a-m*c,b[4]=-f*e,b[8]=l+k*c,b[1]=k+l*c,b[5]=f*h,b[9]=m-a*c,b[2]=-f*d,b[6]=c,b[10]=f*g):"ZYX"===a.order?(a=f*h,k=f*e,l=c*h,m=c*e,b[0]=g*h,b[4]=l*d-k,b[8]=a*d+m,b[1]=g*e,b[5]=m*d+a,b[9]=k*d-l,b[2]=-d,b[6]=c*g,b[10]=f*g):"YZX"===a.order?(a=f*g,k=f*d,l=c*g,m=c*d,b[0]=g*h,b[4]=m-a*e,b[8]=l*e+k,b[1]=e,b[5]=f*h,b[9]=-c*h,b[2]=-d*h,b[6]=k*e+l,b[10]=a-m*e):"XZY"===a.order&&(a=f*g,k=f*d,l=c*g,m=c*d,b[0]=g*h,b[4]=-e,b[8]=d*h,b[1]=a*e+m,b[5]=f*h,b[9]=k*e-l,b[2]=l*e-k,b[6]=c*h,b[10]=m*e+a);b[3]=0;b[7]=0;b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return this;},makeRotationFromQuaternion:function makeRotationFromQuaternion(a){var b=this.elements,c=a.x,d=a.y,e=a.z,f=a.w,g=c+c,h=d+d,k=e+e;a=c*g;var l=c*h,c=c*k,m=d*h,d=d*k,e=e*k,g=f*g,h=f*h,f=f*k;b[0]=1-(m+e);b[4]=l-f;b[8]=c+h;b[1]=l+f;b[5]=1-(a+e);b[9]=d-g;b[2]=c-h;b[6]=d+g;b[10]=1-(a+m);b[3]=0;b[7]=0;b[11]=0;b[12]=0;b[13]=0;b[14]=0;b[15]=1;return this;},lookAt:function(){var a,b,c;return function(d,e,f){void 0===a&&(a=new THREE.Vector3(),b=new THREE.Vector3(),c=new THREE.Vector3());var g=this.elements;c.subVectors(d,e).normalize();0===c.lengthSq()&&(c.z=1);a.crossVectors(f,c).normalize();0===a.lengthSq()&&(c.z+=1E-4,a.crossVectors(f,c).normalize());b.crossVectors(c,a);g[0]=a.x;g[4]=b.x;g[8]=c.x;g[1]=a.y;g[5]=b.y;g[9]=c.y;g[2]=a.z;g[6]=b.z;g[10]=c.z;return this;};}(),multiply:function multiply(a,b){return void 0!==b?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(a,b)):this.multiplyMatrices(this,a);},premultiply:function premultiply(a){return this.multiplyMatrices(a,this);},multiplyMatrices:function multiplyMatrices(a,b){var c=a.elements,d=b.elements,e=this.elements,f=c[0],g=c[4],h=c[8],k=c[12],l=c[1],m=c[5],p=c[9],n=c[13],q=c[2],r=c[6],s=c[10],v=c[14],t=c[3],u=c[7],D=c[11],c=c[15],w=d[0],I=d[4],z=d[8],y=d[12],A=d[1],G=d[5],B=d[9],F=d[13],J=d[2],P=d[6],K=d[10],H=d[14],M=d[3],O=d[7],N=d[11],d=d[15];e[0]=f*w+g*A+h*J+k*M;e[4]=f*I+g*G+h*P+k*O;e[8]=f*z+g*B+h*K+k*N;e[12]=f*y+g*F+h*H+k*d;e[1]=l*w+m*A+p*J+n*M;e[5]=l*I+m*G+p*P+n*O;e[9]=l*z+m*B+p*K+n*N;e[13]=l*y+m*F+p*H+n*d;e[2]=q*w+r*A+s*J+v*M;e[6]=q*I+r*G+s*P+v*O;e[10]=q*z+r*B+s*K+v*N;e[14]=q*y+r*F+s*H+v*d;e[3]=t*w+u*A+D*J+c*M;e[7]=t*I+u*G+D*P+c*O;e[11]=t*z+u*B+D*K+c*N;e[15]=t*y+u*F+D*H+c*d;return this;},multiplyToArray:function multiplyToArray(a,b,c){var d=this.elements;this.multiplyMatrices(a,b);c[0]=d[0];c[1]=d[1];c[2]=d[2];c[3]=d[3];c[4]=d[4];c[5]=d[5];c[6]=d[6];c[7]=d[7];c[8]=d[8];c[9]=d[9];c[10]=d[10];c[11]=d[11];c[12]=d[12];c[13]=d[13];c[14]=d[14];c[15]=d[15];return this;},multiplyScalar:function multiplyScalar(a){var b=this.elements;b[0]*=a;b[4]*=a;b[8]*=a;b[12]*=a;b[1]*=a;b[5]*=a;b[9]*=a;b[13]*=a;b[2]*=a;b[6]*=a;b[10]*=a;b[14]*=a;b[3]*=a;b[7]*=a;b[11]*=a;b[15]*=a;return this;},applyToVector3Array:function(){var a;return function(b,c,d){void 0===a&&(a=new THREE.Vector3());void 0===c&&(c=0);void 0===d&&(d=b.length);for(var e=0;e<d;e+=3,c+=3){a.fromArray(b,c),a.applyMatrix4(this),a.toArray(b,c);}return b;};}(),applyToBuffer:function(){var a;return function(b,c,d){void 0===a&&(a=new THREE.Vector3());void 0===c&&(c=0);void 0===d&&(d=b.length/b.itemSize);for(var e=0;e<d;e++,c++){a.x=b.getX(c),a.y=b.getY(c),a.z=b.getZ(c),a.applyMatrix4(this),b.setXYZ(a.x,a.y,a.z);}return b;};}(),determinant:function determinant(){var a=this.elements,b=a[0],c=a[4],d=a[8],e=a[12],f=a[1],g=a[5],h=a[9],k=a[13],l=a[2],m=a[6],p=a[10],n=a[14];return a[3]*(+e*h*m-d*k*m-e*g*p+c*k*p+d*g*n-c*h*n)+a[7]*(+b*h*n-b*k*p+e*f*p-d*f*n+d*k*l-e*h*l)+a[11]*(+b*k*m-b*g*n-e*f*m+c*f*n+e*g*l-c*k*l)+a[15]*(-d*g*l-b*h*m+b*g*p+d*f*m-c*f*p+c*h*l);},transpose:function transpose(){var a=this.elements,b;b=a[1];a[1]=a[4];a[4]=b;b=a[2];a[2]=a[8];a[8]=b;b=a[6];a[6]=a[9];a[9]=b;b=a[3];a[3]=a[12];a[12]=b;b=a[7];a[7]=a[13];a[13]=b;b=a[11];a[11]=a[14];a[14]=b;return this;},flattenToArrayOffset:function flattenToArrayOffset(a,b){console.warn("THREE.Matrix3: .flattenToArrayOffset is deprecated - just use .toArray instead.");return this.toArray(a,b);},getPosition:function(){var a;return function(){void 0===a&&(a=new THREE.Vector3());console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.");return a.setFromMatrixColumn(this,3);};}(),setPosition:function setPosition(a){var b=this.elements;b[12]=a.x;b[13]=a.y;b[14]=a.z;return this;},getInverse:function getInverse(a,b){var c=this.elements,d=a.elements,e=d[0],f=d[1],g=d[2],h=d[3],k=d[4],l=d[5],m=d[6],p=d[7],n=d[8],q=d[9],r=d[10],s=d[11],v=d[12],t=d[13],u=d[14],d=d[15],D=q*u*p-t*r*p+t*m*s-l*u*s-q*m*d+l*r*d,w=v*r*p-n*u*p-v*m*s+k*u*s+n*m*d-k*r*d,I=n*t*p-v*q*p+v*l*s-k*t*s-n*l*d+k*q*d,z=v*q*m-n*t*m-v*l*r+k*t*r+n*l*u-k*q*u,y=e*D+f*w+g*I+h*z;if(0===y){if(b)throw Error("THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0");console.warn("THREE.Matrix4.getInverse(): can't invert matrix, determinant is 0");return this.identity();}y=1/y;c[0]=D*y;c[1]=(t*r*h-q*u*h-t*g*s+f*u*s+q*g*d-f*r*d)*y;c[2]=(l*u*h-t*m*h+t*g*p-f*u*p-l*g*d+f*m*d)*y;c[3]=(q*m*h-l*r*h-q*g*p+f*r*p+l*g*s-f*m*s)*y;c[4]=w*y;c[5]=(n*u*h-v*r*h+v*g*s-e*u*s-n*g*d+e*r*d)*y;c[6]=(v*m*h-k*u*h-v*g*p+e*u*p+k*g*d-e*m*d)*y;c[7]=(k*r*h-n*m*h+n*g*p-e*r*p-k*g*s+e*m*s)*y;c[8]=I*y;c[9]=(v*q*h-n*t*h-v*f*s+e*t*s+n*f*d-e*q*d)*y;c[10]=(k*t*h-v*l*h+v*f*p-e*t*p-k*f*d+e*l*d)*y;c[11]=(n*l*h-k*q*h-n*f*p+e*q*p+k*f*s-e*l*s)*y;c[12]=z*y;c[13]=(n*t*g-v*q*g+v*f*r-e*t*r-n*f*u+e*q*u)*y;c[14]=(v*l*g-k*t*g-v*f*m+e*t*m+k*f*u-e*l*u)*y;c[15]=(k*q*g-n*l*g+n*f*m-e*q*m-k*f*r+e*l*r)*y;return this;},scale:function scale(a){var b=this.elements,c=a.x,d=a.y;a=a.z;b[0]*=c;b[4]*=d;b[8]*=a;b[1]*=c;b[5]*=d;b[9]*=a;b[2]*=c;b[6]*=d;b[10]*=a;b[3]*=c;b[7]*=d;b[11]*=a;return this;},getMaxScaleOnAxis:function getMaxScaleOnAxis(){var a=this.elements;return Math.sqrt(Math.max(a[0]*a[0]+a[1]*a[1]+a[2]*a[2],a[4]*a[4]+a[5]*a[5]+a[6]*a[6],a[8]*a[8]+a[9]*a[9]+a[10]*a[10]));},makeTranslation:function makeTranslation(a,b,c){this.set(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1);return this;},makeRotationX:function makeRotationX(a){var b=Math.cos(a);a=Math.sin(a);this.set(1,0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1);return this;},makeRotationY:function makeRotationY(a){var b=Math.cos(a);a=Math.sin(a);this.set(b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1);return this;},makeRotationZ:function makeRotationZ(a){var b=Math.cos(a);a=Math.sin(a);this.set(b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1);return this;},makeRotationAxis:function makeRotationAxis(a,b){var c=Math.cos(b),d=Math.sin(b),e=1-c,f=a.x,g=a.y,h=a.z,k=e*f,l=e*g;this.set(k*f+c,k*g-d*h,k*h+d*g,0,k*g+d*h,l*g+c,l*h-d*f,0,k*h-d*g,l*h+d*f,e*h*h+c,0,0,0,0,1);return this;},makeScale:function makeScale(a,b,c){this.set(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1);return this;},compose:function compose(a,b,c){this.makeRotationFromQuaternion(b);this.scale(c);this.setPosition(a);return this;},decompose:function(){var a,b;return function(c,d,e){void 0===a&&(a=new THREE.Vector3(),b=new THREE.Matrix4());var f=this.elements,g=a.set(f[0],f[1],f[2]).length(),h=a.set(f[4],f[5],f[6]).length(),k=a.set(f[8],f[9],f[10]).length();0>this.determinant()&&(g=-g);c.x=f[12];c.y=f[13];c.z=f[14];b.elements.set(this.elements);c=1/g;var f=1/h,l=1/k;b.elements[0]*=c;b.elements[1]*=c;b.elements[2]*=c;b.elements[4]*=f;b.elements[5]*=f;b.elements[6]*=f;b.elements[8]*=l;b.elements[9]*=l;b.elements[10]*=l;d.setFromRotationMatrix(b);e.x=g;e.y=h;e.z=k;return this;};}(),makeFrustum:function makeFrustum(a,b,c,d,e,f){var g=this.elements;g[0]=2*e/(b-a);g[4]=0;g[8]=(b+a)/(b-a);g[12]=0;g[1]=0;g[5]=2*e/(d-c);g[9]=(d+c)/(d-c);g[13]=0;g[2]=0;g[6]=0;g[10]=-(f+e)/(f-e);g[14]=-2*f*e/(f-e);g[3]=0;g[7]=0;g[11]=-1;g[15]=0;return this;},makePerspective:function makePerspective(a,b,c,d){a=c*Math.tan(THREE.Math.DEG2RAD*a*.5);var e=-a;return this.makeFrustum(e*b,a*b,e,a,c,d);},makeOrthographic:function makeOrthographic(a,b,c,d,e,f){var g=this.elements,h=1/(b-a),k=1/(c-d),l=1/(f-e);g[0]=2*h;g[4]=0;g[8]=0;g[12]=-((b+a)*h);g[1]=0;g[5]=2*k;g[9]=0;g[13]=-((c+d)*k);g[2]=0;g[6]=0;g[10]=-2*l;g[14]=-((f+e)*l);g[3]=0;g[7]=0;g[11]=0;g[15]=1;return this;},equals:function equals(a){var b=this.elements;a=a.elements;for(var c=0;16>c;c++){if(b[c]!==a[c])return!1;}return!0;},fromArray:function fromArray(a){this.elements.set(a);return this;},toArray:function toArray(a,b){void 0===a&&(a=[]);void 0===b&&(b=0);var c=this.elements;a[b]=c[0];a[b+1]=c[1];a[b+2]=c[2];a[b+3]=c[3];a[b+4]=c[4];a[b+5]=c[5];a[b+6]=c[6];a[b+7]=c[7];a[b+8]=c[8];a[b+9]=c[9];a[b+10]=c[10];a[b+11]=c[11];a[b+12]=c[12];a[b+13]=c[13];a[b+14]=c[14];a[b+15]=c[15];return a;}};THREE.Ray=function(a,b){this.origin=void 0!==a?a:new THREE.Vector3();this.direction=void 0!==b?b:new THREE.Vector3();};THREE.Ray.prototype={constructor:THREE.Ray,set:function set(a,b){this.origin.copy(a);this.direction.copy(b);return this;},clone:function clone(){return new this.constructor().copy(this);},copy:function copy(a){this.origin.copy(a.origin);this.direction.copy(a.direction);return this;},at:function at(a,b){return(b||new THREE.Vector3()).copy(this.direction).multiplyScalar(a).add(this.origin);},lookAt:function lookAt(a){this.direction.copy(a).sub(this.origin).normalize();return this;},recast:function(){var a=new THREE.Vector3();return function(b){this.origin.copy(this.at(b,a));return this;};}(),closestPointToPoint:function closestPointToPoint(a,b){var c=b||new THREE.Vector3();c.subVectors(a,this.origin);var d=c.dot(this.direction);return 0>d?c.copy(this.origin):c.copy(this.direction).multiplyScalar(d).add(this.origin);},distanceToPoint:function distanceToPoint(a){return Math.sqrt(this.distanceSqToPoint(a));},distanceSqToPoint:function(){var a=new THREE.Vector3();return function(b){var c=a.subVectors(b,this.origin).dot(this.direction);if(0>c)return this.origin.distanceToSquared(b);a.copy(this.direction).multiplyScalar(c).add(this.origin);return a.distanceToSquared(b);};}(),distanceSqToSegment:function(){var a=new THREE.Vector3(),b=new THREE.Vector3(),c=new THREE.Vector3();return function(d,e,f,g){a.copy(d).add(e).multiplyScalar(.5);b.copy(e).sub(d).normalize();c.copy(this.origin).sub(a);var h=.5*d.distanceTo(e),k=-this.direction.dot(b),l=c.dot(this.direction),m=-c.dot(b),p=c.lengthSq(),n=Math.abs(1-k*k),q;0<n?(d=k*m-l,e=k*l-m,q=h*n,0<=d?e>=-q?e<=q?(h=1/n,d*=h,e*=h,k=d*(d+k*e+2*l)+e*(k*d+e+2*m)+p):(e=h,d=Math.max(0,-(k*e+l)),k=-d*d+e*(e+2*m)+p):(e=-h,d=Math.max(0,-(k*e+l)),k=-d*d+e*(e+2*m)+p):e<=-q?(d=Math.max(0,-(-k*h+l)),e=0<d?-h:Math.min(Math.max(-h,-m),h),k=-d*d+e*(e+2*m)+p):e<=q?(d=0,e=Math.min(Math.max(-h,-m),h),k=e*(e+2*m)+p):(d=Math.max(0,-(k*h+l)),e=0<d?h:Math.min(Math.max(-h,-m),h),k=-d*d+e*(e+2*m)+p)):(e=0<k?-h:h,d=Math.max(0,-(k*e+l)),k=-d*d+e*(e+2*m)+p);f&&f.copy(this.direction).multiplyScalar(d).add(this.origin);g&&g.copy(b).multiplyScalar(e).add(a);return k;};}(),intersectSphere:function(){var a=new THREE.Vector3();return function(b,c){a.subVectors(b.center,this.origin);var d=a.dot(this.direction),e=a.dot(a)-d*d,f=b.radius*b.radius;if(e>f)return null;f=Math.sqrt(f-e);e=d-f;d+=f;return 0>e&&0>d?null:0>e?this.at(d,c):this.at(e,c);};}(),intersectsSphere:function intersectsSphere(a){return this.distanceToPoint(a.center)<=a.radius;},distanceToPlane:function distanceToPlane(a){var b=a.normal.dot(this.direction);if(0===b)return 0===a.distanceToPoint(this.origin)?0:null;a=-(this.origin.dot(a.normal)+a.constant)/b;return 0<=a?a:null;},intersectPlane:function intersectPlane(a,b){var c=this.distanceToPlane(a);return null===c?null:this.at(c,b);},intersectsPlane:function intersectsPlane(a){var b=a.distanceToPoint(this.origin);return 0===b||0>a.normal.dot(this.direction)*b?!0:!1;},intersectBox:function intersectBox(a,b){var c,d,e,f,g;d=1/this.direction.x;f=1/this.direction.y;g=1/this.direction.z;var h=this.origin;0<=d?(c=(a.min.x-h.x)*d,d*=a.max.x-h.x):(c=(a.max.x-h.x)*d,d*=a.min.x-h.x);0<=f?(e=(a.min.y-h.y)*f,f*=a.max.y-h.y):(e=(a.max.y-h.y)*f,f*=a.min.y-h.y);if(c>f||e>d)return null;if(e>c||c!==c)c=e;if(f<d||d!==d)d=f;0<=g?(e=(a.min.z-h.z)*g,g*=a.max.z-h.z):(e=(a.max.z-h.z)*g,g*=a.min.z-h.z);if(c>g||e>d)return null;if(e>c||c!==c)c=e;if(g<d||d!==d)d=g;return 0>d?null:this.at(0<=c?c:d,b);},intersectsBox:function(){var a=new THREE.Vector3();return function(b){return null!==this.intersectBox(b,a);};}(),intersectTriangle:function(){var a=new THREE.Vector3(),b=new THREE.Vector3(),c=new THREE.Vector3(),d=new THREE.Vector3();return function(e,f,g,h,k){b.subVectors(f,e);c.subVectors(g,e);d.crossVectors(b,c);f=this.direction.dot(d);if(0<f){if(h)return null;h=1;}else if(0>f)h=-1,f=-f;else return null;a.subVectors(this.origin,e);e=h*this.direction.dot(c.crossVectors(a,c));if(0>e)return null;g=h*this.direction.dot(b.cross(a));if(0>g||e+g>f)return null;e=-h*a.dot(d);return 0>e?null:this.at(e/f,k);};}(),applyMatrix4:function applyMatrix4(a){this.direction.add(this.origin).applyMatrix4(a);this.origin.applyMatrix4(a);this.direction.sub(this.origin);this.direction.normalize();return this;},equals:function equals(a){return a.origin.equals(this.origin)&&a.direction.equals(this.direction);}};THREE.Sphere=function(a,b){this.center=void 0!==a?a:new THREE.Vector3();this.radius=void 0!==b?b:0;};THREE.Sphere.prototype={constructor:THREE.Sphere,set:function set(a,b){this.center.copy(a);this.radius=b;return this;},setFromPoints:function(){var a=new THREE.Box3();return function(b,c){var d=this.center;void 0!==c?d.copy(c):a.setFromPoints(b).center(d);for(var e=0,f=0,g=b.length;f<g;f++){e=Math.max(e,d.distanceToSquared(b[f]));}this.radius=Math.sqrt(e);return this;};}(),clone:function clone(){return new this.constructor().copy(this);},copy:function copy(a){this.center.copy(a.center);this.radius=a.radius;return this;},empty:function empty(){return 0>=this.radius;},containsPoint:function containsPoint(a){return a.distanceToSquared(this.center)<=this.radius*this.radius;},distanceToPoint:function distanceToPoint(a){return a.distanceTo(this.center)-this.radius;},intersectsSphere:function intersectsSphere(a){var b=this.radius+a.radius;return a.center.distanceToSquared(this.center)<=b*b;},intersectsBox:function intersectsBox(a){return a.intersectsSphere(this);},intersectsPlane:function intersectsPlane(a){return Math.abs(this.center.dot(a.normal)-a.constant)<=this.radius;},clampPoint:function clampPoint(a,b){var c=this.center.distanceToSquared(a),d=b||new THREE.Vector3();d.copy(a);c>this.radius*this.radius&&(d.sub(this.center).normalize(),d.multiplyScalar(this.radius).add(this.center));return d;},getBoundingBox:function getBoundingBox(a){a=a||new THREE.Box3();a.set(this.center,this.center);a.expandByScalar(this.radius);return a;},applyMatrix4:function applyMatrix4(a){this.center.applyMatrix4(a);this.radius*=a.getMaxScaleOnAxis();return this;},translate:function translate(a){this.center.add(a);return this;},equals:function equals(a){return a.center.equals(this.center)&&a.radius===this.radius;}};THREE.Frustum=function(a,b,c,d,e,f){this.planes=[void 0!==a?a:new THREE.Plane(),void 0!==b?b:new THREE.Plane(),void 0!==c?c:new THREE.Plane(),void 0!==d?d:new THREE.Plane(),void 0!==e?e:new THREE.Plane(),void 0!==f?f:new THREE.Plane()];};THREE.Frustum.prototype={constructor:THREE.Frustum,set:function set(a,b,c,d,e,f){var g=this.planes;g[0].copy(a);g[1].copy(b);g[2].copy(c);g[3].copy(d);g[4].copy(e);g[5].copy(f);return this;},clone:function clone(){return new this.constructor().copy(this);},copy:function copy(a){for(var b=this.planes,c=0;6>c;c++){b[c].copy(a.planes[c]);}return this;},setFromMatrix:function setFromMatrix(a){var b=this.planes,c=a.elements;a=c[0];var d=c[1],e=c[2],f=c[3],g=c[4],h=c[5],k=c[6],l=c[7],m=c[8],p=c[9],n=c[10],q=c[11],r=c[12],s=c[13],v=c[14],c=c[15];b[0].setComponents(f-a,l-g,q-m,c-r).normalize();b[1].setComponents(f+a,l+g,q+m,c+r).normalize();b[2].setComponents(f+d,l+h,q+p,c+s).normalize();b[3].setComponents(f-d,l-h,q-p,c-s).normalize();b[4].setComponents(f-e,l-k,q-n,c-v).normalize();b[5].setComponents(f+e,l+k,q+n,c+v).normalize();return this;},intersectsObject:function(){var a=new THREE.Sphere();return function(b){var c=b.geometry;null===c.boundingSphere&&c.computeBoundingSphere();a.copy(c.boundingSphere).applyMatrix4(b.matrixWorld);return this.intersectsSphere(a);};}(),intersectsSprite:function(){var a=new THREE.Sphere();return function(b){a.center.set(0,0,0);a.radius=.7071067811865476;a.applyMatrix4(b.matrixWorld);return this.intersectsSphere(a);};}(),intersectsSphere:function intersectsSphere(a){var b=this.planes,c=a.center;a=-a.radius;for(var d=0;6>d;d++){if(b[d].distanceToPoint(c)<a)return!1;}return!0;},intersectsBox:function(){var a=new THREE.Vector3(),b=new THREE.Vector3();return function(c){for(var d=this.planes,e=0;6>e;e++){var f=d[e];a.x=0<f.normal.x?c.min.x:c.max.x;b.x=0<f.normal.x?c.max.x:c.min.x;a.y=0<f.normal.y?c.min.y:c.max.y;b.y=0<f.normal.y?c.max.y:c.min.y;a.z=0<f.normal.z?c.min.z:c.max.z;b.z=0<f.normal.z?c.max.z:c.min.z;var g=f.distanceToPoint(a),f=f.distanceToPoint(b);if(0>g&&0>f)return!1;}return!0;};}(),containsPoint:function containsPoint(a){for(var b=this.planes,c=0;6>c;c++){if(0>b[c].distanceToPoint(a))return!1;}return!0;}};THREE.Plane=function(a,b){this.normal=void 0!==a?a:new THREE.Vector3(1,0,0);this.constant=void 0!==b?b:0;};THREE.Plane.prototype={constructor:THREE.Plane,set:function set(a,b){this.normal.copy(a);this.constant=b;return this;},setComponents:function setComponents(a,b,c,d){this.normal.set(a,b,c);this.constant=d;return this;},setFromNormalAndCoplanarPoint:function setFromNormalAndCoplanarPoint(a,b){this.normal.copy(a);this.constant=-b.dot(this.normal);return this;},setFromCoplanarPoints:function(){var a=new THREE.Vector3(),b=new THREE.Vector3();return function(c,d,e){d=a.subVectors(e,d).cross(b.subVectors(c,d)).normalize();this.setFromNormalAndCoplanarPoint(d,c);return this;};}(),clone:function clone(){return new this.constructor().copy(this);},copy:function copy(a){this.normal.copy(a.normal);this.constant=a.constant;return this;},normalize:function normalize(){var a=1/this.normal.length();this.normal.multiplyScalar(a);this.constant*=a;return this;},negate:function negate(){this.constant*=-1;this.normal.negate();return this;},distanceToPoint:function distanceToPoint(a){return this.normal.dot(a)+this.constant;},distanceToSphere:function distanceToSphere(a){return this.distanceToPoint(a.center)-a.radius;},projectPoint:function projectPoint(a,b){return this.orthoPoint(a,b).sub(a).negate();},orthoPoint:function orthoPoint(a,b){var c=this.distanceToPoint(a);return(b||new THREE.Vector3()).copy(this.normal).multiplyScalar(c);},intersectLine:function(){var a=new THREE.Vector3();return function(b,c){var d=c||new THREE.Vector3(),e=b.delta(a),f=this.normal.dot(e);if(0===f){if(0===this.distanceToPoint(b.start))return d.copy(b.start);}else return f=-(b.start.dot(this.normal)+this.constant)/f,0>f||1<f?void 0:d.copy(e).multiplyScalar(f).add(b.start);};}(),intersectsLine:function intersectsLine(a){var b=this.distanceToPoint(a.start);a=this.distanceToPoint(a.end);return 0>b&&0<a||0>a&&0<b;},intersectsBox:function intersectsBox(a){return a.intersectsPlane(this);},intersectsSphere:function intersectsSphere(a){return a.intersectsPlane(this);},coplanarPoint:function coplanarPoint(a){return(a||new THREE.Vector3()).copy(this.normal).multiplyScalar(-this.constant);},applyMatrix4:function(){var a=new THREE.Vector3(),b=new THREE.Matrix3();return function(c,d){var e=this.coplanarPoint(a).applyMatrix4(c),f=d||b.getNormalMatrix(c),f=this.normal.applyMatrix3(f).normalize();this.constant=-e.dot(f);return this;};}(),translate:function translate(a){this.constant-=a.dot(this.normal);return this;},equals:function equals(a){return a.normal.equals(this.normal)&&a.constant===this.constant;}};THREE.Spherical=function(a,b,c){this.radius=void 0!==a?a:1;this.phi=void 0!==b?b:0;this.theta=void 0!==c?c:0;return this;};THREE.Spherical.prototype={constructor:THREE.Spherical,set:function set(a,b,c){this.radius=a;this.phi=b;this.theta=c;return this;},clone:function clone(){return new this.constructor().copy(this);},copy:function copy(a){this.radius.copy(a.radius);this.phi.copy(a.phi);this.theta.copy(a.theta);return this;},makeSafe:function makeSafe(){this.phi=Math.max(1E-6,Math.min(Math.PI-1E-6,this.phi));return this;},setFromVector3:function setFromVector3(a){this.radius=a.length();0===this.radius?this.phi=this.theta=0:(this.theta=Math.atan2(a.x,a.z),this.phi=Math.acos(THREE.Math.clamp(a.y/this.radius,-1,1)));return this;}};THREE.Math={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){var a="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),b=Array(36),c=0,d;return function(){for(var e=0;36>e;e++){8===e||13===e||18===e||23===e?b[e]="-":14===e?b[e]="4":(2>=c&&(c=33554432+16777216*Math.random()|0),d=c&15,c>>=4,b[e]=a[19===e?d&3|8:d]);}return b.join("");};}(),clamp:function clamp(a,b,c){return Math.max(b,Math.min(c,a));},euclideanModulo:function euclideanModulo(a,b){return(a%b+b)%b;},mapLinear:function mapLinear(a,b,c,d,e){return d+(a-b)*(e-d)/(c-b);},smoothstep:function smoothstep(a,b,c){if(a<=b)return 0;if(a>=c)return 1;a=(a-b)/(c-b);return a*a*(3-2*a);},smootherstep:function smootherstep(a,b,c){if(a<=b)return 0;if(a>=c)return 1;a=(a-b)/(c-b);return a*a*a*(a*(6*a-15)+10);},random16:function random16(){console.warn("THREE.Math.random16() has been deprecated. Use Math.random() instead.");return Math.random();},randInt:function randInt(a,b){return a+Math.floor(Math.random()*(b-a+1));},randFloat:function randFloat(a,b){return a+Math.random()*(b-a);},randFloatSpread:function randFloatSpread(a){return a*(.5-Math.random());},degToRad:function degToRad(a){return a*THREE.Math.DEG2RAD;},radToDeg:function radToDeg(a){return a*THREE.Math.RAD2DEG;},isPowerOfTwo:function isPowerOfTwo(a){return 0===(a&a-1)&&0!==a;},nearestPowerOfTwo:function nearestPowerOfTwo(a){return Math.pow(2,Math.round(Math.log(a)/Math.LN2));},nextPowerOfTwo:function nextPowerOfTwo(a){a--;a|=a>>1;a|=a>>2;a|=a>>4;a|=a>>8;a|=a>>16;a++;return a;}};THREE.Spline=function(a){function b(a,b,c,d,e,f,g){a=.5*(c-a);d=.5*(d-b);return(2*(b-c)+a+d)*g+(-3*(b-c)-2*a-d)*f+a*e+b;}this.points=a;var c=[],d={x:0,y:0,z:0},e,f,g,h,k,l,m,p,n;this.initFromArray=function(a){this.points=[];for(var b=0;b<a.length;b++){this.points[b]={x:a[b][0],y:a[b][1],z:a[b][2]};}};this.getPoint=function(a){e=(this.points.length-1)*a;f=Math.floor(e);g=e-f;c[0]=0===f?f:f-1;c[1]=f;c[2]=f>this.points.length-2?this.points.length-1:f+1;c[3]=f>this.points.length-3?this.points.length-1:f+2;l=this.points[c[0]];m=this.points[c[1]];p=this.points[c[2]];n=this.points[c[3]];h=g*g;k=g*h;d.x=b(l.x,m.x,p.x,n.x,g,h,k);d.y=b(l.y,m.y,p.y,n.y,g,h,k);d.z=b(l.z,m.z,p.z,n.z,g,h,k);return d;};this.getControlPointsArray=function(){var a,b,c=this.points.length,d=[];for(a=0;a<c;a++){b=this.points[a],d[a]=[b.x,b.y,b.z];}return d;};this.getLength=function(a){var b,c,d,e=b=b=0,f=new THREE.Vector3(),g=new THREE.Vector3(),h=[],k=0;h[0]=0;a||(a=100);c=this.points.length*a;f.copy(this.points[0]);for(a=1;a<c;a++){b=a/c,d=this.getPoint(b),g.copy(d),k+=g.distanceTo(f),f.copy(d),b*=this.points.length-1,b=Math.floor(b),b!==e&&(h[b]=k,e=b);}h[h.length]=k;return{chunks:h,total:k};};this.reparametrizeByArcLength=function(a){var b,c,d,e,f,g,h=[],k=new THREE.Vector3(),l=this.getLength();h.push(k.copy(this.points[0]).clone());for(b=1;b<this.points.length;b++){c=l.chunks[b]-l.chunks[b-1];g=Math.ceil(a*c/l.total);e=(b-1)/(this.points.length-1);f=b/(this.points.length-1);for(c=1;c<g-1;c++){d=e+1/g*c*(f-e),d=this.getPoint(d),h.push(k.copy(d).clone());}h.push(k.copy(this.points[b]).clone());}this.points=h;};};THREE.Triangle=function(a,b,c){this.a=void 0!==a?a:new THREE.Vector3();this.b=void 0!==b?b:new THREE.Vector3();this.c=void 0!==c?c:new THREE.Vector3();};THREE.Triangle.normal=function(){var a=new THREE.Vector3();return function(b,c,d,e){e=e||new THREE.Vector3();e.subVectors(d,c);a.subVectors(b,c);e.cross(a);b=e.lengthSq();return 0<b?e.multiplyScalar(1/Math.sqrt(b)):e.set(0,0,0);};}();THREE.Triangle.barycoordFromPoint=function(){var a=new THREE.Vector3(),b=new THREE.Vector3(),c=new THREE.Vector3();return function(d,e,f,g,h){a.subVectors(g,e);b.subVectors(f,e);c.subVectors(d,e);d=a.dot(a);e=a.dot(b);f=a.dot(c);var k=b.dot(b);g=b.dot(c);var l=d*k-e*e;h=h||new THREE.Vector3();if(0===l)return h.set(-2,-1,-1);l=1/l;k=(k*f-e*g)*l;d=(d*g-e*f)*l;return h.set(1-k-d,d,k);};}();THREE.Triangle.containsPoint=function(){var a=new THREE.Vector3();return function(b,c,d,e){b=THREE.Triangle.barycoordFromPoint(b,c,d,e,a);return 0<=b.x&&0<=b.y&&1>=b.x+b.y;};}();THREE.Triangle.prototype={constructor:THREE.Triangle,set:function set(a,b,c){this.a.copy(a);this.b.copy(b);this.c.copy(c);return this;},setFromPointsAndIndices:function setFromPointsAndIndices(a,b,c,d){this.a.copy(a[b]);this.b.copy(a[c]);this.c.copy(a[d]);return this;},clone:function clone(){return new this.constructor().copy(this);},copy:function copy(a){this.a.copy(a.a);this.b.copy(a.b);this.c.copy(a.c);return this;},area:function(){var a=new THREE.Vector3(),b=new THREE.Vector3();return function(){a.subVectors(this.c,this.b);b.subVectors(this.a,this.b);return .5*a.cross(b).length();};}(),midpoint:function midpoint(a){return(a||new THREE.Vector3()).addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3);},normal:function normal(a){return THREE.Triangle.normal(this.a,this.b,this.c,a);},plane:function plane(a){return(a||new THREE.Plane()).setFromCoplanarPoints(this.a,this.b,this.c);},barycoordFromPoint:function barycoordFromPoint(a,b){return THREE.Triangle.barycoordFromPoint(a,this.a,this.b,this.c,b);},containsPoint:function containsPoint(a){return THREE.Triangle.containsPoint(a,this.a,this.b,this.c);},closestPointToPoint:function(){var a,b,c,d;return function(e,f){void 0===a&&(a=new THREE.Plane(),b=[new THREE.Line3(),new THREE.Line3(),new THREE.Line3()],c=new THREE.Vector3(),d=new THREE.Vector3());var g=f||new THREE.Vector3(),h=Infinity;a.setFromCoplanarPoints(this.a,this.b,this.c);a.projectPoint(e,c);if(!0===this.containsPoint(c))g.copy(c);else{b[0].set(this.a,this.b);b[1].set(this.b,this.c);b[2].set(this.c,this.a);for(var k=0;k<b.length;k++){b[k].closestPointToPoint(c,!0,d);var l=c.distanceToSquared(d);l<h&&(h=l,g.copy(d));}}return g;};}(),equals:function equals(a){return a.a.equals(this.a)&&a.b.equals(this.b)&&a.c.equals(this.c);}};THREE.Interpolant=function(a,b,c,d){this.parameterPositions=a;this._cachedIndex=0;this.resultBuffer=void 0!==d?d:new b.constructor(c);this.sampleValues=b;this.valueSize=c;};THREE.Interpolant.prototype={constructor:THREE.Interpolant,evaluate:function evaluate(a){var b=this.parameterPositions,c=this._cachedIndex,d=b[c],e=b[c-1];a:{b:{c:{d:if(!(a<d)){for(var f=c+2;;){if(void 0===d){if(a<e)break d;this._cachedIndex=c=b.length;return this.afterEnd_(c-1,a,e);}if(c===f)break;e=d;d=b[++c];if(a<d)break b;}d=b.length;break c;}if(a>=e)break a;else{f=b[1];a<f&&(c=2,e=f);for(f=c-2;;){if(void 0===e)return this._cachedIndex=0,this.beforeStart_(0,a,d);if(c===f)break;d=e;e=b[--c-1];if(a>=e)break b;}d=c;c=0;}}for(;c<d;){e=c+d>>>1,a<b[e]?d=e:c=e+1;}d=b[c];e=b[c-1];if(void 0===e)return this._cachedIndex=0,this.beforeStart_(0,a,d);if(void 0===d)return this._cachedIndex=c=b.length,this.afterEnd_(c-1,e,a);}this._cachedIndex=c;this.intervalChanged_(c,e,d);}return this.interpolate_(c,e,a,d);},settings:null,DefaultSettings_:{},getSettings_:function getSettings_(){return this.settings||this.DefaultSettings_;},copySampleValue_:function copySampleValue_(a){var b=this.resultBuffer,c=this.sampleValues,d=this.valueSize;a*=d;for(var e=0;e!==d;++e){b[e]=c[a+e];}return b;},interpolate_:function interpolate_(a,b,c,d){throw Error("call to abstract method");},intervalChanged_:function intervalChanged_(a,b,c){}};Object.assign(THREE.Interpolant.prototype,{beforeStart_:THREE.Interpolant.prototype.copySampleValue_,afterEnd_:THREE.Interpolant.prototype.copySampleValue_});THREE.CubicInterpolant=function(a,b,c,d){THREE.Interpolant.call(this,a,b,c,d);this._offsetNext=this._weightNext=this._offsetPrev=this._weightPrev=-0;};THREE.CubicInterpolant.prototype=Object.assign(Object.create(THREE.Interpolant.prototype),{constructor:THREE.CubicInterpolant,DefaultSettings_:{endingStart:THREE.ZeroCurvatureEnding,endingEnd:THREE.ZeroCurvatureEnding},intervalChanged_:function intervalChanged_(a,b,c){var d=this.parameterPositions,e=a-2,f=a+1,g=d[e],h=d[f];if(void 0===g)switch(this.getSettings_().endingStart){case THREE.ZeroSlopeEnding:e=a;g=2*b-c;break;case THREE.WrapAroundEnding:e=d.length-2;g=b+d[e]-d[e+1];break;default:e=a,g=c;}if(void 0===h)switch(this.getSettings_().endingEnd){case THREE.ZeroSlopeEnding:f=a;h=2*c-b;break;case THREE.WrapAroundEnding:f=1;h=c+d[1]-d[0];break;default:f=a-1,h=b;}a=.5*(c-b);d=this.valueSize;this._weightPrev=a/(b-g);this._weightNext=a/(h-c);this._offsetPrev=e*d;this._offsetNext=f*d;},interpolate_:function interpolate_(a,b,c,d){var e=this.resultBuffer,f=this.sampleValues,g=this.valueSize;a*=g;var h=a-g,k=this._offsetPrev,l=this._offsetNext,m=this._weightPrev,p=this._weightNext,n=(c-b)/(d-b);c=n*n;d=c*n;b=-m*d+2*m*c-m*n;m=(1+m)*d+(-1.5-2*m)*c+(-.5+m)*n+1;n=(-1-p)*d+(1.5+p)*c+.5*n;p=p*d-p*c;for(c=0;c!==g;++c){e[c]=b*f[k+c]+m*f[h+c]+n*f[a+c]+p*f[l+c];}return e;}});THREE.DiscreteInterpolant=function(a,b,c,d){THREE.Interpolant.call(this,a,b,c,d);};THREE.DiscreteInterpolant.prototype=Object.assign(Object.create(THREE.Interpolant.prototype),{constructor:THREE.DiscreteInterpolant,interpolate_:function interpolate_(a,b,c,d){return this.copySampleValue_(a-1);}});THREE.LinearInterpolant=function(a,b,c,d){THREE.Interpolant.call(this,a,b,c,d);};THREE.LinearInterpolant.prototype=Object.assign(Object.create(THREE.Interpolant.prototype),{constructor:THREE.LinearInterpolant,interpolate_:function interpolate_(a,b,c,d){var e=this.resultBuffer,f=this.sampleValues,g=this.valueSize;a*=g;var h=a-g;b=(c-b)/(d-b);c=1-b;for(d=0;d!==g;++d){e[d]=f[h+d]*c+f[a+d]*b;}return e;}});THREE.QuaternionLinearInterpolant=function(a,b,c,d){THREE.Interpolant.call(this,a,b,c,d);};THREE.QuaternionLinearInterpolant.prototype=Object.assign(Object.create(THREE.Interpolant.prototype),{constructor:THREE.QuaternionLinearInterpolant,interpolate_:function interpolate_(a,b,c,d){var e=this.resultBuffer,f=this.sampleValues,g=this.valueSize;a*=g;b=(c-b)/(d-b);for(c=a+g;a!==c;a+=4){THREE.Quaternion.slerpFlat(e,0,f,a-g,f,a,b);}return e;}});THREE.Clock=function(a){this.autoStart=void 0!==a?a:!0;this.elapsedTime=this.oldTime=this.startTime=0;this.running=!1;};THREE.Clock.prototype={constructor:THREE.Clock,start:function start(){this.oldTime=this.startTime=(performance||Date).now();this.running=!0;},stop:function stop(){this.getElapsedTime();this.running=!1;},getElapsedTime:function getElapsedTime(){this.getDelta();return this.elapsedTime;},getDelta:function getDelta(){var a=0;this.autoStart&&!this.running&&this.start();if(this.running){var b=(performance||Date).now(),a=(b-this.oldTime)/1E3;this.oldTime=b;this.elapsedTime+=a;}return a;}};THREE.EventDispatcher=function(){};Object.assign(THREE.EventDispatcher.prototype,{addEventListener:function addEventListener(a,b){void 0===this._listeners&&(this._listeners={});var c=this._listeners;void 0===c[a]&&(c[a]=[]);-1===c[a].indexOf(b)&&c[a].push(b);},hasEventListener:function hasEventListener(a,b){if(void 0===this._listeners)return!1;var c=this._listeners;return void 0!==c[a]&&-1!==c[a].indexOf(b)?!0:!1;},removeEventListener:function removeEventListener(a,b){if(void 0!==this._listeners){var c=this._listeners[a];if(void 0!==c){var d=c.indexOf(b);-1!==d&&c.splice(d,1);}}},dispatchEvent:function dispatchEvent(a){if(void 0!==this._listeners){var b=this._listeners[a.type];if(void 0!==b){a.target=this;for(var c=[],d=0,e=b.length,d=0;d<e;d++){c[d]=b[d];}for(d=0;d<e;d++){c[d].call(this,a);}}}}});THREE.Layers=function(){this.mask=1;};THREE.Layers.prototype={constructor:THREE.Layers,set:function set(a){this.mask=1<<a;},enable:function enable(a){this.mask|=1<<a;},toggle:function toggle(a){this.mask^=1<<a;},disable:function disable(a){this.mask&=~(1<<a);},test:function test(a){return 0!==(this.mask&a.mask);}};(function(a){function b(a,b){return a.distance-b.distance;}function c(a,b,f,g){if(!1!==a.visible&&(a.raycast(b,f),!0===g)){a=a.children;g=0;for(var h=a.length;g<h;g++){c(a[g],b,f,!0);}}}a.Raycaster=function(b,c,f,g){this.ray=new a.Ray(b,c);this.near=f||0;this.far=g||Infinity;this.params={Mesh:{},Line:{},LOD:{},Points:{threshold:1},Sprite:{}};Object.defineProperties(this.params,{PointCloud:{get:function get(){console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points.");return this.Points;}}});};a.Raycaster.prototype={constructor:a.Raycaster,linePrecision:1,set:function set(a,b){this.ray.set(a,b);},setFromCamera:function setFromCamera(b,c){c instanceof a.PerspectiveCamera?(this.ray.origin.setFromMatrixPosition(c.matrixWorld),this.ray.direction.set(b.x,b.y,.5).unproject(c).sub(this.ray.origin).normalize()):c instanceof a.OrthographicCamera?(this.ray.origin.set(b.x,b.y,(c.near+c.far)/(c.near-c.far)).unproject(c),this.ray.direction.set(0,0,-1).transformDirection(c.matrixWorld)):console.error("THREE.Raycaster: Unsupported camera type.");},intersectObject:function intersectObject(a,e){var f=[];c(a,this,f,e);f.sort(b);return f;},intersectObjects:function intersectObjects(a,e){var f=[];if(!1===Array.isArray(a))return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),f;for(var g=0,h=a.length;g<h;g++){c(a[g],this,f,e);}f.sort(b);return f;}};})(THREE);THREE.Object3D=function(){Object.defineProperty(this,"id",{value:THREE.Object3DIdCount++});this.uuid=THREE.Math.generateUUID();this.name="";this.type="Object3D";this.parent=null;this.children=[];this.up=THREE.Object3D.DefaultUp.clone();var a=new THREE.Vector3(),b=new THREE.Euler(),c=new THREE.Quaternion(),d=new THREE.Vector3(1,1,1);b.onChange(function(){c.setFromEuler(b,!1);});c.onChange(function(){b.setFromQuaternion(c,void 0,!1);});Object.defineProperties(this,{position:{enumerable:!0,value:a},rotation:{enumerable:!0,value:b},quaternion:{enumerable:!0,value:c},scale:{enumerable:!0,value:d},modelViewMatrix:{value:new THREE.Matrix4()},normalMatrix:{value:new THREE.Matrix3()}});this.matrix=new THREE.Matrix4();this.matrixWorld=new THREE.Matrix4();this.matrixAutoUpdate=THREE.Object3D.DefaultMatrixAutoUpdate;this.matrixWorldNeedsUpdate=!1;this.layers=new THREE.Layers();this.visible=!0;this.receiveShadow=this.castShadow=!1;this.frustumCulled=!0;this.renderOrder=0;this.userData={};};THREE.Object3D.DefaultUp=new THREE.Vector3(0,1,0);THREE.Object3D.DefaultMatrixAutoUpdate=!0;Object.assign(THREE.Object3D.prototype,THREE.EventDispatcher.prototype,{applyMatrix:function applyMatrix(a){this.matrix.multiplyMatrices(a,this.matrix);this.matrix.decompose(this.position,this.quaternion,this.scale);},setRotationFromAxisAngle:function setRotationFromAxisAngle(a,b){this.quaternion.setFromAxisAngle(a,b);},setRotationFromEuler:function setRotationFromEuler(a){this.quaternion.setFromEuler(a,!0);},setRotationFromMatrix:function setRotationFromMatrix(a){this.quaternion.setFromRotationMatrix(a);},setRotationFromQuaternion:function setRotationFromQuaternion(a){this.quaternion.copy(a);},rotateOnAxis:function(){var a=new THREE.Quaternion();return function(b,c){a.setFromAxisAngle(b,c);this.quaternion.multiply(a);return this;};}(),rotateX:function(){var a=new THREE.Vector3(1,0,0);return function(b){return this.rotateOnAxis(a,b);};}(),rotateY:function(){var a=new THREE.Vector3(0,1,0);return function(b){return this.rotateOnAxis(a,b);};}(),rotateZ:function(){var a=new THREE.Vector3(0,0,1);return function(b){return this.rotateOnAxis(a,b);};}(),translateOnAxis:function(){var a=new THREE.Vector3();return function(b,c){a.copy(b).applyQuaternion(this.quaternion);this.position.add(a.multiplyScalar(c));return this;};}(),translateX:function(){var a=new THREE.Vector3(1,0,0);return function(b){return this.translateOnAxis(a,b);};}(),translateY:function(){var a=new THREE.Vector3(0,1,0);return function(b){return this.translateOnAxis(a,b);};}(),translateZ:function(){var a=new THREE.Vector3(0,0,1);return function(b){return this.translateOnAxis(a,b);};}(),localToWorld:function localToWorld(a){return a.applyMatrix4(this.matrixWorld);},worldToLocal:function(){var a=new THREE.Matrix4();return function(b){return b.applyMatrix4(a.getInverse(this.matrixWorld));};}(),lookAt:function(){var a=new THREE.Matrix4();return function(b){a.lookAt(b,this.position,this.up);this.quaternion.setFromRotationMatrix(a);};}(),add:function add(a){if(1<arguments.length){for(var b=0;b<arguments.length;b++){this.add(arguments[b]);}return this;}if(a===this)return console.error("THREE.Object3D.add: object can't be added as a child of itself.",a),this;a instanceof THREE.Object3D?(null!==a.parent&&a.parent.remove(a),a.parent=this,a.dispatchEvent({type:"added"}),this.children.push(a)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",a);return this;},remove:function remove(a){if(1<arguments.length)for(var b=0;b<arguments.length;b++){this.remove(arguments[b]);}b=this.children.indexOf(a);-1!==b&&(a.parent=null,a.dispatchEvent({type:"removed"}),this.children.splice(b,1));},getObjectById:function getObjectById(a){return this.getObjectByProperty("id",a);},getObjectByName:function getObjectByName(a){return this.getObjectByProperty("name",a);},getObjectByProperty:function getObjectByProperty(a,b){if(this[a]===b)return this;for(var c=0,d=this.children.length;c<d;c++){var e=this.children[c].getObjectByProperty(a,b);if(void 0!==e)return e;}},getWorldPosition:function getWorldPosition(a){a=a||new THREE.Vector3();this.updateMatrixWorld(!0);return a.setFromMatrixPosition(this.matrixWorld);},getWorldQuaternion:function(){var a=new THREE.Vector3(),b=new THREE.Vector3();return function(c){c=c||new THREE.Quaternion();this.updateMatrixWorld(!0);this.matrixWorld.decompose(a,c,b);return c;};}(),getWorldRotation:function(){var a=new THREE.Quaternion();return function(b){b=b||new THREE.Euler();this.getWorldQuaternion(a);return b.setFromQuaternion(a,this.rotation.order,!1);};}(),getWorldScale:function(){var a=new THREE.Vector3(),b=new THREE.Quaternion();return function(c){c=c||new THREE.Vector3();this.updateMatrixWorld(!0);this.matrixWorld.decompose(a,b,c);return c;};}(),getWorldDirection:function(){var a=new THREE.Quaternion();return function(b){b=b||new THREE.Vector3();this.getWorldQuaternion(a);return b.set(0,0,1).applyQuaternion(a);};}(),raycast:function raycast(){},traverse:function traverse(a){a(this);for(var b=this.children,c=0,d=b.length;c<d;c++){b[c].traverse(a);}},traverseVisible:function traverseVisible(a){if(!1!==this.visible){a(this);for(var b=this.children,c=0,d=b.length;c<d;c++){b[c].traverseVisible(a);}}},traverseAncestors:function traverseAncestors(a){var b=this.parent;null!==b&&(a(b),b.traverseAncestors(a));},updateMatrix:function updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);this.matrixWorldNeedsUpdate=!0;},updateMatrixWorld:function updateMatrixWorld(a){!0===this.matrixAutoUpdate&&this.updateMatrix();if(!0===this.matrixWorldNeedsUpdate||!0===a)null===this.parent?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,a=!0;for(var b=0,c=this.children.length;b<c;b++){this.children[b].updateMatrixWorld(a);}},toJSON:function toJSON(a){function b(a){var b=[],c;for(c in a){var d=a[c];delete d.metadata;b.push(d);}return b;}var c=void 0===a||""===a,d={};c&&(a={geometries:{},materials:{},textures:{},images:{}},d.metadata={version:4.4,type:"Object",generator:"Object3D.toJSON"});var e={};e.uuid=this.uuid;e.type=this.type;""!==this.name&&(e.name=this.name);"{}"!==JSON.stringify(this.userData)&&(e.userData=this.userData);!0===this.castShadow&&(e.castShadow=!0);!0===this.receiveShadow&&(e.receiveShadow=!0);!1===this.visible&&(e.visible=!1);e.matrix=this.matrix.toArray();void 0!==this.geometry&&(void 0===a.geometries[this.geometry.uuid]&&(a.geometries[this.geometry.uuid]=this.geometry.toJSON(a)),e.geometry=this.geometry.uuid);void 0!==this.material&&(void 0===a.materials[this.material.uuid]&&(a.materials[this.material.uuid]=this.material.toJSON(a)),e.material=this.material.uuid);if(0<this.children.length){e.children=[];for(var f=0;f<this.children.length;f++){e.children.push(this.children[f].toJSON(a).object);}}if(c){var c=b(a.geometries),f=b(a.materials),g=b(a.textures);a=b(a.images);0<c.length&&(d.geometries=c);0<f.length&&(d.materials=f);0<g.length&&(d.textures=g);0<a.length&&(d.images=a);}d.object=e;return d;},clone:function clone(a){return new this.constructor().copy(this,a);},copy:function copy(a,b){void 0===b&&(b=!0);this.name=a.name;this.up.copy(a.up);this.position.copy(a.position);this.quaternion.copy(a.quaternion);this.scale.copy(a.scale);this.matrix.copy(a.matrix);this.matrixWorld.copy(a.matrixWorld);this.matrixAutoUpdate=a.matrixAutoUpdate;this.matrixWorldNeedsUpdate=a.matrixWorldNeedsUpdate;this.visible=a.visible;this.castShadow=a.castShadow;this.receiveShadow=a.receiveShadow;this.frustumCulled=a.frustumCulled;this.renderOrder=a.renderOrder;this.userData=JSON.parse(JSON.stringify(a.userData));if(!0===b)for(var c=0;c<a.children.length;c++){this.add(a.children[c].clone());}return this;}});THREE.Object3DIdCount=0;THREE.Face3=function(a,b,c,d,e,f){this.a=a;this.b=b;this.c=c;this.normal=d instanceof THREE.Vector3?d:new THREE.Vector3();this.vertexNormals=Array.isArray(d)?d:[];this.color=e instanceof THREE.Color?e:new THREE.Color();this.vertexColors=Array.isArray(e)?e:[];this.materialIndex=void 0!==f?f:0;};THREE.Face3.prototype={constructor:THREE.Face3,clone:function clone(){return new this.constructor().copy(this);},copy:function copy(a){this.a=a.a;this.b=a.b;this.c=a.c;this.normal.copy(a.normal);this.color.copy(a.color);this.materialIndex=a.materialIndex;for(var b=0,c=a.vertexNormals.length;b<c;b++){this.vertexNormals[b]=a.vertexNormals[b].clone();}b=0;for(c=a.vertexColors.length;b<c;b++){this.vertexColors[b]=a.vertexColors[b].clone();}return this;}};THREE.BufferAttribute=function(a,b,c){this.uuid=THREE.Math.generateUUID();this.array=a;this.itemSize=b;this.dynamic=!1;this.updateRange={offset:0,count:-1};this.version=0;this.normalized=!0===c;};THREE.BufferAttribute.prototype={constructor:THREE.BufferAttribute,get count(){return this.array.length/this.itemSize;},set needsUpdate(a){!0===a&&this.version++;},setDynamic:function setDynamic(a){this.dynamic=a;return this;},copy:function copy(a){this.array=new a.array.constructor(a.array);this.itemSize=a.itemSize;this.dynamic=a.dynamic;return this;},copyAt:function copyAt(a,b,c){a*=this.itemSize;c*=b.itemSize;for(var d=0,e=this.itemSize;d<e;d++){this.array[a+d]=b.array[c+d];}return this;},copyArray:function copyArray(a){this.array.set(a);return this;},copyColorsArray:function copyColorsArray(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",d),f=new THREE.Color());b[c++]=f.r;b[c++]=f.g;b[c++]=f.b;}return this;},copyIndicesArray:function copyIndicesArray(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];b[c++]=f.a;b[c++]=f.b;b[c++]=f.c;}return this;},copyVector2sArray:function copyVector2sArray(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",d),f=new THREE.Vector2());b[c++]=f.x;b[c++]=f.y;}return this;},copyVector3sArray:function copyVector3sArray(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",d),f=new THREE.Vector3());b[c++]=f.x;b[c++]=f.y;b[c++]=f.z;}return this;},copyVector4sArray:function copyVector4sArray(a){for(var b=this.array,c=0,d=0,e=a.length;d<e;d++){var f=a[d];void 0===f&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",d),f=new THREE.Vector4());b[c++]=f.x;b[c++]=f.y;b[c++]=f.z;b[c++]=f.w;}return this;},set:function set(a,b){void 0===b&&(b=0);this.array.set(a,b);return this;},getX:function getX(a){return this.array[a*this.itemSize];},setX:function setX(a,b){this.array[a*this.itemSize]=b;return this;},getY:function getY(a){return this.array[a*this.itemSize+1];},setY:function setY(a,b){this.array[a*this.itemSize+1]=b;return this;},getZ:function getZ(a){return this.array[a*this.itemSize+2];},setZ:function setZ(a,b){this.array[a*this.itemSize+2]=b;return this;},getW:function getW(a){return this.array[a*this.itemSize+3];},setW:function setW(a,b){this.array[a*this.itemSize+3]=b;return this;},setXY:function setXY(a,b,c){a*=this.itemSize;this.array[a+0]=b;this.array[a+1]=c;return this;},setXYZ:function setXYZ(a,b,c,d){a*=this.itemSize;this.array[a+0]=b;this.array[a+1]=c;this.array[a+2]=d;return this;},setXYZW:function setXYZW(a,b,c,d,e){a*=this.itemSize;this.array[a+0]=b;this.array[a+1]=c;this.array[a+2]=d;this.array[a+3]=e;return this;},clone:function clone(){return new this.constructor().copy(this);}};THREE.Int8Attribute=function(a,b){return new THREE.BufferAttribute(new Int8Array(a),b);};THREE.Uint8Attribute=function(a,b){return new THREE.BufferAttribute(new Uint8Array(a),b);};THREE.Uint8ClampedAttribute=function(a,b){return new THREE.BufferAttribute(new Uint8ClampedArray(a),b);};THREE.Int16Attribute=function(a,b){return new THREE.BufferAttribute(new Int16Array(a),b);};THREE.Uint16Attribute=function(a,b){return new THREE.BufferAttribute(new Uint16Array(a),b);};THREE.Int32Attribute=function(a,b){return new THREE.BufferAttribute(new Int32Array(a),b);};THREE.Uint32Attribute=function(a,b){return new THREE.BufferAttribute(new Uint32Array(a),b);};THREE.Float32Attribute=function(a,b){return new THREE.BufferAttribute(new Float32Array(a),b);};THREE.Float64Attribute=function(a,b){return new THREE.BufferAttribute(new Float64Array(a),b);};THREE.DynamicBufferAttribute=function(a,b){console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead.");return new THREE.BufferAttribute(a,b).setDynamic(!0);};THREE.InstancedBufferAttribute=function(a,b,c){THREE.BufferAttribute.call(this,a,b);this.meshPerAttribute=c||1;};THREE.InstancedBufferAttribute.prototype=Object.create(THREE.BufferAttribute.prototype);THREE.InstancedBufferAttribute.prototype.constructor=THREE.InstancedBufferAttribute;THREE.InstancedBufferAttribute.prototype.copy=function(a){THREE.BufferAttribute.prototype.copy.call(this,a);this.meshPerAttribute=a.meshPerAttribute;return this;};THREE.InterleavedBuffer=function(a,b){this.uuid=THREE.Math.generateUUID();this.array=a;this.stride=b;this.dynamic=!1;this.updateRange={offset:0,count:-1};this.version=0;};THREE.InterleavedBuffer.prototype={constructor:THREE.InterleavedBuffer,get length(){return this.array.length;},get count(){return this.array.length/this.stride;},set needsUpdate(a){!0===a&&this.version++;},setDynamic:function setDynamic(a){this.dynamic=a;return this;},copy:function copy(a){this.array=new a.array.constructor(a.array);this.stride=a.stride;this.dynamic=a.dynamic;return this;},copyAt:function copyAt(a,b,c){a*=this.stride;c*=b.stride;for(var d=0,e=this.stride;d<e;d++){this.array[a+d]=b.array[c+d];}return this;},set:function set(a,b){void 0===b&&(b=0);this.array.set(a,b);return this;},clone:function clone(){return new this.constructor().copy(this);}};THREE.InstancedInterleavedBuffer=function(a,b,c){THREE.InterleavedBuffer.call(this,a,b);this.meshPerAttribute=c||1;};THREE.InstancedInterleavedBuffer.prototype=Object.create(THREE.InterleavedBuffer.prototype);THREE.InstancedInterleavedBuffer.prototype.constructor=THREE.InstancedInterleavedBuffer;THREE.InstancedInterleavedBuffer.prototype.copy=function(a){THREE.InterleavedBuffer.prototype.copy.call(this,a);this.meshPerAttribute=a.meshPerAttribute;return this;};THREE.InterleavedBufferAttribute=function(a,b,c,d){this.uuid=THREE.Math.generateUUID();this.data=a;this.itemSize=b;this.offset=c;this.normalized=!0===d;};THREE.InterleavedBufferAttribute.prototype={constructor:THREE.InterleavedBufferAttribute,get length(){console.warn("THREE.BufferAttribute: .length has been deprecated. Please use .count.");return this.array.length;},get count(){return this.data.count;},get array(){return this.data.array;},setX:function setX(a,b){this.data.array[a*this.data.stride+this.offset]=b;return this;},setY:function setY(a,b){this.data.array[a*this.data.stride+this.offset+1]=b;return this;},setZ:function setZ(a,b){this.data.array[a*this.data.stride+this.offset+2]=b;return this;},setW:function setW(a,b){this.data.array[a*this.data.stride+this.offset+3]=b;return this;},getX:function getX(a){return this.data.array[a*this.data.stride+this.offset];},getY:function getY(a){return this.data.array[a*this.data.stride+this.offset+1];},getZ:function getZ(a){return this.data.array[a*this.data.stride+this.offset+2];},getW:function getW(a){return this.data.array[a*this.data.stride+this.offset+3];},setXY:function setXY(a,b,c){a=a*this.data.stride+this.offset;this.data.array[a+0]=b;this.data.array[a+1]=c;return this;},setXYZ:function setXYZ(a,b,c,d){a=a*this.data.stride+this.offset;this.data.array[a+0]=b;this.data.array[a+1]=c;this.data.array[a+2]=d;return this;},setXYZW:function setXYZW(a,b,c,d,e){a=a*this.data.stride+this.offset;this.data.array[a+0]=b;this.data.array[a+1]=c;this.data.array[a+2]=d;this.data.array[a+3]=e;return this;}};THREE.Geometry=function(){Object.defineProperty(this,"id",{value:THREE.GeometryIdCount++});this.uuid=THREE.Math.generateUUID();this.name="";this.type="Geometry";this.vertices=[];this.colors=[];this.faces=[];this.faceVertexUvs=[[]];this.morphTargets=[];this.morphNormals=[];this.skinWeights=[];this.skinIndices=[];this.lineDistances=[];this.boundingSphere=this.boundingBox=null;this.groupsNeedUpdate=this.lineDistancesNeedUpdate=this.colorsNeedUpdate=this.normalsNeedUpdate=this.uvsNeedUpdate=this.verticesNeedUpdate=this.elementsNeedUpdate=!1;};Object.assign(THREE.Geometry.prototype,THREE.EventDispatcher.prototype,{applyMatrix:function applyMatrix(a){for(var b=new THREE.Matrix3().getNormalMatrix(a),c=0,d=this.vertices.length;c<d;c++){this.vertices[c].applyMatrix4(a);}c=0;for(d=this.faces.length;c<d;c++){a=this.faces[c];a.normal.applyMatrix3(b).normalize();for(var e=0,f=a.vertexNormals.length;e<f;e++){a.vertexNormals[e].applyMatrix3(b).normalize();}}null!==this.boundingBox&&this.computeBoundingBox();null!==this.boundingSphere&&this.computeBoundingSphere();this.normalsNeedUpdate=this.verticesNeedUpdate=!0;return this;},rotateX:function(){var a;return function(b){void 0===a&&(a=new THREE.Matrix4());a.makeRotationX(b);this.applyMatrix(a);return this;};}(),rotateY:function(){var a;return function(b){void 0===a&&(a=new THREE.Matrix4());a.makeRotationY(b);this.applyMatrix(a);return this;};}(),rotateZ:function(){var a;return function(b){void 0===a&&(a=new THREE.Matrix4());a.makeRotationZ(b);this.applyMatrix(a);return this;};}(),translate:function(){var a;return function(b,c,d){void 0===a&&(a=new THREE.Matrix4());a.makeTranslation(b,c,d);this.applyMatrix(a);return this;};}(),scale:function(){var a;return function(b,c,d){void 0===a&&(a=new THREE.Matrix4());a.makeScale(b,c,d);this.applyMatrix(a);return this;};}(),lookAt:function(){var a;return function(b){void 0===a&&(a=new THREE.Object3D());a.lookAt(b);a.updateMatrix();this.applyMatrix(a.matrix);};}(),fromBufferGeometry:function fromBufferGeometry(a){function b(a,b,d,e){var f=void 0!==g?[m[a].clone(),m[b].clone(),m[d].clone()]:[],q=void 0!==h?[c.colors[a].clone(),c.colors[b].clone(),c.colors[d].clone()]:[];e=new THREE.Face3(a,b,d,f,q,e);c.faces.push(e);void 0!==k&&c.faceVertexUvs[0].push([p[a].clone(),p[b].clone(),p[d].clone()]);void 0!==l&&c.faceVertexUvs[1].push([n[a].clone(),n[b].clone(),n[d].clone()]);}var c=this,d=null!==a.index?a.index.array:void 0,e=a.attributes,f=e.position.array,g=void 0!==e.normal?e.normal.array:void 0,h=void 0!==e.color?e.color.array:void 0,k=void 0!==e.uv?e.uv.array:void 0,l=void 0!==e.uv2?e.uv2.array:void 0;void 0!==l&&(this.faceVertexUvs[1]=[]);for(var m=[],p=[],n=[],q=e=0;e<f.length;e+=3,q+=2){c.vertices.push(new THREE.Vector3(f[e],f[e+1],f[e+2])),void 0!==g&&m.push(new THREE.Vector3(g[e],g[e+1],g[e+2])),void 0!==h&&c.colors.push(new THREE.Color(h[e],h[e+1],h[e+2])),void 0!==k&&p.push(new THREE.Vector2(k[q],k[q+1])),void 0!==l&&n.push(new THREE.Vector2(l[q],l[q+1]));}if(void 0!==d){if(f=a.groups,0<f.length)for(e=0;e<f.length;e++){for(var r=f[e],s=r.start,v=r.count,q=s,s=s+v;q<s;q+=3){b(d[q],d[q+1],d[q+2],r.materialIndex);}}else for(e=0;e<d.length;e+=3){b(d[e],d[e+1],d[e+2]);}}else for(e=0;e<f.length/3;e+=3){b(e,e+1,e+2);}this.computeFaceNormals();null!==a.boundingBox&&(this.boundingBox=a.boundingBox.clone());null!==a.boundingSphere&&(this.boundingSphere=a.boundingSphere.clone());return this;},center:function center(){this.computeBoundingBox();var a=this.boundingBox.center().negate();this.translate(a.x,a.y,a.z);return a;},normalize:function normalize(){this.computeBoundingSphere();var a=this.boundingSphere.center,b=this.boundingSphere.radius,b=0===b?1:1/b,c=new THREE.Matrix4();c.set(b,0,0,-b*a.x,0,b,0,-b*a.y,0,0,b,-b*a.z,0,0,0,1);this.applyMatrix(c);return this;},computeFaceNormals:function computeFaceNormals(){for(var a=new THREE.Vector3(),b=new THREE.Vector3(),c=0,d=this.faces.length;c<d;c++){var e=this.faces[c],f=this.vertices[e.a],g=this.vertices[e.b];a.subVectors(this.vertices[e.c],g);b.subVectors(f,g);a.cross(b);a.normalize();e.normal.copy(a);}},computeVertexNormals:function computeVertexNormals(a){void 0===a&&(a=!0);var b,c,d;d=Array(this.vertices.length);b=0;for(c=this.vertices.length;b<c;b++){d[b]=new THREE.Vector3();}if(a){var e,f,g,h=new THREE.Vector3(),k=new THREE.Vector3();a=0;for(b=this.faces.length;a<b;a++){c=this.faces[a],e=this.vertices[c.a],f=this.vertices[c.b],g=this.vertices[c.c],h.subVectors(g,f),k.subVectors(e,f),h.cross(k),d[c.a].add(h),d[c.b].add(h),d[c.c].add(h);}}else for(a=0,b=this.faces.length;a<b;a++){c=this.faces[a],d[c.a].add(c.normal),d[c.b].add(c.normal),d[c.c].add(c.normal);}b=0;for(c=this.vertices.length;b<c;b++){d[b].normalize();}a=0;for(b=this.faces.length;a<b;a++){c=this.faces[a],e=c.vertexNormals,3===e.length?(e[0].copy(d[c.a]),e[1].copy(d[c.b]),e[2].copy(d[c.c])):(e[0]=d[c.a].clone(),e[1]=d[c.b].clone(),e[2]=d[c.c].clone());}0<this.faces.length&&(this.normalsNeedUpdate=!0);},computeMorphNormals:function computeMorphNormals(){var a,b,c,d,e;c=0;for(d=this.faces.length;c<d;c++){for(e=this.faces[c],e.__originalFaceNormal?e.__originalFaceNormal.copy(e.normal):e.__originalFaceNormal=e.normal.clone(),e.__originalVertexNormals||(e.__originalVertexNormals=[]),a=0,b=e.vertexNormals.length;a<b;a++){e.__originalVertexNormals[a]?e.__originalVertexNormals[a].copy(e.vertexNormals[a]):e.__originalVertexNormals[a]=e.vertexNormals[a].clone();}}var f=new THREE.Geometry();f.faces=this.faces;a=0;for(b=this.morphTargets.length;a<b;a++){if(!this.morphNormals[a]){this.morphNormals[a]={};this.morphNormals[a].faceNormals=[];this.morphNormals[a].vertexNormals=[];e=this.morphNormals[a].faceNormals;var g=this.morphNormals[a].vertexNormals,h,k;c=0;for(d=this.faces.length;c<d;c++){h=new THREE.Vector3(),k={a:new THREE.Vector3(),b:new THREE.Vector3(),c:new THREE.Vector3()},e.push(h),g.push(k);}}g=this.morphNormals[a];f.vertices=this.morphTargets[a].vertices;f.computeFaceNormals();f.computeVertexNormals();c=0;for(d=this.faces.length;c<d;c++){e=this.faces[c],h=g.faceNormals[c],k=g.vertexNormals[c],h.copy(e.normal),k.a.copy(e.vertexNormals[0]),k.b.copy(e.vertexNormals[1]),k.c.copy(e.vertexNormals[2]);}}c=0;for(d=this.faces.length;c<d;c++){e=this.faces[c],e.normal=e.__originalFaceNormal,e.vertexNormals=e.__originalVertexNormals;}},computeTangents:function computeTangents(){console.warn("THREE.Geometry: .computeTangents() has been removed.");},computeLineDistances:function computeLineDistances(){for(var a=0,b=this.vertices,c=0,d=b.length;c<d;c++){0<c&&(a+=b[c].distanceTo(b[c-1])),this.lineDistances[c]=a;}},computeBoundingBox:function computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new THREE.Box3());this.boundingBox.setFromPoints(this.vertices);},computeBoundingSphere:function computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new THREE.Sphere());this.boundingSphere.setFromPoints(this.vertices);},merge:function merge(a,b,c){if(!1===a instanceof THREE.Geometry)console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",a);else{var d,e=this.vertices.length,f=this.vertices,g=a.vertices,h=this.faces,k=a.faces,l=this.faceVertexUvs[0];a=a.faceVertexUvs[0];void 0===c&&(c=0);void 0!==b&&(d=new THREE.Matrix3().getNormalMatrix(b));for(var m=0,p=g.length;m<p;m++){var n=g[m].clone();void 0!==b&&n.applyMatrix4(b);f.push(n);}m=0;for(p=k.length;m<p;m++){var g=k[m],q,r=g.vertexNormals,s=g.vertexColors,n=new THREE.Face3(g.a+e,g.b+e,g.c+e);n.normal.copy(g.normal);void 0!==d&&n.normal.applyMatrix3(d).normalize();b=0;for(f=r.length;b<f;b++){q=r[b].clone(),void 0!==d&&q.applyMatrix3(d).normalize(),n.vertexNormals.push(q);}n.color.copy(g.color);b=0;for(f=s.length;b<f;b++){q=s[b],n.vertexColors.push(q.clone());}n.materialIndex=g.materialIndex+c;h.push(n);}m=0;for(p=a.length;m<p;m++){if(c=a[m],d=[],void 0!==c){b=0;for(f=c.length;b<f;b++){d.push(c[b].clone());}l.push(d);}}}},mergeMesh:function mergeMesh(a){!1===a instanceof THREE.Mesh?console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.",a):(a.matrixAutoUpdate&&a.updateMatrix(),this.merge(a.geometry,a.matrix));},mergeVertices:function mergeVertices(){var a={},b=[],c=[],d,e=Math.pow(10,4),f,g;f=0;for(g=this.vertices.length;f<g;f++){d=this.vertices[f],d=Math.round(d.x*e)+"_"+Math.round(d.y*e)+"_"+Math.round(d.z*e),void 0===a[d]?(a[d]=f,b.push(this.vertices[f]),c[f]=b.length-1):c[f]=c[a[d]];}a=[];f=0;for(g=this.faces.length;f<g;f++){for(e=this.faces[f],e.a=c[e.a],e.b=c[e.b],e.c=c[e.c],e=[e.a,e.b,e.c],d=0;3>d;d++){if(e[d]===e[(d+1)%3]){a.push(f);break;}}}for(f=a.length-1;0<=f;f--){for(e=a[f],this.faces.splice(e,1),c=0,g=this.faceVertexUvs.length;c<g;c++){this.faceVertexUvs[c].splice(e,1);}}f=this.vertices.length-b.length;this.vertices=b;return f;},sortFacesByMaterialIndex:function sortFacesByMaterialIndex(){for(var a=this.faces,b=a.length,c=0;c<b;c++){a[c]._id=c;}a.sort(function(a,b){return a.materialIndex-b.materialIndex;});var d=this.faceVertexUvs[0],e=this.faceVertexUvs[1],f,g;d&&d.length===b&&(f=[]);e&&e.length===b&&(g=[]);for(c=0;c<b;c++){var h=a[c]._id;f&&f.push(d[h]);g&&g.push(e[h]);}f&&(this.faceVertexUvs[0]=f);g&&(this.faceVertexUvs[1]=g);},toJSON:function toJSON(){function a(a,b,c){return c?a|1<<b:a&~(1<<b);}function b(a){var b=a.x.toString()+a.y.toString()+a.z.toString();if(void 0!==l[b])return l[b];l[b]=k.length/3;k.push(a.x,a.y,a.z);return l[b];}function c(a){var b=a.r.toString()+a.g.toString()+a.b.toString();if(void 0!==p[b])return p[b];p[b]=m.length;m.push(a.getHex());return p[b];}function d(a){var b=a.x.toString()+a.y.toString();if(void 0!==q[b])return q[b];q[b]=n.length/2;n.push(a.x,a.y);return q[b];}var e={metadata:{version:4.4,type:"Geometry",generator:"Geometry.toJSON"}};e.uuid=this.uuid;e.type=this.type;""!==this.name&&(e.name=this.name);if(void 0!==this.parameters){var f=this.parameters,g;for(g in f){void 0!==f[g]&&(e[g]=f[g]);}return e;}f=[];for(g=0;g<this.vertices.length;g++){var h=this.vertices[g];f.push(h.x,h.y,h.z);}var h=[],k=[],l={},m=[],p={},n=[],q={};for(g=0;g<this.faces.length;g++){var r=this.faces[g],s=void 0!==this.faceVertexUvs[0][g],v=0<r.normal.length(),t=0<r.vertexNormals.length,u=1!==r.color.r||1!==r.color.g||1!==r.color.b,D=0<r.vertexColors.length,w=0,w=a(w,0,0),w=a(w,1,!0),w=a(w,2,!1),w=a(w,3,s),w=a(w,4,v),w=a(w,5,t),w=a(w,6,u),w=a(w,7,D);h.push(w);h.push(r.a,r.b,r.c);h.push(r.materialIndex);s&&(s=this.faceVertexUvs[0][g],h.push(d(s[0]),d(s[1]),d(s[2])));v&&h.push(b(r.normal));t&&(v=r.vertexNormals,h.push(b(v[0]),b(v[1]),b(v[2])));u&&h.push(c(r.color));D&&(r=r.vertexColors,h.push(c(r[0]),c(r[1]),c(r[2])));}e.data={};e.data.vertices=f;e.data.normals=k;0<m.length&&(e.data.colors=m);0<n.length&&(e.data.uvs=[n]);e.data.faces=h;return e;},clone:function clone(){return new THREE.Geometry().copy(this);},copy:function copy(a){this.vertices=[];this.faces=[];this.faceVertexUvs=[[]];for(var b=a.vertices,c=0,d=b.length;c<d;c++){this.vertices.push(b[c].clone());}b=a.faces;c=0;for(d=b.length;c<d;c++){this.faces.push(b[c].clone());}c=0;for(d=a.faceVertexUvs.length;c<d;c++){b=a.faceVertexUvs[c];void 0===this.faceVertexUvs[c]&&(this.faceVertexUvs[c]=[]);for(var e=0,f=b.length;e<f;e++){for(var g=b[e],h=[],k=0,l=g.length;k<l;k++){h.push(g[k].clone());}this.faceVertexUvs[c].push(h);}}return this;},dispose:function dispose(){this.dispatchEvent({type:"dispose"});}});THREE.GeometryIdCount=0;THREE.DirectGeometry=function(){Object.defineProperty(this,"id",{value:THREE.GeometryIdCount++});this.uuid=THREE.Math.generateUUID();this.name="";this.type="DirectGeometry";this.indices=[];this.vertices=[];this.normals=[];this.colors=[];this.uvs=[];this.uvs2=[];this.groups=[];this.morphTargets={};this.skinWeights=[];this.skinIndices=[];this.boundingSphere=this.boundingBox=null;this.groupsNeedUpdate=this.uvsNeedUpdate=this.colorsNeedUpdate=this.normalsNeedUpdate=this.verticesNeedUpdate=!1;};Object.assign(THREE.DirectGeometry.prototype,THREE.EventDispatcher.prototype,{computeBoundingBox:THREE.Geometry.prototype.computeBoundingBox,computeBoundingSphere:THREE.Geometry.prototype.computeBoundingSphere,computeFaceNormals:function computeFaceNormals(){console.warn("THREE.DirectGeometry: computeFaceNormals() is not a method of this type of geometry.");},computeVertexNormals:function computeVertexNormals(){console.warn("THREE.DirectGeometry: computeVertexNormals() is not a method of this type of geometry.");},computeGroups:function computeGroups(a){var b,c=[],d;a=a.faces;for(var e=0;e<a.length;e++){var f=a[e];f.materialIndex!==d&&(d=f.materialIndex,void 0!==b&&(b.count=3*e-b.start,c.push(b)),b={start:3*e,materialIndex:d});}void 0!==b&&(b.count=3*e-b.start,c.push(b));this.groups=c;},fromGeometry:function fromGeometry(a){var b=a.faces,c=a.vertices,d=a.faceVertexUvs,e=d[0]&&0<d[0].length,f=d[1]&&0<d[1].length,g=a.morphTargets,h=g.length,k;if(0<h){k=[];for(var l=0;l<h;l++){k[l]=[];}this.morphTargets.position=k;}var m=a.morphNormals,p=m.length,n;if(0<p){n=[];for(l=0;l<p;l++){n[l]=[];}this.morphTargets.normal=n;}for(var q=a.skinIndices,r=a.skinWeights,s=q.length===c.length,v=r.length===c.length,l=0;l<b.length;l++){var t=b[l];this.vertices.push(c[t.a],c[t.b],c[t.c]);var u=t.vertexNormals;3===u.length?this.normals.push(u[0],u[1],u[2]):(u=t.normal,this.normals.push(u,u,u));u=t.vertexColors;3===u.length?this.colors.push(u[0],u[1],u[2]):(u=t.color,this.colors.push(u,u,u));!0===e&&(u=d[0][l],void 0!==u?this.uvs.push(u[0],u[1],u[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ",l),this.uvs.push(new THREE.Vector2(),new THREE.Vector2(),new THREE.Vector2())));!0===f&&(u=d[1][l],void 0!==u?this.uvs2.push(u[0],u[1],u[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ",l),this.uvs2.push(new THREE.Vector2(),new THREE.Vector2(),new THREE.Vector2())));for(u=0;u<h;u++){var D=g[u].vertices;k[u].push(D[t.a],D[t.b],D[t.c]);}for(u=0;u<p;u++){D=m[u].vertexNormals[l],n[u].push(D.a,D.b,D.c);}s&&this.skinIndices.push(q[t.a],q[t.b],q[t.c]);v&&this.skinWeights.push(r[t.a],r[t.b],r[t.c]);}this.computeGroups(a);this.verticesNeedUpdate=a.verticesNeedUpdate;this.normalsNeedUpdate=a.normalsNeedUpdate;this.colorsNeedUpdate=a.colorsNeedUpdate;this.uvsNeedUpdate=a.uvsNeedUpdate;this.groupsNeedUpdate=a.groupsNeedUpdate;return this;},dispose:function dispose(){this.dispatchEvent({type:"dispose"});}});THREE.BufferGeometry=function(){Object.defineProperty(this,"id",{value:THREE.GeometryIdCount++});this.uuid=THREE.Math.generateUUID();this.name="";this.type="BufferGeometry";this.index=null;this.attributes={};this.morphAttributes={};this.groups=[];this.boundingSphere=this.boundingBox=null;this.drawRange={start:0,count:Infinity};};Object.assign(THREE.BufferGeometry.prototype,THREE.EventDispatcher.prototype,{getIndex:function getIndex(){return this.index;},setIndex:function setIndex(a){this.index=a;},addAttribute:function addAttribute(a,b,c){if(!1===b instanceof THREE.BufferAttribute&&!1===b instanceof THREE.InterleavedBufferAttribute)console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.addAttribute(a,new THREE.BufferAttribute(b,c));else if("index"===a)console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(b);else return this.attributes[a]=b,this;},getAttribute:function getAttribute(a){return this.attributes[a];},removeAttribute:function removeAttribute(a){delete this.attributes[a];return this;},addGroup:function addGroup(a,b,c){this.groups.push({start:a,count:b,materialIndex:void 0!==c?c:0});},clearGroups:function clearGroups(){this.groups=[];},setDrawRange:function setDrawRange(a,b){this.drawRange.start=a;this.drawRange.count=b;},applyMatrix:function applyMatrix(a){var b=this.attributes.position;void 0!==b&&(a.applyToVector3Array(b.array),b.needsUpdate=!0);b=this.attributes.normal;void 0!==b&&(new THREE.Matrix3().getNormalMatrix(a).applyToVector3Array(b.array),b.needsUpdate=!0);null!==this.boundingBox&&this.computeBoundingBox();null!==this.boundingSphere&&this.computeBoundingSphere();return this;},rotateX:function(){var a;return function(b){void 0===a&&(a=new THREE.Matrix4());a.makeRotationX(b);this.applyMatrix(a);return this;};}(),rotateY:function(){var a;return function(b){void 0===a&&(a=new THREE.Matrix4());a.makeRotationY(b);this.applyMatrix(a);return this;};}(),rotateZ:function(){var a;return function(b){void 0===a&&(a=new THREE.Matrix4());a.makeRotationZ(b);this.applyMatrix(a);return this;};}(),translate:function(){var a;return function(b,c,d){void 0===a&&(a=new THREE.Matrix4());a.makeTranslation(b,c,d);this.applyMatrix(a);return this;};}(),scale:function(){var a;return function(b,c,d){void 0===a&&(a=new THREE.Matrix4());a.makeScale(b,c,d);this.applyMatrix(a);return this;};}(),lookAt:function(){var a;return function(b){void 0===a&&(a=new THREE.Object3D());a.lookAt(b);a.updateMatrix();this.applyMatrix(a.matrix);};}(),center:function center(){this.computeBoundingBox();var a=this.boundingBox.center().negate();this.translate(a.x,a.y,a.z);return a;},setFromObject:function setFromObject(a){var b=a.geometry;if(a instanceof THREE.Points||a instanceof THREE.Line){a=new THREE.Float32Attribute(3*b.vertices.length,3);var c=new THREE.Float32Attribute(3*b.colors.length,3);this.addAttribute("position",a.copyVector3sArray(b.vertices));this.addAttribute("color",c.copyColorsArray(b.colors));b.lineDistances&&b.lineDistances.length===b.vertices.length&&(a=new THREE.Float32Attribute(b.lineDistances.length,1),this.addAttribute("lineDistance",a.copyArray(b.lineDistances)));null!==b.boundingSphere&&(this.boundingSphere=b.boundingSphere.clone());null!==b.boundingBox&&(this.boundingBox=b.boundingBox.clone());}else a instanceof THREE.Mesh&&b instanceof THREE.Geometry&&this.fromGeometry(b);return this;},updateFromObject:function updateFromObject(a){var b=a.geometry;if(a instanceof THREE.Mesh){var c=b.__directGeometry;if(void 0===c||!0===b.elementsNeedUpdate)return this.fromGeometry(b);c.verticesNeedUpdate=b.verticesNeedUpdate||b.elementsNeedUpdate;c.normalsNeedUpdate=b.normalsNeedUpdate||b.elementsNeedUpdate;c.colorsNeedUpdate=b.colorsNeedUpdate||b.elementsNeedUpdate;c.uvsNeedUpdate=b.uvsNeedUpdate||b.elementsNeedUpdate;c.groupsNeedUpdate=b.groupsNeedUpdate||b.elementsNeedUpdate;b.elementsNeedUpdate=!1;b.verticesNeedUpdate=!1;b.normalsNeedUpdate=!1;b.colorsNeedUpdate=!1;b.uvsNeedUpdate=!1;b.groupsNeedUpdate=!1;b=c;}!0===b.verticesNeedUpdate&&(c=this.attributes.position,void 0!==c&&(c.copyVector3sArray(b.vertices),c.needsUpdate=!0),b.verticesNeedUpdate=!1);!0===b.normalsNeedUpdate&&(c=this.attributes.normal,void 0!==c&&(c.copyVector3sArray(b.normals),c.needsUpdate=!0),b.normalsNeedUpdate=!1);!0===b.colorsNeedUpdate&&(c=this.attributes.color,void 0!==c&&(c.copyColorsArray(b.colors),c.needsUpdate=!0),b.colorsNeedUpdate=!1);b.uvsNeedUpdate&&(c=this.attributes.uv,void 0!==c&&(c.copyVector2sArray(b.uvs),c.needsUpdate=!0),b.uvsNeedUpdate=!1);b.lineDistancesNeedUpdate&&(c=this.attributes.lineDistance,void 0!==c&&(c.copyArray(b.lineDistances),c.needsUpdate=!0),b.lineDistancesNeedUpdate=!1);b.groupsNeedUpdate&&(b.computeGroups(a.geometry),this.groups=b.groups,b.groupsNeedUpdate=!1);return this;},fromGeometry:function fromGeometry(a){a.__directGeometry=new THREE.DirectGeometry().fromGeometry(a);return this.fromDirectGeometry(a.__directGeometry);},fromDirectGeometry:function fromDirectGeometry(a){var b=new Float32Array(3*a.vertices.length);this.addAttribute("position",new THREE.BufferAttribute(b,3).copyVector3sArray(a.vertices));0<a.normals.length&&(b=new Float32Array(3*a.normals.length),this.addAttribute("normal",new THREE.BufferAttribute(b,3).copyVector3sArray(a.normals)));0<a.colors.length&&(b=new Float32Array(3*a.colors.length),this.addAttribute("color",new THREE.BufferAttribute(b,3).copyColorsArray(a.colors)));0<a.uvs.length&&(b=new Float32Array(2*a.uvs.length),this.addAttribute("uv",new THREE.BufferAttribute(b,2).copyVector2sArray(a.uvs)));0<a.uvs2.length&&(b=new Float32Array(2*a.uvs2.length),this.addAttribute("uv2",new THREE.BufferAttribute(b,2).copyVector2sArray(a.uvs2)));0<a.indices.length&&(b=new(65535<a.vertices.length?Uint32Array:Uint16Array)(3*a.indices.length),this.setIndex(new THREE.BufferAttribute(b,1).copyIndicesArray(a.indices)));this.groups=a.groups;for(var c in a.morphTargets){for(var b=[],d=a.morphTargets[c],e=0,f=d.length;e<f;e++){var g=d[e],h=new THREE.Float32Attribute(3*g.length,3);b.push(h.copyVector3sArray(g));}this.morphAttributes[c]=b;}0<a.skinIndices.length&&(c=new THREE.Float32Attribute(4*a.skinIndices.length,4),this.addAttribute("skinIndex",c.copyVector4sArray(a.skinIndices)));0<a.skinWeights.length&&(c=new THREE.Float32Attribute(4*a.skinWeights.length,4),this.addAttribute("skinWeight",c.copyVector4sArray(a.skinWeights)));null!==a.boundingSphere&&(this.boundingSphere=a.boundingSphere.clone());null!==a.boundingBox&&(this.boundingBox=a.boundingBox.clone());return this;},computeBoundingBox:function computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new THREE.Box3());var a=this.attributes.position.array;void 0!==a?this.boundingBox.setFromArray(a):this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this);},computeBoundingSphere:function(){var a=new THREE.Box3(),b=new THREE.Vector3();return function(){null===this.boundingSphere&&(this.boundingSphere=new THREE.Sphere());var c=this.attributes.position;if(c){var c=c.array,d=this.boundingSphere.center;a.setFromArray(c);a.center(d);for(var e=0,f=0,g=c.length;f<g;f+=3){b.fromArray(c,f),e=Math.max(e,d.distanceToSquared(b));}this.boundingSphere.radius=Math.sqrt(e);isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this);}};}(),computeFaceNormals:function computeFaceNormals(){},computeVertexNormals:function computeVertexNormals(){var a=this.index,b=this.attributes,c=this.groups;if(b.position){var d=b.position.array;if(void 0===b.normal)this.addAttribute("normal",new THREE.BufferAttribute(new Float32Array(d.length),3));else for(var e=b.normal.array,f=0,g=e.length;f<g;f++){e[f]=0;}var e=b.normal.array,h,k,l,m=new THREE.Vector3(),p=new THREE.Vector3(),n=new THREE.Vector3(),q=new THREE.Vector3(),r=new THREE.Vector3();if(a){a=a.array;0===c.length&&this.addGroup(0,a.length);for(var s=0,v=c.length;s<v;++s){for(f=c[s],g=f.start,h=f.count,f=g,g+=h;f<g;f+=3){h=3*a[f+0],k=3*a[f+1],l=3*a[f+2],m.fromArray(d,h),p.fromArray(d,k),n.fromArray(d,l),q.subVectors(n,p),r.subVectors(m,p),q.cross(r),e[h]+=q.x,e[h+1]+=q.y,e[h+2]+=q.z,e[k]+=q.x,e[k+1]+=q.y,e[k+2]+=q.z,e[l]+=q.x,e[l+1]+=q.y,e[l+2]+=q.z;}}}else for(f=0,g=d.length;f<g;f+=9){m.fromArray(d,f),p.fromArray(d,f+3),n.fromArray(d,f+6),q.subVectors(n,p),r.subVectors(m,p),q.cross(r),e[f]=q.x,e[f+1]=q.y,e[f+2]=q.z,e[f+3]=q.x,e[f+4]=q.y,e[f+5]=q.z,e[f+6]=q.x,e[f+7]=q.y,e[f+8]=q.z;}this.normalizeNormals();b.normal.needsUpdate=!0;}},merge:function merge(a,b){if(!1===a instanceof THREE.BufferGeometry)console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",a);else{void 0===b&&(b=0);var c=this.attributes,d;for(d in c){if(void 0!==a.attributes[d])for(var e=c[d].array,f=a.attributes[d],g=f.array,h=0,f=f.itemSize*b;h<g.length;h++,f++){e[f]=g[h];}}return this;}},normalizeNormals:function normalizeNormals(){for(var a=this.attributes.normal.array,b,c,d,e=0,f=a.length;e<f;e+=3){b=a[e],c=a[e+1],d=a[e+2],b=1/Math.sqrt(b*b+c*c+d*d),a[e]*=b,a[e+1]*=b,a[e+2]*=b;}},toNonIndexed:function toNonIndexed(){if(null===this.index)return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."),this;var a=new THREE.BufferGeometry(),b=this.index.array,c=this.attributes,d;for(d in c){for(var e=c[d],f=e.array,e=e.itemSize,g=new f.constructor(b.length*e),h=0,k=0,l=0,m=b.length;l<m;l++){for(var h=b[l]*e,p=0;p<e;p++){g[k++]=f[h++];}}a.addAttribute(d,new THREE.BufferAttribute(g,e));}return a;},toJSON:function toJSON(){var a={metadata:{version:4.4,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};a.uuid=this.uuid;a.type=this.type;""!==this.name&&(a.name=this.name);if(void 0!==this.parameters){var b=this.parameters,c;for(c in b){void 0!==b[c]&&(a[c]=b[c]);}return a;}a.data={attributes:{}};var d=this.index;null!==d&&(b=Array.prototype.slice.call(d.array),a.data.index={type:d.array.constructor.name,array:b});d=this.attributes;for(c in d){var e=d[c],b=Array.prototype.slice.call(e.array);a.data.attributes[c]={itemSize:e.itemSize,type:e.array.constructor.name,array:b,normalized:e.normalized};}c=this.groups;0<c.length&&(a.data.groups=JSON.parse(JSON.stringify(c)));c=this.boundingSphere;null!==c&&(a.data.boundingSphere={center:c.center.toArray(),radius:c.radius});return a;},clone:function clone(){return new THREE.BufferGeometry().copy(this);},copy:function copy(a){var b=a.index;null!==b&&this.setIndex(b.clone());var b=a.attributes,c;for(c in b){this.addAttribute(c,b[c].clone());}a=a.groups;c=0;for(b=a.length;c<b;c++){var d=a[c];this.addGroup(d.start,d.count,d.materialIndex);}return this;},dispose:function dispose(){this.dispatchEvent({type:"dispose"});}});THREE.BufferGeometry.MaxIndex=65535;THREE.InstancedBufferGeometry=function(){THREE.BufferGeometry.call(this);this.type="InstancedBufferGeometry";this.maxInstancedCount=void 0;};THREE.InstancedBufferGeometry.prototype=Object.create(THREE.BufferGeometry.prototype);THREE.InstancedBufferGeometry.prototype.constructor=THREE.InstancedBufferGeometry;THREE.InstancedBufferGeometry.prototype.addGroup=function(a,b,c){this.groups.push({start:a,count:b,instances:c});};THREE.InstancedBufferGeometry.prototype.copy=function(a){var b=a.index;null!==b&&this.setIndex(b.clone());var b=a.attributes,c;for(c in b){this.addAttribute(c,b[c].clone());}a=a.groups;c=0;for(b=a.length;c<b;c++){var d=a[c];this.addGroup(d.start,d.count,d.instances);}return this;};THREE.Uniform=function(a,b){"string"===typeof a&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),a=b);this.value=a;this.dynamic=!1;};THREE.Uniform.prototype={constructor:THREE.Uniform,onUpdate:function onUpdate(a){this.dynamic=!0;this.onUpdateCallback=a;return this;}};THREE.AnimationAction=function(){throw Error("THREE.AnimationAction: Use mixer.clipAction for construction.");};THREE.AnimationAction._new=function(a,b,c){this._mixer=a;this._clip=b;this._localRoot=c||null;a=b.tracks;b=a.length;c=Array(b);for(var d={endingStart:THREE.ZeroCurvatureEnding,endingEnd:THREE.ZeroCurvatureEnding},e=0;e!==b;++e){var f=a[e].createInterpolant(null);c[e]=f;f.settings=d;}this._interpolantSettings=d;this._interpolants=c;this._propertyBindings=Array(b);this._weightInterpolant=this._timeScaleInterpolant=this._byClipCacheIndex=this._cacheIndex=null;this.loop=THREE.LoopRepeat;this._loopCount=-1;this._startTime=null;this.time=0;this._effectiveWeight=this.weight=this._effectiveTimeScale=this.timeScale=1;this.repetitions=Infinity;this.paused=!1;this.enabled=!0;this.clampWhenFinished=!1;this.zeroSlopeAtEnd=this.zeroSlopeAtStart=!0;};THREE.AnimationAction._new.prototype={constructor:THREE.AnimationAction._new,play:function play(){this._mixer._activateAction(this);return this;},stop:function stop(){this._mixer._deactivateAction(this);return this.reset();},reset:function reset(){this.paused=!1;this.enabled=!0;this.time=0;this._loopCount=-1;this._startTime=null;return this.stopFading().stopWarping();},isRunning:function isRunning(){return this.enabled&&!this.paused&&0!==this.timeScale&&null===this._startTime&&this._mixer._isActiveAction(this);},isScheduled:function isScheduled(){return this._mixer._isActiveAction(this);},startAt:function startAt(a){this._startTime=a;return this;},setLoop:function setLoop(a,b){this.loop=a;this.repetitions=b;return this;},setEffectiveWeight:function setEffectiveWeight(a){this.weight=a;this._effectiveWeight=this.enabled?a:0;return this.stopFading();},getEffectiveWeight:function getEffectiveWeight(){return this._effectiveWeight;},fadeIn:function fadeIn(a){return this._scheduleFading(a,0,1);},fadeOut:function fadeOut(a){return this._scheduleFading(a,1,0);},crossFadeFrom:function crossFadeFrom(a,b,c){a.fadeOut(b);this.fadeIn(b);if(c){c=this._clip.duration;var d=a._clip.duration,e=c/d;a.warp(1,d/c,b);this.warp(e,1,b);}return this;},crossFadeTo:function crossFadeTo(a,b,c){return a.crossFadeFrom(this,b,c);},stopFading:function stopFading(){var a=this._weightInterpolant;null!==a&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(a));return this;},setEffectiveTimeScale:function setEffectiveTimeScale(a){this.timeScale=a;this._effectiveTimeScale=this.paused?0:a;return this.stopWarping();},getEffectiveTimeScale:function getEffectiveTimeScale(){return this._effectiveTimeScale;},setDuration:function setDuration(a){this.timeScale=this._clip.duration/a;return this.stopWarping();},syncWith:function syncWith(a){this.time=a.time;this.timeScale=a.timeScale;return this.stopWarping();},halt:function halt(a){return this.warp(this._effectiveTimeScale,0,a);},warp:function warp(a,b,c){var d=this._mixer,e=d.time,f=this._timeScaleInterpolant,g=this.timeScale;null===f&&(this._timeScaleInterpolant=f=d._lendControlInterpolant());d=f.parameterPositions;f=f.sampleValues;d[0]=e;d[1]=e+c;f[0]=a/g;f[1]=b/g;return this;},stopWarping:function stopWarping(){var a=this._timeScaleInterpolant;null!==a&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(a));return this;},getMixer:function getMixer(){return this._mixer;},getClip:function getClip(){return this._clip;},getRoot:function getRoot(){return this._localRoot||this._mixer._root;},_update:function _update(a,b,c,d){var e=this._startTime;if(null!==e){b=(a-e)*c;if(0>b||0===c)return;this._startTime=null;b*=c;}b*=this._updateTimeScale(a);c=this._updateTime(b);a=this._updateWeight(a);if(0<a){b=this._interpolants;for(var e=this._propertyBindings,f=0,g=b.length;f!==g;++f){b[f].evaluate(c),e[f].accumulate(d,a);}}},_updateWeight:function _updateWeight(a){var b=0;if(this.enabled){var b=this.weight,c=this._weightInterpolant;if(null!==c){var d=c.evaluate(a)[0],b=b*d;a>c.parameterPositions[1]&&(this.stopFading(),0===d&&(this.enabled=!1));}}return this._effectiveWeight=b;},_updateTimeScale:function _updateTimeScale(a){var b=0;if(!this.paused){var b=this.timeScale,c=this._timeScaleInterpolant;if(null!==c){var d=c.evaluate(a)[0],b=b*d;a>c.parameterPositions[1]&&(this.stopWarping(),0===b?this.paused=!0:this.timeScale=b);}}return this._effectiveTimeScale=b;},_updateTime:function _updateTime(a){var b=this.time+a;if(0===a)return b;var c=this._clip.duration,d=this.loop,e=this._loopCount;if(d===THREE.LoopOnce)a:{if(-1===e&&(this.loopCount=0,this._setEndings(!0,!0,!1)),b>=c)b=c;else if(0>b)b=0;else break a;this.clampWhenFinished?this.paused=!0:this.enabled=!1;this._mixer.dispatchEvent({type:"finished",action:this,direction:0>a?-1:1});}else{d=d===THREE.LoopPingPong;-1===e&&(0<=a?(e=0,this._setEndings(!0,0===this.repetitions,d)):this._setEndings(0===this.repetitions,!0,d));if(b>=c||0>b){var f=Math.floor(b/c),b=b-c*f,e=e+Math.abs(f),g=this.repetitions-e;0>g?(this.clampWhenFinished?this.paused=!0:this.enabled=!1,b=0<a?c:0,this._mixer.dispatchEvent({type:"finished",action:this,direction:0<a?1:-1})):(0===g?(a=0>a,this._setEndings(a,!a,d)):this._setEndings(!1,!1,d),this._loopCount=e,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:f}));}if(d&&1===(e&1))return this.time=b,c-b;}return this.time=b;},_setEndings:function _setEndings(a,b,c){var d=this._interpolantSettings;c?(d.endingStart=THREE.ZeroSlopeEnding,d.endingEnd=THREE.ZeroSlopeEnding):(d.endingStart=a?this.zeroSlopeAtStart?THREE.ZeroSlopeEnding:THREE.ZeroCurvatureEnding:THREE.WrapAroundEnding,d.endingEnd=b?this.zeroSlopeAtEnd?THREE.ZeroSlopeEnding:THREE.ZeroCurvatureEnding:THREE.WrapAroundEnding);},_scheduleFading:function _scheduleFading(a,b,c){var d=this._mixer,e=d.time,f=this._weightInterpolant;null===f&&(this._weightInterpolant=f=d._lendControlInterpolant());d=f.parameterPositions;f=f.sampleValues;d[0]=e;f[0]=b;d[1]=e+a;f[1]=c;return this;}};THREE.AnimationClip=function(a,b,c){this.name=a;this.tracks=c;this.duration=void 0!==b?b:-1;this.uuid=THREE.Math.generateUUID();0>this.duration&&this.resetDuration();this.trim();this.optimize();};THREE.AnimationClip.prototype={constructor:THREE.AnimationClip,resetDuration:function resetDuration(){for(var a=0,b=0,c=this.tracks.length;b!==c;++b){var d=this.tracks[b],a=Math.max(a,d.times[d.times.length-1]);}this.duration=a;},trim:function trim(){for(var a=0;a<this.tracks.length;a++){this.tracks[a].trim(0,this.duration);}return this;},optimize:function optimize(){for(var a=0;a<this.tracks.length;a++){this.tracks[a].optimize();}return this;}};Object.assign(THREE.AnimationClip,{parse:function parse(a){for(var b=[],c=a.tracks,d=1/(a.fps||1),e=0,f=c.length;e!==f;++e){b.push(THREE.KeyframeTrack.parse(c[e]).scale(d));}return new THREE.AnimationClip(a.name,a.duration,b);},toJSON:function toJSON(a){var b=[],c=a.tracks;a={name:a.name,duration:a.duration,tracks:b};for(var d=0,e=c.length;d!==e;++d){b.push(THREE.KeyframeTrack.toJSON(c[d]));}return a;},CreateFromMorphTargetSequence:function CreateFromMorphTargetSequence(a,b,c,d){for(var e=b.length,f=[],g=0;g<e;g++){var h=[],k=[];h.push((g+e-1)%e,g,(g+1)%e);k.push(0,1,0);var l=THREE.AnimationUtils.getKeyframeOrder(h),h=THREE.AnimationUtils.sortedArray(h,1,l),k=THREE.AnimationUtils.sortedArray(k,1,l);d||0!==h[0]||(h.push(e),k.push(k[0]));f.push(new THREE.NumberKeyframeTrack(".morphTargetInfluences["+b[g].name+"]",h,k).scale(1/c));}return new THREE.AnimationClip(a,-1,f);},findByName:function findByName(a,b){var c=a;Array.isArray(a)||(c=a.geometry&&a.geometry.animations||a.animations);for(var d=0;d<c.length;d++){if(c[d].name===b)return c[d];}return null;},CreateClipsFromMorphTargetSequences:function CreateClipsFromMorphTargetSequences(a,b,c){for(var d={},e=/^([\w-]*?)([\d]+)$/,f=0,g=a.length;f<g;f++){var h=a[f],k=h.name.match(e);if(k&&1<k.length){var l=k[1];(k=d[l])||(d[l]=k=[]);k.push(h);}}a=[];for(l in d){a.push(THREE.AnimationClip.CreateFromMorphTargetSequence(l,d[l],b,c));}return a;},parseAnimation:function parseAnimation(a,b,c){if(!a)return console.error("  no animation in JSONLoader data"),null;c=function c(a,b,_c,d,e){if(0!==_c.length){var f=[],g=[];THREE.AnimationUtils.flattenJSON(_c,f,g,d);0!==f.length&&e.push(new a(b,f,g));}};var d=[],e=a.name||"default",f=a.length||-1,g=a.fps||30;a=a.hierarchy||[];for(var h=0;h<a.length;h++){var k=a[h].keys;if(k&&0!==k.length)if(k[0].morphTargets){for(var f={},l=0;l<k.length;l++){if(k[l].morphTargets)for(var m=0;m<k[l].morphTargets.length;m++){f[k[l].morphTargets[m]]=-1;}}for(var p in f){for(var n=[],q=[],m=0;m!==k[l].morphTargets.length;++m){var r=k[l];n.push(r.time);q.push(r.morphTarget===p?1:0);}d.push(new THREE.NumberKeyframeTrack(".morphTargetInfluence["+p+"]",n,q));}f=f.length*(g||1);}else l=".bones["+b[h].name+"]",c(THREE.VectorKeyframeTrack,l+".position",k,"pos",d),c(THREE.QuaternionKeyframeTrack,l+".quaternion",k,"rot",d),c(THREE.VectorKeyframeTrack,l+".scale",k,"scl",d);}return 0===d.length?null:new THREE.AnimationClip(e,f,d);}});THREE.AnimationMixer=function(a){this._root=a;this._initMemoryManager();this.time=this._accuIndex=0;this.timeScale=1;};Object.assign(THREE.AnimationMixer.prototype,THREE.EventDispatcher.prototype,{clipAction:function clipAction(a,b){var c=b||this._root,d=c.uuid,e="string"===typeof a?THREE.AnimationClip.findByName(c,a):a,c=null!==e?e.uuid:a,f=this._actionsByClip[c],g=null;if(void 0!==f){g=f.actionByRoot[d];if(void 0!==g)return g;g=f.knownActions[0];null===e&&(e=g._clip);}if(null===e)return null;e=new THREE.AnimationMixer._Action(this,e,b);this._bindAction(e,g);this._addInactiveAction(e,c,d);return e;},existingAction:function existingAction(a,b){var c=b||this._root,d=c.uuid,c="string"===typeof a?THREE.AnimationClip.findByName(c,a):a,c=this._actionsByClip[c?c.uuid:a];return void 0!==c?c.actionByRoot[d]||null:null;},stopAllAction:function stopAllAction(){for(var a=this._actions,b=this._nActiveActions,c=this._bindings,d=this._nActiveBindings,e=this._nActiveBindings=this._nActiveActions=0;e!==b;++e){a[e].reset();}for(e=0;e!==d;++e){c[e].useCount=0;}return this;},update:function update(a){a*=this.timeScale;for(var b=this._actions,c=this._nActiveActions,d=this.time+=a,e=Math.sign(a),f=this._accuIndex^=1,g=0;g!==c;++g){var h=b[g];h.enabled&&h._update(d,a,e,f);}a=this._bindings;b=this._nActiveBindings;for(g=0;g!==b;++g){a[g].apply(f);}return this;},getRoot:function getRoot(){return this._root;},uncacheClip:function uncacheClip(a){var b=this._actions;a=a.uuid;var c=this._actionsByClip,d=c[a];if(void 0!==d){for(var d=d.knownActions,e=0,f=d.length;e!==f;++e){var g=d[e];this._deactivateAction(g);var h=g._cacheIndex,k=b[b.length-1];g._cacheIndex=null;g._byClipCacheIndex=null;k._cacheIndex=h;b[h]=k;b.pop();this._removeInactiveBindingsForAction(g);}delete c[a];}},uncacheRoot:function uncacheRoot(a){a=a.uuid;var b=this._actionsByClip,c;for(c in b){var d=b[c].actionByRoot[a];void 0!==d&&(this._deactivateAction(d),this._removeInactiveAction(d));}c=this._bindingsByRootAndName[a];if(void 0!==c)for(var e in c){a=c[e],a.restoreOriginalState(),this._removeInactiveBinding(a);}},uncacheAction:function uncacheAction(a,b){var c=this.existingAction(a,b);null!==c&&(this._deactivateAction(c),this._removeInactiveAction(c));}});THREE.AnimationMixer._Action=THREE.AnimationAction._new;Object.assign(THREE.AnimationMixer.prototype,{_bindAction:function _bindAction(a,b){var c=a._localRoot||this._root,d=a._clip.tracks,e=d.length,f=a._propertyBindings,g=a._interpolants,h=c.uuid,k=this._bindingsByRootAndName,l=k[h];void 0===l&&(l={},k[h]=l);for(k=0;k!==e;++k){var m=d[k],p=m.name,n=l[p];if(void 0===n){n=f[k];if(void 0!==n){null===n._cacheIndex&&(++n.referenceCount,this._addInactiveBinding(n,h,p));continue;}n=new THREE.PropertyMixer(THREE.PropertyBinding.create(c,p,b&&b._propertyBindings[k].binding.parsedPath),m.ValueTypeName,m.getValueSize());++n.referenceCount;this._addInactiveBinding(n,h,p);}f[k]=n;g[k].resultBuffer=n.buffer;}},_activateAction:function _activateAction(a){if(!this._isActiveAction(a)){if(null===a._cacheIndex){var b=(a._localRoot||this._root).uuid,c=a._clip.uuid,d=this._actionsByClip[c];this._bindAction(a,d&&d.knownActions[0]);this._addInactiveAction(a,c,b);}b=a._propertyBindings;c=0;for(d=b.length;c!==d;++c){var e=b[c];0===e.useCount++&&(this._lendBinding(e),e.saveOriginalState());}this._lendAction(a);}},_deactivateAction:function _deactivateAction(a){if(this._isActiveAction(a)){for(var b=a._propertyBindings,c=0,d=b.length;c!==d;++c){var e=b[c];0===--e.useCount&&(e.restoreOriginalState(),this._takeBackBinding(e));}this._takeBackAction(a);}},_initMemoryManager:function _initMemoryManager(){this._actions=[];this._nActiveActions=0;this._actionsByClip={};this._bindings=[];this._nActiveBindings=0;this._bindingsByRootAndName={};this._controlInterpolants=[];this._nActiveControlInterpolants=0;var a=this;this.stats={actions:{get total(){return a._actions.length;},get inUse(){return a._nActiveActions;}},bindings:{get total(){return a._bindings.length;},get inUse(){return a._nActiveBindings;}},controlInterpolants:{get total(){return a._controlInterpolants.length;},get inUse(){return a._nActiveControlInterpolants;}}};},_isActiveAction:function _isActiveAction(a){a=a._cacheIndex;return null!==a&&a<this._nActiveActions;},_addInactiveAction:function _addInactiveAction(a,b,c){var d=this._actions,e=this._actionsByClip,f=e[b];void 0===f?(f={knownActions:[a],actionByRoot:{}},a._byClipCacheIndex=0,e[b]=f):(b=f.knownActions,a._byClipCacheIndex=b.length,b.push(a));a._cacheIndex=d.length;d.push(a);f.actionByRoot[c]=a;},_removeInactiveAction:function _removeInactiveAction(a){var b=this._actions,c=b[b.length-1],d=a._cacheIndex;c._cacheIndex=d;b[d]=c;b.pop();a._cacheIndex=null;var c=a._clip.uuid,d=this._actionsByClip,e=d[c],f=e.knownActions,g=f[f.length-1],h=a._byClipCacheIndex;g._byClipCacheIndex=h;f[h]=g;f.pop();a._byClipCacheIndex=null;delete e.actionByRoot[(b._localRoot||this._root).uuid];0===f.length&&delete d[c];this._removeInactiveBindingsForAction(a);},_removeInactiveBindingsForAction:function _removeInactiveBindingsForAction(a){a=a._propertyBindings;for(var b=0,c=a.length;b!==c;++b){var d=a[b];0===--d.referenceCount&&this._removeInactiveBinding(d);}},_lendAction:function _lendAction(a){var b=this._actions,c=a._cacheIndex,d=this._nActiveActions++,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e;},_takeBackAction:function _takeBackAction(a){var b=this._actions,c=a._cacheIndex,d=--this._nActiveActions,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e;},_addInactiveBinding:function _addInactiveBinding(a,b,c){var d=this._bindingsByRootAndName,e=d[b],f=this._bindings;void 0===e&&(e={},d[b]=e);e[c]=a;a._cacheIndex=f.length;f.push(a);},_removeInactiveBinding:function _removeInactiveBinding(a){var b=this._bindings,c=a.binding,d=c.rootNode.uuid,c=c.path,e=this._bindingsByRootAndName,f=e[d],g=b[b.length-1];a=a._cacheIndex;g._cacheIndex=a;b[a]=g;b.pop();delete f[c];a:{for(var h in f){break a;}delete e[d];}},_lendBinding:function _lendBinding(a){var b=this._bindings,c=a._cacheIndex,d=this._nActiveBindings++,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e;},_takeBackBinding:function _takeBackBinding(a){var b=this._bindings,c=a._cacheIndex,d=--this._nActiveBindings,e=b[d];a._cacheIndex=d;b[d]=a;e._cacheIndex=c;b[c]=e;},_lendControlInterpolant:function _lendControlInterpolant(){var a=this._controlInterpolants,b=this._nActiveControlInterpolants++,c=a[b];void 0===c&&(c=new THREE.LinearInterpolant(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),c.__cacheIndex=b,a[b]=c);return c;},_takeBackControlInterpolant:function _takeBackControlInterpolant(a){var b=this._controlInterpolants,c=a.__cacheIndex,d=--this._nActiveControlInterpolants,e=b[d];a.__cacheIndex=d;b[d]=a;e.__cacheIndex=c;b[c]=e;},_controlInterpolantsResultBuffer:new Float32Array(1)});THREE.AnimationObjectGroup=function(a){this.uuid=THREE.Math.generateUUID();this._objects=Array.prototype.slice.call(arguments);this.nCachedObjects_=0;var b={};this._indicesByUUID=b;for(var c=0,d=arguments.length;c!==d;++c){b[arguments[c].uuid]=c;}this._paths=[];this._parsedPaths=[];this._bindings=[];this._bindingsIndicesByPath={};var e=this;this.stats={objects:{get total(){return e._objects.length;},get inUse(){return this.total-e.nCachedObjects_;}},get bindingsPerObject(){return e._bindings.length;}};};THREE.AnimationObjectGroup.prototype={constructor:THREE.AnimationObjectGroup,add:function add(a){for(var b=this._objects,c=b.length,d=this.nCachedObjects_,e=this._indicesByUUID,f=this._paths,g=this._parsedPaths,h=this._bindings,k=h.length,l=0,m=arguments.length;l!==m;++l){var p=arguments[l],n=p.uuid,q=e[n];if(void 0===q){q=c++;e[n]=q;b.push(p);for(var n=0,r=k;n!==r;++n){h[n].push(new THREE.PropertyBinding(p,f[n],g[n]));}}else if(q<d){var s=b[q],v=--d,r=b[v];e[r.uuid]=q;b[q]=r;e[n]=v;b[v]=p;n=0;for(r=k;n!==r;++n){var t=h[n],u=t[q];t[q]=t[v];void 0===u&&(u=new THREE.PropertyBinding(p,f[n],g[n]));t[v]=u;}}else b[q]!==s&&console.error("Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes...");}this.nCachedObjects_=d;},remove:function remove(a){for(var b=this._objects,c=this.nCachedObjects_,d=this._indicesByUUID,e=this._bindings,f=e.length,g=0,h=arguments.length;g!==h;++g){var k=arguments[g],l=k.uuid,m=d[l];if(void 0!==m&&m>=c){var p=c++,n=b[p];d[n.uuid]=m;b[m]=n;d[l]=p;b[p]=k;k=0;for(l=f;k!==l;++k){var n=e[k],q=n[m];n[m]=n[p];n[p]=q;}}}this.nCachedObjects_=c;},uncache:function uncache(a){for(var b=this._objects,c=b.length,d=this.nCachedObjects_,e=this._indicesByUUID,f=this._bindings,g=f.length,h=0,k=arguments.length;h!==k;++h){var l=arguments[h].uuid,m=e[l];if(void 0!==m)if(delete e[l],m<d){var l=--d,p=b[l],n=--c,q=b[n];e[p.uuid]=m;b[m]=p;e[q.uuid]=l;b[l]=q;b.pop();p=0;for(q=g;p!==q;++p){var r=f[p],s=r[n];r[m]=r[l];r[l]=s;r.pop();}}else for(n=--c,q=b[n],e[q.uuid]=m,b[m]=q,b.pop(),p=0,q=g;p!==q;++p){r=f[p],r[m]=r[n],r.pop();}}this.nCachedObjects_=d;},subscribe_:function subscribe_(a,b){var c=this._bindingsIndicesByPath,d=c[a],e=this._bindings;if(void 0!==d)return e[d];var f=this._paths,g=this._parsedPaths,h=this._objects,k=this.nCachedObjects_,l=Array(h.length),d=e.length;c[a]=d;f.push(a);g.push(b);e.push(l);c=k;for(d=h.length;c!==d;++c){l[c]=new THREE.PropertyBinding(h[c],a,b);}return l;},unsubscribe_:function unsubscribe_(a){var b=this._bindingsIndicesByPath,c=b[a];if(void 0!==c){var d=this._paths,e=this._parsedPaths,f=this._bindings,g=f.length-1,h=f[g];b[a[g]]=c;f[c]=h;f.pop();e[c]=e[g];e.pop();d[c]=d[g];d.pop();}}};THREE.AnimationUtils={arraySlice:function arraySlice(a,b,c){return THREE.AnimationUtils.isTypedArray(a)?new a.constructor(a.subarray(b,c)):a.slice(b,c);},convertArray:function convertArray(a,b,c){return!a||!c&&a.constructor===b?a:"number"===typeof b.BYTES_PER_ELEMENT?new b(a):Array.prototype.slice.call(a);},isTypedArray:function isTypedArray(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView);},getKeyframeOrder:function getKeyframeOrder(a){for(var b=a.length,c=Array(b),d=0;d!==b;++d){c[d]=d;}c.sort(function(b,c){return a[b]-a[c];});return c;},sortedArray:function sortedArray(a,b,c){for(var d=a.length,e=new a.constructor(d),f=0,g=0;g!==d;++f){for(var h=c[f]*b,k=0;k!==b;++k){e[g++]=a[h+k];}}return e;},flattenJSON:function flattenJSON(a,b,c,d){for(var e=1,f=a[0];void 0!==f&&void 0===f[d];){f=a[e++];}if(void 0!==f){var g=f[d];if(void 0!==g)if(Array.isArray(g)){do{g=f[d],void 0!==g&&(b.push(f.time),c.push.apply(c,g)),f=a[e++];}while(void 0!==f);}else if(void 0!==g.toArray){do{g=f[d],void 0!==g&&(b.push(f.time),g.toArray(c,c.length)),f=a[e++];}while(void 0!==f);}else{do{g=f[d],void 0!==g&&(b.push(f.time),c.push(g)),f=a[e++];}while(void 0!==f);}}}};THREE.KeyframeTrack=function(a,b,c,d){if(void 0===a)throw Error("track name is undefined");if(void 0===b||0===b.length)throw Error("no keyframes in track named "+a);this.name=a;this.times=THREE.AnimationUtils.convertArray(b,this.TimeBufferType);this.values=THREE.AnimationUtils.convertArray(c,this.ValueBufferType);this.setInterpolation(d||this.DefaultInterpolation);this.validate();this.optimize();};THREE.KeyframeTrack.prototype={constructor:THREE.KeyframeTrack,TimeBufferType:Float32Array,ValueBufferType:Float32Array,DefaultInterpolation:THREE.InterpolateLinear,InterpolantFactoryMethodDiscrete:function InterpolantFactoryMethodDiscrete(a){return new THREE.DiscreteInterpolant(this.times,this.values,this.getValueSize(),a);},InterpolantFactoryMethodLinear:function InterpolantFactoryMethodLinear(a){return new THREE.LinearInterpolant(this.times,this.values,this.getValueSize(),a);},InterpolantFactoryMethodSmooth:function InterpolantFactoryMethodSmooth(a){return new THREE.CubicInterpolant(this.times,this.values,this.getValueSize(),a);},setInterpolation:function setInterpolation(a){var b;switch(a){case THREE.InterpolateDiscrete:b=this.InterpolantFactoryMethodDiscrete;break;case THREE.InterpolateLinear:b=this.InterpolantFactoryMethodLinear;break;case THREE.InterpolateSmooth:b=this.InterpolantFactoryMethodSmooth;}if(void 0===b){b="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(void 0===this.createInterpolant)if(a!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(b);console.warn(b);}else this.createInterpolant=b;},getInterpolation:function getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return THREE.InterpolateDiscrete;case this.InterpolantFactoryMethodLinear:return THREE.InterpolateLinear;case this.InterpolantFactoryMethodSmooth:return THREE.InterpolateSmooth;}},getValueSize:function getValueSize(){return this.values.length/this.times.length;},shift:function shift(a){if(0!==a)for(var b=this.times,c=0,d=b.length;c!==d;++c){b[c]+=a;}return this;},scale:function scale(a){if(1!==a)for(var b=this.times,c=0,d=b.length;c!==d;++c){b[c]*=a;}return this;},trim:function trim(a,b){for(var c=this.times,d=c.length,e=0,f=d-1;e!==d&&c[e]<a;){++e;}for(;-1!==f&&c[f]>b;){--f;}++f;if(0!==e||f!==d)e>=f&&(f=Math.max(f,1),e=f-1),d=this.getValueSize(),this.times=THREE.AnimationUtils.arraySlice(c,e,f),this.values=THREE.AnimationUtils.arraySlice(this.values,e*d,f*d);return this;},validate:function validate(){var a=!0,b=this.getValueSize();0!==b-Math.floor(b)&&(console.error("invalid value size in track",this),a=!1);var c=this.times,b=this.values,d=c.length;0===d&&(console.error("track is empty",this),a=!1);for(var e=null,f=0;f!==d;f++){var g=c[f];if("number"===typeof g&&isNaN(g)){console.error("time is not a valid number",this,f,g);a=!1;break;}if(null!==e&&e>g){console.error("out of order keys",this,f,g,e);a=!1;break;}e=g;}if(void 0!==b&&THREE.AnimationUtils.isTypedArray(b))for(f=0,c=b.length;f!==c;++f){if(d=b[f],isNaN(d)){console.error("value is not a valid number",this,f,d);a=!1;break;}}return a;},optimize:function optimize(){for(var a=this.times,b=this.values,c=this.getValueSize(),d=1,e=1,f=a.length-1;e<=f;++e){var g=!1,h=a[e];if(h!==a[e+1]&&(1!==e||h!==h[0]))for(var k=e*c,l=k-c,m=k+c,h=0;h!==c;++h){var p=b[k+h];if(p!==b[l+h]||p!==b[m+h]){g=!0;break;}}if(g){if(e!==d)for(a[d]=a[e],g=e*c,k=d*c,h=0;h!==c;++h){b[k+h]=b[g+h];}++d;}}d!==a.length&&(this.times=THREE.AnimationUtils.arraySlice(a,0,d),this.values=THREE.AnimationUtils.arraySlice(b,0,d*c));return this;}};Object.assign(THREE.KeyframeTrack,{parse:function parse(a){if(void 0===a.type)throw Error("track type undefined, can not parse");var b=THREE.KeyframeTrack._getTrackTypeForValueTypeName(a.type);if(void 0===a.times){var c=[],d=[];THREE.AnimationUtils.flattenJSON(a.keys,c,d,"value");a.times=c;a.values=d;}return void 0!==b.parse?b.parse(a):new b(a.name,a.times,a.values,a.interpolation);},toJSON:function toJSON(a){var b=a.constructor;if(void 0!==b.toJSON)b=b.toJSON(a);else{var b={name:a.name,times:THREE.AnimationUtils.convertArray(a.times,Array),values:THREE.AnimationUtils.convertArray(a.values,Array)},c=a.getInterpolation();c!==a.DefaultInterpolation&&(b.interpolation=c);}b.type=a.ValueTypeName;return b;},_getTrackTypeForValueTypeName:function _getTrackTypeForValueTypeName(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return THREE.NumberKeyframeTrack;case"vector":case"vector2":case"vector3":case"vector4":return THREE.VectorKeyframeTrack;case"color":return THREE.ColorKeyframeTrack;case"quaternion":return THREE.QuaternionKeyframeTrack;case"bool":case"boolean":return THREE.BooleanKeyframeTrack;case"string":return THREE.StringKeyframeTrack;}throw Error("Unsupported typeName: "+a);}});THREE.PropertyBinding=function(a,b,c){this.path=b;this.parsedPath=c||THREE.PropertyBinding.parseTrackName(b);this.node=THREE.PropertyBinding.findNode(a,this.parsedPath.nodeName)||a;this.rootNode=a;};THREE.PropertyBinding.prototype={constructor:THREE.PropertyBinding,getValue:function getValue(a,b){this.bind();this.getValue(a,b);},setValue:function setValue(a,b){this.bind();this.setValue(a,b);},bind:function bind(){var a=this.node,b=this.parsedPath,c=b.objectName,d=b.propertyName,e=b.propertyIndex;a||(this.node=a=THREE.PropertyBinding.findNode(this.rootNode,b.nodeName)||this.rootNode);this.getValue=this._getValue_unavailable;this.setValue=this._setValue_unavailable;if(a){if(c){var f=b.objectIndex;switch(c){case"materials":if(!a.material){console.error("  can not bind to material as node does not have a material",this);return;}if(!a.material.materials){console.error("  can not bind to material.materials as node.material does not have a materials array",this);return;}a=a.material.materials;break;case"bones":if(!a.skeleton){console.error("  can not bind to bones as node does not have a skeleton",this);return;}a=a.skeleton.bones;for(c=0;c<a.length;c++){if(a[c].name===f){f=c;break;}}break;default:if(void 0===a[c]){console.error("  can not bind to objectName of node, undefined",this);return;}a=a[c];}if(void 0!==f){if(void 0===a[f]){console.error("  trying to bind to objectIndex of objectName, but is undefined:",this,a);return;}a=a[f];}}f=a[d];if(void 0===f)console.error("  trying to update property for track: "+b.nodeName+"."+d+" but it wasn't found.",a);else{b=this.Versioning.None;void 0!==a.needsUpdate?(b=this.Versioning.NeedsUpdate,this.targetObject=a):void 0!==a.matrixWorldNeedsUpdate&&(b=this.Versioning.MatrixWorldNeedsUpdate,this.targetObject=a);c=this.BindingType.Direct;if(void 0!==e){if("morphTargetInfluences"===d){if(!a.geometry){console.error("  can not bind to morphTargetInfluences becasuse node does not have a geometry",this);return;}if(!a.geometry.morphTargets){console.error("  can not bind to morphTargetInfluences becasuse node does not have a geometry.morphTargets",this);return;}for(c=0;c<this.node.geometry.morphTargets.length;c++){if(a.geometry.morphTargets[c].name===e){e=c;break;}}}c=this.BindingType.ArrayElement;this.resolvedProperty=f;this.propertyIndex=e;}else void 0!==f.fromArray&&void 0!==f.toArray?(c=this.BindingType.HasFromToArray,this.resolvedProperty=f):void 0!==f.length?(c=this.BindingType.EntireArray,this.resolvedProperty=f):this.propertyName=d;this.getValue=this.GetterByBindingType[c];this.setValue=this.SetterByBindingTypeAndVersioning[c][b];}}else console.error("  trying to update node for track: "+this.path+" but it wasn't found.");},unbind:function unbind(){this.node=null;this.getValue=this._getValue_unbound;this.setValue=this._setValue_unbound;}};Object.assign(THREE.PropertyBinding.prototype,{_getValue_unavailable:function _getValue_unavailable(){},_setValue_unavailable:function _setValue_unavailable(){},_getValue_unbound:THREE.PropertyBinding.prototype.getValue,_setValue_unbound:THREE.PropertyBinding.prototype.setValue,BindingType:{Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Versioning:{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},GetterByBindingType:[function(a,b){a[b]=this.node[this.propertyName];},function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d){a[b++]=c[d];}},function(a,b){a[b]=this.resolvedProperty[this.propertyIndex];},function(a,b){this.resolvedProperty.toArray(a,b);}],SetterByBindingTypeAndVersioning:[[function(a,b){this.node[this.propertyName]=a[b];},function(a,b){this.node[this.propertyName]=a[b];this.targetObject.needsUpdate=!0;},function(a,b){this.node[this.propertyName]=a[b];this.targetObject.matrixWorldNeedsUpdate=!0;}],[function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d){c[d]=a[b++];}},function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d){c[d]=a[b++];}this.targetObject.needsUpdate=!0;},function(a,b){for(var c=this.resolvedProperty,d=0,e=c.length;d!==e;++d){c[d]=a[b++];}this.targetObject.matrixWorldNeedsUpdate=!0;}],[function(a,b){this.resolvedProperty[this.propertyIndex]=a[b];},function(a,b){this.resolvedProperty[this.propertyIndex]=a[b];this.targetObject.needsUpdate=!0;},function(a,b){this.resolvedProperty[this.propertyIndex]=a[b];this.targetObject.matrixWorldNeedsUpdate=!0;}],[function(a,b){this.resolvedProperty.fromArray(a,b);},function(a,b){this.resolvedProperty.fromArray(a,b);this.targetObject.needsUpdate=!0;},function(a,b){this.resolvedProperty.fromArray(a,b);this.targetObject.matrixWorldNeedsUpdate=!0;}]]});THREE.PropertyBinding.Composite=function(a,b,c){c=c||THREE.PropertyBinding.parseTrackName(b);this._targetGroup=a;this._bindings=a.subscribe_(b,c);};THREE.PropertyBinding.Composite.prototype={constructor:THREE.PropertyBinding.Composite,getValue:function getValue(a,b){this.bind();var c=this._bindings[this._targetGroup.nCachedObjects_];void 0!==c&&c.getValue(a,b);},setValue:function setValue(a,b){for(var c=this._bindings,d=this._targetGroup.nCachedObjects_,e=c.length;d!==e;++d){c[d].setValue(a,b);}},bind:function bind(){for(var a=this._bindings,b=this._targetGroup.nCachedObjects_,c=a.length;b!==c;++b){a[b].bind();}},unbind:function unbind(){for(var a=this._bindings,b=this._targetGroup.nCachedObjects_,c=a.length;b!==c;++b){a[b].unbind();}}};THREE.PropertyBinding.create=function(a,b,c){return a instanceof THREE.AnimationObjectGroup?new THREE.PropertyBinding.Composite(a,b,c):new THREE.PropertyBinding(a,b,c);};THREE.PropertyBinding.parseTrackName=function(a){var b=/^(([\w]+\/)*)([\w-\d]+)?(\.([\w]+)(\[([\w\d\[\]\_.:\- ]+)\])?)?(\.([\w.]+)(\[([\w\d\[\]\_. ]+)\])?)$/,c=b.exec(a);if(!c)throw Error("cannot parse trackName at all: "+a);c.index===b.lastIndex&&b.lastIndex++;b={nodeName:c[3],objectName:c[5],objectIndex:c[7],propertyName:c[9],propertyIndex:c[11]};if(null===b.propertyName||0===b.propertyName.length)throw Error("can not parse propertyName from trackName: "+a);return b;};THREE.PropertyBinding.findNode=function(a,b){if(!b||""===b||"root"===b||"."===b||-1===b||b===a.name||b===a.uuid)return a;if(a.skeleton){var c=function(a){for(var c=0;c<a.bones.length;c++){var d=a.bones[c];if(d.name===b)return d;}return null;}(a.skeleton);if(c)return c;}if(a.children){var d=function d(a){for(var c=0;c<a.length;c++){var g=a[c];if(g.name===b||g.uuid===b||(g=d(g.children)))return g;}return null;};if(c=d(a.children))return c;}return null;};THREE.PropertyMixer=function(a,b,c){this.binding=a;this.valueSize=c;a=Float64Array;switch(b){case"quaternion":b=this._slerp;break;case"string":case"bool":a=Array;b=this._select;break;default:b=this._lerp;}this.buffer=new a(4*c);this._mixBufferRegion=b;this.referenceCount=this.useCount=this.cumulativeWeight=0;};THREE.PropertyMixer.prototype={constructor:THREE.PropertyMixer,accumulate:function accumulate(a,b){var c=this.buffer,d=this.valueSize,e=a*d+d,f=this.cumulativeWeight;if(0===f){for(f=0;f!==d;++f){c[e+f]=c[f];}f=b;}else f+=b,this._mixBufferRegion(c,e,0,b/f,d);this.cumulativeWeight=f;},apply:function apply(a){var b=this.valueSize,c=this.buffer;a=a*b+b;var d=this.cumulativeWeight,e=this.binding;this.cumulativeWeight=0;1>d&&this._mixBufferRegion(c,a,3*b,1-d,b);for(var d=b,f=b+b;d!==f;++d){if(c[d]!==c[d+b]){e.setValue(c,a);break;}}},saveOriginalState:function saveOriginalState(){var a=this.buffer,b=this.valueSize,c=3*b;this.binding.getValue(a,c);for(var d=b;d!==c;++d){a[d]=a[c+d%b];}this.cumulativeWeight=0;},restoreOriginalState:function restoreOriginalState(){this.binding.setValue(this.buffer,3*this.valueSize);},_select:function _select(a,b,c,d,e){if(.5<=d)for(d=0;d!==e;++d){a[b+d]=a[c+d];}},_slerp:function _slerp(a,b,c,d,e){THREE.Quaternion.slerpFlat(a,b,a,b,a,c,d);},_lerp:function _lerp(a,b,c,d,e){for(var f=1-d,g=0;g!==e;++g){var h=b+g;a[h]=a[h]*f+a[c+g]*d;}}};THREE.BooleanKeyframeTrack=function(a,b,c){THREE.KeyframeTrack.call(this,a,b,c);};THREE.BooleanKeyframeTrack.prototype=Object.assign(Object.create(THREE.KeyframeTrack.prototype),{constructor:THREE.BooleanKeyframeTrack,ValueTypeName:"bool",ValueBufferType:Array,DefaultInterpolation:THREE.InterpolateDiscrete,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});THREE.ColorKeyframeTrack=function(a,b,c,d){THREE.KeyframeTrack.call(this,a,b,c,d);};THREE.ColorKeyframeTrack.prototype=Object.assign(Object.create(THREE.KeyframeTrack.prototype),{constructor:THREE.ColorKeyframeTrack,ValueTypeName:"color"});THREE.NumberKeyframeTrack=function(a,b,c,d){THREE.KeyframeTrack.call(this,a,b,c,d);};THREE.NumberKeyframeTrack.prototype=Object.assign(Object.create(THREE.KeyframeTrack.prototype),{constructor:THREE.NumberKeyframeTrack,ValueTypeName:"number"});THREE.QuaternionKeyframeTrack=function(a,b,c,d){THREE.KeyframeTrack.call(this,a,b,c,d);};THREE.QuaternionKeyframeTrack.prototype=Object.assign(Object.create(THREE.KeyframeTrack.prototype),{constructor:THREE.QuaternionKeyframeTrack,ValueTypeName:"quaternion",DefaultInterpolation:THREE.InterpolateLinear,InterpolantFactoryMethodLinear:function InterpolantFactoryMethodLinear(a){return new THREE.QuaternionLinearInterpolant(this.times,this.values,this.getValueSize(),a);},InterpolantFactoryMethodSmooth:void 0});THREE.StringKeyframeTrack=function(a,b,c,d){THREE.KeyframeTrack.call(this,a,b,c,d);};THREE.StringKeyframeTrack.prototype=Object.assign(Object.create(THREE.KeyframeTrack.prototype),{constructor:THREE.StringKeyframeTrack,ValueTypeName:"string",ValueBufferType:Array,DefaultInterpolation:THREE.InterpolateDiscrete,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});THREE.VectorKeyframeTrack=function(a,b,c,d){THREE.KeyframeTrack.call(this,a,b,c,d);};THREE.VectorKeyframeTrack.prototype=Object.assign(Object.create(THREE.KeyframeTrack.prototype),{constructor:THREE.VectorKeyframeTrack,ValueTypeName:"vector"});THREE.Audio=function(a){THREE.Object3D.call(this);this.type="Audio";this.context=a.context;this.source=this.context.createBufferSource();this.source.onended=this.onEnded.bind(this);this.gain=this.context.createGain();this.gain.connect(a.getInput());this.autoplay=!1;this.startTime=0;this.playbackRate=1;this.isPlaying=!1;this.hasPlaybackControl=!0;this.sourceType="empty";this.filters=[];};THREE.Audio.prototype=Object.assign(Object.create(THREE.Object3D.prototype),{constructor:THREE.Audio,getOutput:function getOutput(){return this.gain;},setNodeSource:function setNodeSource(a){this.hasPlaybackControl=!1;this.sourceType="audioNode";this.source=a;this.connect();return this;},setBuffer:function setBuffer(a){this.source.buffer=a;this.sourceType="buffer";this.autoplay&&this.play();return this;},play:function play(){if(!0===this.isPlaying)console.warn("THREE.Audio: Audio is already playing.");else if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else{var a=this.context.createBufferSource();a.buffer=this.source.buffer;a.loop=this.source.loop;a.onended=this.source.onended;a.start(0,this.startTime);a.playbackRate.value=this.playbackRate;this.isPlaying=!0;this.source=a;return this.connect();}},pause:function pause(){if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else return this.source.stop(),this.startTime=this.context.currentTime,this.isPlaying=!1,this;},stop:function stop(){if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else return this.source.stop(),this.startTime=0,this.isPlaying=!1,this;},connect:function connect(){if(0<this.filters.length){this.source.connect(this.filters[0]);for(var a=1,b=this.filters.length;a<b;a++){this.filters[a-1].connect(this.filters[a]);}this.filters[this.filters.length-1].connect(this.getOutput());}else this.source.connect(this.getOutput());return this;},disconnect:function disconnect(){if(0<this.filters.length){this.source.disconnect(this.filters[0]);for(var a=1,b=this.filters.length;a<b;a++){this.filters[a-1].disconnect(this.filters[a]);}this.filters[this.filters.length-1].disconnect(this.getOutput());}else this.source.disconnect(this.getOutput());return this;},getFilters:function getFilters(){return this.filters;},setFilters:function setFilters(a){a||(a=[]);!0===this.isPlaying?(this.disconnect(),this.filters=a,this.connect()):this.filters=a;return this;},getFilter:function getFilter(){return this.getFilters()[0];},setFilter:function setFilter(a){return this.setFilters(a?[a]:[]);},setPlaybackRate:function setPlaybackRate(a){if(!1===this.hasPlaybackControl)console.warn("THREE.Audio: this Audio has no playback control.");else return this.playbackRate=a,!0===this.isPlaying&&(this.source.playbackRate.value=this.playbackRate),this;},getPlaybackRate:function getPlaybackRate(){return this.playbackRate;},onEnded:function onEnded(){this.isPlaying=!1;},getLoop:function getLoop(){return!1===this.hasPlaybackControl?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.source.loop;},setLoop:function setLoop(a){!1===this.hasPlaybackControl?console.warn("THREE.Audio: this Audio has no playback control."):this.source.loop=a;},getVolume:function getVolume(){return this.gain.gain.value;},setVolume:function setVolume(a){this.gain.gain.value=a;return this;}});THREE.AudioAnalyser=function(a,b){this.analyser=a.context.createAnalyser();this.analyser.fftSize=void 0!==b?b:2048;this.data=new Uint8Array(this.analyser.frequencyBinCount);a.getOutput().connect(this.analyser);};Object.assign(THREE.AudioAnalyser.prototype,{getFrequencyData:function getFrequencyData(){this.analyser.getByteFrequencyData(this.data);return this.data;},getAverageFrequency:function getAverageFrequency(){for(var a=0,b=this.getFrequencyData(),c=0;c<b.length;c++){a+=b[c];}return a/b.length;}});Object.defineProperty(THREE,"AudioContext",{get:function(){var a;return function(){void 0===a&&(a=new(window.AudioContext||window.webkitAudioContext)());return a;};}()});THREE.PositionalAudio=function(a){THREE.Audio.call(this,a);this.panner=this.context.createPanner();this.panner.connect(this.gain);};THREE.PositionalAudio.prototype=Object.assign(Object.create(THREE.Audio.prototype),{constructor:THREE.PositionalAudio,getOutput:function getOutput(){return this.panner;},getRefDistance:function getRefDistance(){return this.panner.refDistance;},setRefDistance:function setRefDistance(a){this.panner.refDistance=a;},getRolloffFactor:function getRolloffFactor(){return this.panner.rolloffFactor;},setRolloffFactor:function setRolloffFactor(a){this.panner.rolloffFactor=a;},getDistanceModel:function getDistanceModel(){return this.panner.distanceModel;},setDistanceModel:function setDistanceModel(a){this.panner.distanceModel=a;},getMaxDistance:function getMaxDistance(){return this.panner.maxDistance;},setMaxDistance:function setMaxDistance(a){this.panner.maxDistance=a;},updateMatrixWorld:function(){var a=new THREE.Vector3();return function(b){THREE.Object3D.prototype.updateMatrixWorld.call(this,b);a.setFromMatrixPosition(this.matrixWorld);this.panner.setPosition(a.x,a.y,a.z);};}()});THREE.AudioListener=function(){THREE.Object3D.call(this);this.type="AudioListener";this.context=THREE.AudioContext;this.gain=this.context.createGain();this.gain.connect(this.context.destination);this.filter=null;};THREE.AudioListener.prototype=Object.assign(Object.create(THREE.Object3D.prototype),{constructor:THREE.AudioListener,getInput:function getInput(){return this.gain;},removeFilter:function removeFilter(){null!==this.filter&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null);},getFilter:function getFilter(){return this.filter;},setFilter:function setFilter(a){null!==this.filter?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination);this.filter=a;this.gain.connect(this.filter);this.filter.connect(this.context.destination);},getMasterVolume:function getMasterVolume(){return this.gain.gain.value;},setMasterVolume:function setMasterVolume(a){this.gain.gain.value=a;},updateMatrixWorld:function(){var a=new THREE.Vector3(),b=new THREE.Quaternion(),c=new THREE.Vector3(),d=new THREE.Vector3();return function(e){THREE.Object3D.prototype.updateMatrixWorld.call(this,e);e=this.context.listener;var f=this.up;this.matrixWorld.decompose(a,b,c);d.set(0,0,-1).applyQuaternion(b);e.setPosition(a.x,a.y,a.z);e.setOrientation(d.x,d.y,d.z,f.x,f.y,f.z);};}()});THREE.Camera=function(){THREE.Object3D.call(this);this.type="Camera";this.matrixWorldInverse=new THREE.Matrix4();this.projectionMatrix=new THREE.Matrix4();};THREE.Camera.prototype=Object.create(THREE.Object3D.prototype);THREE.Camera.prototype.constructor=THREE.Camera;THREE.Camera.prototype.getWorldDirection=function(){var a=new THREE.Quaternion();return function(b){b=b||new THREE.Vector3();this.getWorldQuaternion(a);return b.set(0,0,-1).applyQuaternion(a);};}();THREE.Camera.prototype.lookAt=function(){var a=new THREE.Matrix4();return function(b){a.lookAt(this.position,b,this.up);this.quaternion.setFromRotationMatrix(a);};}();THREE.Camera.prototype.clone=function(){return new this.constructor().copy(this);};THREE.Camera.prototype.copy=function(a){THREE.Object3D.prototype.copy.call(this,a);this.matrixWorldInverse.copy(a.matrixWorldInverse);this.projectionMatrix.copy(a.projectionMatrix);return this;};THREE.CubeCamera=function(a,b,c){THREE.Object3D.call(this);this.type="CubeCamera";var d=new THREE.PerspectiveCamera(90,1,a,b);d.up.set(0,-1,0);d.lookAt(new THREE.Vector3(1,0,0));this.add(d);var e=new THREE.PerspectiveCamera(90,1,a,b);e.up.set(0,-1,0);e.lookAt(new THREE.Vector3(-1,0,0));this.add(e);var f=new THREE.PerspectiveCamera(90,1,a,b);f.up.set(0,0,1);f.lookAt(new THREE.Vector3(0,1,0));this.add(f);var g=new THREE.PerspectiveCamera(90,1,a,b);g.up.set(0,0,-1);g.lookAt(new THREE.Vector3(0,-1,0));this.add(g);var h=new THREE.PerspectiveCamera(90,1,a,b);h.up.set(0,-1,0);h.lookAt(new THREE.Vector3(0,0,1));this.add(h);var k=new THREE.PerspectiveCamera(90,1,a,b);k.up.set(0,-1,0);k.lookAt(new THREE.Vector3(0,0,-1));this.add(k);this.renderTarget=new THREE.WebGLRenderTargetCube(c,c,{format:THREE.RGBFormat,magFilter:THREE.LinearFilter,minFilter:THREE.LinearFilter});this.updateCubeMap=function(a,b){null===this.parent&&this.updateMatrixWorld();var c=this.renderTarget,n=c.texture.generateMipmaps;c.texture.generateMipmaps=!1;c.activeCubeFace=0;a.render(b,d,c);c.activeCubeFace=1;a.render(b,e,c);c.activeCubeFace=2;a.render(b,f,c);c.activeCubeFace=3;a.render(b,g,c);c.activeCubeFace=4;a.render(b,h,c);c.texture.generateMipmaps=n;c.activeCubeFace=5;a.render(b,k,c);a.setRenderTarget(null);};};THREE.CubeCamera.prototype=Object.create(THREE.Object3D.prototype);THREE.CubeCamera.prototype.constructor=THREE.CubeCamera;THREE.OrthographicCamera=function(a,b,c,d,e,f){THREE.Camera.call(this);this.type="OrthographicCamera";this.zoom=1;this.view=null;this.left=a;this.right=b;this.top=c;this.bottom=d;this.near=void 0!==e?e:.1;this.far=void 0!==f?f:2E3;this.updateProjectionMatrix();};THREE.OrthographicCamera.prototype=Object.assign(Object.create(THREE.Camera.prototype),{constructor:THREE.OrthographicCamera,copy:function copy(a){THREE.Camera.prototype.copy.call(this,a);this.left=a.left;this.right=a.right;this.top=a.top;this.bottom=a.bottom;this.near=a.near;this.far=a.far;this.zoom=a.zoom;this.view=null===a.view?null:Object.assign({},a.view);return this;},setViewOffset:function setViewOffset(a,b,c,d,e,f){this.view={fullWidth:a,fullHeight:b,offsetX:c,offsetY:d,width:e,height:f};this.updateProjectionMatrix();},clearViewOffset:function clearViewOffset(){this.view=null;this.updateProjectionMatrix();},updateProjectionMatrix:function updateProjectionMatrix(){var a=(this.right-this.left)/(2*this.zoom),b=(this.top-this.bottom)/(2*this.zoom),c=(this.right+this.left)/2,d=(this.top+this.bottom)/2,e=c-a,c=c+a,a=d+b,b=d-b;if(null!==this.view)var c=this.zoom/(this.view.width/this.view.fullWidth),b=this.zoom/(this.view.height/this.view.fullHeight),f=(this.right-this.left)/this.view.width,d=(this.top-this.bottom)/this.view.height,e=e+this.view.offsetX/c*f,c=e+this.view.width/c*f,a=a-this.view.offsetY/b*d,b=a-this.view.height/b*d;this.projectionMatrix.makeOrthographic(e,c,a,b,this.near,this.far);},toJSON:function toJSON(a){a=THREE.Object3D.prototype.toJSON.call(this,a);a.object.zoom=this.zoom;a.object.left=this.left;a.object.right=this.right;a.object.top=this.top;a.object.bottom=this.bottom;a.object.near=this.near;a.object.far=this.far;null!==this.view&&(a.object.view=Object.assign({},this.view));return a;}});THREE.PerspectiveCamera=function(a,b,c,d){THREE.Camera.call(this);this.type="PerspectiveCamera";this.fov=void 0!==a?a:50;this.zoom=1;this.near=void 0!==c?c:.1;this.far=void 0!==d?d:2E3;this.focus=10;this.aspect=void 0!==b?b:1;this.view=null;this.filmGauge=35;this.filmOffset=0;this.updateProjectionMatrix();};THREE.PerspectiveCamera.prototype=Object.assign(Object.create(THREE.Camera.prototype),{constructor:THREE.PerspectiveCamera,copy:function copy(a){THREE.Camera.prototype.copy.call(this,a);this.fov=a.fov;this.zoom=a.zoom;this.near=a.near;this.far=a.far;this.focus=a.focus;this.aspect=a.aspect;this.view=null===a.view?null:Object.assign({},a.view);this.filmGauge=a.filmGauge;this.filmOffset=a.filmOffset;return this;},setFocalLength:function setFocalLength(a){a=.5*this.getFilmHeight()/a;this.fov=2*THREE.Math.RAD2DEG*Math.atan(a);this.updateProjectionMatrix();},getFocalLength:function getFocalLength(){var a=Math.tan(.5*THREE.Math.DEG2RAD*this.fov);return .5*this.getFilmHeight()/a;},getEffectiveFOV:function getEffectiveFOV(){return 2*THREE.Math.RAD2DEG*Math.atan(Math.tan(.5*THREE.Math.DEG2RAD*this.fov)/this.zoom);},getFilmWidth:function getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1);},getFilmHeight:function getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1);},setViewOffset:function setViewOffset(a,b,c,d,e,f){this.aspect=a/b;this.view={fullWidth:a,fullHeight:b,offsetX:c,offsetY:d,width:e,height:f};this.updateProjectionMatrix();},clearViewOffset:function clearViewOffset(){this.view=null;this.updateProjectionMatrix();},updateProjectionMatrix:function updateProjectionMatrix(){var a=this.near,b=a*Math.tan(.5*THREE.Math.DEG2RAD*this.fov)/this.zoom,c=2*b,d=this.aspect*c,e=-.5*d,f=this.view;if(null!==f)var g=f.fullWidth,h=f.fullHeight,e=e+f.offsetX*d/g,b=b-f.offsetY*c/h,d=f.width/g*d,c=f.height/h*c;f=this.filmOffset;0!==f&&(e+=a*f/this.getFilmWidth());this.projectionMatrix.makeFrustum(e,e+d,b-c,b,a,this.far);},toJSON:function toJSON(a){a=THREE.Object3D.prototype.toJSON.call(this,a);a.object.fov=this.fov;a.object.zoom=this.zoom;a.object.near=this.near;a.object.far=this.far;a.object.focus=this.focus;a.object.aspect=this.aspect;null!==this.view&&(a.object.view=Object.assign({},this.view));a.object.filmGauge=this.filmGauge;a.object.filmOffset=this.filmOffset;return a;}});THREE.StereoCamera=function(){this.type="StereoCamera";this.aspect=1;this.cameraL=new THREE.PerspectiveCamera();this.cameraL.layers.enable(1);this.cameraL.matrixAutoUpdate=!1;this.cameraR=new THREE.PerspectiveCamera();this.cameraR.layers.enable(2);this.cameraR.matrixAutoUpdate=!1;};Object.assign(THREE.StereoCamera.prototype,{update:function(){var a,b,c,d,e,f=new THREE.Matrix4(),g=new THREE.Matrix4();return function(h){if(a!==h.focus||b!==h.fov||c!==h.aspect*this.aspect||d!==h.near||e!==h.far){a=h.focus;b=h.fov;c=h.aspect*this.aspect;d=h.near;e=h.far;var k=h.projectionMatrix.clone(),l=.032*d/a,m=d*Math.tan(THREE.Math.DEG2RAD*b*.5),p,n;g.elements[12]=-.032;f.elements[12]=.032;p=-m*c+l;n=m*c+l;k.elements[0]=2*d/(n-p);k.elements[8]=(n+p)/(n-p);this.cameraL.projectionMatrix.copy(k);p=-m*c-l;n=m*c-l;k.elements[0]=2*d/(n-p);k.elements[8]=(n+p)/(n-p);this.cameraR.projectionMatrix.copy(k);}this.cameraL.matrixWorld.copy(h.matrixWorld).multiply(g);this.cameraR.matrixWorld.copy(h.matrixWorld).multiply(f);};}()});THREE.Light=function(a,b){THREE.Object3D.call(this);this.type="Light";this.color=new THREE.Color(a);this.intensity=void 0!==b?b:1;this.receiveShadow=void 0;};THREE.Light.prototype=Object.assign(Object.create(THREE.Object3D.prototype),{constructor:THREE.Light,copy:function copy(a){THREE.Object3D.prototype.copy.call(this,a);this.color.copy(a.color);this.intensity=a.intensity;return this;},toJSON:function toJSON(a){a=THREE.Object3D.prototype.toJSON.call(this,a);a.object.color=this.color.getHex();a.object.intensity=this.intensity;void 0!==this.groundColor&&(a.object.groundColor=this.groundColor.getHex());void 0!==this.distance&&(a.object.distance=this.distance);void 0!==this.angle&&(a.object.angle=this.angle);void 0!==this.decay&&(a.object.decay=this.decay);void 0!==this.penumbra&&(a.object.penumbra=this.penumbra);return a;}});THREE.LightShadow=function(a){this.camera=a;this.bias=0;this.radius=1;this.mapSize=new THREE.Vector2(512,512);this.map=null;this.matrix=new THREE.Matrix4();};Object.assign(THREE.LightShadow.prototype,{copy:function copy(a){this.camera=a.camera.clone();this.bias=a.bias;this.radius=a.radius;this.mapSize.copy(a.mapSize);return this;},clone:function clone(){return new this.constructor().copy(this);}});THREE.AmbientLight=function(a,b){THREE.Light.call(this,a,b);this.type="AmbientLight";this.castShadow=void 0;};THREE.AmbientLight.prototype=Object.assign(Object.create(THREE.Light.prototype),{constructor:THREE.AmbientLight});THREE.DirectionalLight=function(a,b){THREE.Light.call(this,a,b);this.type="DirectionalLight";this.position.copy(THREE.Object3D.DefaultUp);this.updateMatrix();this.target=new THREE.Object3D();this.shadow=new THREE.DirectionalLightShadow();};THREE.DirectionalLight.prototype=Object.assign(Object.create(THREE.Light.prototype),{constructor:THREE.DirectionalLight,copy:function copy(a){THREE.Light.prototype.copy.call(this,a);this.target=a.target.clone();this.shadow=a.shadow.clone();return this;}});THREE.DirectionalLightShadow=function(a){THREE.LightShadow.call(this,new THREE.OrthographicCamera(-5,5,5,-5,.5,500));};THREE.DirectionalLightShadow.prototype=Object.assign(Object.create(THREE.LightShadow.prototype),{constructor:THREE.DirectionalLightShadow});THREE.HemisphereLight=function(a,b,c){THREE.Light.call(this,a,c);this.type="HemisphereLight";this.castShadow=void 0;this.position.copy(THREE.Object3D.DefaultUp);this.updateMatrix();this.groundColor=new THREE.Color(b);};THREE.HemisphereLight.prototype=Object.assign(Object.create(THREE.Light.prototype),{constructor:THREE.HemisphereLight,copy:function copy(a){THREE.Light.prototype.copy.call(this,a);this.groundColor.copy(a.groundColor);return this;}});THREE.PointLight=function(a,b,c,d){THREE.Light.call(this,a,b);this.type="PointLight";Object.defineProperty(this,"power",{get:function get(){return 4*this.intensity*Math.PI;},set:function set(a){this.intensity=a/(4*Math.PI);}});this.distance=void 0!==c?c:0;this.decay=void 0!==d?d:1;this.shadow=new THREE.LightShadow(new THREE.PerspectiveCamera(90,1,.5,500));};THREE.PointLight.prototype=Object.assign(Object.create(THREE.Light.prototype),{constructor:THREE.PointLight,copy:function copy(a){THREE.Light.prototype.copy.call(this,a);this.distance=a.distance;this.decay=a.decay;this.shadow=a.shadow.clone();return this;}});THREE.SpotLight=function(a,b,c,d,e,f){THREE.Light.call(this,a,b);this.type="SpotLight";this.position.copy(THREE.Object3D.DefaultUp);this.updateMatrix();this.target=new THREE.Object3D();Object.defineProperty(this,"power",{get:function get(){return this.intensity*Math.PI;},set:function set(a){this.intensity=a/Math.PI;}});this.distance=void 0!==c?c:0;this.angle=void 0!==d?d:Math.PI/3;this.penumbra=void 0!==e?e:0;this.decay=void 0!==f?f:1;this.shadow=new THREE.SpotLightShadow();};THREE.SpotLight.prototype=Object.assign(Object.create(THREE.Light.prototype),{constructor:THREE.SpotLight,copy:function copy(a){THREE.Light.prototype.copy.call(this,a);this.distance=a.distance;this.angle=a.angle;this.penumbra=a.penumbra;this.decay=a.decay;this.target=a.target.clone();this.shadow=a.shadow.clone();return this;}});THREE.SpotLightShadow=function(){THREE.LightShadow.call(this,new THREE.PerspectiveCamera(50,1,.5,500));};THREE.SpotLightShadow.prototype=Object.assign(Object.create(THREE.LightShadow.prototype),{constructor:THREE.SpotLightShadow,update:function update(a){var b=2*THREE.Math.RAD2DEG*a.angle,c=this.mapSize.width/this.mapSize.height;a=a.distance||500;var d=this.camera;if(b!==d.fov||c!==d.aspect||a!==d.far)d.fov=b,d.aspect=c,d.far=a,d.updateProjectionMatrix();}});THREE.AudioLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager;};Object.assign(THREE.AudioLoader.prototype,{load:function load(a,b,c,d){var e=new THREE.XHRLoader(this.manager);e.setResponseType("arraybuffer");e.load(a,function(a){THREE.AudioContext.decodeAudioData(a,function(a){b(a);});},c,d);}});THREE.Cache={enabled:!1,files:{},add:function add(a,b){!1!==this.enabled&&(this.files[a]=b);},get:function get(a){if(!1!==this.enabled)return this.files[a];},remove:function remove(a){delete this.files[a];},clear:function clear(){this.files={};}};THREE.Loader=function(){this.onLoadStart=function(){};this.onLoadProgress=function(){};this.onLoadComplete=function(){};};THREE.Loader.prototype={constructor:THREE.Loader,crossOrigin:void 0,extractUrlBase:function extractUrlBase(a){a=a.split("/");if(1===a.length)return"./";a.pop();return a.join("/")+"/";},initMaterials:function initMaterials(a,b,c){for(var d=[],e=0;e<a.length;++e){d[e]=this.createMaterial(a[e],b,c);}return d;},createMaterial:function(){var a,b,c;return function(d,e,f){function g(a,c,d,g,k){a=e+a;var l=THREE.Loader.Handlers.get(a);null!==l?a=l.load(a):(b.setCrossOrigin(f),a=b.load(a));void 0!==c&&(a.repeat.fromArray(c),1!==c[0]&&(a.wrapS=THREE.RepeatWrapping),1!==c[1]&&(a.wrapT=THREE.RepeatWrapping));void 0!==d&&a.offset.fromArray(d);void 0!==g&&("repeat"===g[0]&&(a.wrapS=THREE.RepeatWrapping),"mirror"===g[0]&&(a.wrapS=THREE.MirroredRepeatWrapping),"repeat"===g[1]&&(a.wrapT=THREE.RepeatWrapping),"mirror"===g[1]&&(a.wrapT=THREE.MirroredRepeatWrapping));void 0!==k&&(a.anisotropy=k);c=THREE.Math.generateUUID();h[c]=a;return c;}void 0===a&&(a=new THREE.Color());void 0===b&&(b=new THREE.TextureLoader());void 0===c&&(c=new THREE.MaterialLoader());var h={},k={uuid:THREE.Math.generateUUID(),type:"MeshLambertMaterial"},l;for(l in d){var m=d[l];switch(l){case"DbgColor":case"DbgIndex":case"opticalDensity":case"illumination":break;case"DbgName":k.name=m;break;case"blending":k.blending=THREE[m];break;case"colorAmbient":case"mapAmbient":console.warn("THREE.Loader.createMaterial:",l,"is no longer supported.");break;case"colorDiffuse":k.color=a.fromArray(m).getHex();break;case"colorSpecular":k.specular=a.fromArray(m).getHex();break;case"colorEmissive":k.emissive=a.fromArray(m).getHex();break;case"specularCoef":k.shininess=m;break;case"shading":"basic"===m.toLowerCase()&&(k.type="MeshBasicMaterial");"phong"===m.toLowerCase()&&(k.type="MeshPhongMaterial");"standard"===m.toLowerCase()&&(k.type="MeshStandardMaterial");break;case"mapDiffuse":k.map=g(m,d.mapDiffuseRepeat,d.mapDiffuseOffset,d.mapDiffuseWrap,d.mapDiffuseAnisotropy);break;case"mapDiffuseRepeat":case"mapDiffuseOffset":case"mapDiffuseWrap":case"mapDiffuseAnisotropy":break;case"mapEmissive":k.emissiveMap=g(m,d.mapEmissiveRepeat,d.mapEmissiveOffset,d.mapEmissiveWrap,d.mapEmissiveAnisotropy);break;case"mapEmissiveRepeat":case"mapEmissiveOffset":case"mapEmissiveWrap":case"mapEmissiveAnisotropy":break;case"mapLight":k.lightMap=g(m,d.mapLightRepeat,d.mapLightOffset,d.mapLightWrap,d.mapLightAnisotropy);break;case"mapLightRepeat":case"mapLightOffset":case"mapLightWrap":case"mapLightAnisotropy":break;case"mapAO":k.aoMap=g(m,d.mapAORepeat,d.mapAOOffset,d.mapAOWrap,d.mapAOAnisotropy);break;case"mapAORepeat":case"mapAOOffset":case"mapAOWrap":case"mapAOAnisotropy":break;case"mapBump":k.bumpMap=g(m,d.mapBumpRepeat,d.mapBumpOffset,d.mapBumpWrap,d.mapBumpAnisotropy);break;case"mapBumpScale":k.bumpScale=m;break;case"mapBumpRepeat":case"mapBumpOffset":case"mapBumpWrap":case"mapBumpAnisotropy":break;case"mapNormal":k.normalMap=g(m,d.mapNormalRepeat,d.mapNormalOffset,d.mapNormalWrap,d.mapNormalAnisotropy);break;case"mapNormalFactor":k.normalScale=[m,m];break;case"mapNormalRepeat":case"mapNormalOffset":case"mapNormalWrap":case"mapNormalAnisotropy":break;case"mapSpecular":k.specularMap=g(m,d.mapSpecularRepeat,d.mapSpecularOffset,d.mapSpecularWrap,d.mapSpecularAnisotropy);break;case"mapSpecularRepeat":case"mapSpecularOffset":case"mapSpecularWrap":case"mapSpecularAnisotropy":break;case"mapMetalness":k.metalnessMap=g(m,d.mapMetalnessRepeat,d.mapMetalnessOffset,d.mapMetalnessWrap,d.mapMetalnessAnisotropy);break;case"mapMetalnessRepeat":case"mapMetalnessOffset":case"mapMetalnessWrap":case"mapMetalnessAnisotropy":break;case"mapRoughness":k.roughnessMap=g(m,d.mapRoughnessRepeat,d.mapRoughnessOffset,d.mapRoughnessWrap,d.mapRoughnessAnisotropy);break;case"mapRoughnessRepeat":case"mapRoughnessOffset":case"mapRoughnessWrap":case"mapRoughnessAnisotropy":break;case"mapAlpha":k.alphaMap=g(m,d.mapAlphaRepeat,d.mapAlphaOffset,d.mapAlphaWrap,d.mapAlphaAnisotropy);break;case"mapAlphaRepeat":case"mapAlphaOffset":case"mapAlphaWrap":case"mapAlphaAnisotropy":break;case"flipSided":k.side=THREE.BackSide;break;case"doubleSided":k.side=THREE.DoubleSide;break;case"transparency":console.warn("THREE.Loader.createMaterial: transparency has been renamed to opacity");k.opacity=m;break;case"depthTest":case"depthWrite":case"colorWrite":case"opacity":case"reflectivity":case"transparent":case"visible":case"wireframe":k[l]=m;break;case"vertexColors":!0===m&&(k.vertexColors=THREE.VertexColors);"face"===m&&(k.vertexColors=THREE.FaceColors);break;default:console.error("THREE.Loader.createMaterial: Unsupported",l,m);}}"MeshBasicMaterial"===k.type&&delete k.emissive;"MeshPhongMaterial"!==k.type&&delete k.specular;1>k.opacity&&(k.transparent=!0);c.setTextures(h);return c.parse(k);};}()};THREE.Loader.Handlers={handlers:[],add:function add(a,b){this.handlers.push(a,b);},get:function get(a){for(var b=this.handlers,c=0,d=b.length;c<d;c+=2){var e=b[c+1];if(b[c].test(a))return e;}return null;}};THREE.XHRLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager;};Object.assign(THREE.XHRLoader.prototype,{load:function load(a,b,c,d){void 0!==this.path&&(a=this.path+a);var e=this,f=THREE.Cache.get(a);if(void 0!==f)return e.manager.itemStart(a),setTimeout(function(){b&&b(f);e.manager.itemEnd(a);},0),f;var g=new XMLHttpRequest();g.overrideMimeType("text/plain");g.open("GET",a,!0);g.addEventListener("load",function(c){var f=c.target.response;THREE.Cache.add(a,f);200===this.status?(b&&b(f),e.manager.itemEnd(a)):0===this.status?(console.warn("THREE.XHRLoader: HTTP Status 0 received."),b&&b(f),e.manager.itemEnd(a)):(d&&d(c),e.manager.itemError(a));},!1);void 0!==c&&g.addEventListener("progress",function(a){c(a);},!1);g.addEventListener("error",function(b){d&&d(b);e.manager.itemError(a);},!1);void 0!==this.responseType&&(g.responseType=this.responseType);void 0!==this.withCredentials&&(g.withCredentials=this.withCredentials);g.send(null);e.manager.itemStart(a);return g;},setPath:function setPath(a){this.path=a;return this;},setResponseType:function setResponseType(a){this.responseType=a;return this;},setWithCredentials:function setWithCredentials(a){this.withCredentials=a;return this;}});THREE.FontLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager;};Object.assign(THREE.FontLoader.prototype,{load:function load(a,b,c,d){var e=this;new THREE.XHRLoader(this.manager).load(a,function(a){var c;try{c=JSON.parse(a);}catch(d){console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),c=JSON.parse(a.substring(65,a.length-2));}a=e.parse(c);b&&b(a);},c,d);},parse:function parse(a){return new THREE.Font(a);}});THREE.ImageLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager;};Object.assign(THREE.ImageLoader.prototype,{load:function load(a,b,c,d){var e=this,f=document.createElementNS("http://www.w3.org/1999/xhtml","img");f.onload=function(){URL.revokeObjectURL(f.src);b&&b(f);e.manager.itemEnd(a);};if(0===a.indexOf("data:"))f.src=a;else{var g=new THREE.XHRLoader();g.setPath(this.path);g.setResponseType("blob");g.load(a,function(a){f.src=URL.createObjectURL(a);},c,d);}e.manager.itemStart(a);return f;},setCrossOrigin:function setCrossOrigin(a){this.crossOrigin=a;return this;},setPath:function setPath(a){this.path=a;return this;}});THREE.JSONLoader=function(a){"boolean"===typeof a&&(console.warn("THREE.JSONLoader: showStatus parameter has been removed from constructor."),a=void 0);this.manager=void 0!==a?a:THREE.DefaultLoadingManager;this.withCredentials=!1;};Object.assign(THREE.JSONLoader.prototype,{load:function load(a,b,c,d){var e=this,f=this.texturePath&&"string"===typeof this.texturePath?this.texturePath:THREE.Loader.prototype.extractUrlBase(a),g=new THREE.XHRLoader(this.manager);g.setWithCredentials(this.withCredentials);g.load(a,function(c){c=JSON.parse(c);var d=c.metadata;if(void 0!==d&&(d=d.type,void 0!==d)){if("object"===d.toLowerCase()){console.error("THREE.JSONLoader: "+a+" should be loaded with THREE.ObjectLoader instead.");return;}if("scene"===d.toLowerCase()){console.error("THREE.JSONLoader: "+a+" should be loaded with THREE.SceneLoader instead.");return;}}c=e.parse(c,f);b(c.geometry,c.materials);},c,d);},setTexturePath:function setTexturePath(a){this.texturePath=a;},parse:function parse(a,b){var c=new THREE.Geometry(),d=void 0!==a.scale?1/a.scale:1;(function(b){var d,g,h,k,l,m,p,n,q,r,s,v,t,u=a.faces;m=a.vertices;var D=a.normals,w=a.colors,I=0;if(void 0!==a.uvs){for(d=0;d<a.uvs.length;d++){a.uvs[d].length&&I++;}for(d=0;d<I;d++){c.faceVertexUvs[d]=[];}}k=0;for(l=m.length;k<l;){d=new THREE.Vector3(),d.x=m[k++]*b,d.y=m[k++]*b,d.z=m[k++]*b,c.vertices.push(d);}k=0;for(l=u.length;k<l;){if(b=u[k++],q=b&1,h=b&2,d=b&8,p=b&16,r=b&32,m=b&64,b&=128,q){q=new THREE.Face3();q.a=u[k];q.b=u[k+1];q.c=u[k+3];s=new THREE.Face3();s.a=u[k+1];s.b=u[k+2];s.c=u[k+3];k+=4;h&&(h=u[k++],q.materialIndex=h,s.materialIndex=h);h=c.faces.length;if(d)for(d=0;d<I;d++){for(v=a.uvs[d],c.faceVertexUvs[d][h]=[],c.faceVertexUvs[d][h+1]=[],g=0;4>g;g++){n=u[k++],t=v[2*n],n=v[2*n+1],t=new THREE.Vector2(t,n),2!==g&&c.faceVertexUvs[d][h].push(t),0!==g&&c.faceVertexUvs[d][h+1].push(t);}}p&&(p=3*u[k++],q.normal.set(D[p++],D[p++],D[p]),s.normal.copy(q.normal));if(r)for(d=0;4>d;d++){p=3*u[k++],r=new THREE.Vector3(D[p++],D[p++],D[p]),2!==d&&q.vertexNormals.push(r),0!==d&&s.vertexNormals.push(r);}m&&(m=u[k++],m=w[m],q.color.setHex(m),s.color.setHex(m));if(b)for(d=0;4>d;d++){m=u[k++],m=w[m],2!==d&&q.vertexColors.push(new THREE.Color(m)),0!==d&&s.vertexColors.push(new THREE.Color(m));}c.faces.push(q);c.faces.push(s);}else{q=new THREE.Face3();q.a=u[k++];q.b=u[k++];q.c=u[k++];h&&(h=u[k++],q.materialIndex=h);h=c.faces.length;if(d)for(d=0;d<I;d++){for(v=a.uvs[d],c.faceVertexUvs[d][h]=[],g=0;3>g;g++){n=u[k++],t=v[2*n],n=v[2*n+1],t=new THREE.Vector2(t,n),c.faceVertexUvs[d][h].push(t);}}p&&(p=3*u[k++],q.normal.set(D[p++],D[p++],D[p]));if(r)for(d=0;3>d;d++){p=3*u[k++],r=new THREE.Vector3(D[p++],D[p++],D[p]),q.vertexNormals.push(r);}m&&(m=u[k++],q.color.setHex(w[m]));if(b)for(d=0;3>d;d++){m=u[k++],q.vertexColors.push(new THREE.Color(w[m]));}c.faces.push(q);}}})(d);(function(){var b=void 0!==a.influencesPerVertex?a.influencesPerVertex:2;if(a.skinWeights)for(var d=0,g=a.skinWeights.length;d<g;d+=b){c.skinWeights.push(new THREE.Vector4(a.skinWeights[d],1<b?a.skinWeights[d+1]:0,2<b?a.skinWeights[d+2]:0,3<b?a.skinWeights[d+3]:0));}if(a.skinIndices)for(d=0,g=a.skinIndices.length;d<g;d+=b){c.skinIndices.push(new THREE.Vector4(a.skinIndices[d],1<b?a.skinIndices[d+1]:0,2<b?a.skinIndices[d+2]:0,3<b?a.skinIndices[d+3]:0));}c.bones=a.bones;c.bones&&0<c.bones.length&&(c.skinWeights.length!==c.skinIndices.length||c.skinIndices.length!==c.vertices.length)&&console.warn("When skinning, number of vertices ("+c.vertices.length+"), skinIndices ("+c.skinIndices.length+"), and skinWeights ("+c.skinWeights.length+") should match.");})();(function(b){if(void 0!==a.morphTargets)for(var d=0,g=a.morphTargets.length;d<g;d++){c.morphTargets[d]={};c.morphTargets[d].name=a.morphTargets[d].name;c.morphTargets[d].vertices=[];for(var h=c.morphTargets[d].vertices,k=a.morphTargets[d].vertices,l=0,m=k.length;l<m;l+=3){var p=new THREE.Vector3();p.x=k[l]*b;p.y=k[l+1]*b;p.z=k[l+2]*b;h.push(p);}}if(void 0!==a.morphColors&&0<a.morphColors.length)for(console.warn('THREE.JSONLoader: "morphColors" no longer supported. Using them as face colors.'),b=c.faces,h=a.morphColors[0].colors,d=0,g=b.length;d<g;d++){b[d].color.fromArray(h,3*d);}})(d);(function(){var b=[],d=[];void 0!==a.animation&&d.push(a.animation);void 0!==a.animations&&(a.animations.length?d=d.concat(a.animations):d.push(a.animations));for(var g=0;g<d.length;g++){var h=THREE.AnimationClip.parseAnimation(d[g],c.bones);h&&b.push(h);}c.morphTargets&&(d=THREE.AnimationClip.CreateClipsFromMorphTargetSequences(c.morphTargets,10),b=b.concat(d));0<b.length&&(c.animations=b);})();c.computeFaceNormals();c.computeBoundingSphere();if(void 0===a.materials||0===a.materials.length)return{geometry:c};d=THREE.Loader.prototype.initMaterials(a.materials,b,this.crossOrigin);return{geometry:c,materials:d};}});THREE.LoadingManager=function(a,b,c){var d=this,e=!1,f=0,g=0;this.onStart=void 0;this.onLoad=a;this.onProgress=b;this.onError=c;this.itemStart=function(a){g++;if(!1===e&&void 0!==d.onStart)d.onStart(a,f,g);e=!0;};this.itemEnd=function(a){f++;if(void 0!==d.onProgress)d.onProgress(a,f,g);if(f===g&&(e=!1,void 0!==d.onLoad))d.onLoad();};this.itemError=function(a){if(void 0!==d.onError)d.onError(a);};};THREE.DefaultLoadingManager=new THREE.LoadingManager();THREE.BufferGeometryLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager;};Object.assign(THREE.BufferGeometryLoader.prototype,{load:function load(a,b,c,d){var e=this;new THREE.XHRLoader(e.manager).load(a,function(a){b(e.parse(JSON.parse(a)));},c,d);},parse:function parse(a){var b=new THREE.BufferGeometry(),c=a.data.index,d={Int8Array:Int8Array,Uint8Array:Uint8Array,Uint8ClampedArray:Uint8ClampedArray,Int16Array:Int16Array,Uint16Array:Uint16Array,Int32Array:Int32Array,Uint32Array:Uint32Array,Float32Array:Float32Array,Float64Array:Float64Array};void 0!==c&&(c=new d[c.type](c.array),b.setIndex(new THREE.BufferAttribute(c,1)));var e=a.data.attributes,f;for(f in e){var g=e[f],c=new d[g.type](g.array);b.addAttribute(f,new THREE.BufferAttribute(c,g.itemSize,g.normalized));}d=a.data.groups||a.data.drawcalls||a.data.offsets;if(void 0!==d)for(f=0,c=d.length;f!==c;++f){e=d[f],b.addGroup(e.start,e.count,e.materialIndex);}a=a.data.boundingSphere;void 0!==a&&(d=new THREE.Vector3(),void 0!==a.center&&d.fromArray(a.center),b.boundingSphere=new THREE.Sphere(d,a.radius));return b;}});THREE.MaterialLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager;this.textures={};};Object.assign(THREE.MaterialLoader.prototype,{load:function load(a,b,c,d){var e=this;new THREE.XHRLoader(e.manager).load(a,function(a){b(e.parse(JSON.parse(a)));},c,d);},setTextures:function setTextures(a){this.textures=a;},getTexture:function getTexture(a){var b=this.textures;void 0===b[a]&&console.warn("THREE.MaterialLoader: Undefined texture",a);return b[a];},parse:function parse(a){var b=new THREE[a.type]();void 0!==a.uuid&&(b.uuid=a.uuid);void 0!==a.name&&(b.name=a.name);void 0!==a.color&&b.color.setHex(a.color);void 0!==a.roughness&&(b.roughness=a.roughness);void 0!==a.metalness&&(b.metalness=a.metalness);void 0!==a.emissive&&b.emissive.setHex(a.emissive);void 0!==a.specular&&b.specular.setHex(a.specular);void 0!==a.shininess&&(b.shininess=a.shininess);void 0!==a.uniforms&&(b.uniforms=a.uniforms);void 0!==a.vertexShader&&(b.vertexShader=a.vertexShader);void 0!==a.fragmentShader&&(b.fragmentShader=a.fragmentShader);void 0!==a.vertexColors&&(b.vertexColors=a.vertexColors);void 0!==a.shading&&(b.shading=a.shading);void 0!==a.blending&&(b.blending=a.blending);void 0!==a.side&&(b.side=a.side);void 0!==a.opacity&&(b.opacity=a.opacity);void 0!==a.transparent&&(b.transparent=a.transparent);void 0!==a.alphaTest&&(b.alphaTest=a.alphaTest);void 0!==a.depthTest&&(b.depthTest=a.depthTest);void 0!==a.depthWrite&&(b.depthWrite=a.depthWrite);void 0!==a.colorWrite&&(b.colorWrite=a.colorWrite);void 0!==a.wireframe&&(b.wireframe=a.wireframe);void 0!==a.wireframeLinewidth&&(b.wireframeLinewidth=a.wireframeLinewidth);void 0!==a.size&&(b.size=a.size);void 0!==a.sizeAttenuation&&(b.sizeAttenuation=a.sizeAttenuation);void 0!==a.map&&(b.map=this.getTexture(a.map));void 0!==a.alphaMap&&(b.alphaMap=this.getTexture(a.alphaMap),b.transparent=!0);void 0!==a.bumpMap&&(b.bumpMap=this.getTexture(a.bumpMap));void 0!==a.bumpScale&&(b.bumpScale=a.bumpScale);void 0!==a.normalMap&&(b.normalMap=this.getTexture(a.normalMap));if(void 0!==a.normalScale){var c=a.normalScale;!1===Array.isArray(c)&&(c=[c,c]);b.normalScale=new THREE.Vector2().fromArray(c);}void 0!==a.displacementMap&&(b.displacementMap=this.getTexture(a.displacementMap));void 0!==a.displacementScale&&(b.displacementScale=a.displacementScale);void 0!==a.displacementBias&&(b.displacementBias=a.displacementBias);void 0!==a.roughnessMap&&(b.roughnessMap=this.getTexture(a.roughnessMap));void 0!==a.metalnessMap&&(b.metalnessMap=this.getTexture(a.metalnessMap));void 0!==a.emissiveMap&&(b.emissiveMap=this.getTexture(a.emissiveMap));void 0!==a.emissiveIntensity&&(b.emissiveIntensity=a.emissiveIntensity);void 0!==a.specularMap&&(b.specularMap=this.getTexture(a.specularMap));void 0!==a.envMap&&(b.envMap=this.getTexture(a.envMap),b.combine=THREE.MultiplyOperation);void 0!==a.reflectivity&&(b.reflectivity=a.reflectivity);void 0!==a.lightMap&&(b.lightMap=this.getTexture(a.lightMap));void 0!==a.lightMapIntensity&&(b.lightMapIntensity=a.lightMapIntensity);void 0!==a.aoMap&&(b.aoMap=this.getTexture(a.aoMap));void 0!==a.aoMapIntensity&&(b.aoMapIntensity=a.aoMapIntensity);if(void 0!==a.materials)for(var c=0,d=a.materials.length;c<d;c++){b.materials.push(this.parse(a.materials[c]));}return b;}});THREE.ObjectLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager;this.texturePath="";};Object.assign(THREE.ObjectLoader.prototype,{load:function load(a,b,c,d){""===this.texturePath&&(this.texturePath=a.substring(0,a.lastIndexOf("/")+1));var e=this;new THREE.XHRLoader(e.manager).load(a,function(a){e.parse(JSON.parse(a),b);},c,d);},setTexturePath:function setTexturePath(a){this.texturePath=a;},setCrossOrigin:function setCrossOrigin(a){this.crossOrigin=a;},parse:function parse(a,b){var c=this.parseGeometries(a.geometries),d=this.parseImages(a.images,function(){void 0!==b&&b(e);}),d=this.parseTextures(a.textures,d),d=this.parseMaterials(a.materials,d),e=this.parseObject(a.object,c,d);a.animations&&(e.animations=this.parseAnimations(a.animations));void 0!==a.images&&0!==a.images.length||void 0===b||b(e);return e;},parseGeometries:function parseGeometries(a){var b={};if(void 0!==a)for(var c=new THREE.JSONLoader(),d=new THREE.BufferGeometryLoader(),e=0,f=a.length;e<f;e++){var g,h=a[e];switch(h.type){case"PlaneGeometry":case"PlaneBufferGeometry":g=new THREE[h.type](h.width,h.height,h.widthSegments,h.heightSegments);break;case"BoxGeometry":case"BoxBufferGeometry":case"CubeGeometry":g=new THREE[h.type](h.width,h.height,h.depth,h.widthSegments,h.heightSegments,h.depthSegments);break;case"CircleGeometry":case"CircleBufferGeometry":g=new THREE[h.type](h.radius,h.segments,h.thetaStart,h.thetaLength);break;case"CylinderGeometry":case"CylinderBufferGeometry":g=new THREE[h.type](h.radiusTop,h.radiusBottom,h.height,h.radialSegments,h.heightSegments,h.openEnded,h.thetaStart,h.thetaLength);break;case"ConeGeometry":case"ConeBufferGeometry":g=new THREE[h.type](h.radius,h.height,h.radialSegments,h.heightSegments,h.openEnded,h.thetaStart,h.thetaLength);break;case"SphereGeometry":case"SphereBufferGeometry":g=new THREE[h.type](h.radius,h.widthSegments,h.heightSegments,h.phiStart,h.phiLength,h.thetaStart,h.thetaLength);break;case"DodecahedronGeometry":case"IcosahedronGeometry":case"OctahedronGeometry":case"TetrahedronGeometry":g=new THREE[h.type](h.radius,h.detail);break;case"RingGeometry":case"RingBufferGeometry":g=new THREE[h.type](h.innerRadius,h.outerRadius,h.thetaSegments,h.phiSegments,h.thetaStart,h.thetaLength);break;case"TorusGeometry":case"TorusBufferGeometry":g=new THREE[h.type](h.radius,h.tube,h.radialSegments,h.tubularSegments,h.arc);break;case"TorusKnotGeometry":case"TorusKnotBufferGeometry":g=new THREE[h.type](h.radius,h.tube,h.tubularSegments,h.radialSegments,h.p,h.q);break;case"LatheGeometry":case"LatheBufferGeometry":g=new THREE[h.type](h.points,h.segments,h.phiStart,h.phiLength);break;case"BufferGeometry":g=d.parse(h);break;case"Geometry":g=c.parse(h.data,this.texturePath).geometry;break;default:console.warn('THREE.ObjectLoader: Unsupported geometry type "'+h.type+'"');continue;}g.uuid=h.uuid;void 0!==h.name&&(g.name=h.name);b[h.uuid]=g;}return b;},parseMaterials:function parseMaterials(a,b){var c={};if(void 0!==a){var d=new THREE.MaterialLoader();d.setTextures(b);for(var e=0,f=a.length;e<f;e++){var g=d.parse(a[e]);c[g.uuid]=g;}}return c;},parseAnimations:function parseAnimations(a){for(var b=[],c=0;c<a.length;c++){var d=THREE.AnimationClip.parse(a[c]);b.push(d);}return b;},parseImages:function parseImages(a,b){function c(a){d.manager.itemStart(a);return g.load(a,function(){d.manager.itemEnd(a);});}var d=this,e={};if(void 0!==a&&0<a.length){var f=new THREE.LoadingManager(b),g=new THREE.ImageLoader(f);g.setCrossOrigin(this.crossOrigin);for(var f=0,h=a.length;f<h;f++){var k=a[f],l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(k.url)?k.url:d.texturePath+k.url;e[k.uuid]=c(l);}}return e;},parseTextures:function parseTextures(a,b){function c(a){if("number"===typeof a)return a;console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",a);return THREE[a];}var d={};if(void 0!==a)for(var e=0,f=a.length;e<f;e++){var g=a[e];void 0===g.image&&console.warn('THREE.ObjectLoader: No "image" specified for',g.uuid);void 0===b[g.image]&&console.warn("THREE.ObjectLoader: Undefined image",g.image);var h=new THREE.Texture(b[g.image]);h.needsUpdate=!0;h.uuid=g.uuid;void 0!==g.name&&(h.name=g.name);void 0!==g.mapping&&(h.mapping=c(g.mapping));void 0!==g.offset&&h.offset.fromArray(g.offset);void 0!==g.repeat&&h.repeat.fromArray(g.repeat);void 0!==g.wrap&&(h.wrapS=c(g.wrap[0]),h.wrapT=c(g.wrap[1]));void 0!==g.minFilter&&(h.minFilter=c(g.minFilter));void 0!==g.magFilter&&(h.magFilter=c(g.magFilter));void 0!==g.anisotropy&&(h.anisotropy=g.anisotropy);void 0!==g.flipY&&(h.flipY=g.flipY);d[g.uuid]=h;}return d;},parseObject:function(){var a=new THREE.Matrix4();return function(b,c,d){function e(a){void 0===c[a]&&console.warn("THREE.ObjectLoader: Undefined geometry",a);return c[a];}function f(a){if(void 0!==a)return void 0===d[a]&&console.warn("THREE.ObjectLoader: Undefined material",a),d[a];}var g;switch(b.type){case"Scene":g=new THREE.Scene();break;case"PerspectiveCamera":g=new THREE.PerspectiveCamera(b.fov,b.aspect,b.near,b.far);void 0!==b.focus&&(g.focus=b.focus);void 0!==b.zoom&&(g.zoom=b.zoom);void 0!==b.filmGauge&&(g.filmGauge=b.filmGauge);void 0!==b.filmOffset&&(g.filmOffset=b.filmOffset);void 0!==b.view&&(g.view=Object.assign({},b.view));break;case"OrthographicCamera":g=new THREE.OrthographicCamera(b.left,b.right,b.top,b.bottom,b.near,b.far);break;case"AmbientLight":g=new THREE.AmbientLight(b.color,b.intensity);break;case"DirectionalLight":g=new THREE.DirectionalLight(b.color,b.intensity);break;case"PointLight":g=new THREE.PointLight(b.color,b.intensity,b.distance,b.decay);break;case"SpotLight":g=new THREE.SpotLight(b.color,b.intensity,b.distance,b.angle,b.penumbra,b.decay);break;case"HemisphereLight":g=new THREE.HemisphereLight(b.color,b.groundColor,b.intensity);break;case"Mesh":g=e(b.geometry);var h=f(b.material);g=g.bones&&0<g.bones.length?new THREE.SkinnedMesh(g,h):new THREE.Mesh(g,h);break;case"LOD":g=new THREE.LOD();break;case"Line":g=new THREE.Line(e(b.geometry),f(b.material),b.mode);break;case"PointCloud":case"Points":g=new THREE.Points(e(b.geometry),f(b.material));break;case"Sprite":g=new THREE.Sprite(f(b.material));break;case"Group":g=new THREE.Group();break;default:g=new THREE.Object3D();}g.uuid=b.uuid;void 0!==b.name&&(g.name=b.name);void 0!==b.matrix?(a.fromArray(b.matrix),a.decompose(g.position,g.quaternion,g.scale)):(void 0!==b.position&&g.position.fromArray(b.position),void 0!==b.rotation&&g.rotation.fromArray(b.rotation),void 0!==b.scale&&g.scale.fromArray(b.scale));void 0!==b.castShadow&&(g.castShadow=b.castShadow);void 0!==b.receiveShadow&&(g.receiveShadow=b.receiveShadow);void 0!==b.visible&&(g.visible=b.visible);void 0!==b.userData&&(g.userData=b.userData);if(void 0!==b.children)for(var k in b.children){g.add(this.parseObject(b.children[k],c,d));}if("LOD"===b.type)for(b=b.levels,h=0;h<b.length;h++){var l=b[h];k=g.getObjectByProperty("uuid",l.object);void 0!==k&&g.addLevel(k,l.distance);}return g;};}()});THREE.TextureLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager;};Object.assign(THREE.TextureLoader.prototype,{load:function load(a,b,c,d){var e=new THREE.Texture(),f=new THREE.ImageLoader(this.manager);f.setCrossOrigin(this.crossOrigin);f.setPath(this.path);f.load(a,function(c){var d=0<a.search(/\.(jpg|jpeg)$/)||0===a.search(/^data\:image\/jpeg/);e.format=d?THREE.RGBFormat:THREE.RGBAFormat;e.image=c;e.needsUpdate=!0;void 0!==b&&b(e);},c,d);return e;},setCrossOrigin:function setCrossOrigin(a){this.crossOrigin=a;return this;},setPath:function setPath(a){this.path=a;return this;}});THREE.CubeTextureLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager;};Object.assign(THREE.CubeTextureLoader.prototype,{load:function load(a,b,c,d){function e(c){g.load(a[c],function(a){f.images[c]=a;h++;6===h&&(f.needsUpdate=!0,b&&b(f));},void 0,d);}var f=new THREE.CubeTexture(),g=new THREE.ImageLoader(this.manager);g.setCrossOrigin(this.crossOrigin);g.setPath(this.path);var h=0;for(c=0;c<a.length;++c){e(c);}return f;},setCrossOrigin:function setCrossOrigin(a){this.crossOrigin=a;return this;},setPath:function setPath(a){this.path=a;return this;}});THREE.DataTextureLoader=THREE.BinaryTextureLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager;this._parser=null;};Object.assign(THREE.BinaryTextureLoader.prototype,{load:function load(a,b,c,d){var e=this,f=new THREE.DataTexture(),g=new THREE.XHRLoader(this.manager);g.setResponseType("arraybuffer");g.load(a,function(a){if(a=e._parser(a))void 0!==a.image?f.image=a.image:void 0!==a.data&&(f.image.width=a.width,f.image.height=a.height,f.image.data=a.data),f.wrapS=void 0!==a.wrapS?a.wrapS:THREE.ClampToEdgeWrapping,f.wrapT=void 0!==a.wrapT?a.wrapT:THREE.ClampToEdgeWrapping,f.magFilter=void 0!==a.magFilter?a.magFilter:THREE.LinearFilter,f.minFilter=void 0!==a.minFilter?a.minFilter:THREE.LinearMipMapLinearFilter,f.anisotropy=void 0!==a.anisotropy?a.anisotropy:1,void 0!==a.format&&(f.format=a.format),void 0!==a.type&&(f.type=a.type),void 0!==a.mipmaps&&(f.mipmaps=a.mipmaps),1===a.mipmapCount&&(f.minFilter=THREE.LinearFilter),f.needsUpdate=!0,b&&b(f,a);},c,d);return f;}});THREE.CompressedTextureLoader=function(a){this.manager=void 0!==a?a:THREE.DefaultLoadingManager;this._parser=null;};Object.assign(THREE.CompressedTextureLoader.prototype,{load:function load(a,b,c,d){function e(e){k.load(a[e],function(a){a=f._parser(a,!0);g[e]={width:a.width,height:a.height,format:a.format,mipmaps:a.mipmaps};l+=1;6===l&&(1===a.mipmapCount&&(h.minFilter=THREE.LinearFilter),h.format=a.format,h.needsUpdate=!0,b&&b(h));},c,d);}var f=this,g=[],h=new THREE.CompressedTexture();h.image=g;var k=new THREE.XHRLoader(this.manager);k.setPath(this.path);k.setResponseType("arraybuffer");if(Array.isArray(a))for(var l=0,m=0,p=a.length;m<p;++m){e(m);}else k.load(a,function(a){a=f._parser(a,!0);if(a.isCubemap)for(var c=a.mipmaps.length/a.mipmapCount,d=0;d<c;d++){g[d]={mipmaps:[]};for(var e=0;e<a.mipmapCount;e++){g[d].mipmaps.push(a.mipmaps[d*a.mipmapCount+e]),g[d].format=a.format,g[d].width=a.width,g[d].height=a.height;}}else h.image.width=a.width,h.image.height=a.height,h.mipmaps=a.mipmaps;1===a.mipmapCount&&(h.minFilter=THREE.LinearFilter);h.format=a.format;h.needsUpdate=!0;b&&b(h);},c,d);return h;},setPath:function setPath(a){this.path=a;return this;}});THREE.Material=function(){Object.defineProperty(this,"id",{value:THREE.MaterialIdCount++});this.uuid=THREE.Math.generateUUID();this.name="";this.type="Material";this.lights=this.fog=!0;this.blending=THREE.NormalBlending;this.side=THREE.FrontSide;this.shading=THREE.SmoothShading;this.vertexColors=THREE.NoColors;this.opacity=1;this.transparent=!1;this.blendSrc=THREE.SrcAlphaFactor;this.blendDst=THREE.OneMinusSrcAlphaFactor;this.blendEquation=THREE.AddEquation;this.blendEquationAlpha=this.blendDstAlpha=this.blendSrcAlpha=null;this.depthFunc=THREE.LessEqualDepth;this.depthWrite=this.depthTest=!0;this.clippingPlanes=null;this.clipShadows=!1;this.colorWrite=!0;this.precision=null;this.polygonOffset=!1;this.alphaTest=this.polygonOffsetUnits=this.polygonOffsetFactor=0;this.premultipliedAlpha=!1;this.overdraw=0;this._needsUpdate=this.visible=!0;};THREE.Material.prototype={constructor:THREE.Material,get needsUpdate(){return this._needsUpdate;},set needsUpdate(a){!0===a&&this.update();this._needsUpdate=a;},setValues:function setValues(a){if(void 0!==a)for(var b in a){var c=a[b];if(void 0===c)console.warn("THREE.Material: '"+b+"' parameter is undefined.");else{var d=this[b];void 0===d?console.warn("THREE."+this.type+": '"+b+"' is not a property of this material."):d instanceof THREE.Color?d.set(c):d instanceof THREE.Vector3&&c instanceof THREE.Vector3?d.copy(c):this[b]="overdraw"===b?Number(c):c;}}},toJSON:function toJSON(a){function b(a){var b=[],c;for(c in a){var d=a[c];delete d.metadata;b.push(d);}return b;}var c=void 0===a;c&&(a={textures:{},images:{}});var d={metadata:{version:4.4,type:"Material",generator:"Material.toJSON"}};d.uuid=this.uuid;d.type=this.type;""!==this.name&&(d.name=this.name);this.color instanceof THREE.Color&&(d.color=this.color.getHex());void 0!==this.roughness&&(d.roughness=this.roughness);void 0!==this.metalness&&(d.metalness=this.metalness);this.emissive instanceof THREE.Color&&(d.emissive=this.emissive.getHex());this.specular instanceof THREE.Color&&(d.specular=this.specular.getHex());void 0!==this.shininess&&(d.shininess=this.shininess);this.map instanceof THREE.Texture&&(d.map=this.map.toJSON(a).uuid);this.alphaMap instanceof THREE.Texture&&(d.alphaMap=this.alphaMap.toJSON(a).uuid);this.lightMap instanceof THREE.Texture&&(d.lightMap=this.lightMap.toJSON(a).uuid);this.bumpMap instanceof THREE.Texture&&(d.bumpMap=this.bumpMap.toJSON(a).uuid,d.bumpScale=this.bumpScale);this.normalMap instanceof THREE.Texture&&(d.normalMap=this.normalMap.toJSON(a).uuid,d.normalScale=this.normalScale.toArray());this.displacementMap instanceof THREE.Texture&&(d.displacementMap=this.displacementMap.toJSON(a).uuid,d.displacementScale=this.displacementScale,d.displacementBias=this.displacementBias);this.roughnessMap instanceof THREE.Texture&&(d.roughnessMap=this.roughnessMap.toJSON(a).uuid);this.metalnessMap instanceof THREE.Texture&&(d.metalnessMap=this.metalnessMap.toJSON(a).uuid);this.emissiveMap instanceof THREE.Texture&&(d.emissiveMap=this.emissiveMap.toJSON(a).uuid);this.specularMap instanceof THREE.Texture&&(d.specularMap=this.specularMap.toJSON(a).uuid);this.envMap instanceof THREE.Texture&&(d.envMap=this.envMap.toJSON(a).uuid,d.reflectivity=this.reflectivity);void 0!==this.size&&(d.size=this.size);void 0!==this.sizeAttenuation&&(d.sizeAttenuation=this.sizeAttenuation);this.blending!==THREE.NormalBlending&&(d.blending=this.blending);this.shading!==THREE.SmoothShading&&(d.shading=this.shading);this.side!==THREE.FrontSide&&(d.side=this.side);this.vertexColors!==THREE.NoColors&&(d.vertexColors=this.vertexColors);1>this.opacity&&(d.opacity=this.opacity);!0===this.transparent&&(d.transparent=this.transparent);0<this.alphaTest&&(d.alphaTest=this.alphaTest);!0===this.premultipliedAlpha&&(d.premultipliedAlpha=this.premultipliedAlpha);!0===this.wireframe&&(d.wireframe=this.wireframe);1<this.wireframeLinewidth&&(d.wireframeLinewidth=this.wireframeLinewidth);c&&(c=b(a.textures),a=b(a.images),0<c.length&&(d.textures=c),0<a.length&&(d.images=a));return d;},clone:function clone(){return new this.constructor().copy(this);},copy:function copy(a){this.name=a.name;this.fog=a.fog;this.lights=a.lights;this.blending=a.blending;this.side=a.side;this.shading=a.shading;this.vertexColors=a.vertexColors;this.opacity=a.opacity;this.transparent=a.transparent;this.blendSrc=a.blendSrc;this.blendDst=a.blendDst;this.blendEquation=a.blendEquation;this.blendSrcAlpha=a.blendSrcAlpha;this.blendDstAlpha=a.blendDstAlpha;this.blendEquationAlpha=a.blendEquationAlpha;this.depthFunc=a.depthFunc;this.depthTest=a.depthTest;this.depthWrite=a.depthWrite;this.colorWrite=a.colorWrite;this.precision=a.precision;this.polygonOffset=a.polygonOffset;this.polygonOffsetFactor=a.polygonOffsetFactor;this.polygonOffsetUnits=a.polygonOffsetUnits;this.alphaTest=a.alphaTest;this.premultipliedAlpha=a.premultipliedAlpha;this.overdraw=a.overdraw;this.visible=a.visible;this.clipShadows=a.clipShadows;a=a.clippingPlanes;var b=null;if(null!==a)for(var c=a.length,b=Array(c),d=0;d!==c;++d){b[d]=a[d].clone();}this.clippingPlanes=b;return this;},update:function update(){this.dispatchEvent({type:"update"});},dispose:function dispose(){this.dispatchEvent({type:"dispose"});}};Object.assign(THREE.Material.prototype,THREE.EventDispatcher.prototype);THREE.MaterialIdCount=0;THREE.LineBasicMaterial=function(a){THREE.Material.call(this);this.type="LineBasicMaterial";this.color=new THREE.Color(16777215);this.linewidth=1;this.linejoin=this.linecap="round";this.lights=!1;this.setValues(a);};THREE.LineBasicMaterial.prototype=Object.create(THREE.Material.prototype);THREE.LineBasicMaterial.prototype.constructor=THREE.LineBasicMaterial;THREE.LineBasicMaterial.prototype.copy=function(a){THREE.Material.prototype.copy.call(this,a);this.color.copy(a.color);this.linewidth=a.linewidth;this.linecap=a.linecap;this.linejoin=a.linejoin;return this;};THREE.LineDashedMaterial=function(a){THREE.Material.call(this);this.type="LineDashedMaterial";this.color=new THREE.Color(16777215);this.scale=this.linewidth=1;this.dashSize=3;this.gapSize=1;this.lights=!1;this.setValues(a);};THREE.LineDashedMaterial.prototype=Object.create(THREE.Material.prototype);THREE.LineDashedMaterial.prototype.constructor=THREE.LineDashedMaterial;THREE.LineDashedMaterial.prototype.copy=function(a){THREE.Material.prototype.copy.call(this,a);this.color.copy(a.color);this.linewidth=a.linewidth;this.scale=a.scale;this.dashSize=a.dashSize;this.gapSize=a.gapSize;return this;};THREE.MeshBasicMaterial=function(a){THREE.Material.call(this);this.type="MeshBasicMaterial";this.color=new THREE.Color(16777215);this.aoMap=this.map=null;this.aoMapIntensity=1;this.envMap=this.alphaMap=this.specularMap=null;this.combine=THREE.MultiplyOperation;this.reflectivity=1;this.refractionRatio=.98;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.lights=this.morphTargets=this.skinning=!1;this.setValues(a);};THREE.MeshBasicMaterial.prototype=Object.create(THREE.Material.prototype);THREE.MeshBasicMaterial.prototype.constructor=THREE.MeshBasicMaterial;THREE.MeshBasicMaterial.prototype.copy=function(a){THREE.Material.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.specularMap=a.specularMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.combine=a.combine;this.reflectivity=a.reflectivity;this.refractionRatio=a.refractionRatio;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=a.morphTargets;return this;};THREE.MeshDepthMaterial=function(a){THREE.Material.call(this);this.type="MeshDepthMaterial";this.depthPacking=THREE.BasicDepthPacking;this.morphTargets=this.skinning=!1;this.displacementMap=this.alphaMap=this.map=null;this.displacementScale=1;this.displacementBias=0;this.wireframe=!1;this.wireframeLinewidth=1;this.lights=this.fog=!1;this.setValues(a);};THREE.MeshDepthMaterial.prototype=Object.create(THREE.Material.prototype);THREE.MeshDepthMaterial.prototype.constructor=THREE.MeshDepthMaterial;THREE.MeshDepthMaterial.prototype.copy=function(a){THREE.Material.prototype.copy.call(this,a);this.depthPacking=a.depthPacking;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.map=a.map;this.alphaMap=a.alphaMap;this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;return this;};THREE.MeshLambertMaterial=function(a){THREE.Material.call(this);this.type="MeshLambertMaterial";this.color=new THREE.Color(16777215);this.lightMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.emissive=new THREE.Color(0);this.emissiveIntensity=1;this.envMap=this.alphaMap=this.specularMap=this.emissiveMap=null;this.combine=THREE.MultiplyOperation;this.reflectivity=1;this.refractionRatio=.98;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a);};THREE.MeshLambertMaterial.prototype=Object.create(THREE.Material.prototype);THREE.MeshLambertMaterial.prototype.constructor=THREE.MeshLambertMaterial;THREE.MeshLambertMaterial.prototype.copy=function(a){THREE.Material.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.emissive.copy(a.emissive);this.emissiveMap=a.emissiveMap;this.emissiveIntensity=a.emissiveIntensity;this.specularMap=a.specularMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.combine=a.combine;this.reflectivity=a.reflectivity;this.refractionRatio=a.refractionRatio;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this;};THREE.MeshNormalMaterial=function(a){THREE.Material.call(this,a);this.type="MeshNormalMaterial";this.wireframe=!1;this.wireframeLinewidth=1;this.morphTargets=this.lights=this.fog=!1;this.setValues(a);};THREE.MeshNormalMaterial.prototype=Object.create(THREE.Material.prototype);THREE.MeshNormalMaterial.prototype.constructor=THREE.MeshNormalMaterial;THREE.MeshNormalMaterial.prototype.copy=function(a){THREE.Material.prototype.copy.call(this,a);this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;return this;};THREE.MeshPhongMaterial=function(a){THREE.Material.call(this);this.type="MeshPhongMaterial";this.color=new THREE.Color(16777215);this.specular=new THREE.Color(1118481);this.shininess=30;this.lightMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.emissive=new THREE.Color(0);this.emissiveIntensity=1;this.bumpMap=this.emissiveMap=null;this.bumpScale=1;this.normalMap=null;this.normalScale=new THREE.Vector2(1,1);this.displacementMap=null;this.displacementScale=1;this.displacementBias=0;this.envMap=this.alphaMap=this.specularMap=null;this.combine=THREE.MultiplyOperation;this.reflectivity=1;this.refractionRatio=.98;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a);};THREE.MeshPhongMaterial.prototype=Object.create(THREE.Material.prototype);THREE.MeshPhongMaterial.prototype.constructor=THREE.MeshPhongMaterial;THREE.MeshPhongMaterial.prototype.copy=function(a){THREE.Material.prototype.copy.call(this,a);this.color.copy(a.color);this.specular.copy(a.specular);this.shininess=a.shininess;this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.emissive.copy(a.emissive);this.emissiveMap=a.emissiveMap;this.emissiveIntensity=a.emissiveIntensity;this.bumpMap=a.bumpMap;this.bumpScale=a.bumpScale;this.normalMap=a.normalMap;this.normalScale.copy(a.normalScale);this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.specularMap=a.specularMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.combine=a.combine;this.reflectivity=a.reflectivity;this.refractionRatio=a.refractionRatio;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this;};THREE.MeshStandardMaterial=function(a){THREE.Material.call(this);this.defines={STANDARD:""};this.type="MeshStandardMaterial";this.color=new THREE.Color(16777215);this.metalness=this.roughness=.5;this.lightMap=this.map=null;this.lightMapIntensity=1;this.aoMap=null;this.aoMapIntensity=1;this.emissive=new THREE.Color(0);this.emissiveIntensity=1;this.bumpMap=this.emissiveMap=null;this.bumpScale=1;this.normalMap=null;this.normalScale=new THREE.Vector2(1,1);this.displacementMap=null;this.displacementScale=1;this.displacementBias=0;this.envMap=this.alphaMap=this.metalnessMap=this.roughnessMap=null;this.envMapIntensity=1;this.refractionRatio=.98;this.wireframe=!1;this.wireframeLinewidth=1;this.wireframeLinejoin=this.wireframeLinecap="round";this.morphNormals=this.morphTargets=this.skinning=!1;this.setValues(a);};THREE.MeshStandardMaterial.prototype=Object.create(THREE.Material.prototype);THREE.MeshStandardMaterial.prototype.constructor=THREE.MeshStandardMaterial;THREE.MeshStandardMaterial.prototype.copy=function(a){THREE.Material.prototype.copy.call(this,a);this.defines={STANDARD:""};this.color.copy(a.color);this.roughness=a.roughness;this.metalness=a.metalness;this.map=a.map;this.lightMap=a.lightMap;this.lightMapIntensity=a.lightMapIntensity;this.aoMap=a.aoMap;this.aoMapIntensity=a.aoMapIntensity;this.emissive.copy(a.emissive);this.emissiveMap=a.emissiveMap;this.emissiveIntensity=a.emissiveIntensity;this.bumpMap=a.bumpMap;this.bumpScale=a.bumpScale;this.normalMap=a.normalMap;this.normalScale.copy(a.normalScale);this.displacementMap=a.displacementMap;this.displacementScale=a.displacementScale;this.displacementBias=a.displacementBias;this.roughnessMap=a.roughnessMap;this.metalnessMap=a.metalnessMap;this.alphaMap=a.alphaMap;this.envMap=a.envMap;this.envMapIntensity=a.envMapIntensity;this.refractionRatio=a.refractionRatio;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.wireframeLinecap=a.wireframeLinecap;this.wireframeLinejoin=a.wireframeLinejoin;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;return this;};THREE.MeshPhysicalMaterial=function(a){THREE.MeshStandardMaterial.call(this);this.defines={PHYSICAL:""};this.type="MeshPhysicalMaterial";this.reflectivity=.5;this.clearCoatRoughness=this.clearCoat=0;this.setValues(a);};THREE.MeshPhysicalMaterial.prototype=Object.create(THREE.MeshStandardMaterial.prototype);THREE.MeshPhysicalMaterial.prototype.constructor=THREE.MeshPhysicalMaterial;THREE.MeshPhysicalMaterial.prototype.copy=function(a){THREE.MeshStandardMaterial.prototype.copy.call(this,a);this.defines={PHYSICAL:""};this.reflectivity=a.reflectivity;this.clearCoat=a.clearCoat;this.clearCoatRoughness=a.clearCoatRoughness;return this;};THREE.MultiMaterial=function(a){this.uuid=THREE.Math.generateUUID();this.type="MultiMaterial";this.materials=a instanceof Array?a:[];this.visible=!0;};THREE.MultiMaterial.prototype={constructor:THREE.MultiMaterial,toJSON:function toJSON(a){for(var b={metadata:{version:4.2,type:"material",generator:"MaterialExporter"},uuid:this.uuid,type:this.type,materials:[]},c=this.materials,d=0,e=c.length;d<e;d++){var f=c[d].toJSON(a);delete f.metadata;b.materials.push(f);}b.visible=this.visible;return b;},clone:function clone(){for(var a=new this.constructor(),b=0;b<this.materials.length;b++){a.materials.push(this.materials[b].clone());}a.visible=this.visible;return a;}};THREE.PointsMaterial=function(a){THREE.Material.call(this);this.type="PointsMaterial";this.color=new THREE.Color(16777215);this.map=null;this.size=1;this.sizeAttenuation=!0;this.lights=!1;this.setValues(a);};THREE.PointsMaterial.prototype=Object.create(THREE.Material.prototype);THREE.PointsMaterial.prototype.constructor=THREE.PointsMaterial;THREE.PointsMaterial.prototype.copy=function(a){THREE.Material.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.size=a.size;this.sizeAttenuation=a.sizeAttenuation;return this;};THREE.ShaderMaterial=function(a){THREE.Material.call(this);this.type="ShaderMaterial";this.defines={};this.uniforms={};this.vertexShader="void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}";this.fragmentShader="void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";this.linewidth=1;this.wireframe=!1;this.wireframeLinewidth=1;this.morphNormals=this.morphTargets=this.skinning=this.clipping=this.lights=this.fog=!1;this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1};this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]};this.index0AttributeName=void 0;void 0!==a&&(void 0!==a.attributes&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(a));};THREE.ShaderMaterial.prototype=Object.create(THREE.Material.prototype);THREE.ShaderMaterial.prototype.constructor=THREE.ShaderMaterial;THREE.ShaderMaterial.prototype.copy=function(a){THREE.Material.prototype.copy.call(this,a);this.fragmentShader=a.fragmentShader;this.vertexShader=a.vertexShader;this.uniforms=THREE.UniformsUtils.clone(a.uniforms);this.defines=a.defines;this.wireframe=a.wireframe;this.wireframeLinewidth=a.wireframeLinewidth;this.lights=a.lights;this.clipping=a.clipping;this.skinning=a.skinning;this.morphTargets=a.morphTargets;this.morphNormals=a.morphNormals;this.extensions=a.extensions;return this;};THREE.ShaderMaterial.prototype.toJSON=function(a){a=THREE.Material.prototype.toJSON.call(this,a);a.uniforms=this.uniforms;a.vertexShader=this.vertexShader;a.fragmentShader=this.fragmentShader;return a;};THREE.RawShaderMaterial=function(a){THREE.ShaderMaterial.call(this,a);this.type="RawShaderMaterial";};THREE.RawShaderMaterial.prototype=Object.create(THREE.ShaderMaterial.prototype);THREE.RawShaderMaterial.prototype.constructor=THREE.RawShaderMaterial;THREE.SpriteMaterial=function(a){THREE.Material.call(this);this.type="SpriteMaterial";this.color=new THREE.Color(16777215);this.map=null;this.rotation=0;this.lights=this.fog=!1;this.setValues(a);};THREE.SpriteMaterial.prototype=Object.create(THREE.Material.prototype);THREE.SpriteMaterial.prototype.constructor=THREE.SpriteMaterial;THREE.SpriteMaterial.prototype.copy=function(a){THREE.Material.prototype.copy.call(this,a);this.color.copy(a.color);this.map=a.map;this.rotation=a.rotation;return this;};THREE.ShadowMaterial=function(){THREE.ShaderMaterial.call(this,{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.lights,{opacity:{value:1}}]),vertexShader:THREE.ShaderChunk.shadow_vert,fragmentShader:THREE.ShaderChunk.shadow_frag});this.transparent=this.lights=!0;Object.defineProperties(this,{opacity:{enumerable:!0,get:function get(){return this.uniforms.opacity.value;},set:function set(a){this.uniforms.opacity.value=a;}}});};THREE.ShadowMaterial.prototype=Object.create(THREE.ShaderMaterial.prototype);THREE.ShadowMaterial.prototype.constructor=THREE.ShadowMaterial;THREE.Texture=function(a,b,c,d,e,f,g,h,k,l){Object.defineProperty(this,"id",{value:THREE.TextureIdCount++});this.uuid=THREE.Math.generateUUID();this.sourceFile=this.name="";this.image=void 0!==a?a:THREE.Texture.DEFAULT_IMAGE;this.mipmaps=[];this.mapping=void 0!==b?b:THREE.Texture.DEFAULT_MAPPING;this.wrapS=void 0!==c?c:THREE.ClampToEdgeWrapping;this.wrapT=void 0!==d?d:THREE.ClampToEdgeWrapping;this.magFilter=void 0!==e?e:THREE.LinearFilter;this.minFilter=void 0!==f?f:THREE.LinearMipMapLinearFilter;this.anisotropy=void 0!==k?k:1;this.format=void 0!==g?g:THREE.RGBAFormat;this.type=void 0!==h?h:THREE.UnsignedByteType;this.offset=new THREE.Vector2(0,0);this.repeat=new THREE.Vector2(1,1);this.generateMipmaps=!0;this.premultiplyAlpha=!1;this.flipY=!0;this.unpackAlignment=4;this.encoding=void 0!==l?l:THREE.LinearEncoding;this.version=0;this.onUpdate=null;};THREE.Texture.DEFAULT_IMAGE=void 0;THREE.Texture.DEFAULT_MAPPING=THREE.UVMapping;THREE.Texture.prototype={constructor:THREE.Texture,set needsUpdate(a){!0===a&&this.version++;},clone:function clone(){return new this.constructor().copy(this);},copy:function copy(a){this.image=a.image;this.mipmaps=a.mipmaps.slice(0);this.mapping=a.mapping;this.wrapS=a.wrapS;this.wrapT=a.wrapT;this.magFilter=a.magFilter;this.minFilter=a.minFilter;this.anisotropy=a.anisotropy;this.format=a.format;this.type=a.type;this.offset.copy(a.offset);this.repeat.copy(a.repeat);this.generateMipmaps=a.generateMipmaps;this.premultiplyAlpha=a.premultiplyAlpha;this.flipY=a.flipY;this.unpackAlignment=a.unpackAlignment;this.encoding=a.encoding;return this;},toJSON:function toJSON(a){if(void 0!==a.textures[this.uuid])return a.textures[this.uuid];var b={metadata:{version:4.4,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],wrap:[this.wrapS,this.wrapT],minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY};if(void 0!==this.image){var c=this.image;void 0===c.uuid&&(c.uuid=THREE.Math.generateUUID());if(void 0===a.images[c.uuid]){var d=a.images,e=c.uuid,f=c.uuid,g;void 0!==c.toDataURL?g=c:(g=document.createElementNS("http://www.w3.org/1999/xhtml","canvas"),g.width=c.width,g.height=c.height,g.getContext("2d").drawImage(c,0,0,c.width,c.height));g=2048<g.width||2048<g.height?g.toDataURL("image/jpeg",.6):g.toDataURL("image/png");d[e]={uuid:f,url:g};}b.image=c.uuid;}return a.textures[this.uuid]=b;},dispose:function dispose(){this.dispatchEvent({type:"dispose"});},transformUv:function transformUv(a){if(this.mapping===THREE.UVMapping){a.multiply(this.repeat);a.add(this.offset);if(0>a.x||1<a.x)switch(this.wrapS){case THREE.RepeatWrapping:a.x-=Math.floor(a.x);break;case THREE.ClampToEdgeWrapping:a.x=0>a.x?0:1;break;case THREE.MirroredRepeatWrapping:1===Math.abs(Math.floor(a.x)%2)?a.x=Math.ceil(a.x)-a.x:a.x-=Math.floor(a.x);}if(0>a.y||1<a.y)switch(this.wrapT){case THREE.RepeatWrapping:a.y-=Math.floor(a.y);break;case THREE.ClampToEdgeWrapping:a.y=0>a.y?0:1;break;case THREE.MirroredRepeatWrapping:1===Math.abs(Math.floor(a.y)%2)?a.y=Math.ceil(a.y)-a.y:a.y-=Math.floor(a.y);}this.flipY&&(a.y=1-a.y);}}};Object.assign(THREE.Texture.prototype,THREE.EventDispatcher.prototype);THREE.TextureIdCount=0;THREE.DepthTexture=function(a,b,c,d,e,f,g,h,k){THREE.Texture.call(this,null,d,e,f,g,h,THREE.DepthFormat,c,k);this.image={width:a,height:b};this.type=void 0!==c?c:THREE.UnsignedShortType;this.magFilter=void 0!==g?g:THREE.NearestFilter;this.minFilter=void 0!==h?h:THREE.NearestFilter;this.generateMipmaps=this.flipY=!1;};THREE.DepthTexture.prototype=Object.create(THREE.Texture.prototype);THREE.DepthTexture.prototype.constructor=THREE.DepthTexture;THREE.CanvasTexture=function(a,b,c,d,e,f,g,h,k){THREE.Texture.call(this,a,b,c,d,e,f,g,h,k);this.needsUpdate=!0;};THREE.CanvasTexture.prototype=Object.create(THREE.Texture.prototype);THREE.CanvasTexture.prototype.constructor=THREE.CanvasTexture;THREE.CubeTexture=function(a,b,c,d,e,f,g,h,k,l){a=void 0!==a?a:[];b=void 0!==b?b:THREE.CubeReflectionMapping;THREE.Texture.call(this,a,b,c,d,e,f,g,h,k,l);this.flipY=!1;};THREE.CubeTexture.prototype=Object.create(THREE.Texture.prototype);THREE.CubeTexture.prototype.constructor=THREE.CubeTexture;Object.defineProperty(THREE.CubeTexture.prototype,"images",{get:function get(){return this.image;},set:function set(a){this.image=a;}});THREE.CompressedTexture=function(a,b,c,d,e,f,g,h,k,l,m,p){THREE.Texture.call(this,null,f,g,h,k,l,d,e,m,p);this.image={width:b,height:c};this.mipmaps=a;this.generateMipmaps=this.flipY=!1;};THREE.CompressedTexture.prototype=Object.create(THREE.Texture.prototype);THREE.CompressedTexture.prototype.constructor=THREE.CompressedTexture;THREE.DataTexture=function(a,b,c,d,e,f,g,h,k,l,m,p){THREE.Texture.call(this,null,f,g,h,k,l,d,e,m,p);this.image={data:a,width:b,height:c};this.magFilter=void 0!==k?k:THREE.NearestFilter;this.minFilter=void 0!==l?l:THREE.NearestFilter;this.generateMipmaps=this.flipY=!1;};THREE.DataTexture.prototype=Object.create(THREE.Texture.prototype);THREE.DataTexture.prototype.constructor=THREE.DataTexture;THREE.VideoTexture=function(a,b,c,d,e,f,g,h,k){function l(){requestAnimationFrame(l);a.readyState>=a.HAVE_CURRENT_DATA&&(m.needsUpdate=!0);}THREE.Texture.call(this,a,b,c,d,e,f,g,h,k);this.generateMipmaps=!1;var m=this;l();};THREE.VideoTexture.prototype=Object.create(THREE.Texture.prototype);THREE.VideoTexture.prototype.constructor=THREE.VideoTexture;THREE.Group=function(){THREE.Object3D.call(this);this.type="Group";};THREE.Group.prototype=Object.assign(Object.create(THREE.Object3D.prototype),{constructor:THREE.Group});THREE.Points=function(a,b){THREE.Object3D.call(this);this.type="Points";this.geometry=void 0!==a?a:new THREE.BufferGeometry();this.material=void 0!==b?b:new THREE.PointsMaterial({color:16777215*Math.random()});};THREE.Points.prototype=Object.assign(Object.create(THREE.Object3D.prototype),{constructor:THREE.Points,raycast:function(){var a=new THREE.Matrix4(),b=new THREE.Ray(),c=new THREE.Sphere();return function(d,e){function f(a,c){var f=b.distanceSqToPoint(a);if(f<m){var h=b.closestPointToPoint(a);h.applyMatrix4(k);var l=d.ray.origin.distanceTo(h);l<d.near||l>d.far||e.push({distance:l,distanceToRay:Math.sqrt(f),point:h.clone(),index:c,face:null,object:g});}}var g=this,h=this.geometry,k=this.matrixWorld,l=d.params.Points.threshold;null===h.boundingSphere&&h.computeBoundingSphere();c.copy(h.boundingSphere);c.applyMatrix4(k);if(!1!==d.ray.intersectsSphere(c)){a.getInverse(k);b.copy(d.ray).applyMatrix4(a);var l=l/((this.scale.x+this.scale.y+this.scale.z)/3),m=l*l,l=new THREE.Vector3();if(h instanceof THREE.BufferGeometry){var p=h.index,h=h.attributes.position.array;if(null!==p)for(var n=p.array,p=0,q=n.length;p<q;p++){var r=n[p];l.fromArray(h,3*r);f(l,r);}else for(p=0,n=h.length/3;p<n;p++){l.fromArray(h,3*p),f(l,p);}}else for(l=h.vertices,p=0,n=l.length;p<n;p++){f(l[p],p);}}};}(),clone:function clone(){return new this.constructor(this.geometry,this.material).copy(this);}});THREE.Line=function(a,b,c){if(1===c)return console.warn("THREE.Line: parameter THREE.LinePieces no longer supported. Created THREE.LineSegments instead."),new THREE.LineSegments(a,b);THREE.Object3D.call(this);this.type="Line";this.geometry=void 0!==a?a:new THREE.BufferGeometry();this.material=void 0!==b?b:new THREE.LineBasicMaterial({color:16777215*Math.random()});};THREE.Line.prototype=Object.assign(Object.create(THREE.Object3D.prototype),{constructor:THREE.Line,raycast:function(){var a=new THREE.Matrix4(),b=new THREE.Ray(),c=new THREE.Sphere();return function(d,e){var f=d.linePrecision,f=f*f,g=this.geometry,h=this.matrixWorld;null===g.boundingSphere&&g.computeBoundingSphere();c.copy(g.boundingSphere);c.applyMatrix4(h);if(!1!==d.ray.intersectsSphere(c)){a.getInverse(h);b.copy(d.ray).applyMatrix4(a);var k=new THREE.Vector3(),l=new THREE.Vector3(),h=new THREE.Vector3(),m=new THREE.Vector3(),p=this instanceof THREE.LineSegments?2:1;if(g instanceof THREE.BufferGeometry){var n=g.index,q=g.attributes.position.array;if(null!==n)for(var n=n.array,g=0,r=n.length-1;g<r;g+=p){var s=n[g+1];k.fromArray(q,3*n[g]);l.fromArray(q,3*s);s=b.distanceSqToSegment(k,l,m,h);s>f||(m.applyMatrix4(this.matrixWorld),s=d.ray.origin.distanceTo(m),s<d.near||s>d.far||e.push({distance:s,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this}));}else for(g=0,r=q.length/3-1;g<r;g+=p){k.fromArray(q,3*g),l.fromArray(q,3*g+3),s=b.distanceSqToSegment(k,l,m,h),s>f||(m.applyMatrix4(this.matrixWorld),s=d.ray.origin.distanceTo(m),s<d.near||s>d.far||e.push({distance:s,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this}));}}else if(g instanceof THREE.Geometry)for(k=g.vertices,l=k.length,g=0;g<l-1;g+=p){s=b.distanceSqToSegment(k[g],k[g+1],m,h),s>f||(m.applyMatrix4(this.matrixWorld),s=d.ray.origin.distanceTo(m),s<d.near||s>d.far||e.push({distance:s,point:h.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this}));}}};}(),clone:function clone(){return new this.constructor(this.geometry,this.material).copy(this);}});THREE.LineSegments=function(a,b){THREE.Line.call(this,a,b);this.type="LineSegments";};THREE.LineSegments.prototype=Object.assign(Object.create(THREE.Line.prototype),{constructor:THREE.LineSegments});THREE.Mesh=function(a,b){THREE.Object3D.call(this);this.type="Mesh";this.geometry=void 0!==a?a:new THREE.BufferGeometry();this.material=void 0!==b?b:new THREE.MeshBasicMaterial({color:16777215*Math.random()});this.drawMode=THREE.TrianglesDrawMode;this.updateMorphTargets();};THREE.Mesh.prototype=Object.assign(Object.create(THREE.Object3D.prototype),{constructor:THREE.Mesh,setDrawMode:function setDrawMode(a){this.drawMode=a;},copy:function copy(a){THREE.Object3D.prototype.copy.call(this,a);this.drawMode=a.drawMode;return this;},updateMorphTargets:function updateMorphTargets(){if(void 0!==this.geometry.morphTargets&&0<this.geometry.morphTargets.length){this.morphTargetBase=-1;this.morphTargetInfluences=[];this.morphTargetDictionary={};for(var a=0,b=this.geometry.morphTargets.length;a<b;a++){this.morphTargetInfluences.push(0),this.morphTargetDictionary[this.geometry.morphTargets[a].name]=a;}}},getMorphTargetIndexByName:function getMorphTargetIndexByName(a){if(void 0!==this.morphTargetDictionary[a])return this.morphTargetDictionary[a];console.warn("THREE.Mesh.getMorphTargetIndexByName: morph target "+a+" does not exist. Returning 0.");return 0;},raycast:function(){function a(a,b,c,d,e,g,f){THREE.Triangle.barycoordFromPoint(a,b,c,d,s);e.multiplyScalar(s.x);g.multiplyScalar(s.y);f.multiplyScalar(s.z);e.add(g).add(f);return e.clone();}function b(a,b,c,d,e,g,f){var h=a.material;if(null===(h.side===THREE.BackSide?c.intersectTriangle(g,e,d,!0,f):c.intersectTriangle(d,e,g,h.side!==THREE.DoubleSide,f)))return null;t.copy(f);t.applyMatrix4(a.matrixWorld);c=b.ray.origin.distanceTo(t);return c<b.near||c>b.far?null:{distance:c,point:t.clone(),object:a};}function c(c,d,e,f,l,p,m,s){g.fromArray(f,3*p);h.fromArray(f,3*m);k.fromArray(f,3*s);if(c=b(c,d,e,g,h,k,v))l&&(n.fromArray(l,2*p),q.fromArray(l,2*m),r.fromArray(l,2*s),c.uv=a(v,g,h,k,n,q,r)),c.face=new THREE.Face3(p,m,s,THREE.Triangle.normal(g,h,k)),c.faceIndex=p;return c;}var d=new THREE.Matrix4(),e=new THREE.Ray(),f=new THREE.Sphere(),g=new THREE.Vector3(),h=new THREE.Vector3(),k=new THREE.Vector3(),l=new THREE.Vector3(),m=new THREE.Vector3(),p=new THREE.Vector3(),n=new THREE.Vector2(),q=new THREE.Vector2(),r=new THREE.Vector2(),s=new THREE.Vector3(),v=new THREE.Vector3(),t=new THREE.Vector3();return function(u,s){var w=this.geometry,t=this.material,z=this.matrixWorld;if(void 0!==t&&(null===w.boundingSphere&&w.computeBoundingSphere(),f.copy(w.boundingSphere),f.applyMatrix4(z),!1!==u.ray.intersectsSphere(f)&&(d.getInverse(z),e.copy(u.ray).applyMatrix4(d),null===w.boundingBox||!1!==e.intersectsBox(w.boundingBox)))){var y,A;if(w instanceof THREE.BufferGeometry){var G,B,t=w.index,z=w.attributes,w=z.position.array;void 0!==z.uv&&(y=z.uv.array);if(null!==t)for(var z=t.array,F=0,J=z.length;F<J;F+=3){if(t=z[F],G=z[F+1],B=z[F+2],A=c(this,u,e,w,y,t,G,B))A.faceIndex=Math.floor(F/3),s.push(A);}else for(F=0,J=w.length;F<J;F+=9){if(t=F/3,G=t+1,B=t+2,A=c(this,u,e,w,y,t,G,B))A.index=t,s.push(A);}}else if(w instanceof THREE.Geometry){var P,K,z=t instanceof THREE.MultiMaterial,F=!0===z?t.materials:null,J=w.vertices;G=w.faces;B=w.faceVertexUvs[0];0<B.length&&(y=B);for(var H=0,M=G.length;H<M;H++){var O=G[H];A=!0===z?F[O.materialIndex]:t;if(void 0!==A){B=J[O.a];P=J[O.b];K=J[O.c];if(!0===A.morphTargets){A=w.morphTargets;var N=this.morphTargetInfluences;g.set(0,0,0);h.set(0,0,0);k.set(0,0,0);for(var Q=0,C=A.length;Q<C;Q++){var L=N[Q];if(0!==L){var E=A[Q].vertices;g.addScaledVector(l.subVectors(E[O.a],B),L);h.addScaledVector(m.subVectors(E[O.b],P),L);k.addScaledVector(p.subVectors(E[O.c],K),L);}}g.add(B);h.add(P);k.add(K);B=g;P=h;K=k;}if(A=b(this,u,e,B,P,K,v))y&&(N=y[H],n.copy(N[0]),q.copy(N[1]),r.copy(N[2]),A.uv=a(v,B,P,K,n,q,r)),A.face=O,A.faceIndex=H,s.push(A);}}}}};}(),clone:function clone(){return new this.constructor(this.geometry,this.material).copy(this);}});THREE.Bone=function(a){THREE.Object3D.call(this);this.type="Bone";this.skin=a;};THREE.Bone.prototype=Object.assign(Object.create(THREE.Object3D.prototype),{constructor:THREE.Bone,copy:function copy(a){THREE.Object3D.prototype.copy.call(this,a);this.skin=a.skin;return this;}});THREE.Skeleton=function(a,b,c){this.useVertexTexture=void 0!==c?c:!0;this.identityMatrix=new THREE.Matrix4();a=a||[];this.bones=a.slice(0);this.useVertexTexture?(a=Math.sqrt(4*this.bones.length),a=THREE.Math.nextPowerOfTwo(Math.ceil(a)),this.boneTextureHeight=this.boneTextureWidth=a=Math.max(a,4),this.boneMatrices=new Float32Array(this.boneTextureWidth*this.boneTextureHeight*4),this.boneTexture=new THREE.DataTexture(this.boneMatrices,this.boneTextureWidth,this.boneTextureHeight,THREE.RGBAFormat,THREE.FloatType)):this.boneMatrices=new Float32Array(16*this.bones.length);if(void 0===b)this.calculateInverses();else if(this.bones.length===b.length)this.boneInverses=b.slice(0);else for(console.warn("THREE.Skeleton bonInverses is the wrong length."),this.boneInverses=[],b=0,a=this.bones.length;b<a;b++){this.boneInverses.push(new THREE.Matrix4());}};Object.assign(THREE.Skeleton.prototype,{calculateInverses:function calculateInverses(){this.boneInverses=[];for(var a=0,b=this.bones.length;a<b;a++){var c=new THREE.Matrix4();this.bones[a]&&c.getInverse(this.bones[a].matrixWorld);this.boneInverses.push(c);}},pose:function pose(){for(var a,b=0,c=this.bones.length;b<c;b++){(a=this.bones[b])&&a.matrixWorld.getInverse(this.boneInverses[b]);}b=0;for(c=this.bones.length;b<c;b++){if(a=this.bones[b])a.parent instanceof THREE.Bone?(a.matrix.getInverse(a.parent.matrixWorld),a.matrix.multiply(a.matrixWorld)):a.matrix.copy(a.matrixWorld),a.matrix.decompose(a.position,a.quaternion,a.scale);}},update:function(){var a=new THREE.Matrix4();return function(){for(var b=0,c=this.bones.length;b<c;b++){a.multiplyMatrices(this.bones[b]?this.bones[b].matrixWorld:this.identityMatrix,this.boneInverses[b]),a.toArray(this.boneMatrices,16*b);}this.useVertexTexture&&(this.boneTexture.needsUpdate=!0);};}(),clone:function clone(){return new THREE.Skeleton(this.bones,this.boneInverses,this.useVertexTexture);}});THREE.SkinnedMesh=function(a,b,c){THREE.Mesh.call(this,a,b);this.type="SkinnedMesh";this.bindMode="attached";this.bindMatrix=new THREE.Matrix4();this.bindMatrixInverse=new THREE.Matrix4();a=[];if(this.geometry&&void 0!==this.geometry.bones){for(var d,e=0,f=this.geometry.bones.length;e<f;++e){d=this.geometry.bones[e],b=new THREE.Bone(this),a.push(b),b.name=d.name,b.position.fromArray(d.pos),b.quaternion.fromArray(d.rotq),void 0!==d.scl&&b.scale.fromArray(d.scl);}e=0;for(f=this.geometry.bones.length;e<f;++e){d=this.geometry.bones[e],-1!==d.parent&&null!==d.parent&&void 0!==a[d.parent]?a[d.parent].add(a[e]):this.add(a[e]);}}this.normalizeSkinWeights();this.updateMatrixWorld(!0);this.bind(new THREE.Skeleton(a,void 0,c),this.matrixWorld);};THREE.SkinnedMesh.prototype=Object.assign(Object.create(THREE.Mesh.prototype),{constructor:THREE.SkinnedMesh,bind:function bind(a,b){this.skeleton=a;void 0===b&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),b=this.matrixWorld);this.bindMatrix.copy(b);this.bindMatrixInverse.getInverse(b);},pose:function pose(){this.skeleton.pose();},normalizeSkinWeights:function normalizeSkinWeights(){if(this.geometry instanceof THREE.Geometry)for(var a=0;a<this.geometry.skinWeights.length;a++){var b=this.geometry.skinWeights[a],c=1/b.lengthManhattan();Infinity!==c?b.multiplyScalar(c):b.set(1,0,0,0);}else if(this.geometry instanceof THREE.BufferGeometry)for(var b=new THREE.Vector4(),d=this.geometry.attributes.skinWeight,a=0;a<d.count;a++){b.x=d.getX(a),b.y=d.getY(a),b.z=d.getZ(a),b.w=d.getW(a),c=1/b.lengthManhattan(),Infinity!==c?b.multiplyScalar(c):b.set(1,0,0,0),d.setXYZW(a,b.x,b.y,b.z,b.w);}},updateMatrixWorld:function updateMatrixWorld(a){THREE.Mesh.prototype.updateMatrixWorld.call(this,!0);"attached"===this.bindMode?this.bindMatrixInverse.getInverse(this.matrixWorld):"detached"===this.bindMode?this.bindMatrixInverse.getInverse(this.bindMatrix):console.warn("THREE.SkinnedMesh unrecognized bindMode: "+this.bindMode);},clone:function clone(){return new this.constructor(this.geometry,this.material,this.skeleton.useVertexTexture).copy(this);}});THREE.LOD=function(){THREE.Object3D.call(this);this.type="LOD";Object.defineProperties(this,{levels:{enumerable:!0,value:[]}});};THREE.LOD.prototype=Object.assign(Object.create(THREE.Object3D.prototype),{constructor:THREE.LOD,copy:function copy(a){THREE.Object3D.prototype.copy.call(this,a,!1);a=a.levels;for(var b=0,c=a.length;b<c;b++){var d=a[b];this.addLevel(d.object.clone(),d.distance);}return this;},addLevel:function addLevel(a,b){void 0===b&&(b=0);b=Math.abs(b);for(var c=this.levels,d=0;d<c.length&&!(b<c[d].distance);d++){}c.splice(d,0,{distance:b,object:a});this.add(a);},getObjectForDistance:function getObjectForDistance(a){for(var b=this.levels,c=1,d=b.length;c<d&&!(a<b[c].distance);c++){}return b[c-1].object;},raycast:function(){var a=new THREE.Vector3();return function(b,c){a.setFromMatrixPosition(this.matrixWorld);var d=b.ray.origin.distanceTo(a);this.getObjectForDistance(d).raycast(b,c);};}(),update:function(){var a=new THREE.Vector3(),b=new THREE.Vector3();return function(c){var d=this.levels;if(1<d.length){a.setFromMatrixPosition(c.matrixWorld);b.setFromMatrixPosition(this.matrixWorld);c=a.distanceTo(b);d[0].object.visible=!0;for(var e=1,f=d.length;e<f;e++){if(c>=d[e].distance)d[e-1].object.visible=!1,d[e].object.visible=!0;else break;}for(;e<f;e++){d[e].object.visible=!1;}}};}(),toJSON:function toJSON(a){a=THREE.Object3D.prototype.toJSON.call(this,a);a.object.levels=[];for(var b=this.levels,c=0,d=b.length;c<d;c++){var e=b[c];a.object.levels.push({object:e.object.uuid,distance:e.distance});}return a;}});THREE.Sprite=function(a){THREE.Object3D.call(this);this.type="Sprite";this.material=void 0!==a?a:new THREE.SpriteMaterial();};THREE.Sprite.prototype=Object.assign(Object.create(THREE.Object3D.prototype),{constructor:THREE.Sprite,raycast:function(){var a=new THREE.Vector3();return function(b,c){a.setFromMatrixPosition(this.matrixWorld);var d=b.ray.distanceSqToPoint(a);d>this.scale.x*this.scale.y/4||c.push({distance:Math.sqrt(d),point:this.position,face:null,object:this});};}(),clone:function clone(){return new this.constructor(this.material).copy(this);}});THREE.LensFlare=function(a,b,c,d,e){THREE.Object3D.call(this);this.lensFlares=[];this.positionScreen=new THREE.Vector3();this.customUpdateCallback=void 0;void 0!==a&&this.add(a,b,c,d,e);};THREE.LensFlare.prototype=Object.assign(Object.create(THREE.Object3D.prototype),{constructor:THREE.LensFlare,copy:function copy(a){THREE.Object3D.prototype.copy.call(this,a);this.positionScreen.copy(a.positionScreen);this.customUpdateCallback=a.customUpdateCallback;for(var b=0,c=a.lensFlares.length;b<c;b++){this.lensFlares.push(a.lensFlares[b]);}return this;},add:function add(a,b,c,d,e,f){void 0===b&&(b=-1);void 0===c&&(c=0);void 0===f&&(f=1);void 0===e&&(e=new THREE.Color(16777215));void 0===d&&(d=THREE.NormalBlending);c=Math.min(c,Math.max(0,c));this.lensFlares.push({texture:a,size:b,distance:c,x:0,y:0,z:0,scale:1,rotation:0,opacity:f,color:e,blending:d});},updateLensFlares:function updateLensFlares(){var a,b=this.lensFlares.length,c,d=2*-this.positionScreen.x,e=2*-this.positionScreen.y;for(a=0;a<b;a++){c=this.lensFlares[a],c.x=this.positionScreen.x+d*c.distance,c.y=this.positionScreen.y+e*c.distance,c.wantedRotation=c.x*Math.PI*.25,c.rotation+=.25*(c.wantedRotation-c.rotation);}}});THREE.Scene=function(){THREE.Object3D.call(this);this.type="Scene";this.overrideMaterial=this.fog=this.background=null;this.autoUpdate=!0;};THREE.Scene.prototype=Object.create(THREE.Object3D.prototype);THREE.Scene.prototype.constructor=THREE.Scene;THREE.Scene.prototype.copy=function(a,b){THREE.Object3D.prototype.copy.call(this,a,b);null!==a.background&&(this.background=a.background.clone());null!==a.fog&&(this.fog=a.fog.clone());null!==a.overrideMaterial&&(this.overrideMaterial=a.overrideMaterial.clone());this.autoUpdate=a.autoUpdate;this.matrixAutoUpdate=a.matrixAutoUpdate;return this;};THREE.Fog=function(a,b,c){this.name="";this.color=new THREE.Color(a);this.near=void 0!==b?b:1;this.far=void 0!==c?c:1E3;};THREE.Fog.prototype.clone=function(){return new THREE.Fog(this.color.getHex(),this.near,this.far);};THREE.FogExp2=function(a,b){this.name="";this.color=new THREE.Color(a);this.density=void 0!==b?b:2.5E-4;};THREE.FogExp2.prototype.clone=function(){return new THREE.FogExp2(this.color.getHex(),this.density);};THREE.ShaderChunk={};THREE.ShaderChunk.alphamap_fragment="#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif\n";THREE.ShaderChunk.alphamap_pars_fragment="#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif\n";THREE.ShaderChunk.alphatest_fragment="#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif\n";THREE.ShaderChunk.aomap_fragment="#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif\n";THREE.ShaderChunk.aomap_pars_fragment="#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif";THREE.ShaderChunk.begin_vertex="\nvec3 transformed = vec3( position );\n";THREE.ShaderChunk.beginnormal_vertex="\nvec3 objectNormal = vec3( normal );\n";THREE.ShaderChunk.bsdfs="bool testLightInRange( const in float lightDistance, const in float cutoffDistance ) {\n\treturn any( bvec2( cutoffDistance == 0.0, lightDistance < cutoffDistance ) );\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n\t\tif( decayExponent > 0.0 ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\t\t\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\t\t\tfloat maxDistanceCutoffFactor = pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t\t\treturn distanceFalloff * maxDistanceCutoffFactor;\n#else\n\t\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n#endif\n\t\t}\n\t\treturn 1.0;\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\tvec2 AB = vec2( -1.04, 1.04 ) * a004 + r.zw;\n\treturn specularColor * AB.x + AB.y;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n";THREE.ShaderChunk.bumpmap_pars_fragment="#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = dFdx( surf_pos );\n\t\tvec3 vSigmaY = dFdy( surf_pos );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif\n";THREE.ShaderChunk.clipping_planes_fragment="#if NUM_CLIPPING_PLANES > 0\n\tfor ( int i = 0; i < NUM_CLIPPING_PLANES; ++ i ) {\n\t\tvec4 plane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n#endif\n";THREE.ShaderChunk.clipping_planes_pars_fragment="#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( PHYSICAL ) && ! defined( PHONG )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif\n";THREE.ShaderChunk.clipping_planes_pars_vertex="#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvarying vec3 vViewPosition;\n#endif\n";THREE.ShaderChunk.clipping_planes_vertex="#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n";THREE.ShaderChunk.color_fragment="#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif";THREE.ShaderChunk.color_pars_fragment="#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif\n";THREE.ShaderChunk.color_pars_vertex="#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif";THREE.ShaderChunk.color_vertex="#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif";THREE.ShaderChunk.common="#define PI 3.14159265359\n#define PI2 6.28318530718\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\n";THREE.ShaderChunk.cube_uv_reflection_fragment="#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n\tvec3 absDirection = abs(direction);\n\tint face = -1;\n\tif( absDirection.x > absDirection.z ) {\n\t\tif(absDirection.x > absDirection.y )\n\t\t\tface = direction.x > 0.0 ? 0 : 3;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\telse {\n\t\tif(absDirection.z > absDirection.y )\n\t\t\tface = direction.z > 0.0 ? 2 : 5;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\treturn face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n\tfloat dxRoughness = dFdx(roughness);\n\tfloat dyRoughness = dFdy(roughness);\n\tvec3 dx = dFdx( vec * scale * dxRoughness );\n\tvec3 dy = dFdy( vec * scale * dyRoughness );\n\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\n\td = clamp(d, 1.0, cubeUV_rangeClamp);\n\tfloat mipLevel = 0.5 * log2(d);\n\treturn vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n\tfloat a = 16.0 * cubeUV_rcpTextureSize;\n\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n\tfloat powScale = exp2_packed.x * exp2_packed.y;\n\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n\tbool bRes = mipLevel == 0.0;\n\tscale =  bRes && (scale < a) ? a : scale;\n\tvec3 r;\n\tvec2 offset;\n\tint face = getFaceFromDirection(direction);\n\tfloat rcpPowScale = 1.0 / powScale;\n\tif( face == 0) {\n\t\tr = vec3(direction.x, -direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ?  a : offset.y;\n\t}\n\telse if( face == 1) {\n\t\tr = vec3(direction.y, direction.x, direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ?  a : offset.y;\n\t}\n\telse if( face == 2) {\n\t\tr = vec3(direction.z, direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ?  a : offset.y;\n\t}\n\telse if( face == 3) {\n\t\tr = vec3(direction.x, direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ?  0.0 : offset.y;\n\t}\n\telse if( face == 4) {\n\t\tr = vec3(direction.y, direction.x, -direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ?  0.0 : offset.y;\n\t}\n\telse {\n\t\tr = vec3(direction.z, -direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ?  0.0 : offset.y;\n\t}\n\tr = normalize(r);\n\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\n\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n\tvec2 base = offset + vec2( texelOffset );\n\treturn base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV(vec3 reflectedDirection, float roughness ) {\n\tfloat roughnessVal = roughness* cubeUV_maxLods3;\n\tfloat r1 = floor(roughnessVal);\n\tfloat r2 = r1 + 1.0;\n\tfloat t = fract(roughnessVal);\n\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n\tfloat s = mipInfo.y;\n\tfloat level0 = mipInfo.x;\n\tfloat level1 = level0 + 1.0;\n\tlevel1 = level1 > 5.0 ? 5.0 : level1;\n\tlevel0 += min( floor( s + 0.5 ), 5.0 );\n\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n\tvec4 result = mix(color10, color20, t);\n\treturn vec4(result.rgb, 1.0);\n}\n#endif\n";THREE.ShaderChunk.defaultnormal_vertex="#ifdef FLIP_SIDED\n\tobjectNormal = -objectNormal;\n#endif\nvec3 transformedNormal = normalMatrix * objectNormal;\n";THREE.ShaderChunk.displacementmap_vertex="#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normal * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif\n";THREE.ShaderChunk.displacementmap_pars_vertex="#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif\n";THREE.ShaderChunk.emissivemap_fragment="#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif\n";THREE.ShaderChunk.emissivemap_pars_fragment="#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif\n";THREE.ShaderChunk.encodings_pars_fragment="\nvec4 LinearToLinear( in vec4 value ) {\n  return value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n  return vec4( pow( value.xyz, vec3( gammaFactor ) ), value.w );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n  return vec4( pow( value.xyz, vec3( 1.0 / gammaFactor ) ), value.w );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n  return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.w );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n  return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.w );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n  return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n  float maxComponent = max( max( value.r, value.g ), value.b );\n  float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n  return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n  return vec4( value.xyz * value.w * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n  float maxRGB = max( value.x, max( value.g, value.b ) );\n  float M      = clamp( maxRGB / maxRange, 0.0, 1.0 );\n  M            = ceil( M * 255.0 ) / 255.0;\n  return vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n    return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n    float maxRGB = max( value.x, max( value.g, value.b ) );\n    float D      = max( maxRange / maxRGB, 1.0 );\n    D            = min( floor( D ) / 255.0, 1.0 );\n    return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n  vec3 Xp_Y_XYZp = value.rgb * cLogLuvM;\n  Xp_Y_XYZp = max(Xp_Y_XYZp, vec3(1e-6, 1e-6, 1e-6));\n  vec4 vResult;\n  vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n  float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n  vResult.w = fract(Le);\n  vResult.z = (Le - (floor(vResult.w*255.0))/255.0)/255.0;\n  return vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n  float Le = value.z * 255.0 + value.w;\n  vec3 Xp_Y_XYZp;\n  Xp_Y_XYZp.y = exp2((Le - 127.0) / 2.0);\n  Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n  Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n  vec3 vRGB = Xp_Y_XYZp.rgb * cLogLuvInverseM;\n  return vec4( max(vRGB, 0.0), 1.0 );\n}\n";THREE.ShaderChunk.encodings_fragment="  gl_FragColor = linearToOutputTexel( gl_FragColor );\n";THREE.ShaderChunk.envmap_fragment="#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\tsampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n\t\tsampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\tvec3 reflectView = flipNormal * normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#endif\n\tenvColor = envMapTexelToLinear( envColor );\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif\n";THREE.ShaderChunk.envmap_pars_fragment="#if defined( USE_ENVMAP ) || defined( PHYSICAL )\n\tuniform float reflectivity;\n\tuniform float envMapIntenstiy;\n#endif\n#ifdef USE_ENVMAP\n\t#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\n\t\tvarying vec3 vWorldPosition;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif\n";THREE.ShaderChunk.envmap_pars_vertex="#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif\n";THREE.ShaderChunk.envmap_vertex="#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif\n";THREE.ShaderChunk.fog_fragment="#ifdef USE_FOG\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tfloat depth = gl_FragDepthEXT / gl_FragCoord.w;\n\t#else\n\t\tfloat depth = gl_FragCoord.z / gl_FragCoord.w;\n\t#endif\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * depth * depth * LOG2 ) );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, depth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif\n";THREE.ShaderChunk.fog_pars_fragment="#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif";THREE.ShaderChunk.lightmap_fragment="#ifdef USE_LIGHTMAP\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif\n";THREE.ShaderChunk.lightmap_pars_fragment="#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif";THREE.ShaderChunk.lights_lambert_vertex="vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvLightFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif\n";THREE.ShaderChunk.lights_pars="uniform vec3 ambientLightColor;\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tif ( testLightInRange( lightDistance, pointLight.distance ) ) {\n\t\t\tdirectLight.color = pointLight.color;\n\t\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( all( bvec2( angleCos > spotLight.coneCos, testLightInRange( lightDistance, spotLight.distance ) ) ) ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif\n#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\t#include <normal_flip>\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = flipNormal * vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = flipNormal * vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar - 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n\t\t#endif\n\t\t#include <normal_flip>\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV(queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent));\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = saturate( flipNormal * reflectVec.y * 0.5 + 0.5 );\n\t\t\tsampleUV.x = atan( flipNormal * reflectVec.z, flipNormal * reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = flipNormal * normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif\n";THREE.ShaderChunk.lights_phong_fragment="BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;\n";THREE.ShaderChunk.lights_phong_pars_fragment="varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)\n";THREE.ShaderChunk.lights_physical_fragment="PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef STANDARD\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.clearCoat = saturate( clearCoat );\tmaterial.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );\n#endif\n";THREE.ShaderChunk.lights_physical_pars_fragment="struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n\t#ifndef STANDARD\n\t\tfloat clearCoat;\n\t\tfloat clearCoatRoughness;\n\t#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearCoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifndef STANDARD\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n\treflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\t#ifndef STANDARD\n\t\treflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifndef STANDARD\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\tfloat dotNL = dotNV;\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.indirectSpecular += ( 1.0 - clearCoatDHR ) * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n\t#ifndef STANDARD\n\t\treflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\n#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}\n";THREE.ShaderChunk.lights_template="\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\t#ifdef USE_LIGHTMAP\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t \tirradiance += getLightProbeIndirectIrradiance( geometry, 8 );\n\t#endif\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tvec3 radiance = getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), 8 );\n\t#ifndef STANDARD\n\t\tvec3 clearCoatRadiance = getLightProbeIndirectRadiance( geometry, Material_ClearCoat_BlinnShininessExponent( material ), 8 );\n\t#else\n\t\tvec3 clearCoatRadiance = vec3( 0.0 );\n\t#endif\n\t\t\n\tRE_IndirectSpecular( radiance, clearCoatRadiance, geometry, material, reflectedLight );\n#endif\n";THREE.ShaderChunk.logdepthbuf_fragment="#if defined(USE_LOGDEPTHBUF) && defined(USE_LOGDEPTHBUF_EXT)\n\tgl_FragDepthEXT = log2(vFragDepth) * logDepthBufFC * 0.5;\n#endif";THREE.ShaderChunk.logdepthbuf_pars_fragment="#ifdef USE_LOGDEPTHBUF\n\tuniform float logDepthBufFC;\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n#endif\n";THREE.ShaderChunk.logdepthbuf_pars_vertex="#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#endif\n\tuniform float logDepthBufFC;\n#endif";THREE.ShaderChunk.logdepthbuf_vertex="#ifdef USE_LOGDEPTHBUF\n\tgl_Position.z = log2(max( EPSILON, gl_Position.w + 1.0 )) * logDepthBufFC;\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t#else\n\t\tgl_Position.z = (gl_Position.z - 1.0) * gl_Position.w;\n\t#endif\n#endif\n";THREE.ShaderChunk.map_fragment="#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif\n";THREE.ShaderChunk.map_pars_fragment="#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif\n";THREE.ShaderChunk.map_particle_fragment="#ifdef USE_MAP\n\tvec4 mapTexel = texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) * offsetRepeat.zw + offsetRepeat.xy );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif\n";THREE.ShaderChunk.map_particle_pars_fragment="#ifdef USE_MAP\n\tuniform vec4 offsetRepeat;\n\tuniform sampler2D map;\n#endif\n";THREE.ShaderChunk.metalnessmap_fragment="float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.r;\n#endif\n";THREE.ShaderChunk.metalnessmap_pars_fragment="#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif";THREE.ShaderChunk.morphnormal_vertex="#ifdef USE_MORPHNORMALS\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif\n";THREE.ShaderChunk.morphtarget_pars_vertex="#ifdef USE_MORPHTARGETS\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif";THREE.ShaderChunk.morphtarget_vertex="#ifdef USE_MORPHTARGETS\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\t#endif\n#endif\n";THREE.ShaderChunk.normal_flip="#ifdef DOUBLE_SIDED\n\tfloat flipNormal = ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n#else\n\tfloat flipNormal = 1.0;\n#endif\n";THREE.ShaderChunk.normal_fragment="#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal ) * flipNormal;\n#endif\n#ifdef USE_NORMALMAP\n\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif\n";THREE.ShaderChunk.normalmap_pars_fragment="#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\t\tvec3 q0 = dFdx( eye_pos.xyz );\n\t\tvec3 q1 = dFdy( eye_pos.xyz );\n\t\tvec2 st0 = dFdx( vUv.st );\n\t\tvec2 st1 = dFdy( vUv.st );\n\t\tvec3 S = normalize( q0 * st1.t - q1 * st0.t );\n\t\tvec3 T = normalize( -q0 * st1.s + q1 * st0.s );\n\t\tvec3 N = normalize( surf_norm );\n\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\tmapN.xy = normalScale * mapN.xy;\n\t\tmat3 tsn = mat3( S, T, N );\n\t\treturn normalize( tsn * mapN );\n\t}\n#endif\n";THREE.ShaderChunk.packing="vec3 packNormalToRGB( const in vec3 normal ) {\n  return normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n  return 1.0 - 2.0 * rgb.xyz;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n  return ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n  return linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n  return (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n  return ( near * far ) / ( ( far - near ) * invClipZ - far );\n}\n";THREE.ShaderChunk.premultiplied_alpha_fragment="#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif\n";THREE.ShaderChunk.project_vertex="#ifdef USE_SKINNING\n\tvec4 mvPosition = modelViewMatrix * skinned;\n#else\n\tvec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\n#endif\ngl_Position = projectionMatrix * mvPosition;\n";THREE.ShaderChunk.roughnessmap_fragment="float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.r;\n#endif\n";THREE.ShaderChunk.roughnessmap_pars_fragment="#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif";THREE.ShaderChunk.shadowmap_pars_fragment="#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = floor( uv * size + 0.5 ) / size;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\treturn (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn 1.0;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\tfloat dp = ( length( lightToPosition ) - shadowBias ) / 1000.0;\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif\n";THREE.ShaderChunk.shadowmap_pars_vertex="#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n#endif\n";THREE.ShaderChunk.shadowmap_vertex="#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif\n";THREE.ShaderChunk.shadowmask_pars_fragment="float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tDirectionalLight directionalLight;\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tSpotLight spotLight;\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tPointLight pointLight;\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}\n";THREE.ShaderChunk.skinbase_vertex="#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif";THREE.ShaderChunk.skinning_pars_vertex="#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureWidth;\n\t\tuniform int boneTextureHeight;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureWidth ) );\n\t\t\tfloat y = floor( j / float( boneTextureWidth ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureWidth );\n\t\t\tfloat dy = 1.0 / float( boneTextureHeight );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif\n";THREE.ShaderChunk.skinning_vertex="#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\tskinned  = bindMatrixInverse * skinned;\n#endif\n";THREE.ShaderChunk.skinnormal_vertex="#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n#endif\n";THREE.ShaderChunk.specularmap_fragment="float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif";THREE.ShaderChunk.specularmap_pars_fragment="#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif";THREE.ShaderChunk.tonemapping_fragment="#if defined( TONE_MAPPING )\n  gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif\n";THREE.ShaderChunk.tonemapping_pars_fragment="#define saturate(a) clamp( a, 0.0, 1.0 )\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n  return toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n  color *= toneMappingExposure;\n  return saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n  color *= toneMappingExposure;\n  return saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n  color *= toneMappingExposure;\n  color = max( vec3( 0.0 ), color - 0.004 );\n  return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\n";THREE.ShaderChunk.uv2_pars_fragment="#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif";THREE.ShaderChunk.uv2_pars_vertex="#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n#endif";THREE.ShaderChunk.uv2_vertex="#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = uv2;\n#endif";THREE.ShaderChunk.uv_pars_fragment="#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n#endif";THREE.ShaderChunk.uv_pars_vertex="#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n\tuniform vec4 offsetRepeat;\n#endif\n";THREE.ShaderChunk.uv_vertex="#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvUv = uv * offsetRepeat.zw + offsetRepeat.xy;\n#endif";THREE.ShaderChunk.worldpos_vertex="#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( PHYSICAL ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )\n\t#ifdef USE_SKINNING\n\t\tvec4 worldPosition = modelMatrix * skinned;\n\t#else\n\t\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n\t#endif\n#endif\n";THREE.UniformsUtils={merge:function merge(a){for(var b={},c=0;c<a.length;c++){var d=this.clone(a[c]),e;for(e in d){b[e]=d[e];}}return b;},clone:function clone(a){var b={},c;for(c in a){b[c]={};for(var d in a[c]){var e=a[c][d];e instanceof THREE.Color||e instanceof THREE.Vector2||e instanceof THREE.Vector3||e instanceof THREE.Vector4||e instanceof THREE.Matrix3||e instanceof THREE.Matrix4||e instanceof THREE.Texture?b[c][d]=e.clone():Array.isArray(e)?b[c][d]=e.slice():b[c][d]=e;}}return b;}};THREE.UniformsLib={common:{diffuse:{value:new THREE.Color(15658734)},opacity:{value:1},map:{value:null},offsetRepeat:{value:new THREE.Vector4(0,0,1,1)},specularMap:{value:null},alphaMap:{value:null},envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new THREE.Vector2(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},fog:{fogDensity:{value:2.5E-4},fogNear:{value:1},fogFar:{value:2E3},fogColor:{value:new THREE.Color(16777215)}},lights:{ambientLightColor:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{},shadow:{},shadowBias:{},shadowRadius:{},shadowMapSize:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}}},points:{diffuse:{value:new THREE.Color(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},offsetRepeat:{value:new THREE.Vector4(0,0,1,1)}}};THREE.ShaderChunk.cube_frag="uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tgl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );\n\tgl_FragColor.a *= opacity;\n}\n";THREE.ShaderChunk.cube_vert="varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}\n";THREE.ShaderChunk.depth_frag="#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( gl_FragCoord.z ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\t#endif\n}\n";THREE.ShaderChunk.depth_vert="#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n";THREE.ShaderChunk.distanceRGBA_frag="uniform vec3 lightPos;\nvarying vec4 vWorldPosition;\n#include <common>\n#include <packing>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tgl_FragColor = packDepthToRGBA( length( vWorldPosition.xyz - lightPos.xyz ) / 1000.0 );\n}\n";THREE.ShaderChunk.distanceRGBA_vert="varying vec4 vWorldPosition;\n#include <common>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <skinbase_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition;\n}\n";THREE.ShaderChunk.equirect_frag="uniform sampler2D tEquirect;\nuniform float tFlip;\nvarying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldPosition );\n\tvec2 sampleUV;\n\tsampleUV.y = saturate( tFlip * direction.y * -0.5 + 0.5 );\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tgl_FragColor = texture2D( tEquirect, sampleUV );\n}\n";THREE.ShaderChunk.equirect_vert="varying vec3 vWorldPosition;\n#include <common>\nvoid main() {\n\tvWorldPosition = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}\n";THREE.ShaderChunk.linedashed_frag="uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n";THREE.ShaderChunk.linedashed_vert="uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n";THREE.ShaderChunk.meshbasic_frag="uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight;\n\treflectedLight.directDiffuse = vec3( 0.0 );\n\treflectedLight.directSpecular = vec3( 0.0 );\n\treflectedLight.indirectDiffuse = diffuseColor.rgb;\n\treflectedLight.indirectSpecular = vec3( 0.0 );\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <normal_flip>\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n";THREE.ShaderChunk.meshbasic_vert="#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n}\n";THREE.ShaderChunk.meshlambert_frag="uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <normal_flip>\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n";THREE.ShaderChunk.meshlambert_vert="#define LAMBERT\nvarying vec3 vLightFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n}\n";THREE.ShaderChunk.meshphong_frag="#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_flip>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n";THREE.ShaderChunk.meshphong_vert="#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n}\n";THREE.ShaderChunk.meshphysical_frag="#define PHYSICAL\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifndef STANDARD\n\tuniform float clearCoat;\n\tuniform float clearCoatRoughness;\n#endif\nuniform float envMapIntensity;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <packing>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <lights_pars>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_flip>\n\t#include <normal_fragment>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_template>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n";THREE.ShaderChunk.meshphysical_vert="#define PHYSICAL\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <displacementmap_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n}\n";THREE.ShaderChunk.normal_frag="uniform float opacity;\nvarying vec3 vNormal;\n#include <common>\n#include <packing>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tgl_FragColor = vec4( packNormalToRGB( vNormal ), opacity );\n\t#include <logdepthbuf_fragment>\n}\n";THREE.ShaderChunk.normal_vert="varying vec3 vNormal;\n#include <common>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\tvNormal = normalize( normalMatrix * normal );\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}\n";THREE.ShaderChunk.points_frag="uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}\n";THREE.ShaderChunk.points_vert="uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#ifdef USE_SIZEATTENUATION\n\t\tgl_PointSize = size * ( scale / - mvPosition.z );\n\t#else\n\t\tgl_PointSize = size;\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n}\n";THREE.ShaderChunk.shadow_frag="uniform float opacity;\n#include <common>\n#include <packing>\n#include <bsdfs>\n#include <lights_pars>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( 0.0, 0.0, 0.0, opacity * ( 1.0  - getShadowMask() ) );\n}\n";THREE.ShaderChunk.shadow_vert="#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n}\n";THREE.ShaderLib={basic:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.aomap,THREE.UniformsLib.fog]),vertexShader:THREE.ShaderChunk.meshbasic_vert,fragmentShader:THREE.ShaderChunk.meshbasic_frag},lambert:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.aomap,THREE.UniformsLib.lightmap,THREE.UniformsLib.emissivemap,THREE.UniformsLib.fog,THREE.UniformsLib.lights,{emissive:{value:new THREE.Color(0)}}]),vertexShader:THREE.ShaderChunk.meshlambert_vert,fragmentShader:THREE.ShaderChunk.meshlambert_frag},phong:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.aomap,THREE.UniformsLib.lightmap,THREE.UniformsLib.emissivemap,THREE.UniformsLib.bumpmap,THREE.UniformsLib.normalmap,THREE.UniformsLib.displacementmap,THREE.UniformsLib.fog,THREE.UniformsLib.lights,{emissive:{value:new THREE.Color(0)},specular:{value:new THREE.Color(1118481)},shininess:{value:30}}]),vertexShader:THREE.ShaderChunk.meshphong_vert,fragmentShader:THREE.ShaderChunk.meshphong_frag},standard:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.aomap,THREE.UniformsLib.lightmap,THREE.UniformsLib.emissivemap,THREE.UniformsLib.bumpmap,THREE.UniformsLib.normalmap,THREE.UniformsLib.displacementmap,THREE.UniformsLib.roughnessmap,THREE.UniformsLib.metalnessmap,THREE.UniformsLib.fog,THREE.UniformsLib.lights,{emissive:{value:new THREE.Color(0)},roughness:{value:.5},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:THREE.ShaderChunk.meshphysical_vert,fragmentShader:THREE.ShaderChunk.meshphysical_frag},points:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.points,THREE.UniformsLib.fog]),vertexShader:THREE.ShaderChunk.points_vert,fragmentShader:THREE.ShaderChunk.points_frag},dashed:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:THREE.ShaderChunk.linedashed_vert,fragmentShader:THREE.ShaderChunk.linedashed_frag},depth:{uniforms:THREE.UniformsUtils.merge([THREE.UniformsLib.common,THREE.UniformsLib.displacementmap]),vertexShader:THREE.ShaderChunk.depth_vert,fragmentShader:THREE.ShaderChunk.depth_frag},normal:{uniforms:{opacity:{value:1}},vertexShader:THREE.ShaderChunk.normal_vert,fragmentShader:THREE.ShaderChunk.normal_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:THREE.ShaderChunk.cube_vert,fragmentShader:THREE.ShaderChunk.cube_frag},equirect:{uniforms:{tEquirect:{value:null},tFlip:{value:-1}},vertexShader:THREE.ShaderChunk.equirect_vert,fragmentShader:THREE.ShaderChunk.equirect_frag},distanceRGBA:{uniforms:{lightPos:{value:new THREE.Vector3()}},vertexShader:THREE.ShaderChunk.distanceRGBA_vert,fragmentShader:THREE.ShaderChunk.distanceRGBA_frag}};THREE.ShaderLib.physical={uniforms:THREE.UniformsUtils.merge([THREE.ShaderLib.standard.uniforms,{clearCoat:{value:0},clearCoatRoughness:{value:0}}]),vertexShader:THREE.ShaderChunk.meshphysical_vert,fragmentShader:THREE.ShaderChunk.meshphysical_frag};THREE.WebGLRenderer=function(a){function b(a,b,c,d){!0===A&&(a*=d,b*=d,c*=d);R.clearColor(a,b,c,d);}function c(){R.init();R.scissor(X.copy(ua).multiplyScalar(Z));R.viewport(fa.copy(na).multiplyScalar(Z));b(V.r,V.g,V.b,ba);}function d(){T=Q=null;$="";E=-1;R.reset();}function e(a){a.preventDefault();d();c();Y.clear();}function f(a){a=a.target;a.removeEventListener("dispose",f);g(a);Y.delete(a);}function g(a){var b=Y.get(a).program;a.program=void 0;void 0!==b&&oa.releaseProgram(b);}function h(a,b){return Math.abs(b[0])-Math.abs(a[0]);}function k(a,b){return a.object.renderOrder!==b.object.renderOrder?a.object.renderOrder-b.object.renderOrder:a.material.program&&b.material.program&&a.material.program!==b.material.program?a.material.program.id-b.material.program.id:a.material.id!==b.material.id?a.material.id-b.material.id:a.z!==b.z?a.z-b.z:a.id-b.id;}function l(a,b){return a.object.renderOrder!==b.object.renderOrder?a.object.renderOrder-b.object.renderOrder:a.z!==b.z?b.z-a.z:a.id-b.id;}function m(a,b,c,d,e){var g;c.transparent?(d=P,g=++K):(d=F,g=++J);g=d[g];void 0!==g?(g.id=a.id,g.object=a,g.geometry=b,g.material=c,g.z=W.z,g.group=e):(g={id:a.id,object:a,geometry:b,material:c,z:W.z,group:e},d.push(g));}function p(a){if(!wa.intersectsSphere(a))return!1;var b=da.numPlanes;if(0===b)return!0;var c=N.clippingPlanes,d=a.center;a=-a.radius;var e=0;do{if(c[e].distanceToPoint(d)<a)return!1;}while(++e!==b);return!0;}function n(a,b){if(!1!==a.visible){if(a.layers.test(b.layers))if(a instanceof THREE.Light)B.push(a);else if(a instanceof THREE.Sprite){var c;(c=!1===a.frustumCulled)||(ka.center.set(0,0,0),ka.radius=.7071067811865476,ka.applyMatrix4(a.matrixWorld),c=!0===p(ka));c&&M.push(a);}else if(a instanceof THREE.LensFlare)O.push(a);else if(a instanceof THREE.ImmediateRenderObject)!0===N.sortObjects&&(W.setFromMatrixPosition(a.matrixWorld),W.applyProjection(qa)),m(a,null,a.material,W.z,null);else if(a instanceof THREE.Mesh||a instanceof THREE.Line||a instanceof THREE.Points)if(a instanceof THREE.SkinnedMesh&&a.skeleton.update(),(c=!1===a.frustumCulled)||(c=a.geometry,null===c.boundingSphere&&c.computeBoundingSphere(),ka.copy(c.boundingSphere).applyMatrix4(a.matrixWorld),c=!0===p(ka)),c){var d=a.material;if(!0===d.visible)if(!0===N.sortObjects&&(W.setFromMatrixPosition(a.matrixWorld),W.applyProjection(qa)),c=ha.update(a),d instanceof THREE.MultiMaterial)for(var e=c.groups,g=d.materials,d=0,f=e.length;d<f;d++){var h=e[d],k=g[h.materialIndex];!0===k.visible&&m(a,c,k,W.z,h);}else m(a,c,d,W.z,null);}c=a.children;d=0;for(f=c.length;d<f;d++){n(c[d],b);}}}function q(a,b,c,d){for(var e=0,g=a.length;e<g;e++){var f=a[e],h=f.object,k=f.geometry,l=void 0===d?f.material:d,f=f.group;h.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,h.matrixWorld);h.normalMatrix.getNormalMatrix(h.modelViewMatrix);if(h instanceof THREE.ImmediateRenderObject){r(l);var n=s(b,c,l,h);$="";h.render(function(a){N.renderBufferImmediate(a,n,l);});}else N.renderBufferDirect(b,c,k,l,h,f);}}function r(a){a.side!==THREE.DoubleSide?R.enable(x.CULL_FACE):R.disable(x.CULL_FACE);R.setFlipSided(a.side===THREE.BackSide);!0===a.transparent?R.setBlending(a.blending,a.blendEquation,a.blendSrc,a.blendDst,a.blendEquationAlpha,a.blendSrcAlpha,a.blendDstAlpha,a.premultipliedAlpha):R.setBlending(THREE.NoBlending);R.setDepthFunc(a.depthFunc);R.setDepthTest(a.depthTest);R.setDepthWrite(a.depthWrite);R.setColorWrite(a.colorWrite);R.setPolygonOffset(a.polygonOffset,a.polygonOffsetFactor,a.polygonOffsetUnits);}function s(a,b,c,d){ga=0;var e=Y.get(c);ra&&((va||a!==T)&&da.setState(c.clippingPlanes,c.clipShadows,a,e,a===T&&c.id===E),void 0!==e.numClippingPlanes&&e.numClippingPlanes!==da.numPlanes&&(c.needsUpdate=!0));void 0===e.program&&(c.needsUpdate=!0);void 0!==e.lightsHash&&e.lightsHash!==S.hash&&(c.needsUpdate=!0);if(c.needsUpdate){a:{var h=Y.get(c),k=oa.getParameters(c,S,b,da.numPlanes,d),l=oa.getProgramCode(c,k),n=h.program,p=!0;if(void 0===n)c.addEventListener("dispose",f);else if(n.code!==l)g(c);else if(void 0!==k.shaderID)break a;else p=!1;p&&(k.shaderID?(n=THREE.ShaderLib[k.shaderID],h.__webglShader={name:c.type,uniforms:THREE.UniformsUtils.clone(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader}):h.__webglShader={name:c.type,uniforms:c.uniforms,vertexShader:c.vertexShader,fragmentShader:c.fragmentShader},c.__webglShader=h.__webglShader,n=oa.acquireProgram(c,k,l),h.program=n,c.program=n);k=n.getAttributes();if(c.morphTargets)for(l=c.numSupportedMorphTargets=0;l<N.maxMorphTargets;l++){0<=k["morphTarget"+l]&&c.numSupportedMorphTargets++;}if(c.morphNormals)for(l=c.numSupportedMorphNormals=0;l<N.maxMorphNormals;l++){0<=k["morphNormal"+l]&&c.numSupportedMorphNormals++;}k=h.__webglShader.uniforms;(c instanceof THREE.ShaderMaterial||c instanceof THREE.RawShaderMaterial)&&!0!==c.clipping||(h.numClippingPlanes=da.numPlanes,k.clippingPlanes=da.uniform);c.lights&&(h.lightsHash=S.hash,k.ambientLightColor.value=S.ambient,k.directionalLights.value=S.directional,k.spotLights.value=S.spot,k.pointLights.value=S.point,k.hemisphereLights.value=S.hemi,k.directionalShadowMap.value=S.directionalShadowMap,k.directionalShadowMatrix.value=S.directionalShadowMatrix,k.spotShadowMap.value=S.spotShadowMap,k.spotShadowMatrix.value=S.spotShadowMatrix,k.pointShadowMap.value=S.pointShadowMap,k.pointShadowMatrix.value=S.pointShadowMatrix);l=h.program.getUniforms();l=THREE.WebGLUniforms.seqWithValue(l.seq,k);h.uniformsList=l;h.dynamicUniforms=THREE.WebGLUniforms.splitDynamic(l,k);}c.needsUpdate=!1;}var m=!1,p=n=!1,h=e.program,l=h.getUniforms(),k=e.__webglShader.uniforms;h.id!==Q&&(x.useProgram(h.program),Q=h.id,p=n=m=!0);c.id!==E&&(E=c.id,n=!0);if(m||a!==T){l.set(x,a,"projectionMatrix");ca.logarithmicDepthBuffer&&l.setValue(x,"logDepthBufFC",2/(Math.log(a.far+1)/Math.LN2));a!==T&&(T=a,p=n=!0);if(c instanceof THREE.ShaderMaterial||c instanceof THREE.MeshPhongMaterial||c instanceof THREE.MeshStandardMaterial||c.envMap)m=l.map.cameraPosition,void 0!==m&&m.setValue(x,W.setFromMatrixPosition(a.matrixWorld));(c instanceof THREE.MeshPhongMaterial||c instanceof THREE.MeshLambertMaterial||c instanceof THREE.MeshBasicMaterial||c instanceof THREE.MeshStandardMaterial||c instanceof THREE.ShaderMaterial||c.skinning)&&l.setValue(x,"viewMatrix",a.matrixWorldInverse);l.set(x,N,"toneMappingExposure");l.set(x,N,"toneMappingWhitePoint");}c.skinning&&(l.setOptional(x,d,"bindMatrix"),l.setOptional(x,d,"bindMatrixInverse"),m=d.skeleton)&&(ca.floatVertexTextures&&m.useVertexTexture?(l.set(x,m,"boneTexture"),l.set(x,m,"boneTextureWidth"),l.set(x,m,"boneTextureHeight")):l.setOptional(x,m,"boneMatrices"));if(n){c.lights&&(n=p,k.ambientLightColor.needsUpdate=n,k.directionalLights.needsUpdate=n,k.pointLights.needsUpdate=n,k.spotLights.needsUpdate=n,k.hemisphereLights.needsUpdate=n);b&&c.fog&&(k.fogColor.value=b.color,b instanceof THREE.Fog?(k.fogNear.value=b.near,k.fogFar.value=b.far):b instanceof THREE.FogExp2&&(k.fogDensity.value=b.density));if(c instanceof THREE.MeshBasicMaterial||c instanceof THREE.MeshLambertMaterial||c instanceof THREE.MeshPhongMaterial||c instanceof THREE.MeshStandardMaterial||c instanceof THREE.MeshDepthMaterial){k.opacity.value=c.opacity;k.diffuse.value=c.color;c.emissive&&k.emissive.value.copy(c.emissive).multiplyScalar(c.emissiveIntensity);k.map.value=c.map;k.specularMap.value=c.specularMap;k.alphaMap.value=c.alphaMap;c.aoMap&&(k.aoMap.value=c.aoMap,k.aoMapIntensity.value=c.aoMapIntensity);var q;c.map?q=c.map:c.specularMap?q=c.specularMap:c.displacementMap?q=c.displacementMap:c.normalMap?q=c.normalMap:c.bumpMap?q=c.bumpMap:c.roughnessMap?q=c.roughnessMap:c.metalnessMap?q=c.metalnessMap:c.alphaMap?q=c.alphaMap:c.emissiveMap&&(q=c.emissiveMap);void 0!==q&&(q instanceof THREE.WebGLRenderTarget&&(q=q.texture),b=q.offset,q=q.repeat,k.offsetRepeat.value.set(b.x,b.y,q.x,q.y));k.envMap.value=c.envMap;k.flipEnvMap.value=c.envMap instanceof THREE.CubeTexture?-1:1;k.reflectivity.value=c.reflectivity;k.refractionRatio.value=c.refractionRatio;}c instanceof THREE.LineBasicMaterial?(k.diffuse.value=c.color,k.opacity.value=c.opacity):c instanceof THREE.LineDashedMaterial?(k.diffuse.value=c.color,k.opacity.value=c.opacity,k.dashSize.value=c.dashSize,k.totalSize.value=c.dashSize+c.gapSize,k.scale.value=c.scale):c instanceof THREE.PointsMaterial?(k.diffuse.value=c.color,k.opacity.value=c.opacity,k.size.value=c.size*Z,k.scale.value=.5*u.clientHeight,k.map.value=c.map,null!==c.map&&(q=c.map.offset,c=c.map.repeat,k.offsetRepeat.value.set(q.x,q.y,c.x,c.y))):c instanceof THREE.MeshLambertMaterial?(c.lightMap&&(k.lightMap.value=c.lightMap,k.lightMapIntensity.value=c.lightMapIntensity),c.emissiveMap&&(k.emissiveMap.value=c.emissiveMap)):c instanceof THREE.MeshPhongMaterial?(k.specular.value=c.specular,k.shininess.value=Math.max(c.shininess,1E-4),c.lightMap&&(k.lightMap.value=c.lightMap,k.lightMapIntensity.value=c.lightMapIntensity),c.emissiveMap&&(k.emissiveMap.value=c.emissiveMap),c.bumpMap&&(k.bumpMap.value=c.bumpMap,k.bumpScale.value=c.bumpScale),c.normalMap&&(k.normalMap.value=c.normalMap,k.normalScale.value.copy(c.normalScale)),c.displacementMap&&(k.displacementMap.value=c.displacementMap,k.displacementScale.value=c.displacementScale,k.displacementBias.value=c.displacementBias)):c instanceof THREE.MeshPhysicalMaterial?(k.clearCoat.value=c.clearCoat,k.clearCoatRoughness.value=c.clearCoatRoughness,v(k,c)):c instanceof THREE.MeshStandardMaterial?v(k,c):c instanceof THREE.MeshDepthMaterial?c.displacementMap&&(k.displacementMap.value=c.displacementMap,k.displacementScale.value=c.displacementScale,k.displacementBias.value=c.displacementBias):c instanceof THREE.MeshNormalMaterial&&(k.opacity.value=c.opacity);THREE.WebGLUniforms.upload(x,e.uniformsList,k,N);}l.set(x,d,"modelViewMatrix");l.set(x,d,"normalMatrix");l.setValue(x,"modelMatrix",d.matrixWorld);e=e.dynamicUniforms;null!==e&&(THREE.WebGLUniforms.evalDynamic(e,k,d,a),THREE.WebGLUniforms.upload(x,e,k,N));return h;}function v(a,b){a.roughness.value=b.roughness;a.metalness.value=b.metalness;b.roughnessMap&&(a.roughnessMap.value=b.roughnessMap);b.metalnessMap&&(a.metalnessMap.value=b.metalnessMap);b.lightMap&&(a.lightMap.value=b.lightMap,a.lightMapIntensity.value=b.lightMapIntensity);b.emissiveMap&&(a.emissiveMap.value=b.emissiveMap);b.bumpMap&&(a.bumpMap.value=b.bumpMap,a.bumpScale.value=b.bumpScale);b.normalMap&&(a.normalMap.value=b.normalMap,a.normalScale.value.copy(b.normalScale));b.displacementMap&&(a.displacementMap.value=b.displacementMap,a.displacementScale.value=b.displacementScale,a.displacementBias.value=b.displacementBias);b.envMap&&(a.envMapIntensity.value=b.envMapIntensity);}function t(a){var b;if(a===THREE.RepeatWrapping)return x.REPEAT;if(a===THREE.ClampToEdgeWrapping)return x.CLAMP_TO_EDGE;if(a===THREE.MirroredRepeatWrapping)return x.MIRRORED_REPEAT;if(a===THREE.NearestFilter)return x.NEAREST;if(a===THREE.NearestMipMapNearestFilter)return x.NEAREST_MIPMAP_NEAREST;if(a===THREE.NearestMipMapLinearFilter)return x.NEAREST_MIPMAP_LINEAR;if(a===THREE.LinearFilter)return x.LINEAR;if(a===THREE.LinearMipMapNearestFilter)return x.LINEAR_MIPMAP_NEAREST;if(a===THREE.LinearMipMapLinearFilter)return x.LINEAR_MIPMAP_LINEAR;if(a===THREE.UnsignedByteType)return x.UNSIGNED_BYTE;if(a===THREE.UnsignedShort4444Type)return x.UNSIGNED_SHORT_4_4_4_4;if(a===THREE.UnsignedShort5551Type)return x.UNSIGNED_SHORT_5_5_5_1;if(a===THREE.UnsignedShort565Type)return x.UNSIGNED_SHORT_5_6_5;if(a===THREE.ByteType)return x.BYTE;if(a===THREE.ShortType)return x.SHORT;if(a===THREE.UnsignedShortType)return x.UNSIGNED_SHORT;if(a===THREE.IntType)return x.INT;if(a===THREE.UnsignedIntType)return x.UNSIGNED_INT;if(a===THREE.FloatType)return x.FLOAT;b=U.get("OES_texture_half_float");if(null!==b&&a===THREE.HalfFloatType)return b.HALF_FLOAT_OES;if(a===THREE.AlphaFormat)return x.ALPHA;if(a===THREE.RGBFormat)return x.RGB;if(a===THREE.RGBAFormat)return x.RGBA;if(a===THREE.LuminanceFormat)return x.LUMINANCE;if(a===THREE.LuminanceAlphaFormat)return x.LUMINANCE_ALPHA;if(a===THREE.DepthFormat)return x.DEPTH_COMPONENT;if(a===THREE.AddEquation)return x.FUNC_ADD;if(a===THREE.SubtractEquation)return x.FUNC_SUBTRACT;if(a===THREE.ReverseSubtractEquation)return x.FUNC_REVERSE_SUBTRACT;if(a===THREE.ZeroFactor)return x.ZERO;if(a===THREE.OneFactor)return x.ONE;if(a===THREE.SrcColorFactor)return x.SRC_COLOR;if(a===THREE.OneMinusSrcColorFactor)return x.ONE_MINUS_SRC_COLOR;if(a===THREE.SrcAlphaFactor)return x.SRC_ALPHA;if(a===THREE.OneMinusSrcAlphaFactor)return x.ONE_MINUS_SRC_ALPHA;if(a===THREE.DstAlphaFactor)return x.DST_ALPHA;if(a===THREE.OneMinusDstAlphaFactor)return x.ONE_MINUS_DST_ALPHA;if(a===THREE.DstColorFactor)return x.DST_COLOR;if(a===THREE.OneMinusDstColorFactor)return x.ONE_MINUS_DST_COLOR;if(a===THREE.SrcAlphaSaturateFactor)return x.SRC_ALPHA_SATURATE;b=U.get("WEBGL_compressed_texture_s3tc");if(null!==b){if(a===THREE.RGB_S3TC_DXT1_Format)return b.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===THREE.RGBA_S3TC_DXT1_Format)return b.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===THREE.RGBA_S3TC_DXT3_Format)return b.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===THREE.RGBA_S3TC_DXT5_Format)return b.COMPRESSED_RGBA_S3TC_DXT5_EXT;}b=U.get("WEBGL_compressed_texture_pvrtc");if(null!==b){if(a===THREE.RGB_PVRTC_4BPPV1_Format)return b.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===THREE.RGB_PVRTC_2BPPV1_Format)return b.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===THREE.RGBA_PVRTC_4BPPV1_Format)return b.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===THREE.RGBA_PVRTC_2BPPV1_Format)return b.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;}b=U.get("WEBGL_compressed_texture_etc1");if(null!==b&&a===THREE.RGB_ETC1_Format)return b.COMPRESSED_RGB_ETC1_WEBGL;b=U.get("EXT_blend_minmax");if(null!==b){if(a===THREE.MinEquation)return b.MIN_EXT;if(a===THREE.MaxEquation)return b.MAX_EXT;}return 0;}console.log("THREE.WebGLRenderer",THREE.REVISION);a=a||{};var u=void 0!==a.canvas?a.canvas:document.createElementNS("http://www.w3.org/1999/xhtml","canvas"),D=void 0!==a.context?a.context:null,w=void 0!==a.alpha?a.alpha:!1,I=void 0!==a.depth?a.depth:!0,z=void 0!==a.stencil?a.stencil:!0,y=void 0!==a.antialias?a.antialias:!1,A=void 0!==a.premultipliedAlpha?a.premultipliedAlpha:!0,G=void 0!==a.preserveDrawingBuffer?a.preserveDrawingBuffer:!1,B=[],F=[],J=-1,P=[],K=-1,H=new Float32Array(8),M=[],O=[];this.domElement=u;this.context=null;this.sortObjects=this.autoClearStencil=this.autoClearDepth=this.autoClearColor=this.autoClear=!0;this.clippingPlanes=[];this.localClippingEnabled=!1;this.gammaFactor=2;this.physicallyCorrectLights=this.gammaOutput=this.gammaInput=!1;this.toneMapping=THREE.LinearToneMapping;this.toneMappingWhitePoint=this.toneMappingExposure=1;this.maxMorphTargets=8;this.maxMorphNormals=4;var N=this,Q=null,C=null,L=null,E=-1,$="",T=null,X=new THREE.Vector4(),ea=null,fa=new THREE.Vector4(),ga=0,V=new THREE.Color(0),ba=0,aa=u.width,sa=u.height,Z=1,ua=new THREE.Vector4(0,0,aa,sa),xa=!1,na=new THREE.Vector4(0,0,aa,sa),wa=new THREE.Frustum(),da=new THREE.WebGLClipping(),ra=!1,va=!1,ka=new THREE.Sphere(),qa=new THREE.Matrix4(),W=new THREE.Vector3(),S={hash:"",ambient:[0,0,0],directional:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadowMap:[],spotShadowMatrix:[],point:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],shadows:[]},ia={calls:0,vertices:0,faces:0,points:0};this.info={render:ia,memory:{geometries:0,textures:0},programs:null};var x;try{w={alpha:w,depth:I,stencil:z,antialias:y,premultipliedAlpha:A,preserveDrawingBuffer:G};x=D||u.getContext("webgl",w)||u.getContext("experimental-webgl",w);if(null===x){if(null!==u.getContext("webgl"))throw"Error creating WebGL context with your selected attributes.";throw"Error creating WebGL context.";}void 0===x.getShaderPrecisionFormat&&(x.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1};});u.addEventListener("webglcontextlost",e,!1);}catch(za){console.error("THREE.WebGLRenderer: "+za);}var U=new THREE.WebGLExtensions(x);U.get("WEBGL_depth_texture");U.get("OES_texture_float");U.get("OES_texture_float_linear");U.get("OES_texture_half_float");U.get("OES_texture_half_float_linear");U.get("OES_standard_derivatives");U.get("ANGLE_instanced_arrays");U.get("OES_element_index_uint")&&(THREE.BufferGeometry.MaxIndex=4294967296);var ca=new THREE.WebGLCapabilities(x,U,a),R=new THREE.WebGLState(x,U,t),Y=new THREE.WebGLProperties(),la=new THREE.WebGLTextures(x,U,R,Y,ca,t,this.info),ha=new THREE.WebGLObjects(x,Y,this.info),oa=new THREE.WebGLPrograms(this,ca),ta=new THREE.WebGLLights();this.info.programs=oa.programs;var Aa=new THREE.WebGLBufferRenderer(x,U,ia),Ba=new THREE.WebGLIndexedBufferRenderer(x,U,ia),Ca=new THREE.OrthographicCamera(-1,1,1,-1,0,1),ma=new THREE.PerspectiveCamera(),pa=new THREE.Mesh(new THREE.PlaneBufferGeometry(2,2),new THREE.MeshBasicMaterial({depthTest:!1,depthWrite:!1,fog:!1}));a=THREE.ShaderLib.cube;var ja=new THREE.Mesh(new THREE.BoxBufferGeometry(5,5,5),new THREE.ShaderMaterial({uniforms:a.uniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:THREE.BackSide,depthTest:!1,depthWrite:!1,fog:!1}));c();this.context=x;this.capabilities=ca;this.extensions=U;this.properties=Y;this.state=R;var ya=new THREE.WebGLShadowMap(this,S,ha,ca);this.shadowMap=ya;var Da=new THREE.SpritePlugin(this,M),Ea=new THREE.LensFlarePlugin(this,O);this.getContext=function(){return x;};this.getContextAttributes=function(){return x.getContextAttributes();};this.forceContextLoss=function(){U.get("WEBGL_lose_context").loseContext();};this.getMaxAnisotropy=function(){return ca.getMaxAnisotropy();};this.getPrecision=function(){return ca.precision;};this.getPixelRatio=function(){return Z;};this.setPixelRatio=function(a){void 0!==a&&(Z=a,this.setSize(na.z,na.w,!1));};this.getSize=function(){return{width:aa,height:sa};};this.setSize=function(a,b,c){aa=a;sa=b;u.width=a*Z;u.height=b*Z;!1!==c&&(u.style.width=a+"px",u.style.height=b+"px");this.setViewport(0,0,a,b);};this.setViewport=function(a,b,c,d){R.viewport(na.set(a,b,c,d));};this.setScissor=function(a,b,c,d){R.scissor(ua.set(a,b,c,d));};this.setScissorTest=function(a){R.setScissorTest(xa=a);};this.getClearColor=function(){return V;};this.setClearColor=function(a,c){V.set(a);ba=void 0!==c?c:1;b(V.r,V.g,V.b,ba);};this.getClearAlpha=function(){return ba;};this.setClearAlpha=function(a){ba=a;b(V.r,V.g,V.b,ba);};this.clear=function(a,b,c){var d=0;if(void 0===a||a)d|=x.COLOR_BUFFER_BIT;if(void 0===b||b)d|=x.DEPTH_BUFFER_BIT;if(void 0===c||c)d|=x.STENCIL_BUFFER_BIT;x.clear(d);};this.clearColor=function(){this.clear(!0,!1,!1);};this.clearDepth=function(){this.clear(!1,!0,!1);};this.clearStencil=function(){this.clear(!1,!1,!0);};this.clearTarget=function(a,b,c,d){this.setRenderTarget(a);this.clear(b,c,d);};this.resetGLState=d;this.dispose=function(){P=[];K=-1;F=[];J=-1;u.removeEventListener("webglcontextlost",e,!1);};this.renderBufferImmediate=function(a,b,c){R.initAttributes();var d=Y.get(a);a.hasPositions&&!d.position&&(d.position=x.createBuffer());a.hasNormals&&!d.normal&&(d.normal=x.createBuffer());a.hasUvs&&!d.uv&&(d.uv=x.createBuffer());a.hasColors&&!d.color&&(d.color=x.createBuffer());b=b.getAttributes();a.hasPositions&&(x.bindBuffer(x.ARRAY_BUFFER,d.position),x.bufferData(x.ARRAY_BUFFER,a.positionArray,x.DYNAMIC_DRAW),R.enableAttribute(b.position),x.vertexAttribPointer(b.position,3,x.FLOAT,!1,0,0));if(a.hasNormals){x.bindBuffer(x.ARRAY_BUFFER,d.normal);if("MeshPhongMaterial"!==c.type&&"MeshStandardMaterial"!==c.type&&"MeshPhysicalMaterial"!==c.type&&c.shading===THREE.FlatShading)for(var e=0,g=3*a.count;e<g;e+=9){var f=a.normalArray,h=(f[e+0]+f[e+3]+f[e+6])/3,k=(f[e+1]+f[e+4]+f[e+7])/3,l=(f[e+2]+f[e+5]+f[e+8])/3;f[e+0]=h;f[e+1]=k;f[e+2]=l;f[e+3]=h;f[e+4]=k;f[e+5]=l;f[e+6]=h;f[e+7]=k;f[e+8]=l;}x.bufferData(x.ARRAY_BUFFER,a.normalArray,x.DYNAMIC_DRAW);R.enableAttribute(b.normal);x.vertexAttribPointer(b.normal,3,x.FLOAT,!1,0,0);}a.hasUvs&&c.map&&(x.bindBuffer(x.ARRAY_BUFFER,d.uv),x.bufferData(x.ARRAY_BUFFER,a.uvArray,x.DYNAMIC_DRAW),R.enableAttribute(b.uv),x.vertexAttribPointer(b.uv,2,x.FLOAT,!1,0,0));a.hasColors&&c.vertexColors!==THREE.NoColors&&(x.bindBuffer(x.ARRAY_BUFFER,d.color),x.bufferData(x.ARRAY_BUFFER,a.colorArray,x.DYNAMIC_DRAW),R.enableAttribute(b.color),x.vertexAttribPointer(b.color,3,x.FLOAT,!1,0,0));R.disableUnusedAttributes();x.drawArrays(x.TRIANGLES,0,a.count);a.count=0;};this.renderBufferDirect=function(a,b,c,d,e,f){r(d);var g=s(a,b,d,e),k=!1;a=c.id+"_"+g.id+"_"+d.wireframe;a!==$&&($=a,k=!0);b=e.morphTargetInfluences;if(void 0!==b){a=[];for(var l=0,k=b.length;l<k;l++){var n=b[l];a.push([n,l]);}a.sort(h);8<a.length&&(a.length=8);for(var m=c.morphAttributes,l=0,k=a.length;l<k;l++){n=a[l],H[l]=n[0],0!==n[0]?(b=n[1],!0===d.morphTargets&&m.position&&c.addAttribute("morphTarget"+l,m.position[b]),!0===d.morphNormals&&m.normal&&c.addAttribute("morphNormal"+l,m.normal[b])):(!0===d.morphTargets&&c.removeAttribute("morphTarget"+l),!0===d.morphNormals&&c.removeAttribute("morphNormal"+l));}g.getUniforms().setValue(x,"morphTargetInfluences",H);k=!0;}b=c.index;l=c.attributes.position;!0===d.wireframe&&(b=ha.getWireframeAttribute(c));null!==b?(a=Ba,a.setIndex(b)):a=Aa;if(k){a:{var k=void 0,p;if(c instanceof THREE.InstancedBufferGeometry&&(p=U.get("ANGLE_instanced_arrays"),null===p)){console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");break a;}void 0===k&&(k=0);R.initAttributes();var n=c.attributes,g=g.getAttributes(),m=d.defaultAttributeValues,q;for(q in g){var u=g[q];if(0<=u){var w=n[q];if(void 0!==w){var t=x.FLOAT,D=w.array,v=w.normalized;D instanceof Float32Array?t=x.FLOAT:D instanceof Float64Array?console.warn("Unsupported data buffer format: Float64Array"):D instanceof Uint16Array?t=x.UNSIGNED_SHORT:D instanceof Int16Array?t=x.SHORT:D instanceof Uint32Array?t=x.UNSIGNED_INT:D instanceof Int32Array?t=x.INT:D instanceof Int8Array?t=x.BYTE:D instanceof Uint8Array&&(t=x.UNSIGNED_BYTE);var D=w.itemSize,y=ha.getAttributeBuffer(w);if(w instanceof THREE.InterleavedBufferAttribute){var z=w.data,A=z.stride,w=w.offset;z instanceof THREE.InstancedInterleavedBuffer?(R.enableAttributeAndDivisor(u,z.meshPerAttribute,p),void 0===c.maxInstancedCount&&(c.maxInstancedCount=z.meshPerAttribute*z.count)):R.enableAttribute(u);x.bindBuffer(x.ARRAY_BUFFER,y);x.vertexAttribPointer(u,D,t,v,A*z.array.BYTES_PER_ELEMENT,(k*A+w)*z.array.BYTES_PER_ELEMENT);}else w instanceof THREE.InstancedBufferAttribute?(R.enableAttributeAndDivisor(u,w.meshPerAttribute,p),void 0===c.maxInstancedCount&&(c.maxInstancedCount=w.meshPerAttribute*w.count)):R.enableAttribute(u),x.bindBuffer(x.ARRAY_BUFFER,y),x.vertexAttribPointer(u,D,t,v,0,k*D*w.array.BYTES_PER_ELEMENT);}else if(void 0!==m&&(t=m[q],void 0!==t))switch(t.length){case 2:x.vertexAttrib2fv(u,t);break;case 3:x.vertexAttrib3fv(u,t);break;case 4:x.vertexAttrib4fv(u,t);break;default:x.vertexAttrib1fv(u,t);}}}R.disableUnusedAttributes();}null!==b&&x.bindBuffer(x.ELEMENT_ARRAY_BUFFER,ha.getAttributeBuffer(b));}p=Infinity;null!==b?p=b.count:void 0!==l&&(p=l.count);q=c.drawRange.start;b=c.drawRange.count;l=null!==f?f.start:0;k=null!==f?f.count:Infinity;f=Math.max(0,q,l);p=Math.min(0+p,q+b,l+k)-1;p=Math.max(0,p-f+1);if(e instanceof THREE.Mesh){if(!0===d.wireframe)R.setLineWidth(d.wireframeLinewidth*(null===C?Z:1)),a.setMode(x.LINES);else switch(e.drawMode){case THREE.TrianglesDrawMode:a.setMode(x.TRIANGLES);break;case THREE.TriangleStripDrawMode:a.setMode(x.TRIANGLE_STRIP);break;case THREE.TriangleFanDrawMode:a.setMode(x.TRIANGLE_FAN);}}else e instanceof THREE.Line?(d=d.linewidth,void 0===d&&(d=1),R.setLineWidth(d*(null===C?Z:1)),e instanceof THREE.LineSegments?a.setMode(x.LINES):a.setMode(x.LINE_STRIP)):e instanceof THREE.Points&&a.setMode(x.POINTS);c instanceof THREE.InstancedBufferGeometry?0<c.maxInstancedCount&&a.renderInstances(c,f,p):a.render(f,p);};this.render=function(a,c,d,e){if(!1===c instanceof THREE.Camera)console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");else{var f=a.fog;$="";E=-1;T=null;!0===a.autoUpdate&&a.updateMatrixWorld();null===c.parent&&c.updateMatrixWorld();c.matrixWorldInverse.getInverse(c.matrixWorld);qa.multiplyMatrices(c.projectionMatrix,c.matrixWorldInverse);wa.setFromMatrix(qa);B.length=0;K=J=-1;M.length=0;O.length=0;va=this.localClippingEnabled;ra=da.init(this.clippingPlanes,va,c);n(a,c);F.length=J+1;P.length=K+1;!0===N.sortObjects&&(F.sort(k),P.sort(l));ra&&da.beginShadows();for(var g=B,h=0,p=0,m=g.length;p<m;p++){var u=g[p];u.castShadow&&(S.shadows[h++]=u);}S.shadows.length=h;ya.render(a,c);for(var g=B,r=u=0,s=0,w,t,D,H,v=c.matrixWorldInverse,y=0,z=0,A=0,L=0,h=0,p=g.length;h<p;h++){if(m=g[h],w=m.color,t=m.intensity,D=m.distance,H=m.shadow&&m.shadow.map?m.shadow.map.texture:null,m instanceof THREE.AmbientLight)u+=w.r*t,r+=w.g*t,s+=w.b*t;else if(m instanceof THREE.DirectionalLight){var C=ta.get(m);C.color.copy(m.color).multiplyScalar(m.intensity);C.direction.setFromMatrixPosition(m.matrixWorld);W.setFromMatrixPosition(m.target.matrixWorld);C.direction.sub(W);C.direction.transformDirection(v);if(C.shadow=m.castShadow)C.shadowBias=m.shadow.bias,C.shadowRadius=m.shadow.radius,C.shadowMapSize=m.shadow.mapSize;S.directionalShadowMap[y]=H;S.directionalShadowMatrix[y]=m.shadow.matrix;S.directional[y++]=C;}else if(m instanceof THREE.SpotLight){C=ta.get(m);C.position.setFromMatrixPosition(m.matrixWorld);C.position.applyMatrix4(v);C.color.copy(w).multiplyScalar(t);C.distance=D;C.direction.setFromMatrixPosition(m.matrixWorld);W.setFromMatrixPosition(m.target.matrixWorld);C.direction.sub(W);C.direction.transformDirection(v);C.coneCos=Math.cos(m.angle);C.penumbraCos=Math.cos(m.angle*(1-m.penumbra));C.decay=0===m.distance?0:m.decay;if(C.shadow=m.castShadow)C.shadowBias=m.shadow.bias,C.shadowRadius=m.shadow.radius,C.shadowMapSize=m.shadow.mapSize;S.spotShadowMap[A]=H;S.spotShadowMatrix[A]=m.shadow.matrix;S.spot[A++]=C;}else if(m instanceof THREE.PointLight){C=ta.get(m);C.position.setFromMatrixPosition(m.matrixWorld);C.position.applyMatrix4(v);C.color.copy(m.color).multiplyScalar(m.intensity);C.distance=m.distance;C.decay=0===m.distance?0:m.decay;if(C.shadow=m.castShadow)C.shadowBias=m.shadow.bias,C.shadowRadius=m.shadow.radius,C.shadowMapSize=m.shadow.mapSize;S.pointShadowMap[z]=H;void 0===S.pointShadowMatrix[z]&&(S.pointShadowMatrix[z]=new THREE.Matrix4());W.setFromMatrixPosition(m.matrixWorld).negate();S.pointShadowMatrix[z].identity().setPosition(W);S.point[z++]=C;}else m instanceof THREE.HemisphereLight&&(C=ta.get(m),C.direction.setFromMatrixPosition(m.matrixWorld),C.direction.transformDirection(v),C.direction.normalize(),C.skyColor.copy(m.color).multiplyScalar(t),C.groundColor.copy(m.groundColor).multiplyScalar(t),S.hemi[L++]=C);}S.ambient[0]=u;S.ambient[1]=r;S.ambient[2]=s;S.directional.length=y;S.spot.length=A;S.point.length=z;S.hemi.length=L;S.hash=y+","+z+","+A+","+L+","+S.shadows.length;ra&&da.endShadows();ia.calls=0;ia.vertices=0;ia.faces=0;ia.points=0;void 0===d&&(d=null);this.setRenderTarget(d);g=a.background;null===g?b(V.r,V.g,V.b,ba):g instanceof THREE.Color&&b(g.r,g.g,g.b,1);(this.autoClear||e)&&this.clear(this.autoClearColor,this.autoClearDepth,this.autoClearStencil);g instanceof THREE.CubeTexture?(ma.projectionMatrix.copy(c.projectionMatrix),ma.matrixWorld.extractRotation(c.matrixWorld),ma.matrixWorldInverse.getInverse(ma.matrixWorld),ja.material.uniforms.tCube.value=g,ja.modelViewMatrix.multiplyMatrices(ma.matrixWorldInverse,ja.matrixWorld),ha.update(ja),N.renderBufferDirect(ma,null,ja.geometry,ja.material,ja,null)):g instanceof THREE.Texture&&(pa.material.map=g,ha.update(pa),N.renderBufferDirect(Ca,null,pa.geometry,pa.material,pa,null));a.overrideMaterial?(e=a.overrideMaterial,q(F,c,f,e),q(P,c,f,e)):(R.setBlending(THREE.NoBlending),q(F,c,f),q(P,c,f));Da.render(a,c);Ea.render(a,c,fa);d&&la.updateRenderTargetMipmap(d);R.setDepthTest(!0);R.setDepthWrite(!0);R.setColorWrite(!0);}};this.setFaceCulling=function(a,b){R.setCullFace(a);R.setFlipSided(b===THREE.FrontFaceDirectionCW);};this.allocTextureUnit=function(){var a=ga;a>=ca.maxTextures&&console.warn("WebGLRenderer: trying to use "+a+" texture units while this GPU supports only "+ca.maxTextures);ga+=1;return a;};this.setTexture2D=function(){var a=!1;return function(b,c){b instanceof THREE.WebGLRenderTarget&&(a||(console.warn("THREE.WebGLRenderer.setTexture2D: don't use render targets as textures. Use their .texture property instead."),a=!0),b=b.texture);la.setTexture2D(b,c);};}();this.setTexture=function(){var a=!1;return function(b,c){a||(console.warn("THREE.WebGLRenderer: .setTexture is deprecated, use setTexture2D instead."),a=!0);la.setTexture2D(b,c);};}();this.setTextureCube=function(){var a=!1;return function(b,c){b instanceof THREE.WebGLRenderTargetCube&&(a||(console.warn("THREE.WebGLRenderer.setTextureCube: don't use cube render targets as textures. Use their .texture property instead."),a=!0),b=b.texture);b instanceof THREE.CubeTexture||Array.isArray(b.image)&&6===b.image.length?la.setTextureCube(b,c):la.setTextureCubeDynamic(b,c);};}();this.getCurrentRenderTarget=function(){return C;};this.setRenderTarget=function(a){(C=a)&&void 0===Y.get(a).__webglFramebuffer&&la.setupRenderTarget(a);var b=a instanceof THREE.WebGLRenderTargetCube,c;a?(c=Y.get(a),c=b?c.__webglFramebuffer[a.activeCubeFace]:c.__webglFramebuffer,X.copy(a.scissor),ea=a.scissorTest,fa.copy(a.viewport)):(c=null,X.copy(ua).multiplyScalar(Z),ea=xa,fa.copy(na).multiplyScalar(Z));L!==c&&(x.bindFramebuffer(x.FRAMEBUFFER,c),L=c);R.scissor(X);R.setScissorTest(ea);R.viewport(fa);b&&(b=Y.get(a.texture),x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_CUBE_MAP_POSITIVE_X+a.activeCubeFace,b.__webglTexture,a.activeMipMapLevel));};this.readRenderTargetPixels=function(a,b,c,d,e,g){if(!1===a instanceof THREE.WebGLRenderTarget)console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");else{var f=Y.get(a).__webglFramebuffer;if(f){var h=!1;f!==L&&(x.bindFramebuffer(x.FRAMEBUFFER,f),h=!0);try{var k=a.texture;k.format!==THREE.RGBAFormat&&t(k.format)!==x.getParameter(x.IMPLEMENTATION_COLOR_READ_FORMAT)?console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."):k.type===THREE.UnsignedByteType||t(k.type)===x.getParameter(x.IMPLEMENTATION_COLOR_READ_TYPE)||k.type===THREE.FloatType&&U.get("WEBGL_color_buffer_float")||k.type===THREE.HalfFloatType&&U.get("EXT_color_buffer_half_float")?x.checkFramebufferStatus(x.FRAMEBUFFER)===x.FRAMEBUFFER_COMPLETE?0<=b&&b<=a.width-d&&0<=c&&c<=a.height-e&&x.readPixels(b,c,d,e,t(k.format),t(k.type),g):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete."):console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");}finally{h&&x.bindFramebuffer(x.FRAMEBUFFER,L);}}}};};THREE.WebGLRenderTarget=function(a,b,c){this.uuid=THREE.Math.generateUUID();this.width=a;this.height=b;this.scissor=new THREE.Vector4(0,0,a,b);this.scissorTest=!1;this.viewport=new THREE.Vector4(0,0,a,b);c=c||{};void 0===c.minFilter&&(c.minFilter=THREE.LinearFilter);this.texture=new THREE.Texture(void 0,void 0,c.wrapS,c.wrapT,c.magFilter,c.minFilter,c.format,c.type,c.anisotropy,c.encoding);this.depthBuffer=void 0!==c.depthBuffer?c.depthBuffer:!0;this.stencilBuffer=void 0!==c.stencilBuffer?c.stencilBuffer:!0;this.depthTexture=null;};Object.assign(THREE.WebGLRenderTarget.prototype,THREE.EventDispatcher.prototype,{setSize:function setSize(a,b){if(this.width!==a||this.height!==b)this.width=a,this.height=b,this.dispose();this.viewport.set(0,0,a,b);this.scissor.set(0,0,a,b);},clone:function clone(){return new this.constructor().copy(this);},copy:function copy(a){this.width=a.width;this.height=a.height;this.viewport.copy(a.viewport);this.texture=a.texture.clone();this.depthBuffer=a.depthBuffer;this.stencilBuffer=a.stencilBuffer;this.depthTexture=a.depthTexture;return this;},dispose:function dispose(){this.dispatchEvent({type:"dispose"});}});THREE.WebGLRenderTargetCube=function(a,b,c){THREE.WebGLRenderTarget.call(this,a,b,c);this.activeMipMapLevel=this.activeCubeFace=0;};THREE.WebGLRenderTargetCube.prototype=Object.create(THREE.WebGLRenderTarget.prototype);THREE.WebGLRenderTargetCube.prototype.constructor=THREE.WebGLRenderTargetCube;THREE.WebGLBufferRenderer=function(a,b,c){var d;this.setMode=function(a){d=a;};this.render=function(b,f){a.drawArrays(d,b,f);c.calls++;c.vertices+=f;d===a.TRIANGLES&&(c.faces+=f/3);};this.renderInstances=function(e){var f=b.get("ANGLE_instanced_arrays");if(null===f)console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");else{var g=e.attributes.position,h=0,h=g instanceof THREE.InterleavedBufferAttribute?g.data.count:g.count;f.drawArraysInstancedANGLE(d,0,h,e.maxInstancedCount);c.calls++;c.vertices+=h*e.maxInstancedCount;d===a.TRIANGLES&&(c.faces+=e.maxInstancedCount*h/3);}};};THREE.WebGLClipping=function(){function a(){l.value!==d&&(l.value=d,l.needsUpdate=0<e);c.numPlanes=e;}function b(a,b,d,e){var g=null!==a?a.length:0,f=null;if(0!==g){f=l.value;if(!0!==e||null===f){e=d+4*g;b=b.matrixWorldInverse;k.getNormalMatrix(b);if(null===f||f.length<e)f=new Float32Array(e);for(e=0;e!==g;++e,d+=4){h.copy(a[e]).applyMatrix4(b,k),h.normal.toArray(f,d),f[d+3]=h.constant;}}l.value=f;l.needsUpdate=!0;}c.numPlanes=g;return f;}var c=this,d=null,e=0,f=!1,g=!1,h=new THREE.Plane(),k=new THREE.Matrix3(),l={value:null,needsUpdate:!1};this.uniform=l;this.numPlanes=0;this.init=function(a,c,g){var h=0!==a.length||c||0!==e||f;f=c;d=b(a,g,0);e=a.length;return h;};this.beginShadows=function(){g=!0;b(null);};this.endShadows=function(){g=!1;a();};this.setState=function(c,h,k,q,r){if(!f||null===c||0===c.length||g&&!h)g?b(null):a();else{h=g?0:e;var s=4*h,v=q.clippingState||null;l.value=v;v=b(c,k,s,r);for(c=0;c!==s;++c){v[c]=d[c];}q.clippingState=v;this.numPlanes+=h;}};};THREE.WebGLIndexedBufferRenderer=function(a,b,c){var d,e,f;this.setMode=function(a){d=a;};this.setIndex=function(c){c.array instanceof Uint32Array&&b.get("OES_element_index_uint")?(e=a.UNSIGNED_INT,f=4):(e=a.UNSIGNED_SHORT,f=2);};this.render=function(b,h){a.drawElements(d,h,e,b*f);c.calls++;c.vertices+=h;d===a.TRIANGLES&&(c.faces+=h/3);};this.renderInstances=function(g,h,k){var l=b.get("ANGLE_instanced_arrays");null===l?console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."):(l.drawElementsInstancedANGLE(d,k,e,h*f,g.maxInstancedCount),c.calls++,c.vertices+=k*g.maxInstancedCount,d===a.TRIANGLES&&(c.faces+=g.maxInstancedCount*k/3));};};THREE.WebGLExtensions=function(a){var b={};this.get=function(c){if(void 0!==b[c])return b[c];var d;switch(c){case"WEBGL_depth_texture":d=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":d=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":d=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":d=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;case"WEBGL_compressed_texture_etc1":d=a.getExtension("WEBGL_compressed_texture_etc1");break;default:d=a.getExtension(c);}null===d&&console.warn("THREE.WebGLRenderer: "+c+" extension not supported.");return b[c]=d;};};THREE.WebGLCapabilities=function(a,b,c){function d(b){if("highp"===b){if(0<a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision&&0<a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision)return"highp";b="mediump";}return"mediump"===b&&0<a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision&&0<a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision?"mediump":"lowp";}var e;this.getMaxAnisotropy=function(){if(void 0!==e)return e;var c=b.get("EXT_texture_filter_anisotropic");return e=null!==c?a.getParameter(c.MAX_TEXTURE_MAX_ANISOTROPY_EXT):0;};this.getMaxPrecision=d;this.precision=void 0!==c.precision?c.precision:"highp";this.logarithmicDepthBuffer=void 0!==c.logarithmicDepthBuffer?c.logarithmicDepthBuffer:!1;this.maxTextures=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS);this.maxVertexTextures=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS);this.maxTextureSize=a.getParameter(a.MAX_TEXTURE_SIZE);this.maxCubemapSize=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE);this.maxAttributes=a.getParameter(a.MAX_VERTEX_ATTRIBS);this.maxVertexUniforms=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS);this.maxVaryings=a.getParameter(a.MAX_VARYING_VECTORS);this.maxFragmentUniforms=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS);this.vertexTextures=0<this.maxVertexTextures;this.floatFragmentTextures=!!b.get("OES_texture_float");this.floatVertexTextures=this.vertexTextures&&this.floatFragmentTextures;c=d(this.precision);c!==this.precision&&(console.warn("THREE.WebGLRenderer:",this.precision,"not supported, using",c,"instead."),this.precision=c);this.logarithmicDepthBuffer&&(this.logarithmicDepthBuffer=!!b.get("EXT_frag_depth"));};THREE.WebGLGeometries=function(a,b,c){function d(a){var h=a.target;a=f[h.id];null!==a.index&&e(a.index);var k=a.attributes,l;for(l in k){e(k[l]);}h.removeEventListener("dispose",d);delete f[h.id];l=b.get(h);l.wireframe&&e(l.wireframe);b.delete(h);h=b.get(a);h.wireframe&&e(h.wireframe);b.delete(a);c.memory.geometries--;}function e(c){var d;d=c instanceof THREE.InterleavedBufferAttribute?b.get(c.data).__webglBuffer:b.get(c).__webglBuffer;void 0!==d&&(a.deleteBuffer(d),c instanceof THREE.InterleavedBufferAttribute?b.delete(c.data):b.delete(c));}var f={};this.get=function(a){var b=a.geometry;if(void 0!==f[b.id])return f[b.id];b.addEventListener("dispose",d);var e;b instanceof THREE.BufferGeometry?e=b:b instanceof THREE.Geometry&&(void 0===b._bufferGeometry&&(b._bufferGeometry=new THREE.BufferGeometry().setFromObject(a)),e=b._bufferGeometry);f[b.id]=e;c.memory.geometries++;return e;};};THREE.WebGLLights=function(){var a={};this.get=function(b){if(void 0!==a[b.id])return a[b.id];var c;switch(b.type){case"DirectionalLight":c={direction:new THREE.Vector3(),color:new THREE.Color(),shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new THREE.Vector2()};break;case"SpotLight":c={position:new THREE.Vector3(),direction:new THREE.Vector3(),color:new THREE.Color(),distance:0,coneCos:0,penumbraCos:0,decay:0,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new THREE.Vector2()};break;case"PointLight":c={position:new THREE.Vector3(),color:new THREE.Color(),distance:0,decay:0,shadow:!1,shadowBias:0,shadowRadius:1,shadowMapSize:new THREE.Vector2()};break;case"HemisphereLight":c={direction:new THREE.Vector3(),skyColor:new THREE.Color(),groundColor:new THREE.Color()};}return a[b.id]=c;};};THREE.WebGLObjects=function(a,b,c){function d(c,d){var e=c instanceof THREE.InterleavedBufferAttribute?c.data:c,f=b.get(e);void 0===f.__webglBuffer?(f.__webglBuffer=a.createBuffer(),a.bindBuffer(d,f.__webglBuffer),a.bufferData(d,e.array,e.dynamic?a.DYNAMIC_DRAW:a.STATIC_DRAW),f.version=e.version):f.version!==e.version&&(a.bindBuffer(d,f.__webglBuffer),!1===e.dynamic||-1===e.updateRange.count?a.bufferSubData(d,0,e.array):0===e.updateRange.count?console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually."):(a.bufferSubData(d,e.updateRange.offset*e.array.BYTES_PER_ELEMENT,e.array.subarray(e.updateRange.offset,e.updateRange.offset+e.updateRange.count)),e.updateRange.count=0),f.version=e.version);}function e(a,b,c){if(b>c){var d=b;b=c;c=d;}d=a[b];return void 0===d?(a[b]=[c],!0):-1===d.indexOf(c)?(d.push(c),!0):!1;}var f=new THREE.WebGLGeometries(a,b,c);this.getAttributeBuffer=function(a){return a instanceof THREE.InterleavedBufferAttribute?b.get(a.data).__webglBuffer:b.get(a).__webglBuffer;};this.getWireframeAttribute=function(c){var f=b.get(c);if(void 0!==f.wireframe)return f.wireframe;var k=[],l=c.index,m=c.attributes;c=m.position;if(null!==l)for(var m={},l=l.array,p=0,n=l.length;p<n;p+=3){var q=l[p+0],r=l[p+1],s=l[p+2];e(m,q,r)&&k.push(q,r);e(m,r,s)&&k.push(r,s);e(m,s,q)&&k.push(s,q);}else for(l=m.position.array,p=0,n=l.length/3-1;p<n;p+=3){q=p+0,r=p+1,s=p+2,k.push(q,r,r,s,s,q);}k=new THREE.BufferAttribute(new(65535<c.count?Uint32Array:Uint16Array)(k),1);d(k,a.ELEMENT_ARRAY_BUFFER);return f.wireframe=k;};this.update=function(b){var c=f.get(b);b.geometry instanceof THREE.Geometry&&c.updateFromObject(b);b=c.index;var e=c.attributes;null!==b&&d(b,a.ELEMENT_ARRAY_BUFFER);for(var l in e){d(e[l],a.ARRAY_BUFFER);}b=c.morphAttributes;for(l in b){for(var e=b[l],m=0,p=e.length;m<p;m++){d(e[m],a.ARRAY_BUFFER);}}return c;};};THREE.WebGLProgram=function(){function a(a){switch(a){case THREE.LinearEncoding:return["Linear","( value )"];case THREE.sRGBEncoding:return["sRGB","( value )"];case THREE.RGBEEncoding:return["RGBE","( value )"];case THREE.RGBM7Encoding:return["RGBM","( value, 7.0 )"];case THREE.RGBM16Encoding:return["RGBM","( value, 16.0 )"];case THREE.RGBDEncoding:return["RGBD","( value, 256.0 )"];case THREE.GammaEncoding:return["Gamma","( value, float( GAMMA_FACTOR ) )"];default:throw Error("unsupported encoding: "+a);}}function b(b,c){var d=a(c);return"vec4 "+b+"( vec4 value ) { return "+d[0]+"ToLinear"+d[1]+"; }";}function c(b,c){var d=a(c);return"vec4 "+b+"( vec4 value ) { return LinearTo"+d[0]+d[1]+"; }";}function d(a,b){var c;switch(b){case THREE.LinearToneMapping:c="Linear";break;case THREE.ReinhardToneMapping:c="Reinhard";break;case THREE.Uncharted2ToneMapping:c="Uncharted2";break;case THREE.CineonToneMapping:c="OptimizedCineon";break;default:throw Error("unsupported toneMapping: "+b);}return"vec3 "+a+"( vec3 color ) { return "+c+"ToneMapping( color ); }";}function e(a,b,c){a=a||{};return[a.derivatives||b.envMapCubeUV||b.bumpMap||b.normalMap||b.flatShading?"#extension GL_OES_standard_derivatives : enable":"",(a.fragDepth||b.logarithmicDepthBuffer)&&c.get("EXT_frag_depth")?"#extension GL_EXT_frag_depth : enable":"",a.drawBuffers&&c.get("WEBGL_draw_buffers")?"#extension GL_EXT_draw_buffers : require":"",(a.shaderTextureLOD||b.envMap)&&c.get("EXT_shader_texture_lod")?"#extension GL_EXT_shader_texture_lod : enable":""].filter(g).join("\n");}function f(a){var b=[],c;for(c in a){var d=a[c];!1!==d&&b.push("#define "+c+" "+d);}return b.join("\n");}function g(a){return""!==a;}function h(a,b){return a.replace(/NUM_DIR_LIGHTS/g,b.numDirLights).replace(/NUM_SPOT_LIGHTS/g,b.numSpotLights).replace(/NUM_POINT_LIGHTS/g,b.numPointLights).replace(/NUM_HEMI_LIGHTS/g,b.numHemiLights);}function k(a){return a.replace(/#include +<([\w\d.]+)>/g,function(a,b){var c=THREE.ShaderChunk[b];if(void 0===c)throw Error("Can not resolve #include <"+b+">");return k(c);});}function l(a){return a.replace(/for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,function(a,b,c,d){a="";for(b=parseInt(b);b<parseInt(c);b++){a+=d.replace(/\[ i \]/g,"[ "+b+" ]");}return a;});}var m=0;return function(a,n,q,r){var s=a.context,v=q.extensions,t=q.defines,u=q.__webglShader.vertexShader,D=q.__webglShader.fragmentShader,w="SHADOWMAP_TYPE_BASIC";r.shadowMapType===THREE.PCFShadowMap?w="SHADOWMAP_TYPE_PCF":r.shadowMapType===THREE.PCFSoftShadowMap&&(w="SHADOWMAP_TYPE_PCF_SOFT");var I="ENVMAP_TYPE_CUBE",z="ENVMAP_MODE_REFLECTION",y="ENVMAP_BLENDING_MULTIPLY";if(r.envMap){switch(q.envMap.mapping){case THREE.CubeReflectionMapping:case THREE.CubeRefractionMapping:I="ENVMAP_TYPE_CUBE";break;case THREE.CubeUVReflectionMapping:case THREE.CubeUVRefractionMapping:I="ENVMAP_TYPE_CUBE_UV";break;case THREE.EquirectangularReflectionMapping:case THREE.EquirectangularRefractionMapping:I="ENVMAP_TYPE_EQUIREC";break;case THREE.SphericalReflectionMapping:I="ENVMAP_TYPE_SPHERE";}switch(q.envMap.mapping){case THREE.CubeRefractionMapping:case THREE.EquirectangularRefractionMapping:z="ENVMAP_MODE_REFRACTION";}switch(q.combine){case THREE.MultiplyOperation:y="ENVMAP_BLENDING_MULTIPLY";break;case THREE.MixOperation:y="ENVMAP_BLENDING_MIX";break;case THREE.AddOperation:y="ENVMAP_BLENDING_ADD";}}var A=0<a.gammaFactor?a.gammaFactor:1,v=e(v,r,a.extensions),G=f(t),B=s.createProgram();q instanceof THREE.RawShaderMaterial?(t=[G].filter(g).join("\n"),w=[G].filter(g).join("\n")):(t=["precision "+r.precision+" float;","precision "+r.precision+" int;","#define SHADER_NAME "+q.__webglShader.name,G,r.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+A,"#define MAX_BONES "+r.maxBones,r.map?"#define USE_MAP":"",r.envMap?"#define USE_ENVMAP":"",r.envMap?"#define "+z:"",r.lightMap?"#define USE_LIGHTMAP":"",r.aoMap?"#define USE_AOMAP":"",r.emissiveMap?"#define USE_EMISSIVEMAP":"",r.bumpMap?"#define USE_BUMPMAP":"",r.normalMap?"#define USE_NORMALMAP":"",r.displacementMap&&r.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",r.specularMap?"#define USE_SPECULARMAP":"",r.roughnessMap?"#define USE_ROUGHNESSMAP":"",r.metalnessMap?"#define USE_METALNESSMAP":"",r.alphaMap?"#define USE_ALPHAMAP":"",r.vertexColors?"#define USE_COLOR":"",r.flatShading?"#define FLAT_SHADED":"",r.skinning?"#define USE_SKINNING":"",r.useVertexTexture?"#define BONE_TEXTURE":"",r.morphTargets?"#define USE_MORPHTARGETS":"",r.morphNormals&&!1===r.flatShading?"#define USE_MORPHNORMALS":"",r.doubleSided?"#define DOUBLE_SIDED":"",r.flipSided?"#define FLIP_SIDED":"","#define NUM_CLIPPING_PLANES "+r.numClippingPlanes,r.shadowMapEnabled?"#define USE_SHADOWMAP":"",r.shadowMapEnabled?"#define "+w:"",r.sizeAttenuation?"#define USE_SIZEATTENUATION":"",r.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",r.logarithmicDepthBuffer&&a.extensions.get("EXT_frag_depth")?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_COLOR","\tattribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","\tattribute vec3 morphTarget0;","\tattribute vec3 morphTarget1;","\tattribute vec3 morphTarget2;","\tattribute vec3 morphTarget3;","\t#ifdef USE_MORPHNORMALS","\t\tattribute vec3 morphNormal0;","\t\tattribute vec3 morphNormal1;","\t\tattribute vec3 morphNormal2;","\t\tattribute vec3 morphNormal3;","\t#else","\t\tattribute vec3 morphTarget4;","\t\tattribute vec3 morphTarget5;","\t\tattribute vec3 morphTarget6;","\t\tattribute vec3 morphTarget7;","\t#endif","#endif","#ifdef USE_SKINNING","\tattribute vec4 skinIndex;","\tattribute vec4 skinWeight;","#endif","\n"].filter(g).join("\n"),w=[v,"precision "+r.precision+" float;","precision "+r.precision+" int;","#define SHADER_NAME "+q.__webglShader.name,G,r.alphaTest?"#define ALPHATEST "+r.alphaTest:"","#define GAMMA_FACTOR "+A,r.useFog&&r.fog?"#define USE_FOG":"",r.useFog&&r.fogExp?"#define FOG_EXP2":"",r.map?"#define USE_MAP":"",r.envMap?"#define USE_ENVMAP":"",r.envMap?"#define "+I:"",r.envMap?"#define "+z:"",r.envMap?"#define "+y:"",r.lightMap?"#define USE_LIGHTMAP":"",r.aoMap?"#define USE_AOMAP":"",r.emissiveMap?"#define USE_EMISSIVEMAP":"",r.bumpMap?"#define USE_BUMPMAP":"",r.normalMap?"#define USE_NORMALMAP":"",r.specularMap?"#define USE_SPECULARMAP":"",r.roughnessMap?"#define USE_ROUGHNESSMAP":"",r.metalnessMap?"#define USE_METALNESSMAP":"",r.alphaMap?"#define USE_ALPHAMAP":"",r.vertexColors?"#define USE_COLOR":"",r.flatShading?"#define FLAT_SHADED":"",r.doubleSided?"#define DOUBLE_SIDED":"",r.flipSided?"#define FLIP_SIDED":"","#define NUM_CLIPPING_PLANES "+r.numClippingPlanes,r.shadowMapEnabled?"#define USE_SHADOWMAP":"",r.shadowMapEnabled?"#define "+w:"",r.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",r.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",r.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",r.logarithmicDepthBuffer&&a.extensions.get("EXT_frag_depth")?"#define USE_LOGDEPTHBUF_EXT":"",r.envMap&&a.extensions.get("EXT_shader_texture_lod")?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;",r.toneMapping!==THREE.NoToneMapping?"#define TONE_MAPPING":"",r.toneMapping!==THREE.NoToneMapping?THREE.ShaderChunk.tonemapping_pars_fragment:"",r.toneMapping!==THREE.NoToneMapping?d("toneMapping",r.toneMapping):"",r.outputEncoding||r.mapEncoding||r.envMapEncoding||r.emissiveMapEncoding?THREE.ShaderChunk.encodings_pars_fragment:"",r.mapEncoding?b("mapTexelToLinear",r.mapEncoding):"",r.envMapEncoding?b("envMapTexelToLinear",r.envMapEncoding):"",r.emissiveMapEncoding?b("emissiveMapTexelToLinear",r.emissiveMapEncoding):"",r.outputEncoding?c("linearToOutputTexel",r.outputEncoding):"",r.depthPacking?"#define DEPTH_PACKING "+q.depthPacking:"","\n"].filter(g).join("\n"));u=k(u,r);u=h(u,r);D=k(D,r);D=h(D,r);!1===q instanceof THREE.ShaderMaterial&&(u=l(u),D=l(D));D=w+D;u=THREE.WebGLShader(s,s.VERTEX_SHADER,t+u);D=THREE.WebGLShader(s,s.FRAGMENT_SHADER,D);s.attachShader(B,u);s.attachShader(B,D);void 0!==q.index0AttributeName?s.bindAttribLocation(B,0,q.index0AttributeName):!0===r.morphTargets&&s.bindAttribLocation(B,0,"position");s.linkProgram(B);r=s.getProgramInfoLog(B);I=s.getShaderInfoLog(u);z=s.getShaderInfoLog(D);A=y=!0;if(!1===s.getProgramParameter(B,s.LINK_STATUS))y=!1,console.error("THREE.WebGLProgram: shader error: ",s.getError(),"gl.VALIDATE_STATUS",s.getProgramParameter(B,s.VALIDATE_STATUS),"gl.getProgramInfoLog",r,I,z);else if(""!==r)console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",r);else if(""===I||""===z)A=!1;A&&(this.diagnostics={runnable:y,material:q,programLog:r,vertexShader:{log:I,prefix:t},fragmentShader:{log:z,prefix:w}});s.deleteShader(u);s.deleteShader(D);var F;this.getUniforms=function(){void 0===F&&(F=new THREE.WebGLUniforms(s,B,a));return F;};var J;this.getAttributes=function(){if(void 0===J){for(var a={},b=s.getProgramParameter(B,s.ACTIVE_ATTRIBUTES),c=0;c<b;c++){var d=s.getActiveAttrib(B,c).name;a[d]=s.getAttribLocation(B,d);}J=a;}return J;};this.destroy=function(){s.deleteProgram(B);this.program=void 0;};Object.defineProperties(this,{uniforms:{get:function get(){console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms().");return this.getUniforms();}},attributes:{get:function get(){console.warn("THREE.WebGLProgram: .attributes is now .getAttributes().");return this.getAttributes();}}});this.id=m++;this.code=n;this.usedTimes=1;this.program=B;this.vertexShader=u;this.fragmentShader=D;return this;};}();THREE.WebGLPrograms=function(a,b){function c(a,b){var c;a?a instanceof THREE.Texture?c=a.encoding:a instanceof THREE.WebGLRenderTarget&&(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),c=a.texture.encoding):c=THREE.LinearEncoding;c===THREE.LinearEncoding&&b&&(c=THREE.GammaEncoding);return c;}var d=[],e={MeshDepthMaterial:"depth",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points"},f="precision supportsVertexTextures map mapEncoding envMap envMapMode envMapEncoding lightMap aoMap emissiveMap emissiveMapEncoding bumpMap normalMap displacementMap specularMap roughnessMap metalnessMap alphaMap combine vertexColors fog useFog fogExp flatShading sizeAttenuation logarithmicDepthBuffer skinning maxBones useVertexTexture morphTargets morphNormals maxMorphTargets maxMorphNormals premultipliedAlpha numDirLights numPointLights numSpotLights numHemiLights shadowMapEnabled shadowMapType toneMapping physicallyCorrectLights alphaTest doubleSided flipSided numClippingPlanes depthPacking".split(" ");this.getParameters=function(d,f,k,l,m){var p=e[d.type],n;b.floatVertexTextures&&m&&m.skeleton&&m.skeleton.useVertexTexture?n=1024:(n=Math.floor((b.maxVertexUniforms-20)/4),void 0!==m&&m instanceof THREE.SkinnedMesh&&(n=Math.min(m.skeleton.bones.length,n),n<m.skeleton.bones.length&&console.warn("WebGLRenderer: too many bones - "+m.skeleton.bones.length+", this GPU supports just "+n+" (try OpenGL instead of ANGLE)")));var q=a.getPrecision();null!==d.precision&&(q=b.getMaxPrecision(d.precision),q!==d.precision&&console.warn("THREE.WebGLProgram.getParameters:",d.precision,"not supported, using",q,"instead."));var r=a.getCurrentRenderTarget();return{shaderID:p,precision:q,supportsVertexTextures:b.vertexTextures,outputEncoding:c(r?r.texture:null,a.gammaOutput),map:!!d.map,mapEncoding:c(d.map,a.gammaInput),envMap:!!d.envMap,envMapMode:d.envMap&&d.envMap.mapping,envMapEncoding:c(d.envMap,a.gammaInput),envMapCubeUV:!!d.envMap&&(d.envMap.mapping===THREE.CubeUVReflectionMapping||d.envMap.mapping===THREE.CubeUVRefractionMapping),lightMap:!!d.lightMap,aoMap:!!d.aoMap,emissiveMap:!!d.emissiveMap,emissiveMapEncoding:c(d.emissiveMap,a.gammaInput),bumpMap:!!d.bumpMap,normalMap:!!d.normalMap,displacementMap:!!d.displacementMap,roughnessMap:!!d.roughnessMap,metalnessMap:!!d.metalnessMap,specularMap:!!d.specularMap,alphaMap:!!d.alphaMap,combine:d.combine,vertexColors:d.vertexColors,fog:!!k,useFog:d.fog,fogExp:k instanceof THREE.FogExp2,flatShading:d.shading===THREE.FlatShading,sizeAttenuation:d.sizeAttenuation,logarithmicDepthBuffer:b.logarithmicDepthBuffer,skinning:d.skinning,maxBones:n,useVertexTexture:b.floatVertexTextures&&m&&m.skeleton&&m.skeleton.useVertexTexture,morphTargets:d.morphTargets,morphNormals:d.morphNormals,maxMorphTargets:a.maxMorphTargets,maxMorphNormals:a.maxMorphNormals,numDirLights:f.directional.length,numPointLights:f.point.length,numSpotLights:f.spot.length,numHemiLights:f.hemi.length,numClippingPlanes:l,shadowMapEnabled:a.shadowMap.enabled&&m.receiveShadow&&0<f.shadows.length,shadowMapType:a.shadowMap.type,toneMapping:a.toneMapping,physicallyCorrectLights:a.physicallyCorrectLights,premultipliedAlpha:d.premultipliedAlpha,alphaTest:d.alphaTest,doubleSided:d.side===THREE.DoubleSide,flipSided:d.side===THREE.BackSide,depthPacking:void 0!==d.depthPacking?d.depthPacking:!1};};this.getProgramCode=function(a,b){var c=[];b.shaderID?c.push(b.shaderID):(c.push(a.fragmentShader),c.push(a.vertexShader));if(void 0!==a.defines)for(var d in a.defines){c.push(d),c.push(a.defines[d]);}for(d=0;d<f.length;d++){c.push(b[f[d]]);}return c.join();};this.acquireProgram=function(b,c,e){for(var f,m=0,p=d.length;m<p;m++){var n=d[m];if(n.code===e){f=n;++f.usedTimes;break;}}void 0===f&&(f=new THREE.WebGLProgram(a,e,b,c),d.push(f));return f;};this.releaseProgram=function(a){if(0===--a.usedTimes){var b=d.indexOf(a);d[b]=d[d.length-1];d.pop();a.destroy();}};this.programs=d;};THREE.WebGLProperties=function(){var a={};this.get=function(b){b=b.uuid;var c=a[b];void 0===c&&(c={},a[b]=c);return c;};this.delete=function(b){delete a[b.uuid];};this.clear=function(){a={};};};THREE.WebGLShader=function(){function a(a){a=a.split("\n");for(var c=0;c<a.length;c++){a[c]=c+1+": "+a[c];}return a.join("\n");}return function(b,c,d){var e=b.createShader(c);b.shaderSource(e,d);b.compileShader(e);!1===b.getShaderParameter(e,b.COMPILE_STATUS)&&console.error("THREE.WebGLShader: Shader couldn't compile.");""!==b.getShaderInfoLog(e)&&console.warn("THREE.WebGLShader: gl.getShaderInfoLog()",c===b.VERTEX_SHADER?"vertex":"fragment",b.getShaderInfoLog(e),a(d));return e;};}();THREE.WebGLShadowMap=function(a,b,c,d){function e(b,c,d,e){var f=b.geometry,g=null,g=v,h=b.customDepthMaterial;d&&(g=t,h=b.customDistanceMaterial);h?g=h:(h=!1,c.morphTargets&&(f instanceof THREE.BufferGeometry?h=f.morphAttributes&&f.morphAttributes.position&&0<f.morphAttributes.position.length:f instanceof THREE.Geometry&&(h=f.morphTargets&&0<f.morphTargets.length)),b=b instanceof THREE.SkinnedMesh&&c.skinning,f=0,h&&(f|=1),b&&(f|=2),g=g[f]);a.localClippingEnabled&&!0===c.clipShadows&&0!==c.clippingPlanes.length&&(h=g.uuid,b=c.uuid,f=u[h],void 0===f&&(f={},u[h]=f),h=f[b],void 0===h&&(h=g.clone(),f[b]=h),g=h);g.visible=c.visible;g.wireframe=c.wireframe;b=c.side;F.renderSingleSided&&b==THREE.DoubleSide&&(b=THREE.FrontSide);F.renderReverseSided&&(b===THREE.FrontSide?b=THREE.BackSide:b===THREE.BackSide&&(b=THREE.FrontSide));g.side=b;g.clipShadows=c.clipShadows;g.clippingPlanes=c.clippingPlanes;g.wireframeLinewidth=c.wireframeLinewidth;g.linewidth=c.linewidth;d&&void 0!==g.uniforms.lightPos&&g.uniforms.lightPos.value.copy(e);return g;}function f(a,b,c){if(!1!==a.visible){a.layers.test(b.layers)&&(a instanceof THREE.Mesh||a instanceof THREE.Line||a instanceof THREE.Points)&&a.castShadow&&(!1===a.frustumCulled||!0===k.intersectsObject(a))&&!0===a.material.visible&&(a.modelViewMatrix.multiplyMatrices(c.matrixWorldInverse,a.matrixWorld),s.push(a));a=a.children;for(var d=0,e=a.length;d<e;d++){f(a[d],b,c);}}}var g=a.context,h=a.state,k=new THREE.Frustum(),l=new THREE.Matrix4(),m=b.shadows,p=new THREE.Vector2(),n=new THREE.Vector2(d.maxTextureSize,d.maxTextureSize),q=new THREE.Vector3(),r=new THREE.Vector3(),s=[],v=Array(4),t=Array(4),u={},D=[new THREE.Vector3(1,0,0),new THREE.Vector3(-1,0,0),new THREE.Vector3(0,0,1),new THREE.Vector3(0,0,-1),new THREE.Vector3(0,1,0),new THREE.Vector3(0,-1,0)],w=[new THREE.Vector3(0,1,0),new THREE.Vector3(0,1,0),new THREE.Vector3(0,1,0),new THREE.Vector3(0,1,0),new THREE.Vector3(0,0,1),new THREE.Vector3(0,0,-1)],I=[new THREE.Vector4(),new THREE.Vector4(),new THREE.Vector4(),new THREE.Vector4(),new THREE.Vector4(),new THREE.Vector4()];b=new THREE.MeshDepthMaterial();b.depthPacking=THREE.RGBADepthPacking;b.clipping=!0;d=THREE.ShaderLib.distanceRGBA;for(var z=THREE.UniformsUtils.clone(d.uniforms),y=0;4!==y;++y){var A=0!==(y&1),G=0!==(y&2),B=b.clone();B.morphTargets=A;B.skinning=G;v[y]=B;A=new THREE.ShaderMaterial({defines:{USE_SHADOWMAP:""},uniforms:z,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader,morphTargets:A,skinning:G,clipping:!0});t[y]=A;}var F=this;this.enabled=!1;this.autoUpdate=!0;this.needsUpdate=!1;this.type=THREE.PCFShadowMap;this.renderSingleSided=this.renderReverseSided=!0;this.render=function(b,d){if(!1!==F.enabled&&(!1!==F.autoUpdate||!1!==F.needsUpdate)&&0!==m.length){h.clearColor(1,1,1,1);h.disable(g.BLEND);h.setDepthTest(!0);h.setScissorTest(!1);for(var u,t,v=0,y=m.length;v<y;v++){var z=m[v],A=z.shadow;if(void 0===A)console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");else{var C=A.camera;p.copy(A.mapSize);p.min(n);if(z instanceof THREE.PointLight){u=6;t=!0;var L=p.x,E=p.y;I[0].set(2*L,E,L,E);I[1].set(0,E,L,E);I[2].set(3*L,E,L,E);I[3].set(L,E,L,E);I[4].set(3*L,0,L,E);I[5].set(L,0,L,E);p.x*=4;p.y*=2;}else u=1,t=!1;null===A.map&&(A.map=new THREE.WebGLRenderTarget(p.x,p.y,{minFilter:THREE.NearestFilter,magFilter:THREE.NearestFilter,format:THREE.RGBAFormat}),C.updateProjectionMatrix());A instanceof THREE.SpotLightShadow&&A.update(z);L=A.map;A=A.matrix;r.setFromMatrixPosition(z.matrixWorld);C.position.copy(r);a.setRenderTarget(L);a.clear();for(L=0;L<u;L++){t?(q.copy(C.position),q.add(D[L]),C.up.copy(w[L]),C.lookAt(q),h.viewport(I[L])):(q.setFromMatrixPosition(z.target.matrixWorld),C.lookAt(q));C.updateMatrixWorld();C.matrixWorldInverse.getInverse(C.matrixWorld);A.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1);A.multiply(C.projectionMatrix);A.multiply(C.matrixWorldInverse);l.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse);k.setFromMatrix(l);s.length=0;f(b,d,C);for(var E=0,B=s.length;E<B;E++){var G=s[E],X=c.update(G),ea=G.material;if(ea instanceof THREE.MultiMaterial)for(var fa=X.groups,ea=ea.materials,ga=0,V=fa.length;ga<V;ga++){var ba=fa[ga],aa=ea[ba.materialIndex];!0===aa.visible&&(aa=e(G,aa,t,r),a.renderBufferDirect(C,null,X,aa,G,ba));}else aa=e(G,ea,t,r),a.renderBufferDirect(C,null,X,aa,G,null);}}}}u=a.getClearColor();t=a.getClearAlpha();a.setClearColor(u,t);F.needsUpdate=!1;}};};THREE.WebGLState=function(a,b,c){function d(b,c,d){var e=new Uint8Array(4),f=a.createTexture();a.bindTexture(b,f);a.texParameteri(b,a.TEXTURE_MIN_FILTER,a.NEAREST);a.texParameteri(b,a.TEXTURE_MAG_FILTER,a.NEAREST);for(b=0;b<d;b++){a.texImage2D(c+b,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,e);}return f;}var e=this;this.buffers={color:new THREE.WebGLColorBuffer(a,this),depth:new THREE.WebGLDepthBuffer(a,this),stencil:new THREE.WebGLStencilBuffer(a,this)};var f=a.getParameter(a.MAX_VERTEX_ATTRIBS),g=new Uint8Array(f),h=new Uint8Array(f),k=new Uint8Array(f),l={},m=null,p=null,n=null,q=null,r=null,s=null,v=null,t=null,u=!1,D=null,w=null,I=null,z=null,y=null,A=null,G=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),B=null,F={},J=new THREE.Vector4(),P=new THREE.Vector4(),K={};K[a.TEXTURE_2D]=d(a.TEXTURE_2D,a.TEXTURE_2D,1);K[a.TEXTURE_CUBE_MAP]=d(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6);this.init=function(){this.clearColor(0,0,0,1);this.clearDepth(1);this.clearStencil(0);this.enable(a.DEPTH_TEST);this.setDepthFunc(THREE.LessEqualDepth);this.setFlipSided(!1);this.setCullFace(THREE.CullFaceBack);this.enable(a.CULL_FACE);this.enable(a.BLEND);this.setBlending(THREE.NormalBlending);};this.initAttributes=function(){for(var a=0,b=g.length;a<b;a++){g[a]=0;}};this.enableAttribute=function(c){g[c]=1;0===h[c]&&(a.enableVertexAttribArray(c),h[c]=1);0!==k[c]&&(b.get("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(c,0),k[c]=0);};this.enableAttributeAndDivisor=function(b,c,d){g[b]=1;0===h[b]&&(a.enableVertexAttribArray(b),h[b]=1);k[b]!==c&&(d.vertexAttribDivisorANGLE(b,c),k[b]=c);};this.disableUnusedAttributes=function(){for(var b=0,c=h.length;b!==c;++b){h[b]!==g[b]&&(a.disableVertexAttribArray(b),h[b]=0);}};this.enable=function(b){!0!==l[b]&&(a.enable(b),l[b]=!0);};this.disable=function(b){!1!==l[b]&&(a.disable(b),l[b]=!1);};this.getCompressedTextureFormats=function(){if(null===m&&(m=[],b.get("WEBGL_compressed_texture_pvrtc")||b.get("WEBGL_compressed_texture_s3tc")||b.get("WEBGL_compressed_texture_etc1")))for(var c=a.getParameter(a.COMPRESSED_TEXTURE_FORMATS),d=0;d<c.length;d++){m.push(c[d]);}return m;};this.setBlending=function(b,d,e,f,g,h,k,l){if(b!==THREE.NoBlending){this.enable(a.BLEND);if(b!==p||l!==u)b===THREE.AdditiveBlending?l?(a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD),a.blendFuncSeparate(a.ONE,a.ONE,a.ONE,a.ONE)):(a.blendEquation(a.FUNC_ADD),a.blendFunc(a.SRC_ALPHA,a.ONE)):b===THREE.SubtractiveBlending?l?(a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD),a.blendFuncSeparate(a.ZERO,a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ONE_MINUS_SRC_ALPHA)):(a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ZERO,a.ONE_MINUS_SRC_COLOR)):b===THREE.MultiplyBlending?l?(a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD),a.blendFuncSeparate(a.ZERO,a.SRC_COLOR,a.ZERO,a.SRC_ALPHA)):(a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ZERO,a.SRC_COLOR)):l?(a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD),a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA)):(a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD),a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA)),p=b,u=l;if(b===THREE.CustomBlending){g=g||d;h=h||e;k=k||f;if(d!==n||g!==s)a.blendEquationSeparate(c(d),c(g)),n=d,s=g;if(e!==q||f!==r||h!==v||k!==t)a.blendFuncSeparate(c(e),c(f),c(h),c(k)),q=e,r=f,v=h,t=k;}else t=v=s=r=q=n=null;}else this.disable(a.BLEND),p=b;};this.setColorWrite=function(a){this.buffers.color.setMask(a);};this.setDepthTest=function(a){this.buffers.depth.setTest(a);};this.setDepthWrite=function(a){this.buffers.depth.setMask(a);};this.setDepthFunc=function(a){this.buffers.depth.setFunc(a);};this.setStencilTest=function(a){this.buffers.stencil.setTest(a);};this.setStencilWrite=function(a){this.buffers.stencil.setMask(a);};this.setStencilFunc=function(a,b,c){this.buffers.stencil.setFunc(a,b,c);};this.setStencilOp=function(a,b,c){this.buffers.stencil.setOp(a,b,c);};this.setFlipSided=function(b){D!==b&&(b?a.frontFace(a.CW):a.frontFace(a.CCW),D=b);};this.setCullFace=function(b){b!==THREE.CullFaceNone?(this.enable(a.CULL_FACE),b!==w&&(b===THREE.CullFaceBack?a.cullFace(a.BACK):b===THREE.CullFaceFront?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):this.disable(a.CULL_FACE);w=b;};this.setLineWidth=function(b){b!==I&&(a.lineWidth(b),I=b);};this.setPolygonOffset=function(b,c,d){if(b){if(this.enable(a.POLYGON_OFFSET_FILL),z!==c||y!==d)a.polygonOffset(c,d),z=c,y=d;}else this.disable(a.POLYGON_OFFSET_FILL);};this.getScissorTest=function(){return A;};this.setScissorTest=function(b){(A=b)?this.enable(a.SCISSOR_TEST):this.disable(a.SCISSOR_TEST);};this.activeTexture=function(b){void 0===b&&(b=a.TEXTURE0+G-1);B!==b&&(a.activeTexture(b),B=b);};this.bindTexture=function(b,c){null===B&&e.activeTexture();var d=F[B];void 0===d&&(d={type:void 0,texture:void 0},F[B]=d);if(d.type!==b||d.texture!==c)a.bindTexture(b,c||K[b]),d.type=b,d.texture=c;};this.compressedTexImage2D=function(){try{a.compressedTexImage2D.apply(a,arguments);}catch(b){console.error(b);}};this.texImage2D=function(){try{a.texImage2D.apply(a,arguments);}catch(b){console.error(b);}};this.clearColor=function(a,b,c,d){this.buffers.color.setClear(a,b,c,d);};this.clearDepth=function(a){this.buffers.depth.setClear(a);};this.clearStencil=function(a){this.buffers.stencil.setClear(a);};this.scissor=function(b){!1===J.equals(b)&&(a.scissor(b.x,b.y,b.z,b.w),J.copy(b));};this.viewport=function(b){!1===P.equals(b)&&(a.viewport(b.x,b.y,b.z,b.w),P.copy(b));};this.reset=function(){for(var b=0;b<h.length;b++){1===h[b]&&(a.disableVertexAttribArray(b),h[b]=0);}l={};B=m=null;F={};w=D=p=null;this.buffers.color.reset();this.buffers.depth.reset();this.buffers.stencil.reset();};};THREE.WebGLColorBuffer=function(a,b){var c=!1,d=new THREE.Vector4(),e=null,f=new THREE.Vector4();this.setMask=function(b){e===b||c||(a.colorMask(b,b,b,b),e=b);};this.setLocked=function(a){c=a;};this.setClear=function(b,c,e,l){d.set(b,c,e,l);!1===f.equals(d)&&(a.clearColor(b,c,e,l),f.copy(d));};this.reset=function(){c=!1;e=null;f=new THREE.Vector4();};};THREE.WebGLDepthBuffer=function(a,b){var c=!1,d=null,e=null,f=null;this.setTest=function(c){c?b.enable(a.DEPTH_TEST):b.disable(a.DEPTH_TEST);};this.setMask=function(b){d===b||c||(a.depthMask(b),d=b);};this.setFunc=function(b){if(e!==b){if(b)switch(b){case THREE.NeverDepth:a.depthFunc(a.NEVER);break;case THREE.AlwaysDepth:a.depthFunc(a.ALWAYS);break;case THREE.LessDepth:a.depthFunc(a.LESS);break;case THREE.LessEqualDepth:a.depthFunc(a.LEQUAL);break;case THREE.EqualDepth:a.depthFunc(a.EQUAL);break;case THREE.GreaterEqualDepth:a.depthFunc(a.GEQUAL);break;case THREE.GreaterDepth:a.depthFunc(a.GREATER);break;case THREE.NotEqualDepth:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL);}else a.depthFunc(a.LEQUAL);e=b;}};this.setLocked=function(a){c=a;};this.setClear=function(b){f!==b&&(a.clearDepth(b),f=b);};this.reset=function(){c=!1;f=e=d=null;};};THREE.WebGLStencilBuffer=function(a,b){var c=!1,d=null,e=null,f=null,g=null,h=null,k=null,l=null,m=null;this.setTest=function(c){c?b.enable(a.STENCIL_TEST):b.disable(a.STENCIL_TEST);};this.setMask=function(b){d===b||c||(a.stencilMask(b),d=b);};this.setFunc=function(b,c,d){if(e!==b||f!==c||g!==d)a.stencilFunc(b,c,d),e=b,f=c,g=d;};this.setOp=function(b,c,d){if(h!==b||k!==c||l!==d)a.stencilOp(b,c,d),h=b,k=c,l=d;};this.setLocked=function(a){c=a;};this.setClear=function(b){m!==b&&(a.clearStencil(b),m=b);};this.reset=function(){c=!1;m=l=k=h=g=f=e=d=null;};};THREE.WebGLTextures=function(a,b,c,d,e,f,g){function h(a,b){if(a.width>b||a.height>b){var c=b/Math.max(a.width,a.height),d=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");d.width=Math.floor(a.width*c);d.height=Math.floor(a.height*c);d.getContext("2d").drawImage(a,0,0,a.width,a.height,0,0,d.width,d.height);console.warn("THREE.WebGLRenderer: image is too big ("+a.width+"x"+a.height+"). Resized to "+d.width+"x"+d.height,a);return d;}return a;}function k(a){return THREE.Math.isPowerOfTwo(a.width)&&THREE.Math.isPowerOfTwo(a.height);}function l(b){return b===THREE.NearestFilter||b===THREE.NearestMipMapNearestFilter||b===THREE.NearestMipMapLinearFilter?a.NEAREST:a.LINEAR;}function m(b){b=b.target;b.removeEventListener("dispose",m);a:{var c=d.get(b);if(b.image&&c.__image__webglTextureCube)a.deleteTexture(c.__image__webglTextureCube);else{if(void 0===c.__webglInit)break a;a.deleteTexture(c.__webglTexture);}d.delete(b);}v.textures--;}function p(b){b=b.target;b.removeEventListener("dispose",p);var c=d.get(b),e=d.get(b.texture);if(b){void 0!==e.__webglTexture&&a.deleteTexture(e.__webglTexture);b.depthTexture&&b.depthTexture.dispose();if(b instanceof THREE.WebGLRenderTargetCube)for(e=0;6>e;e++){a.deleteFramebuffer(c.__webglFramebuffer[e]),c.__webglDepthbuffer&&a.deleteRenderbuffer(c.__webglDepthbuffer[e]);}else a.deleteFramebuffer(c.__webglFramebuffer),c.__webglDepthbuffer&&a.deleteRenderbuffer(c.__webglDepthbuffer);d.delete(b.texture);d.delete(b);}v.textures--;}function n(b,g){var l=d.get(b);if(0<b.version&&l.__version!==b.version){var n=b.image;if(void 0===n)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined",b);else if(!1===n.complete)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete",b);else{void 0===l.__webglInit&&(l.__webglInit=!0,b.addEventListener("dispose",m),l.__webglTexture=a.createTexture(),v.textures++);c.activeTexture(a.TEXTURE0+g);c.bindTexture(a.TEXTURE_2D,l.__webglTexture);a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY);a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha);a.pixelStorei(a.UNPACK_ALIGNMENT,b.unpackAlignment);var p=h(b.image,e.maxTextureSize);if((b.wrapS!==THREE.ClampToEdgeWrapping||b.wrapT!==THREE.ClampToEdgeWrapping||b.minFilter!==THREE.NearestFilter&&b.minFilter!==THREE.LinearFilter)&&!1===k(p))if(n=p,n instanceof HTMLImageElement||n instanceof HTMLCanvasElement){var r=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");r.width=THREE.Math.nearestPowerOfTwo(n.width);r.height=THREE.Math.nearestPowerOfTwo(n.height);r.getContext("2d").drawImage(n,0,0,r.width,r.height);console.warn("THREE.WebGLRenderer: image is not power of two ("+n.width+"x"+n.height+"). Resized to "+r.width+"x"+r.height,n);p=r;}else p=n;var n=k(p),r=f(b.format),s=f(b.type);q(a.TEXTURE_2D,b,n);var G=b.mipmaps;if(b instanceof THREE.DepthTexture){G=a.DEPTH_COMPONENT;if(b.type===THREE.FloatType){if(!t)throw Error("Float Depth Texture only supported in WebGL2.0");G=a.DEPTH_COMPONENT32F;}else t&&(G=a.DEPTH_COMPONENT16);c.texImage2D(a.TEXTURE_2D,0,G,p.width,p.height,0,r,s,null);}else if(b instanceof THREE.DataTexture){if(0<G.length&&n){for(var B=0,F=G.length;B<F;B++){p=G[B],c.texImage2D(a.TEXTURE_2D,B,r,p.width,p.height,0,r,s,p.data);}b.generateMipmaps=!1;}else c.texImage2D(a.TEXTURE_2D,0,r,p.width,p.height,0,r,s,p.data);}else if(b instanceof THREE.CompressedTexture)for(B=0,F=G.length;B<F;B++){p=G[B],b.format!==THREE.RGBAFormat&&b.format!==THREE.RGBFormat?-1<c.getCompressedTextureFormats().indexOf(r)?c.compressedTexImage2D(a.TEXTURE_2D,B,r,p.width,p.height,0,p.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):c.texImage2D(a.TEXTURE_2D,B,r,p.width,p.height,0,r,s,p.data);}else if(0<G.length&&n){B=0;for(F=G.length;B<F;B++){p=G[B],c.texImage2D(a.TEXTURE_2D,B,r,r,s,p);}b.generateMipmaps=!1;}else c.texImage2D(a.TEXTURE_2D,0,r,r,s,p);b.generateMipmaps&&n&&a.generateMipmap(a.TEXTURE_2D);l.__version=b.version;if(b.onUpdate)b.onUpdate(b);return;}}c.activeTexture(a.TEXTURE0+g);c.bindTexture(a.TEXTURE_2D,l.__webglTexture);}function q(c,g,h){h?(a.texParameteri(c,a.TEXTURE_WRAP_S,f(g.wrapS)),a.texParameteri(c,a.TEXTURE_WRAP_T,f(g.wrapT)),a.texParameteri(c,a.TEXTURE_MAG_FILTER,f(g.magFilter)),a.texParameteri(c,a.TEXTURE_MIN_FILTER,f(g.minFilter))):(a.texParameteri(c,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(c,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE),g.wrapS===THREE.ClampToEdgeWrapping&&g.wrapT===THREE.ClampToEdgeWrapping||console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.",g),a.texParameteri(c,a.TEXTURE_MAG_FILTER,l(g.magFilter)),a.texParameteri(c,a.TEXTURE_MIN_FILTER,l(g.minFilter)),g.minFilter!==THREE.NearestFilter&&g.minFilter!==THREE.LinearFilter&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.",g));!(h=b.get("EXT_texture_filter_anisotropic"))||g.type===THREE.FloatType&&null===b.get("OES_texture_float_linear")||g.type===THREE.HalfFloatType&&null===b.get("OES_texture_half_float_linear")||!(1<g.anisotropy||d.get(g).__currentAnisotropy)||(a.texParameterf(c,h.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,e.getMaxAnisotropy())),d.get(g).__currentAnisotropy=g.anisotropy);}function r(b,e,g,h){var k=f(e.texture.format),l=f(e.texture.type);c.texImage2D(h,0,k,e.width,e.height,0,k,l,null);a.bindFramebuffer(a.FRAMEBUFFER,b);a.framebufferTexture2D(a.FRAMEBUFFER,g,h,d.get(e.texture).__webglTexture,0);a.bindFramebuffer(a.FRAMEBUFFER,null);}function s(b,c){a.bindRenderbuffer(a.RENDERBUFFER,b);c.depthBuffer&&!c.stencilBuffer?(a.renderbufferStorage(a.RENDERBUFFER,a.DEPTH_COMPONENT16,c.width,c.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.RENDERBUFFER,b)):c.depthBuffer&&c.stencilBuffer?(a.renderbufferStorage(a.RENDERBUFFER,a.DEPTH_STENCIL,c.width,c.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.DEPTH_STENCIL_ATTACHMENT,a.RENDERBUFFER,b)):a.renderbufferStorage(a.RENDERBUFFER,a.RGBA4,c.width,c.height);a.bindRenderbuffer(a.RENDERBUFFER,null);}var v=g.memory,t="undefined"!==typeof WebGL2RenderingContext&&a instanceof WebGL2RenderingContext;this.setTexture2D=n;this.setTextureCube=function(b,g){var l=d.get(b);if(6===b.image.length)if(0<b.version&&l.__version!==b.version){l.__image__webglTextureCube||(b.addEventListener("dispose",m),l.__image__webglTextureCube=a.createTexture(),v.textures++);c.activeTexture(a.TEXTURE0+g);c.bindTexture(a.TEXTURE_CUBE_MAP,l.__image__webglTextureCube);a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,b.flipY);for(var n=b instanceof THREE.CompressedTexture,p=b.image[0]instanceof THREE.DataTexture,r=[],s=0;6>s;s++){r[s]=n||p?p?b.image[s].image:b.image[s]:h(b.image[s],e.maxCubemapSize);}var t=k(r[0]),B=f(b.format),F=f(b.type);q(a.TEXTURE_CUBE_MAP,b,t);for(s=0;6>s;s++){if(n)for(var J,P=r[s].mipmaps,K=0,H=P.length;K<H;K++){J=P[K],b.format!==THREE.RGBAFormat&&b.format!==THREE.RGBFormat?-1<c.getCompressedTextureFormats().indexOf(B)?c.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+s,K,B,J.width,J.height,0,J.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):c.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+s,K,B,J.width,J.height,0,B,F,J.data);}else p?c.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+s,0,B,r[s].width,r[s].height,0,B,F,r[s].data):c.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+s,0,B,B,F,r[s]);}b.generateMipmaps&&t&&a.generateMipmap(a.TEXTURE_CUBE_MAP);l.__version=b.version;if(b.onUpdate)b.onUpdate(b);}else c.activeTexture(a.TEXTURE0+g),c.bindTexture(a.TEXTURE_CUBE_MAP,l.__image__webglTextureCube);};this.setTextureCubeDynamic=function(b,e){c.activeTexture(a.TEXTURE0+e);c.bindTexture(a.TEXTURE_CUBE_MAP,d.get(b).__webglTexture);};this.setupRenderTarget=function(b){var e=d.get(b),f=d.get(b.texture);b.addEventListener("dispose",p);f.__webglTexture=a.createTexture();v.textures++;var g=b instanceof THREE.WebGLRenderTargetCube,h=k(b);if(g){e.__webglFramebuffer=[];for(var l=0;6>l;l++){e.__webglFramebuffer[l]=a.createFramebuffer();}}else e.__webglFramebuffer=a.createFramebuffer();if(g){c.bindTexture(a.TEXTURE_CUBE_MAP,f.__webglTexture);q(a.TEXTURE_CUBE_MAP,b.texture,h);for(l=0;6>l;l++){r(e.__webglFramebuffer[l],b,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+l);}b.texture.generateMipmaps&&h&&a.generateMipmap(a.TEXTURE_CUBE_MAP);c.bindTexture(a.TEXTURE_CUBE_MAP,null);}else c.bindTexture(a.TEXTURE_2D,f.__webglTexture),q(a.TEXTURE_2D,b.texture,h),r(e.__webglFramebuffer,b,a.COLOR_ATTACHMENT0,a.TEXTURE_2D),b.texture.generateMipmaps&&h&&a.generateMipmap(a.TEXTURE_2D),c.bindTexture(a.TEXTURE_2D,null);if(b.depthBuffer){e=d.get(b);f=b instanceof THREE.WebGLRenderTargetCube;if(b.depthTexture){if(f)throw Error("target.depthTexture not supported in Cube render targets");if(b instanceof THREE.WebGLRenderTargetCube)throw Error("Depth Texture with cube render targets is not supported!");a.bindFramebuffer(a.FRAMEBUFFER,e.__webglFramebuffer);if(!(b.depthTexture instanceof THREE.DepthTexture))throw Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");d.get(b.depthTexture).__webglTexture&&b.depthTexture.image.width===b.width&&b.depthTexture.image.height===b.height||(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0);n(b.depthTexture,0);b=d.get(b.depthTexture).__webglTexture;a.framebufferTexture2D(a.FRAMEBUFFER,a.DEPTH_ATTACHMENT,a.TEXTURE_2D,b,0);}else if(f)for(e.__webglDepthbuffer=[],f=0;6>f;f++){a.bindFramebuffer(a.FRAMEBUFFER,e.__webglFramebuffer[f]),e.__webglDepthbuffer[f]=a.createRenderbuffer(),s(e.__webglDepthbuffer[f],b);}else a.bindFramebuffer(a.FRAMEBUFFER,e.__webglFramebuffer),e.__webglDepthbuffer=a.createRenderbuffer(),s(e.__webglDepthbuffer,b);a.bindFramebuffer(a.FRAMEBUFFER,null);}};this.updateRenderTargetMipmap=function(b){var e=b.texture;e.generateMipmaps&&k(b)&&e.minFilter!==THREE.NearestFilter&&e.minFilter!==THREE.LinearFilter&&(b=b instanceof THREE.WebGLRenderTargetCube?a.TEXTURE_CUBE_MAP:a.TEXTURE_2D,e=d.get(e).__webglTexture,c.bindTexture(b,e),a.generateMipmap(b),c.bindTexture(b,null));};};THREE.WebGLUniforms=function(){var a=new THREE.Texture(),b=new THREE.CubeTexture(),c=[],d=[],e=function e(a,b,d){var e=a[0];if(0>=e||0<e)return a;var f=b*d,g=c[f];void 0===g&&(g=new Float32Array(f),c[f]=g);if(0!==b)for(e.toArray(g,0),e=1,f=0;e!==b;++e){f+=d,a[e].toArray(g,f);}return g;},f=function f(a,b){var c=d[b];void 0===c&&(c=new Int32Array(b),d[b]=c);for(var e=0;e!==b;++e){c[e]=a.allocTextureUnit();}return c;},g=function g(a,b){a.uniform1f(this.addr,b);},h=function h(a,b){a.uniform1i(this.addr,b);},k=function k(a,b){void 0===b.x?a.uniform2fv(this.addr,b):a.uniform2f(this.addr,b.x,b.y);},l=function l(a,b){void 0!==b.x?a.uniform3f(this.addr,b.x,b.y,b.z):void 0!==b.r?a.uniform3f(this.addr,b.r,b.g,b.b):a.uniform3fv(this.addr,b);},m=function m(a,b){void 0===b.x?a.uniform4fv(this.addr,b):a.uniform4f(this.addr,b.x,b.y,b.z,b.w);},p=function p(a,b){a.uniformMatrix2fv(this.addr,!1,b.elements||b);},n=function n(a,b){a.uniformMatrix3fv(this.addr,!1,b.elements||b);},q=function q(a,b){a.uniformMatrix4fv(this.addr,!1,b.elements||b);},r=function r(b,c,d){var e=d.allocTextureUnit();b.uniform1i(this.addr,e);d.setTexture2D(c||a,e);},s=function s(a,c,d){var e=d.allocTextureUnit();a.uniform1i(this.addr,e);d.setTextureCube(c||b,e);},v=function v(a,b){a.uniform2iv(this.addr,b);},t=function t(a,b){a.uniform3iv(this.addr,b);},u=function u(a,b){a.uniform4iv(this.addr,b);},D=function D(a){switch(a){case 5126:return g;case 35664:return k;case 35665:return l;case 35666:return m;case 35674:return p;case 35675:return n;case 35676:return q;case 35678:return r;case 35680:return s;case 5124:case 35670:return h;case 35667:case 35671:return v;case 35668:case 35672:return t;case 35669:case 35673:return u;}},w=function w(a,b){a.uniform1fv(this.addr,b);},I=function I(a,b){a.uniform1iv(this.addr,b);},z=function z(a,b){a.uniform2fv(this.addr,e(b,this.size,2));},y=function y(a,b){a.uniform3fv(this.addr,e(b,this.size,3));},A=function A(a,b){a.uniform4fv(this.addr,e(b,this.size,4));},G=function G(a,b){a.uniformMatrix2fv(this.addr,!1,e(b,this.size,4));},B=function B(a,b){a.uniformMatrix3fv(this.addr,!1,e(b,this.size,9));},F=function F(a,b){a.uniformMatrix4fv(this.addr,!1,e(b,this.size,16));},J=function J(b,c,d){var e=c.length,g=f(d,e);b.uniform1iv(this.addr,g);for(b=0;b!==e;++b){d.setTexture2D(c[b]||a,g[b]);}},P=function P(a,c,d){var e=c.length,g=f(d,e);a.uniform1iv(this.addr,g);for(a=0;a!==e;++a){d.setTextureCube(c[a]||b,g[a]);}},K=function K(a){switch(a){case 5126:return w;case 35664:return z;case 35665:return y;case 35666:return A;case 35674:return G;case 35675:return B;case 35676:return F;case 35678:return J;case 35680:return P;case 5124:case 35670:return I;case 35667:case 35671:return v;case 35668:case 35672:return t;case 35669:case 35673:return u;}},H=function H(a,b,c){this.id=a;this.addr=c;this.setValue=D(b.type);},M=function M(a,b,c){this.id=a;this.addr=c;this.size=b.size;this.setValue=K(b.type);},O=function O(a){this.id=a;this.seq=[];this.map={};};O.prototype.setValue=function(a,b){for(var c=this.seq,d=0,e=c.length;d!==e;++d){var f=c[d];f.setValue(a,b[f.id]);}};var N=/([\w\d_]+)(\])?(\[|\.)?/g,Q=function Q(a,b,c){this.seq=[];this.map={};this.renderer=c;c=a.getProgramParameter(b,a.ACTIVE_UNIFORMS);for(var d=0;d!==c;++d){var e=a.getActiveUniform(b,d),f=a.getUniformLocation(b,e.name),g=this,h=e.name,k=h.length;for(N.lastIndex=0;;){var l=N.exec(h),m=N.lastIndex,n=l[1],p=l[3];"]"===l[2]&&(n|=0);if(void 0===p||"["===p&&m+2===k){h=g;e=void 0===p?new H(n,e,f):new M(n,e,f);h.seq.push(e);h.map[e.id]=e;break;}else p=g.map[n],void 0===p&&(p=new O(n),n=g,g=p,n.seq.push(g),n.map[g.id]=g),g=p;}}};Q.prototype.setValue=function(a,b,c){b=this.map[b];void 0!==b&&b.setValue(a,c,this.renderer);};Q.prototype.set=function(a,b,c){var d=this.map[c];void 0!==d&&d.setValue(a,b[c],this.renderer);};Q.prototype.setOptional=function(a,b,c){b=b[c];void 0!==b&&this.setValue(a,c,b);};Q.upload=function(a,b,c,d){for(var e=0,f=b.length;e!==f;++e){var g=b[e],h=c[g.id];!1!==h.needsUpdate&&g.setValue(a,h.value,d);}};Q.seqWithValue=function(a,b){for(var c=[],d=0,e=a.length;d!==e;++d){var f=a[d];f.id in b&&c.push(f);}return c;};Q.splitDynamic=function(a,b){for(var c=null,d=a.length,e=0,f=0;f!==d;++f){var g=a[f],h=b[g.id];h&&!0===h.dynamic?(null===c&&(c=[]),c.push(g)):(e<f&&(a[e]=g),++e);}e<d&&(a.length=e);return c;};Q.evalDynamic=function(a,b,c,d){for(var e=0,f=a.length;e!==f;++e){var g=b[a[e].id],h=g.onUpdateCallback;void 0!==h&&h.call(g,c,d);}};return Q;}();THREE.LensFlarePlugin=function(a,b){var c,d,e,f,g,h,k,l,m,p,n=a.context,q=a.state,r,s,v,t,u,D;this.render=function(w,I,z){if(0!==b.length){w=new THREE.Vector3();var y=z.w/z.z,A=.5*z.z,G=.5*z.w,B=16/z.w,F=new THREE.Vector2(B*y,B),J=new THREE.Vector3(1,1,0),P=new THREE.Vector2(1,1),K=new THREE.Box2();K.min.set(0,0);K.max.set(z.z-16,z.w-16);if(void 0===t){var B=new Float32Array([-1,-1,0,0,1,-1,1,0,1,1,1,1,-1,1,0,1]),H=new Uint16Array([0,1,2,0,2,3]);r=n.createBuffer();s=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,r);n.bufferData(n.ARRAY_BUFFER,B,n.STATIC_DRAW);n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,s);n.bufferData(n.ELEMENT_ARRAY_BUFFER,H,n.STATIC_DRAW);u=n.createTexture();D=n.createTexture();q.bindTexture(n.TEXTURE_2D,u);n.texImage2D(n.TEXTURE_2D,0,n.RGB,16,16,0,n.RGB,n.UNSIGNED_BYTE,null);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST);q.bindTexture(n.TEXTURE_2D,D);n.texImage2D(n.TEXTURE_2D,0,n.RGBA,16,16,0,n.RGBA,n.UNSIGNED_BYTE,null);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.NEAREST);n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.NEAREST);var B=v={vertexShader:"uniform lowp int renderType;\nuniform vec3 screenPosition;\nuniform vec2 scale;\nuniform float rotation;\nuniform sampler2D occlusionMap;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nvUV = uv;\nvec2 pos = position;\nif ( renderType == 2 ) {\nvec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );\nvisibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );\nvVisibility =        visibility.r / 9.0;\nvVisibility *= 1.0 - visibility.g / 9.0;\nvVisibility *=       visibility.b / 9.0;\nvVisibility *= 1.0 - visibility.a / 9.0;\npos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;\npos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;\n}\ngl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );\n}",fragmentShader:"uniform lowp int renderType;\nuniform sampler2D map;\nuniform float opacity;\nuniform vec3 color;\nvarying vec2 vUV;\nvarying float vVisibility;\nvoid main() {\nif ( renderType == 0 ) {\ngl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );\n} else if ( renderType == 1 ) {\ngl_FragColor = texture2D( map, vUV );\n} else {\nvec4 texture = texture2D( map, vUV );\ntexture.a *= opacity * vVisibility;\ngl_FragColor = texture;\ngl_FragColor.rgb *= color;\n}\n}"},H=n.createProgram(),M=n.createShader(n.FRAGMENT_SHADER),O=n.createShader(n.VERTEX_SHADER),N="precision "+a.getPrecision()+" float;\n";n.shaderSource(M,N+B.fragmentShader);n.shaderSource(O,N+B.vertexShader);n.compileShader(M);n.compileShader(O);n.attachShader(H,M);n.attachShader(H,O);n.linkProgram(H);t=H;m=n.getAttribLocation(t,"position");p=n.getAttribLocation(t,"uv");c=n.getUniformLocation(t,"renderType");d=n.getUniformLocation(t,"map");e=n.getUniformLocation(t,"occlusionMap");f=n.getUniformLocation(t,"opacity");g=n.getUniformLocation(t,"color");h=n.getUniformLocation(t,"scale");k=n.getUniformLocation(t,"rotation");l=n.getUniformLocation(t,"screenPosition");}n.useProgram(t);q.initAttributes();q.enableAttribute(m);q.enableAttribute(p);q.disableUnusedAttributes();n.uniform1i(e,0);n.uniform1i(d,1);n.bindBuffer(n.ARRAY_BUFFER,r);n.vertexAttribPointer(m,2,n.FLOAT,!1,16,0);n.vertexAttribPointer(p,2,n.FLOAT,!1,16,8);n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,s);q.disable(n.CULL_FACE);q.setDepthWrite(!1);H=0;for(M=b.length;H<M;H++){if(B=16/z.w,F.set(B*y,B),O=b[H],w.set(O.matrixWorld.elements[12],O.matrixWorld.elements[13],O.matrixWorld.elements[14]),w.applyMatrix4(I.matrixWorldInverse),w.applyProjection(I.projectionMatrix),J.copy(w),P.x=z.x+J.x*A+A-8,P.y=z.y+J.y*G+G-8,!0===K.containsPoint(P)){q.activeTexture(n.TEXTURE0);q.bindTexture(n.TEXTURE_2D,null);q.activeTexture(n.TEXTURE1);q.bindTexture(n.TEXTURE_2D,u);n.copyTexImage2D(n.TEXTURE_2D,0,n.RGB,P.x,P.y,16,16,0);n.uniform1i(c,0);n.uniform2f(h,F.x,F.y);n.uniform3f(l,J.x,J.y,J.z);q.disable(n.BLEND);q.enable(n.DEPTH_TEST);n.drawElements(n.TRIANGLES,6,n.UNSIGNED_SHORT,0);q.activeTexture(n.TEXTURE0);q.bindTexture(n.TEXTURE_2D,D);n.copyTexImage2D(n.TEXTURE_2D,0,n.RGBA,P.x,P.y,16,16,0);n.uniform1i(c,1);q.disable(n.DEPTH_TEST);q.activeTexture(n.TEXTURE1);q.bindTexture(n.TEXTURE_2D,u);n.drawElements(n.TRIANGLES,6,n.UNSIGNED_SHORT,0);O.positionScreen.copy(J);O.customUpdateCallback?O.customUpdateCallback(O):O.updateLensFlares();n.uniform1i(c,2);q.enable(n.BLEND);for(var N=0,Q=O.lensFlares.length;N<Q;N++){var C=O.lensFlares[N];.001<C.opacity&&.001<C.scale&&(J.x=C.x,J.y=C.y,J.z=C.z,B=C.size*C.scale/z.w,F.x=B*y,F.y=B,n.uniform3f(l,J.x,J.y,J.z),n.uniform2f(h,F.x,F.y),n.uniform1f(k,C.rotation),n.uniform1f(f,C.opacity),n.uniform3f(g,C.color.r,C.color.g,C.color.b),q.setBlending(C.blending,C.blendEquation,C.blendSrc,C.blendDst),a.setTexture2D(C.texture,1),n.drawElements(n.TRIANGLES,6,n.UNSIGNED_SHORT,0));}}}q.enable(n.CULL_FACE);q.enable(n.DEPTH_TEST);q.setDepthWrite(!0);a.resetGLState();}};};THREE.SpritePlugin=function(a,b){var c,d,e,f,g,h,k,l,m,p,n,q,r,s,v,t,u;function D(a,b){return a.renderOrder!==b.renderOrder?a.renderOrder-b.renderOrder:a.z!==b.z?b.z-a.z:b.id-a.id;}var w=a.context,I=a.state,z,y,A,G,B=new THREE.Vector3(),F=new THREE.Quaternion(),J=new THREE.Vector3();this.render=function(P,K){if(0!==b.length){if(void 0===A){var H=new Float32Array([-.5,-.5,0,0,.5,-.5,1,0,.5,.5,1,1,-.5,.5,0,1]),M=new Uint16Array([0,1,2,0,2,3]);z=w.createBuffer();y=w.createBuffer();w.bindBuffer(w.ARRAY_BUFFER,z);w.bufferData(w.ARRAY_BUFFER,H,w.STATIC_DRAW);w.bindBuffer(w.ELEMENT_ARRAY_BUFFER,y);w.bufferData(w.ELEMENT_ARRAY_BUFFER,M,w.STATIC_DRAW);var H=w.createProgram(),M=w.createShader(w.VERTEX_SHADER),O=w.createShader(w.FRAGMENT_SHADER);w.shaderSource(M,["precision "+a.getPrecision()+" float;","uniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform float rotation;\nuniform vec2 scale;\nuniform vec2 uvOffset;\nuniform vec2 uvScale;\nattribute vec2 position;\nattribute vec2 uv;\nvarying vec2 vUV;\nvoid main() {\nvUV = uvOffset + uv * uvScale;\nvec2 alignedPosition = position * scale;\nvec2 rotatedPosition;\nrotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\nrotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\nvec4 finalPosition;\nfinalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\nfinalPosition.xy += rotatedPosition;\nfinalPosition = projectionMatrix * finalPosition;\ngl_Position = finalPosition;\n}"].join("\n"));w.shaderSource(O,["precision "+a.getPrecision()+" float;","uniform vec3 color;\nuniform sampler2D map;\nuniform float opacity;\nuniform int fogType;\nuniform vec3 fogColor;\nuniform float fogDensity;\nuniform float fogNear;\nuniform float fogFar;\nuniform float alphaTest;\nvarying vec2 vUV;\nvoid main() {\nvec4 texture = texture2D( map, vUV );\nif ( texture.a < alphaTest ) discard;\ngl_FragColor = vec4( color * texture.xyz, texture.a * opacity );\nif ( fogType > 0 ) {\nfloat depth = gl_FragCoord.z / gl_FragCoord.w;\nfloat fogFactor = 0.0;\nif ( fogType == 1 ) {\nfogFactor = smoothstep( fogNear, fogFar, depth );\n} else {\nconst float LOG2 = 1.442695;\nfogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );\nfogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );\n}\ngl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );\n}\n}"].join("\n"));w.compileShader(M);w.compileShader(O);w.attachShader(H,M);w.attachShader(H,O);w.linkProgram(H);A=H;t=w.getAttribLocation(A,"position");u=w.getAttribLocation(A,"uv");c=w.getUniformLocation(A,"uvOffset");d=w.getUniformLocation(A,"uvScale");e=w.getUniformLocation(A,"rotation");f=w.getUniformLocation(A,"scale");g=w.getUniformLocation(A,"color");h=w.getUniformLocation(A,"map");k=w.getUniformLocation(A,"opacity");l=w.getUniformLocation(A,"modelViewMatrix");m=w.getUniformLocation(A,"projectionMatrix");p=w.getUniformLocation(A,"fogType");n=w.getUniformLocation(A,"fogDensity");q=w.getUniformLocation(A,"fogNear");r=w.getUniformLocation(A,"fogFar");s=w.getUniformLocation(A,"fogColor");v=w.getUniformLocation(A,"alphaTest");H=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");H.width=8;H.height=8;M=H.getContext("2d");M.fillStyle="white";M.fillRect(0,0,8,8);G=new THREE.Texture(H);G.needsUpdate=!0;}w.useProgram(A);I.initAttributes();I.enableAttribute(t);I.enableAttribute(u);I.disableUnusedAttributes();I.disable(w.CULL_FACE);I.enable(w.BLEND);w.bindBuffer(w.ARRAY_BUFFER,z);w.vertexAttribPointer(t,2,w.FLOAT,!1,16,0);w.vertexAttribPointer(u,2,w.FLOAT,!1,16,8);w.bindBuffer(w.ELEMENT_ARRAY_BUFFER,y);w.uniformMatrix4fv(m,!1,K.projectionMatrix.elements);I.activeTexture(w.TEXTURE0);w.uniform1i(h,0);M=H=0;(O=P.fog)?(w.uniform3f(s,O.color.r,O.color.g,O.color.b),O instanceof THREE.Fog?(w.uniform1f(q,O.near),w.uniform1f(r,O.far),w.uniform1i(p,1),M=H=1):O instanceof THREE.FogExp2&&(w.uniform1f(n,O.density),w.uniform1i(p,2),M=H=2)):(w.uniform1i(p,0),M=H=0);for(var O=0,N=b.length;O<N;O++){var Q=b[O];Q.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,Q.matrixWorld);Q.z=-Q.modelViewMatrix.elements[14];}b.sort(D);for(var C=[],O=0,N=b.length;O<N;O++){var Q=b[O],L=Q.material;!1!==L.visible&&(w.uniform1f(v,L.alphaTest),w.uniformMatrix4fv(l,!1,Q.modelViewMatrix.elements),Q.matrixWorld.decompose(B,F,J),C[0]=J.x,C[1]=J.y,Q=0,P.fog&&L.fog&&(Q=M),H!==Q&&(w.uniform1i(p,Q),H=Q),null!==L.map?(w.uniform2f(c,L.map.offset.x,L.map.offset.y),w.uniform2f(d,L.map.repeat.x,L.map.repeat.y)):(w.uniform2f(c,0,0),w.uniform2f(d,1,1)),w.uniform1f(k,L.opacity),w.uniform3f(g,L.color.r,L.color.g,L.color.b),w.uniform1f(e,L.rotation),w.uniform2fv(f,C),I.setBlending(L.blending,L.blendEquation,L.blendSrc,L.blendDst),I.setDepthTest(L.depthTest),I.setDepthWrite(L.depthWrite),L.map?a.setTexture2D(L.map,0):a.setTexture2D(G,0),w.drawElements(w.TRIANGLES,6,w.UNSIGNED_SHORT,0));}I.enable(w.CULL_FACE);a.resetGLState();}};};Object.assign(THREE,{Face4:function Face4(a,b,c,d,e,f,g){console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead.");return new THREE.Face3(a,b,c,e,f,g);},LineStrip:0,LinePieces:1,MeshFaceMaterial:THREE.MultiMaterial,PointCloud:function PointCloud(a,b){console.warn("THREE.PointCloud has been renamed to THREE.Points.");return new THREE.Points(a,b);},Particle:THREE.Sprite,ParticleSystem:function ParticleSystem(a,b){console.warn("THREE.ParticleSystem has been renamed to THREE.Points.");return new THREE.Points(a,b);},PointCloudMaterial:function PointCloudMaterial(a){console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial.");return new THREE.PointsMaterial(a);},ParticleBasicMaterial:function ParticleBasicMaterial(a){console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial.");return new THREE.PointsMaterial(a);},ParticleSystemMaterial:function ParticleSystemMaterial(a){console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial.");return new THREE.PointsMaterial(a);},Vertex:function Vertex(a,b,c){console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead.");return new THREE.Vector3(a,b,c);}});Object.assign(THREE.Box2.prototype,{empty:function empty(){console.warn("THREE.Box2: .empty() has been renamed to .isEmpty().");return this.isEmpty();},isIntersectionBox:function isIntersectionBox(a){console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox().");return this.intersectsBox(a);}});Object.assign(THREE.Box3.prototype,{empty:function empty(){console.warn("THREE.Box3: .empty() has been renamed to .isEmpty().");return this.isEmpty();},isIntersectionBox:function isIntersectionBox(a){console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox().");return this.intersectsBox(a);},isIntersectionSphere:function isIntersectionSphere(a){console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere().");return this.intersectsSphere(a);}});Object.assign(THREE.Matrix3.prototype,{multiplyVector3:function multiplyVector3(a){console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.");return a.applyMatrix3(this);},multiplyVector3Array:function multiplyVector3Array(a){console.warn("THREE.Matrix3: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead.");return this.applyToVector3Array(a);}});Object.assign(THREE.Matrix4.prototype,{extractPosition:function extractPosition(a){console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition().");return this.copyPosition(a);},setRotationFromQuaternion:function setRotationFromQuaternion(a){console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion().");return this.makeRotationFromQuaternion(a);},multiplyVector3:function multiplyVector3(a){console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead.");return a.applyProjection(this);},multiplyVector4:function multiplyVector4(a){console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this);},multiplyVector3Array:function multiplyVector3Array(a){console.warn("THREE.Matrix4: .multiplyVector3Array() has been renamed. Use matrix.applyToVector3Array( array ) instead.");return this.applyToVector3Array(a);},rotateAxis:function rotateAxis(a){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.");a.transformDirection(this);},crossVector:function crossVector(a){console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.");return a.applyMatrix4(this);},translate:function translate(a){console.error("THREE.Matrix4: .translate() has been removed.");},rotateX:function rotateX(a){console.error("THREE.Matrix4: .rotateX() has been removed.");},rotateY:function rotateY(a){console.error("THREE.Matrix4: .rotateY() has been removed.");},rotateZ:function rotateZ(a){console.error("THREE.Matrix4: .rotateZ() has been removed.");},rotateByAxis:function rotateByAxis(a,b){console.error("THREE.Matrix4: .rotateByAxis() has been removed.");}});Object.assign(THREE.Plane.prototype,{isIntersectionLine:function isIntersectionLine(a){console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine().");return this.intersectsLine(a);}});Object.assign(THREE.Quaternion.prototype,{multiplyVector3:function multiplyVector3(a){console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.");return a.applyQuaternion(this);}});Object.assign(THREE.Ray.prototype,{isIntersectionBox:function isIntersectionBox(a){console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox().");return this.intersectsBox(a);},isIntersectionPlane:function isIntersectionPlane(a){console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane().");return this.intersectsPlane(a);},isIntersectionSphere:function isIntersectionSphere(a){console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere().");return this.intersectsSphere(a);}});Object.assign(THREE.Vector3.prototype,{setEulerFromRotationMatrix:function setEulerFromRotationMatrix(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.");},setEulerFromQuaternion:function setEulerFromQuaternion(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.");},getPositionFromMatrix:function getPositionFromMatrix(a){console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition().");return this.setFromMatrixPosition(a);},getScaleFromMatrix:function getScaleFromMatrix(a){console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale().");return this.setFromMatrixScale(a);},getColumnFromMatrix:function getColumnFromMatrix(a,b){console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().");return this.setFromMatrixColumn(b,a);}});Object.assign(THREE.Object3D.prototype,{getChildByName:function getChildByName(a){console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName().");return this.getObjectByName(a);},renderDepth:function renderDepth(a){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.");},translate:function translate(a,b){console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead.");return this.translateOnAxis(b,a);}});Object.defineProperties(THREE.Object3D.prototype,{eulerOrder:{get:function get(){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order.");return this.rotation.order;},set:function set(a){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order.");this.rotation.order=a;}},useQuaternion:{get:function get(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.");},set:function set(a){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.");}}});Object.defineProperties(THREE.LOD.prototype,{objects:{get:function get(){console.warn("THREE.LOD: .objects has been renamed to .levels.");return this.levels;}}});THREE.PerspectiveCamera.prototype.setLens=function(a,b){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup.");void 0!==b&&(this.filmGauge=b);this.setFocalLength(a);};Object.defineProperties(THREE.Light.prototype,{onlyShadow:{set:function set(a){console.warn("THREE.Light: .onlyShadow has been removed.");}},shadowCameraFov:{set:function set(a){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov.");this.shadow.camera.fov=a;}},shadowCameraLeft:{set:function set(a){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left.");this.shadow.camera.left=a;}},shadowCameraRight:{set:function set(a){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right.");this.shadow.camera.right=a;}},shadowCameraTop:{set:function set(a){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top.");this.shadow.camera.top=a;}},shadowCameraBottom:{set:function set(a){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom.");this.shadow.camera.bottom=a;}},shadowCameraNear:{set:function set(a){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near.");this.shadow.camera.near=a;}},shadowCameraFar:{set:function set(a){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far.");this.shadow.camera.far=a;}},shadowCameraVisible:{set:function set(a){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.");}},shadowBias:{set:function set(a){console.warn("THREE.Light: .shadowBias is now .shadow.bias.");this.shadow.bias=a;}},shadowDarkness:{set:function set(a){console.warn("THREE.Light: .shadowDarkness has been removed.");}},shadowMapWidth:{set:function set(a){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width.");this.shadow.mapSize.width=a;}},shadowMapHeight:{set:function set(a){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height.");this.shadow.mapSize.height=a;}}});Object.defineProperties(THREE.BufferAttribute.prototype,{length:{get:function get(){console.warn("THREE.BufferAttribute: .length has been deprecated. Please use .count.");return this.array.length;}}});Object.assign(THREE.BufferGeometry.prototype,{addIndex:function addIndex(a){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex().");this.setIndex(a);},addDrawCall:function addDrawCall(a,b,c){void 0!==c&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset.");console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup().");this.addGroup(a,b);},clearDrawCalls:function clearDrawCalls(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups().");this.clearGroups();},computeTangents:function computeTangents(){console.warn("THREE.BufferGeometry: .computeTangents() has been removed.");},computeOffsets:function computeOffsets(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.");}});Object.defineProperties(THREE.BufferGeometry.prototype,{drawcalls:{get:function get(){console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups.");return this.groups;}},offsets:{get:function get(){console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups.");return this.groups;}}});Object.defineProperties(THREE.Material.prototype,{wrapAround:{get:function get(){console.warn("THREE."+this.type+": .wrapAround has been removed.");},set:function set(a){console.warn("THREE."+this.type+": .wrapAround has been removed.");}},wrapRGB:{get:function get(){console.warn("THREE."+this.type+": .wrapRGB has been removed.");return new THREE.Color();}}});Object.defineProperties(THREE.MeshPhongMaterial.prototype,{metal:{get:function get(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead.");return!1;},set:function set(a){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead");}}});Object.defineProperties(THREE.ShaderMaterial.prototype,{derivatives:{get:function get(){console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives.");return this.extensions.derivatives;},set:function set(a){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives.");this.extensions.derivatives=a;}}});THREE.EventDispatcher.prototype=Object.assign(Object.create({constructor:THREE.EventDispatcher,apply:function apply(a){console.warn("THREE.EventDispatcher: .apply is deprecated, just inherit or Object.assign the prototype to mix-in.");Object.assign(a,this);}}),THREE.EventDispatcher.prototype);Object.assign(THREE.WebGLRenderer.prototype,{supportsFloatTextures:function supportsFloatTextures(){console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' ).");return this.extensions.get("OES_texture_float");},supportsHalfFloatTextures:function supportsHalfFloatTextures(){console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' ).");return this.extensions.get("OES_texture_half_float");},supportsStandardDerivatives:function supportsStandardDerivatives(){console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' ).");return this.extensions.get("OES_standard_derivatives");},supportsCompressedTextureS3TC:function supportsCompressedTextureS3TC(){console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' ).");return this.extensions.get("WEBGL_compressed_texture_s3tc");},supportsCompressedTexturePVRTC:function supportsCompressedTexturePVRTC(){console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' ).");return this.extensions.get("WEBGL_compressed_texture_pvrtc");},supportsBlendMinMax:function supportsBlendMinMax(){console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' ).");return this.extensions.get("EXT_blend_minmax");},supportsVertexTextures:function supportsVertexTextures(){return this.capabilities.vertexTextures;},supportsInstancedArrays:function supportsInstancedArrays(){console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' ).");return this.extensions.get("ANGLE_instanced_arrays");},enableScissorTest:function enableScissorTest(a){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest().");this.setScissorTest(a);},initMaterial:function initMaterial(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.");},addPrePlugin:function addPrePlugin(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.");},addPostPlugin:function addPostPlugin(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.");},updateShadowMap:function updateShadowMap(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.");}});Object.defineProperties(THREE.WebGLRenderer.prototype,{shadowMapEnabled:{get:function get(){return this.shadowMap.enabled;},set:function set(a){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled.");this.shadowMap.enabled=a;}},shadowMapType:{get:function get(){return this.shadowMap.type;},set:function set(a){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type.");this.shadowMap.type=a;}},shadowMapCullFace:{get:function get(){return this.shadowMap.cullFace;},set:function set(a){console.warn("THREE.WebGLRenderer: .shadowMapCullFace is now .shadowMap.cullFace.");this.shadowMap.cullFace=a;}}});Object.defineProperties(THREE.WebGLShadowMap.prototype,{cullFace:{get:function get(){return this.renderReverseSided?THREE.CullFaceFront:THREE.CullFaceBack;},set:function set(a){a=a!==THREE.CullFaceBack;console.warn("WebGLRenderer: .shadowMap.cullFace is deprecated. Set .shadowMap.renderReverseSided to "+a+".");this.renderReverseSided=a;}}});Object.defineProperties(THREE.WebGLRenderTarget.prototype,{wrapS:{get:function get(){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.");return this.texture.wrapS;},set:function set(a){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.");this.texture.wrapS=a;}},wrapT:{get:function get(){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.");return this.texture.wrapT;},set:function set(a){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.");this.texture.wrapT=a;}},magFilter:{get:function get(){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.");return this.texture.magFilter;},set:function set(a){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.");this.texture.magFilter=a;}},minFilter:{get:function get(){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.");return this.texture.minFilter;},set:function set(a){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.");this.texture.minFilter=a;}},anisotropy:{get:function get(){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.");return this.texture.anisotropy;},set:function set(a){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.");this.texture.anisotropy=a;}},offset:{get:function get(){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset.");return this.texture.offset;},set:function set(a){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset.");this.texture.offset=a;}},repeat:{get:function get(){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat.");return this.texture.repeat;},set:function set(a){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat.");this.texture.repeat=a;}},format:{get:function get(){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format.");return this.texture.format;},set:function set(a){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format.");this.texture.format=a;}},type:{get:function get(){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type.");return this.texture.type;},set:function set(a){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type.");this.texture.type=a;}},generateMipmaps:{get:function get(){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.");return this.texture.generateMipmaps;},set:function set(a){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.");this.texture.generateMipmaps=a;}}});Object.assign(THREE.Audio.prototype,{load:function load(a){console.warn("THREE.Audio: .load has been deprecated. Please use THREE.AudioLoader.");var b=this;new THREE.AudioLoader().load(a,function(a){b.setBuffer(a);});return this;}});Object.assign(THREE.AudioAnalyser.prototype,{getData:function getData(a){console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData().");return this.getFrequencyData();}});THREE.GeometryUtils={merge:function merge(a,b,c){console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");var d;b instanceof THREE.Mesh&&(b.matrixAutoUpdate&&b.updateMatrix(),d=b.matrix,b=b.geometry);a.merge(b,d,c);},center:function center(a){console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead.");return a.center();}};THREE.ImageUtils={crossOrigin:void 0,loadTexture:function loadTexture(a,b,c,d){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");var e=new THREE.TextureLoader();e.setCrossOrigin(this.crossOrigin);a=e.load(a,c,void 0,d);b&&(a.mapping=b);return a;},loadTextureCube:function loadTextureCube(a,b,c,d){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");var e=new THREE.CubeTextureLoader();e.setCrossOrigin(this.crossOrigin);a=e.load(a,c,void 0,d);b&&(a.mapping=b);return a;},loadCompressedTexture:function loadCompressedTexture(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.");},loadCompressedTextureCube:function loadCompressedTextureCube(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.");}};THREE.Projector=function(){console.error("THREE.Projector has been moved to /examples/js/renderers/Projector.js.");this.projectVector=function(a,b){console.warn("THREE.Projector: .projectVector() is now vector.project().");a.project(b);};this.unprojectVector=function(a,b){console.warn("THREE.Projector: .unprojectVector() is now vector.unproject().");a.unproject(b);};this.pickingRay=function(a,b){console.error("THREE.Projector: .pickingRay() is now raycaster.setFromCamera().");};};THREE.CanvasRenderer=function(){console.error("THREE.CanvasRenderer has been moved to /examples/js/renderers/CanvasRenderer.js");this.domElement=document.createElementNS("http://www.w3.org/1999/xhtml","canvas");this.clear=function(){};this.render=function(){};this.setClearColor=function(){};this.setSize=function(){};};THREE.CurveUtils={tangentQuadraticBezier:function tangentQuadraticBezier(a,b,c,d){return 2*(1-a)*(c-b)+2*a*(d-c);},tangentCubicBezier:function tangentCubicBezier(a,b,c,d,e){return-3*b*(1-a)*(1-a)+3*c*(1-a)*(1-a)-6*a*c*(1-a)+6*a*d*(1-a)-3*a*a*d+3*a*a*e;},tangentSpline:function tangentSpline(a,b,c,d,e){return 6*a*a-6*a+(3*a*a-4*a+1)+(-6*a*a+6*a)+(3*a*a-2*a);},interpolate:function interpolate(a,b,c,d,e){a=.5*(c-a);d=.5*(d-b);var f=e*e;return(2*b-2*c+a+d)*e*f+(-3*b+3*c-2*a-d)*f+a*e+b;}};THREE.SceneUtils={createMultiMaterialObject:function createMultiMaterialObject(a,b){for(var c=new THREE.Group(),d=0,e=b.length;d<e;d++){c.add(new THREE.Mesh(a,b[d]));}return c;},detach:function detach(a,b,c){a.applyMatrix(b.matrixWorld);b.remove(a);c.add(a);},attach:function attach(a,b,c){var d=new THREE.Matrix4();d.getInverse(c.matrixWorld);a.applyMatrix(d);b.remove(a);c.add(a);}};THREE.ShapeUtils={area:function area(a){for(var b=a.length,c=0,d=b-1,e=0;e<b;d=e++){c+=a[d].x*a[e].y-a[e].x*a[d].y;}return .5*c;},triangulate:function(){return function(a,b){var c=a.length;if(3>c)return null;var d=[],e=[],f=[],g,h,k;if(0<THREE.ShapeUtils.area(a))for(h=0;h<c;h++){e[h]=h;}else for(h=0;h<c;h++){e[h]=c-1-h;}var l=2*c;for(h=c-1;2<c;){if(0>=l--){console.warn("THREE.ShapeUtils: Unable to triangulate polygon! in triangulate()");break;}g=h;c<=g&&(g=0);h=g+1;c<=h&&(h=0);k=h+1;c<=k&&(k=0);var m;a:{var p=m=void 0,n=void 0,q=void 0,r=void 0,s=void 0,v=void 0,t=void 0,u=void 0,p=a[e[g]].x,n=a[e[g]].y,q=a[e[h]].x,r=a[e[h]].y,s=a[e[k]].x,v=a[e[k]].y;if(Number.EPSILON>(q-p)*(v-n)-(r-n)*(s-p))m=!1;else{var D=void 0,w=void 0,I=void 0,z=void 0,y=void 0,A=void 0,G=void 0,B=void 0,F=void 0,J=void 0,F=B=G=u=t=void 0,D=s-q,w=v-r,I=p-s,z=n-v,y=q-p,A=r-n;for(m=0;m<c;m++){if(t=a[e[m]].x,u=a[e[m]].y,!(t===p&&u===n||t===q&&u===r||t===s&&u===v)&&(G=t-p,B=u-n,F=t-q,J=u-r,t-=s,u-=v,F=D*J-w*F,G=y*B-A*G,B=I*u-z*t,F>=-Number.EPSILON&&B>=-Number.EPSILON&&G>=-Number.EPSILON)){m=!1;break a;}}m=!0;}}if(m){d.push([a[e[g]],a[e[h]],a[e[k]]]);f.push([e[g],e[h],e[k]]);g=h;for(k=h+1;k<c;g++,k++){e[g]=e[k];}c--;l=2*c;}}return b?f:d;};}(),triangulateShape:function triangulateShape(a,b){function c(a){var b=a.length;2<b&&a[b-1].equals(a[0])&&a.pop();}function d(a,b,c){return a.x!==b.x?a.x<b.x?a.x<=c.x&&c.x<=b.x:b.x<=c.x&&c.x<=a.x:a.y<b.y?a.y<=c.y&&c.y<=b.y:b.y<=c.y&&c.y<=a.y;}function e(a,b,c,e,f){var g=b.x-a.x,h=b.y-a.y,k=e.x-c.x,l=e.y-c.y,m=a.x-c.x,n=a.y-c.y,p=h*k-g*l,G=h*m-g*n;if(Math.abs(p)>Number.EPSILON){if(0<p){if(0>G||G>p)return[];k=l*m-k*n;if(0>k||k>p)return[];}else{if(0<G||G<p)return[];k=l*m-k*n;if(0<k||k<p)return[];}if(0===k)return!f||0!==G&&G!==p?[a]:[];if(k===p)return!f||0!==G&&G!==p?[b]:[];if(0===G)return[c];if(G===p)return[e];f=k/p;return[{x:a.x+f*g,y:a.y+f*h}];}if(0!==G||l*m!==k*n)return[];h=0===g&&0===h;k=0===k&&0===l;if(h&&k)return a.x!==c.x||a.y!==c.y?[]:[a];if(h)return d(c,e,a)?[a]:[];if(k)return d(a,b,c)?[c]:[];0!==g?(a.x<b.x?(g=a,k=a.x,h=b,a=b.x):(g=b,k=b.x,h=a,a=a.x),c.x<e.x?(b=c,p=c.x,l=e,c=e.x):(b=e,p=e.x,l=c,c=c.x)):(a.y<b.y?(g=a,k=a.y,h=b,a=b.y):(g=b,k=b.y,h=a,a=a.y),c.y<e.y?(b=c,p=c.y,l=e,c=e.y):(b=e,p=e.y,l=c,c=c.y));return k<=p?a<p?[]:a===p?f?[]:[b]:a<=c?[b,h]:[b,l]:k>c?[]:k===c?f?[]:[g]:a<=c?[g,h]:[g,l];}function f(a,b,c,d){var e=b.x-a.x,f=b.y-a.y;b=c.x-a.x;c=c.y-a.y;var g=d.x-a.x;d=d.y-a.y;a=e*c-f*b;e=e*d-f*g;return Math.abs(a)>Number.EPSILON?(b=g*c-d*b,0<a?0<=e&&0<=b:0<=e||0<=b):0<e;}c(a);b.forEach(c);var g,h,k,l,m,p={};k=a.concat();g=0;for(h=b.length;g<h;g++){Array.prototype.push.apply(k,b[g]);}g=0;for(h=k.length;g<h;g++){m=k[g].x+":"+k[g].y,void 0!==p[m]&&console.warn("THREE.ShapeUtils: Duplicate point",m,g),p[m]=g;}g=function(a,b){function c(a,b){var d=h.length-1,e=a-1;0>e&&(e=d);var g=a+1;g>d&&(g=0);d=f(h[a],h[e],h[g],k[b]);if(!d)return!1;d=k.length-1;e=b-1;0>e&&(e=d);g=b+1;g>d&&(g=0);return(d=f(k[b],k[e],k[g],h[a]))?!0:!1;}function d(a,b){var c,f;for(c=0;c<h.length;c++){if(f=c+1,f%=h.length,f=e(a,b,h[c],h[f],!0),0<f.length)return!0;}return!1;}function g(a,c){var d,f,h,k;for(d=0;d<l.length;d++){for(f=b[l[d]],h=0;h<f.length;h++){if(k=h+1,k%=f.length,k=e(a,c,f[h],f[k],!0),0<k.length)return!0;}}return!1;}var h=a.concat(),k,l=[],m,n,p,A,G,B=[],F,J,P,K=0;for(m=b.length;K<m;K++){l.push(K);}F=0;for(var H=2*l.length;0<l.length;){H--;if(0>H){console.log("Infinite Loop! Holes left:"+l.length+", Probably Hole outside Shape!");break;}for(n=F;n<h.length;n++){p=h[n];m=-1;for(K=0;K<l.length;K++){if(A=l[K],G=p.x+":"+p.y+":"+A,void 0===B[G]){k=b[A];for(J=0;J<k.length;J++){if(A=k[J],c(n,J)&&!d(p,A)&&!g(p,A)){m=J;l.splice(K,1);F=h.slice(0,n+1);A=h.slice(n);J=k.slice(m);P=k.slice(0,m+1);h=F.concat(J).concat(P).concat(A);F=n;break;}}if(0<=m)break;B[G]=!0;}}if(0<=m)break;}}return h;}(a,b);var n=THREE.ShapeUtils.triangulate(g,!1);g=0;for(h=n.length;g<h;g++){for(l=n[g],k=0;3>k;k++){m=l[k].x+":"+l[k].y,m=p[m],void 0!==m&&(l[k]=m);}}return n.concat();},isClockWise:function isClockWise(a){return 0>THREE.ShapeUtils.area(a);},b2:function(){return function(a,b,c,d){var e=1-a;return e*e*b+2*(1-a)*a*c+a*a*d;};}(),b3:function(){return function(a,b,c,d,e){var f=1-a,g=1-a;return f*f*f*b+3*g*g*a*c+3*(1-a)*a*a*d+a*a*a*e;};}()};THREE.Curve=function(){};THREE.Curve.prototype={constructor:THREE.Curve,getPoint:function getPoint(a){console.warn("THREE.Curve: Warning, getPoint() not implemented!");return null;},getPointAt:function getPointAt(a){a=this.getUtoTmapping(a);return this.getPoint(a);},getPoints:function getPoints(a){a||(a=5);for(var b=[],c=0;c<=a;c++){b.push(this.getPoint(c/a));}return b;},getSpacedPoints:function getSpacedPoints(a){a||(a=5);for(var b=[],c=0;c<=a;c++){b.push(this.getPointAt(c/a));}return b;},getLength:function getLength(){var a=this.getLengths();return a[a.length-1];},getLengths:function getLengths(a){a||(a=this.__arcLengthDivisions?this.__arcLengthDivisions:200);if(this.cacheArcLengths&&this.cacheArcLengths.length===a+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;var b=[],c,d=this.getPoint(0),e,f=0;b.push(0);for(e=1;e<=a;e++){c=this.getPoint(e/a),f+=c.distanceTo(d),b.push(f),d=c;}return this.cacheArcLengths=b;},updateArcLengths:function updateArcLengths(){this.needsUpdate=!0;this.getLengths();},getUtoTmapping:function getUtoTmapping(a,b){var c=this.getLengths(),d=0,e=c.length,f;f=b?b:a*c[e-1];for(var g=0,h=e-1,k;g<=h;){if(d=Math.floor(g+(h-g)/2),k=c[d]-f,0>k)g=d+1;else if(0<k)h=d-1;else{h=d;break;}}d=h;if(c[d]===f)return d/(e-1);g=c[d];return c=(d+(f-g)/(c[d+1]-g))/(e-1);},getTangent:function getTangent(a){var b=a-1E-4;a+=1E-4;0>b&&(b=0);1<a&&(a=1);b=this.getPoint(b);return this.getPoint(a).clone().sub(b).normalize();},getTangentAt:function getTangentAt(a){a=this.getUtoTmapping(a);return this.getTangent(a);}};THREE.Curve.create=function(a,b){a.prototype=Object.create(THREE.Curve.prototype);a.prototype.constructor=a;a.prototype.getPoint=b;return a;};THREE.CurvePath=function(){this.curves=[];this.autoClose=!1;};THREE.CurvePath.prototype=Object.assign(Object.create(THREE.Curve.prototype),{constructor:THREE.CurvePath,add:function add(a){this.curves.push(a);},closePath:function closePath(){var a=this.curves[0].getPoint(0),b=this.curves[this.curves.length-1].getPoint(1);a.equals(b)||this.curves.push(new THREE.LineCurve(b,a));},getPoint:function getPoint(a){var b=a*this.getLength(),c=this.getCurveLengths();for(a=0;a<c.length;){if(c[a]>=b)return b=c[a]-b,a=this.curves[a],c=a.getLength(),a.getPointAt(0===c?0:1-b/c);a++;}return null;},getLength:function getLength(){var a=this.getCurveLengths();return a[a.length-1];},updateArcLengths:function updateArcLengths(){this.needsUpdate=!0;this.cacheLengths=null;this.getLengths();},getCurveLengths:function getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;for(var a=[],b=0,c=0,d=this.curves.length;c<d;c++){b+=this.curves[c].getLength(),a.push(b);}return this.cacheLengths=a;},getSpacedPoints:function getSpacedPoints(a){a||(a=40);for(var b=[],c=0;c<=a;c++){b.push(this.getPoint(c/a));}this.autoClose&&b.push(b[0]);return b;},getPoints:function getPoints(a){a=a||12;for(var b=[],c,d=0,e=this.curves;d<e.length;d++){for(var f=e[d],f=f.getPoints(f instanceof THREE.EllipseCurve?2*a:f instanceof THREE.LineCurve?1:f instanceof THREE.SplineCurve?a*f.points.length:a),g=0;g<f.length;g++){var h=f[g];c&&c.equals(h)||(b.push(h),c=h);}}this.autoClose&&1<b.length&&!b[b.length-1].equals(b[0])&&b.push(b[0]);return b;},createPointsGeometry:function createPointsGeometry(a){a=this.getPoints(a);return this.createGeometry(a);},createSpacedPointsGeometry:function createSpacedPointsGeometry(a){a=this.getSpacedPoints(a);return this.createGeometry(a);},createGeometry:function createGeometry(a){for(var b=new THREE.Geometry(),c=0,d=a.length;c<d;c++){var e=a[c];b.vertices.push(new THREE.Vector3(e.x,e.y,e.z||0));}return b;}});THREE.Font=function(a){this.data=a;};Object.assign(THREE.Font.prototype,{generateShapes:function generateShapes(a,b,c){void 0===b&&(b=100);void 0===c&&(c=4);var d=this.data;a=String(a).split("");var e=b/d.resolution,f=0;b=[];for(var g=0;g<a.length;g++){var h;h=e;var k=f,l=d.glyphs[a[g]]||d.glyphs["?"];if(l){var m=new THREE.ShapePath(),p=[],n=THREE.ShapeUtils.b2,q=THREE.ShapeUtils.b3,r=void 0,s=void 0,v=s=r=void 0,t=void 0,u=void 0,D=void 0,w=void 0,I=void 0,t=void 0;if(l.o)for(var z=l._cachedOutline||(l._cachedOutline=l.o.split(" ")),y=0,A=z.length;y<A;){switch(z[y++]){case"m":r=z[y++]*h+k;s=z[y++]*h;m.moveTo(r,s);break;case"l":r=z[y++]*h+k;s=z[y++]*h;m.lineTo(r,s);break;case"q":r=z[y++]*h+k;s=z[y++]*h;u=z[y++]*h+k;D=z[y++]*h;m.quadraticCurveTo(u,D,r,s);if(t=p[p.length-1])for(var v=t.x,t=t.y,G=1;G<=c;G++){var B=G/c;n(B,v,u,r);n(B,t,D,s);}break;case"b":if(r=z[y++]*h+k,s=z[y++]*h,u=z[y++]*h+k,D=z[y++]*h,w=z[y++]*h+k,I=z[y++]*h,m.bezierCurveTo(u,D,w,I,r,s),t=p[p.length-1])for(v=t.x,t=t.y,G=1;G<=c;G++){B=G/c,q(B,v,u,w,r),q(B,t,D,I,s);}}}h={offset:l.ha*h,path:m};}else h=void 0;f+=h.offset;b.push(h.path);}c=[];d=0;for(a=b.length;d<a;d++){Array.prototype.push.apply(c,b[d].toShapes());}return c;}});THREE.Path=function(a){THREE.CurvePath.call(this);this.currentPoint=new THREE.Vector2();a&&this.fromPoints(a);};THREE.Path.prototype=Object.assign(Object.create(THREE.CurvePath.prototype),{constructor:THREE.Path,fromPoints:function fromPoints(a){this.moveTo(a[0].x,a[0].y);for(var b=1,c=a.length;b<c;b++){this.lineTo(a[b].x,a[b].y);}},moveTo:function moveTo(a,b){this.currentPoint.set(a,b);},lineTo:function lineTo(a,b){var c=new THREE.LineCurve(this.currentPoint.clone(),new THREE.Vector2(a,b));this.curves.push(c);this.currentPoint.set(a,b);},quadraticCurveTo:function quadraticCurveTo(a,b,c,d){a=new THREE.QuadraticBezierCurve(this.currentPoint.clone(),new THREE.Vector2(a,b),new THREE.Vector2(c,d));this.curves.push(a);this.currentPoint.set(c,d);},bezierCurveTo:function bezierCurveTo(a,b,c,d,e,f){a=new THREE.CubicBezierCurve(this.currentPoint.clone(),new THREE.Vector2(a,b),new THREE.Vector2(c,d),new THREE.Vector2(e,f));this.curves.push(a);this.currentPoint.set(e,f);},splineThru:function splineThru(a){var b=[this.currentPoint.clone()].concat(a),b=new THREE.SplineCurve(b);this.curves.push(b);this.currentPoint.copy(a[a.length-1]);},arc:function arc(a,b,c,d,e,f){this.absarc(a+this.currentPoint.x,b+this.currentPoint.y,c,d,e,f);},absarc:function absarc(a,b,c,d,e,f){this.absellipse(a,b,c,c,d,e,f);},ellipse:function ellipse(a,b,c,d,e,f,g,h){this.absellipse(a+this.currentPoint.x,b+this.currentPoint.y,c,d,e,f,g,h);},absellipse:function absellipse(a,b,c,d,e,f,g,h){a=new THREE.EllipseCurve(a,b,c,d,e,f,g,h);0<this.curves.length&&(b=a.getPoint(0),b.equals(this.currentPoint)||this.lineTo(b.x,b.y));this.curves.push(a);a=a.getPoint(1);this.currentPoint.copy(a);}});THREE.ShapePath=function(){this.subPaths=[];this.currentPath=null;};THREE.ShapePath.prototype={moveTo:function moveTo(a,b){this.currentPath=new THREE.Path();this.subPaths.push(this.currentPath);this.currentPath.moveTo(a,b);},lineTo:function lineTo(a,b){this.currentPath.lineTo(a,b);},quadraticCurveTo:function quadraticCurveTo(a,b,c,d){this.currentPath.quadraticCurveTo(a,b,c,d);},bezierCurveTo:function bezierCurveTo(a,b,c,d,e,f){this.currentPath.bezierCurveTo(a,b,c,d,e,f);},splineThru:function splineThru(a){this.currentPath.splineThru(a);},toShapes:function toShapes(a,b){function c(a){for(var b=[],c=0,d=a.length;c<d;c++){var e=a[c],f=new THREE.Shape();f.curves=e.curves;b.push(f);}return b;}function d(a,b){for(var c=b.length,d=!1,e=c-1,f=0;f<c;e=f++){var g=b[e],h=b[f],k=h.x-g.x,l=h.y-g.y;if(Math.abs(l)>Number.EPSILON){if(0>l&&(g=b[f],k=-k,h=b[e],l=-l),!(a.y<g.y||a.y>h.y))if(a.y===g.y){if(a.x===g.x)return!0;}else{e=l*(a.x-g.x)-k*(a.y-g.y);if(0===e)return!0;0>e||(d=!d);}}else if(a.y===g.y&&(h.x<=a.x&&a.x<=g.x||g.x<=a.x&&a.x<=h.x))return!0;}return d;}var e=THREE.ShapeUtils.isClockWise,f=this.subPaths;if(0===f.length)return[];if(!0===b)return c(f);var g,h,k,l=[];if(1===f.length)return h=f[0],k=new THREE.Shape(),k.curves=h.curves,l.push(k),l;var m=!e(f[0].getPoints()),m=a?!m:m;k=[];var p=[],n=[],q=0,r;p[q]=void 0;n[q]=[];for(var s=0,v=f.length;s<v;s++){h=f[s],r=h.getPoints(),g=e(r),(g=a?!g:g)?(!m&&p[q]&&q++,p[q]={s:new THREE.Shape(),p:r},p[q].s.curves=h.curves,m&&q++,n[q]=[]):n[q].push({h:h,p:r[0]});}if(!p[0])return c(f);if(1<p.length){s=!1;h=[];e=0;for(f=p.length;e<f;e++){k[e]=[];}e=0;for(f=p.length;e<f;e++){for(g=n[e],m=0;m<g.length;m++){q=g[m];r=!0;for(v=0;v<p.length;v++){d(q.p,p[v].p)&&(e!==v&&h.push({froms:e,tos:v,hole:m}),r?(r=!1,k[v].push(q)):s=!0);}r&&k[e].push(q);}}0<h.length&&(s||(n=k));}s=0;for(e=p.length;s<e;s++){for(k=p[s].s,l.push(k),h=n[s],f=0,g=h.length;f<g;f++){k.holes.push(h[f].h);}}return l;}};THREE.Shape=function(){THREE.Path.apply(this,arguments);this.holes=[];};THREE.Shape.prototype=Object.assign(Object.create(THREE.Path.prototype),{constructor:THREE.Shape,extrude:function extrude(a){return new THREE.ExtrudeGeometry(this,a);},makeGeometry:function makeGeometry(a){return new THREE.ShapeGeometry(this,a);},getPointsHoles:function getPointsHoles(a){for(var b=[],c=0,d=this.holes.length;c<d;c++){b[c]=this.holes[c].getPoints(a);}return b;},extractAllPoints:function extractAllPoints(a){return{shape:this.getPoints(a),holes:this.getPointsHoles(a)};},extractPoints:function extractPoints(a){return this.extractAllPoints(a);}});THREE.LineCurve=function(a,b){this.v1=a;this.v2=b;};THREE.LineCurve.prototype=Object.create(THREE.Curve.prototype);THREE.LineCurve.prototype.constructor=THREE.LineCurve;THREE.LineCurve.prototype.getPoint=function(a){if(1===a)return this.v2.clone();var b=this.v2.clone().sub(this.v1);b.multiplyScalar(a).add(this.v1);return b;};THREE.LineCurve.prototype.getPointAt=function(a){return this.getPoint(a);};THREE.LineCurve.prototype.getTangent=function(a){return this.v2.clone().sub(this.v1).normalize();};THREE.QuadraticBezierCurve=function(a,b,c){this.v0=a;this.v1=b;this.v2=c;};THREE.QuadraticBezierCurve.prototype=Object.create(THREE.Curve.prototype);THREE.QuadraticBezierCurve.prototype.constructor=THREE.QuadraticBezierCurve;THREE.QuadraticBezierCurve.prototype.getPoint=function(a){var b=THREE.ShapeUtils.b2;return new THREE.Vector2(b(a,this.v0.x,this.v1.x,this.v2.x),b(a,this.v0.y,this.v1.y,this.v2.y));};THREE.QuadraticBezierCurve.prototype.getTangent=function(a){var b=THREE.CurveUtils.tangentQuadraticBezier;return new THREE.Vector2(b(a,this.v0.x,this.v1.x,this.v2.x),b(a,this.v0.y,this.v1.y,this.v2.y)).normalize();};THREE.CubicBezierCurve=function(a,b,c,d){this.v0=a;this.v1=b;this.v2=c;this.v3=d;};THREE.CubicBezierCurve.prototype=Object.create(THREE.Curve.prototype);THREE.CubicBezierCurve.prototype.constructor=THREE.CubicBezierCurve;THREE.CubicBezierCurve.prototype.getPoint=function(a){var b=THREE.ShapeUtils.b3;return new THREE.Vector2(b(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x),b(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y));};THREE.CubicBezierCurve.prototype.getTangent=function(a){var b=THREE.CurveUtils.tangentCubicBezier;return new THREE.Vector2(b(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x),b(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y)).normalize();};THREE.SplineCurve=function(a){this.points=void 0==a?[]:a;};THREE.SplineCurve.prototype=Object.create(THREE.Curve.prototype);THREE.SplineCurve.prototype.constructor=THREE.SplineCurve;THREE.SplineCurve.prototype.getPoint=function(a){var b=this.points;a*=b.length-1;var c=Math.floor(a);a-=c;var d=b[0===c?c:c-1],e=b[c],f=b[c>b.length-2?b.length-1:c+1],b=b[c>b.length-3?b.length-1:c+2],c=THREE.CurveUtils.interpolate;return new THREE.Vector2(c(d.x,e.x,f.x,b.x,a),c(d.y,e.y,f.y,b.y,a));};THREE.EllipseCurve=function(a,b,c,d,e,f,g,h){this.aX=a;this.aY=b;this.xRadius=c;this.yRadius=d;this.aStartAngle=e;this.aEndAngle=f;this.aClockwise=g;this.aRotation=h||0;};THREE.EllipseCurve.prototype=Object.create(THREE.Curve.prototype);THREE.EllipseCurve.prototype.constructor=THREE.EllipseCurve;THREE.EllipseCurve.prototype.getPoint=function(a){for(var b=2*Math.PI,c=this.aEndAngle-this.aStartAngle,d=Math.abs(c)<Number.EPSILON;0>c;){c+=b;}for(;c>b;){c-=b;}c<Number.EPSILON&&(c=d?0:b);!0!==this.aClockwise||d||(c=c===b?-b:c-b);b=this.aStartAngle+a*c;a=this.aX+this.xRadius*Math.cos(b);var e=this.aY+this.yRadius*Math.sin(b);0!==this.aRotation&&(b=Math.cos(this.aRotation),c=Math.sin(this.aRotation),d=a-this.aX,e-=this.aY,a=d*b-e*c+this.aX,e=d*c+e*b+this.aY);return new THREE.Vector2(a,e);};THREE.ArcCurve=function(a,b,c,d,e,f){THREE.EllipseCurve.call(this,a,b,c,c,d,e,f);};THREE.ArcCurve.prototype=Object.create(THREE.EllipseCurve.prototype);THREE.ArcCurve.prototype.constructor=THREE.ArcCurve;THREE.LineCurve3=THREE.Curve.create(function(a,b){this.v1=a;this.v2=b;},function(a){if(1===a)return this.v2.clone();var b=new THREE.Vector3();b.subVectors(this.v2,this.v1);b.multiplyScalar(a);b.add(this.v1);return b;});THREE.QuadraticBezierCurve3=THREE.Curve.create(function(a,b,c){this.v0=a;this.v1=b;this.v2=c;},function(a){var b=THREE.ShapeUtils.b2;return new THREE.Vector3(b(a,this.v0.x,this.v1.x,this.v2.x),b(a,this.v0.y,this.v1.y,this.v2.y),b(a,this.v0.z,this.v1.z,this.v2.z));});THREE.CubicBezierCurve3=THREE.Curve.create(function(a,b,c,d){this.v0=a;this.v1=b;this.v2=c;this.v3=d;},function(a){var b=THREE.ShapeUtils.b3;return new THREE.Vector3(b(a,this.v0.x,this.v1.x,this.v2.x,this.v3.x),b(a,this.v0.y,this.v1.y,this.v2.y,this.v3.y),b(a,this.v0.z,this.v1.z,this.v2.z,this.v3.z));});THREE.SplineCurve3=THREE.Curve.create(function(a){console.warn("THREE.SplineCurve3 will be deprecated. Please use THREE.CatmullRomCurve3");this.points=void 0==a?[]:a;},function(a){var b=this.points;a*=b.length-1;var c=Math.floor(a);a-=c;var d=b[0==c?c:c-1],e=b[c],f=b[c>b.length-2?b.length-1:c+1],b=b[c>b.length-3?b.length-1:c+2],c=THREE.CurveUtils.interpolate;return new THREE.Vector3(c(d.x,e.x,f.x,b.x,a),c(d.y,e.y,f.y,b.y,a),c(d.z,e.z,f.z,b.z,a));});THREE.CatmullRomCurve3=function(){function a(){}var b=new THREE.Vector3(),c=new a(),d=new a(),e=new a();a.prototype.init=function(a,b,c,d){this.c0=a;this.c1=c;this.c2=-3*a+3*b-2*c-d;this.c3=2*a-2*b+c+d;};a.prototype.initNonuniformCatmullRom=function(a,b,c,d,e,m,p){a=((b-a)/e-(c-a)/(e+m)+(c-b)/m)*m;d=((c-b)/m-(d-b)/(m+p)+(d-c)/p)*m;this.init(b,c,a,d);};a.prototype.initCatmullRom=function(a,b,c,d,e){this.init(b,c,e*(c-a),e*(d-b));};a.prototype.calc=function(a){var b=a*a;return this.c0+this.c1*a+this.c2*b+this.c3*b*a;};return THREE.Curve.create(function(a){this.points=a||[];this.closed=!1;},function(a){var g=this.points,h,k;k=g.length;2>k&&console.log("duh, you need at least 2 points");a*=k-(this.closed?0:1);h=Math.floor(a);a-=h;this.closed?h+=0<h?0:(Math.floor(Math.abs(h)/g.length)+1)*g.length:0===a&&h===k-1&&(h=k-2,a=1);var l,m,p;this.closed||0<h?l=g[(h-1)%k]:(b.subVectors(g[0],g[1]).add(g[0]),l=b);m=g[h%k];p=g[(h+1)%k];this.closed||h+2<k?g=g[(h+2)%k]:(b.subVectors(g[k-1],g[k-2]).add(g[k-1]),g=b);if(void 0===this.type||"centripetal"===this.type||"chordal"===this.type){var n="chordal"===this.type?.5:.25;k=Math.pow(l.distanceToSquared(m),n);h=Math.pow(m.distanceToSquared(p),n);n=Math.pow(p.distanceToSquared(g),n);1E-4>h&&(h=1);1E-4>k&&(k=h);1E-4>n&&(n=h);c.initNonuniformCatmullRom(l.x,m.x,p.x,g.x,k,h,n);d.initNonuniformCatmullRom(l.y,m.y,p.y,g.y,k,h,n);e.initNonuniformCatmullRom(l.z,m.z,p.z,g.z,k,h,n);}else"catmullrom"===this.type&&(k=void 0!==this.tension?this.tension:.5,c.initCatmullRom(l.x,m.x,p.x,g.x,k),d.initCatmullRom(l.y,m.y,p.y,g.y,k),e.initCatmullRom(l.z,m.z,p.z,g.z,k));return new THREE.Vector3(c.calc(a),d.calc(a),e.calc(a));});}();THREE.ClosedSplineCurve3=function(a){console.warn("THREE.ClosedSplineCurve3 has been deprecated. Please use THREE.CatmullRomCurve3.");THREE.CatmullRomCurve3.call(this,a);this.type="catmullrom";this.closed=!0;};THREE.ClosedSplineCurve3.prototype=Object.create(THREE.CatmullRomCurve3.prototype);THREE.BoxGeometry=function(a,b,c,d,e,f){THREE.Geometry.call(this);this.type="BoxGeometry";this.parameters={width:a,height:b,depth:c,widthSegments:d,heightSegments:e,depthSegments:f};this.fromBufferGeometry(new THREE.BoxBufferGeometry(a,b,c,d,e,f));this.mergeVertices();};THREE.BoxGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.BoxGeometry.prototype.constructor=THREE.BoxGeometry;THREE.CubeGeometry=THREE.BoxGeometry;THREE.BoxBufferGeometry=function(a,b,c,d,e,f){function g(a,b,c,d,e,f,g,k,l,J,P){var K=f/l,H=g/J,M=f/2,O=g/2,N=k/2;g=l+1;for(var Q=J+1,C=f=0,L=new THREE.Vector3(),E=0;E<Q;E++){for(var $=E*H-O,T=0;T<g;T++){L[a]=(T*K-M)*d,L[b]=$*e,L[c]=N,p[r]=L.x,p[r+1]=L.y,p[r+2]=L.z,L[a]=0,L[b]=0,L[c]=0<k?1:-1,n[r]=L.x,n[r+1]=L.y,n[r+2]=L.z,q[s]=T/l,q[s+1]=1-E/J,r+=3,s+=2,f+=1;}}for(E=0;E<J;E++){for(T=0;T<l;T++){a=t+T+g*(E+1),b=t+(T+1)+g*(E+1),c=t+(T+1)+g*E,m[v]=t+T+g*E,m[v+1]=a,m[v+2]=c,m[v+3]=a,m[v+4]=b,m[v+5]=c,v+=6,C+=6;}}h.addGroup(u,C,P);u+=C;t+=f;}THREE.BufferGeometry.call(this);this.type="BoxBufferGeometry";this.parameters={width:a,height:b,depth:c,widthSegments:d,heightSegments:e,depthSegments:f};var h=this;d=Math.floor(d)||1;e=Math.floor(e)||1;f=Math.floor(f)||1;var k=function(a,b,c){a=0+(a+1)*(b+1)*2+(a+1)*(c+1)*2;return a+=(c+1)*(b+1)*2;}(d,e,f),l=function(a,b,c){a=0+a*b*2+a*c*2;a+=c*b*2;return 6*a;}(d,e,f),m=new(65535<l?Uint32Array:Uint16Array)(l),p=new Float32Array(3*k),n=new Float32Array(3*k),q=new Float32Array(2*k),r=0,s=0,v=0,t=0,u=0;g("z","y","x",-1,-1,c,b,a,f,e,0);g("z","y","x",1,-1,c,b,-a,f,e,1);g("x","z","y",1,1,a,c,b,d,f,2);g("x","z","y",1,-1,a,c,-b,d,f,3);g("x","y","z",1,-1,a,b,c,d,e,4);g("x","y","z",-1,-1,a,b,-c,d,e,5);this.setIndex(new THREE.BufferAttribute(m,1));this.addAttribute("position",new THREE.BufferAttribute(p,3));this.addAttribute("normal",new THREE.BufferAttribute(n,3));this.addAttribute("uv",new THREE.BufferAttribute(q,2));};THREE.BoxBufferGeometry.prototype=Object.create(THREE.BufferGeometry.prototype);THREE.BoxBufferGeometry.prototype.constructor=THREE.BoxBufferGeometry;THREE.CircleGeometry=function(a,b,c,d){THREE.Geometry.call(this);this.type="CircleGeometry";this.parameters={radius:a,segments:b,thetaStart:c,thetaLength:d};this.fromBufferGeometry(new THREE.CircleBufferGeometry(a,b,c,d));};THREE.CircleGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.CircleGeometry.prototype.constructor=THREE.CircleGeometry;THREE.CircleBufferGeometry=function(a,b,c,d){THREE.BufferGeometry.call(this);this.type="CircleBufferGeometry";this.parameters={radius:a,segments:b,thetaStart:c,thetaLength:d};a=a||50;b=void 0!==b?Math.max(3,b):8;c=void 0!==c?c:0;d=void 0!==d?d:2*Math.PI;var e=b+2,f=new Float32Array(3*e),g=new Float32Array(3*e),e=new Float32Array(2*e);g[2]=1;e[0]=.5;e[1]=.5;for(var h=0,k=3,l=2;h<=b;h++,k+=3,l+=2){var m=c+h/b*d;f[k]=a*Math.cos(m);f[k+1]=a*Math.sin(m);g[k+2]=1;e[l]=(f[k]/a+1)/2;e[l+1]=(f[k+1]/a+1)/2;}c=[];for(k=1;k<=b;k++){c.push(k,k+1,0);}this.setIndex(new THREE.BufferAttribute(new Uint16Array(c),1));this.addAttribute("position",new THREE.BufferAttribute(f,3));this.addAttribute("normal",new THREE.BufferAttribute(g,3));this.addAttribute("uv",new THREE.BufferAttribute(e,2));this.boundingSphere=new THREE.Sphere(new THREE.Vector3(),a);};THREE.CircleBufferGeometry.prototype=Object.create(THREE.BufferGeometry.prototype);THREE.CircleBufferGeometry.prototype.constructor=THREE.CircleBufferGeometry;THREE.CylinderBufferGeometry=function(a,b,c,d,e,f,g,h){function k(c){var e,f,k,m=new THREE.Vector2(),n=new THREE.Vector3(),p=0,D=!0===c?a:b,K=!0===c?1:-1;f=t;for(e=1;e<=d;e++){r.setXYZ(t,0,w*K,0),s.setXYZ(t,0,K,0),m.x=.5,m.y=.5,v.setXY(t,m.x,m.y),t++;}k=t;for(e=0;e<=d;e++){var H=e/d*h+g,M=Math.cos(H),H=Math.sin(H);n.x=D*H;n.y=w*K;n.z=D*M;r.setXYZ(t,n.x,n.y,n.z);s.setXYZ(t,0,K,0);m.x=.5*M+.5;m.y=.5*H*K+.5;v.setXY(t,m.x,m.y);t++;}for(e=0;e<d;e++){m=f+e,n=k+e,!0===c?(q.setX(u,n),u++,q.setX(u,n+1)):(q.setX(u,n+1),u++,q.setX(u,n)),u++,q.setX(u,m),u++,p+=3;}l.addGroup(I,p,!0===c?1:2);I+=p;}THREE.BufferGeometry.call(this);this.type="CylinderBufferGeometry";this.parameters={radiusTop:a,radiusBottom:b,height:c,radialSegments:d,heightSegments:e,openEnded:f,thetaStart:g,thetaLength:h};var l=this;a=void 0!==a?a:20;b=void 0!==b?b:20;c=void 0!==c?c:100;d=Math.floor(d)||8;e=Math.floor(e)||1;f=void 0!==f?f:!1;g=void 0!==g?g:0;h=void 0!==h?h:2*Math.PI;var m=0;!1===f&&(0<a&&m++,0<b&&m++);var p=function(){var a=(d+1)*(e+1);!1===f&&(a+=(d+1)*m+d*m);return a;}(),n=function(){var a=d*e*6;!1===f&&(a+=d*m*3);return a;}(),q=new THREE.BufferAttribute(new(65535<n?Uint32Array:Uint16Array)(n),1),r=new THREE.BufferAttribute(new Float32Array(3*p),3),s=new THREE.BufferAttribute(new Float32Array(3*p),3),v=new THREE.BufferAttribute(new Float32Array(2*p),2),t=0,u=0,D=[],w=c/2,I=0;(function(){var f,k,m=new THREE.Vector3(),n=new THREE.Vector3(),p=0,F=(b-a)/c;for(k=0;k<=e;k++){var J=[],P=k/e,K=P*(b-a)+a;for(f=0;f<=d;f++){var H=f/d;n.x=K*Math.sin(H*h+g);n.y=-P*c+w;n.z=K*Math.cos(H*h+g);r.setXYZ(t,n.x,n.y,n.z);m.copy(n);if(0===a&&0===k||0===b&&k===e)m.x=Math.sin(H*h+g),m.z=Math.cos(H*h+g);m.setY(Math.sqrt(m.x*m.x+m.z*m.z)*F).normalize();s.setXYZ(t,m.x,m.y,m.z);v.setXY(t,H,1-P);J.push(t);t++;}D.push(J);}for(f=0;f<d;f++){for(k=0;k<e;k++){m=D[k+1][f],n=D[k+1][f+1],F=D[k][f+1],q.setX(u,D[k][f]),u++,q.setX(u,m),u++,q.setX(u,F),u++,q.setX(u,m),u++,q.setX(u,n),u++,q.setX(u,F),u++,p+=6;}}l.addGroup(I,p,0);I+=p;})();!1===f&&(0<a&&k(!0),0<b&&k(!1));this.setIndex(q);this.addAttribute("position",r);this.addAttribute("normal",s);this.addAttribute("uv",v);};THREE.CylinderBufferGeometry.prototype=Object.create(THREE.BufferGeometry.prototype);THREE.CylinderBufferGeometry.prototype.constructor=THREE.CylinderBufferGeometry;THREE.CylinderGeometry=function(a,b,c,d,e,f,g,h){THREE.Geometry.call(this);this.type="CylinderGeometry";this.parameters={radiusTop:a,radiusBottom:b,height:c,radialSegments:d,heightSegments:e,openEnded:f,thetaStart:g,thetaLength:h};this.fromBufferGeometry(new THREE.CylinderBufferGeometry(a,b,c,d,e,f,g,h));this.mergeVertices();};THREE.CylinderGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.CylinderGeometry.prototype.constructor=THREE.CylinderGeometry;THREE.ConeBufferGeometry=function(a,b,c,d,e,f,g){THREE.CylinderBufferGeometry.call(this,0,a,b,c,d,e,f,g);this.type="ConeBufferGeometry";this.parameters={radius:a,height:b,radialSegments:c,heightSegments:d,thetaStart:f,thetaLength:g};};THREE.ConeBufferGeometry.prototype=Object.create(THREE.BufferGeometry.prototype);THREE.ConeBufferGeometry.prototype.constructor=THREE.ConeBufferGeometry;THREE.ConeGeometry=function(a,b,c,d,e,f,g){THREE.CylinderGeometry.call(this,0,a,b,c,d,e,f,g);this.type="ConeGeometry";this.parameters={radius:a,height:b,radialSegments:c,heightSegments:d,openEnded:e,thetaStart:f,thetaLength:g};};THREE.ConeGeometry.prototype=Object.create(THREE.CylinderGeometry.prototype);THREE.ConeGeometry.prototype.constructor=THREE.ConeGeometry;THREE.EdgesGeometry=function(a,b){function c(a,b){return a-b;}THREE.BufferGeometry.call(this);var d=Math.cos(THREE.Math.DEG2RAD*(void 0!==b?b:1)),e=[0,0],f={},g=["a","b","c"],h;a instanceof THREE.BufferGeometry?(h=new THREE.Geometry(),h.fromBufferGeometry(a)):h=a.clone();h.mergeVertices();h.computeFaceNormals();var k=h.vertices;h=h.faces;for(var l=0,m=h.length;l<m;l++){for(var p=h[l],n=0;3>n;n++){e[0]=p[g[n]];e[1]=p[g[(n+1)%3]];e.sort(c);var q=e.toString();void 0===f[q]?f[q]={vert1:e[0],vert2:e[1],face1:l,face2:void 0}:f[q].face2=l;}}e=[];for(q in f){if(g=f[q],void 0===g.face2||h[g.face1].normal.dot(h[g.face2].normal)<=d)l=k[g.vert1],e.push(l.x),e.push(l.y),e.push(l.z),l=k[g.vert2],e.push(l.x),e.push(l.y),e.push(l.z);}this.addAttribute("position",new THREE.BufferAttribute(new Float32Array(e),3));};THREE.EdgesGeometry.prototype=Object.create(THREE.BufferGeometry.prototype);THREE.EdgesGeometry.prototype.constructor=THREE.EdgesGeometry;THREE.ExtrudeGeometry=function(a,b){"undefined"!==typeof a&&(THREE.Geometry.call(this),this.type="ExtrudeGeometry",a=Array.isArray(a)?a:[a],this.addShapeList(a,b),this.computeFaceNormals());};THREE.ExtrudeGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.ExtrudeGeometry.prototype.constructor=THREE.ExtrudeGeometry;THREE.ExtrudeGeometry.prototype.addShapeList=function(a,b){for(var c=a.length,d=0;d<c;d++){this.addShape(a[d],b);}};THREE.ExtrudeGeometry.prototype.addShape=function(a,b){function c(a,b,c){b||console.error("THREE.ExtrudeGeometry: vec does not exist");return b.clone().multiplyScalar(c).add(a);}function d(a,b,c){var d=1,d=a.x-b.x,e=a.y-b.y,f=c.x-a.x,g=c.y-a.y,h=d*d+e*e;if(Math.abs(d*g-e*f)>Number.EPSILON){var k=Math.sqrt(h),l=Math.sqrt(f*f+g*g),h=b.x-e/k;b=b.y+d/k;f=((c.x-g/l-h)*g-(c.y+f/l-b)*f)/(d*g-e*f);c=h+d*f-a.x;a=b+e*f-a.y;d=c*c+a*a;if(2>=d)return new THREE.Vector2(c,a);d=Math.sqrt(d/2);}else a=!1,d>Number.EPSILON?f>Number.EPSILON&&(a=!0):d<-Number.EPSILON?f<-Number.EPSILON&&(a=!0):Math.sign(e)===Math.sign(g)&&(a=!0),a?(c=-e,a=d,d=Math.sqrt(h)):(c=d,a=e,d=Math.sqrt(h/2));return new THREE.Vector2(c/d,a/d);}function e(a,b){var c,d;for(E=a.length;0<=--E;){c=E;d=E-1;0>d&&(d=a.length-1);for(var e=0,f=q+2*m,e=0;e<f;e++){var g=Q*e,h=Q*(e+1),k=b+c+g,g=b+d+g,l=b+d+h,h=b+c+h,k=k+B,g=g+B,l=l+B,h=h+B;G.faces.push(new THREE.Face3(k,g,h,null,null,1));G.faces.push(new THREE.Face3(g,l,h,null,null,1));k=t.generateSideWallUV(G,k,g,l,h);G.faceVertexUvs[0].push([k[0],k[1],k[3]]);G.faceVertexUvs[0].push([k[1],k[2],k[3]]);}}}function f(a,b,c){G.vertices.push(new THREE.Vector3(a,b,c));}function g(a,b,c){a+=B;b+=B;c+=B;G.faces.push(new THREE.Face3(a,b,c,null,null,0));a=t.generateTopUV(G,a,b,c);G.faceVertexUvs[0].push(a);}var h=void 0!==b.amount?b.amount:100,k=void 0!==b.bevelThickness?b.bevelThickness:6,l=void 0!==b.bevelSize?b.bevelSize:k-2,m=void 0!==b.bevelSegments?b.bevelSegments:3,p=void 0!==b.bevelEnabled?b.bevelEnabled:!0,n=void 0!==b.curveSegments?b.curveSegments:12,q=void 0!==b.steps?b.steps:1,r=b.extrudePath,s,v=!1,t=void 0!==b.UVGenerator?b.UVGenerator:THREE.ExtrudeGeometry.WorldUVGenerator,u,D,w,I;r&&(s=r.getSpacedPoints(q),v=!0,p=!1,u=void 0!==b.frames?b.frames:new THREE.TubeGeometry.FrenetFrames(r,q,!1),D=new THREE.Vector3(),w=new THREE.Vector3(),I=new THREE.Vector3());p||(l=k=m=0);var z,y,A,G=this,B=this.vertices.length,r=a.extractPoints(n),n=r.shape,F=r.holes;if(r=!THREE.ShapeUtils.isClockWise(n)){n=n.reverse();y=0;for(A=F.length;y<A;y++){z=F[y],THREE.ShapeUtils.isClockWise(z)&&(F[y]=z.reverse());}r=!1;}var J=THREE.ShapeUtils.triangulateShape(n,F),P=n;y=0;for(A=F.length;y<A;y++){z=F[y],n=n.concat(z);}var K,H,M,O,N,Q=n.length,C,L=J.length,r=[],E=0;M=P.length;K=M-1;for(H=E+1;E<M;E++,K++,H++){K===M&&(K=0),H===M&&(H=0),r[E]=d(P[E],P[K],P[H]);}var $=[],T,X=r.concat();y=0;for(A=F.length;y<A;y++){z=F[y];T=[];E=0;M=z.length;K=M-1;for(H=E+1;E<M;E++,K++,H++){K===M&&(K=0),H===M&&(H=0),T[E]=d(z[E],z[K],z[H]);}$.push(T);X=X.concat(T);}for(K=0;K<m;K++){M=K/m;O=k*(1-M);H=l*Math.sin(M*Math.PI/2);E=0;for(M=P.length;E<M;E++){N=c(P[E],r[E],H),f(N.x,N.y,-O);}y=0;for(A=F.length;y<A;y++){for(z=F[y],T=$[y],E=0,M=z.length;E<M;E++){N=c(z[E],T[E],H),f(N.x,N.y,-O);}}}H=l;for(E=0;E<Q;E++){N=p?c(n[E],X[E],H):n[E],v?(w.copy(u.normals[0]).multiplyScalar(N.x),D.copy(u.binormals[0]).multiplyScalar(N.y),I.copy(s[0]).add(w).add(D),f(I.x,I.y,I.z)):f(N.x,N.y,0);}for(M=1;M<=q;M++){for(E=0;E<Q;E++){N=p?c(n[E],X[E],H):n[E],v?(w.copy(u.normals[M]).multiplyScalar(N.x),D.copy(u.binormals[M]).multiplyScalar(N.y),I.copy(s[M]).add(w).add(D),f(I.x,I.y,I.z)):f(N.x,N.y,h/q*M);}}for(K=m-1;0<=K;K--){M=K/m;O=k*(1-M);H=l*Math.sin(M*Math.PI/2);E=0;for(M=P.length;E<M;E++){N=c(P[E],r[E],H),f(N.x,N.y,h+O);}y=0;for(A=F.length;y<A;y++){for(z=F[y],T=$[y],E=0,M=z.length;E<M;E++){N=c(z[E],T[E],H),v?f(N.x,N.y+s[q-1].y,s[q-1].x+O):f(N.x,N.y,h+O);}}}(function(){if(p){var a;a=0*Q;for(E=0;E<L;E++){C=J[E],g(C[2]+a,C[1]+a,C[0]+a);}a=q+2*m;a*=Q;for(E=0;E<L;E++){C=J[E],g(C[0]+a,C[1]+a,C[2]+a);}}else{for(E=0;E<L;E++){C=J[E],g(C[2],C[1],C[0]);}for(E=0;E<L;E++){C=J[E],g(C[0]+Q*q,C[1]+Q*q,C[2]+Q*q);}}})();(function(){var a=0;e(P,a);a+=P.length;y=0;for(A=F.length;y<A;y++){z=F[y],e(z,a),a+=z.length;}})();};THREE.ExtrudeGeometry.WorldUVGenerator={generateTopUV:function generateTopUV(a,b,c,d){a=a.vertices;b=a[b];c=a[c];d=a[d];return[new THREE.Vector2(b.x,b.y),new THREE.Vector2(c.x,c.y),new THREE.Vector2(d.x,d.y)];},generateSideWallUV:function generateSideWallUV(a,b,c,d,e){a=a.vertices;b=a[b];c=a[c];d=a[d];e=a[e];return .01>Math.abs(b.y-c.y)?[new THREE.Vector2(b.x,1-b.z),new THREE.Vector2(c.x,1-c.z),new THREE.Vector2(d.x,1-d.z),new THREE.Vector2(e.x,1-e.z)]:[new THREE.Vector2(b.y,1-b.z),new THREE.Vector2(c.y,1-c.z),new THREE.Vector2(d.y,1-d.z),new THREE.Vector2(e.y,1-e.z)];}};THREE.ShapeGeometry=function(a,b){THREE.Geometry.call(this);this.type="ShapeGeometry";!1===Array.isArray(a)&&(a=[a]);this.addShapeList(a,b);this.computeFaceNormals();};THREE.ShapeGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.ShapeGeometry.prototype.constructor=THREE.ShapeGeometry;THREE.ShapeGeometry.prototype.addShapeList=function(a,b){for(var c=0,d=a.length;c<d;c++){this.addShape(a[c],b);}return this;};THREE.ShapeGeometry.prototype.addShape=function(a,b){void 0===b&&(b={});var c=b.material,d=void 0===b.UVGenerator?THREE.ExtrudeGeometry.WorldUVGenerator:b.UVGenerator,e,f,g,h=this.vertices.length;e=a.extractPoints(void 0!==b.curveSegments?b.curveSegments:12);var k=e.shape,l=e.holes;if(!THREE.ShapeUtils.isClockWise(k))for(k=k.reverse(),e=0,f=l.length;e<f;e++){g=l[e],THREE.ShapeUtils.isClockWise(g)&&(l[e]=g.reverse());}var m=THREE.ShapeUtils.triangulateShape(k,l);e=0;for(f=l.length;e<f;e++){g=l[e],k=k.concat(g);}l=k.length;f=m.length;for(e=0;e<l;e++){g=k[e],this.vertices.push(new THREE.Vector3(g.x,g.y,0));}for(e=0;e<f;e++){l=m[e],k=l[0]+h,g=l[1]+h,l=l[2]+h,this.faces.push(new THREE.Face3(k,g,l,null,null,c)),this.faceVertexUvs[0].push(d.generateTopUV(this,k,g,l));}};THREE.LatheBufferGeometry=function(a,b,c,d){THREE.BufferGeometry.call(this);this.type="LatheBufferGeometry";this.parameters={points:a,segments:b,phiStart:c,phiLength:d};b=Math.floor(b)||12;c=c||0;d=d||2*Math.PI;d=THREE.Math.clamp(d,0,2*Math.PI);for(var e=(b+1)*a.length,f=b*a.length*6,g=new THREE.BufferAttribute(new(65535<f?Uint32Array:Uint16Array)(f),1),h=new THREE.BufferAttribute(new Float32Array(3*e),3),k=new THREE.BufferAttribute(new Float32Array(2*e),2),l=0,m=0,p=1/b,n=new THREE.Vector3(),q=new THREE.Vector2(),e=0;e<=b;e++){for(var f=c+e*p*d,r=Math.sin(f),s=Math.cos(f),f=0;f<=a.length-1;f++){n.x=a[f].x*r,n.y=a[f].y,n.z=a[f].x*s,h.setXYZ(l,n.x,n.y,n.z),q.x=e/b,q.y=f/(a.length-1),k.setXY(l,q.x,q.y),l++;}}for(e=0;e<b;e++){for(f=0;f<a.length-1;f++){c=f+e*a.length,l=c+a.length,p=c+a.length+1,n=c+1,g.setX(m,c),m++,g.setX(m,l),m++,g.setX(m,n),m++,g.setX(m,l),m++,g.setX(m,p),m++,g.setX(m,n),m++;}}this.setIndex(g);this.addAttribute("position",h);this.addAttribute("uv",k);this.computeVertexNormals();if(d===2*Math.PI)for(d=this.attributes.normal.array,g=new THREE.Vector3(),h=new THREE.Vector3(),k=new THREE.Vector3(),c=b*a.length*3,f=e=0;e<a.length;e++,f+=3){g.x=d[f+0],g.y=d[f+1],g.z=d[f+2],h.x=d[c+f+0],h.y=d[c+f+1],h.z=d[c+f+2],k.addVectors(g,h).normalize(),d[f+0]=d[c+f+0]=k.x,d[f+1]=d[c+f+1]=k.y,d[f+2]=d[c+f+2]=k.z;}};THREE.LatheBufferGeometry.prototype=Object.create(THREE.BufferGeometry.prototype);THREE.LatheBufferGeometry.prototype.constructor=THREE.LatheBufferGeometry;THREE.LatheGeometry=function(a,b,c,d){THREE.Geometry.call(this);this.type="LatheGeometry";this.parameters={points:a,segments:b,phiStart:c,phiLength:d};this.fromBufferGeometry(new THREE.LatheBufferGeometry(a,b,c,d));this.mergeVertices();};THREE.LatheGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.LatheGeometry.prototype.constructor=THREE.LatheGeometry;THREE.PlaneGeometry=function(a,b,c,d){THREE.Geometry.call(this);this.type="PlaneGeometry";this.parameters={width:a,height:b,widthSegments:c,heightSegments:d};this.fromBufferGeometry(new THREE.PlaneBufferGeometry(a,b,c,d));};THREE.PlaneGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.PlaneGeometry.prototype.constructor=THREE.PlaneGeometry;THREE.PlaneBufferGeometry=function(a,b,c,d){THREE.BufferGeometry.call(this);this.type="PlaneBufferGeometry";this.parameters={width:a,height:b,widthSegments:c,heightSegments:d};var e=a/2,f=b/2;c=Math.floor(c)||1;d=Math.floor(d)||1;var g=c+1,h=d+1,k=a/c,l=b/d;b=new Float32Array(g*h*3);a=new Float32Array(g*h*3);for(var m=new Float32Array(g*h*2),p=0,n=0,q=0;q<h;q++){for(var r=q*l-f,s=0;s<g;s++){b[p]=s*k-e,b[p+1]=-r,a[p+2]=1,m[n]=s/c,m[n+1]=1-q/d,p+=3,n+=2;}}p=0;e=new(65535<b.length/3?Uint32Array:Uint16Array)(c*d*6);for(q=0;q<d;q++){for(s=0;s<c;s++){f=s+g*(q+1),h=s+1+g*(q+1),k=s+1+g*q,e[p]=s+g*q,e[p+1]=f,e[p+2]=k,e[p+3]=f,e[p+4]=h,e[p+5]=k,p+=6;}}this.setIndex(new THREE.BufferAttribute(e,1));this.addAttribute("position",new THREE.BufferAttribute(b,3));this.addAttribute("normal",new THREE.BufferAttribute(a,3));this.addAttribute("uv",new THREE.BufferAttribute(m,2));};THREE.PlaneBufferGeometry.prototype=Object.create(THREE.BufferGeometry.prototype);THREE.PlaneBufferGeometry.prototype.constructor=THREE.PlaneBufferGeometry;THREE.RingBufferGeometry=function(a,b,c,d,e,f){THREE.BufferGeometry.call(this);this.type="RingBufferGeometry";this.parameters={innerRadius:a,outerRadius:b,thetaSegments:c,phiSegments:d,thetaStart:e,thetaLength:f};a=a||20;b=b||50;e=void 0!==e?e:0;f=void 0!==f?f:2*Math.PI;c=void 0!==c?Math.max(3,c):8;d=void 0!==d?Math.max(1,d):1;var g=(c+1)*(d+1),h=c*d*6,h=new THREE.BufferAttribute(new(65535<h?Uint32Array:Uint16Array)(h),1),k=new THREE.BufferAttribute(new Float32Array(3*g),3),l=new THREE.BufferAttribute(new Float32Array(3*g),3),g=new THREE.BufferAttribute(new Float32Array(2*g),2),m=0,p=0,n,q=a,r=(b-a)/d,s=new THREE.Vector3(),v=new THREE.Vector2(),t;for(a=0;a<=d;a++){for(t=0;t<=c;t++){n=e+t/c*f,s.x=q*Math.cos(n),s.y=q*Math.sin(n),k.setXYZ(m,s.x,s.y,s.z),l.setXYZ(m,0,0,1),v.x=(s.x/b+1)/2,v.y=(s.y/b+1)/2,g.setXY(m,v.x,v.y),m++;}q+=r;}for(a=0;a<d;a++){for(b=a*(c+1),t=0;t<c;t++){e=n=t+b,f=n+c+1,m=n+c+2,n+=1,h.setX(p,e),p++,h.setX(p,f),p++,h.setX(p,m),p++,h.setX(p,e),p++,h.setX(p,m),p++,h.setX(p,n),p++;}}this.setIndex(h);this.addAttribute("position",k);this.addAttribute("normal",l);this.addAttribute("uv",g);};THREE.RingBufferGeometry.prototype=Object.create(THREE.BufferGeometry.prototype);THREE.RingBufferGeometry.prototype.constructor=THREE.RingBufferGeometry;THREE.RingGeometry=function(a,b,c,d,e,f){THREE.Geometry.call(this);this.type="RingGeometry";this.parameters={innerRadius:a,outerRadius:b,thetaSegments:c,phiSegments:d,thetaStart:e,thetaLength:f};this.fromBufferGeometry(new THREE.RingBufferGeometry(a,b,c,d,e,f));};THREE.RingGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.RingGeometry.prototype.constructor=THREE.RingGeometry;THREE.SphereGeometry=function(a,b,c,d,e,f,g){THREE.Geometry.call(this);this.type="SphereGeometry";this.parameters={radius:a,widthSegments:b,heightSegments:c,phiStart:d,phiLength:e,thetaStart:f,thetaLength:g};this.fromBufferGeometry(new THREE.SphereBufferGeometry(a,b,c,d,e,f,g));};THREE.SphereGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.SphereGeometry.prototype.constructor=THREE.SphereGeometry;THREE.SphereBufferGeometry=function(a,b,c,d,e,f,g){THREE.BufferGeometry.call(this);this.type="SphereBufferGeometry";this.parameters={radius:a,widthSegments:b,heightSegments:c,phiStart:d,phiLength:e,thetaStart:f,thetaLength:g};a=a||50;b=Math.max(3,Math.floor(b)||8);c=Math.max(2,Math.floor(c)||6);d=void 0!==d?d:0;e=void 0!==e?e:2*Math.PI;f=void 0!==f?f:0;g=void 0!==g?g:Math.PI;for(var h=f+g,k=(b+1)*(c+1),l=new THREE.BufferAttribute(new Float32Array(3*k),3),m=new THREE.BufferAttribute(new Float32Array(3*k),3),k=new THREE.BufferAttribute(new Float32Array(2*k),2),p=0,n=[],q=new THREE.Vector3(),r=0;r<=c;r++){for(var s=[],v=r/c,t=0;t<=b;t++){var u=t/b,D=-a*Math.cos(d+u*e)*Math.sin(f+v*g),w=a*Math.cos(f+v*g),I=a*Math.sin(d+u*e)*Math.sin(f+v*g);q.set(D,w,I).normalize();l.setXYZ(p,D,w,I);m.setXYZ(p,q.x,q.y,q.z);k.setXY(p,u,1-v);s.push(p);p++;}n.push(s);}d=[];for(r=0;r<c;r++){for(t=0;t<b;t++){e=n[r][t+1],g=n[r][t],p=n[r+1][t],q=n[r+1][t+1],(0!==r||0<f)&&d.push(e,g,q),(r!==c-1||h<Math.PI)&&d.push(g,p,q);}}this.setIndex(new(65535<l.count?THREE.Uint32Attribute:THREE.Uint16Attribute)(d,1));this.addAttribute("position",l);this.addAttribute("normal",m);this.addAttribute("uv",k);this.boundingSphere=new THREE.Sphere(new THREE.Vector3(),a);};THREE.SphereBufferGeometry.prototype=Object.create(THREE.BufferGeometry.prototype);THREE.SphereBufferGeometry.prototype.constructor=THREE.SphereBufferGeometry;THREE.TextGeometry=function(a,b){b=b||{};var c=b.font;if(!1===c instanceof THREE.Font)return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),new THREE.Geometry();c=c.generateShapes(a,b.size,b.curveSegments);b.amount=void 0!==b.height?b.height:50;void 0===b.bevelThickness&&(b.bevelThickness=10);void 0===b.bevelSize&&(b.bevelSize=8);void 0===b.bevelEnabled&&(b.bevelEnabled=!1);THREE.ExtrudeGeometry.call(this,c,b);this.type="TextGeometry";};THREE.TextGeometry.prototype=Object.create(THREE.ExtrudeGeometry.prototype);THREE.TextGeometry.prototype.constructor=THREE.TextGeometry;THREE.TorusBufferGeometry=function(a,b,c,d,e){THREE.BufferGeometry.call(this);this.type="TorusBufferGeometry";this.parameters={radius:a,tube:b,radialSegments:c,tubularSegments:d,arc:e};a=a||100;b=b||40;c=Math.floor(c)||8;d=Math.floor(d)||6;e=e||2*Math.PI;var f=(c+1)*(d+1),g=c*d*6,g=new(65535<g?Uint32Array:Uint16Array)(g),h=new Float32Array(3*f),k=new Float32Array(3*f),f=new Float32Array(2*f),l=0,m=0,p=0,n=new THREE.Vector3(),q=new THREE.Vector3(),r=new THREE.Vector3(),s,v;for(s=0;s<=c;s++){for(v=0;v<=d;v++){var t=v/d*e,u=s/c*Math.PI*2;q.x=(a+b*Math.cos(u))*Math.cos(t);q.y=(a+b*Math.cos(u))*Math.sin(t);q.z=b*Math.sin(u);h[l]=q.x;h[l+1]=q.y;h[l+2]=q.z;n.x=a*Math.cos(t);n.y=a*Math.sin(t);r.subVectors(q,n).normalize();k[l]=r.x;k[l+1]=r.y;k[l+2]=r.z;f[m]=v/d;f[m+1]=s/c;l+=3;m+=2;}}for(s=1;s<=c;s++){for(v=1;v<=d;v++){a=(d+1)*(s-1)+v-1,b=(d+1)*(s-1)+v,e=(d+1)*s+v,g[p]=(d+1)*s+v-1,g[p+1]=a,g[p+2]=e,g[p+3]=a,g[p+4]=b,g[p+5]=e,p+=6;}}this.setIndex(new THREE.BufferAttribute(g,1));this.addAttribute("position",new THREE.BufferAttribute(h,3));this.addAttribute("normal",new THREE.BufferAttribute(k,3));this.addAttribute("uv",new THREE.BufferAttribute(f,2));};THREE.TorusBufferGeometry.prototype=Object.create(THREE.BufferGeometry.prototype);THREE.TorusBufferGeometry.prototype.constructor=THREE.TorusBufferGeometry;THREE.TorusGeometry=function(a,b,c,d,e){THREE.Geometry.call(this);this.type="TorusGeometry";this.parameters={radius:a,tube:b,radialSegments:c,tubularSegments:d,arc:e};this.fromBufferGeometry(new THREE.TorusBufferGeometry(a,b,c,d,e));};THREE.TorusGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.TorusGeometry.prototype.constructor=THREE.TorusGeometry;THREE.TorusKnotBufferGeometry=function(a,b,c,d,e,f){function g(a,b,c,d,e){var f=Math.cos(a),g=Math.sin(a);a*=c/b;b=Math.cos(a);e.x=d*(2+b)*.5*f;e.y=d*(2+b)*g*.5;e.z=d*Math.sin(a)*.5;}THREE.BufferGeometry.call(this);this.type="TorusKnotBufferGeometry";this.parameters={radius:a,tube:b,tubularSegments:c,radialSegments:d,p:e,q:f};a=a||100;b=b||40;c=Math.floor(c)||64;d=Math.floor(d)||8;e=e||2;f=f||3;var h=(d+1)*(c+1),k=d*c*6,k=new THREE.BufferAttribute(new(65535<k?Uint32Array:Uint16Array)(k),1),l=new THREE.BufferAttribute(new Float32Array(3*h),3),m=new THREE.BufferAttribute(new Float32Array(3*h),3),h=new THREE.BufferAttribute(new Float32Array(2*h),2),p,n,q=0,r=0,s=new THREE.Vector3(),v=new THREE.Vector3(),t=new THREE.Vector2(),u=new THREE.Vector3(),D=new THREE.Vector3(),w=new THREE.Vector3(),I=new THREE.Vector3(),z=new THREE.Vector3();for(p=0;p<=c;++p){for(n=p/c*e*Math.PI*2,g(n,e,f,a,u),g(n+.01,e,f,a,D),I.subVectors(D,u),z.addVectors(D,u),w.crossVectors(I,z),z.crossVectors(w,I),w.normalize(),z.normalize(),n=0;n<=d;++n){var y=n/d*Math.PI*2,A=-b*Math.cos(y),y=b*Math.sin(y);s.x=u.x+(A*z.x+y*w.x);s.y=u.y+(A*z.y+y*w.y);s.z=u.z+(A*z.z+y*w.z);l.setXYZ(q,s.x,s.y,s.z);v.subVectors(s,u).normalize();m.setXYZ(q,v.x,v.y,v.z);t.x=p/c;t.y=n/d;h.setXY(q,t.x,t.y);q++;}}for(n=1;n<=c;n++){for(p=1;p<=d;p++){a=(d+1)*n+(p-1),b=(d+1)*n+p,e=(d+1)*(n-1)+p,k.setX(r,(d+1)*(n-1)+(p-1)),r++,k.setX(r,a),r++,k.setX(r,e),r++,k.setX(r,a),r++,k.setX(r,b),r++,k.setX(r,e),r++;}}this.setIndex(k);this.addAttribute("position",l);this.addAttribute("normal",m);this.addAttribute("uv",h);};THREE.TorusKnotBufferGeometry.prototype=Object.create(THREE.BufferGeometry.prototype);THREE.TorusKnotBufferGeometry.prototype.constructor=THREE.TorusKnotBufferGeometry;THREE.TorusKnotGeometry=function(a,b,c,d,e,f,g){THREE.Geometry.call(this);this.type="TorusKnotGeometry";this.parameters={radius:a,tube:b,tubularSegments:c,radialSegments:d,p:e,q:f};void 0!==g&&console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead.");this.fromBufferGeometry(new THREE.TorusKnotBufferGeometry(a,b,c,d,e,f));this.mergeVertices();};THREE.TorusKnotGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.TorusKnotGeometry.prototype.constructor=THREE.TorusKnotGeometry;THREE.TubeGeometry=function(a,b,c,d,e,f){THREE.Geometry.call(this);this.type="TubeGeometry";this.parameters={path:a,segments:b,radius:c,radialSegments:d,closed:e,taper:f};b=b||64;c=c||1;d=d||8;e=e||!1;f=f||THREE.TubeGeometry.NoTaper;var g=[],h,k,l=b+1,m,p,n,q,r,s=new THREE.Vector3(),v,t,u;v=new THREE.TubeGeometry.FrenetFrames(a,b,e);t=v.normals;u=v.binormals;this.tangents=v.tangents;this.normals=t;this.binormals=u;for(v=0;v<l;v++){for(g[v]=[],m=v/(l-1),r=a.getPointAt(m),h=t[v],k=u[v],n=c*f(m),m=0;m<d;m++){p=m/d*2*Math.PI,q=-n*Math.cos(p),p=n*Math.sin(p),s.copy(r),s.x+=q*h.x+p*k.x,s.y+=q*h.y+p*k.y,s.z+=q*h.z+p*k.z,g[v][m]=this.vertices.push(new THREE.Vector3(s.x,s.y,s.z))-1;}}for(v=0;v<b;v++){for(m=0;m<d;m++){f=e?(v+1)%b:v+1,l=(m+1)%d,a=g[v][m],c=g[f][m],f=g[f][l],l=g[v][l],s=new THREE.Vector2(v/b,m/d),t=new THREE.Vector2((v+1)/b,m/d),u=new THREE.Vector2((v+1)/b,(m+1)/d),h=new THREE.Vector2(v/b,(m+1)/d),this.faces.push(new THREE.Face3(a,c,l)),this.faceVertexUvs[0].push([s,t,h]),this.faces.push(new THREE.Face3(c,f,l)),this.faceVertexUvs[0].push([t.clone(),u,h.clone()]);}}this.computeFaceNormals();this.computeVertexNormals();};THREE.TubeGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.TubeGeometry.prototype.constructor=THREE.TubeGeometry;THREE.TubeGeometry.NoTaper=function(a){return 1;};THREE.TubeGeometry.SinusoidalTaper=function(a){return Math.sin(Math.PI*a);};THREE.TubeGeometry.FrenetFrames=function(a,b,c){var d=new THREE.Vector3(),e=[],f=[],g=[],h=new THREE.Vector3(),k=new THREE.Matrix4();b+=1;var l,m,p;this.tangents=e;this.normals=f;this.binormals=g;for(l=0;l<b;l++){m=l/(b-1),e[l]=a.getTangentAt(m),e[l].normalize();}f[0]=new THREE.Vector3();g[0]=new THREE.Vector3();a=Number.MAX_VALUE;l=Math.abs(e[0].x);m=Math.abs(e[0].y);p=Math.abs(e[0].z);l<=a&&(a=l,d.set(1,0,0));m<=a&&(a=m,d.set(0,1,0));p<=a&&d.set(0,0,1);h.crossVectors(e[0],d).normalize();f[0].crossVectors(e[0],h);g[0].crossVectors(e[0],f[0]);for(l=1;l<b;l++){f[l]=f[l-1].clone(),g[l]=g[l-1].clone(),h.crossVectors(e[l-1],e[l]),h.length()>Number.EPSILON&&(h.normalize(),d=Math.acos(THREE.Math.clamp(e[l-1].dot(e[l]),-1,1)),f[l].applyMatrix4(k.makeRotationAxis(h,d))),g[l].crossVectors(e[l],f[l]);}if(c)for(d=Math.acos(THREE.Math.clamp(f[0].dot(f[b-1]),-1,1)),d/=b-1,0<e[0].dot(h.crossVectors(f[0],f[b-1]))&&(d=-d),l=1;l<b;l++){f[l].applyMatrix4(k.makeRotationAxis(e[l],d*l)),g[l].crossVectors(e[l],f[l]);}};THREE.PolyhedronGeometry=function(a,b,c,d){function e(a){var b=a.normalize().clone();b.index=k.vertices.push(b)-1;var c=Math.atan2(a.z,-a.x)/2/Math.PI+.5;a=Math.atan2(-a.y,Math.sqrt(a.x*a.x+a.z*a.z))/Math.PI+.5;b.uv=new THREE.Vector2(c,1-a);return b;}function f(a,b,c){var d=new THREE.Face3(a.index,b.index,c.index,[a.clone(),b.clone(),c.clone()]);k.faces.push(d);v.copy(a).add(b).add(c).divideScalar(3);d=Math.atan2(v.z,-v.x);k.faceVertexUvs[0].push([h(a.uv,a,d),h(b.uv,b,d),h(c.uv,c,d)]);}function g(a,b){for(var c=Math.pow(2,b),d=e(k.vertices[a.a]),g=e(k.vertices[a.b]),h=e(k.vertices[a.c]),l=[],m=0;m<=c;m++){l[m]=[];for(var n=e(d.clone().lerp(h,m/c)),p=e(g.clone().lerp(h,m/c)),q=c-m,r=0;r<=q;r++){l[m][r]=0===r&&m===c?n:e(n.clone().lerp(p,r/q));}}for(m=0;m<c;m++){for(r=0;r<2*(c-m)-1;r++){d=Math.floor(r/2),0===r%2?f(l[m][d+1],l[m+1][d],l[m][d]):f(l[m][d+1],l[m+1][d+1],l[m+1][d]);}}}function h(a,b,c){0>c&&1===a.x&&(a=new THREE.Vector2(a.x-1,a.y));0===b.x&&0===b.z&&(a=new THREE.Vector2(c/2/Math.PI+.5,a.y));return a.clone();}THREE.Geometry.call(this);this.type="PolyhedronGeometry";this.parameters={vertices:a,indices:b,radius:c,detail:d};c=c||1;d=d||0;for(var k=this,l=0,m=a.length;l<m;l+=3){e(new THREE.Vector3(a[l],a[l+1],a[l+2]));}a=this.vertices;for(var p=[],n=l=0,m=b.length;l<m;l+=3,n++){var q=a[b[l]],r=a[b[l+1]],s=a[b[l+2]];p[n]=new THREE.Face3(q.index,r.index,s.index,[q.clone(),r.clone(),s.clone()]);}for(var v=new THREE.Vector3(),l=0,m=p.length;l<m;l++){g(p[l],d);}l=0;for(m=this.faceVertexUvs[0].length;l<m;l++){b=this.faceVertexUvs[0][l],d=b[0].x,a=b[1].x,p=b[2].x,n=Math.max(d,a,p),q=Math.min(d,a,p),.9<n&&.1>q&&(.2>d&&(b[0].x+=1),.2>a&&(b[1].x+=1),.2>p&&(b[2].x+=1));}l=0;for(m=this.vertices.length;l<m;l++){this.vertices[l].multiplyScalar(c);}this.mergeVertices();this.computeFaceNormals();this.boundingSphere=new THREE.Sphere(new THREE.Vector3(),c);};THREE.PolyhedronGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.PolyhedronGeometry.prototype.constructor=THREE.PolyhedronGeometry;THREE.DodecahedronGeometry=function(a,b){var c=(1+Math.sqrt(5))/2,d=1/c;THREE.PolyhedronGeometry.call(this,[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-d,-c,0,-d,c,0,d,-c,0,d,c,-d,-c,0,-d,c,0,d,-c,0,d,c,0,-c,0,-d,c,0,-d,-c,0,d,c,0,d],[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],a,b);this.type="DodecahedronGeometry";this.parameters={radius:a,detail:b};};THREE.DodecahedronGeometry.prototype=Object.create(THREE.PolyhedronGeometry.prototype);THREE.DodecahedronGeometry.prototype.constructor=THREE.DodecahedronGeometry;THREE.IcosahedronGeometry=function(a,b){var c=(1+Math.sqrt(5))/2;THREE.PolyhedronGeometry.call(this,[-1,c,0,1,c,0,-1,-c,0,1,-c,0,0,-1,c,0,1,c,0,-1,-c,0,1,-c,c,0,-1,c,0,1,-c,0,-1,-c,0,1],[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],a,b);this.type="IcosahedronGeometry";this.parameters={radius:a,detail:b};};THREE.IcosahedronGeometry.prototype=Object.create(THREE.PolyhedronGeometry.prototype);THREE.IcosahedronGeometry.prototype.constructor=THREE.IcosahedronGeometry;THREE.OctahedronGeometry=function(a,b){THREE.PolyhedronGeometry.call(this,[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],a,b);this.type="OctahedronGeometry";this.parameters={radius:a,detail:b};};THREE.OctahedronGeometry.prototype=Object.create(THREE.PolyhedronGeometry.prototype);THREE.OctahedronGeometry.prototype.constructor=THREE.OctahedronGeometry;THREE.TetrahedronGeometry=function(a,b){THREE.PolyhedronGeometry.call(this,[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],[2,1,0,0,3,2,1,3,0,2,3,1],a,b);this.type="TetrahedronGeometry";this.parameters={radius:a,detail:b};};THREE.TetrahedronGeometry.prototype=Object.create(THREE.PolyhedronGeometry.prototype);THREE.TetrahedronGeometry.prototype.constructor=THREE.TetrahedronGeometry;THREE.ParametricGeometry=function(a,b,c){THREE.Geometry.call(this);this.type="ParametricGeometry";this.parameters={func:a,slices:b,stacks:c};var d=this.vertices,e=this.faces,f=this.faceVertexUvs[0],g,h,k,l,m=b+1;for(g=0;g<=c;g++){for(l=g/c,h=0;h<=b;h++){k=h/b,k=a(k,l),d.push(k);}}var p,n,q,r;for(g=0;g<c;g++){for(h=0;h<b;h++){a=g*m+h,d=g*m+h+1,l=(g+1)*m+h+1,k=(g+1)*m+h,p=new THREE.Vector2(h/b,g/c),n=new THREE.Vector2((h+1)/b,g/c),q=new THREE.Vector2((h+1)/b,(g+1)/c),r=new THREE.Vector2(h/b,(g+1)/c),e.push(new THREE.Face3(a,d,k)),f.push([p,n,r]),e.push(new THREE.Face3(d,l,k)),f.push([n.clone(),q,r.clone()]);}}this.computeFaceNormals();this.computeVertexNormals();};THREE.ParametricGeometry.prototype=Object.create(THREE.Geometry.prototype);THREE.ParametricGeometry.prototype.constructor=THREE.ParametricGeometry;THREE.WireframeGeometry=function(a){function b(a,b){return a-b;}THREE.BufferGeometry.call(this);var c=[0,0],d={},e=["a","b","c"];if(a instanceof THREE.Geometry){var f=a.vertices,g=a.faces,h=0,k=new Uint32Array(6*g.length);a=0;for(var l=g.length;a<l;a++){for(var m=g[a],p=0;3>p;p++){c[0]=m[e[p]];c[1]=m[e[(p+1)%3]];c.sort(b);var n=c.toString();void 0===d[n]&&(k[2*h]=c[0],k[2*h+1]=c[1],d[n]=!0,h++);}}c=new Float32Array(6*h);a=0;for(l=h;a<l;a++){for(p=0;2>p;p++){d=f[k[2*a+p]],h=6*a+3*p,c[h+0]=d.x,c[h+1]=d.y,c[h+2]=d.z;}}this.addAttribute("position",new THREE.BufferAttribute(c,3));}else if(a instanceof THREE.BufferGeometry){if(null!==a.index){l=a.index.array;f=a.attributes.position;e=a.groups;h=0;0===e.length&&a.addGroup(0,l.length);k=new Uint32Array(2*l.length);g=0;for(m=e.length;g<m;++g){a=e[g];p=a.start;n=a.count;a=p;for(var q=p+n;a<q;a+=3){for(p=0;3>p;p++){c[0]=l[a+p],c[1]=l[a+(p+1)%3],c.sort(b),n=c.toString(),void 0===d[n]&&(k[2*h]=c[0],k[2*h+1]=c[1],d[n]=!0,h++);}}}c=new Float32Array(6*h);a=0;for(l=h;a<l;a++){for(p=0;2>p;p++){h=6*a+3*p,d=k[2*a+p],c[h+0]=f.getX(d),c[h+1]=f.getY(d),c[h+2]=f.getZ(d);}}}else for(f=a.attributes.position.array,h=f.length/3,k=h/3,c=new Float32Array(6*h),a=0,l=k;a<l;a++){for(p=0;3>p;p++){h=18*a+6*p,k=9*a+3*p,c[h+0]=f[k],c[h+1]=f[k+1],c[h+2]=f[k+2],d=9*a+(p+1)%3*3,c[h+3]=f[d],c[h+4]=f[d+1],c[h+5]=f[d+2];}}this.addAttribute("position",new THREE.BufferAttribute(c,3));}};THREE.WireframeGeometry.prototype=Object.create(THREE.BufferGeometry.prototype);THREE.WireframeGeometry.prototype.constructor=THREE.WireframeGeometry;THREE.AxisHelper=function(a){a=a||1;var b=new Float32Array([0,0,0,a,0,0,0,0,0,0,a,0,0,0,0,0,0,a]),c=new Float32Array([1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1]);a=new THREE.BufferGeometry();a.addAttribute("position",new THREE.BufferAttribute(b,3));a.addAttribute("color",new THREE.BufferAttribute(c,3));b=new THREE.LineBasicMaterial({vertexColors:THREE.VertexColors});THREE.LineSegments.call(this,a,b);};THREE.AxisHelper.prototype=Object.create(THREE.LineSegments.prototype);THREE.AxisHelper.prototype.constructor=THREE.AxisHelper;THREE.ArrowHelper=function(){var a=new THREE.BufferGeometry();a.addAttribute("position",new THREE.Float32Attribute([0,0,0,0,1,0],3));var b=new THREE.CylinderBufferGeometry(0,.5,1,5,1);b.translate(0,-.5,0);return function(c,d,e,f,g,h){THREE.Object3D.call(this);void 0===f&&(f=16776960);void 0===e&&(e=1);void 0===g&&(g=.2*e);void 0===h&&(h=.2*g);this.position.copy(d);this.line=new THREE.Line(a,new THREE.LineBasicMaterial({color:f}));this.line.matrixAutoUpdate=!1;this.add(this.line);this.cone=new THREE.Mesh(b,new THREE.MeshBasicMaterial({color:f}));this.cone.matrixAutoUpdate=!1;this.add(this.cone);this.setDirection(c);this.setLength(e,g,h);};}();THREE.ArrowHelper.prototype=Object.create(THREE.Object3D.prototype);THREE.ArrowHelper.prototype.constructor=THREE.ArrowHelper;THREE.ArrowHelper.prototype.setDirection=function(){var a=new THREE.Vector3(),b;return function(c){.99999<c.y?this.quaternion.set(0,0,0,1):-.99999>c.y?this.quaternion.set(1,0,0,0):(a.set(c.z,0,-c.x).normalize(),b=Math.acos(c.y),this.quaternion.setFromAxisAngle(a,b));};}();THREE.ArrowHelper.prototype.setLength=function(a,b,c){void 0===b&&(b=.2*a);void 0===c&&(c=.2*b);this.line.scale.set(1,Math.max(0,a-b),1);this.line.updateMatrix();this.cone.scale.set(c,b,c);this.cone.position.y=a;this.cone.updateMatrix();};THREE.ArrowHelper.prototype.setColor=function(a){this.line.material.color.copy(a);this.cone.material.color.copy(a);};THREE.BoxHelper=function(a,b){void 0===b&&(b=16776960);var c=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),d=new Float32Array(24),e=new THREE.BufferGeometry();e.setIndex(new THREE.BufferAttribute(c,1));e.addAttribute("position",new THREE.BufferAttribute(d,3));THREE.LineSegments.call(this,e,new THREE.LineBasicMaterial({color:b}));void 0!==a&&this.update(a);};THREE.BoxHelper.prototype=Object.create(THREE.LineSegments.prototype);THREE.BoxHelper.prototype.constructor=THREE.BoxHelper;THREE.BoxHelper.prototype.update=function(){var a=new THREE.Box3();return function(b){b instanceof THREE.Box3?a.copy(b):a.setFromObject(b);if(!a.isEmpty()){b=a.min;var c=a.max,d=this.geometry.attributes.position,e=d.array;e[0]=c.x;e[1]=c.y;e[2]=c.z;e[3]=b.x;e[4]=c.y;e[5]=c.z;e[6]=b.x;e[7]=b.y;e[8]=c.z;e[9]=c.x;e[10]=b.y;e[11]=c.z;e[12]=c.x;e[13]=c.y;e[14]=b.z;e[15]=b.x;e[16]=c.y;e[17]=b.z;e[18]=b.x;e[19]=b.y;e[20]=b.z;e[21]=c.x;e[22]=b.y;e[23]=b.z;d.needsUpdate=!0;this.geometry.computeBoundingSphere();}};}();THREE.BoundingBoxHelper=function(a,b){var c=void 0!==b?b:8947848;this.object=a;this.box=new THREE.Box3();THREE.Mesh.call(this,new THREE.BoxGeometry(1,1,1),new THREE.MeshBasicMaterial({color:c,wireframe:!0}));};THREE.BoundingBoxHelper.prototype=Object.create(THREE.Mesh.prototype);THREE.BoundingBoxHelper.prototype.constructor=THREE.BoundingBoxHelper;THREE.BoundingBoxHelper.prototype.update=function(){this.box.setFromObject(this.object);this.box.size(this.scale);this.box.center(this.position);};THREE.CameraHelper=function(a){function b(a,b,d){c(a,d);c(b,d);}function c(a,b){d.vertices.push(new THREE.Vector3());d.colors.push(new THREE.Color(b));void 0===f[a]&&(f[a]=[]);f[a].push(d.vertices.length-1);}var d=new THREE.Geometry(),e=new THREE.LineBasicMaterial({color:16777215,vertexColors:THREE.FaceColors}),f={};b("n1","n2",16755200);b("n2","n4",16755200);b("n4","n3",16755200);b("n3","n1",16755200);b("f1","f2",16755200);b("f2","f4",16755200);b("f4","f3",16755200);b("f3","f1",16755200);b("n1","f1",16755200);b("n2","f2",16755200);b("n3","f3",16755200);b("n4","f4",16755200);b("p","n1",16711680);b("p","n2",16711680);b("p","n3",16711680);b("p","n4",16711680);b("u1","u2",43775);b("u2","u3",43775);b("u3","u1",43775);b("c","t",16777215);b("p","c",3355443);b("cn1","cn2",3355443);b("cn3","cn4",3355443);b("cf1","cf2",3355443);b("cf3","cf4",3355443);THREE.LineSegments.call(this,d,e);this.camera=a;this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.pointMap=f;this.update();};THREE.CameraHelper.prototype=Object.create(THREE.LineSegments.prototype);THREE.CameraHelper.prototype.constructor=THREE.CameraHelper;THREE.CameraHelper.prototype.update=function(){function a(a,g,h,k){d.set(g,h,k).unproject(e);a=c[a];if(void 0!==a)for(g=0,h=a.length;g<h;g++){b.vertices[a[g]].copy(d);}}var b,c,d=new THREE.Vector3(),e=new THREE.Camera();return function(){b=this.geometry;c=this.pointMap;e.projectionMatrix.copy(this.camera.projectionMatrix);a("c",0,0,-1);a("t",0,0,1);a("n1",-1,-1,-1);a("n2",1,-1,-1);a("n3",-1,1,-1);a("n4",1,1,-1);a("f1",-1,-1,1);a("f2",1,-1,1);a("f3",-1,1,1);a("f4",1,1,1);a("u1",.7,1.1,-1);a("u2",-.7,1.1,-1);a("u3",0,2,-1);a("cf1",-1,0,1);a("cf2",1,0,1);a("cf3",0,-1,1);a("cf4",0,1,1);a("cn1",-1,0,-1);a("cn2",1,0,-1);a("cn3",0,-1,-1);a("cn4",0,1,-1);b.verticesNeedUpdate=!0;};}();THREE.DirectionalLightHelper=function(a,b){THREE.Object3D.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;void 0===b&&(b=1);var c=new THREE.BufferGeometry();c.addAttribute("position",new THREE.Float32Attribute([-b,b,0,b,b,0,b,-b,0,-b,-b,0,-b,b,0],3));var d=new THREE.LineBasicMaterial({fog:!1});this.add(new THREE.Line(c,d));c=new THREE.BufferGeometry();c.addAttribute("position",new THREE.Float32Attribute([0,0,0,0,0,1],3));this.add(new THREE.Line(c,d));this.update();};THREE.DirectionalLightHelper.prototype=Object.create(THREE.Object3D.prototype);THREE.DirectionalLightHelper.prototype.constructor=THREE.DirectionalLightHelper;THREE.DirectionalLightHelper.prototype.dispose=function(){var a=this.children[0],b=this.children[1];a.geometry.dispose();a.material.dispose();b.geometry.dispose();b.material.dispose();};THREE.DirectionalLightHelper.prototype.update=function(){var a=new THREE.Vector3(),b=new THREE.Vector3(),c=new THREE.Vector3();return function(){a.setFromMatrixPosition(this.light.matrixWorld);b.setFromMatrixPosition(this.light.target.matrixWorld);c.subVectors(b,a);var d=this.children[0],e=this.children[1];d.lookAt(c);d.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);e.lookAt(c);e.scale.z=c.length();};}();THREE.EdgesHelper=function(a,b,c){b=void 0!==b?b:16777215;THREE.LineSegments.call(this,new THREE.EdgesGeometry(a.geometry,c),new THREE.LineBasicMaterial({color:b}));this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;};THREE.EdgesHelper.prototype=Object.create(THREE.LineSegments.prototype);THREE.EdgesHelper.prototype.constructor=THREE.EdgesHelper;THREE.FaceNormalsHelper=function(a,b,c,d){this.object=a;this.size=void 0!==b?b:1;a=void 0!==c?c:16776960;d=void 0!==d?d:1;b=0;c=this.object.geometry;c instanceof THREE.Geometry?b=c.faces.length:console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.");c=new THREE.BufferGeometry();b=new THREE.Float32Attribute(6*b,3);c.addAttribute("position",b);THREE.LineSegments.call(this,c,new THREE.LineBasicMaterial({color:a,linewidth:d}));this.matrixAutoUpdate=!1;this.update();};THREE.FaceNormalsHelper.prototype=Object.create(THREE.LineSegments.prototype);THREE.FaceNormalsHelper.prototype.constructor=THREE.FaceNormalsHelper;THREE.FaceNormalsHelper.prototype.update=function(){var a=new THREE.Vector3(),b=new THREE.Vector3(),c=new THREE.Matrix3();return function(){this.object.updateMatrixWorld(!0);c.getNormalMatrix(this.object.matrixWorld);for(var d=this.object.matrixWorld,e=this.geometry.attributes.position,f=this.object.geometry,g=f.vertices,f=f.faces,h=0,k=0,l=f.length;k<l;k++){var m=f[k],p=m.normal;a.copy(g[m.a]).add(g[m.b]).add(g[m.c]).divideScalar(3).applyMatrix4(d);b.copy(p).applyMatrix3(c).normalize().multiplyScalar(this.size).add(a);e.setXYZ(h,a.x,a.y,a.z);h+=1;e.setXYZ(h,b.x,b.y,b.z);h+=1;}e.needsUpdate=!0;return this;};}();THREE.GridHelper=function(a,b,c,d){b=b||1;c=new THREE.Color(void 0!==c?c:4473924);d=new THREE.Color(void 0!==d?d:8947848);for(var e=b/2,f=2*a/b,g=[],h=[],k=0,l=0,m=-a;k<=b;k++,m+=f){g.push(-a,0,m,a,0,m);g.push(m,0,-a,m,0,a);var p=k===e?c:d;p.toArray(h,l);l+=3;p.toArray(h,l);l+=3;p.toArray(h,l);l+=3;p.toArray(h,l);l+=3;}a=new THREE.BufferGeometry();a.addAttribute("position",new THREE.Float32Attribute(g,3));a.addAttribute("color",new THREE.Float32Attribute(h,3));g=new THREE.LineBasicMaterial({vertexColors:THREE.VertexColors});THREE.LineSegments.call(this,a,g);};THREE.GridHelper.prototype=Object.create(THREE.LineSegments.prototype);THREE.GridHelper.prototype.constructor=THREE.GridHelper;THREE.GridHelper.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.");};THREE.HemisphereLightHelper=function(a,b){THREE.Object3D.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.colors=[new THREE.Color(),new THREE.Color()];var c=new THREE.SphereGeometry(b,4,2);c.rotateX(-Math.PI/2);for(var d=0;8>d;d++){c.faces[d].color=this.colors[4>d?0:1];}d=new THREE.MeshBasicMaterial({vertexColors:THREE.FaceColors,wireframe:!0});this.lightSphere=new THREE.Mesh(c,d);this.add(this.lightSphere);this.update();};THREE.HemisphereLightHelper.prototype=Object.create(THREE.Object3D.prototype);THREE.HemisphereLightHelper.prototype.constructor=THREE.HemisphereLightHelper;THREE.HemisphereLightHelper.prototype.dispose=function(){this.lightSphere.geometry.dispose();this.lightSphere.material.dispose();};THREE.HemisphereLightHelper.prototype.update=function(){var a=new THREE.Vector3();return function(){this.colors[0].copy(this.light.color).multiplyScalar(this.light.intensity);this.colors[1].copy(this.light.groundColor).multiplyScalar(this.light.intensity);this.lightSphere.lookAt(a.setFromMatrixPosition(this.light.matrixWorld).negate());this.lightSphere.geometry.colorsNeedUpdate=!0;};}();THREE.PointLightHelper=function(a,b){this.light=a;this.light.updateMatrixWorld();var c=new THREE.SphereBufferGeometry(b,4,2),d=new THREE.MeshBasicMaterial({wireframe:!0,fog:!1});d.color.copy(this.light.color).multiplyScalar(this.light.intensity);THREE.Mesh.call(this,c,d);this.matrix=this.light.matrixWorld;this.matrixAutoUpdate=!1;};THREE.PointLightHelper.prototype=Object.create(THREE.Mesh.prototype);THREE.PointLightHelper.prototype.constructor=THREE.PointLightHelper;THREE.PointLightHelper.prototype.dispose=function(){this.geometry.dispose();this.material.dispose();};THREE.PointLightHelper.prototype.update=function(){this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);};THREE.SkeletonHelper=function(a){this.bones=this.getBoneList(a);for(var b=new THREE.Geometry(),c=0;c<this.bones.length;c++){this.bones[c].parent instanceof THREE.Bone&&(b.vertices.push(new THREE.Vector3()),b.vertices.push(new THREE.Vector3()),b.colors.push(new THREE.Color(0,0,1)),b.colors.push(new THREE.Color(0,1,0)));}b.dynamic=!0;c=new THREE.LineBasicMaterial({vertexColors:THREE.VertexColors,depthTest:!1,depthWrite:!1,transparent:!0});THREE.LineSegments.call(this,b,c);this.root=a;this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;this.update();};THREE.SkeletonHelper.prototype=Object.create(THREE.LineSegments.prototype);THREE.SkeletonHelper.prototype.constructor=THREE.SkeletonHelper;THREE.SkeletonHelper.prototype.getBoneList=function(a){var b=[];a instanceof THREE.Bone&&b.push(a);for(var c=0;c<a.children.length;c++){b.push.apply(b,this.getBoneList(a.children[c]));}return b;};THREE.SkeletonHelper.prototype.update=function(){for(var a=this.geometry,b=new THREE.Matrix4().getInverse(this.root.matrixWorld),c=new THREE.Matrix4(),d=0,e=0;e<this.bones.length;e++){var f=this.bones[e];f.parent instanceof THREE.Bone&&(c.multiplyMatrices(b,f.matrixWorld),a.vertices[d].setFromMatrixPosition(c),c.multiplyMatrices(b,f.parent.matrixWorld),a.vertices[d+1].setFromMatrixPosition(c),d+=2);}a.verticesNeedUpdate=!0;a.computeBoundingSphere();};THREE.SpotLightHelper=function(a){THREE.Object3D.call(this);this.light=a;this.light.updateMatrixWorld();this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;a=new THREE.BufferGeometry();for(var b=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1],c=0,d=1;32>c;c++,d++){var e=c/32*Math.PI*2,f=d/32*Math.PI*2;b.push(Math.cos(e),Math.sin(e),1,Math.cos(f),Math.sin(f),1);}a.addAttribute("position",new THREE.Float32Attribute(b,3));b=new THREE.LineBasicMaterial({fog:!1});this.cone=new THREE.LineSegments(a,b);this.add(this.cone);this.update();};THREE.SpotLightHelper.prototype=Object.create(THREE.Object3D.prototype);THREE.SpotLightHelper.prototype.constructor=THREE.SpotLightHelper;THREE.SpotLightHelper.prototype.dispose=function(){this.cone.geometry.dispose();this.cone.material.dispose();};THREE.SpotLightHelper.prototype.update=function(){var a=new THREE.Vector3(),b=new THREE.Vector3();return function(){var c=this.light.distance?this.light.distance:1E3,d=c*Math.tan(this.light.angle);this.cone.scale.set(d,d,c);a.setFromMatrixPosition(this.light.matrixWorld);b.setFromMatrixPosition(this.light.target.matrixWorld);this.cone.lookAt(b.sub(a));this.cone.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);};}();THREE.VertexNormalsHelper=function(a,b,c,d){this.object=a;this.size=void 0!==b?b:1;a=void 0!==c?c:16711680;d=void 0!==d?d:1;b=0;c=this.object.geometry;c instanceof THREE.Geometry?b=3*c.faces.length:c instanceof THREE.BufferGeometry&&(b=c.attributes.normal.count);c=new THREE.BufferGeometry();b=new THREE.Float32Attribute(6*b,3);c.addAttribute("position",b);THREE.LineSegments.call(this,c,new THREE.LineBasicMaterial({color:a,linewidth:d}));this.matrixAutoUpdate=!1;this.update();};THREE.VertexNormalsHelper.prototype=Object.create(THREE.LineSegments.prototype);THREE.VertexNormalsHelper.prototype.constructor=THREE.VertexNormalsHelper;THREE.VertexNormalsHelper.prototype.update=function(){var a=new THREE.Vector3(),b=new THREE.Vector3(),c=new THREE.Matrix3();return function(){var d=["a","b","c"];this.object.updateMatrixWorld(!0);c.getNormalMatrix(this.object.matrixWorld);var e=this.object.matrixWorld,f=this.geometry.attributes.position,g=this.object.geometry;if(g instanceof THREE.Geometry)for(var h=g.vertices,k=g.faces,l=g=0,m=k.length;l<m;l++){for(var p=k[l],n=0,q=p.vertexNormals.length;n<q;n++){var r=p.vertexNormals[n];a.copy(h[p[d[n]]]).applyMatrix4(e);b.copy(r).applyMatrix3(c).normalize().multiplyScalar(this.size).add(a);f.setXYZ(g,a.x,a.y,a.z);g+=1;f.setXYZ(g,b.x,b.y,b.z);g+=1;}}else if(g instanceof THREE.BufferGeometry)for(d=g.attributes.position,h=g.attributes.normal,n=g=0,q=d.count;n<q;n++){a.set(d.getX(n),d.getY(n),d.getZ(n)).applyMatrix4(e),b.set(h.getX(n),h.getY(n),h.getZ(n)),b.applyMatrix3(c).normalize().multiplyScalar(this.size).add(a),f.setXYZ(g,a.x,a.y,a.z),g+=1,f.setXYZ(g,b.x,b.y,b.z),g+=1;}f.needsUpdate=!0;return this;};}();THREE.WireframeHelper=function(a,b){var c=void 0!==b?b:16777215;THREE.LineSegments.call(this,new THREE.WireframeGeometry(a.geometry),new THREE.LineBasicMaterial({color:c}));this.matrix=a.matrixWorld;this.matrixAutoUpdate=!1;};THREE.WireframeHelper.prototype=Object.create(THREE.LineSegments.prototype);THREE.WireframeHelper.prototype.constructor=THREE.WireframeHelper;THREE.ImmediateRenderObject=function(a){THREE.Object3D.call(this);this.material=a;this.render=function(a){};};THREE.ImmediateRenderObject.prototype=Object.create(THREE.Object3D.prototype);THREE.ImmediateRenderObject.prototype.constructor=THREE.ImmediateRenderObject;THREE.MorphBlendMesh=function(a,b){THREE.Mesh.call(this,a,b);this.animationsMap={};this.animationsList=[];var c=this.geometry.morphTargets.length;this.createAnimation("__default",0,c-1,c/1);this.setAnimationWeight("__default",1);};THREE.MorphBlendMesh.prototype=Object.create(THREE.Mesh.prototype);THREE.MorphBlendMesh.prototype.constructor=THREE.MorphBlendMesh;THREE.MorphBlendMesh.prototype.createAnimation=function(a,b,c,d){b={start:b,end:c,length:c-b+1,fps:d,duration:(c-b)/d,lastFrame:0,currentFrame:0,active:!1,time:0,direction:1,weight:1,directionBackwards:!1,mirroredLoop:!1};this.animationsMap[a]=b;this.animationsList.push(b);};THREE.MorphBlendMesh.prototype.autoCreateAnimations=function(a){for(var b=/([a-z]+)_?(\d+)/i,c,d={},e=this.geometry,f=0,g=e.morphTargets.length;f<g;f++){var h=e.morphTargets[f].name.match(b);if(h&&1<h.length){var k=h[1];d[k]||(d[k]={start:Infinity,end:-Infinity});h=d[k];f<h.start&&(h.start=f);f>h.end&&(h.end=f);c||(c=k);}}for(k in d){h=d[k],this.createAnimation(k,h.start,h.end,a);}this.firstAnimation=c;};THREE.MorphBlendMesh.prototype.setAnimationDirectionForward=function(a){if(a=this.animationsMap[a])a.direction=1,a.directionBackwards=!1;};THREE.MorphBlendMesh.prototype.setAnimationDirectionBackward=function(a){if(a=this.animationsMap[a])a.direction=-1,a.directionBackwards=!0;};THREE.MorphBlendMesh.prototype.setAnimationFPS=function(a,b){var c=this.animationsMap[a];c&&(c.fps=b,c.duration=(c.end-c.start)/c.fps);};THREE.MorphBlendMesh.prototype.setAnimationDuration=function(a,b){var c=this.animationsMap[a];c&&(c.duration=b,c.fps=(c.end-c.start)/c.duration);};THREE.MorphBlendMesh.prototype.setAnimationWeight=function(a,b){var c=this.animationsMap[a];c&&(c.weight=b);};THREE.MorphBlendMesh.prototype.setAnimationTime=function(a,b){var c=this.animationsMap[a];c&&(c.time=b);};THREE.MorphBlendMesh.prototype.getAnimationTime=function(a){var b=0;if(a=this.animationsMap[a])b=a.time;return b;};THREE.MorphBlendMesh.prototype.getAnimationDuration=function(a){var b=-1;if(a=this.animationsMap[a])b=a.duration;return b;};THREE.MorphBlendMesh.prototype.playAnimation=function(a){var b=this.animationsMap[a];b?(b.time=0,b.active=!0):console.warn("THREE.MorphBlendMesh: animation["+a+"] undefined in .playAnimation()");};THREE.MorphBlendMesh.prototype.stopAnimation=function(a){if(a=this.animationsMap[a])a.active=!1;};THREE.MorphBlendMesh.prototype.update=function(a){for(var b=0,c=this.animationsList.length;b<c;b++){var d=this.animationsList[b];if(d.active){var e=d.duration/d.length;d.time+=d.direction*a;if(d.mirroredLoop){if(d.time>d.duration||0>d.time)d.direction*=-1,d.time>d.duration&&(d.time=d.duration,d.directionBackwards=!0),0>d.time&&(d.time=0,d.directionBackwards=!1);}else d.time%=d.duration,0>d.time&&(d.time+=d.duration);var f=d.start+THREE.Math.clamp(Math.floor(d.time/e),0,d.length-1),g=d.weight;f!==d.currentFrame&&(this.morphTargetInfluences[d.lastFrame]=0,this.morphTargetInfluences[d.currentFrame]=1*g,this.morphTargetInfluences[f]=0,d.lastFrame=d.currentFrame,d.currentFrame=f);e=d.time%e/e;d.directionBackwards&&(e=1-e);d.currentFrame!==d.lastFrame?(this.morphTargetInfluences[d.currentFrame]=e*g,this.morphTargetInfluences[d.lastFrame]=(1-e)*g):this.morphTargetInfluences[d.currentFrame]=g;}}};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/**
	 * Tween.js - Licensed under the MIT license
	 * https://github.com/tweenjs/tween.js
	 * ----------------------------------------------
	 *
	 * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
	 * Thank you all, you're awesome!
	 */
	
	// Include a performance.now polyfill
	(function () {
	
		if ('performance' in window === false) {
			window.performance = {};
		}
	
		// IE 8
		Date.now = Date.now || function () {
			return new Date().getTime();
		};
	
		if ('now' in window.performance === false) {
			var offset = window.performance.timing && window.performance.timing.navigationStart ? window.performance.timing.navigationStart : Date.now();
	
			window.performance.now = function () {
				return Date.now() - offset;
			};
		}
	})();
	
	var TWEEN = TWEEN || function () {
	
		var _tweens = [];
	
		return {
	
			getAll: function getAll() {
	
				return _tweens;
			},
	
			removeAll: function removeAll() {
	
				_tweens = [];
			},
	
			add: function add(tween) {
	
				_tweens.push(tween);
			},
	
			remove: function remove(tween) {
	
				var i = _tweens.indexOf(tween);
	
				if (i !== -1) {
					_tweens.splice(i, 1);
				}
			},
	
			update: function update(time) {
	
				if (_tweens.length === 0) {
					return false;
				}
	
				var i = 0;
	
				time = time !== undefined ? time : window.performance.now();
	
				while (i < _tweens.length) {
	
					if (_tweens[i].update(time)) {
						i++;
					} else {
						_tweens.splice(i, 1);
					}
				}
	
				return true;
			}
		};
	}();
	
	TWEEN.Tween = function (object) {
	
		var _object = object;
		var _valuesStart = {};
		var _valuesEnd = {};
		var _valuesStartRepeat = {};
		var _duration = 1000;
		var _repeat = 0;
		var _yoyo = false;
		var _isPlaying = false;
		var _reversed = false;
		var _delayTime = 0;
		var _startTime = null;
		var _easingFunction = TWEEN.Easing.Linear.None;
		var _interpolationFunction = TWEEN.Interpolation.Linear;
		var _chainedTweens = [];
		var _onStartCallback = null;
		var _onStartCallbackFired = false;
		var _onUpdateCallback = null;
		var _onCompleteCallback = null;
		var _onStopCallback = null;
	
		// Set all starting values present on the target object
		for (var field in object) {
			_valuesStart[field] = parseFloat(object[field], 10);
		}
	
		this.to = function (properties, duration) {
	
			if (duration !== undefined) {
				_duration = duration;
			}
	
			_valuesEnd = properties;
	
			return this;
		};
	
		this.start = function (time) {
	
			TWEEN.add(this);
	
			_isPlaying = true;
	
			_onStartCallbackFired = false;
	
			_startTime = time !== undefined ? time : window.performance.now();
			_startTime += _delayTime;
	
			for (var property in _valuesEnd) {
	
				// Check if an Array was provided as property value
				if (_valuesEnd[property] instanceof Array) {
	
					if (_valuesEnd[property].length === 0) {
						continue;
					}
	
					// Create a local copy of the Array with the start value at the front
					_valuesEnd[property] = [_object[property]].concat(_valuesEnd[property]);
				}
	
				// If `to()` specifies a property that doesn't exist in the source object,
				// we should not set that property in the object
				if (_valuesStart[property] === undefined) {
					continue;
				}
	
				_valuesStart[property] = _object[property];
	
				if (_valuesStart[property] instanceof Array === false) {
					_valuesStart[property] *= 1.0; // Ensures we're using numbers, not strings
				}
	
				_valuesStartRepeat[property] = _valuesStart[property] || 0;
			}
	
			return this;
		};
	
		this.stop = function () {
	
			if (!_isPlaying) {
				return this;
			}
	
			TWEEN.remove(this);
			_isPlaying = false;
	
			if (_onStopCallback !== null) {
				_onStopCallback.call(_object);
			}
	
			this.stopChainedTweens();
			return this;
		};
	
		this.stopChainedTweens = function () {
	
			for (var i = 0, numChainedTweens = _chainedTweens.length; i < numChainedTweens; i++) {
				_chainedTweens[i].stop();
			}
		};
	
		this.delay = function (amount) {
	
			_delayTime = amount;
			return this;
		};
	
		this.repeat = function (times) {
	
			_repeat = times;
			return this;
		};
	
		this.yoyo = function (yoyo) {
	
			_yoyo = yoyo;
			return this;
		};
	
		this.easing = function (easing) {
	
			_easingFunction = easing;
			return this;
		};
	
		this.interpolation = function (interpolation) {
	
			_interpolationFunction = interpolation;
			return this;
		};
	
		this.chain = function () {
	
			_chainedTweens = arguments;
			return this;
		};
	
		this.onStart = function (callback) {
	
			_onStartCallback = callback;
			return this;
		};
	
		this.onUpdate = function (callback) {
	
			_onUpdateCallback = callback;
			return this;
		};
	
		this.onComplete = function (callback) {
	
			_onCompleteCallback = callback;
			return this;
		};
	
		this.onStop = function (callback) {
	
			_onStopCallback = callback;
			return this;
		};
	
		this.update = function (time) {
	
			var property;
			var elapsed;
			var value;
	
			if (time < _startTime) {
				return true;
			}
	
			if (_onStartCallbackFired === false) {
	
				if (_onStartCallback !== null) {
					_onStartCallback.call(_object);
				}
	
				_onStartCallbackFired = true;
			}
	
			elapsed = (time - _startTime) / _duration;
			elapsed = elapsed > 1 ? 1 : elapsed;
	
			value = _easingFunction(elapsed);
	
			for (property in _valuesEnd) {
	
				// Don't update properties that do not exist in the source object
				if (_valuesStart[property] === undefined) {
					continue;
				}
	
				var start = _valuesStart[property] || 0;
				var end = _valuesEnd[property];
	
				if (end instanceof Array) {
	
					_object[property] = _interpolationFunction(end, value);
				} else {
	
					// Parses relative end values with start as base (e.g.: +10, -3)
					if (typeof end === 'string') {
	
						if (end.startsWith('+') || end.startsWith('-')) {
							end = start + parseFloat(end, 10);
						} else {
							end = parseFloat(end, 10);
						}
					}
	
					// Protect against non numeric properties.
					if (typeof end === 'number') {
						_object[property] = start + (end - start) * value;
					}
				}
			}
	
			if (_onUpdateCallback !== null) {
				_onUpdateCallback.call(_object, value);
			}
	
			if (elapsed === 1) {
	
				if (_repeat > 0) {
	
					if (isFinite(_repeat)) {
						_repeat--;
					}
	
					// Reassign starting values, restart by making startTime = now
					for (property in _valuesStartRepeat) {
	
						if (typeof _valuesEnd[property] === 'string') {
							_valuesStartRepeat[property] = _valuesStartRepeat[property] + parseFloat(_valuesEnd[property], 10);
						}
	
						if (_yoyo) {
							var tmp = _valuesStartRepeat[property];
	
							_valuesStartRepeat[property] = _valuesEnd[property];
							_valuesEnd[property] = tmp;
						}
	
						_valuesStart[property] = _valuesStartRepeat[property];
					}
	
					if (_yoyo) {
						_reversed = !_reversed;
					}
	
					_startTime = time + _delayTime;
	
					return true;
				} else {
	
					if (_onCompleteCallback !== null) {
						_onCompleteCallback.call(_object);
					}
	
					for (var i = 0, numChainedTweens = _chainedTweens.length; i < numChainedTweens; i++) {
						// Make the chained tweens start exactly at the time they should,
						// even if the `update()` method was called way past the duration of the tween
						_chainedTweens[i].start(_startTime + _duration);
					}
	
					return false;
				}
			}
	
			return true;
		};
	};
	
	TWEEN.Easing = {
	
		Linear: {
	
			None: function None(k) {
	
				return k;
			}
	
		},
	
		Quadratic: {
	
			In: function In(k) {
	
				return k * k;
			},
	
			Out: function Out(k) {
	
				return k * (2 - k);
			},
	
			InOut: function InOut(k) {
	
				if ((k *= 2) < 1) {
					return 0.5 * k * k;
				}
	
				return -0.5 * (--k * (k - 2) - 1);
			}
	
		},
	
		Cubic: {
	
			In: function In(k) {
	
				return k * k * k;
			},
	
			Out: function Out(k) {
	
				return --k * k * k + 1;
			},
	
			InOut: function InOut(k) {
	
				if ((k *= 2) < 1) {
					return 0.5 * k * k * k;
				}
	
				return 0.5 * ((k -= 2) * k * k + 2);
			}
	
		},
	
		Quartic: {
	
			In: function In(k) {
	
				return k * k * k * k;
			},
	
			Out: function Out(k) {
	
				return 1 - --k * k * k * k;
			},
	
			InOut: function InOut(k) {
	
				if ((k *= 2) < 1) {
					return 0.5 * k * k * k * k;
				}
	
				return -0.5 * ((k -= 2) * k * k * k - 2);
			}
	
		},
	
		Quintic: {
	
			In: function In(k) {
	
				return k * k * k * k * k;
			},
	
			Out: function Out(k) {
	
				return --k * k * k * k * k + 1;
			},
	
			InOut: function InOut(k) {
	
				if ((k *= 2) < 1) {
					return 0.5 * k * k * k * k * k;
				}
	
				return 0.5 * ((k -= 2) * k * k * k * k + 2);
			}
	
		},
	
		Sinusoidal: {
	
			In: function In(k) {
	
				return 1 - Math.cos(k * Math.PI / 2);
			},
	
			Out: function Out(k) {
	
				return Math.sin(k * Math.PI / 2);
			},
	
			InOut: function InOut(k) {
	
				return 0.5 * (1 - Math.cos(Math.PI * k));
			}
	
		},
	
		Exponential: {
	
			In: function In(k) {
	
				return k === 0 ? 0 : Math.pow(1024, k - 1);
			},
	
			Out: function Out(k) {
	
				return k === 1 ? 1 : 1 - Math.pow(2, -10 * k);
			},
	
			InOut: function InOut(k) {
	
				if (k === 0) {
					return 0;
				}
	
				if (k === 1) {
					return 1;
				}
	
				if ((k *= 2) < 1) {
					return 0.5 * Math.pow(1024, k - 1);
				}
	
				return 0.5 * (-Math.pow(2, -10 * (k - 1)) + 2);
			}
	
		},
	
		Circular: {
	
			In: function In(k) {
	
				return 1 - Math.sqrt(1 - k * k);
			},
	
			Out: function Out(k) {
	
				return Math.sqrt(1 - --k * k);
			},
	
			InOut: function InOut(k) {
	
				if ((k *= 2) < 1) {
					return -0.5 * (Math.sqrt(1 - k * k) - 1);
				}
	
				return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
			}
	
		},
	
		Elastic: {
	
			In: function In(k) {
	
				var s;
				var a = 0.1;
				var p = 0.4;
	
				if (k === 0) {
					return 0;
				}
	
				if (k === 1) {
					return 1;
				}
	
				if (!a || a < 1) {
					a = 1;
					s = p / 4;
				} else {
					s = p * Math.asin(1 / a) / (2 * Math.PI);
				}
	
				return -(a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
			},
	
			Out: function Out(k) {
	
				var s;
				var a = 0.1;
				var p = 0.4;
	
				if (k === 0) {
					return 0;
				}
	
				if (k === 1) {
					return 1;
				}
	
				if (!a || a < 1) {
					a = 1;
					s = p / 4;
				} else {
					s = p * Math.asin(1 / a) / (2 * Math.PI);
				}
	
				return a * Math.pow(2, -10 * k) * Math.sin((k - s) * (2 * Math.PI) / p) + 1;
			},
	
			InOut: function InOut(k) {
	
				var s;
				var a = 0.1;
				var p = 0.4;
	
				if (k === 0) {
					return 0;
				}
	
				if (k === 1) {
					return 1;
				}
	
				if (!a || a < 1) {
					a = 1;
					s = p / 4;
				} else {
					s = p * Math.asin(1 / a) / (2 * Math.PI);
				}
	
				if ((k *= 2) < 1) {
					return -0.5 * (a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
				}
	
				return a * Math.pow(2, -10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p) * 0.5 + 1;
			}
	
		},
	
		Back: {
	
			In: function In(k) {
	
				var s = 1.70158;
	
				return k * k * ((s + 1) * k - s);
			},
	
			Out: function Out(k) {
	
				var s = 1.70158;
	
				return --k * k * ((s + 1) * k + s) + 1;
			},
	
			InOut: function InOut(k) {
	
				var s = 1.70158 * 1.525;
	
				if ((k *= 2) < 1) {
					return 0.5 * (k * k * ((s + 1) * k - s));
				}
	
				return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
			}
	
		},
	
		Bounce: {
	
			In: function In(k) {
	
				return 1 - TWEEN.Easing.Bounce.Out(1 - k);
			},
	
			Out: function Out(k) {
	
				if (k < 1 / 2.75) {
					return 7.5625 * k * k;
				} else if (k < 2 / 2.75) {
					return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
				} else if (k < 2.5 / 2.75) {
					return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
				} else {
					return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
				}
			},
	
			InOut: function InOut(k) {
	
				if (k < 0.5) {
					return TWEEN.Easing.Bounce.In(k * 2) * 0.5;
				}
	
				return TWEEN.Easing.Bounce.Out(k * 2 - 1) * 0.5 + 0.5;
			}
	
		}
	
	};
	
	TWEEN.Interpolation = {
	
		Linear: function Linear(v, k) {
	
			var m = v.length - 1;
			var f = m * k;
			var i = Math.floor(f);
			var fn = TWEEN.Interpolation.Utils.Linear;
	
			if (k < 0) {
				return fn(v[0], v[1], f);
			}
	
			if (k > 1) {
				return fn(v[m], v[m - 1], m - f);
			}
	
			return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);
		},
	
		Bezier: function Bezier(v, k) {
	
			var b = 0;
			var n = v.length - 1;
			var pw = Math.pow;
			var bn = TWEEN.Interpolation.Utils.Bernstein;
	
			for (var i = 0; i <= n; i++) {
				b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
			}
	
			return b;
		},
	
		CatmullRom: function CatmullRom(v, k) {
	
			var m = v.length - 1;
			var f = m * k;
			var i = Math.floor(f);
			var fn = TWEEN.Interpolation.Utils.CatmullRom;
	
			if (v[0] === v[m]) {
	
				if (k < 0) {
					i = Math.floor(f = m * (1 + k));
				}
	
				return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);
			} else {
	
				if (k < 0) {
					return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
				}
	
				if (k > 1) {
					return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
				}
	
				return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);
			}
		},
	
		Utils: {
	
			Linear: function Linear(p0, p1, t) {
	
				return (p1 - p0) * t + p0;
			},
	
			Bernstein: function Bernstein(n, i) {
	
				var fc = TWEEN.Interpolation.Utils.Factorial;
	
				return fc(n) / fc(i) / fc(n - i);
			},
	
			Factorial: function () {
	
				var a = [1];
	
				return function (n) {
	
					var s = 1;
	
					if (a[n]) {
						return a[n];
					}
	
					for (var i = n; i > 1; i--) {
						s *= i;
					}
	
					a[n] = s;
					return s;
				};
			}(),
	
			CatmullRom: function CatmullRom(p0, p1, p2, p3, t) {
	
				var v0 = (p2 - p0) * 0.5;
				var v1 = (p3 - p1) * 0.5;
				var t2 = t * t;
				var t3 = t * t2;
	
				return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;
			}
	
		}
	
	};
	
	// UMD (Universal Module Definition)
	(function (root) {
	
		if (true) {
	
			// AMD
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return TWEEN;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof module !== 'undefined' && (typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') {
	
			// Node.js
			module.exports = TWEEN;
		} else if (root !== undefined) {
	
			// Global variable
			root.TWEEN = TWEEN;
		}
	})(undefined);

/***/ },
/* 16 */,
/* 17 */
/***/ function(module, exports) {

	'use strict';
	
	/* This Source Code Form is subject to the terms of the Mozilla Public
	 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
	 * You can obtain one at http://mozilla.org/MPL/2.0/. */
	
	// var transformSVGPathExposed;
	// var applySVGTransformExposed;
	window.transformSVGPathExposed = null;
	window.applySVGTransformExposed = null;
	
	function d3threeD(exports) {
	
	    var DEGS_TO_RADS = Math.PI / 180,
	        UNIT_SIZE = 1;
	
	    var DIGIT_0 = 48,
	        DIGIT_9 = 57,
	        COMMA = 44,
	        SPACE = 32,
	        PERIOD = 46,
	        MINUS = 45;
	
	    function transformSVGPath(pathStr) {
	
	        var paths = [];
	        var path = new THREE.Shape();
	
	        var idx = 1,
	            len = pathStr.length,
	            activeCmd,
	            x = 0,
	            y = 0,
	            nx = 0,
	            ny = 0,
	            firstX = null,
	            firstY = null,
	            x1 = 0,
	            x2 = 0,
	            y1 = 0,
	            y2 = 0,
	            rx = 0,
	            ry = 0,
	            xar = 0,
	            laf = 0,
	            sf = 0,
	            cx,
	            cy;
	
	        function eatNum() {
	            var sidx,
	                c,
	                isFloat = false,
	                s;
	            // eat delims
	            while (idx < len) {
	                c = pathStr.charCodeAt(idx);
	                if (c !== COMMA && c !== SPACE) break;
	                idx++;
	            }
	            if (c === MINUS) sidx = idx++;else sidx = idx;
	            // eat number
	            while (idx < len) {
	                c = pathStr.charCodeAt(idx);
	                if (DIGIT_0 <= c && c <= DIGIT_9) {
	                    idx++;
	                    continue;
	                } else if (c === PERIOD) {
	                    idx++;
	                    isFloat = true;
	                    continue;
	                }
	
	                s = pathStr.substring(sidx, idx);
	                return isFloat ? parseFloat(s) : parseInt(s);
	            }
	
	            s = pathStr.substring(sidx);
	            return isFloat ? parseFloat(s) : parseInt(s);
	        }
	
	        function nextIsNum() {
	            var c;
	            // do permanently eat any delims...
	            while (idx < len) {
	                c = pathStr.charCodeAt(idx);
	                if (c !== COMMA && c !== SPACE) break;
	                idx++;
	            }
	            c = pathStr.charCodeAt(idx);
	            return c === MINUS || DIGIT_0 <= c && c <= DIGIT_9;
	        }
	
	        var canRepeat;
	        var enteredSub = false;
	        var zSeen = false;
	        activeCmd = pathStr[0];
	
	        while (idx <= len) {
	            canRepeat = true;
	            switch (activeCmd) {
	                // moveto commands, become lineto's if repeated
	                case 'M':
	                    enteredSub = false;
	                    x = eatNum();
	                    y = eatNum();
	                    path.moveTo(x, y);
	                    activeCmd = 'L';
	                    break;
	                case 'm':
	                    x += eatNum();
	                    y += eatNum();
	                    path.moveTo(x, y);
	                    activeCmd = 'l';
	                    break;
	                case 'Z':
	                case 'z':
	                    // z is a special case. This ends a segment and starts
	                    // a new path. Since the three.js path is continuous
	                    // we should start a new path here. This also draws a
	                    // line from the current location to the start location.
	                    canRepeat = false;
	                    if (x !== firstX || y !== firstY) path.lineTo(firstX, firstY);
	
	                    paths.push(path);
	
	                    // reset the elements
	                    firstX = null;
	                    firstY = null;
	
	                    // avoid x,y being set incorrectly
	                    enteredSub = true;
	
	                    path = new THREE.Shape();
	
	                    zSeen = true;
	
	                    break;
	                // - lines!
	                case 'L':
	                case 'H':
	                case 'V':
	                    nx = activeCmd === 'V' ? x : eatNum();
	                    ny = activeCmd === 'H' ? y : eatNum();
	                    path.lineTo(nx, ny);
	                    x = nx;
	                    y = ny;
	                    break;
	                case 'l':
	                case 'h':
	                case 'v':
	                    nx = activeCmd === 'v' ? x : x + eatNum();
	                    ny = activeCmd === 'h' ? y : y + eatNum();
	                    path.lineTo(nx, ny);
	                    x = nx;
	                    y = ny;
	                    break;
	                // - cubic bezier
	                case 'C':
	                    x1 = eatNum();y1 = eatNum();
	                case 'S':
	                    if (activeCmd === 'S') {
	                        x1 = 2 * x - x2;y1 = 2 * y - y2;
	                    }
	                    x2 = eatNum();
	                    y2 = eatNum();
	                    nx = eatNum();
	                    ny = eatNum();
	                    path.bezierCurveTo(x1, y1, x2, y2, nx, ny);
	                    x = nx;y = ny;
	                    break;
	                case 'c':
	                    x1 = x + eatNum();
	                    y1 = y + eatNum();
	                case 's':
	                    if (activeCmd === 's') {
	                        x1 = 2 * x - x2;
	                        y1 = 2 * y - y2;
	                    }
	                    x2 = x + eatNum();
	                    y2 = y + eatNum();
	                    nx = x + eatNum();
	                    ny = y + eatNum();
	                    path.bezierCurveTo(x1, y1, x2, y2, nx, ny);
	                    x = nx;y = ny;
	                    break;
	                // - quadratic bezier
	                case 'Q':
	                    x1 = eatNum();y1 = eatNum();
	                case 'T':
	                    if (activeCmd === 'T') {
	                        x1 = 2 * x - x1;
	                        y1 = 2 * y - y1;
	                    }
	                    nx = eatNum();
	                    ny = eatNum();
	                    path.quadraticCurveTo(x1, y1, nx, ny);
	                    x = nx;
	                    y = ny;
	                    break;
	                case 'q':
	                    x1 = x + eatNum();
	                    y1 = y + eatNum();
	                case 't':
	                    if (activeCmd === 't') {
	                        x1 = 2 * x - x1;
	                        y1 = 2 * y - y1;
	                    }
	                    nx = x + eatNum();
	                    ny = y + eatNum();
	                    path.quadraticCurveTo(x1, y1, nx, ny);
	                    x = nx;y = ny;
	                    break;
	                // - elliptical arc
	                case 'A':
	                    rx = eatNum();
	                    ry = eatNum();
	                    xar = eatNum() * DEGS_TO_RADS;
	                    laf = eatNum();
	                    sf = eatNum();
	                    nx = eatNum();
	                    ny = eatNum();
	                    if (rx !== ry) {
	                        console.warn("Forcing elliptical arc to be a circular one :(", rx, ry);
	                    }
	                    // SVG implementation notes does all the math for us! woo!
	                    // http://www.w3.org/TR/SVG/implnote.html#ArcImplementationNotes
	                    // step1, using x1 as x1'
	                    x1 = Math.cos(xar) * (x - nx) / 2 + Math.sin(xar) * (y - ny) / 2;
	                    y1 = -Math.sin(xar) * (x - nx) / 2 + Math.cos(xar) * (y - ny) / 2;
	                    // step 2, using x2 as cx'
	                    var norm = Math.sqrt((rx * rx * ry * ry - rx * rx * y1 * y1 - ry * ry * x1 * x1) / (rx * rx * y1 * y1 + ry * ry * x1 * x1));
	                    if (laf === sf) norm = -norm;
	                    x2 = norm * rx * y1 / ry;
	                    y2 = norm * -ry * x1 / rx;
	                    // step 3
	                    cx = Math.cos(xar) * x2 - Math.sin(xar) * y2 + (x + nx) / 2;
	                    cy = Math.sin(xar) * x2 + Math.cos(xar) * y2 + (y + ny) / 2;
	
	                    var u = new THREE.Vector2(1, 0),
	                        v = new THREE.Vector2((x1 - x2) / rx, (y1 - y2) / ry);
	                    var startAng = Math.acos(u.dot(v) / u.length() / v.length());
	                    if (u.x * v.y - u.y * v.x < 0) startAng = -startAng;
	
	                    // we can reuse 'v' from start angle as our 'u' for delta angle
	                    u.x = (-x1 - x2) / rx;
	                    u.y = (-y1 - y2) / ry;
	
	                    var deltaAng = Math.acos(v.dot(u) / v.length() / u.length());
	                    // This normalization ends up making our curves fail to triangulate...
	                    if (v.x * u.y - v.y * u.x < 0) deltaAng = -deltaAng;
	                    if (!sf && deltaAng > 0) deltaAng -= Math.PI * 2;
	                    if (sf && deltaAng < 0) deltaAng += Math.PI * 2;
	
	                    path.absarc(cx, cy, rx, startAng, startAng + deltaAng, sf);
	                    x = nx;
	                    y = ny;
	                    break;
	
	                case ' ':
	                    // if it's an empty space, just skip it, and see if we can find a real command
	                    break;
	
	                default:
	                    throw new Error("weird path command: " + activeCmd);
	            }
	            if (firstX === null && !enteredSub) {
	                firstX = x;
	                firstY = y;
	            }
	
	            // just reissue the command
	            if (canRepeat && nextIsNum()) continue;
	            activeCmd = pathStr[idx++];
	        }
	
	        if (zSeen) {
	            return paths;
	        } else {
	            paths.push(path);
	            return paths;
	        }
	    }
	
	    transformSVGPathExposed = transformSVGPath;
	
	    function applySVGTransform(obj, tstr) {
	
	        var idx = tstr.indexOf('('),
	            len = tstr.length,
	            cmd = tstr.substring(0, idx++);
	        function eatNum() {
	            var sidx,
	                c,
	                isFloat = false,
	                s;
	            // eat delims
	            while (idx < len) {
	                c = tstr.charCodeAt(idx);
	                if (c !== COMMA && c !== SPACE) break;
	                idx++;
	            }
	            if (c === MINUS) sidx = idx++;else sidx = idx;
	            // eat number
	            while (idx < len) {
	                c = tstr.charCodeAt(idx);
	                if (DIGIT_0 <= c && c <= DIGIT_9) {
	                    idx++;
	                    continue;
	                } else if (c === PERIOD) {
	                    idx++;
	                    isFloat = true;
	                    continue;
	                }
	
	                s = tstr.substring(sidx, idx);
	                return isFloat ? parseFloat(s) : parseInt(s);
	            }
	
	            s = tstr.substring(sidx);
	            return isFloat ? parseFloat(s) : parseInt(s);
	        }
	        switch (cmd) {
	            case 'translate':
	                obj.position.x = Math.floor(eatNum() * UNIT_SIZE);
	                obj.position.y = Math.floor(eatNum() * UNIT_SIZE);
	                break;
	            case 'scale':
	                obj.scale.x = Math.floor(eatNum() * UNIT_SIZE);
	                obj.scale.y = Math.floor(eatNum() * UNIT_SIZE);
	                break;
	            default:
	                console.warn("don't understand transform", tstr);
	                break;
	        }
	    }
	
	    applySVGTransformExposed = applySVGTransform;
	
	    function wrap_setAttribute(name, value) {}
	    function wrap_setAttributeNS(namespace, name, value) {}
	
	    var extrudeDefaults = {
	        amount: 20,
	        bevelEnabled: true,
	        material: 0,
	        extrudeMaterial: 0
	    };
	
	    function commonSetAttribute(name, value) {
	        switch (name) {
	            case 'x':
	                this.position.x = Math.floor(value * UNIT_SIZE);
	                break;
	
	            case 'y':
	                this.position.y = Math.floor(value * UNIT_SIZE);
	                break;
	
	            case 'class':
	                this.clazz = value;
	                break;
	
	            case 'stroke':
	            case 'fill':
	                if (typeof value !== 'string') value = value.toString();
	                this.material.color.setHex(parseInt(value.substring(1), 16));
	                break;
	
	            case 'transform':
	                applySVGTransform(this, value);
	                break;
	
	            case 'd':
	                var shape = transformSVGPath(value),
	                    geom = shape.extrude(extrudeDefaults);
	                this.geometry = geom;
	                this.geometry.boundingSphere = { radius: 3 * UNIT_SIZE };
	                this.scale.set(UNIT_SIZE, UNIT_SIZE, UNIT_SIZE);
	
	                break;
	
	            default:
	                throw new Error("no setter for: " + name);
	        }
	    }
	    function commonSetAttributeNS(namespace, name, value) {
	        this.setAttribute(name, value);
	    }
	
	    function Group(parentThing) {
	        THREE.Object3D.call(this);
	
	        this.d3class = '';
	
	        parentThing.add(this);
	    };
	    Group.prototype = new THREE.Object3D();
	    Group.prototype.constructor = Group;
	    Group.prototype.d3tag = 'g';
	    Group.prototype.setAttribute = commonSetAttribute;
	    Group.prototype.setAttributeNS = commonSetAttributeNS;
	
	    function fabGroup() {
	        return new Group(this);
	    }
	
	    function Mesh(parentThing, tag, geometry, material) {
	        THREE.Mesh.call(this, geometry, material);
	
	        this.d3tag = tag;
	        this.d3class = '';
	
	        parentThing.add(this);
	    }
	    Mesh.prototype = new THREE.Mesh();
	    Mesh.prototype.constructor = Mesh;
	    Mesh.prototype.setAttribute = commonSetAttribute;
	    Mesh.prototype.setAttributeNS = commonSetAttributeNS;
	
	    var SPHERE_SEGS = 16,
	        SPHERE_RINGS = 16,
	        DEFAULT_COLOR = 0xcc0000;
	
	    var sharedSphereGeom = null,
	        sharedCubeGeom = null;
	
	    function fabSphere() {
	        if (!sharedSphereGeom) sharedSphereGeom = new THREE.SphereGeometry(UNIT_SIZE / 2, SPHERE_SEGS, SPHERE_RINGS);
	        var material = new THREE.MeshLambertMaterial({
	            color: DEFAULT_COLOR
	        });
	        return new Mesh(this, 'sphere', sharedSphereGeom, material);
	    }
	
	    function fabCube() {
	        if (!sharedCubeGeom) sharedCubeGeom = new THREE.CubeGeometry(UNIT_SIZE, UNIT_SIZE, UNIT_SIZE);
	        var material = new THREE.MeshLambertMaterial({
	            color: DEFAULT_COLOR
	        });
	        return new Mesh(this, 'cube', sharedCubeGeom, material);
	    }
	
	    function fabPath() {
	        // start with a cube that we will replace with the path once it gets created
	        if (!sharedCubeGeom) sharedCubeGeom = new THREE.CubeGeometry(UNIT_SIZE, UNIT_SIZE, UNIT_SIZE);
	        var material = new THREE.MeshLambertMaterial({
	            color: DEFAULT_COLOR
	        });
	        return new Mesh(this, 'path', sharedCubeGeom, material);
	    }
	
	    function Scene() {
	        THREE.Scene.call(this);
	        this.renderer = null;
	        this.camera = null;
	        this.controls = null;
	        this._d3_width = null;
	        this._d3_height = null;
	    }
	    Scene.prototype = new THREE.Scene();
	    Scene.prototype.constructor = Scene;
	    Scene.prototype._setBounds = function () {
	        this.renderer.setSize(this._d3_width, this._d3_height);
	        var aspect = this.camera.aspect;
	        this.camera.position.set(this._d3_width * UNIT_SIZE / 2, this._d3_height * UNIT_SIZE / 2, Math.max(this._d3_width * UNIT_SIZE / Math.sqrt(2), this._d3_height * UNIT_SIZE / Math.sqrt(2)));
	        this.controls.target.set(this.camera.position.x, this.camera.position.y, 0);
	        console.log("camera:", this.camera.position.x, this.camera.position.y, this.camera.position.z);
	
	        //this.camera.position.z = 1000;
	    };
	    Scene.prototype.setAttribute = function (name, value) {
	        switch (name) {
	            case 'width':
	                this._d3_width = value;
	                if (this._d3_height) this._setBounds();
	                break;
	            case 'height':
	                this._d3_height = value;
	                if (this._d3_width) this._setBounds();
	                break;
	        }
	    };
	
	    function fabVis() {
	        var camera, scene, controls, renderer;
	
	        // - scene
	        scene = new Scene();
	        threeJsScene = scene;
	
	        // - camera
	        camera = scene.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 100000);
	        /*
	         camera = scene.camera = new THREE.OrthographicCamera(
	         window.innerWidth / -2, window.innerWidth / 2,
	         window.innerHeight / 2, window.innerHeight / -2,
	         1, 50000);
	         */
	        scene.add(camera);
	
	        // - controls
	        // from misc_camera_trackball.html example
	        controls = scene.controls = new THREE.TrackballControls(camera);
	        controls.rotateSpeed = 1.0;
	        controls.zoomSpeed = 1.2;
	        controls.panSpeed = 0.8;
	
	        controls.noZoom = false;
	        controls.noPan = false;
	
	        controls.staticMoving = true;
	        controls.dynamicDampingFactor = 0.3;
	
	        controls.keys = [65, 83, 68];
	
	        controls.addEventListener('change', render);
	
	        // - light
	        /*
	         var pointLight = new THREE.PointLight(0xFFFFFF);
	         pointLight.position.set(10, 50, 130);
	         scene.add(pointLight);
	         */
	
	        var spotlight = new THREE.SpotLight(0xffffff);
	        spotlight.position.set(-50000, 50000, 100000);
	        scene.add(spotlight);
	
	        var backlight = new THREE.SpotLight(0x888888);
	        backlight.position.set(50000, -50000, -100000);
	        scene.add(backlight);
	
	        /*
	         var ambientLight = new THREE.AmbientLight(0x888888);
	         scene.add(ambientLight);
	         */
	
	        function helperPlanes(maxBound) {
	            var geom = new THREE.PlaneGeometry(maxBound, maxBound, 4, 4);
	            for (var i = 0; i < 4; i++) {
	                var color, cx, cy;
	                switch (i) {
	                    case 0:
	                        color = 0xff0000;
	                        cx = maxBound / 2;
	                        cy = maxBound / 2;
	                        break;
	                    case 1:
	                        color = 0x00ff00;
	                        cx = maxBound / 2;
	                        cy = -maxBound / 2;
	                        break;
	                    case 2:
	                        color = 0x0000ff;
	                        cx = -maxBound / 2;
	                        cy = -maxBound / 2;
	                        break;
	                    case 3:
	                        color = 0xffff00;
	                        cx = -maxBound / 2;
	                        cy = maxBound / 2;
	                        break;
	                }
	                var material = new THREE.MeshLambertMaterial({ color: color });
	                var mesh = new THREE.Mesh(geom, material);
	                mesh.position.set(cx, cy, -1);
	
	                scene.add(mesh);
	            }
	        }
	        //helperPlanes(UNIT_SIZE * 225);
	
	        // - renderer
	        renderer = scene.renderer = new THREE.WebGLRenderer({
	            // too slow...
	            //antialias: true,
	        });
	        this.appendChild(renderer.domElement);
	
	        // - stats
	        var stats = new Stats();
	        stats.domElement.style.position = 'absolute';
	        stats.domElement.style.top = '0px';
	        stats.domElement.style.zIndex = 100;
	        this.appendChild(stats.domElement);
	
	        function animate() {
	            requestAnimationFrame(animate, renderer.domElement);
	            controls.update();
	        }
	
	        function render() {
	            renderer.render(scene, camera);
	            stats.update();
	        }
	
	        animate();
	
	        return scene;
	    };
	}
	
	var $d3g = {};
	d3threeD($d3g);

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * @author Eberhard Graether / http://egraether.com/
	 * @author Mark Lundin 	/ http://mark-lundin.com
	 */
	
	THREE.TrackballControls = function (object, domElement) {
	
		var _this = this;
		var STATE = { NONE: -1, ROTATE: 0, ZOOM: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_ZOOM_PAN: 4 };
	
		this.object = object;
		this.domElement = domElement !== undefined ? domElement : document;
	
		// API
	
		this.enabled = true;
	
		this.screen = { left: 0, top: 0, width: 0, height: 0 };
	
		this.rotateSpeed = 1.0;
		this.zoomSpeed = 1.2;
		this.panSpeed = 0.3;
	
		this.noRotate = false;
		this.noZoom = false;
		this.noPan = false;
		this.noRoll = false;
	
		this.staticMoving = false;
		this.dynamicDampingFactor = 0.2;
	
		this.minDistance = 0;
		this.maxDistance = Infinity;
	
		this.keys = [65 /*A*/, 83 /*S*/, 68 /*D*/];
	
		// internals
	
		this.target = new THREE.Vector3();
	
		var EPS = 0.000001;
	
		var lastPosition = new THREE.Vector3();
	
		var _state = STATE.NONE,
		    _prevState = STATE.NONE,
		    _eye = new THREE.Vector3(),
		    _rotateStart = new THREE.Vector3(),
		    _rotateEnd = new THREE.Vector3(),
		    _zoomStart = new THREE.Vector2(),
		    _zoomEnd = new THREE.Vector2(),
		    _touchZoomDistanceStart = 0,
		    _touchZoomDistanceEnd = 0,
		    _panStart = new THREE.Vector2(),
		    _panEnd = new THREE.Vector2();
	
		// for reset
	
		this.target0 = this.target.clone();
		this.position0 = this.object.position.clone();
		this.up0 = this.object.up.clone();
	
		// events
	
		var changeEvent = { type: 'change' };
		var startEvent = { type: 'start' };
		var endEvent = { type: 'end' };
	
		// methods
	
		this.handleResize = function () {
	
			if (this.domElement === document) {
	
				this.screen.left = 0;
				this.screen.top = 0;
				this.screen.width = window.innerWidth;
				this.screen.height = window.innerHeight;
			} else {
	
				var box = this.domElement.getBoundingClientRect();
				// adjustments come from similar code in the jquery offset() function
				var d = this.domElement.ownerDocument.documentElement;
				this.screen.left = box.left + window.pageXOffset - d.clientLeft;
				this.screen.top = box.top + window.pageYOffset - d.clientTop;
				this.screen.width = box.width;
				this.screen.height = box.height;
			}
		};
	
		this.handleEvent = function (event) {
	
			if (typeof this[event.type] == 'function') {
	
				this[event.type](event);
			}
		};
	
		var getMouseOnScreen = function () {
	
			var vector = new THREE.Vector2();
	
			return function (pageX, pageY) {
	
				vector.set((pageX - _this.screen.left) / _this.screen.width, (pageY - _this.screen.top) / _this.screen.height);
	
				return vector;
			};
		}();
	
		var getMouseProjectionOnBall = function () {
	
			var vector = new THREE.Vector3();
			var objectUp = new THREE.Vector3();
			var mouseOnBall = new THREE.Vector3();
	
			return function (pageX, pageY) {
	
				mouseOnBall.set((pageX - _this.screen.width * 0.5 - _this.screen.left) / (_this.screen.width * .5), (_this.screen.height * 0.5 + _this.screen.top - pageY) / (_this.screen.height * .5), 0.0);
	
				var length = mouseOnBall.length();
	
				if (_this.noRoll) {
	
					if (length < Math.SQRT1_2) {
	
						mouseOnBall.z = Math.sqrt(1.0 - length * length);
					} else {
	
						mouseOnBall.z = .5 / length;
					}
				} else if (length > 1.0) {
	
					mouseOnBall.normalize();
				} else {
	
					mouseOnBall.z = Math.sqrt(1.0 - length * length);
				}
	
				_eye.copy(_this.object.position).sub(_this.target);
	
				vector.copy(_this.object.up).setLength(mouseOnBall.y);
				vector.add(objectUp.copy(_this.object.up).cross(_eye).setLength(mouseOnBall.x));
				vector.add(_eye.setLength(mouseOnBall.z));
	
				return vector;
			};
		}();
	
		this.rotateCamera = function () {
	
			var axis = new THREE.Vector3(),
			    quaternion = new THREE.Quaternion();
	
			return function () {
	
				var angle = Math.acos(_rotateStart.dot(_rotateEnd) / _rotateStart.length() / _rotateEnd.length());
	
				if (angle) {
	
					axis.crossVectors(_rotateStart, _rotateEnd).normalize();
	
					angle *= _this.rotateSpeed;
	
					quaternion.setFromAxisAngle(axis, -angle);
	
					_eye.applyQuaternion(quaternion);
					_this.object.up.applyQuaternion(quaternion);
	
					_rotateEnd.applyQuaternion(quaternion);
	
					if (_this.staticMoving) {
	
						_rotateStart.copy(_rotateEnd);
					} else {
	
						quaternion.setFromAxisAngle(axis, angle * (_this.dynamicDampingFactor - 1.0));
						_rotateStart.applyQuaternion(quaternion);
					}
				}
			};
		}();
	
		this.zoomCamera = function () {
	
			if (_state === STATE.TOUCH_ZOOM_PAN) {
	
				var factor = _touchZoomDistanceStart / _touchZoomDistanceEnd;
				_touchZoomDistanceStart = _touchZoomDistanceEnd;
				_eye.multiplyScalar(factor);
			} else {
	
				var factor = 1.0 + (_zoomEnd.y - _zoomStart.y) * _this.zoomSpeed;
	
				if (factor !== 1.0 && factor > 0.0) {
	
					_eye.multiplyScalar(factor);
	
					if (_this.staticMoving) {
	
						_zoomStart.copy(_zoomEnd);
					} else {
	
						_zoomStart.y += (_zoomEnd.y - _zoomStart.y) * this.dynamicDampingFactor;
					}
				}
			}
		};
	
		this.panCamera = function () {
	
			var mouseChange = new THREE.Vector2(),
			    objectUp = new THREE.Vector3(),
			    pan = new THREE.Vector3();
	
			return function () {
	
				mouseChange.copy(_panEnd).sub(_panStart);
	
				if (mouseChange.lengthSq()) {
	
					mouseChange.multiplyScalar(_eye.length() * _this.panSpeed);
	
					pan.copy(_eye).cross(_this.object.up).setLength(mouseChange.x);
					pan.add(objectUp.copy(_this.object.up).setLength(mouseChange.y));
	
					_this.object.position.add(pan);
					_this.target.add(pan);
	
					if (_this.staticMoving) {
	
						_panStart.copy(_panEnd);
					} else {
	
						_panStart.add(mouseChange.subVectors(_panEnd, _panStart).multiplyScalar(_this.dynamicDampingFactor));
					}
				}
			};
		}();
	
		this.checkDistances = function () {
	
			if (!_this.noZoom || !_this.noPan) {
	
				if (_eye.lengthSq() > _this.maxDistance * _this.maxDistance) {
	
					_this.object.position.addVectors(_this.target, _eye.setLength(_this.maxDistance));
				}
	
				if (_eye.lengthSq() < _this.minDistance * _this.minDistance) {
	
					_this.object.position.addVectors(_this.target, _eye.setLength(_this.minDistance));
				}
			}
		};
	
		this.update = function () {
	
			_eye.subVectors(_this.object.position, _this.target);
	
			if (!_this.noRotate) {
	
				_this.rotateCamera();
			}
	
			if (!_this.noZoom) {
	
				_this.zoomCamera();
			}
	
			if (!_this.noPan) {
	
				_this.panCamera();
			}
	
			_this.object.position.addVectors(_this.target, _eye);
	
			_this.checkDistances();
	
			_this.object.lookAt(_this.target);
	
			if (lastPosition.distanceToSquared(_this.object.position) > EPS) {
	
				_this.dispatchEvent(changeEvent);
	
				lastPosition.copy(_this.object.position);
			}
		};
	
		this.reset = function () {
	
			_state = STATE.NONE;
			_prevState = STATE.NONE;
	
			_this.target.copy(_this.target0);
			_this.object.position.copy(_this.position0);
			_this.object.up.copy(_this.up0);
	
			_eye.subVectors(_this.object.position, _this.target);
	
			_this.object.lookAt(_this.target);
	
			_this.dispatchEvent(changeEvent);
	
			lastPosition.copy(_this.object.position);
		};
	
		// listeners
	
		function keydown(event) {
	
			if (_this.enabled === false) return;
	
			window.removeEventListener('keydown', keydown);
	
			_prevState = _state;
	
			if (_state !== STATE.NONE) {
	
				return;
			} else if (event.keyCode === _this.keys[STATE.ROTATE] && !_this.noRotate) {
	
				_state = STATE.ROTATE;
			} else if (event.keyCode === _this.keys[STATE.ZOOM] && !_this.noZoom) {
	
				_state = STATE.ZOOM;
			} else if (event.keyCode === _this.keys[STATE.PAN] && !_this.noPan) {
	
				_state = STATE.PAN;
			}
		}
	
		function keyup(event) {
	
			if (_this.enabled === false) return;
	
			_state = _prevState;
	
			window.addEventListener('keydown', keydown, false);
		}
	
		function mousedown(event) {
	
			if (_this.enabled === false) return;
	
			event.preventDefault();
			event.stopPropagation();
	
			if (_state === STATE.NONE) {
	
				_state = event.button;
			}
	
			if (_state === STATE.ROTATE && !_this.noRotate) {
	
				_rotateStart.copy(getMouseProjectionOnBall(event.pageX, event.pageY));
				_rotateEnd.copy(_rotateStart);
			} else if (_state === STATE.ZOOM && !_this.noZoom) {
	
				_zoomStart.copy(getMouseOnScreen(event.pageX, event.pageY));
				_zoomEnd.copy(_zoomStart);
			} else if (_state === STATE.PAN && !_this.noPan) {
	
				_panStart.copy(getMouseOnScreen(event.pageX, event.pageY));
				_panEnd.copy(_panStart);
			}
	
			document.addEventListener('mousemove', mousemove, false);
			document.addEventListener('mouseup', mouseup, false);
	
			_this.dispatchEvent(startEvent);
		}
	
		function mousemove(event) {
	
			if (_this.enabled === false) return;
	
			event.preventDefault();
			event.stopPropagation();
	
			if (_state === STATE.ROTATE && !_this.noRotate) {
	
				_rotateEnd.copy(getMouseProjectionOnBall(event.pageX, event.pageY));
			} else if (_state === STATE.ZOOM && !_this.noZoom) {
	
				_zoomEnd.copy(getMouseOnScreen(event.pageX, event.pageY));
			} else if (_state === STATE.PAN && !_this.noPan) {
	
				_panEnd.copy(getMouseOnScreen(event.pageX, event.pageY));
			}
		}
	
		function mouseup(event) {
	
			if (_this.enabled === false) return;
	
			event.preventDefault();
			event.stopPropagation();
	
			_state = STATE.NONE;
	
			document.removeEventListener('mousemove', mousemove);
			document.removeEventListener('mouseup', mouseup);
			_this.dispatchEvent(endEvent);
		}
	
		function mousewheel(event) {
	
			if (_this.enabled === false) return;
	
			event.preventDefault();
			event.stopPropagation();
	
			var delta = 0;
	
			if (event.wheelDelta) {
				// WebKit / Opera / Explorer 9
	
				delta = event.wheelDelta / 40;
			} else if (event.detail) {
				// Firefox
	
				delta = -event.detail / 3;
			}
	
			_zoomStart.y += delta * 0.01;
			_this.dispatchEvent(startEvent);
			_this.dispatchEvent(endEvent);
		}
	
		function touchstart(event) {
	
			if (_this.enabled === false) return;
	
			switch (event.touches.length) {
	
				case 1:
					_state = STATE.TOUCH_ROTATE;
					_rotateStart.copy(getMouseProjectionOnBall(event.touches[0].pageX, event.touches[0].pageY));
					_rotateEnd.copy(_rotateStart);
					break;
	
				case 2:
					_state = STATE.TOUCH_ZOOM_PAN;
					var dx = event.touches[0].pageX - event.touches[1].pageX;
					var dy = event.touches[0].pageY - event.touches[1].pageY;
					_touchZoomDistanceEnd = _touchZoomDistanceStart = Math.sqrt(dx * dx + dy * dy);
	
					var x = (event.touches[0].pageX + event.touches[1].pageX) / 2;
					var y = (event.touches[0].pageY + event.touches[1].pageY) / 2;
					_panStart.copy(getMouseOnScreen(x, y));
					_panEnd.copy(_panStart);
					break;
	
				default:
					_state = STATE.NONE;
	
			}
			_this.dispatchEvent(startEvent);
		}
	
		function touchmove(event) {
	
			if (_this.enabled === false) return;
	
			event.preventDefault();
			event.stopPropagation();
	
			switch (event.touches.length) {
	
				case 1:
					_rotateEnd.copy(getMouseProjectionOnBall(event.touches[0].pageX, event.touches[0].pageY));
					break;
	
				case 2:
					var dx = event.touches[0].pageX - event.touches[1].pageX;
					var dy = event.touches[0].pageY - event.touches[1].pageY;
					_touchZoomDistanceEnd = Math.sqrt(dx * dx + dy * dy);
	
					var x = (event.touches[0].pageX + event.touches[1].pageX) / 2;
					var y = (event.touches[0].pageY + event.touches[1].pageY) / 2;
					_panEnd.copy(getMouseOnScreen(x, y));
					break;
	
				default:
					_state = STATE.NONE;
	
			}
		}
	
		function touchend(event) {
	
			if (_this.enabled === false) return;
	
			switch (event.touches.length) {
	
				case 1:
					_rotateEnd.copy(getMouseProjectionOnBall(event.touches[0].pageX, event.touches[0].pageY));
					_rotateStart.copy(_rotateEnd);
					break;
	
				case 2:
					_touchZoomDistanceStart = _touchZoomDistanceEnd = 0;
	
					var x = (event.touches[0].pageX + event.touches[1].pageX) / 2;
					var y = (event.touches[0].pageY + event.touches[1].pageY) / 2;
					_panEnd.copy(getMouseOnScreen(x, y));
					_panStart.copy(_panEnd);
					break;
	
			}
	
			_state = STATE.NONE;
			_this.dispatchEvent(endEvent);
		}
	
		this.domElement.addEventListener('contextmenu', function (event) {
			event.preventDefault();
		}, false);
	
		this.domElement.addEventListener('mousedown', mousedown, false);
	
		this.domElement.addEventListener('mousewheel', mousewheel, false);
		this.domElement.addEventListener('DOMMouseScroll', mousewheel, false); // firefox
	
		this.domElement.addEventListener('touchstart', touchstart, false);
		this.domElement.addEventListener('touchend', touchend, false);
		this.domElement.addEventListener('touchmove', touchmove, false);
	
		window.addEventListener('keydown', keydown, false);
		window.addEventListener('keyup', keyup, false);
	
		this.handleResize();
	
		// force an update at start
		this.update();
	};
	THREE.TrackballControls.prototype = Object.create(THREE.EventDispatcher.prototype);

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';
	
	/**
	 * @author qiao / https://github.com/qiao
	 * @author mrdoob / http://mrdoob.com
	 * @author alteredq / http://alteredqualia.com/
	 * @author WestLangley / http://github.com/WestLangley
	 */
	
	THREE.OrbitControls = function (object, domElement) {
	
	    this.object = object;
	    this.domElement = domElement !== undefined ? domElement : document;
	
	    // API
	
	    this.enabled = true;
	
	    this.center = new THREE.Vector3();
	
	    this.userZoom = true;
	    this.userZoomSpeed = 1.0;
	
	    this.userRotate = true;
	    this.userRotateSpeed = 1.0;
	
	    this.userPan = true;
	    this.userPanSpeed = 2.0;
	
	    this.autoRotate = false;
	    this.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60
	
	    this.minPolarAngle = 0; // radians
	    this.maxPolarAngle = Math.PI; // radians
	
	    this.minDistance = 0;
	    this.maxDistance = Infinity;
	
	    this.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 };
	
	    // internals
	
	    var scope = this;
	
	    var EPS = 0.000001;
	    var PIXELS_PER_ROUND = 1800;
	
	    var rotateStart = new THREE.Vector2();
	    var rotateEnd = new THREE.Vector2();
	    var rotateDelta = new THREE.Vector2();
	
	    var zoomStart = new THREE.Vector2();
	    var zoomEnd = new THREE.Vector2();
	    var zoomDelta = new THREE.Vector2();
	
	    var phiDelta = 0;
	    var thetaDelta = 0;
	    var scale = 1;
	
	    var lastPosition = new THREE.Vector3();
	
	    var STATE = { NONE: -1, ROTATE: 0, ZOOM: 1, PAN: 2 };
	    var state = STATE.NONE;
	
	    // events
	
	    var changeEvent = { type: 'change' };
	
	    this.rotateLeft = function (angle) {
	
	        if (angle === undefined) {
	
	            angle = getAutoRotationAngle();
	        }
	
	        thetaDelta -= angle;
	    };
	
	    this.rotateRight = function (angle) {
	
	        if (angle === undefined) {
	
	            angle = getAutoRotationAngle();
	        }
	
	        thetaDelta += angle;
	    };
	
	    this.rotateUp = function (angle) {
	
	        if (angle === undefined) {
	
	            angle = getAutoRotationAngle();
	        }
	
	        phiDelta -= angle;
	    };
	
	    this.rotateDown = function (angle) {
	
	        if (angle === undefined) {
	
	            angle = getAutoRotationAngle();
	        }
	
	        phiDelta += angle;
	    };
	
	    this.zoomIn = function (zoomScale) {
	
	        if (zoomScale === undefined) {
	
	            zoomScale = getZoomScale();
	        }
	
	        scale /= zoomScale;
	    };
	
	    this.zoomOut = function (zoomScale) {
	
	        if (zoomScale === undefined) {
	
	            zoomScale = getZoomScale();
	        }
	
	        scale *= zoomScale;
	    };
	
	    this.pan = function (distance) {
	
	        distance.transformDirection(this.object.matrix);
	        distance.multiplyScalar(scope.userPanSpeed);
	
	        this.object.position.add(distance);
	        this.center.add(distance);
	    };
	
	    this.update = function () {
	
	        var position = this.object.position;
	        var offset = position.clone().sub(this.center);
	
	        // angle from z-axis around y-axis
	
	        var theta = Math.atan2(offset.x, offset.z);
	
	        // angle from y-axis
	
	        var phi = Math.atan2(Math.sqrt(offset.x * offset.x + offset.z * offset.z), offset.y);
	
	        if (this.autoRotate) {
	
	            this.rotateLeft(getAutoRotationAngle());
	        }
	
	        theta += thetaDelta;
	        phi += phiDelta;
	
	        // restrict phi to be between desired limits
	        phi = Math.max(this.minPolarAngle, Math.min(this.maxPolarAngle, phi));
	
	        // restrict phi to be betwee EPS and PI-EPS
	        phi = Math.max(EPS, Math.min(Math.PI - EPS, phi));
	
	        var radius = offset.length() * scale;
	
	        // restrict radius to be between desired limits
	        radius = Math.max(this.minDistance, Math.min(this.maxDistance, radius));
	
	        offset.x = radius * Math.sin(phi) * Math.sin(theta);
	        offset.y = radius * Math.cos(phi);
	        offset.z = radius * Math.sin(phi) * Math.cos(theta);
	
	        position.copy(this.center).add(offset);
	
	        this.object.lookAt(this.center);
	
	        thetaDelta = 0;
	        phiDelta = 0;
	        scale = 1;
	
	        if (lastPosition.distanceTo(this.object.position) > 0) {
	
	            this.dispatchEvent(changeEvent);
	
	            lastPosition.copy(this.object.position);
	        }
	    };
	
	    function getAutoRotationAngle() {
	
	        return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;
	    }
	
	    function getZoomScale() {
	
	        return Math.pow(0.95, scope.userZoomSpeed);
	    }
	
	    function onMouseDown(event) {
	
	        if (scope.enabled === false) return;
	        if (scope.userRotate === false) return;
	
	        event.preventDefault();
	
	        if (event.button === 0) {
	
	            state = STATE.ROTATE;
	
	            rotateStart.set(event.clientX, event.clientY);
	        } else if (event.button === 1) {
	
	            state = STATE.ZOOM;
	
	            zoomStart.set(event.clientX, event.clientY);
	        } else if (event.button === 2) {
	
	            state = STATE.PAN;
	        }
	
	        document.addEventListener('mousemove', onMouseMove, false);
	        document.addEventListener('mouseup', onMouseUp, false);
	    }
	
	    function onMouseMove(event) {
	
	        if (scope.enabled === false) return;
	
	        event.preventDefault();
	
	        if (state === STATE.ROTATE) {
	
	            rotateEnd.set(event.clientX, event.clientY);
	            rotateDelta.subVectors(rotateEnd, rotateStart);
	
	            scope.rotateLeft(2 * Math.PI * rotateDelta.x / PIXELS_PER_ROUND * scope.userRotateSpeed);
	            scope.rotateUp(2 * Math.PI * rotateDelta.y / PIXELS_PER_ROUND * scope.userRotateSpeed);
	
	            rotateStart.copy(rotateEnd);
	        } else if (state === STATE.ZOOM) {
	
	            zoomEnd.set(event.clientX, event.clientY);
	            zoomDelta.subVectors(zoomEnd, zoomStart);
	
	            if (zoomDelta.y > 0) {
	
	                scope.zoomIn();
	            } else {
	
	                scope.zoomOut();
	            }
	
	            zoomStart.copy(zoomEnd);
	        } else if (state === STATE.PAN) {
	
	            var movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
	            var movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;
	
	            scope.pan(new THREE.Vector3(-movementX, movementY, 0));
	        }
	    }
	
	    function onMouseUp(event) {
	
	        if (scope.enabled === false) return;
	        if (scope.userRotate === false) return;
	
	        document.removeEventListener('mousemove', onMouseMove, false);
	        document.removeEventListener('mouseup', onMouseUp, false);
	
	        state = STATE.NONE;
	    }
	
	    function onMouseWheel(event) {
	
	        if (scope.enabled === false) return;
	        if (scope.userZoom === false) return;
	
	        var delta = 0;
	
	        if (event.wheelDelta) {
	            // WebKit / Opera / Explorer 9
	
	            delta = event.wheelDelta;
	        } else if (event.detail) {
	            // Firefox
	
	            delta = -event.detail;
	        }
	
	        if (delta > 0) {
	
	            scope.zoomOut();
	        } else {
	
	            scope.zoomIn();
	        }
	    }
	
	    function onKeyDown(event) {
	
	        if (scope.enabled === false) return;
	        if (scope.userPan === false) return;
	
	        switch (event.keyCode) {
	
	            case scope.keys.UP:
	                scope.pan(new THREE.Vector3(0, 1, 0));
	                break;
	            case scope.keys.BOTTOM:
	                scope.pan(new THREE.Vector3(0, -1, 0));
	                break;
	            case scope.keys.LEFT:
	                scope.pan(new THREE.Vector3(-1, 0, 0));
	                break;
	            case scope.keys.RIGHT:
	                scope.pan(new THREE.Vector3(1, 0, 0));
	                break;
	        }
	    }
	
	    this.domElement.addEventListener('contextmenu', function (event) {
	        event.preventDefault();
	    }, false);
	    this.domElement.addEventListener('mousedown', onMouseDown, false);
	    this.domElement.addEventListener('mousewheel', onMouseWheel, false);
	    this.domElement.addEventListener('DOMMouseScroll', onMouseWheel, false); // firefox
	    this.domElement.addEventListener('keydown', onKeyDown, false);
	};
	
	THREE.OrbitControls.prototype = Object.create(THREE.EventDispatcher.prototype);

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';
	
	// t: current time, b: begInnIng value, c: change In value, d: duration
	window.easing = {
		def: 'easeOutQuad',
		swing: function swing(t, b, c, d) {
			//alert(easing.default);
			return easing[easing.def](x, t, b, c, d);
		},
		easeInQuad: function easeInQuad(t, b, c, d) {
			return c * (t /= d) * t + b;
		},
		easeOutQuad: function easeOutQuad(t, b, c, d) {
			return -c * (t /= d) * (t - 2) + b;
		},
		easeInOutQuad: function easeInOutQuad(t, b, c, d) {
			if ((t /= d / 2) < 1) return c / 2 * t * t + b;
			return -c / 2 * (--t * (t - 2) - 1) + b;
		},
		easeInCubic: function easeInCubic(t, b, c, d) {
			return c * (t /= d) * t * t + b;
		},
		easeOutCubic: function easeOutCubic(t, b, c, d) {
			return c * ((t = t / d - 1) * t * t + 1) + b;
		},
		easeInOutCubic: function easeInOutCubic(t, b, c, d) {
			if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
			return c / 2 * ((t -= 2) * t * t + 2) + b;
		},
		easeInQuart: function easeInQuart(t, b, c, d) {
			return c * (t /= d) * t * t * t + b;
		},
		easeOutQuart: function easeOutQuart(t, b, c, d) {
			return -c * ((t = t / d - 1) * t * t * t - 1) + b;
		},
		easeInOutQuart: function easeInOutQuart(t, b, c, d) {
			if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
			return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
		},
		easeInQuint: function easeInQuint(t, b, c, d) {
			return c * (t /= d) * t * t * t * t + b;
		},
		easeOutQuint: function easeOutQuint(t, b, c, d) {
			return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
		},
		easeInOutQuint: function easeInOutQuint(t, b, c, d) {
			if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
			return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
		},
		easeInSine: function easeInSine(t, b, c, d) {
			return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
		},
		easeOutSine: function easeOutSine(t, b, c, d) {
			return c * Math.sin(t / d * (Math.PI / 2)) + b;
		},
		easeInOutSine: function easeInOutSine(t, b, c, d) {
			return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
		},
		easeInExpo: function easeInExpo(t, b, c, d) {
			return t == 0 ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
		},
		easeOutExpo: function easeOutExpo(t, b, c, d) {
			return t == d ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
		},
		easeInOutExpo: function easeInOutExpo(t, b, c, d) {
			if (t == 0) return b;
			if (t == d) return b + c;
			if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
			return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
		},
		easeInCirc: function easeInCirc(t, b, c, d) {
			return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
		},
		easeOutCirc: function easeOutCirc(t, b, c, d) {
			return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
		},
		easeInOutCirc: function easeInOutCirc(t, b, c, d) {
			if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
			return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
		},
		easeInElastic: function easeInElastic(t, b, c, d) {
			var s = 1.70158;var p = 0;var a = c;
			if (t == 0) return b;if ((t /= d) == 1) return b + c;if (!p) p = d * .3;
			if (a < Math.abs(c)) {
				a = c;var s = p / 4;
			} else var s = p / (2 * Math.PI) * Math.asin(c / a);
			return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
		},
		easeOutElastic: function easeOutElastic(t, b, c, d) {
			var s = 1.70158;var p = 0;var a = c;
			if (t == 0) return b;if ((t /= d) == 1) return b + c;if (!p) p = d * .3;
			if (a < Math.abs(c)) {
				a = c;var s = p / 4;
			} else var s = p / (2 * Math.PI) * Math.asin(c / a);
			return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
		},
		easeInOutElastic: function easeInOutElastic(t, b, c, d) {
			var s = 1.70158;var p = 0;var a = c;
			if (t == 0) return b;if ((t /= d / 2) == 2) return b + c;if (!p) p = d * (.3 * 1.5);
			if (a < Math.abs(c)) {
				a = c;var s = p / 4;
			} else var s = p / (2 * Math.PI) * Math.asin(c / a);
			if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
			return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
		},
		easeInBack: function easeInBack(t, b, c, d, s) {
			if (s == undefined) s = 1.70158;
			return c * (t /= d) * t * ((s + 1) * t - s) + b;
		},
		easeOutBack: function easeOutBack(t, b, c, d, s) {
			if (s == undefined) s = 1.70158;
			return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
		},
		easeInOutBack: function easeInOutBack(t, b, c, d, s) {
			if (s == undefined) s = 1.70158;
			if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
			return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
		},
		easeInBounce: function easeInBounce(t, b, c, d) {
			return c - easing.easeOutBounce(x, d - t, 0, c, d) + b;
		},
		easeOutBounce: function easeOutBounce(t, b, c, d) {
			if ((t /= d) < 1 / 2.75) {
				return c * (7.5625 * t * t) + b;
			} else if (t < 2 / 2.75) {
				return c * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + b;
			} else if (t < 2.5 / 2.75) {
				return c * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + b;
			} else {
				return c * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + b;
			}
		},
		easeInOutBounce: function easeInOutBounce(t, b, c, d) {
			if (t < d / 2) return easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
			return easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
		}
	};
	
	window.calculateSubWindowSize = function () {
		var r13 = 1 / 3;
		var r23 = 2 / 3;
	
		var windowSizes = {
			'strip': [[{ left: 0, top: 0, width: 1, height: 1 }], [{ left: 0, top: 0, width: 1, height: 0.5 }, { left: 0, top: 0.5, width: 1, height: 0.5 }], [{ left: 0, top: 0, width: 1, height: r13 }, { left: 0, top: r13, width: 1, height: r13 }, { left: 0, top: r23, width: 1, height: r13 }], [{ left: 0, top: 0, width: 1, height: 0.25 }, { left: 0, top: 0.25, width: 1, height: 0.25 }, { left: 0, top: 0.5, width: 1, height: 0.25 }, { left: 0, top: 0.75, width: 1, height: 0.25 }]],
			'square': [[{ left: 0, top: 0, width: 1, height: 1 }], [{ left: 0, top: 0, width: 0.5, height: 1 }, { left: 0.5, top: 0, width: 0.5, height: 1 }], [{ left: 0, top: 0, width: 0.5, height: 1 }, { left: 0.5, top: 0, width: 0.5, height: 0.5 }, { left: 0.5, top: 0.5, width: 0.5, height: 0.5 }], [{ left: 0, top: 0, width: 0.5, height: 0.5 }, { left: 0.5, top: 0, width: 0.5, height: 0.5 }, { left: 0, top: 0.5, width: 0.5, height: 0.5 }, { left: 0.5, top: 0.5, width: 0.5, height: 0.5 }]],
			'flat': [[{ left: 0, top: 0, width: 1, height: 1 }], [{ left: 0, top: 0, width: 0.5, height: 1 }, { left: 0.5, top: 0, width: 0.5, height: 1 }], [{ left: 0, top: 0, width: r13, height: 1 }, { left: r13, top: 0, width: r13, height: 1 }, { left: r23, top: 0, width: r13, height: 1 }], [{ left: 0, top: 0, width: 0.25, height: 1 }, { left: 0.25, top: 0, width: 0.25, height: 1 }, { left: 0.5, top: 0, width: 0.25, height: 1 }, { left: 0.75, top: 0, width: 0.25, height: 1 }]]
		};
	
		return function (windowNum) {
			var sizes = [];
			var winWidth = window.innerWidth;
			var winHeight = window.innerHeight;
	
			var ratio = winWidth / winHeight;
			var windowType = 'square';
	
			if (windowNum === 2 && ratio < 1 || windowNum === 3 && ratio < 0.75 || windowNum === 4 && ratio < 0.4) {
				windowType = 'strip';
			} else if (windowNum === 2 && ratio > 1 || windowNum === 3 && ratio > 1.25 || windowNum === 4 && ratio > 1.6) {
				windowType = 'flat';
			}
	
			return windowSizes[windowType][windowNum - 1];
		};
	}();
	
	THREE.THREEUtil = {
	
		getLookAt: function getLookAt(mesh) {
			var lookAt = new THREE.Vector3(0, 0, -1);
			var euler = new THREE.Euler(0, 0, 0, 'XYZ');
	
			euler.copy(mesh.rotation);
	
			lookAt.applyEuler(euler);
			lookAt.add(mesh.position);
			return lookAt;
		}
	};
	
	// custom material
	
	THREE.GlowMaterial = function () {
		var defaults = {
			c: 0.35,
			p: 5,
			color: new THREE.Color(),
			v: new THREE.Vector3(),
			transparent: true,
			side: THREE.FrontSide
		};
		var vertexShaderCode = document.getElementById('glowVertexShader').textContent;
		var fragmentShaderCode = document.getElementById('glowFragmentShader').textContent;
	
		return function (options) {
			options = $.extend({}, defaults, options);
			return new THREE.ShaderMaterial({
				uniforms: {
					"c": { type: "f", value: options.c },
					"p": { type: "f", value: options.p },
					glowColor: { type: "c", value: options.color },
					viewVector: { type: "v3", value: options.v }
				},
				vertexShader: vertexShaderCode,
				fragmentShader: fragmentShaderCode,
				side: options.side,
				blending: THREE.AdditiveBlending,
				transparent: options.transparent
			});
		};
	}();

/***/ },
/* 21 */,
/* 22 */
/***/ function(module, exports) {

	'use strict';
	
	/*
	 *	@author zz85 / http://twitter.com/blurspline / http://www.lab4games.net/zz85/blog
	 *	@author centerionware / http://www.centerionware.com
	 *
	 *	Subdivision Geometry Modifier
	 *		using Loop Subdivision Scheme
	 *
	 *	References:
	 *		http://graphics.stanford.edu/~mdfisher/subdivision.html
	 *		http://www.holmes3d.net/graphics/subdivision/
	 *		http://www.cs.rutgers.edu/~decarlo/readings/subdiv-sg00c.pdf
	 *
	 *	Known Issues:
	 *		- currently doesn't handle "Sharp Edges"
	 */
	
	THREE.SubdivisionModifier = function (subdivisions) {
	
		this.subdivisions = subdivisions === undefined ? 1 : subdivisions;
	};
	
	// Applies the "modify" pattern
	THREE.SubdivisionModifier.prototype.modify = function (geometry) {
	
		var repeats = this.subdivisions;
	
		while (repeats-- > 0) {
	
			this.smooth(geometry);
		}
	
		geometry.computeFaceNormals();
		geometry.computeVertexNormals();
	};
	
	(function () {
	
		// Some constants
		var WARNINGS = !true; // Set to true for development
		var ABC = ['a', 'b', 'c'];
	
		function getEdge(a, b, map) {
	
			var vertexIndexA = Math.min(a, b);
			var vertexIndexB = Math.max(a, b);
	
			var key = vertexIndexA + "_" + vertexIndexB;
	
			return map[key];
		}
	
		function processEdge(a, b, vertices, map, face, metaVertices) {
	
			var vertexIndexA = Math.min(a, b);
			var vertexIndexB = Math.max(a, b);
	
			var key = vertexIndexA + "_" + vertexIndexB;
	
			var edge;
	
			if (key in map) {
	
				edge = map[key];
			} else {
	
				var vertexA = vertices[vertexIndexA];
				var vertexB = vertices[vertexIndexB];
	
				edge = {
	
					a: vertexA, // pointer reference
					b: vertexB,
					newEdge: null,
					// aIndex: a, // numbered reference
					// bIndex: b,
					faces: [] // pointers to face
	
				};
	
				map[key] = edge;
			}
	
			edge.faces.push(face);
	
			metaVertices[a].edges.push(edge);
			metaVertices[b].edges.push(edge);
		}
	
		function generateLookups(vertices, faces, metaVertices, edges) {
	
			var i, il, face, edge;
	
			for (i = 0, il = vertices.length; i < il; i++) {
	
				metaVertices[i] = { edges: [] };
			}
	
			for (i = 0, il = faces.length; i < il; i++) {
	
				face = faces[i];
	
				processEdge(face.a, face.b, vertices, edges, face, metaVertices);
				processEdge(face.b, face.c, vertices, edges, face, metaVertices);
				processEdge(face.c, face.a, vertices, edges, face, metaVertices);
			}
		}
	
		function newFace(newFaces, a, b, c) {
	
			newFaces.push(new THREE.Face3(a, b, c));
		}
	
		function midpoint(a, b) {
	
			return Math.abs(b - a) / 2 + Math.min(a, b);
		}
	
		function newUv(newUvs, a, b, c) {
	
			newUvs.push([a.clone(), b.clone(), c.clone()]);
		}
	
		/////////////////////////////
	
		// Performs one iteration of Subdivision
		THREE.SubdivisionModifier.prototype.smooth = function (geometry) {
	
			var tmp = new THREE.Vector3();
	
			var oldVertices, oldFaces, oldUvs;
			var newVertices,
			    newFaces,
			    newUVs = [];
	
			var n, l, i, il, j, k;
			var metaVertices, sourceEdges;
	
			// new stuff.
			var sourceEdges, newEdgeVertices, newSourceVertices;
	
			oldVertices = geometry.vertices; // { x, y, z}
			oldFaces = geometry.faces; // { a: oldVertex1, b: oldVertex2, c: oldVertex3 }
			oldUvs = geometry.faceVertexUvs[0];
	
			var hasUvs = oldUvs !== undefined && oldUvs.length > 0;
	
			/******************************************************
	   *
	   * Step 0: Preprocess Geometry to Generate edges Lookup
	   *
	   *******************************************************/
	
			metaVertices = new Array(oldVertices.length);
			sourceEdges = {}; // Edge => { oldVertex1, oldVertex2, faces[]  }
	
			generateLookups(oldVertices, oldFaces, metaVertices, sourceEdges);
	
			/******************************************************
	   *
	   *	Step 1.
	   *	For each edge, create a new Edge Vertex,
	   *	then position it.
	   *
	   *******************************************************/
	
			newEdgeVertices = [];
			var other, currentEdge, newEdge, face;
			var edgeVertexWeight, adjacentVertexWeight, connectedFaces;
	
			for (i in sourceEdges) {
	
				currentEdge = sourceEdges[i];
				newEdge = new THREE.Vector3();
	
				edgeVertexWeight = 3 / 8;
				adjacentVertexWeight = 1 / 8;
	
				connectedFaces = currentEdge.faces.length;
	
				// check how many linked faces. 2 should be correct.
				if (connectedFaces != 2) {
	
					// if length is not 2, handle condition
					edgeVertexWeight = 0.5;
					adjacentVertexWeight = 0;
	
					if (connectedFaces != 1) {
	
						if (WARNINGS) console.warn('Subdivision Modifier: Number of connected faces != 2, is: ', connectedFaces, currentEdge);
					}
				}
	
				newEdge.addVectors(currentEdge.a, currentEdge.b).multiplyScalar(edgeVertexWeight);
	
				tmp.set(0, 0, 0);
	
				for (j = 0; j < connectedFaces; j++) {
	
					face = currentEdge.faces[j];
	
					for (k = 0; k < 3; k++) {
	
						other = oldVertices[face[ABC[k]]];
						if (other !== currentEdge.a && other !== currentEdge.b) break;
					}
	
					tmp.add(other);
				}
	
				tmp.multiplyScalar(adjacentVertexWeight);
				newEdge.add(tmp);
	
				currentEdge.newEdge = newEdgeVertices.length;
				newEdgeVertices.push(newEdge);
	
				// console.log(currentEdge, newEdge);
			}
	
			/******************************************************
	   *
	   *	Step 2.
	   *	Reposition each source vertices.
	   *
	   *******************************************************/
	
			var beta, sourceVertexWeight, connectingVertexWeight;
			var connectingEdge, connectingEdges, oldVertex, newSourceVertex;
			newSourceVertices = [];
	
			for (i = 0, il = oldVertices.length; i < il; i++) {
	
				oldVertex = oldVertices[i];
	
				// find all connecting edges (using lookupTable)
				connectingEdges = metaVertices[i].edges;
				n = connectingEdges.length;
	
				if (n == 3) {
	
					beta = 3 / 16;
				} else if (n > 3) {
	
					beta = 3 / (8 * n); // Warren's modified formula
				}
	
				// Loop's original beta formula
				// beta = 1 / n * ( 5/8 - Math.pow( 3/8 + 1/4 * Math.cos( 2 * Math. PI / n ), 2) );
	
				sourceVertexWeight = 1 - n * beta;
				connectingVertexWeight = beta;
	
				if (n <= 2) {
	
					// crease and boundary rules
					// console.warn('crease and boundary rules');
	
					if (n == 2) {
	
						if (WARNINGS) console.warn('2 connecting edges', connectingEdges);
						sourceVertexWeight = 3 / 4;
						connectingVertexWeight = 1 / 8;
	
						// sourceVertexWeight = 1;
						// connectingVertexWeight = 0;
					} else if (n == 1) {
	
						if (WARNINGS) console.warn('only 1 connecting edge');
					} else if (n == 0) {
	
						if (WARNINGS) console.warn('0 connecting edges');
					}
				}
	
				newSourceVertex = oldVertex.clone().multiplyScalar(sourceVertexWeight);
	
				tmp.set(0, 0, 0);
	
				for (j = 0; j < n; j++) {
	
					connectingEdge = connectingEdges[j];
					other = connectingEdge.a !== oldVertex ? connectingEdge.a : connectingEdge.b;
					tmp.add(other);
				}
	
				tmp.multiplyScalar(connectingVertexWeight);
				newSourceVertex.add(tmp);
	
				newSourceVertices.push(newSourceVertex);
			}
	
			/******************************************************
	   *
	   *	Step 3.
	   *	Generate Faces between source vertices
	   *	and edge vertices.
	   *
	   *******************************************************/
	
			newVertices = newSourceVertices.concat(newEdgeVertices);
			var sl = newSourceVertices.length,
			    edge1,
			    edge2,
			    edge3;
			newFaces = [];
	
			var uv, x0, x1, x2;
			var x3 = new THREE.Vector2();
			var x4 = new THREE.Vector2();
			var x5 = new THREE.Vector2();
	
			for (i = 0, il = oldFaces.length; i < il; i++) {
	
				face = oldFaces[i];
	
				// find the 3 new edges vertex of each old face
	
				edge1 = getEdge(face.a, face.b, sourceEdges).newEdge + sl;
				edge2 = getEdge(face.b, face.c, sourceEdges).newEdge + sl;
				edge3 = getEdge(face.c, face.a, sourceEdges).newEdge + sl;
	
				// create 4 faces.
	
				newFace(newFaces, edge1, edge2, edge3);
				newFace(newFaces, face.a, edge1, edge3);
				newFace(newFaces, face.b, edge2, edge1);
				newFace(newFaces, face.c, edge3, edge2);
	
				// create 4 new uv's
	
				if (hasUvs) {
	
					uv = oldUvs[i];
	
					x0 = uv[0];
					x1 = uv[1];
					x2 = uv[2];
	
					x3.set(midpoint(x0.x, x1.x), midpoint(x0.y, x1.y));
					x4.set(midpoint(x1.x, x2.x), midpoint(x1.y, x2.y));
					x5.set(midpoint(x0.x, x2.x), midpoint(x0.y, x2.y));
	
					newUv(newUVs, x3, x4, x5);
					newUv(newUVs, x0, x3, x5);
	
					newUv(newUVs, x1, x4, x3);
					newUv(newUVs, x2, x5, x4);
				}
			}
	
			// Overwrite old arrays
			geometry.vertices = newVertices;
			geometry.faces = newFaces;
			if (hasUvs) geometry.faceVertexUvs[0] = newUVs;
	
			// console.log('done');
		};
	})();

/***/ }
/******/ ]);
//# sourceMappingURL=presets.js.map