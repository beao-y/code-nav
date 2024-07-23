# SignalR 与服务端通信


## SignalR 客户端库
```
yarn add @microsoft/signalr
```

## SignalR 服务
```js
// SignalRService.js
import { HubConnectionBuilder } from '@microsoft/signalr';

class SignalRService {
  constructor(url) {
    this.url = url;
    this.connection = null;
    this.messages = [];
    this.onMessageReceived = null;
  }

  startConnection() {
    this.connection = new HubConnectionBuilder()
      .withUrl(this.url)
      .withAutomaticReconnect()
      .build();

    this.connection.start()
      .then(() => {
        console.log('SignalR connected');

        // 订阅服务器端发送的消息
        this.connection.on('ReceiveMessage', (user, message) => {
          this.messages.push({ user, message });
          if (this.onMessageReceived) {
            this.onMessageReceived(this.messages);
          }
        });
      })
      .catch(err => console.error('SignalR connection error:', err));
  }

  sendMessage(user, message) {
    if (!this.connection) return
    this.connection.invoke('SendMessage', user, message)
        .catch(err => console.error('Error sending message:', err));
    
  }

  async invoke(methodName, ...args) {
    if (!this.connection) return 
    try {
      await this.connection.invoke(methodName, ...args);
      console.log(`Invoked ${methodName} with args:`, args);
    } catch (error) {
      console.error(`Error invoking ${methodName}:`, error);
      throw error;
    }
  }

  // 可以添加其他需要的方法，如停止连接等
  setOnMessageReceived(callback) {
    this.onMessageReceived = callback;
  }
}

export default SignalRService;


```

## vue 组件中使用 SignalR 服务
```vue
<template>
  <div>
    <h1>SignalR Example</h1>
    <ul>
      <li v-for="(msg, index) in messages" :key="index">
        {{ msg.user }}: {{ msg.message }}
      </li>
    </ul>
    <form @submit.prevent="sendMessage">
      <input type="text" v-model="newMessage" placeholder="Type your message">
      <button type="submit">Send</button>
    </form>

    <button @click="handleInvoke">Invoke</button>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import SignalRService from './SignalRService';

export default {
  name: 'MyComponent',
  setup() {
    const signalRService = new SignalRService('/chatHub');
    const messages = ref([]);
    const newMessage = ref('');

    // 启动 SignalR 连接并订阅消息
    onMounted(() => {
      signalRService.startConnection();
      signalRService.setOnMessageReceived(updatedMessages => {
        messages.value = updatedMessages;
      });
    });

    // 发送消息，测试是否连接成功
    const sendMessage = () => {
      signalRService.sendMessage('user1', newMessage.value);
      newMessage.value = ''; // 清空输入框
    };

    const handleInvoke = () => {
      // SendMessage 后端方法名，第二个是传参
      signalRService.invoke("SendMessage", "Hello from Vue 3!");
    }

    return {
      messages,
      newMessage,
      sendMessage,
      handleInvoke
    };
  }
};
</script>

```

::: tip 注释
* `startConnection()` 方法启动 SignalR 连接，并在连接成功后订阅消息。
* `sendMessage(user, message)` 方法用于发送消息给 SignalR Hub。
* `setOnMessageReceived(callback)` 方法允许设置消息接收时的回调函数。
:::
