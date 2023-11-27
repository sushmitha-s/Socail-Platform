import ActionTYpe from "../common/ActionType";
import MenuItem from "./MenuItem";
import { GET_MENU_DETAILS,set_MENU_DETAILS } from "./menu-store-constants";

interface Menu{
    items : MenuItem[]
    more_but : boolean
    less_but : boolean
}
const initialState: Menu= {
    items : [{
        name : 'Feed',
        icon_name : 'bi bi-rss',
        def_visible : true,
        visible : true ,
        link_to_direct : '\\feed'
    },{
        name : 'Chats',
        icon_name : 'bi bi-chat-left-text-fill',
        def_visible : true,
        visible : true ,
        link_to_direct : '\\chats'
    },
    {
        name : 'Videos',
        icon_name : 'bi bi-play-circle-fill',
        def_visible : true,
        visible : true ,
        link_to_direct : '\\videos'
    },
    {
        name : 'Groups',
        icon_name : 'bi bi-people-fill',
        def_visible : true,
        visible : true ,
        link_to_direct : '\\groups'
    },
    {
        name : 'Bookmarks',
        icon_name : 'bi bi-bookmark-fill',
        def_visible : true,
        visible : true ,
        link_to_direct : '\\bookmark'
    },
    {
        name : 'Questions',
        icon_name : 'bi bi-question-circle',
        def_visible : true,
        visible : true ,
        link_to_direct : '\\question'
    },
    {
        name : 'Jobs',
        icon_name : 'bi bi-bag',
        def_visible : true,
        visible : true ,
        link_to_direct : '\\job'
    },
    {
        name : 'Events',
        icon_name : 'bi bi-calendar-event',
        def_visible : true,
        visible : true ,
        link_to_direct : '\\event'
    },
    {
        name : 'Cources',
        icon_name : 'bi bi-mortarboard-fill',
        def_visible : true,
        visible : true ,
        link_to_direct : '\\cource'
    },
    {
        name : 'More1',
        icon_name : 'bi bi-bag',
        def_visible : false,
        visible : false ,
        link_to_direct : '\\more1'
    },
    {
        name : 'More2',
        icon_name : 'bi bi-calendar-event',
        def_visible : false,
        visible : false ,
        link_to_direct : '\\more2'
    },
    {
        name : 'More3',
        icon_name : 'bi bi-mortarboard-fill',
        def_visible : false,
        visible : false ,
        link_to_direct : '\\more3'
    }],
    more_but : true,
    less_but : false
}

const menuReducer = (store = initialState,action : ActionTYpe) => {
     switch(action.type){
        case set_MENU_DETAILS: {
            return {
                ...store,
                ...action.payload
            }
        }
        default : return store
     }
}

export default menuReducer;