window.globalProvideData('slide', '{"title":"Harita üzerinde Ankara’yı işaretleyiniz.","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":10,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide10","width":720,"height":405,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"6Ozptczwmt0","variables":[{"kind":"variable","name":"hotspot_5jfeOJkwNsu_xpos","type":"number","value":-1,"resume":true},{"kind":"variable","name":"hotspot_5jfeOJkwNsu_ypos","type":"number","value":-1,"resume":true}],"actionGroups":{"ActGrpOnSubmitButtonClick":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"noteq","valuea":"#hotspot_5jfeOJkwNsu_xpos","typea":"var","valueb":-1,"typeb":"number"}},"thenActions":[{"kind":"eval_interaction","id":"_this.6jkNXaYgRgq"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_6pzfutEUbRo.InvalidPromptSlide"}}]}]},"ReviewInt_5jfeOJkwNsu":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5aIIDtmVc8i"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6jkNXaYgRgq.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5jfeOJkwNsu_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5jfeOJkwNsu_IncorrectReview"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5jfeOJkwNsu","typea":"var","valueb":"6HDKh3CpWuj","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000101"},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"hotspot_5jfeOJkwNsu_marker"}},{"kind":"moveto","addoffsetx":true,"addoffsety":true,"objRef":{"type":"string","value":"hotspot_5jfeOJkwNsu_marker"},"xPos":{"type":"var","value":"#hotspot_5jfeOJkwNsu_xpos"},"yPos":{"type":"var","value":"#hotspot_5jfeOJkwNsu_ypos"},"xOffset":{"type":"number","value":-5},"yOffset":{"type":"number","value":-5}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6HDKh3CpWuj.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5jfeOJkwNsu"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6HDKh3CpWuj.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5jfeOJkwNsu"}]}]},{"kind":"set_review","objRef":{"type":"string","value":"hotspot_5jfeOJkwNsu"},"enabled":{"type":"boolean","value":true}}]},"ReviewIntCorrectIncorrect_5jfeOJkwNsu":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5aIIDtmVc8i.$OnStage","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5aIIDtmVc8i"}}]},{"kind":"exe_actiongroup","id":"5aIIDtmVc8i.ActGrpSetReviewState"},{"kind":"set_enabled","objRef":{"type":"string","value":"5aIIDtmVc8i"},"enabled":{"type":"boolean","value":false}}]},"AnsweredInt_5jfeOJkwNsu":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_5jfeOJkwNsu"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000101"}]}]},"DisableChoices_5jfeOJkwNsu":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5aIIDtmVc8i"},"enabled":{"type":"boolean","value":false}}]},"5jfeOJkwNsu_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"6jkNXaYgRgq.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.6HDKh3CpWuj.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5jfeOJkwNsu"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6jkNXaYgRgq.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6jkNXaYgRgq.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5jfeOJkwNsu"}]}]}]}]},"SetLayout_pxabnsnfns00000000101":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000101"}]}]},"NavigationRestrictionNextSlide_6Ozptczwmt0":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.6PM5wCLLjx8"}}]},"NavigationRestrictionPreviousSlide_6Ozptczwmt0":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbsnfns00000000101"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbsnfns00000000101"}]}]},{"kind":"onsubmitslide","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnSubmitButtonClick"}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_6pzfutEUbRo","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_6pzfutEUbRo","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#6HDKh3CpWuj_TimerStopped","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"starttimer","id":"_player.6HDKh3CpWuj_timer"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#6HDKh3CpWuj_TimerExpired","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5jfeOJkwNsu"}]},{"kind":"showtimer","id":"_player.6HDKh3CpWuj_timer"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5jfeOJkwNsu","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_5jfeOJkwNsu"}],"elseActions":[{"kind":"exe_actiongroup","id":"5jfeOJkwNsu_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5jfeOJkwNsu","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5jfeOJkwNsu","typea":"var","valueb":"6HDKh3CpWuj","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6HDKh3CpWuj"},"completed_slide_ref":{"type":"string","value":"_player.5qg6aCyEq8s.5eCIxzq9Fbn"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_5jfeOJkwNsu","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5jfeOJkwNsu","typea":"var","valueb":"6HDKh3CpWuj","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6HDKh3CpWuj"},"completed_slide_ref":{"type":"string","value":"_player.5qg6aCyEq8s.5eCIxzq9Fbn"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_6Ozptczwmt0"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_6Ozptczwmt0"}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":5000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5uu0peifbYJ"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"hotspot_5jfeOJkwNsu"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5aIIDtmVc8i"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6bmJuj0221b"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6WoauLOJr7k"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6ofj8aCjbLT"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":0,"id":"01","url":"story_content/6EfEhDaPozi_80_DX1440_DY1440.swf","type":"normal","altText":"backgroundpolitico.png","width":1440,"height":1080,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":202.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":false,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":720,"bottom":405,"altText":"backgroundpolitico.png","pngfb":false,"pr":{"l":"Lib","i":0}},"html5data":{"xPos":0,"yPos":0,"width":720,"height":405,"strokewidth":0}},"width":720,"height":405,"resume":true,"useHandCursor":true,"id":"6ofj8aCjbLT"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":0,"yPos":30,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":18,"rotateYPos":9.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":false,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":36,"bottom":19,"altText":"Rectangle 8 1","pngfb":false,"pr":{"l":"Lib","i":1}},"html5data":{"xPos":0,"yPos":0,"width":36,"height":19,"strokewidth":0}},"width":36,"height":19,"resume":true,"useHandCursor":true,"id":"6WoauLOJr7k"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":0,"yPos":0,"tabIndex":5,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":202.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":720,"bottom":405,"pngfb":false,"pr":{"l":"Lib","i":74}},"html5data":{"xPos":0,"yPos":0,"width":720,"height":405,"strokewidth":0}},"width":720,"height":405,"resume":true,"useHandCursor":true,"id":"hotspot_5jfeOJkwNsu","events":[{"kind":"onrelease","actions":[{"kind":"get_mouse_position","xvar":{"type":"string","value":"_parent.hotspot_5jfeOJkwNsu_xpos"},"yvar":{"type":"string","value":"_parent.hotspot_5jfeOJkwNsu_ypos"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_parent.hotspot_5jfeOJkwNsu_marker"}},{"kind":"moveto","addoffsetx":true,"addoffsety":true,"objRef":{"type":"string","value":"_parent.hotspot_5jfeOJkwNsu_marker"},"xPos":{"type":"var","value":"_parent.#hotspot_5jfeOJkwNsu_xpos"},"yPos":{"type":"var","value":"_parent.#hotspot_5jfeOJkwNsu_ypos"},"xOffset":{"type":"number","value":0},"yOffset":{"type":"number","value":0}}]}]},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":3,"id":"01","url":"story_content/5dIfLM2loy6_80_DX1090_DY1090.jpg","type":"normal","altText":"bos-turkiye-haritasi-5.gif","width":1090,"height":592,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":96,"yPos":98,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":272.5,"rotateYPos":148,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":545,"bottom":296,"altText":"bos-turkiye-haritasi-5.gif","pngfb":false,"pr":{"l":"Lib","i":75}},"html5data":{"xPos":0,"yPos":0,"width":545,"height":296,"strokewidth":0}},"width":545,"height":296,"resume":true,"useHandCursor":true,"id":"5uu0peifbYJ","events":[{"kind":"onrelease","actions":[{"kind":"get_mouse_position","xvar":{"type":"string","value":"_parent.hotspot_5jfeOJkwNsu_xpos"},"yvar":{"type":"string","value":"_parent.hotspot_5jfeOJkwNsu_ypos"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_parent.hotspot_5jfeOJkwNsu_marker"}},{"kind":"moveto","addoffsetx":true,"addoffsety":true,"objRef":{"type":"string","value":"_parent.hotspot_5jfeOJkwNsu_marker"},"xPos":{"type":"var","value":"_parent.#hotspot_5jfeOJkwNsu_xpos"},"yPos":{"type":"var","value":"_parent.#hotspot_5jfeOJkwNsu_ypos"},"xOffset":{"type":"number","value":0},"yOffset":{"type":"number","value":0}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":252,"yPos":179,"tabIndex":6,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":39,"rotateYPos":34,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":78,"bottom":68,"altText":"Ankara 1","pngfb":false,"pr":{"l":"Lib","i":76}},"html5data":{"xPos":0,"yPos":0,"width":78,"height":68,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Review","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":79,"bottom":69,"altText":"Ankara","pngfb":false,"pr":{"l":"Lib","i":77}},"html5data":{"xPos":-1,"yPos":-1,"width":80,"height":70,"strokewidth":2}}}],"width":78,"height":68,"resume":true,"useHandCursor":true,"id":"5aIIDtmVc8i","variables":[{"kind":"variable","name":"_review","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetReviewState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_review","operator":"set","value":{"type":"boolean","value":true}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_review","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"get_mouse_position","xvar":{"type":"string","value":"_parent.hotspot_5jfeOJkwNsu_xpos"},"yvar":{"type":"string","value":"_parent.hotspot_5jfeOJkwNsu_ypos"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_parent.hotspot_5jfeOJkwNsu_marker"}},{"kind":"moveto","addoffsetx":true,"addoffsety":true,"objRef":{"type":"string","value":"_parent.hotspot_5jfeOJkwNsu_marker"},"xPos":{"type":"var","value":"_parent.#hotspot_5jfeOJkwNsu_xpos"},"yPos":{"type":"var","value":"_parent.#hotspot_5jfeOJkwNsu_ypos"},"xOffset":{"type":"number","value":0},"yOffset":{"type":"number","value":0}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6bmJuj0221b_-331152863","id":"01","linkId":"txt__default_6bmJuj0221b","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":467,"bottom":56,"pngfb":false,"pr":{"l":"Lib","i":78}}}],"shapemaskId":"","xPos":47,"yPos":26,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":324,"rotateYPos":34,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":648,"bottom":68,"altText":"Harita üzerinde Ankara’yı işaretleyiniz.","pngfb":false,"pr":{"l":"Lib","i":26}},"html5data":{"xPos":0,"yPos":0,"width":648,"height":68,"strokewidth":0}},"width":648,"height":68,"resume":true,"useHandCursor":true,"id":"6bmJuj0221b","events":[{"kind":"onrelease","actions":[{"kind":"get_mouse_position","xvar":{"type":"string","value":"_parent.hotspot_5jfeOJkwNsu_xpos"},"yvar":{"type":"string","value":"_parent.hotspot_5jfeOJkwNsu_ypos"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_parent.hotspot_5jfeOJkwNsu_marker"}},{"kind":"moveto","addoffsetx":true,"addoffsety":true,"objRef":{"type":"string","value":"_parent.hotspot_5jfeOJkwNsu_marker"},"xPos":{"type":"var","value":"_parent.#hotspot_5jfeOJkwNsu_xpos"},"yPos":{"type":"var","value":"_parent.#hotspot_5jfeOJkwNsu_ypos"},"xOffset":{"type":"number","value":0},"yOffset":{"type":"number","value":0}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":-30,"yPos":-30,"tabIndex":4,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":5,"rotateYPos":5,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":0,"bottom":0,"pngfb":false,"pr":{"l":"Lib","i":79}},"html5data":{"xPos":0,"yPos":0,"width":0,"height":0,"strokewidth":0}},"width":10,"height":10,"resume":true,"useHandCursor":true,"id":"hotspot_5jfeOJkwNsu_marker"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5jfeOJkwNsu_CorrectReview","id":"01","linkId":"5jfeOJkwNsu_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":395,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":29}}}],"shapemaskId":"","xPos":0,"yPos":365,"tabIndex":7,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Doğru","pngfb":false,"pr":{"l":"Lib","i":28}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"5jfeOJkwNsu_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5jfeOJkwNsu_IncorrectReview","id":"01","linkId":"5jfeOJkwNsu_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":393,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":31}}}],"shapemaskId":"","xPos":0,"yPos":365,"tabIndex":8,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":9,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Yanlış","pngfb":false,"pr":{"l":"Lib","i":30}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"5jfeOJkwNsu_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');