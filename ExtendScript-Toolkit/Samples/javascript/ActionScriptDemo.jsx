////////////////////////////////////////////////////////////////////////////// ADOBE SYSTEMS INCORPORATED// Copyright 2007 Adobe Systems Incorporated// All Rights Reserved//// NOTICE:  Adobe permits you to use, modify, and distribute this file in accordance with the// terms of the Adobe license agreement accompanying it.  If you have received this file from a// source other than Adobe, then your use, modification, or distribution of it requires the prior// written permission of Adobe.//////////////////////////////////////////////////////////////////////////////**   @fileoverview Shows how to communicate with a ScriptUI FlashPlayer using ActionScript  @class Shows how to communicate with a ScriptUI FlashPlayer using ActionScript   <h4>Usage</h4>    <ol>  <li> Read the section on <a href="#flashSec">Flash Player Security</a> below.  <li> Run the sample in the ExtendScript Toolkit (see Readme.txt).  <li> The dialog window appears with a start flash button than when activated loads the Flash Movie.   <li> The Flash movie contains three buttons and two text areas.  <li> Clicking the buttons calls the JavaScript functions from the ActionScript environment         and passes data as arguments to the functions.  </ol>     <h4>Description</h4><p>This sample shows how to use the ScriptUI FlashPlayer element to invoke JavaScript   functions in ActionScript, and ActionsScript functions in JavaScript. It passes simple  data between the two scripting environments, and displays passed values. <p>The Flash application to be used with this sample must be located in the resources   folder and have the same name as this sample. The application is a Flash presentation.  The ActionScript script shows how to import the ExternalInterface class,   and how to register and call external functions, which are defined in this script.  The ActionScript source code is provided as a comment block in the  FlashDemo.JSX file.  <a name="flashSec"><h4>Flash Player Security</h4></a>   Adobe ExtendScript supports the Flash Player client-runtime security model. This affects which SWF files    can be loaded into ESTK and run successfully. You must set the correct security permission   to allow the operation that the SWF file performs.      There are 3 basic levels of security for local SWF files:     <ul>	<li> Access the local file system only (default):  	A local SWF file can read from the local file system and   	universal naming convention (UNC) network paths, but cannot communicate with the Internet.     	<li> Access the network only:  	A local SWF file can access the network, but not the local file system where it is installed.  	<li> Access to the local file system and the network: 	A local SWF file can read from the local file system  where it is installed, 	read and write to and from servers, and can cross-script other SWF files on  	either the network or the local file system. These files are trusted.  </ul>      To create a SWF file that can 'access the local file system only' or 'access the network only',   edit the FLA file and do the following:  <li> In Adobe Flash, select File > Publish Settings  <li> In the dialog, select the Flash tab  <li> Set the option for 'Local playback security' to either  'access network only' or 'access local files only'<p>    For more information on local file security  see:<p><a href="http://livedocs.macromedia.com/flash/8/main/wwhelp/wwhimpl/js/html/wwhelp.htm?href=00001136.html">	http://livedocs.macromedia.com/flash/8/main/wwhelp/wwhimpl/js/html/wwhelp.htm?href=00001136.html</a> <br /><a href="http://livedocs.macromedia.com/flash/8/main/wwhelp/wwhimpl/js/html/wwhelp.htm?href=00001604.html">	 http://livedocs.macromedia.com/flash/8/main/wwhelp/wwhimpl/js/html/wwhelp.htm?href=00001604.html</a><p>To allow a local file to be trusted,(that is, allow a SWF file to access both network and local files   as well as allow cross scripting), you can either create a trust file, or use the Settings Manager.   This sample and the accompanying SWF file have been created with the default permissions; therefore   to run the sample correctly, you must use one of these techniques, as described in the following sections.    <h4>Create a Trust File </h4>    You can create a trust file in either the Global Flash Player Trust directory or in the User Flash Player Trust directory.    A Trust file is a simple text file with a .cfg file extension, that contains the location to a local SWF file.   For example, to run this sample as a trusted file on Windows, create a text file that contains the path and file name  (replacing SDKINSTALL with your local SDK installation location):  <pre>	SDKINSTALL\Resources\ActionScriptDemo.swf</pre>  <p>Save this text file with the extension .cfg in a folder named 'FlashPlayerTrust' (which you may need tocreate), in one of the following locations, depending on the platform and users for which the SWF should be trusted.   <p>Global Flash Player Trust Directory<ul>	<li>In Windows: system\Macromed\Flash\FlashPlayerTrust	<ul>		<li>for example:<pre>C:\windows\system32\Macromed\Flash\FlashPlayerTrust</pre>	</ul>	<li>In Mac OS: app support/Macromedia/FlashPlayerTrust	<ul>		<li>for example:<pre>/Library/Application Support/Macromedia/FlashPlayerTrust</pre>	</ul></ul><p>User Flash Player Trust Directory<ul>	<li>In Windows: app data\Macromedia\Flash Player\#Security\FlashPlayerTrust	<ul>		<li>for example:<pre>C:\Documents and Settings\your-user-name\Application Data\Macromedia\Flash Player\#Security\FlashPlayerTrust</pre> 	</ul>	<li>In Mac OS: app data/Macromedia/Flash Player/#Security/FlashPlayerTrust	<ul>		<li>for example:<pre>/Users/your-user-name/Library/Preferences/Macromedia/Flash Player/#Security/FlashPlayerTrust</pre>	</ul>	</li></ul>   <h4>Use the Settings Manager </h4>   The Settings Manager allows you to make changes to various global settings, including whether to allow a SWF file   to be trusted.  When ESTK loads a non-trusted file that attempts a trusted action, the Flash    Player presents a dialog giving the user the choice to navigate to the Settings Manager. <ul>  <li>  When you run this sample (if you have not created a trust file for it) ESTK displays a security dialog   warning about the SWF file. Click 'Settings...' in this dialog. <br>    The Adobe Flash Player Settings Manager opens in a web browser.    (You may need to install the Adobe Flash Plugin before you see this page correctly.)    <li> On the Global Security Settings tab (the default tab), click 'Edit Locations' and choose 'Add Location' from  	the drop down list. <br> A dialog appears showing the path of the SWF that Bridge is trying to load.  <li> Click 'Browse for files', navigate to the location of the SWF file (SDKINSTALL/Resources/ActionScriptDemo.swf)  	and click OK (There is no confirm dialog).  <li> Close the web browser and restart ESTK. </ul>   ESTK can now play the Flash movie and data can be passed between the two scripting environments.  <p>For more  information on the Settings Manager and Trust files see:    <p>    <a href="http://livedocs.macromedia.com/flex/2/docs/wwhelp/wwhimpl/js/html/wwhelp.htm?href=00001952.html">  	http://livedocs.macromedia.com/flex/2/docs/wwhelp/wwhimpl/js/html/wwhelp.htm?href=00001952.html</a><br />	@see SnpCreateFlashControl  @constructor Constructor. */function ActionScriptDemo(){	// Tells us where this script is running from	var scriptsFile = new File($.fileName);	/**	 The Flash movie to load into ESTK	 @type File	*/	this.flashFile = new File(scriptsFile.parent.parent.fsName + "/resources/ActionScriptDemo.swf");	/**	 The context in which this snippet can run.	 @type String	*/	this.requiredContext = "\tNeed to be running in a an application that uses ScriptUI and the ActionScriptDemo.swf file must exist\n";}/** Functional part of this Snippet. Creates a Dialog window and adds a FlashPlayer control.  A  button on the dialog enables the activation of loading the flash player which extends the functionality with buttons that interact with the JavaScript functions;  getJavaScriptString. getJavaScriptNumber and launchJavaScript.  a flash movie.    @return True if the snippet ran as expected, false otherwise @type Boolean*/ActionScriptDemo.prototype.run = function() {	if(!this.canRun())	{		return false;	}	// Create a dialog	var flashPalette = new Window('dialog', 'SDK ActionScriptDemo: Flash Palette');		// Set the player bounds to match the palette	var cBounds = flashPalette.bounds;	// add the Flash Player control to the palette.			var flashPlayer = flashPalette.add("flashplayer", cBounds);	flashPlayer.preferredSize = [350, 175];		// add an additional button to hold a flash launch panel	flashPalette.btnPanel = flashPalette.add('panel', undefined, '');	flashPalette.btnPanel.launchButton = flashPalette.btnPanel.add('button', undefined, 'Start Flash');	flashPalette.btnPanel.closeButton = flashPalette.btnPanel.add('button', undefined, 'Close');		flashPalette.btnPanel.closeButton.onClick = function(){		flashPalette.close();	}	flashPalette.btnPanel.launchButton.onClick = function() {			// start the flash player			// Load the Flash file			try{					var scriptsFile = new File($.fileName);					this.flashFile = new File(scriptsFile.parent.parent.fsName + "/resources/ActionScriptDemo.swf");					flashPlayer.loadMovie(this.flashFile);						}catch(e){				$.writeln(e);			}	};		// Called from ActionScript to return a number.	flashPlayer.getJavaScriptNumber = function()	{		return 12345;	}	// Called from ActionScript to return a string.    flashPlayer.getJavaScriptString = function()    {	    return "Hello from ExtendScript (ESTK)";    }	// Called from ActionScript to activate an alert window   flashPlayer.launchJavaScript = function()    {		var newWin = new Window('dialog', 'Alert Box');		newWin.btn = newWin.add('button', undefined, 'Close', {name:'cancel'});				newWin.show();    }	flashPalette.show();	return true;}/** Determines whether snippet can be run given current context.  The snippet  fails if these preconditions are not met: <ul> <li> The Flash file must be available </ul> @return True if this snippet can run, false  otherwise @type Boolean*/ActionScriptDemo.prototype.canRun = function() {	if(this.flashFile.exists) 	{ 		return true;	}	$.writeln("ERROR:: Cannot run ActionScriptDemo");	$.writeln(this.requiredContext);	return false;}/** "main program": construct an anonymous instance and run it*/if(typeof(ActionScriptDemo_unitTest) == "undefined") {	new ActionScriptDemo().run();}// ////////////////////////////////////////////////////////////////////////////// ////////////////////////////////////////////////////////////////////////////// //  Flex sample code.// //  Found in ./resources/ActionScriptDemo.mxml/*<?xml version="1.0" encoding="utf-8"?><mx:Application xmlns:mx="http://www.adobe.com/2006/mxml" layout="absolute">	<mx:Script>		<![CDATA[			// Needed to allow for communication between ActionScript and JavaScript			import flash.external.ExternalInterface;						[Bindable] private var estkString:String = "Ready...";			[Bindable] private var estkNumber:int;					// This function is called when the 'Get String' button is pressed and updates the textarea with the string received from the getJavaScriptString function			public function requestJavaScriptString():void{				var res:String = ExternalInterface.call("getJavaScriptString");				estkString = res;			}			// This function is called when the 'Get Number' button is pressed and updates the textarea with the number received from the getJavaScriptNumber function.			public function requestJavaScriptNumber():void{				var res:int = ExternalInterface.call("getJavaScriptNumber");				estkNumber = res;			}			// this function is called when the 'Launch JavaScript' button is pressed 			public function launchJavaScript():void{				ExternalInterface.call("launchJavaScript");			}		]]>			</mx:Script>		// the following code creates a form with two textareas and three buttons that interact with the JavaScript code	<mx:Form x="0" y="0" width="322" height="168">		<mx:FormItem  width="100%" height="100%">			<mx:Grid  width="100%" height="100%">				<mx:GridRow width="100%" height="100%">					<mx:GridItem width="100%" height="100%">						<mx:TextArea text="{estkString}"/>					</mx:GridItem>					<mx:GridItem width="100%" height="100%">						<mx:Button label="Get String" click="requestJavaScriptString();" width="92"/>					</mx:GridItem>				</mx:GridRow>				<mx:GridRow width="100%" height="100%">					<mx:GridItem width="100%" height="100%">						<mx:TextArea text="{estkNumber}"/>					</mx:GridItem>					<mx:GridItem width="100%" height="100%">						<mx:Button label="Get Number" click="requestJavaScriptNumber();"/>					</mx:GridItem>				</mx:GridRow>				<mx:GridRow width="100%" height="100%" cornerRadius="2" verticalAlign="middle" horizontalAlign="center">					<mx:GridItem width="260" height="100%" horizontalAlign="center" colSpan="2">						<mx:Button label="Launch JavaScript" click="launchJavaScript();" width="234"/>					</mx:GridItem>				</mx:GridRow>			</mx:Grid>		</mx:FormItem>	</mx:Form></mx:Application>*/// ////////////////////////////////////////////////////////////////////////////// ////////////////////////////////////////////////////////////////////////////