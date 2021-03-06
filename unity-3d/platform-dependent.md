# Platform detection

```
#if UNITY_EDITOR
  Debug.Log("Unity Editor");
#endif

#if UNITY_IPHONE
  Debug.Log("Iphone");
#endif

#if UNITY_STANDALONE_OSX
Debug.Log("Stand Alone OSX");
#endif

#if UNITY_STANDALONE_WIN
  Debug.Log("Stand Alone Windows");
#endif
```

# Platform Defines
The platform defines that Unity supports for your scripts are:

Property: Function:
* UNITY_EDITOR  Define for calling Unity Editor scripts from your game code.
* UNITY_EDITOR_WIN  Platform define for editor code on Windows.
* UNITY_EDITOR_OSX  Platform define for editor code on Mac OSX.
* UNITY_STANDALONE_OSX  Platform define for compiling/executing code specifically for Mac OS (This includes Universal, PPC and Intel architectures).
* UNITY_STANDALONE_WIN  Use this when you want to compile/execute code for Windows stand alone applications.
* UNITY_STANDALONE_LINUX  Use this when you want to compile/execute code for Linux stand alone applications.
* UNITY_STANDALONE  Use this to compile/execute code for any standalone platform (Mac, Windows or Linux).
* UNITY_WEBPLAYER Platform define for web player content (this includes Windows and Mac Web player executables).
* UNITY_WII Platform define for compiling/executing code for the Wii console.
* UNITY_IOS Platform define for compiling/executing code for the iOS platform.
* UNITY_IPHONE  Deprecated. Use UNITY_IOS instead.
* UNITY_ANDROID Platform define for the Android platform.
* UNITY_PS3 Platform define for running PlayStation 3 code.
* UNITY_PS4 Platform define for running PlayStation 4 code.
* UNITY_XBOX360 Platform define for executing Xbox 360 code.
* UNITY_XBOXONE Platform define for executing Xbox One code.
* UNITY_BLACKBERRY  Platform define for a Blackberry10 device.
* UNITY_WP8 Platform define for Windows Phone 8.
* UNITY_WP8_1 Platform define for Windows Phone 8.1.
* UNITY_WSA Platform define for Windows Store Apps (additionally NETFX_CORE is defined when compiling C# files against .NET Core).
* UNITY_WSA_8_0 Platform define for Windows Store Apps when targeting SDK 8.0.
* UNITY_WSA_8_1 Platform define for Windows Store Apps when targeting SDK 8.1.
* UNITY_WINRT Equivalent to UNITY_WP8 | UNITY_WSA.
* UNITY_WINRT_8_0 Equivalent to UNITY_WP8 | UNITY_WSA_8_0.
* UNITY_WINRT_8_1 Equivalent to UNITY_WP_8_1 | UNITY_WSA_8_1. It’s also defined when compiling against Universal SDK 8.1.
* UNITY_WEBGL Platform define for WebGL.

Also you can compile code selectively depending on the version of the engine you are working on. Currently the supported ones are:

* UNITY_2_6 Platform define for the major version of Unity 2.6.
* UNITY_2_6_1 Platform define for specific version 2.6.1.
* UNITY_3_0 Platform define for the major version of Unity 3.0.
* UNITY_3_0_0 Platform define for specific version 3.0.0.
* UNITY_3_1 Platform define for major version of Unity 3.1.
* UNITY_3_2 Platform define for major version of Unity 3.2.
* UNITY_3_3 Platform define for major version of Unity 3.3.
* UNITY_3_4 Platform define for major version of Unity 3.4.
* UNITY_3_5 Platform define for major version of Unity 3.5.
* UNITY_4_0 Platform define for major version of Unity 4.0.
* UNITY_4_0_1 Platform define for specific version 4.0.1.
* UNITY_4_1 Platform define for major version of Unity 4.1.
* UNITY_4_2 Platform define for major version of Unity 4.2.
* UNITY_4_3 Platform define for major version of Unity 4.3.
* UNITY_4_5 Platform define for major version of Unity 4.5.
* UNITY_4_6 Platform define for major version of Unity 4.6.
* UNITY_5_0 Platform define for major version of Unity 5.0.
