"use strict";(self.webpackChunkrest_api_doc=self.webpackChunkrest_api_doc||[]).push([[7130],{8280:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>o,frontMatter:()=>c,metadata:()=>i,toc:()=>h});var s=r(4848),d=r(8453);const c={sidebar_position:5},t=void 0,i={id:"API_Documentation/Miscellaneous",title:"Miscellaneous",description:"ClientCredentialCheck ##",source:"@site/docs/API_Documentation/Miscellaneous.md",sourceDirName:"API_Documentation",slug:"/API_Documentation/Miscellaneous",permalink:"/restAPIDocs/docs/API_Documentation/Miscellaneous",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/API_Documentation/Miscellaneous.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Reports Fetching",permalink:"/restAPIDocs/docs/API_Documentation/Reports Fetching"},next:{title:"AP Data Fetch",permalink:"/restAPIDocs/docs/API_Documentation/AP Data Fetch"}},l={},h=[{value:"ClientCredentialCheck",id:"clientcredentialcheck",level:2},{value:"ClientUpdatePwd",id:"clientupdatepwd",level:2},{value:"AddOnlineReceipt",id:"addonlinereceipt",level:2},{value:"AddPaymentRequest",id:"addpaymentrequest",level:2},{value:"SetPrimaryBank",id:"setprimarybank",level:2},{value:"SetPrimaryDP",id:"setprimarydp",level:2},{value:"ClientUCCCheckList",id:"clientuccchecklist",level:2},{value:"GenerateCashBankVoucher",id:"generatecashbankvoucher",level:2}];function a(e){const n={br:"br",code:"code",em:"em",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"clientcredentialcheck",children:"ClientCredentialCheck"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Endpoint"})," : ClientCredentialCheck"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Method"})," : ",(0,s.jsx)(n.strong,{children:"POST"})," or ",(0,s.jsx)(n.strong,{children:"GET"}),"   |  Send raw ",(0,s.jsx)(n.strong,{children:"Json"})," data in ",(0,s.jsx)(n.strong,{children:"Body"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Checks Client Credential UCC and Password combination match or not"})}),"\n",(0,s.jsx)("pre",{language:"html",children:(0,s.jsxs)("table",{style:{width:"100%"},children:[(0,s.jsx)("thead",{style:{height:"25px",padding:"10px"},children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Data "}),(0,s.jsx)("th",{children:"UAT Sample"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsx)("tr",{children:(0,s.jsx)("td",{colspan:"2",children:(0,s.jsx)(n.strong,{children:"JSon Request:"})})}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\r\n  "key": "<<RestAPI Key>>",\r\n  "ucc": "<<UCC>>",\r\n  "pwd": "<<Password>>"\r\n  }\n'})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\r\n  "key": "ezhDMEI5ND4MLE3YwNH0=",\r\n  "ucc": "151A355",\r\n  "pwd": "923288"\r\n  }\n'})})})]}),(0,s.jsx)("tr",{style:{height:"20px",padding:"10px"},children:(0,s.jsx)("td",{colspan:"2",children:(0,s.jsx)(n.strong,{children:"JSon Response:"})})}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\r\n  "success": <<1:Success, 0: Failure>>,\r\n  "message":\u201d<<Message>>"\r\n  }\n'})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\r\n  "success": 1,\r\n  "message": "Client Credential match"\r\n  }\n'})})})]})]})]})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"clientupdatepwd",children:"ClientUpdatePwd"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Endpoint"})," : ClientUpdatePwd"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Method"})," : ",(0,s.jsx)(n.strong,{children:"POST"})," or ",(0,s.jsx)(n.strong,{children:"GET"}),"   |  Send raw ",(0,s.jsx)(n.strong,{children:"Json"})," data in ",(0,s.jsx)(n.strong,{children:"Body"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Updates the WEB password of a Client"})}),"\n",(0,s.jsx)("pre",{language:"html",children:(0,s.jsxs)("table",{style:{width:"100%"},children:[(0,s.jsx)("thead",{style:{height:"25px",padding:"10px"},children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Data "}),(0,s.jsx)("th",{children:"UAT Sample"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsx)("tr",{children:(0,s.jsx)("td",{colspan:"2",children:(0,s.jsx)(n.strong,{children:"JSon Request:"})})}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\r\n  {\r\n    "key": "<<RestAPI Key>>",\r\n    "cUCC": "<<UCC>>",\r\n    "cOldPwd": "<<Old Password>>",\r\n    "cOldPwd": "<<New Password>>"\r\n    }\r\n}\n'})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\r\n  "key": "ezhDMEI5ND4MLE3YwNH0=",\r\n  "cUCC": "151A355",\r\n  "cOldPwd": "923288",\r\n  "cNewPwd": "Ab44"\r\n}\n'})})})]}),(0,s.jsx)("tr",{style:{height:"20px",padding:"10px"},children:(0,s.jsx)("td",{colspan:"2",children:(0,s.jsx)(n.strong,{children:"JSon Response:"})})}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\r\n  "success": <<1:Success, 0: Failure>>,\r\n  "message":\u201d<<Message>>"\r\n}\n'})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\r\n  "success": 1,\r\n  "message": "Password updated Successfully"\r\n}\n'})})})]})]})]})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"addonlinereceipt",children:"AddOnlineReceipt"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Endpoint"})," : AddOnlineReceipt"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Method"})," : ",(0,s.jsx)(n.strong,{children:"POST"})," or ",(0,s.jsx)(n.strong,{children:"GET"})," |  Send raw ",(0,s.jsx)(n.strong,{children:"Json"})," data in ",(0,s.jsx)(n.strong,{children:"Body"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Add a Journal Voucher into the SharePro"})}),"\n",(0,s.jsx)("table",{children:(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Request Data"})}),(0,s.jsx)(n.hr,{}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"key                <<RestAPI Key>>\r\ngateway     char(10)                        -- RAZOR, ATOM\r\nucc             char(10)                  -- UCC is compulsory\r\nsystem       char(10)                  -- System is compulsory (Like NSE, NFO)\r\nbankacno   char(20)                         -- Bankacno is compulsory\r\namount       Numeric(12,2)        = 0.00         -- minimum amount should be 0.01\r\nnarrcr          varchar(MAX)         -- Like ( Online Payment from A/c : 11427925330 in \r\n                                              STATE BANK OF INDIA\r\n                                              Bank Ref : IGAIKKYZD8 )\r\nnarrdr          varchar(MAX)        -- Like ( Online Payment from ASHOK KUMAR CHOUDHARY [XR626]\r\n                                    from A/c : 11427925330 in STATE BANK OF INDIA\r\n                                  Bank Ref : IGAIKKYZD8   Gateway Ref : 300078282049)\r\n* If not exist then need to create account head 2RAZOR, 2ATOM in SharePro for Payment gateway\n"})})]})})}),"\n",(0,s.jsx)("table",{children:(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Request Sample (JSon Data)"})}),(0,s.jsx)(n.hr,{}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\r\n  "key": "ezhDMEI5ND4MLE3YwNH0=",\r\n  "gateway": "RAZOR",\r\n  "ucc": "151A355",\r\n  "system": "NSE",\r\n  "bankacno": "001104000322218",\r\n  "amount": "100.00",\r\n  "narrcr": "Online Payment from A/c : 001104000322218 in IDBI BANK  Bank Ref : IGAIKKYZD8",\r\n  "narrdr": "Online Payment from A.K. ZAHID ANSARI [151A355]   from A/c : 11427925330 in IDBI \r\n  BANK\r\n          Bank Ref : IGAIKKYZD8   Gateway Ref : 300078282049"\r\n}\n'})})]})})}),"\n",(0,s.jsx)("pre",{language:"html",children:(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Return JSon Response: "}),(0,s.jsx)("th",{children:"Sample"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsxs)("td",{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Return Data:"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\r\n "success": <<1:Success, 0: Failure>>,\r\n "message":\u201d<<Message>>"\r\n}\n'})})]}),(0,s.jsx)("td",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\r\n  "success": 1,\r\n  "message": "Online Receipt Added Successfully in SharePro"\r\n}\n'})})})]}),(0,s.jsx)("tr",{})]})]})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"addpaymentrequest",children:"AddPaymentRequest"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Endpoint"})," : AddPaymentRequest"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Method"})," : ",(0,s.jsx)(n.strong,{children:"POST"})," or ",(0,s.jsx)(n.strong,{children:"GET"}),"   |  Send raw ",(0,s.jsx)(n.strong,{children:"Json"})," data in ",(0,s.jsx)(n.strong,{children:"Body"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"Add/Update a Payment Request into the SharePro"})})}),"\n",(0,s.jsx)("table",{children:(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Request Data"})}),(0,s.jsx)(n.hr,{}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'key                    <<RestAPI Key>>\r\nsegment     char(10)     -- SEC, COM\r\nucc             char(10)                  -- UCC is compulsory\r\nbankacno   char(20)  optional   -- Bankacno ( If bankacno not send then \r\n                                 automatic insert Primary Bank )\r\namount       Numeric               -- minimum amount should be 1 (Like : 100)\r\npendingUpdateNotAllow  char(1)  optional  \u2013 1 : Pending record update not allow, 0: allow\r\n\r\nNote : In case of any pending record is found, \r\nand you want to not allow update pending \r\nrecord then you should pass "pendingUpdateNotAllow" : "1"\n'})})]})})}),"\n",(0,s.jsx)("table",{children:(0,s.jsx)("tr",{children:(0,s.jsxs)("td",{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Request Sample (JSon Data)"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\r\n  "key": "ezhDMEI5ND4MLE3YwNH0=",\r\n  "segment": "SEC",\r\n  "ucc" : "151A355",\r\n  "amount" : "10000",\r\n  "bankacno" : "001104000322218"  -- Bankacno is optional \r\n  ( If not send then automatic insert Primary bankacno )\r\n}\n'})})]})})}),"\n",(0,s.jsx)("pre",{language:"html",children:(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Return JSon Response: "}),(0,s.jsx)("th",{children:"Sample"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsxs)("td",{style:{"vertical-align":"top"},children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Return Data:"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\r\n"success": <<1:Success, 0: Failure>>,\r\n"message":\u201d<<Message>>"\r\n}\n'})})]}),(0,s.jsxs)("td",{children:[(0,s.jsx)(n.p,{children:"In case no pending record found ( Added)"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'----------------------\r\n{\r\n"success": 1,\r\n"message": "Payment Request Added \r\nSuccessfully in SharePro"\r\n}\r\nIn case pending record found (Updated)\r\n----------------------\r\n{\r\n"success": 1,\r\n"message": "Pending Payment Request \r\nUpdated Successfully in SharePro"\r\n}\n'})})]})]}),(0,s.jsx)("tr",{})]})]})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"setprimarybank",children:"SetPrimaryBank"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Endpoint"})," : SetPrimaryBank"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Method"})," : ",(0,s.jsx)(n.strong,{children:"POST"})," or ",(0,s.jsx)(n.strong,{children:"GET"}),"  |  Send raw ",(0,s.jsx)(n.strong,{children:"Json"})," data in ",(0,s.jsx)(n.strong,{children:"Body"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Set Primary Bank Account, if client has 2 or more bank accounts linked to the trading account"})}),"\n",(0,s.jsx)("pre",{language:"html",children:(0,s.jsxs)("table",{style:{width:"100%"},children:[(0,s.jsx)("thead",{style:{height:"25px",padding:"10px"},children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Data "}),(0,s.jsx)("th",{children:"UAT Sample"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsx)("tr",{children:(0,s.jsx)("td",{colspan:"2",children:(0,s.jsx)(n.strong,{children:"JSon Request:"})})}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\r\n  "key": "<<RestAPI Key>>",\r\n  "UCC": "<<UCC>>",    OR      "SUBCD"\r\n  "Acno": "<< Bank Account No.>>"\r\n}\n'})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\r\n  "key": "ezhDMEI5ND4MLE3YwNH0=",\r\n  "UCC": "9905420",    OR  "SUBCD": "C.00000011"\r\n  "Acno": "785528554"\r\n}\n'})})})]}),(0,s.jsx)("tr",{style:{height:"20px",padding:"10px"},children:(0,s.jsx)("td",{colspan:"2",children:(0,s.jsx)(n.strong,{children:"JSon Response:"})})}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\r\n  "success": <<1:Success, 0: Failure>>,\r\n  "message":\u201d<<Message>>"\r\n}\n'})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\r\n  "success": 1,\r\n  "message": "Primary Bank \r\n  Account updated Successfully"\r\n}\n'})})})]})]})]})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"setprimarydp",children:"SetPrimaryDP"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Endpoint"})," : SetPrimaryDP"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Method"})," : ",(0,s.jsx)(n.strong,{children:"POST"})," or ",(0,s.jsx)(n.strong,{children:"GET"}),"   |  Send raw ",(0,s.jsx)(n.strong,{children:"Json"})," data in ",(0,s.jsx)(n.strong,{children:"Body"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"To set a DP account a primary, if the client has 2 or more DP accounts linked to the trading account"})}),"\n",(0,s.jsx)("pre",{language:"html",children:(0,s.jsxs)("table",{style:{width:"100%"},children:[(0,s.jsx)("thead",{style:{height:"25px",padding:"10px"},children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:"Data "}),(0,s.jsx)("th",{children:"UAT Sample"})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsx)("tr",{children:(0,s.jsx)("td",{colspan:"2",children:(0,s.jsx)(n.strong,{children:"JSon Request:"})})}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\r\n  "key": "<<RestAPI Key>>",\r\n  "UCC": "<<UCC>>",    OR      "SUBCD"\r\n  "ClientID": "<< DP ClientID (BenAcNum)>>"\r\n}\n'})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\r\n  "key": "ezhDMEI5ND4MLE3YwNH0=",\r\n  "UCC": "FRRV0T11",    OR  "SUBCD": "C.00000012"\r\n  "ClientID": "10246201"\r\n}\n'})})})]}),(0,s.jsx)("tr",{style:{height:"20px",padding:"10px"},children:(0,s.jsx)("td",{colspan:"2",children:(0,s.jsx)(n.strong,{children:"JSon Response:"})})}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\r\n  "success": <<1:Success, 0: Failure>>,\r\n  "message":\u201d<<Message>>"\r\n}\n'})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\r\n  "success": 1,\r\n  "message": "Primary DP updated Successfully"\r\n}\n'})})})]})]})]})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"clientuccchecklist",children:"ClientUCCCheckList"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Endpoint"})," : ClientUCCCheckList"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Method"})," : ",(0,s.jsx)(n.strong,{children:"POST"})," or ",(0,s.jsx)(n.strong,{children:"GET"}),"   |  Send raw ",(0,s.jsx)(n.strong,{children:"Json"})," data in ",(0,s.jsx)(n.strong,{children:"Body"}),(0,s.jsx)(n.br,{}),"\n","Checks whether the given Client UCC exists or not. Check multiple UCC at a time"]}),"\n",(0,s.jsx)("pre",{language:"html",children:(0,s.jsxs)("table",{style:{width:"100%"},children:[(0,s.jsx)("thead",{style:{height:"25px",padding:"10px"},children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:" Data "}),(0,s.jsx)("th",{children:" UAT Sample "})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsx)("tr",{children:(0,s.jsx)("td",{colspan:"2",children:(0,s.jsx)(n.strong,{children:"JSon Request:"})})}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'  {\r\n"key": "<<RestAPI Key>>",\r\n"UCCList": ["<<UCC>>","<<UCC>>"]\r\n  }\n'})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\r\n"key": "ezhDMEI5ND4MLE3YwNH0=",\r\n"UCCList": ["GB01G001","ZP01H587","A1224","ZP01M874,A12888"]\r\n}\n'})})})]}),(0,s.jsx)("tr",{style:{height:"20px",padding:"10px"},children:(0,s.jsx)("td",{colspan:"2",children:(0,s.jsx)(n.strong,{children:"JSon Response:"})})}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'[\r\n{\r\n"UCC": "UCC",\r\n"success": <<1:Success, 0: Failure>>,\r\n"message": "<<Message>>"\r\n},\r\n]\n'})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'[\r\n{\r\n"UCC": "GB01G001",\r\n"success": 1,\r\n"message": "UCC exists"\r\n},\r\n{\r\n"UCC": "ZP01H587",\r\n"success": 1,\r\n"message": "UCC exists"\r\n},\r\n{\r\n"UCC": "A1224",\r\n"success": 1,\r\n"message": "UCC exists"\r\n},\r\n{\r\n"UCC": "ZP01M874",\r\n"success": 1,\r\n"message": "UCC exists"\r\n},\r\n{\r\n"UCC": "A12888",\r\n"success": 0,\r\n"message": "UCC does not exist"\r\n}\r\n]\n'})})})]})]})]})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"generatecashbankvoucher",children:"GenerateCashBankVoucher"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Endpoint"})," : GenerateCashBankVoucher"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Method"})," : ",(0,s.jsx)(n.strong,{children:"POST"})," or ",(0,s.jsx)(n.strong,{children:"GET"}),"   |  Send raw ",(0,s.jsx)(n.strong,{children:"Json"})," data in ",(0,s.jsx)(n.strong,{children:"Body"}),(0,s.jsx)(n.br,{}),"\n","Generate Cash Bank Voucher in SharePro (PayIn / PayOut)"]}),"\n",(0,s.jsx)("pre",{language:"html",children:(0,s.jsxs)("table",{style:{width:"100%"},children:[(0,s.jsx)("thead",{style:{height:"25px",padding:"10px"},children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:" Data "}),(0,s.jsx)("th",{children:" UAT Sample "})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsx)("tr",{children:(0,s.jsx)("td",{colspan:"2",children:(0,s.jsx)(n.strong,{children:"JSon Request:"})})}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\r\n"key": "<<RestAPI Key>>",\r\n"UCC":       "<<UCC>>"\r\n"Segment", \u2013 ( Like : NSE)\r\n"TT",   -- Cash/Bank A/c (Like :HC)\r\n"PR",  -- Type ( Payment: P, Received: R )\r\n"Vrdt",  \u2013 Voucher Date - dd/MM/yyyy ( Like : 16/02/2022)\r\n"Narr",       \u2013 Narration for Cash Voucher\r\n"LineNarr", \u2013 Line Narration for Cash Voucher\r\n"Amount",  \u2013 Amount with paisa (Like 5000.12)\r\n"AcNo",  \u2013 Bank Account number.\r\n"CheqNo",  \u2013 Cheque number\r\n"CheqDt" \u2013 Cheque Date-  dd/MM/yyyy ( Like : 16/02/2022)\r\n"ACCD",  \u2013 ACCD (ACCD & SubCode mandatory only for sub broker)\r\n"SubCode",  \u2013 SubCode (ACCD & SubCode mandatory only for sub broker)\r\n"BranchId",  \u2013BranchId (default is \'HO\')\r\n"BankRef",  \u2013 Bank reference number / Transaction reference number\r\n}\n'})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\r\n"key": "ezhDMEI5ND4MLE3YwNH0=",\r\n"Segment": "NSE",\r\n"TT": "HC",\r\n"PR": "P",\r\n"Vrdt": "14/02/2022",\r\n"Narr": "Bening check paid",\r\n"LineNarr": "Line Narr check paid",\r\n"UCC": "A407",\r\n"Amount": 800.00,\r\n"AcNo": "2345000101411464",\r\n"CheqNo": "24681015",\r\n"CheqDt": "14/02/2022",\r\n"BankRef": "303100109572403174"\r\n}\n'})})})]}),(0,s.jsx)("tr",{style:{height:"20px",padding:"10px"},children:(0,s.jsx)("td",{colspan:"2",children:(0,s.jsx)(n.strong,{children:"JSon Response:"})})}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\r\n    "success": <<1:Success, 0: Failure>>,\r\n    "message":\u201d<<Message>>"\r\n}\n'})})}),(0,s.jsx)("td",{children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\r\n    "success": 1,\r\n    "message": "Cash Bank Voucher generated successfully in SharePro"\r\n}\n'})})})]})]})]})}),"\n",(0,s.jsx)(n.hr,{})]})}function o(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>i});var s=r(6540);const d={},c=s.createContext(d);function t(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);