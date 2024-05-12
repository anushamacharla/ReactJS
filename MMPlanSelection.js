
import { Line } from '@vds3/lines';
import React, { Component } from 'react';
import { TextLink, Button } from '@vds3/buttons';
import { Body, Title } from '@vds3/typography';
import { connect } from "react-redux";
import styled from 'styled-components';
import ComparePlansModal from '../../../../shared/components/Compare/ComparePlansModal';
import common from '../../../../shared/utilities/util';
import PromoDisqModal from '../PromoDisqModal';
import HeaderContent from './HeaderContent';
import PlanBanner from './PlanBanner';
import PlanDetailSection from './PlanDetailSection';
import Icon from '@vds3/icons';
import { Accordion, AccordionHeader, AccordionDetail, AccordionItem, AccordionSubTitle } from '@vds3/accordions';
import * as actions from '../../../SelectLine/actions';
import { bindActionCreators } from 'redux';
import PlanInfoModal from '../../../../shared/components/PlanInfoModal';
import { WillowSelectPlan } from "../../../../shared/components/WillowSelectPlan";
import { ReviewDetailsModal } from "@plans-templates/review-details"
import { PlanDiscountsOverlay } from "./PlanDiscountsOverlay";
import ReactHtmlParser from 'react-html-parser';
import omnitagging from "../../../../shared/utilities/omnitagging";
import StepUPModal from '../../../../shared/components/StepUpModal';

const PlanSelectionWrapper = styled.div`
// padding: 0 20px;
`;

const PlanSelectionInnerWrapper = styled.div`
background-color : #f6f6f6;
margin-left : -20px;
margin-right: -20px;


`;

const StyledButton = styled(Button)`
background-color : white;
position: relative;
margin-bottom: 16px;
`;

const ScrollableSection = styled.div`
	flex-grow: 1;
	flex-shrink: 0;
	${common.getPageTopPadding()}
`;
const TabsWrapper = styled.div`
    background: #fff;
	padding-left: 25%;
	padding-right: 20%;
	margin-top:12px;
    top: 0;
    z-index: 1;
`;

const TabsScrollable = styled.div`
    overflow: auto;
    
    scrollbar-width: none;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
         display: none;
	}
	[class^="StyledTab-"] {
		// margin: 0 1.2rem 0 0;
		min-width: 63px;
		button {
			width: auto;
		}
	}
`;

const TabsLineBottom = styled(Line)`
    margin: -1px -20px 0 -20px;
    width: auto;
`;

const StyledOrderedList = styled.ol`
	padding-right: 20px;
	margin: 0px;
	padding-bottom:4px;
    li {
        margin-top: 16px;
    }
`;
const DisclaimerText = styled.span`
    font-size: 12px;
`;

const ImportantLinkRow = styled.div`
	padding-bottom: ${props => props.paddingBottom};
	margin-left: 20px;
	text-align:center;
`;
const AccordionContainer = styled.div`
	@media screen and (min-width: 768px) {
		display: grid;
    	grid-template-columns: repeat(2, 1fr);
	}
	@media (min-width: 992px) {
		display: grid;
    	grid-template-columns: repeat(3, 1fr);
	}
`;
const LinkButtonWrapper = styled.div`
	margin-top:32px;
	@media (min-width:768px){
		display:flex;
		align-items: start;
		justify-content: center;
	}
`;
const StyledContainerWrapper = styled.div`
	display:flex;
	flex-wrap:wrap;
	background-color : #fff;
	border: 1px solid #E9E9E9;
    border-radius: 7px;
    box-shadow: 0 2px 0 0 rgb(0 0 0 / 5%);
`;
const StyledContainer = styled.div`
	border-right: 1px solid #D8DADA;
	padding: 20px 16px;
	background-color : #fff;
	border-radius : 7px;
	@media (min-width: 768px) {
        width: 30%;
    }
	@media (min-width: 960px) {
        width: 25%;
    }
	:last-child {
		border:0
	}
`;

const StyledDiv = styled.div`
	// background-color : #f6f6f6;
`;

const PlanIncludes = styled.div`
	
    background: #f6f6f6;
		padding-left: 16px;
		padding-top: 24px;
  
	
	padding-left:0;
	padding-left:  20px;
	`;

const TextRow = styled.div`
	width: 100%;
	${props => props.header ? `margin-bottom: 16px` : ``}
	`

const TextLinkCenter = styled.div`
	text-align: center;
	span{font-size: 16px;}
`;

const JustKidWrapper = styled.div`
	width:100%;
`;

const CTAsRow = styled.div`
	display: flex;
	
	align-items: center;
	background-color : #000000;
	color:#ffffff;
	
    button {
        margin-right: 1.5rem;
	}
	div{
		p{
			font-size : 12px;
			padding-top:6px;
			padding-bottom:10px;
			padding-left:10px;
			span{
				color:#ffffff;
			}
		}
	}
`;

const StyledWrapper = styled.div`

	background-color : #000000;
	color:#ffffff;
	margin-top: -26px;
    margin-left: -16px;
    margin-right: -16px;
	margin-bottom: 12px;
	div{
	border-top-left-radius: 7px;
	border-top-right-radius: 7px;}
		
`;

const TextLinkWrapper = styled(TextLink)`
 font-size: 12px;
 padding-top : 17px;
 line-height: 16px;
 font-family: Verizon-NHG-eTX;
`;

const StyledModalSubTitle = styled.div`
    margin-top:0.5rem;
`
const StyledPlansSection = styled.div`
    margin-bottom:1.5rem;    
    display:flex;
    :last-child{
      margin-bottom:0;
    }
`
const StyledSpan = styled.span`
    color: #000000;
    margin-left: 8px;
	font-size: 16px;
	font-family: Verizon-NHG-eDS;
	margin-right: 8px;
`;
const StyledAccordionItem = styled(AccordionItem)`
  border-bottom: 0;
	width:100%;
	background-color : #f6f6f6;
  div {
		border-top: 0;
		background-color : #f6f6f6;
		button > span{
			padding-top: 0px;
		}
		span{
			background-color : #f6f6f6;
		}
    }
    @media (min-width: 768px) {
        width: 100%;
    }
`;
const StyledTitle = styled(AccordionHeader)`
	width: 100%;
`;

const StyledAccordionDetail = styled(AccordionDetail)`
	margin-left:28px;
	color:#747676;
	margin-top:4px;
`;

const SelectPlansDiv = styled.div`
	[class^="ButtonWrapper-"] {
    	margin-bottom: 15px;
	}
`;

const dataTrack = 'data-track';
class MMPlanSelection extends Component {
	constructor(props) {
		super(props);
		let selectPlanData = this.props.planSection && this.props.planSection.data;
		let availablePlans = this.props.selectedLine && this.props.selectedLine.availablePlans;
		let recommendedPlan = availablePlans && availablePlans.find(p => p.recommended);
		let recommendedPlanId = recommendedPlan && recommendedPlan.planId;
		const activeTabIndex = this.props.slideIndex != null ? this.props.slideIndex : ((recommendedPlanId && !this.props.selectedLine.planSelected) ? availablePlans.findIndex(p => p.planId === recommendedPlanId) : availablePlans && availablePlans.findIndex(plan => plan.planId === this.props.selectedLine.selectedLLPId));
		this.state = {
			activeTabIndex: 0,
			selectedPlan: selectPlanData && selectPlanData[availablePlans && availablePlans.map(function (key) { return key.planId; })[activeTabIndex > 0 ? activeTabIndex : 0]],
			openComparePlansModal: false,
			openPlanDetailsModal: false,
			previousPlanId: '',
			currentPlanId: '',
			openRecommenModal: false,
			promoDisqContentType: "",
			showPromoDisqModal: false,
			currentPlan: {},
			currentPlanCost: "",
			currentPlanFeatureIds: [],
			recommendedPlanCost: "",
			recommendedPlanFeatureIds: [],
			showViewDetailsModal: false,
			openPlanInfoModal: false,
			openBroadbandInfoModal: false,
			openReviewModal: false,
			openStepUpModal: false,
			selectedReviewDetailPlan: '',
			subFlowVal: this.props.selectedLine?.currentPlanName?.toLowerCase().includes("5g home") ? 'Home 5G' : 'Home LTE'
		}
	}

