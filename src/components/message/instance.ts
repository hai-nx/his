import { createApp } from 'vue';
import message from './index.vue';

/**
 * Message instance operation
 * @param {*} cfg configuration
 */
function createInstance(cfg: any) {
    const config = cfg || {};
    
    // create a container and set its class
    const messageNode = document.createElement('div');
    const attr = document.createAttribute('class');
    attr.value = 'CO-message';
    messageNode.setAttributeNode(attr);

    // set a counter, when the next message happens, it will have a distance from the previous one
    const height = 70; // height, play around 
    const messageList = document.getElementsByClassName('CO-message');
    messageNode.style.top = `${messageList.length * height}px`;


    // reset each message's distance (Top value) to the top 
    // const resetMsgTop = () => {
    //     for (let i = 0; i < messageList.length; i++) {
    //         messageList[i].style.top = `${i * height}px`;
    //     }
    // };

    //function handleRemove() {
        //app.unmount(messageNode);
        //app.unmount();
        //document.body.removeChild(messageNode);
        //resetMsgTop();
    //};


    // create a Vue instance and append to Body
    const app = createApp(message, {
        config,

        // remove the element, close message and unmount and remove from DOM
        remove() {
            console.log('remove')
            // handleRemove();
        }
    });


    // mount the instance and append to end of Body
    //app.vm = app.mount(messageNode);
    app.mount(messageNode);
    document.body.appendChild(messageNode);

    // app.close = () => {
    //     handleRemove();
    // };
    return app;
}

export default createInstance;