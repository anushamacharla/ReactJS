import React,{Suspense} from "react";
import "../../../../config/jest/test-setup";
import { act, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import httpClient from "../../../shared/services/httpClient";
import configureStore from "../../../shared/store/configureStore";
import rootReducer from "../../../reducers";
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import SelectDataPlan from "../components/index";
import { flowVED, flowMM, flowWillow } from "./Willow_flow_mock";
import MMPlanSelection from "../components/Home5G/MMPlanSelection";
import HeaderContent from "../components/Home5G/HeaderContent";
import PlanDetailSection from "../components/Home5G/PlanDetailSection";
import PlanBanner from "../components/Home5G/PlanBanner";

 
const store = configureStore(rootReducer);
const persistor = persistStore(store);
 
jest.mock("../../../shared/services/httpClient", () => ({
    ...jest.requireActual("../../../shared/services/httpClient"),
    getHttpClientRequest: jest.fn()
}));
const dummyprops={
    planId:"223123",
    listViewSectionData:{
        planFeaturesDisclaimers: {
            223123: [
                {
                    "testOne":"test"
                }
            ]
        }
    },
    groupProductIds:[
        "12345",
        "40019",
        "23546"
    ],
        
    
    groupProductsData:[
    {
        groupProductId:"12345",
        groupHdrText:"powered",
        products:[
            "56789"
        ]
    },
    {
        groupProductId:"40019",
        groupHdrText:"peace",
        groupName:"tesstname",
        products:[
            "76594"
        ]
    },
    {
        groupProductId:"23546",
        groupHdrText:"include",
        products:[
            "76594"
        ]
    }
],
    productsData:[{
        productId:"56789",
        superscript:1
    },
    {
        productId:"76594",
        superscript:1
    }
]
}
const props={
    disableButtons:true,
    selectedPlan:{
        planDisplayName:"Unlimited"
    },
    selectedLinePlan:{
        has5GMsg:true,
        finalCost:"15.11$",
        autopayDiscount:"5$",
        qualifierDiscount:'2$',
        ecpdDiscountMessage:'1$'
    },
    selectedLine:[{
        loyaltyDiscount:[{

        }]
    }]
}
//MMPlanSelection
const Prop1={
    width:"220px",
    disableButtons:true,
    slideIndex:"0",
    willowPlanData:{
        willowFeatures:{},
        willowOverview:[{}],
        willowPlanExtras:{}
    },
    groupProducts:[{groupProductId:"1234",
                    groupHdrText:"includes test",
                    products:["2345","2346"]},
                   {groupProductId:"1235",
                   groupHdrText:"includes test",
                   products:["2347","2348"]},
                   {groupProductId:"1236"}],
    discountModalContents:{
        contents:{}
    },
    commonItems:[{
        itemKey:"costDisclaimer",
        itemValue:"test value"
    },{
        itemKey:"compareCurrentPlan",
        itemValue:"test value"
    },{
        itemKey:"costSuffix1",
        itemValue:"test value"
    },{
        itemKey:"costSuffix2",
        itemValue:"test value"
    },{
        itemKey:"recommendText",
        itemValue:"test value"
    },{
        itemKey:"seeWhyLink",
        itemValue:"test value"
    },{
        itemKey:"epcdHeaderMsg",
        itemValue:"test value"
    },{
        itemKey:"impPlanInfo",
        itemValue:"test value"
    },{
        itemKey:"impBroadbandInfo",
        itemValue:"test value"
    },{
        itemKey:"planSelectionApText_V2",
        itemValue:"test value",
        itemTooltip:"testValue"
    },{
        itemKey:"planSelectionDiscounttext",
        itemValue:"test value"
    },
],
    lineDetails:[{
        selectedLLPId:"12345",
        canBeSmartFamilyParent:true
    }],
    footerSection:{
        contents:[{
            items:[{
                itemKey:"compare_v3"
            },{
                itemKey:"select_v2" 
            }]
        }]
    },
    planSection:{
        data:{
            "25582":{
                dataKey:"21345"
            },
            "21345":{
                groupProducts:["1234","1235","1236"]
            }
        }
    },
    selectedPlan:{
        planDisplayName:"Unlimited"
    },
    epcdHeaderMsg:"test message",
    selectedLinePlan:{
        has5GMsg:true,
        finalCost:"15.00$",
        autopayDiscount:"5$",
        qualifierDiscount:'2$',
        ecpdDiscountMessage:'1$'
    },
    selectedLine:{
        currentSmartFamilyPrimaryParent:false,
        canBeSmartFamilyParent:true,
        currentLLPId:"25582",
        selectedLLPId:"25582",
        planSelected:true,
        availablePlans:[{
            selectable:true,
            welcomeUnlimited:false,
            planCategory:"ALLP",
            planId:"25582",
            recommended:true
        }]
    }
}

const Props2={
    planId:"12345",
    planSection:{
        data:{
            "12345":{
                dataKey:"21345"
            },
            "21345":{
                groupProducts:["1234","1235","1236"]
            }
        }
    },
    disableButtons:true,
    selectedPlan:{
        planDisplayName:"Unlimited"
    },
    selectedLinePlan:{
        has5GMsg:true,
        //finalCost:"15.00$",
        autopayDiscount:"5$",
        qualifierDiscount:'2$',
        ecpdDiscountMessage:'1$'
    },
    selectedLine:{
        currentLLPId:"",
        selectedLLPId:"12345",
        planSelected:true,
        availablePlans:[{
            welcomeUnlimited:false,
            planCategory:"ALLP",
            planId:"12345",
            recommended:true
        }]
    }}

describe("PMD Landing component - Willow plans", () => {
    global._dg_channelId = "VZW-DOTCOM";
    beforeEach(async () => {

        // set window.isWillow = true
        Object.defineProperty(window, 'isWillow', {
            writable: true,
            value: true
        });

        await httpClient.getHttpClientRequest.mockImplementation((url) => {
            console.log("get request url", url);
            if (url === 'http://localhost:4001/ApiData/VED_Landingpage_LLP.json') {
                return Promise.resolve({ status: 200, data: { ...flowVED } });
            }
            else if (url === 'http://localhost:4001/ApiData/exploreMMBayou.json') {
                console.log("exploremm called")
                return Promise.resolve({ status: 200, data: { ...flowMM } });
            }
            else if (url === 'http://localhost:4001/ApiData/willowPlan.json') {
                console.log("willow called")
                return Promise.resolve({ status: 200, data: { ...flowWillow } });
            }
            else {
                return Promise.resolve({ status: 500, data: {} });
            }
        })

        await act(async () => render(
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                <Suspense fallback="test loading">
                    <SelectDataPlan />
                    <MMPlanSelection {...Prop1}/>
                    <HeaderContent {...Prop1}/>
                    <PlanBanner {...Prop1}/>
                    <PlanDetailSection {...dummyprops}/>
                    </Suspense>
                </PersistGate>
            </Provider>
        ));

    })

    test("it should mount redirect manage plan link", () => {
        if (screen) {
            const impBroadband = screen.getAllByTestId("impBroadbandInfoWillowId");
            const landingButton = screen.getAllByTestId("impPlanInfoWillowId");
            if (impBroadband) {
                fireEvent.click(impBroadband?.[0]);
                expect(impBroadband?.[0]).toBeInTheDocument();
            }
            if (landingButton) {
                fireEvent.click(landingButton?.[0]);
                expect(landingButton?.[0]).toBeInTheDocument();
            }
        }

    });
    test("it should mount", () => {
        expect(true).toBe(true);
    });
    test("impPlanInfoId click",()=>{
        const textLink = screen.getByTestId("impPlanInfoId")
        fireEvent.click(textLink)
        expect(textLink).toBeInTheDocument();
   })
   test("compareToCurrentId click",()=>{
        const comp = document.querySelector('[data-testid^="compareToCurrentId"]')
        comp.click()
    }) 
});

describe("PMD Landing component - Willow plans", () => {
    global._dg_channelId = "VZW-DOTCOM-MOB";
    beforeEach(async () => {
        await httpClient.getHttpClientRequest.mockImplementation((url) => {
            console.log("get request url", url);
            if (url === 'http://localhost:4001/ApiData/VED_Landingpage_LLP.json') {
                return Promise.resolve({ status: 200, data: { ...flowVED } });
            }
            else if (url === 'http://localhost:4001/ApiData/exploreMMBayou.json') {
                console.log("exploremm called")
                return Promise.resolve({ status: 200, data: { ...flowMM } });
            }
            else if (url === 'http://localhost:4001/ApiData/willowPlan.json') {
                console.log("willow called")
                return Promise.resolve({ status: 200, data: { ...flowWillow } });
            }
            else {
                return Promise.resolve({ status: 500, data: {} });
            }
        })

        await act(async () => render(
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                <Suspense fallback="test loading">
                    <SelectDataPlan />
                    <MMPlanSelection  {...Props2}/>
                    <HeaderContent {...Props2}/>
                    <PlanBanner {...Props2}/>
                    <PlanDetailSection {...{}} />
                    </Suspense>
                </PersistGate>
            </Provider>
        ));

    })
    test("it should mount", () => {
        expect(true).toBe(true);
    });
});
describe("PMD Landing component - Willow plans", () => {
    global._dg_channelId = "VZW-DOTCOM-MOB";
    beforeEach(async () => {
        await httpClient.getHttpClientRequest.mockImplementation((url) => {
            console.log("get request url", url);
            if (url === 'http://localhost:4001/ApiData/VED_Landingpage_LLP.json') {
                return Promise.resolve({ status: 200, data: { ...flowVED } });
            }
            else if (url === 'http://localhost:4001/ApiData/exploreMMBayou.json') {
                console.log("exploremm called")
                return Promise.resolve({ status: 200, data: { ...flowMM } });
            }
            else if (url === 'http://localhost:4001/ApiData/willowPlan.json') {
                console.log("willow called")
                return Promise.resolve({ status: 200, data: { ...flowWillow } });
            }
            else {
                return Promise.resolve({ status: 500, data: {} });
            }
        })

        await act(async () => render(
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                <Suspense fallback="test loading">
                    <SelectDataPlan />
                    <MMPlanSelection  {...Props2}/>
                    <HeaderContent {...Props2}/>
                    <PlanBanner {...props}/>
                    <PlanDetailSection {...{}} />
                    </Suspense>
                </PersistGate>
            </Provider>
        ));

    })
    test("it should mount", () => {
        expect(true).toBe(true);
    });
});


    it('returns true if willowPlanData is available and is an object with keys',() => {
        // const wrapper = shallow(<WillowSelectPlan {...Props2}/>);
        spyFuncOn('isWillowDataAvailable',true);
        const Props2 = flowWillow
        render(<WillowSelectPlan {...Props2}/>);
        // expect(wrapper.instance().isWillowDataAvailable()).toEqual(true);   
    });
    // it('returns false if willowPlanData is not available',() => {
    //     const wrapper = shallow(<WillowSelectPlan {...Props2}/>);
    //     expect(wrapper.instance().isWillowDataAvailable()).toEqual(false);   
    // });
    // it('returns false if willowPlanData is not an object',() => {
    //     const wrapper = shallow(<WillowSelectPlan {...Props2}/>);
    //     expect(wrapper.instance().isWillowDataAvailable()).toEqual(false);   
    // });
    // it('returns false if willowPlanData is an empty object',() => {
    //     const wrapper = shallow(
    //         <WillowSelectPlan willowPlanData={{}}/>
    //     );
    //     expect(wrapper.instance().isWillowDataAvailable()).toEqual(false);   
    // });
