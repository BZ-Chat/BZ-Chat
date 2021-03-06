/* Configuration your application */
define(function() {
  var QMCONFIG = {
    qbAccount: {
      appId: Number("85771"),
      authKey: "Q3VUtfMkuat8KeM",
      authSecret: "q6bL3jXkOgF6a8f"
    },

    fbAccount: {
      appId: "605405446247805",
      scope: "email,user_friends"
    },

    firebase: {
      apiKey: "AIzaSyBngIcgrzjJVOLXaDzFf7HVfieh7TZTLr8",
      authDomain: "bz-chat-287800.firebaseapp.com",
      databaseURL: "https://bz-chat-287800.firebaseio.com",
      projectId: "bz-chat-287800",
      storageBucket: "bz-chat-287800.appspot.com",
      messagingSenderId: "265299067289"
    },

    debug: Number("@@debugQM"),

    notification: {
      timeout: 7
    },

    defAvatar: {
      url: "images/ava-single.svg",
      url_png: "images/ava-single.png",
      group_url: "images/ava-group.svg",
      group_url_png: "images/ava-group.png",
      caption: "Choose user picture"
    },

    // Loadable limit of messages by one request. Useful for pagination.
    stackMessages: 50,

    // Max size (Mbite) of upload an image or audio/video files
    maxLimitFile: 10,
    maxLimitMediaFile: 100,

    // Max time of file's record
    MAX_RECORD_TIME: 30,

    patterns: {
      name: ".{3,50}",
      password: ".{8,40}"
    },

    errors: {
      session: "The BZ Chat application credentials you entered are incorrect",
      unknownUserName: "Your name is 'Unknown user', please change",
      shortName: "Name must be more than 2 characters",
      bigName: "Name mustn't be more than 200 characters",
      invalidEmail: "Please enter a valid Email address",
      invalidPhone: "Phone mustn't contain letters",
      oldPass: "Old password is incorrect",
      invalidPass: "Password mustn't contain non-Latin characters and spaces",
      shortPass: "Password must be more than 7 characters",
      bigPass: "Password mustn't be more than 40 characters",
      avatarType: "Avatar must be image",
      fileName: "File name mustn't be more than 100 characters",
      fileSize: "File mustn't be more than 10 MB",
      videoSize: "File mustn't be more than 100 MB",
      emailExists: "The email has already been taken",
      unauthorized: "The email or password is incorrect",
      notFoundEmail: "The email you entered wasn't found",
      crashFBToken:
        "Sorry, we noticed that you had logged out from Facebook so we need to recreate your FB token now. Please click the Connect with FB button again",
      FBAccountExists:
        "This FB user already has an account in the BZ Chat database. You can't combine two BZ Chat users"
    },

    QBconf: {
      chatReconnectionTimeInterval: 2,
      chatProtocol: {
        // BOSH protocol = 1, WebSocket = 2
        active: 2
      },
      debug: {
        mode: Number("@@debugQB"),
        file: null
      },
      webrtc: {
        answerTimeInterval: 45,
        statsReportTimeInterval: 5
      }
    }
  };

  return QMCONFIG;
});
