// ==UserScript==
// @name           Form Calculator
// @description    Evaluate a text selection as math expression
// @include        *
// ==/UserScript==

(function() {

  
  var Functions = { };
  Object.getOwnPropertyNames(Math).forEach(function(key) { Functions[key] = Math[key]; });
  Functions.log = function(x, y) { return arguments.length == 2 ? Math.log(y) / Math.log(x) : Math.log(x) / Math.LN10; };
  Functions.ln = function(x) { return Math.log(x); };
  Functions.lg = function(x) { return Math.log(x) / Math.LN2; };
  
  function parse(input_string) {
     var result; 
    /*
    	Default template driver for JS/CC generated parsers running as
    	browser-based JavaScript/ECMAScript applications.
    	
    	WARNING: 	This parser template will not run as console and has lesser
    				features for debugging than the console derivates for the
    				various JavaScript platforms.
    	
    	Features:
    	- Parser trace messages
    	- Integrated panic-mode error recovery
    	
    	Written 2007, 2008 by Jan Max Meyer, J.M.K S.F. Software Technologies
    	
    	This is in the public domain.
    */
    
    var NODEJS__dbg_withtrace		= false;
    var NODEJS__dbg_string			= new String();
    
    function __NODEJS_dbg_print( text )
    {
    	NODEJS__dbg_string += text + "\n";
    }
    
    function __NODEJS_lex( info )
    {
    	var state		= 0;
    	var match		= -1;
    	var match_pos	= 0;
    	var start		= 0;
    	var pos			= info.offset + 1;
    
    	do
    	{
    		pos--;
    		state = 0;
    		match = -2;
    		start = pos;
    
    		if( info.src.length <= start )
    			return 16;
    
    		do
    		{
    
    switch( state )
    {
    	case 0:
    		if( info.src.charCodeAt( pos ) == 9 || info.src.charCodeAt( pos ) == 32 ) state = 1;
    		else if( info.src.charCodeAt( pos ) == 40 ) state = 2;
    		else if( info.src.charCodeAt( pos ) == 41 ) state = 3;
    		else if( info.src.charCodeAt( pos ) == 42 ) state = 4;
    		else if( info.src.charCodeAt( pos ) == 43 ) state = 5;
    		else if( info.src.charCodeAt( pos ) == 45 ) state = 6;
    		else if( info.src.charCodeAt( pos ) == 47 ) state = 7;
    		else if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) ) state = 8;
    		else if( info.src.charCodeAt( pos ) == 46 ) state = 10;
    		else state = -1;
    		break;
    
    	case 1:
    		state = -1;
    		match = 1;
    		match_pos = pos;
    		break;
    
    	case 2:
    		state = -1;
    		match = 2;
    		match_pos = pos;
    		break;
    
    	case 3:
    		state = -1;
    		match = 3;
    		match_pos = pos;
    		break;
    
    	case 4:
    		state = -1;
    		match = 8;
    		match_pos = pos;
    		break;
    
    	case 5:
    		state = -1;
    		match = 6;
    		match_pos = pos;
    		break;
    
    	case 6:
    		state = -1;
    		match = 7;
    		match_pos = pos;
    		break;
    
    	case 7:
    		state = -1;
    		match = 9;
    		match_pos = pos;
    		break;
    
    	case 8:
    		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) ) state = 8;
    		else if( info.src.charCodeAt( pos ) == 46 ) state = 9;
    		else state = -1;
    		match = 4;
    		match_pos = pos;
    		break;
    
    	case 9:
    		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) ) state = 9;
    		else state = -1;
    		match = 5;
    		match_pos = pos;
    		break;
    
    	case 10:
    		if( ( info.src.charCodeAt( pos ) >= 48 && info.src.charCodeAt( pos ) <= 57 ) ) state = 9;
    		else state = -1;
    		break;
    
    }
    
    
    			pos++;
    
    		}
    		while( state > -1 );
    
    	}
    	while( 1 > -1 && match == 1 );
    
    	if( match > -1 )
    	{
    		info.att = info.src.substr( start, match_pos - start );
    		info.offset = match_pos;
    		
    switch( match )
    {
    	case 4:
    		{
    		 info.att = parseInt( info.att ); 
    		}
    		break;
    
    	case 5:
    		{
    		 info.att = parseFloat( info.att ); 
    		}
    		break;
    
    }
    
    
    	}
    	else
    	{
    		info.att = new String();
    		match = -1;
    	}
    
    	return match;
    }
    
    
    function __NODEJS_parse( src, err_off, err_la )
    {
    	var		sstack			= new Array();
    	var		vstack			= new Array();
    	var 	err_cnt			= 0;
    	var		act;
    	var		go;
    	var		la;
    	var		rval;
    	var 	parseinfo		= new Function( "", "var offset; var src; var att;" );
    	var		info			= new parseinfo();
    	
    /* Pop-Table */
    var pop_tab = new Array(
    	new Array( 0/* p' */, 1 ),
    	new Array( 11/* p */, 1 ),
    	new Array( 10/* e */, 3 ),
    	new Array( 10/* e */, 3 ),
    	new Array( 10/* e */, 3 ),
    	new Array( 10/* e */, 3 ),
    	new Array( 10/* e */, 2 ),
    	new Array( 10/* e */, 1 ),
    	new Array( 12/* e2 */, 2 ),
    	new Array( 12/* e2 */, 1 ),
    	new Array( 13/* P */, 1 ),
    	new Array( 13/* P */, 1 ),
    	new Array( 14/* Pa */, 3 ),
    	new Array( 15/* N */, 1 ),
    	new Array( 15/* N */, 1 )
    );
    
    /* Action-Table */
    var act_tab = new Array(
    	/* State 0 */ new Array( 7/* "-" */,3 , 2/* "(" */,8 , 4/* "INT" */,9 , 5/* "FLOAT" */,10 ),
    	/* State 1 */ new Array( 16/* "$" */,0 ),
    	/* State 2 */ new Array( 9/* "/" */,11 , 8/* "*" */,12 , 7/* "-" */,13 , 6/* "+" */,14 , 16/* "$" */,-1 ),
    	/* State 3 */ new Array( 7/* "-" */,3 , 2/* "(" */,8 , 4/* "INT" */,9 , 5/* "FLOAT" */,10 ),
    	/* State 4 */ new Array( 16/* "$" */,-7 , 6/* "+" */,-7 , 7/* "-" */,-7 , 8/* "*" */,-7 , 9/* "/" */,-7 , 3/* ")" */,-7 ),
    	/* State 5 */ new Array( 2/* "(" */,8 , 4/* "INT" */,9 , 5/* "FLOAT" */,10 , 16/* "$" */,-9 , 6/* "+" */,-9 , 7/* "-" */,-9 , 8/* "*" */,-9 , 9/* "/" */,-9 , 3/* ")" */,-9 ),
    	/* State 6 */ new Array( 2/* "(" */,-10 , 4/* "INT" */,-10 , 5/* "FLOAT" */,-10 , 16/* "$" */,-10 , 6/* "+" */,-10 , 7/* "-" */,-10 , 8/* "*" */,-10 , 9/* "/" */,-10 , 3/* ")" */,-10 ),
    	/* State 7 */ new Array( 2/* "(" */,-11 , 4/* "INT" */,-11 , 5/* "FLOAT" */,-11 , 16/* "$" */,-11 , 6/* "+" */,-11 , 7/* "-" */,-11 , 8/* "*" */,-11 , 9/* "/" */,-11 , 3/* ")" */,-11 ),
    	/* State 8 */ new Array( 7/* "-" */,3 , 2/* "(" */,8 , 4/* "INT" */,9 , 5/* "FLOAT" */,10 ),
    	/* State 9 */ new Array( 2/* "(" */,-13 , 4/* "INT" */,-13 , 5/* "FLOAT" */,-13 , 16/* "$" */,-13 , 6/* "+" */,-13 , 7/* "-" */,-13 , 8/* "*" */,-13 , 9/* "/" */,-13 , 3/* ")" */,-13 ),
    	/* State 10 */ new Array( 2/* "(" */,-14 , 4/* "INT" */,-14 , 5/* "FLOAT" */,-14 , 16/* "$" */,-14 , 6/* "+" */,-14 , 7/* "-" */,-14 , 8/* "*" */,-14 , 9/* "/" */,-14 , 3/* ")" */,-14 ),
    	/* State 11 */ new Array( 7/* "-" */,3 , 2/* "(" */,8 , 4/* "INT" */,9 , 5/* "FLOAT" */,10 ),
    	/* State 12 */ new Array( 7/* "-" */,3 , 2/* "(" */,8 , 4/* "INT" */,9 , 5/* "FLOAT" */,10 ),
    	/* State 13 */ new Array( 7/* "-" */,3 , 2/* "(" */,8 , 4/* "INT" */,9 , 5/* "FLOAT" */,10 ),
    	/* State 14 */ new Array( 7/* "-" */,3 , 2/* "(" */,8 , 4/* "INT" */,9 , 5/* "FLOAT" */,10 ),
    	/* State 15 */ new Array( 9/* "/" */,-6 , 8/* "*" */,-6 , 7/* "-" */,-6 , 6/* "+" */,-6 , 16/* "$" */,-6 , 3/* ")" */,-6 ),
    	/* State 16 */ new Array( 16/* "$" */,-8 , 6/* "+" */,-8 , 7/* "-" */,-8 , 8/* "*" */,-8 , 9/* "/" */,-8 , 3/* ")" */,-8 ),
    	/* State 17 */ new Array( 9/* "/" */,11 , 8/* "*" */,12 , 7/* "-" */,13 , 6/* "+" */,14 , 3/* ")" */,22 ),
    	/* State 18 */ new Array( 9/* "/" */,-5 , 8/* "*" */,-5 , 7/* "-" */,-5 , 6/* "+" */,-5 , 16/* "$" */,-5 , 3/* ")" */,-5 ),
    	/* State 19 */ new Array( 9/* "/" */,-4 , 8/* "*" */,-4 , 7/* "-" */,-4 , 6/* "+" */,-4 , 16/* "$" */,-4 , 3/* ")" */,-4 ),
    	/* State 20 */ new Array( 9/* "/" */,11 , 8/* "*" */,12 , 7/* "-" */,-3 , 6/* "+" */,-3 , 16/* "$" */,-3 , 3/* ")" */,-3 ),
    	/* State 21 */ new Array( 9/* "/" */,11 , 8/* "*" */,12 , 7/* "-" */,-2 , 6/* "+" */,-2 , 16/* "$" */,-2 , 3/* ")" */,-2 ),
    	/* State 22 */ new Array( 2/* "(" */,-12 , 4/* "INT" */,-12 , 5/* "FLOAT" */,-12 , 16/* "$" */,-12 , 6/* "+" */,-12 , 7/* "-" */,-12 , 8/* "*" */,-12 , 9/* "/" */,-12 , 3/* ")" */,-12 )
    );
    
    /* Goto-Table */
    var goto_tab = new Array(
    	/* State 0 */ new Array( 11/* p */,1 , 10/* e */,2 , 12/* e2 */,4 , 13/* P */,5 , 14/* Pa */,6 , 15/* N */,7 ),
    	/* State 1 */ new Array(  ),
    	/* State 2 */ new Array(  ),
    	/* State 3 */ new Array( 10/* e */,15 , 12/* e2 */,4 , 13/* P */,5 , 14/* Pa */,6 , 15/* N */,7 ),
    	/* State 4 */ new Array(  ),
    	/* State 5 */ new Array( 12/* e2 */,16 , 13/* P */,5 , 14/* Pa */,6 , 15/* N */,7 ),
    	/* State 6 */ new Array(  ),
    	/* State 7 */ new Array(  ),
    	/* State 8 */ new Array( 10/* e */,17 , 12/* e2 */,4 , 13/* P */,5 , 14/* Pa */,6 , 15/* N */,7 ),
    	/* State 9 */ new Array(  ),
    	/* State 10 */ new Array(  ),
    	/* State 11 */ new Array( 10/* e */,18 , 12/* e2 */,4 , 13/* P */,5 , 14/* Pa */,6 , 15/* N */,7 ),
    	/* State 12 */ new Array( 10/* e */,19 , 12/* e2 */,4 , 13/* P */,5 , 14/* Pa */,6 , 15/* N */,7 ),
    	/* State 13 */ new Array( 10/* e */,20 , 12/* e2 */,4 , 13/* P */,5 , 14/* Pa */,6 , 15/* N */,7 ),
    	/* State 14 */ new Array( 10/* e */,21 , 12/* e2 */,4 , 13/* P */,5 , 14/* Pa */,6 , 15/* N */,7 ),
    	/* State 15 */ new Array(  ),
    	/* State 16 */ new Array(  ),
    	/* State 17 */ new Array(  ),
    	/* State 18 */ new Array(  ),
    	/* State 19 */ new Array(  ),
    	/* State 20 */ new Array(  ),
    	/* State 21 */ new Array(  ),
    	/* State 22 */ new Array(  )
    );
    
    
    
    /* Symbol labels */
    var labels = new Array(
    	"p'" /* Non-terminal symbol */,
    	"WHITESPACE" /* Terminal symbol */,
    	"(" /* Terminal symbol */,
    	")" /* Terminal symbol */,
    	"INT" /* Terminal symbol */,
    	"FLOAT" /* Terminal symbol */,
    	"+" /* Terminal symbol */,
    	"-" /* Terminal symbol */,
    	"*" /* Terminal symbol */,
    	"/" /* Terminal symbol */,
    	"e" /* Non-terminal symbol */,
    	"p" /* Non-terminal symbol */,
    	"e2" /* Non-terminal symbol */,
    	"P" /* Non-terminal symbol */,
    	"Pa" /* Non-terminal symbol */,
    	"N" /* Non-terminal symbol */,
    	"$" /* Terminal symbol */
    );
    
    
    	
    	info.offset = 0;
    	info.src = src;
    	info.att = new String();
    	
    	if( !err_off )
    		err_off	= new Array();
    	if( !err_la )
    	err_la = new Array();
    	
    	sstack.push( 0 );
    	vstack.push( 0 );
    	
    	la = __NODEJS_lex( info );
    
    	while( true )
    	{
    		act = 24;
    		for( var i = 0; i < act_tab[sstack[sstack.length-1]].length; i+=2 )
    		{
    			if( act_tab[sstack[sstack.length-1]][i] == la )
    			{
    				act = act_tab[sstack[sstack.length-1]][i+1];
    				break;
    			}
    		}
    
    		if( NODEJS__dbg_withtrace && sstack.length > 0 )
    		{
    			__NODEJS_dbg_print( "\nState " + sstack[sstack.length-1] + "\n" +
    							"\tLookahead: " + labels[la] + " (\"" + info.att + "\")\n" +
    							"\tAction: " + act + "\n" + 
    							"\tSource: \"" + info.src.substr( info.offset, 30 ) + ( ( info.offset + 30 < info.src.length ) ?
    									"..." : "" ) + "\"\n" +
    							"\tStack: " + sstack.join() + "\n" +
    							"\tValue stack: " + vstack.join() + "\n" );
    		}
    		
    			
    		//Panic-mode: Try recovery when parse-error occurs!
    		if( act == 24 )
    		{
    			if( NODEJS__dbg_withtrace )
    				__NODEJS_dbg_print( "Error detected: There is no reduce or shift on the symbol " + labels[la] );
    			
    			err_cnt++;
    			err_off.push( info.offset - info.att.length );			
    			err_la.push( new Array() );
    			for( var i = 0; i < act_tab[sstack[sstack.length-1]].length; i+=2 )
    				err_la[err_la.length-1].push( labels[act_tab[sstack[sstack.length-1]][i]] );
    			
    			//Remember the original stack!
    			var rsstack = new Array();
    			var rvstack = new Array();
    			for( var i = 0; i < sstack.length; i++ )
    			{
    				rsstack[i] = sstack[i];
    				rvstack[i] = vstack[i];
    			}
    			
    			while( act == 24 && la != 16 )
    			{
    				if( NODEJS__dbg_withtrace )
    					__NODEJS_dbg_print( "\tError recovery\n" +
    									"Current lookahead: " + labels[la] + " (" + info.att + ")\n" +
    									"Action: " + act + "\n\n" );
    				if( la == -1 )
    					info.offset++;
    					
    				while( act == 24 && sstack.length > 0 )
    				{
    					sstack.pop();
    					vstack.pop();
    					
    					if( sstack.length == 0 )
    						break;
    						
    					act = 24;
    					for( var i = 0; i < act_tab[sstack[sstack.length-1]].length; i+=2 )
    					{
    						if( act_tab[sstack[sstack.length-1]][i] == la )
    						{
    							act = act_tab[sstack[sstack.length-1]][i+1];
    							break;
    						}
    					}
    				}
    				
    				if( act != 24 )
    					break;
    				
    				for( var i = 0; i < rsstack.length; i++ )
    				{
    					sstack.push( rsstack[i] );
    					vstack.push( rvstack[i] );
    				}
    				
    				la = __NODEJS_lex( info );
    			}
    			
    			if( act == 24 )
    			{
    				if( NODEJS__dbg_withtrace )
    					__NODEJS_dbg_print( "\tError recovery failed, terminating parse process..." );
    				break;
    			}
    
    
    			if( NODEJS__dbg_withtrace )
    				__NODEJS_dbg_print( "\tError recovery succeeded, continuing" );
    		}
    		
    		/*
    		if( act == 24 )
    			break;
    		*/
    		
    		
    		//Shift
    		if( act > 0 )
    		{			
    			if( NODEJS__dbg_withtrace )
    				__NODEJS_dbg_print( "Shifting symbol: " + labels[la] + " (" + info.att + ")" );
    		
    			sstack.push( act );
    			vstack.push( info.att );
    			
    			la = __NODEJS_lex( info );
    			
    			if( NODEJS__dbg_withtrace )
    				__NODEJS_dbg_print( "\tNew lookahead symbol: " + labels[la] + " (" + info.att + ")" );
    		}
    		//Reduce
    		else
    		{		
    			act *= -1;
    			
    			if( NODEJS__dbg_withtrace )
    				__NODEJS_dbg_print( "Reducing by producution: " + act );
    			
    			rval = void(0);
    			
    			if( NODEJS__dbg_withtrace )
    				__NODEJS_dbg_print( "\tPerforming semantic action..." );
    			
    switch( act )
    {
    	case 0:
    	{
    		rval = vstack[ vstack.length - 1 ];
    	}
    	break;
    	case 1:
    	{
    		 rval = (result = vstack[ vstack.length - 1 ]); 
    	}
    	break;
    	case 2:
    	{
    		 rval = vstack[ vstack.length - 3 ] + vstack[ vstack.length - 1 ]; 
    	}
    	break;
    	case 3:
    	{
    		 rval = vstack[ vstack.length - 3 ] - vstack[ vstack.length - 1 ]; 
    	}
    	break;
    	case 4:
    	{
    		 rval = vstack[ vstack.length - 3 ] * vstack[ vstack.length - 1 ]; 
    	}
    	break;
    	case 5:
    	{
    		 rval = vstack[ vstack.length - 3 ] / vstack[ vstack.length - 1 ]; 
    	}
    	break;
    	case 6:
    	{
    		 rval = vstack[ vstack.length - 1 ] * -1; 
    	}
    	break;
    	case 7:
    	{
    		rval = vstack[ vstack.length - 1 ];
    	}
    	break;
    	case 8:
    	{
    		 rval = vstack[ vstack.length - 2 ] * vstack[ vstack.length - 1 ]; 
    	}
    	break;
    	case 9:
    	{
    		 rval = vstack[ vstack.length - 1 ] 
    	}
    	break;
    	case 10:
    	{
    		rval = vstack[ vstack.length - 1 ];
    	}
    	break;
    	case 11:
    	{
    		rval = vstack[ vstack.length - 1 ];
    	}
    	break;
    	case 12:
    	{
    		 rval = vstack[ vstack.length - 2 ]; 
    	}
    	break;
    	case 13:
    	{
    		rval = vstack[ vstack.length - 1 ];
    	}
    	break;
    	case 14:
    	{
    		rval = vstack[ vstack.length - 1 ];
    	}
    	break;
    }
    
    
    
    			if( NODEJS__dbg_withtrace )
    				__NODEJS_dbg_print( "\tPopping " + pop_tab[act][1] + " off the stack..." );
    				
    			for( var i = 0; i < pop_tab[act][1]; i++ )
    			{
    				sstack.pop();
    				vstack.pop();
    			}
    									
    			go = -1;
    			for( var i = 0; i < goto_tab[sstack[sstack.length-1]].length; i+=2 )
    			{
    				if( goto_tab[sstack[sstack.length-1]][i] == pop_tab[act][0] )
    				{
    					go = goto_tab[sstack[sstack.length-1]][i+1];
    					break;
    				}
    			}
    			
    			if( act == 0 )
    				break;
    				
    			if( NODEJS__dbg_withtrace )
    				__NODEJS_dbg_print( "\tPushing non-terminal " + labels[ pop_tab[act][0] ] );
    				
    			sstack.push( go );
    			vstack.push( rval );			
    		}
    		
    		if( NODEJS__dbg_withtrace )
    		{		
    			alert( NODEJS__dbg_string );
    			NODEJS__dbg_string = new String();
    		}
    	}
    
    	if( NODEJS__dbg_withtrace )
    	{
    		__NODEJS_dbg_print( "\nParse complete." );
    		alert( NODEJS__dbg_string );
    	}
    	
    	return err_cnt;
    }
    
    
    
    
        var error_cnt = 0;
        var error_off = [ ];
        var error_la = [ ];
        
        if ((error_cnt = __NODEJS_parse(input_string, error_off, error_la)) > 0) {
          var errors = [ ];
          for (var i = 0; i < error_cnt; i ++) {
            errors.push("Parse error near >" + input_string.substr(error_off[i], 30)
                        + "<, expecting \"" + error_la[i].join() + "\"" );
          }
          throw errors;
        }
    
        return result;
    
    
      }

  // ==UserScript==
  // @name           Form Calculator
  // @description    Evaluate a text selection as math expression
  // @include        *
  // ==/UserScript==
  
  (function() {
  
  var MyMath = { };
  Object.getOwnPropertyNames(Math).forEach(function(key) { MyMath[key] = Math[key]; });
  MyMath.log = function(x, y) { return arguments.length == 2 ? Math.log(y) / Math.log(x) : Math.log(x) / Math.LN10; };
  MyMath.ln = function(x) { return Math.log(x); };
  MyMath.lg = function(x) { return Math.log(x) / Math.LN2; };
  
  var Vars = { };
  
  function eval1(x) {
    var mode = { type: "evaluate" };
    var mAssign = x.match(/^\s*([A-Za-z]*)\s*=\s*(.*)\s*$/);
  
    if (mAssign !== null) {
      mode = {
        type: "assign",
        variable: mAssign[1]
      };
      x = mAssign[2];
    }
  
    try {
      x = x.replace(/([a-zA-Z]+)/g, function(name) {
        if (name in MyMath)
          return " MyMath['" + name + "'] ";
        else if (name in Vars)
          return " Vars['" + name + "']";
        else
          throw x + " does not exist.";
      });
      x = x.replace(/(\d|\))\s*([a-zA-Z]|\()/, "$1*$2");
      x = x.replace(/(\d)\s+(\d)/, "$1*$2");
  
      console.log("eval: ", x);
      var result = eval(x);
      
      switch (mode.type) {
        case "evaluate":
          break;
        case "assign":
          Vars[mode.variable] = result;
          break;
        case "":
          break;
      }
      
      return result;
    } catch (e) {
      console.error("error: ", x);
      return e.toString();
    }
  }
  
  document.addEventListener("keyup", function(e) {
    if (e.ctrlKey && e.shiftKey && e.keyCode == 88) {
      var elem = document.activeElement;
      if (elem.selectionEnd - elem.selectionStart === 0) elem.select();
      var expr = elem.value.substring(elem.selectionStart, elem.selectionEnd);
      console.log("expr: ", expr);
      var result = eval1(expr);
      console.log("result: ", result);
      elem.setRangeText(result);
    }
  }, false);
  
  })();
  

})();