	componentDidMount() {
		omnitagging.setPageView('DATASELECTOR_5G');
		let home5G = this.props.selectedLine?.currentPlanName?.toLowerCase().includes("5g home")
		let lte = this.props.selectedLine?.currentPlanName?.toLowerCase().includes("lte")
		let lteTo5G = this.props.selectedLine?.currentPlanName?.toLowerCase().includes("lte") && this.props.selectedLine?.planName?.toLowerCase().includes("5g")
		this.state.subFlowVal = home5G ? 'Home 5G' : lte ? 'Home LTE' : ''
		this.state.subFlowVal = lteTo5G ? 'Home LTE to 5G' : this.state.subFlowVal;
		if (window?.vzdl?.page?.subFlow) {
			let subFlowStr = vzdl.page.subFlow;
			const subflows = subFlowStr.split(' | ');
			if (!subflows.includes(this.state.subFlowVal)) {
				subFlowStr += ` | ${this.state.subFlowVal}`;
			}
			if (lteTo5G) {
				let homeLteStr = subFlowStr.split('Home LTE | ')
				subFlowStr = homeLteStr.join().replace(',', '');
			}
			omnitagging.setPageSubflow(subFlowStr, "true")
		} else {
			let subFlowStr = this.state.subFlowVal;
			window.vzdl.page.subFlow = subFlowStr;
			omnitagging.setPageSubflow(subFlowStr, "true")
		}
		if ((common.isWillowPlan()) && !this.isWillowDataAvailable()) {
			this.props?.actions?.getWillowPlan();
		} else {
			this.updateAccordions();
		}
	}
	// componentDidUpdate() {
	// 	if (!(common.isWillowPlan()))
	// 	 this.updateAccordions();
	// }

	isWillowDataAvailable() {
		return this.props?.willowPlanData && typeof (this.props?.willowPlanData) === 'object' && Object.keys(this.props?.willowPlanData)?.length > 0;
	}

	isWillowPlanAvailable() {
		if (common.isWillowPlan() && this.isWillowDataAvailable()) {
			let willowFeatures = this.props?.willowPlanData?.willowFeatures;
			let willowPlanIds = typeof willowFeatures === 'object' ? Object.keys(willowFeatures) : [];
			let plansList = this.props?.selectedLine?.availablePlans || [];
			let planIdList = plansList.filter(plan => plan.planId).map(key => key.planId) || [];
			return willowPlanIds.some(willowId => planIdList.some(id => id === willowId));

		} else return false;
	}

	updateAccordions() {
		let btns = document.getElementsByClassName("accordionButton");
		if (btns && btns.length > 0) {
			for (let i = 0; i < btns.length; i++) {
				btns[i].style.paddingBottom = "0px";
				btns[i].style.paddingTop = "0px";
				btns[i].children[0].style.marginBottom = "10px";
				btns[i].style.width = "auto";
				let arrow = btns[i].children[1];
				if (arrow) {
					btns[i] && btns[i].removeChild(btns[i].lastChild);
					btns[i] && btns[i].children && btns[i].children[0] && btns[i].children[0].appendChild(arrow);
				}
				btns[i].children[0].lastChild.style.top = "3px";
				btns[i].children[0].lastChild.style.position = "relative";
				btns[i].children[0].lastChild.children[0] && (btns[i].children[0].lastChild.children[0].children[0].style.height = "12px");
				btns[i].children[0].lastChild.children[0] && (btns[i].children[0].lastChild.children[0].children[0].style.width = "12px");
				// btns[i].children[0].firstChild.style.top = "3px";
				// btns[i].children[0].firstChild.style.position = "relative";
			}
		}
	}

	openComparePlansModal(previousPlanId, currentPlanId) {
		let previousPlan = this.props.planSection.data && this.props.planSection.data[previousPlanId] && ({ ...this.props.planSection.data && this.props.planSection.data[previousPlanId], planCost: this.props.selectedLine.currentPlanCost });
		let currentPlan = this.props.planSection.data && this.props.planSection.data[currentPlanId] && ({ ...this.props.planSection.data && this.props.planSection.data[currentPlanId], planCost: this.props.selectedLine.availablePlans.find(p => p.planId == currentPlanId).finalCost });
		this.setState({
			openComparePlansModal: true,
			previousPlanId: previousPlan,
			currentPlanId: currentPlan,
		});
	}

	handleIPIClick = () => {
		this.setState({ openPlanInfoModal: true })
	}

	handleIBIClick = () => {
		this.setState({ openBroadbandInfoModal: true })
	}

	handleViewDetails = (tabName) => {
		this.props.actions.setShowBroadbandInfoFlag(tabName == "impBroadbandInfo" ? true : false);
		common.redirect('/exploremmplan/impInfo', 'forWard');
	};

	showPromoDisq = (pickPlan) => {
		let selectedAvailablePlan = this.props.selectedLine.availablePlans.find(p => p.planId == this.state.selectedPlan.planId);
		const commonContent = this.props.promoDisqSection && this.props.promoDisqSection.contents && this.props.promoDisqSection.contents.length > 0 && this.props.promoDisqSection.contents.find(c => c.contentType == "common");
		const promoContent = this.props.promoDisqSection && this.props.promoDisqSection.contents && this.props.promoDisqSection.contents.length > 0 && this.props.promoDisqSection.contents.find(c => c.contentType == selectedAvailablePlan.promoDisqMsgTemplate);
		//Temporarily removed rebate overlay
		// if (selectedAvailablePlan && selectedAvailablePlan.hasRebateOffer && this.props.selectedLine.rebateOfferCode && this.props.selectedLine.rebateOfferTemplate) {
		// 	const data = { mtn: this.props.selectedLine.mtn, planId: this.state.selectedPlan.planId, planName: this.state.selectedPlan.planDisplayName, planImageURL: this.state.selectedPlan.imageUrl };
		// 	this.props.actions.setSelectedPlan(data, '/rebate');
		// }
		//else part
		let home5G = this.props.selectedLine?.currentPlanName?.toLowerCase().includes("5g home")
		let lte = this.props.selectedLine?.currentPlanName?.toLowerCase().includes("lte")
		let lteTo5G = this.props.selectedLine?.currentPlanName?.toLowerCase().includes("lte") && selectedAvailablePlan?.planName?.toLowerCase().includes("5g")
		this.state.subFlowVal = home5G ? 'Home 5G' : lte ? 'Home LTE' : ''
		this.state.subFlowVal = lteTo5G ? 'Home LTE to 5G' : this.state.subFlowVal;
		if (window?.vzdl?.page?.subFlow) {
			let subFlowStr = vzdl.page.subFlow;
			const subflows = subFlowStr.split(' | ');
			if (!subflows.includes(this.state.subFlowVal)) {
				subFlowStr += ` | ${this.state.subFlowVal}`;
			}
			if (lteTo5G) {
				let homeLteStr = subFlowStr.split('Home LTE | ')
				subFlowStr = homeLteStr.join().replace(',', '');
			}
			omnitagging.setPageSubflow(subFlowStr, "true")
		}

		if (selectedAvailablePlan && selectedAvailablePlan.hasPromoDisqualification && selectedAvailablePlan.promoDisqMsgTemplate && commonContent && promoContent) {
			this.setState({ showPromoDisqModal: true, promoDisqContentType: selectedAvailablePlan.promoDisqMsgTemplate });
		}
		else {
			this.onPickPlanClick(pickPlan);
		}
	}

