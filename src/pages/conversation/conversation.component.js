import React, { Component } from 'react';
import { ContentWrapper } from '../../components/common'
import ConversationSidePanel from '../../components/conversation-side-panel/conve-side-panel.component';
import ConversationContentView from '../../components/conversation-cont-view/conversation-cont-view.component';

class Conversation extends Component {
    render() {
        return(
           <ContentWrapper>
               <ConversationSidePanel />
               <ConversationContentView />  
           </ContentWrapper> 
        )
    }
}

export default Conversation;