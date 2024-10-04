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
    attr.value = 'd-message';
    messageNode.setAttributeNode(attr);

    // set a counter, when the next message happens, it will have a distance from the previous one
    const height = 70; // height, play around 
    //const messageList = document.getElementsByClassName('d-message');
    const messageList = document.getElementsByClassName('d-message') as HTMLCollectionOf<HTMLElement>;
    messageNode.style.top = `${messageList.length * height}px`;


    // reset each message's distance (Top value) to the top 
    function resetMsgTop() {
        for (let i = 0; i < messageList.length; i++) {
            messageList[i].style.top = `${i * height}px`;
        }
    }

    function handleRemove(result: any) {
        //app.unmount(messageNode);
        app.unmount();
        document.body.removeChild(messageNode);
        config.resolve(result)
        resetMsgTop();
    }


    // create a Vue instance and append to Body
    const app = createApp(message, {
        config,

        // remove the element, close message and unmount and remove from DOM
        remove(result: any) {
            handleRemove(result);
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