	onPickPlanClick(pickPlan) {
		const data = { mtn: this.props.selectedLine.mtn, planId: this.state.selectedPlan.planId, planName: this.state.selectedPlan.planDisplayName, planImageURL: this.state.selectedPlan.imageUrl };
		this.props.actions.setSelectedPlan(data, "", "", this.props.editPlan ? "" : this.props.disablePickBtn + 1);
		console.log('onPickPlanClick-----', data, this.props.actions.setSelectedPlan);
		this.props.actions.getPromoDetails(this.props.isKodiEnabled, this.props.is5GHomeEnabled, this.state.selectedPlan, this.props.selectedLine, this.props.lineDetails, "", "/linereview", this.props.planSection.data, (selectedPlan, data) => { this.promoCallback(selectedPlan, data) }, null, null, this.props.accountPlanType, this.props.perkDetails);
		this.props.actions.updateReviewDetails();
		let pageName = 'custom';
		let action = 'modify';
		this.props.actions.setAction(action, pageName, this.props.selectedLine.mtn);
		this.props.actions.editPlanSelecetd(true);

		const transactionDetails = this.props.lineDetails?.filter(line => line?.lineSelected == true) || {};
		const numOfTransaction = transactionDetails?.length
		omnitagging.setNumofLine(numOfTransaction);

	}

	promoCallback(selectedPlan, data) { //need clarity
		console.log('promoCallback----');
		let currentPlanIsPromoGifter = false;
		if (selectedPlan) {
			currentPlanIsPromoGifter = selectedPlan.promoGifterPlan;
		}
		if (this.props.mtnPlanPromoStatusMap && this.props.mtnPlanPromoStatusMap.potentialLossOfDiscount && currentPlanIsPromoGifter) {
			common.redirect('/exploremmplan/discountloss', 'forWard');
		}
	}

	disableButtons(currentPlanId) {
		let selectedLine = this.props.selectedLine;
		let plansList = selectedLine && selectedLine.availablePlans;
		let selectedAvailablePlan = plansList && plansList.find(item => item.planId === currentPlanId);

		return ((selectedAvailablePlan && !selectedAvailablePlan.selectable) || (selectedLine.currentLLPId === this.state.selectedPlan.planId)
			&& (selectedLine && selectedLine.currentLLPId === selectedLine.selectedLLPId) || (currentPlanId === '25582' && selectedLine.currentSmartFamilyPrimaryParent)
			|| (currentPlanId === '25582' && selectedLine.canBeSmartFamilyParent && this.props.lineDetails.filter(item => item.selectedLLPId !== '25582' && item.canBeSmartFamilyParent).length === 1)
			|| (currentPlanId === '25582' && this.props.lineDetails && this.props.lineDetails.length === 1)) ? true : false;
	}

	disableButtonsCompare(currentPlanId) {
		let selectedLine = this.props.selectedLine;
		let plansList = selectedLine && selectedLine.availablePlans;
		let selectedAvailablePlan = plansList && plansList.find(item => item.planId === currentPlanId);

		return ((selectedAvailablePlan && !selectedAvailablePlan.selectable) || (selectedLine.currentLLPId === this.state.selectedPlan.planId)
			|| (currentPlanId === '25582' && selectedLine.currentSmartFamilyPrimaryParent)
			|| (currentPlanId === '25582' && selectedLine.canBeSmartFamilyParent && this.props.lineDetails.filter(item => item.selectedLLPId !== '25582' && item.canBeSmartFamilyParent).length === 1) || (currentPlanId === '25582' && this.props.lineDetails && this.props.lineDetails.length === 1)) ? true : false;

	}

	onSelectPlanClick(index, pickPlanLink, selectPlanData, planIdList) {
		console.log('herehere', index);
		this.showPromoDisq(pickPlanLink);
	}


	getGroupProductIds(planId, selectPlanData) {
		return selectPlanData && selectPlanData[selectPlanData && selectPlanData[planId] && selectPlanData[planId].dataKey] && selectPlanData[selectPlanData && selectPlanData[planId] && selectPlanData[planId].dataKey].groupProducts;
	}

	isButtonDisabled = (planId, selectedLine, plansList) => {
		let selectedAvailablePlan = plansList && plansList.find(item => item.planId === planId);
		let disabled = ((selectedAvailablePlan && !selectedAvailablePlan.selectable) || (selectedLine.currentLLPId === planId)
			&& (selectedLine && selectedLine.currentLLPId === selectedLine.selectedLLPId) || (planId === '25582' && selectedLine.currentSmartFamilyPrimaryParent)
			|| (planId === '25582' && selectedLine.canBeSmartFamilyParent && this.props.lineDetails.filter(item => item.selectedLLPId !== '25582' && item.canBeSmartFamilyParent).length === 1)
			|| (planId === '25582' && this.props.lineDetails && this.props.lineDetails.length === 1)) ? true : false;
		return disabled;
	}

	isCompareLinkDisabled = (planId, selectedLine, plansList) => {
		let selectedAvailablePlan = plansList && plansList.find(item => item.planId === planId);
		let disabled = ((selectedAvailablePlan && !selectedAvailablePlan.selectable) || (selectedLine.currentLLPId === planId)
			|| (planId === '25582' && selectedLine.currentSmartFamilyPrimaryParent)
			|| (planId === '25582' && selectedLine.canBeSmartFamilyParent && this.props.lineDetails.filter(item => item.selectedLLPId !== '25582' && item.canBeSmartFamilyParent).length === 1)
			|| (planId === '25582' && this.props.lineDetails && this.props.lineDetails.length === 1)) ? true : false;
		return disabled;
	}

	handleSelectClick = (indx, selectPlanData, pickPlanLink, planIdList) => {
		this.setState({
			selectedPlan: selectPlanData[planIdList[indx]]
		}, () => this.onSelectPlanClick(indx, pickPlanLink, selectPlanData, planIdList))
	}

