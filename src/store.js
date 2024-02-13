import { createStore } from 'vuex'

export default createStore({
    //some of these are currently hardcoded for testing, but should eventually all be undefined, false, null or empty and obtained dynmically from backend
    state: {
    //the device number of the currently inserted wallet
    currentHW: 0,
    //a current HW of 0 designates no inserted Hardware Wallet
    setupCD: false,
    //setupStep variables 
    setupStep: 0,
    //setupStep is used as state between sessions and comes from the setup CD
    setupStage: 1,
    //setupStage is used as state for the progress bar component
    debug: [],
    showDebug: false,
    //debug is a print out of the debug console
    loadMessage: '',
    //load message is used to push live updates to the Loading Component
    errorMessage: '',
    //Error Message is used to display fatal errors on the Error page
    //data for creating a new Transaction
    address:[], balance:[], fiat_currency:null, datetime:null, fee:null, customFee:null, status: null, 
    sysPass:"",
    deviceList: null,
    node: false,
    },
    mutations:{//synchronous, alters data in state (commit)
        setDebug(state, value){
            state.debug.push(value)
        },
        setShowDebug(state, payload){
            state.showDebug = payload
        },
        setLoadMessage(state, payload){
            state.loadMessage = payload
        },
        setErrorMessage(state, payload){
            state.errorMessage = payload
        },
        setCurrentHW(state, payload){
            state.currentHW = payload
        },
        setSetupCD(state, payload){
            state.setupCD = payload
        },
        setSetupStep(state, payload){
            state.setupStep = payload
        },
        setSetupStage(state, payload){
            state.setupStage = payload
        },
        setSysPass(state, payload){
            state.sysPass = payload
        },
        setDeviceList(state, payload){
            state.deviceList = payload
        },
        setNode(state, payload){
            state.node = payload
        }
    },
    actions:{//asynchronous, used for external API calls (dispatch)
    },
    modules:{},
    getters:{ //get data from state, allows for changing/filtering
        getDebug(state){
            return state.debug
        },
        getShowDebug(state){
            return state.showDebug
        },
        getLoadMessage(state){
            return state.loadMessage
        },
        getErrorMessage(state){
            return state.errorMessage
        },
        getCurrentHW(state){
           return state.currentHW
        },
        getSetupCD(state){
            return state.setupCD
        },
        getSetupStep(state){
            return state.setupStep
        },
        getSetupStage(state){
            return state.setupStage
        },
        getSysPass(state){
            return state.sysPass
        },
        getDeviceList(state){
            return state.deviceList
        },
        getNode(state){
            return state.node
        }

    }
})

