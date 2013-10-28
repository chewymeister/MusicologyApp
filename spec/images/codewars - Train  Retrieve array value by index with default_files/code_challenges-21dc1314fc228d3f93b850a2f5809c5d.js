(function(){App.ns("Controls.CodeChallenges.DiscussController",App.Control({init:function(){return new App.Controls.CodeChallengeInfoAreas(this.element),new App.Controls.CodeChallenges.SocialButtons(this.element.find(".train-social")),this.trackingName="CC-Discuss",this.track("Loaded")},events:{"#solutions click":function(e,t){return App.Controls.CodeChallenges.confirmSolutionsClick(e,t)}},track:function(e,t){return t==null&&(t={}),t.language=App.clientData.activeLanguage,this._super(e,t)}}))}).call(this),function(){var e;App.ns("Controls.CodeChallenges.EditorController",App.Control({init:function(){var t,n=this;e(),$("form")[0].reset(),t={change:function(e,t){if(t.isDirty()&&!n.languageBeingSet)return n.dirty=!0},stashGroup:App.clientData.id||"newkata"},this.cache=kizzy(t.stashGroup),this.codeSetup=new App.Controls.CodeEditor("#code_setup",t),this.codeAnswer=new App.Controls.CodeEditor("#code_answer",t),this.codeFixture=new App.Controls.CodeEditor("#code_fixture",t),this.codeExampleFixture=new App.Controls.CodeEditor("#code_example_fixture",t),this.codePackage=new App.Controls.CodeEditor("#code_package",t),this.editors=[this.codeSetup,this.codeAnswer,this.codeFixture,this.codeExampleFixture,this.codePackage],this.markdownEditor=new App.Controls.MarkdownEditor("#description",{stashGroup:t.stashGroup}),this.cache.isEmpty()?this.setLanguage():App.confirmModal.show({titleHtml:"We found un-saved edits",messageHtml:"You have local edits that have not been saved. What would you like to do with them?",cancelHtml:"Discard",confirmHtml:"Keep",cancel:function(){return n.emptyStashes(),n.setLanguage()},confirm:function(){return n.dirty=!0,n.setLanguage()}}),this.msgBox=new App.Controls.AlertMessageBox("#code_results",{successMessage:App.consts.messages.success,displayDuration:0,showClose:!0}),this.dirty=!1,App.clientData.id!==this.previousId&&(this.track("Loaded"),this.previousId=App.clientData.id);if(App.clientData.showIntro&&!this.options.reinit)return $.wait(1e3,function(){return introJs().start()})},events:{"window beforeunload":function(e,t){if(this.dirty&&!App.ignoreConfirm)return t.preventDefault(),"You risk losing your progress!"},"window keydown":function(e,t){if(t.keyCode===8&&!$(t.target).is("input, textarea"))return t.preventDefault(),!1;if(t.keyCode===83&&t.metaKey)return this.submit("save"),this.track("Save Command Keyed"),t.preventDefault(),!1},"#validate_answer click":function(e,t){return t.preventDefault(),this.validateCode(this.codeAnswer.getValue()),this.track("Validate Code Clicked",{answer:this.codeAnswer.getValue()})},"#code_answer codeeditor.submit":function(){return this.validateCode(this.codeAnswer.getValue())},"#code_fixture codeeditor.submit":function(){return this.validateCode(this.codeAnswer.getValue())},"#insert_example click":function(e,t){return t.preventDefault(),this.insertExample($("#code_challenge_category").val()),this.track("Insert Example Clicked")},"#my_katas a click":function(e,t){return t.preventDefault(),t.stopPropagation(),this.confirmIfDirty(function(){return App.load({url:e.attr("href")})})},"#categories li click":function(e,t){return $("#code_challenge_category").val(e.data("value")),$("#categories li").removeClass("is-active"),e.addClass("is-active")},"#language_tabs dd:not(.active) a click":function(e,t){return this.setLanguage($(e).data("language"))},"#revert click":function(e,t){return t.preventDefault(),this.emptyStashes(),App.load()},"#save click":function(e,t){return t.preventDefault(),this.submit("save"),this.track("Save Clicked")},"#preview click":function(e,t){var n,r=this;return t.preventDefault(),n=function(){return App.load(App.route("preview",{language:App.clientData.language}))},this.track("Preview Clicked"),this.dirty?App.confirmModal.show({titleHtml:"You have un-saved changes",messageHtml:"You must save your changes before previewing. Do you want to continue?",confirmHtml:"Yes, I want to save changes and continue",confirm:function(){return r.submit("save",n)}}):n()},"#publish click":function(e,t){var n=this;return t.preventDefault(),this.submit("publish",null,function(e){if(e.success)return e.cached?App.load({url:"/djax/cache/"+e.dmid,replace:!1,scrollTo:!1}):$("body").html(e.html)}),this.track("Publish Clicked"),App.confirmModal.show({hideActions:!0,titleHtml:"<div class='app_loading pam is-left'></div>Please wait while we publish",messageHtml:"We are validating your code and publishing your changes. This shouldn't take too long."})},"#unpublish click":function(e,t){return t.preventDefault(),this.submit("unpublish"),this.track("Un-publish Clicked")},"#delete click":function(e,t){return t.preventDefault(),App.confirmModal.show({titleHtml:'<i class="icon-moon-warning" /> Are you sure you want to delete this code kata?',messageHtml:"You will not be able to undo this action",confirmHtml:"Yes, I want to delete this kata",confirm:function(){return App.load({url:App.route("destroy"),type:"DELETE"})}}),this.track("Delete Clicked")},"#code_answerLabel click":function(){var e=this;return $.wait(0,function(){return e.codeAnswer.refresh(),e.codeAnswer.resize()})},"#initial_setupLabel click":function(){var e=this;return $.wait(0,function(){return e.codeSetup.refresh(),e.codeSetup.resize()})},"#code_packageLabel click":function(){var e=this;return $.wait(0,function(){return e.codePackage.refresh(),e.codePackage.resize()})},"#code_fixtureLabel click":function(){var e=this;return $.wait(0,function(){return e.codeFixture.refresh(),e.codeFixture.resize()})},"#code_exampleFixtureLabel click":function(){var e=this;return $.wait(0,function(){return e.codeExampleFixture.refresh(),e.codeExampleFixture.resize()})},"input change":function(){return this.dirty=!0},"textarea change":function(){return this.dirty=!0},"select change":function(){return this.dirty=!0},"#language_tabs a i.remove click":function(e,t){var n,r,i,s=this;return t.stopPropagation(),t.preventDefault(),n=e.closest("a").data("language"),r=App.clientData.languages[n],i=function(){var t,r,i,o;$(e).closest("dd").removeClass("has-value"),App.clientData.languages[n]=null;if(App.clientData.language===n){o=s.editors;for(r=0,i=o.length;r<i;r++)t=o[r],t.setValue("");return s.setLanguage()}},r&&r.id?$["delete"](App.route("remove_language",{language:n}),null,function(e){if(e.success)return i()}):i(),this.track("Remove Language Clicked",{language:n})},"#add_current_week_schedule click":function(){return this.addToSchedule("current_week")},"#add_next_week_schedule click":function(){return this.addToSchedule("next_week")},"#remove_current_week_schedules click":function(){return this.removeSchedules("current_week")},"#remove_next_week_schedules click":function(){return this.removeSchedules("next_week")},"#set_as_current_competition click":function(){return $.post(App.route("make_current_competition"),null,function(e){return App.notifications.showResult(e.success,"Kata made the current week's competition")})}},setLanguage:function(e){var t,n;return e==null&&(e=App.clientData.language),App.clientData.language=e,n=App.clientData.languages[e],n||(App.clientData.languages[e]=n={name:e}),t=function(t,r){var i,s,o,u,a,f;r.save(),r.setMode(e),r.options.save=function(){return n[t]=r.getValue()},r.setValue(n[t],""+e+"_"+t,!0);if(App.clientData.languageErrors){$("#languages .has-error").removeClass("has-error");if(App.clientData.languageErrors[e]){a=App.clientData.languageErrors[e],f=[];for(o=0,u=a.length;o<u;o++)i=a[o],s="#code_"+i.name,App.ui.setFieldError(s,i.message,{ignoreMsg:!0}),f.push($(".tabs a[href='"+s+"']").closest("dd").addClass("has-error"));return f}}},this.languageBeingSet=!0,t("setup",this.codeSetup),t("answer",this.codeAnswer),t("fixture",this.codeFixture),t("example_fixture",this.codeExampleFixture),t("package",this.codePackage),this.languageBeingSet=!1,this.markdownEditor.setStashId("description"),this.markdownEditor.setLanguage(e),App.replaceHistoryState(App.route("edit",{language:e}))},confirmUnload:function(e,t){return this.confirmIfDirty(e,t)},removeSchedules:function(e){var t;return t=App.route("remove_from_schedules",{timeFrame:e}),App.confirmModal.show({titleHtml:"Confirm remove this kata from all schedules",messageHtml:"This kata will be removed from all of "+e.replace("_"," ")+"'s schedules",confirmHtml:"Sounds Good!",confirm:function(){var e=this;return $["delete"](t,{},function(e){return e.success?App.notifications.success("Kata successfully removed from all schedules"):App.notifications.fail(e.reason)})}})},addToSchedule:function(e){var t,n;return t=$("#code_challenge_level").val(),n=App.route("add_to_schedule",{timeFrame:e,language:App.clientData.language,difficulty:t}),App.confirmModal.show({titleHtml:"Confirm add to training schedule",messageHtml:"This kata will be added to the "+e+" "+App.clientData.language+" schedule with a difficulty of "+t+".",confirmHtml:"Sounds Good!",confirm:function(){var e=this;return $.post(n,{},function(e){return e.success?App.notifications.success("Kata successfully added to training schedule"):App.notifications.fail(e.reason)})}})},confirmIfDirty:function(e,t){var n=this;return t==null&&(t=function(){}),this.dirty?App.clientData.published?App.confirmModal.show({titleHtml:'<i class="icon-moon-warning" /> You have unsaved changes!',messageHtml:"This kata has already been published. You must re-publish in order to keep the changes you made. What do you want to do?",cancelHtml:"I'll stay and re-publish my changes",confirmHtml:"Discard my changes and continue",cancel:t,confirm:function(){return n.emptyStashes(),typeof e=="function"?e():void 0}}):App.confirmModal.show({titleHtml:'<i class="icon-moon-warning" /> You have unsaved changes!',messageHtml:"Before we update the page what would you like to do?",altConfirmHtml:"Discard Changes",confirmHtml:"Save Changes",altConfirmClass:"alert",cancel:t,altConfirm:function(){return n.emptyStashes(),typeof e=="function"?e():void 0},confirm:function(){var t,r,i,s;s=n.editors;for(r=0,i=s.length;r<i;r++)t=s[r],t.save();return $("form").postForm({url:App.route("save")+".json",success:function(t){if(t.success)return e()}})}}):e()},submit:function(e,t,n){var r,i,s,o,u=this;o=this.editors;for(i=0,s=o.length;i<s;i++)r=o[i],r.save();return this.markdownEditor.exitFullScreen(),$("form.simple_form[action]").postForm({pjax:!n,djax:!!n,data:{languages:App.clientData.languages,language:App.clientData.language},url:App.route(e),scrollTo:!1,success:function(){return u.emptyStashes(),typeof t=="function"?t():void 0},deferred:n})},emptyStashes:function(){return this.codeAnswer.emptyStash()},validateCode:function(e){var t=this;return $("#code_output").hide(),this.msgBox.working("Running..."),App.djax({url:App.route("validate",{language:App.clientData.language}),data:{solution:e,fixture:this.codeFixture.getValue(),"package":this.codePackage.getValue(),api_version:App.clientData.apiVersion},deferred:function(e){return t.msgBox.showResult(e.success,e.message),$("#code_output").show().html(e.output)}})},insertExample:function(e){var t,n=this;return t=function(){return $.getJSON(App.route("language_example",{language:App.clientData.language,category:e}),null,function(e){if(e.success)return n.codeAnswer.setValue(e.answer),n.codeFixture.setValue(e.fixture),n.codeSetup.setValue(e.setup)})},this.codeAnswer.getValue()||this.codeSetup.getValue()||this.codeFixture.getValue()?App.confirmModal.show({titleHtml:'<i class="icon-moon-warning" /> Possible loss of data!',messageHtml:"You are about to replace your current code with example code. Are you sure you want to discard your changes?",confirmHtml:"Yes, go ahead and replace with example code",confirm:t}):t()},setTheme:function(e){var t,n,r,i,s;i=this.editors,s=[];for(n=0,r=i.length;n<r;n++)t=i[n],s.push(t.setTheme(e));return s},track:function(e,t){return t==null&&(t={}),t.category=$("#code_challenge_category").val(),t.language=App.clientData.language,t.published=App.clientData.published,t.record_id=App.clientData.id,t.code_challenge_name=$("#code_challenge_name").val(),App.track("CC-Editor: "+e,t)}})),e=function(){var e,t,n,r;n=App.clientData.languages,r=[];for(e in n)t=n[e],r.push(["answer","fixture","setup","package","example_fixture"].each(function(e){return t[e]=decodeURIComponent(t[e])}));return r}}.call(this),function(){App.ns("Controls.CodeChallenges.confirmSolutionsClick",function(e,t){})}.call(this),function(){var e;App.ns("Controls.CodeChallenges.ListController",App.Control({init:function(){return this.track("Loaded"),new App.Controls.QuickStartSelector("#quick_start",{routeName:"quick_start",trackingName:"Katas: Quick Start"}),e(),this.infiniteScroll=new App.Controls.InfiniteScroll("section.items-list",{loaded:function(){return e()}})},events:{".items-list .item-title a click":function(e,t){return this.track("Item Title Click",{itemTitle:e.closest(".list-item").data("title")})},".items-list .icon-list a click":function(e,t){var n;return n=e.closest(".list-item").data("title"),this.track("Item Icon Click",{language:e.data("language"),itemTitle:n})}},track:function(e,t){return t==null&&(t={}),t.list_id=App.clientData.listId,App.track("CC-List: "+e,t)}})),e=function(){var e;return(e=App.clientData.completedCodeChallengeResults)!=null&&e.each(function(e){return $("#"+e.id+" .js-check").removeClass("is-hidden")}),$.wait(0,function(){return $("#list_loading_msg").slideUp().fadeOut()})}}.call(this),function(){App.ns("Controls.CodeChallenges.PendingController",App.Control({init:function(){}}))}.call(this),function(){App.ns("Controls.CodeChallenges.PlayController",App.Control({init:function(){var e=this;return this.timer=new App.Controls.Timer("#timer"),this.languages={},$.wait(100,function(){return e.play()}),this.track("Loaded"),App.initDjax()},events:{"window beforeunload":function(e,t){if(this.dirty)return"You risk losing your progress!"},".language-tabs li click":function(e,t){if(e.find("a").attr("href"))return;return $(".language-tabs li.is-active").removeClass("is-active"),e.addClass("is-active"),$("#preplay .leaderboard-container").hide(),$("#"+e.data("value")+"_leaderboard").show(),App.replaceHistoryState(e.data("href")),App.clientData.activeLanguage=e.data("value"),this.isPlaying&&this._playLanguage(),this.track("Language Changed")},"#hide_time click":function(e){return $("#timer_on").hide(),$("#timer_off").show()},"#show_time click":function(e){return $("#timer_on").show(),$("#timer_off").hide()},"#play_btn click":function(){return this.play(),this.track("Play Clicked")},"#skip_btn click":function(){return this.skip(),this.track("Skip Clicked")},"#code codeeditor.submit":function(){return this.readyCode&&this.readyCode===this.editor.getValue()?this.submit():this.attempt()},"#code .ace_editor keyup":function(){var e=this;this.dirty=!0;if(this.readyCode)return $.wait(0,function(){if(e.readyCode===e.editor.getValue())return $("#attempt_btn").hide(),$("#submit_btn").removeClass("is-hidden");$("#submit_btn").addClass("is-hidden"),$("#attempt_btn").show();if(!e.attempting)return e.editor.messages.hide()})},"#fixture codeeditor.submit":function(){return this.validate()},"#validate_btn click":function(){return this.validate()},"#attempt_btn:not(.is-disabled) click":function(){return this.attempt()},"#submit_btn:not(.is-disabled) click":function(){return this.submit()},"#comments_btn click":function(e,t){if(!t.ctrlKey&&!t.metaKey)return this.view_comments()},"#surrender_btn click":function(){return this.surrender()},"#h_layout click":function(e){return this.setLayout("h")},"#v_layout click":function(e){return this.setLayout("v")},"#maximize_layout click":function(){return this.setLayout("max")},"#minimize_layout click":function(){return this.setLayout("min")}},setLayout:function(e){switch(e){case"max":$("body").addClass("maximized");break;case"min":$("body").removeClass("maximized");break;case"h":$("#h_layout").addClass("is-active").next().removeClass("is-active"),$("#description_area").removeClass("twelve").addClass("five is-full-height").find("ul.tabs-content").data("ignoreVerticalFill",!1).css({height:""}).find("> li").addClass("is-full-height"),$("#editors_area").removeClass("twelve pln h_layout").addClass("seven v_layout");break;case"v":$("#v_layout").addClass("is-active").prev().removeClass("is-active"),$("#description_area").removeClass("five is-full-height").addClass("twelve").find("ul.tabs-content").data("ignoreVerticalFill",!0).css({height:"auto"}).find("> li").removeClass("is-full-height"),$("#editors_area").removeClass("seven v_layout").addClass("twelve pln h_layout")}return $.wait(100,function(){return $(window).resize()})},setOutput:function(e){if(!(e&&e.length>0))return $("#output_lines").html(""),$("#output_label").show();$("#output_lines").html((e||[]).join("<br>")),$("#output_label").hide();if(e.length>1)return this.showOutput()},showOutput:function(){return $('a[data-tab="output"]').click()},validate:function(){var e,t,n=this;return $("#validate_btn").addClass("is-disabled"),t=App.route("validate",{language:App.clientData.activeLanguage}),e={solution:this.editor.getValue(),fixture:this.fixture.getValue(),"package":this._getLanguage()["package"]||"",api_version:2},this._submitCode(t,e,this.fixture,function(e){var t;return t=e.message,t||(t=e.success?"Your Test Passed!":"Test didn't pass: Unknown error"),n.track("Test Submitted",{success:e.success}),n.fixture.messages.showResult(e.valid,t),n.setOutput(e.output),$("#validate_btn").removeClass("is-disabled")})},attempt:function(){var e,t=this;e={code:this.editor.getValue(),language:App.clientData.activeLanguage,source:"play",play_result_id:this.language.play_result_id};if(!e.code){this.editor.messages.fail(this.editor.emptyCodeMsg());return}return this.fixture.messages.hide(),$("#attempt_btn").addClass("is-disabled"),this.attempting=!0,this._submitCode(App.route("attempt",this.language),e,this.editor,function(n){var r;return t.attempting=!1,r=n.reason,!r&&!n.valid&&(r="Unknown error"),t.editor.messages.showResult(n.valid,r),t.setOutput(n.output),$("#attempt_btn").removeClass("is-disabled"),n.valid?App.clientData.published?(t.track("Attempt Successful"),t.language.play_result_id=n.play_result_id,$("#submit_btn").removeClass("is-hidden"),$("#attempt_btn").hide(),t.readyCode=e.code):t.track("Preview Attempt Successful"):(t.readyCode=null,t.track(""+(App.clientData.published?"":"Preview ")+"Attempt Failed",{reason:r})),t.track(""+(App.clientData.published?"":"Preview ")+"Attempt Submitted")})},_submitCode:function(e,t,n,r){var i,s=this;return n.messages.working("Sending..."),i=null,App.djax({url:e,data:t,success:function(e){return e.success?(NProgress.set(.3),n.messages.working("Queueing..."),i=$.wait(2e4,function(){if(r)return r({reason:"Submission timed out. Please try again."}),r=null})):n.messages.fail(e.reason)},deferred:function(e){if(App.djax.isProgress(e))return NProgress.set(.6),n.messages.working("Running...");if(r)return i.reject(),r(e),r=null}})},submit:function(){var e,t=this;if(this.readyCode)return e={language:App.clientData.activeLanguage,play_result_id:this.language.play_result_id},this.editor.messages.working("Submitting your final solution..."),App.djax({url:App.route("attempt",this.language),data:e,type:"PUT",deferred:function(e){if(e.success)return App.load(App.route("solutions",{language:App.clientData.activeLanguage}))}})},skip:function(){return App.load(App.route("next",{language:App.clientData.activeLanguage}))},surrender:function(){var e=this;return App.clientData.published?(this.track("Skipped"),$.post(App.route("skip",this.language),{language_name:App.clientData.activeLanguage},function(t){return e.skip()})):(this.track("Returning to editor"),App.load(App.route("editor",{language:App.clientData.activeLanguage})))},view_comments:function(){return this.track("Skipped/View Report"),$.post(App.route("skip",this.language),{language_name:App.clientData.activeLanguage},function(e){return App.load(App.route("comments"))})},play:function(){return this.isPlaying=!0,this._playLanguage()},_playLanguage:function(e){var t=this;return e==null&&(e=App.clientData.activeLanguage),$(".js-"+this.languageName).hide(),$(".js-"+e).show(),this.languages[e]?this._setLanguage(e):$.post(App.route("start_playing",{language:e}),{},function(n){var r;return t.timer.started||(r=n.startedAt,t.timer.start(r),t.showPlay()),t.languages[e]=n,t._setLanguage(e)})},_getLanguage:function(e){return e==null&&(e=App.clientData.activeLanguage),this.languages[e]},_setLanguage:function(e){var t,n;n=this.languages[e],n.views++,this.language=n,this.languageName=e,this.markdownDisplay.setLanguage(e),this.markdownDisplay.setMarkdown(n.description),this.editor.setValue(n.setup,""+n.resultId+"-"+e,!n.newPlay),this.editor.setMode(App.clientData.activeLanguage);switch(e){case"ruby":t="# Create your own tests here. These are some of the methods available:\n#  Test.expect(boolean, [optional] string) \n#  Test.assert_equals(actual, expected)\n#  Test.assert_not_equals(actual, expected) ";break;case"coffeescript":t="# Create your own tests here. These are some of the methods available:\n#  Test.expect(boolean, [optional] string) \n#  Test.assertEquals(actual, expected)\n#  Test.assertNotEquals(actual, expected) ";break;case"javascript":t="// Create your own tests here. These are some of the methods available:\n//  Test.expect(boolean, [optional] string) \n//  Test.assertEquals(actual, expected)\n//  Test.assertNotEquals(actual, expected) "}return this.fixture.setValue(n.exampleFixture||t,""+n.resultId+"-"+e+"-fixture",!n.newPlay),this.fixture.setMode(App.clientData.activeLanguage),n.newPlay=!1},showPlay:function(){return $("#preplay").hide(),$("#play").show(),$(".language-tabs a").each(function(e,t){return $(t).attr("href",null)}),this.editor=new App.Controls.CodeEditor("#code",{mode:App.clientData.activeLanguage,stashGroup:App.clientData.id,successMessage:function(){return""+App.consts.messages.success.sample()+" You may refactor/notate your solution if you wish. Submit when ready."}}),this.fixture=new App.Controls.CodeEditor("#fixture",{mode:App.clientData.activeLanguage,stashGroup:App.clientData.id}),this.markdownDisplay=new App.Controls.MarkdownDisplay("#description",{language:App.clientData.activeLanguage}),this.playVisible=!0,$(window).width()<1048&&this.setLayout("v"),$(window).resize()},track:function(e,t){return t==null&&(t={}),t.category=App.clientData.category,t.language=App.clientData.activeLanguage,t.strategy=App.clientData.strategy,t.challenge_name=App.clientData.challengeName,t.author_user_name=App.clientData.authorUserName,t.attempts=this.attempts,t.startedAt=App.clientData.startedAt,t.record_id=App.clientData.id,App.track("CC-Play: "+e,t)}}))}.call(this),function(){App.ns("Controls.CodeChallenges.ShowController",App.Control({init:function(){return this.trackingName="CC-Report",new App.Controls.CodeChallenges.SocialButtons(this.element.find(".train-social")),this.track("Loaded")},events:{"#solutions click":function(e,t){return App.Controls.CodeChallenges.confirmSolutionsClick(e,t)}},track:function(e,t){return t==null&&(t={}),t.category=App.clientData.category,t.language=App.clientData.activeLanguage,t.challenge_name=App.clientData.challengeName,t.author_user_name=App.clientData.authorUserName,t.record_id=App.clientData.id,t.view=App.clientData.isAuthorView?"author":"player",this._super(e,t)}}))}.call(this),function(){App.ns("Controls.CodeChallenges.SocialButtons",App.Control({init:function(){},events:{".js-up-vote a click":function(){return this.postUpVote(1)},".js-remove-up-vote a click":function(){return this.postUpVote(0)},".js-share-email click":function(){var e;return e=$(".js-train-email"),e.is(":visible")&&this.track("Social: Share Clicked",{social:"email"}),e.slideToggle(800)},"body .js-train-email button[type=cancel] click":function(e,t){return t.preventDefault(),e.closest(".js-train-email").slideUp()},".js-share-twitter click":function(e){return App.social.twitter.share(e.data("share-text")),this.track("Social: Share Clicked",{social:"twitter"})},".js-share-facebook click":function(e){return App.social.facebook.share({title:e.data("share-title"),body:e.data("share-body")}),this.track("Social: Share Clicked",{social:"facebook"})}},postUpVote:function(e){var t=this;return $.post(App.route("challenge_vote"),{vote:e},function(n){if(n.success)return remove?(t.element.find(".js-up-vote").show(),t.element.find(".js-remove-up-vote").hide()):(t.element.find(".js-up-vote").hide(),t.element.find(".js-remove-up-vote").show()),$(".js-up-votes-count").html(n.up_votes),t.track("User: Kata Vote",{vote:e})})},track:function(e,t){return t==null&&(t={}),t.page=App.controller.trackingName,App.track(e,t)}}))}.call(this),function(){App.ns("Controls.CodeChallenges.SolutionsController",App.Control({init:function(){return new App.Controls.CodeChallengeInfoAreas(this.element),new App.Controls.CodeChallenges.SocialButtons(this.element.find(".train-social")),this.infiniteScroll=new App.Controls.InfiniteScroll("#solutions_list"),this.trackingName="CC-Solutions",this.track("Loaded")},events:{".js-show-invalid click":function(e){var t,n;return t=$("<span>Loading...</span>"),e.replaceWith(t),n=new App.UriBuilder,n.params.invalid_solutions="true",$.get(n.build(),{},function(e){return t.fadeOut(),$("#invalid_solutions").replaceWith(e)})},".js-show-dups click":function(e){return e.text()==="Show Variations"?(e.closest("li").find(".js-variations").slideDown(),e.text("Hide Variations")):(e.closest("li").find(".js-variations").slideUp(),e.text("Show Variations"))},"#show_invalid_solutions click":function(e){return e.closest("p").hide(),$("#invalid_solutions").slideDown()},".js-admin-action click":function(e){return $.post(e.data("href"),{},function(e){return alert("Action "+(e.success?"successfully queued":"failed"))})},".js-delete-group click":function(e){var t=this;return App.confirmModal.show({titleHtml:'<i class="icon-moon-warning" /> This action is permanent!',messageHtml:"This will delete this solution group from the list. Are you sure about this?",cancelHtml:"Cancel",confirmHtml:"Delete It!",confirm:function(){var t;return t=e.closest(".js-result-group"),$["delete"](App.route("result_group",{groupResultId:t.attr("id")}),null,function(e){if(e.success)return t.fadeOut(800)})}})},".js-verify-group click":function(e){var t;return t=e.closest(".js-result-group"),$.post(App.route("verify",{groupResultId:t.attr("id")}),null,function(e){if(e.success)return alert("Action "+(e.success?"successfully queued":"failed"))})}},track:function(e,t){return t==null&&(t={}),t.language=App.clientData.activeLanguage,this._super(e,t)}}))}.call(this);