	render() {
		console.log("5G device called")
		let selectedLine = this.props.selectedLine;
		let selectPlanData = this.props && this.props.planSection && this.props.planSection.data;
		console.log('selectedplandata', selectPlanData);

		let plansList = selectedLine && selectedLine.availablePlans;
		let planIdList =
			plansList &&
			plansList.filter(plan => plan.planId).map(function (key) {
				return key.planId;
			});
		const currentPlanId = planIdList && planIdList[this.state.activeTabIndex];
		let selectedAvailablePlan = plansList && plansList.find(item => item.planId === currentPlanId);

		let disableButtons = ((selectedAvailablePlan && !selectedAvailablePlan.selectable) || (selectedLine && this.state.selectedPlan && selectedLine.currentLLPId === this.state.selectedPlan.planId)
			&& (selectedLine && selectedLine.currentLLPId === selectedLine.selectedLLPId) || (currentPlanId === '25582' && selectedLine.currentSmartFamilyPrimaryParent)
			|| (currentPlanId === '25582' && selectedLine.canBeSmartFamilyParent && this.props.lineDetails.filter(item => item.selectedLLPId !== '25582' && item.canBeSmartFamilyParent).length === 1) || (currentPlanId === '25582' && this.props.lineDetails && this.props.lineDetails.length === 1)) ? true : false;


		let footerLink = common.getContent(this.props?.footerSection?.contents, "hllp_footer")?.items;
		const getFCCItemValue = itKey => common.getItemValue(footerLink, itKey);
		let compareLink = footerLink && footerLink.find(i => i.itemKey == 'compare_v3');
		let pickPlanLink = footerLink && footerLink.find(i => i.itemKey == 'select_v2');
		let items = this.props.commonItems;
		let costDisclaimer = common.getItemValue(items, "costDisclaimer");
		let compareCurrentPlan = common.getItem(items, "compareCurrentPlan");
		let costSuffix = `${common.getItemValue(items, "costSuffix1")} ${common.getItemValue(items, "costSuffix2")}`;
		let recommendText = common.getItemValue(items, "recommendText");
		let seeWhyLink = common.getItemValue(items, "seeWhyLink");
		let epcdHeaderMsg = common.getItemValue(items, "epcdHeaderMsg");
		let steupHeader = common.getItemValue(items, "headerTextStepUp");
		let stepupSubText = common.getItemValue(items, "subtextTextStepUp");
		let planType = selectedLine?.currentPlanName.indexOf("5G") > -1 ? "[5G Home Plus.]" : "[LTE Home Plus.]";
		let subtext = `When you upgrade your plan to ${planType}`; //Need to be replaced by stepupSubText once data is received.
		let ctaTextStepUp = common.getItemValue(items, "ctaTextStepUp");
		let stepupModalHeader = items && common.getItemValue(items, "stepupModalHeader");
		let stepupModalBody = items && common.getItemValue(items, "stepupModalBody");
		let stepupModalFooter = items && common.getItemValue(items, "stepupModalFooter");



		let groupProductIds = [];
		let commonProductIds = [];
		groupProductIds.push(planIdList && planIdList.map((planId, key) => this.getGroupProductIds(planId, selectPlanData)));
		const groups = this.props && this.props.groupProducts && this.props.groupProducts.filter(item => groupProductIds.map(gp => gp?.includes(gp.groupProductId)));
		const commonGroups = groups && groups.filter(g => g.groupHdrText && g.groupHdrText.toLowerCase()?.includes('5g all plans include'));
		commonGroups && commonGroups.map(grp => grp.products.map(p => commonProductIds.push(p)));
		console.log('common items', compareCurrentPlan);

		let impPlanInfo = common.getItemValue(this.props?.commonItems, "impPlanInfo");
		let impBroadbandInfo = common.getItemValue(this.props?.commonItems, "impBroadbandInfo");

		/* istanbul ignore next */
		const handleSelect = () => {
			const selectedPlanId = this.state?.currentPlanId?.planId;
			const indx = planIdList.indexOf(selectedPlanId);
			this.handleSelectClick(indx, selectPlanData, pickPlanLink, planIdList);
		}

		let willowPlanSelectionData = {};
		let willowReviewDetailsData = {};
		let willowBroadbandData = [];

		if (this.isWillowPlanAvailable()) {
			let willowData = this.props?.willowPlanData || {};
			let willowFeatures = willowData?.willowFeatures;
			let willowOverviewData = willowData?.willowOverview?.[0];
			let willowExtras = willowData?.willowPlanExtras;

			window.willowData = { willowFeatures, willowOverviewData, willowExtras };

			let bestValue = common.getItemValue(this.props?.commonItems, "promoHeader");
			let month = 'mo';
			let was = 'was';
			let starSymb = "*";
			let selectedPlanId = selectedLine && selectedLine.currentLLPId;

			const isSelectedPlan = (planId) => selectedPlanId === planId;
			const naCheck = (txt) => txt && txt !== '-NA-' ? txt : '';
			const parseCost = (cost) => ['number', 'string'].includes(typeof cost) ? parseFloat(cost) : cost;
			let discountTypes = ['M+H', 'AUTOPAY'/*, '$5'*/];
			let planPromoData = { isAvailable: false, discounts: {} };

			let willowPlanIds = planIdList?.filter(planId => willowFeatures && Object.keys(willowFeatures)?.includes(planId));

			const middleSectionData = this.props?.middleSection?.data?.[this.props?.selectedLine?.mtn];
			const priceGuaranteeItems = common.getContent(this.props?.middleSection?.contents, "llp_line")?.items;
			// Get Price Guarantee Text
			const getPGText = (spoId) => common.getItemValue(priceGuaranteeItems, spoId);

			let tileData = willowPlanIds?.map(planId => {

				let selectedPlanData = selectedLine?.availablePlans?.find(plan => plan?.planId === planId);
				let curPlanName = selectedPlanData?.planName;

				let planFeature = willowFeatures?.[planId];
				let planFeatureTitle = planFeature?.featureTitle || planFeature?.featureTitle_nse;
				let planReviewTitle = planFeature?.reviewDetailsTitle || planFeature?.reviewDetailsTitle_nse;
				let planReviewSubHeader = planFeature?.reviewDetailsSubHeader || planFeature?.reviewDetailsSubHeader_nse;
				let planReviewDesc = planFeature?.reviewDetailsDesc || planFeature?.reviewDetailsDesc_nse;
				/* istanbul ignore next */
				const priceSpoId = middleSectionData?.eligibleFivePriceGuarantee ? middleSectionData?.spoId : common.planPriceSpoId(planId);
				console.log("planFeature",planFeature);
				willowReviewDetailsData[planId] = {

					title: {
						children: planFeature?.reviewDetailsHeader || ""
					},
					list: planReviewTitle?.map((reviewTitle, indx) => {
						let curFeatIcon = planFeature?.featureIcon?.[indx];
						return {
							title: {
								children: naCheck(common.isPriceGuarantee(curFeatIcon) ? getPGText(priceSpoId) : reviewTitle),
							},
							subtitle: {
								children: ReactHtmlParser(naCheck(planReviewSubHeader?.[indx])),
							},
							helperText: {
								children: naCheck(planReviewDesc?.[indx]),
							},
							icon: {
								name: curFeatIcon,
							},
						}
					})
				};

				let extrasBannerData = {};
				if (/plus/i.test(curPlanName)) extrasBannerData.children = bestValue;
				else extrasBannerData.fillColor = 'gray';
				let oldPrice = parseCost(selectedPlanData?.totalCost);
				let newPrice = parseCost(selectedPlanData?.finalCost);
				let discountPrice = parseCost(planFeature?.discountedPrice);
				let curTileData = {
					title: {
						children: planFeature?.planName, //5G Home Plus
						width: "140px"
					},

					newPrice: {
						price: newPrice, //50
						term: month,
						superscript: starSymb
					},

					details: {
						textLink: {
							children: planFeature?.reviewDetails,
							id: "review-details-link",
							[dataTrack]: `{"type":"link","name":"${planFeature?.planName}-Review Details cta",
							"data":{
								"page":{
								"subFlow":("eVar64","${this.state.subFlowVal}"),
								},  
							}
								   }`,
							onClick: () => {
								omnitagging.setPathLinkName(`${planFeature?.planName}-Review Details`);
								this.setState({ openReviewModal: true, selectedReviewDetailPlan: planId })
							}
						},
						items: planFeatureTitle?.map((ft, indx) => {
							let curFeatIcon = planFeature?.featureIcon?.[indx];
							let itemObj = {
								icon: {
									name: curFeatIcon
								},
								title: {
									children: common.isPriceGuarantee(curFeatIcon) ? getPGText(priceSpoId) : ft
								}
							}
							let subTitleTxt = planFeature?.featureSubTitle?.[indx];
							if (subTitleTxt && subTitleTxt !== '-NA-')
								itemObj.subtitle = { children: subTitleTxt };
							return itemObj
						})
					},

					footer: {
						buttonGroup: {
							data: isSelectedPlan(planId) ?
								[{ children: 'Current plan', disabled: true }] :
								[{
									children: willowOverviewData?.selectCTALabel,
									id: `${willowOverviewData?.selectCTALabel}-willow-cta-btn`,
									[dataTrack]: `{"type":"link","name":"${`${willowOverviewData?.selectCTALabel} plan ${selectPlanData?.[planId]?.planName}`}-willow-cta-btn",
									"data":{
								   "page":{
								   "subFlow":("eVar64","${this.state.subFlowVal}"),
								   },  
								  }
								  }`,
									onClick: () => {
										this.setState({
											selectedPlan: selectPlanData[planId]
										}, () => this.onSelectPlanClick(planIdList.indexOf(planId), pickPlanLink, selectPlanData, planIdList))
									}
								},
								{
									children: compareCurrentPlan?.itemValue,
									id: `${compareCurrentPlan?.itemValue}-willow-cta-btn`,
									[dataTrack]: `{"type":"link","name":"${compareCurrentPlan?.itemValue}- plan comparison overlay",
						         	"data":{
							    	"page":{
								    "subFlow":("eVar64","${this.state.subFlowVal}"),
								    },  
							       }
								   }`,
									use: 'textLink',
									onClick: () => {
										omnitagging.setPathLinkName(`${compareCurrentPlan?.itemValue}- plan comparison overlay `);
										this.openComparePlansModal(selectedLine.currentLLPId, planId)
									}
								}],
						}
					},

					banner: extrasBannerData
				};

				if (oldPrice !== newPrice)
					curTileData.oldPrice = {
						leadingText: {
							children: was,
						},
						price: oldPrice,
						term: month,
					};

				let planPromo = selectedPlanData?.promos;
				let tooltipDiscounts = {};
				if (planPromo?.length) {
					planPromo?.forEach(promo => {
						let promoName = promo?.promoDescription;
						if (discountTypes.includes(promoName)) {
							if (!planPromoData.isAvailable) planPromoData.isAvailable = true;
							let amountOff = parseCost(promo.amountOff);
							if (promoName === 'AUTOPAY') {
								tooltipDiscounts[promoName] = true;
								planPromoData.discounts[promoName] = amountOff;
							} else {
								if (curPlanName === '5G HOME' || curPlanName === 'LTE HOME')
									tooltipDiscounts[amountOff === 5 ? 'MHBasic' : 'MHPremium'] = true;
								if (curPlanName === '5G HOME PLUS' || curPlanName === 'LTE HOME PLUS')
									tooltipDiscounts[amountOff === 15 ? 'MHBasic' : 'MHPremium'] = true;
								if (!planPromoData.discounts[promoName]) planPromoData.discounts[promoName] = {};
								planPromoData.discounts[promoName][curPlanName] = amountOff;
							}
						}
					})
				}
				const promotionConstants = {
					MHBasic: 'MHBasic',
					AUTOPAY: 'AUTOPAY',
					MHPremium: 'MHPremium',
				};

				let tooltipContent = '';

				// if disc is not there, show lowPriceTooltip
				if (Object.keys(tooltipDiscounts).length === 0)
					tooltipContent = planFeature?.lowPriceTooltip;

				// if only autopay id there, showing premium disc only
				else if (tooltipDiscounts[promotionConstants.AUTOPAY] && !tooltipDiscounts[promotionConstants.MHPremium] && !tooltipDiscounts[promotionConstants.MHBasic])
					tooltipContent = `${planFeature?.toolTipHeading}${planFeature?.mhTooltip}`;

				// if only premium disc is there, showing autopay only
				else if (!tooltipDiscounts[promotionConstants.AUTOPAY] && !tooltipDiscounts[promotionConstants.MHBasic] && tooltipDiscounts[promotionConstants.MHPremium])
					tooltipContent = `${planFeature?.toolTipHeading}${planFeature?.autopayTooltip}`;

				// if only basic plan is there showing autopay and nonPremium disc
				else if (!tooltipDiscounts[promotionConstants.AUTOPAY] && tooltipDiscounts[promotionConstants.MHBasic] && !tooltipDiscounts[promotionConstants.MHPremium])
					tooltipContent = `${planFeature?.toolTipHeading}${planFeature?.mhNonPremiumTooltip}<br><br>${planFeature?.autopayTooltip}`;

				// if autopay and basic is there, show nonPremium disc
				else if (tooltipDiscounts[promotionConstants.AUTOPAY] && tooltipDiscounts[promotionConstants.MHBasic] && !tooltipDiscounts[promotionConstants.MHPremium])
					tooltipContent = `${planFeature?.toolTipHeading}${planFeature?.mhNonPremiumTooltip}`;


				if (discountPrice !== newPrice)
					curTileData.discountPrice = {
						leadingText: {
							children: planFeature?.lowPrice
						},
						price: discountPrice,
						term: month,
						tooltip: {
							children: <>{ReactHtmlParser(tooltipContent)}</>
						}
					}

				return curTileData;
			});

			// Midnight Plans Rendering Starts
			// All plans other than willow plans are considered as Mignight plans
			let midnightPlanIds = planIdList?.filter(planId => !willowPlanIds?.includes(planId));
			midnightPlanIds?.map(planId => {
				let midnightPlan = this.props?.exploreMMPlans[planId];
				console.log("midnight plan",midnightPlan)
				let planFeatureIds = this.props?.exploreMMPlans[midnightPlan.dataKey].featuresIncluded;
				let curPlanName = midnightPlan?.planDisplayName;
				let extrasBannerData = {};
				if (/plus/i.test(curPlanName)) extrasBannerData.children = bestValue;
				else extrasBannerData.fillColor = 'gray';
				let selectCTA = "Select";
				let selectedPlanData = selectedLine?.availablePlans?.find(plan => plan?.planId === planId);
				let oldPrice = parseCost(selectedPlanData?.totalCost);
				let newPrice = parseCost(selectedPlanData?.finalCost);
				let discountPrice = parseCost(selectedPlanData?.discountPrice);
				let featProducts = this.props?.exploreMMPlanProductData.products;
				
				// Review Details Overaly Data
				willowReviewDetailsData[planId] = {
					title: {
						children: curPlanName || ""
					},
					list: []
				}

				let newMidnightTile = {
					title: {
						children: curPlanName, //5G Home Plus
						width: "140px"
					},

					newPrice: {
						price: newPrice, //50
						term: month,
						superscript: starSymb
					},

					details: {
						textLink: {
							children: "Review Details", //planFeature?.reviewDetails,
							id: "review-details-link",
							[dataTrack]: `{"type":"link","name":"${curPlanName}-Review Details cta",
							"data":{
								"page":{
								"subFlow":("eVar64","${this.state.subFlowVal}"),
								},  
							}
								   }`,
							onClick: () => {
								omnitagging.setPathLinkName(`${curPlanName}-Review Details`);
								this.setState({ openReviewModal: true, selectedReviewDetailPlan: planId })
							}
						},
						items: planFeatureIds?.map(featId => {
							let curFeat = featProducts.filter(product => product?.productId === featId)?.[0];
							let curFeatIcon = curFeat?.icon;
							let curFeatTitle = curFeat?.description;
							let curFeatSubTitle = curFeat?.prodLongDescp;
							let curFeatDesc = curFeat?.groupDescription;

							// Plan tile feature data
							let itemObj = {
								icon: {
									name: curFeatIcon
								},
								title: {
									children: curFeatTitle //common.isPriceGuarantee(curFeatIcon) ? getPGText(priceSpoId) : ft
								}
							}
							if (curFeat?.groupId === "Speed") {
								itemObj.subtitle = { children: curFeatSubTitle };
							} else {
								curFeatSubTitle = curFeatSubTitle?.split("<br>")?.[0];
								curFeatDesc = curFeatDesc?.split(/<br>[ ]+<br>/)?.[1];
							}

							// Review Details Overlay data
							willowReviewDetailsData[planId].list.push({
								title: {
									children: curFeatTitle, // naCheck(common.isPriceGuarantee(curFeatIcon) ? getPGText(priceSpoId) : reviewTitle),
								},
								subtitle: {
									children: ReactHtmlParser(curFeatSubTitle),
								},
								helperText: {
									children: curFeatDesc,
								},
								icon: {
									name: curFeatIcon,
								},
							});

							return itemObj
						})
					},

					footer: {
						buttonGroup: {
							data: isSelectedPlan(planId) ?
								[{ children: 'Current plan', disabled: true }] :
								[{
									children: selectCTA,
									id: `${selectCTA}-willow-cta-btn`,
									[dataTrack]: `{"type":"link","name":"${`${selectCTA} plan ${curPlanName}`}-willow-cta-btn",
									"data":{
								   "page":{
								   "subFlow":("eVar64","${this.state.subFlowVal}"),
								   },  
								  }
								  }`,
									onClick: () => {
										this.setState({
											selectedPlan: selectPlanData[planId]
										}, () => this.onSelectPlanClick(planIdList.indexOf(planId), pickPlanLink, selectPlanData, planIdList))
									}
								},
								{
									children: compareCurrentPlan?.itemValue,
									id: `${compareCurrentPlan?.itemValue}-willow-cta-btn`,
									[dataTrack]: `{"type":"link","name":"${compareCurrentPlan?.itemValue}- plan comparison overlay",
						         	"data":{
							    	"page":{
								    "subFlow":("eVar64","${this.state.subFlowVal}"),
								    },  
							       }
								   }`,
									use: 'textLink',
									onClick: () => {
										omnitagging.setPathLinkName(`${compareCurrentPlan?.itemValue}- plan comparison overlay `);
										this.openComparePlansModal(selectedLine.currentLLPId, planId)
									}
								}],
						}
					},

					banner: extrasBannerData
				}

				if (oldPrice !== newPrice)
					newMidnightTile.oldPrice = {
						leadingText: {
							children: was,
						},
						price: oldPrice,
						term: month,
					};

				let planPromo = selectedPlanData?.promos;
				let tooltipDiscounts = {};
				if (planPromo?.length) {
					planPromo?.forEach(promo => {
						let promoName = promo?.promoDescription;
						if (discountTypes.includes(promoName)) {
							if (!planPromoData.isAvailable) planPromoData.isAvailable = true;
							let amountOff = parseCost(promo.amountOff);
							if (promoName === 'AUTOPAY') {
								tooltipDiscounts[promoName] = true;
								planPromoData.discounts[promoName] = amountOff;
							} else {
								if (curPlanName === '5G HOME' || curPlanName === 'LTE HOME')
									tooltipDiscounts[amountOff === 5 ? 'MHBasic' : 'MHPremium'] = true;
								if (curPlanName === '5G HOME PLUS' || curPlanName === 'LTE HOME PLUS')
									tooltipDiscounts[amountOff === 15 ? 'MHBasic' : 'MHPremium'] = true;
								if (!planPromoData.discounts[promoName]) planPromoData.discounts[promoName] = {};
								planPromoData.discounts[promoName][curPlanName] = amountOff;
							}
						}
					})
				}

				const promotionConstants = {
					MHBasic: 'MHBasic',
					AUTOPAY: 'AUTOPAY',
					MHPremium: 'MHPremium',
				};

				let tooltipContent = '';
				console.log(tooltipDiscounts,this.props?.tooltipData?.[0]?.items);
				let tooltip= {};
				if (Object.keys(tooltipDiscounts).length === 0) {
				this.props?.tooltipData?.[0]?.items
					.forEach(item =>{if(item.itemKey === 'tooltipHeader') tooltip[item.itemKey] = item.itemValue});
				}

				//if disc is not there, show lowPriceTooltip
				if (Object.keys(tooltipDiscounts).length === 0)
					{tooltipContent = tooltip.tooltipHeader}

				// // if only autopay id there, showing premium disc only
				// else if (tooltipDiscounts[promotionConstants.AUTOPAY] && !tooltipDiscounts[promotionConstants.MHPremium] && !tooltipDiscounts[promotionConstants.MHBasic])
				// 	tooltipContent = `${planFeature?.toolTipHeading}${planFeature?.mhTooltip}`;

				// // if only premium disc is there, showing autopay only
				// else if (!tooltipDiscounts[promotionConstants.AUTOPAY] && !tooltipDiscounts[promotionConstants.MHBasic] && tooltipDiscounts[promotionConstants.MHPremium])
				// 	tooltipContent = `${planFeature?.toolTipHeading}${planFeature?.autopayTooltip}`;

				// // if only basic plan is there showing autopay and nonPremium disc
				// else if (!tooltipDiscounts[promotionConstants.AUTOPAY] && tooltipDiscounts[promotionConstants.MHBasic] && !tooltipDiscounts[promotionConstants.MHPremium])
				// 	tooltipContent = `${planFeature?.toolTipHeading}${planFeature?.mhNonPremiumTooltip}<br><br>${planFeature?.autopayTooltip}`;

				// // if autopay and basic is there, show nonPremium disc
				// else if (tooltipDiscounts[promotionConstants.AUTOPAY] && tooltipDiscounts[promotionConstants.MHBasic] && !tooltipDiscounts[promotionConstants.MHPremium])
				// 	tooltipContent = `${planFeature?.toolTipHeading}${planFeature?.mhNonPremiumTooltip}`;


				if (discountPrice !== newPrice && !isNaN(discountPrice))
					newMidnightTile.discountPrice = {
						leadingText: {
							children: 'As low as'
						},
						price: discountPrice,
						term: month,
						tooltip: {
							children: <>{ReactHtmlParser(tooltipContent)}</>
						}
					}

				tileData.push(newMidnightTile);
			});
			// Midnight Plans Rendering End

			let sectionContentData = this.props?.planSection?.contents?.[0];
			let footerText = common.getItemValue(sectionContentData?.items, 'footerText_v1');

			let addressTxt = common.getItemValue(this.props?.addressDataItems, 'billingAddress')

			//371 changes starts here
			willowPlanSelectionData =
			{
				surface: "light",
				wayfinder: {
					title: { children: willowOverviewData?.qualified5GAddressHeader },
					subtitle: { children: addressTxt }
				},

				header: {
					title: {
						children: willowOverviewData?.pageHeader
					}
				},
				notification: this.props?.isSteupOffer && {
					title: steupHeader,
					subtitle: subtext,
					type: "info",
					hideCloseButton: true,
					buttonData: [
						{
							children: ctaTextStepUp,
							onClick: e => this.setState({ openStepUpModal: true })
						}
					]
				},
				tiles: tileData,

				helperText: [{
					children: willowOverviewData?.disclaimerText_aal,
					superscript: {
						children: '*'
					},
				}],

				footnote: {
					children: <>{footerText?.replace(`${impPlanInfo?.toLowerCase()} and ${impBroadbandInfo?.toLowerCase()}.`, ' ')}
						<TextLink data-testid="impPlanInfoWillowId" onClick={() => this.handleIPIClick()}>{impPlanInfo}</TextLink>{' and '}
						<TextLink data-testid="impBroadbandInfoWillowId" onClick={() => this.handleIBIClick()}>{impBroadbandInfo}</TextLink>.</>
				}
			}

			let discountOverlayContents = this.props?.planDiscountData && this.props.planDiscountData?.contents;
			let discountOverlayData = {};
			discountOverlayContents?.[0]?.items
				.forEach(item => discountOverlayData[item.itemKey] = item.itemValue);
			willowReviewDetailsData.closeBtn = discountOverlayData.planDiscountButton;
			let discountType = discountOverlayData?.discountType;
			if (!/PE|ME|RE/.test(discountType)) discountType = 'PE';

			if (/ME|RE/.test(discountType) || planPromoData.isAvailable) {
				const getCostMonth = (cost) => cost ? cost?.replace('/mo', '') : '';
				const discountMapObj = (title, footer, discountsArr, dollar) => {
					let retDiscountObj = {
						title: { children: title },
						items: discountsArr?.map(discount => ({
							title: { children: discount?.name },
							amount: { price: getCostMonth((dollar ? '-$' : '') + discount?.amount) }
						})) || []
					};
					retDiscountObj.items.push({ title: { children: footer } });
					return retDiscountObj;
				}

				let discountMapper = {
					ME: [discountMapObj(discountOverlayData?.employeeDiscountHeader, discountOverlayData?.employeeDiscountFooter,
						[{ name: discountOverlayData?.employeeDiscountPlans, amount: discountOverlayData?.employeeDiscountOffer }])],
					RE: [discountMapObj(discountOverlayData?.retireeDiscountHeader, discountOverlayData?.retireeDiscountFooter,
						[{ name: discountOverlayData?.retireeDiscountPlans, amount: discountOverlayData?.retireeDiscountOffers }])]
				};

				let displayPromos = Object.keys(planPromoData.discounts);

				let disData = (/ME|RE/.test(discountType)) ? discountMapper?.[discountType] :
					displayPromos.map(discount => {
						if (discount === 'M+H')
							return discountMapObj(discountOverlayData?.mobileandhomeDiscountHeader, discountOverlayData?.mobileandhomeFooter,
								Object.keys(planPromoData.discounts?.[discount]).map(disPlanName =>
									({ name: disPlanName, amount: planPromoData.discounts?.[discount]?.[disPlanName] })), true)
						else if (discount === 'AUTOPAY')
							return discountMapObj(discountOverlayData?.autoPayDiscountHeader, discountOverlayData?.autoPayDiscountFooter,
								[{ name: discountOverlayData?.autoPayDiscountPlans, amount: planPromoData.discounts?.[discount] }], true)
					})

				willowPlanSelectionData.header.subtitle = { children: willowOverviewData?.discountHeader };
				willowPlanSelectionData.header.content = {
					children: <>{willowOverviewData?.discountSubHeader?.replace('your', '')}{' '}
						<PlanDiscountsOverlay linkText="these discounts." disData={disData} discountOverlayData={discountOverlayData} subFlowVal={this.state.subFlowVal} /></>
				}
			}

			// FCC Broadband facts label 
			if (this.props.showBroadbandFlag) {
				willowBroadbandData = willowPlanIds;
				const broadbandFactsLabels = getFCCItemValue("FCC_BroadbandFacts_Labels");
				let jumpToText = getFCCItemValue("FCC_Jump_To");
				jumpToText = jumpToText?.split(broadbandFactsLabels);
				/* istanbul ignore next */
				const scrollToHeader = () => window.scrollTo({ top: document.getElementById("broadbandlabel-section-header")?.offsetTop - 25, behavior: "smooth" });
				willowPlanSelectionData.footnote = {
					children: <>{jumpToText?.[0]}<TextLink data-testid="jumpToBroadbandFactsLabels" onClick={scrollToHeader}>{broadbandFactsLabels}</TextLink>{jumpToText?.[1]}<br /><br />
						<TextLink data-testid="impPlanInfoWillowId" onClick={() => this.handleIPIClick()}>{impPlanInfo}</TextLink><br />
						<TextLink data-testid="impBroadbandInfoWillowId" onClick={() => this.handleIBIClick()}>{impBroadbandInfo}</TextLink>.</>
				}
			}

		}

		return (
			<>
				{this.state.openComparePlansModal && <ComparePlansModal
					showModal={this.state.openComparePlansModal}
					onClose={() => this.setState({ openComparePlansModal: false })}
					onOpenedChange={(e) => this.setState({ openComparePlansModal: e })}
					currentPlanId={this.state.currentPlanId}
					previousPlanId={this.state.previousPlanId}
					selectedLine={this.props.selectedLine}
					listViewSectionData={selectPlanData}
					products={this.props.productsData}
					hllp_headerContent={this.props.commonContent}
					currentFeatureIds={selectPlanData && selectPlanData[this.state.currentPlanId.dataKey] && selectPlanData[this.state.currentPlanId.dataKey]["featuresIncluded"]}
					previousFeatureIds={selectPlanData && selectPlanData[this.state.previousPlanId.dataKey] && selectPlanData[this.state.previousPlanId.dataKey]["featuresIncluded"]}
					pageType='planSelection'
					isNewCompareEnabled={this.props.isNewCompareEnabled}
					selectClick={handleSelect}
					isWillowPlanAvailable={this.isWillowPlanAvailable()}
				/>}
				{this.state.openPlanInfoModal && <PlanInfoModal
					showModal={this.state.openPlanInfoModal}
					onClose={() => this.setState({ openPlanInfoModal: false })}
					onOpenedChange={(e) => {
						this.setState({ openPlanInfoModal: e })
						omnitagging.setModelTagging(`important plan information`, 'planInfoID', e)
					}}
					ariaLabelText="PlanInfoModal"
					modalId="planInfoModalId"
					iframeUrl={mobileConfig && mobileConfig.impPlanInfoUrl}
				/>}
				{this.state.openStepUpModal && <StepUPModal
					showModal={this.state.openStepUpModal}
					onClose={() => this.setState({ openStepUpModal: false })}
					onOpenedChange={(e) => {
						this.setState({ openStepUpModal: e })
						omnitagging.setModelTagging(`stepUpModal`, 'stepUpModal', e)
					}}
					ariaLabelText="stepUpModal"
					modalId="stepUpModal"
					detailsHeader={stepupModalHeader}
					detailsModalBody={stepupModalBody}
					detailsFooter={stepupModalFooter}
				/>}
				{this.state.openBroadbandInfoModal && <PlanInfoModal
					showModal={this.state.openBroadbandInfoModal}
					onClose={() => this.setState({ openBroadbandInfoModal: false })}
					onOpenedChange={(e) => {
						this.setState({ openBroadbandInfoModal: e })
						omnitagging.setModelTagging(`important broadband information`, 'broadbandInfoID', e)
					}}
					ariaLabelText="BroadbandInfoModal"
					modalId="broadbandInfoModalId"
					iframeUrl={mobileConfig && mobileConfig.broadbandInfoUrl}
				/>}
				{this.isWillowPlanAvailable() ?
					<SelectPlansDiv>
						<WillowSelectPlan selectPlanData={willowPlanSelectionData} willowPlanIds={willowBroadbandData} showBroadbandFlag={this.props.showBroadbandFlag} />
						{this.state.openReviewModal && <ReviewDetailsModal
							opened={this.state.openReviewModal}
							onOpenedChange={(openState) => {
								if (!openState) this.setState({ openReviewModal: openState })
								omnitagging.setModelTagging(`${selectPlanData?.[this.state?.selectedReviewDetailPlan]?.planName} Review details overlay`, 'reviewDetailsOverlayId', openState);
							}}
							{...willowReviewDetailsData[this.state.selectedReviewDetailPlan]}
							buttonData={{
								primary: {
									children: willowReviewDetailsData?.closeBtn || "",
									id: "review-details-close-cta",
									[dataTrack]: `${selectPlanData?.[this.state?.selectedReviewDetailPlan]?.planName} Review details overlay close button cta`,
									onClick: () => this.setState({ openReviewModal: false })
								}
							}} />}
					</SelectPlansDiv> :
					<PlanSelectionWrapper data-testid="home5GTestId">
						{this.state.showPromoDisqModal && (
							<PromoDisqModal
								showModal={this.state.showPromoDisqModal}
								section={this.props.promoDisqSection}
								promoDisqContentType={this.state.promoDisqContentType}
								onContinue={() => { this.setState({ showPromoDisqModal: false }); this.onPickPlanClick(pickPlanLink) }}
								onClose={() => this.setState({ showPromoDisqModal: false })}
								onOpenedChange={e => {
									this.setState({ showPromoDisqModal: e })
									omnitagging.setModelTagging(`Plan discounts`, 'planDiscID', e)
								}}
							/>
						)}

						<ScrollableSection >
							<HeaderContent commonItems={this.props.commonItems} selectedLine={selectedLine} />
							<Line type="secondary" />

							{<div>
								<PlanSelectionInnerWrapper >
									{commonProductIds && commonProductIds.length > 0 && (
										<PlanIncludes style={{ display: 'inline-block' }} className="floatLeft">
											<TextRow header={true}><Title size="medium" bold>All plans include</Title></TextRow>
											<AccordionContainer>
												{commonProductIds.map((feature, idx) => {
													let product = this.props.productsData.find(p => p.productId == feature);
													let superscript = 0;
													if (product.superscript) {
														superscript = superscript + 1;
													}
													return (product ? <Accordion bottomLine={false} padding="compact" key={`${product.productId}${idx}common`}>
														<StyledAccordionItem>
															<StyledTitle>
																<AccordionSubTitle>
																	<Icon name="checkmark-alt" size="medium" color="#000000" />
																	<StyledSpan>{common.getProductName(product)}</StyledSpan>
																</AccordionSubTitle>
															</StyledTitle>
															<StyledAccordionDetail><Body size='small'><div dangerouslySetInnerHTML={{ __html: product.groupDescription }} /></Body></StyledAccordionDetail>
														</StyledAccordionItem>
													</Accordion> : null)
												})}
											</AccordionContainer>
										</PlanIncludes>
									)}

									<StyledContainerWrapper>
										{planIdList && planIdList.map((planId, idx) =>

											<StyledContainer key={idx}>
												<StyledDiv>
													{this.isButtonDisabled(planId, selectedLine, plansList) && selectPlanData[planId].planSelectionText &&
														<StyledWrapper>
															<CTAsRow>
																<JustKidWrapper>
																	<Body size="small"><span style={{ fontColor: '#ffffff' }} dangerouslySetInnerHTML={{ __html: selectPlanData[planId].planSelectionText  /* "Pick an Unlimited plan for your first line, then get Just Kids on another." */ }} /></Body>
																</JustKidWrapper>
															</CTAsRow> </StyledWrapper>}
													<PlanBanner
														titleWidth={this.state.activeTabIndex === 0 ? "220px" : "297px"}
														selectedPlan={selectPlanData[planId]}
														disableButtons={this.disableButtons(planId)}
														disableButtonsCompare={this.disableButtonsCompare(planId)}
														costSuffix={costSuffix}
														costDisclaimer={costDisclaimer}
														recommendText={recommendText}
														seeWhyLink={seeWhyLink}
														epcdHeaderMsg={epcdHeaderMsg}
														commonItems={items}
														planSectionActions={this.props.planSection.actions}
														compareCurrentPlan={compareCurrentPlan}
														selectedLine={selectedLine}
														selectedLinePlan={selectedLine.availablePlans.find(p => p.planId == planId)}
														compareCurrentClicked={() => this.openComparePlansModal(selectedLine.currentLLPId, planId)}

													/>
													<PlanDetailSection
														groupProductIds={selectPlanData[selectPlanData[planId] && selectPlanData[planId].dataKey] && selectPlanData[selectPlanData[planId] && selectPlanData[planId].dataKey].groupProducts}
														groupProductsData={this.props.groupProducts}
														productsData={this.props.productsData}
														comm onItems={this.props.commonItems}
														listViewSectionData={selectPlanData}
														planId={planId}
														handleViewDetailsHandler={(tabName) => this.handleViewDetails(tabName)}
														selectPlanButton={pickPlanLink && pickPlanLink.itemValue}
														compareButton={compareLink && compareLink.itemValue}
														disableButtons={disableButtons}
														onPrimaryButtonClick={() => this.showPromoDisq(pickPlanLink)}

													/>

													<StyledButton
														size="large"
														disabled={this.isButtonDisabled(planId, selectedLine, plansList)}
														use="secondary"
														width="100%"
														data-testid={`selectButton${planId}`}
														data-analyticstrack={`selectButton${planId}_cta`}
														data-track={`{"type":"link","name":"selectButton${planId}_cta",
										"data":{
											"page":{
											"subFlow":("eVar64","${this.state.subFlowVal}"),
											},  
										} 
										}`}
														data-clickstream={`selectButton${planId}_cta`}
														onClick={e => {
															this.setState({
																selectedPlan: selectPlanData[planIdList[idx]]
															},
																() => this.onSelectPlanClick(idx, pickPlanLink, selectPlanData, planIdList))
														}}>
														Select
													</StyledButton>

													<TextLinkCenter><TextLink
														data-testid={`compareToCurrentId${planId}`}
														disabled={this.isCompareLinkDisabled(planId, selectedLine, plansList)}
														data-analyticstrack={common.getClickStream(common.getActionKey(this.props.commonItems, "compareCurrentPlan"), this.props.planSectionActions)}
														data-track={`{"type":"link","name":"${common.getClickStream(common.getActionKey(this.props.commonItems, "compareCurrentPlan"))}",
										"data":{
											"page":{
											"subFlow":("eVar64","${this.state.subFlowVal}"),
											},  
										} 
										}`}
														data-clickstream={common.getClickStream(common.getActionKey(this.props.commonItems, "compareCurrentPlan"), this.props.planSectionActions)}
														onClick={() => this.openComparePlansModal(selectedLine.currentLLPId, planId)}
													>
														{compareCurrentPlan && compareCurrentPlan.itemValue}
													</TextLink></TextLinkCenter>

												</StyledDiv>
											</StyledContainer>
										)}
									</StyledContainerWrapper>
									<LinkButtonWrapper>
										<ImportantLinkRow paddingBottom={'16px'} marginRight={'16px'}>
											<DisclaimerText><TextLink onClick={() => this.handleIPIClick()}
												data-analyticstrack="explore-impPlanInfo-cta"
												data-track="explore-impPlanInfo-cta"
												data-clickstream="impPlanInfo-cta"
												data-testid="impPlanInfoId"
											>
												{impPlanInfo}</TextLink></DisclaimerText>
										</ImportantLinkRow>
										<ImportantLinkRow paddingBottom={'28px'}>
											<DisclaimerText><TextLink onClick={() => this.handleIBIClick()}
												data-analyticstrack="explore-impBroadbandInfo-cta"
												data-track="explore-impBroadbandInfo-cta"
												data-clickstream="impBroadbandInfo-cta"
												data-testid="impBroadbandInfoId"
											>
												{impBroadbandInfo}</TextLink></DisclaimerText>
										</ImportantLinkRow>
									</LinkButtonWrapper>
								</PlanSelectionInnerWrapper>
							</div>}

						</ScrollableSection>
					</PlanSelectionWrapper>}
			</>
		);
	}
}


const mapStateToProps = store => {
	return {
		isSteupOffer: store.PMD?.enableStepUpOffer,
		is5GHome: store.PMD?.planData?.is5GHome,
		willowPlanData: store.PMD?.willowPlanData,
		addressDataItems: store?.PMD?.sectionContentMetaData?.sections?.find(section => section?.sectionType === 'FiosServiceAvailableModalNonPremiumPlan')
			?.contents?.find(cnt => cnt?.contentIndex === '0')?.items
	};
};

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(actions, dispatch),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MMPlanSelection);

