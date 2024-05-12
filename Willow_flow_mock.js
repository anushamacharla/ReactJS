export const flowVED = {
    "responseInfo": {
        "timeStamp": "30-06-2023 07:59:46",
        "correlationId": "021bd1a9-9e7f-4b42-948c-6ddc1fc5d872-874715",
        "responseCode": "00",
        "responseMessage": "SUCCESS",
        "sectionErrors": []
    },
    "body": {
        "pageId": "cpcLandingPage",
        "pageAttributes": [
            {
                "itemKey": "pageTitle",
                "itemValue": "CPC Landing Page",
                "itemAttributes": {
                    "key1": "val1",
                    "key2": "val2"
                }
            },
            {
                "itemKey": "pageSubtitle"
            },
            {
                "itemKey": "page Header",
                "itemValue": "page Header",
                "itemType": "page Header"
            },
            {
                "itemKey": "vedLandingPage",
                "itemValue": "true"
            },
            {
                "itemKey": "hashedAccountNumber",
                "itemValue": "82d209be515d359522026015544370ba535e5c8e50bbc63b778641524fac17a4",
                "itemType": "text"
            },
            {
                "itemKey": "hashedMdn",
                "itemValue": "3ebfa14d986f45102fb6ab8adb3d8a2a967fabdde768c337c6a926c8c9e06c03",
                "itemType": "text"
            },
            {
                "itemKey": "currentMtnPlanId",
                "itemValue": "67568",
                "itemType": "text"
            },
            {
                "itemKey": "enableMiniGrid",
                "itemValue": "true"
            },
            {
                "itemKey": "customerType",
                "itemValue": "PE",
                "itemType": "text"
            },
            {
                "itemKey": "noOfLines",
                "itemValue": "7",
                "itemType": "text"
            },
            {
                "itemKey": "fiosEligibilityCategory",
                "itemValue": "vzw_cust"
            },
            {
                "itemKey": "isKodiEnabled",
                "itemValue": "true"
            },
            {
                "itemKey": "is5GHomeEnabled",
                "itemValue": "true"
            },
            {
                "itemKey": "isCPCSimplificationEnabled",
                "itemValue": "true"
            },
            {
                "itemKey": "enableMAndM4Point5",
                "itemValue": "true"
            },
            {
                "itemKey": "enableFujiPlan",
                "itemValue": "true"
            },
            {
                "itemKey": "futureDateDisable",
                "itemValue": "false"
            },
            {
                "itemKey": "enableIOSRating",
                "itemValue": "false"
            },
            {
                "itemKey": "enableAndroidRating",
                "itemValue": "false"
            },
            {
                "itemKey": "enableNewIPI",
                "itemValue": "false"
            },
            {
                "itemKey": "enableCompare",
                "itemValue": "false"
            },
            {
                "itemKey": "enableFriendlyExperience",
                "itemValue": "true"
            }
        ],
        "sections": [
            {
                "sectionIndex": "0",
                "sectionId": "vedLandingpage_LLP_mainPageSection",
                "sectionType": "mainPageSection",
                "sectionComponentId": "Landing",
                "actions": [
                    {
                        "actionType": "function",
                        "actionValue": "this.props.actions.setPlanData(LLP, ##mtn##)",
                        "actionKey": "managePlan",
                        "clickStream": "manage-plan-cta"
                    },
                    {
                        "actionType": "function",
                        "actionValue": "this.props.actions.openModalSection(##MODAL_LINK##)",
                        "actionKey": "addALineCTA",
                        "clickStream": "add-a-line-cta"
                    },
                    {
                        "actionType": "function",
                        "actionValue": "this.props.actions.openModalSection(cancelTrialModal)",
                        "actionKey": "cancelTrial",
                        "clickStream": "open-cancel-trial-modal-cta"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/ui/acct/secure/numshare#/",
                        "actionKey": "manageNumberShare",
                        "clickStream": "manage-numbershare-cta"
                    },
                    {
                        "actionType": "function",
                        "actionValue": "this.props.actions.openNickNameModal(##mtn##)",
                        "actionKey": "editNickName",
                        "clickStream": "edit-nickname-cta"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": " https://vzwqa2.verizonwireless.com/ui/acct/ao/suspendReconnect#/",
                        "actionKey": "reconnectCTA",
                        "clickStream": "reconnect-suspended-cta"
                    },
                    {
                        "actionType": "newtab",
                        "actionValue": "https://www.verizon.com/support/suspend-service-faqs/",
                        "actionKey": "suspendedFAQCTA",
                        "clickStream": "suspended-servicefaq-cta"
                    },
                    {
                        "actionType": "newtab",
                        "actionValue": "https://www.verizon.com/support/voluntary-suspension-policy/",
                        "actionKey": "suspendedPolicyCTA",
                        "clickStream": "voluntary-suspensionpolicy-cta"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/ui/bill/secure/pb",
                        "actionKey": "payBillCTA",
                        "clickStream": "pay-bill-cta"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://www.verizon.com/support/pay-bill-faqs/",
                        "actionKey": "billFAQCTA",
                        "clickStream": "billpay-faq-cta"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://www.verizon.com/support/promise-to-pay-faqs/",
                        "actionKey": "billPromiseFAQCTA",
                        "clickStream": "bill-promise-cta"
                    },
                    {
                        "actionType": "jsfunction",
                        "actionValue": "EchannelVera.init({'userText':'', 'tileKey':'dotcom'})",
                        "actionKey": "chatCTA",
                        "clickStream": "chat-withus-cta"
                    },
                    {
                        "actionType": "function",
                        "actionValue": "this.props.actions.openModalSection(viewDiscountsModal)",
                        "actionKey": "viewDiscountDetails",
                        "clickStream": "view-discount-details-modal-cta"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/ui/hub/ao/myorders/#/",
                        "actionKey": "trackOrderCTA",
                        "clickStream": "track-order-cta"
                    }
                ],
                "contents": [
                    {
                        "contentIndex": "0",
                        "contentType": "NotificationInfo",
                        "items": [
                            {
                                "itemKey": "headerText",
                                "itemType": "span",
                                "itemValue": "You're on the  plan that ends in ##REMAINING_DAYS## days. ",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "cancelTrial",
                                "itemType": "TextLinkWrapper",
                                "itemValue": "Cancel trial",
                                "itemAttributes": {},
                                "actionKey": "cancelTrial"
                            }
                        ]
                    },
                    {
                        "contentIndex": "1",
                        "contentType": "TitleAccentWrapper",
                        "items": [
                            {
                                "itemKey": "headerText",
                                "itemType": "TitleAccentedCustomized",
                                "itemValue": "My plans",
                                "itemAttributes": {
                                    "primitive": "h1"
                                }
                            }
                        ]
                    },
                    {
                        "contentIndex": "2",
                        "contentType": "TileContainer",
                        "items": [
                            {
                                "itemKey": "deviceTiles",
                                "itemType": "PlanTileItems",
                                "dataKey": "this.props.masterData",
                                "itemAttributes": {
                                    "sectionType": "mainPageSection"
                                }
                            },
                            {
                                "itemKey": "aalTile",
                                "itemType": "PlanTile",
                                "itemValue": "Add a line",
                                "itemAttributes": {
                                    "addline": "true"
                                },
                                "actionKey": "addALineCTA"
                            }
                        ]
                    }
                ],
                "data": {
                    "planItemsDataList": [
                        {
                            "mdn": "9137874660",
                            "isLoggedInLine": false,
                            "nickName": "Jake B Jacobs-4660",
                            "mtnHashCode": "052f7656355a2249402d0c876512c05843bc9409bceb8f12f9e5c7aae3da5104",
                            "encryptedMtn": "%2FXcb0N5cCT32IqxfWb1c1g%3D%3D",
                            "accountType": "Account owner",
                            "deviceType": "smartPhone",
                            "deviceName": "Jake B Jacobs-4660",
                            "description": "913.787.4660",
                            "planId": "17991",
                            "planName": "Go Unlimited",
                            "planCost": "$40/mo",
                            "planPromos": "View all discount details",
                            "planDetails": "with $5 Auto Pay discount applied.",
                            "planType": "LLP",
                            "templateType": "LLP",
                            "linkText": "Manage plan",
                            "deviceImageUrl": "https://ss7.vzw.com/is/image/VerizonWireless/apple-iphone-13-pro-max-graphite",
                            "deviceImageAlt": "Apple iPhone 13 Pro Max 256GB in Graphite",
                            "linkActionKey": "managePlan",
                            "featuresIncluded": [
                                "60057",
                                "10001",
                                "70001",
                                "70006",
                                "70003",
                                "60018",
                                "71066",
                                "71000",
                                "10003",
                                "60027",
                                "10002",
                                "60007",
                                "10007",
                                "60008"
                            ],
                            "newPerksIncluded": {
                                "availablePerks": {
                                    "included": [],
                                    "promotions": [
                                        "60079",
                                        "60081",
                                        "10034"
                                    ]
                                },
                                "activePerks": [],
                                "expiredPerks": []
                            },
                            "isRingAlarm": false,
                            "planDescription": "",
                            "removeChangeplan": false,
                            "isActive": true,
                            "linkTextToolTip2": "",
                            "linkText2": "Edit nickname",
                            "linkActionKey2": "editNickName",
                            "linkActionKey3": "viewDiscountDetails",
                            "voluntarySuspended": false,
                            "inVoluntarySuspendedNonPay": false,
                            "inVoluntarySuspendedOthers": false,
                            "billBreakDown": "",
                            "fullPlanCost": "",
                            "rewardsIncluded": [
                                "10005"
                            ],
                            "is5GHome": false,
                            "mixAndMatch4": false,
                            "streamingSafetyPendingOrder": false,
                            "firstName": "JAKE",
                            "deviceSku": "MLF63LL/A",
                            "displayName": "Apple iPhone 13 Pro Max 256GB in Graphite",
                            "productDisplayName": "iPhone 13 Pro Max",
                            "linePortedOut": false,
                            "currentPerks": [],
                            "planWithPerksCost": "$40/mo",
                            "planCategory": "MIXANDMATCH",
                            "discountedAccessChargeWithPerk": "",
                            "connectedDevice": false,
                            "pendingOrder": false
                        },
                        {
                            "mdn": "5073181008",
                            "isLoggedInLine": true,
                            "nickName": "Jake B Jacobs-1008",
                            "mtnHashCode": "3ebfa14d986f45102fb6ab8adb3d8a2a967fabdde768c337c6a926c8c9e06c03",
                            "encryptedMtn": "2VIJlWCzyPNGkjg7mf6irw%3D%3D",
                            "accountType": "Account manager",
                            "deviceType": "homeDevice",
                            "deviceName": "Jake B Jacobs-1008",
                            "description": "507.318.1008",
                            "planId": "67568",
                            "planName": "5G Home Plus",
                            "planCost": "$50/mo",
                            "planPromos": "View all discount details",
                            "planDetails": "with $10 Auto Pay discount applied.",
                            "planType": "LLP",
                            "templateType": "LLP",
                            "linkText": "Manage plan",
                            "deviceImageUrl": "https://ss7.vzw.com/is/image/VerizonWireless/vzw-internet-gateway-askey-titan-2-router-white-arc-xci55ax",
                            "deviceImageAlt": "Verizon Internet Gateway",
                            "linkActionKey": "managePlan",
                            "featuresIncluded": [
                                "70025",
                                "70026",
                                "70034"
                            ],
                            "newPerksIncluded": {
                                "availablePerks": {
                                    "included": [],
                                    "promotions": []
                                },
                                "activePerks": [],
                                "expiredPerks": []
                            },
                            "isRingAlarm": false,
                            "planDescription": "",
                            "removeChangeplan": false,
                            "isActive": true,
                            "linkTextToolTip2": "",
                            "linkText2": "Edit nickname",
                            "linkActionKey2": "editNickName",
                            "linkActionKey3": "viewDiscountDetails",
                            "voluntarySuspended": false,
                            "inVoluntarySuspendedNonPay": false,
                            "inVoluntarySuspendedOthers": false,
                            "billBreakDown": "",
                            "fullPlanCost": "",
                            "rewardsIncluded": [],
                            "is5GHome": true,
                            "mixAndMatch4": false,
                            "streamingSafetyPendingOrder": false,
                            "firstName": "JAKE",
                            "deviceSku": "ASK-NCQ1338FA",
                            "displayName": "Verizon Internet Gateway",
                            "productDisplayName": "Verizon Internet Gateway",
                            "linePortedOut": false,
                            "currentPerks": [],
                            "planWithPerksCost": "$50/mo",
                            "planCategory": "",
                            "discountedAccessChargeWithPerk": "",
                            "connectedDevice": false,
                            "pendingOrder": false
                        },
                        {
                            "mdn": "5074158454",
                            "isLoggedInLine": false,
                            "nickName": "Jake B Jacobs-8454",
                            "mtnHashCode": "9a5961811e3783276c3dd8bf11d719feaebda3059715d514cec8117b94a65cb7",
                            "encryptedMtn": "hlj0g47aT0uR8pRqOdo37Q%3D%3D",
                            "accountType": "Account manager",
                            "deviceType": "homeDevice",
                            "deviceName": "Jake B Jacobs-8454",
                            "description": "507.415.8454",
                            "planId": "67567",
                            "planName": "5G Home",
                            "planCost": "$40/mo",
                            "planPromos": "View all discount details",
                            "planDetails": "with $10 Auto Pay discount applied.",
                            "planType": "LLP",
                            "templateType": "LLP",
                            "linkText": "Manage plan",
                            "deviceImageUrl": "https://ss7.vzw.com/is/image/VerizonWireless/vzw-internet-gateway-askey-titan-2-router-white-arc-xci55ax",
                            "deviceImageAlt": "Verizon Internet Gateway",
                            "linkActionKey": "managePlan",
                            "featuresIncluded": [
                                "70025",
                                "70026",
                                "70034"
                            ],
                            "newPerksIncluded": {
                                "availablePerks": {
                                    "included": [],
                                    "promotions": []
                                },
                                "activePerks": [],
                                "expiredPerks": []
                            },
                            "isRingAlarm": false,
                            "planDescription": "",
                            "removeChangeplan": false,
                            "isActive": true,
                            "linkTextToolTip2": "",
                            "linkText2": "Edit nickname",
                            "linkActionKey2": "editNickName",
                            "linkActionKey3": "viewDiscountDetails",
                            "voluntarySuspended": false,
                            "inVoluntarySuspendedNonPay": false,
                            "inVoluntarySuspendedOthers": false,
                            "billBreakDown": "",
                            "fullPlanCost": "",
                            "rewardsIncluded": [],
                            "is5GHome": true,
                            "mixAndMatch4": false,
                            "streamingSafetyPendingOrder": false,
                            "firstName": "JAKE",
                            "deviceSku": "ASK-NCQ1338FA",
                            "displayName": "Verizon Internet Gateway",
                            "productDisplayName": "Verizon Internet Gateway",
                            "linePortedOut": false,
                            "currentPerks": [],
                            "planWithPerksCost": "$40/mo",
                            "planCategory": "",
                            "discountedAccessChargeWithPerk": "",
                            "connectedDevice": false,
                            "pendingOrder": false
                        },
                        {
                            "mdn": "9137870154",
                            "isLoggedInLine": false,
                            "nickName": "Jake B Jacobs-0154",
                            "mtnHashCode": "43e2e25567a18bc61aa8d29be8432fefd1bdea3e05cf853f3b5fbadde4bb1780",
                            "encryptedMtn": "qTxwuxhcVemR8pRqOdo37Q%3D%3D",
                            "accountType": "Account manager",
                            "deviceType": "smartPhone",
                            "deviceName": "Jake B Jacobs-0154",
                            "description": "913.787.0154",
                            "planId": "17991",
                            "planName": "Go Unlimited",
                            "planCost": "$40/mo",
                            "planPromos": "View all discount details",
                            "planDetails": "with $5 Auto Pay discount applied.",
                            "planType": "LLP",
                            "templateType": "LLP",
                            "linkText": "Manage plan",
                            "deviceImageUrl": "https://ss7.vzw.com/is/image/VerizonWireless/apple-iphone-13-blu-09142021",
                            "deviceImageAlt": "Apple iPhone 13 128GB in Blue",
                            "linkActionKey": "managePlan",
                            "featuresIncluded": [
                                "60057",
                                "10001",
                                "70001",
                                "70006",
                                "70003",
                                "60018",
                                "71066",
                                "71000",
                                "10003",
                                "60027",
                                "10002",
                                "60007",
                                "10007",
                                "60008"
                            ],
                            "newPerksIncluded": {
                                "availablePerks": {
                                    "included": [],
                                    "promotions": [
                                        "60079",
                                        "60081",
                                        "10034"
                                    ]
                                },
                                "activePerks": [],
                                "expiredPerks": []
                            },
                            "isRingAlarm": false,
                            "planDescription": "",
                            "removeChangeplan": false,
                            "isActive": true,
                            "linkTextToolTip2": "",
                            "linkText2": "Edit nickname",
                            "linkActionKey2": "editNickName",
                            "linkActionKey3": "viewDiscountDetails",
                            "voluntarySuspended": false,
                            "inVoluntarySuspendedNonPay": false,
                            "inVoluntarySuspendedOthers": false,
                            "billBreakDown": "",
                            "fullPlanCost": "",
                            "rewardsIncluded": [
                                "10005"
                            ],
                            "is5GHome": false,
                            "mixAndMatch4": false,
                            "streamingSafetyPendingOrder": false,
                            "firstName": "JAKE",
                            "deviceSku": "MLAE3LL/A",
                            "displayName": "Apple iPhone 13 128GB in Blue",
                            "productDisplayName": "iPhone 13",
                            "linePortedOut": false,
                            "currentPerks": [],
                            "planWithPerksCost": "$40/mo",
                            "planCategory": "MIXANDMATCH",
                            "discountedAccessChargeWithPerk": "",
                            "connectedDevice": false,
                            "pendingOrder": false
                        },
                        {
                            "mdn": "9137876442",
                            "isLoggedInLine": false,
                            "nickName": "Lauren6442",
                            "mtnHashCode": "f042fe1a679fb3342f84a0af2f60902b1340b3f5037ad884af71fca3f05fb4b8",
                            "encryptedMtn": "qeDfhZwBcdGYObha%2FB6DnA%3D%3D",
                            "accountType": "",
                            "deviceType": "smartPhone",
                            "deviceName": "Lauren6442",
                            "description": "913.787.6442",
                            "planId": "17991",
                            "planName": "Go Unlimited",
                            "planCost": "$40/mo",
                            "planPromos": "View all discount details",
                            "planDetails": "with $5 Auto Pay discount applied.",
                            "planType": "LLP",
                            "templateType": "LLP",
                            "linkText": "Manage plan",
                            "deviceImageUrl": "https://ss7.vzw.com/is/image/VerizonWireless/iphone-14-pro-deep-purple-fall22-a",
                            "deviceImageAlt": "iPhone 14 Pro 256GB in Deep Purple",
                            "linkActionKey": "managePlan",
                            "featuresIncluded": [
                                "60057",
                                "10001",
                                "70001",
                                "70006",
                                "70003",
                                "60018",
                                "71066",
                                "71000",
                                "10003",
                                "60027",
                                "10002",
                                "60007",
                                "10007",
                                "60008"
                            ],
                            "newPerksIncluded": {
                                "availablePerks": {
                                    "included": [],
                                    "promotions": [
                                        "60079",
                                        "60081",
                                        "10034"
                                    ]
                                },
                                "activePerks": [],
                                "expiredPerks": []
                            },
                            "isRingAlarm": false,
                            "planDescription": "",
                            "removeChangeplan": false,
                            "isActive": true,
                            "linkTextToolTip2": "",
                            "linkText2": "Edit nickname",
                            "linkActionKey2": "editNickName",
                            "linkActionKey3": "viewDiscountDetails",
                            "voluntarySuspended": false,
                            "inVoluntarySuspendedNonPay": false,
                            "inVoluntarySuspendedOthers": false,
                            "billBreakDown": "",
                            "fullPlanCost": "",
                            "rewardsIncluded": [
                                "10005"
                            ],
                            "is5GHome": false,
                            "mixAndMatch4": false,
                            "streamingSafetyPendingOrder": false,
                            "firstName": "JAKE",
                            "deviceSku": "MQ1D3LL/A",
                            "displayName": "iPhone 14 Pro 256GB in Deep Purple",
                            "productDisplayName": "iPhone 14 Pro",
                            "linePortedOut": false,
                            "currentPerks": [],
                            "planWithPerksCost": "$40/mo",
                            "planCategory": "MIXANDMATCH",
                            "discountedAccessChargeWithPerk": "",
                            "connectedDevice": false,
                            "pendingOrder": false
                        },
                        {
                            "mdn": "9139450706",
                            "isLoggedInLine": false,
                            "nickName": "Jake B Jacobs-0706",
                            "mtnHashCode": "06b3ebce0cc54530ef53213931b791b093216f4ced3984b1fb1c4b5d574fbe1a",
                            "encryptedMtn": "qAhnR6FaQzieF%2FpQqdI1mA%3D%3D",
                            "accountType": "",
                            "deviceType": "smartPhone",
                            "deviceName": "Jake B Jacobs-0706",
                            "description": "913.945.0706",
                            "planId": "17991",
                            "planName": "Go Unlimited",
                            "planCost": "$40/mo",
                            "planPromos": "View all discount details",
                            "planDetails": "with $5 Auto Pay discount applied.",
                            "planType": "LLP",
                            "templateType": "LLP",
                            "linkText": "Manage plan",
                            "deviceImageUrl": "https://ss7.vzw.com/is/image/VerizonWireless/iphone-14-pro-space-black-fall22-a",
                            "deviceImageAlt": "iPhone 14 Pro 256GB in Space Black",
                            "linkActionKey": "managePlan",
                            "featuresIncluded": [
                                "60057",
                                "10001",
                                "70001",
                                "70006",
                                "70003",
                                "60018",
                                "71066",
                                "71000",
                                "10003",
                                "60027",
                                "10002",
                                "60007",
                                "10007",
                                "60008"
                            ],
                            "newPerksIncluded": {
                                "availablePerks": {
                                    "included": [],
                                    "promotions": [
                                        "60079",
                                        "60081",
                                        "10034"
                                    ]
                                },
                                "activePerks": [],
                                "expiredPerks": []
                            },
                            "isRingAlarm": false,
                            "planDescription": "",
                            "removeChangeplan": false,
                            "isActive": true,
                            "linkTextToolTip2": "",
                            "linkText2": "Edit nickname",
                            "linkActionKey2": "editNickName",
                            "linkActionKey3": "viewDiscountDetails",
                            "voluntarySuspended": false,
                            "inVoluntarySuspendedNonPay": false,
                            "inVoluntarySuspendedOthers": false,
                            "billBreakDown": "",
                            "fullPlanCost": "",
                            "rewardsIncluded": [
                                "10005"
                            ],
                            "is5GHome": false,
                            "mixAndMatch4": false,
                            "streamingSafetyPendingOrder": false,
                            "firstName": "JAKE",
                            "deviceSku": "MQ0N3LL/A",
                            "displayName": "iPhone 14 Pro 256GB in Space Black",
                            "productDisplayName": "iPhone 14 Pro",
                            "linePortedOut": false,
                            "currentPerks": [],
                            "planWithPerksCost": "$40/mo",
                            "planCategory": "MIXANDMATCH",
                            "discountedAccessChargeWithPerk": "",
                            "connectedDevice": false,
                            "pendingOrder": false
                        },
                        {
                            "mdn": "5076065538",
                            "isLoggedInLine": false,
                            "nickName": "Jake B Jacobs-5538",
                            "mtnHashCode": "b23886960a6ecf7b38d77e6a95bbf197de1a21e70d26f8d47716a1599224257a",
                            "encryptedMtn": "5IU0CJqsREjbVvlB6tHUcA%3D%3D",
                            "accountType": "",
                            "deviceType": "watch",
                            "deviceName": "Jake B Jacobs-5538's Watch",
                            "description": "507.606.5538",
                            "planId": "18056",
                            "planName": "Number Share",
                            "planCost": "$10/mo",
                            "planType": "LLP",
                            "templateType": "LLP",
                            "linkText": "Manage plan",
                            "deviceImageUrl": "https://ss7.vzw.com/is/image/VerizonWireless/DU-fallback-smartwatch-03152023",
                            "deviceImageAlt": "WTS8 45 GPH SS US",
                            "linkActionKey": "managePlan",
                            "featuresIncluded": [
                                "10017",
                                "10030"
                            ],
                            "isRingAlarm": false,
                            "planDescription": "",
                            "removeChangeplan": false,
                            "isActive": true,
                            "linkTextToolTip": "This line shares a plan and data with your NumberShare parent line.",
                            "linkTextToolTip2": "While Number Share is active on your account, the number for this device will not work. This device will only receive calls when the shared host phone number is called.",
                            "numberShareText": "Shared with 913.945.0706",
                            "numberShareLongText": "This line shares a plan and data with 913.945.0706",
                            "linkText2": "Edit nickname",
                            "linkActionKey2": "editNickName",
                            "linkActionKey3": "viewDiscountDetails",
                            "voluntarySuspended": false,
                            "inVoluntarySuspendedNonPay": false,
                            "inVoluntarySuspendedOthers": false,
                            "billBreakDown": "",
                            "fullPlanCost": "",
                            "rewardsIncluded": [],
                            "is5GHome": false,
                            "mixAndMatch4": false,
                            "streamingSafetyPendingOrder": false,
                            "firstName": "JAKE",
                            "deviceSku": "MNNN3LL/A",
                            "displayName": "WTS8 45 GPH SS US",
                            "productDisplayName": "Watch Series 8 NON VZW",
                            "linePortedOut": false,
                            "currentPerks": [],
                            "planWithPerksCost": "$10/mo",
                            "planCategory": "",
                            "discountedAccessChargeWithPerk": "",
                            "connectedDevice": true,
                            "pendingOrder": false
                        }
                    ],
                    "suspendedDetails": [
                        {
                            "reconnectActionKey": "reconnectCTA",
                            "policyActionKey": "suspendedPolicyCTA",
                            "otherSuspensionText": "You can chat with us or contact Customer Care at 800-922-0204, Monday-Sunday 6AM-11PM to help you with your account.",
                            "warningMessageALP": "Some or all of the Perks and Add-ons associated with this line may be inactive while this line is suspended. <br/>You may also be charged for certain Perks and Add-ons while this line is suspended.",
                            "involuntaryLinkText2": "See payment arrangements & promise to pay FAQs",
                            "policyLinkText": "See Voluntary Suspension Policy",
                            "involuntaryLinkAction2": "billPromiseFAQCTA",
                            "warningMessage": "Some or all of the Perks and Add-ons associated with this line may be inactive while this line is suspended. <br/>You may also be charged for certain Perks and Add-ons while this line is suspended.",
                            "involuntaryLinkAction1": "billFAQCTA",
                            "toolTiptext": "This amount is based on plan cost and type of suspension.",
                            "suspendedCostDisclaimer": "*This amount is based on plan cost and type of suspension.",
                            "faqLinkText": "See suspend service FAQs",
                            "faqActionKey": "suspendedFAQCTA",
                            "suspendedHeader": "Account is suspended",
                            "suspendedText": "This line is suspended",
                            "chatButtonText": "Chat with us",
                            "involuntaryLinkText1": "See paying your Verizon wireless bill FAQs",
                            "chatButtonActionKey": "chatCTA",
                            "nonPaytext": "Your bill is past due. We’ll start your service again when we receive the full past due amount. For questions, you can <a onclick=\"EchannelVera.init({'userText':'', 'tileKey':'CPC'})\" tabindex=\"0\">chat with us</a> or call 1-800-Verizon (1-800-837-4966).",
                            "payBillButtonText": "Pay Bill",
                            "payBillButtonActionKey": "payBillCTA",
                            "reconnectLinkText": "Reconnect this line"
                        }
                    ],
                    "suppressForkPage": false,
                    "mdnOrdering": [
                        "9137874660",
                        "9137870154",
                        "9137876442",
                        "9139450706",
                        "5076065538",
                        "5073181008",
                        "5074158454"
                    ],
                    "planCostItems": {
                        "planCostText": "Total plan cost",
                        "totalPlanCost": "$260/mo",
                        "addonsFooterText": "Eligibility for some add-ons is determined by your current plan.",
                        "pricingFooterText": "All pricing shown on this page does not include taxes, fees or surcharges. Plan prices do not include cost of add-ons or international plans.",
                        "pendingOrderCancellableText": "Effective on your next bill cycle, ##EFFECTIVE_DATE##.",
                        "pendingOrderNonCancellableText": "Your plan change is still in progress. Please check back in 15 minutes.",
                        "pendingOrderHeaderText": "This line has a pending plan change to ##PENDING_PLAN_NAME##.",
                        "pendingOrderHeaderTextALP": "Your account has a pending plan change to ##PENDING_PLAN_NAME##.",
                        "pendingOrderCancellableTextGeneric": "You can’t change your plan until this order has been processed.",
                        "pendingOrderHeaderTextGeneric": "Your account currently has a pending order.",
                        "pendingOrderCancellableTextDeviceActivation": "You can’t change your plan until you activate this device.",
                        "pendingOrderHeaderTextDeviceActivation": "You have a pending device activation.",
                        "linkText": "Track order",
                        "linkActionKey": "trackOrderCTA",
                        "streamingSafetyPendingOrderHdr": "We're still processing your request.",
                        "streamingSafetyPendingOrderTxt": "You'll need to log out and wait 15 minutes before you can change your toggle settings again."
                    },
                    "accountLevelSubscription": {},
                    "isOnlySmartPhoneAccount": false,
                    "isResumeFlow": false,
                    "restrictPlanChange": false,
                    "pegaCaseRedirect": false,
                    "hasFiosService": false,
                    "has5GHome": true,
                    "hasLTEHome": false
                }
            },
            {
                "sectionIndex": "1",
                "sectionId": "vedLandingpage_LLP_ManagePlanSection",
                "sectionType": "managePlanSection",
                "sectionComponentId": "ManagePlan",
                "actions": [
                    {
                        "actionType": "function",
                        "actionValue": "this.props.actions.setActiveMdn",
                        "actionKey": "seePlans",
                        "clickStream": "see-all-plans-cta"
                    },
                    {
                        "actionType": "function",
                        "actionValue": "this.props.actions.openModalSection(cancelTrialModal)",
                        "actionKey": "cancelTrial",
                        "clickStream": "open-cancel-trial-modal-cta"
                    }
                ],
                "contents": [
                    {
                        "contentIndex": "0",
                        "contentType": "PendingOrderNotificationSuccess",
                        "items": [
                            {
                                "itemKey": "headerText",
                                "itemType": "span",
                                "itemValue": "The pending order has been cancelled.",
                                "itemAttributes": {}
                            }
                        ]
                    },
                    {
                        "contentIndex": "1",
                        "contentType": "PendingOrderNotificationFailure",
                        "items": [
                            {
                                "itemKey": "headerText",
                                "itemType": "span",
                                "itemValue": "The pending order could not be cancelled at this time.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "subText",
                                "itemType": "span",
                                "itemValue": "To continue with your plan change, please contact customer care at (800) 922-0204 Monday-Sunday from 6am-11pm.",
                                "itemAttributes": {}
                            }
                        ]
                    },
                    {
                        "contentIndex": "2",
                        "contentType": "NotificationInfo",
                        "items": [
                            {
                                "itemKey": "headerText",
                                "itemType": "span",
                                "itemValue": "You're on the ##PLAN_NAME## plan that ends in ##REMAINING_DAYS## days. ",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "cancelTrial",
                                "itemType": "TextLinkWrapper",
                                "itemValue": "Cancel trial",
                                "itemAttributes": {},
                                "actionKey": "cancelTrial"
                            }
                        ]
                    },
                    {
                        "contentIndex": "3",
                        "contentType": "TitleAccentWrapper",
                        "items": [
                            {
                                "itemKey": "headerText",
                                "itemType": "Title",
                                "itemValue": "Manage plan",
                                "itemAttributes": {
                                    "primitive": "h2",
                                    "size": "large"
                                }
                            }
                        ]
                    },
                    {
                        "contentIndex": "4",
                        "contentType": "SubHeaderText",
                        "items": [
                            {
                                "itemKey": "subHeader",
                                "itemType": "Subtitle",
                                "itemValue": "Select a line to view its plan.",
                                "itemAttributes": {}
                            }
                        ]
                    },
                    {
                        "contentIndex": "5",
                        "contentType": "ManagePlanContainer",
                        "items": [
                            {
                                "itemKey": "accountDetails",
                                "itemType": "SectionRender",
                                "itemValue": "accountDetailsSection",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "planDetails",
                                "itemType": "SectionRender",
                                "itemValue": "planContainerSection",
                                "itemAttributes": {}
                            }
                        ]
                    }
                ],
                "data": {}
            },
            {
                "sectionIndex": "2",
                "sectionId": "vedLandingpage_LLP_accountDetailsSection",
                "sectionType": "accountDetailsSection",
                "sectionComponentId": "ManagePlan",
                "actions": [
                    {
                        "actionType": "function",
                        "actionValue": "this.props.actions.openNickNameModal(this.props.planData.mdn)",
                        "actionKey": "editNickName",
                        "clickStream": "edit-nickname-cta"
                    },
                    {
                        "actionType": "function",
                        "actionValue": "this.props.actions.setPlanData(LLP, ##mtn##)",
                        "actionKey": "managePlan",
                        "clickStream": "manage-plan-cta"
                    },
                    {
                        "actionType": "function",
                        "actionValue": "this.props.actions.openModalSection(addLineModal)",
                        "actionKey": "addALineCTA",
                        "clickStream": "add-a-line-cta"
                    },
                    {
                        "actionType": "function",
                        "actionValue": "this.props.actions.openModalSection(cancelTrialModal)",
                        "actionKey": "cancelTrial",
                        "clickStream": "open-cancel-trial-modal-cta"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/ui/acct/secure/numshare#/",
                        "actionKey": "manageNumberShare",
                        "clickStream": "manage-numbershare-cta"
                    }
                ],
                "contents": [
                    {
                        "contentIndex": "0",
                        "contentType": "AccountContainer",
                        "items": [
                            {
                                "itemKey": "headerText",
                                "itemType": "LineTitle",
                                "itemValue": "Choose a line",
                                "itemAttributes": {
                                    "primitive": "h2",
                                    "size": "medium"
                                }
                            },
                            {
                                "itemKey": "deviceTiles",
                                "itemType": "PlanTileItems",
                                "dataKey": "this.props.masterData",
                                "itemAttributes": {
                                    "sectionType": "mainPageSection"
                                }
                            },
                            {
                                "itemKey": "aalTile",
                                "itemType": "PlanTile",
                                "itemValue": "Add a line",
                                "itemAttributes": {
                                    "addline": "true"
                                },
                                "actionKey": "addALineCTA"
                            }
                        ]
                    }
                ],
                "data": {}
            },
            {
                "sectionIndex": "3",
                "sectionId": "vedLandingpage_LLP_planContainerSection",
                "sectionType": "planContainerSection",
                "sectionComponentId": "ManagePlan",
                "actions": [
                    {
                        "actionType": "redirect",
                        "actionValue": "http://localhost:4002/",
                        "actionKey": "changePlanCTA",
                        "clickStream": "change-plan-cta"
                    }
                ],
                "contents": [
                    {
                        "contentIndex": "0",
                        "contentType": "PlanContainerContent",
                        "items": [
                            {
                                "itemKey": "planDetails",
                                "itemType": "SectionRender",
                                "itemValue": "planDetailsSection",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "featureDetails",
                                "itemType": "SectionRender",
                                "itemValue": "planFeaturesSection",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "planPerkDetails",
                                "itemType": "SectionRender",
                                "itemValue": "planPerksSection",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "addonDetails",
                                "itemType": "SectionRender",
                                "itemValue": "planAddOnsSection",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "internationalDetails",
                                "itemType": "SectionRender",
                                "itemValue": "planInternationalSection",
                                "itemAttributes": {}
                            }
                        ]
                    }
                ],
                "data": {}
            },
            {
                "sectionIndex": "4",
                "sectionId": "vedLandingpage_LLP_planDetailsSection",
                "sectionType": "planDetailsSection",
                "sectionComponentId": "ManagePlan",
                "actions": [
                    {
                        "actionType": "function",
                        "actionValue": "this.props.actions.changePlan(#/selectPlans, this.props.sectionContentMetaData)",
                        "actionKey": "changePlanCTA",
                        "clickStream": "change-plan-cta"
                    },
                    {
                        "actionType": "function",
                        "actionValue": "this.props.actions.viewPendingOrderClick(#/pendingorder, this.props.pendingOrderActions, this.props.planData)",
                        "actionKey": "pendingOrderViewDetailsCTA",
                        "clickStream": "pendingorder-viewdetails-cta"
                    },
                    {
                        "actionType": "function",
                        "actionValue": "this.props.actions.changePlan(#/exploremmplan,this.props.planData,this.props.sectionContentMetaData)",
                        "actionKey": "exploreOptionCTA",
                        "clickStream": "explore_option-plan-cta"
                    },
                    {
                        "actionType": "function",
                        "actionValue": "this.props.actions.openNickNameModal(this.props.planData.mdn)",
                        "actionKey": "editNickName",
                        "clickStream": "edit-nickname-cta"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/ui/acct/secure/numshare#/",
                        "actionKey": "manageNumberShare",
                        "clickStream": "manage-numbershare-cta"
                    }
                ],
                "contents": [
                    {
                        "contentIndex": "0",
                        "contentType": "div",
                        "items": [
                            {
                                "itemKey": "headerText",
                                "itemType": "LineTitle",
                                "itemValue": "Line",
                                "itemAttributes": {
                                    "primitive": "h2",
                                    "size": "medium"
                                }
                            },
                            {
                                "itemKey": "nicknameText",
                                "itemType": "Title",
                                "dataKey": "this.props.planData.deviceName",
                                "itemAttributes": {
                                    "primitive": "h4",
                                    "data-cs-mask": "true"
                                }
                            },
                            {
                                "itemKey": "nicknameLink",
                                "itemType": "EditNickNameLink",
                                "itemValue": "Edit nickname",
                                "itemAttributes": {
                                    "className": "text-link-wrapper editNameLink"
                                },
                                "actionKey": "editNickName"
                            },
                            {
                                "itemKey": "nicknameText",
                                "itemType": "p",
                                "dataKey": "this.props.planData.description",
                                "itemAttributes": {
                                    "className": "displayInline",
                                    "data-cs-mask": "true"
                                }
                            },
                            {
                                "itemKey": "nicknameText",
                                "itemType": "Tooltip",
                                "dataKey": "this.props.planData.linkTextToolTip2",
                                "itemAttributes": {
                                    "size": "small",
                                    "ariaLabel": "Manage NumberShare"
                                }
                            },
                            {
                                "itemKey": "suspendedTile",
                                "itemType": "SuspendedTile",
                                "itemAttributes": {}
                            }
                        ]
                    },
                    {
                        "contentIndex": "1",
                        "contentType": "SubTitleWrapper",
                        "items": [
                            {
                                "itemKey": "headerText",
                                "itemType": "Title",
                                "itemValue": "Plan",
                                "itemAttributes": {
                                    "primitive": "h2",
                                    "size": "medium"
                                }
                            }
                        ]
                    },
                    {
                        "contentIndex": "2",
                        "contentType": "NameContainer",
                        "items": [
                            {
                                "itemKey": "planText",
                                "itemType": "Title",
                                "dataKey": "this.props.planData.planName",
                                "itemAttributes": {
                                    "primitive": "h4",
                                    "size": "medium"
                                }
                            },
                            {
                                "itemKey": "planDetails",
                                "itemType": "PlanDetailBody",
                                "itemAttributes": {
                                    "size": "medium",
                                    "html": "true"
                                }
                            }
                        ]
                    },
                    {
                        "contentIndex": "3",
                        "contentComponentId": "PendingOrderDiv",
                        "contentType": "PendingOrderDiv",
                        "items": [
                            {
                                "itemKey": "bodyText",
                                "itemType": "PendingOrderHeader",
                                "itemValue": "##HEADER_TEXT##",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "subText",
                                "itemType": "PendingOrderSubText",
                                "itemValue": "##SUB_TEXT##",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "bodyLink",
                                "itemType": "PendingOrderTextLink",
                                "itemValue": "View details",
                                "itemAttributes": {},
                                "actionKey": "pendingOrderViewDetailsCTA"
                            }
                        ]
                    },
                    {
                        "contentIndex": "4",
                        "contentType": "div",
                        "items": [
                            {
                                "itemKey": "recommendation",
                                "itemType": "PlanRecommendation",
                                "itemAttributes": {}
                            }
                        ]
                    },
                    {
                        "contentIndex": "5",
                        "contentType": "CtaRow",
                        "items": [
                            {
                                "itemKey": "changePlanCTA",
                                "itemType": "Button",
                                "itemValue": "Explore plans",
                                "itemAttributes": {
                                    "className": "chanePlanCtaButton"
                                },
                                "actionKey": "exploreOptionCTA"
                            }
                        ]
                    },
                    {
                        "contentIndex": "6",
                        "contentType": "CtaRowNumberShare",
                        "items": [
                            {
                                "itemKey": "numberShareCTA",
                                "itemType": "Button",
                                "itemValue": "Manage Number Share",
                                "itemAttributes": {
                                    "className": "chanePlanCtaButton"
                                },
                                "actionKey": "manageNumberShare"
                            }
                        ]
                    },
                    {
                        "contentIndex": "6",
                        "contentComponentId": "SuspendedFooter",
                        "items": [
                            {
                                "itemKey": "suspendedFooterTile",
                                "itemType": "suspendedFooterTile",
                                "itemAttributes": {}
                            }
                        ]
                    }
                ],
                "data": {}
            },
            {
                "sectionIndex": "5",
                "sectionId": "vedLandingpage_LLP_planFeaturesSection",
                "sectionType": "planFeaturesSection",
                "sectionComponentId": "ManagePlan",
                "actions": [
                    {
                        "actionType": "redirect",
                        "actionValue": "https://www.verizon.com/devices/",
                        "actionKey": "aalNewDeviceCTA",
                        "clickStream": "shop eligible devices"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/sales/digital/byod.html#/smartimei/",
                        "actionKey": "bringYourOwnDeviceCTA",
                        "clickStream": "bring your own device"
                    },
                    {
                        "actionType": "route",
                        "actionValue": "#/exploremmplan?pagename=lineselector",
                        "actionKey": "manageConnectedDevicePlanCTA",
                        "clickStream": "manage-connected-device-cta"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/ui/acct/secure/productApps/enroll/mcs11011",
                        "actionKey": "enrollAppleMusicCTA",
                        "clickStream": "enroll-apple-music-cta"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/ui/acct/secure/productApps/pdp/spo1480005_apple",
                        "actionKey": "enrollAppleArcadeCTA",
                        "clickStream": "enroll-apple-arcade-cta",
                        "sectionKey": "null"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/ui/acct/secure/productApps/pdp/spo1480006_google",
                        "actionKey": "enrollGooglePassCTA",
                        "clickStream": "enroll-google-play-pass-cta",
                        "sectionKey": "null"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/ui/acct/secure/productApps/gridview/View%20all%20Add-ons",
                        "actionKey": "enrollmentCTA",
                        "clickStream": "enroll-cta",
                        "sectionKey": "null"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://m-sit.vzw.com/Y4irYU0P",
                        "actionKey": "manageVerizonUpCTA",
                        "clickStream": "manage-verizon-up-cta"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/rewards/verizon-up/",
                        "actionKey": "learnMoreVerizonUpCTA",
                        "clickStream": "learn-more-verizon-up-cta"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/ui/acct/secure/productApps/manage/spo1480005_apple",
                        "actionKey": "manageAppleArcadeCTA",
                        "clickStream": "manage-apple-arcade-cta"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/ui/bill/secure/vzcc/db?#/redeemDashboard",
                        "actionKey": "useVerizonDollars",
                        "clickStream": "use-verizon-dollars-cta"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/shop/",
                        "actionKey": "shopDeviceDollars",
                        "clickStream": "shop-device-dollars-cta"
                    },
                    {
                        "actionType": "function",
                        "actionValue": "this.props.actions.openModalSection(TravelPassModal)",
                        "actionKey": "learnMoreTravelPassCTA",
                        "clickStream": "learnmore-travelpass-cta"
                    },
                    {
                        "actionType": "function",
                        "actionValue": "this.props.actions.openModalSection(FiveGLearnMoreOverLay)",
                        "actionKey": "learnMore5GModalCTA",
                        "clickStream": "learnmore-5ghome-cta"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/ui/acct/secure/productApps/manage/sfo80093",
                        "actionKey": "manageCloudCTA",
                        "clickStream": "manage-verizon-cloud-cta"
                    },
                    {
                        "actionType": "function",
                        "actionValue": "this.props.actions.openModalSection(FiveGLearnMoreOverLayFIOS)",
                        "actionKey": "learnMore5GModalFIOSCTA",
                        "clickStream": "learnmore-5ghome-cta"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/ui/acct/secure/productApps/pdp/sfo80093",
                        "actionKey": "learnMoreCloudCTA",
                        "clickStream": "learnmore-5ghome-ctaenroll-cloud-cta",
                        "sectionKey": "null"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/ui/acct/secure/productApps/pdp/spo1480002_disneybundle",
                        "actionKey": "enrollmentDisneyBundleCTA",
                        "clickStream": "enroll-disneybundle-cta",
                        "sectionKey": "null"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/ui/acct/secure/productApps/pdp/spo1480004_discovery",
                        "actionKey": "enrollmentDiscoveryCTA",
                        "clickStream": "enroll-discovery-cta",
                        "sectionKey": "null"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/ui/acct/secure/productApps/manage/mcs11011",
                        "actionKey": "manageApple6MonthCTA",
                        "clickStream": "manage-apple-music-cta",
                        "sectionKey": "null"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/ui/acct/secure/productApps/enroll/mcs11011",
                        "actionKey": "learnMore6MonthCTA",
                        "clickStream": "learnmore-apple-music-cta",
                        "sectionKey": "null"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/ui/acct/secure/productApps/manage/mcs11011",
                        "actionKey": "manageAppleMusicCTA",
                        "clickStream": "manage-apple-music-cta",
                        "sectionKey": "null"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/ui/acct/secure/productApps/manage/spo1480006_google",
                        "actionKey": "manageGooglePassCTA",
                        "clickStream": "manage-googlepass-cta",
                        "sectionKey": "null"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/digital/nsa/secure/ui/products/producthub/manage/spo1480002",
                        "actionKey": "manageDisneyCTA",
                        "clickStream": "manage-disney-cta",
                        "sectionKey": "null"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/ui/acct/secure/productApps/pdp/spo1480002",
                        "actionKey": "learnMoreDisneyCTA",
                        "clickStream": "learnmore-disney-cta",
                        "sectionKey": "null"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/digital/nsa/secure/ui/products/producthub/manage/spo1480002_disneybundle",
                        "actionKey": "manageDisneyHuluEspnCTA",
                        "clickStream": "manage-disneybundle-cta",
                        "sectionKey": "null"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/ui/acct/secure/productApps/manage/spo1480004_discovery",
                        "actionKey": "manageDiscoveryCTA",
                        "clickStream": "manage-discovery-cta",
                        "sectionKey": "null"
                    },
                    {
                        "actionType": "function",
                        "actionValue": "this.onOpenedChange",
                        "actionKey": "closeModalCTA",
                        "clickStream": "close-applearcade-reenroll-cta"
                    },
                    {
                        "actionType": "function",
                        "actionValue": "this.props.actions.openModalSection(FiosMobileBillDiscountModal)",
                        "actionKey": "learnMoreFiosMobileBillCTA",
                        "clickStream": "learnmore-fiosmobilebill-cta"
                    },
                    {
                        "actionType": "function",
                        "actionValue": "this.props.actions.openModalSection(FiosServiceAvailableModalNonPremiumPlan)",
                        "actionKey": "learnMoreNoFiosServiceNonPremiumCTA",
                        "clickStream": "learnmore-nofios-service-nopremiumplan-cta"
                    },
                    {
                        "actionType": "function",
                        "actionValue": "this.props.actions.openModalSection(FiosServiceAvailableModalPremiumPlan)",
                        "actionKey": "learnMoreNoFiosServicePremiumCTA",
                        "clickStream": "learnmore-nofios-service-premiumplan-cta"
                    },
                    {
                        "actionType": "function",
                        "actionValue": "this.props.actions.openModalSection(FiosDiscountNotClaimedModal)",
                        "actionKey": "learnMoreFiosDiscountNotClaimedCTA",
                        "clickStream": "learnmore-fiosdiscount-notclaimed-cta"
                    },
                    {
                        "actionType": "function",
                        "actionValue": "this.props.actions.openModalSection(FiosBillDiscountModal)",
                        "actionKey": "learnMoreFiosBillDiscountCTA",
                        "clickStream": "learnmore-fiosbilldiscount-cta"
                    },
                    {
                        "actionType": "function",
                        "actionValue": "this.props.actions.openModalSection(FiosWelcomeUnlimitedPlanModal)",
                        "actionKey": "learnMoreFiosWelcomeUnlimitedPlanCTA",
                        "clickStream": "learnmore-fioswelcomeunlimitedplan-cta"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/ui/acct/secure/productApps/pdp/spo1480005_appleone_single",
                        "actionKey": "enrollAppleIndividual",
                        "clickStream": "enroll-apple-individual-cta"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/ui/acct/secure/productApps/pdp/spo1480005_appleone_family",
                        "actionKey": "enrollAppleFamily",
                        "clickStream": "enroll-apple-family-cta"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/ui/acct/secure/productApps/manage/spo1480005_appleone_family",
                        "actionKey": "upgradeAppleFamily",
                        "clickStream": "upgrade-apple-family-cta"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/ui/acct/secure/productApps/manage/spo1480005_appleone_single",
                        "actionKey": "manageAppleIndividual",
                        "clickStream": "manage-apple-individual-cta"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/ui/acct/secure/productApps/manage/spo1480005_appleone_family",
                        "actionKey": "manageAppleFamily",
                        "clickStream": "manage-apple-family-cta"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/ui/acct/secure/productApps/manage/spo1480005_appleone_single",
                        "actionKey": "downgradeAppleIndividual",
                        "clickStream": "downgrade-apple-individual-cta"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/ui/acct/secure/productApps",
                        "actionKey": "addOnsRedirect",
                        "clickStream": "add-ons"
                    }
                ],
                "contents": [
                    {
                        "contentIndex": "0",
                        "contentType": "SubTitleWrapper",
                        "items": [
                            {
                                "itemKey": "headerText",
                                "itemType": "Title",
                                "itemValue": "Plan features",
                                "itemAttributes": {
                                    "primitive": "h2",
                                    "size": "medium"
                                }
                            }
                        ]
                    },
                    {
                        "contentIndex": "1",
                        "contentType": "Accordion",
                        "items": [
                            {
                                "itemKey": "featureItems",
                                "itemType": "AccordionItems",
                                "dataKey": "planFeaturesList[this.props.planData.mdn]",
                                "itemAttributes": {
                                    "sectionType": "planFeaturesSection"
                                }
                            }
                        ]
                    }
                ],
                "data": {
                    "planFeaturesList": {
                        "5076065538": [
                            {
                                "productId": "10017",
                                "productName": "Unlimited 5G Nationwide / 4G LTE data (+15 GB of premium data)",
                                "description": "<p>Get access to unlimited 5G Nationwide / 4G LTE data, plus 15 GB of premium data per month. Only after exceeding 15 GB/mo/line, 600 Kbps per month.</p>\r\n",
                                "linkText": "",
                                "linkActionKey": "",
                                "perkType": "",
                                "makeLiveUsageCall": true,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "productGroupId": "",
                                "featureProductId": "",
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "10030",
                                "productName": "Unlimited talk & text",
                                "description": "<p>Talk and text as much (or as little) as you want on all capable devices.</p>\r\n",
                                "linkText": "",
                                "linkActionKey": "",
                                "perkType": "",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "productGroupId": "",
                                "featureProductId": "",
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            }
                        ],
                        "9137876442": [
                            {
                                "productId": "60057",
                                "productName": "Unlimited 5G nationwide data",
                                "description": "<p>Unlimited access to our next-generation 5G network with nationwide coverage. When combined with 5G Ultra Wideband, you’ll get our absolute best performance. Requires a 5G-capable device. Includes 480p video streaming. In times of congestion, your data may be temporarily slower than other traffic.</p>\r\n",
                                "linkText": "",
                                "linkActionKey": "",
                                "perkType": "",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "productGroupId": "",
                                "featureProductId": "",
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "10001",
                                "productName": "Unlimited 5G Nationwide / 4G LTE data",
                                "description": "<p>Unlimited data provides the high speeds and reliability you've come to expect, with no concerns about overages. In times of congestion, your data connection may be temporarily slower than other traffic.</p>\r\n",
                                "linkText": "",
                                "linkActionKey": "",
                                "perkType": "",
                                "makeLiveUsageCall": true,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "productGroupId": "",
                                "featureProductId": "",
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "10003",
                                "productName": "480p DVD-quality streaming",
                                "description": "<p>Video typically streams at 480p Standard Definition on smartphones.</p>\r\n",
                                "linkText": "",
                                "linkActionKey": "",
                                "perkType": "",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "productGroupId": "",
                                "featureProductId": "",
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "71000",
                                "productName": "5 GB premium mobile hotspot data, then unlimited lower-speed data",
                                "description": "5 GB premium mobile hotspot data, then unlimited lower-speed data",
                                "perkType": "INCLUDED",
                                "makeLiveUsageCall": true,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "shortDescription": "5 GB premium mobile hotspot data, then unlimited lower-speed data",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "60079",
                                "productName": "Apple Arcade",
                                "cost": "$4.99/mo value",
                                "description": "<p>Enjoy unlimited access to over 150 incredibly fun games across all your Apple devices, with no ads and no in-app purchases. After offer ends, Apple bills $4.99/mo plus tax. Cancel anytime.</p>\r\n<br><br>You have not enrolled in Apple Arcade yet. Enroll now to get 6 months on us.",
                                "linkText": "Manage",
                                "linkActionKey": "enrollAppleArcadeCTA",
                                "perkType": "PROMO",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": true,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "productGroupId": "spo1480005_apple",
                                "featureProductId": "1950",
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "shortDescription": "6 months on us, $4.99/mo after.",
                                "perksLinkText": "Learn more",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "60081",
                                "productName": "Google Play Pass",
                                "cost": "$4.99/mo value",
                                "description": "<p>Google Play Pass is your ticket to hundreds of awesome games and apps, completely free of ads and in-app purchases. Explore a curated collection with favorites like Stardew Valley and the Monument Valley series to award-winning indies like LIMBO and Dead Cells. $4.99/mo plus tax after offer ends. Cancel anytime.</p>\r\n<br><br>You have not enrolled in Google Play Pass yet. Enroll now to get 6 months on us",
                                "linkText": "Manage",
                                "linkActionKey": "enrollGooglePassCTA",
                                "perkType": "PROMO",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": true,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "productGroupId": "spo1480006_google",
                                "featureProductId": "1952",
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "shortDescription": "6 months on us, $4.99/mo after.",
                                "perksLinkText": "Learn more",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "10034",
                                "productName": "Apple Music",
                                "cost": "$10.99/mo value",
                                "description": "<p>&lt;p&gt;Listen to 70 million songs ad-free, or download your favorite tracks and play them offline for 6 months - on us. Then $10.99/mo + taxes after. Cancel anytime.&lt;/p&gt;</p>\n<br><br>You are not enrolled yet. Sign up now and start streaming for free.",
                                "linkText": "Manage",
                                "linkActionKey": "learnMore6MonthCTA",
                                "perkType": "PROMO",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": true,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "productGroupId": "mcs11011",
                                "featureProductId": "627957",
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "shortDescription": "6 months on us, $10.99/mo after.",
                                "perksLinkText": "Learn more",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "10002",
                                "productName": "Unlimited talk & text",
                                "description": "<p>Talk and text as much (or as little) as you want.</p>\r\n",
                                "linkText": "",
                                "linkActionKey": "",
                                "perkType": "",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "productGroupId": "",
                                "featureProductId": "",
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "10007",
                                "productName": "Mexico & Canada talk, text & data",
                                "description": "<p>4G World Device required. International data reduced to 2G speeds after 0.5 GB/day. If more than 50% of your talk, text or data usage in a 60-day period is in Canada or Mexico, use of services in those countries may be removed or limited.</p>\r\n",
                                "linkText": "",
                                "linkActionKey": "",
                                "perkType": "",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "productGroupId": "",
                                "featureProductId": "",
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "10005",
                                "productName": "Verizon Up rewards",
                                "cost": "New rewards every month.",
                                "description": "<p>Once you enroll in Verizon Up using the My Verizon App, you can earn rewards by simply paying your wireless bills and shopping at Verizon for your tech needs.</p>\r\n",
                                "linkText": "Learn more",
                                "linkActionKey": "learnMoreVerizonUpCTA",
                                "perkType": "",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "productGroupId": "",
                                "featureProductId": "",
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "shortDescription": "Not enrolled. Sign up on the My Verizon app.",
                                "perksLinkText": "Learn more",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "70001",
                                "productName": "Unlimited data",
                                "description": "Unlimited data",
                                "perkType": "INCLUDED",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "shortDescription": "Unlimited data",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "70006",
                                "productName": "5G Nationwide",
                                "description": "5G Nationwide",
                                "perkType": "INCLUDED",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "shortDescription": "5G Nationwide",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "70003",
                                "productName": "4G LTE",
                                "description": "4G LTE",
                                "perkType": "INCLUDED",
                                "makeLiveUsageCall": true,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "shortDescription": "4G LTE",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "60007",
                                "productName": "Unlimited talk & text",
                                "description": "<p>Talk and text as much (or as little) as you want.</p>\r\n",
                                "linkText": "",
                                "linkActionKey": "",
                                "perkType": "",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "productGroupId": "",
                                "featureProductId": "",
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "60027",
                                "productName": "480p DVD-quality streaming",
                                "description": "<p>Video typically streams at 480p Standard Definition on smartphones.</p>\r\n",
                                "linkText": "",
                                "linkActionKey": "",
                                "perkType": "",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "productGroupId": "",
                                "featureProductId": "",
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "60018",
                                "productName": "Disney+",
                                "cost": "$10.99/mo value",
                                "description": "<p>All the best stories from Disney, Pixar, Marvel, Star Wars, and National Geographic. One subscription can be shared with everyone on your account. Cancel anytime.</p>\r\n<br><br>You have not enrolled in Disney+ yet.",
                                "linkText": "Manage",
                                "linkActionKey": "learnMoreDisneyCTA",
                                "perkType": "PROMO",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": true,
                                "discoveryPlusNotEnrolled": false,
                                "productGroupId": "spo1480002",
                                "featureProductId": "1751",
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "shortDescription": "6 months on us, $10.99/mo after.",
                                "perksLinkText": "Learn more",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "60008",
                                "productName": "Mexico & Canada talk, text & data",
                                "description": "<p>Talk, text and use unlimited data when traveling in Mexico and Canada. Data speeds are reduced to 2G after 0.5 GB/day. Also includes Unlimited talk and text to Mexico and Canada when you are in the US.</p>\r\n",
                                "linkText": "",
                                "linkActionKey": "",
                                "perkType": "",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "productGroupId": "",
                                "featureProductId": "",
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "71066",
                                "productName": "Apple Music 6 months on us,Apple Arcade or Google Play Pass 6 months on us",
                                "description": "Apple Music 6 months on us,Apple Arcade or Google Play Pass 6 months on us",
                                "perkType": "INCLUDED",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "shortDescription": "Apple Music 6 months on us,Apple Arcade or Google Play Pass 6 months on us",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            }
                        ],
                        "9137874660": [
                            {
                                "productId": "60057",
                                "productName": "Unlimited 5G nationwide data",
                                "description": "<p>Unlimited access to our next-generation 5G network with nationwide coverage. When combined with 5G Ultra Wideband, you’ll get our absolute best performance. Requires a 5G-capable device. Includes 480p video streaming. In times of congestion, your data may be temporarily slower than other traffic.</p>\r\n",
                                "linkText": "",
                                "linkActionKey": "",
                                "perkType": "",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "productGroupId": "",
                                "featureProductId": "",
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "10001",
                                "productName": "Unlimited 5G Nationwide / 4G LTE data",
                                "description": "<p>Unlimited data provides the high speeds and reliability you've come to expect, with no concerns about overages. In times of congestion, your data connection may be temporarily slower than other traffic.</p>\r\n",
                                "linkText": "",
                                "linkActionKey": "",
                                "perkType": "",
                                "makeLiveUsageCall": true,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "productGroupId": "",
                                "featureProductId": "",
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "10003",
                                "productName": "480p DVD-quality streaming",
                                "description": "<p>Video typically streams at 480p Standard Definition on smartphones.</p>\r\n",
                                "linkText": "",
                                "linkActionKey": "",
                                "perkType": "",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "productGroupId": "",
                                "featureProductId": "",
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "71000",
                                "productName": "5 GB premium mobile hotspot data, then unlimited lower-speed data",
                                "description": "5 GB premium mobile hotspot data, then unlimited lower-speed data",
                                "perkType": "INCLUDED",
                                "makeLiveUsageCall": true,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "shortDescription": "5 GB premium mobile hotspot data, then unlimited lower-speed data",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "60079",
                                "productName": "Apple Arcade",
                                "cost": "$4.99/mo value",
                                "description": "<p>Enjoy unlimited access to over 150 incredibly fun games across all your Apple devices, with no ads and no in-app purchases. After offer ends, Apple bills $4.99/mo plus tax. Cancel anytime.</p>\r\n<br><br>You have not enrolled in Apple Arcade yet. Enroll now to get 6 months on us.",
                                "linkText": "Manage",
                                "linkActionKey": "enrollAppleArcadeCTA",
                                "perkType": "PROMO",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": true,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "productGroupId": "spo1480005_apple",
                                "featureProductId": "1950",
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "shortDescription": "6 months on us, $4.99/mo after.",
                                "perksLinkText": "Learn more",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "60081",
                                "productName": "Google Play Pass",
                                "cost": "$4.99/mo value",
                                "description": "<p>Google Play Pass is your ticket to hundreds of awesome games and apps, completely free of ads and in-app purchases. Explore a curated collection with favorites like Stardew Valley and the Monument Valley series to award-winning indies like LIMBO and Dead Cells. $4.99/mo plus tax after offer ends. Cancel anytime.</p>\r\n<br><br>You have not enrolled in Google Play Pass yet. Enroll now to get 6 months on us",
                                "linkText": "Manage",
                                "linkActionKey": "enrollGooglePassCTA",
                                "perkType": "PROMO",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": true,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "productGroupId": "spo1480006_google",
                                "featureProductId": "1952",
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "shortDescription": "6 months on us, $4.99/mo after.",
                                "perksLinkText": "Learn more",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "10034",
                                "productName": "Apple Music",
                                "cost": "$10.99/mo value",
                                "description": "<p>&lt;p&gt;Listen to 70 million songs ad-free, or download your favorite tracks and play them offline for 6 months - on us. Then $10.99/mo + taxes after. Cancel anytime.&lt;/p&gt;</p>\n<br><br>You are not enrolled yet. Sign up now and start streaming for free.",
                                "linkText": "Manage",
                                "linkActionKey": "learnMore6MonthCTA",
                                "perkType": "PROMO",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": true,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "productGroupId": "mcs11011",
                                "featureProductId": "627957",
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "shortDescription": "6 months on us, $10.99/mo after.",
                                "perksLinkText": "Learn more",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "10002",
                                "productName": "Unlimited talk & text",
                                "description": "<p>Talk and text as much (or as little) as you want.</p>\r\n",
                                "linkText": "",
                                "linkActionKey": "",
                                "perkType": "",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "productGroupId": "",
                                "featureProductId": "",
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "10007",
                                "productName": "Mexico & Canada talk, text & data",
                                "description": "<p>4G World Device required. International data reduced to 2G speeds after 0.5 GB/day. If more than 50% of your talk, text or data usage in a 60-day period is in Canada or Mexico, use of services in those countries may be removed or limited.</p>\r\n",
                                "linkText": "",
                                "linkActionKey": "",
                                "perkType": "",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "productGroupId": "",
                                "featureProductId": "",
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "10005",
                                "productName": "Verizon Up rewards",
                                "cost": "New rewards every month.",
                                "description": "<p>Once you enroll in Verizon Up using the My Verizon App, you can earn rewards by simply paying your wireless bills and shopping at Verizon for your tech needs.</p>\r\n",
                                "linkText": "Learn more",
                                "linkActionKey": "learnMoreVerizonUpCTA",
                                "perkType": "",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "productGroupId": "",
                                "featureProductId": "",
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "shortDescription": "Not enrolled. Sign up on the My Verizon app.",
                                "perksLinkText": "Learn more",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "70001",
                                "productName": "Unlimited data",
                                "description": "Unlimited data",
                                "perkType": "INCLUDED",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "shortDescription": "Unlimited data",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "70006",
                                "productName": "5G Nationwide",
                                "description": "5G Nationwide",
                                "perkType": "INCLUDED",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "shortDescription": "5G Nationwide",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "70003",
                                "productName": "4G LTE",
                                "description": "4G LTE",
                                "perkType": "INCLUDED",
                                "makeLiveUsageCall": true,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "shortDescription": "4G LTE",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "60007",
                                "productName": "Unlimited talk & text",
                                "description": "<p>Talk and text as much (or as little) as you want.</p>\r\n",
                                "linkText": "",
                                "linkActionKey": "",
                                "perkType": "",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "productGroupId": "",
                                "featureProductId": "",
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "60027",
                                "productName": "480p DVD-quality streaming",
                                "description": "<p>Video typically streams at 480p Standard Definition on smartphones.</p>\r\n",
                                "linkText": "",
                                "linkActionKey": "",
                                "perkType": "",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "productGroupId": "",
                                "featureProductId": "",
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "60018",
                                "productName": "Disney+",
                                "cost": "$10.99/mo value",
                                "description": "<p>All the best stories from Disney, Pixar, Marvel, Star Wars, and National Geographic. One subscription can be shared with everyone on your account. Cancel anytime.</p>\r\n<br><br>You have not enrolled in Disney+ yet.",
                                "linkText": "Manage",
                                "linkActionKey": "learnMoreDisneyCTA",
                                "perkType": "PROMO",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": true,
                                "discoveryPlusNotEnrolled": false,
                                "productGroupId": "spo1480002",
                                "featureProductId": "1751",
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "shortDescription": "6 months on us, $10.99/mo after.",
                                "perksLinkText": "Learn more",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "60008",
                                "productName": "Mexico & Canada talk, text & data",
                                "description": "<p>Talk, text and use unlimited data when traveling in Mexico and Canada. Data speeds are reduced to 2G after 0.5 GB/day. Also includes Unlimited talk and text to Mexico and Canada when you are in the US.</p>\r\n",
                                "linkText": "",
                                "linkActionKey": "",
                                "perkType": "",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "productGroupId": "",
                                "featureProductId": "",
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "71066",
                                "productName": "Apple Music 6 months on us,Apple Arcade or Google Play Pass 6 months on us",
                                "description": "Apple Music 6 months on us,Apple Arcade or Google Play Pass 6 months on us",
                                "perkType": "INCLUDED",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "shortDescription": "Apple Music 6 months on us,Apple Arcade or Google Play Pass 6 months on us",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            }
                        ],
                        "5073181008": [
                            {
                                "productId": "70025",
                                "productName": "5G Ultra Wideband",
                                "description": "5G Ultra Wideband",
                                "perkType": "INCLUDED",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "shortDescription": "5G Ultra Wideband",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "70026",
                                "productName": "Download speeds of 85 - 300 Mbps",
                                "description": "Download speeds of 85 - 300 Mbps",
                                "perkType": "INCLUDED",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "shortDescription": "Download speeds of 85 - 300 Mbps",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "70034",
                                "productName": "Wi-Fi 6 router included",
                                "description": "Wi-Fi 6 router included",
                                "perkType": "INCLUDED",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "shortDescription": "Wi-Fi 6 router included",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            }
                        ],
                        "5074158454": [
                            {
                                "productId": "70025",
                                "productName": "5G Ultra Wideband",
                                "description": "5G Ultra Wideband",
                                "perkType": "INCLUDED",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "shortDescription": "5G Ultra Wideband",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "70026",
                                "productName": "Download speeds of 85 - 300 Mbps",
                                "description": "Download speeds of 85 - 300 Mbps",
                                "perkType": "INCLUDED",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "shortDescription": "Download speeds of 85 - 300 Mbps",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "70034",
                                "productName": "Wi-Fi 6 router included",
                                "description": "Wi-Fi 6 router included",
                                "perkType": "INCLUDED",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "shortDescription": "Wi-Fi 6 router included",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            }
                        ],
                        "9137870154": [
                            {
                                "productId": "60057",
                                "productName": "Unlimited 5G nationwide data",
                                "description": "<p>Unlimited access to our next-generation 5G network with nationwide coverage. When combined with 5G Ultra Wideband, you’ll get our absolute best performance. Requires a 5G-capable device. Includes 480p video streaming. In times of congestion, your data may be temporarily slower than other traffic.</p>\r\n",
                                "linkText": "",
                                "linkActionKey": "",
                                "perkType": "",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "productGroupId": "",
                                "featureProductId": "",
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "10001",
                                "productName": "Unlimited 5G Nationwide / 4G LTE data",
                                "description": "<p>Unlimited data provides the high speeds and reliability you've come to expect, with no concerns about overages. In times of congestion, your data connection may be temporarily slower than other traffic.</p>\r\n",
                                "linkText": "",
                                "linkActionKey": "",
                                "perkType": "",
                                "makeLiveUsageCall": true,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "productGroupId": "",
                                "featureProductId": "",
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "10003",
                                "productName": "480p DVD-quality streaming",
                                "description": "<p>Video typically streams at 480p Standard Definition on smartphones.</p>\r\n",
                                "linkText": "",
                                "linkActionKey": "",
                                "perkType": "",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "productGroupId": "",
                                "featureProductId": "",
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "71000",
                                "productName": "5 GB premium mobile hotspot data, then unlimited lower-speed data",
                                "description": "5 GB premium mobile hotspot data, then unlimited lower-speed data",
                                "perkType": "INCLUDED",
                                "makeLiveUsageCall": true,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "shortDescription": "5 GB premium mobile hotspot data, then unlimited lower-speed data",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "60079",
                                "productName": "Apple Arcade",
                                "cost": "$4.99/mo value",
                                "description": "<p>Enjoy unlimited access to over 150 incredibly fun games across all your Apple devices, with no ads and no in-app purchases. After offer ends, Apple bills $4.99/mo plus tax. Cancel anytime.</p>\r\n<br><br>You have not enrolled in Apple Arcade yet. Enroll now to get 6 months on us.",
                                "linkText": "Manage",
                                "linkActionKey": "enrollAppleArcadeCTA",
                                "perkType": "PROMO",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": true,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "productGroupId": "spo1480005_apple",
                                "featureProductId": "1950",
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "shortDescription": "6 months on us, $4.99/mo after.",
                                "perksLinkText": "Learn more",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "60081",
                                "productName": "Google Play Pass",
                                "cost": "$4.99/mo value",
                                "description": "<p>Google Play Pass is your ticket to hundreds of awesome games and apps, completely free of ads and in-app purchases. Explore a curated collection with favorites like Stardew Valley and the Monument Valley series to award-winning indies like LIMBO and Dead Cells. $4.99/mo plus tax after offer ends. Cancel anytime.</p>\r\n<br><br>You have not enrolled in Google Play Pass yet. Enroll now to get 6 months on us",
                                "linkText": "Manage",
                                "linkActionKey": "enrollGooglePassCTA",
                                "perkType": "PROMO",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": true,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "productGroupId": "spo1480006_google",
                                "featureProductId": "1952",
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "shortDescription": "6 months on us, $4.99/mo after.",
                                "perksLinkText": "Learn more",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "10034",
                                "productName": "Apple Music",
                                "cost": "$10.99/mo value",
                                "description": "<p>&lt;p&gt;Listen to 70 million songs ad-free, or download your favorite tracks and play them offline for 6 months - on us. Then $10.99/mo + taxes after. Cancel anytime.&lt;/p&gt;</p>\n<br><br>You are not enrolled yet. Sign up now and start streaming for free.",
                                "linkText": "Manage",
                                "linkActionKey": "learnMore6MonthCTA",
                                "perkType": "PROMO",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": true,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "productGroupId": "mcs11011",
                                "featureProductId": "627957",
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "shortDescription": "6 months on us, $10.99/mo after.",
                                "perksLinkText": "Learn more",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "10002",
                                "productName": "Unlimited talk & text",
                                "description": "<p>Talk and text as much (or as little) as you want.</p>\r\n",
                                "linkText": "",
                                "linkActionKey": "",
                                "perkType": "",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "productGroupId": "",
                                "featureProductId": "",
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "10007",
                                "productName": "Mexico & Canada talk, text & data",
                                "description": "<p>4G World Device required. International data reduced to 2G speeds after 0.5 GB/day. If more than 50% of your talk, text or data usage in a 60-day period is in Canada or Mexico, use of services in those countries may be removed or limited.</p>\r\n",
                                "linkText": "",
                                "linkActionKey": "",
                                "perkType": "",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "productGroupId": "",
                                "featureProductId": "",
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "10005",
                                "productName": "Verizon Up rewards",
                                "cost": "New rewards every month.",
                                "description": "<p>Once you enroll in Verizon Up using the My Verizon App, you can earn rewards by simply paying your wireless bills and shopping at Verizon for your tech needs.</p>\r\n",
                                "linkText": "Learn more",
                                "linkActionKey": "learnMoreVerizonUpCTA",
                                "perkType": "",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "productGroupId": "",
                                "featureProductId": "",
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "shortDescription": "Not enrolled. Sign up on the My Verizon app.",
                                "perksLinkText": "Learn more",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "70001",
                                "productName": "Unlimited data",
                                "description": "Unlimited data",
                                "perkType": "INCLUDED",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "shortDescription": "Unlimited data",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "70006",
                                "productName": "5G Nationwide",
                                "description": "5G Nationwide",
                                "perkType": "INCLUDED",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "shortDescription": "5G Nationwide",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "70003",
                                "productName": "4G LTE",
                                "description": "4G LTE",
                                "perkType": "INCLUDED",
                                "makeLiveUsageCall": true,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "shortDescription": "4G LTE",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "60007",
                                "productName": "Unlimited talk & text",
                                "description": "<p>Talk and text as much (or as little) as you want.</p>\r\n",
                                "linkText": "",
                                "linkActionKey": "",
                                "perkType": "",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "productGroupId": "",
                                "featureProductId": "",
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "60027",
                                "productName": "480p DVD-quality streaming",
                                "description": "<p>Video typically streams at 480p Standard Definition on smartphones.</p>\r\n",
                                "linkText": "",
                                "linkActionKey": "",
                                "perkType": "",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "productGroupId": "",
                                "featureProductId": "",
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "60018",
                                "productName": "Disney+",
                                "cost": "$10.99/mo value",
                                "description": "<p>All the best stories from Disney, Pixar, Marvel, Star Wars, and National Geographic. One subscription can be shared with everyone on your account. Cancel anytime.</p>\r\n<br><br>You have not enrolled in Disney+ yet.",
                                "linkText": "Manage",
                                "linkActionKey": "learnMoreDisneyCTA",
                                "perkType": "PROMO",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": true,
                                "discoveryPlusNotEnrolled": false,
                                "productGroupId": "spo1480002",
                                "featureProductId": "1751",
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "shortDescription": "6 months on us, $10.99/mo after.",
                                "perksLinkText": "Learn more",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "60008",
                                "productName": "Mexico & Canada talk, text & data",
                                "description": "<p>Talk, text and use unlimited data when traveling in Mexico and Canada. Data speeds are reduced to 2G after 0.5 GB/day. Also includes Unlimited talk and text to Mexico and Canada when you are in the US.</p>\r\n",
                                "linkText": "",
                                "linkActionKey": "",
                                "perkType": "",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "productGroupId": "",
                                "featureProductId": "",
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "71066",
                                "productName": "Apple Music 6 months on us,Apple Arcade or Google Play Pass 6 months on us",
                                "description": "Apple Music 6 months on us,Apple Arcade or Google Play Pass 6 months on us",
                                "perkType": "INCLUDED",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "shortDescription": "Apple Music 6 months on us,Apple Arcade or Google Play Pass 6 months on us",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            }
                        ],
                        "9139450706": [
                            {
                                "productId": "60057",
                                "productName": "Unlimited 5G nationwide data",
                                "description": "<p>Unlimited access to our next-generation 5G network with nationwide coverage. When combined with 5G Ultra Wideband, you’ll get our absolute best performance. Requires a 5G-capable device. Includes 480p video streaming. In times of congestion, your data may be temporarily slower than other traffic.</p>\r\n",
                                "linkText": "",
                                "linkActionKey": "",
                                "perkType": "",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "productGroupId": "",
                                "featureProductId": "",
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "10001",
                                "productName": "Unlimited 5G Nationwide / 4G LTE data",
                                "description": "<p>Unlimited data provides the high speeds and reliability you've come to expect, with no concerns about overages. In times of congestion, your data connection may be temporarily slower than other traffic.</p>\r\n",
                                "linkText": "",
                                "linkActionKey": "",
                                "perkType": "",
                                "makeLiveUsageCall": true,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "productGroupId": "",
                                "featureProductId": "",
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "10003",
                                "productName": "480p DVD-quality streaming",
                                "description": "<p>Video typically streams at 480p Standard Definition on smartphones.</p>\r\n",
                                "linkText": "",
                                "linkActionKey": "",
                                "perkType": "",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "productGroupId": "",
                                "featureProductId": "",
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "71000",
                                "productName": "5 GB premium mobile hotspot data, then unlimited lower-speed data",
                                "description": "5 GB premium mobile hotspot data, then unlimited lower-speed data",
                                "perkType": "INCLUDED",
                                "makeLiveUsageCall": true,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "shortDescription": "5 GB premium mobile hotspot data, then unlimited lower-speed data",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "60079",
                                "productName": "Apple Arcade",
                                "cost": "$4.99/mo value",
                                "description": "<p>Enjoy unlimited access to over 150 incredibly fun games across all your Apple devices, with no ads and no in-app purchases. After offer ends, Apple bills $4.99/mo plus tax. Cancel anytime.</p>\r\n<br><br>You have not enrolled in Apple Arcade yet. Enroll now to get 6 months on us.",
                                "linkText": "Manage",
                                "linkActionKey": "enrollAppleArcadeCTA",
                                "perkType": "PROMO",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": true,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "productGroupId": "spo1480005_apple",
                                "featureProductId": "1950",
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "shortDescription": "6 months on us, $4.99/mo after.",
                                "perksLinkText": "Learn more",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "60081",
                                "productName": "Google Play Pass",
                                "cost": "$4.99/mo value",
                                "description": "<p>Google Play Pass is your ticket to hundreds of awesome games and apps, completely free of ads and in-app purchases. Explore a curated collection with favorites like Stardew Valley and the Monument Valley series to award-winning indies like LIMBO and Dead Cells. $4.99/mo plus tax after offer ends. Cancel anytime.</p>\r\n<br><br>You have not enrolled in Google Play Pass yet. Enroll now to get 6 months on us",
                                "linkText": "Manage",
                                "linkActionKey": "enrollGooglePassCTA",
                                "perkType": "PROMO",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": true,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "productGroupId": "spo1480006_google",
                                "featureProductId": "1952",
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "shortDescription": "6 months on us, $4.99/mo after.",
                                "perksLinkText": "Learn more",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "10034",
                                "productName": "Apple Music",
                                "cost": "$10.99/mo value",
                                "description": "<p>&lt;p&gt;Listen to 70 million songs ad-free, or download your favorite tracks and play them offline for 6 months - on us. Then $10.99/mo + taxes after. Cancel anytime.&lt;/p&gt;</p>\n<br><br>You are not enrolled yet. Sign up now and start streaming for free.",
                                "linkText": "Manage",
                                "linkActionKey": "learnMore6MonthCTA",
                                "perkType": "PROMO",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": true,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "productGroupId": "mcs11011",
                                "featureProductId": "627957",
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "shortDescription": "6 months on us, $10.99/mo after.",
                                "perksLinkText": "Learn more",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "10002",
                                "productName": "Unlimited talk & text",
                                "description": "<p>Talk and text as much (or as little) as you want.</p>\r\n",
                                "linkText": "",
                                "linkActionKey": "",
                                "perkType": "",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "productGroupId": "",
                                "featureProductId": "",
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "10007",
                                "productName": "Mexico & Canada talk, text & data",
                                "description": "<p>4G World Device required. International data reduced to 2G speeds after 0.5 GB/day. If more than 50% of your talk, text or data usage in a 60-day period is in Canada or Mexico, use of services in those countries may be removed or limited.</p>\r\n",
                                "linkText": "",
                                "linkActionKey": "",
                                "perkType": "",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "productGroupId": "",
                                "featureProductId": "",
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "10005",
                                "productName": "Verizon Up rewards",
                                "cost": "New rewards every month.",
                                "description": "<p>Once you enroll in Verizon Up using the My Verizon App, you can earn rewards by simply paying your wireless bills and shopping at Verizon for your tech needs.</p>\r\n",
                                "linkText": "Learn more",
                                "linkActionKey": "learnMoreVerizonUpCTA",
                                "perkType": "",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "productGroupId": "",
                                "featureProductId": "",
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "shortDescription": "Not enrolled. Sign up on the My Verizon app.",
                                "perksLinkText": "Learn more",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "70001",
                                "productName": "Unlimited data",
                                "description": "Unlimited data",
                                "perkType": "INCLUDED",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "shortDescription": "Unlimited data",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "70006",
                                "productName": "5G Nationwide",
                                "description": "5G Nationwide",
                                "perkType": "INCLUDED",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "shortDescription": "5G Nationwide",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "70003",
                                "productName": "4G LTE",
                                "description": "4G LTE",
                                "perkType": "INCLUDED",
                                "makeLiveUsageCall": true,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "shortDescription": "4G LTE",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "60007",
                                "productName": "Unlimited talk & text",
                                "description": "<p>Talk and text as much (or as little) as you want.</p>\r\n",
                                "linkText": "",
                                "linkActionKey": "",
                                "perkType": "",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "productGroupId": "",
                                "featureProductId": "",
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "60027",
                                "productName": "480p DVD-quality streaming",
                                "description": "<p>Video typically streams at 480p Standard Definition on smartphones.</p>\r\n",
                                "linkText": "",
                                "linkActionKey": "",
                                "perkType": "",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "productGroupId": "",
                                "featureProductId": "",
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "60018",
                                "productName": "Disney+",
                                "cost": "$10.99/mo value",
                                "description": "<p>All the best stories from Disney, Pixar, Marvel, Star Wars, and National Geographic. One subscription can be shared with everyone on your account. Cancel anytime.</p>\r\n<br><br>You have not enrolled in Disney+ yet.",
                                "linkText": "Manage",
                                "linkActionKey": "learnMoreDisneyCTA",
                                "perkType": "PROMO",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": true,
                                "discoveryPlusNotEnrolled": false,
                                "productGroupId": "spo1480002",
                                "featureProductId": "1751",
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "shortDescription": "6 months on us, $10.99/mo after.",
                                "perksLinkText": "Learn more",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "60008",
                                "productName": "Mexico & Canada talk, text & data",
                                "description": "<p>Talk, text and use unlimited data when traveling in Mexico and Canada. Data speeds are reduced to 2G after 0.5 GB/day. Also includes Unlimited talk and text to Mexico and Canada when you are in the US.</p>\r\n",
                                "linkText": "",
                                "linkActionKey": "",
                                "perkType": "",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "productGroupId": "",
                                "featureProductId": "",
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "productId": "71066",
                                "productName": "Apple Music 6 months on us,Apple Arcade or Google Play Pass 6 months on us",
                                "description": "Apple Music 6 months on us,Apple Arcade or Google Play Pass 6 months on us",
                                "perkType": "INCLUDED",
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "shortDescription": "Apple Music 6 months on us,Apple Arcade or Google Play Pass 6 months on us",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            },
                            {
                                "makeLiveUsageCall": false,
                                "discountedVZCloud": false,
                                "breakGenericLogic": false,
                                "disneyNotEnrolled": false,
                                "discoveryPlusNotEnrolled": false,
                                "databoostPurchasedCount": "",
                                "databoostPurchasedLimit": "",
                                "verizonCloud": false,
                                "dataBoostProduct": false,
                                "smartFamily": false
                            }
                        ]
                    }
                }
            },
            {
                "sectionIndex": "6",
                "sectionId": "vedLandingpage_LLP_planAddOnsSection",
                "sectionType": "planAddOnsSection",
                "sectionComponentId": "ManagePlan",
                "actions": [
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/ui/acct/secure/productApps/",
                        "actionKey": "exploreAddonsCTA",
                        "clickStream": "add and manage addons"
                    }
                ],
                "contents": [
                    {
                        "contentIndex": "0",
                        "contentType": "SubTitleWrapper",
                        "items": [
                            {
                                "itemKey": "headerText",
                                "itemType": "Title",
                                "itemValue": "Add-ons",
                                "itemAttributes": {
                                    "primitive": "h2",
                                    "size": "medium"
                                }
                            },
                            {
                                "itemKey": "addonsSubtext",
                                "itemType": "FeatureCopy",
                                "itemValue": "Manage additional services and features for this line<sup>1</sup>. Add-ons are not included in your plan cost.",
                                "itemAttributes": {
                                    "size": "large"
                                }
                            }
                        ]
                    },
                    {
                        "contentIndex": "0",
                        "contentType": "Body",
                        "items": [
                            {
                                "itemKey": "addonItems",
                                "itemType": "AddOnItems",
                                "dataKey": "productAddOnsList[this.props.planData.mdn]",
                                "itemAttributes": {
                                    "sectionType": "planAddOnsSection"
                                }
                            },
                            {
                                "itemKey": "addonLink",
                                "itemType": "AddOnLinkWrapper",
                                "itemValue": "Add and manage add-ons",
                                "itemAttributes": {},
                                "actionKey": "exploreAddonsCTA"
                            }
                        ]
                    }
                ],
                "data": {
                    "productAddOnsList": {
                        "##MDN##": [
                            {
                                "linkActionKey": "##LINK_ACTION_KEY##",
                                "cost": "##PRODUCT_COST##",
                                "productId": "##PRODUCT_ID##",
                                "description": "##PRODUCT_DESCRIPTION##",
                                "linkText": "##LINK_TEXT##",
                                "productName": "##PRODUCT_NAME##"
                            }
                        ]
                    }
                }
            },
            {
                "sectionIndex": "7",
                "sectionId": "vedLandingpage_LLP_planInternationalSection",
                "sectionType": "planInternationalSection",
                "sectionComponentId": "ManagePlan",
                "actions": [
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/ui/hub/secure/international#/",
                        "actionKey": "exploreInternationalCTA",
                        "clickStream": "international plans"
                    },
                    {
                        "actionType": "function",
                        "actionValue": "this.props.actions.openModalSection(addLineModal)",
                        "actionKey": "manageIntLongDistanceCTA",
                        "clickStream": "manage-long-distance-cta"
                    },
                    {
                        "actionType": "function",
                        "actionValue": "this.props.actions.openModalSection(TravelPassModal)",
                        "actionKey": "learnMoreTravelPassCTA",
                        "clickStream": "learnmore-travelpass-cta"
                    }
                ],
                "contents": [
                    {
                        "contentIndex": "0",
                        "contentType": "SubTitleWrapper",
                        "items": [
                            {
                                "itemKey": "headerText",
                                "itemType": "Title",
                                "itemValue": "International plans",
                                "itemAttributes": {
                                    "primitive": "h2",
                                    "size": "medium"
                                }
                            },
                            {
                                "itemKey": "intFeatureSubText",
                                "itemType": "FeatureCopy",
                                "itemValue": "Manage international plans added to your line. These are not included in your plan cost.",
                                "itemAttributes": {
                                    "size": "large"
                                }
                            }
                        ]
                    },
                    {
                        "contentIndex": "0",
                        "contentType": "Body",
                        "items": [
                            {
                                "itemKey": "intlItems",
                                "itemType": "AddOnItems",
                                "dataKey": "internationalFeaturesList[this.props.planData.mdn]",
                                "itemAttributes": {
                                    "sectionType": "planInternationalSection"
                                }
                            },
                            {
                                "itemKey": "intlLink",
                                "itemType": "AddOnLinkWrapper",
                                "itemValue": "International plans",
                                "itemAttributes": {},
                                "actionKey": "exploreInternationalCTA"
                            }
                        ]
                    }
                ],
                "data": {
                    "internationalFeaturesList": {
                        "##MDN##": [
                            {
                                "linkActionKey": "##LINK_ACTION_KEY##",
                                "cost": "##PRODUCT_COST##",
                                "productId": "##PRODUCT_ID##",
                                "description": "##PRODUCT_DESCRIPTION##",
                                "linkText": "##LINK_TEXT##",
                                "productName": "##PRODUCT_NAME##"
                            }
                        ]
                    }
                }
            },
            {
                "sectionIndex": "97",
                "sectionId": "vedLandingpage_LLP_AddLineSection",
                "sectionType": "addLineModal",
                "sectionComponentId": "addLineModalComp",
                "actions": [
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/devices/",
                        "actionKey": "aalNewDeviceCTA",
                        "clickStream": "add-a-line-get-new-device-cta"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/od/cust/auth/byod/bring-your-own-device#/smartimei/",
                        "actionKey": "aalBringDeviceCTA",
                        "clickStream": "add-a-line-bring-own-device-cta"
                    }
                ],
                "contents": [
                    {
                        "contentIndex": "0",
                        "contentType": "modalMain",
                        "items": [
                            {
                                "itemKey": "headerText",
                                "itemType": "text",
                                "itemValue": "Add a line",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "bodyHtml",
                                "itemType": "html",
                                "itemValue": "Add a new or existing device to your line.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "modalType",
                                "itemType": "text",
                                "itemValue": "addaline",
                                "itemAttributes": {}
                            }
                        ]
                    },
                    {
                        "contentIndex": "1",
                        "contentType": "modalCTA",
                        "items": [
                            {
                                "itemKey": "buttonCTA",
                                "itemType": "Button",
                                "itemValue": "Get a new device",
                                "itemAttributes": {
                                    "size": "large"
                                },
                                "actionKey": "aalNewDeviceCTA"
                            },
                            {
                                "itemKey": "buttonCTA",
                                "itemType": "Button",
                                "itemValue": "Bring your own device",
                                "itemAttributes": {
                                    "secondary": "true",
                                    "size": "large"
                                },
                                "actionKey": "aalBringDeviceCTA"
                            }
                        ]
                    }
                ],
                "data": {}
            },
            {
                "sectionIndex": "98",
                "sectionId": "vedLandingpage_LLP_editNicknameSection",
                "sectionType": "editNicknameModal",
                "sectionComponentId": "modalSectionComp",
                "actions": [
                    {
                        "actionType": "function",
                        "actionValue": "this.closeModal",
                        "actionKey": "changePlanCTA",
                        "clickStream": "change-plan-cta"
                    }
                ],
                "contents": [
                    {
                        "contentIndex": "0",
                        "contentType": "modalMain",
                        "items": [
                            {
                                "itemKey": "modalType",
                                "itemType": "text",
                                "itemValue": "nickname",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "headerText",
                                "itemType": "text",
                                "itemValue": "Edit nickname",
                                "itemAttributes": {}
                            }
                        ]
                    },
                    {
                        "contentIndex": "1",
                        "contentType": "modalCTA",
                        "items": [
                            {
                                "itemKey": "buttonCTA",
                                "itemType": "Button",
                                "itemValue": "Change plan",
                                "itemAttributes": {
                                    "size": "large"
                                },
                                "actionKey": "changePlanCTA"
                            }
                        ]
                    }
                ],
                "data": {}
            },
            {
                "sectionIndex": "99",
                "sectionId": "vedLandingpage_LLP_planRecommendationsSection",
                "sectionType": "planRecommendationsModal",
                "sectionComponentId": "modalSectionComp",
                "actions": [
                    {
                        "actionType": "function",
                        "actionValue": "this.closeModal",
                        "actionKey": "changePlanCTA",
                        "clickStream": "change-plan-cta"
                    }
                ],
                "contents": [
                    {
                        "contentIndex": "0",
                        "contentType": "modalMain",
                        "items": [
                            {
                                "itemKey": "modalType",
                                "itemType": "text",
                                "itemValue": "recommendations",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "headerText",
                                "itemType": "text",
                                "itemValue": "Plan recommendations",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "bodyHtml",
                                "itemType": "html",
                                "itemAttributes": {}
                            }
                        ]
                    },
                    {
                        "contentIndex": "1",
                        "contentType": "modalCTA",
                        "items": [
                            {
                                "itemKey": "buttonCTA",
                                "itemType": "Button",
                                "itemValue": "Pick plan",
                                "itemAttributes": {
                                    "size": "large"
                                },
                                "actionKey": "changePlanCTA"
                            }
                        ]
                    }
                ],
                "data": {},
                "dataUrl": "http://localhost:4200/ApiData/VED_PlanRecommendations.json"
            },
            {
                "sectionIndex": "97",
                "sectionId": "vedLandingpage_CancelTrialSection",
                "sectionType": "cancelTrialModal",
                "sectionComponentId": "cancelTrialModalComp",
                "actions": [
                    {
                        "actionType": "function",
                        "actionValue": "this.props.actions.closeModal",
                        "actionKey": "goBackCTA"
                    },
                    {
                        "actionType": "function",
                        "actionValue": "this.props.actions.cancelTrial",
                        "actionKey": "cancelTrialCTA",
                        "clickStream": "cancel-trial-confirm-cta"
                    }
                ],
                "contents": [
                    {
                        "contentIndex": "0",
                        "contentType": "modalMain",
                        "items": [
                            {
                                "itemKey": "modalType",
                                "itemType": "text",
                                "itemValue": "canceltrial",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "headerText",
                                "itemType": "text",
                                "itemValue": "End your ##PLAN_NAME## trial?",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "subText1",
                                "itemType": "text",
                                "itemValue": "If you end your trial now, you will not be able to re-enroll. If you proceed, you can enjoy Start Unlimited for the rest of today and we’ll return you to your previous plan tomorrow.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "subText2",
                                "itemType": "text",
                                "itemValue": "Here’s how ending your trial will change the following promotions.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "appleMusiqHeaderText",
                                "itemType": "text",
                                "itemValue": "Apple Music",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "appleMusiqSubText",
                                "itemType": "text",
                                "itemValue": "If you have enrolled in Apple Music, you will be charged $9.99/mo for access. You can unenroll from this subscription in your products & add-ons page after you cancel the trial.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "disneyHeaderText",
                                "itemType": "text",
                                "itemValue": "Disney+",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "disneySubText",
                                "itemType": "text",
                                "itemValue": "If you have enrolled in Disney+, you will be charged $6.99/mo for access. You can unenroll from this subscription in your products & add-ons page after you cancel the trial.",
                                "itemAttributes": {}
                            }
                        ]
                    },
                    {
                        "contentIndex": "1",
                        "contentType": "modalCTA",
                        "items": [
                            {
                                "itemKey": "buttonCTA",
                                "itemType": "Button",
                                "itemValue": "Go back",
                                "itemAttributes": {
                                    "secondary": "true",
                                    "size": "large"
                                },
                                "actionKey": "goBackCTA"
                            },
                            {
                                "itemKey": "buttonCTA",
                                "itemType": "Button",
                                "itemValue": "Cancel trial",
                                "itemAttributes": {
                                    "size": "large"
                                },
                                "actionKey": "cancelTrialCTA"
                            }
                        ]
                    }
                ],
                "data": {}
            },
            {
                "sectionIndex": "100",
                "sectionId": "vedlandingPageMM_LLP_SelectPlanSection",
                "sectionType": "selectPlanCTA",
                "sectionComponentId": "selectPlanCTAComp",
                "actions": [
                    {
                        "actionType": "http",
                        "actionValue": "https://vzwqa2.verizonwireless.com/digital/cpc/cpcLandingPage?route=legacy",
                        "actionKey": "modifyPlanPage",
                        "clickStream": "modify-plan-cta"
                    },
                    {
                        "actionType": "route",
                        "actionValue": "https://vzwqa2.verizonwireless.com/digital/cpc/cpcExploreMMPlan#/",
                        "actionKey": "explorePlanPage",
                        "clickStream": "explore-plan-cta"
                    },
                    {
                        "actionType": "route",
                        "actionValue": "/exploremmplan",
                        "actionKey": "exploreVerizonPlanPage",
                        "clickStream": "explore-verizon-plan-cta"
                    },
                    {
                        "actionType": "overlay",
                        "actionValue": "selectPlanlearnMoreModal",
                        "actionKey": "learnMoreModal",
                        "clickStream": "learn-more-cta"
                    },
                    {
                        "actionType": "route",
                        "actionValue": "#/exploremmplan",
                        "actionKey": "exploreModal",
                        "clickStream": "continue-explore-plan-cta"
                    }
                ],
                "contents": [
                    {
                        "contentIndex": "0",
                        "items": [
                            {
                                "itemKey": "headerText",
                                "itemType": "text",
                                "itemValue": "Which plan works for you?",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "subHeaderText",
                                "itemType": "text",
                                "itemValue": "Show me plans with Unlimited data.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "desc",
                                "itemType": "text",
                                "itemValue": "Whether you're casual or heavy streamer, or just enjoy the benefits of an unlimited plan, we've got you covered. Give everyone the plan they really want on America's best network. Want 5G network access? Explore Our Unlimited plan options.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "button",
                                "itemType": "button",
                                "itemValue": "Explore plans.",
                                "itemAttributes": {},
                                "actionKey": "exploreModal"
                            },
                            {
                                "itemKey": "descText1",
                                "itemType": "text",
                                "itemValue": "Get 5GB or 10GB for the whole account.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "subHeaderText1",
                                "itemType": "text",
                                "itemValue": "Don't need unlimited? <br>Share data with one plan.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "button1",
                                "itemType": "button",
                                "itemValue": "Explore The Verizon Plan.",
                                "itemAttributes": {},
                                "actionKey": "exploreVerizonPlanPage"
                            },
                            {
                                "itemKey": "descText2",
                                "itemType": "text",
                                "itemValue": "",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "subHeaderText2",
                                "itemType": "text",
                                "itemValue": "",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "button2",
                                "itemType": "button",
                                "itemValue": "Modify this plan.",
                                "itemAttributes": {},
                                "actionKey": "modifyPlanPage"
                            },
                            {
                                "itemKey": "descText3",
                                "itemType": "text",
                                "itemValue": "Switch to a size that fits you better",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "descText4",
                                "itemType": "text",
                                "itemValue": "Apple Music included, on us with select unlimited plans. Get it on iOS and Android",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "descText5",
                                "itemType": "link",
                                "itemValue": "Learn more",
                                "itemAttributes": {},
                                "actionKey": "learnMoreModal"
                            }
                        ]
                    }
                ],
                "data": {
                    "currentPlan": [
                        {
                            "planType": "LLP",
                            "planId": "18056",
                            "planSize": "Unlimited"
                        },
                        {
                            "planType": "LLP",
                            "planId": "17991",
                            "planSize": "Unlimited"
                        },
                        {
                            "planType": "LLP",
                            "planId": "67567",
                            "planSize": "Unlimited"
                        },
                        {
                            "planType": "LLP",
                            "planId": "67568",
                            "planSize": "Unlimited"
                        }
                    ]
                }
            },
            {
                "sectionIndex": "100",
                "sectionId": "vedlandingPageLegacy_LLP_SelectPlanSection",
                "sectionType": "selectPlanCTA",
                "sectionComponentId": "selectPlanCTAComp",
                "actions": [
                    {
                        "actionType": "route",
                        "actionValue": "##Modify_Plan_Page##",
                        "actionKey": "modifyPlanPage",
                        "clickStream": "modify-plan-cta"
                    },
                    {
                        "actionType": "overlay",
                        "actionValue": "exploreUnlimitedModal",
                        "actionKey": "exploreModal",
                        "sectionId": "landingPageLegacy_ExplorePlanSection",
                        "clickStream": "explore-unlimited-plan-cta"
                    },
                    {
                        "actionType": "route",
                        "actionValue": "##Explore_Verizon_Plan_Page##",
                        "actionKey": "exploreVerizonPlanPage",
                        "clickStream": "explore-verizon-plan-cta"
                    },
                    {
                        "actionType": "overlay",
                        "actionValue": "selectPlanlearnMoreModal",
                        "actionKey": "learnMoreModal",
                        "sectionId": "landingPageLegacy_SelectPlanLearnMoreSection",
                        "clickStream": "learn-more-cta"
                    }
                ],
                "contents": [
                    {
                        "contentIndex": "0",
                        "items": [
                            {
                                "itemKey": "headerText",
                                "itemType": "text",
                                "itemValue": "##TITLE##",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "subHeaderText",
                                "itemType": "text",
                                "itemValue": "##Option1_Header##",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "desc",
                                "itemType": "text",
                                "itemValue": "##Option1_Description##",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "button",
                                "itemType": "button",
                                "itemValue": "Explore plans",
                                "itemAttributes": {},
                                "actionKey": "exploreModal"
                            },
                            {
                                "itemKey": "descText1",
                                "itemType": "text",
                                "itemValue": "##Option2_Description##",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "subHeaderText1",
                                "itemType": "text",
                                "itemValue": "##Option2_Header##",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "button1",
                                "itemType": "button",
                                "itemValue": "Explore The Verizon Plan",
                                "itemAttributes": {},
                                "actionKey": "exploreVerizonPlanPage"
                            },
                            {
                                "itemKey": "descText2",
                                "itemType": "text",
                                "itemValue": "##Option3_Description##",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "subHeaderText2",
                                "itemType": "text",
                                "itemValue": "##Option3_Header##",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "button2",
                                "itemType": "button",
                                "itemValue": "Modify this plan",
                                "itemAttributes": {},
                                "actionKey": "modifyPlanPage"
                            },
                            {
                                "itemKey": "descText3",
                                "itemType": "text",
                                "itemValue": "Switch to a size that fits you better",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "descText4",
                                "itemType": "text",
                                "itemValue": "Apple Music included, on us with select unlimited plans. Get it on iOS and Android",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "descText5",
                                "itemType": "link",
                                "itemValue": "Learn more",
                                "itemAttributes": {},
                                "actionKey": "learnMoreModal"
                            }
                        ]
                    }
                ],
                "data": {
                    "currentPlan": [
                        {
                            "planType": "##PLAN_TYPE##",
                            "planName": "##PLAN_NAME##",
                            "planId": "##PLAN_ID##",
                            "planSize": ""
                        }
                    ]
                }
            },
            {
                "sectionIndex": "102",
                "sectionId": "vedlandingPage_SelectPlanLearnMoreSection",
                "sectionType": "selectPlanlearnMoreModal",
                "sectionComponentId": "selectPlanlearnMoreModalComp",
                "actions": [
                    {
                        "actionType": "http",
                        "actionValue": "/ui/acct/secure/appmusic#/",
                        "actionKey": "appleMusic1",
                        "clickStream": "apple-music-cta"
                    },
                    {
                        "actionType": "http",
                        "actionValue": "/ui/acct/secure/appmusic#/",
                        "actionKey": "appleMusic2",
                        "clickStream": "apple-music-cta"
                    },
                    {
                        "actionType": "http",
                        "actionKey": "gotLink",
                        "clickStream": "got-link-cta"
                    },
                    {
                        "actionType": "http",
                        "actionKey": "gotLink",
                        "clickStream": "got-link-cta"
                    },
                    {
                        "actionType": "overlay",
                        "actionValue": "gotComponent",
                        "actionKey": "got-link-cta"
                    }
                ],
                "contents": [
                    {
                        "contentIndex": "0",
                        "items": [
                            {
                                "itemKey": "headerText",
                                "itemType": "text",
                                "itemValue": "Enjoy Apple Music, on us.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "descText1",
                                "itemType": "text",
                                "itemValue": "Apple Music is now included on smartphone lines with Beyond Unlimited or Above Unlimited. Customers with smartphone lines on Go Unlimited or The Verizon Plan Unlimited get Apple Music free for 6 months, then $9.99/mo after. Taxes apply.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "descText2",
                                "itemType": "text",
                                "itemValue": "You must remain on a qualified Unlimited plan to retain your Apple Music offer. If you switch your plan from Beyond Unlimited or Above Unlimited to a non-qualifying plan and have activated Apple Music, your Apple Music subscription will be billed $9.99/mo.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "descText3",
                                "itemType": "text",
                                "itemValue": "New Mexico residents: Third-party charges are prohibited on your wireless bill, but you can upgrade to Beyond Unlimited or Above Unlimited plans and get Apple Music included.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "descText4",
                                "itemType": "text",
                                "itemValue": "If you're new to Apple Music, you'll need to create an Apple ID or link your existing Apple ID.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "descText5",
                                "itemType": "text",
                                "itemValue": "If you already subscribe to Apple Music, when you sign in to Apple Music with your Apple ID you'll be directed to cancel your duplicate Apple Music subscription. If you want to take advantage of your included subscription of Apple Music, cancel your current subscription through Apple Music via Settings. For Android users, navigate to Account Settings, Manage Membership and turn off Automatic Renewal . For iPhone users hit Cancel Subscription. Don't worry, all of your saved content and settings are linked to your Apple ID.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "descText6",
                                "itemType": "text",
                                "itemValue": "Once your subscription is activated, you can manage or cancel your subscription through vzw.com/applemusic or in the “Add-ons” section of the My Verizon app under “Account.”",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "subHeaderText",
                                "itemType": "text",
                                "itemValue": "Here's how you activate your Apple Music subscription:",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "descSubText1",
                                "itemType": "text",
                                "itemValue": "Visit vzw.com/applemusic on your desktop or mobile browser, or “Add-ons” in the My Verizon app under “Account.”",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "descSubText2",
                                "itemType": "text",
                                "itemValue": "Select the lines you want to enroll in Apple Music and accept the Terms and Conditions.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "descSubText3",
                                "itemType": "text",
                                "itemValue": "Select the lines you want to enroll in Apple Music and accept the Terms and Conditions.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "descSubText4",
                                "itemType": "text",
                                "itemValue": "Each line will get a text message with a link to download or open the Apple Music app",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "descSubText5",
                                "itemType": "text",
                                "itemValue": "Once your subscription is activated, you can manage or cancel your subscription through vzw.com/applemusic or in the “Add-ons” section of the My Verizon app under “Account.”",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "descSubText6",
                                "itemType": "text",
                                "itemValue": "Keep in mind that only Account Owners or Managers can activate Apple Music for any line on the account, so you'll need their help to activate Apple Music if you're an Account Member.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "appleMusicActionLink1",
                                "itemType": "link",
                                "itemValue": "Apple Music",
                                "itemAttributes": {},
                                "actionKey": "appleMusic1"
                            },
                            {
                                "itemKey": "appleMusicActionLink2",
                                "itemType": "link",
                                "itemValue": "Apple Music",
                                "itemAttributes": {},
                                "actionKey": "appleMusic2"
                            },
                            {
                                "itemKey": "actionLink",
                                "itemType": "link",
                                "itemValue": "Got it",
                                "itemAttributes": {},
                                "actionKey": "gotLink"
                            }
                        ]
                    }
                ],
                "data": {}
            },
            {
                "sectionIndex": "97",
                "sectionId": "vedLandingpage_editNicknameSuccessSection",
                "sectionType": "updateNickNameSuccessModal",
                "sectionComponentId": "updateNickNameSuccessModalComp",
                "actions": [
                    {
                        "actionType": "function",
                        "actionValue": "this.props.actions.closeModal",
                        "actionKey": "closeButtonCTA",
                        "clickStream": "close-update-nickname-success-cta"
                    }
                ],
                "contents": [
                    {
                        "contentIndex": "0",
                        "contentType": "modalMain",
                        "items": [
                            {
                                "itemKey": "headerText",
                                "itemType": "text",
                                "itemValue": "Edit nickname",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "bodyHtml",
                                "itemType": "html",
                                "itemValue": "Successfully updated nickname.",
                                "itemAttributes": {}
                            }
                        ]
                    },
                    {
                        "contentIndex": "1",
                        "contentType": "modalCTA",
                        "items": [
                            {
                                "itemKey": "buttonCTA",
                                "itemType": "Button",
                                "itemValue": "Close",
                                "itemAttributes": {
                                    "size": "large"
                                },
                                "actionKey": "closeButtonCTA"
                            }
                        ]
                    }
                ],
                "data": {}
            },
            {
                "sectionIndex": "97",
                "sectionId": "vedLandingpage_editNicknameFailureSection",
                "sectionType": "updateNickNameFailureModal",
                "sectionComponentId": "updateNickNameFailureModalComp",
                "actions": [
                    {
                        "actionType": "function",
                        "actionValue": "this.props.actions.closeModal",
                        "actionKey": "closeButtonCTA",
                        "clickStream": "close-update-nickname-failure-cta"
                    }
                ],
                "contents": [
                    {
                        "contentIndex": "0",
                        "contentType": "modalMain",
                        "items": [
                            {
                                "itemKey": "headerText",
                                "itemType": "text",
                                "itemValue": "Edit nickname",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "bodyHtml",
                                "itemType": "html",
                                "itemValue": "We encountered an error while processing your request. Please try again later.",
                                "itemAttributes": {}
                            }
                        ]
                    },
                    {
                        "contentIndex": "1",
                        "contentType": "modalCTA",
                        "items": [
                            {
                                "itemKey": "buttonCTA",
                                "itemType": "Button",
                                "itemValue": "Close",
                                "itemAttributes": {
                                    "size": "large"
                                },
                                "actionKey": "closeButtonCTA"
                            }
                        ]
                    }
                ],
                "data": {}
            },
            {
                "sectionIndex": "104",
                "sectionId": "landingPage_CancelOrderPage"
            },
            {
                "sectionIndex": "97",
                "sectionId": "vedLandingpage_LLP_CancelTrial_AddLineSection"
            },
            {
                "sectionIndex": "97",
                "sectionId": "vedLandingpage_LLP_CancelTrialFailureSection"
            },
            {
                "sectionIndex": "50",
                "sectionId": "vedLandingpage_FraudIndicatorSection",
                "sectionType": "fraudIndicatorSection",
                "sectionComponentId": "FraudIndicator",
                "contents": [
                    {
                        "contentIndex": "0",
                        "contentComponentId": "div",
                        "items": [
                            {
                                "itemKey": "fruadInd",
                                "itemType": "div",
                                "itemValue": "",
                                "itemAttributes": {}
                            }
                        ]
                    }
                ],
                "data": {}
            },
            {
                "sectionIndex": "52",
                "sectionId": "vedLandingSafetyModeErrorSection",
                "sectionType": "vedLandingSafetyModeErrorSection",
                "sectionComponentId": "vedLandingSafetyModeErrorSectionComp",
                "actions": [
                    {
                        "actionType": "function",
                        "actionValue": "this.props.actions.closeModal",
                        "actionKey": "closeButtonCTA",
                        "clickStream": "close-update-databoost-close-cta"
                    }
                ],
                "contents": [
                    {
                        "contentIndex": "0",
                        "items": [
                            {
                                "itemKey": "headerText",
                                "itemType": "text",
                                "itemValue": "Something went wrong",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "subHeaderText",
                                "itemType": "text",
                                "itemValue": "We aren't able to chnage your Safety mode setting right now. Please try again later.",
                                "itemAttributes": {}
                            }
                        ]
                    },
                    {
                        "contentIndex": "1",
                        "contentType": "modalCTA",
                        "items": [
                            {
                                "itemKey": "buttonCTA",
                                "itemType": "Button",
                                "itemValue": "Close",
                                "itemAttributes": {
                                    "size": "large"
                                },
                                "actionKey": "closeButtonCTA"
                            }
                        ]
                    }
                ],
                "data": {}
            },
            {
                "sectionIndex": "5",
                "sectionId": "vedLandingpage_LLP_planPerksSection",
                "sectionType": "planPerksSection",
                "sectionComponentId": "ManagePlan",
                "contents": [
                    {
                        "contentIndex": "0",
                        "contentType": "SubTitleWrapper",
                        "contentAttributes": {
                            "className": "pad-top-64"
                        },
                        "items": [
                            {
                                "itemKey": "headerText",
                                "itemType": "Title",
                                "itemValue": "Plan Perks",
                                "itemAttributes": {
                                    "primitive": "h2",
                                    "size": "medium"
                                }
                            }
                        ]
                    },
                    {
                        "contentIndex": "1",
                        "contentType": "Body",
                        "items": [
                            {
                                "itemKey": "perkItems",
                                "itemType": "PerkItems",
                                "itemAttributes": {
                                    "sectionType": "planFeaturesSection"
                                }
                            }
                        ]
                    }
                ],
                "data": {}
            },
            {
                "sectionIndex": "101",
                "sectionId": "vedLandingpage_ViewDiscountsSection",
                "sectionType": "viewDiscountsModal",
                "sectionComponentId": "viewDiscountsModalComp",
                "actions": [
                    {
                        "actionType": "function",
                        "actionValue": "this.props.actions.closeModal",
                        "actionKey": "goBackCTA",
                        "clickStream": "viewdiscounts-goback-cta"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/digital/nsa/secure/ui/bill/savingsCenter/#/ ",
                        "actionKey": "seeAllDiscountsCTA",
                        "clickStream": "see all discount details"
                    }
                ],
                "contents": [
                    {
                        "contentIndex": "0",
                        "contentType": "modalMain",
                        "items": [
                            {
                                "itemKey": "modalType",
                                "itemType": "text",
                                "itemValue": "viewDiscountDetails",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "headerText",
                                "itemType": "text",
                                "itemValue": "Plans Savings",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "subText1",
                                "itemType": "text",
                                "itemValue": "Bill cycle: Jun 10 - Jul 09",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "subText2",
                                "itemType": "text",
                                "itemValue": "You saved $70.00 with all your discounts.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "subText3",
                                "itemType": "text",
                                "itemValue": "Here are the discounts on your account.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "totalText",
                                "itemType": "text",
                                "itemValue": "Total",
                                "itemAttributes": {}
                            }
                        ]
                    },
                    {
                        "contentIndex": "0",
                        "contentType": "modalFooter",
                        "items": [
                            {
                                "itemKey": "primaryButonText",
                                "itemType": "text",
                                "itemValue": "Got it",
                                "itemAttributes": {},
                                "actionKey": "goBackCTA"
                            },
                            {
                                "itemKey": "seeAllDiscountsLink",
                                "itemType": "text",
                                "itemValue": "See all discount details",
                                "itemAttributes": {},
                                "actionKey": "seeAllDiscountsCTA"
                            }
                        ]
                    }
                ],
                "data": {
                    "discountDetails": {
                        "totalDiscountedCost": "-$70.00",
                        "accountLevelDiscounts": {
                            "headerText": "Shared",
                            "subText": "Account level",
                            "totalDiscounts": "-",
                            "discounts": [
                                {
                                    "discountName": "-",
                                    "discountedCost": "-"
                                }
                            ]
                        },
                        "lineLevelDiscounts": [
                            {
                                "headerText": "JAKE B JACOBS-5538",
                                "subText": "507.606.5538",
                                "totalDiscounts": "-",
                                "discounts": [
                                    {
                                        "discountName": "-",
                                        "discountedCost": "-"
                                    }
                                ]
                            },
                            {
                                "headerText": "LAUREN6442",
                                "subText": "913.787.6442",
                                "totalDiscounts": "-$5.00",
                                "discounts": [
                                    {
                                        "discountName": "APO",
                                        "discountedCost": "-$5.00"
                                    }
                                ]
                            },
                            {
                                "headerText": "JAKE B JACOBS-4660",
                                "subText": "913.787.4660",
                                "totalDiscounts": "-$5.00",
                                "discounts": [
                                    {
                                        "discountName": "APO",
                                        "discountedCost": "-$5.00"
                                    }
                                ]
                            },
                            {
                                "headerText": "JAKE B JACOBS-1008",
                                "subText": "507.318.1008",
                                "totalDiscounts": "-",
                                "discounts": [
                                    {
                                        "discountName": "$20 LOYALTY DISCOUNT",
                                        "discountedCost": "-$20.00"
                                    },
                                    {
                                        "discountName": "$10 AUTOPAY AND PAPER-FREE DISC",
                                        "discountedCost": "-$10.00"
                                    }
                                ]
                            },
                            {
                                "headerText": "JAKE B JACOBS-8454",
                                "subText": "507.415.8454",
                                "totalDiscounts": "-",
                                "discounts": [
                                    {
                                        "discountName": "$10 LOYALTY DISCOUNT",
                                        "discountedCost": "-$10.00"
                                    },
                                    {
                                        "discountName": "$10 AUTOPAY AND PAPER-FREE DISC",
                                        "discountedCost": "-$10.00"
                                    }
                                ]
                            },
                            {
                                "headerText": "JAKE B JACOBS-0154",
                                "subText": "913.787.0154",
                                "totalDiscounts": "-$5.00",
                                "discounts": [
                                    {
                                        "discountName": "APO",
                                        "discountedCost": "-$5.00"
                                    }
                                ]
                            },
                            {
                                "headerText": "JAKE B JACOBS-0706",
                                "subText": "913.945.0706",
                                "totalDiscounts": "-$5.00",
                                "discounts": [
                                    {
                                        "discountName": "APO",
                                        "discountedCost": "-$5.00"
                                    }
                                ]
                            }
                        ]
                    }
                }
            },
            {
                "sectionIndex": "110",
                "sectionId": "vedLandingPage_CommonSection",
                "sectionType": "vedLandingPageCommonSection",
                "sectionComponentId": "vedLandingPageCommonComp",
                "actions": [
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/digital/nsa/secure/ui/myusage/?intcmp=vzwdom#/",
                        "actionKey": "usageAndSettingsCTA",
                        "clickStream": "usage-and-settings-cta"
                    },
                    {
                        "actionType": "route",
                        "actionValue": "/manageplan/features",
                        "actionKey": "learnMoreStreamingCTA",
                        "clickStream": "learnmore-hd-streaming-cta"
                    },
                    {
                        "actionType": "route",
                        "actionValue": "/manageplan/features",
                        "actionKey": "learnMoreSafetyModeCTA",
                        "clickStream": "learnmore-safetymode-cta"
                    },
                    {
                        "actionType": "route",
                        "actionKey": "nickNameSaveCTA",
                        "clickStream": "save-nickname-cta"
                    },
                    {
                        "actionType": "route",
                        "actionKey": "nickNameCancelCTA",
                        "clickStream": "cancel-nickname-cta"
                    },
                    {
                        "actionType": "modal",
                        "actionValue": "addMobileLineModal",
                        "actionKey": "addMobileLineButtonCTA",
                        "clickStream": "add-mobile-line-cta"
                    },
                    {
                        "actionType": "modal",
                        "actionValue": "addHomeInternetModal",
                        "actionKey": "addHomeInternetButtonCTA",
                        "clickStream": "add-home-internet-cta"
                    },
                    {
                        "actionType": "modal",
                        "actionValue": "addHomeInternetModal",
                        "actionKey": "addHomeInternetButtonCTA",
                        "clickStream": "add-home-internet-cta"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "/exploremmplan",
                        "actionKey": "changeYourPlanCTA",
                        "clickStream": "change-your-plan-cta"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/ui/acct/secure/productApps/manage/spo1480003",
                        "actionKey": "manageStreamingCTA",
                        "clickStream": "manage-hd-streaming-cta"
                    }
                ],
                "contents": [
                    {
                        "contentIndex": "0",
                        "contentType": "commonContents",
                        "items": [
                            {
                                "itemKey": "perkItemsHeader",
                                "itemType": "text",
                                "itemValue": "Plan perks",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "rewardsHeader",
                                "itemType": "text",
                                "itemValue": "Verizon Up rewards",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "usageSettingsHeader",
                                "itemType": "text",
                                "itemValue": "Usage & settings",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "usageSettingButton",
                                "itemType": "text",
                                "itemValue": "See usage details",
                                "itemAttributes": {},
                                "actionKey": "usageAndSettingsCTA"
                            },
                            {
                                "itemKey": "learnMoreStreaming",
                                "itemType": "text",
                                "itemValue": "Learn more",
                                "itemAttributes": {},
                                "actionKey": "learnMoreStreamingCTA"
                            },
                            {
                                "itemKey": "learnMoreSafetyMode",
                                "itemType": "text",
                                "itemValue": "Learn more",
                                "itemAttributes": {},
                                "actionKey": "learnMoreSafetyModeCTA"
                            },
                            {
                                "itemKey": "nickNameModalHeader",
                                "itemType": "text",
                                "itemValue": "Make it easy to identify and manage the lines on your account.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "nickNameModalField",
                                "itemType": "text",
                                "itemValue": "Device nickname",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "nickNameModalDesc",
                                "itemType": "text",
                                "itemValue": "Enter a new nickname for this device that's different from other nicknames on your account.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "nickNameModalGuildLine",
                                "itemType": "text",
                                "itemValue": "Device nickname guidelines",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "nickNameModallist",
                                "itemType": "list",
                                "itemValue": "guidelinesList",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "nickNameSaveButton",
                                "itemType": "text",
                                "itemValue": "Save",
                                "itemAttributes": {},
                                "actionKey": "nickNameSaveCTA"
                            },
                            {
                                "itemKey": "nickNameCancelButton",
                                "itemType": "text",
                                "itemValue": "Cancel",
                                "itemAttributes": {},
                                "actionKey": "nickNameCancelCTA"
                            },
                            {
                                "itemKey": "perkItemsSubheader1",
                                "itemType": "text",
                                "itemValue": "You're eligible to enroll in these perks and promotions.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "perkItemsSubheader2",
                                "itemType": "text",
                                "itemValue": "These are perks you're currently enrolled in.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "perkItemsSubheader3",
                                "itemType": "text",
                                "itemValue": "These promotional offers have already been used. You're currently paying for one or more as add-ons to your plan.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "perkItemsSubText1",
                                "itemType": "html",
                                "itemValue": "Available <b>(##AVAILABLE_COUNT##)</b>",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "perkItemsSubText2",
                                "itemType": "html",
                                "itemValue": "Included on us <b>(##INCLUDED_COUNT##)</b>",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "perkItemsSubText3",
                                "itemType": "html",
                                "itemValue": "Promotions for you <b>(##PROMOTIONS_COUNT##)</b>",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "perkItemsSubText4",
                                "itemType": "html",
                                "itemValue": "Active <b>(##ACTIVE_COUNT##)</b>",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "perkItemsSubText5",
                                "itemType": "html",
                                "itemValue": "Expired promotions <b>(##EXPIRED_COUNT##)</b>",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "perkItemsSubheader4",
                                "itemType": "text",
                                "itemValue": "Manage your plan benefits and promotions.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "additionalServices",
                                "itemType": "text",
                                "itemValue": "Additional services",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "addMobileLineButton",
                                "itemType": "text",
                                "itemValue": "Add a mobile line",
                                "itemAttributes": {},
                                "actionKey": "addMobileLineButtonCTA"
                            },
                            {
                                "itemKey": "addHomeInternetButton",
                                "itemType": "text",
                                "itemValue": "Add home internet",
                                "itemAttributes": {},
                                "actionKey": "addHomeInternetButtonCTA"
                            },
                            {
                                "itemKey": "MPGheaderText",
                                "itemType": "text",
                                "itemValue": "Explore other plans",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "changePlanButton",
                                "itemType": "text",
                                "itemValue": "See all plans",
                                "itemAttributes": {},
                                "actionKey": "changeYourPlanCTA"
                            },
                            {
                                "itemKey": "planDetailsHeader",
                                "itemType": "text",
                                "itemValue": "Learn more about your plan.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "planVideoText",
                                "itemType": "text",
                                "itemValue": "Plan video",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "manageStreaming",
                                "itemType": "text",
                                "itemValue": "Manage",
                                "itemAttributes": {},
                                "actionKey": "manageStreamingCTA"
                            },
                            {
                                "itemKey": "noUsageText",
                                "itemType": "text",
                                "itemValue": "No data usage available at this time.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "linePortedOutMsg",
                                "itemType": "text",
                                "itemValue": "No data usage available due to your line's pending deactivation.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "saveNewOffersText",
                                "itemType": "text",
                                "itemValue": "Save with our best new device offers.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "discountText",
                                "itemType": "text",
                                "itemValue": "Up to 50% off.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "getStartedText",
                                "itemType": "text",
                                "itemValue": "Get started",
                                "itemAttributes": {}
                            }
                        ]
                    }
                ],
                "data": {
                    "guidelinesList": [
                        "Cannot be over 25 characters",
                        "Cannot contain > or < or / or - symbols",
                        "Must be different from other nicknames on your account"
                    ],
                    "mixAndMatch45Plans": []
                }
            },
            {
                "sectionIndex": "97",
                "sectionId": "vedLandingpage_FiveGLearnMoreOverLay",
                "sectionType": "FiveGLearnMoreOverLay",
                "sectionComponentId": "FiveGLearnMoreOverLayComp",
                "actions": [
                    {
                        "actionType": "function",
                        "actionValue": "this.openLQModal",
                        "actionKey": "checkavailability",
                        "clickStream": "checkavailability -cta"
                    },
                    {
                        "actionType": "function",
                        "actionValue": "this.props.actions.closeModal",
                        "actionKey": "closeLearnMoreModal",
                        "clickStream": "close -cta"
                    }
                ],
                "contents": [
                    {
                        "contentIndex": "0",
                        "contentType": "modalMain",
                        "items": [
                            {
                                "itemKey": "headerText",
                                "itemType": "text",
                                "itemValue": "Up to 50% off Verizon 5G Home or LTE Home Internet",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "bodyHtml",
                                "itemType": "html",
                                "itemValue": "Get up to 50% off your Verizon 5G Home or LTE Home Internet plan where service is available (as low as $25/mo with AutoPay).",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "modalType",
                                "itemType": "text",
                                "itemValue": "FiveGLearnMore",
                                "itemAttributes": {}
                            }
                        ]
                    },
                    {
                        "contentIndex": "1",
                        "contentType": "modalCTA",
                        "items": [
                            {
                                "itemKey": "buttonCTA",
                                "itemType": "Button",
                                "itemValue": "Check availability ",
                                "itemAttributes": {
                                    "size": "large",
                                    "id": "checkLq"
                                },
                                "actionKey": "checkavailability"
                            },
                            {
                                "itemKey": "gotItCTA",
                                "itemType": "Button",
                                "itemValue": "Got it",
                                "itemAttributes": {
                                    "secondary": "true",
                                    "size": "large"
                                },
                                "actionKey": "closeLearnMoreModal"
                            }
                        ]
                    }
                ],
                "data": {}
            },
            {
                "sectionIndex": "120",
                "sectionId": "vedLandingpage_TravelPassModal",
                "sectionType": "TravelPassModal",
                "sectionComponentId": "TravelPassModalComp",
                "actions": [
                    {
                        "actionType": "function",
                        "actionValue": "this.props.actions.closeModal",
                        "actionKey": "closeModalCTA",
                        "clickStream": "close-travelpass-cta"
                    },
                    {
                        "actionType": "newtab",
                        "actionValue": "https://vzwqa2.verizonwireless.com/digital/nsa/secure/ui/vzup/#/travelpass",
                        "actionKey": "viewTravelPass",
                        "clickStream": "view-travelpass-cta"
                    }
                ],
                "contents": [
                    {
                        "contentIndex": "0",
                        "contentType": "modalMain",
                        "items": [
                            {
                                "itemKey": "modalType",
                                "itemType": "text",
                                "itemValue": "travelPass",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "headerText",
                                "itemType": "text",
                                "itemValue": "TravelPass",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "nickNameText",
                                "itemType": "text",
                                "itemValue": "##NICK_NAME##",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "mdnText",
                                "itemType": "text",
                                "itemValue": "##MDN##",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "daysLeftText",
                                "itemType": "text",
                                "itemValue": "Days included on us: ##DAYS_INCLUDED##",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "subText",
                                "itemType": "html",
                                "itemValue": "<p>Your current plan gives you 1 TravelPass day per month on us. Each TravelPass day expires one year after its date of issue if you don’t use it. No activation required for these TravelPass days as long as international service is not blocked on this line.</p>",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "blackBoxTitle",
                                "itemType": "text",
                                "itemValue": "Your TravelPass Bank",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "blackBoxDescription",
                                "itemType": "html",
                                "itemValue": "Send a text to your smartphone with a link to open or download the app. Enrollment in Verizon Up required.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "viewTravelPassBank",
                                "itemType": "html",
                                "itemValue": "View your TravelPass bank&nbsp;&gt;",
                                "itemAttributes": {},
                                "actionKey": "viewTravelPass"
                            },
                            {
                                "itemKey": "learnMoreLink",
                                "itemType": "html",
                                "itemValue": "https://www.verizon.com/plans/international/international-travel/travel-pass/",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "faqHeader1",
                                "itemType": "text",
                                "itemValue": "What is TravelPass?",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "faqText1",
                                "itemType": "html",
                                "itemValue": "<p>TravelPass lets you use your unlimited domestic talk, text and data for 24 hours in more than 210 countries and destinations. After your first 2GB of high speed data, you'll get unlimited 3G data.</p><br>If you have any TravelPass days on us they will be used first when you travel. After that you will only be charged on days you make or receive a call, send a text or use data in a TravelPass country.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "faqHeader2",
                                "itemType": "text",
                                "itemValue": "How can I obtain TravelPass days?",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "faqText2",
                                "itemType": "html",
                                "itemValue": "<ul><li>Earn 1 TravelPass day per month with Do More and Get More Unlimited Plans </li><li>Receive 2 transferable TravelPass days per calendar year as a Verizon Visa Card holder </li></ul>",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "learnMoreText",
                                "itemType": "text",
                                "itemValue": "Learn more",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "sendButton",
                                "itemType": "text",
                                "itemValue": "Send",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "resendButton",
                                "itemType": "text",
                                "itemValue": "Resend link",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "success",
                                "itemType": "text",
                                "itemValue": "Success!",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "successText",
                                "itemType": "text",
                                "itemValue": "A text message was sent to  ##NICK_NAME## - ##MDN##.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "failure",
                                "itemType": "text",
                                "itemValue": "Text message not sent.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "failureText",
                                "itemType": "text",
                                "itemValue": "Unfortunately, the link couldn't be sent. Please try again in a few minutes.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "subscriptionInfo",
                                "itemType": "html",
                                "itemValue": "<p>Your current plan gives you 3 TravelPass day per month on us. Each TravelPass day expires one year after its date of issue if you don’t use it. No activation required for these TravelPass days as long as international service is not blocked on this line.</p>",
                                "itemAttributes": {}
                            }
                        ]
                    },
                    {
                        "contentIndex": "1",
                        "contentType": "modalCTA",
                        "items": [
                            {
                                "itemKey": "closeCTA",
                                "itemType": "Button",
                                "itemValue": "Close",
                                "itemAttributes": {
                                    "size": "large"
                                },
                                "actionKey": "closeModalCTA"
                            }
                        ]
                    }
                ],
                "data": {}
            },
            {
                "sectionIndex": "97",
                "sectionId": "vedLandingpage_FiveGLearnMoreOverLayFIOS",
                "sectionType": "FiveGLearnMoreOverLayFIOS",
                "sectionComponentId": "FiveGLearnMoreOverLayFIOSComp",
                "actions": [
                    {
                        "actionType": "function",
                        "actionValue": "this.openLQModal",
                        "actionKey": "checkavailability",
                        "clickStream": "checkavailability -cta"
                    },
                    {
                        "actionType": "function",
                        "actionValue": "this.props.actions.closeModal",
                        "actionKey": "closeLearnMoreModal",
                        "clickStream": "close -cta"
                    }
                ],
                "contents": [
                    {
                        "contentIndex": "0",
                        "contentType": "modalMain",
                        "items": [
                            {
                                "itemKey": "headerText",
                                "itemType": "text",
                                "itemValue": "Up to 50% off Verizon Home Internet",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "bodyHtml",
                                "itemType": "html",
                                "itemValue": "Get up to 50% off your Verizon Fios internet, 5G Home or LTE Home internet plan where service is available  (as low as $25/mo with AutoPay).",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "modalType",
                                "itemType": "text",
                                "itemValue": "FiveGLearnMore",
                                "itemAttributes": {}
                            }
                        ]
                    },
                    {
                        "contentIndex": "1",
                        "contentType": "modalCTA",
                        "items": [
                            {
                                "itemKey": "buttonCTA",
                                "itemType": "Button",
                                "itemValue": "Check availability ",
                                "itemAttributes": {
                                    "size": "large",
                                    "id": "checkLq"
                                },
                                "actionKey": "checkavailability"
                            },
                            {
                                "itemKey": "gotItCTA",
                                "itemType": "Button",
                                "itemValue": "Got it",
                                "itemAttributes": {
                                    "secondary": "true",
                                    "size": "large"
                                },
                                "actionKey": "closeLearnMoreModal"
                            }
                        ]
                    }
                ],
                "data": {}
            },
            {
                "sectionIndex": "97",
                "sectionId": "vedLandingpage_LLP_AddMobileLineSection",
                "sectionType": "addMobileLineModal",
                "sectionComponentId": "addMobileLineModalComp",
                "actions": [
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/devices/",
                        "actionKey": "aalNewDeviceCTA",
                        "clickStream": "add-a-line-get-new-device-cta"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/od/cust/auth/byod/bring-your-own-device#/smartimei/",
                        "actionKey": "aalBringDeviceCTA",
                        "clickStream": "add-a-line-bring-own-device-cta"
                    }
                ],
                "contents": [
                    {
                        "contentIndex": "0",
                        "contentType": "addMobileLineContent",
                        "items": [
                            {
                                "itemKey": "headerText",
                                "itemType": "text",
                                "itemValue": "Add a new mobile line.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "descText",
                                "itemType": "text",
                                "itemValue": "Connect smartphones,smartwatches,tablets and more devices to a new mobile line",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "getNewDeviceButton",
                                "itemType": "Button",
                                "itemValue": "Get a new device",
                                "itemAttributes": {},
                                "actionKey": "aalNewDeviceCTA"
                            },
                            {
                                "itemKey": "bringYourOwnDeviceButton",
                                "itemType": "Button",
                                "itemValue": "Bring your own device",
                                "itemAttributes": {},
                                "actionKey": "aalBringDeviceCTA"
                            }
                        ]
                    }
                ],
                "data": {}
            },
            {
                "sectionIndex": "97",
                "sectionId": "vedLandingpage_LLP_AddHomeInternetSection",
                "sectionType": "addHomeInternetModal",
                "sectionComponentId": "addHomeInternetModalComp",
                "actions": [
                    {
                        "actionType": "function",
                        "actionValue": "this.openLQModal",
                        "actionKey": "checkAvailabilityCTA",
                        "clickStream": "check-availability-cta"
                    }
                ],
                "contents": [
                    {
                        "contentIndex": "0",
                        "contentType": "addHomeInternetContent",
                        "items": [
                            {
                                "itemKey": "headerText",
                                "itemType": "text",
                                "itemValue": "Add home internet",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "descText",
                                "itemType": "text",
                                "itemValue": "Find what home internet service is available at your address.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "checkAvailabilityButton",
                                "itemType": "button",
                                "itemValue": "Check availability",
                                "itemAttributes": {
                                    "size": "large",
                                    "id": "checkLq"
                                },
                                "actionKey": "checkAvailabilityCTA"
                            }
                        ]
                    }
                ],
                "data": {}
            },
            {
                "sectionIndex": "109",
                "sectionId": "vedLandingpage_LLP_PromoBannerSection",
                "sectionType": "promoBanner",
                "sectionComponentId": "promoBannerComp",
                "actions": [
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/ui/acct/secure/productApps/manage/spo1480004_discovery",
                        "actionKey": "manageDiscoveryCTA",
                        "clickStream": "manage-discovery-cta"
                    }
                ],
                "contents": [
                    {
                        "contentIndex": "0",
                        "contentType": "discoveryPlusAlertBanner",
                        "items": [
                            {
                                "itemKey": "headerText",
                                "itemType": "text",
                                "itemValue": "Your account is currently enrolled in ##PROMOTERM## months of discovery+, on us.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "descText",
                                "itemType": "text",
                                "itemValue": "Promotion ends ##EXPIRYDATE##, $6.99/mo after that.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "manageDiscoveryPlusButton",
                                "itemType": "Button",
                                "itemValue": "Manage discovery+",
                                "itemAttributes": {},
                                "actionKey": "manageDiscoveryCTA"
                            }
                        ]
                    }
                ],
                "data": {}
            },
            {
                "sectionIndex": "109",
                "sectionId": "vedLandingpage_PlanNotifications",
                "sectionType": "planNotifications",
                "sectionComponentId": "planNotificationComp",
                "actions": [
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/ui/acct/secure/productApps/manage/spo1480005_apple",
                        "actionKey": "manageAppleArcadeCTA",
                        "clickStream": "manage-cta"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/digital/nsa/secure/ui/payment/settings/#/",
                        "actionKey": "autopayNotEnrolledCTA",
                        "clickStream": "learn-more-autopay-cta"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/digital/nsa/secure/ui/payment/settings/#/",
                        "actionKey": "apoIncorrectPayCTA",
                        "clickStream": "manage-autopay-cta"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://www.verizon.com/home/fios-fastest-internet/",
                        "actionKey": "shopFiosCTA",
                        "clickStream": "shop-fios-cta"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/ui/acct/secure/productApps/pdp/spo1480005_appleone_single",
                        "actionKey": "actAppleIndividualCTA",
                        "clickStream": "get-started-cta"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/ui/acct/secure/productApps/pdp/spo1480005_appleone_family",
                        "actionKey": "actAppleOneFamCTA",
                        "clickStream": "get-started-cta"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/ui/acct/secure/productApps/pdp/spo1480005_appleone_family",
                        "actionKey": "upgradeAppleOneFamCTA",
                        "clickStream": "get-started-cta"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/5g/home",
                        "actionKey": "shop5GHomeCTA",
                        "clickStream": "shop-5ghome-cta"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/digital/cpc/ildDestinationSelection#/",
                        "actionKey": "globalchoiceCTA",
                        "clickStream": "learn-more-cta"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/discounts/",
                        "actionKey": "twssdiscountCTA",
                        "clickStream": "Explore discounts"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/smartphones/?special-offers=tradein_promo",
                        "actionKey": "shopPhonesCTA",
                        "clickStream": "pbr-tile-shop-phones-cta"
                    }
                ],
                "contents": [
                    {
                        "contentIndex": "0",
                        "contentType": "notificationContents",
                        "items": [
                            {
                                "itemKey": "headerText",
                                "itemType": "text",
                                "itemValue": "For your plan (##COUNT##)",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "zeroNotification",
                                "itemType": "text",
                                "itemValue": "Looks like you're all caught up.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "expiringPerksLink",
                                "itemType": "Button",
                                "itemValue": "View and manage",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "appleArcadeLink",
                                "itemType": "Button",
                                "itemValue": "Manage",
                                "itemAttributes": {},
                                "actionKey": "manageAppleArcadeCTA"
                            },
                            {
                                "itemKey": "apoNotEnrolledLink",
                                "itemType": "Button",
                                "itemValue": "Learn more",
                                "itemAttributes": {},
                                "actionKey": "autopayNotEnrolledCTA"
                            },
                            {
                                "itemKey": "apoIncorrectPayLink",
                                "itemType": "Button",
                                "itemValue": "Manage",
                                "itemAttributes": {},
                                "actionKey": "apoIncorrectPayCTA"
                            },
                            {
                                "itemKey": "availablePerksLink",
                                "itemType": "Button",
                                "itemValue": "See perks",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "seeDetailsLink",
                                "itemType": "Button",
                                "itemValue": "Learn more",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "fiosDiscountLink",
                                "itemType": "Button",
                                "itemValue": "Shop",
                                "itemAttributes": {},
                                "actionKey": "shopFiosCTA"
                            },
                            {
                                "itemKey": "actAppleIndividual",
                                "itemType": "Button",
                                "itemValue": "Get started",
                                "itemAttributes": {},
                                "actionKey": "actAppleIndividualCTA"
                            },
                            {
                                "itemKey": "actAppleOneFam",
                                "itemType": "Button",
                                "itemValue": "Get started",
                                "itemAttributes": {},
                                "actionKey": "actAppleOneFamCTA"
                            },
                            {
                                "itemKey": "upgradeAppleOneFam",
                                "itemType": "Button",
                                "itemValue": "Get started",
                                "itemAttributes": {},
                                "actionKey": "upgradeAppleOneFamCTA"
                            },
                            {
                                "itemKey": "fypHeader",
                                "itemType": "text",
                                "itemValue": "For your plan",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "globalchoiceFam",
                                "itemType": "Button",
                                "itemValue": "Get Global Choices",
                                "itemAttributes": {},
                                "actionKey": "globalchoiceCTA"
                            },
                            {
                                "itemKey": "twssdiscountFam",
                                "itemType": "Button",
                                "itemValue": "Explore discounts",
                                "itemAttributes": {},
                                "actionKey": "twssdiscountCTA"
                            },
                            {
                                "itemKey": "reviewDetailsLink",
                                "itemType": "Button",
                                "itemValue": "Review perks",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "shopPhones",
                                "itemType": "Button",
                                "itemValue": "Shop phones",
                                "itemAttributes": {},
                                "actionKey": "shopPhonesCTA"
                            }
                        ]
                    },
                    {
                        "contentIndex": "1",
                        "contentType": "deviceCreditModal",
                        "items": [
                            {
                                "itemKey": "modalBody",
                                "itemType": "text",
                                "itemValue": "With select trade-in and select 5G Unlimited plans. 5G Ultra Wideband available in select areas. 5G Nationwide available in 2700+ cities. Up to ##PAYMENT_PRICE## device payment purchase w/new or upgrade smartphone line on One Unlimited for iPhone, 5G Do More, 5G Play More and 5G Get More Unlimited plans req'd. Less up to ##OFFER_PRICE## trade-in/promo credit applied over 36 mos.; promo credit ends if eligibility req’s are no longer met; 0% APR. Trade-in conditions apply.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "headerText",
                                "itemType": "text",
                                "itemValue": "Get up to ##OFFER_PRICE## off select new phones when you trade in.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "modalCTA",
                                "itemType": "text",
                                "itemValue": "Got it",
                                "itemAttributes": {}
                            }
                        ]
                    }
                ],
                "data": {
                    "devicePromoData": [
                        {
                            "offerPrice": "$400",
                            "planName": "5G Start",
                            "planId": [
                                "50420",
                                "50427",
                                "26872",
                                "26869"
                            ],
                            "paymentPrice": "$399.99"
                        },
                        {
                            "offerPrice": "$800",
                            "planName": "5G Play More",
                            "planId": [
                                "50428",
                                "50430"
                            ],
                            "paymentPrice": "$799.99"
                        },
                        {
                            "offerPrice": "$800",
                            "planName": "5G Do More",
                            "planId": [
                                "50431",
                                "50432"
                            ],
                            "paymentPrice": "$799.99"
                        },
                        {
                            "offerPrice": "$800",
                            "planName": "5G Get More",
                            "planId": [
                                "50433",
                                "50434"
                            ],
                            "paymentPrice": "$799.99"
                        },
                        {
                            "offerPrice": "$800",
                            "planName": "Fuji Plan",
                            "planId": [
                                "60270",
                                "60272"
                            ],
                            "paymentPrice": "$799.99"
                        }
                    ],
                    "notifications": [
                        {
                            "mtn": "5073181008",
                            "notificationList": []
                        },
                        {
                            "mtn": "5074158454",
                            "notificationList": []
                        },
                        {
                            "mtn": "5076065538",
                            "notificationList": []
                        },
                        {
                            "mtn": "9137870154",
                            "notificationList": []
                        },
                        {
                            "mtn": "9137874660",
                            "notificationList": []
                        },
                        {
                            "mtn": "9137876442",
                            "notificationList": []
                        },
                        {
                            "mtn": "9139450706",
                            "notificationList": []
                        }
                    ]
                }
            },
            {
                "sectionIndex": "97",
                "sectionId": "vedLandingpage_FiosMobileBillDiscount",
                "sectionType": "FiosMobileBillDiscountModal",
                "sectionComponentId": "FiosMobileBillDiscountComp",
                "actions": [
                    {
                        "actionType": "function",
                        "actionValue": "this.props.actions.closeModal",
                        "actionKey": "primaryButtonCTA",
                        "clickStream": "gotit-cta"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/digital/nsa/secure/ui/bill/viewbill/#/",
                        "actionKey": "secondaryButtonCTA",
                        "clickStream": "view-mobilebill-cta"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://www.verizon.com/support/mobile-home-rewards-program-legal/",
                        "actionKey": "linkCTA",
                        "clickStream": "view-termsandconditions-cta"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://www98.verizon.com/mybill/#/billhome",
                        "actionKey": "secondaryFiosButtonCTA",
                        "clickStream": "view-fiosmobilebill-cta"
                    }
                ],
                "contents": [
                    {
                        "contentIndex": "0",
                        "contentType": "modalMain",
                        "items": [
                            {
                                "itemKey": "modalType",
                                "itemType": "text",
                                "itemValue": "fiosModal",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "subModalType",
                                "itemType": "text",
                                "itemValue": "mobileBillDiscount",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "headerText",
                                "itemType": "text",
                                "itemValue": "Mobile & Fios Discount",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "bodyHtml",
                                "itemType": "html",
                                "itemValue": "You're receiving a discount on both your mobile and your Fios bills.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "signedOutBillDescription",
                                "itemType": "html",
                                "itemValue": "You may be signed out of your wireless account and required to sign into your Fios account in order to see your Fios bill.",
                                "itemAttributes": {}
                            }
                        ]
                    },
                    {
                        "contentIndex": "1",
                        "contentType": "modalCTA",
                        "items": [
                            {
                                "itemKey": "linkCTA",
                                "itemType": "Link",
                                "itemValue": "View terms and conditions",
                                "itemAttributes": {},
                                "actionKey": "linkCTA"
                            },
                            {
                                "itemKey": "secondaryButtonCTA",
                                "itemType": "Button",
                                "itemValue": "View mobile bill",
                                "itemAttributes": {},
                                "actionKey": "secondaryButtonCTA"
                            },
                            {
                                "itemKey": "primaryButtonCTA",
                                "itemType": "Button",
                                "itemValue": "Got it",
                                "itemAttributes": {},
                                "actionKey": "primaryButtonCTA"
                            },
                            {
                                "itemKey": "secondaryFiosButtonCTA",
                                "itemType": "Button",
                                "itemValue": "View Fios bill",
                                "itemAttributes": {},
                                "actionKey": "secondaryFiosButtonCTA"
                            }
                        ]
                    }
                ],
                "data": {}
            },
            {
                "sectionIndex": "97",
                "sectionId": "vedLandingpage_FiosServiceAvailableNonPremiumPlan",
                "sectionType": "FiosServiceAvailableModalNonPremiumPlan",
                "sectionComponentId": "FiosServiceAvailableNonPremiumPlanComp",
                "actions": [
                    {
                        "actionType": "function",
                        "actionValue": "this.openLQModal",
                        "actionKey": "linkCTA",
                        "clickStream": "edit-address-cta"
                    },
                    {
                        "actionType": "function",
                        "actionValue": "this.props.actions.closeModal",
                        "actionKey": "linkCTA2",
                        "clickStream": "cancel-cta"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://www.verizon.com/home/fios-fastest-internet/?type=npu&intcmp=MVA-FC_CS_M",
                        "actionKey": "primaryButtonCTA",
                        "clickStream": "explore-fioshome-cta"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/digital/nsa/secure/ui/bill/savingsCenter/#/",
                        "actionKey": "secondaryButtonCTA",
                        "clickStream": "getstarted-fios-cta"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://www98.verizon.com/content/verizon/personal/services/fivegoneclick.nocache.html",
                        "actionKey": "exploreFiosNoCacheButtonCTA",
                        "clickStream": "explore-fios-nocache-cta"
                    }
                ],
                "contents": [
                    {
                        "contentIndex": "0",
                        "contentType": "modalMain",
                        "items": [
                            {
                                "itemKey": "modalType",
                                "itemType": "text",
                                "itemValue": "fiosModal",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "subModalType",
                                "itemType": "text",
                                "itemValue": "nonPremiumPlan",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "headerText",
                                "itemType": "text",
                                "itemValue": "Save $10/mo on Fios Home Internet.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "bodyHtml",
                                "itemType": "html",
                                "itemValue": "Since you're a Verizon unlimited customer, get Fios internet and save $10/mo off your Fios internet plan with the Mobile + Home discount.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "subHeaderText",
                                "itemType": "html",
                                "itemValue": "Already have Fios internet?",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "subText",
                                "itemType": "html",
                                "itemValue": "Existing Fios customers can save up to $10/mo per line on their mobile phone plans with a Fios Gigabit Connection or $5/mo per line with any other Fios Home Internet plan.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "billingAddress",
                                "itemType": "html",
                                "itemValue": "1701 8TH ST NW APT 207, AUSTIN",
                                "itemAttributes": {}
                            }
                        ]
                    },
                    {
                        "contentIndex": "1",
                        "contentType": "modalCTA",
                        "items": [
                            {
                                "itemKey": "linkCTA",
                                "itemType": "Link",
                                "itemValue": "Edit",
                                "itemAttributes": {
                                    "id": "checkLq"
                                },
                                "actionKey": "linkCTA"
                            },
                            {
                                "itemKey": "primaryButtonCTA",
                                "itemType": "Button",
                                "itemValue": "Explore Fios Home Internet",
                                "itemAttributes": {},
                                "actionKey": "primaryButtonCTA"
                            },
                            {
                                "itemKey": "secondaryButtonCTA",
                                "itemType": "Button",
                                "itemValue": "Get started",
                                "itemAttributes": {},
                                "actionKey": "secondaryButtonCTA"
                            },
                            {
                                "itemKey": "linkCTA2",
                                "itemType": "Link",
                                "itemValue": "Cancel",
                                "itemAttributes": {},
                                "actionKey": "linkCTA2"
                            },
                            {
                                "itemKey": "exploreFiosNoCacheButtonCTA",
                                "itemType": "Button",
                                "itemValue": "Explore Fios Home Internet",
                                "itemAttributes": {},
                                "actionKey": "exploreFiosNoCacheButtonCTA"
                            }
                        ]
                    },
                    {
                        "contentType": "modalMain",
                        "items": [
                            {
                                "itemAttributes": {}
                            }
                        ]
                    }
                ],
                "data": {}
            },
            {
                "sectionIndex": "97",
                "sectionId": "vedLandingpage_FiosServiceAvailablePremiumPlan",
                "sectionType": "FiosServiceAvailableModalPremiumPlan",
                "sectionComponentId": "FiosServiceAvailablePremiumPlanComp",
                "actions": [
                    {
                        "actionType": "function",
                        "actionValue": "this.openLQModal",
                        "actionKey": "linkCTA",
                        "clickStream": "edit-address-cta"
                    },
                    {
                        "actionType": "function",
                        "actionValue": "this.props.actions.closeModal",
                        "actionKey": "linkCTA2",
                        "clickStream": "cancel-cta"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://www.verizon.com/home/fios-fastest-internet/?intcmp=MVA-FC_CS_U",
                        "actionKey": "primaryButtonCTA",
                        "clickStream": "explore-fioshome-cta"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/digital/nsa/secure/ui/bill/savingsCenter/#/",
                        "actionKey": "secondaryButtonCTA",
                        "clickStream": "getstarted-fios-cta"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://www98.verizon.com/content/verizon/personal/services/fivegoneclick.nocache.html",
                        "actionKey": "exploreFiosNoCacheButtonCTA",
                        "clickStream": "explore-fios-nocache-cta"
                    }
                ],
                "contents": [
                    {
                        "contentIndex": "0",
                        "contentType": "modalMain",
                        "items": [
                            {
                                "itemKey": "modalType",
                                "itemType": "Text",
                                "itemValue": "fiosModal",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "subModalType",
                                "itemType": "text",
                                "itemValue": "premiumPlan",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "headerText",
                                "itemType": "text",
                                "itemValue": "Save $25/mo on Fios Home Internet.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "bodyHtml",
                                "itemType": "html",
                                "itemValue": "Since you're a Verizon Wireless premium unlimited customer, switch to Fios internet and with the Mobile + Home discount, save $25/mo off your Fios internet plan.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "subHeaderText",
                                "itemType": "html",
                                "itemValue": "Already have Fios internet?",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "subText",
                                "itemType": "html",
                                "itemValue": "Existing Fios customers can save up to $10/mo per line on their mobile phone plans with a Fios Gigabit Connection or $5/mo per line with any other Fios Home Internet plan.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "billingAddress",
                                "itemType": "html",
                                "itemValue": "1701 8TH ST NW APT 207, AUSTIN",
                                "itemAttributes": {}
                            }
                        ]
                    },
                    {
                        "contentIndex": "1",
                        "contentType": "modalCTA",
                        "items": [
                            {
                                "itemKey": "linkCTA",
                                "itemType": "Link",
                                "itemValue": "Edit",
                                "itemAttributes": {
                                    "id": "checkLq"
                                },
                                "actionKey": "linkCTA"
                            },
                            {
                                "itemKey": "primaryButtonCTA",
                                "itemType": "Button",
                                "itemValue": "Explore Fios Home Internet",
                                "itemAttributes": {},
                                "actionKey": "primaryButtonCTA"
                            },
                            {
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "secondaryButtonCTA",
                                "itemType": "Button",
                                "itemValue": "Get started",
                                "itemAttributes": {},
                                "actionKey": "secondaryButtonCTA"
                            },
                            {
                                "itemKey": "linkCTA2",
                                "itemType": "Link",
                                "itemValue": "Cancel",
                                "itemAttributes": {},
                                "actionKey": "linkCTA2"
                            },
                            {
                                "itemKey": "exploreFiosNoCacheButtonCTA",
                                "itemType": "Button",
                                "itemValue": "Explore Fios Home Internet",
                                "itemAttributes": {},
                                "actionKey": "exploreFiosNoCacheButtonCTA"
                            }
                        ]
                    },
                    {
                        "contentType": "modalMain",
                        "items": []
                    }
                ],
                "data": {}
            },
            {
                "sectionIndex": "97",
                "sectionId": "vedLandingpage_FiosDiscountNotClaimedModal",
                "sectionType": "FiosDiscountNotClaimedModal",
                "sectionComponentId": "FiosDiscountNotClaimedModalComp",
                "actions": [
                    {
                        "actionType": "function",
                        "actionValue": "this.props.actions.closeModal",
                        "clickStream": "gotit-cta",
                        "sectionKey": "secondaryButtonCTA"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/digital/nsa/secure/ui/bill/savingsCenter/#/",
                        "actionKey": "primaryButtonCTA",
                        "clickStream": "getstarted-cta"
                    }
                ],
                "contents": [
                    {
                        "contentIndex": "0",
                        "contentType": "modalMain",
                        "items": [
                            {
                                "itemKey": "modalType",
                                "itemType": "text",
                                "itemValue": "fiosModal",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "subModalType",
                                "itemType": "text",
                                "itemValue": "fiosDiscountNotClaimed",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "headerText",
                                "itemType": "text",
                                "itemValue": "Save up to $10/mo per line on your mobile bill with Mobile + Home Discount.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "bodyHtml",
                                "itemType": "html",
                                "itemValue": "As a Verizon Wireless and Fios customer, you can save on your mobile bill each month on your eligible mobile phone plans.",
                                "itemAttributes": {}
                            }
                        ]
                    },
                    {
                        "contentIndex": "1",
                        "contentType": "modalCTA",
                        "items": [
                            {
                                "itemKey": "primaryButtonCTA",
                                "itemType": "Button",
                                "itemValue": "Get started",
                                "itemAttributes": {},
                                "actionKey": "primaryButtonCTA"
                            },
                            {
                                "itemKey": "secondaryButtonCTA",
                                "itemType": "Button",
                                "itemValue": "Got it",
                                "itemAttributes": {},
                                "actionKey": "secondaryButtonCTA"
                            }
                        ]
                    }
                ],
                "data": {}
            },
            {
                "sectionIndex": "99",
                "sectionId": "vedLandingpage_FiosBillDiscountModal",
                "sectionType": "FiosBillDiscountModal",
                "sectionComponentId": "FiosBillDiscountModalComp",
                "actions": [
                    {
                        "actionType": "redirect",
                        "actionValue": "https://www98.verizon.com/mybill/#/billhome",
                        "actionKey": "secondaryFiosButtonCTA",
                        "clickStream": "view-fiosmobilebill-cta"
                    },
                    {
                        "actionType": "function",
                        "actionValue": "this.props.actions.closeModal",
                        "actionKey": "primaryButtonCTA",
                        "clickStream": "gotit-cta"
                    }
                ],
                "contents": [
                    {
                        "contentIndex": "0",
                        "contentType": "modalMain",
                        "items": [
                            {
                                "itemKey": "modalType",
                                "itemType": "text",
                                "itemValue": "fiosModal",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "subModalType",
                                "itemType": "text",
                                "itemValue": "fiosBillDiscount",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "headerText",
                                "itemType": "tex",
                                "itemValue": "Mobile + Home Discount",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "bodyHtml",
                                "itemType": "html",
                                "itemValue": "<p>Saving ##DISCOUNT## on your Fios bill.</p>",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "signedOutBillDescription",
                                "itemType": "html",
                                "itemValue": "You may be signed out of your wireless account and required to sign into your Fios account in order to see your Fios bill.",
                                "itemAttributes": {}
                            }
                        ]
                    },
                    {
                        "contentIndex": "1",
                        "contentType": "modalCTA",
                        "items": [
                            {
                                "itemKey": "secondaryFiosButtonCTA",
                                "itemType": "Button",
                                "itemValue": "View Fios bill",
                                "itemAttributes": {},
                                "actionKey": "secondaryFiosButtonCTA"
                            },
                            {
                                "itemKey": "primaryButtonCTA",
                                "itemType": "Button",
                                "itemValue": "Got it",
                                "itemAttributes": {},
                                "actionKey": "primaryButtonCTA"
                            }
                        ]
                    }
                ],
                "data": {}
            },
            {
                "sectionIndex": "120",
                "sectionId": "vedLandingpage_EducationalPlanModal",
                "sectionType": "EducationalPlanModal",
                "sectionComponentId": "EducationalPlanModalComp",
                "actions": [
                    {
                        "actionType": "function",
                        "actionValue": "this.props.actions.closeModal",
                        "actionKey": "playVideoCTA",
                        "clickStream": "plan-video-play-cta"
                    },
                    {
                        "actionType": "function",
                        "actionValue": "this.props.actions.closeModal",
                        "actionKey": "manageYourPlanCTA",
                        "clickStream": "plan-video-manage-your-plan-cta"
                    }
                ],
                "contents": [
                    {
                        "contentIndex": "0",
                        "contentType": "modalMain",
                        "items": [
                            {
                                "itemKey": "modalType",
                                "itemType": "text",
                                "itemValue": "educationalPlan",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "headerText",
                                "itemType": "text",
                                "itemValue": "##PLAN_TYPE## | ##PLAN_NAME##",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "acknowledgement",
                                "itemType": "text",
                                "itemValue": "Thanks for being the best part of the best network.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "manageYourPlan",
                                "itemType": "text",
                                "itemValue": "Manage Your Plan.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "welcomeHeaderText",
                                "itemType": "text",
                                "itemValue": "##PLAN_NAME##",
                                "itemAttributes": {}
                            }
                        ]
                    },
                    {
                        "contentIndex": "1",
                        "contentType": "modalCTA",
                        "items": [
                            {
                                "itemKey": "playCTA",
                                "itemType": "Button",
                                "itemValue": "Play",
                                "itemAttributes": {
                                    "size": "large"
                                },
                                "actionKey": "playVideoCTA"
                            },
                            {
                                "itemKey": "manageYourPlanCTA",
                                "itemType": "link",
                                "itemValue": "Manage Your Plan",
                                "itemAttributes": {},
                                "actionKey": "manageYourPlanCTA"
                            }
                        ]
                    }
                ],
                "data": {
                    "plan": [
                        {
                            "posterUrl": "https://ss7.vzw.com/is/image/VerizonWireless/Unlimited-Bento2-d?&scl=1",
                            "planName": "5G Start",
                            "slideIndex": "0",
                            "planId": "50427,50420",
                            "planDescription": "Review the details of ##PLAN_DETAILS##",
                            "title": "Learn about 5G Start",
                            "programId": "sf-00000863"
                        },
                        {
                            "posterUrl": "https://ss7.vzw.com/is/image/VerizonWireless/Unlimited-Bento2-d?&scl=1",
                            "planName": "5G Play More",
                            "slideIndex": "1",
                            "planId": "50430,50428",
                            "planDescription": "Review the details of ##PLAN_DETAILS##",
                            "title": "Learn about 5G Play More",
                            "programId": "sf-00000863"
                        },
                        {
                            "posterUrl": "https://ss7.vzw.com/is/image/VerizonWireless/Unlimited-Bento2-d?&scl=1",
                            "planName": "5G Do More",
                            "slideIndex": "2",
                            "planId": "50432,50431",
                            "planDescription": "Review the details of ##PLAN_DETAILS##",
                            "title": "Learn about 5G Do More",
                            "programId": "sf-00000863"
                        },
                        {
                            "posterUrl": "https://ss7.vzw.com/is/image/VerizonWireless/Unlimited-Bento2-d?&scl=1",
                            "planName": "5G Get More",
                            "slideIndex": "3",
                            "planId": "50434,50433",
                            "planDescription": "Review the details of ##PLAN_DETAILS##",
                            "title": "Learn about 5G Get More",
                            "programId": "sf-00000863"
                        },
                        {
                            "posterUrl": "https://ss7.vzw.com/is/image/VerizonWireless/Unlimited-Bento2-d?&scl=1",
                            "planName": "Welcome Unlimited",
                            "slideIndex": "4",
                            "planId": "58701,58699",
                            "planDescription": "Review the details of your plan through this personalized video outlining your specific plan.",
                            "title": "Learn about Welcome Unlimited Plan.",
                            "programId": "sf-00000863"
                        }
                    ]
                }
            },
            {
                "sectionIndex": "97",
                "sectionId": "vedLandingpage_FiosWelcomeUnlimitedPlanModal",
                "sectionType": "FiosWelcomeUnlimitedPlanModal",
                "sectionComponentId": "FiosWelcomeUnlimitedPlanModalComp",
                "actions": [
                    {
                        "actionType": "function",
                        "actionValue": "this.props.actions.closeModal",
                        "actionKey": "secondaryButtonCTA",
                        "clickStream": "gotit-cta"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/digital/nsa/secure/ui/bill/savingsCenter/#/",
                        "actionKey": "primaryButtonCTA",
                        "clickStream": "getstarted-cta"
                    }
                ],
                "contents": [
                    {
                        "contentIndex": "0",
                        "contentType": "modalMain",
                        "items": [
                            {
                                "itemKey": "modalType",
                                "itemType": "text",
                                "itemValue": "fiosModal",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "subModalType",
                                "itemType": "text",
                                "itemValue": "welcomeUnlimitedPlan",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "headerText",
                                "itemType": "text",
                                "itemValue": "Save $5/mo per line on your mobile bill with Mobile + Home Discount.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "bodyHtml",
                                "itemType": "html",
                                "itemValue": "As a Verizon Wireless and Fios customer, you can save on your mobile bill each month on your eligible mobile phone plans.",
                                "itemAttributes": {}
                            }
                        ]
                    },
                    {
                        "contentIndex": "1",
                        "contentType": "modalCTA",
                        "items": [
                            {
                                "itemKey": "primaryButtonCTA",
                                "itemType": "Button",
                                "itemValue": "Get started",
                                "itemAttributes": {},
                                "actionKey": "primaryButtonCTA"
                            },
                            {
                                "itemKey": "secondaryButtonCTA",
                                "itemType": "Button",
                                "itemValue": "Got it",
                                "itemAttributes": {},
                                "actionKey": "secondaryButtonCTA"
                            }
                        ]
                    }
                ],
                "data": {}
            },
            {
                "sectionIndex": "97",
                "sectionId": "vedLandingpage_mm45ForkModal",
                "sectionType": "mm45ForkModal",
                "sectionComponentId": "mm4ForkModalcomp",
                "actions": [
                    {
                        "actionType": "redirect",
                        "actionValue": "/ExploreMMPlan/standalone",
                        "actionKey": "mm45ExplorePlanButton",
                        "clickStream": "explore-plans-welcome-cta"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "/exploremmplan",
                        "actionKey": "unlimitedExplorePlanButton",
                        "clickStream": "explore-plan-mm-cta"
                    },
                    {
                        "actionType": "function",
                        "actionValue": "this.props.actions.showMM45ForkModal(false)",
                        "actionKey": "cancelLink",
                        "clickStream": "cancel-cta"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "/ExploreMMPlan/oneunlimited",
                        "actionKey": "appleUnlimitedExplorePlanButton",
                        "clickStream": "explore-plan-apple-cta"
                    }
                ],
                "contents": [
                    {
                        "contentIndex": "0",
                        "contentType": "bodyContent",
                        "items": [
                            {
                                "itemKey": "headerText",
                                "itemType": "text",
                                "itemValue": "Which type of plan are you looking for ?",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "mm45PlanHeader",
                                "itemType": "text",
                                "itemValue": "Mix and Match the unlimited plans you want.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "mm45PlanSubHeader",
                                "itemType": "text",
                                "itemValue": "There's a 5G Unlimited plan for everyone, so you only pay for what you need.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "mm45BodyText",
                                "itemType": "text",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "recommendedText",
                                "itemType": "text",
                                "itemValue": "Recommended for you",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "mm45FeaturesList",
                                "itemType": "list",
                                "dataKey": "mm45PlanFeaturesList",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "unlimitedPlanFeaturesList",
                                "itemType": "list",
                                "dataKey": "unlimitedPlanFeaturesList",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "unlimitedPlanHeader",
                                "itemType": "text",
                                "itemValue": "An entry-level unlimited plan for all your lines.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "unlimitedPlanSubHeader",
                                "itemType": "text",
                                "itemValue": "Enjoy reliable 5G performance with Welcome Unlimited.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "mm45ExplorePlanButton",
                                "itemType": "button",
                                "itemValue": "Explore plans",
                                "itemAttributes": {},
                                "actionKey": "mm45ExplorePlanButton"
                            },
                            {
                                "itemKey": "unlimitedExplorePlanButton",
                                "itemType": "button",
                                "itemValue": "Explore plan",
                                "itemAttributes": {},
                                "actionKey": "unlimitedExplorePlanButton"
                            },
                            {
                                "itemKey": "appleUnlimitedExplorePlanButton",
                                "itemType": "button",
                                "itemValue": "Explore plan",
                                "itemAttributes": {},
                                "actionKey": "appleUnlimitedExplorePlanButton"
                            },
                            {
                                "itemKey": "cancelLink",
                                "itemType": "button",
                                "itemValue": "Cancel",
                                "itemAttributes": {},
                                "actionKey": "cancelLink"
                            },
                            {
                                "itemKey": "featureSepartionText",
                                "itemType": "text",
                                "itemValue": "or",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "appleUnlimitedPlanHeader",
                                "itemType": "text",
                                "itemValue": "An unlimited plan with your favorite Apple services.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "appleUnlimitedPlanSubHeader",
                                "itemType": "text",
                                "itemValue": "Get Apple One, included in our One Unlimited for iPhone plan.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "appleUnlimitedPlanFeaturesList",
                                "itemType": "list",
                                "dataKey": "appleUnlimitedPlanFeaturesList",
                                "itemAttributes": {}
                            }
                        ]
                    }
                ],
                "data": {
                    "unlimitedPlanFeaturesList": [
                        {
                            "valid": "true",
                            "feature": "Unlimited talk, text and data."
                        },
                        {
                            "valid": "true",
                            "feature": "Our best price for an Unlimited plan ever."
                        },
                        {
                            "valid": "false",
                            "feature": "Not eligible for device offers."
                        }
                    ],
                    "mm45PlanFeaturesList": [
                        {
                            "valid": "true",
                            "feature": "Get our best network ever with 5G Ultra. On select plans."
                        },
                        {
                            "valid": "true",
                            "feature": "Unlimited mobile hotspot."
                        },
                        {
                            "valid": "true",
                            "feature": "Our best offers on devices."
                        }
                    ],
                    "appleUnlimitedPlanFeaturesList": [
                        {
                            "valid": "true",
                            "feature": "Get our best network ever with 5G Ultra."
                        },
                        {
                            "valid": "true",
                            "feature": "Unlimited mobile hotspot."
                        },
                        {
                            "valid": "true",
                            "feature": "Our best offers on devices."
                        }
                    ]
                }
            },
            {
                "sectionIndex": "113",
                "sectionId": "planInformationSection",
                "sectionType": "planInformation",
                "sectionComponentId": "planInformationComp",
                "actions": [
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/smartphones/",
                        "actionKey": "shopPhones",
                        "clickStream": "shop phones"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/devices/",
                        "actionKey": "shopConnectedDevices",
                        "clickStream": "shop devices"
                    }
                ],
                "contents": [
                    {
                        "contentType": "deviceOfferModal",
                        "items": [
                            {
                                "itemKey": "modalHeader",
                                "itemType": "text",
                                "itemValue": "$800 off your new device",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "modalBody",
                                "itemType": "text",
                                "itemValue": "Trade-in your old device and get up to $800 towards the purchase of a new phone.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "primaryCTA",
                                "itemType": "text",
                                "itemValue": "Shop phones",
                                "itemAttributes": {},
                                "actionKey": "shopPhones"
                            },
                            {
                                "itemKey": "secondaryCTA",
                                "itemType": "text",
                                "itemValue": "Close",
                                "itemAttributes": {}
                            }
                        ]
                    },
                    {
                        "contentIndex": "0",
                        "contentType": "connectedDeviceDiscountModal",
                        "items": [
                            {
                                "itemKey": "modalHeader",
                                "itemType": "text",
                                "itemValue": "Up to 50% off a connected device data plan",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "modalBody",
                                "itemType": "text",
                                "itemValue": "Get up to 50% off one eligible plan for a qualifying smartwatch, tablet, hotspot, or Hum in-car Wi-Fi device. <br/><br/>Eligible plans and discounts: <br/><br/>50% off Unlimited and Unlimited Plus for tablets; Essential and Plus plans for mobile hotspot devices; Unlimited for HumX; Unlimited + In Car WiFi for Hum+; and Unlimited and Number Share Unlimited for smartwatches. $20 off Premium and Pro plans for mobile hotspot devices.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "primaryCTA",
                                "itemType": "text",
                                "itemValue": "Shop connected devices",
                                "itemAttributes": {},
                                "actionKey": "shopConnectedDevices"
                            },
                            {
                                "itemKey": "secondaryCTA",
                                "itemType": "html",
                                "itemValue": "Close",
                                "itemAttributes": {}
                            }
                        ]
                    }
                ],
                "data": {
                    "planInfoData": [
                        {
                            "homeInternetDiscount": "$25/mo",
                            "planPromos": [
                                {
                                    "promoIcon": "tag",
                                    "promoText": "Get $800 towards a new phone.",
                                    "promoCTA": "Shop now",
                                    "promoKey": "deviceOffer"
                                },
                                {
                                    "promoIcon": "wearable",
                                    "promoText": "Up to 50% off a watch, tablet, hotspot or Hum plan.",
                                    "promoCTA": "Learn more",
                                    "promoKey": "connectedDeviceDiscount"
                                }
                            ],
                            "planId": [
                                "63217",
                                "63216"
                            ],
                            "subHeader": "Our fastest 5G speeds, 10x faster than LTE."
                        },
                        {
                            "homeInternetDiscount": "$40/mo",
                            "planPromos": [
                                " \"promoIcon\": \"tag\", \"promoText\": \"Get $300 towards a new phone.\", \"promoCTA\": \"Shop now\", \"promoKey\": \"deviceOffer\", \"promoClickStream\": \"shop-now-cta\" "
                            ],
                            "planId": [
                                "63215",
                                "63214",
                                "58701",
                                "58699"
                            ],
                            "subHeader": "Fast, reliable 5G coverage."
                        }
                    ]
                }
            },
            {
                "sectionIndex": "114",
                "sectionId": "pmdCommonSection",
                "sectionType": "pmdCommonSection",
                "sectionComponentId": "pmdCommonComp",
                "actions": [
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/digital/nsa/secure/ui/products/producthub/newpdp/walmart_perk",
                        "actionKey": "walmart",
                        "clickStream": "enroll-walmart"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/digital/nsa/secure/ui/products/producthub/newpdp/100gbhotspot_perk",
                        "actionKey": "hotspot",
                        "clickStream": "enroll-hotspot"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/digital/nsa/secure/ui/products/producthub/newpdp/disneybundle_perk",
                        "actionKey": "disneybundle",
                        "clickStream": "enroll-disneybundle"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/digital/nsa/secure/ui/products/producthub/newpdp/applemusicfamily_perk",
                        "actionKey": "applemusicfamily",
                        "clickStream": "enroll-applemusic"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/digital/nsa/secure/ui/products/producthub/newpdp/appleone_perk",
                        "actionKey": "appleone",
                        "clickStream": "enroll-appleone"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/digital/nsa/secure/ui/products/producthub/newpdp/cloudstorage_perk",
                        "actionKey": "cloudstorage",
                        "clickStream": "enroll-cloudstorage"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/digital/nsa/secure/ui/products/producthub/newpdp/smartwatch_perk",
                        "actionKey": "smartwatch",
                        "clickStream": "enroll-smartwatch"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/digital/nsa/secure/ui/products/producthub/newpdp/travelpass_perk",
                        "actionKey": "travelpass",
                        "clickStream": "enroll-travelpass"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/digital/nsa/secure/ui/products/producthub/newpdp/plusplaycredit_perk",
                        "actionKey": "+playcredit",
                        "clickStream": "enroll-+playcredit"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "https://vzwqa2.verizonwireless.com/digital/nsa/secure/ui/products/producthub/category/myAddOns",
                        "actionKey": "getStartedAddons",
                        "clickStream": "get-started"
                    }
                ],
                "contents": [
                    {
                        "contentIndex": "0",
                        "contentType": "pmdCommonContent",
                        "items": [
                            {
                                "itemKey": "planRecommTitle",
                                "itemType": "text",
                                "itemValue": "We recommend a new plan for you.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "learnMoreButton",
                                "itemType": "text",
                                "itemValue": "Learn more",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "homeInternetSubText",
                                "itemType": "text",
                                "itemValue": "Home Internet <br /> starting at",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "explorePlanText",
                                "itemType": "text",
                                "itemValue": "Explore plan",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "qualifiedText",
                                "itemType": "text",
                                "itemValue": "In select locations",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "getItButton",
                                "itemType": "text",
                                "itemValue": "Get it now",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "manageDataButton",
                                "itemType": "text",
                                "itemValue": "Manage data plan",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "dataPlanText",
                                "itemType": "text",
                                "itemValue": "Data",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "addPerksButton",
                                "itemType": "text",
                                "itemValue": "Add perks",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "addOrRemoveButton",
                                "itemType": "text",
                                "itemValue": "Add or remove Perks",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "planPerkHeader",
                                "itemType": "text",
                                "itemValue": "Perks",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "planPerkSubText",
                                "itemType": "text",
                                "itemValue": "Add perks to your plan for only $10/mo each.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "pendingOrderTitle",
                                "itemType": "text",
                                "itemValue": "This line has a pending plan change",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "reviewDetailsLink",
                                "itemType": "text",
                                "itemValue": "Review details",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "dismissButton",
                                "itemType": "text",
                                "itemValue": "Dismiss",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "zeroNotifyMsg",
                                "itemType": "text",
                                "itemValue": "0 notifications",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "notifyMsg",
                                "itemType": "notifyMsg",
                                "itemValue": "notifications",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "perksTitle",
                                "itemType": "text",
                                "itemValue": "Plan perks",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "availablePerks",
                                "itemType": "text",
                                "itemValue": "Available",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "activePerks",
                                "itemType": "text",
                                "itemValue": "Active",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "expiredPerks",
                                "itemType": "text",
                                "itemValue": "Expired",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "networkUsageTitle",
                                "itemType": "text",
                                "itemValue": "Network usage",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "usageDetailsButton",
                                "itemType": "text",
                                "itemValue": "Usage details",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "changeYourPlanText",
                                "itemType": "text",
                                "itemValue": "Change your plan",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "accessFeatureText",
                                "itemType": "text",
                                "itemValue": "to access this feature.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "planText",
                                "itemType": "text",
                                "itemValue": "Plan",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "pricingDisclaimText",
                                "itemType": "text",
                                "itemValue": "All pricing shown on this page does not include taxes, fees or surcharges. Plan prices do not include cost of add-ons or international plans.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "planDetailsTitle",
                                "itemType": "text",
                                "itemValue": "Your Plan",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "manageplansTitle",
                                "itemType": "text",
                                "itemValue": "Manage plans",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "allLinesText",
                                "itemType": "text",
                                "itemValue": "All lines share this plan",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "selectLineText",
                                "itemType": "text",
                                "itemValue": "Select a line to view its plan.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "planCostText",
                                "itemType": "text",
                                "itemValue": "Plan costs shown with",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "discountLinkText",
                                "itemType": "text",
                                "itemValue": "applied discounts.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "explorePlansText",
                                "itemType": "text",
                                "itemValue": "Explore plans",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "chooseLineText",
                                "itemType": "text",
                                "itemValue": "Choose a line",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "linesOnThisPlanText",
                                "itemType": "text",
                                "itemValue": "Lines on this plan",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "getStartedButton",
                                "itemType": "text",
                                "itemValue": "Get started",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "builtItText",
                                "itemType": "text",
                                "itemValue": "Get exactly what you want. <br/>Only pay for what you need.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "setUpButton",
                                "itemType": "text",
                                "itemValue": "Set up",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "travelPassBankLink",
                                "itemType": "text",
                                "itemValue": "TravelPass bank",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "planFeaturesLink",
                                "itemType": "text",
                                "itemValue": "Plan features",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "planPerkSubTextWithEmpDisc",
                                "itemType": "text",
                                "itemValue": "Add perks to your plan for only $5/mo each.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "cancelPerkPendingLink",
                                "itemType": "text",
                                "itemValue": "Review details",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "cancelPerkPendingText",
                                "itemType": "text",
                                "itemValue": "Cancelling soon",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "inProgressHeaderText",
                                "itemType": "text",
                                "itemValue": "You have added a perk(s), it may take a few minutes before you can activate.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "perkEnrollHeader",
                                "itemType": "text",
                                "itemValue": "Action required",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "perkEnrollSubheader",
                                "itemType": "text",
                                "itemValue": "Your ##PERK_NAME## perk needs to be set up before it can be used.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "perksEnrollSubheader",
                                "itemType": "text",
                                "itemValue": "The following perks need to be set up before they can be used:",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "perksEnrollButton",
                                "itemType": "text",
                                "itemValue": "Get started",
                                "itemAttributes": {}
                            }
                        ]
                    }
                ],
                "data": {}
            },
            {
                "sectionIndex": "101",
                "sectionId": "landingPageLegacy_ExplorePlanSection",
                "sectionType": "exploreUnlimitedModal",
                "sectionComponentId": "exploreUnlimitedModalComp",
                "actions": [
                    {
                        "actionType": "route",
                        "actionValue": "#/exploremmplan",
                        "actionKey": "continueExplorePlan",
                        "clickStream": "continue-explore-plan-cta"
                    },
                    {
                        "actionType": "overlay",
                        "actionValue": "closeModal",
                        "actionKey": "cancelModal",
                        "clickStream": "cancel-cta"
                    }
                ],
                "contents": [
                    {
                        "contentIndex": "0",
                        "items": [
                            {
                                "itemKey": "headerText",
                                "itemType": "text",
                                "itemValue": "You'll get to pick a new unlimited plan for each line",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "subHeaderText1",
                                "itemType": "text",
                                "itemValue": "You're currently on ##PLAN_OVERLAY_TITLE##. When you switch, you can mix and match the plans that fit each line best but you'll lose your company discount. Once you pick your new plans, you won't be able to switch back to your current plan ",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "button1",
                                "itemType": "button",
                                "itemValue": "Continue",
                                "itemAttributes": {
                                    "className": "primaryButton"
                                },
                                "actionKey": "continueExplorePlan"
                            },
                            {
                                "itemKey": "button2",
                                "itemType": "button",
                                "itemValue": "Not now,thanks",
                                "itemAttributes": {
                                    "className": "secondaryButton"
                                },
                                "actionKey": "cancelModal"
                            }
                        ]
                    }
                ],
                "data": {}
            },
            {
                "sectionIndex": "202",
                "sectionId": "vedLandingPage_Plan_Discount",
                "sectionType": "planDiscountModal",
                "sectionComponentId": "planDiscountModalComp",
                "contents": [
                    {
                        "items": [
                            {
                                "itemKey": "planDiscountHeader",
                                "itemValue": "Plan discounts",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "planDiscountSubHeader",
                                "itemValue": "The following discounts are applied to your plan cost.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "mobileandhomeDiscountHeader",
                                "itemValue": "Mobile + Home Discount",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "mobileandhomePlanOne",
                                "itemValue": "5G Home Plus",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "mobileandhomePlanOneDiscount",
                                "itemValue": "-$25/mo",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "mobileandhomePlanTwo",
                                "itemValue": "5G Home",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "mobileandhomePlanTwoDiscount",
                                "itemValue": "-$15/mo",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "mobileandhomeFooter",
                                "itemValue": "You'll save on your Home Internet plan because you have an existing postpaid mobile unlimited plan.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "autoPayDiscountHeader",
                                "itemValue": "Auto Pay Discount",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "autoPayDiscountPlans",
                                "itemValue": "All plans",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "autoPayDiscountPlansAmount",
                                "itemValue": "-$10/mo",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "autoPayDiscountFooter",
                                "itemValue": "You’ll save $10/mo because you’re signed up for Auto Pay and Paper-free billing.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "fiveDollarDiscountHeader",
                                "itemValue": "$5 Discount",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "fiveDollarDiscountPlanOne",
                                "itemValue": "5G Home Plus",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "fiveDollarDiscountPlanOneAmount",
                                "itemValue": "-$5/mo",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "fiveDollarDiscountPlanTwo",
                                "itemValue": "5G Home",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "fiveDollarDiscountPlanAmount",
                                "itemValue": "—",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "fiveDollarDiscountFooter",
                                "itemValue": "$5/mo discount applied via bill credit for as long as Verizon provides and you maintain eligible service.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "planDiscountButton",
                                "itemValue": "Close",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "employeeDiscountHeader",
                                "itemValue": "Employee Discount",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "employeeDiscountPlans",
                                "itemValue": "All plans",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "employeeDiscountOffer",
                                "itemValue": "50% off",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "employeeDiscountFooter",
                                "itemValue": "You’ll save on your Home Internet plan because of your discount.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "retireeDiscountHeader",
                                "itemValue": "Retiree Discount",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "retireeDiscountPlans",
                                "itemValue": "All plans",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "retireeDiscountOffers",
                                "itemValue": "25% off",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "retireeDiscountFooter",
                                "itemValue": "You’ll save on your Home Internet plan because of your discount.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "tooltipHeader",
                                "itemValue": "Save even more with these discounts.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "tooltipMobileHomeDiscountHeader",
                                "itemValue": "Mobile + Home Discount",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "tooltipMobileHomeDiscountSubHeaderOne",
                                "itemValue": "Save up to $25/mo. when you bundle your Home internet service with a postpaid mobile unlimited plan.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "tooltipAutoPayHeader",
                                "itemValue": "Auto Pay Discount",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "tooltipautoPaySubHeader",
                                "itemValue": "Save $10/mo when you sign up for Auto Pay and Paper-free billing.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "tooltipFooter",
                                "itemValue": "Availability varies. Subject to credit approval.  Enroll in Auto Pay (Debit card, Checking account or the Verizon Visa Card) & paper-free billing required.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "tooltipMobileHomeDiscountSubHeaderTwo",
                                "itemValue": "Save up to $15/mo. when you bundle your Home internet service with a postpaid mobile unlimited plan.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "discountType",
                                "itemValue": "Personal",
                                "itemAttributes": {}
                            }
                        ]
                    }
                ],
                "data": {}
            },
            {
                "sectionIndex": "102",
                "sectionId": "landingPageLegacy_SelectPlanLearnMoreSection",
                "sectionType": "selectPlanlearnMoreModal",
                "sectionComponentId": "selectPlanlearnMoreModalComp",
                "actions": [
                    {
                        "actionType": "http",
                        "actionValue": "/ui/acct/secure/appmusic#/",
                        "actionKey": "appleMusic1",
                        "clickStream": "apple-music-cta"
                    },
                    {
                        "actionType": "http",
                        "actionValue": "/ui/acct/secure/appmusic#/",
                        "actionKey": "appleMusic2",
                        "clickStream": "apple-music-cta"
                    },
                    {
                        "actionType": "http",
                        "actionKey": "gotLink",
                        "clickStream": "got-link-cta"
                    },
                    {
                        "actionType": "overlay",
                        "actionValue": "gotComponent",
                        "actionKey": "got-link-cta"
                    }
                ],
                "contents": [
                    {
                        "contentIndex": "0",
                        "items": [
                            {
                                "itemKey": "headerText",
                                "itemType": "text",
                                "itemValue": "Enjoy Apple Music, on us",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "descText1",
                                "itemType": "text",
                                "itemValue": "Apple Music is now included on smartphone lines with Beyond Unlimited or Above Unlimited. Customers with smartphone lines on Go Unlimited or The Verizon Plan Unlimited get Apple Music free for 6 months, then $9.99/mo after. Taxes apply",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "descText2",
                                "itemType": "text",
                                "itemValue": "You must remain on a qualified Unlimited plan to retain your Apple Music offer. If you switch your plan from Beyond Unlimited or Above Unlimited to a non-qualifying plan and have activated Apple Music, your Apple Music subscription will be billed $9.99/mo",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "descText3",
                                "itemType": "text",
                                "itemValue": "New Mexico residents: Third-party charges are prohibited on your wireless bill, but you can upgrade to Beyond Unlimited or Above Unlimited plans and get Apple Music included",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "descText4",
                                "itemType": "text",
                                "itemValue": "If you're new to Apple Music, you'll need to create an Apple ID or link your existing Apple ID",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "descText5",
                                "itemType": "text",
                                "itemValue": "If you already subscribe to Apple Music, when you sign in to Apple Music with your Apple ID you'll be directed to cancel your duplicate Apple Music subscription. If you want to take advantage of your included subscription of Apple Music, cancel your current subscription through Apple Music via Settings. For Android users, navigate to Account Settings, Manage Membership and turn off Automatic Renewal . For iPhone users hit Cancel Subscription. Don't worry, all of your saved content and settings are linked to your Apple ID.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "descText6",
                                "itemType": "text",
                                "itemValue": "Once your subscription is activated, you can manage or cancel your subscription through vzw.com/applemusic or in the “Add-ons” section of the My Verizon app under “Account.”",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "subHeaderText",
                                "itemType": "text",
                                "itemValue": "Here's how you activate your Apple Music subscription",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "descSubText1",
                                "itemType": "text",
                                "itemValue": "Visit vzw.com/applemusic on your desktop or mobile browser, or “Add-ons” in the My Verizon app under “Account.”",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "descSubText2",
                                "itemType": "text",
                                "itemValue": "Select the lines you want to enroll in Apple Music and accept the Terms and Conditions",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "descSubText3",
                                "itemType": "text",
                                "itemValue": "Select the lines you want to enroll in Apple Music and accept the Terms and Conditions",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "descSubText4",
                                "itemType": "text",
                                "itemValue": "Each line will get a text message with a link to download or open the Apple Music app",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "descSubText5",
                                "itemType": "text",
                                "itemValue": "Once your subscription is activated, you can manage or cancel your subscription through vzw.com/applemusic or in the “Add-ons” section of the My Verizon app under “Account.”",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "descSubText6",
                                "itemType": "text",
                                "itemValue": "Keep in mind that only Account Owners or Managers can activate Apple Music for any line on the account, so you'll need their help to activate Apple Music if you're an Account Member.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "appleMusicActionLink1",
                                "itemType": "link",
                                "itemValue": "Apple Music",
                                "itemAttributes": {},
                                "actionKey": "appleMusic1"
                            },
                            {
                                "itemKey": "appleMusicActionLink2",
                                "itemType": "link",
                                "itemValue": "Apple Music",
                                "itemAttributes": {},
                                "actionKey": "appleMusic2"
                            },
                            {
                                "itemKey": "actionLink",
                                "itemType": "link",
                                "itemValue": "Got it",
                                "itemAttributes": {},
                                "actionKey": "gotLink"
                            }
                        ]
                    }
                ],
                "data": {}
            }
        ]
    }
};

export const flowMM = {
    "responseInfo": {
        "timeStamp": "26-07-2023 05:39:37",
        "correlationId": "fa47747f-1a9d-4904-b682-eb89407efbc4-3636175",
        "responseCode": "00",
        "responseMessage": "SUCCESS",
        "sectionErrors": [],
        "backendResponseData": []
    },
    "body": {
        "pageId": "ExploreMMPlan",
        "pageAttributes": [
            {
                "itemKey": "mixAndMatch3_0",
                "itemValue": "false"
            },
            {
                "itemKey": "hasUnlimitedPlusPlan",
                "itemValue": "false"
            },
            {
                "itemKey": "has5GNationWide",
                "itemValue": "false"
            },
            {
                "itemKey": "enableConnectedDevice20",
                "itemValue": "true"
            },
            {
                "itemKey": "noOfLines",
                "itemValue": "1",
                "itemType": "text"
            },
            {
                "itemKey": "isKodiEnabled",
                "itemValue": "true"
            },
            {
                "itemKey": "is5GHomeEnabled",
                "itemValue": "true"
            },
            {
                "itemKey": "isCPCSimplificationEnabled",
                "itemValue": "true"
            },
            {
                "itemKey": "enableMAndM4Point5",
                "itemValue": "true"
            },
            {
                "itemKey": "enableFujiPlan",
                "itemValue": "true"
            },
            {
                "itemKey": "futureDateDisable",
                "itemValue": "false"
            },
            {
                "itemKey": "enableIOSRating",
                "itemValue": "false"
            },
            {
                "itemKey": "enableAndroidRating",
                "itemValue": "false"
            },
            {
                "itemKey": "enableNewIPI",
                "itemValue": "false"
            },
            {
                "itemKey": "enableCompare",
                "itemValue": "false"
            },
            {
                "itemKey": "enableFriendlyExperience",
                "itemValue": "true"
            },
            {
                "itemKey": "enableNewFriendlyExperience",
                "itemValue": "true"
            },
            {
                "itemKey": "loadPolyMap",
                "itemValue": "false"
            }
        ],
        "sections": [
            {
                "sectionIndex": "0",
                "sectionId": "exploreMM_LineDetailsSection",
                "sectionType": "exploreMM_LineDetailsSection",
                "sectionComponentId": "ExploreMMLineDetails",
                "sections": [
                    {
                        "sectionIndex": "0",
                        "sectionId": "exploreMMLineDetailsTopSection",
                        "sectionType": "exploreMMLineDetailsTopSection",
                        "sectionComponentId": "Header",
                        "contents": [
                            {
                                "contentIndex": "0",
                                "contentActionId": "null",
                                "items": [
                                    {
                                        "itemKey": "headerText",
                                        "itemType": "list",
                                        "dataKey": "header",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "subHeaderText",
                                        "itemType": "list",
                                        "dataKey": "subHeader",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "headerText_v2",
                                        "itemType": "list",
                                        "dataKey": "header_v2",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "subHeaderText_v2",
                                        "itemType": "list",
                                        "dataKey": "subHeader_v2",
                                        "itemAttributes": {}
                                    }
                                ]
                            }
                        ],
                        "data": {
                            "customerType": "PE",
                            "lineLevelPlan": true,
                            "planType": "LLP",
                            "hasLegacyPlan": false,
                            "mixMatchPlan": false,
                            "subHeader_v2": {
                                "llpDefault_v2": "See how your bill and plan features will change if you switch your plan.",
                                "alpRecommendation": "Switching to unlimited means that each line gets its own unlimited plan.",
                                "llpDefault_v1": "Choose whether to keep or change these plans before proceeding.",
                                "alpDefault": "You'll need to pick a new plan for each line before moving to the next step."
                            },
                            "header_v2": {
                                "llpRecommendation": "These are the plans we recommend for your lines.",
                                "alpRecommendation": "We recommend you switch to unlimited plans.",
                                "llpDefault_v1": "Review your plan changes.",
                                "alpDefault_v1": "Pick a new plan for each line.",
                                "alpDefault_v2": "Pick a new plan for these lines and review your changes.",
                                "alpSubheader": "Each line on your account will now get its own unlimited plan.",
                                "alpFinal_v1": "Nice, you've picked new plans for all of your lines.",
                                "llpDefault": "Pick a new plan for each line.",
                                "alpFinal": "Nice, you've picked new plans for all of your lines.",
                                "alpDefault": "Pick a new plan for each line."
                            },
                            "hybridPlan": false,
                            "header": {
                                "default": "Nice, you've picked new <br /> plans for all of your lines.",
                                "middleLine": "Great, now let's pick a plan for",
                                "mmCPC": "Change any of your current <br /> plans for a new one.",
                                "lastLine": "Let's finish up with a plan for",
                                "smartFamily": "If everything looks good, let's move on to  Verizon Smart Family Premium&trade; for a moment.",
                                "initialLine": "You'll get to pick new <br /> plans line by line.",
                                "mmLineSpecific": "Great, now let's pick a plan <br /> for",
                                "mmDefault": "Nice, let's review the plans on your account.",
                                "recommended": "See the recommendation(s) <br /> for your account."
                            },
                            "subHeader": {
                                "default": "Now let's take a look at what will change with your bill",
                                "nonHybrid": "You're currently on Mix & Match Unlimited Plan",
                                "hybrid": "You have multiple plans on your account",
                                "mmSubHeader": "You're currently on the Mix & Match Unlimited Plan",
                                "smartFamily": "Verizon Smart Family is included because you picked Just Kids. With Verizon Smart<br /> Family, you can set limits on purchases and data usage",
                                "recommended": "You're currently on Mix & Match Unlimited Plan"
                            },
                            "pendingOrderMessageNodes": {
                                "pendingOrderCancellableText": "Effective on your next bill cycle, ##EFFECTIVE_DATE##.",
                                "pendingAALSubheader": "You can't change your plan until you activate this device.",
                                "pendingOtherMsg": "You can’t change your plan until this order has been processed.",
                                "pendingOrderHeaderTextALP": "Your account has a pending plan change to ##PENDING_PLAN_NAME##.",
                                "pendingAALHeader": "You have a pending device activation.",
                                "pendingOrderHeaderText": "This line has a pending plan change to ##PENDING_PLAN_NAME##."
                            }
                        }
                    },
                    {
                        "sectionIndex": "1",
                        "sectionId": "exploreMMLineDetailsMiddleSection",
                        "sectionType": "exploreMMLineDetailsMiddleSection",
                        "actions": [
                            {
                                "actionType": "modal",
                                "actionValue": "ExploreMMSeeWhyRecommandModal",
                                "actionKey": "seeWhy",
                                "sectionId": "exploreMMSeeWhyRecommendModalSection",
                                "clickStream": "see-why-cta"
                            },
                            {
                                "actionType": "route",
                                "actionValue": "/ExploreMMPlan/plans/#index",
                                "actionKey": "changeThisPlan",
                                "sectionId": "exploreMM_PickPlanSection",
                                "clickStream": "change-this-plan-cta"
                            },
                            {
                                "actionType": "route",
                                "actionValue": "/ExploreMMPlan/plans/#index",
                                "actionKey": "pickAPlan",
                                "sectionId": "exploreMM_PickPlanSection",
                                "clickStream": "pick-plan-cta"
                            },
                            {
                                "actionType": "modal",
                                "actionValue": "/pendingOrder",
                                "actionKey": "viewPendingDetails",
                                "clickStream": "view-pending-order-details-cta"
                            },
                            {
                                "actionType": "route",
                                "actionValue": "/exploremmplan",
                                "actionKey": "pickThisPlan",
                                "clickStream": "pick-recommended-plan-cta"
                            }
                        ],
                        "contents": [
                            {
                                "contentIndex": "0",
                                "contentComponentId": "LineComponent",
                                "contentType": "llp_line",
                                "contentActionId": "null",
                                "items": [
                                    {
                                        "itemKey": "lineDetails",
                                        "itemType": "list",
                                        "dataKey": "9188038823",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "recommendText",
                                        "itemType": "text",
                                        "itemValue": "We recommend ",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "seeWhyLink",
                                        "itemType": "link",
                                        "itemValue": "See why",
                                        "itemAttributes": {},
                                        "actionKey": "seeWhy"
                                    },
                                    {
                                        "itemKey": "changeThisPlanLink",
                                        "itemType": "link",
                                        "itemValue": "Change this plan",
                                        "itemAttributes": {},
                                        "actionKey": "changeThisPlan"
                                    },
                                    {
                                        "itemKey": "changeThisPlanLink_v2",
                                        "itemType": "link",
                                        "itemValue": "Change plan",
                                        "itemAttributes": {},
                                        "actionKey": "changeThisPlan"
                                    },
                                    {
                                        "itemKey": "seeWhyLink_v2",
                                        "itemType": "link",
                                        "itemValue": "See why we recommend",
                                        "itemAttributes": {},
                                        "actionKey": "seeWhy"
                                    },
                                    {
                                        "itemKey": "viewPendingDetailsLink",
                                        "itemType": "link",
                                        "itemValue": "View details",
                                        "itemAttributes": {},
                                        "actionKey": "viewPendingDetails"
                                    },
                                    {
                                        "itemKey": "updatedPlanText",
                                        "itemType": "text",
                                        "itemValue": "Updated plan",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "currentHeader",
                                        "itemType": "text",
                                        "itemValue": "Current: ",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "currentPlanRecommended",
                                        "itemType": "text",
                                        "itemValue": "We recommend you stay on your current plan.",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "pickThisPlan",
                                        "itemType": "link",
                                        "itemValue": "Pick this plan",
                                        "itemAttributes": {},
                                        "actionKey": "pickThisPlan"
                                    },
                                    {
                                        "itemKey": "pickAPlanButton",
                                        "itemType": "button",
                                        "itemValue": "Pick a plan",
                                        "itemAttributes": {},
                                        "actionKey": "pickAPlan"
                                    },
                                    {
                                        "itemKey": "pickAPlanButtonNew",
                                        "itemType": "button",
                                        "itemValue": "Select plan",
                                        "itemAttributes": {},
                                        "actionKey": "pickAPlan"
                                    },
                                    {
                                        "itemKey": "changeThisPlanLink_v3",
                                        "itemType": "link",
                                        "itemValue": "Edit",
                                        "itemAttributes": {},
                                        "actionKey": "changeThisPlan"
                                    }
                                ]
                            }
                        ],
                        "data": {
                            "9188038823": {
                                "lossOfCloudFeature": false,
                                "mtn": "9188038823",
                                "displayMtn": "918.803.8823",
                                "modelName": "Verizon Internet Gateway",
                                "mtnHashCode": "fcb3dc3bb44a656d3819d3fff8952c316610ab366245f4e5c515366f6ad839b5",
                                "nickName": "Sai-8823",
                                "accountOwner": false,
                                "accountManager": true,
                                "currentLLPId": "67571",
                                "device4G": false,
                                "device5GE": false,
                                "device5GA": true,
                                "smartPhone": false,
                                "recommended": false,
                                "basicPhone": false,
                                "suppressApoMsg": false,
                                "has5GUWBPlan": false,
                                "displayDeviceCategory": "OTHER",
                                "lineLevelPromoMsg": "",
                                "canBeSmartFamilyParent": false,
                                "currentSmartFamilyPrimaryParent": false,
                                "cpcRestricted": false,
                                "currentPlanName": "5G HOME",
                                "deviceType": "4GE",
                                "selectedLLPId": "67571",
                                "singlePlanAvailableMsg": "This is the only plan that's available for this device.",
                                "availablePlans": [
                                    {
                                        "planId": "67576",
                                        "planName": "5G HOME PLUS",
                                        "finalCost": "80.00",
                                        "totalCost": "80.00",
                                        "lossOfDiscount": false,
                                        "lossOfCloudFeature": false,
                                        "selectable": true,
                                        "discountPrice": "",
                                        "eligibleAutopayDiscount": "10.00",
                                        "recommended": false,
                                        "hasPromoDisqualification": false,
                                        "promoDisqMsgTemplate": "",
                                        "promoGifteePlan": false,
                                        "promoGifterPlan": false,
                                        "hasCDDiscountApplied": false,
                                        "ecpdDiscountMessage": "",
                                        "has5GUWBPlan": false,
                                        "hasRebateOffer": false,
                                        "anchorRequired": false,
                                        "anchorable": false,
                                        "showEligibilityLink": false,
                                        "has5GMsg": "Home internet you can count on, with our best extras yet.",
                                        "mixAndMatch4": false,
                                        "autopayDiscount": "",
                                        "mixAndMatch": false,
                                        "welcomeUnlimited": false,
                                        "displaySeqNum": 0,
                                        "offered": false
                                    },
                                    {
                                        "planId": "67571",
                                        "planName": "5G HOME",
                                        "finalCost": "60.00",
                                        "totalCost": "60.00",
                                        "lossOfDiscount": false,
                                        "lossOfCloudFeature": false,
                                        "selectable": true,
                                        "discountPrice": "",
                                        "eligibleAutopayDiscount": "10.00",
                                        "recommended": true,
                                        "hasPromoDisqualification": false,
                                        "promoDisqMsgTemplate": "",
                                        "promoGifteePlan": false,
                                        "promoGifterPlan": false,
                                        "hasCDDiscountApplied": false,
                                        "ecpdDiscountMessage": "",
                                        "has5GUWBPlan": false,
                                        "hasRebateOffer": false,
                                        "anchorRequired": false,
                                        "anchorable": false,
                                        "showEligibilityLink": false,
                                        "has5GMsg": "Home internet you can count on, with our best extras yet.",
                                        "mixAndMatch4": false,
                                        "autopayDiscount": "",
                                        "mixAndMatch": false,
                                        "welcomeUnlimited": false,
                                        "displaySeqNum": 0,
                                        "offered": false
                                    }
                                ],
                                "userTypeText": "Manager",
                                "deviceImageUrl": "https://ss7.vzw.com/is/image/VerizonWireless/vzw-internet-gateway-askey-titan-2-router-white-arc-xci55ax?$device-lg$",
                                "hasCloudFeature": false,
                                "numberShareParent": "",
                                "suspendedWithBilling": false,
                                "suspendedWithoutBilling": false,
                                "numberShareParent_v2": "",
                                "numberShareTooltip": "This line shares a plan and data with your NumberShare parent line.",
                                "pendingOrderMessage": "This line has a pending plan change.",
                                "hasPendingOrder": false,
                                "singlePlanAvailableMsg_v2": "This device only has one plan option.",
                                "currentPlanCost": "$60",
                                "pendingOrderType": "",
                                "currentDiscountedPrice": "",
                                "currentDiscountedMsg": "",
                                "autopayEnrolled": false,
                                "autopayDiscountPrice": "$10",
                                "rebateOfferCode": "",
                                "rebateOfferTemplate": "",
                                "rebateOfferId": "",
                                "currentPlanAnchorable": false,
                                "currentPromoGifterPlan": false,
                                "promoGifteeLine": false,
                                "networkBandwidthType": "CBD",
                                "loyaltyDiscount": [],
                                "deviceCategory": "homeDevice",
                                "currentPerks": []
                            },
                            "promoPairingStatusMessage": "",
                            "autoPayWithPaperlessInd": false,
                            "suppressApoMsg": false,
                            "frenable": true,
                            "promoPairingStatusMessage_v2": ""
                        }
                    },
                    {
                        "sectionIndex": "3",
                        "sectionId": "exploreMMLineDetailsBottomSection",
                        "sectionType": "exploreMMLineDetailsBottomSection",
                        "sectionComponentId": "Footer",
                        "actions": [
                            {
                                "actionType": "route",
                                "actionValue": "/ExploreMMPlan/planChanges/comparePlans",
                                "actionKey": "continue",
                                "sectionId": "exploreMMPlanDetailsModalSection",
                                "clickStream": "continue-to-compare-cta"
                            },
                            {
                                "actionType": "http",
                                "actionValue": "https://www.verizon.com/military/",
                                "actionKey": "militaryLink",
                                "clickStream": "military-link-cta"
                            },
                            {
                                "actionType": "http",
                                "actionValue": "https://www.verizon.com/featured/first-responders/",
                                "actionKey": "firstRespondorLink",
                                "clickStream": "first-responder-link-cta"
                            },
                            {
                                "actionType": "route",
                                "actionValue": "#/confirm",
                                "actionKey": "confirmButtonText_v2",
                                "clickStream": "confirm-plan-change-cta"
                            },
                            {
                                "actionType": "route",
                                "actionValue": "/",
                                "actionKey": "cancelText",
                                "clickStream": "cancel-plan-change-cta"
                            },
                            {
                                "actionType": "route",
                                "actionValue": "#/confirmation?flow=ezcpc",
                                "actionKey": "confirmButtonText",
                                "clickStream": "confirm-plan-change-cta"
                            }
                        ],
                        "contents": [
                            {
                                "contentIndex": "0",
                                "items": [
                                    {
                                        "itemKey": "continueButton",
                                        "itemType": "button",
                                        "itemValue": "Continue",
                                        "itemAttributes": {},
                                        "actionKey": "continue"
                                    },
                                    {
                                        "itemKey": "militaryText",
                                        "itemType": "text",
                                        "itemValue": "Learn about our special discounts for military families",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "militaryLink",
                                        "itemType": "link",
                                        "itemValue": "Read more",
                                        "itemAttributes": {},
                                        "actionKey": "militaryLink"
                                    },
                                    {
                                        "itemKey": "militaryDiscountText",
                                        "itemType": "text",
                                        "itemValue": "Military and first responder discounts available. Learn more after you choose new plans for this account",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "firstRespondorText",
                                        "itemType": "text",
                                        "itemValue": "Learn about our special discounts for first responder families",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "firstRespondorLink",
                                        "itemType": "link",
                                        "itemValue": "Read more",
                                        "itemAttributes": {},
                                        "actionKey": "firstRespondorLink"
                                    },
                                    {
                                        "itemKey": "currectPlanCostHeader",
                                        "itemType": "text",
                                        "itemValue": "Current plan cost",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "newPlanCostHeader",
                                        "itemType": "text",
                                        "itemValue": "New plan cost",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "pickPlanInfoText",
                                        "itemType": "text",
                                        "itemValue": "Pick a plan for each line to see new plan cost.",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "pendingOrderCancelledSuccessMessage",
                                        "itemType": "span",
                                        "itemValue": "The pending order has been canceled.",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "pendingOrderCancelledFailureMessage",
                                        "itemType": "span",
                                        "itemValue": "The pending order could not be canceled at this time.",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "pendingOrderCancelledFailureDescription",
                                        "itemType": "span",
                                        "itemValue": "To continue with your plan change, please contact customer care at (800) 922-0204 Monday-Sunday from 6am-11pm.",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "totalCurrentPlanCost",
                                        "itemType": "text",
                                        "itemValue": "$60",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "totalCurrentPlanCostSuffix",
                                        "itemType": "text",
                                        "itemValue": "/mo",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "llpPlanInfoText",
                                        "itemType": "text",
                                        "itemValue": "Pick a plan on any line to see the new plan cost.",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "simplifiedHeaderText",
                                        "itemType": "text",
                                        "itemValue": "Here's what would change",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "pickAllPlansText",
                                        "itemType": "text",
                                        "itemValue": "You'll see all plan and account changes once you pick a plan for all lines.",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "simplifiedHeaderText1",
                                        "itemType": "text",
                                        "itemValue": "Here's how your bill will change",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "effectiveDateHeaderText",
                                        "itemType": "text",
                                        "itemValue": "Effective date",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "effectiveDateText",
                                        "itemType": "text",
                                        "itemValue": "Select effective date",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "effectiveDateSubHeaderText",
                                        "itemType": "text",
                                        "itemValue": "Pick when you'd like your new plan to start.",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "currentBillHeader",
                                        "itemType": "text",
                                        "itemValue": "Current bill",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "newBillHeader",
                                        "itemType": "text",
                                        "itemValue": "New bill*",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "newBillText",
                                        "itemType": "text",
                                        "itemValue": "Select plans for all lines and effective date to see bill costs.",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "billFooterText",
                                        "itemType": "text",
                                        "itemValue": "*Totals are estimated. Taxes, fees and surcharges will be itemized on your next bill.",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "confirmButtonText",
                                        "itemType": "text",
                                        "itemValue": "Confirm plan change",
                                        "itemAttributes": {},
                                        "actionKey": "confirmButtonText"
                                    },
                                    {
                                        "itemKey": "cancelLinkText",
                                        "itemType": "text",
                                        "itemValue": "Cancel",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "taxHeaderText",
                                        "itemType": "text",
                                        "itemValue": "Taxes, Surcharges and Fees",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "taxSubHeaderText",
                                        "itemType": "text",
                                        "itemValue": "We use your service address for each wireless service line to determine how we bill taxes, other governmental charges, and Verizon surcharges (which are Verizon's charges, not taxes). As of January 10, 2023, for service other than 5G Home and LTE Home (which are not subject to these charges), these charges can add between 13% and 48% to your standard monthly access and other charges, and may include a Federal Universal Service Charge (32.6% of the interstate and international telecom charges; varies quarterly based on FCC rate), Regulatory Charge (9 cents per voice line, 2 cents per data-only line) and Administrative and Telco Recovery Charge ($3.30 per voice line, $1.40 per data-only line). Taxes, other governmental charges, and Verizon surcharges are subject to change. For more details on these charges, call 1-888-684-1888.",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "pendingOtherMsg",
                                        "itemType": "text",
                                        "itemValue": "You can’t change your plan until this order has been processed.",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "pendingAALSubheader",
                                        "itemType": "text",
                                        "itemValue": "You can't change your plan until you activate this device.",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "pendingAALHeader",
                                        "itemType": "text",
                                        "itemValue": "You have a pending device activation.",
                                        "itemAttributes": {}
                                    }
                                ]
                            }
                        ],
                        "data": {}
                    }
                ]
            },
            {
                "sectionIndex": "6",
                "sectionId": "exploreMMCloudFeatureModalSection",
                "sectionType": "exploreMMCloudFeatureModalSection",
                "sectionComponentId": "ExploreMMCloudModalSection",
                "actions": [
                    {
                        "actionType": "route",
                        "actionValue": "/exploremmplan",
                        "actionKey": "continueLink",
                        "sectionId": "exploreMM_PickPlanSection",
                        "clickStream": "explore-mm-cloud-continue-cta"
                    }
                ],
                "contents": [
                    {
                        "items": [
                            {
                                "itemKey": "headerText",
                                "itemType": "text",
                                "itemValue": "Heads up, here's what's about to change for Verizon Cloud.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "cloudText",
                                "itemType": "list",
                                "dataKey": "cloudData",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "continueLink",
                                "itemType": "button",
                                "itemValue": "Continue",
                                "itemAttributes": {},
                                "actionKey": "continueLink"
                            }
                        ]
                    }
                ],
                "data": {
                    "cloudData": [
                        "If you switch this line from 5G HOME to any other plan, you will lose the 500GB of Verizon Cloud storage that is included in the current plan. If you are using Verizon Cloud, you'll get 30 free days to decide if you want to keep access to your photos, videos and contacts.",
                        "In case you decide to end your subscription, all content that's been uploaded to Verizon Cloud will be deleted. If you want to keep Verizon Cloud, you don't have to do anything and you'll start paying $5 a month after 30 days.",
                        "Once you've selected a new plan for this line, we'll show you where you can manage your Verizon Cloud settings or end your subscription."
                    ]
                }
            },
            {
                "sectionIndex": "7",
                "sectionId": "exploreMMLossOfDiscountModalSection",
                "sectionType": "exploreMMLossOfDiscountModalSection",
                "sectionComponentId": "ExploreMMLossOfDiscountModalSection",
                "actions": [
                    {
                        "actionType": "route",
                        "actionValue": "/exploremmplan",
                        "actionKey": "yesLink",
                        "sectionId": "exploreMM_PickPlanSection",
                        "clickStream": "explore-mm-discount-yes-cta"
                    },
                    {
                        "actionType": "route",
                        "actionKey": "noLink",
                        "sectionId": "exploreMMCloudFeatureModalSection",
                        "clickStream": "explore-mm-discount-no-cta"
                    }
                ],
                "contents": [
                    {
                        "contentIndex": "1",
                        "items": [
                            {
                                "itemKey": "discountTitle",
                                "itemType": "text",
                                "itemValue": "Just a heads up that once you switch your plan, you will no longer be eligible for the 50% off Unlimited Plan",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "discountText",
                                "itemType": "text",
                                "itemValue": "That means you'll have to pay a full price for your Unlimited plan. However, if you switch to Do More Unlimited or Get More Unlimited, you can still keep the Unlimited plan discount",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "discountQuestion",
                                "itemType": "text",
                                "itemValue": "Are you sure you want to continue with your plan change?",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "yesLink",
                                "itemType": "button",
                                "itemValue": "Yes, I'm sure",
                                "itemAttributes": {},
                                "actionKey": "yesLink"
                            },
                            {
                                "itemKey": "cancelLink",
                                "itemType": "button",
                                "itemValue": "Go back",
                                "itemAttributes": {},
                                "actionKey": "noLink"
                            }
                        ]
                    }
                ],
                "data": {}
            },
            {
                "sectionIndex": "8",
                "sectionId": "exploreMMParentalControlModalSection",
                "sectionType": "exploreMMParentalControlModalSection",
                "sectionComponentId": "ExploreMMParentalControlModal",
                "actions": [
                    {
                        "actionType": "/route",
                        "actionValue": "/ExploreMMPlan/planChanges/comparePlans",
                        "actionKey": "gotIt",
                        "clickStream": "got-it-cta"
                    }
                ],
                "contents": [
                    {
                        "contentIndex": "0",
                        "items": [
                            {
                                "itemKey": "headerText",
                                "itemType": "text",
                                "itemValue": "#LINE_NAME# will remain the Primary Parent for your Just Kids line",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "oneLineHeaderText",
                                "itemType": "text",
                                "itemValue": "#LINE_NAME# is now the Primary Parent to your Just Kids line",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "multiLineHeaderText",
                                "itemType": "text",
                                "itemValue": "You've picked #LINE_NAME# to manage your Just Kids line",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "message1",
                                "itemType": "text",
                                "itemValue": "You can use Verizon Smart Family Premium&trade; to choose up to 20 trusted contacts on your kid's line, set content filters to block inappropriate content, limit access to certain applications, and more. All phones on your account have been added as trusted contacts for your Just Kids line, which count towards the 20 trusted contacts",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "message2",
                                "itemType": "text",
                                "itemValue": "Manage your settings and trusted contacts at any time using the My Verizon app or the Verizon Smart Family app, where you can also track your kids location",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "gotItButton",
                                "itemType": "button",
                                "itemValue": "Got it",
                                "itemAttributes": {},
                                "actionKey": "gotIt"
                            }
                        ]
                    }
                ],
                "data": {}
            },
            {
                "sectionIndex": "10",
                "sectionId": "exploreMM_ParentalControlSection",
                "sectionType": "exploreMM_ParentalControlSection",
                "sectionComponentId": "exploreMM_ParentalControl",
                "actions": [
                    {
                        "actionType": "modal",
                        "actionKey": "pickButton",
                        "sectionId": "exploreMMParentalControlModalSection",
                        "clickStream": "pick-parent-line-cta"
                    }
                ],
                "contents": [
                    {
                        "contentIndex": "explore_mm_pick_line",
                        "items": [
                            {
                                "itemKey": "oneLineHeaderText",
                                "itemType": "text",
                                "itemValue": "Manage the usage on your Just Kids lines with Verizon Smart Family",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "multiLineHeaderText",
                                "itemType": "text",
                                "itemValue": "Let's pick a parent to manage the usage on your Just Kids line",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "oneLineSubHeaderText",
                                "itemType": "text",
                                "itemValue": "This line will manage the usage because it's the only smartphone line that doesn't have Just Kids",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "multiLineSubHeaderText",
                                "itemType": "text",
                                "itemValue": "In Verizon Smart Family, you can always add another person to help manage your kid's usage",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "lineDetails",
                                "itemType": "list",
                                "dataKey": "lineDetailsList",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "pickButton",
                                "itemType": "button",
                                "itemValue": "Pick this line",
                                "itemAttributes": {},
                                "actionKey": "pickButton"
                            }
                        ]
                    }
                ],
                "data": {}
            },
            {
                "sectionIndex": "11",
                "sectionId": "exploreMMDisneyModalSection",
                "sectionType": "exploreMMDisneyModalSection",
                "sectionComponentId": "ExploreMMDisneyModalSection",
                "actions": [
                    {
                        "actionType": "modal",
                        "actionValue": "ExploreMMDisneyModalSection",
                        "actionKey": "closeLink",
                        "clickStream": "explore_MM_apple_music_close"
                    }
                ],
                "contents": [
                    {
                        "items": [
                            {
                                "itemKey": "descText",
                                "itemType": "html",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "closeLink",
                                "itemType": "link",
                                "itemValue": "Go It",
                                "itemAttributes": {},
                                "actionKey": "closeLink"
                            }
                        ]
                    }
                ],
                "data": {},
                "dataUrl": "https://www.verizon.com/reusable-content/offers/disney-plus.html"
            },
            {
                "sectionIndex": "2",
                "sectionId": "exploreMM_ApplyPlanSection",
                "sectionType": "exploreMM_ApplyPlanSection",
                "sectionComponentId": "ExploreMMApplyPlanComp",
                "sections": [
                    {
                        "sectionIndex": "0",
                        "sectionId": "exploreMMApplyPlanTopSection",
                        "sectionType": "exploreMMApplyPlanTopSection",
                        "sectionComponentId": "ApplyPlanComponent",
                        "actions": [
                            {
                                "actionType": "route",
                                "actionValue": "/ExploreMMPlan",
                                "actionKey": "applyPlan",
                                "clickStream": "exploreMM_apply_plan"
                            }
                        ],
                        "contents": [
                            {
                                "contentIndex": "0",
                                "contentComponentId": "ApplyPlan",
                                "contentType": "apply_plan",
                                "items": [
                                    {
                                        "itemKey": "headerText",
                                        "itemType": "text",
                                        "itemValue": "Apply #PLAN_NAME# to all phone lines?",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "subHeaderText",
                                        "itemType": "text",
                                        "itemValue": "You can pick the same Unlimited plan for all of the lines on your account or go mix and match different plans for each line.",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "applyButton",
                                        "itemType": "button",
                                        "itemValue": "Apply to this line",
                                        "itemAttributes": {},
                                        "actionKey": "applyPlan"
                                    },
                                    {
                                        "itemKey": "applyAllButton",
                                        "itemType": "button",
                                        "itemValue": "Apply to all",
                                        "itemAttributes": {},
                                        "actionKey": "applyPlan"
                                    }
                                ]
                            }
                        ],
                        "data": {}
                    }
                ],
                "data": {}
            },
            {
                "sectionIndex": "13",
                "sectionId": "exploreMMPromoDisqualificationSection",
                "sectionType": "exploreMMPromoDisqualificationSection",
                "sectionComponentId": "ExploreMMPromoDisqualificationSection",
                "actions": [
                    {
                        "actionType": "route",
                        "actionValue": "/exploremmplan",
                        "actionKey": "continueBtn",
                        "clickStream": "continue-cta"
                    },
                    {
                        "actionType": "route",
                        "actionValue": "/",
                        "actionKey": "cancelBtn",
                        "clickStream": "cancel-cta"
                    }
                ],
                "contents": [
                    {
                        "contentIndex": "1",
                        "contentComponentId": "DQ_N_DiscountLossMessage",
                        "contentType": "DQ_N_DiscountLossMessage",
                        "items": [
                            {
                                "itemKey": "header",
                                "itemType": "text",
                                "itemValue": "By switching plans, you'll lose your discount.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "body",
                                "itemType": "text",
                                "itemValue": "You are currently receiving a promotional discount based on your current plan. Switching will end this discount at the end of your next bill cycle.",
                                "itemAttributes": {}
                            }
                        ]
                    },
                    {
                        "contentIndex": "2",
                        "contentComponentId": "DQ_Y_DiscountLossMessage",
                        "contentType": "DQ_Y_DiscountLossMessage",
                        "items": [
                            {
                                "itemKey": "header",
                                "itemType": "text",
                                "itemValue": "By switching plans, you'll lose your discount.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "body",
                                "itemType": "text",
                                "itemValue": "You are currently receiving a promotional discount based on your current plan. Switching will end this discount once the plan change goes into effect.",
                                "itemAttributes": {}
                            }
                        ]
                    },
                    {
                        "contentIndex": "3",
                        "contentComponentId": "SP_DQ_N_DiscountLossMessage",
                        "contentType": "SP_DQ_N_DiscountLossMessage",
                        "items": [
                            {
                                "itemKey": "header",
                                "itemType": "text",
                                "itemValue": "By switching plans, you'll lose your discount.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "body",
                                "itemType": "text",
                                "itemValue": "You are currently receiving a promotional discount based on your current plan. Switching will end this discount at the end of your next bill cycle.",
                                "itemAttributes": {}
                            }
                        ]
                    },
                    {
                        "contentIndex": "4",
                        "contentComponentId": "SP_DQ_Y_DiscountLossMessage",
                        "contentType": "SP_DQ_Y_DiscountLossMessage",
                        "items": [
                            {
                                "itemKey": "header",
                                "itemType": "text",
                                "itemValue": "By switching plans, you'll lose your discount.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "body",
                                "itemType": "text",
                                "itemValue": "You are currently receiving a promotional discount based on your current plan. Switching will end this discount once the plan change goes into effect.",
                                "itemAttributes": {}
                            }
                        ]
                    },
                    {
                        "contentIndex": "5",
                        "contentComponentId": "BG_DQ_N_DiscountLossMessage",
                        "contentType": "BG_DQ_N_DiscountLossMessage",
                        "items": [
                            {
                                "itemKey": "header",
                                "itemType": "text",
                                "itemValue": "By switching plans, you'll lose your discount.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "body",
                                "itemType": "text",
                                "itemValue": "You are currently receiving a promotional discount based on your current plan. Switching will end this discount at the end of your next bill cycle.",
                                "itemAttributes": {}
                            }
                        ]
                    },
                    {
                        "contentIndex": "6",
                        "contentComponentId": "BG_DQ_Y_DiscountLossMessage",
                        "contentType": "BG_DQ_Y_DiscountLossMessage",
                        "items": [
                            {
                                "itemKey": "header",
                                "itemType": "text",
                                "itemValue": "By switching plans, you'll lose your discount.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "body",
                                "itemType": "text",
                                "itemValue": "You are currently receiving a promotional discount based on your current plan. Switching will end this discount once the plan change goes into effect.",
                                "itemAttributes": {}
                            }
                        ]
                    },
                    {
                        "contentIndex": "7",
                        "contentComponentId": "SR_DQ_N_DiscountLossMessage",
                        "contentType": "SR_DQ_N_DiscountLossMessage",
                        "items": [
                            {
                                "itemKey": "header",
                                "itemType": "text",
                                "itemValue": "By switching plans, you'll lose your discount.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "body",
                                "itemType": "text",
                                "itemValue": "You are currently receiving a promotional discount based on your current plan. Switching will end this discount at the end of your next bill cycle.",
                                "itemAttributes": {}
                            }
                        ]
                    },
                    {
                        "contentIndex": "8",
                        "contentComponentId": "SR_DQ_Y_DiscountLossMessage",
                        "contentType": "SR_DQ_Y_DiscountLossMessage",
                        "items": [
                            {
                                "itemKey": "header",
                                "itemType": "text",
                                "itemValue": "By switching plans, you'll lose your discount.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "body",
                                "itemType": "text",
                                "itemValue": "You are currently receiving a promotional discount based on your current plan. Switching will end this discount once the plan change goes into effect.",
                                "itemAttributes": {}
                            }
                        ]
                    },
                    {
                        "contentIndex": "9",
                        "contentComponentId": "ReEligible_PromoGainMessage",
                        "contentType": "ReEligible_PromoGainMessage",
                        "items": [
                            {
                                "itemKey": "header",
                                "itemType": "text",
                                "itemValue": "Switching this line's plan will restore your discount.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "body",
                                "itemType": "text",
                                "itemValue": "Good news, you'll keep your current promotional discount through the remainder of the promotion's term as long as you meet eligibility requirements.",
                                "itemAttributes": {}
                            }
                        ]
                    },
                    {
                        "contentIndex": "10",
                        "contentComponentId": "Eligible_ValueChangeMessage",
                        "contentType": "Eligible_ValueChangeMessage",
                        "items": [
                            {
                                "itemKey": "header",
                                "itemType": "text",
                                "itemValue": "Switching this line's plan may change your discount.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "body",
                                "itemType": "text",
                                "itemValue": "You are currently receiving a promotional discount. If you switch to the selected plan, your discount may change in value.",
                                "itemAttributes": {}
                            }
                        ]
                    },
                    {
                        "contentIndex": "11",
                        "contentComponentId": "Generic_DiscountLossMessage",
                        "contentType": "Generic_DiscountLossMessage",
                        "items": [
                            {
                                "itemKey": "header",
                                "itemType": "text",
                                "itemValue": "By changing plans, your discount will end on one or more lines.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "body",
                                "itemType": "text",
                                "itemValue": "You are currently receiving a promotional discount on one or more lines on your account. Changing plans will end one or more of your discounts.",
                                "itemAttributes": {}
                            }
                        ]
                    },
                    {
                        "contentIndex": "12",
                        "contentComponentId": "common",
                        "contentType": "common",
                        "items": [
                            {
                                "itemKey": "continueBtn",
                                "itemType": "button",
                                "itemValue": "Continue",
                                "itemAttributes": {},
                                "actionKey": "continueBtn"
                            },
                            {
                                "itemKey": "cancelBtn",
                                "itemType": "button",
                                "itemValue": "Cancel",
                                "itemAttributes": {},
                                "actionKey": "cancelBtn"
                            }
                        ]
                    },
                    {
                        "contentIndex": "13",
                        "contentComponentId": "Generic_DiscountChangeMessage_WithinWFG",
                        "contentType": "Generic_DiscountChangeMessage_WithinWFG",
                        "items": [
                            {
                                "itemKey": "header",
                                "itemType": "text",
                                "itemValue": "By changing plans, your discount may change or end on one or more lines.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "body",
                                "itemType": "text",
                                "itemValue": "You are currently receiving a promotional discount on one or more lines on your account. Changing plans may change or end one or more of your discounts.",
                                "itemAttributes": {}
                            }
                        ]
                    },
                    {
                        "contentIndex": "14",
                        "contentComponentId": "Generic_DiscountChangeMessage_OutsideWFG",
                        "contentType": "Generic_DiscountChangeMessage_OutsideWFG",
                        "items": [
                            {
                                "itemKey": "header",
                                "itemType": "text",
                                "itemValue": "By changing plans, your discount will end on one or more lines.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "body",
                                "itemType": "text",
                                "itemValue": "You are currently receiving a promotional discount on one or more lines on your account. Changing plans will end one or more of your discounts.",
                                "itemAttributes": {}
                            }
                        ]
                    },
                    {
                        "contentIndex": "13",
                        "contentComponentId": "BYOD_DQ_N_DiscountLossMessage",
                        "contentType": "BYOD_DQ_N_DiscountLossMessage",
                        "items": [
                            {
                                "itemKey": "header",
                                "itemType": "text",
                                "itemValue": "By switching plans, you'll lose your discount.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "body",
                                "itemType": "text",
                                "itemValue": "You are currently receiving a promotional discount based on your current plan. Switching will end this discount at the end of your next bill cycle.",
                                "itemAttributes": {}
                            }
                        ]
                    },
                    {
                        "contentIndex": "16",
                        "contentComponentId": "BYOD_DQ_Y_DiscountLossMessage",
                        "contentType": "BYOD_DQ_Y_DiscountLossMessage",
                        "items": [
                            {
                                "itemKey": "header",
                                "itemType": "text",
                                "itemValue": "By switching plans, you'll lose your discount.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "body",
                                "itemType": "text",
                                "itemValue": "You are currently receiving a promotional discount based on your current plan. Switching will end this discount once the plan change goes into effect.",
                                "itemAttributes": {}
                            }
                        ]
                    }
                ],
                "data": {}
            },
            {
                "sectionIndex": "14",
                "sectionId": "exploreMMRebateOfferSection",
                "sectionType": "exploreMMRebateOfferSection",
                "sectionComponentId": "exploreMMRebateOfferSection",
                "actions": [
                    {
                        "actionType": "route",
                        "actionValue": "/exploremmplan",
                        "actionKey": "understandBtn",
                        "clickStream": "i-understand-cta"
                    },
                    {
                        "actionType": "route",
                        "actionValue": "/manageplan",
                        "actionKey": "keepMyPlanBtn",
                        "clickStream": "keep-my-plan-cta"
                    },
                    {
                        "actionType": "route",
                        "actionValue": "/",
                        "actionKey": "seeDetailsLink",
                        "clickStream": "see-rebate-offer-details-cta"
                    }
                ],
                "contents": [
                    {
                        "contentIndex": "1",
                        "contentComponentId": "DQ_RebateOfferLossMessage",
                        "contentType": "DQ_RebateOfferLossMessage",
                        "items": [
                            {
                                "itemKey": "header",
                                "itemType": "html",
                                "itemValue": "Your current rebate will be affected if you change plans.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "body",
                                "itemType": "text",
                                "itemValue": "You are currently eligible for a #OFFER_TYPE# rebate. Switching to this plan will invalidate your rebate offer.",
                                "itemAttributes": {}
                            }
                        ]
                    },
                    {
                        "contentIndex": "2",
                        "contentComponentId": "common",
                        "contentType": "common",
                        "items": [
                            {
                                "itemKey": "understandBtn",
                                "itemType": "button",
                                "itemValue": "I understand",
                                "itemAttributes": {},
                                "actionKey": "understandBtn"
                            },
                            {
                                "itemKey": "keepMyPlanBtn",
                                "itemType": "button",
                                "itemValue": "Keep my plan",
                                "itemAttributes": {},
                                "actionKey": "keepMyPlanBtn"
                            },
                            {
                                "itemKey": "seeDetailsLink",
                                "itemType": "link",
                                "itemValue": "See Details",
                                "itemAttributes": {},
                                "actionKey": "seeDetailsLink"
                            }
                        ]
                    }
                ],
                "data": {}
            },
            {
                "sectionIndex": "3",
                "sectionId": "exploreMMPlanEligibilityRequirementsModalSection",
                "sectionType": "exploreMMPlanEligibilityRequirementsModalSection",
                "sectionComponentId": "ExploreMMPlanEligibilityRequirementsModalSection",
                "actions": [
                    {
                        "actionType": "route",
                        "actionValue": "/exploremmplan",
                        "actionKey": "gotItButton",
                        "clickStream": "got-it-cta"
                    }
                ],
                "contents": [
                    {
                        "contentIndex": "0",
                        "items": [
                            {
                                "itemKey": "headerText",
                                "itemType": "text",
                                "itemValue": "Essential and Plus plans require an existing device on an eligible plan.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "eligiblePlansIncludetext",
                                "itemType": "text",
                                "itemValue": "Eligible plans include:",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "smartphonePlanstext",
                                "itemType": "html",
                                "itemValue": "<b>Smartphones:</b> Start Unlimited, Play More Unlimited, Do More Unlimited, Get More Unlimited",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "tabletPlanstext",
                                "itemType": "html",
                                "itemValue": "<b>Tablets and laptops:</b> Unlimited, Unlimited Plus",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "hotspotPlanstext",
                                "itemType": "html",
                                "itemValue": "<b>Mobile hotspot devices:</b> Pro, Premium",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "gotItButton",
                                "itemType": "button",
                                "itemValue": "Got it",
                                "itemAttributes": {},
                                "actionKey": "gotItButton"
                            }
                        ]
                    }
                ],
                "data": {}
            },
            {
                "sectionIndex": "5",
                "sectionId": "exploreMMPlan45SeeNewPhoneOfferDetailsModalSection",
                "sectionType": "exploreMMPlan45SeeNewPhoneOfferDetailsModalSection",
                "sectionComponentId": "exploreMMPlan45SeeNewPhoneOfferDetailsModalSection",
                "actions": [
                    {
                        "actionKey": "gotItButton",
                        "clickStream": "see-detail-modal-continue-cta"
                    }
                ],
                "contents": [
                    {
                        "contentIndex": "1",
                        "items": [
                            {
                                "itemKey": "headerText",
                                "itemType": "text",
                                "itemValue": "Up to ##OFFER_PRICE## on select 5G phones",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "bodyContent",
                                "itemType": "html",
                                "itemValue": "<p>With select trade-in and select 5G Unlimited plans. 5G Ultra Wideband available in select areas. 5G Nationwide available in 2700+ cities. Up to $1899.99 device payment purchase w/new smartphone line on 5G Do More, 5G Play More and 5G Get More Unlimited plans req'd. Less up to ##OFFER_PRICE## trade-in/promo credit applied over 36 mos.; promo credit ends if eligibility req's are no longer met; 0% APR. Trade-in conditions apply.</p>",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "footerBodyContent",
                                "itemType": "text",
                                "itemValue": "Get up to $1000 device payment purchase per phone w/ 1 new smartphone line required. Less up to $1000 promo credit applied over 24 or 30 momths depending on device combination and selected plans, promo credits end if eligiblity requirements are no longer met. 0% APR",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "gotItButton",
                                "itemType": "button",
                                "itemValue": "Got it",
                                "itemAttributes": {},
                                "actionKey": "gotItButton"
                            },
                            {
                                "itemKey": "newBodyContent",
                                "itemType": "html",
                                "itemValue": "<p>With select trade-in and select 5G Unlimited plans. 5G Ultra Wideband available in select areas. 5G Nationwide available in 2700+ cities. Up to ##PAYMENT_PRICE## device payment purchase w/new or upgrade smartphone line on One Unlimited for iPhone, 5G Do More, 5G Play More and 5G Get More Unlimited plans req'd. Less up to ##OFFER_PRICE## trade-in/promo credit applied over 36 mos.; promo credit ends if eligibility req’s are no longer met; 0% APR. Trade-in conditions apply.</p>",
                                "itemAttributes": {}
                            }
                        ]
                    }
                ],
                "data": {
                    "offerPrices": {
                        "50420_offerPrice": "$400",
                        "50434_offerPrice": "$800",
                        "60272_offerPrice": "$800",
                        "60270_offerPrice": "$800",
                        "50428_offerPrice": "$800",
                        "50432_offerPrice": "$800",
                        "50430_offerPrice": "$800",
                        "50427_offerPrice": "$400",
                        "50433_offerPrice": "$800",
                        "50431_offerPrice": "$800"
                    },
                    "paymentPrices": {
                        "50420_paymentPrice": "$399.99",
                        "60272_paymentPrice": "$799.99",
                        "60270_paymentPrice": "$799.99",
                        "50434_paymentPrice": "$799.99",
                        "50432_paymentPrice": "$799.99",
                        "50433_paymentPrice": "$799.99",
                        "50428_paymentPrice": "$799.99",
                        "50430_paymentPrice": "$799.99",
                        "50427_paymentPrice": "$399.99",
                        "50431_paymentPrice": "$799.99"
                    }
                }
            },
            {
                "sectionIndex": "5",
                "sectionId": "exploreMMPlan45StandaloneModalSection",
                "sectionType": "exploreMMPlan45StandaloneModalSection",
                "sectionComponentId": "exploreMMPlan45StandaloneModalSection",
                "actions": [
                    {
                        "actionKey": "continueBtnKey",
                        "clickStream": "stand-alone-modal-continue-cta"
                    },
                    {
                        "actionKey": "cancelBtnKey",
                        "clickStream": "stand-alone-modal-cancel-cta"
                    }
                ],
                "contents": [
                    {
                        "contentIndex": "1",
                        "items": [
                            {
                                "itemKey": "headerText",
                                "itemType": "text",
                                "itemValue": "This plan will be applied to all of your phone lines.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "subHeaderText",
                                "itemType": "text",
                                "itemValue": "##PLAN_NAME## isn't compatible with other plans on your account, so each line will get its own ##PLAN_NAME##",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "continueButton",
                                "itemType": "button",
                                "itemValue": "Continue",
                                "itemAttributes": {},
                                "actionKey": "continueBtnKey"
                            },
                            {
                                "itemKey": "cancelButton",
                                "itemType": "button",
                                "itemValue": "Cancel",
                                "itemAttributes": {},
                                "actionKey": "cancelBtnKey"
                            },
                            {
                                "itemKey": "subHeaderText_WelcomeUnlimited",
                                "itemType": "text",
                                "itemValue": "This plan isn't compatible with others on your account",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "headerText_WelcomeUnlimited",
                                "itemType": "text",
                                "itemValue": "You'll need to choose new plans for each of your lines.",
                                "itemAttributes": {}
                            }
                        ]
                    }
                ],
                "data": {}
            },
            {
                "sectionIndex": "97",
                "sectionId": "exploreMM_mm45ForkModal",
                "sectionType": "exploreMM_mm45ForkModal",
                "sectionComponentId": "exploreMM_mm45ForkModal",
                "actions": [
                    {
                        "actionType": "redirect",
                        "actionValue": "/ExploreMMPlan/standalone",
                        "actionKey": "mm45ExplorePlanButton",
                        "clickStream": "explore-plans-welcome-cta"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "/exploremmplan",
                        "actionKey": "unlimitedExplorePlanButton",
                        "clickStream": "explore-plan-mm-cta"
                    },
                    {
                        "actionType": "function",
                        "actionValue": "this.props.actions.showMM45ForkModal(false)",
                        "actionKey": "cancelLink",
                        "clickStream": "cancel-cta"
                    },
                    {
                        "actionType": "redirect",
                        "actionValue": "/ExploreMMPlan/oneunlimited",
                        "actionKey": "appleUnlimitedExplorePlanButton",
                        "clickStream": "explore-plan-apple-cta"
                    }
                ],
                "contents": [
                    {
                        "contentIndex": "0",
                        "contentType": "bodyContent",
                        "items": [
                            {
                                "itemKey": "headerText",
                                "itemType": "text",
                                "itemValue": "Which type of plan are you looking for ?",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "mm45PlanHeader",
                                "itemType": "text",
                                "itemValue": "Mix and Match the unlimited plans you want.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "mm45PlanSubHeader",
                                "itemType": "text",
                                "itemValue": "There's a 5G Unlimited plan for everyone, so you only pay for what you need.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "mm45BodyText",
                                "itemType": "text",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "recommendedText",
                                "itemType": "text",
                                "itemValue": "Recommended for you",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "mm45FeaturesList",
                                "itemType": "list",
                                "dataKey": "mm45PlanFeaturesList",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "unlimitedPlanFeaturesList",
                                "itemType": "list",
                                "dataKey": "unlimitedPlanFeaturesList",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "unlimitedPlanHeader",
                                "itemType": "text",
                                "itemValue": "An entry-level unlimited plan for all your lines.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "unlimitedPlanSubHeader",
                                "itemType": "text",
                                "itemValue": "Enjoy reliable 5G performance with Welcome Unlimited.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "mm45ExplorePlanButton",
                                "itemType": "button",
                                "itemValue": "Explore plans",
                                "itemAttributes": {},
                                "actionKey": "mm45ExplorePlanButton"
                            },
                            {
                                "itemKey": "unlimitedExplorePlanButton",
                                "itemType": "button",
                                "itemValue": "Explore plan",
                                "itemAttributes": {},
                                "actionKey": "unlimitedExplorePlanButton"
                            },
                            {
                                "itemKey": "appleUnlimitedExplorePlanButton",
                                "itemType": "button",
                                "itemValue": "Explore plan",
                                "itemAttributes": {},
                                "actionKey": "appleUnlimitedExplorePlanButton"
                            },
                            {
                                "itemKey": "cancelLink",
                                "itemType": "button",
                                "itemValue": "Cancel",
                                "itemAttributes": {},
                                "actionKey": "cancelLink"
                            },
                            {
                                "itemKey": "featureSepartionText",
                                "itemType": "text",
                                "itemValue": "or",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "appleUnlimitedPlanHeader",
                                "itemType": "text",
                                "itemValue": "An unlimited plan with your favorite Apple services.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "appleUnlimitedPlanSubHeader",
                                "itemType": "text",
                                "itemValue": "Get Apple One, included in our One Unlimited for iPhone plan.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "appleUnlimitedPlanFeaturesList",
                                "itemType": "list",
                                "dataKey": "appleUnlimitedPlanFeaturesList",
                                "itemAttributes": {}
                            }
                        ]
                    }
                ],
                "data": {
                    "unlimitedPlanFeaturesList": [
                        {
                            "valid": "true",
                            "feature": "Unlimited talk, text and data."
                        },
                        {
                            "valid": "true",
                            "feature": "Our best price for an Unlimited plan ever."
                        },
                        {
                            "valid": "false",
                            "feature": "Not eligible for device offers."
                        }
                    ],
                    "mm45PlanFeaturesList": [
                        {
                            "valid": "true",
                            "feature": "Upto 10x faster speeds with 5G Ultra Wideband, plus mobile hotspot."
                        },
                        {
                            "valid": "true",
                            "feature": "Entertainment inclusions like the Disney Bundle, Apple Music, & more."
                        },
                        {
                            "valid": "true",
                            "feature": "Our best offers on devices."
                        }
                    ],
                    "appleUnlimitedPlanFeaturesList": [
                        {
                            "valid": "true",
                            "feature": "Get our best network ever with 5G Ultra."
                        },
                        {
                            "valid": "true",
                            "feature": "Unlimited mobile hotspot."
                        },
                        {
                            "valid": "true",
                            "feature": "Our best offers on devices."
                        }
                    ]
                }
            },
            {
                "sectionIndex": "13",
                "sectionId": "friendlyExperience_availablePerks",
                "sectionType": "friendlyExperience_availablePerks",
                "sectionComponentId": "friendlyExperience_availablePerks",
                "actions": [
                    {
                        "actionType": "route",
                        "actionValue": "/exploremmplan",
                        "actionKey": "continueBtn",
                        "clickStream": "continue-cta"
                    },
                    {
                        "actionType": "route",
                        "actionValue": "/",
                        "actionKey": "cancelBtn",
                        "clickStream": "cancel-cta"
                    }
                ],
                "contents": [
                    {
                        "items": [
                            {
                                "itemKey": "headerText",
                                "itemType": "text",
                                "itemValue": "Choose your Extras.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "subHeaderText",
                                "itemType": "text",
                                "itemValue": "Only pay for what you need with exclusive savings. Change anytime you like.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "disclaimerText",
                                "itemType": "text",
                                "itemValue": "By continuing, you agree to the Terms and Conditions for the selected extras.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "continueWithNoExtrasText",
                                "itemType": "text",
                                "itemValue": "Continue with no Extras",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "continueWithExtrasText",
                                "itemType": "text",
                                "itemValue": "Continue with ##NUMBER## Extras",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "inProgressHeaderText",
                                "itemType": "text",
                                "itemValue": "You have added a perk(s), it may take a few minutes before you can activate.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "inProgressBannerText",
                                "itemType": "text",
                                "itemAttributes": {}
                            }
                        ]
                    }
                ],
                "data": {}
            },
            {
                "sectionIndex": "13",
                "sectionId": "friendlyExperience_recommendedPlans",
                "sectionType": "friendlyExperience_recommendedPlans",
                "sectionComponentId": "friendlyExperience_recommendedPlans",
                "actions": [
                    {
                        "actionType": "route",
                        "actionValue": "/exploremmplan",
                        "actionKey": "continueBtn",
                        "clickStream": "continue-cta"
                    },
                    {
                        "actionType": "route",
                        "actionValue": "/",
                        "actionKey": "cancelBtn",
                        "clickStream": "cancel-cta"
                    }
                ],
                "contents": [
                    {
                        "contentIndex": "1",
                        "contentComponentId": "Header",
                        "contentType": "Header",
                        "items": [
                            {
                                "itemKey": "header",
                                "itemType": "text",
                                "itemValue": "Our recommended plan",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "subHeader",
                                "itemType": "text",
                                "itemValue": "Customize to make it yours.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "linkText",
                                "itemType": "text",
                                "itemValue": "Learn more",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "popularPlantext",
                                "itemType": "text",
                                "itemValue": "Explore popular plans",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "learnWhyText",
                                "itemType": "text",
                                "itemValue": "Learn why",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "selectPlanText",
                                "itemType": "text",
                                "itemValue": "Select this plan",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "closeCtaText",
                                "itemType": "text",
                                "itemValue": "Close",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "learnWhyHeaderText",
                                "itemType": "text",
                                "itemValue": "Here’s why we recommend this plan.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "recommTileName",
                                "itemType": "text",
                                "itemValue": "Built for you",
                                "itemAttributes": {}
                            }
                        ]
                    }
                ],
                "data": {
                    "9188038823": [
                        {
                            "soiEngagementId": "",
                            "locationRefId": "",
                            "propositionName": "LLP stay",
                            "dispositionListId": "10",
                            "propositionId": "PRP_68",
                            "rank": "1",
                            "pricePlanId": "67571",
                            "reasonForRecommendation": [
                                {
                                    "recommendationBar": "",
                                    "statement": "5",
                                    "text": "Based on your data usage, the recommended plan would work best for your connected device.",
                                    "subHeader": "Get useful features and benefits at a great value.",
                                    "planId": "67571",
                                    "recommendationText": "Introducing"
                                },
                                {
                                    "recommendationBar": "",
                                    "statement": "4",
                                    "text": "Stay on this plan to keep unlimited data plus all the great features that Unlimited offers.",
                                    "subHeader": "This plan is working well for you.",
                                    "planId": "67571",
                                    "recommendationText": "Introducing"
                                }
                            ],
                            "price": {
                                "regularPrice": "60.00",
                                "discountedPrice": "60.00",
                                "totalSavings": "0.00"
                            }
                        }
                    ]
                }
            },
            {
                "sectionIndex": "13",
                "sectionId": "friendlyExperience_commonSection",
                "sectionType": "friendlyExperience_commonSection",
                "sectionComponentId": "friendlyExperience_commonSection",
                "actions": [
                    {
                        "actionType": "route",
                        "actionValue": "/exploremmplan",
                        "actionKey": "continueBtn",
                        "clickStream": "continue-cta"
                    },
                    {
                        "actionType": "route",
                        "actionValue": "/",
                        "actionKey": "cancelBtn",
                        "clickStream": "cancel-cta"
                    }
                ],
                "contents": [
                    {
                        "contentIndex": "1",
                        "contentComponentId": "common",
                        "contentType": "common",
                        "items": [
                            {
                                "itemKey": "disclaimerText",
                                "itemType": "text",
                                "itemValue": "*Plus taxes & fees. With Auto Pay and paper-free billing. $10/mo more without Auto Pay.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "compareLink",
                                "itemType": "text",
                                "itemValue": "Compare to current plan",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "reviewLinkText",
                                "itemType": "link",
                                "itemValue": "Review details",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "seeDetailsText",
                                "itemType": "link",
                                "itemValue": "See details",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "selectButtonText",
                                "itemType": "text",
                                "itemValue": "Select",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "customizeButtonText",
                                "itemType": "text",
                                "itemValue": "Customize",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "perkText",
                                "itemType": "text",
                                "itemValue": "Extras",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "unlimitedText",
                                "itemType": "text",
                                "itemValue": "Unlimited Plan",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "recommendedDisclaimerText",
                                "itemType": "text",
                                "itemValue": "*Plus taxes & fees. With Auto Pay and paper-free billing. $10/mo more without Auto Pay. Price shown based on selected data & Extras.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "termsDisclaimerText",
                                "itemType": "text",
                                "itemValue": "By selecting, you agree to the Terms & Conditions for the selected extras.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "chooseUnlimitedText",
                                "itemType": "text",
                                "itemValue": "Choose your unlimited option.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "continueButtonText",
                                "itemType": "text",
                                "itemValue": "Continue",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "compareButtonText",
                                "itemType": "text",
                                "itemValue": "Compare",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "impPlanDetails",
                                "itemType": "text",
                                "itemValue": "Important plan details",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "impDataServiceInfo",
                                "itemType": "text",
                                "itemValue": "Important data service information",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "termsAndCondDisclaimerText",
                                "itemType": "text",
                                "itemValue": "By continuing, you agree to the",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "perkTermsAndCondLink",
                                "itemType": "text",
                                "itemValue": "perk terms & conditions.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "impPlanInfoTextLink",
                                "itemType": "text",
                                "itemValue": "important plan information",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "impBroadInfoTextLink",
                                "itemType": "text",
                                "itemValue": "important broadband information",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "termsConditionsText",
                                "itemType": "text",
                                "itemValue": "Terms & Conditions.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "selectedTermsText",
                                "itemType": "text",
                                "itemValue": "By continuing, you agree to selected perk ",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "disclaimerText1",
                                "itemType": "text",
                                "itemValue": "Plus taxes & fees. With Auto Pay and paper-free billing. $10/mo more without Auto Pay.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "disclaimerText2",
                                "itemType": "text",
                                "itemValue": "After 30 GB mobile hotspot, speeds up to 3 MB on 5G Ultra Wideband, and 600 Kbps when on 5G/4G networks.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "disclaimerTooltipText",
                                "itemType": "text",
                                "itemValue": "When you enroll in Auto Pay and paper free billing using your bank account or Verizon Visa Card, you qualify for a $10/mo discount. Your discount will be applied beginning with your next bill cycle after enrollment in Auto Pay and paper-free billing.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "discountedDisclaimerText",
                                "itemType": "text",
                                "itemValue": "Plus taxes & fees. Employee discount applied.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "gotItCta",
                                "itemType": "text",
                                "itemValue": "Got it",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "savingsText",
                                "itemType": "text",
                                "itemValue": "Save",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "featureText",
                                "itemType": "text",
                                "itemValue": "Perk",
                                "itemAttributes": {}
                            }
                        ]
                    }
                ],
                "data": {}
            },
            {
                "sectionIndex": "13",
                "sectionId": "friendlyExperience_PopularPlans",
                "sectionType": "friendlyExperience_PopularPlans",
                "sectionComponentId": "friendlyExperience_PopularPlans",
                "actions": [
                    {
                        "actionType": "route",
                        "actionValue": "/exploremmplan",
                        "actionKey": "continueBtn",
                        "clickStream": "continue-cta"
                    },
                    {
                        "actionType": "route",
                        "actionValue": "/",
                        "actionKey": "cancelBtn",
                        "clickStream": "cancel-cta"
                    }
                ],
                "contents": [
                    {
                        "contentIndex": "1",
                        "contentComponentId": "Header",
                        "contentType": "Header",
                        "items": [
                            {
                                "itemKey": "header",
                                "itemType": "text",
                                "itemValue": "Explore popular plans.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "subHeader",
                                "itemType": "text",
                                "itemValue": "If you love",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "startBuildText",
                                "itemType": "text",
                                "itemValue": "Start building",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "customSectionTitle",
                                "itemType": "text",
                                "itemValue": "Not seeing what you like?",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "customSectionHeader",
                                "itemType": "text",
                                "itemValue": "Start your own plan",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "customSectionSubHeader",
                                "itemType": "text",
                                "itemValue": "Pick what you want in two seperate steps",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "customStepOneText",
                                "itemType": "text",
                                "itemValue": "Choose your Unlimited",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "customStepTwoText",
                                "itemType": "text",
                                "itemValue": "Select your Perks",
                                "itemAttributes": {}
                            }
                        ]
                    }
                ],
                "data": {}
            },
            {
                "sectionIndex": "9",
                "sectionId": "exploreMMSeeWhyRecommendModalSection",
                "sectionType": "exploreMMSeeWhyRecommendModalSection",
                "sectionComponentId": "ExploreMMSeeWhyRecommandModal",
                "actions": [
                    {
                        "actionType": "route",
                        "actionValue": "/",
                        "actionKey": "gotItBtn",
                        "clickStream": "see-why-modal-got-it-clicked"
                    },
                    {
                        "actionType": "route",
                        "actionValue": "/exploremmplan",
                        "actionKey": "pickThisPlan",
                        "clickStream": "pick-recommended-plan-cta"
                    },
                    {
                        "actionType": "route",
                        "actionValue": "/",
                        "actionKey": "keepThisPlan",
                        "clickStream": "keep-this-plan-cta"
                    },
                    {
                        "actionType": "route",
                        "actionValue": "/",
                        "actionKey": "closeModalBtn",
                        "clickStream": "see-why-modal-close-clicked"
                    }
                ],
                "contents": [
                    {
                        "contentIndex": "0",
                        "items": [
                            {
                                "itemKey": "headerText1",
                                "itemType": "text",
                                "itemValue": "Nice, your account is already mixing & matching on our Unlimited plans, so you're on the right track.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "headerText2",
                                "itemType": "text",
                                "itemValue": "Plan recommendation",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "lineParticularText",
                                "itemType": "text",
                                "itemValue": "This line in particular is",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "benefitsText",
                                "itemType": "text",
                                "itemValue": "Benefits:",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "gotItBtn",
                                "itemType": "button",
                                "itemValue": "Got it",
                                "itemAttributes": {},
                                "actionKey": "gotItBtn"
                            },
                            {
                                "itemKey": "weRecommendText",
                                "itemType": "text",
                                "itemValue": "We recommend the #PLAN_NAME# plan.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "whyWeRecommendText",
                                "itemType": "text",
                                "itemValue": "Why we recommend this plan",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "pickThisPlan",
                                "itemType": "button",
                                "itemValue": "Pick plan",
                                "itemAttributes": {},
                                "actionKey": "pickThisPlan"
                            },
                            {
                                "itemKey": "keepThisPlan",
                                "itemType": "button",
                                "itemValue": "Keep this plan",
                                "itemAttributes": {},
                                "actionKey": "keepThisPlan"
                            },
                            {
                                "itemKey": "weRecommendText_current",
                                "itemType": "text",
                                "itemValue": "We recommend you stay on your current plan.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "selectLineToCompare",
                                "itemType": "text",
                                "itemValue": "Select a line to compare",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "costSuffix",
                                "itemType": "text",
                                "itemValue": "/mo",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "forThisLineCostSuffix",
                                "itemType": "text",
                                "itemValue": "for this line",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "noOfLinesCostSuffix",
                                "itemType": "text",
                                "itemValue": "for 1 lines",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "disclaimerText",
                                "itemType": "text",
                                "itemValue": "*This is the estimated cost for your account if all lines are switched to the recommended plans.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "forAllLinesCostSuffix",
                                "itemType": "text",
                                "itemValue": "for all lines",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "closeModalBtn",
                                "itemType": "button",
                                "itemValue": "Close",
                                "itemAttributes": {},
                                "actionKey": "closeModalBtn"
                            },
                            {
                                "itemKey": "recommendedData_9188038823",
                                "itemType": "list",
                                "dataKey": "9188038823_recommended_planData",
                                "itemAttributes": {}
                            }
                        ]
                    }
                ],
                "data": {
                    "totalPlanRecommendationCost": "$60.00/mo",
                    "isAlpToLlpRecommendation": false,
                    "9188038823_recommended_planData": {
                        "descriptionList": "Based on your data usage, the recommended plan would work best for your connected device.",
                        "lineParticularDataList": [
                            "eligible to receive an additional employee discount.",
                            "able to enjoy all the benefits of Llp Stay."
                        ],
                        "recommendedFeaturesList": {
                            "featureHeaderText": "Get useful features and benefits at a great value.",
                            "featureSubHeaderText": "Based on your data usage, the recommended plan would work best for your connected device.",
                            "topLevelRecommendation": false,
                            "pairedGranteeLine": false
                        },
                        "recommendationText": "Based on your data usage, the recommended plan would work best for your connected device.",
                        "benefitsDataList": [
                            "70067",
                            "70070",
                            "70071",
                            "70072"
                        ]
                    },
                    "totalPlanRecommendationCostSuffix": "Est. for all lines*",
                    "activeMtnCount": 1
                }
            },
            {
                "sectionIndex": "2",
                "sectionId": "exploreMM_PickPlanSection",
                "sectionType": "exploreMM_PickPlanSection",
                "sectionComponentId": "ExploreMMPickPlanComp",
                "sections": [
                    {
                        "sectionIndex": "0",
                        "sectionId": "exploreMMPickPlanTopSection",
                        "sectionType": "exploreMMPickPlanTopSection",
                        "sectionComponentId": "ExploreMMPickPlanTopComp",
                        "actions": [
                            {
                                "actionType": "modal",
                                "actionKey": "appleLink",
                                "sectionId": "exploreMMAppleMusicModalSection",
                                "clickStream": "apple-music-cta"
                            },
                            {
                                "actionType": "http",
                                "actionValue": "https://wwwnssit5.verizon.com/support/5g-mobile-faqs/#coverage",
                                "actionKey": "5GUWBPlanLink",
                                "clickStream": "explore-mm-select-5ge-cta"
                            },
                            {
                                "actionKey": "listViewTab",
                                "clickStream": "list-view-tab-cta"
                            },
                            {
                                "actionKey": "chartViewTab",
                                "clickStream": "chart-view-tab-cta"
                            },
                            {
                                "actionType": "modal",
                                "actionValue": "ExploreMMSeeWhyRecommandModal",
                                "actionKey": "seeWhy",
                                "sectionId": "exploreMMSeeWhyRecommendModalSection",
                                "clickStream": "see-why-cta"
                            },
                            {
                                "actionType": "modal",
                                "actionValue": "/compareOverlay",
                                "actionKey": "compareCurrentPlan",
                                "clickStream": "compare-plan-cta"
                            },
                            {
                                "actionType": "modal",
                                "actionKey": "gotItCompareButtonCTA",
                                "clickStream": "gotit-compare-cta"
                            },
                            {
                                "actionType": "route",
                                "actionValue": "/exploremmplan",
                                "actionKey": "selectPlanButton",
                                "clickStream": "select-plan-cta"
                            }
                        ],
                        "contents": [
                            {
                                "contentIndex": "1",
                                "contentComponentId": "LLPHeaderComponent",
                                "contentType": "header",
                                "items": [
                                    {
                                        "itemKey": "headerText",
                                        "itemType": "text",
                                        "itemValue": "Okay, which plan looks <br/> best for",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "userTypeText",
                                        "itemType": "text",
                                        "itemValue": "As the account owner, you'll need to pick an unlimited plan",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "autopayText",
                                        "itemType": "text",
                                        "itemValue": "You're saving an additional #AUTOPAY_DISCOUNT#/mo per line on our unlimited plans because you're signed up for paper-free billing and Auto Pay",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "nonAutopayText",
                                        "itemType": "text",
                                        "itemValue": "Enroll in paper-free billing and Auto Pay after account creation to save an additional #AUTOPAY_DISCOUNT#/mo on these plans.",
                                        "itemTooltip": "Auto Pay and paper-free billing are required to get the discount. You can enroll in Auto Pay online or by phone with your checking account, debit card or the Verizon Visa® Card. Your discount will be applied each month as long as Auto Pay and paper-free billing stay active.",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "5GUWBPlanText",
                                        "itemType": "text",
                                        "itemValue": "5G Ultra Wideband is available in select locations. In other areas, your device works <br /> on Verizon's nationwide 4G LTE network",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "5GUWBPlanLink",
                                        "itemType": "link",
                                        "itemValue": "Learn about 5G Ultra Wideband coverage",
                                        "itemAttributes": {},
                                        "actionKey": "5GUWBPlanLink"
                                    },
                                    {
                                        "itemKey": "recommendText",
                                        "itemType": "text",
                                        "itemValue": "Recommended",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "seeWhyLink",
                                        "itemType": "link",
                                        "itemValue": "See why",
                                        "itemAttributes": {},
                                        "actionKey": "seeWhy"
                                    },
                                    {
                                        "itemKey": "compareCurrentPlan",
                                        "itemType": "link",
                                        "itemValue": "Compare with current plan",
                                        "itemAttributes": {},
                                        "actionKey": "compareCurrentPlan"
                                    },
                                    {
                                        "itemKey": "compareHeadertext",
                                        "itemType": "text",
                                        "itemValue": "Here is how your plan features will change.",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "currentHeadertext",
                                        "itemType": "text",
                                        "itemValue": "Current",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "newHeaderText",
                                        "itemType": "text",
                                        "itemValue": "Let&rsquo;s choose a plan for your #MODEL_NAME#.",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "llpPlanCostSuffix",
                                        "itemType": "text",
                                        "itemValue": "for this line",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "alpPlanCostSuffix",
                                        "itemType": "text",
                                        "itemValue": "for all lines",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "costDisclaimer",
                                        "itemType": "text",
                                        "itemValue": "/mo",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "modalGotItButtonText",
                                        "itemType": "button",
                                        "itemValue": "Got it",
                                        "itemAttributes": {},
                                        "actionKey": "gotItCompareButtonCTA"
                                    },
                                    {
                                        "itemKey": "builtRight5GHeader",
                                        "itemType": "text",
                                        "itemValue": "5G Built Right",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "builtRight5GText",
                                        "itemType": "button",
                                        "itemValue": "All plans include access to our 5G Nationwide network. When combined with 5G Ultra Wideband, you'll get our absolute best performance.",
                                        "itemTooltip": "5G services require a 5G-capable device inside select coverage areas.",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "compareCurrentPlan_V2",
                                        "itemType": "link",
                                        "itemValue": "Compare to current plan",
                                        "itemAttributes": {},
                                        "actionKey": "compareCurrentPlan"
                                    },
                                    {
                                        "itemKey": "newHeaderTextForSinglePlan",
                                        "itemType": "text",
                                        "itemValue": "Here&rsquo;s the plan for your #MODEL_NAME#.",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "selectPlanButton_V2",
                                        "itemType": "button",
                                        "itemValue": "Select",
                                        "itemAttributes": {},
                                        "actionKey": "selectPlanButton"
                                    },
                                    {
                                        "itemKey": "newHeadertext",
                                        "itemType": "text",
                                        "itemValue": "New",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "mm45StandaloneRecommendedText",
                                        "itemType": "text",
                                        "itemValue": "This plan will be applied to all phone lines on your account.",
                                        "itemAttributes": {}
                                    }
                                ]
                            }
                        ],
                        "data": {}
                    },
                    {
                        "sectionIndex": "0",
                        "sectionId": "exploreMMPickPlan_ListViewSection",
                        "sectionType": "exploreMMPickPlan_ListViewSection",
                        "sectionComponentId": "ListViewComponent",
                        "actions": [
                            {
                                "actionType": "modal",
                                "actionKey": "##PLAN_ID##_seePlanDetailsLink",
                                "dataKey": "##PLAN_ID##_Features",
                                "clickStream": "exploreMM_see_plan_##PLAN_ID##_details_modal"
                            },
                            {
                                "actionType": "route",
                                "actionValue": "/exploremmplan/disneyPlus",
                                "actionKey": "learnMore",
                                "sectionId": "exploreMMDisneyModalSection",
                                "clickStream": "disney_learn_more"
                            },
                            {
                                "actionType": "route",
                                "actionKey": "gotIt",
                                "clickStream": "disney_got_it"
                            },
                            {
                                "actionType": "http",
                                "actionValue": "https://www.verizon.com/support/5g-mobile-faqs/#coverage",
                                "actionKey": "5gUWLearnMore",
                                "clickStream": "5guw_learn_more"
                            },
                            {
                                "actionValue": "ExploreMMSeeWhyRecommandModal",
                                "actionKey": "seeWhy",
                                "sectionId": "exploreMMSeeWhyRecommendModalSection",
                                "clickStream": "see-why-cta"
                            },
                            {
                                "actionType": "modal",
                                "actionValue": "/compareOverlay",
                                "actionKey": "compareCurrentPlan",
                                "clickStream": "compare-plan-cta"
                            },
                            {
                                "actionType": "modal",
                                "actionKey": "gotItCompareButtonCTA",
                                "clickStream": "gotit-compare-cta"
                            },
                            {
                                "actionType": "route",
                                "actionValue": "/explorealpplan",
                                "actionKey": "seeSharedDataPlansLink",
                                "clickStream": "see-shared-data-plans-cta"
                            },
                            {
                                "actionType": "function",
                                "actionValue": "/exploremmplan",
                                "actionKey": "backToMMPlansLink",
                                "clickStream": "back-to-mm-plan-cta"
                            },
                            {
                                "actionType": "modal",
                                "actionKey": "mm45SeeDetailsLink",
                                "dataKey": "mm45SeeDetailsLink",
                                "clickStream": "see-details-cta"
                            },
                            {
                                "actionType": "route",
                                "actionValue": "/ExploreMMPlan/standalone",
                                "actionKey": "seeOtherPlansLink",
                                "clickStream": "see-other-plans-cta"
                            },
                            {
                                "actionType": "route",
                                "actionKey": "mm45_seeDetails",
                                "clickStream": "mm45-see-details-cta"
                            },
                            {
                                "actionType": "route",
                                "actionValue": "/exploremmplan/standalone",
                                "actionKey": "mm45_seeOtherPlan",
                                "clickStream": "see-other-plan-cta"
                            },
                            {
                                "actionType": "route",
                                "actionValue": "/ExploreMMPlan",
                                "actionKey": "selectPlanButton",
                                "clickStream": "select-plan-cta"
                            },
                            {
                                "actionType": "route",
                                "actionValue": "/explorealpplan",
                                "actionKey": "seeSharedDataPlansLink",
                                "clickStream": "see-shared-data-plans-cta"
                            },
                            {
                                "actionType": "modal",
                                "actionKey": "18064_seePlanDetailsLink",
                                "dataKey": "18064_Features",
                                "clickStream": "see-plan-details-cta"
                            },
                            {
                                "actionType": "modal",
                                "actionKey": "47191_seePlanDetailsLink",
                                "dataKey": "47191_Features",
                                "clickStream": "see-plan-details-cta"
                            },
                            {
                                "actionType": "modal",
                                "actionKey": "47880_seePlanDetailsLink",
                                "dataKey": "47880_Features",
                                "clickStream": "see-plan-details-cta"
                            },
                            {
                                "actionType": "modal",
                                "actionKey": "88907_seePlanDetailsLink",
                                "dataKey": "88907_Features",
                                "clickStream": "see-plan-details-cta"
                            },
                            {
                                "actionType": "modal",
                                "actionKey": "47895_seePlanDetailsLink",
                                "dataKey": "47895_Features",
                                "clickStream": "see-plan-details-cta"
                            },
                            {
                                "actionType": "modal",
                                "actionKey": "98245_seePlanDetailsLink",
                                "dataKey": "98245_Features",
                                "clickStream": "see-plan-details-cta"
                            },
                            {
                                "actionType": "modal",
                                "actionKey": "47301_seePlanDetailsLink",
                                "dataKey": "47301_Features",
                                "clickStream": "see-plan-details-cta"
                            },
                            {
                                "actionType": "modal",
                                "actionKey": "50420_seePlanDetailsLink",
                                "dataKey": "50420_Features",
                                "clickStream": "see-plan-details-cta"
                            },
                            {
                                "actionType": "modal",
                                "actionKey": "50427_seePlanDetailsLink",
                                "dataKey": "50427_Features",
                                "clickStream": "see-plan-details-cta"
                            },
                            {
                                "actionType": "modal",
                                "actionKey": "50428_seePlanDetailsLink",
                                "dataKey": "50428_Features",
                                "clickStream": "see-plan-details-cta"
                            },
                            {
                                "actionType": "modal",
                                "actionKey": "50430_seePlanDetailsLink",
                                "dataKey": "50430_Features",
                                "clickStream": "see-plan-details-cta"
                            },
                            {
                                "actionType": "modal",
                                "actionKey": "50431_seePlanDetailsLink",
                                "dataKey": "50431_Features",
                                "clickStream": "see-plan-details-cta"
                            },
                            {
                                "actionType": "modal",
                                "actionKey": "50432_seePlanDetailsLink",
                                "dataKey": "50432_Features",
                                "clickStream": "see-plan-details-cta"
                            },
                            {
                                "actionType": "modal",
                                "actionKey": "47315_seePlanDetailsLink",
                                "dataKey": "47315_Features",
                                "clickStream": "see-plan-details-cta"
                            },
                            {
                                "actionType": "modal",
                                "actionKey": "50433_seePlanDetailsLink",
                                "dataKey": "50433_Features",
                                "clickStream": "see-plan-details-cta"
                            },
                            {
                                "actionType": "modal",
                                "actionKey": "50434_seePlanDetailsLink",
                                "dataKey": "50434_Features",
                                "clickStream": "see-plan-details-cta"
                            },
                            {
                                "actionType": "modal",
                                "actionKey": "47558_seePlanDetailsLink",
                                "dataKey": "47558_Features",
                                "clickStream": "see-plan-details-cta"
                            },
                            {
                                "actionType": "route",
                                "actionValue": "/ExploreMMPlan/standalone",
                                "actionKey": "seeOtherPlansLink",
                                "clickStream": "see-other-plans-cta"
                            },
                            {
                                "actionType": "function",
                                "actionValue": "/exploremmplan",
                                "actionKey": "backToMMPlansLink",
                                "clickStream": "back-to-mix-and-match-plans-cta"
                            },
                            {
                                "actionType": "modal",
                                "actionKey": "mm45SeeDetailsLink",
                                "dataKey": "mm45SeeDetailsLink",
                                "clickStream": "see-details-cta"
                            }
                        ],
                        "contents": [
                            {
                                "contentIndex": "1",
                                "contentType": "common",
                                "items": [
                                    {
                                        "itemKey": "costSuffix1",
                                        "itemType": "text",
                                        "itemValue": "/line",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "costSuffix2",
                                        "itemType": "text",
                                        "itemValue": "per month",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "costDisclaimer",
                                        "itemType": "text",
                                        "itemValue": "plus taxes & fees.",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "justKidsMsg",
                                        "itemType": "text",
                                        "itemValue": "Requires 1 line on Unlimited.",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "5GUWPlanCostMsg",
                                        "itemType": "text",
                                        "itemValue": "For a limited time.",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "disneyHeader",
                                        "itemType": "image",
                                        "itemValue": "https://ss7.vzw.com/is/image/VerizonWireless/disney-plus-logo-promo?&scl=1",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "disneyContent",
                                        "itemType": "text",
                                        "itemValue": "First year of Disney+ on us. With any Unlimited smartphone plan. The stories you love whenever you wish.",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "disneyLink",
                                        "itemType": "link",
                                        "itemValue": "Learn More",
                                        "itemTooltip": "learnMore",
                                        "itemAttributes": {},
                                        "actionKey": "learnMore"
                                    },
                                    {
                                        "itemKey": "gotItLink",
                                        "itemType": "link",
                                        "itemValue": "Got It",
                                        "itemTooltip": "gotIt",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "costSuffix3",
                                        "itemType": "text",
                                        "itemValue": "/mo",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "oldHexHeader",
                                        "itemType": "text",
                                        "itemValue": "Okay, let's pick a new plan for this line.",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "oldHexSubHeader",
                                        "itemType": "text",
                                        "itemValue": "You can choose plans with 1GB or unlimited data per month.",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "5GUWSubHeaderText_MM1",
                                        "itemType": "text",
                                        "itemValue": "5G Ultra Wideband is available in a select locations. In other areas your device works on Verizon's Nationwide 4GE LTE network.",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "5GUWSubHeaderText_MM2",
                                        "itemType": "text",
                                        "itemValue": "5G Ultra Wideband requires a 5G device and is avilable in select locations.",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "5GUWLearMoreLink_MM1",
                                        "itemType": "link",
                                        "itemValue": "Learn about 5G Ultra Wideband coverage",
                                        "itemAttributes": {},
                                        "actionKey": "5gUWLearnMore"
                                    },
                                    {
                                        "itemKey": "5GUWLearMoreLink_MM2",
                                        "itemType": "link",
                                        "itemValue": "Learn More",
                                        "itemAttributes": {},
                                        "actionKey": "5gUWLearnMore"
                                    },
                                    {
                                        "itemKey": "disneyHeader",
                                        "itemType": "image",
                                        "itemValue": "https://ss7.vzw.com/is/image/VerizonWireless/disney-plus-logo-promo?&amp;scl=1",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "recommendText",
                                        "itemType": "text",
                                        "itemValue": "Recommended",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "seeWhyLink",
                                        "itemType": "link",
                                        "itemValue": "See why",
                                        "itemAttributes": {},
                                        "actionKey": "seeWhy"
                                    },
                                    {
                                        "itemKey": "compareCurrentPlan",
                                        "itemType": "link",
                                        "itemValue": "Compare to current plan",
                                        "itemAttributes": {},
                                        "actionKey": "compareCurrentPlan"
                                    },
                                    {
                                        "itemKey": "compareHeadertext",
                                        "itemType": "text",
                                        "itemValue": "Here is how your plan features will change.",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "currentHeadertext",
                                        "itemType": "text",
                                        "itemValue": "Current",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "newHeadertext",
                                        "itemType": "text",
                                        "itemValue": "New",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "currentPlanSubtext",
                                        "itemType": "text",
                                        "itemValue": "for this line",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "ALPPlanSubtext",
                                        "itemType": "text",
                                        "itemValue": "for all lines",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "costDisclaimer",
                                        "itemType": "text",
                                        "itemValue": "/mo",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "modalGotItButtonText",
                                        "itemType": "button",
                                        "itemValue": "Got it",
                                        "itemAttributes": {},
                                        "actionKey": "gotItCompareButtonCTA"
                                    },
                                    {
                                        "itemKey": "planSelectionHeader",
                                        "itemType": "text",
                                        "itemValue": "Let’s choose a plan for this line.",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "planSelectionApText_V2_NotEnrolled",
                                        "itemType": "text",
                                        "itemValue": "Enroll in paper-free billing and Auto Pay to save an additional $10/mo on these plans.",
                                        "itemTooltip": "Auto Pay and paper-free billing are required to get the discount. You can enroll in Auto Pay online or by phone with your checking account, debit card or the Verizon Visa® Card. Your discount will be applied each month as long as Auto Pay and paper-free billing stay active.",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "planSelectionApText_V2_Enrolled",
                                        "itemType": "text",
                                        "itemValue": "Plan prices reflect your $10/mo paper-free billing and Auto Pay discount. ",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "planSelection5GInfo",
                                        "itemType": "text",
                                        "itemValue": "All plans will include access to the upcoming 5G Nationwide network. 5G Ultra Wideband with ultra-fast speeds & ultra-low latency included in select plans.",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "planSelection5GInfoTooltip",
                                        "itemType": "text",
                                        "itemValue": "5G Ultra Wideband is available in only parts of select cities.",
                                        "itemTooltip": " 5G access requires a 5G-capable device inside the 5G Ultra Wideband coverage area. 5G Ultra Wideband (UW) access included with Get More Unlimited, Do More Unlimited and Play More Unlimited plans or Start Unlimited plan for $10/mo. Downloads over 5G UW. Depending on location, uploads over 5G UW or 4G LTE; uploads over 4G LTE will not count towards your 4G LTE data allowance.",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "planSelectionDiscounttext",
                                        "itemType": "text",
                                        "itemValue": "Your ##DISCOUNT_NAME## discount will be applied to your monthly total prior to confirming your order.",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "impPlanInfo",
                                        "itemType": "link",
                                        "itemValue": "Important plan information",
                                        "itemAttributes": {},
                                        "actionKey": "impPlanInfo"
                                    },
                                    {
                                        "itemKey": "impBroadbandInfo",
                                        "itemType": "link",
                                        "itemValue": "Important broadband information",
                                        "itemAttributes": {},
                                        "actionKey": "impBroadbandInfo"
                                    },
                                    {
                                        "itemKey": "epcdHeaderMsg",
                                        "itemType": "text",
                                        "itemValue": "With Employee Discount Applied",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "builtRight5GHeader",
                                        "itemType": "text",
                                        "itemValue": "5G Built Right",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "builtRight5GText",
                                        "itemType": "text",
                                        "itemValue": "All plans include access to our 5G Nationwide network. When combined with 5G Ultra Wideband-the fastest 5G in the world*- you'll get our absolute best performance.",
                                        "itemTooltip": "Global claim from May 2020, based on Opensignal independent analysis of mobile measurements recorded during the period January 31 - April 30, 2020. © 2020 Opensignal Limited.",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "globalClaimText",
                                        "itemType": "text",
                                        "itemValue": "*Global claim from May 2020, based on Opensignal independent analysis of mobile measurements recorded during the period January 31 - April 30, 2020 © 2020 Opensignal Limited.",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "builtRight5GTextNew",
                                        "itemType": "button",
                                        "itemValue": "All plans include access to our 5G Nationwide network. When combined with 5G Ultra Wideband-the fastest 5G in the world*- you'll get our absolute best performance.",
                                        "itemTooltip": "5G services require a 5G-capable device inside select coverage areas.",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "builtRight5GTextNew",
                                        "itemType": "text",
                                        "itemValue": "All plans include access to our 5G Nationwide network. When combined with 5G Ultra Wideband,you',ll get our absolute best performance.",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "planSelectionHeaderNew",
                                        "itemType": "text",
                                        "itemValue": "Let&rsquo;s choose a plan for your #MODEL_NAME#.",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "singleplanSelectionHeader",
                                        "itemType": "text",
                                        "itemValue": "Here&rsquo;s the plan for your #MODEL_NAME#.",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "autopayText",
                                        "itemType": "text",
                                        "itemValue": "You're saving an additional #AUTOPAY_DISCOUNT#/mo per line on our unlimited plans because you're signed up for paper-free billing and Auto Pay",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "nonAutopayText",
                                        "itemType": "text",
                                        "itemValue": "Enroll in paper-free billing and Auto Pay after account creation to save an additional #AUTOPAY_DISCOUNT#/mo on these plans.",
                                        "itemTooltip": "Auto Pay and paper-free billing are required to get the discount. You can enroll in Auto Pay online or by phone with your checking account, debit card or the Verizon Visa® Card. Your discount will be applied each month as long as Auto Pay and paper-free billing stay active.",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "recommendText",
                                        "itemType": "text",
                                        "itemValue": "Recommended",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "seeWhyLink",
                                        "itemType": "link",
                                        "itemValue": "See why",
                                        "itemAttributes": {},
                                        "actionKey": "seeWhy"
                                    },
                                    {
                                        "itemKey": "discountEligibleText",
                                        "itemType": "text",
                                        "itemValue": "Eligible for 50% off",
                                        "itemTooltip": "<div><p style='padding-bottom: 8px'><b>How it works:</b></p><span>Select an eligible plan for your qualifying connected device and the 50% plan discount will automatically be applied. <br><br>When you have more than one qualifying connected device on your account, the discount is applied to the connected device plan with the highest cost.</span></div>",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "seePlanEligibilityLink",
                                        "itemType": "link",
                                        "itemValue": "See plan eligibility requirements",
                                        "itemAttributes": {},
                                        "actionKey": "planEligibilityLink"
                                    },
                                    {
                                        "itemKey": "nonEligibleWarning",
                                        "itemType": "text",
                                        "itemValue": "Only available to accounts with an existing device on an eligible plan.",
                                        "itemTooltip": "<div><p style='padding-bottom: 12px'><b>Eligible plans include:</b></p><span><b>Smartphones:</b> Start Unlimited, Play More Unlimited, Do More Unlimited, Get More Unlimited<br><br><b>Tablets and laptops:</b> Unlimited, Unlimited Plus<br><br><b>Mobile hotspot devices:</b> Pro, Premium</span></div>",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "newPlanSelectionHeader",
                                        "itemType": "text",
                                        "itemValue": "Let’s choose a plan for your line.",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "newPlanSelectionSubHeader",
                                        "itemType": "text",
                                        "itemValue": "Only pay for what you need and get more of the entertainment you want. Choose your Unlimited plans to mix, match and save.",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "newCompareCurrentPlan",
                                        "itemType": "link",
                                        "itemValue": "Compare",
                                        "itemAttributes": {},
                                        "actionKey": "compareCurrentPlan"
                                    },
                                    {
                                        "itemKey": "autopayDiscountText",
                                        "itemType": "text",
                                        "itemValue": "Plan prices reflect your $10/mo paper-free billing and AutoPay discount. ",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "autopayDiscountSubText",
                                        "itemType": "text",
                                        "itemValue": "Other active discounts will be applied to your monthly total prior to confirming your order.",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "headerText_V3",
                                        "itemType": "text",
                                        "itemValue": "Let's choose a plan for your home.",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "allIncludesText",
                                        "itemType": "text",
                                        "itemValue": "All plans include:",
                                        "itemTooltip": "Excludes the Just Kids plan.",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "entertainmentOnUsHeader",
                                        "itemType": "text",
                                        "itemValue": "Entertainment on us",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "entertainmentOnUsAmount",
                                        "itemType": "text",
                                        "itemValue": "An /mo value",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "connectivityOnUsHeader",
                                        "itemType": "text",
                                        "itemValue": "Connectivity on us",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "connectivityOnUsAmount",
                                        "itemType": "text",
                                        "itemValue": "Up to a /mo value",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "everythingOnUsHeader",
                                        "itemType": "text",
                                        "itemValue": "Everything on us",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "everythingOnUsAmount",
                                        "itemType": "text",
                                        "itemValue": "Up to a /mo value",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "seeSharedDataPlansLink",
                                        "itemType": "link",
                                        "itemValue": "See shared data plans",
                                        "itemAttributes": {},
                                        "actionKey": "seeSharedDataPlansLink"
                                    },
                                    {
                                        "itemKey": "5GcostSuffix",
                                        "itemType": "text",
                                        "itemValue": "/mo",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "5GcostDisclaimer",
                                        "itemType": "text",
                                        "itemValue": "Includes taxes & fees.",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "seeOtherPlansLink",
                                        "itemType": "link",
                                        "itemValue": "See other plans",
                                        "itemAttributes": {},
                                        "actionKey": "seeOtherPlansLink"
                                    },
                                    {
                                        "itemKey": "backToMMPlansLink",
                                        "itemType": "link",
                                        "itemValue": "Back to Mix & Match plans",
                                        "itemAttributes": {},
                                        "actionKey": "backToMMPlansLink"
                                    },
                                    {
                                        "itemKey": "50434_PhoneOfferMsg",
                                        "itemType": "text",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "50427_PhoneOfferMsg",
                                        "itemType": "text",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "50430_PhoneOfferMsg",
                                        "itemType": "text",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "50432_PhoneOfferMsg",
                                        "itemType": "text",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "50433_PhoneOfferMsg",
                                        "itemType": "text",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "50420_PhoneOfferMsg",
                                        "itemType": "text",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "50428_PhoneOfferMsg",
                                        "itemType": "text",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "50431_PhoneOfferMsg",
                                        "itemType": "text",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "mm45FooterMessage",
                                        "itemType": "text",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "mm45SeeDetailsLink",
                                        "itemType": "link",
                                        "itemValue": "See details",
                                        "itemAttributes": {},
                                        "actionKey": "mm45SeeDetailsLink"
                                    },
                                    {
                                        "itemKey": "mm45_seeOtherPlan",
                                        "itemType": "text",
                                        "itemValue": "See other plans",
                                        "itemAttributes": {},
                                        "actionKey": "mm45_seeOtherPlan"
                                    },
                                    {
                                        "itemKey": "mm45_seeDetails",
                                        "itemType": "link",
                                        "itemValue": "See details",
                                        "itemAttributes": {},
                                        "actionKey": "mm45_seeDetails"
                                    },
                                    {
                                        "itemKey": "mm45_subHeader",
                                        "itemType": "text",
                                        "itemValue": "Plan prices reflect your $10/mo paper-free billing and Auto Pay discount.",
                                        "itemTooltip": "Auto Pay and paper-free billing are required to get the discount. You can get Auto Pay by signing up online or on the phone with your bank account or debit card. Your discount will be applied each month as long as Auto Pay and paper-free billing stay active.",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "58699_PhoneOfferMsg",
                                        "itemType": "text",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "58701_PhoneOfferMsg",
                                        "itemType": "text",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "mm45StandaloneRecommendedText",
                                        "itemType": "link",
                                        "itemValue": "This plan will be applied to all phone lines on your account.",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "mm45NoPlansMsg",
                                        "itemType": "link",
                                        "itemValue": "There is no Welcome unlimited plans associated with this account, Please try Mix & Match Plans.",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "60008_extraFeature_text",
                                        "itemType": "text",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "70006_extraFeature_text",
                                        "itemType": "text",
                                        "itemValue": "Reliable 5G performance",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "70005_extraFeature_text",
                                        "itemType": "text",
                                        "itemValue": "Our fastest 5G network experience, 10X faster than 4G",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "71002_extraFeature_text",
                                        "itemType": "text",
                                        "itemValue": "Reliable 5G performance",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "50004_group_headerName",
                                        "itemType": "text",
                                        "itemValue": "Unlimited 5G Ultra Wideband",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "homeInternetSavingsHeader",
                                        "itemType": "text",
                                        "itemValue": "Home Internet Savings",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "oneUnlimitedRecommndedText",
                                        "itemType": "text",
                                        "itemValue": "This plan is eligible for and will be applied to all phones on your account. iOS not required.",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "60270_PhoneOfferMsg",
                                        "itemType": "text",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "60272_PhoneOfferMsg",
                                        "itemType": "text",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "OneUnlimitedPerksHeaderText",
                                        "itemType": "text",
                                        "itemValue": "Apple One plus connectivity",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "OneUnlimitedPerksAmountText",
                                        "itemType": "text",
                                        "itemValue": "Up to a $42.95/mo value included",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "OneUnlimitedShareText",
                                        "itemType": "text",
                                        "itemValue": "Share with up to five other people when you have 2 or more phone lines.",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "OneUnlimitedPerksAccordionText",
                                        "itemType": "text",
                                        "itemValue": "Apple One is an easy all-in-one subscription that bundles together your favorite Apple services. Apple One bundles together Apple Music, Apple TV+, Apple Arcade, and iCloud+ to keep you entertained and provide you with the storage you need for your photos, files and more. Plus, it's all ad-free. A value of up to $22.95 when you have multiple lines, included for as long as you stay on an eligible plan. Share with up to five other people when you have two or more phone lines. iPhone with iOS 14.7 is required to activate.",
                                        "itemAttributes": {}
                                    },
                                    {
                                        "itemKey": "footerText_v1",
                                        "itemType": "text",
                                        "itemValue": "Please review our important plan information and important broadband information.",
                                        "itemAttributes": {}
                                    }
                                ]
                            }
                        ],
                        "data": {
                            "67571": {
                                "eligibleForParentLine": false,
                                "planType": "LLP",
                                "overages": "",
                                "planName": "5G HOME",
                                "description": "5G HOME",
                                "promoGifterPlan": false,
                                "mm3Disclaimers": [
                                    "Global claim from May 2020, based on Opensignal independent analysis of mobile measurements recorded during the period January 31 – April 30, 2020 © 2020 Opensignal Limited.",
                                    "5G Ultra Wideband available only in parts of select cities. 25x faster speeds based on analysis by Ookla® of Speedtest Intelligence® data median download speeds from Verizon 5G results compared to the median 4G LTE speeds of top U.S. carriers combined in Q1 2020. Ookla trademarks used under license and reprinted with permission.",
                                    "Messages and documents are only available on Android devices. Music and documents stored on Verizon Cloud can be streamed and accessed by using the Verizon Cloud app on iOS devices, but music and documents can't be backed up from or downloaded to iOS devices."
                                ],
                                "requiresParentLine": false,
                                "recommended": true,
                                "dataKey": "67571_Features",
                                "planDisclaimerText": [
                                    null
                                ],
                                "overView": "Home internet you can count on, with our best extras yet.",
                                "planId": "67571",
                                "planDisplayName": "5G HOME",
                                "addedFeaturesHeader": "",
                                "featuresIncludedHeader": "Includes",
                                "planAdditionalText": [
                                    null
                                ]
                            },
                            "67571_Features": {
                                "addedFeatures": [],
                                "groupProducts": [
                                    "50044",
                                    "50045",
                                    "50046",
                                    "50047"
                                ],
                                "highlightedPlanFeature": null,
                                "featuresIncluded": [
                                    "70067",
                                    "70070",
                                    "70071",
                                    "70072"
                                ]
                            },
                            "mm3Disclaimers": {
                                "39384": [
                                    "Global claim from May 2020, based on Opensignal independent analysis of mobile measurements recorded during the period January 31 – April 30, 2020 © 2020 Opensignal Limited.",
                                    "5G Ultra Wideband available only in parts of select cities. 25x faster speeds based on analysis by Ookla® of Speedtest Intelligence® data median download speeds from Verizon 5G results compared to the median 4G LTE speeds of top U.S. carriers combined in Q1 2020. Ookla trademarks used under license and reprinted with permission."
                                ],
                                "39386": [
                                    "Global claim from May 2020, based on Opensignal independent analysis of mobile measurements recorded during the period January 31 – April 30, 2020 © 2020 Opensignal Limited.",
                                    "5G Ultra Wideband available only in parts of select cities. 25x faster speeds based on analysis by Ookla® of Speedtest Intelligence® data median download speeds from Verizon 5G results compared to the median 4G LTE speeds of top U.S. carriers combined in Q1 2020. Ookla trademarks used under license and reprinted with permission.",
                                    "Messages and documents are only available on Android devices. Music and documents stored on Verizon Cloud can be streamed and accessed by using the Verizon Cloud app on iOS devices, but music and documents can't be backed up from or downloaded to iOS devices."
                                ],
                                "39385": [
                                    "Global claim from May 2020, based on Opensignal independent analysis of mobile measurements recorded during the period January 31 – April 30, 2020 © 2020 Opensignal Limited.",
                                    "5G Ultra Wideband available only in parts of select cities. 25x faster speeds based on analysis by Ookla® of Speedtest Intelligence® data median download speeds from Verizon 5G results compared to the median 4G LTE speeds of top U.S. carriers combined in Q1 2020. Ookla trademarks used under license and reprinted with permission."
                                ],
                                "39388": [
                                    "Global claim from May 2020, based on Opensignal independent analysis of mobile measurements recorded during the period January 31 – April 30, 2020 © 2020 Opensignal Limited.",
                                    "5G Ultra Wideband available only in parts of select cities. 25x faster speeds based on analysis by Ookla® of Speedtest Intelligence® data median download speeds from Verizon 5G results compared to the median 4G LTE speeds of top U.S. carriers combined in Q1 2020. Ookla trademarks used under license and reprinted with permission.",
                                    "Messages and documents are only available on Android devices. Music and documents stored on Verizon Cloud can be streamed and accessed by using the Verizon Cloud app on iOS devices, but music and documents can't be backed up from or downloaded to iOS devices."
                                ],
                                "39387": [
                                    "Global claim from May 2020, based on Opensignal independent analysis of mobile measurements recorded during the period January 31 – April 30, 2020 © 2020 Opensignal Limited.",
                                    "5G Ultra Wideband available only in parts of select cities. 25x faster speeds based on analysis by Ookla® of Speedtest Intelligence® data median download speeds from Verizon 5G results compared to the median 4G LTE speeds of top U.S. carriers combined in Q1 2020. Ookla trademarks used under license and reprinted with permission.",
                                    "Messages and documents are only available on Android devices. Music and documents stored on Verizon Cloud can be streamed and accessed by using the Verizon Cloud app on iOS devices, but music and documents can't be backed up from or downloaded to iOS devices."
                                ],
                                "39390": [
                                    "Global claim from May 2020, based on Opensignal independent analysis of mobile measurements recorded during the period January 31 – April 30, 2020 © 2020 Opensignal Limited.",
                                    "5G Ultra Wideband available only in parts of select cities. 25x faster speeds based on analysis by Ookla® of Speedtest Intelligence® data median download speeds from Verizon 5G results compared to the median 4G LTE speeds of top U.S. carriers combined in Q1 2020. Ookla trademarks used under license and reprinted with permission.",
                                    "Messages and documents are only available on Android devices. Music and documents stored on Verizon Cloud can be streamed and accessed by using the Verizon Cloud app on iOS devices, but music and documents can't be backed up from or downloaded to iOS devices."
                                ]
                            },
                            "planFeaturesDisclaimers": {
                                "18058": [
                                    "5G Nationwide available in 2,700+ cities. 5G Nationwide access requires a 5G Nationwide-capable device. 5G Nationwide / 4G LTE premium data: 15 GB/mo on Unlimited or 30 GB/mo on Unlimited Plus.",
                                    "Mobile hotspot usage counts towards 5G Nationwide / 4G LTE data allotment. Only after exceeding 15 GB/mo/line on Unlimited or 30 GB/mo/line on Unlimited Plus, data reduced to 600 Kbps for the rest of the month."
                                ],
                                "18059": [
                                    "5G Nationwide available in 2,700+ cities. 5G Nationwide access requires a 5G Nationwide-capable device. Only after exceeding 15 GB/mo/line on Unlimited, data reduced to 600 Kbps per month."
                                ],
                                "18258": [
                                    "5G Nationwide available in 2,700+ cities. 5G Nationwide access requires a 5G Nationwide-capable device. Only after exceeding 15 GB/mo/line, 600 Kbps per month."
                                ],
                                "47315": [
                                    "5G Ultra Wideband available only in parts of select cities. 5G Ultra Wideband access requires a 5G Ultra Wideband capable device inside the 5G Ultra Wideband coverage area. 5G Ultra Wideband access included with Plus, Pro, and Premium plans. Downloads over 5G Ultra Wideband. Depending on location, uploads over 5G Ultra Wideband or 4G LTE.",
                                    "5G Nationwide available in 2,700+ cities. 5G Nationwide access requires a 5G Nationwide-capable device. Only after exceeding allowance, unlimited 3 Mbps speed when on 5G Ultra Wideband for Plus, Pro and Premium plans for the rest of the month; and unlimited 600 Kbps speed when on 5G Nationwide / 4G LTE for the rest of the month.",
                                    "Video streams up to 4K UHD on capable tethered device when on 5G Ultra Wideband (only available with Plus, Pro, and Premium plans), and up to 720p on capable tethered device when on 5G Nationwide / 4G LTE."
                                ],
                                "47558": [
                                    "5G Ultra Wideband available only in parts of select cities. 5G Ultra Wideband access requires a 5G Ultra Wideband capable device inside the 5G Ultra Wideband coverage area. 5G Ultra Wideband access included with Plus, Pro, and Premium plans. Downloads over 5G Ultra Wideband. Depending on location, uploads over 5G Ultra Wideband or 4G LTE.",
                                    "5G Nationwide available in 2,700+ cities. 5G Nationwide access requires a 5G Nationwide-capable device. Only after exceeding allowance, unlimited 3 Mbps speed when on 5G Ultra Wideband for Plus, Pro and Premium plans for the rest of the month; and unlimited 600 Kbps speed when on 5G Nationwide / 4G LTE for the rest of the month.",
                                    "Video streams up to 4K UHD on capable tethered device when on 5G Ultra Wideband (only available with Plus, Pro, and Premium plans), and up to 720p on capable tethered device when on 5G Nationwide / 4G LTE."
                                ],
                                "18056": [
                                    "5G Nationwide available in 2,700+ cities. 5G Nationwide access requires a 5G Nationwide-capable device. 5G Nationwide / 4G LTE premium data: 15 GB/mo on Unlimited or 30 GB/mo on Unlimited Plus.",
                                    "Mobile hotspot usage counts towards 5G Nationwide / 4G LTE data allotment. Only after exceeding 15 GB/mo/line on Unlimited or 30 GB/mo/line on Unlimited Plus, data reduced to 600 Kbps for the rest of the month."
                                ],
                                "47895": [
                                    "5G Ultra Wideband available only in parts of select cities. 5G Ultra Wideband access requires a 5G-capable device inside the 5G Ultra Wideband coverage area. Downloads over 5G UW. Depending on location, uploads over 5G UW or 4G LTE; uploads over 4G LTE will not count towards your 4G LTE data allowance.",
                                    "5G Nationwide available in 2,700+ cities. 5G Nationwide access requires a 5G Nationwide-capable device. After exceeding allowance, during times of congestion your tablet and mobile hotspot data may be temporarily slower than other traffic.",
                                    "During times of congestion, data may be temporarily slower than other traffic. Only after exceeding allowance, data reduced to 600 Kbps for the rest of the month.",
                                    "During times of congestion, data may be temporarily slower than other traffic. Only after exceeding allowance, unlimited 3 Mbps speed when on 5G Ultra Wideband for More Unlimited plan for the rest of the month; and unlimited 600 Kbps speed when on 5G Nationwide / 4G LTE for the rest of the month. Downloads over 5G Ultra Wideband. Depending on location, uploads over 5G Ultra Wideband or 4G LTE.",
                                    "Video streams up to 4K UHD when on 5G Ultra Wideband (only available with More Unlimited plan); when on 5G Nationwide / 4G LTE, video typically streams at 720p and up to 1080p on tablets. Capable device required."
                                ],
                                "18050": [
                                    "5G Nationwide available in 2,700+ cities. 5G Nationwide access requires a 5G Nationwide-capable device. 5G Nationwide / 4G LTE premium data: 15 GB/mo on Unlimited or 30 GB/mo on Unlimited Plus.",
                                    "5G Nationwide available in 2,700+ cities. 5G Nationwide access requires a 5G Nationwide-capable device. Mobile hotspot usage counts towards 5G Nationwide / 4G LTE data allotment. After exceeding 15 GB/mo/line on Unlimited or 30 GB/mo/line on Unlimited Plus, data reduced to 600 Kbps for the rest of the month."
                                ],
                                "40645": [
                                    "5G Ultra Wideband available only in parts of select cities. 5G Ultra Wideband access requires a 5G-capable device inside the 5G Ultra Wideband coverage area. 5G Ultra Wideband (UW) access included with Unlimited Plus. Downloads over 5G UW. Depending on location, uploads over 5G UW or 4G LTE; uploads over 4G LTE will not count towards your 4G LTE data allowance.",
                                    "5G Nationwide available in 2,700+ cities. 5G Nationwide access requires a 5G Nationwide-capable device. Only after exceeding 15 GB/mo/line on Unlimited or 30 GB/mo/line on Unlimited Plus, data reduced to 600 Kbps for the rest of the month.",
                                    "Mobile hotspot usage counts towards 5G Nationwide / 4G LTE data allotment. Only after exceeding 15 GB/mo/line on Unlimited or 30 GB/mo/line on Unlimited Plus, data reduced to 600 Kbps for the rest of the month."
                                ],
                                "18051": [
                                    "5G Nationwide available in 2,700+ cities. 5G Nationwide access requires a 5G Nationwide-capable device. 5G Nationwide / 4G LTE premium data: 15 GB/mo on Unlimited or 30 GB/mo on Unlimited Plus.",
                                    "Mobile hotspot usage counts towards 5G Nationwide / 4G LTE data allotment. Only after exceeding 15 GB/mo/line on Unlimited or 30 GB/mo/line on Unlimited Plus, data reduced to 600 Kbps for the rest of the month."
                                ],
                                "40644": [
                                    "5G Ultra Wideband available only in parts of select cities. 5G Ultra Wideband access requires a 5G-capable device inside the 5G Ultra Wideband coverage area. 5G Ultra Wideband (UW) access included with Unlimited Plus. Downloads over 5G UW. Depending on location, uploads over 5G UW or 4G LTE; uploads over 4G LTE will not count towards your 4G LTE data allowance. Only after exceeding 50 GB/mo/line on 5G UW, 3 Mbps for the rest of the month.",
                                    "5G Nationwide available in 2,700+ cities. 5G Nationwide access requires a 5G Nationwide-capable device. Mobile hotspot usage counts towards 5G Nationwide / 4G LTE data allotment. Only after exceeding 15 GB/mo/line on Unlimited or 30 GB/mo/line on Unlimited Plus, data reduced to 600 Kbps for the rest of the month."
                                ],
                                "18052": [
                                    "5G Nationwide available in 2,700+ cities. 5G Nationwide access requires a 5G Nationwide-capable device. 5G Nationwide / 4G LTE premium data: 15 GB/mo on Unlimited or 30 GB/mo on Unlimited Plus.",
                                    "Mobile hotspot usage counts towards 5G Nationwide / 4G LTE data allotment. Only after exceeding 15 GB/mo/line on Unlimited or 30 GB/mo/line on Unlimited Plus, data reduced to 600 Kbps for the rest of the month."
                                ],
                                "44108": [
                                    "5G Nationwide available in 2,700+ cities. 5G Nationwide access requires a 5G Nationwide-capable device. Only after exceeding 15 GB/mo/line on Unlimited, data reduced to 600 Kbps per month.",
                                    "Mobile Hotspot/tethering reduced to speeds up to 600 Kbps after 15 GB."
                                ],
                                "39390": [
                                    "<b>5G Ultra Wideband available only in parts of select cities.</b> 5G Ultra Wideband access requires a 5G-capable device inside the 5G Ultra Wideband coverage area. 5G Ultra Wideband (UW) access included with Get More Unlimited, Do More Unlimited and Play More Unlimited plans; or Start Unlimited plan for $10/mo. Downloads over 5G UW. Depending on location, uploads over 5G UW or 4G LTE; uploads over 4G LTE will not count towards your 4G LTE data allowance.",
                                    "<b>5G Nationwide available in 2,700+ cities.</b> 5G Nationwide access requires a 5G Nationwide-capable device.",
                                    "50 GB of 5G Nationwide / 4G LTE premium data per month. Plus 720p HD streaming when you activate it in your plan settings. In times of congestion, your data may be temporarily slower than other traffic after exceeding 50 GB/mo/line.",
                                    "Mobile hotspot usage counts towards Premium Network Access data allotment."
                                ],
                                "40646": [
                                    "5G Ultra Wideband available only in parts of select cities. 5G Ultra Wideband access requires a 5G-capable device inside the 5G Ultra Wideband coverage area. 5G Ultra Wideband (UW) access included with Unlimited Plus. Downloads over 5G UW. Depending on location, uploads over 5G UW or 4G LTE; uploads over 4G LTE will not count towards your 4G LTE data allowance.",
                                    "5G Nationwide available in 2,700+ cities. 5G Nationwide access requires a 5G Nationwide-capable device. 5G Nationwide / 4G LTE premium data. Only after exceeding 15 GB/mo/line on Unlimited or 30 GB/mo/line on Unlimited Plus, in times of congestion your data may be temporarily slower than other traffic.",
                                    "Mobile hotspot usage counts towards 5G Nationwide / 4G LTE data allotment. Only after exceeding 15 GB/mo/line on Unlimited or 30 GB/mo/line on Unlimited Plus, data reduced to 600 Kbps for the rest of the month."
                                ],
                                "47191": [
                                    "5G Nationwide available in 2,700+ cities. 5G Nationwide access requires a 5G Nationwide-capable device. Only after exceeding allowance, unlimited 3 Mbps speed when on 5G Ultra Wideband for Plus, Pro and Premium plans for the rest of the month; and unlimited 600 Kbps speed when on 5G Nationwide / 4G LTE for the rest of the month.",
                                    "Video streams up to 4K UHD on capable tethered device when on 5G Ultra Wideband (only available with Plus, Pro, and Premium plans), and up to 720p on capable tethered device when on 5G Nationwide / 4G LTE."
                                ],
                                "25582": [
                                    "<b>5G Nationwide available in 2,700+ cities.</b> 5G Nationwide access requires a 5G Nationwide-capable device."
                                ],
                                "26872": [
                                    "<b>5G Nationwide available in 2,700+ cities.</b> 5G Nationwide access requires a 5G Nationwide-capable device."
                                ],
                                "36909": [
                                    "5G Nationwide available in 2,700+ cities. 5G Nationwide access requires a 5G Nationwide-capable device. 5G Nationwide / 4G LTE premium data: 15 GB/mo on Unlimited.",
                                    "Device with video messaging required."
                                ],
                                "39384": [
                                    "<b>5G Ultra Wideband available only in parts of select cities.</b> 5G Ultra Wideband access requires a 5G-capable device inside the 5G Ultra Wideband coverage area. 5G Ultra Wideband (UW) access included with Get More Unlimited, Do More Unlimited and Play More Unlimited plans; or Start Unlimited plan for $10/mo. Downloads over 5G UW. Depending on location, uploads over 5G UW or 4G LTE; uploads over 4G LTE will not count towards your 4G LTE data allowance.",
                                    "<b>5G Nationwide available in 2,700+ cities.</b> 5G Nationwide access requires a 5G Nationwide-capable device.",
                                    "50 GB of 5G Nationwide / 4G LTE premium data per month. Plus 720p HD streaming when you activate it in your plan settings. In times of congestion, your data may be temporarily slower than other traffic after exceeding 50 GB/mo/line.",
                                    "Mobile hotspot usage counts towards Premium Network Access data allotment."
                                ],
                                "39386": [
                                    "<b>5G Ultra Wideband available only in parts of select cities.</b> 5G Ultra Wideband access requires a 5G-capable device inside the 5G Ultra Wideband coverage area. 5G Ultra Wideband (UW) access included with Get More Unlimited, Do More Unlimited and Play More Unlimited plans; or Start Unlimited plan for $10/mo. Downloads over 5G UW. Depending on location, uploads over 5G UW or 4G LTE; uploads over 4G LTE will not count towards your 4G LTE data allowance.",
                                    "<b>5G Nationwide available in 2,700+ cities.</b> 5G Nationwide access requires a 5G Nationwide-capable device.",
                                    "50 GB of 5G Nationwide / 4G LTE premium data per month. Plus 720p HD streaming when you activate it in your plan settings. In times of congestion, your data may be temporarily slower than other traffic after exceeding 50 GB/mo/line.",
                                    "Mobile hotspot usage counts towards Premium Network Access data allotment."
                                ],
                                "39385": [
                                    "<b>5G Ultra Wideband available only in parts of select cities.</b> 5G Ultra Wideband access requires a 5G-capable device inside the 5G Ultra Wideband coverage area. 5G Ultra Wideband (UW) access included with Get More Unlimited, Do More Unlimited and Play More Unlimited plans; or Start Unlimited plan for $10/mo. Downloads over 5G UW. Depending on location, uploads over 5G UW or 4G LTE; uploads over 4G LTE will not count towards your 4G LTE data allowance.",
                                    "<b>5G Nationwide available in 2,700+ cities.</b> 5G Nationwide access requires a 5G Nationwide-capable device.",
                                    "50 GB of 5G Nationwide / 4G LTE premium data per month. Plus 720p HD streaming when you activate it in your plan settings. In times of congestion, your data may be temporarily slower than other traffic after exceeding 50 GB/mo/line.",
                                    "Mobile hotspot usage counts towards Premium Network Access data allotment."
                                ],
                                "39388": [
                                    "<b>5G Ultra Wideband available only in parts of select cities.</b> 5G Ultra Wideband access requires a 5G-capable device inside the 5G Ultra Wideband coverage area. 5G Ultra Wideband (UW) access included with Get More Unlimited, Do More Unlimited and Play More Unlimited plans; or Start Unlimited plan for $10/mo. Downloads over 5G UW. Depending on location, uploads over 5G UW or 4G LTE; uploads over 4G LTE will not count towards your 4G LTE data allowance.",
                                    "<b>5G Nationwide available in 2,700+ cities.</b> 5G Nationwide access requires a 5G Nationwide-capable device.",
                                    "50 GB of 5G Nationwide / 4G LTE premium data per month. Plus 720p HD streaming when you activate it in your plan settings. In times of congestion, your data may be temporarily slower than other traffic after exceeding 50 GB/mo/line.",
                                    "Mobile hotspot usage counts towards Premium Network Access data allotment."
                                ],
                                "39387": [
                                    "<b>5G Ultra Wideband available only in parts of select cities.</b> 5G Ultra Wideband access requires a 5G-capable device inside the 5G Ultra Wideband coverage area. 5G Ultra Wideband (UW) access included with Get More Unlimited, Do More Unlimited and Play More Unlimited plans; or Start Unlimited plan for $10/mo. Downloads over 5G UW. Depending on location, uploads over 5G UW or 4G LTE; uploads over 4G LTE will not count towards your 4G LTE data allowance.",
                                    "<b>5G Nationwide available in 2,700+ cities.</b> 5G Nationwide access requires a 5G Nationwide-capable device.",
                                    "50 GB of 5G Nationwide / 4G LTE premium data per month. Plus 720p HD streaming when you activate it in your plan settings. In times of congestion, your data may be temporarily slower than other traffic after exceeding 50 GB/mo/line.",
                                    "Mobile hotspot usage counts towards Premium Network Access data allotment."
                                ],
                                "18045": [
                                    "5G Nationwide available in 2,700+ cities. 5G Nationwide access requires a 5G Nationwide-capable device. Only after exceeding 15 GB/mo/line on Unlimited or 30 GB/mo/line on Unlimited Plus, data reduced to 600 Kbps for the rest of the month.",
                                    "Mobile hotspot usage counts towards 5G Nationwide / 4G LTE data allotment. Only after exceeding 15 GB/mo/line on Unlimited or 30 GB/mo/line on Unlimited Plus, data reduced to 600 Kbps for the rest of the month."
                                ],
                                "18046": [
                                    "5G Nationwide available in 2,700+ cities. 5G Nationwide access requires a 5G Nationwide-capable device. 5G Nationwide / 4G LTE premium data: 15 GB/mo on Unlimited or 30 GB/mo on Unlimited Plus.",
                                    "Mobile hotspot usage counts towards 5G Nationwide / 4G LTE data allotment. Only after exceeding 15 GB/mo/line on Unlimited or 30 GB/mo/line on Unlimited Plus, data reduced to 600 Kbps for the rest of the month."
                                ],
                                "47301": [
                                    "5G Ultra Wideband available only in parts of select cities. 5G Ultra Wideband access requires a 5G Ultra Wideband capable device inside the 5G Ultra Wideband coverage area. 5G Ultra Wideband access included with Plus, Pro, and Premium plans. Downloads over 5G Ultra Wideband. Depending on location, uploads over 5G Ultra Wideband or 4G LTE.",
                                    "5G Nationwide available in 2,700+ cities. 5G Nationwide access requires a 5G Nationwide-capable device. Only after exceeding allowance, unlimited 3 Mbps speed when on 5G Ultra Wideband for Plus, Pro and Premium plans for the rest of the month; and unlimited 600 Kbps speed when on 5G Nationwide / 4G LTE for the rest of the month.",
                                    "Video streams up to 4K UHD on capable tethered device when on 5G Ultra Wideband (only available with Plus, Pro, and Premium plans), and up to 720p on capable tethered device when on 5G Nationwide / 4G LTE."
                                ],
                                "43924": [
                                    "5G Nationwide available in 2,700+ cities. 5G Nationwide access requires a 5G Nationwide-capable device. 5G Nationwide / 4G LTE premium data: 15 GB/mo on Unlimited.",
                                    "Device with video messaging required."
                                ],
                                "18063": [
                                    "5G Nationwide available in 2,700+ cities. 5G Nationwide access requires a 5G Nationwide-capable device. 5G Nationwide / 4G LTE premium data: 15 GB/mo on Unlimited or 30 GB/mo on Unlimited Plus.",
                                    "Mobile hotspot usage counts towards 5G Nationwide / 4G LTE data allotment. Only after exceeding 15 GB/mo/line on Unlimited or 30 GB/mo/line on Unlimited Plus, data reduced to 600 Kbps for the rest of the month."
                                ],
                                "18042": [
                                    "5G Nationwide available in 2,700+ cities. 5G Nationwide access requires a 5G Nationwide-capable device. 5G Nationwide / 4G LTE premium data. Only after exceeding 15 GB/mo/line on Unlimited or 30 GB/mo/line on Unlimited Plus, in times of congestion your data may be temporarily slower than other traffic.",
                                    " Mobile hotspot usage counts towards 5G Nationwide / 4G LTE data allotment. Only after exceeding 15 GB/mo/line on Unlimited or 30 GB/mo/line on Unlimited Plus, data reduced to 600 Kbps for the rest of the month."
                                ],
                                "18064": [
                                    "5G Nationwide available in 2,700+ cities. 5G Nationwide access requires a 5G Nationwide-capable device. 5G Nationwide / 4G LTE premium data: 15 GB/mo on Unlimited or 30 GB/mo on Unlimited Plus.",
                                    "Mobile hotspot usage counts towards 5G Nationwide / 4G LTE data allotment. Only after exceeding 15 GB/mo/line on Unlimited or 30 GB/mo/line on Unlimited Plus, data reduced to 600 Kbps for the rest of the month."
                                ],
                                "26869": [
                                    "<b>5G Nationwide available in 2,700+ cities.</b> 5G Nationwide access requires a 5G Nationwide-capable device."
                                ],
                                "47880": [
                                    "5G Nationwide available in 2,700+ cities. 5G Nationwide access requires a 5G Nationwide-capable device. After exceeding allowance, during times of congestion your tablet and mobile hotspot data may be temporarily slower than other traffic.",
                                    "During times of congestion, data may be temporarily slower than other traffic. Only after exceeding allowance, data reduced to 600 Kbps for the rest of the month.",
                                    "Video streams up to 4K UHD when on 5G Ultra Wideband (only available with Unlimited Plus plan); when on 5G Nationwide / 4G LTE, video typically streams at 720p and up to 1080p on tablets. Capable device required."
                                ],
                                "32559": [
                                    "5G Nationwide available in 2,700+ cities. 5G Nationwide access requires a 5G Nationwide-capable device. Only after exceeding 15 GB/mo/line, 600 Kbps per month."
                                ],
                                "32557": [
                                    "5G Nationwide available in 2,700+ cities. 5G Nationwide access requires a 5G Nationwide-capable device. Only after exceeding 15 GB/mo/line, 600 Kbps per month."
                                ]
                            },
                            "mm3Disclaimers5GNW": {
                                "disclaimers": [
                                    "Auto Pay and paper-free billing are required to get the discount. You can get Auto Pay by signing up online or on the phone with your bank account or debit card. Your discount will be applied each month as long as Auto Pay and paper-free billing stay active.",
                                    "Global claim from May 2020, based on Opensignal independent analysis of mobile measurements recorded during the period January 31 – April 30, 2020  2020 Opensignal Limited.",
                                    "5G Ultra Wideband available only in parts of select cities. 25x faster speeds based on analysis by Ookla of Speedtest Intelligence data median download speeds from Verizon 5G results compared to the median 4G LTE speeds of top U.S. carriers combined in Q1 2020. Ookla trademarks used under license and reprinted with permission.",
                                    "Messages and documents are only available on Android devices. Music and documents stored on Verizon Cloud can be streamed and accessed by using the Verizon Cloud app on iOS devices, but music and documents can't be backed up from or downloaded to iOS devices."
                                ]
                            },
                            "67576": {
                                "eligibleForParentLine": false,
                                "planType": "LLP",
                                "overages": "",
                                "planName": "5G HOME PLUS",
                                "description": "5G HOME PLUS",
                                "promoGifterPlan": false,
                                "mm3Disclaimers": [
                                    "Global claim from May 2020, based on Opensignal independent analysis of mobile measurements recorded during the period January 31 – April 30, 2020 © 2020 Opensignal Limited.",
                                    "5G Ultra Wideband available only in parts of select cities. 25x faster speeds based on analysis by Ookla® of Speedtest Intelligence® data median download speeds from Verizon 5G results compared to the median 4G LTE speeds of top U.S. carriers combined in Q1 2020. Ookla trademarks used under license and reprinted with permission.",
                                    "Messages and documents are only available on Android devices. Music and documents stored on Verizon Cloud can be streamed and accessed by using the Verizon Cloud app on iOS devices, but music and documents can't be backed up from or downloaded to iOS devices."
                                ],
                                "requiresParentLine": false,
                                "dataKey": "67576_Features",
                                "planDisclaimerText": [
                                    null
                                ],
                                "overView": "Home internet you can count on, with our best extras yet.",
                                "planId": "67576",
                                "planDisplayName": "5G HOME PLUS",
                                "addedFeaturesHeader": "",
                                "featuresIncludedHeader": "Includes",
                                "planAdditionalText": [
                                    null
                                ]
                            },
                            "67576_Features": {
                                "addedFeatures": [],
                                "groupProducts": [
                                    "50044",
                                    "50045",
                                    "50046",
                                    "50047",
                                    "50048"
                                ],
                                "highlightedPlanFeature": null,
                                "featuresIncluded": [
                                    "70065",
                                    "70066",
                                    "70067",
                                    "70068",
                                    "70069"
                                ]
                            }
                        }
                    },
                    {
                        "sectionIndex": "2",
                        "sectionId": "exploreMMPickPlan_ChartViewSection",
                        "sectionType": "exploreMMPickPlan_ChartViewSection",
                        "sectionComponentId": "ChartViewComponent",
                        "actions": [
                            {
                                "actionType": "route",
                                "actionValue": "/ExploreMMPlan",
                                "actionKey": "selectPlanButton",
                                "clickStream": "select-plan-button-cta"
                            }
                        ],
                        "data": {
                            "categoryGroups": []
                        }
                    },
                    {
                        "sectionIndex": "3",
                        "sectionId": "exploreMMPickPlanBottomSection",
                        "sectionType": "exploreMMPickPlanBottomSection",
                        "sectionComponentId": "ExploreMMPickPlanBottomComp",
                        "actions": [
                            {
                                "actionType": "http",
                                "actionValue": "https://wwwnssit5.verizon.com/support/broadband-services/",
                                "actionKey": "dataInfoLink",
                                "clickStream": "important-data-service-details-cta"
                            },
                            {
                                "actionType": "modal",
                                "actionValue": "ExploreMMPlanAndBroadbandModalSection",
                                "actionKey": "planInfoLink",
                                "sectionId": "exploreMMPlanAndBroadbandModalSection",
                                "clickStream": "important-plan-details-cta"
                            },
                            {
                                "actionType": "modal",
                                "actionValue": "ExploreMMAppleMusicModalSection",
                                "actionKey": "appleLink",
                                "sectionId": "exploreMMAppleMusicModalSection",
                                "clickStream": "explore-mm-apple-music-cta"
                            },
                            {
                                "actionType": "modal",
                                "actionValue": "ExploreMMPlanDetailsModalSection",
                                "actionKey": "seeDetailsButton",
                                "sectionId": "exploreMMPlanDetailsModalSection",
                                "clickStream": "explore-mm-plan-details-cta"
                            }
                        ],
                        "contents": [
                            {
                                "contentIndex": "0",
                                "contentComponentId": "FooterComponent",
                                "contentType": "hllp_footer",
                                "items": [
                                    {
                                        "itemType": "link",
                                        "itemAttributes": {},
                                        "itemValue": "Important plan details",
                                        "actionKey": "planInfoLink",
                                        "itemKey": "planInfoLink"
                                    },
                                    {
                                        "itemType": "link",
                                        "itemAttributes": {},
                                        "itemValue": "Important data service information",
                                        "actionKey": "dataInfoLink",
                                        "itemKey": "dataInfoLink"
                                    },
                                    {
                                        "dataKey": "footerNotes",
                                        "itemType": "list",
                                        "itemAttributes": {},
                                        "itemKey": "footer"
                                    },
                                    {
                                        "itemType": "link",
                                        "itemAttributes": {},
                                        "itemValue": "Important plan information",
                                        "actionKey": "planInfoLink",
                                        "itemKey": "planInfoLink_V2"
                                    },
                                    {
                                        "itemType": "link",
                                        "itemAttributes": {},
                                        "itemValue": "Important broadband information",
                                        "actionKey": "dataInfoLink",
                                        "itemKey": "dataInfoLink_V2"
                                    }
                                ]
                            },
                            {
                                "contentIndex": "1",
                                "contentComponentId": "FooterComponent",
                                "contentType": "footer",
                                "items": [
                                    {
                                        "itemType": "text",
                                        "itemAttributes": {},
                                        "itemValue": "Apple Music included, on us. Get it on iOS and Android. With select Unlimited plans",
                                        "itemKey": "appleText"
                                    },
                                    {
                                        "itemType": "link",
                                        "itemAttributes": {},
                                        "itemValue": "Learn More",
                                        "actionKey": "appleLink",
                                        "itemKey": "appleLink"
                                    },
                                    {
                                        "itemType": "button",
                                        "itemAttributes": {},
                                        "itemValue": "Pick this plan",
                                        "actionKey": "pickButton",
                                        "itemKey": "pickLink"
                                    },
                                    {
                                        "itemType": "button",
                                        "itemAttributes": {},
                                        "itemValue": "",
                                        "actionKey": "seeDetailsButton",
                                        "itemKey": ""
                                    },
                                    {
                                        "itemType": "link",
                                        "itemAttributes": {},
                                        "itemValue": "Important plan and broadband info",
                                        "actionKey": "planInfoLink",
                                        "itemKey": "planInfoLink"
                                    },
                                    {
                                        "itemType": "text",
                                        "itemAttributes": {},
                                        "itemValue": "*Global claim from May 2020, based on Opensignal independent analysis of mobile measurements recorded during the period January 31 - April 30, 2020 © 2020 Opensignal Limited.",
                                        "itemKey": "globalClaimText"
                                    },
                                    {
                                        "itemType": "link",
                                        "itemAttributes": {},
                                        "itemValue": "Important plan information",
                                        "actionKey": "planInfoLink",
                                        "itemKey": "planInfoLink_V2"
                                    },
                                    {
                                        "itemType": "link",
                                        "itemAttributes": {},
                                        "itemValue": "Important broadband information",
                                        "actionKey": "dataInfoLink",
                                        "itemKey": "dataInfoLink_V2"
                                    }
                                ]
                            }
                        ],
                        "data": {
                            "footerNotes": [
                                {
                                    "superScript": "1",
                                    "text": "Start Unlimited users may temporarily experience slower data in times of congestion; Play More Unlimited users may experience it after 25 GB/line; Do More Unlimited users, after 50 GB/line; Get More Unlimited users, after 75 GB/line",
                                    "is5gDevice": "false"
                                },
                                {
                                    "superScript": "2",
                                    "text": "Play More Unlimited and Do More Unlimited users get 4G LTE Unlimited Mobile Hotspot data up to 15 GB, when it reduces to 600 kbps; Get More Unlimited users get 4G LTE up to 30 GB, when it reduces to 600 kbps",
                                    "is5gDevice": "false"
                                },
                                {
                                    "superScript": "3",
                                    "text": "Data may be temporarily slower than in times of congestion. After 5 GB/line data speeds will be reduced to 2G",
                                    "is5gDevice": "false"
                                },
                                {
                                    "superScript": "4",
                                    "text": "5G Ultra Wideband requires a 5G capable device inside the 5G coverage area. Both a $10/mo charge and credit will appear on your bill. 5G Ultra Wideband for downloads and 4G LTE for uploads, but will not count towards 4G LTE premium data allowance",
                                    "is5gDevice": "true"
                                }
                            ]
                        }
                    }
                ],
                "data": {
                    "groupProducts": [
                        {
                            "groupProductId": "50044",
                            "groupName": "Willow",
                            "groupHdrText": "Speed",
                            "showAccordion": false,
                            "products": [
                                "70065",
                                "70070",
                                "70073",
                                "70074",
                                "70075"
                            ]
                        },
                        {
                            "groupProductId": "50045",
                            "groupName": "Willow",
                            "groupHdrText": "Streaming Quality",
                            "showAccordion": false,
                            "products": [
                                "70066",
                                "70071"
                            ]
                        },
                        {
                            "groupProductId": "50046",
                            "groupName": "Willow",
                            "groupHdrText": "Wireless Router",
                            "showAccordion": false,
                            "products": [
                                "70067"
                            ]
                        },
                        {
                            "groupProductId": "50047",
                            "groupName": "Willow",
                            "groupHdrText": "Price Guarantee",
                            "showAccordion": false,
                            "products": [
                                "70072",
                                "70068"
                            ]
                        },
                        {
                            "groupProductId": "50048",
                            "groupName": "Willow",
                            "groupHdrText": "Cloud Storage",
                            "showAccordion": false,
                            "products": [
                                "70069"
                            ]
                        }
                    ],
                    "products": [
                        {
                            "productId": "70067",
                            "categoryCode": "",
                            "cost": "0.00",
                            "level": "L",
                            "productName": "Included",
                            "groupId": "Wireless Router",
                            "prodLongDescp": "Our state-of-the-art Wi-Fi 6 router and 5G receiver is included in your plan.",
                            "groupName": "Wireless Router",
                            "groupDescription": "Our state-of-the-art Wi-Fi 6 router and 5G receiver is included in your plan.",
                            "superscript": "",
                            "hideCheckMark": false,
                            "hideInListView": false,
                            "showDashLine": false,
                            "toolTipInfo": "Included",
                            "description": "Included"
                        },
                        {
                            "productId": "70070",
                            "categoryCode": "",
                            "cost": "0.00",
                            "level": "L",
                            "productName": "Up to 100 Mbps download",
                            "groupId": "Speed",
                            "prodLongDescp": "Typical download speeds of 50 - 85 Mbps. <br> <br> Upload speeds of 5-10 Mbps. 5G/4G LTE backup with download speeds up to 70 Mbps. Depending on location, some customers may receive LTE Home with download speeds of 25-50 Mbps and upload speeds of 4-5 Mbps.",
                            "groupName": "Speed",
                            "groupDescription": "Typical download speeds of 50 - 85 Mbps. <br> <br> Upload speeds of 5-10 Mbps. 5G/4G LTE backup with download speeds up to 70 Mbps. Depending on location, some customers may receive LTE Home with download speeds of 25-50 Mbps and upload speeds of 4-5 Mbps.",
                            "superscript": "",
                            "hideCheckMark": false,
                            "hideInListView": false,
                            "showDashLine": false,
                            "toolTipInfo": "Up to 100 Mbps download",
                            "description": "Up to 100 Mbps download"
                        },
                        {
                            "productId": "70071",
                            "categoryCode": "",
                            "cost": "0.00",
                            "level": "L",
                            "productName": "1080p HD",
                            "groupId": "Streaming Quality",
                            "prodLongDescp": "Enjoy your entertainment in HD quality picture, color and sharpness.<br> <br> HD compatible devices required. Content availability may vary. HD content viewing will be impacted by additional factors like internet speed, home network congestion and operating system of devices used for content access.",
                            "groupName": "Streaming Quality",
                            "groupDescription": "Enjoy your entertainment in HD quality picture, color and sharpness.<br> <br> HD compatible devices required. Content availability may vary. HD content viewing will be impacted by additional factors like internet speed, home network congestion and operating system of devices used for content access.",
                            "superscript": "",
                            "hideCheckMark": false,
                            "hideInListView": false,
                            "showDashLine": false,
                            "toolTipInfo": "1080p HD",
                            "description": "1080p HD"
                        },
                        {
                            "productId": "70072",
                            "categoryCode": "",
                            "cost": "0.00",
                            "level": "L",
                            "productName": "2 years",
                            "groupId": "Price Guarantee",
                            "prodLongDescp": "So you don’t need to worry about unexpected  price hikes.<br> <br> For new Verizon Home Internet (\"\"VHI\"\") households who have not subscribed to a VHI service within the last 90 days. Applies only to the then-current base monthly rate exclusive of any other setup and additional equipment charges, discounts or promotions, including the FCC’s Affordable Connectivity Program (ACP) and the Verizon Forward Program.",
                            "groupName": "Price Guarantee",
                            "groupDescription": "So you don’t need to worry about unexpected  price hikes.<br> <br> For new Verizon Home Internet (\"\"VHI\"\") households who have not subscribed to a VHI service within the last 90 days. Applies only to the then-current base monthly rate exclusive of any other setup and additional equipment charges, discounts or promotions, including the FCC’s Affordable Connectivity Program (ACP) and the Verizon Forward Program.",
                            "superscript": "",
                            "hideCheckMark": false,
                            "hideInListView": false,
                            "showDashLine": false,
                            "toolTipInfo": "2 years",
                            "description": "2 years"
                        },
                        {
                            "productId": "70065",
                            "categoryCode": "",
                            "cost": "0.00",
                            "level": "L",
                            "productName": "Up to 300 Mbps download",
                            "groupId": "Speed",
                            "prodLongDescp": "Typical download speeds of 85 - 250 Mbps <br> <br> Upload speeds of 10-20 Mbps. 5G/4G LTE backup with download speeds up to 70 Mbps. Depending on location, some customers may receive LTE Home with download speeds of 25-50 Mbps and upload speeds of 4-5 Mbps.",
                            "groupName": "Speed",
                            "groupDescription": "Typical download speeds of 85 - 250 Mbps <br> <br>Upload speeds of 10-20 Mbps. 5G/4G LTE backup with download speeds up to 70 Mbps. Depending on location, some customers may receive LTE Home with download speeds of 25-50 Mbps and upload speeds of 4-5 Mbps.",
                            "superscript": "",
                            "hideCheckMark": false,
                            "hideInListView": false,
                            "showDashLine": false,
                            "toolTipInfo": "Up to 300 Mbps download",
                            "description": "Up to 300 Mbps download"
                        },
                        {
                            "productId": "70066",
                            "categoryCode": "",
                            "cost": "0.00",
                            "level": "L",
                            "productName": "Ultra HD 4K",
                            "groupId": "Streaming Quality",
                            "prodLongDescp": "Stream movies, shows and sports in brilliant Ultra HD 4K resolution.<br> <br> 4K compatible devices required. Content availability may vary. 4K content viewing will be impacted by additional factors like internet speed, home network congestion and operating system of devices used for content access.",
                            "groupName": "Streaming Quality",
                            "groupDescription": "Stream movies, shows and sports in brilliant Ultra HD 4K resolution.<br> <br> 4K compatible devices required. Content availability may vary. 4K content viewing will be impacted by additional factors like internet speed, home network congestion and operating system of devices used for content access.",
                            "superscript": "",
                            "hideCheckMark": false,
                            "hideInListView": false,
                            "showDashLine": false,
                            "toolTipInfo": "Ultra HD 4K",
                            "description": "Ultra HD 4K"
                        },
                        {
                            "productId": "70068",
                            "categoryCode": "",
                            "cost": "0.00",
                            "level": "L",
                            "productName": "3 years",
                            "groupId": "Price Guarantee",
                            "prodLongDescp": "So you don’t need to worry about unexpected  price hikes.<br> <br> For new Verizon Home Internet (\"\"VHI\"\") households who have not subscribed to a VHI service within the last 90 days. Applies only to the then-current base monthly rate exclusive of any other setup and additional equipment charges, discounts or promotions, including the FCC’s Affordable Connectivity Program (ACP) and the Verizon Forward Program.",
                            "groupName": "Price Guarantee",
                            "groupDescription": "So you don’t need to worry about unexpected  price hikes.<br> <br> For new Verizon Home Internet (\"\"VHI\"\") households who have not subscribed to a VHI service within the last 90 days. Applies only to the then-current base monthly rate exclusive of any other setup and additional equipment charges, discounts or promotions, including the FCC’s Affordable Connectivity Program (ACP) and the Verizon Forward Program.",
                            "superscript": "",
                            "hideCheckMark": false,
                            "hideInListView": false,
                            "showDashLine": false,
                            "toolTipInfo": "3 years",
                            "description": "3 years"
                        },
                        {
                            "productId": "70069",
                            "categoryCode": "",
                            "cost": "0.00",
                            "level": "L",
                            "productName": "Verizon Cloud Unlimited",
                            "groupId": "Cloud Storage",
                            "prodLongDescp": "Get plenty of space to store your photos, videos, files and more with unlimited storage for up to 5 users and unlimited eligible devices. $19.99/mo value.<br> <br> Service does not back up operating systems, settings, apps, emails, external drives and uncommon file types. Content backup varies by operating platform. Maximum 10 GB upload file size. Internet connection is req’d; data usage applies to Verizon Cloud app download/use. See www.verizon.com/support/verizon-cloud-faqs for device req’s and service limitations.",
                            "groupName": "Cloud Storage",
                            "groupDescription": "Get plenty of space to store your photos, videos, files and more with unlimited storage for up to 5 users and unlimited eligible devices. $19.99/mo value.<br> <br> Service does not back up operating systems, settings, apps, emails, external drives and uncommon file types. Content backup varies by operating platform. Maximum 10 GB upload file size. Internet connection is req’d; data usage applies to Verizon Cloud app download/use. See www.verizon.com/support/verizon-cloud-faqs for device req’s and service limitations.",
                            "superscript": "",
                            "hideCheckMark": false,
                            "hideInListView": false,
                            "showDashLine": false,
                            "toolTipInfo": "Verizon Cloud Unlimited",
                            "description": "Verizon Cloud Unlimited"
                        }
                    ],
                    "perksReferenceDataList": {
                        "perkList": []
                    }
                }
            },
            {
                "sectionIndex": "4",
                "sectionId": "exploreMMAppleMusicModalSection",
                "sectionType": "exploreMMAppleMusicModalSection",
                "sectionComponentId": "ExploreMMAppleMusicModalSection",
                "actions": [
                    {
                        "actionType": "modal",
                        "actionValue": "ExploreMMAppleMusicModalSection",
                        "actionKey": "closeLink",
                        "clickStream": "explore-mm-apple-music-close-cta"
                    }
                ],
                "contents": [
                    {
                        "contentIndex": "1",
                        "items": [
                            {
                                "itemKey": "descText",
                                "itemType": "html",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "closeLink",
                                "itemType": "link",
                                "itemValue": "Got it",
                                "itemAttributes": {},
                                "actionKey": "closeLink"
                            }
                        ]
                    }
                ],
                "data": [],
                "dataUrl": "https://www.verizon.com/reusable-content/offers/apple-music.html"
            },
            {
                "sectionIndex": "202",
                "sectionId": "explproreMMPlan_Plan_Discount",
                "sectionType": "planDiscountModal",
                "sectionComponentId": "planDiscountModalComp",
                "contents": [
                    {
                        "items": [
                            {
                                "itemKey": "planDiscountHeader",
                                "itemValue": "Plan discounts",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "planDiscountSubHeader",
                                "itemValue": "The following discounts are applied to your plan cost.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "mobileandhomeDiscountHeader",
                                "itemValue": "Mobile + Home Discount",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "mobileandhomePlanOne",
                                "itemValue": "5G Home Plus",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "mobileandhomePlanOneDiscount",
                                "itemValue": "-$25/mo",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "mobileandhomePlanTwo",
                                "itemValue": "5G Home",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "mobileandhomePlanTwoDiscount",
                                "itemValue": "-$15/mo",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "mobileandhomeFooter",
                                "itemValue": "You'll save on your Home Internet plan because you have an existing postpaid mobile unlimited plan.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "autoPayDiscountHeader",
                                "itemValue": "Auto Pay Discount",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "autoPayDiscountPlans",
                                "itemValue": "All plans",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "autoPayDiscountPlansAmount",
                                "itemValue": "-$10/mo",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "autoPayDiscountFooter",
                                "itemValue": "You’ll save $10/mo because you’re signed up for Auto Pay and Paper-free billing.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "fiveDollarDiscountHeader",
                                "itemValue": "$5 Discount",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "fiveDollarDiscountPlanOne",
                                "itemValue": "5G Home Plus",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "fiveDollarDiscountPlanOneAmount",
                                "itemValue": "-$5/mo",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "fiveDollarDiscountPlanTwo",
                                "itemValue": "5G Home",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "fiveDollarDiscountPlanAmount",
                                "itemValue": "—",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "fiveDollarDiscountFooter",
                                "itemValue": "$5/mo discount applied via bill credit for as long as Verizon provides and you maintain eligible service.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "planDiscountButton",
                                "itemValue": "Close",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "employeeDiscountHeader",
                                "itemValue": "Employee Discount",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "employeeDiscountPlans",
                                "itemValue": "All plans",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "employeeDiscountOffer",
                                "itemValue": "50% off",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "employeeDiscountFooter",
                                "itemValue": "You’ll save on your Home Internet plan because of your discount.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "retireeDiscountHeader",
                                "itemValue": "Retiree Discount",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "retireeDiscountPlans",
                                "itemValue": "All plans",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "retireeDiscountOffers",
                                "itemValue": "25% off",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "retireeDiscountFooter",
                                "itemValue": "You’ll save on your Home Internet plan because of your discount.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "tooltipHeader",
                                "itemValue": "Save even more with these discounts.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "tooltipMobileHomeDiscountHeader",
                                "itemValue": "Mobile + Home Discount",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "tooltipMobileHomeDiscountSubHeaderOne",
                                "itemValue": "Save up to $25/mo. when you bundle your Home internet service with a postpaid mobile unlimited plan.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "tooltipAutoPayHeader",
                                "itemValue": "Auto Pay Discount",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "tooltipautoPaySubHeader",
                                "itemValue": "Save $10/mo when you sign up for Auto Pay and Paper-free billing.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "tooltipFooter",
                                "itemValue": "Availability varies. Subject to credit approval.  Enroll in Auto Pay (Debit card, Checking account or the Verizon Visa Card) & paper-free billing required.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "tooltipMobileHomeDiscountSubHeaderTwo",
                                "itemValue": "Save up to $15/mo. when you bundle your Home internet service with a postpaid mobile unlimited plan.",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "discountType",
                                "itemValue": "Personal",
                                "itemAttributes": {}
                            }
                        ]
                    }
                ],
                "data": {}
            },
            {
                "sectionIndex": "5",
                "sectionId": "exploreMMPlanAndBroadbandModalSection",
                "sectionType": "exploreMMPlanAndBroadbandModalSection",
                "sectionComponentId": "ExploreMMPlanAndBroadbandModalSection",
                "actions": [
                    {
                        "actionKey": "planInfoTabLink",
                        "clickStream": "plan-info-tab-text-cta"
                    },
                    {
                        "actionKey": "broadBandInfoTabLink",
                        "clickStream": "broadband-info-tab-cta"
                    }
                ],
                "contents": [
                    {
                        "contentIndex": "1",
                        "items": [
                            {
                                "itemKey": "planInfoTabText",
                                "itemType": "text",
                                "itemValue": "Important plan info",
                                "itemAttributes": {},
                                "actionKey": "planInfoTabLink"
                            },
                            {
                                "itemKey": "broadBandInfoTabText",
                                "itemType": "text",
                                "itemValue": "Important broadband info",
                                "itemAttributes": {},
                                "actionKey": "broadBandInfoTabLink"
                            },
                            {
                                "itemKey": "planInfoHeaderText",
                                "itemType": "text",
                                "itemValue": "Important plan information",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "broadBandInfoText",
                                "itemType": "html",
                                "itemValue": "Important Information About Verizon Wireless <br/> Broadband Internet Access Services",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "planInfoHtml",
                                "itemType": "html",
                                "itemAttributes": {}
                            }
                        ]
                    }
                ],
                "data": {}
            },
            {
                "sectionIndex": "3",
                "sectionId": "exploreMMPlanDetailsModalSection",
                "sectionType": "exploreMMPlanDetailsModalSection",
                "sectionComponentId": "ExploreMMPlanDetailsModalSection",
                "actions": [
                    {
                        "actionType": "route",
                        "actionValue": "/exploremmplan",
                        "actionKey": "selectPlanButton",
                        "sectionId": "exploreMM_PickPlanSection",
                        "clickStream": "select-plan-cta"
                    }
                ],
                "contents": [
                    {
                        "contentIndex": "1",
                        "items": [
                            {
                                "itemKey": "headerText",
                                "itemType": "text",
                                "itemValue": "Plan details",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "planDetails",
                                "itemType": "list",
                                "dataKey": "planDetails",
                                "itemAttributes": {}
                            },
                            {
                                "itemKey": "selectLink",
                                "itemType": "button",
                                "itemValue": "Select this plan",
                                "itemAttributes": {},
                                "actionKey": "selectPlanButton"
                            }
                        ]
                    }
                ],
                "data": {
                    "planDetails": [
                        [
                            "67571",
                            "67576"
                        ]
                    ]
                }
            }
        ]
    }
};

export const flowWillow = {
	"willowFeatures": {
		"67567": {
			"lowPriceTooltip": "<p>Save even more with these discounts</p>\n<strong>Mobile + Home Discount</strong>\nSave up to $15/mo when combined with an existing postpaid mobile unlimited plan.<br><br>\n<strong>Auto Pay Discount</strong>\nSave $10/mo when you sign up for Auto Pay and Paper-free billing.<br><br>\nAvailability varies. Subject to credit approval.  Enroll in Auto Pay (Debit card, Checking account or the Verizon Visa Card) & paper-free billing required.",
			"originalPrice": 60,
			"reviewDetailsSubHeader": [
				"Typical speeds of 85 - 250 Mbps",
				"Enjoy your entertainment in HD quality picture, color and sharpness.",
				"Our state-of-the-art Wi-Fi 6 router and 5G receiver is included in your plan.",
				"So you don’t need to worry about unexpected  price hikes."
			],
			"reviewDetailsTitle": [
				"Up to 300 Mbps download",
				"1080p HD video streaming",
				"Wireless router included",
				"2-Year Price Guarantee"
			],
			"planName": "5G Home",
			"mhTooltip": "Mobile + Home Discount<br>Save up to $15/mo. when you bundle your Home internet service with a postpaid mobile unlimited plan.",
			"featureIcon": [
				"download",
				"voice-hd",
				"home-internet",
				"lock-closed"
			],
			"reviewDetailsHeader": "5G Home",
			"featureTitle": [
				"Up to 300 Mbps download",
				"1080p HD video streaming",
				"Wireless router included",
				"2-Year Price Guarantee"
			],
			"businessRef": "mmwave Consumer/Small Business",
			"discountedPrice": 35,
			"reviewDetailsDesc": [
				"Upload speeds of 10-20 Mbps. 5G/4G LTE backup with download speeds up to 70 Mbps.",
				"HD compatible devices required. Content availability may vary. HD content viewing will be impacted by additional factors like internet speed, home network congestion and operating system of devices used for content access.",
				"-NA-",
				"For new Verizon Home Internet (\"VHI\") households who have not subscribed to a VHI service within the last 90 days. Applies only to the then-current base monthly rate exclusive of any other setup and additional equipment charges, discounts or promotions, including the FCC’s Affordable Connectivity Program (ACP) and the Verizon Forward Program."
			],
			"id": "67567",
			"reviewDetails": "Review details",
			"featureSubTitle": [
				"Typical speeds of 85 - 250 Mbps",
				"-NA-",
				"-NA-",
				"-NA-"
			],
			"autopayTooltip": "Auto Pay Discount<br>Save $10/mo when you sign up for Auto Pay and Paper-free billing.<br>\nAvailability varies. Subject to credit approval.  Enroll in Auto Pay (Debit card, Checking account or the Verizon Visa Card) & paper-free billing required.",
			"order": 2
		},
		"67568": {
			"lowPriceTooltip": "<p>Save even more with these discounts.</p>\n<strong>Mobile + Home Discount</strong>\nSave up to $25/mo when combined with an existing postpaid mobile unlimited plan.<br><br>\n<strong>Auto Pay Discount</strong>\nSave $10/mo when you sign up for Auto Pay and Paper-free billing.<br><br>\nAvailability varies. Subject to credit approval.  Enroll in Auto Pay (Debit card, Checking account or the Verizon Visa Card) & paper-free billing required.",
			"originalPrice": 80,
			"reviewDetailsSubHeader": [
				"Typical speeds of 300 - 1000 Mbps",
				"Stream movies, shows and sports in brilliant Ultra HD 4K resolution.",
				"Our state-of-the-art Wi-Fi 6 router and 5G receiver is included in your plan.",
				"So you don’t need to worry about unexpected  price hikes.",
				"Get plenty of space to store your photos, videos, files and more with unlimited storage for up to 5 users and unlimited eligible devices. $19.99/mo value."
			],
			"reviewDetailsTitle": [
				"Up to 1 Gig download",
				"Ultra HD 4K video streaming",
				"Wireless router included",
				"3-Year Price Guarantee",
				"Verizon Cloud Unlimited"
			],
			"planName": "5G Home Plus",
			"mhTooltip": "Mobile + Home Discount<br>Save up to $15/mo. when you bundle your Home internet service with a postpaid mobile unlimited plan.",
			"bestValueText": "Best value: Choose 1 premium extra",
			"featureIcon": [
				"download",
				"voice-hd",
				"home-internet",
				"lock-closed",
				"cloud"
			],
			"reviewDetailsHeader": "5G Home Plus",
			"featureTitle": [
				"Up to 1 Gig download",
				"Ultra HD 4K video streaming",
				"Wireless router included",
				"3-Year Price Guarantee",
				"Verizon Cloud Unlimited"
			],
			"businessRef": "mmwave Plus Consumer/Small Business",
			"discountedPrice": 45,
			"lowPrice": "As low as",
			"reviewDetailsDesc": [
				"Upload speeds of 10-20 Mbps. 5G/4G LTE backup with download speeds up to 70 Mbps. Depending on location, some customers may receive LTE Home with download speeds of 25-50 Mbps and upload speeds of 4-5 Mbps.",
				"4K compatible devices required. Content availability may vary. 4K content viewing will be impacted by additional factors like internet speed, home network congestion and operating system of devices used for content access.",
				"-NA-",
				"For new Verizon Home Internet (\"VHI\") households who have not subscribed to a VHI service within the last 90 days. Applies only to the then-current base monthly rate exclusive of any other setup and additional equipment charges, discounts or promotions, including the FCC’s Affordable Connectivity Program (ACP) and the Verizon Forward Program.",
				"Service does not back up operating systems, settings, apps, emails, external drives and uncommon file types. Content backup varies by operating platform. Maximum 10 GB upload file size. Internet connection is req’d; data usage applies to Verizon Cloud app download/use. See www.verizon.com/support/verizon-cloud-faqs for device req’s and service limitations."
			],
			"id": "67568",
			"reviewDetails": "Review details",
			"featureSubTitle": [
				"Typical speeds of 300 - 1000 Mbps",
				"-NA-",
				"-NA-",
				"-NA-",
				"-NA-"
			],
			"autopayTooltip": "Auto Pay Discount<br>Save $10/mo when you sign up for Auto Pay and Paper-free billing.<br>\nAvailability varies. Subject to credit approval.  Enroll in Auto Pay (Debit card, Checking account or the Verizon Visa Card) & paper-free billing required.",
			"order": 1
		},
		"67571": {
			"lowPriceTooltip": "<p>Save even more with these discounts</p>\n<strong>Mobile + Home Discount</strong>\nSave up to $15/mo when combined with an existing postpaid mobile unlimited plan.<br><br>\n<strong>Auto Pay Discount</strong>\nSave $10/mo when you sign up for Auto Pay and Paper-free billing.<br><br>\nAvailability varies. Subject to credit approval.  Enroll in Auto Pay (Debit card, Checking account or the Verizon Visa Card) & paper-free billing required.",
			"originalPrice": 60,
			"reviewDetailsSubHeader": [
				"Typical download speeds of 50 - 85 Mbps",
				"Enjoy your entertainment in HD quality picture, color and sharpness.",
				"Our state-of-the-art Wi-Fi 6 router and 5G receiver is included in your plan.",
				"So you don’t need to worry about unexpected  price hikes."
			],
			"reviewDetailsTitle": [
				"Up to 100 Mbps download",
				"1080p HD video streaming",
				"Wireless router included",
				"2-Year Price Guarantee"
			],
			"planName": "5G Home",
			"mhTooltip": "Mobile + Home Discount<br>Save up to $15/mo. when you bundle your Home internet service with a postpaid mobile unlimited plan.",
			"featureIcon": [
				"download",
				"voice-hd",
				"home-internet",
				"lock-closed"
			],
			"reviewDetailsHeader": "5G Home",
			"featureTitle": [
				"Up to 100 Mbps download",
				"1080p HD video streaming",
				"Wireless router included",
				"2-Year Price Guarantee"
			],
			"businessRef": "c-band Consumer/Small Business",
			"discountedPrice": 35,
			"lowPrice": "As low as",
			"reviewDetailsDesc": [
				"Upload speeds of 5-10 Mbps. 5G/4G LTE backup with download speeds up to 70 Mbps. Depending on location, some customers may receive LTE Home with download speeds of 25-50 Mbps and upload speeds of 4-5 Mbps.",
				"HD compatible devices required. Content availability may vary. HD content viewing will be impacted by additional factors like internet speed, home network congestion and operating system of devices used for content access.",
				"-NA-",
				"For new Verizon Home Internet (\"VHI\") households who have not subscribed to a VHI service within the last 90 days. Applies only to the then-current base monthly rate exclusive of any other setup and additional equipment charges, discounts or promotions, including the FCC’s Affordable Connectivity Program (ACP) and the Verizon Forward Program."
			],
			"id": "67571",
			"reviewDetails": "Review details",
			"featureSubTitle": [
				"Typical speeds of 50 - 85 Mbps",
				"-NA-",
				"-NA-",
				"-NA-"
			],
			"autopayTooltip": "Auto Pay Discount<br>Save $10/mo when you sign up for Auto Pay and Paper-free billing.<br>\nAvailability varies. Subject to credit approval.  Enroll in Auto Pay (Debit card, Checking account or the Verizon Visa Card) & paper-free billing required.",
			"order": 2
		},
		"67576": {
			"lowPriceTooltip": "<p>Save even more with these discounts.</p>\n<strong>Mobile + Home Discount</strong>\nSave up to $25/mo when combined with an existing postpaid mobile unlimited plan.<br><br>\n<strong>Auto Pay Discount</strong>\nSave $10/mo when you sign up for Auto Pay and Paper-free billing.<br><br>\nAvailability varies. Subject to credit approval.  Enroll in Auto Pay (Debit card, Checking account or the Verizon Visa Card) & paper-free billing required.",
			"originalPrice": 80,
			"reviewDetailsSubHeader": [
				"Typical download speeds of 85 - 250 Mbps",
				"Stream movies, shows and sports in brilliant Ultra HD 4K resolution.",
				"Our state-of-the-art Wi-Fi 6 router and 5G receiver is included in your plan.",
				"So you don’t need to worry about unexpected  price hikes.",
				"Get plenty of space to store your photos, videos, files and more with unlimited storage for up to 5 users and unlimited eligible devices. $19.99/mo value."
			],
			"reviewDetailsTitle": [
				"Up to 300 Mbps download",
				"Ultra HD 4K video streaming",
				"Wireless router included",
				"3-Year Price Guarantee",
				"Verizon Cloud Unlimited"
			],
			"planName": "5G Home Plus",
			"mhTooltip": "Mobile + Home Discount<br>Save up to $15/mo. when you bundle your Home internet service with a postpaid mobile unlimited plan.",
			"bestValueText": "Best value: Choose 1 premium extra",
			"featureIcon": [
				"download",
				"voice-hd",
				"home-internet",
				"lock-closed",
				"cloud"
			],
			"reviewDetailsHeader": "5G Home Plus",
			"featureTitle": [
				"Up to 300 Mbps download",
				"Ultra HD 4K video streaming",
				"Wireless router included",
				"3-Year Price Guarantee",
				"Verizon Cloud Unlimited"
			],
			"businessRef": "c-band Plus Consumer/Small Business",
			"discountedPrice": 45,
			"lowPrice": "As low as",
			"reviewDetailsDesc": [
				"Upload speeds of 10-20 Mbps. 5G/4G LTE backup with download speeds up to 70 Mbps. Depending on location, some customers may receive LTE Home with download speeds of 25-50 Mbps and upload speeds of 4-5 Mbps.",
				"4K compatible devices required. Content availability may vary. 4K content viewing will be impacted by additional factors like internet speed, home network congestion and operating system of devices used for content access.",
				"-NA-",
				"For new Verizon Home Internet (\"VHI\") households who have not subscribed to a VHI service within the last 90 days. Applies only to the then-current base monthly rate exclusive of any other setup and additional equipment charges, discounts or promotions, including the FCC’s Affordable Connectivity Program (ACP) and the Verizon Forward Program.",
				"Service does not back up operating systems, settings, apps, emails, external drives and uncommon file types. Content backup varies by operating platform. Maximum 10 GB upload file size. Internet connection is req’d; data usage applies to Verizon Cloud app download/use. See www.verizon.com/support/verizon-cloud-faqs for device req’s and service limitations."
			],
			"id": "67576",
			"reviewDetails": "Review details",
			"featureSubTitle": [
				"Typical speeds of 85 - 250 Mbps",
				"-NA-",
				"-NA-",
				"-NA-",
				"-NA-"
			],
			"autopayTooltip": "Auto Pay Discount<br>Save $10/mo when you sign up for Auto Pay and Paper-free billing.<br>\nAvailability varies. Subject to credit approval.  Enroll in Auto Pay (Debit card, Checking account or the Verizon Visa Card) & paper-free billing required.",
			"order": 1
		},
		"67577": {
			"lowPriceTooltip": "<p>Save even more with these discounts</p>\n<strong>Mobile + Home Discount</strong>\nSave up to $15/mo when combined with an existing postpaid mobile unlimited plan.<br><br>\n<strong>Auto Pay Discount</strong>\nSave $10/mo when you sign up for Auto Pay and Paper-free billing.<br><br>\nAvailability varies. Subject to credit approval.  Enroll in Auto Pay (Debit card, Checking account or the Verizon Visa Card) & paper-free billing required.",
			"originalPrice": 60,
			"reviewDetailsSubHeader": [
				"Typical speeds of 25 - 50 Mbps",
				"Enjoy your entertainment in HD quality picture, color and sharpness.",
				"Our state-of-the-art Wi-Fi 6 router and 5G receiver is included in your plan.",
				"So you don’t need to worry about unexpected  price hikes."
			],
			"reviewDetailsTitle": [
				"Up to 50 Mbps download",
				"1080p HD video streaming",
				"Wireless router included",
				"2-Year Price Guarantee"
			],
			"planName": "LTE Home",
			"mhTooltip": "Mobile + Home Discount<br>Save up to $15/mo. when you bundle your Home internet service with a postpaid mobile unlimited plan.",
			"featureIcon": [
				"download",
				"voice-hd",
				"home-internet",
				"lock-closed"
			],
			"reviewDetailsHeader": "LTE Home",
			"featureTitle": [
				"Up to 50 Mbps download",
				"1080p HD video streaming",
				"Wireless router included",
				"2-Year Price Guarantee"
			],
			"businessRef": "LTE Home Consumer/Small Business",
			"discountedPrice": 35,
			"lowPrice": "As low as",
			"reviewDetailsDesc": [
				"Upload speeds of 4-5 Mbps.",
				"HD compatible devices required. Content availability may vary. HD content viewing will be impacted by additional factors like internet speed, home network congestion and operating system of devices used for content access.",
				"-NA-",
				"For new Verizon Home Internet (\"VHI\") households who have not subscribed to a VHI service within the last 90 days. Applies only to the then-current base monthly rate exclusive of any other setup and additional equipment charges, discounts or promotions, including the FCC’s Affordable Connectivity Program (ACP) and the Verizon Forward Program."
			],
			"id": "67577",
			"reviewDetails": "Review details",
			"featureSubTitle": [
				"Typical speeds of 25 - 50 Mbps",
				"-NA-",
				"-NA-",
				"-NA-"
			],
			"autopayTooltip": "Auto Pay Discount<br>Save $10/mo when you sign up for Auto Pay and Paper-free billing.<br>\nAvailability varies. Subject to credit approval.  Enroll in Auto Pay (Debit card, Checking account or the Verizon Visa Card) & paper-free billing required.",
			"order": 2
		},
		"67584": {
			"lowPriceTooltip": "<p>Save even more with these discounts.</p>\n<strong>Mobile + Home Discount</strong>\nSave up to $25/mo when combined with an existing postpaid mobile unlimited plan.<br><br>\n<strong>Auto Pay Discount</strong>\nSave $10/mo when you sign up for Auto Pay and Paper-free billing.<br><br>\nAvailability varies. Subject to credit approval.  Enroll in Auto Pay (Debit card, Checking account or the Verizon Visa Card) & paper-free billing required.",
			"originalPrice": 80,
			"reviewDetailsSubHeader": [
				"Typical speeds of 25 - 50 Mbps",
				"Enjoy your entertainment in HD quality picture, color and sharpness.",
				"Our state-of-the-art Wi-Fi 6 router and 5G receiver is included in your plan.",
				"So you don’t need to worry about unexpected  price hikes.",
				"Get plenty of space to store your photos, videos, files and more with unlimited storage for up to 5 users and unlimited eligible devices. $19.99/mo value."
			],
			"reviewDetailsTitle": [
				"Up to 50 Mbps download",
				"1080p HD video streaming",
				"Wireless router included",
				"3-Year Price Guarantee",
				"Verizon Cloud Unlimited"
			],
			"planName": "LTE Home Plus",
			"mhTooltip": "Mobile + Home Discount<br>Save up to $15/mo. when you bundle your Home internet service with a postpaid mobile unlimited plan.",
			"bestValueText": "Best value: Choose 1 premium extra",
			"featureIcon": [
				"download",
				"voice-hd",
				"home-internet",
				"lock-closed",
				"cloud"
			],
			"reviewDetailsHeader": "LTE Home Plus",
			"featureTitle": [
				"Up to 50 Mbps download",
				"1080p HD video streaming",
				"Wireless router included",
				"3-Year Price Guarantee",
				"Verizon Cloud Unlimited"
			],
			"businessRef": "LTE Home Plus Consumer/Small Business",
			"discountedPrice": 45,
			"lowPrice": "As low as",
			"reviewDetailsDesc": [
				"Upload speeds of 4-5 Mbps.",
				"HD compatible devices required. Content availability may vary. HD content viewing will be impacted by additional factors like internet speed, home network congestion and operating system of devices used for content access.",
				"-NA-",
				"For new Verizon Home Internet (\"VHI\") households who have not subscribed to a VHI service within the last 90 days. Applies only to the then-current base monthly rate exclusive of any other setup and additional equipment charges, discounts or promotions, including the FCC’s Affordable Connectivity Program (ACP) and the Verizon Forward Program.",
				"Service does not back up operating systems, settings, apps, emails, external drives and uncommon file types. Content backup varies by operating platform. Maximum 10 GB upload file size. Internet connection is req’d; data usage applies to Verizon Cloud app download/use. See www.verizon.com/support/verizon-cloud-faqs for device req’s and service limitations."
			],
			"id": "67584",
			"reviewDetails": "Review details",
			"featureSubTitle": [
				"Typical speeds of 25 - 50 Mbps",
				"-NA-",
				"-NA-",
				"-NA-",
				"-NA-"
			],
			"autopayTooltip": "Auto Pay Discount<br>Save $10/mo when you sign up for Auto Pay and Paper-free billing.<br>\nAvailability varies. Subject to credit approval.  Enroll in Auto Pay (Debit card, Checking account or the Verizon Visa Card) & paper-free billing required.",
			"order": 1
		}
	},
	"willowOverview": [
		{
			"switchCommonSubheader": "30-Day Money-Back Guarantee",
			"switchCommonDescription": "If you aren't completely satisfied, we’ll give you your money back.",
			"discountHeader": "You have plan discounts",
			"disclaimerText_aal": "Plan prices include taxes and fees. Plan prices include taxes, fees and eligible discounts. Changes to your plans or account could result in a change in your discount.",
			"commonFeaturesHeader": "All plans include",
			"selectCTALabel": "Select",
			"discountSubHeader": "All plan costs include your",
			"pageHeader": "Choose a plan for your home.",
			"qualified5GAddressHeader": "You’re qualified for 5G Home Internet at",
			"commonBenefitsDescription": [
				"The price is the price, guaranteed.",
				"No hidden fees or equipment charges.",
				"No annual contracts or data limits.",
				"Reliable and fast enough to power your home."
			],
			"switchCommonHeader": "Cut the cable. \nSwitch today.",
			"commonBenefitsHeader": "Plus, enjoy all of these plan features:",
			"disclaimerText_nse": "Plan prices include taxes and fees.",
			"qualifiedLTEAddressHeader": "You’re qualified for LTE Home Internet at",
			"id": "overview",
			"switchCommonTooltip": "Not sure about making a switch? If for any reason you're unhappy, cancel within 30 days and receive a refund of the service charge. The refund will be issued via a one-time bill credit or sent to the original payment method after equipment is returned. You will be charged for monthly service on your activation date. If you cancel service w/in 30 days of activation, we will issue a refund for your service usage for up to 30 days (excluding late fees, entertainment subscriptions and account add-ons) provided you return all equipment w/in 30 days of your cancellation date. Refund will be issued w/in 30-60 days after return of equipment. Limit of one credit on one eligible address on your account.<br>For new LTE Home Internet customers who terminated their prior internet service and incurred an early termination fee (ETF) within the last 4 months. Offer is non-transferable and has no cash or refund value. Documentation of the ETF for internet from your prior service provider must be provided w/in 90 days after LTE Home Internet installation/setup and offer will be fulfilled via bill credit, to your Verizon account, in the amount of the ETF up to $500. You remain solely responsible for paying the ETF to your prior service provider. If we or you cancel your LTE Home Internet service w/in 90 days after installation/setup, the ETF credit will be charged back to your final bill. Other terms apply."
		}
	],
	"willowPlanExtras": {
		"67567": {
			"extrasCallout": "Get 1 extra",
			"choiceOlayTtl_nse": [
				"Get $200 off a Samsung Galaxy Chromebook Go."
			],
			"choiceOlaySubhead_nse": [
				"Power up your productivity."
			],
			"extrasCommonIcon_nse": "<img src='https://ss7.vzw.com/is/image/VerizonWireless/plan-extras-samsung-galaxy-chromebook-go?&bgc=000000&scl=1' style='height:48px; width: 48px; margin-right: 15px' alt=’Samsung Galaxy Chromebook’>",
			"choiceOlaySubheadDesc_nse": [
				"With its all-new slim design, Galaxy Chromebook Go is our lightest Chromebook yet, making it perfect for busy lives on the go."
			],
			"extrasChoiceFooter_nse": "You can redeem your extras after you activate your service.",
			"planExtrasTitle_nse": "$200 off Samsung Galaxy Chromebook Go ",
			"planName": "5G Home",
			"planChoiceExtrasLink_nse": [
				"Details"
			],
			"extrasCommonDesc_nse": "$200 off Samsung Galaxy Chromebook Go ",
			"extrasChoice": "N",
			"choiceOlayStepsHead_nse": [
				"Redemption steps"
			],
			"choiceOlayDesc_nse": [
				"With a 5G Home or LTE Home plan."
			],
			"planExtrasDesc_nse": "A $200 value.",
			"choiceOlaySteps_nse": [
				"1. Customers eligible for the promotion will receive redemption information via email or can log into the My Verizon desktop site or My Verizon mobile app directly to redeem the offer.<br>2. Upon clicking the tile for the eligible promotion, the customer will make a selection and accept the applicable Terms & Conditions.<br>3. The customer will be automatically directed to Samsung.com to complete the redemption."
			],
			"id": "67567",
			"choiceOlayFeatHeader_nse": [
				"Features"
			],
			"choiceOlayFtr_nse": [
				"Offer valid thru 9.13.23 for a Samsung Galaxy Chromebook Go. Must install and maintain eligible 5G Home or LTE Home service and redeem offer w/in 60 days thereafter, or by no later than 2.13.24, whichever is first. Verizon reserves the right to charge back the value of the Samsung promotional device if eligible service is canceled w/in 180 days. Samsung is a registered trademark of Samsung Electronics Co., Ltd."
			],
			"choiceOlayFeat_nse": [
				"> Better Together: Easily transfer files between devices, and control your phone right from your Chromebook.<br>> Premium Craftsmanship: Carefully constructed, Galaxy Chromebook Go features a military-grade design to withstand the occasional drop, ding or spill.<br>> Battery Life: Breeze through your school work and have plenty of power left for some me time with a battery that goes for up to 12 hours on a single charge."
			]
		},
		"67568": {
			"tileCallout": "Best value: Choose 1 premium extra",
			"extrasCallout": " Choose 1 premium extra",
			"extrasCommonDesc_aal": "Get a Chromebook Go + $100 Samsung Credit or the 2023-24 season of NFL Sunday Ticket on YouTube, on us.",
			"choiceOlaySubhead_nse": [
				"Power up your productivity.",
				"Make every game a home game."
			],
			"extrasChoiceFooter_aal": "You can redeem your extras after you activate your service.",
			"extrasCommonIcon_nse": "<img src='https://ss7.vzw.com/is/image/VerizonWireless/plan-extras-samsung-galaxy-chromebook-go?&bgc=000000&scl=1' style='height:48px; width: 48px; margin-right: 15px' alt=’Samsung Galaxy Chromebook’>||<p style='width: 100%; margin-left: 40%'>or</p><img src='https://ss7.vzw.com/is/image/VerizonWireless/plan-extras-nfl-sunday-ticket-youtube?&bgc=000000&scl=1' style='height:48px; width: 48px; margin-right: 15px' alt='NFL Sunday Ticket'>",
			"planExtrasTtl_nse": "Samsung Galaxy Chromebook Go||2023-24 Season of NFL Sunday Ticket on YouTube",
			"extrasChoiceFooter_nse": "You can redeem your extras after you activate your service.",
			"planExtrasTitle_nse": "Samsung Galaxy Chromebook Go||2023-24 Season of NFL Sunday Ticket on YouTube",
			"planChoiceExtrasDesc_nse": [
				"A $349.99 value.",
				"A $200 value."
			],
			"planName": "5G Home Plus",
			"choiceOlayDesc_aal": [
				"With a 5G Home Plus or LTE Home Plus plan.",
				"With a 5G Home Plus or LTE Home Plus plan."
			],
			"extrasCommonDesc_nse": "Get a Chromebook Go or the 2023-24 season of NFL Sunday Ticket on YouTube, on us.",
			"choiceOlayFeatHeader_aal": [
				"Features",
				"Features"
			],
			"choiceOlaySubheadDesc_aal": [
				"With its all-new slim design, Galaxy Chromebook Go is our lightest Chromebook yet, making it perfect for busy lives on the go.",
				"",
				"Watch your favorite teams’ out-of-market Sunday afternoon games."
			],
			"choiceOlaySteps_aal": [
				"1. Customers eligible for the promotion will receive redemption information via email or can log into the My Verizon desktop site or My Verizon mobile app directly to redeem the offer.<br>2. Upon clicking the tile for the eligible promotion, the customer will make a selection and accept the applicable Terms & Conditions.<br>3. The customer will be automatically directed to Samsung.com to complete the redemption.",
				"1. Customers eligible for the promotion will receive redemption information via email or can log into the My Verizon desktop site or My Verizon mobile app directly to redeem the offer.<br>2. Upon clicking the tile for the eligible promotion, the customer will make a selection and accept the applicable Terms & Conditions.<br>3. The customer will be automatically directed to Verizon +play, and then to YouTube to complete the redemption."
			],
			"choiceOlayDesc_nse": [
				"With a 5G Home Plus or LTE Home Plus plan.",
				"With a 5G Home Plus or LTE Home Plus plan."
			],
			"choiceOlayTtl_aal": [
				"Get a Samsung Galaxy Chromebook Go on us.",
				"Get this season of NFL Sunday Ticket from YouTube. On us."
			],
			"choiceOlaySteps_nse": [
				"1. Customers eligible for the promotion will receive redemption information via email or can log into the My Verizon desktop site or My Verizon mobile app directly to redeem the offer.<br>2. Upon clicking the tile for the eligible promotion, the customer will make a selection and accept the applicable Terms & Conditions.<br>3. The customer will be automatically directed to Samsung.com to complete the redemption.",
				"1. Customers eligible for the promotion will receive redemption information via email or can log into the My Verizon desktop site or My Verizon mobile app directly to redeem the offer.<br>2. Upon clicking the tile for the eligible promotion, the customer will make a selection and accept the applicable Terms & Conditions.<br>3. The customer will be automatically directed to Verizon +play, and then to YouTube to complete the redemption."
			],
			"extrasCommonIcon_aal": "<img src='https://ss7.vzw.com/is/image/VerizonWireless/plan-extras-samsung-galaxy-chromebook-go?&bgc=000000&scl=1' style='height:48px; width: 48px; margin-right: 15px' alt=’Samsung Galaxy Chromebook’>||<p style='width: 100%; margin-left: 40%'>or</p><img src='https://ss7.vzw.com/is/image/VerizonWireless/plan-extras-nfl-sunday-ticket-youtube?&bgc=000000&scl=1' style='height:48px; width: 48px; margin-right: 15px' alt='NFL Sunday Ticket'>",
			"id": "67568",
			"planExtrasTitle_aal": "Samsung Galaxy Chromebook Go + $100 Samsung Credit||2023-24 Season of NFL Sunday Ticket on YouTube",
			"choiceOlaySubhead_aal": [
				"Power up your productivity.",
				"Make every game a home game."
			],
			"choiceOlayTtl_nse": [
				"Get a Samsung Galaxy Chromebook Go on us.",
				"Get this season of NFL Sunday Ticket from YouTube. On us."
			],
			"choiceOlayFeat_aal": [
				"> Better Together: Easily transfer files between devices, and control your phone right from your Chromebook.<br>> Premium Craftsmanship: Carefully constructed, Galaxy Chromebook Go features a military-grade design to withstand the occasional drop, ding or spill.<br>> Battery Life: Breeze through your school work and have plenty of power left for some me time with a battery that goes for up to 12 hours on a single charge.",
				"> Savings: By getting this season  of NFL Sunday TIcket on YouTube when you switch to Verizon Home Internet, you save an estimated $449.<br>> Stream Anywhere: Watch live on your TV or anywhere you like on supported devices.<br>> Easy Setup: No 2-year contracts required. No satellite dish needed. Easy set-up to start watching in minutes."
			],
			"extrasIconCommon_aal": "<img src='https://ss7.vzw.com/is/image/VerizonWireless/plan-extras-samsung-galaxy-chromebook-go?&bgc=000000&scl=1' style='height:48px; width: 48px; margin-right: 15px' alt=’Samsung Galaxy Chromebook’>||<p style='width: 100%; margin-left: 40%'>or</p><img src='https://ss7.vzw.com/is/image/VerizonWireless/plan-extras-nfl-sunday-ticket-youtube?&bgc=000000&scl=1' style='height:48px; width: 48px; margin-right: 15px' alt='NFL Sunday Ticket'>",
			"choiceOlaySubheadDesc_nse": [
				"With its all-new slim design, Galaxy Chromebook Go is our lightest Chromebook yet, making it perfect for busy lives on the go.",
				"",
				"Watch your favorite teams’ out-of-market Sunday afternoon games."
			],
			"extraChoiceHeader_nse": "Your choice of:",
			"planChoiceExtrasTtl_aal": [
				"Samsung Galaxy Chromebook Go + $100 Samsung Credit",
				"2023-24 Season of NFL Sunday Ticket on YouTube"
			],
			"choiceOlayImage_aal": [
				"https://ss7.vzw.com/is/image/VerizonWireless/iphonepurple?&$pngalpha$&resMode=sharp2&scl=1",
				"https://ss7.vzw.com/is/image/VerizonWireless/iphonepurple?&$pngalpha$&resMode=sharp2&scl=1"
			],
			"planChoiceExtrasLink_nse": [
				"Details",
				"Details"
			],
			"planChoiceExtrasTtl_nse": [
				"Get a Chromebook Go",
				"1 season of NFL Sunday Ticket, on us."
			],
			"extrasChoice": "Y",
			"choiceOlayFtr_aal": [
				"Offer valid thru 9.13.23 for a Samsung Galaxy Chromebook Go and $100 credit toward select Samsung products; see www.samsung/com/fwa. Must activate and maintain eligible 5G Home Plus or LTE Home Plus service in good standing and redeem offer w/in 60 days thereafter, or by no later than 2.13.24, whichever is first. Verizon reserves the right to charge back the value of the Samsung promotional device if eligible service is canceled w/in 180 days. Samsung delivery of promotional device may take up to 8 weeks. Samsung is a registered trademark of Samsung Electronics Co., Ltd.",
				"Limited time only. Must activate eligible Verizon service and redeem offer w/in 60 days (beginning 8.11.23 via Verizon +play) of activation, or by no later than 12.13.23, whichever is first. Verizon reserves the right to charge back the value of the annual subscription if service is canceled before 2.29.24 or eligibility req’s are no longer met. Cannot be combined with an existing NFL Sunday Ticket subscription. $449 value applies to NFL Sunday Ticket season '23-'24 only. YouTube TV subscription required to watch NFL Sunday Ticket on YouTube TV. NFL Sunday Ticket requires a Google account, a current form of payment and is only available in markets where YouTube TV service is available. One offer per eligible Verizon Account. Terms and embargoes restrictions apply. No refunds. Locally broadcast Fox and CBS games, Sunday Night Football on NBC, select digital-only games and international games excluded from NFL Sunday Ticket."
			],
			"choiceOlayStepsHead_nse": [
				"Redemption Steps",
				"Redemption Steps"
			],
			"planChoiceExtrasLink_aal": [
				"Details",
				"Details"
			],
			"planExtrasDesc_nse": "A $349.99 value.||A $200 value.",
			"extrasIconCommon_nse": "<img src='https://ss7.vzw.com/is/image/VerizonWireless/plan-extras-samsung-galaxy-chromebook-go?&bgc=000000&scl=1' style='height:48px; width: 48px; margin-right: 15px' alt=’Samsung Galaxy Chromebook’>||<p style='width: 100%; margin-left: 40%'>or</p><img src='https://ss7.vzw.com/is/image/VerizonWireless/plan-extras-nfl-sunday-ticket-youtube?&bgc=000000&scl=1' style='height:48px; width: 48px; margin-right: 15px' alt='NFL Sunday Ticket'>",
			"choiceOlayFeatHeader_nse": [
				"Features",
				" Features"
			],
			"choiceOlayFtr_nse": [
				"Offer valid thru 9.13.23 for a Samsung Galaxy Chromebook Go. For new home internet customers who activate eligible 5G Home Plus or LTE Home Plus services and redeem offer w/in 60 days thereafter, or by no later than 2.13.24, whichever is first. Verizon reserves the right to charge back the value of the Samsung promotional device if eligible service is canceled w/in 180 days. Samsung delivery of promotional device may take up to 8 weeks. Samsung is a registered trademark of Samsung Electronics Co., Ltd.",
				"Limited time only. Must activate eligible Verizon service and redeem offer w/in 60 days (beginning 8.11.23 via Verizon +play) of activation, or by no later than 12.13.23, whichever is first. Verizon reserves the right to charge back the value of the annual subscription if service is canceled before 2.29.24 or eligibility req’s are no longer met. Cannot be combined with an existing NFL Sunday Ticket subscription. $449 value applies to NFL Sunday Ticket season '23-'24 only. YouTube TV subscription required to watch NFL Sunday Ticket on YouTube TV. NFL Sunday Ticket requires a Google account, a current form of payment and is only available in markets where YouTube TV service is available. One offer per eligible Verizon Account. Terms and embargoes restrictions apply. No refunds. Locally broadcast Fox and CBS games, Sunday Night Football on NBC, select digital-only games and international games excluded from NFL Sunday Ticket."
			],
			"choiceOlayStepsHead_aal": [
				"Redemption steps",
				"Redemption steps"
			],
			"planChoiceExtrasDesc_aal": [
				"A $449.99 value.",
				"A $399.99 value."
			],
			"choiceOlayFeat_nse": [
				"> Better Together: Easily transfer files between devices, and control your phone right from your Chromebook.<br>",
				"> Premium Craftsmanship: Carefully constructed, Galaxy Chromebook Go features a military-grade design to withstand the occasional drop, ding or spill.<br>",
				"> Battery Life: Breeze through your school work and have plenty of power left for some me time with a battery that goes for up to 12 hours on a single charge.",
				"> Savings: By getting this season  of NFL Sunday TIcket on YouTube when you switch to Verizon Home Internet, you save an estimated $449.<br>",
				"> Stream Anywhere: Watch live on your TV or anywhere you like on supported devices.<br>",
				"> Easy Setup: No 2-year contracts required. No satellite dish needed. Easy set-up to start watching in minutes."
			]
		},
		"67571": {
			"extrasCallout": "Get 1 extra",
			"choiceOlayTtl_nse": [
				"Get $200 off a Samsung Galaxy Chromebook Go."
			],
			"choiceOlaySubhead_nse": [
				"Power up your productivity."
			],
			"extrasCommonIcon_nse": "<img src='https://ss7.vzw.com/is/image/VerizonWireless/plan-extras-samsung-galaxy-chromebook-go?&bgc=000000&scl=1' style='height:48px; width: 48px; margin-right: 15px' alt=’Samsung Galaxy Chromebook’>",
			"choiceOlaySubheadDesc_nse": [
				"With its all-new slim design, Galaxy Chromebook Go is our lightest Chromebook yet, making it perfect for busy lives on the go."
			],
			"extrasChoiceFooter_nse": "You can redeem your extras after you activate your service.",
			"planExtrasTitle_nse": "$200 off Samsung Galaxy Chromebook Go ",
			"planName": "5G Home",
			"planChoiceExtrasLink_nse": [
				"Details"
			],
			"extrasCommonDesc_nse": "$200 off Samsung Galaxy Chromebook Go ",
			"extrasChoice": "N",
			"choiceOlayStepsHead_nse": [
				"Redemption steps"
			],
			"choiceOlayDesc_nse": [
				"With a 5G Home or LTE Home plan."
			],
			"planExtrasDesc_nse": "A $200 value.",
			"choiceOlaySteps_nse": [
				"1. Customers eligible for the promotion will receive redemption information via email or can log into the My Verizon desktop site or My Verizon mobile app directly to redeem the offer.<br>2. Upon clicking the tile for the eligible promotion, the customer will make a selection and accept the applicable Terms & Conditions.<br>3. The customer will be automatically directed to Samsung.com to complete the redemption."
			],
			"id": "67571",
			"choiceOlayFeatHeader_nse": [
				"Features"
			],
			"choiceOlayFtr_nse": [
				"Offer valid thru 9.13.23 for a Samsung Galaxy Chromebook Go. Must install and maintain eligible 5G Home or LTE Home service and redeem offer w/in 60 days thereafter, or by no later than 2.13.24, whichever is first. Verizon reserves the right to charge back the value of the Samsung promotional device if eligible service is canceled w/in 180 days. Samsung is a registered trademark of Samsung Electronics Co., Ltd."
			],
			"choiceOlayFeat_nse": [
				"> Better Together: Easily transfer files between devices, and control your phone right from your Chromebook.<br>> Premium Craftsmanship: Carefully constructed, Galaxy Chromebook Go features a military-grade design to withstand the occasional drop, ding or spill.<br>> Battery Life: Breeze through your school work and have plenty of power left for some me time with a battery that goes for up to 12 hours on a single charge."
			]
		},
		"67576": {
			"tileCallout": "Best value: Choose 1 premium extra",
			"extrasCallout": " Choose 1 premium extra",
			"extrasCommonDesc_aal": "Get a Chromebook Go + $100 Samsung Credit or the 2023-24 season of NFL Sunday Ticket on YouTube, on us.",
			"choiceOlaySubhead_nse": [
				"Power up your productivity.",
				"Make every game a home game."
			],
			"extrasChoiceFooter_aal": "You can redeem your extras after you activate your service.",
			"extrasCommonIcon_nse": "<img src='https://ss7.vzw.com/is/image/VerizonWireless/plan-extras-samsung-galaxy-chromebook-go?&bgc=000000&scl=1' style='height:48px; width: 48px; margin-right: 15px' alt=’Samsung Galaxy Chromebook’>||<p style='width: 100%; margin-left: 40%'>or</p><img src='https://ss7.vzw.com/is/image/VerizonWireless/plan-extras-nfl-sunday-ticket-youtube?&bgc=000000&scl=1' style='height:48px; width: 48px; margin-right: 15px' alt='NFL Sunday Ticket'>",
			"planExtrasTtl_nse": "Samsung Galaxy Chromebook Go||2023-24 Season of NFL Sunday Ticket on YouTube",
			"extrasChoiceFooter_nse": "You can redeem your extras after you activate your service.",
			"planExtrasTitle_nse": "Samsung Galaxy Chromebook Go||2023-24 Season of NFL Sunday Ticket on YouTube",
			"planChoiceExtrasDesc_nse": [
				"A $349.99 value.",
				"A $200 value."
			],
			"planName": "5G Home Plus",
			"choiceOlayDesc_aal": [
				"With a 5G Home Plus or LTE Home Plus plan.",
				"With a 5G Home Plus or LTE Home Plus plan."
			],
			"extrasCommonDesc_nse": "Get a Chromebook Go or the 2023-24 season of NFL Sunday Ticket on YouTube, on us.",
			"choiceOlayFeatHeader_aal": [
				"Features",
				"Features"
			],
			"choiceOlaySubheadDesc_aal": [
				"With its all-new slim design, Galaxy Chromebook Go is our lightest Chromebook yet, making it perfect for busy lives on the go.",
				"",
				"Watch your favorite teams’ out-of-market Sunday afternoon games."
			],
			"choiceOlaySteps_aal": [
				"1. Customers eligible for the promotion will receive redemption information via email or can log into the My Verizon desktop site or My Verizon mobile app directly to redeem the offer.<br>2. Upon clicking the tile for the eligible promotion, the customer will make a selection and accept the applicable Terms & Conditions.<br>3. The customer will be automatically directed to Samsung.com to complete the redemption.",
				"1. Customers eligible for the promotion will receive redemption information via email or can log into the My Verizon desktop site or My Verizon mobile app directly to redeem the offer.<br>2. Upon clicking the tile for the eligible promotion, the customer will make a selection and accept the applicable Terms & Conditions.<br>3. The customer will be automatically directed to Verizon +play, and then to YouTube to complete the redemption."
			],
			"choiceOlayDesc_nse": [
				"With a 5G Home Plus or LTE Home Plus plan.",
				"With a 5G Home Plus or LTE Home Plus plan."
			],
			"choiceOlayTtl_aal": [
				"Get a Samsung Galaxy Chromebook Go on us.",
				"Get this season of NFL Sunday Ticket from YouTube. On us."
			],
			"choiceOlaySteps_nse": [
				"1. Customers eligible for the promotion will receive redemption information via email or can log into the My Verizon desktop site or My Verizon mobile app directly to redeem the offer.<br>2. Upon clicking the tile for the eligible promotion, the customer will make a selection and accept the applicable Terms & Conditions.<br>3. The customer will be automatically directed to Samsung.com to complete the redemption.",
				"1. Customers eligible for the promotion will receive redemption information via email or can log into the My Verizon desktop site or My Verizon mobile app directly to redeem the offer.<br>2. Upon clicking the tile for the eligible promotion, the customer will make a selection and accept the applicable Terms & Conditions.<br>3. The customer will be automatically directed to Verizon +play, and then to YouTube to complete the redemption."
			],
			"extrasCommonIcon_aal": "<img src='https://ss7.vzw.com/is/image/VerizonWireless/plan-extras-samsung-galaxy-chromebook-go?&bgc=000000&scl=1' style='height:48px; width: 48px; margin-right: 15px' alt=’Samsung Galaxy Chromebook’>||<p style='width: 100%; margin-left: 40%'>or</p><img src='https://ss7.vzw.com/is/image/VerizonWireless/plan-extras-nfl-sunday-ticket-youtube?&bgc=000000&scl=1' style='height:48px; width: 48px; margin-right: 15px' alt='NFL Sunday Ticket'>",
			"id": "67576",
			"planExtrasTitle_aal": "Samsung Galaxy Chromebook Go + $100 Samsung Credit||2023-24 Season of NFL Sunday Ticket on YouTube",
			"choiceOlaySubhead_aal": [
				"Power up your productivity.",
				"Make every game a home game."
			],
			"choiceOlayTtl_nse": [
				"Get a Samsung Galaxy Chromebook Go on us.",
				"Get this season of NFL Sunday Ticket from YouTube. On us."
			],
			"choiceOlayFeat_aal": [
				"> Better Together: Easily transfer files between devices, and control your phone right from your Chromebook.<br>> Premium Craftsmanship: Carefully constructed, Galaxy Chromebook Go features a military-grade design to withstand the occasional drop, ding or spill.<br>> Battery Life: Breeze through your school work and have plenty of power left for some me time with a battery that goes for up to 12 hours on a single charge.",
				"> Savings: By getting this season  of NFL Sunday TIcket on YouTube when you switch to Verizon Home Internet, you save an estimated $449.<br>> Stream Anywhere: Watch live on your TV or anywhere you like on supported devices.<br>> Easy Setup: No 2-year contracts required. No satellite dish needed. Easy set-up to start watching in minutes."
			],
			"extrasIconCommon_aal": "<img src='https://ss7.vzw.com/is/image/VerizonWireless/plan-extras-samsung-galaxy-chromebook-go?&bgc=000000&scl=1' style='height:48px; width: 48px; margin-right: 15px' alt=’Samsung Galaxy Chromebook’>||<p style='width: 100%; margin-left: 40%'>or</p><img src='https://ss7.vzw.com/is/image/VerizonWireless/plan-extras-nfl-sunday-ticket-youtube?&bgc=000000&scl=1' style='height:48px; width: 48px; margin-right: 15px' alt='NFL Sunday Ticket'>",
			"choiceOlaySubheadDesc_nse": [
				"With its all-new slim design, Galaxy Chromebook Go is our lightest Chromebook yet, making it perfect for busy lives on the go.",
				"",
				"Watch your favorite teams’ out-of-market Sunday afternoon games."
			],
			"extraChoiceHeader_nse": "Your choice of:",
			"planChoiceExtrasTtl_aal": [
				"Samsung Galaxy Chromebook Go + $100 Samsung Credit",
				"2023-24 Season of NFL Sunday Ticket on YouTube"
			],
			"choiceOlayImage_aal": [
				"https://ss7.vzw.com/is/image/VerizonWireless/iphonepurple?&$pngalpha$&resMode=sharp2&scl=1",
				"https://ss7.vzw.com/is/image/VerizonWireless/iphonepurple?&$pngalpha$&resMode=sharp2&scl=1"
			],
			"planChoiceExtrasLink_nse": [
				"Details",
				"Details"
			],
			"planChoiceExtrasTtl_nse": [
				"Get a Chromebook Go",
				"1 season of NFL Sunday Ticket, on us."
			],
			"extrasChoice": "Y",
			"choiceOlayFtr_aal": [
				"Offer valid thru 9.13.23 for a Samsung Galaxy Chromebook Go and $100 credit toward select Samsung products; see www.samsung/com/fwa. Must activate and maintain eligible 5G Home Plus or LTE Home Plus service in good standing and redeem offer w/in 60 days thereafter, or by no later than 2.13.24, whichever is first. Verizon reserves the right to charge back the value of the Samsung promotional device if eligible service is canceled w/in 180 days. Samsung delivery of promotional device may take up to 8 weeks. Samsung is a registered trademark of Samsung Electronics Co., Ltd.",
				"Limited time only. Must activate eligible Verizon service and redeem offer w/in 60 days (beginning 8.11.23 via Verizon +play) of activation, or by no later than 12.13.23, whichever is first. Verizon reserves the right to charge back the value of the annual subscription if service is canceled before 2.29.24 or eligibility req’s are no longer met. Cannot be combined with an existing NFL Sunday Ticket subscription. $449 value applies to NFL Sunday Ticket season '23-'24 only. YouTube TV subscription required to watch NFL Sunday Ticket on YouTube TV. NFL Sunday Ticket requires a Google account, a current form of payment and is only available in markets where YouTube TV service is available. One offer per eligible Verizon Account. Terms and embargoes restrictions apply. No refunds. Locally broadcast Fox and CBS games, Sunday Night Football on NBC, select digital-only games and international games excluded from NFL Sunday Ticket."
			],
			"choiceOlayStepsHead_nse": [
				"Redemption Steps",
				"Redemption Steps"
			],
			"planChoiceExtrasLink_aal": [
				"Details",
				"Details"
			],
			"planExtrasDesc_nse": "A $349.99 value.||A $200 value.",
			"extrasIconCommon_nse": "<img src='https://ss7.vzw.com/is/image/VerizonWireless/plan-extras-samsung-galaxy-chromebook-go?&bgc=000000&scl=1' style='height:48px; width: 48px; margin-right: 15px' alt=’Samsung Galaxy Chromebook’>||<p style='width: 100%; margin-left: 40%'>or</p><img src='https://ss7.vzw.com/is/image/VerizonWireless/plan-extras-nfl-sunday-ticket-youtube?&bgc=000000&scl=1' style='height:48px; width: 48px; margin-right: 15px' alt='NFL Sunday Ticket'>",
			"choiceOlayFeatHeader_nse": [
				"Features",
				" Features"
			],
			"choiceOlayFtr_nse": [
				"Offer valid thru 9.13.23 for a Samsung Galaxy Chromebook Go. For new home internet customers who activate eligible 5G Home Plus or LTE Home Plus services and redeem offer w/in 60 days thereafter, or by no later than 2.13.24, whichever is first. Verizon reserves the right to charge back the value of the Samsung promotional device if eligible service is canceled w/in 180 days. Samsung delivery of promotional device may take up to 8 weeks. Samsung is a registered trademark of Samsung Electronics Co., Ltd.",
				"Limited time only. Must activate eligible Verizon service and redeem offer w/in 60 days (beginning 8.11.23 via Verizon +play) of activation, or by no later than 12.13.23, whichever is first. Verizon reserves the right to charge back the value of the annual subscription if service is canceled before 2.29.24 or eligibility req’s are no longer met. Cannot be combined with an existing NFL Sunday Ticket subscription. $449 value applies to NFL Sunday Ticket season '23-'24 only. YouTube TV subscription required to watch NFL Sunday Ticket on YouTube TV. NFL Sunday Ticket requires a Google account, a current form of payment and is only available in markets where YouTube TV service is available. One offer per eligible Verizon Account. Terms and embargoes restrictions apply. No refunds. Locally broadcast Fox and CBS games, Sunday Night Football on NBC, select digital-only games and international games excluded from NFL Sunday Ticket."
			],
			"choiceOlayStepsHead_aal": [
				"Redemption steps",
				"Redemption steps"
			],
			"planChoiceExtrasDesc_aal": [
				"A $449.99 value.",
				"A $399.99 value."
			],
			"choiceOlayFeat_nse": [
				"> Better Together: Easily transfer files between devices, and control your phone right from your Chromebook.<br>",
				"> Premium Craftsmanship: Carefully constructed, Galaxy Chromebook Go features a military-grade design to withstand the occasional drop, ding or spill.<br>",
				"> Battery Life: Breeze through your school work and have plenty of power left for some me time with a battery that goes for up to 12 hours on a single charge.",
				"> Savings: By getting this season  of NFL Sunday TIcket on YouTube when you switch to Verizon Home Internet, you save an estimated $449.<br>",
				"> Stream Anywhere: Watch live on your TV or anywhere you like on supported devices.<br>",
				"> Easy Setup: No 2-year contracts required. No satellite dish needed. Easy set-up to start watching in minutes."
			]
		},
		"67577": {
			"extrasCallout": "Get 1 extra",
			"choiceOlayTtl_nse": [
				"Get $200 off a Samsung Galaxy Chromebook Go."
			],
			"choiceOlaySubhead_nse": [
				"Power up your productivity."
			],
			"extrasCommonIcon_nse": "<img src='https://ss7.vzw.com/is/image/VerizonWireless/plan-extras-samsung-galaxy-chromebook-go?&bgc=000000&scl=1' style='height:48px; width: 48px; margin-right: 15px' alt=’Samsung Galaxy Chromebook’>",
			"choiceOlaySubheadDesc_nse": [
				"With its all-new slim design, Galaxy Chromebook Go is our lightest Chromebook yet, making it perfect for busy lives on the go."
			],
			"extrasChoiceFooter_nse": "You can redeem your extras after you activate your service.",
			"planExtrasTitle_nse": "$200 off Samsung Galaxy Chromebook Go ",
			"planName": "LTE Home",
			"planChoiceExtrasLink_nse": [
				"Details"
			],
			"extrasCommonDesc_nse": "$200 off Samsung Galaxy Chromebook Go ",
			"extrasChoice": "N",
			"choiceOlayStepsHead_nse": [
				"Redemption steps"
			],
			"choiceOlayDesc_nse": [
				"With a 5G Home or LTE Home plan."
			],
			"planExtrasDesc_nse": "A $200 value.",
			"choiceOlaySteps_nse": [
				"1. Customers eligible for the promotion will receive redemption information via email or can log into the My Verizon desktop site or My Verizon mobile app directly to redeem the offer.<br>2. Upon clicking the tile for the eligible promotion, the customer will make a selection and accept the applicable Terms & Conditions.<br>3. The customer will be automatically directed to Samsung.com to complete the redemption."
			],
			"id": "67577",
			"choiceOlayFeatHeader_nse": [
				"Features"
			],
			"choiceOlayFtr_nse": [
				"Offer valid thru 9.13.23 for a Samsung Galaxy Chromebook Go. Must install and maintain eligible 5G Home or LTE Home service and redeem offer w/in 60 days thereafter, or by no later than 2.13.24, whichever is first. Verizon reserves the right to charge back the value of the Samsung promotional device if eligible service is canceled w/in 180 days. Samsung is a registered trademark of Samsung Electronics Co., Ltd."
			],
			"choiceOlayFeat_nse": [
				"> Better Together: Easily transfer files between devices, and control your phone right from your Chromebook.<br>> Premium Craftsmanship: Carefully constructed, Galaxy Chromebook Go features a military-grade design to withstand the occasional drop, ding or spill.<br>> Battery Life: Breeze through your school work and have plenty of power left for some me time with a battery that goes for up to 12 hours on a single charge."
			]
		},
		"67584": {
			"tileCallout": "Best value: Choose 1 premium extra",
			"extrasCallout": " Choose 1 premium extra",
			"extrasCommonDesc_aal": "Get a Chromebook Go + $100 Samsung Credit or the 2023-24 season of NFL Sunday Ticket on YouTube, on us.",
			"choiceOlaySubhead_nse": [
				"Power up your productivity.",
				"Make every game a home game."
			],
			"extrasChoiceFooter_aal": "You can redeem your extras after you activate your service.",
			"extrasCommonIcon_nse": "<img src='https://ss7.vzw.com/is/image/VerizonWireless/plan-extras-samsung-galaxy-chromebook-go?&bgc=000000&scl=1' style='height:48px; width: 48px; margin-right: 15px' alt=’Samsung Galaxy Chromebook’>||<p style='width: 100%; margin-left: 40%'>or</p><img src='https://ss7.vzw.com/is/image/VerizonWireless/plan-extras-nfl-sunday-ticket-youtube?&bgc=000000&scl=1' style='height:48px; width: 48px; margin-right: 15px' alt='NFL Sunday Ticket'>",
			"planExtrasTtl_nse": "Samsung Galaxy Chromebook Go||2023-24 Season of NFL Sunday Ticket on YouTube",
			"extrasChoiceFooter_nse": "You can redeem your extras after you activate your service.",
			"planExtrasTitle_nse": "Samsung Galaxy Chromebook Go||2023-24 Season of NFL Sunday Ticket on YouTube",
			"planChoiceExtrasDesc_nse": [
				"A $349.99 value.",
				"A $200 value."
			],
			"planName": "LTE Home Plus",
			"choiceOlayDesc_aal": [
				"With a 5G Home Plus or LTE Home Plus plan.",
				"With a 5G Home Plus or LTE Home Plus plan."
			],
			"extrasCommonDesc_nse": "Get a Chromebook Go or the 2023-24 season of NFL Sunday Ticket on YouTube, on us.",
			"choiceOlayFeatHeader_aal": [
				"Features",
				"Features"
			],
			"choiceOlaySubheadDesc_aal": [
				"With its all-new slim design, Galaxy Chromebook Go is our lightest Chromebook yet, making it perfect for busy lives on the go.",
				"",
				"Watch your favorite teams’ out-of-market Sunday afternoon games."
			],
			"choiceOlaySteps_aal": [
				"1. Customers eligible for the promotion will receive redemption information via email or can log into the My Verizon desktop site or My Verizon mobile app directly to redeem the offer.<br>2. Upon clicking the tile for the eligible promotion, the customer will make a selection and accept the applicable Terms & Conditions.<br>3. The customer will be automatically directed to Samsung.com to complete the redemption.",
				"1. Customers eligible for the promotion will receive redemption information via email or can log into the My Verizon desktop site or My Verizon mobile app directly to redeem the offer.<br>2. Upon clicking the tile for the eligible promotion, the customer will make a selection and accept the applicable Terms & Conditions.<br>3. The customer will be automatically directed to Verizon +play, and then to YouTube to complete the redemption."
			],
			"choiceOlayDesc_nse": [
				"With a 5G Home Plus or LTE Home Plus plan.",
				"With a 5G Home Plus or LTE Home Plus plan."
			],
			"choiceOlayTtl_aal": [
				"Get a Samsung Galaxy Chromebook Go on us.",
				"Get this season of NFL Sunday Ticket from YouTube. On us."
			],
			"choiceOlaySteps_nse": [
				"1. Customers eligible for the promotion will receive redemption information via email or can log into the My Verizon desktop site or My Verizon mobile app directly to redeem the offer.<br>2. Upon clicking the tile for the eligible promotion, the customer will make a selection and accept the applicable Terms & Conditions.<br>3. The customer will be automatically directed to Samsung.com to complete the redemption.",
				"1. Customers eligible for the promotion will receive redemption information via email or can log into the My Verizon desktop site or My Verizon mobile app directly to redeem the offer.<br>2. Upon clicking the tile for the eligible promotion, the customer will make a selection and accept the applicable Terms & Conditions.<br>3. The customer will be automatically directed to Verizon +play, and then to YouTube to complete the redemption."
			],
			"extrasCommonIcon_aal": "<img src='https://ss7.vzw.com/is/image/VerizonWireless/plan-extras-samsung-galaxy-chromebook-go?&bgc=000000&scl=1' style='height:48px; width: 48px; margin-right: 15px' alt=’Samsung Galaxy Chromebook’>||<p style='width: 100%; margin-left: 40%'>or</p><img src='https://ss7.vzw.com/is/image/VerizonWireless/plan-extras-nfl-sunday-ticket-youtube?&bgc=000000&scl=1' style='height:48px; width: 48px; margin-right: 15px' alt='NFL Sunday Ticket'>",
			"id": "67584",
			"planExtrasTitle_aal": "Samsung Galaxy Chromebook Go + $100 Samsung Credit||2023-24 Season of NFL Sunday Ticket on YouTube",
			"choiceOlaySubhead_aal": [
				"Power up your productivity.",
				"Make every game a home game."
			],
			"choiceOlayTtl_nse": [
				"Get a Samsung Galaxy Chromebook Go on us.",
				"Get this season of NFL Sunday Ticket from YouTube. On us."
			],
			"choiceOlayFeat_aal": [
				"> Better Together: Easily transfer files between devices, and control your phone right from your Chromebook.<br>> Premium Craftsmanship: Carefully constructed, Galaxy Chromebook Go features a military-grade design to withstand the occasional drop, ding or spill.<br>> Battery Life: Breeze through your school work and have plenty of power left for some me time with a battery that goes for up to 12 hours on a single charge.",
				"> Savings: By getting this season  of NFL Sunday TIcket on YouTube when you switch to Verizon Home Internet, you save an estimated $449.<br>> Stream Anywhere: Watch live on your TV or anywhere you like on supported devices.<br>> Easy Setup: No 2-year contracts required. No satellite dish needed. Easy set-up to start watching in minutes."
			],
			"extrasIconCommon_aal": "<img src='https://ss7.vzw.com/is/image/VerizonWireless/plan-extras-samsung-galaxy-chromebook-go?&bgc=000000&scl=1' style='height:48px; width: 48px; margin-right: 15px' alt=’Samsung Galaxy Chromebook’>||<p style='width: 100%; margin-left: 40%'>or</p><img src='https://ss7.vzw.com/is/image/VerizonWireless/plan-extras-nfl-sunday-ticket-youtube?&bgc=000000&scl=1' style='height:48px; width: 48px; margin-right: 15px' alt='NFL Sunday Ticket'>",
			"choiceOlaySubheadDesc_nse": [
				"With its all-new slim design, Galaxy Chromebook Go is our lightest Chromebook yet, making it perfect for busy lives on the go.",
				"",
				"Watch your favorite teams’ out-of-market Sunday afternoon games."
			],
			"extraChoiceHeader_nse": "Your choice of:",
			"planChoiceExtrasTtl_aal": [
				"Samsung Galaxy Chromebook Go + $100 Samsung Credit",
				"2023-24 Season of NFL Sunday Ticket on YouTube"
			],
			"choiceOlayImage_aal": [
				"https://ss7.vzw.com/is/image/VerizonWireless/iphonepurple?&$pngalpha$&resMode=sharp2&scl=1",
				"https://ss7.vzw.com/is/image/VerizonWireless/iphonepurple?&$pngalpha$&resMode=sharp2&scl=1"
			],
			"planChoiceExtrasLink_nse": [
				"Details",
				"Details"
			],
			"planChoiceExtrasTtl_nse": [
				"Get a Chromebook Go",
				"1 season of NFL Sunday Ticket, on us."
			],
			"extrasChoice": "Y",
			"choiceOlayFtr_aal": [
				"Offer valid thru 9.13.23 for a Samsung Galaxy Chromebook Go and $100 credit toward select Samsung products; see www.samsung/com/fwa. Must activate and maintain eligible 5G Home Plus or LTE Home Plus service in good standing and redeem offer w/in 60 days thereafter, or by no later than 2.13.24, whichever is first. Verizon reserves the right to charge back the value of the Samsung promotional device if eligible service is canceled w/in 180 days. Samsung delivery of promotional device may take up to 8 weeks. Samsung is a registered trademark of Samsung Electronics Co., Ltd.",
				"Limited time only. Must activate eligible Verizon service and redeem offer w/in 60 days (beginning 8.11.23 via Verizon +play) of activation, or by no later than 12.13.23, whichever is first. Verizon reserves the right to charge back the value of the annual subscription if service is canceled before 2.29.24 or eligibility req’s are no longer met. Cannot be combined with an existing NFL Sunday Ticket subscription. $449 value applies to NFL Sunday Ticket season '23-'24 only. YouTube TV subscription required to watch NFL Sunday Ticket on YouTube TV. NFL Sunday Ticket requires a Google account, a current form of payment and is only available in markets where YouTube TV service is available. One offer per eligible Verizon Account. Terms and embargoes restrictions apply. No refunds. Locally broadcast Fox and CBS games, Sunday Night Football on NBC, select digital-only games and international games excluded from NFL Sunday Ticket."
			],
			"choiceOlayStepsHead_nse": [
				"Redemption Steps",
				"Redemption Steps"
			],
			"planChoiceExtrasLink_aal": [
				"Details",
				"Details"
			],
			"planExtrasDesc_nse": "A $349.99 value.||A $200 value.",
			"extrasIconCommon_nse": "<img src='https://ss7.vzw.com/is/image/VerizonWireless/plan-extras-samsung-galaxy-chromebook-go?&bgc=000000&scl=1' style='height:48px; width: 48px; margin-right: 15px' alt=’Samsung Galaxy Chromebook’>||<p style='width: 100%; margin-left: 40%'>or</p><img src='https://ss7.vzw.com/is/image/VerizonWireless/plan-extras-nfl-sunday-ticket-youtube?&bgc=000000&scl=1' style='height:48px; width: 48px; margin-right: 15px' alt='NFL Sunday Ticket'>",
			"choiceOlayFeatHeader_nse": [
				"Features",
				" Features"
			],
			"choiceOlayFtr_nse": [
				"Offer valid thru 9.13.23 for a Samsung Galaxy Chromebook Go. For new home internet customers who activate eligible 5G Home Plus or LTE Home Plus services and redeem offer w/in 60 days thereafter, or by no later than 2.13.24, whichever is first. Verizon reserves the right to charge back the value of the Samsung promotional device if eligible service is canceled w/in 180 days. Samsung delivery of promotional device may take up to 8 weeks. Samsung is a registered trademark of Samsung Electronics Co., Ltd.",
				"Limited time only. Must activate eligible Verizon service and redeem offer w/in 60 days (beginning 8.11.23 via Verizon +play) of activation, or by no later than 12.13.23, whichever is first. Verizon reserves the right to charge back the value of the annual subscription if service is canceled before 2.29.24 or eligibility req’s are no longer met. Cannot be combined with an existing NFL Sunday Ticket subscription. $449 value applies to NFL Sunday Ticket season '23-'24 only. YouTube TV subscription required to watch NFL Sunday Ticket on YouTube TV. NFL Sunday Ticket requires a Google account, a current form of payment and is only available in markets where YouTube TV service is available. One offer per eligible Verizon Account. Terms and embargoes restrictions apply. No refunds. Locally broadcast Fox and CBS games, Sunday Night Football on NBC, select digital-only games and international games excluded from NFL Sunday Ticket."
			],
			"choiceOlayStepsHead_aal": [
				"Redemption steps",
				"Redemption steps"
			],
			"planChoiceExtrasDesc_aal": [
				"A $449.99 value.",
				"A $399.99 value."
			],
			"choiceOlayFeat_nse": [
				"> Better Together: Easily transfer files between devices, and control your phone right from your Chromebook.<br>",
				"> Premium Craftsmanship: Carefully constructed, Galaxy Chromebook Go features a military-grade design to withstand the occasional drop, ding or spill.<br>",
				"> Battery Life: Breeze through your school work and have plenty of power left for some me time with a battery that goes for up to 12 hours on a single charge.",
				"> Savings: By getting this season  of NFL Sunday TIcket on YouTube when you switch to Verizon Home Internet, you save an estimated $449.<br>",
				"> Stream Anywhere: Watch live on your TV or anywhere you like on supported devices.<br>",
				"> Easy Setup: No 2-year contracts required. No satellite dish needed. Easy set-up to start watching in minutes."
			]
		}
	}
}

export const planExtraData = {
    "detailLinkText": "details",
    "overlayData": {
        "title": "detail title",
        "subtitle": "subtitle for detail",
        "intTitle": "intro title",
        "intDesc": "intro description",
        "featTitle": "features",
        "features": ["feat 1"],
        "redeemTitle": "redeem title",
        "redeemSteps": ["redeem step 1"],
        "disclaimer": "disclaimer data",
        "image": "imagelink"
    }
}

export const planDiscountData = {
    disData: [
        {
            "title": {
                "children": "$5 Discount"
            },
            "items": [
                {
                    "title": {
                        "children": "5G Home Plus"
                    },
                    "amount": {
                        "price": "-$5"
                    }
                },
                {
                    "title": {
                        "children": "5G Home"
                    },
                    "amount": {
                        "price": "—"
                    }
                },
                {
                    "title": {
                        "children": "$5/mo discount applied via bill credit for as long as Verizon provides and you maintain eligible service."
                    }
                }
            ]
        }
    ],
    linkText: "discounts link",

}

